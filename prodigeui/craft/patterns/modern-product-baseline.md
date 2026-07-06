# Modern Product-Landing Baseline (2025–2026)

> **Why this file exists.** ProdigeUI's craft library was strong on *anti-slop rules* but
> weak on a positive, current picture of what world-class product/brand landings actually
> look like right now. This is that reference — distilled from a set of shipped, award-grade
> sites, not from books (many print/UX books show conventional layouts that already read as
> dated on the web). Use it as the taste target when a brief lands in the SaaS / product /
> agency / fintech / dev-tool / creative-studio space.
>
> **Reference set (studied for pattern, not copied):** Antimetal, Plasma, Tokens Studio,
> Infinite Machine (Olto), Eternal, State of AI Design, Milana, Webflow, Bevel, Auto.inc,
> Spade, Crosby, Ondo, Fable, Shopify Editions, NestJS, Aileen Is, Jackie Zhang.
> Verified from markup where server-rendered (Antimetal/Plasma/Tokens = Next.js on Vercel);
> the animation-heavy ones are client-rendered React and were read via their known,
> publicly-documented build (R3F/Three.js/GSAP/Lenis). Treat specifics as *direction*, and
> confirm any single site's current state before citing it to a client.

## The one-paragraph signature

A 2026 premium product landing is **quiet chrome + one committed idea + real motion**: a
restrained near-monochrome or tinted-neutral surface, ONE refined accent (not neon), a
confident mid-size variable-font display headline with generous whitespace, a **real product
artifact** as the hero anchor (UI mockup, 3D object, or footage — not an abstract particle
field), and **scroll that drives a narrative** (pinned/scrubbed reveals, a repeating-wordmark
marquee, sticky product walkthroughs) on top of Lenis smooth scroll. Copy is short,
declarative, outcome-first; numbers are real and footnoted, never invented.

## Typography & font choice

- **Hero scale is register-dependent (important correction).** For **B2B product / SaaS /
  dashboard** briefs, the premium hero sits ~`clamp(2.4rem, 5vw, 4.6rem)` — impact from
  whitespace + a real product artifact, not raw size (Antimetal, Plasma, Linear). But for
  **expressive / creative / agency / portfolio / brand-launch** briefs, BIG art-directed type
  is the signature and should stay big: `clamp(2.8rem, 11vw, 9rem)`, even to ~11rem, weight
  700-800, line-height ~0.86, italic accent word. Do NOT shrink an expressive hero toward the
  product ceiling — that reads timid and stiff. (An earlier revision applied the product
  ceiling to everything and flattened the creative builds; this corrects it.)
- **Variable fonts with optical sizing.** Baselines use variable faces and `font-optical-
  sizing: auto` so display and body share one family gracefully. Prefer a variable grotesk
  or a neo-grotesk with real weight range over two static faces.
- **Tracking:** display `-0.02` to `-0.035em`; body `0`; short caps labels `+0.04` to `0.08em`.
- **Measure:** body `60–72ch`. `text-wrap: balance` on headings, `pretty` on prose.
- **Hierarchy by weight + space, not just size.** A 500-weight line with air around it can
  out-rank a larger 400 line. Avoid the graduated 400→500→600→700 ladder; jump weights.

## Color & contrast (the biggest v5-era correction)

- **Restraint is the trend, not saturation.** Baselines are near-monochrome / tinted-neutral
  + ONE refined accent. **Neon / fluorescent accents (acid lime, hot cyan, electric magenta)
  now read as AI-techy slop**, not premium. Retire the "distinctive lime `#b8ff3a`" reflex.
- **Accent taste test (run before committing an accent):** would this color appear in a
  considered brand system (Linear, Stripe, Vercel, Antimetal, Plasma), or only in an
  AI-generated "tech" page? If the latter, desaturate and/or deepen it. A confident accent
  usually sits at OKLCH chroma ~0.10–0.18, not the 0.25+ fluorescent zone.
- **Dark surfaces are tinted, not pure.** Near-black carries a faint hue toward the brand
  (cool blue-black, warm ink) rather than `#000`. On light, a true off-white or a
  brand-tinted neutral — never the banned warm-cream default.
- **Contrast still gates everything:** body ≥4.5:1, large ≥3:1, placeholder ≥4.5:1. Verify on
  the actual surface, including over media.

## Spatial design

- **Whitespace is the luxury signal.** Sections breathe (`clamp(6rem, 12vh, 10rem)` block
  padding); density is reserved for one or two "spec" moments (a comparison table, a tier
  grid).
