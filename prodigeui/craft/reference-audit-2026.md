# Reference-Site Token Audit 2026 (the empirical tuning base)

> **What this is.** Real design tokens harvested from 21 award-winning / best-in-class 2026
> sites with a headless browser (Playwright) — computed styles, `:root` vars, font stacks,
> easing curves, durations, radii, motion libraries, and **scroll-depth probing** (each page
> was actually scrolled to trigger reveals, not screenshotted). Source data:
> `benchmark/tokens-report.json`; digest: `benchmark/summarize-tokens.mjs`.
>
> **Why it exists.** ProdigeUI's craft was strong but its dark-mode instinct drifted toward a
> *white-hot floodlit* hero and a *single flat ember* accent — an AI-house tell. These are the
> concrete, measured corrections, with the numbers that justify each rule. Cite this file from
> Steps B/C/E of `brief-to-art-direction.md`. These are **defaults to beat**, not a lookbook to
> copy: the concept still chooses.

Sites audited: tokens.studio, eternal.co, stateofaidesign.com, getmilana.ai, okapa.com,
webflow.com, aileenis.online, bevel.health, infinitemachine.com, auto.inc, spade.com,
crosby.ai, antimetal.com, luffu.com, jackiezhang.co.za, shopify editions w26, ondo.finance,
hill.com, fable.co, plasma.org, nestjs.com.

---

## 1. Brightness discipline on dark bases (fixes "hero too bright")

**Measured fact.** Tasteful dark sites use a **deep near-black base** and carry accent light as
an **extremely low-alpha ambient glow**, never a white-hot floodlight.

| Site | base bg | accent light |
|---|---|---|
| getmilana.ai | `#000000` | pink radial `rgba(253,142,183, 0.2 → 0.01)` and `0.2 → 0.05` |
| hill.com | `#080a09` | ambient `oklab(... / 0.07)` |
| nestjs.com | `#050303` | one red `#EA2845` |
| shopify w26 | `#000000` | `oklab(0 0 0 / 0.05)` overlays |
| spade / fable / plasma | `#000000` | 0.05-alpha ambient orbs |
| jackiezhang | `#212121` | warm accents, no bloom |

**Rules.**
- Dark base = deep near-black (`L ≤ 0.12` OKLCH). No "dark gray #1e1e2e" cop-out.
- Ambient accent glow alpha stays **0.05–0.20**. A radial/mesh behind the hero peaks well under
  0.25 alpha. There is **no white-hot core** — the brightest stop is a cool tint, not `#FFF`.
- Any scroll-driven brightness ramp peaks **modest** (target ≤ ~0.45 normalized), never ≈1.0.
- The base must still read as near-black at the hero fold; the glow *suggests* light, the page
  does not *become* light.

## 2. Color: curated multi-hue set OR one confident accent (never muddy mono)

**Measured fact.** Award sites do one of two things — and ProdigeUI's flat-mono-ember was
neither, so it read generic.

**Pattern A — curated multi-hue accent set sharing a temperature:**
| Site | set |
|---|---|
| eternal.co | coral `#FF6259` → pink `#FF368B` + teal `#54D9D3` + amber `#FFB854` + yellow `#FFE88A` |
| tokens.studio | lavender `#A499FF` + yellow `#FFCA38` + cyan `#38E8F5` + purple `#7034EA` |
| stateofaidesign | lavender `#CDABFE` + orange `#FE7141` + acid `#F0FF1C` + cyan `#99EEFF` |
| auto.inc | coral `#EC665B` + periwinkle `#6283FA` + sky `#8BD9F7` + pink `#ED4088` |
| getmilana.ai | pink→magenta gradient on black |

**Pattern B — one confident accent on a near-neutral field:**
| Site | accent |
|---|---|
| infinitemachine | `#FF4C24` (single orange) |
| webflow | `#146EF5` (single blue) |
| nestjs | `#EA2845` (single red) |
| crosby | `#DF000C` (single red) |
| ondo | `#FF7424` |

**Rules.**
- If you go multi-hue, ship a **3–4 hue set that shares a temperature/energy** (the eternal
  coral→pink→amber warm family; the tokens.studio cool lavender→cyan family) — a *spectrum*,
  not a rainbow. Gradients ramp *within* the set (coral→pink), not across the wheel.
