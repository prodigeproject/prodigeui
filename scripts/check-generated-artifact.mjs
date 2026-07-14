import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { basename, dirname, extname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { validateJsonSchema } from './lib/json-schema.mjs';

const scriptsDir = dirname(fileURLToPath(import.meta.url));
const repo = resolve(scriptsDir, '..');
const systemRoot = resolve(repo, 'prodigeui');
const criteriaDoc = JSON.parse(readFileSync(resolve(systemRoot, 'quality-gate/criteria.json'), 'utf8'));
const reportSchema = JSON.parse(readFileSync(resolve(systemRoot, 'quality-gate/report.schema.json'), 'utf8'));

const runtimeCriterionIds = new Set([
  'token-coverage', 'theme-consistency', 'contrast-normal', 'contrast-large', 'focus-visible', 'typography-scale', 'font-limit',
  'font-render-truth', 'weight-limit', 'reduce-motion', 'motion-duration', 'nav-item-limit',
  'touch-targets', 'absolute-position-containment', 'image-fallback-resilience', 'aria-roles',
  'runtime-integrity', 'responsive-overflow', 'meaningful-content-visibility', 'asset-load-integrity',
]);

const countMatches = (text, pattern) => [...text.matchAll(pattern)].length;
const result = (id, status, evidence, issue, recommendation) => ({
  id,
  status,
  evidence: Array.isArray(evidence) ? evidence : [String(evidence)],
  ...(issue ? { issue } : {}),
  ...(recommendation ? { recommendation } : {}),
});

async function loadChromium() {
  try {
    return (await import('playwright')).chromium;
  } catch (primaryError) {
    try {
      const benchmarkRequire = createRequire(resolve(repo, 'benchmark/package.json'));
      return benchmarkRequire('playwright').chromium;
    } catch {
      throw new Error(`Playwright is unavailable. Run npm install and npx playwright install chromium. ${primaryError.message}`);
    }
  }
}

function staticEvaluation(html) {
  const styleText = [...html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)].map(match => match[1]).join('\n');
  const rootBlocks = [...styleText.matchAll(/:root\s*\{([\s\S]*?)\}/gi)].map(match => match[1]).join('\n');
  const tokenDefinitions = countMatches(rootBlocks, /--[a-z0-9-]+\s*:/gi);
  const variableUses = countMatches(styleText, /var\(\s*--[a-z0-9-]+/gi);
  const rawColorsOutsideRoot = countMatches(styleText.replace(/:root\s*\{[\s\S]*?\}/gi, ''), /#[0-9a-f]{3,8}\b|(?:rgb|hsl|oklch|oklab)\(/gi);
  const mojibake = [...new Set(html.match(/[âÃÂ�]|ï¸/g) || [])];
  const hasReducedMotion = /prefers-reduced-motion\s*:\s*reduce/i.test(styleText) || !/(?:animation|transition)\s*:/i.test(styleText);
  const hasFocusVisible = /:focus-visible/i.test(styleText);
  const hasViewport = /<meta[^>]+name=["']viewport["']/i.test(html);
  const hasMain = /<main\b/i.test(html);
  const hasLanguage = /<html[^>]+lang=["'][^"']+/i.test(html);

  return {
    tokenDefinitions,
    variableUses,
    rawColorsOutsideRoot,
    mojibake,
    hasReducedMotion,
    hasFocusVisible,
    hasViewport,
    hasMain,
    hasLanguage,
  };
}

async function browserEvaluation(file) {
  const chromium = await loadChromium();
  const browser = await chromium.launch();
  const rows = [];
  try {
    for (const viewport of [{ name: 'desktop', width: 1440, height: 900 }, { name: 'mobile', width: 390, height: 844 }]) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, reducedMotion: 'reduce' });
      const errors = [];
      const external = [];
      page.on('console', message => { if (message.type() === 'error') errors.push(`console:${message.text()}`); });
      page.on('pageerror', error => errors.push(`page:${error.message}`));
      page.on('request', request => { if (/^https?:/i.test(request.url())) external.push(request.url()); });
      await page.goto(pathToFileURL(file).href, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(150);
      await page.keyboard.press('Tab');
      const focus = await page.evaluate(() => {
        const element = document.activeElement;
        if (!(element instanceof HTMLElement) || element === document.body) return { reachable: false, visible: false };
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return {
          reachable: rect.width > 0 && rect.height > 0,
          visible: style.outlineStyle !== 'none' || style.boxShadow !== 'none' || style.borderColor !== 'rgba(0, 0, 0, 0)',
        };
      });
      await page.evaluate(() => { if (document.activeElement instanceof HTMLElement) document.activeElement.blur(); });
      const probe = await page.evaluate(() => {
        const all = [...document.querySelectorAll('*')];
        const interactive = [...document.querySelectorAll('a,button,input,select,textarea,summary,[role="button"],[tabindex]:not([tabindex="-1"])')];
        const visible = element => {
          const style = getComputedStyle(element);
          const rect = element.getBoundingClientRect();
          return style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity) > .05 && rect.width > 0 && rect.height > 0;
        };
        const parseColor = value => value?.match(/[\d.]+/g)?.map(Number) || null;
        const background = element => {
          for (let current = element; current; current = current.parentElement) {
            const color = parseColor(getComputedStyle(current).backgroundColor);
            if (color && (color.length < 4 || color[3] > .92)) return color;
          }
          return [255, 255, 255, 1];
        };
        const luminance = color => {
          const channels = color.slice(0, 3).map(value => {
            const normalized = value / 255;
            return normalized <= .03928 ? normalized / 12.92 : ((normalized + .055) / 1.055) ** 2.4;
          });
          return .2126 * channels[0] + .7152 * channels[1] + .0722 * channels[2];
        };
        const contrast = (first, second) => {
          const a = luminance(first), b = luminance(second);
          return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);
        };
        const textElements = all.filter(element => visible(element) && [...element.childNodes].some(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim()));
        const contrastFailures = textElements.map(element => {
          const style = getComputedStyle(element);
          const foreground = parseColor(style.color);
          const ratio = foreground ? contrast(foreground, background(element)) : 0;
          const size = Number.parseFloat(style.fontSize);
          const weight = Number.parseInt(style.fontWeight, 10) || 400;
          const large = size >= 24 || (size >= 18.66 && weight >= 700);
          return { text: element.textContent.trim().slice(0, 50), ratio, large };
        }).filter(item => item.ratio < (item.large ? 3 : 4.5));
        const hiddenMeaningful = all.filter(element => /^(H[1-6]|P|ARTICLE|SECTION|MAIN)$/.test(element.tagName) && !visible(element) && element.textContent.trim().length > 20).length;
        const brokenMedia = [...document.images].filter(image => !image.complete || !image.naturalWidth).length;
        const smallTargetItems = interactive.filter(visible).map(element => {
          const rect = element.getBoundingClientRect();
          return { text: (element.textContent || element.getAttribute('aria-label') || element.tagName).trim().slice(0, 36), width: Math.round(rect.width), height: Math.round(rect.height) };
        }).filter(item => item.width < 44 || item.height < 44);
        const absoluteUncontained = all.filter(element => {
          const style = getComputedStyle(element);
          if (style.position !== 'absolute') return false;
          const parent = element.offsetParent;
          return !parent || parent === document.body || parent === document.documentElement;
        }).length;
        const imageFallbackFailures = [...document.images].filter(image => {
          const own = parseColor(getComputedStyle(image).backgroundColor);
          const parent = image.parentElement ? parseColor(getComputedStyle(image.parentElement).backgroundColor) : null;
          const opaque = color => color && (color.length < 4 || color[3] > .05);
          return !opaque(own) && !opaque(parent);
        }).length;
        const ariaFailures = interactive.filter(element => {
          if (!visible(element)) return false;
          if (/^(A|BUTTON|INPUT|SELECT|TEXTAREA|SUMMARY)$/.test(element.tagName)) return false;
          return !element.getAttribute('role');
        }).length;
        const visibleText = textElements.map(element => getComputedStyle(element));
        const families = [...new Set(visibleText.map(style => style.fontFamily.split(',')[0].trim().replaceAll('"', '')))];
        const weights = [...new Set(visibleText.map(style => style.fontWeight))];
        const weightBands = [...new Set(weights.map(value => Math.round((Number.parseInt(value, 10) || 400) / 100) * 100))];
        const h1 = document.querySelector('h1');
        const h1Style = h1 ? getComputedStyle(h1) : null;
        const bodyStyle = getComputedStyle(document.body);
        const h1Rect = h1?.getBoundingClientRect();
        const h1Clipped = !!h1 && ['hidden', 'clip'].some(value => [h1Style.overflow, h1Style.overflowX, h1Style.overflowY].includes(value)) && (h1.scrollWidth > h1.clientWidth + 1 || h1.scrollHeight > h1.clientHeight + 2);
        const longReducedMotion = all.filter(element => {
          if (!visible(element)) return false;
          const style = getComputedStyle(element);
          const durations = `${style.animationDuration},${style.transitionDuration}`.split(',').map(value => value.trim()).map(value => value.endsWith('ms') ? Number.parseFloat(value) : Number.parseFloat(value) * 1000);
          return Math.max(0, ...durations.filter(Number.isFinite)) > 100 && style.animationIterationCount !== 'infinite';
        }).length;
        return {
          overflow: Math.max(0, document.documentElement.scrollWidth - innerWidth),
          hiddenMeaningful,
          brokenMedia,
          smallTargets: smallTargetItems.length,
          smallTargetItems: smallTargetItems.slice(0, 8),
          absoluteUncontained,
          imageFallbackFailures,
          ariaFailures,
          contrastNormal: contrastFailures.filter(item => !item.large).length,
          contrastLarge: contrastFailures.filter(item => item.large).length,
          contrastNormalItems: contrastFailures.filter(item => !item.large).slice(0, 6),
          contrastLargeItems: contrastFailures.filter(item => item.large).slice(0, 6),
          families,
          weights,
          weightBands,
          h1Family: h1Style?.fontFamily || '',
          hierarchyRatio: h1Style ? Number.parseFloat(h1Style.fontSize) / Number.parseFloat(bodyStyle.fontSize) : 0,
          h1Clipped,
          longReducedMotion,
          navItems: document.querySelectorAll('nav a, nav button').length,
        };
      });
      rows.push({ viewport: viewport.name, focus, errors, external, ...probe });
      await page.close();
    }

    const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'no-preference' });
    await page.goto(pathToFileURL(file).href, { waitUntil: 'networkidle' });
    const discreteOverCap = await page.evaluate(() => [...document.querySelectorAll('*')].filter(element => {
      const style = getComputedStyle(element);
      if (style.animationIterationCount === 'infinite') return false;
      const values = `${style.animationDuration},${style.transitionDuration}`.split(',').map(value => value.trim()).map(value => value.endsWith('ms') ? Number.parseFloat(value) : Number.parseFloat(value) * 1000);
      return Math.max(0, ...values.filter(Number.isFinite)) > 1500;
    }).length);
    rows.push({ viewport: 'motion', discreteOverCap });
    await page.close();
  } finally {
    await browser.close();
  }
  return rows;
}

