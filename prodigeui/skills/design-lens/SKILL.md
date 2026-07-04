---
name: design-lens
description: |
  Applies a focused adjustment lens to an EXISTING design instead of rebuilding it. Routes plain-language requests (make it bolder, tone it down, fix the spacing, colors feel flat, rewrite this error) to the right scoped pass. For editing/refining existing output, not building from a brief.
triggers:
  - "make it bolder"
  - "tone it down"
  - "make it quieter"
  - "fix the spacing"
  - "colors feel flat"
  - "polish this"
  - "distill this"
  - "harden this"
  - "improve the copy"
  - "make it responsive"
  - "optimize performance"
---

# design-lens

## Purpose

Most design work is ADJUSTMENT, not a fresh build. This skill runs a single focused lens on
existing output — bolder / quieter / distill / harden / polish / animate / colorize /
typeset / layout / delight / overdrive / clarify / adapt / optimize / critique / audit /
motion-review. Read `craft/design-lenses.md` for the full catalog (intent, artifacts, exit
bar per lens).

## Workflow

### Step 1 — Route to a lens
1. If the request names a lens, use it.
2. Else map the intent to the closest lens (`craft/design-lenses.md` routing rules):
   "fix spacing"→layout, "rewrite error"→clarify, "flat colors"→colorize, "too much"→quieter,
   "too safe"→bolder, "ship it"→polish, "slow"→optimize, "mobile"→adapt.
3. If two fit, ask one question. If none fit, this is a build → use `prodige-ui-end-to-end`.

### Step 2 — Scope the edit
1. Identify exactly which elements/files the lens touches.
2. State the scope boundary: what this lens will NOT change (preserve intent — see
   `PHILOSOPHY.md` Enhancement Mode). `bolder`/`overdrive` raise ambition only in Creative
   Mode or on explicit request.

### Step 3 — Apply the lens
1. Read the artifacts listed for that lens in `craft/design-lenses.md`.
2. Make the scoped change only. Do not restyle out-of-scope dimensions.

### Step 4 — Re-gate
1. Re-run the affected `quality-gate/anti-ai-slop.checklist.md` checks.
2. For expressive work, re-check the craft-presence rubric.
3. Report what changed, what was preserved, and any gate results (Before/After where useful).

## Related
- `craft/design-lenses.md` — the lens catalog (source of truth)
- `skills/design-review/SKILL.md`, `skills/motion-review/SKILL.md` — the review lenses
- `skills/prodige-ui-end-to-end/SKILL.md` — full build when no lens fits
