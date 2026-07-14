/**
 * validate-all.mjs
 * Single entry point that runs the full ProdigeUI integrity gate:
 * schemas, cross-references, token naming, WCAG contrast (all themes),
 * manifest completeness, research log, system connections, encoding, and
 * derived-CSS freshness.
 * Exit code 0 = everything passed, 1 = at least one check failed.
 */
import { spawnSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const checks = [
  ['Canonical authority', 'check-canonical-authority.mjs', []],
  ['Provenance and licensing boundaries', 'check-provenance.mjs', []],
  ['Normative precedence', 'check-normative-precedence.mjs', []],
  ['Schema validation', 'validate-schemas.mjs', []],
  ['Cross-references', 'check-references.mjs', []],
  ['Token naming', 'check-token-naming.mjs', []],
  ['WCAG contrast (all themes)', 'check-contrast.mjs', []],
  ['Manifest completeness', 'check-manifest.mjs', []],
  ['Research log', 'check-research-log.mjs', []],
  ['Rule consistency', 'check-consistency.mjs', []],
  ['Output encoding', 'check-output-encoding.mjs', []],
  ['System connections', 'check-system-connections.mjs', []],
  ['Derived tokens.css freshness', 'build-tokens.mjs', ['--check']],
];

let failed = 0;
const results = [];
for (const [label, script, args] of checks) {
  const r = spawnSync(process.execPath, [join(__dirname, script), ...args], { encoding: 'utf-8' });
  const ok = r.status === 0;
  if (!ok) {
    failed++;
    process.stdout.write(r.stdout || '');
    process.stderr.write(r.stderr || '');
  }
  results.push([ok, label]);
}

console.log('\n===== ProdigeUI Integrity Gate =====');
for (const [ok, label] of results) console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${label}`);
console.log('====================================');

if (failed === 0) {
  console.log('All checks passed. System is coherent.\n');
  process.exit(0);
} else {
  console.error(`${failed} check(s) failed.\n`);
  process.exit(1);
}
