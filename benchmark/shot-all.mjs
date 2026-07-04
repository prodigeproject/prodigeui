import { chromium } from 'playwright';
import path from 'path';

const skills = ['prodigeui','taste-skill','ui-ux-pro-max','open-design','awesome-design','emil','impeccable'];
const width = 1440, height = 900;

const browser = await chromium.launch();
for (const s of skills) {
  const file = `flowai-bench-${s}.html`;
  const url = 'file://' + path.resolve(file);
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(2600); // fonts + entrance settle
  // viewport (hero) shot
  await page.screenshot({ path: `shot-${s}-hero.png`, fullPage: false });
  // full-page shot
  await page.screenshot({ path: `shot-${s}-full.png`, fullPage: true });
  await page.close();
  console.log('shot', s);
}
await browser.close();
console.log('done');
