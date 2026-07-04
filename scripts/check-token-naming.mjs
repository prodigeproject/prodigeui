// Token Naming Check Script
// Verifies semantic and component token NAMES do not contain literal values
// (hex colors, rgb/rgba, numbers with units like px/rem/em/%)

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const tokensDir = resolve(__dirname, '../prodigeui/tokens');

// Patterns that should NOT appear in token names
const FORBIDDEN_PATTERNS = [
  { regex: /#([0-9a-fA-F]{3}){1,2}\b/, label: 'hex color' },
  { regex: /rgba?\s*\(/, label: 'rgb/rgba function' },
  { regex: /\d+px/, label: 'px unit' },
  { regex: /\d+rem/, label: 'rem unit' },
  { regex: /\d+em/, label: 'em unit' },
  { regex: /\d+%/, label: 'percentage' },
];

const FILES_TO_CHECK = ['semantic.tokens.json', 'component.tokens.json'];

let violations = [];

for (const file of FILES_TO_CHECK) {
  const filePath = resolve(tokensDir, file);
  let data;
  try {
    data = JSON.parse(readFileSync(filePath, 'utf-8'));
  } catch (err) {
    console.error(`Error reading ${file}: ${err.message}`);
    process.exit(1);
  }

  const tokenNames = Object.keys(data.tokens || {});

  for (const name of tokenNames) {
    for (const { regex, label } of FORBIDDEN_PATTERNS) {
      if (regex.test(name)) {
        violations.push({ file, name, reason: `contains ${label}` });
      }
    }
  }
}

if (violations.length === 0) {
  console.log('Token naming check PASSED. No literal values in token names.');
  process.exit(0);
} else {
  console.error('Token naming check FAILED. Violations found:');
  for (const v of violations) {
    console.error(`  [${v.file}] "${v.name}" — ${v.reason}`);
  }
  process.exit(1);
}
