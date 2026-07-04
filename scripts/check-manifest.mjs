// check-manifest.mjs
// Verifies every artifact with status "created" in manifest.json exists on disk.

import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '../prodigeui');

// Load manifest
const manifestPath = resolve(root, 'manifest.json');
const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));

// Filter to "created" artifacts only
const created = manifest.artifacts.filter(a => a.status === 'created');

let failed = false;
const missing = [];

for (const artifact of created) {
  const fullPath = resolve(root, artifact.path);
  if (!existsSync(fullPath)) {
    missing.push(artifact.path);
  }
}

if (missing.length > 0) {
  console.error(`[FAIL] ${missing.length} artifact(s) marked "created" but missing on disk:`);
  missing.forEach(p => console.error(`  - ${p}`));
  failed = true;
}

// Summary
const present = created.length - missing.length;
if (!failed) {
  console.log(`[PASS] All ${created.length} "created" artifacts exist on disk.`);
  process.exit(0);
} else {
  console.error(`\n[SUMMARY] Created artifacts: ${created.length}, Present: ${present}, Missing: ${missing.length}`);
  process.exit(1);
}
