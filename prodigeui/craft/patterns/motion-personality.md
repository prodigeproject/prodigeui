# Motion Personality — Archetypes, Layers, and Emotional Mapping

> Motion is not decoration — it communicates personality. A playful app bounces; a premium
> brand decelerates slowly; a corporate tool snaps. This document defines HOW to choose and
> apply motion based on the Design Read, not just WHAT to animate.
>
> Replaces the single "ease-out everywhere" approach with a system of archetypes, layers,
> and emotion-to-curve mapping derived from motion-design-skill + Emil + open-design.

---

## 1. Four Motion Personalities (Pick ONE per project)

| Archetype | Feel | Enter | Exit | Hover | Ambient |
|-----------|------|-------|------|-------|---------|
| **Playful** | Bouncy, alive, overshoot | `cubic-bezier(0.34, 1.56, 0.64, 1)` 400ms | `cubic-bezier(0.55, 0, 1, 0.45)` 250ms | Spring overshoot, scale 1.03 | Gentle float/bob |
| **Premium** | Slow, deliberate, confident | `cubic-bezier(0.16, 1, 0.3, 1)` 600ms | `cubic-bezier(0.4, 0, 1, 1)` 300ms | Smooth lift, no overshoot | Slow breathe/pulse |
| **Corporate** | Snappy, efficient, invisible | `cubic-bezier(0.23, 1, 0.32, 1)` 250ms | `cubic-bezier(0.55, 0, 0.55, 0.2)` 180ms | Color/border only, no movement | None — static |
| **Energetic** | Fast, punchy, percussive | `cubic-bezier(0.22, 0.68, 0, 1.71)` 300ms | `cubic-bezier(0.55, 0, 1, 0.45)` 200ms | Snap scale 0.95→1.02 | Pulse/throb on accent |

### Archetype Selection (from Design Read)

| Design Read signal | Archetype |
|-------------------|-----------|
| Dark-tech, dev-tool, SaaS, Linear-style | **Corporate** |
| Luxury, editorial, fashion, Apple-y | **Premium** |
| Kids, gaming, social, Dribbble, agency portfolio | **Playful** |
| Sports, music, fintech dashboards, hype/launch | **Energetic** |
| Calm, wellness, meditation | **Premium** (slower variant) |

### CSS Token System

```css
:root {
  /* Set these based on chosen archetype */
  --ease-enter: cubic-bezier(0.16, 1, 0.3, 1);    /* decelerate in */
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);         /* accelerate out */
  --ease-hover: cubic-bezier(0.23, 1, 0.32, 1);    /* interactive feedback */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* overshoot (Playful only) */
  --dur-enter: 500ms;
  --dur-exit: 280ms;
  --dur-hover: 200ms;
  --dur-ambient: 6000ms;
}
```

---

## 2. Three Motion Layers (ALL must be present at MOTION ≥ 6)

### Layer 1: Primary Motion (User-triggered reveals)
What the user directly causes or encounters first.
- Hero entrance choreography (headline → subtitle → CTA → image, staggered)
- Section reveals on scroll (IntersectionObserver)
- Button press feedback (scale .97)
- Dialog open/close

### Layer 2: Secondary Motion (Related elements react)
Elements that respond BECAUSE something else moved. This layer creates depth.
- Nav fades in separately from hero (different delay)
- Logos strip slides up AFTER hero settles
- Background glow breathes in AFTER content appears
- Adjacent cards shift when one is hovered (distance-falloff)
- Counter ticks up when metrics section enters viewport

**Without Layer 2, the page feels flat — everything appears at once like a PowerPoint slide.**

### Layer 3: Ambient Motion (Always alive, never distracting)
Constant subtle movement that signals the page is live.
- Heroglow slow scale breathe (0.95→1.05, sine, 6s+)
- Marquee/ticker continuous scroll
- Gradient hue shift (very slow, 30s+)
- Cursor-tracking subtle parallax on decorative elements
- Dot/particle gentle float

**Rules for Ambient:**
- NEVER loops faster than 6 seconds
- NEVER larger than 5% scale change
- NEVER more than 2 ambient effects on screen simultaneously
- ALL disabled under `prefers-reduced-motion`

---

## 3. Asymmetric Timing (Emil Rule)

**Enter and exit MUST use different curves and durations.**

| Direction | Curve type | Duration | Why |
|-----------|-----------|----------|-----|
| **Enter** | Decelerate (fast start, slow end) | 400-600ms | Element arrives and settles gently |
| **Exit** | Accelerate (slow start, fast end) | 200-300ms | Element leaves quickly, doesn't linger |

