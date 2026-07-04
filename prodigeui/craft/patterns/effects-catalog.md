# Craft Effects Catalog (extended)

> Compact recipes for distinctive, production-quality effects mined from the component and
> motion repos (seraui, smoothui, ui-neumorphism, hyperframes, transitions.dev,
> tailwindcss-motion, ant-motion, cssanimation). These complement the 12 full recipes in
> `craft/patterns/`. Each entry: what it looks like → core technique → when to use.
> Use sparingly and deliberately (see `craft/taste.md`); always gate motion by reduced-motion.

## Text effects

**Decrypting text (self-decoding scramble-in)** — text materializes left-to-right out of
random ASCII, each char locking in. `requestAnimationFrame` loop with an `iteration` counter;
reveal real char `i` once `iteration/speed > i`, else a random symbol; stop at
`text.length*speed`. One-shot on mount. Use: hero headlines, terminal/hacker/dev-tool vibe.

**Scramble on hover** — simpler hover-triggered variant: `setInterval` randomizes chars,
`setTimeout` restores. Guard with `(hover:hover)` + reduced-motion. Use: nav links, labels.

**Fuzzy text (per-scanline RGB jitter)** — CRT/analog tear that intensifies on hover. Render
text to an offscreen canvas, `getImageData`, then each frame copy row-by-row offset each
scanline by `(random-0.5)*intensity`; lerp intensity base→hover. Works on any font. Use:
distinctive headings, poster/404.

**Aurora / shimmer text** — flowing gradient through letters. `background: linear-gradient`,
`background-size: 200-400%`, `-webkit-background-clip: text` + transparent fill, animate
`background-position`. Keep an `sr-only` real-text copy. Deliberate accent word only (gradient
text is a slop tell when used by default — see taste.md).

**Wave text** — letters ripple in a traveling sine. Split to chars; each animates
`y:[0,-amp,0,amp*0.5,0]` infinite, `delay = i*stagger`, ease `[0.37,0,0.63,1]`. Use: playful.

**Per-word kinetic reveal with decaying slide (80→12px)** (hyperframes) — each word enters
from a slide distance that *shrinks* per word (80px, 64, 50, …12), mimicking a camera
settling. The decay is what reads as pro vs a flat uniform stagger.

## Borders & buttons

**Conic-gradient animated border** — a highlight sweeps around a card/pill perimeter.
`@property --border-angle {syntax:'<angle>'}`; keyframe 0→360deg; background layers
`linear-gradient(...) padding-box` (fill) + `conic-gradient(from var(--border-angle),...)
border-box` with `border:1px solid transparent`. 6s linear. Use: featured/pricing/sign-in card.

**Shimmer button (rotating conic arc)** — lighter sibling: one bright arc orbits the border.
`@property --angle`; `conic-gradient(from var(--angle), transparent 25%, accent, transparent
50%)` behind an inner solid pill (1.5px gap reveals it). Use: premium/processing CTA.

**Glow button (layered radial blobs)** — soft colored bloom from a corner + outer halo,
theme-aware, no image. Nested divs: outer `box-shadow` halo + corner `radial-gradient(circle
60px at 0% 100%, …)` + inner faint highlight; hover `scale(1.05)`, active `scale(0.95)`.

**Neo-brutalist card (hard offset shadow)** — flat solid (non-blurred) offset shadow that
grows on hover. `border-2`, `shadow-[4px_4px_0_#000]` → hover `shadow-[8px_8px_0_#000]` +
`-translate-y-1`. Use: brutalist/retro/playful.

**Clip-corners button** — 4 SVG corner brackets spread outward on hover (targeting reticle).
Absolutely-positioned triangles springing ±4px. Use: sci-fi/technical CTAs.

## Surfaces & cards

**3D tilt card (pointer perspective + glare + reactive shadow)** — card tilts toward cursor;
content floats. Track pointer `xPct/yPct` (−0.5..0.5) → `rotateX = yPct*-max`, `rotateY =
xPct*max` on `perspective(1000px)`; inner content `translateZ(...)` with `preserve-3d`; glare
= `radial-gradient at glowX% glowY%` (screen blend); shadow offset from rotation; ease
`cubic-bezier(0.23,1,0.32,1)`; reset on leave. IMPORTANT: put the tilt on an inner wrapper and
keep a flat outer wrapper to avoid edge flicker. (Distinct from magnetic-hover: perspective,
not translation.)

**Siri orb (conic-gradient metaball)** — soft rotating iridescent blob. `::before` stacks ~6
`conic-gradient`s at different origins, all animated via `@property --angle`; `filter: blur()
contrast()` fuses them into metaballs; `::after` overlays a radial dot pattern with
`mix-blend-mode:overlay` + a radial `mask-image` hollowing the center. Pure CSS. Use: AI
assistant / voice / listening states, loaders, avatars.

**Neumorphic surface system (dual-shadow soft UI)** — extruded same-color surfaces. Bg matches
page; raised = `box-shadow: N N 2N <dark>, -N -N 2N <light>`; pressed = `inset` version.
Define an elevation scale (3/6/9/12/15px). Light/dark by swapping the two shadow tokens. Copy
the token recipe, not a whole lib. Use: tactile calculators/players/toggles (a committed style).

