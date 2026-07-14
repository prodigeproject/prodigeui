import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const missing = `definitely-missing-${Date.now()}.html`;
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const result = spawnSync(npm, ['run', 'quality-gate', '--', missing], {
  cwd: repo,
  encoding: 'utf8',
});

if (result.status === 0) {
  console.error('[FAIL] quality-gate accepted a nonexistent generated artifact');
  process.stdout.write(result.stdout || '');
  process.stderr.write(result.stderr || '');
  process.exit(1);
}

console.log('[PASS] quality-gate rejects a nonexistent generated artifact');
