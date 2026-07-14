---
sourceId: essential-guide-user-interface
sourceType: book
sourceName: "The Essential Guide to User Interface Design"
sourceLocation: "Book/"
appliedTo: []
---

## Key Principles Extracted

1. **Interface design is communication**: Every UI element communicates — icon=object, button=action, color=status, layout=relationship
2. **Screen organization principles**: Group by function, sequence by workflow, prioritize by frequency
3. **Input design optimization**: Match input mechanism to data type; reduce keystrokes; provide defaults and autocomplete
4. **Navigation architecture**: Breadth vs depth trade-off — broader (more options per level) preferred over deeper (fewer options, more levels)
5. **Feedback and status display**: System should always communicate: What happened? What is happening? What will happen next?
6. **Consistency layers**: Visual consistency, behavioral consistency, terminology consistency (all three required)

## Concrete Rules & Parameters

- Navigation breadth: 5-9 options per level preferred over 2-3 options with 5+ levels
- Input reduction: Every form should have ≥1 strategy for reducing input (autocomplete, defaults, inline validation)
- Status display types: Background processing → progress indicator; Success → transient confirmation (3-5s); Error → persistent until resolved
- Grouping maximum: 5-7 items per visual group before sub-grouping needed
- Terminology: Same action = same word everywhere (never "Save" in one place, "Submit" in another for same action)
- Icon + label: Icons without labels in first-use contexts fail — always pair with text label until learned

## Modern Context Application

- **Tokens**: Consistency enforced through tokens (same token = same visual everywhere)
- **Component systems**: Form components include input optimization by default (masks, autocomplete hints, smart defaults)
- **Responsive**: Breadth/depth shifts — mobile tolerates slightly more depth (bottom sheets), desktop prefers breadth
- **Dark mode**: Status colors maintain meaning in dark mode (adapted hue, same semantic)
- **Accessibility**: Icon+label pairing serves accessibility AND usability (screen readers + sighted users both benefit)

## Anti-AI-Slop Indicators

- Expert: Grouped by function; consistent terminology; icons paired with labels; optimized inputs
- AI slop: Random grouping; inconsistent action names; icon-only navigation; plain text inputs with no optimization
- Expert: Clear status communication at all times (loading, success, error states designed)
- AI slop: No loading states; success messages that disappear instantly; error messages without resolution guidance

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Grouping principles | `design-rules/layout.rules.json` | Function-based grouping rules | Logical organization over arbitrary |
| Input optimization | `components/atoms/input` | Default behaviors (autocomplete, masks) | Forms optimized by default |
| Status display types | `components/` feedback components | Notification timing/persistence rules | Consistent feedback behavior |
| Icon+label pairing | `design-rules/interaction.rules.json` | Icon usage rules | Prevents ambiguous icon-only UI |
| Terminology consistency | `quality-gate/criteria.json` | Same-action-same-word rule | Gate catches terminology drift |
| Navigation architecture | `design-rules/layout.rules.json` | Breadth vs depth recommendation | Guided navigation depth decisions |

## Cross-References

- Navigation architecture confirms Don't Make Me Think's 3-level depth limit
- Feedback/status aligns with Design of Everyday Things' feedback principle
- Consistency layers match User Experience Design's usability heuristics
- Input optimization connects to Mobile App UX Principles' contextual input
- Grouping principles validated by Gestalt proximity (UI Design Principles)
- Icon+label pairing supports WCAG accessibility requirements
