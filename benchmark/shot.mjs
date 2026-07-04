import { chromium } from 'playwright';
import path from 'path';

const file = process.argv[2] || 'nova-with-prodigeui-v3.html';
const out = process.argv[3] || 'shot.png';
const width = parseInt(process.argv[4] || '1440', 10);
const height = parseInt(process.argv[5] || '900', 10);

const url = 'file://' + path.resolve(file);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 }).catch(() => {});
await page.waitForTimeout(2500); // let fonts/entrance settle
await page.screenshot({ path: out, fullPage: false });
await browser.close();
console.log('wrote', out);
