/**
 * check-references.mjs
 * Verifies cross-references across the ProdigeUI token system:
 * - Semantic token refs -> primitive tokens
 * - Component token refs -> semantic tokens
 * - Theme overrides -> primitive tokens
 * - Component manifest token arrays -> existing tokens
 * Exit code 0 = all pass, 1 = any dangling reference.
 */
import { readFileSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = resolve(__dirname, '../prodigeui');

let failures = 0;

function pass(msg) { console.log(`  PASS: ${msg}`); }
function fail(msg) { failures++; console.error(`  FAIL: ${msg}`); }

// Load token layers
const primitive = JSON.parse(readFileSync(join(BASE, 'tokens/primitive.tokens.json'), 'utf-8'));
const semantic = JSON.parse(readFileSync(join(BASE, 'tokens/semantic.tokens.json'), 'utf-8'));
const component = JSON.parse(readFileSync(join(BASE, 'tokens/component.tokens.json'), 'utf-8'));

const primitiveKeys = new Set(Object.keys(primitive.tokens));
const semanticKeys = new Set(Object.keys(semantic.tokens));
const componentKeys = new Set(Object.keys(component.tokens));

// Combined set: semantic + component tokens (manifest may reference either)
const allTokenKeys = new Set([...semanticKeys, ...componentKeys]);

// --- Check 1: Semantic token refs point to primitive tokens ---
console.log('\n=== Semantic Token References (-> primitive) ===\n');
let semanticErrors = 0;
for (const [name, entry] of Object.entries(semantic.tokens)) {
  if (!entry.ref) continue;
  if (!primitiveKeys.has(entry.ref)) {
    fail(`semantic "${name}" refs "${entry.ref}" — not found in primitive tokens`);
    semanticErrors++;
  }
}
if (semanticErrors === 0) {
  pass(`All ${Object.keys(semantic.tokens).length} semantic token refs resolve to primitives`);
}

// --- Check 2: Component token refs point to semantic tokens ---
console.log('\n=== Component Token References (-> semantic) ===\n');
let componentErrors = 0;
for (const [name, entry] of Object.entries(component.tokens)) {
  if (!entry.ref) continue;
  if (!semanticKeys.has(entry.ref)) {
    fail(`component "${name}" refs "${entry.ref}" — not found in semantic tokens`);
    componentErrors++;
  }
}
if (componentErrors === 0) {
  pass(`All ${Object.keys(component.tokens).length} component token refs resolve to semantics`);
}

// --- Check 3: Theme overrides reference primitive tokens ---
console.log('\n=== Theme Override References (-> primitive) ===\n');
const { readdirSync } = await import('fs');
const themeDir = join(BASE, 'themes');
const themeFiles = readdirSync(themeDir).filter(f => f.endsWith('.theme.json'));

for (const file of themeFiles) {
  const theme = JSON.parse(readFileSync(join(themeDir, file), 'utf-8'));
  if (!theme.overrides) continue;

  let themeErrors = 0;
  for (const [key, value] of Object.entries(theme.overrides)) {
    // Override values should reference primitive tokens (dot-notation)
    if (!primitiveKeys.has(value)) {
      fail(`theme "${file}" override "${key}" -> "${value}" — not found in primitives`);
      themeErrors++;
    }
  }
  if (themeErrors === 0) {
    pass(`${file} — all ${Object.keys(theme.overrides).length} overrides reference valid primitives`);
  }
}

// --- Check 4: Component manifest token arrays reference existing tokens ---
console.log('\n=== Component Manifest Token References ===\n');
const manifest = JSON.parse(
  readFileSync(join(BASE, 'components/components.manifest.json'), 'utf-8')
);

let manifestErrors = 0;
for (const comp of manifest.components) {
  if (!comp.tokens || !Array.isArray(comp.tokens)) continue;
  for (const tokenRef of comp.tokens) {
    if (!allTokenKeys.has(tokenRef)) {
      fail(`component "${comp.name}" references token "${tokenRef}" — not found`);
      manifestErrors++;
    }
  }
}
if (manifestErrors === 0) {
  pass(`All component manifest token references (${manifest.components.length} components) resolve`);
}

// --- Summary ---
console.log(`\n=== Summary ===`);
if (failures === 0) {
  console.log('All cross-reference checks passed.\n');
  process.exit(0);
} else {
  console.error(`${failures} dangling reference(s) detected.\n`);
  process.exit(1);
}
