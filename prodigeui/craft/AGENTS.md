# ProdigeUI Craft Library — Reference Implementations

> **This is the missing half of ProdigeUI.** The rest of the kit tells you what NOT
> to do (constraints, tokens, anti-slop). This folder shows you what TO do — the
> actual advanced techniques that separate a cinematic, memorable interface from a
> competent-but-forgettable one.
>
> **Rules and tokens prevent bad output. Craft produces great output. You need both.**

## Why this exists

ProdigeUI was originally built as a constraint system: measurable rules, a token
architecture, and an anti-slop checklist. That prevents ugliness but does not produce
beauty. Real reference sites (video-hero landing pages, figma-site portfolios,
award-style microsites) are great not because they avoid purple gradients, but because
they use concrete, well-executed techniques: crossfading video backgrounds, liquid-glass
chrome, magnetic hover, choreographed text reveals, cursor-spotlight masks, sticky card
stacks, scroll-linked parallax.

None of those are reducible to a JSON rule. They are **recipes** — real code you adapt.
That is what lives here.

## How to use this library

1. **Read the brief and pick the aesthetic ambition.** Expressive use-cases
   (landing, portfolio, product launch, agency, creative tool) should reach for craft
   patterns by default — not just tokens.
2. **Select 2–5 patterns** that fit the concept. Do not use all of them; craft is about
   intentional selection, not maximalism. One hero technique + one motion signature +
   one texture layer is usually enough.
3. **Copy the recipe, then adapt** the tokens, colors, timing, and content to the
   project. Every recipe is written to be self-contained and pastable.
4. **Always keep the reduced-motion fallback** included in each recipe.
5. **Run the quality gate** — but note the gate now rewards intentional craft (see
   `quality-gate/positive-patterns.md`), it does not punish it.

## When craft applies vs when it doesn't

| Use-case | Craft ambition | Typical patterns |
|----------|---------------|------------------|
| Landing / product launch | HIGH | video-hero, text-reveal, magnetic-hover, marquee, bento |
| Portfolio / agency | HIGH | cursor-spotlight, sticky-stack, parallax, fluid-display-type |
| Creative tool / brand site | HIGH | liquid-glass, grain-overlay, choreographed entrances |
| SaaS marketing page | MEDIUM | one signature motion + restrained texture |
| SaaS app / dashboard | LOW | micro-interactions only (hover, state transitions) |
| HRIS / data-dense admin | MINIMAL | no decorative craft; clarity first |

Craft ambition tracks the `DESIGN_VARIANCE` and `MOTION_INTENSITY` dials. A dashboard
does NOT get a crossfading video hero. A portfolio absolutely does.

## Pattern index

