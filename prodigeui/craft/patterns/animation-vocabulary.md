# Animation Vocabulary

> A reverse-lookup glossary: turn a vague description of a motion effect into its precise
> term, so you can prompt for it, build it, or review it by name. For NAMING an effect, not
> designing one — pair with `craft/patterns/motion-craft.md` to build it and
> `skills/motion-review/SKILL.md` to review it.
>
> Distilled from emil skills' animation-vocabulary. Read for intent, not keywords: users
> describe what they *see* ("springy", "slides off", "draws itself in"), not the name.

## Entrances & exits
- **Fade in / out** — appear/disappear via opacity.
- **Slide in** — enters from off-screen (a side).
- **Scale in** — grows from smaller to full, usually with a fade.
- **Pop in** — appears with a slight overshoot, bounces into place.
- **Reveal** — uncovered gradually via clip-path or mask.
- **Enter / Exit** — the animation played when added to / removed from the screen.

## Sequencing & timing
- **Keyframes** — defined points (0/50/100%) the browser fills between.
- **Interpolation / Tween** — generating the in-between frames.
- **Stagger** — animate items one after another with a small delay; a cascade.
- **Orchestration** — timing multiple animations to feel like one coordinated motion.
- **Delay · Duration · Fill mode** — start offset · length · which frame's styles persist before/after.
- **Stepped** — divided into discrete steps (a countdown).

## Movement & transforms
- **Translate · Scale · Rotate · Skew** — move / resize / spin / shear.
- **3D tilt / Flip · Perspective** — rotateX/Y for depth; how strong the depth reads.
- **Transform origin** — the anchor a scale/rotate grows or spins from.
- **Origin-aware animation** — an element animates out of its trigger (popover from its
  button), not from its own center (the CSS default).

## Transitions between states
- **Crossfade** — one fades out as another fades in, same spot.
- **Continuity transition** — keeps the user oriented by visually connecting before/after.
- **Morph** — one shape smoothly becomes another (Dynamic Island).
- **Shared element transition** — an element travels + transforms from one position to
  another (thumbnail expanding into a card).
- **Layout animation** — size/position change animates to the new spot instead of snapping.
- **Accordion / Collapse** — height expands/collapses to show/hide.
- **Direction-aware transition** — slides one way forward, the opposite way back.

## Scroll
- **Scroll reveal** — elements fade/slide in as they enter the viewport.
- **Scroll-driven animation** — progress tied directly to scroll position.
- **Parallax** — background/foreground move at different speeds for depth.
- **Page / View transition** — animation between routes; browser morphs shared elements.

## Feedback & interaction
- **Hover effect · Press/Tap feedback** — cursor-over change · scale-down on click.
- **Hold to confirm** — a progress fill while holding.
- **Drag · Drag to reorder · Swipe to dismiss** — grab/move, rearrange, fling off-screen.
- **Rubber-banding** — resistance + snap-back past a boundary (iOS overscroll).
- **Shake / Wiggle · Ripple** — error jitter · circle expanding from a tap.

## Easing
- **Easing** — how speed changes over time.
- **Ease-out** — fast→slow; the default for UI and anything responding to the user.
- **Ease-in** — slow→fast; usually avoided on UI (feels sluggish).
- **Ease-in-out** — slow-fast-slow; for on-screen A→B moves.
- **Linear** — constant; spinners/marquees only.
- **Cubic-bezier · Asymmetric easing** — custom curve · accel/decel at different rates (more alive).

## Spring (physics)
- **Spring** — motion from tension/mass/damping, not a fixed duration.
- **Stiffness/Tension · Damping · Mass** — pull strength · settle speed / bounce · heaviness.
- **Bounce · Momentum · Velocity** — overshoot · carried motion · speed+direction (carried into
  the next animation when interrupted).
- **Interruptible animation** — can be redirected mid-flight instead of finishing first.
- **Perceptual duration** — how long a spring *feels* done though it keeps micro-settling.

## Looping & ambient
- **Marquee · Loop · Alternate (yoyo)** — continuous scroll · repeat · forward-then-reverse.
- **Orbit · Pulse · Float · Idle** — circle around · gentle scale/opacity · weightless drift · subtle waiting motion.

## Polish & effects
- **Blur · Clip-path · Mask** — soften/mask · clip to a shape (reveals, sliders) · soft-edged reveal.
- **Before/after slider · Line drawing** — draggable wipe between images · SVG path that draws itself.
- **Text morph · Typewriter · Number ticker · Tabular numbers** — char-by-char change · typed
  reveal · rolling digits · fixed-width digits so numbers don't shift.
- **Skeleton / Shimmer** — placeholder with a moving sheen while loading.

## Performance
- **Frame rate (FPS) · Jank · Dropped frame** — frames/sec (60 baseline) · stutter · a missed frame.
- **Compositing · will-change** — GPU moves an element on its own layer · a hint to promote it early.
- **Layout thrashing** — animating width/height/top/left forces per-frame layout recalc (jank).

## Principles
- **Purposeful animation · Anticipation · Follow-through · Squash & stretch** — motion serves a
  function · small wind-up · parts settle after the main move · deform to convey weight.
- **Perceived performance · Frequency of use · Spatial consistency** — the right motion feels
  faster · seen-more = subtler · elements keep identity/position across states.
- **Hardware acceleration · Reduced motion** — animate transform/opacity for GPU · honor
  `prefers-reduced-motion`.

## Related
- `craft/patterns/motion-craft.md` · `motion/choreography.md` · `skills/motion-review/SKILL.md`
