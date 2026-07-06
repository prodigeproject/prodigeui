# ProdigeUI Improvements — Changelog

> Round 1 (the original skill-benchmark gap ledger G1–G10) is documented in
> `skill-benchmark-audit.md`. This file logs Round 2, from the NOVA re-benchmark.

# Round 2 — Modern-baseline audit (NOVA re-benchmark + reference-site study)

Triggered by: the user preferred prodigeUI v4 over v5, and flagged that the 8-dimension
rubric let visually-generic output score high. Root cause: (a) the rubric weighted gameable
hygiene dims equally with taste dims and nothing was rendered; (b) v5's concrete choices
(acid-lime `#B8FF3A`, particle-constellation hero) are the NEW AI-slop, not premium.
Evidence: audit of shipped award-grade product landings (Antimetal, Plasma, Tokens Studio,
Infinite Machine, Eternal, State of AI Design, Milana, Webflow, Bevel, Auto.inc, Spade,
Crosby, Ondo, Fable, Shopify Editions, NestJS) — markup/SSR-verified where possible.

## New files
| File | What it adds |
|------|--------------|
| `craft/patterns/modern-product-baseline.md` | Positive 2025–2026 taste target across all requested axes: typography (confident mid-size, variable fonts), color (restrained + anti-neon), spatial (whitespace, numbered-index reconciled), motion+engine (scroll-narrative, wordmark marquee, anchor priority), modern stack table (Lenis/GSAP/Framer/R3F+drei/WAAPI/View-Transitions), responsive, interaction, UX writing, design-system. |
| `craft/ux-writing.md` | Dedicated UX-writing craft (prodigeUI had none): outcome-first headlines, eyebrow=new-info, real+footnoted numbers (retires invented "120+ launches"), one CTA intent, hype/em-dash bans, microcopy, voice self-audit. |

## Edited files
| File | Change |
|------|--------|
| `craft/taste.md` | (1) Anti-neon accent guard — retires the "distinctive lime #b8ff3a" reflex; adds accent taste test + OKLCH chroma band. (2) Numbered-index reconciliation — running index = craft, per-section ornament = slop. (3) Hero type ceiling — "confident, not shouting" ~2.6–6.5rem; 9–12rem is a dated reflex. |
| `craft/patterns/engine-interactivity.md` | Anchor-Taste Priority (real 3D/product > scrubbed product-UI > concept shader > particles LAST) + modern React stack (R3F+drei, Framer Motion, WAAPI, View Transitions). |
| `quality-gate/anti-ai-slop.checklist.md` | New 2026 tells: N1 neon accent, N2 particle hero, N3 invented metrics (FAIL), N4 big-type shouting, N5 fade-everything, N6 copy voice tells. |
| `craft/AGENTS.md` | Registered `modern-product-baseline.md` + `ux-writing.md`; annotated taste.md + engine-interactivity.md updates. |

## Still honest about
- None of the 7 NOVA builds were browser-rendered; scores remain craft-informed judgments.
- The animation-heavy baselines are client-rendered React; their stacks are read from public
  documentation/known builds, not fully from fetched markup. Confirm before citing to a client.

---

# Round 3 — Product-purpose palette routing + whitespace discipline (NOVA comparator feedback)

Triggered by: user review of the NOVA benchmark builds. Three findings, each mapped to a
system rule (not just a file patch):

1. **ui-ux-pro-max "understood the product" (color + hero fit); prodigeUI read as
   template / AI-slop.** Root cause identified: ProdigeUI keeps shipping ONE direction —
   dark near-black canvas + one warm incandescent accent (ember/vermilion) + big grotesk.
   That house style has become its own template. The comparator scored better because it
   routes its palette off the *product type* first. `taste.md`'s own "near-monochrome + one
   refined accent" advice was actively pushing the dark+ember reflex.
2. **The latest ui-ux-pro-max build had blank space in hero + contact** that an earlier
   build did not. Root cause was a real layout bug: decorative `position:absolute` glow
   blobs tied on specificity with `.hero>* / .contact>* { position:relative }` (later source
   order wins), forcing the blobs in-flow as giant half-viewport blurred squares that shoved
   content and opened blank bands.
3. **prodigeUI NOVA v7 "capabilities" was weak.** Its bento put 5 cells in a 6-col grid as
   lg4+md2 / sm3+sm3 / md2, leaving a 4-column empty gap — a violation of the existing
   "bento cell count = content count / no empty tile" rule that the gate had not caught
   mechanically.

## Rule changes (the durable fix)
| File | Change |
|------|--------|
| `craft/taste.md` (Color discipline) | Added **"Derive the palette FAMILY from the product — do NOT default to the house look"** + the **third-altitude slop test** (could an outsider guess this is a ProdigeUI/AI-house page from its dark-mono-warm signature alone?). Routes light/dark, hue temperature, and commitment level from product meaning. Anti-neon guard reaffirmed as NOT a mandate to go dark-mono-warm. |
| `craft/taste.md` (Hero discipline) | Added **"Negative space must be ACTIVATED, never dead"** — full-viewport centered heroes / tall CTA blocks with few elements read as bugs; activate with an anchor, bigger type, or less min-height/padding. Documents the absolute-layer-forced-in-flow specificity bug and its fix. |
| `craft/design-system-routing.md` | New subsection under "When you DO invent": **route the palette family from the product before picking hex** (light/dark → hue → commitment), so inventing a system never means defaulting to the house reflex. |
| `quality-gate/anti-ai-slop.checklist.md` | Two new P1 Soft Tells (**house-look-by-default / third-altitude**, **dead negative space**) + two new mechanical checks (third-altitude house-style test, no-dead-space / absolute-layer-still-absolute). |
| `craft/AGENTS.md` | taste.md index entry annotated with the palette-family routing, third-altitude test, and activated-negative-space rule. |

## Benchmark files fixed (to the new bar)
- `nova-with-ui-ux-pro-max.html` — hero + contact blank space fixed (blob specificity raised
  to stay absolute; oversized outline wordmark added to activate the hero void; hero top pad
  9→7rem, contact 7→6rem; contact detail line added).
- `nova-with-prodigeui-v7.html` — capabilities bento rebalanced to lg4+md2 / md2+md2+md2
  (5 cells fill exactly, no empty tile) + a consistent monoline icon set for per-cell substance.

## Audit basis (honest scope)
No NEW external sites were fetched this round. The palette-purpose findings reuse the
already-documented reference-site audit (Antimetal, Plasma, Tokens Studio, Infinite Machine,
Eternal, et al. — see `nova-rebenchmark-report.md` / `modern-product-baseline.md`) plus the
ui-ux-pro-max product→style→color→type routing observed directly in its NOVA build. The new
rules are the actionable output of that audit applied to ProdigeUI's own reflex — which is
what the earlier audits had not turned inward on.

## Still honest about
- None of the builds were browser-rendered; the blank-space and bento-gap diagnoses are from
  reading the CSS/grid math, and the fixes should be confirmed by opening the files.
