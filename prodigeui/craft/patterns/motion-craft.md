# Motion Craft — Interaction-Level Polish

> `motion/principles.md` = the rules (frequency gate, reduce-motion, purpose).
> `motion/choreography.md` = sequencing (order, stagger, scroll-link).
> **This document = the interaction-level craft** that makes motion *feel right*: exact
> easing curves, entrance physics, origin, interruptibility, and the performance traps.
>
> Distilled from the sharpest practitioner source in the research set (Emil Kowalski /
> animations.dev), cross-checked against `craft/patterns/effects-catalog.md`. Every rule
> here is mechanical and checkable — it is the difference between motion that "runs" and
> motion that feels engineered. Pair it with the review lens in
> `skills/motion-review/SKILL.md`.

## 0. The decision framework (answer in order, before writing any animation)

### Q1 — Should this animate at all? (frequency gate, hard)
| Frequency | Decision |
|-----------|----------|
| 100+/day (keyboard shortcut, command-palette toggle, list select while typing) | **No animation. Ever.** |
| Tens/day (hover, list nav) | Remove or drastically reduce (≤120ms, opacity/tiny transform) |
| Occasional (modal, drawer, toast) | Standard animation |
| Rare / first-time (onboarding, celebration) | Can add delight |

**Never animate a keyboard-initiated action.** A command palette that pops with a spring
feels slow the 40th time you open it. Raycast has no open/close animation — that is correct.

### Q2 — What is the purpose? (one sentence, or delete it)
Spatial consistency · state indication · explanation · feedback · preventing a jarring
change. "It looks cool" on a frequently-seen element is a fail. When unsure whether motion
helps, the strongest move is usually to delete it.

### Q3 — Easing? (see §1) · Q4 — Duration? (see §2)

## 1. Easing — the built-in curves are too weak

CSS `ease`, `ease-out`, `ease-in-out` lack punch; they read as tentative. Use committed
custom curves. **`ease-in` is banned on UI** — it delays the first moment the user is
watching, so it feels sluggish even at the same duration.

```css
:root {
  /* Strong ease-out — entrances, anything responding to the user */
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  /* Strong ease-in-out — elements already on screen moving A→B */
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  /* iOS-like drawer/sheet curve */
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);
  /* Choreographed hero reveals (matches choreography.md) */
  --ease-hero: cubic-bezier(0.16, 1, 0.3, 1);
}
```

| Situation | Easing |
|-----------|--------|
| Entering / exiting / responding to user | `--ease-out` |
| On-screen move or morph | `--ease-in-out` |
| Drawer / bottom sheet | `--ease-drawer` |
| Hover / color change | `ease` (the one place the built-in is fine) |
| Constant motion (marquee, spinner, progress) | `linear` |

> This SUPERSEDES the Material-style `standard` curve in `motion/principles.md` for
> interaction motion. Keep the token names there; prefer these curve *values* for anything
> the user triggers directly.

## 2. Duration — UI stays under 300ms

| Element | Duration |
|---------|----------|
| Button press feedback | 100–160ms |
| Tooltip / small popover | 125–200ms |
| Dropdown / select | 150–250ms |
| Modal / drawer | 200–500ms |
| Marketing / explanatory | Can be longer |

A 180ms dropdown feels more responsive than a 400ms one. Perceived performance is real: a
faster spinner makes loading *feel* faster at identical load time; an instant tooltip after
the first one makes the whole toolbar feel quick.

## 3. Entrance physics — never from `scale(0)`

Nothing in the real world appears from nothing. Start from `scale(0.95)` (or higher) with
opacity. Even a barely-different initial scale makes the entrance feel physical.

```css
/* Bad */   .enter { transform: scale(0); }
/* Good */  .enter { transform: scale(0.95); opacity: 0; }
```

## 4. Origin-aware popovers

Popovers, dropdowns, and tooltips scale **from their trigger**, not from center. Default
`transform-origin: center` is wrong for almost every anchored overlay. **Modals are the
exception** — they are not trigger-anchored, so they stay centered.

```css
.popover { transform-origin: var(--radix-popover-content-transform-origin); } /* Radix */
.popover { transform-origin: var(--transform-origin); }                        /* Base UI */
```

## 5. Interruptibility — transitions over keyframes for rapid UI

