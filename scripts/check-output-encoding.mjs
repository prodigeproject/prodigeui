/** Fail generated text artifacts that contain common UTF-8 mojibake fragments. */
import { readFileSync, statSync } from 'node:fs';
import { extname, resolve } from 'node:path';

const paths = process.argv.slice(2);
if (!paths.length) {
  console.error('Usage: node scripts/check-output-encoding.mjs <generated-file> [...]');
  process.exit(2);
}

const textExt = new Set(['.html', '.css', '.js', '.mjs', '.ts', '.tsx', '.md', '.txt']);
const markers = ['Ã¢', 'Ãƒ', 'Ã‚', 'Ã°Å¸', 'Ã¯Â¸', 'Î“'];
let failed = false;

for (const input of paths) {
  const file = resolve(input);
  if (!statSync(file).isFile() || !textExt.has(extname(file).toLowerCase())) continue;
  const text = readFileSync(file, 'utf8');
  const hits = markers.filter(marker => text.includes(marker));
  if (hits.length) {
    failed = true;
    console.error(`FAIL ${input}: mojibake marker(s) ${hits.join(', ')}`);
  } else {
    console.log(`PASS ${input}: UTF-8 text is clean`);
  }
}

process.exit(failed ? 1 : 0);