| Pattern | File | What it delivers |
|---------|------|------------------|
| Video hero + crossfade loop | `patterns/video-hero-crossfade.md` | Cinematic full-bleed video with seamless rAF fade loop |
| Liquid glass | `patterns/liquid-glass.md` | Apple-style translucent chrome with gradient border |
| Magnetic hover | `patterns/magnetic-hover.md` | Cursor-attracting elements (buttons, portraits) |
| Text reveal | `patterns/text-reveal.md` | Word/char blur-in, scroll-linked opacity sweep |
| Scroll parallax | `patterns/scroll-parallax.md` | Depth via differential scroll speed |
| Sticky card stack | `patterns/sticky-card-stack.md` | Cards that stack and scale on scroll |
| Marquee | `patterns/marquee.md` | Infinite / scroll-driven horizontal ticker |
| Cursor spotlight mask | `patterns/cursor-spotlight-mask.md` | Reveal a second image through a soft trailing circle |
| Bento grid | `patterns/bento-grid.md` | Asymmetric feature grid with hierarchy |
| HLS / streaming video | `patterns/hls-video.md` | Adaptive-bitrate background video |
| Fluid display type | `patterns/fluid-display-type.md` | Huge responsive headlines with clamp() and tight tracking |
| Grain / noise overlay | `patterns/grain-noise-overlay.md` | Film-grain texture that kills the "flat AI" look |
| Effects catalog (extended) | `patterns/effects-catalog.md` | 30+ compact recipes: decrypt text, 3D tilt, Siri orb, gooey morph, conic border, glow/shimmer buttons, number-flow, mask reveals, named easings |
| **Motion craft** | `patterns/motion-craft.md` | **Interaction-level polish: committed easing curves, entrance physics (never scale(0)), origin-aware popovers, interruptibility, asymmetric timing, `@starting-style`/WAAPI/clip-path, GPU/perf traps. Read for any interactive build.** |
| **Interaction patterns** | `patterns/interaction-patterns.md` | **Modern accessible implementation: native `<dialog>`/`inert`, Popover API + anchor positioning (overflow-clip escape), roving tabindex, skip links, undo-over-confirm, forms, touch/native/nav/chart baselines.** |
| Animation vocabulary | `patterns/animation-vocabulary.md` | Reverse-lookup glossary: name a motion effect before building/reviewing it |
| **Motion personality** | `patterns/motion-personality.md` | **4 archetypes (Playful/Premium/Corporate/Energetic), the 3 motion layers (Primary/Secondary/Ambient), asymmetric enter/exit timing, emotion→curve mapping. Pick ONE personality per project.** |
| **Advanced effects** | `patterns/advanced-effects.md` | **11 high-impact CSS/JS effects: clip-path reveals, cursor-glare 3D tilt, variable-font animation, shimmer, count-up, blur masks, velocity-matched, scroll-driven, avatar distance-falloff, icon morph + a ShaderToy-adaptable fragment catalog.** |
| **Engine interactivity** | `patterns/engine-interactivity.md` | **The "premium agency" layer (gated by MOTION dial): GSAP ScrollTrigger (pin/scrub/timeline/horizontal-pan), Lenis smooth scroll, Three.js real-time scenes, WebGL/GLSL shader backgrounds, canvas particle systems, AudioContext audio-reactive, View Transitions+FLIP, skeleton screens, interactive charts, dev-tool aesthetic. Static page at MOTION≥7 = FAIL.** |
| Responsive patterns | `patterns/responsive-patterns.md` | Exact breakpoint behavior per component (nav, hero, bento, carousel, masonry, pricing, footer) + universal responsive rules |
| Component recipes | `recipes/*.recipe.md` | Copy-paste bug-free component recipes: segmented-toggle, horizontal-carousel, masonry-gallery, pricing-table, testimonial, mobile-nav (full HTML/CSS/JS + a11y + common mistakes) |

## Must-read companions
| Doc | Purpose |
|-----|---------|
| `design-read.md` | **START HERE, before any code.** Mandatory brief inference → declare the one-line Design Read → set the Three Dials → apply the Soul Formula (80% proven + 20% distinctive, incl. an engine-grade moment at MOTION≥7). This is the process gate that prevents default/soulless output. |
| `taste.md` | **The anti-generic + polish heuristics.** Mechanical rules that turn competent-but-forgettable into distinctive. Read before any expressive build. Includes font/palette anti-defaults, layout tension, section separation, hero proportions. |
| `composition.md` | **Page-level assembly.** How to compose a full page and choose a hero archetype. |
| `compositions/` | **Full-page reference compositions** — complete known-good skeletons (the layer above atomic recipes). |
| `design-system-routing.md` | **Before inventing tokens:** decide whether to reach for an official system (Fluent/Carbon/Material/Radix/shadcn/govuk/uswds) for functional product UI, or invent for expressive work. Plus stack/perf conventions. |
| `design-lenses.md` | **Adjustment commands** — apply a focused lens to EXISTING output (bolder, quieter, distill, harden, polish, animate, colorize, typeset, layout, delight, overdrive, clarify, adapt, optimize, critique, audit). |
| `styles/` | **Aesthetic preset catalog** — `styles/style-presets.md` (movements: brutalism, editorial, neon, claymorphism, glass, premium…) + `styles/brand-presets.md` (Linear/Vercel/Apple/Notion/Stripe/Claude/Primer). Use when the brief names/implies an aesthetic. |

## Craft principles (read once)

1. **One dominant technique per section.** A hero has ONE signature move, not five.
2. **Motion is choreographed, not sprinkled.** Stagger, sequence, and scroll-link
   deliberately. See `motion/choreography.md`.
3. **Texture beats flatness.** Grain, glass, depth, and shadow separate craft from
   template. A single grain overlay transforms a flat gradient.
4. **Real media > placeholder boxes.** Use real video/image assets. See
   `assets/asset-sourcing.guide.md`.
5. **Typography carries the personality.** A display font at `clamp(...)` scale with
   negative tracking does more than any decoration.
6. **Performance is part of craft.** GPU-only transforms, preloading, `will-change`
   only during animation, passive scroll listeners, cleanup on unmount.
7. **Always ship the reduced-motion path.** Craft that ignores accessibility is slop.

## Stack note

Recipes are written in React + TypeScript + Tailwind (the baseline stack) with
`framer-motion` / `gsap` / `lucide-react` where relevant. Each recipe flags which
techniques are pure CSS and portable to vanilla HTML or any framework.
