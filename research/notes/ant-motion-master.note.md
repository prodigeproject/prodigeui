---
sourceId: ant-motion-master
sourceType: repo
sourceName: "ant-motion-master"
sourceLocation: "Skill & Library/ant-motion-master"
appliedTo: []
---

## Structural Analysis

Ant Design's official motion system as a React component library:

- **Component architecture:** Dedicated React components per animation pattern:
  - `QueueAnim` — Sequential enter/exit animations for lists
  - `TweenOne` — Single-element property tweening
  - `Animate` — CSS transition wrapper
  - `ScrollOverPack` — Scroll-triggered animations
  - `Banner` — Banner/carousel animation patterns
- **Build system:** Webpack configured with multiple output targets
- **Localization:** Chinese documentation (README.cn.md) + English
- **Exhibition demos:** Standalone demo applications showcasing usage
- **Theme.js:** Centralized styling constants

**Architecturally sound patterns:**
- One component per animation category (clear separation of concerns)
- QueueAnim handles the complex problem of animating lists (enter/exit ordering)
- ScrollOverPack solves viewport-triggered animation declaratively
- Exhibition demos as living documentation

**Architectural weaknesses:**
- Tightly coupled to React (not framework-agnostic)
- Theme.js likely contains hardcoded values (not token-driven)
- No accessibility layer (prefers-reduced-motion)
- Animation values embedded in component props (not externalized as tokens)

## Content Quality Audit

**Genuinely valuable content:**
- QueueAnim pattern: Solves the universal UX problem of "how to animate a list appearing." Parameters: `delay`, `duration`, `type` (enter type), `animConfig`. The queue concept (items animate one after another with calculated delays) is architecturally excellent.
- ScrollOverPack: Declarative scroll-triggered animation with configurable viewport threshold. Solves "when does the animation start" problem.
- TweenOne: Single-element animation with specific property targets (equivalent to GSAP .to/.from). Property list: backgroundColor, cornerRadius, opacity, transform properties.
- Banner component: Addresses carousel/hero animation patterns specifically.

**AI Slop indicators:**
- No documented rationale for timing choices (why these default durations?)
- Component props accept raw timing values (no token abstraction)
- No motion principles documentation — purely implementation
- Missing "when to use" guidelines (when QueueAnim vs Animate vs TweenOne?)
- Exhibition demos show WHAT but not WHY
- No guidance on combining components for complex choreography

## Gap Analysis vs Theory

**Strengths:**
- QueueAnim correctly implements the staggered animation pattern (fundamental to choreography)
- ScrollOverPack implements Intersection Observer pattern (performance-conscious approach)
- Component taxonomy covers most UI animation needs (enter/exit, scroll, single-element, sequential)

**Gaps vs theory:**
- No easing curve documentation or selection guidance
- No connection to animation principles (anticipation, follow-through, timing)
- Missing accessibility (prefers-reduced-motion, ARIA live regions for animated content)
- No performance budgets (what happens with 100+ QueueAnim items?)
- No mobile-specific considerations (touch animation patterns)
- No purpose-driven classification (which component for feedback vs navigation vs attention?)
- Queue delay calculation is linear — no curve-based stagger (natural motion decelerates)

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| QueueAnim (staggered list animation) | Add non-linear stagger curves (ease-out delay progression for natural feel). Add max-queue-length cap. Add reduce-motion: show all items immediately. Document: "Use for content lists, NOT for navigation items." |
| ScrollOverPack (viewport-triggered) | Add configurable thresholds with guidelines: "50% visibility for content, 25% for decorative, 0% for critical CTAs." Add performance: limit to 10 simultaneous animations max. |
| TweenOne (single element) | Map property animations to semantic purposes: position→navigation, opacity→presence, scale→emphasis, rotation→playfulness. Each purpose gets token-backed defaults. |
| Banner (carousel animation) | Document anti-patterns: no auto-play without pause control, no carousel for critical content (banner blindness research). Add mandatory aria-live consideration. |
| Component taxonomy (5 types) | Extend taxonomy to cover: micro-interactions (hover/focus), loading states, error states, success feedback, drag/drop. Map each to ProdigeUI motion preset categories. |

## Adaptation Strategy

Ant Motion's value is in its TAXONOMY — the identification of 5 distinct animation component categories maps to ProdigeUI's motion preset system:

1. **QueueAnim** → `motion/presets/enter-exit.json` stagger configuration
2. **TweenOne** → `motion/presets/state-transition.json` single-property transitions
3. **ScrollOverPack** → `motion/presets/scroll-based.json` viewport-triggered presets
4. **Banner** → `motion/presets/enter-exit.json` carousel/hero variant
5. **Animate** → Base CSS transition specifications in motion tokens

The React component approach is NOT adopted (ProdigeUI is framework-agnostic), but the categorization and the PROBLEMS each component solves inform preset design.

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| QueueAnim stagger pattern | `motion/presets/enter-exit.json` | `stagger` configuration block with delay curve | Solves list animation timing; non-linear delay for natural feel |
| ScrollOverPack thresholds | `motion/presets/scroll-based.json` | `viewportThreshold` per element type | Viewport-triggered animation needs purpose-driven thresholds |
| TweenOne property targets | `motion/motion.tokens.json` | Animatable property enumeration | Defines WHICH CSS properties are animation targets |
| Component taxonomy (5 types) | `motion/presets/` | Folder organization (enter-exit, state-transition, hover-focus, scroll-based) | Category-based organization matches Ant Motion's proven taxonomy |
| Exhibition demos pattern | `use-cases/*.json` | Living examples per use case | Examples demonstrate context-appropriate motion usage |
| Theme.js centralization | `motion/motion.tokens.json` | Centralized timing/easing definitions | Single source of truth for motion values |

## Points Copied

- Animation taxonomy: enter/exit sequences, single-element tweens, scroll-triggered, banner/hero, CSS transitions
- QueueAnim stagger concept (sequential delay-based list animation)
- ScrollOverPack viewport threshold concept
- Separation of animation categories into distinct components/presets
- Exhibition/demo pattern for showcasing usage in context

## Points Improved/Fixed

- Stagger calculation changed from linear to ease-out curve (natural deceleration)
- All timing values externalized as Design Tokens (no hardcoded props)
- Added prefers-reduced-motion handling for every animation category
- Added purpose classification per animation type (feedback/navigation/attention/ambient)
- Added performance caps (max simultaneous animations, max queue length)
- Added "when to use" decision matrix missing from original

## Points Adapted

- React components → Framework-agnostic JSON preset specifications
- Component props → Token references with named values
- Theme.js → motion.tokens.json (proper token layer structure)
- Exhibition demos → Use-case JSON files with appropriate motion selections
- Chinese/English documentation → English-only with clear semantic naming (no localization needed for token names)
