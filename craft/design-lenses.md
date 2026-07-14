# Design Lenses — Adjustment Commands

> The 8-step end-to-end skill builds a design from a brief. But most real work is
> ADJUSTING an existing design: "make it bolder", "tone this down", "fix the spacing",
> "the colors feel flat", "rewrite this error copy". Those are not full rebuilds — they
> are targeted lenses applied to existing output.
>
> This is ProdigeUI's lens taxonomy (adapted from impeccable's command set). Each lens is a
> focused pass with a clear intent, the artifacts it reads, and an exit bar. Invoke a lens
> by name, or route a plain-language request to the closest one.

## How routing works

1. If the request names a lens → run that lens.
2. If it doesn't name one but the intent clearly maps ("fix the spacing" → **layout**,
   "rewrite this error" → **clarify**, "colors feel flat" → **colorize**) → run that lens.
3. If two could fit, ask once. If none fit → it's a general build; use the end-to-end skill.

A lens is a scoped edit: change only what the intent requires, preserve everything else,
re-run the relevant quality-gate checks, and state what changed.

## The lenses

### Evaluate (read-only; produce findings, don't edit)
| Lens | Intent | Reads | Exit bar |
|------|--------|-------|----------|
| **critique** | UX design review with heuristic scoring | `design-rules/`, `quality-gate/positive-patterns.md` | Findings by severity + a score, no code changes |
| **audit** | Technical checks: a11y, perf, responsive | `skills/accessibility-audit`, `quality-gate/criteria.json` | Pass/fail per criterion + file:line |
| **motion-review** | Motion craft review | `skills/motion-review/SKILL.md` | Before/After table + Block/Approve |

### Refine (make an existing design better without changing its intent)
| Lens | Intent | Key rules |
|------|--------|-----------|
| **polish** | Final quality pass before shipping | Run all gates; fix spacing/alignment/contrast/state gaps |
| **bolder** | Amplify a safe/bland design | Raise `DESIGN_VARIANCE`/`MOTION_INTENSITY`; add ONE hero signature + one motion signature (`craft/`); commit the color strategy harder |
| **quieter** | Tone down an overstimulating design | Cut accent uses to ≤2/screen, reduce motion to essential, remove decorative texture, widen whitespace |
| **distill** | Strip to essence | Remove nested cards, redundant sections, duplicate CTA intent; one primary action per view |
| **harden** | Production-ready | Full state matrix, error/empty/loading, i18n, edge cases, `interaction-patterns.md` |

### Enhance (add a specific quality)
| Lens | Intent | Reads |
|------|--------|-------|
| **animate** | Add purposeful motion | `craft/patterns/motion-craft.md`, `motion/choreography.md` |
| **colorize** | Add strategic color to a flat/monochrome UI | `craft/taste.md` color discipline, `design-rules/color.rules.json` |
| **typeset** | Improve type hierarchy & fonts | `craft/patterns/fluid-display-type.md`, `craft/taste.md` type discipline |
| **layout** | Fix spacing, rhythm, hierarchy | `design-rules/layout.rules.json`, `craft/taste.md` layout hard-rules |
| **delight** | Add personality / a memorable touch | 80/20 rule; one micro-interaction (`motion-craft.md`) |
| **overdrive** | Push past conventional limits | Max ambition; still passes FAIL gate + reduced-motion |

### Fix (correct a specific problem)
| Lens | Intent | Reads |
|------|--------|-------|
| **clarify** | Improve UX copy, labels, error messages | `craft/taste.md` copy self-audit (no em-dash, outcome CTAs, error = cause+fix) |
| **adapt** | Adapt for other devices / screen sizes | `skills/responsive-design`, `interaction-patterns.md` touch/native |
| **optimize** | Diagnose & fix UI performance | `motion-craft.md` §12 perf traps; GPU-only, CWV |

## Lens discipline

- **Scope tightly.** `layout` does not restyle colors; `clarify` does not touch layout.
- **Preserve intent.** These refine — they don't override the designer's committed choices
  (see `PHILOSOPHY.md` Enhancement Mode). `bolder`/`overdrive` raise ambition only when the
  brief is Creative Mode or the user explicitly asks.
- **Re-gate.** After any lens, re-run the affected `quality-gate/anti-ai-slop.checklist.md`
  checks and, for expressive work, the craft-presence rubric.

## Related
- `skills/prodige-ui-end-to-end/SKILL.md` — the full build (when no lens fits)
- `skills/design-review/SKILL.md`, `skills/motion-review/SKILL.md` — the two review lenses as skills
- `quality-gate/`, `craft/taste.md`, `craft/patterns/motion-craft.md`
