---
sourceId: visual-design-solutions
sourceType: book
sourceName: "Visual Design Solutions"
sourceLocation: "Book/"
appliedTo: []
---

## Key Principles Extracted

1. **Visual hierarchy through contrast**: Size, color, weight, position, and spacing ALL contribute to hierarchy (use multiple simultaneously)
2. **Alignment creates order**: Strong alignment lines reduce visual noise; every element aligned to at least one axis
3. **Repetition builds unity**: Repeated visual patterns (spacing, color, shape) create cohesion and reduce cognitive load
4. **Contrast creates focus**: To emphasize one element, make it DIFFERENT from its context (not just "bigger")
5. **Figure-ground relationship**: Primary content (figure) must clearly separate from background; depth through layering
6. **Visual flow path**: Design guides eye movement through Z-pattern (scanning) or F-pattern (reading) deliberately

## Concrete Rules & Parameters

- Contrast ratio for emphasis: Emphasized element differs by ≥2 dimensions from context (size + color, or weight + position)
- Alignment tolerance: Elements on same axis ≤1px deviation (subpixel rendering aside)
- Repetition minimum: Visual pattern appears ≥3 times before it registers as intentional
- Figure-ground separation: Foreground content differs from background by ≥WCAG AA contrast AND ≥1 depth cue (shadow, border, or overlay)
- Z-pattern anchors: Logo (top-left), CTA (top-right), key content (bottom-left), secondary CTA (bottom-right)

## Modern Context Application

- **Tokens**: Hierarchy expressed through token scales — size scale, weight scale, color emphasis scale
- **Component systems**: Cards use elevation tokens for figure-ground; modals use overlay tokens
- **Dark mode**: Figure-ground needs alternative depth cues (border or lighter surface, not shadow)
- **Responsive**: Visual flow path adapts — Z-pattern on desktop, I-pattern (vertical) on mobile
- **Accessibility**: Contrast rules for emphasis EXCEED WCAG minimums (accessibility + design aligned)

## Anti-AI-Slop Indicators

- Expert: Clear hierarchy through deliberate contrast; strong alignment; consistent repetition patterns
- AI slop: Equal-weight elements competing; misaligned items; inconsistent spacing patterns
- Expert: Figure-ground clear with multiple separation cues (elevation + contrast)
- AI slop: Content blends with background; cards with no depth differentiation; unclear boundaries

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Hierarchy through contrast | `tokens/tokens.json` | `color.emphasis.*`, `typography.weight.*` | Token scales encode hierarchy levels |
| Alignment system | `design-rules/layout.rules.json` | Grid alignment requirements | Enforced alignment on grid lines |
| Figure-ground separation | `tokens/tokens.json` | `elevation.*`, `color.surface.*` | Depth cues as tokens |
| Visual flow patterns | `design-rules/layout.rules.json` | Layout pattern documentation | Z/F/I patterns per context |
| Contrast emphasis rule | `quality-gate/criteria.json` | "≥2 dimensions different" rule | Gate checks emphasis clarity |

## Cross-References

- Hierarchy through contrast confirms Elements of Typographic Style's type scale importance
- Alignment validates UI Design Principles' grid system
- Repetition connects to Atomic Design's reusable component philosophy
- Figure-ground relates to Design of Everyday Things' affordance/signifier concepts
- Visual flow aligns with Don't Make Me Think's scanning patterns (F-pattern)
