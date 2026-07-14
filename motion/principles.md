# Motion Principles

## Purpose

Motion in ProdigeUI serves three functions: guide attention, communicate state, and create spatial continuity.

Motion is never decorative by default. Every animated element must justify its existence through one of these roles. If an animation does not guide the user's eye, confirm a state change, or maintain spatial context during navigation, it is a Quality Gate failure.

## Core Principles

### 1. Purpose-Driven Motion

Every animation must have a reason: feedback, transition, or orientation. Decorative animation without purpose is a quality gate failure.

**Valid purposes:**
- **Feedback**: Confirm user action was received (button press, form submit, toggle switch)
- **Transition**: Bridge between two UI states to preserve context (page change, modal open)
- **Orientation**: Communicate spatial relationships (where content came from, where it went)

**Invalid purposes (Quality Gate failures):**
- Motion purely for visual flair with no informational value
- Looping background animations that do not communicate system state
- Gratuitous entrance animations on static content that the user did not trigger

### 2. Frequency Gate

The more frequently a user triggers an action, the less animation it should have:

| Frequency | Trigger Rate | Motion Budget | Example |
|-----------|-------------|---------------|---------|
| Rare | Monthly or less | Expressive, full choreography (300-600ms) | Onboarding, first-time setup |
| Occasional | Daily | Subtle, fast (150-250ms) | Modal open, navigation switch |
| Frequent | 100s per day | No animation or instant (0-50ms) | Typing, scrolling, list selection |

**Rationale:** Habituation psychology demonstrates that repeated stimuli lose cognitive impact. Animating high-frequency actions creates perceived sluggishness and violates the responsiveness principle.

### 3. Three Motion Layers

- **Primary**: Main action element (receives full animation budget). The focal element entering, exiting, or transforming.
- **Secondary**: Supporting elements (staggered, reduced intensity). Elements that respond to the primary action — adjacent cards shifting, background dimming.
- **Ambient**: Background decorative motion (lowest priority, first disabled). Subtle environmental cues like gradient shifts or idle-state indicators.

**Budget allocation:**
- Primary receives 100% of configured duration
- Secondary receives 60-80% of primary duration, delayed by stagger offset
- Ambient receives 40-60% of primary duration and is always non-essential (disabled under reduce-motion)

**Stagger formula:** `baseDuration / 3 * elementIndex`. Product/UI sequences cap at 600ms;
expressive first-load storytelling may extend to 1500ms when the primary message is visible
within 600ms. Continuous ambient motion is outside the discrete sequence budget.

### 4. Directional Easing

- **Entrance** (appearing): ease-out (decelerate) — elements "land" into position, settling naturally
- **Exit** (leaving): the semantic `motion.easing.exit` accelerating custom curve. Do not use
  the CSS keyword `ease-in` on user-triggered UI; it delays visible feedback.
- **On-screen** movement: ease-in-out — natural acceleration then deceleration for repositioning

> **Interaction motion uses stronger curves.** The Material-style curves below are fine for
> system/ambient transitions, but for anything the user triggers DIRECTLY (buttons,
> dropdowns, toasts, drawers) the built-in-feeling curves read as tentative. Use the
> committed curves in `craft/patterns/motion-craft.md` (`--ease-out: cubic-bezier(0.23,1,
> 0.32,1)`, `--ease-in-out: cubic-bezier(0.77,0,0.175,1)`, drawer `cubic-bezier(0.32,0.72,
> 0,1)`). Also from that file: never animate from `scale(0)` (use `scale(0.95)`+opacity);
> popovers/dropdowns are origin-aware; rapid UI uses interruptible transitions, not keyframes.

**Named easing values (linked to motion tokens):**
- `standard`: cubic-bezier(0.2, 0.0, 0.38, 0.9) — general on-screen movement
- `entrance`: cubic-bezier(0.0, 0.0, 0.38, 0.9) — deceleration into resting state
- `exit`: cubic-bezier(0.4, 0.14, 1.0, 1.0) — acceleration out of view
- `emphasized`: cubic-bezier(0.4, 0.0, 0.0, 1.0) — dramatic transitions for rare events
- `spring`: cubic-bezier(0.175, 0.885, 0.32, 1.275) — playful overshoot for creative contexts

