# Craft Compositions — Full-Page Reference Layouts

> This is the layer that was missing. `craft/patterns/` gives you isolated techniques
> (a video crossfade, a glass panel, a word reveal). But an AI can assemble good techniques
> into a bad page — that is exactly how the messy NOVA happened (a blurry gradient mesh with
> no focal subject, techniques piled on with no compositional spine).
>
> A **composition** is a complete, known-good full-page skeleton: the layout spine, the
> focal subject, the chrome, the section rhythm, the z-index layering, and where each
> technique plugs in. These are distilled from the 73-prompt benchmark taxonomy — they are
> the layouts that recur across award-quality work.

## How to use

1. Pick the composition that matches the brief (table below). When unsure, default to
   **cinematic-video-hero** or **giant-type-hero** — the two most common.
2. Read `craft/taste.md` and `craft/composition.md` FIRST — they set the non-negotiables
   (real focal subject, contrast, restraint, one accent).
3. Copy the skeleton, then swap in the concept: real media, concept-driven palette, a
   deliberate display font (run the font reflex-reject procedure), real copy.
4. Plug technique detail from `craft/patterns/` and `craft/patterns/effects-catalog.md`.
5. Validate against the quality gate (negative slop gate + craft-presence rubric).

## The non-negotiable that these all share

**Every hero is anchored by a REAL focal subject** — full-bleed video, real photography, a
product/UI artifact, a 3D render, or deliberate oversized type over real media. **Never a
blurred CSS gradient/mesh blob as the subject.** (~83% of benchmark heroes use real media;
gradient-mesh-as-subject appears in 0 of 73.)

## Composition picker

| Composition | File | Use when | Focal subject |
|-------------|------|----------|---------------|
| **Cinematic video hero** | `cinematic-video-hero.md` | Brand/product/agency with atmosphere; the default | Full-bleed real video |
| **Giant type hero** | `giant-type-hero.md` | Studio/agency/bold brand; type IS the statement | Oversized display type over real media |
| **Spotlight reveal hero** | `spotlight-reveal-hero.md` | Storytelling (two-image narrative), editorial | Two real images + cursor spotlight |
| **Split editorial / form hero** | `split-editorial-hero.md` | Contact, waitlist, conversational, product+copy | Type/form column + real visual column |
| **Bento showcase page** | `bento-showcase.md` | Feature/product overview, portfolio grid | Real media in a dominant-cell grid |
| **Dark portfolio multi-section** | `dark-portfolio-multisection.md` | Personal/agency portfolio, case studies | Real work imagery + sticky project stack |

## Cross-composition rules (all skeletons obey these)

- **Chrome:** floating pill nav (glass or solid), one primary CTA. Legibility over media
  comes from glass + gradient fades, not a flat dark scrim.
- **Type:** a deliberate display face at fluid `clamp()` scale, leading 0.85–1.0, tracking
  −0.02 to −0.05em; Inter (or similar grotesk) for body.
- **Color:** committed dark OR light base + ONE restrained accent used consistently.
- **Motion:** a choreographed entrance timeline (staggered), one ambient signature (video
  loop / marquee / subtle parallax), micro-interactions on controls. Full reduced-motion path.
- **Media:** real assets, preloaded; `onerror` fallback; never gray placeholder boxes.
- **Completeness:** semantic landmarks, focus-visible, keyboard nav, alt text.
