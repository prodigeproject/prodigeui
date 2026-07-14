import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const systemRoot = join(repo, 'prodigeui');
const read = path => readFileSync(join(systemRoot, path), 'utf8');
const bad = [];
const data = JSON.parse(read('assets/assets.manifest.json'));

for (const asset of data.assets) {
  if (!asset.license?.name || !asset.license?.source || typeof asset.license?.commercialUse !== 'boolean') bad.push(`${asset.id}: incomplete license metadata`);
  if (asset.path?.endsWith('.svg') && !asset.accessibility?.consumption) bad.push(`${asset.id}: missing SVG consumption accessibility rule`);
  if (asset.category === 'fonts' && asset.bundled === false && !asset.fallbackRequired) bad.push(`${asset.id}: unbundled font missing fallback requirement`);
}
for (const path of ['NOTICE.md', 'research/PROVENANCE.md']) if (!existsSync(join(systemRoot, path))) bad.push(`missing prodigeui/${path}`);
const authority = JSON.parse(read('canonical/system.authority.json'));
if (!authority.motionPrecedence.restrictedLibraries.includes('GSAP')) bad.push('GSAP is not restricted in authority');
const engine = read('craft/patterns/engine-interactivity.md');
if (!/legal clearance/i.test(engine) || !/default production\s+recommendation/i.test(engine)) bad.push('engine guide lacks explicit GSAP product/legal boundary');

if (bad.length) {
  console.error(`[FAIL] provenance: ${bad.length} issue(s)`);
  bad.forEach(issue => console.error(`  - ${issue}`));
  process.exit(1);
}
console.log(`[PASS] provenance: ${data.assets.length} assets classified; unknown corpus licensing and GSAP risk remain explicitly blocked.`);
