import { spawnSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptsDir = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const reviewIndex = args.indexOf('--review');
const reviewPath = reviewIndex >= 0 ? args[reviewIndex + 1] : undefined;
const artifacts = args.filter((arg, index) => arg !== '--review' && index !== reviewIndex + 1);

if (!artifacts.length) {
  console.error('Usage: npm run quality-gate -- <artifact.html> [...] [--review manual-review.json]');
  process.exit(2);
}

const integrity = spawnSync(process.execPath, [join(scriptsDir, 'validate-all.mjs')], { encoding: 'utf8' });
process.stdout.write(integrity.stdout || '');
process.stderr.write(integrity.stderr || '');
if (integrity.status !== 0) process.exit(integrity.status || 1);

let failed = false;
for (const artifact of artifacts) {
  const command = [join(scriptsDir, 'check-generated-artifact.mjs'), resolve(artifact)];
  if (reviewPath) command.push('--review', resolve(reviewPath));
  const evaluation = spawnSync(process.execPath, command, { encoding: 'utf8' });
  process.stdout.write(evaluation.stdout || '');
  process.stderr.write(evaluation.stderr || '');
  if (evaluation.status !== 0) failed = true;
}

process.exit(failed ? 1 : 0);
