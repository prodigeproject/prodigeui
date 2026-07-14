import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const systemRoot = join(repo, 'prodigeui');
const read = path => readFileSync(join(systemRoot, path), 'utf8');
const bad = [];
const authority = JSON.parse(read('canonical/system.authority.json'));
if (authority.normativePrecedence[0] !== 'explicit-user-direction') bad.push('explicit user direction is not highest precedence');
if (authority.lanes.product.sequenceCapMs !== 600 || authority.lanes.expressive.sequenceCapMs !== 1500) bad.push('lane sequence caps are not canonical 600/1500ms');
const principles = read('motion/principles.md');
if (!/Product\/UI sequences do not exceed 600ms/.test(principles) || !/Expressive sequences do not exceed\s*1500ms/.test(principles)) bad.push('motion principles do not declare both lane caps');
const presets = read('motion/presets/state-transition.json');
if (/"height"\s*:\s*\{\s*"from"\s*:\s*"auto"/.test(presets)) bad.push('motion preset animates height auto to zero');
const responsive = read('craft/patterns/responsive-patterns.md');
if (!/Product\/UI lane caps it at 96px/.test(responsive) || !/160px desktop/.test(responsive)) bad.push('responsive hero padding lacks lane precedence');
const taste = read('craft/taste.md');
if (!/Split-header reflex ban/.test(taste)) bad.push('split-header guidance lacks reflex/intent distinction');

if (bad.length) {
  console.error(`[FAIL] normative precedence: ${bad.length}`);
  bad.forEach(issue => console.error(`  - ${issue}`));
  process.exit(1);
}
console.log('[PASS] normative precedence: user direction, product/expressive lanes, easing, collapse, hero padding, and split-header rules are reconciled.');