- **Numbered section index — reconciled.** A *consistent running index* (`01 / 02 / 03…`
  labelling the page's real sections, as Antimetal does) is CRAFT and welcome. The banned
  pattern is a *decorative* number stuck above every heading with no sequential meaning.
  Rule: number a series only if the numbers are a true, continuous index of the page.
- **Asymmetry + one full-bleed break** per page (a marquee, a full-width media band, a
  color-shift section) so the scan path leaves the center axis.

## Motion & engine (what "alive" means now)

- **Scroll drives a narrative, it doesn't just trigger fades.** The premium signal is
  content that *transforms* with scroll position: a pinned section whose product mockup
  advances through states (scrub), a horizontal pin-pan gallery, a sticky device that swaps
  screens, layered parallax at different depths. Fade-in-on-enter everywhere is the template.
- **Repeating-wordmark marquee is a current signature.** Plasma's `SpendEarnSend`, Tokens
  Studio's `Tiny Tokens Big Impact` — a slow linear marquee of the brand's own verbs/claim,
  ONE per page, is a cheap, high-taste move. (Not a logo ticker by reflex — the brand's words.)
- **Prefer a concept-tied REAL anchor over an abstract particle field.** Ranked best→worst
  for a hero engine moment: (1) a real 3D product/object (R3F/Three.js — Infinite Machine),
  (2) a scroll-scrubbed product-UI walkthrough (Plasma/Tokens Studio), (3) a restrained
  generative shader tied to the concept, (4) — only if nothing above fits — a particle/
  constellation field. Particle constellations and floating low-poly blobs are now clichés;
  use only with a real conceptual reason and a distinct visual treatment.
- **Timing:** 100 / 300 / 500; ease-out expo; no bounce on entrances; exits ~75% of enter.
  Ambient loops (marquee, shader, 3D idle) run continuously but subdued; everything has a
  `prefers-reduced-motion` final-state path.

## Modern stack (what to reach for, and when)

| Need | Reach for | Notes |
|------|-----------|-------|
| Smooth scroll base | **Lenis** (~7kb) | Near-universal on these sites. `duration ≤1.2`; sync to ScrollTrigger; off under reduced-motion. |
| Scroll-driven narrative | **GSAP + ScrollTrigger** | pin/scrub/timeline/batch. 1–2 pinned sections max. `scrub` a number, not `true`. |
| React component motion | **Framer Motion** (`motion`) | layout animations, `AnimatePresence`, `whileInView`, spring for direct manipulation. |
| Real-time 3D anchor | **React Three Fiber + drei** (or vanilla Three) | lazy-init on visibility, cap DPR ≤2, pause off-screen, static fallback on reduced-motion / low-power. |
| Generative background | **WebGL/GLSL shader** | dim (≤15% over content), behind everything, RAF paused off-screen, CSS gradient fallback. |
| State/page morphs | **View Transitions API** (+ FLIP fallback) | feature-detect `document.startViewTransition`; durations ≤0.4s; disable under reduced-motion. |
| Micro-interactions | **WAAPI** (`element.animate`) | interruptible, composited, cheaper than a library for one-offs (button press, toast, count-up). |

**Auto-trigger contract (every engine element):** feature-detect → lazy-init via
IntersectionObserver / ScrollTrigger when the element enters the viewport → pause RAF when it
leaves → disable under `prefers-reduced-motion` → downgrade on mobile / `hardwareConcurrency
≤4` → animate transform/opacity/filter only → clean up on unmount / route change. ONE ambient
system per page (never particles + shader + 3D together).

## Responsive

- **Design the mobile composition, don't just reflow.** Baselines ship distinct mobile
  artwork/mockups (Plasma has `-mobile` image variants, separate hero mockups). Horizontal
  pin-pan becomes a vertical stack or a swipe carousel on small screens; the 3D anchor
  becomes a static hero image.
- **Breakpoints as real redesign points** (≈375 / 768 / 1024 / 1440). Fluid `clamp()` between
  them so nothing snaps. Test heading copy at each width — no overflow (part of the design).
- **Touch:** gate hover-only motion behind `@media (hover:hover) and (pointer:fine)`; hit
  targets ≥44px; respect safe-area insets.

## Interaction

- **Show the real product.** Interactive tier/plan comparison (Plasma), tabbed toggles
  (Virtual/Physical), FAQ accordions, live token/color swatches, an embedded mini-demo. Real
  UI beats a decorative illustration of UI.
- **One primary action, repeated.** A single clear CTA intent ("Book a demo", "Get started")
  in nav + hero + footer — not three synonyms.
- **State completeness:** hover / focus-visible / active (`translateY` or `scale(.98)`) /
  disabled / loading (shape-matched skeleton, not spinner) / empty / error. Keyboard-operable.

## UX writing (see `craft/ux-writing.md` for the full rules)

- **Outcome-first, 3–7 words, declarative.** "Production that runs itself." "One account for
  global money." "Design systems, fully automated." State the result, not the category.
- **Eyebrow = new information** (status/momentum/proof), never a restatement of the headline.
- **Numbers are real and footnoted, never invented.** Plasma uses superscript legal refs on
  every claim. If you can't source a metric, don't fabricate one — use a labelled placeholder
  or cut it. (Directly retires the "120+ launches" invented-metric habit.)
- **No hype words** (revolutionary, seamless, cutting-edge, unleash) and no em-dash in copy.

## Design system

- Token-driven throughout (one accent, one radius system, one shadow scale tinted to bg hue).
- `font-variant-numeric: tabular-nums` on every metric/stat/price.
- Real optimized imagery (`avif`/`webp`, responsive `srcset` / `next/image`), real brand SVGs
  (Simple Icons) — never text wordmarks pretending to be logos, never a colored box where a
  product shot belongs.
- One icon family, one stroke width, monoline `currentColor` (no emoji as icons).

## Related
- `craft/patterns/engine-interactivity.md` — the engine recipes this file sets taste for
- `craft/taste.md` — the mechanical hard-rules (now updated with the accent-taste + numbered-index reconciliation)
- `craft/ux-writing.md` — the copy rules referenced above
- `quality-gate/anti-ai-slop.checklist.md` — the gate (now includes neon-accent + particle-cliché tells)
