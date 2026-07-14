/** Fail generated text artifacts that contain common UTF-8 mojibake fragments. */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const paths = process.argv.slice(2).length ? process.argv.slice(2) : [join(repo, 'prodigeui')];

const textExt = new Set(['.html', '.css', '.js', '.mjs', '.ts', '.tsx', '.md', '.txt']);
const markerCodePoints = [
  [0x00e2],
  [0x00c3],
  [0x00c2],
  [0x00f0, 0x0178],
  [0x00ef, 0x00b8],
  [0xfffd],
];
const markers = markerCodePoints.map(points => String.fromCodePoint(...points));
let failed = false;

const files = [];
const collect = input => {
  const file = resolve(input);
  const stat = statSync(file);
  if (stat.isDirectory()) for (const child of readdirSync(file)) collect(join(file, child));
  else if (stat.isFile() && textExt.has(extname(file).toLowerCase())) files.push(file);
};
paths.forEach(collect);

for (const file of files) {
  const text = readFileSync(file, 'utf8');
  const hits = markers.filter(marker => text.includes(marker));
  if (hits.length) {
    failed = true;
    console.error(`FAIL ${file}: mojibake marker(s) ${hits.join(', ')}`);
  }
}

if (!failed) console.log(`PASS output encoding: ${files.length} UTF-8 text file(s) are clean`);

process.exit(failed ? 1 : 0);