- If you go single-accent, make it **saturated and confident** on a genuinely neutral field.
- **Never** a single low-life accent that neither commits to mono-confidence nor to a curated
  set — that is the flat "AI ember on black" tell.
- A "supernova/ignition" concept legitimately earns a **blue-white core + ember/coral + violet
  plasma** spectrum: multi-hue tension that is still concept-true.

## 3. Type: line-height floor 0.86, tight tracking, distinctive display face

**Measured display headlines (size / line-height / tracking):**
| Site | size | line-height | tracking |
|---|---|---|---|
| stateofaidesign | 120px | 114px (**0.95**) | −7.2px (~−0.06em) |
| nestjs | 192px | 182px (0.95) | normal |
| auto.inc | 96px | 96px (**1.0**) | −4.8px (−0.05em) |
| tokens.studio | 80px | 72px (**0.90**) | −2.4px (−0.03em) |
| bevel | 80px | 80px (1.0) | −2.4px (−0.03em) |
| webflow | 80px | 83px (1.04) | −0.8px |
| spade | 84px | 88px (1.05) | −0.84px |
| hill | 72px | 79px (1.10) | −3.6px (−0.05em) |
| fable | 72px | 62px (**0.86**) | normal |

**Rules.**
- Display **line-height ≥ 0.86, target 0.9–1.0.** `0.82` clips ascenders/descenders — banned.
- Never let a hero title clip: pair the tight leading with `padding` headroom OR
  `overflow: visible`; verify glyph tops/bottoms are not cut.
- Tight negative tracking on display (`−0.03em` to `−0.06em`) — but leading stays ≥ 0.86.
- Distinctive display faces dominate (Almarena, Söhne, Beausite, Outfit, naNSuperX, Heldane,
  ppMori, Manrope, Helvetica Now Display, WF Visual Sans, ABC Arizona Flare). Inter appears only
  as a *deliberate* paired face (hill, fable) — never the unconsidered reflex display.

## 4. Radii: pill (999px) ubiquitous; cards 8–32px

- Pills/buttons/tags = `999px`/`100px` almost everywhere (infinitemachine `999px`, eternal
  `100px`, plus many reporting the max-radius sentinel `3.35e7px` = fully rounded).
- Cards/containers = `8–32px` (fable 12/8/24, plasma 8/30, ondo 8/24, spade 6, tokens 12/10/16).
- Use a **radius system** (pill for controls/tags, mid for cards), not one reflexive `2xl`.

## 5. Motion: ease-out curves, 0.15–0.5s, long scroll, real engine stack

- **Easing** is ease-out custom cubic-bezier: eternal `(0.34,…)`, stateofaidesign `(0.44,…)`,
  webflow `(0.455/0.645/0.165)`, plasma `(0.22/0.16/0.2/0.33)`, getmilana `(0.16,…)`,
  infinitemachine `(0.215/0.625)`. ProdigeUI's committed entrance `cubic-bezier(0.23,1,0.32,1)`
  is in-family — keep it.
- **Durations** 0.15–0.5s for UI transitions; occasional **3s** ambient loop (shopify).
- **Scroll narratives are long:** shopify 57.6× vh, okapa 46.8×, infinitemachine 18.7×,
  spade 15.7×, bevel 14.9×, eternal 13.2×, plasma 12.8×, stateofaidesign 12.5×, webflow 12.1×,
  luffu 11.3×, tokens 10.6×, hill 10.1×. An expressive page earns a **multi-screen** scroll story,
  not a single fold.
- **Engine stack** for MOTION ≥ 7: GSAP + ScrollTrigger + **Lenis smooth-scroll** (bevel, luffu,
  webflow all ship Lenis), plus canvas/WebGL where the *thing* matters (getmilana mesh, webflow
  three.js, spade/hill/ondo/shopify/okapa canvas). Framer Motion is the React-side equivalent
  (tokens, eternal, stateofaidesign, auto.inc). **Add Lenis** to ProdigeUI engine builds for the
  felt "weight" of these references — GSAP + canvas alone misses the smooth-scroll cohesion.

---

## 6. The explicit quality bar — three exemplars to match

When a brief says "make it award-grade," these three measured references are the bar; name which
one the concept is closest to and match its *discipline*, not its look.

- **nestjs.com — confidence through scale + restraint.** Deep near-black `#050303`, ONE accent
  (`#EA2845`), a MASSIVE display face (Manrope 192px / LH .95). Lesson: monumental type + a single
  committed accent + ruthless restraint beats clutter. Reach for this when the concept is bold and
  singular.
