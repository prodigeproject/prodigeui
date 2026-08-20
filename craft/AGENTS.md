# ProdigeUI Craft Library — Reference Implementations

> **This is the missing half of ProdigeUI.** The rest of the kit tells you what NOT
# ProdigeUI Craft Library — Reference Implementations

> **This is the missing half of ProdigeUI.** The rest of the kit tells you what NOT
> to do (constraints, tokens, anti-slop). This folder shows you what TO do — the
> actual advanced techniques that separate a cinematic, memorable interface from a
> competent-but-forgettable one.
>
> **Rules and tokens prevent bad output. Craft produces great output. You need both.**

## How to use this library (Generative Synthesis Engine)

1. **Read the brief and execute Intent & Product Read.** Derive the emotional brand stance, user intent, and domain requirements.
2. **Dynamic Taste & Theme Synthesis.** Synthesize custom color tokens (`--prodigeui-*`), font pairings, and material depth on the fly using `themes/generative-theme-synthesis.md` — do NOT rely on hardcoded JSON presets.
3. **Generative Layout & Engine Craft.** Organically synthesize layout geometries, asymmetric bento grids, and JavaScript interactive engines using `craft/generative-craft-engine.md` — do NOT copy hardcoded HTML recipes verbatim across unrelated briefs.
4. **Authentic Domain Copywriting.** Write compelling, brand-specific storytelling copy using `craft/high-craft-copywriting.md`. Zero prompt instruction leaks or debug text allowed (`(CLICK TO...)`).
5. **Enforce Non-Negotiable Guardrails.** Verify 0 inline HTML styles, 100% WCAG AA contrast (4.5:1 / 7.0:1+), `prefers-reduced-motion`, and strict container boundary containment (`overflow: hidden;`).

## Pattern index

| Pattern | File | What it delivers |
|---------|------|------------------|
| Video hero + crossfade loop | `patterns/video-hero-crossfade.md` | Cinematic full-bleed video with seamless rAF fade loop |
| Liquid glass | `patterns/liquid-glass.md` | Translucent control/navigation material when hierarchy and backdrop support it; never a default content-card skin |
| Magnetic hover | `patterns/magnetic-hover.md` | Cursor-attracting elements (buttons, portraits) |
| Text reveal | `patterns/text-reveal.md` | Word/char blur-in, scroll-linked opacity sweep |
| Scroll parallax | `patterns/scroll-parallax.md` | Depth via differential scroll speed |
| Sticky card stack | `patterns/sticky-card-stack.md` | Cards that stack and scale on scroll |
| Marquee | `patterns/marquee.md` | Infinite / scroll-driven horizontal ticker |
| Cursor spotlight mask | `patterns/cursor-spotlight-mask.md` | Reveal a second image through a soft trailing circle |
| Bento grid | `patterns/bento-grid.md` | Asymmetric feature grid with hierarchy |
| HLS / streaming video | `patterns/hls-video.md` | Adaptive-bitrate background video |
| Fluid display type | `patterns/fluid-display-type.md` | Huge responsive headlines with clamp() and tight tracking |
| Grain / noise overlay | `patterns/grain-noise-overlay.md` | Concept-bound texture for material or image cohesion; omit when it only disguises an unresolved composition |
| Effects catalog (extended) | `patterns/effects-catalog.md` | 30+ compact recipes: decrypt text, 3D tilt, Siri orb, gooey morph, conic border, glow/shimmer buttons, number-flow, mask reveals, named easings |
| **Motion craft** | `patterns/motion-craft.md` | **Interaction-level polish: committed easing curves, entrance physics (never scale(0)), origin-aware popovers, interruptibility, asymmetric timing, `@starting-style`/WAAPI/clip-path, GPU/perf traps. Read for any interactive build.** |
| **Interaction patterns** | `patterns/interaction-patterns.md` | **Modern accessible implementation: native `<dialog>`/`inert`, Popover API + anchor positioning (overflow-clip escape), roving tabindex, skip links, undo-over-confirm, forms, touch/native/nav/chart baselines.** |
| Animation vocabulary | `patterns/animation-vocabulary.md` | Reverse-lookup glossary: name a motion effect before building/reviewing it |
| **Motion personality** | `patterns/motion-personality.md` | **4 archetypes (Playful/Premium/Corporate/Energetic), the 3 motion layers (Primary/Secondary/Ambient), asymmetric enter/exit timing, emotion→curve mapping. Pick ONE personality per project.** |
| **Advanced effects** | `patterns/advanced-effects.md` | **11 high-impact CSS/JS effects: clip-path reveals, cursor-glare 3D tilt, variable-font animation, shimmer, count-up, blur masks, velocity-matched, scroll-driven, avatar distance-falloff, icon morph + a ShaderToy-adaptable fragment catalog.** |
| **Engine interactivity** | `patterns/engine-interactivity.md` | **Optional engine techniques for concept-bound narrative or product understanding: GSAP ScrollTrigger, smooth scroll, Three.js, WebGL/GLSL, canvas, View Transitions, and interactive charts. MOTION is a prompt to evaluate the technique, never proof that the page needs it.** |
| **Modern product baseline** | `patterns/modern-product-baseline.md` | **The positive 2025–2026 taste target distilled from shipped award-grade sites (Antimetal, Plasma, Tokens Studio, Infinite Machine, Eternal…): restrained mono + ONE refined accent (anti-neon), confident mid-size variable-font display, scroll-driven narrative + repeating-wordmark marquee, real product anchors, modern stack table (Lenis/GSAP/Framer/R3F/WAAPI/View-Transitions). Read for any product/SaaS/agency/fintech/dev-tool/studio brief.** |
| Responsive patterns | `patterns/responsive-patterns.md` | Exact breakpoint behavior per component (nav, hero, bento, carousel, masonry, pricing, footer) + universal responsive rules |
| Component recipes | `recipes/*.recipe.md` | Copy-paste bug-free component recipes: operational-saas-hero (warm paper/editorial operational SaaS landing with tilted live decision record & variable Recursive typography), segmented-toggle, horizontal-carousel, masonry-gallery, pricing-table, testimonial, mobile-nav (full HTML/CSS/JS + a11y + common mistakes) |

