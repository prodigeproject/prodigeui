---
name: motion-choreography
description: |
  Designs multi-element animation sequences with personality-driven presets, stagger timing, reduce-motion fallbacks, and validation against motion design principles.
triggers:
  - "motion choreography"
  - "animation sequence"
  - "design animation"
  - "stagger animation"
  - "motion design"
---

# motion-choreography

## Purpose

Design coordinated multi-element animation sequences that enhance UX without
overwhelming the user. Applies personality-driven motion archetypes, creates
stagger sequences for grouped elements, ensures reduce-motion accessibility
fallbacks, and validates all motion against ProdigeUI's motion principles.

## When to Use

- Designing entrance/exit animations for a page or section
- Creating coordinated motion for a group of related elements (card lists, menus)
- Choosing animation timing and easing for a new component
- Adding meaningful transitions between UI states (loading, success, error)
- Verifying existing animations follow system motion principles

## Workflow Steps

### Step 1 — Identify Motion Needs Per Component

1. List all elements that will animate in the sequence.
2. Classify each motion by purpose:
   - Entrance: element appears for the first time
   - Exit: element is removed or hidden
   - State change: element transitions between states (hover, active, disabled)
   - Feedback: confirms user action (click ripple, submit success)
   - Attention: draws eye to important change (notification, error)
3. Determine which motions are essential (convey meaning) vs decorative.
4. Reference `motion/principles.md` for guiding constraints.
5. Map motion to specific user interactions or page events.

### Step 2 — Select Personality Archetype

1. Review available motion personalities in the system:
   - Professional: minimal, precise, fast (120-200ms)
   - Friendly: slightly bouncy, moderate (200-350ms)
   - Playful: elastic, expressive, slower (300-500ms)
   - Dramatic: sweeping, deliberate, cinematic (400-700ms)
2. Choose the archetype matching the brand or component context.
3. Document the selected personality and reasoning.
4. Ensure consistency: a single page should use one primary archetype.
5. Allow secondary archetype only for contrasting emphasis moments.

### Step 3 — Assign Presets

1. Read `motion/presets/` for available motion presets.
2. Map each element's motion need to a preset:
   - Entrances: fade-in, slide-up, scale-in, reveal
   - Exits: fade-out, slide-down, scale-out, collapse
   - State changes: color-shift, elevation-change, size-adjust
   - Feedback: ripple, pulse, check-mark
3. For each preset, configure:
   - Duration (from personality archetype range)
   - Easing curve (from `motion/motion.tokens.json`)
   - Transform origin and direction
4. If no preset fits: define a custom motion and document it.

### Step 4 — Design Stagger Sequences

1. For grouped elements (lists, grids, navigation items):
   - Define stagger delay between each element (typically 30-80ms).
   - Set the lane-specific sequence cap: product/UI ≤ 600ms; expressive storytelling
     ≤ 1500ms with primary meaning visible by 600ms.
   - Choose stagger direction: top-to-bottom, left-to-right, center-out.
2. Apply diminishing delays for long lists (first items slower, rest faster).
3. Define the trigger: viewport entry, page load, user interaction.
4. Ensure the sequence has a clear beginning and end.
5. Test that individual items are recognizable during the sequence.

### Step 5 — Add Reduce-Motion Fallbacks

1. For every animation, define the reduced-motion alternative:
   - Decorative motion: remove entirely (instant state change).
   - Essential motion (progress, loading): replace with minimal alternative.
   - Essential entrance/state communication: replace with opacity-only transition capped at 100ms.
2. Use `prefers-reduced-motion: reduce` media query check.
3. Verify that no information is lost when motion is removed.
4. Ensure transitions still feel responsive (instant but not jarring).
5. Document fallback behavior for each animated element.

### Step 6 — Validate Against Motion Principles

1. Check against `motion/principles.md`:
   - Purpose: every animation has a clear functional reason
   - Duration: nothing exceeds personality archetype maximum
   - Easing: uses system-defined curves (no linear for UI motion)
   - Performance: transforms and opacity only (no layout-triggering properties)
   - Interruptibility: animations can be interrupted by user action
2. Verify the 1/3 visibility budget: no more than one third of visible elements move
   simultaneously; three concurrent motion paths are an attention warning, not a separate scale.
3. Check that motion direction matches content flow (LTR, top-to-bottom).
4. Ensure no animation loops infinitely without user control.
5. Report: elements animated, presets used, stagger timing, a11y fallbacks, any violations.