### 5. Duration Budget

Total animation sequence should not exceed the cognitive patience threshold:

| Category | Duration Range | Use Case |
|----------|---------------|----------|
| Micro-interactions | 80-200ms | Tooltips, button feedback, icon transforms |
| Standard transitions | 200-400ms | Cards, panels, modal enter/exit |
| Complex product/UI choreography | 400-600ms max total | Page transitions, multi-element sequences |
| Expressive first-load choreography | 600-1500ms total | Marketing/portfolio storytelling; primary meaning visible by 600ms |

**Hard rule:** Product/UI sequences do not exceed 600ms. Expressive sequences do not exceed
1500ms and may never postpone primary meaning beyond 600ms. Ambient loops are exempt.

**Ratio-based duration computation:** Motion presets should use ratio-based computation (min=base x ratio, max=base/ratio) for proportional relationships. Suggested presets:
- Snappy: fast=100ms, medium=250ms (for data-heavy, high-frequency UIs)
- Default: fast=175ms, medium=410ms (general purpose)
- Cinematic: fast=200ms, medium=500ms (editorial, marketing, storytelling)

**Duration by element size:**
- Small elements (icons, badges, tooltips): 80-150ms
- Medium elements (buttons, cards, inputs): 150-300ms
- Large elements (modals, pages, full-width panels): 300-500ms

### 6. 1/3 Rules

- No element travels more than 1/3 of viewport without a keyframe change (prevents the "sliding" feel that breaks spatial comprehension)
- No more than 1/3 of visible elements in active motion simultaneously (prevents visual chaos and cognitive overload)

**Rationale:** These rules derive from Gestalt grouping principles — the eye struggles to track more than 3 simultaneous motion paths, and long uninterrupted movement lacks reference points for spatial orientation.

### 7. Accessibility First (Reduce-Motion)

`prefers-reduced-motion: reduce` is MANDATORY for all ProdigeUI motion:

- **Disable completely:** All non-essential animations (ambient, decorative, entrance choreography)
- **Essential animations only:** Reduce to opacity-only transitions with duration capped at 100ms
- **Forbidden under reduce-motion:** Position-based animation, parallax, scroll-triggered transforms, scale/rotation transitions, bounce/spring effects

**Implementation pattern:**
```css
@media (prefers-reduced-motion: reduce) {
  /* All non-essential: disabled */
  .motion-ambient,
  .motion-decorative { animation: none; transition: none; }

  /* Essential only: opacity, max 100ms */
  .motion-essential { transition: opacity 100ms linear; }
}
```

**Classification rule:** An animation is "essential" only if removing it entirely would make the user lose track of a state change (e.g., modal appearing). If the user can still understand the state without animation, it is non-essential.

### 8. Doherty Threshold Integration

The Doherty Threshold states that productivity increases sharply when system response time is under 400ms. Any animation or transition that exceeds 400ms without providing intermediate visual feedback violates this threshold and risks the user perceiving the system as unresponsive.

**Rules:**
- If a transition duration exceeds 400ms, an intermediate progress indicator MUST appear within the first 400ms
- Complex choreography sequences (400-600ms total) must show the primary element's animation completing within 400ms; secondary/ambient layers may extend beyond
- Loading states triggered by user action must display a visual change (spinner, skeleton, progress bar) within 400ms of the action
- This threshold applies to perceived responsiveness, not raw animation duration — a 500ms animation that begins immediately (with visible motion from frame 1) satisfies the spirit of the threshold

**Quality Gate link:** The `feedback-timing` criterion enforces this threshold automatically.

## Motion Personality Archetypes

| Archetype | Duration Range | Easing | Use For | Characteristics |
|-----------|---------------|--------|---------|-----------------|
| Restrained | 100-200ms | standard | SaaS, dashboards, tools | Minimal overshoot, subtle opacity changes, functional only |
| Polished | 200-350ms | entrance/exit | Marketing, premium consumer | Smooth springs, coordinated choreography, elegant |
| Playful | 250-400ms | spring | Creative, portfolio, kids | Bounce/overshoot, stagger effects, expressive |
| Energetic | 100-200ms | emphasized | Gaming, interactive apps | Snappy durations, elastic springs, dynamic |

