---
sourceId: Motion-development
sourceType: repo
sourceName: "Motion-development"
sourceLocation: "Skill & Library/Motion-development"
appliedTo: []
---

## Structural Analysis

iOS/Swift animation library by CosmicMind focused on view controller transitions and shared-element animations:

- **Platform:** iOS (Swift/UIKit)
- **Core concepts:**
  - `MotionIdentifier` — Tags views for shared-element matching across screens
  - Transition types — Push, Slide, ZoomSlide, Cover, Page, Fade, Zoom
  - `MotionAnimation` structs — Property animation configurations
  - AutoReverse capability — Bidirectional animation support
- **Animation properties:** backgroundColor, cornerRadius, fade, rotate, size, spring, depth, position, scale, spin, translate
- **Shared-element matching:** Identifier-based system connecting source and destination views

**Architecturally sound patterns:**
- Identifier-based shared element system: Tag views with IDs → framework automatically animates matching elements between screens. Declarative and powerful.
- Transition type enum: Named transitions (Push, Slide, ZoomSlide, Cover, Page, Fade, Zoom) provide vocabulary for screen-to-screen animation.
- Struct-based animation configuration: Each animation is a value type with configurable properties (composable, immutable).
- AutoReverse: Built-in support for reverse animations (important for dismiss/back navigation).
- Enum-based transition selection: Type-safe, exhaustive, discoverable.

**Architectural observations:**
- iOS-only (UIKit) — no direct web applicability
- API design concepts are universal (naming, composition, configuration)
- Identifier-based matching is platform-agnostic as a CONCEPT

## Content Quality Audit

**Genuinely valuable content:**
- Named transition vocabulary: Push, Slide, ZoomSlide, Cover, Page, Fade, Zoom — these ARE the universal navigation transition patterns. Platform-specific implementation but universal concepts.
- Identifier-based shared element: "Tag an element, navigate, framework finds matching tag, animates between them." This CONCEPT applies to web (View Transitions API, shared layout animations).
- Animatable property list: backgroundColor, cornerRadius, fade, rotate, size, spring, depth, position, scale, spin, translate — comprehensive list of WHAT can be animated.
- AutoReverse concept: Every transition has a natural reverse (Push → Pop, Cover → Uncover). This bidirectional thinking is essential for navigation animation design.

**AI Slop indicators:**
- iOS-only implementation — values/parameters are UIKit-specific
- No timing rationale documentation (why these spring values? why this duration?)
- No design principles explanation (just API documentation)
- No accessibility considerations (UIAccessibility integration unknown)
- No performance guidance (which transitions are expensive on which devices?)
- Animation property values are absolute (not token-referenced)

## Gap Analysis vs Theory

**Strengths:**
- Transition taxonomy covers all primary navigation patterns (matches Material Design navigation transitions)
- Shared element concept aligns with "object permanence" psychology (brain tracks identity across states)
- AutoReverse addresses bidirectional navigation (forward/back should be inverse animations)
- Struct-based configuration enables composition and reuse

**Gaps vs theory:**
- Missing "purpose" layer — transitions exist without guidance on WHEN to use each
- No connection to information architecture (page relationship should determine transition type)
- No reduced-motion consideration
- Missing "hierarchy" transitions (parent→child = push, sibling→sibling = slide, overlay = cover)
- No mobile performance considerations documented
- Spring parameters are implementation-specific without perceptual documentation

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| Transition type vocabulary (Push, Slide, Cover, Page, Fade, Zoom) | Add PURPOSE mapping: Push=forward navigation, Slide=sibling navigation, Cover=overlay, Page=contextual detail, Fade=same-level swap, Zoom=drill-in. Add information architecture rules. |
| Identifier-based shared element | Document as principle for web: "Use shared identifiers to create continuity between views. In web: View Transitions API naming, in mobile: Reanimated shared element." Add to motion presets as pattern. |
| Animatable property enumeration | Transform into ProdigeUI's motion token property taxonomy. Separate into: (1) performant (transform, opacity), (2) acceptable (border-radius, box-shadow), (3) expensive (background-color, width/height). |
| AutoReverse concept | Formalize: every ProdigeUI navigation preset MUST define both forward AND reverse animation. Reverse should not be identical but inverse (decelerate→accelerate, slide-right→slide-left). |
| Struct-based configuration | Adopt as JSON preset structure: each preset is a self-contained configuration object with typed fields. |

## Adaptation Strategy

Motion-development's value is its TRANSITION TAXONOMY and SHARED ELEMENT CONCEPT — universal patterns expressed in iOS code:

1. **Transition vocabulary** → Becomes ProdigeUI navigation transition presets with purpose mapping (what navigation relationship triggers which transition)
2. **Shared element identifiers** → Documented as principle in `motion/principles.md` with web implementation guidance (View Transitions API)
3. **Animatable properties** → Categorized by performance cost in ProdigeUI motion tokens
4. **AutoReverse** → Every navigation preset in ProdigeUI defines both directions
5. **Enum-based selection** → Motion presets are referenced by semantic name (type-safe equivalent in JSON)

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| Transition vocabulary (Push/Slide/Cover/Page/Fade/Zoom) | `motion/presets/enter-exit.json` | Navigation transition preset names | Universal navigation transitions need standard vocabulary |
| Transition purpose mapping | `motion/principles.md` | "Navigation Transition Selection" section | Information architecture determines transition type |
| Identifier-based shared element | `motion/principles.md` | "Object Permanence" principle | Shared element continuity aids spatial comprehension |
| Animatable property taxonomy | `motion/motion.tokens.json` | `properties.*` categorized by performance tier | Agents know which properties to animate safely |
| AutoReverse (bidirectional) | `motion/presets/enter-exit.json` | `forward` + `reverse` definitions per navigation preset | Forward and back navigation use inverse animations |
| Struct configuration pattern | `motion/presets/*.json` | Self-contained JSON objects per preset | Composable, typed, machine-readable configuration |

## Points Copied

- Navigation transition vocabulary: Push, Slide, Cover, Page, Fade, Zoom
- Shared-element identifier concept for view continuity
- Comprehensive animatable property enumeration
- AutoReverse (bidirectional animation) as standard requirement
- Type-safe configuration (struct/enum → JSON schema with enums)

## Points Improved/Fixed

- Transitions mapped to navigation PURPOSE (forward/sibling/overlay/detail), not just visual effect
- Shared element concept documented as universal principle with web implementation path
- Animatable properties categorized by PERFORMANCE COST (not just "can animate")
- AutoReverse enhanced: reverse is not identical replay but perceptually appropriate inverse
- All values externalized as Design Tokens (not hardcoded in structs)
- Added prefers-reduced-motion variants for all navigation transitions

## Points Adapted

- Swift structs → JSON preset objects (same concept: typed, immutable configurations)
- UIKit MotionIdentifier → Web View Transitions API naming convention
- iOS transition types → CSS/Web Animations API implementations
- CosmicMind-specific API → Framework-agnostic specification language
- UIKit view controller transitions → Generic "page/route transition" presets applicable to SPA/MPA
