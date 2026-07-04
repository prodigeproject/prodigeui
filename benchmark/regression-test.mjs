/**
 * ProdigeUI Anti-Regression Screenshot Test
 * 
 * Captures screenshots of ALL benchmark HTML files at desktop (1440px) and mobile (390px).
 * Outputs to benchmark/screenshots/{timestamp}/ for manual comparison.
 * 
 * Usage:
 *   node regression-test.mjs              # screenshot all benchmarks
 *   node regression-test.mjs --compare    # generate comparison HTML report
 * 
 * Prerequisites: playwright-core installed (already in package.json)
 */

import { chromium } from 'playwright';
import { readdirSync, mkdirSync, existsSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Config
const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 }
};
const SETTLE_MS = 2800; // fonts + entrance animations settle time
const TIMEOUT = 30000;

// Find all benchmark HTML files
function getBenchmarkFiles() {
  const files = readdirSync(__dirname)
    .filter(f => f.endsWith('.html') && f !== 'index.html')
    .sort();
  return files;
}

// Generate timestamp directory name
function getOutputDir() {
  const now = new Date();
  const ts = now.toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const dir = path.join(__dirname, 'screenshots', ts);
  mkdirSync(dir, { recursive: true });
  return dir;
}

// Screenshot a single file at both viewports
async function screenshotFile(browser, file, outputDir) {
  const url = 'file:///' + path.resolve(__dirname, file).replace(/\\/g, '/');
  const name = file.replace('.html', '');

  for (const [viewport, size] of Object.entries(VIEWPORTS)) {
    const page = await browser.newPage({
      viewport: size,
      deviceScaleFactor: 1
    });

    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: TIMEOUT }).catch(() => {});
      await page.waitForTimeout(SETTLE_MS);

      // Hero shot (viewport only)
      await page.screenshot({
        path: path.join(outputDir, `${name}--${viewport}--hero.png`),
        fullPage: false
      });

      // Full page shot
      await page.screenshot({
        path: path.join(outputDir, `${name}--${viewport}--full.png`),
        fullPage: true
      });

      console.log(`  ✓ ${name} [${viewport}]`);
    } catch (err) {
      console.log(`  ✗ ${name} [${viewport}] — ${err.message}`);
    } finally {
      await page.close();
    }
  }
}

// Generate comparison HTML report
function generateReport(outputDir, files) {
  const pairs = [];

  // Group with/without pairs
  const withFiles = files.filter(f => f.includes('-with-prodigeui'));
  for (const withFile of withFiles) {
    const base = withFile.replace('-with-prodigeui', '');
    const withoutFile = files.find(f => f === base.replace('.html', '-without-prodigeui.html'));
    if (withoutFile) {
      pairs.push({
        name: base.replace('.html', ''),
        with: withFile.replace('.html', ''),
        without: withoutFile.replace('.html', '')
      });
    }
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>ProdigeUI Regression Report</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:system-ui;background:#111;color:#eee;padding:40px}
  h1{font-size:2rem;margin-bottom:8px}
  .meta{color:#888;margin-bottom:40px;font-size:.9rem}
  .pair{margin-bottom:60px;border-bottom:1px solid #333;padding-bottom:40px}
  .pair h2{font-size:1.3rem;margin-bottom:20px;color:#b8ff3a}
  .compare{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  .compare-item{background:#1a1a1a;border-radius:12px;overflow:hidden;border:1px solid #333}
  .compare-item h3{padding:12px 16px;font-size:.85rem;color:#888;border-bottom:1px solid #333}
  .compare-item img{width:100%;display:block}
  .all-shots{margin-top:60px}
  .all-shots h2{font-size:1.5rem;margin-bottom:20px}
  .shot-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px}
  .shot-card{background:#1a1a1a;border-radius:12px;overflow:hidden;border:1px solid #333}
  .shot-card img{width:100%;display:block}
  .shot-card p{padding:10px 14px;font-size:.8rem;color:#888}
</style>
</head>
<body>
<h1>ProdigeUI Regression Report</h1>
<p class="meta">Generated: ${new Date().toISOString()} | Files: ${files.length} | Viewports: desktop (1440px), mobile (390px)</p>

${pairs.map(p => `
<section class="pair">
  <h2>${p.name}</h2>
  <div class="compare">
    <div class="compare-item">
      <h3>WITHOUT ProdigeUI</h3>
      <img src="${p.without}--desktop--hero.png" alt="${p.without} desktop hero">
    </div>
    <div class="compare-item">
      <h3>WITH ProdigeUI</h3>
      <img src="${p.with}--desktop--hero.png" alt="${p.with} desktop hero">
    </div>
  </div>
</section>
`).join('')}

<section class="all-shots">
  <h2>All Screenshots</h2>
  <div class="shot-grid">
    ${files.map(f => {
      const name = f.replace('.html', '');
      return `<div class="shot-card"><img src="${name}--desktop--hero.png" alt="${name}"><p>${name}</p></div>`;
    }).join('')}
  </div>
</section>
</body>
</html>`;

  writeFileSync(path.join(outputDir, 'report.html'), html);
  console.log(`\n📄 Report: ${path.join(outputDir, 'report.html')}`);
}

// Main
async function main() {
  const files = getBenchmarkFiles();
  console.log(`\n🔍 Found ${files.length} benchmark files\n`);

  const outputDir = getOutputDir();
  console.log(`📁 Output: ${outputDir}\n`);

  const browser = await chromium.launch({ headless: true });

  for (const file of files) {
    console.log(`📸 ${file}`);
    await screenshotFile(browser, file, outputDir);
  }

  await browser.close();

  // Generate report
  generateReport(outputDir, files);

  console.log(`\n✅ Done! ${files.length * 2 * 2} screenshots captured.`);
}

main().catch(err => {
  console.error('Fatal:', err);
  process.exit(1);
});
