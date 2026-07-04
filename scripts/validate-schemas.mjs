/**
 * validate-schemas.mjs
 * Validates JSON files against their expected schema structure.
 * Uses native Node.js modules only (no external dependencies).
 * Exit code 0 = all pass, 1 = any failure.
 */
import { readFileSync, readdirSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = resolve(__dirname, '../prodigeui');

let failures = 0;

function pass(msg) { console.log(`  PASS: ${msg}`); }
function fail(msg) { failures++; console.error(`  FAIL: ${msg}`); }

/**
 * Validate a token file against tokens.schema.json structure.
 */
function validateTokenFile(filePath) {
  const data = JSON.parse(readFileSync(filePath, 'utf-8'));
  const name = filePath.replace(BASE, '');

  // Required fields
  if (typeof data.schemaVersion !== 'number' || data.schemaVersion < 1) {
    fail(`${name} — missing or invalid "schemaVersion"`);
  } else {
    pass(`${name} — schemaVersion is valid`);
  }

  const validLayers = ['primitive', 'semantic', 'component'];
  if (!validLayers.includes(data.layer)) {
    fail(`${name} — "layer" must be one of: ${validLayers.join(', ')}`);
  } else {
    pass(`${name} — layer "${data.layer}" is valid`);
  }

  if (!data.tokens || typeof data.tokens !== 'object' || Object.keys(data.tokens).length === 0) {
    fail(`${name} — "tokens" must be a non-empty object`);
    return;
  }

  const validTypes = ['color', 'typography', 'spacing', 'radius', 'shadow', 'border', 'z-index', 'motion'];
  let tokenErrors = 0;

  for (const [key, entry] of Object.entries(data.tokens)) {
    if (!validTypes.includes(entry.type)) {
      fail(`${name} — token "${key}" has invalid type "${entry.type}"`);
      tokenErrors++;
      continue;
    }
    // Primitive tokens must have value, not ref
    if (data.layer === 'primitive') {
      if (entry.value === undefined) {
        fail(`${name} — primitive token "${key}" missing "value"`);
        tokenErrors++;
      }
      if (entry.ref !== undefined) {
        fail(`${name} — primitive token "${key}" should not have "ref"`);
        tokenErrors++;
      }
    }
    // Semantic/component tokens must have ref, not value
    if (data.layer === 'semantic' || data.layer === 'component') {
      if (entry.ref === undefined) {
        fail(`${name} — ${data.layer} token "${key}" missing "ref"`);
        tokenErrors++;
      }
      if (entry.value !== undefined) {
        fail(`${name} — ${data.layer} token "${key}" should not have "value"`);
        tokenErrors++;
      }
    }
  }

  if (tokenErrors === 0) {
    pass(`${name} — all ${Object.keys(data.tokens).length} tokens structurally valid`);
  }
}

/**
 * Validate a theme file against theme.schema.json structure.
 */
function validateThemeFile(filePath) {
  const data = JSON.parse(readFileSync(filePath, 'utf-8'));
  const name = filePath.replace(BASE, '');

  if (!data.name || typeof data.name !== 'string') {
    fail(`${name} — missing or invalid "name"`);
  } else {
    pass(`${name} — name "${data.name}" is valid`);
  }

  const validModes = ['light', 'dark'];
  if (!validModes.includes(data.mode)) {
    fail(`${name} — "mode" must be "light" or "dark", got "${data.mode}"`);
  } else {
    pass(`${name} — mode "${data.mode}" is valid`);
  }

  if (data.overrides !== undefined) {
    if (typeof data.overrides !== 'object' || Array.isArray(data.overrides)) {
      fail(`${name} — "overrides" must be an object`);
    } else {
      const badValues = Object.entries(data.overrides)
        .filter(([, v]) => typeof v !== 'string');
      if (badValues.length > 0) {
        fail(`${name} — overrides has non-string values: ${badValues.map(([k]) => k).join(', ')}`);
      } else {
        pass(`${name} — overrides (${Object.keys(data.overrides).length} entries) structurally valid`);
      }
    }
  }
}

// --- Run validation ---
console.log('\n=== Token File Validation ===\n');
const tokenFiles = ['primitive.tokens.json', 'semantic.tokens.json', 'component.tokens.json'];
for (const f of tokenFiles) {
  const path = join(BASE, 'tokens', f);
  try {
    validateTokenFile(path);
  } catch (e) {
    fail(`${f} — could not parse: ${e.message}`);
  }
}

console.log('\n=== Theme File Validation ===\n');
const themeDir = join(BASE, 'themes');
const themeFiles = readdirSync(themeDir).filter(f => f.endsWith('.theme.json'));
for (const f of themeFiles) {
  const path = join(themeDir, f);
  try {
    validateThemeFile(path);
  } catch (e) {
    fail(`${f} — could not parse: ${e.message}`);
  }
}

// --- Summary ---
console.log(`\n=== Summary ===`);
if (failures === 0) {
  console.log('All schema validations passed.\n');
  process.exit(0);
} else {
  console.error(`${failures} failure(s) detected.\n`);
  process.exit(1);
}
