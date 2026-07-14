# Motion Choreography

> `motion.tokens.json` gives you durations and easings. `principles.md` gives you the
> rules (frequency gate, reduce-motion, purpose). Neither tells you how to make motion
> *perform*. This document is the missing layer: **choreography** — how to sequence,
> stagger, and scroll-link motion so it reads as designed, not sprinkled.
>
> The difference between "text appears" and "text performs" is choreography. It is what
> separates reference-quality motion from a fade-in on everything.

## The three questions choreography answers

1. **Sequence** — in what ORDER do elements move? (not all at once)
2. **Stagger** — what DELAY separates them? (rhythm)
3. **Link** — what DRIVES the motion — time, scroll, or interaction?

## Pattern 1 — Entrance timeline (time-driven, on load)

Elements enter in a deliberate order with increasing delay. The eye is led from the most
important element outward.

```tsx
// Framer Motion — a hero entrance timeline
const order = [
  { el: 'nav',      delay: 0.0,  y: -20 },
  { el: 'headline', delay: 0.15, y: 40  },
  { el: 'subtext',  delay: 0.35, y: 20  },
  { el: 'cta',      delay: 0.5,  y: 20  },
  { el: 'visual',   delay: 0.6,  y: 30  },
];
// each: initial={{opacity:0, y}} animate={{opacity:1, y:0}}
//       transition={{duration:0.7, delay, ease:[0.16,1,0.3,1]}}
```

**Rule:** the hero headline leads (or the visual, if the visual IS the hero). Supporting
elements follow at +0.15–0.2s each. Total sequence < 1s so it feels crisp, not slow.

## Pattern 2 — Stagger (grouped items)

Sibling items (nav links, cards, list rows) animate in with a per-index delay.

```tsx
transition={{ delay: i * 0.08 }}   // 60–100ms between items reads best
```

**Frequency gate:** stagger only the FIRST reveal, and only the first ~5 items. Repeated
rows beyond that appear instantly. Never re-stagger on every scroll (see anti-slop #25).

Stagger formula from research (`motion-design-skill`): `baseDuration / 3 × index`, capped
so the whole sequence stays under ~600ms.

## Pattern 3 — Word / character reveal (the signature move)

The headline reveals word-by-word (blur-in) or char-by-char (slide-in). This is the most
recognizable "crafted" motion. Full code in `craft/patterns/text-reveal.md`.
- Words: `delay: i * 0.1`, 3-step keyframe (blur→half→sharp, y 50→-5→0) for a settle-overshoot.
- Chars: `delay: startDelay + i * 30ms`, translateX(-18px)→0.

## Pattern 4 — Scroll-linked (progress-driven)

Motion bound to scroll position, not time. Used for opacity sweeps, parallax, sticky-stack
scaling, and pinned reveals.

```tsx
const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
```

- **Opacity sweep** (paragraph brightens per-char as it scrolls): `text-reveal.md` variant 3.
- **Parallax** (differential speed): `craft/patterns/scroll-parallax.md`.
- **Sticky stack** (cards scale as they pin): `craft/patterns/sticky-card-stack.md`.
- **Offset grammar:** `['start end', 'end start']` = full travel through viewport;
  `['start 0.8', 'end 0.2']` = starts near bottom, finishes near top.

## Pattern 5 — Interaction-driven

Motion triggered by direct user input. Physicality (spring/overshoot) is ONLY legitimate
here (see anti-slop #20).
- **Magnetic hover:** `craft/patterns/magnetic-hover.md` (asymmetric ease in/out).
- **Press feedback:** `scale(0.98)` on active, 120–150ms.
- **Carousel/crossfade:** lock during transition (`isAnimating`) to prevent double-fire;
  release after the duration. Crossfade bg + position + blur + opacity SIMULTANEOUSLY over
  one shared duration (e.g. 650ms `cubic-bezier(0.4,0,0.2,1)`).

## The three motion layers (assign a budget)

From `motion-design-skill` — every scene has three layers; give each a different intensity:
1. **Primary** — the hero element entering. Full animation budget, leads the sequence.
2. **Secondary** — supporting elements responding to the primary. Staggered, reduced.
3. **Ambient** — background/decoration (video loop, marquee, grain, gentle parallax).
   Lowest intensity, continuous, FIRST to be disabled under reduced-motion.

## Easing cheat-sheet (pair with tokens)

| Situation | Easing | Why |
|-----------|--------|-----|
| Element entering | ease-out `[0.16,1,0.3,1]` | settles into view |
| Element leaving | semantic `motion.easing.exit` custom curve | accelerates away without the CSS `ease-in` keyword |
| On-screen move | ease-in-out `cubic-bezier(0.4,0,0.2,1)` | natural travel |
| Choreographed reveal | ease-out + slight overshoot | physical, alive |
| Marquee / continuous | `linear` | constant speed, no easing |

## Timing cheat-sheet (discrete transitions)

| Element | Duration |
|---------|----------|
| Hover / press feedback | 120–180ms |
| Icon / small state | 150–250ms |
| Card reveal / crossfade | 300–650ms |
| Modal / page transition | 300–600ms |
| Entrance stagger step | 60–100ms between items |

Continuous/ambient motion (video loop, marquee, parallax) is EXEMPT from the discrete
duration cap — it is continuous, not a transition.

## Reduced motion (mandatory, every pattern)

```css
@media (prefers-reduced-motion: reduce) {
  /* Ambient (video loop, marquee, parallax): OFF. */
  /* Entrance/stagger: render final state instantly, no transform. */
  /* Essential state change: keep, but <=100ms and opacity-only. */
}
```

Ambient is first to go, entrances become instant, only essential feedback survives (and
even that is opacity-only, <=100ms). Every `craft/` recipe includes its specific fallback.

## Choreography failure modes (what to avoid)

- Everything animates at once with the same duration → reads as a page "blink", not motion.
- Uniform fade-in on every element → technically motion, zero craft. Sequence it.
- Stagger that never ends (re-fires on scroll) → fatigue. First reveal only.
- Spring/bounce on load elements → cartoonish. Reserve physics for interaction.
- Ambient motion with no reduced-motion path → accessibility failure = slop.

## Related
- `motion/motion.tokens.json` — duration + easing tokens
- `motion/principles.md` — frequency gate, purpose, reduce-motion rules
- `motion/presets/` — enter-exit, state-transition, hover-focus, scroll-based
- `craft/patterns/` — the recipes that implement this choreography
