# Craft Styles — Aesthetic Preset Catalog

> ProdigeUI `themes/` cover brand-TONE for functional products (saas-professional,
> fintech-blue, healthcare-green…). This folder covers the other axis: **aesthetic
> MOVEMENTS** (brutalism, editorial, neon, claymorphism…) and **brand-emulation presets**
> (Linear, Apple, Vercel…). Use these when a brief names or implies an aesthetic direction,
> as the starting palette/type/effects/motion contract — then apply `craft/taste.md` and
> the composition + quality gate on top.
>
> Adapted from awesome-design's 67 style presets and open-design's 100+ brand `DESIGN.md`,
> consolidated into two dense catalogs so an agent pays no per-file token cost to scan them.

## When to use

- Brief names an aesthetic ("brutalist", "editorial", "neon cyberpunk", "claymorphism") →
  open `style-presets.md`, copy the matching preset's tokens, commit to it.
- Brief names or implies a brand to emulate ("Linear-style", "Apple-clean", "Vercel-ish") →
  open `brand-presets.md`.
- Brief is vague and functional → skip this; use `themes/` + `craft/taste.md` instead.

## Rules (non-negotiable, on top of any preset)

1. **A preset is a starting contract, not an excuse to skip taste.** Still run the
   `craft/taste.md` font/color procedures, the two-altitude slop test, and the quality gate.
2. **Commit fully.** Half-applying a preset (brutalist type on a soft-shadow SaaS card) reads
   as confusion. Pick one and follow it page-wide (consistency locks still apply).
3. **The banned-by-default techniques become allowed WHEN the preset is the deliberate
   choice.** Glassmorphism, gradients, heavy radius, big shadows are craft inside their
   preset and slop when applied by reflex elsewhere. Deliberateness is the line.
4. **Accessibility is never waived.** Contrast, focus, reduced-motion, touch targets hold
   in every preset (neon/dark presets must still hit 4.5:1 body contrast).

## Files
| File | Contents |
|------|----------|
| `style-presets.md` | Aesthetic movements: minimal, editorial, brutalism, neobrutalism, claymorphism, neumorphism, glassmorphism, neon/cyberpunk, retro/vintage, bento, dark-tech, playful, premium, swiss/mono |
| `brand-presets.md` | Brand-emulation starting points: Linear, Vercel, Apple, Notion, Stripe, Anthropic/Claude, GitHub/Primer |

## Related
- `themes/` — brand-tone theme files (functional products)
- `craft/taste.md` — the discipline applied ON TOP of any preset
- `craft/composition.md` — how to compose the page once the style is chosen