export async function evaluateArtifact(input, { reviewPath } = {}) {
  const file = resolve(input);
  if (!existsSync(file)) throw new Error(`Generated artifact does not exist: ${input}`);
  if (extname(file).toLowerCase() !== '.html') throw new Error(`Unsupported generated artifact type: ${input}. Current executable gate accepts HTML.`);
  const html = readFileSync(file, 'utf8');
  const staticProbe = staticEvaluation(html);
  const browserRows = await browserEvaluation(file);
  const viewportRows = browserRows.filter(row => row.viewport !== 'motion');
  const motionRow = browserRows.find(row => row.viewport === 'motion');
  const automated = new Map();
  const put = (id, pass, evidence, issue, recommendation, flag = false) => automated.set(id, result(id, pass ? 'pass' : (flag ? 'flag' : 'fail'), evidence, pass ? null : issue, pass ? null : recommendation));

  put('token-coverage', staticProbe.tokenDefinitions >= 6 && staticProbe.variableUses >= 6,
    `localTokens=${staticProbe.tokenDefinitions}; variableUses=${staticProbe.variableUses}; uniqueRawColors=${staticProbe.rawColorsOutsideRoot}`,
    'The artifact lacks a project-local semantic token layer or does not consume it.',
    'Declare repeated visual roles as custom properties and consume them with var(); raw literals are allowed only at the token-definition boundary or for unique generated artwork.');
  put('theme-consistency', staticProbe.tokenDefinitions >= 6 && staticProbe.variableUses >= 6,
    `localTokens=${staticProbe.tokenDefinitions}; variableUses=${staticProbe.variableUses}`,
    'The rendered artifact is not driven by a coherent local theme token set.', 'Define and consume one local theme role set.');
  put('runtime-integrity', staticProbe.mojibake.length === 0 && staticProbe.hasViewport && staticProbe.hasMain && staticProbe.hasLanguage && viewportRows.every(row => !row.errors.length && !row.external.length),
    [`mojibake=${staticProbe.mojibake.join('|') || 'none'}`, `viewportMeta=${staticProbe.hasViewport}`, `main=${staticProbe.hasMain}`, `lang=${staticProbe.hasLanguage}`, ...viewportRows.map(row => `${row.viewport}:errors=${row.errors.length},external=${row.external.length}`)],
    'Runtime, document semantics, encoding, or deterministic local-asset integrity failed.', 'Fix console errors, encoding, document metadata, and unexpected external requests.');
  put('responsive-overflow', viewportRows.every(row => row.overflow === 0), viewportRows.map(row => `${row.viewport}:overflow=${row.overflow}`), 'Horizontal overflow was detected.', 'Repair the overflowing layout at the failing viewport.');
  put('meaningful-content-visibility', viewportRows.every(row => row.hiddenMeaningful === 0), viewportRows.map(row => `${row.viewport}:hidden=${row.hiddenMeaningful}`), 'Meaningful content is hidden in its final rendered state.', 'Ensure entrance/reduced-motion states end visible.');
  put('asset-load-integrity', viewportRows.every(row => row.brokenMedia === 0), viewportRows.map(row => `${row.viewport}:brokenMedia=${row.brokenMedia}`), 'Broken media was detected.', 'Bundle or correctly reference every required asset.');
  put('contrast-normal', viewportRows.every(row => row.contrastNormal === 0), viewportRows.map(row => `${row.viewport}:failures=${row.contrastNormal};samples=${row.contrastNormalItems.map(item => `${item.text}(${item.ratio.toFixed(2)})`).join('|') || 'none'}`), 'Normal text contrast below 4.5:1 was detected.', 'Assign explicit foreground/background roles with at least 4.5:1 contrast.');
  put('contrast-large', viewportRows.every(row => row.contrastLarge === 0), viewportRows.map(row => `${row.viewport}:failures=${row.contrastLarge};samples=${row.contrastLargeItems.map(item => `${item.text}(${item.ratio.toFixed(2)})`).join('|') || 'none'}`), 'Large text contrast below 3:1 was detected.', 'Repair the large-text surface pair.');
  put('focus-visible', staticProbe.hasFocusVisible && viewportRows.every(row => row.focus.reachable && row.focus.visible), [`selector=${staticProbe.hasFocusVisible}`, ...viewportRows.map(row => `${row.viewport}:reachable=${row.focus.reachable},visible=${row.focus.visible}`)], 'Keyboard focus is missing or not visibly styled.', 'Add a high-contrast :focus-visible treatment and preserve tab reachability.');
  put('typography-scale', viewportRows.every(row => row.hierarchyRatio >= 1.8 && !row.h1Clipped), viewportRows.map(row => `${row.viewport}:h1/body=${row.hierarchyRatio.toFixed(2)},clipped=${row.h1Clipped}`), 'The primary type hierarchy is weak or clipped.', 'Use a coherent display/body scale and verify rendered clipping.');
  put('font-limit', viewportRows.every(row => row.families.length <= 3), viewportRows.map(row => `${row.viewport}:families=${row.families.join('|')}`), 'More than two primary faces plus one annotation face are rendered.', 'Consolidate typography by functional role.');
  put('font-render-truth', viewportRows.every(row => row.h1Family && !/^\s*(?:serif|sans-serif)\s*$/i.test(row.h1Family)), viewportRows.map(row => `${row.viewport}:h1=${row.h1Family}`), 'Display typography silently fell back to a generic family.', 'Load the intended display face and verify the computed family.');
  put('weight-limit', viewportRows.every(row => row.weightBands.length <= 4), viewportRows.map(row => `${row.viewport}:values=${row.weights.join('|')};bands=${row.weightBands.join('|')}`), 'More than four perceptual font-weight bands are rendered.', 'Reduce weight bands and strengthen hierarchy with size, measure, and role.');
  put('reduce-motion', staticProbe.hasReducedMotion && viewportRows.every(row => row.longReducedMotion === 0), [`cssFallback=${staticProbe.hasReducedMotion}`, ...viewportRows.map(row => `${row.viewport}:longMotion=${row.longReducedMotion}`)], 'Reduced-motion mode still runs long discrete transitions.', 'Disable decorative motion and cap essential opacity transitions at 100ms.');
  put('motion-duration', motionRow?.discreteOverCap === 0, `discreteOver1500ms=${motionRow?.discreteOverCap ?? 'unknown'}`, 'A discrete motion sequence exceeds the expressive maximum.', 'Cap product sequences at 600ms and expressive sequences at 1500ms; exempt only continuous ambient loops.');
  put('nav-item-limit', viewportRows.every(row => row.navItems <= 7), viewportRows.map(row => `${row.viewport}:items=${row.navItems}`), 'Primary navigation exceeds seven items.', 'Group or progressively disclose secondary destinations.', true);
  put('touch-targets', viewportRows.every(row => row.smallTargets === 0), viewportRows.map(row => `${row.viewport}:small=${row.smallTargets};samples=${row.smallTargetItems.map(item => `${item.text}[${item.width}x${item.height}]`).join('|') || 'none'}`), 'Interactive targets smaller than 44px were detected.', 'Increase the rendered target box to at least 44x44px.');
  put('absolute-position-containment', viewportRows.every(row => row.absoluteUncontained === 0), viewportRows.map(row => `${row.viewport}:uncontained=${row.absoluteUncontained}`), 'Absolute elements without an explicit positioned container were detected.', 'Assign position:relative to the intended containing block.');
  put('image-fallback-resilience', viewportRows.every(row => row.imageFallbackFailures === 0), viewportRows.map(row => `${row.viewport}:missingFallback=${row.imageFallbackFailures}`), 'Images lack an owned fallback surface.', 'Give image containers a semantic background color.', true);
  put('aria-roles', viewportRows.every(row => row.ariaFailures === 0), viewportRows.map(row => `${row.viewport}:failures=${row.ariaFailures}`), 'Custom interactive elements lack semantic roles.', 'Prefer native controls or add the appropriate role and keyboard behavior.');

  const review = reviewPath ? JSON.parse(readFileSync(resolve(reviewPath), 'utf8')) : { criteria: [] };
  if (review.artifact && review.artifact !== '*' && basename(review.artifact) !== basename(file)) {
    throw new Error(`Manual review targets ${review.artifact}, not ${basename(file)}`);
  }
  const reviewed = new Map((review.criteria || []).map(item => [item.id, item]));
  const criteriaResults = criteriaDoc.criteria.map(criterion => {
    if (criterion.type === 'automated') {
      if (!automated.has(criterion.id)) return result(criterion.id, 'fail', 'No executable evaluator is registered.', 'Automated criterion is disconnected.', 'Implement and register its evaluator.');
      return automated.get(criterion.id);
    }
    if (reviewed.has(criterion.id)) return reviewed.get(criterion.id);
    return result(criterion.id, 'not-evaluable', 'Manual review was not supplied.', null, 'Provide --review with evidence for every manual criterion.');
  });
  const summary = {
    pass: criteriaResults.filter(item => item.status === 'pass').length,
    fail: criteriaResults.filter(item => item.status === 'fail').length,
    flag: criteriaResults.filter(item => item.status === 'flag').length,
    notEvaluable: criteriaResults.filter(item => item.status === 'not-evaluable').length,
  };
  const overall = summary.fail ? 'fail' : (summary.notEvaluable ? 'incomplete' : 'pass');
  const report = { artifact: basename(file), generatedAt: new Date().toISOString(), overall, summary, criteria: criteriaResults };
  const schemaErrors = validateJsonSchema(report, reportSchema);
  if (schemaErrors.length) throw new Error(`Generated quality report violates report.schema.json:\n${schemaErrors.join('\n')}`);
  return report;
}

async function main() {
  const args = process.argv.slice(2);
  const input = args[0];
  const reviewIndex = args.indexOf('--review');
  const reviewPath = reviewIndex >= 0 ? args[reviewIndex + 1] : undefined;
  if (!input) {
    console.error('Usage: node scripts/check-generated-artifact.mjs <artifact.html> [--review manual-review.json]');
    process.exit(2);
  }
  try {
    const report = await evaluateArtifact(input, { reviewPath });
    console.log(JSON.stringify(report, null, 2));
    process.exit(report.overall === 'pass' ? 0 : 1);
  } catch (error) {
    console.error(`[FAIL] ${error.message}`);
    process.exit(1);
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();

export { runtimeCriterionIds };