```css
/* CORRECT — asymmetric */
.panel-enter { transition: transform 450ms var(--ease-enter), opacity 450ms var(--ease-enter); }
.panel-exit  { transition: transform 220ms var(--ease-exit), opacity 180ms var(--ease-exit); }

/* WRONG — symmetric (feels robotic) */
.panel { transition: all 300ms ease; }
```

### Stagger Budget
- **Max total entrance duration:** 1200ms from first to last element
- **Per-element delay:** 60-90ms (never more than 120ms — feels sluggish)
- **Max elements in one stagger group:** 8 (beyond that, batch in groups)

---

## 4. Emotion-to-Motion Mapping

| Emotion to convey | Motion technique | Curve |
|-------------------|-----------------|-------|
| **Trust / Reliability** | Slow decelerate, no overshoot, consistent | `cubic-bezier(0.16, 1, 0.3, 1)` 500ms |
| **Delight / Surprise** | Spring overshoot, slight bounce | `cubic-bezier(0.34, 1.56, 0.64, 1)` 400ms |
| **Urgency / Speed** | Snappy, short duration, no ease-in | `cubic-bezier(0.23, 1, 0.32, 1)` 200ms |
| **Calm / Wellness** | Very slow, gentle, sine-like | `cubic-bezier(0.45, 0, 0.55, 1)` 800ms |
| **Power / Impact** | Slam — fast in, brief hold, tiny settle | `cubic-bezier(0.22, 0.68, 0, 1.1)` 300ms |
| **Elegance / Luxury** | Ultra-slow decelerate, generous duration | `cubic-bezier(0.16, 1, 0.3, 1)` 700ms |

---

## 5. Choreography Rules

### The 1/3 Rule
Divide entrance into three beats:
1. **Setup** (0-30%) — background/container appears, sets the stage
2. **Hero** (30-70%) — primary content enters with the most dramatic motion
3. **Details** (70-100%) — secondary elements fill in (CTAs, metadata, decorative)

### Sequencing (not simultaneous)
```
0ms     — nav fades in (Layer 2)
100ms   — hero eyebrow reveals
250ms   — headline slides up (the big move)
450ms   — subtitle fades in
600ms   — CTA buttons appear
800ms   — hero image scales in from 1.02
1000ms  — ambient glow starts breathing (Layer 3)
1200ms  — logos strip slides up (Layer 2)
```

### Never Do
- ❌ All elements appear at the same time with same delay
- ❌ Entrance longer than 1500ms total
- ❌ Exit animation that blocks the next user action
- ❌ Ambient motion that competes with primary content
- ❌ Hover effects that move more than 4px / scale more than 1.05

---

## 6. Interruptibility (Emil)

- **Hover animations:** CSS `transition` — naturally interruptible. User can move away mid-transition.
- **Entrance reveals:** one-shot, non-interruptible. Fire and forget.
- **Toggle/slide:** MUST be interruptible. Use CSS `transition` (not `animation`) so reversing mid-way starts from current position.
- **Drag/gesture:** use `useMotionValue` or WAAPI — never `setState` on every frame.

---

## 7. Reduced Motion (Mandatory)

```css
@media (prefers-reduced-motion: reduce) {
  /* Layer 1: show final state immediately */
  .rv { opacity: 1 !important; transform: none !important; transition: none !important; }
  
  /* Layer 2: disable secondary motion */
  .nav, .logos { transition: none; }
  
  /* Layer 3: kill all ambient */
  .heroglow, .marquee-track { animation: none; }
  
  /* Interactive: reduce to color-only feedback */
  .btn:active { transform: none; }
  .cell:hover { transform: none; }
}
```

**Rule:** Under reduced motion, the page must still feel complete and polished — just static. All content visible, all states accessible. Motion adds delight, not information.

---

## 8. Origin-Aware Transforms (Emil)

Every animated element must transform from a logical origin:
- **Popovers/menus:** `transform-origin` at the trigger button position
- **Dialogs:** `transform-origin: center` (appears from center of viewport)
- **Cards revealing:** `transform-origin: top center` (grow from their heading)
- **Slide-in panels:** `transform-origin` on the edge they enter from

```css
/* Popover opens from its trigger */
#product-menu { transform-origin: top center; }

/* Dialog appears from center */
dialog[open] { transform-origin: center; animation: scale-in 280ms var(--ease-enter); }

/* Bottom sheet rises from below */
.sheet { transform-origin: bottom center; }
```

---

## Related
- `craft/design-read.md` — determines which archetype to use
- `craft/patterns/motion-craft.md` — the existing motion reference (compatible, not replaced)
- `craft/patterns/effects-catalog.md` — specific effect implementations
- `craft/patterns/advanced-effects.md` — high-impact visual techniques
