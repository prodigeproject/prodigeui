---
sourceId: web-in-motion
sourceType: book
sourceName: "The Web In Motion"
sourceLocation: "Book/"
appliedTo: []
---

## Key Principles Extracted

1. **Motion as narrative**: Animations tell stories — entrance=arrival, transition=journey, exit=departure
2. **Attention direction**: Motion guides eye to important elements; used sparingly to avoid distraction
3. **Spatial memory**: Consistent motion directions build spatial models (off-screen left = "back", right = "forward")
4. **Responsive motion**: Animation intensity scales with viewport — larger screens support more elaborate motion
5. **Loading choreography**: Staggered content reveals create sense of activity and reduce perceived wait time
6. **Scroll-driven narrative**: Parallax and scroll-triggered animations create depth and engagement (when purposeful)

## Concrete Rules & Parameters

- Attention animation frequency: Max 1 moving element in user's viewport at a time
- Spatial consistency: Left=back/previous, Right=forward/next, Up=parent, Down=child (never violated)
- Responsive motion scale: Mobile 60-70% of desktop motion distance; same or shorter duration
- Stagger reveal: 30-50ms between items, max 300ms total group duration
- Parallax depth layers: Max 3 (background, midground, foreground); >3 causes confusion
- Scroll animation trigger: Content enters viewport at 25% visible threshold

## Modern Context Application

- **Tokens**: Spatial direction tokens (`--motion-direction-forward`, `--motion-direction-back`) for consistent model
- **Dark mode**: Parallax layers need adjusted opacity in dark mode (reduce contrast between layers)
- **Component systems**: Page transition components encode spatial direction rules
- **Responsive**: Motion distance scales with viewport width; duration remains constant or reduces
- **Accessibility**: Spatial model aids comprehension for all users (consistent = predictable)

## Anti-AI-Slop Indicators

- Expert: Consistent spatial model; motion serves narrative purpose; one focal animation at a time
- AI slop: Random animation directions; multiple competing animations; parallax without purpose
- Expert: Loading reveals create meaningful sequence (header → hero → content)
- AI slop: Everything fades in simultaneously from same direction

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Spatial direction system | `motion/MOTION_GUIDE.md` | Spatial model documentation | Consistent directional meaning |
| Responsive motion scaling | `tokens/motion.tokens.json` | Distance tokens per breakpoint | Motion adapts to viewport |
| Stagger parameters | `motion/presets/stagger.json` | Inter-item delay and group max | Controlled choreography |
| Attention budget (1 at a time) | `quality-gate/criteria.json` | Concurrent animation limit | Prevents distraction |
| Scroll trigger threshold | `motion/presets/scroll-reveal.json` | `threshold: 0.25` | Consistent reveal behavior |

## Cross-References

- Spatial model confirmed by Designing Interface Animation's choreography rules
- Responsive scaling aligns with animation-for-the-web's mobile duration reduction
- Loading choreography validates ant-motion-master's QueueAnim stagger pattern
- Attention budget connects to Experiencing Design's cognitive load limits
- Scroll trigger threshold matches animation-for-the-web's Intersection Observer guidance
