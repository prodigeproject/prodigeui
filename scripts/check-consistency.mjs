// check-consistency.mjs
// Guards against cross-file rule collisions: shared numeric constants that live in
// more than one rules file must agree, and the canonical breakpoint scale must be
// defined in exactly one place. This catches the class of "two files, two answers"
// drift that schema/reference checks cannot see.

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rules = resolve(__dirname, '../prodigeui/design-rules');

const load = name => JSON.parse(readFileSync(resolve(rules, name), 'utf-8'));

const responsive = load('responsive.rules.json').responsive;
const layout = load('layout.rules.json').layout;
const structure = load('structure.rules.json').structure;
const form = load('form.rules.json').forms;

const failures = [];

// 1) Canonical breakpoints: defined once (responsive), never redefined with values in layout.
if (!responsive.breakpoints || Object.keys(responsive.breakpoints).length === 0) {
  failures.push('responsive.rules.json is missing the canonical `breakpoints` scale.');
}
if (layout.breakpoints) {
  failures.push(
    'layout.rules.json redefines `breakpoints` — the canonical scale must live only in ' +
    'responsive.rules.json. Use `breakpointsCanonical` (a pointer) instead of duplicating values.'
  );
}

// 2) Touch targets must agree everywhere they appear.
const touchMobile = new Set();
const touchDesktop = new Set();
if (responsive.touchTargets) {
  touchMobile.add(responsive.touchTargets.mobile);
  touchDesktop.add(responsive.touchTargets.desktop);
}
if (structure.touchTarget) {
  touchMobile.add(structure.touchTarget.mobile);
  touchDesktop.add(structure.touchTarget.desktop);
}
if (form.inputHeight && form.inputHeight.minimum) touchMobile.add(form.inputHeight.minimum);
touchMobile.delete(undefined);
touchDesktop.delete(undefined);
if (touchMobile.size > 1) {
  failures.push(`Mobile touch-target size disagrees across rules files: ${[...touchMobile].join(' vs ')}.`);
}
if (touchDesktop.size > 1) {
  failures.push(`Desktop touch-target size disagrees across rules files: ${[...touchDesktop].join(' vs ')}.`);
}

// 3) Form field-per-group maximum must agree between form.rules and structure.rules.
const groupMax = new Set();
if (form.maxFieldsPerGroup != null) groupMax.add(form.maxFieldsPerGroup);
if (structure.formFieldGrouping && structure.formFieldGrouping.maxPerGroup != null) {
  groupMax.add(structure.formFieldGrouping.maxPerGroup);
}
if (groupMax.size > 1) {
  failures.push(`Max fields-per-group disagrees between form.rules.json and structure.rules.json: ${[...groupMax].join(' vs ')}.`);
}

if (failures.length > 0) {
  console.error(`[FAIL] ${failures.length} cross-file rule consistency issue(s):`);
  failures.forEach(f => console.error(`  - ${f}`));
  process.exit(1);
} else {
  console.log('[PASS] Cross-file rule constants are consistent (breakpoints, touch targets, form field limits).');
  process.exit(0);
}
