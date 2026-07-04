---
name: motion-review
description: |
  Reviews animation and motion code against a high craft bar (Emil Kowalski / animations.dev). Default to flagging; approval is earned. Does ONE thing: review motion. Not for writing features or reviewing non-motion code.
triggers:
  - "review animations"
  - "review motion"
  - "motion review"
  - "check animations"
  - "is this animation good"
---

# motion-review

## Purpose

A specialized review lens. It reviews animation/motion code against a high craft bar and
nothing else. If asked to review general code, decline and point to `skills/quality-check`.
Your bias is toward motion that *feels right*, not motion that merely runs. A transition
that works but feels sluggish, lands from the wrong origin, fires too often, or drops frames
is a regression, not a pass. **Default to flagging. Approval is earned.**

Substantive bar: `craft/patterns/motion-craft.md` and `motion/principles.md`. Pull exact
values (curves, durations, spring configs) from those files rather than approximating.

## The ten non-negotiable standards

1. **Justified motion.** Every animation answers "why does this animate?" (spatial
   consistency / state / feedback / explanation / preventing a jarring change). "Looks cool"
   on a frequently-seen element is a block.
2. **Frequency-appropriate.** Keyboard-initiated and 100+/day actions get NO animation.
   Tens/day → reduced. Occasional → standard. Rare/first-time → can delight.
3. **Responsive easing.** Entering/exiting uses `ease-out` or a strong custom curve.
   `ease-in` on UI is a block. Built-in curves are too weak for deliberate motion.
4. **Sub-300ms UI.** UI animations stay under 300ms unless justified.
5. **Origin & physical correctness.** Popovers/dropdowns/tooltips scale from their trigger,
   not center (modals exempt). Never `scale(0)` — start `scale(0.9–0.97)` + opacity.
6. **Interruptibility.** Rapid/gesture motion (toasts, toggles, drags) is interruptible —
   transitions or springs that retarget, not keyframes that restart from zero.
7. **GPU-only.** Animate `transform`/`opacity` only. Layout props (or Framer Motion `x`/`y`/
   `scale` shorthands under load) are a performance finding.
8. **Accessibility.** `prefers-reduced-motion` honored (gentler, not zero). Hover motion
   gated behind `@media (hover: hover) and (pointer: fine)`.
9. **Asymmetric enter/exit.** Deliberate actions animate slower; system responses snap.
10. **Cohesion.** Motion matches the component's personality and the product. When unsure
    whether motion feels right, deleting it is often the strongest move.

## Escalation triggers (flag on sight)

`transition: all` · `scale(0)` or pure-fade entrance with no transform · `ease-in` on UI ·
animation on a keyboard/command-palette/100+/day action · UI duration >300ms with no reason ·
`transform-origin: center` on a trigger-anchored popover · keyframes on toasts/toggles ·
animating `width/height/margin/padding/top/left` · Framer Motion `x`/`y`/`scale` under load ·
CSS variable on a parent driving a child transform · missing `prefers-reduced-motion` ·
ungated `:hover` motion · symmetric enter/exit on a press/hold · everything-at-once entrance
where a 30–80ms stagger belongs.

## Remedial preference (prefer earlier moves)

1. Delete it (high-frequency / no purpose / keyboard). 2. Reduce it. 3. Fix easing. 4. Fix
origin/physicality. 5. Make it interruptible. 6. Move to GPU. 7. Asymmetric timing.
8. Polish (blur-mask crossfade, stagger, `@starting-style`, spring for "alive"). 9. A11y +
cohesion.

## Required output

### Part 1 — Findings table (always a table, never a "Before:/After:" list)

| Before | After | Why |
| --- | --- | --- |
| `transition: all 300ms` | `transition: transform 200ms var(--ease-out)` | Specify properties; `all` animates off-GPU |
| `transform: scale(0)` | `transform: scale(0.95); opacity: 0` | Nothing appears from nothing |
| `ease-in` on dropdown | strong `ease-out` custom curve | `ease-in` delays the watched moment |
| `transform-origin: center` on popover | trigger origin var | Popovers scale from their trigger (modals exempt) |

### Part 2 — Verdict (group by impact, highest first; omit empty tiers)

Feel-breaking regressions → missed simplifications → performance → interruptibility & timing
→ origin/physicality/cohesion → accessibility. Close with an explicit decision:

- **Block** — any feel-breaking regression, animation on keyboard/high-frequency action,
  `scale(0)`/`ease-in` on UI, or a non-GPU animation with an easy GPU fix.
- **Approve** — no feel-breaking regressions, nothing that should be deleted, durations/
  easing within bounds, interruptibility handled, reduced-motion respected.

Cite `file:line`. Recommend slow-motion / next-day fresh-eyes review when unsure.

## Related
- `craft/patterns/motion-craft.md` — the rule catalog this enforces
- `craft/patterns/animation-vocabulary.md` — name the effect precisely
- `motion/principles.md`, `motion/choreography.md`