## Must-read companions
| Doc | Purpose |
|-----|---------|
| `model-robust-generation.md` | **Preserve quality across models without freezing composition.** Defines convergence invariants, generative freedom, research interpretation, and evidence expected from a fresh build. |
| `design-read.md` | **START HERE, before any code.** Mandatory brief inference → declare the one-line Design Read → set the Three Dials → apply the Soul Formula (80% proven + 20% distinctive, incl. an engine-grade moment at MOTION≥0.7). This is the process gate that prevents default/soulless output. |
| `taste.md` | **The anti-generic + polish heuristics.** Mechanical rules that turn competent-but-forgettable into distinctive. Read before any expressive build. Includes font/palette anti-defaults (anti-neon accent guard + **product-purpose palette-FAMILY routing + the third-altitude "house-style" self-reference test** so the dark+ember+grotesk reflex is no longer a default + numbered-index reconciliation + register-aware hero scale), layout tension, section separation, hero proportions, and the **"negative space must be ACTIVATED, never dead"** rule (incl. the absolute-blob-forced-in-flow layout bug). |
| `ux-writing.md` | **Copy is design.** Outcome-first headlines, eyebrow = new info, real+footnoted numbers (never invented), one CTA intent, hype/em-dash bans, microcopy + voice self-audit. Read before writing any visible string. |
| `composition.md` | **Page-level assembly.** How to compose a full page and choose a hero archetype. |
| `compositions/` | **Full-page reference compositions** — complete known-good skeletons (the layer above atomic recipes). |
| `design-system-routing.md` | **Before inventing tokens:** decide whether to reach for an official system (Fluent/Carbon/Material/Radix/shadcn/govuk/uswds) for functional product UI, or invent for expressive work. Plus stack/perf conventions. |
| `design-lenses.md` | **Adjustment commands** — apply a focused lens to EXISTING output (bolder, quieter, distill, harden, polish, animate, colorize, typeset, layout, delight, overdrive, clarify, adapt, optimize, critique, audit). |
| `styles/` | **Aesthetic preset catalog** — `styles/style-presets.md` (movements: brutalism, editorial, neon, claymorphism, glass, premium…) + `styles/brand-presets.md` (Linear/Vercel/Apple/Notion/Stripe/Claude/Primer). Use when the brief names/implies an aesthetic. |

## Craft principles (read once)

1. **One dominant technique per section.** A hero has ONE signature move, not five.
2. **Motion is choreographed, not sprinkled.** Stagger, sequence, and scroll-link
   deliberately. See `motion/choreography.md`.
3. **Depth must earn its role.** Grain, glass, shadow, and blur are optional tools for
   hierarchy, material, feedback, or brand meaning. Flatness is valid when the content
   structure and typography already carry the concept.
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
