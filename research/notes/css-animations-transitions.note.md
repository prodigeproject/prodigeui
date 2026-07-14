---
sourceId: css-animations-transitions
sourceType: book
sourceName: "CSS Animations and Transitions for the Modern Web"
sourceLocation: "Book/CSS ANIMATIONS AND RANSITIONS FOR THE MODERN WEB.pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Transitions vs Animations**: Transitions = A→B state change (triggered); Animations = multi-step sequences (can loop, auto-play)
2. **Hardware acceleration**: `transform` and `opacity` composited on GPU; everything else triggers layout/paint
3. **Timing functions deep-dive**: `cubic-bezier(x1,y1,x2,y2)` — x-axis=time, y-axis=progress; overshoot possible with y>1
4. **Animation shorthand pitfalls**: Always use longhand properties for maintainability and debugging
5. **`@keyframes` composition**: Multiple animations on same element via comma-separated `animation` values
6. **`animation-fill-mode`**: `forwards` retains end state; `backwards` applies first keyframe during delay; `both` for complete control
7. **CSS custom properties for animation**: Parameterize keyframes via custom properties for runtime theming
8. **`@property` for type-safe animation**: Register custom properties with syntax/initial-value for interpolation

## Concrete Rules & Parameters

- GPU-composited properties: `transform`, `opacity`, `filter`, `backdrop-filter` only
- Transition shorthand order: property duration timing-function delay
- Maximum simultaneous animations per element: 3 (beyond = performance risk)
- `animation-delay` for stagger: `calc(var(--index) * 50ms)`
- Steps timing: `steps(n, jump-start|jump-end)` for discrete frame-based animation
- `@property` syntax types: `<number>`, `<length>`, `<color>`, `<percentage>`, `<angle>`

## Modern Context Application

- **Tokens**: Duration/easing as CSS custom properties consumed by transitions and keyframes
- **Dark mode**: `@property`-registered color tokens animate smoothly between themes (interpolation)
- **Responsive**: Use `clamp()` for animation distances; shorter moves on smaller viewports
- **Component systems**: Components declare which properties they transition via token references
- **View Transitions API**: Modern replacement for route-change animations (Progressive Enhancement)

## Anti-AI-Slop Indicators

- Expert: Longhand properties; only GPU-composited targets; parameterized via tokens
- AI slop: Shorthand `animation: slide 0.3s ease`; animating `width`/`height`; hardcoded values
- Expert: Deliberate `fill-mode` selection based on desired persistence behavior
- AI slop: `animation-fill-mode: both` on everything without understanding consequences

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| GPU-only property constraint | `quality-gate/criteria.json` | Animation performance rules | Reject layout-triggering animations |
| CSS custom property animation | `tokens/motion.tokens.json` | Token format as `--motion-*` vars | Runtime themeable animation |
| `@property` registration | `tokens/build/tokens.css` | Property registration declarations | Type-safe token interpolation |
| Stagger calculation formula | `motion/presets/stagger.json` | `delay` formula definition | Systematic choreography |
| Longhand-only rule | `design-rules/motion.rules.json` | CSS authoring standards | Maintainability and debuggability |

## Cross-References

- GPU-only rule confirms Animation for the Web's performance-first principle
- Custom property animation aligns with tailwindcss-motion-main's `--motion-*` variable system
- `@property` usage validated by transitions.dev-main's implementation
- Stagger formula matches animation-for-the-web timing rules
