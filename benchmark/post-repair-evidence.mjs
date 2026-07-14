import { chromium } from 'playwright';
import { resolve } from 'node:path';
import { writeFileSync } from 'node:fs';

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

const targets = [
  {
    key: 'flowai-baseline',
    file: 'flowai-model-robust-rerun.html',
    baseline: true,
  },
  {
    key: 'flowai-post-repair',
    file: 'flowai-post-canonical-repair.html',
    fontNeedle: /Recursive Local/i,
    closingSelector: '.final',
    closingToken: '--orange',
  },
  {
    key: 'nova-baseline',
    file: 'nova-model-robust-rerun.html',
    baseline: true,
  },
  {
    key: 'nova-post-repair',
    file: 'nova-post-canonical-repair.html',
    fontNeedle: /Arial Black|Segoe UI Black|Arial Narrow/i,
    engine: true,
    closingSelector: '.contact',
    closingToken: '--cream',
  },
];

const browser = await chromium.launch({ headless: true });
const rows = [];
let failed = false;

for (const target of targets) {
  for (const viewport of viewports) {
    const page = await browser.newPage({
      viewport: { width: viewport.width, height: viewport.height },
      reducedMotion: 'reduce',
    });
    const errors = [];
    const externalRequests = new Set();
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(`console:${message.text()}`);
    });
    page.on('pageerror', (error) => errors.push(`page:${error.message}`));
    page.on('request', (request) => {
      if (/^https?:/i.test(request.url())) externalRequests.add(request.url());
    });
    if (target.baseline) {
      await page.route(/^https?:/i, (route) => route.abort());
    }

    const url = `file:///${resolve(target.file).replaceAll('\\', '/')}`;
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(500);

    await page.screenshot({
      path: `shot-${target.key}-${viewport.name}-hero.png`,
      fullPage: false,
    });
    await page.screenshot({
      path: `shot-${target.key}-${viewport.name}-full.png`,
      fullPage: true,
    });

    await page.keyboard.press('Tab');
    const tabFocus = await page.evaluate(() => {
      const active = document.activeElement;
      const box = active?.getBoundingClientRect();
      return {
        tag: active?.tagName || 'none',
        text: active?.textContent?.trim().slice(0, 40) || '',
        visible: Boolean(box && box.width > 0 && box.height > 0),
      };
    });

    let disclosureKeyboard = 'n/a';
    if (await page.locator('summary').count()) {
      const summary = page.locator('summary').first();
      await summary.focus();
      await page.keyboard.press('Enter');
      disclosureKeyboard = await summary.evaluate((element) =>
        element.parentElement?.open ? 'opened' : 'failed',
      );
      await page.keyboard.press('Enter');
    }

    const probe = await page.evaluate(({ engine, closingSelector, closingToken }) => {
      const all = [...document.querySelectorAll('*')];
      const interactive = [
        ...document.querySelectorAll(
          'a,button,input,select,textarea,summary,[tabindex]:not([tabindex="-1"])',
        ),
      ];
      const visible = (element) => {
        const style = getComputedStyle(element);
        const box = element.getBoundingClientRect();
        return (
          style.display !== 'none' &&
          style.visibility !== 'hidden' &&
          Number(style.opacity) > 0.05 &&
          box.width > 0 &&
          box.height > 0
        );
      };
      const targetFailures = interactive
        .filter(visible)
        .map((element) => {
          const box = element.getBoundingClientRect();
          return {
            tag: element.tagName,
            text: element.textContent.trim().slice(0, 32),
            width: Math.round(box.width),
            height: Math.round(box.height),
          };
        })
        .filter(({ width, height }) => width < 44 || height < 44);
      const textClipping = all
        .filter((element) => /^(H[1-6]|P|A|BUTTON|SUMMARY|LI)$/.test(element.tagName))
        .filter(visible)
        .filter((element) => {
          const style = getComputedStyle(element);
          const clippedOverflow = /(hidden|clip)/.test(`${style.overflowX} ${style.overflowY}`);
          return (
            clippedOverflow &&
            (element.scrollWidth > element.clientWidth + 1 ||
              element.scrollHeight > element.clientHeight + 2)
          );
        })
        .map((element) => element.textContent.trim().slice(0, 45));
      const colors = new Map();
      const radii = new Map();
      for (const element of all) {
        const style = getComputedStyle(element);
        const box = element.getBoundingClientRect();
        const area = Math.max(0, box.width * box.height);
        if (!area) continue;
        colors.set(style.backgroundColor, (colors.get(style.backgroundColor) || 0) + area);
        radii.set(style.borderRadius, (radii.get(style.borderRadius) || 0) + 1);
      }
      const top = (map, count = 8) => [...map].sort((a, b) => b[1] - a[1]).slice(0, count);
      const display = document.querySelector('h1,[data-display]');
      const closing = closingSelector ? document.querySelector(closingSelector) : null;
      const tokenProbe = document.createElement('span');
      tokenProbe.style.color = closingToken ? `var(${closingToken})` : 'transparent';
      document.body.append(tokenProbe);
      const closingContinuity = closing
        ? getComputedStyle(closing).backgroundColor === getComputedStyle(tokenProbe).color
        : 'n/a';
      tokenProbe.remove();
      return {
        documentHeight: document.documentElement.scrollHeight,
        horizontalOverflow: Math.max(0, document.documentElement.scrollWidth - innerWidth),
        nodeCount: all.length,
        maxDepth: all.reduce((maximum, element) => {
          let depth = 0;
          let parent = element;
          while ((parent = parent.parentElement)) depth += 1;
          return Math.max(maximum, depth);
        }, 0),
        brokenImages: [...document.images].filter(
          (image) => !image.complete || !image.naturalWidth,
        ).length,
        media: {
          images: document.images.length,
          videos: document.querySelectorAll('video').length,
          canvas: document.querySelectorAll('canvas').length,
        },
        fixedSticky: all.filter((element) =>
          ['fixed', 'sticky'].includes(getComputedStyle(element).position),
        ).length,
        targetFailures,
        textClipping,
        fontsStatus: document.fonts.status,
        fontFaces: [...document.fonts].map((face) => `${face.family}:${face.status}`),
        displayFont: display ? getComputedStyle(display).fontFamily : '',
        closingContinuity,
        paletteArea: top(colors),
        radii: top(radii),
        libraries: {
          gsap: Boolean(window.gsap),
          three: Boolean(window.THREE),
          lenis: Boolean(window.Lenis),
          motion: Boolean(window.Motion),
        },
        engineReady: engine
          ? document.documentElement.dataset.engineReady || 'missing'
          : 'n/a',
      };
    }, {
      engine: target.engine,
      closingSelector: target.closingSelector,
      closingToken: target.closingToken,
    });

    const row = {
      target: target.key,
      viewport: viewport.name,
      baseline: Boolean(target.baseline),
      ...probe,
      tabFocus,
      disclosureKeyboard,
      externalRequests: [...externalRequests],
      errors,
    };
    rows.push(row);

    if (!target.baseline) {
      const targetFailed =
        probe.horizontalOverflow > 0 ||
        probe.brokenImages > 0 ||
        probe.targetFailures.length > 0 ||
        probe.textClipping.length > 0 ||
        probe.fontsStatus !== 'loaded' ||
        !target.fontNeedle.test(probe.displayFont) ||
        !tabFocus.visible ||
        disclosureKeyboard === 'failed' ||
        externalRequests.size > 0 ||
        errors.length > 0 ||
        (target.closingSelector && probe.closingContinuity !== true) ||
        (target.engine && probe.engineReady !== 'true');
      failed ||= targetFailed;
    }

    console.log(
      `${target.key}/${viewport.name}: overflow=${probe.horizontalOverflow}` +
        ` clip=${probe.textClipping.length}` +
        ` target=${probe.targetFailures.length}` +
        ` fonts=${probe.fontsStatus}` +
        ` external=${externalRequests.size}` +
        ` errors=${errors.length}` +
        ` focus=${tabFocus.tag}` +
        ` disclosure=${disclosureKeyboard}` +
        ` closing=${probe.closingContinuity}` +
        ` engine=${probe.engineReady}`,
    );
    await page.close();
  }
}

await browser.close();
writeFileSync(
  'post-repair-evidence.json',
  JSON.stringify({ generatedAt: new Date().toISOString(), rows }, null, 2),
);

if (failed) {
  console.error('[FAIL] post-repair evidence gate');
  process.exit(1);
}
console.log('[PASS] post-repair evidence gate');