**Gooey morph (SVG goo filter)** — a circular trigger oozes open into a panel with a liquid
bridge. SVG filter `feGaussianBlur(stdDeviation 10)` + `feColorMatrix` alpha ramp +
`feComposite atop`; render a *filtered* blob layer (morph circle→rect via width/height/radius)
under an *unfiltered* clean-text layer. Use: FAB menus, compose triggers.

## Reveals & transitions

**CSS-mask stripe/shutter/iris/diamond/rain reveals** — animate `mask-position` (or
`mask-size`) over a striped/checkerboard/radial mask to wipe content in. Cheaper and more
editorial than opacity fades. (transitions.dev / cssanimation)

**Text highlighter (marker sweep)** — gradient bg, `background-repeat:no-repeat`, animate
`background-size` `0% 100%`→`100% 100%`; `box-decoration-break:clone` to wrap lines; trigger
on `IntersectionObserver`. Use: annotated prose, feature callouts.

**Glint reveal (sweeping shine)** — a `skewX(-30deg)` gradient band sweeps `left: -75%→125%`
across an element once on reveal. Use: premium logo/card arrival.

**Velocity-matched transition** (hyperframes) — the exiting element accelerates (ease-in) and
the entering element decelerates (ease-out) so their speeds match at the cut = perceived
continuous motion. Cheap, large perceived-quality gain on any A→B swap.

**Card-morph anchor / scale-swap** — morph between two elements at the same center by animating
uniform `scale` + radius + surface (NEVER width/height), then cross-fade to the real target.

**Depth-of-field rack focus** — tween `filter: blur()` + slight dim on off-focus layers via a
`--dof` var while the focal element stays sharp. Instant cinematic hierarchy.

## Numbers & feedback

**Number / price flow (odometer)** — changed digits slide vertically (up on increase). Paired
prev/next spans per digit in `overflow:hidden`; add slide-in/out classes on change; stagger
place values ~50ms. Use: stats, prices, live counters.

**Count-up** — `rAF` from 0→value over ~2000ms with `tabular-nums`; optionally grow font-size
with the value for escalating stats. Use: loaders, stat reveals.

**Tactile press + click ripple** — press: `scale 1→0.9→1` overshoot (two adjacent tweens);
ripple: expanding circle with attack-decay opacity from the click point. The micro-feedback
layer that makes buttons feel real.

**Success check draw** — compose fade + rotate ~80deg + Y-bob + SVG stroke-draw
(`stroke-dasharray`/`dashoffset` via `getTotalLength()`). Use: confirmations (skippable, <1s).

## Ambient (restrained, "alive" without loops-everywhere)

**Ambient glow bloom + idle breathe** — soft radial glow behind a hero. Use: hero life
without decoration overload.

  Implementation:
  ```css
  .heroglow{
    position:absolute; top:-10%; right:-5%;
    width:560px; height:560px; pointer-events:none;
    background:radial-gradient(circle, rgba(ACCENT, .16), transparent 68%);
    filter:blur(20px);
  }
  ```
  **Constraints:**
  - Peak gradient alpha ≤ 0.16.
  - Size ≤ 50vw / 560px. Larger = becomes a focal subject (composition C2).
  - filter:blur ≥ 20px to dissolve edges.
  - Gradient terminates to `transparent` by 68–70% radius.
  - z-index: auto or 0; `pointer-events:none`; must sit behind ALL content.
  - A bounded `sine.inOut` yoyo breathe is optional (scale 0.95–1.05, ≥ 6s period).
  - **Hard fail if the glow is visible as a distinct geometric shape** at any viewport.

**SVG path self-draw** — outline draws itself via `stroke-dasharray`/`dashoffset`; measure with
`getTotalLength()`; rotate rings −90° so they start at 12 o'clock.

**Orbital avatars** — avatars on an elliptical ring + SVG connector lines to a center;
rotate→translate→counter-rotate so faces stay upright; staggered fly-in. Use: social proof.

## Named easing curves (add to your motion tokens)

Overshoot / spring family (use for settles and direct-manipulation, NOT default entrances):
- `--ease-smooth-out: cubic-bezier(0.22, 1, 0.36, 1)` — the workhorse decelerate.
- `--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)`; `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)`.
- `--ease-out-back: cubic-bezier(0.18, 0.89, 0.32, 1.27)` — gentle overshoot.
- Bounce (reserve for hover-return / playful): `cubic-bezier(0.34, 1.36, 0.64, 1)`;
  strong: `cubic-bezier(0.34, 1.56, 0.64, 1)` (word-pop). Avoid on entrances (dated).
- CSS `linear()` springs (Chrome/modern): tailwindcss-motion ships `spring-smooth/snappy/
  bouncy` stop-lists with a perceptual-duration multiplier (~1.66 / 2.0 / 5.3). Rule: keep
  blur/opacity/color on the SMOOTH spring; only transform uses the bouncy one.

## Reduced motion & performance (applies to all of the above)
- Every effect needs a `prefers-reduced-motion: reduce` path (final state, no loop).
- Animate `transform`/`opacity`/`filter` only; never layout properties.
- Separate transform from filter/opacity onto different layers under `preserve-3d` to avoid
  flicker. Use `void el.offsetWidth` to force reflow when replaying an animation.
- Never animate `<img>` scale on hover — animate the card around it.