**Archetype selection guidance:**
- Match archetype to the product's personality and user expectations
- A single product uses ONE primary archetype consistently
- Secondary archetype may apply to rare/celebratory moments only (e.g., achievement unlocks in a Restrained SaaS can use Playful for that one moment)

## Preset-to-Principle Links

Each motion preset in ProdigeUI links to one or more principles from this document:

| Preset | Category | Linked Principles |
|--------|----------|-------------------|
| `fade-in` | enter-exit | 1 (Purpose: orientation), 4 (Entrance: ease-out), 7 (Reduce-motion: opacity-only fallback) |
| `fade-out` | enter-exit | 1 (Purpose: orientation), 4 (Exit: ease-in), 7 (Reduce-motion: opacity-only fallback) |
| `slide-up-enter` | enter-exit | 1 (Purpose: orientation), 3 (Primary layer), 4 (Entrance: ease-out), 6 (1/3 travel rule) |
| `slide-down-exit` | enter-exit | 1 (Purpose: orientation), 4 (Exit: ease-in), 6 (1/3 travel rule) |
| `scale-enter` | enter-exit | 1 (Purpose: transition), 4 (Entrance: ease-out), 5 (Duration: micro) |
| `scale-exit` | enter-exit | 1 (Purpose: transition), 4 (Exit: ease-in), 5 (Duration: micro) |
| `state-change` | state-transition | 1 (Purpose: feedback), 2 (Frequency: occasional), 5 (Duration: micro) |
| `color-shift` | state-transition | 1 (Purpose: feedback), 5 (Duration: micro), 7 (Reduce-motion: allowed as essential) |
| `expand-collapse` | state-transition | 1 (Purpose: orientation), 3 (Primary layer), 5 (Duration: standard) |
| `hover-lift` | hover-focus | 1 (Purpose: feedback), 2 (Frequency: frequent — minimal), 5 (Duration: micro) |
| `focus-ring` | hover-focus | 1 (Purpose: feedback), 5 (Duration: micro), 7 (Reduce-motion: allowed as essential) |
| `press-scale` | hover-focus | 1 (Purpose: feedback), 2 (Frequency: frequent), 5 (Duration: micro) |
| `scroll-reveal` | scroll-based | 1 (Purpose: orientation), 3 (Secondary layer), 6 (1/3 rule), 7 (Reduce-motion: disabled) |
| `parallax-depth` | scroll-based | 3 (Ambient layer), 6 (1/3 rule), 7 (Reduce-motion: disabled completely) |
| `stagger-list` | scroll-based | 3 (Secondary layer), 5 (Duration: max 600ms total), 6 (1/3 elements rule) |

## Token Dependencies

All duration and easing values in presets reference Design Tokens from `motion/motion.tokens.json`, not hardcoded values:

- `motion.duration.instant` — 0ms (no animation)
- `motion.duration.micro` — 100ms
- `motion.duration.fast` — 150ms
- `motion.duration.normal` — 250ms
- `motion.duration.slow` — 350ms
- `motion.duration.slower` — 500ms
- `motion.easing.standard` — cubic-bezier(0.2, 0.0, 0.38, 0.9)
- `motion.easing.entrance` — cubic-bezier(0.0, 0.0, 0.38, 0.9)
- `motion.easing.exit` — cubic-bezier(0.4, 0.14, 1.0, 1.0)
- `motion.easing.emphasized` — cubic-bezier(0.4, 0.0, 0.0, 1.0)
- `motion.easing.spring` — cubic-bezier(0.175, 0.885, 0.32, 1.275)

Changing a token value propagates to all presets referencing it (Requirement 5.3).

## Sources

Principles synthesized from:
- design-motion-principles-main (primary framework)
- motion-design-skill-main (layers, frequency gate, 1/3 rules)
- Animation for the Web (timing budgets, performance)
- CSS Animations and Transitions for the Modern Web (easing curves)
- Animation in Design Systems (system-level motion coordination)
- Designing Interface Animation (purpose-driven motion)
- WCAG 2.1 (reduce-motion requirements)
- transitions.dev-main (easing selection, reduce-motion patterns)

---

*Validates: Requirements 5.5*