- **okapa.com — immersive, dimensional, long.** `#000` base, canvas + video richness, scroll depth
  ~46× viewport, parallax layers, playful bold shapes. Lesson: an expressive page earns a
  *multi-screen* scroll narrative with real depth (canvas motes, parallaxed layers, a pinned
  scrubbed moment), not a single fold with fades.
- **tokens.studio — editorial refinement + micro-motion.** Huge distinctive display (Almarena
  ExtraBold 80px / LH .90 / ls −.03em), a contrasting body voice (serif against the grotesk),
  curated cool multi-hue, framer-grade interaction polish. Lesson: type contrast (a display face +
  a genuinely different second voice), tracking/leading discipline, and *designed* micro-interactions.

**The craft moves that close the gap to these (beyond tokens/color/type):**
- **A micro-motion signature** (pointer-fine, additive): a lerped cursor-glow + magnetic primary
  buttons. This is the single clearest "someone designed the interactions" tell. See
  `engine-interactivity.md` §11d.
- **Imagery cohesion:** unify sourced/placeholder photos under ONE accent-tied duotone so they read
  as a commissioned set, not random stock. Feature sections and testimonials ship real imagery.
  See §11e.
- **A pinned, scrubbed hero moment** (scale via transform, Lenis-synced) for the immersive okapa
  feel — without blanking content (§11a) or clipping the wordmark (§11c).

## Applying this to a build (the checklist)

- [ ] Dark base is deep near-black (`L ≤ 0.12`); ambient glow alpha 0.05–0.20; no white-hot core.
- [ ] Scroll brightness ramp peaks modest (≤ ~0.45), never floods the fold.
- [ ] Color is either a temperature-shared 3–4 hue set OR one confident saturated accent — not flat mono.
- [ ] Display line-height ≥ 0.86; no glyph clipping — gradient headings verified `scrollH===clientH` (C6).
- [ ] Pill radius on controls/tags; card radius 8–32px; one radius system.
- [ ] Ease-out curves, UI durations 0.15–0.5s.
- [ ] MOTION ≥ 7 ships a real engine moment + Lenis smooth-scroll + a multi-screen scroll story.
- [ ] Reveal integrity: no element double-bound to IO `.reveal` AND `gsap.from(opacity)` (C7).
- [ ] Micro-motion signature present on MOTION ≥ 7 (cursor-glow + magnetic), pointer-fine + reduced-motion gated.
- [ ] Imagery is art-directed/cohesive (one duotone); feature sections + testimonials ship real images (C8).

## Now embodied in the kit (not just prose)

These measured lessons are wired into the operational defaults, so a build inherits them
without re-reading this file:

- **`tokens/primitive.tokens.json`** — added `effect.glow.ambient-min` (0.05),
  `effect.glow.ambient-max` (0.20), `effect.glow.bloom-peak` (0.45) encoding the dark-hero
  brightness discipline (§1); added `palette.ignite.{400,500,600}` (`#ff6a3d`/`#ff4d15`/`#e03500`)
  as the audit's confident single-accent family (§2); added `scale.radius.x3l` (24px) and
  `scale.radius.x4l` (32px) to cover the measured card range (§4).
- **`tokens/build/tokens.css`** — same values surfaced as `--prodigeui-glow-*`,
  `--prodigeui-color-ignite-*`, `--prodigeui-radius-x3l/x4l` for direct use.
- **`themes/creative-dark.theme.json`** — retuned OFF flat AI-purple `#8b5cf6` (the exact tell
  its own gate C4c flags) to a concept-true nova spectrum: `ignite` ember **primary** + violet
  plasma **secondary** on the already-deep near-black (`neutral.s950`) base (§1, §2).

## Related
- `craft/brief-to-art-direction.md` — Steps B (palette family + brightness), C (type), E (motion)
- `craft/taste.md` — hex/scale discipline inside the derived family
- `craft/patterns/engine-interactivity.md` — the engine moment (now includes Lenis)
- `quality-gate/anti-ai-slop.checklist.md` — brightness + line-height binary gates
- `tokens/primitive.tokens.json` + `tokens/build/tokens.css` — glow/ignite/radius tokens above
- `themes/creative-dark.theme.json` — nova-spectrum default (no reflex AI-purple)
