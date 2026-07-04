// WCAG Contrast Ratio Check Script
// Loads theme files, resolves fg/bg color pairs via primitives,
// and verifies contrast ratios meet WCAG AA requirements.

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const themesDir = resolve(__dirname, '../prodigeui/themes');
const tokensDir = resolve(__dirname, '../prodigeui/tokens');

// Load primitive palette for hex value resolution
const primitives = JSON.parse(readFileSync(resolve(tokensDir, 'primitive.tokens.json'), 'utf-8'));
const semantics = JSON.parse(readFileSync(resolve(tokensDir, 'semantic.tokens.json'), 'utf-8'));

// Color pairs to check: [foreground token, background token, isLargeText]
const COLOR_PAIRS = [
  ['color.foreground', 'color.background', false],
  ['color.primary-foreground', 'color.primary', false],
  ['color.secondary-foreground', 'color.secondary', false],
  ['color.destructive-foreground', 'color.destructive', false],
  ['color.success-foreground', 'color.success', false],
  ['color.warning-foreground', 'color.warning', false],
  ['color.info-foreground', 'color.info', false],
  ['color.accent-foreground', 'color.accent', false],
  ['color.muted-foreground', 'color.muted', false],
  ['color.surface-foreground', 'color.surface', false],
];

const THEME_FILES = ['light.theme.json', 'dark.theme.json', 'saas-professional.theme.json'];

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  return [
    parseInt(hex.slice(0, 2), 16),
    parseInt(hex.slice(2, 4), 16),
    parseInt(hex.slice(4, 6), 16),
  ];
}

function relativeLuminance([r, g, b]) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(hex1, hex2) {
  const l1 = relativeLuminance(hexToRgb(hex1));
  const l2 = relativeLuminance(hexToRgb(hex2));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function resolveRef(ref) {
  const token = primitives.tokens[ref];
  if (token && token.value) return token.value;
  return null;
}

function getResolvedColor(tokenName, themeOverrides) {
  // Theme override gives a palette ref directly
  const ref = themeOverrides[tokenName]
    || semantics.tokens[tokenName]?.ref
    || null;
  if (!ref) return null;
  return resolveRef(ref);
}

let failures = [];

for (const file of THEME_FILES) {
  const theme = JSON.parse(readFileSync(resolve(themesDir, file), 'utf-8'));
  // Merge with default theme if extends
  let overrides = { ...theme.overrides };
  if (theme.extends) {
    const base = JSON.parse(readFileSync(resolve(themesDir, `${theme.extends}.theme.json`), 'utf-8'));
    overrides = { ...base.overrides, ...overrides };
  }

  for (const [fgToken, bgToken, isLarge] of COLOR_PAIRS) {
    const fgHex = getResolvedColor(fgToken, overrides);
    const bgHex = getResolvedColor(bgToken, overrides);
    if (!fgHex || !bgHex) continue;

    const ratio = contrastRatio(fgHex, bgHex);
    const required = isLarge ? 3.0 : 4.5;

    if (ratio < required) {
      failures.push({ theme: file, fg: fgToken, bg: bgToken, ratio: ratio.toFixed(2), required });
    }
  }
}

if (failures.length === 0) {
  console.log('WCAG contrast check PASSED. All color pairs meet requirements.');
  process.exit(0);
} else {
  console.error('WCAG contrast check FAILED:');
  for (const f of failures) {
    console.error(`  [${f.theme}] ${f.fg} on ${f.bg}: ${f.ratio}:1 (need ${f.required}:1)`);
  }
  process.exit(1);
}
