# ProdigeUI Improvements — from the skill benchmark audit

Every change below is a fix to the ProdigeUI SYSTEM (rules/craft/skills), not to any HTML
output. Each maps to a gap in `skill-benchmark-audit.md`.

## New files

| File | Closes | Source skill | What it adds |
|------|:--:|--------------|--------------|
| `prodigeui/craft/patterns/motion-craft.md` | G1 | emil | Interaction-level motion: decision framework (frequency gate, keyboard = no animation), committed easing curves (`--ease-out: cubic-bezier(0.23,1,0.32,1)` etc.), never-`scale(0)`, origin-aware popovers, interruptibility, asymmetric timing, `@starting-style`/WAAPI/clip-path, GPU/perf traps (Framer `x`/`y` not HW-accel; CSS-var recalc storm), tooltip skip-delay, blur-mask crossfade, springs. |
| `prodigeui/craft/patterns/interaction-patterns.md` | G2, G8 | impeccable, ui-ux-pro-max | Modern accessible implementation: 8 states, `:focus-visible`, native `<dialog>`/`inert`, Popover API + CSS anchor positioning + portal (dropdown overflow-clip escape), roving tabindex, skip links, forms (labels/validate-on-blur/`aria-live`), undo-over-confirm, optimistic + skeletons, touch/native baselines, nav patterns, chart baselines. |
| `prodigeui/craft/patterns/animation-vocabulary.md` | G7 | emil | Reverse-lookup glossary to name an effect before building/reviewing it. |
| `prodigeui/craft/design-system-routing.md` | G5 | taste-skill | Brief→real-system decision (register split), official-package map (Fluent/Carbon/Material/Radix/shadcn/Polaris/govuk/uswds), honesty rules ("aesthetic is not a system", verify deps), + React stack/perf conventions (no `useState` for continuous values, `'use client'` isolation, `next/font`). |
| `prodigeui/skills/motion-review/SKILL.md` | G6 | emil | A strict motion-review lens: 10 non-negotiables, escalation triggers, remedial hierarchy, Before/After findings table + Block/Approve verdict. |

## Edited files

| File | Closes | What changed |
|------|:--:|--------------|
| `prodigeui/craft/taste.md` | G3 | New sections: mechanical layout hard-rules (CTA wrap, no-duplicate-CTA-intent, nav single-line/≤80px, zigzag ≤2, bento cell-count, split-header ban, hero top-padding cap, color/shape/shadow consistency locks); icon discipline (one family, no hand-rolled SVG, no emoji icons); italic descender clearance. |
| `prodigeui/quality-gate/anti-ai-slop.checklist.md` | G3, G4 | Added exact banned indigo hex list + accent-overuse cap (open-design), 80/20 soul + outsider-screenshot test, and binary checks for all new mechanical/motion/interaction rules. |
| `prodigeui/motion/principles.md` | G1 | Note: interaction motion uses the stronger curves in `motion-craft.md`; never `scale(0)`; origin-aware; interruptible. |
| `prodigeui/AGENTS.md` | G1,G2,G5,G6 | Added Core Principles 8 (route before invent) and 9 (motion/interaction craft); registered new craft docs on the `craft/` row; added `motion-review` to the skill table. |
| `prodigeui/craft/AGENTS.md` | G1,G2,G5,G7 | Added motion-craft, interaction-patterns, animation-vocabulary to the pattern index and design-system-routing to companions. |
| `prodigeui/skills/AGENTS.md` | G6 | Registered the `motion-review` skill. |
| `prodigeui/skills/prodige-ui-end-to-end/SKILL.md` | G1,G2,G5 | Step 1 routing decision; Step 6 interaction-motion craft; Step 7 modern interaction patterns; updated references. |
| `prodigeui/manifest.json` | all | Registered the 5 new artifacts. |

## Deliberately deferred (documented, not shipped)

- **G9** — impeccable-style command/lens taxonomy (bolder/quieter/distill/…): a skill-UX
  change, not a rule fix.
- **G10** — awesome-design's 67 aesthetic style presets + open-design's 100+ brand
  `DESIGN.md`: a content catalog project. ProdigeUI themes already cover brand-tone.
- **ui-ux-pro-max's Python CLI + searchable DB**: out of scope for a static agent-consumed
  package; the *rules* it encodes are folded into `interaction-patterns.md`.

## Net effect (approach score, from the audit)

Motion craft 3→5, Interaction/a11y 3→5, Mechanical checkability 4→5, Breadth 3→4.
ProdigeUI methodology average 3.9 → 4.6, moving it ahead of the strongest single comparator
(impeccable, 4.5) by integrating impeccable's interaction depth + emil's motion craft +
taste-skill's mechanical rules + open-design's linted bans into one system.

## How to re-verify

These are guidance/rules, verified by inspection and by JSON validity (`manifest.json`
parses). There is no build step. To sanity-check an actual generated page against the new
rules, render it with `benchmark/shot.mjs` and run `skills/quality-check` +
`skills/motion-review` against the output.