CSS transitions and springs retarget from the current position; `@keyframes` restart from
zero. For anything triggered rapidly (toasts stacking, toggles, drag), use transitions.

```css
.toast { transition: transform 400ms var(--ease-out); }   /* interruptible */
/* avoid @keyframes slideIn for dynamic, re-triggerable UI */
```

## 6. Asymmetric enter/exit

Slow where the user is deciding, fast where the system responds. Exits run ~60–75% of enter
duration. Hold-to-delete: 2s linear on press, snap back 200ms `--ease-out` on release.

## 7. Springs (physics)

Use for drag/momentum, interruptible gestures, "alive" elements (Dynamic Island), decorative
mouse-tracking. Prefer Apple-style params (easier to reason about); keep bounce subtle.

```js
{ type: "spring", duration: 0.5, bounce: 0.2 }   // bounce 0.1–0.3; avoid bounce in most UI
```

For mouse-tracked decoration, interpolate through a spring (`useSpring`) instead of binding
raw pointer values — raw binding feels artificial because it has no momentum. If the effect
is *functional* (a live graph), no animation beats a decorative spring.

## 8. Modern entrance without JS — `@starting-style`

```css
.toast {
  opacity: 1; transform: translateY(0);
  transition: opacity 400ms var(--ease-out), transform 400ms var(--ease-out);
  @starting-style { opacity: 0; transform: translateY(100%); }
}
```
Replaces the `useEffect(() => setMounted(true))` pattern. Fall back to a `data-mounted`
attribute where support is missing. Percentages in `translate()` are relative to the
element's own size — `translateY(100%)` hides a drawer/toast regardless of its height.

## 9. Blur to mask an imperfect crossfade

When two states crossfade and you can see both overlapping, add `filter: blur(2px)` during
the transition — it blends them into one perceived object. Keep blur < 20px (expensive in
Safari).

## 10. Tooltip skip-delay

First tooltip delays (prevents accidental firing); once one is open, adjacent tooltips open
instantly with no animation (`[data-instant] { transition-duration: 0ms }`). Feels faster
without defeating the initial delay.

## 11. clip-path — the underused animation tool

- Reveal L→R: `inset(0 100% 0 0)` → `inset(0 0 0 0)`.
- Scroll image reveal: `inset(0 0 100% 0)` → `inset(0 0 0 0)` on `IntersectionObserver`.
- Before/after slider, tab color-morph (duplicate + clip the active copy), hold-to-delete.
Fully GPU-composited, no extra DOM.

## 12. Performance traps (each is a review-blocker)

- **Only animate `transform` and `opacity`.** Animating `width/height/margin/padding/top/
  left` triggers layout + paint every frame.
- **Framer Motion `x`/`y`/`scale` shorthands are NOT hardware-accelerated** — they run on
  the main thread via rAF and drop frames under load. Use the full string:
  `animate={{ transform: "translateX(100px)" }}`.
- **CSS animations beat JS under load** — they run off the main thread. Use CSS/WAAPI for
  predetermined motion; JS/springs only for dynamic, interruptible motion.
- **Don't drive a child transform by updating a CSS variable on the parent** — it triggers a
  style recalc on every child. Set `element.style.transform` directly.
- **WAAPI** gives JS control with CSS performance (hardware-accelerated, interruptible):
  `el.animate([...], { duration, fill: 'forwards', easing })`.

## 13. Accessibility (mandatory, every pattern)

- `prefers-reduced-motion: reduce` → fewer/gentler, not zero. Keep opacity/color that aids
  comprehension; drop movement/position/scale/parallax.
- Gate hover motion: `@media (hover: hover) and (pointer: fine)` — touch devices fire hover
  on tap and cause false positives.

## 14. Stagger

30–80ms between items; first reveal only (never re-stagger on scroll). Stagger is decorative
— never block interaction while it plays.

## Review your work
Watch animations in slow motion (2–5×) and with fresh eyes the next day. Colors that flash
two overlapping states, wrong origin, and out-of-sync properties are invisible at full speed.

## Related
- `motion/principles.md` · `motion/choreography.md` · `craft/patterns/effects-catalog.md`
- `craft/patterns/animation-vocabulary.md` — name an effect before you build it
- `skills/motion-review/SKILL.md` — the review lens that enforces this file
- `craft/patterns/text-reveal.md`, `magnetic-hover.md`, `video-hero-crossfade.md`
