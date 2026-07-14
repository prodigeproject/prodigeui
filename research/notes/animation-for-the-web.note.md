---
sourceId: animation-for-the-web
sourceType: book
sourceName: "Animation for the Web: A Guide to Advanced CSS and Animation Techniques"
sourceLocation: "Book/Animation for the Web_ A Guide to Advanced CSS and Animation Techniques.pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Performance-first animation**: Only animate `transform` and `opacity` (compositor-only properties) to maintain 60fps
2. **Duration by interaction type**: Micro-interactions 100-300ms, transitions 200-500ms, decorative 500-1000ms
3. **Easing as personality**: cubic-bezier curves encode emotional tone — ease-out for entries (welcoming), ease-in for exits (decisive)
4. **Keyframe choreography**: Stagger delay = base-duration / child-count, never exceed 50ms between siblings
5. **Progressive enhancement**: Animations must be additive; UI must function without any animation
6. **GPU layer promotion**: Use `will-change` sparingly; promote only during animation, demote after
7. **Scroll-driven animation**: Use Intersection Observer thresholds for reveal timing; animate on-enter, not on-exit
8. **Variable fonts for animation**: Animate `font-variation-settings` for weight/width transitions (single file, smooth interpolation)

## Concrete Rules & Parameters

- Micro-interaction duration: 100-300ms (feedback, toggles, hovers)
- Page transitions: 200-500ms (route changes, modal open/close)
- Max stagger delay per item: 50ms
- `will-change` removal timeout: 200ms after animation ends
- Target frame budget: 16.67ms per frame (60fps)
- Intersection Observer threshold for reveals: 0.15-0.25

## Modern Context Application

- **Responsive**: Duration scales down on mobile (reduce by 20-30% on touch devices where gesture speed is higher)
- **Dark mode**: No impact on timing, but brightness-based reveals need adjusted start opacity (0.0 in dark vs 0.02 in light)
- **Tokens**: Duration/easing externalized as `--motion-duration-*` and `--motion-easing-*` custom properties
- **Component systems**: Each component declares its animation via token references, not inline keyframes

## Anti-AI-Slop Indicators

- Expert: Consistent duration scale across all components; rationale for each easing choice
- AI slop: Random durations (300ms here, 450ms there, no system); `ease` keyword everywhere (no intentional curve selection)
- Expert: Animations only on compositor properties; performance-budgeted
- AI slop: Animating `width`, `height`, `top`, `left` (layout thrashing)

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Duration tiers (micro/transition/decorative) | `motion/motion.tokens.json` | `duration.micro`, `duration.transition`, `duration.decorative` | Named tiers prevent arbitrary values |
| Easing-as-personality concept | `motion/motion.tokens.json` | `easing.enter`, `easing.exit`, `easing.standard` | Semantic easing names encode purpose |
| Performance budget rule | `quality-gate/criteria.json` | Motion quality rules | Gate rejects layout-triggering animations |
| Stagger formula | `motion/presets/stagger.json` | `delayFormula` field | Consistent choreography across lists |
| `will-change` lifecycle | `design-rules/motion.rules.json` | Performance guidelines section | Prevents layer explosion |

## Cross-References

- Duration tiers confirmed by Val Head's Designing Interface Animation (same ranges)
- Performance rules align with CSS Animations and Transitions book
- Easing personality concept matches taste-skill-main's Motion Personality archetypes
- Stagger patterns validated by ant-motion-master's QueueAnim implementation
