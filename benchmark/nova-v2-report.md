# Benchmark Report — NOVA (ProdigeUI v2, craft library)

## Purpose
Prove the upgraded methodology: a **deliberately minimal brief** must now produce
cinematic, craft-rich output — the user's baseline expectation.

## Brief given
> "Build a landing page for a creative studio called NOVA."

That is the entire brief. No colors, fonts, layout, images, or techniques specified.
This triggers **Creative Mode** (vague brief → ProdigeUI is the designer).

## What the system produced
`nova-with-prodigeui-v2.html` (standalone, runs in any browser).

Craft applied (each traced to a recipe):
- **Hero signature:** giant fluid ghost display type + animated concept-driven gradient
  mesh + word-by-word blur-in headline + magnetic CTA (`fluid-display-type`, `text-reveal`,
  `magnetic-hover`).
- **Chrome:** liquid-glass nav + stat cards over the mesh (`liquid-glass`).
- **Texture:** film-grain overlay across the page (`grain-noise-overlay`).
- **Motion signature:** entrance timeline with staggered delays + IntersectionObserver
  reveals for below-the-fold + per-word blur stagger (`motion/choreography`).
- **Social proof:** opposing-free client marquee (`marquee`).
- **Work section:** bento grid with ONE dominant hero cell + supporting cells, real
  images with `onerror` fallback + lazy loading (`bento-grid`, `asset-sourcing.guide`).
- **Typography:** Anton (display) + Instrument Serif italic (headline) + Inter (body),
  fluid `clamp()` scale, negative tracking.

## Quality Gate result

### Negative gate (anti-slop) — PASS
- Contrast: body `#f4f2ee` on `#0a0a0b` (very high); CTA `#1a0d07` on `#ff6a3d` (high). Pass.
- Focus-visible: defined globally. Keyboard operable (native buttons/links). Pass.
- Reduced-motion: mesh, marquee, entrances, hover, word-reveal ALL disabled/finalized. Pass.
- FLAG techniques present but in CRAFT form, not SLOP form:
  - Glass → over media, provides contrast (not decoration on flat bg). CRAFT.
  - Gradient mesh → concept-driven warm palette, NOT reflex purple. CRAFT.
  - Big type → systematic fluid ramp with tracking. CRAFT.
  - Decorative motion → choreographed + reduced-motion path. CRAFT.
  - Cards → bento with dominant cell, NOT three equal. CRAFT.
  - CTAs → specific ("Start a project", "See the work"), not "Get Started". CRAFT.

### Positive gate (craft-presence rubric) — 11/12 (target >= 9)
| Dimension | Score | Note |
|-----------|:----:|------|
| Hero signature | 2 | Ghost type + mesh + word reveal + magnetic CTA |
| Typography | 2 | Display + serif + body, fluid scale, tracking |
| Motion choreography | 2 | Timeline + stagger + IO + magnetic + marquee |
| Texture / depth | 2 | Grain + glass + mesh + z-layering |
| Real media | 1 | Real images w/ fallback, but generic stock (not concept-shot) |
| Focal hierarchy | 2 | Bento dominant cell, one CTA per viewport |

## Honest limitations
- **Not rendered here.** Structure validated (82/82 paired tags, valid DOCTYPE, 5 imgs),
  but visual/interaction quality must be confirmed by opening the file in a browser.
- **Media score is 1/2:** picsum stock images are real and degrade gracefully, but a real
  project would use concept-specific photography/film. This is a sourcing limit, not a
  methodology limit.
- **Standalone HTML**, not the React+Vite stack of prompts 1-10 — chosen so it runs with
  zero build. The same craft recipes port directly to React (see each recipe's code).

## Verdict
From a one-line brief, the upgraded system produced a textured, motion-choreographed,
typographically distinctive, hierarchy-driven page — not the flat centered-hero template
the old constraint-only system would have yielded. This is the behavior change the fix set
out to achieve. Open `nova-with-prodigeui-v2.html` to confirm visually.
