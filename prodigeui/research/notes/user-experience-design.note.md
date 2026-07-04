---
sourceId: user-experience-design
sourceType: book
sourceName: "User Experience Design"
sourceLocation: "Book/pdfcoffee.com_user-experience-design-pdf-free.pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Five planes of UX**: Strategy → Scope → Structure → Skeleton → Surface (Jesse James Garrett model)
2. **User research drives design**: Personas, journey maps, and task analysis precede visual design
3. **Information architecture**: Card sorting, tree testing — content organization determines findability
4. **Wireframe fidelity progression**: Lo-fi (structure) → Mid-fi (layout) → Hi-fi (visual) — each fidelity has purpose
5. **Usability heuristics**: Nielsen's 10 — visibility, match, control, consistency, prevention, recognition, flexibility, aesthetic, recovery, help
6. **Iterative design cycle**: Research → Design → Test → Iterate (never a linear process)

## Concrete Rules & Parameters

- Navigation depth: Max 3 levels before content (more = lost users)
- Consistency: Same action = same visual pattern everywhere (0 exceptions)
- Error prevention: Constraints > confirmation dialogs > undo (preference order)
- Recognition over recall: Labels, icons, and visible options — never rely on memory
- Aesthetic-usability effect: Clean interfaces perceived as more usable (beauty = perceived function)

## Modern Context Application

- **Tokens**: Token system IS the consistency enforcement mechanism (same token = same visual everywhere)
- **Component systems**: Components encode consistency — one Button component, not ad-hoc buttons
- **Responsive**: Five planes apply at each breakpoint — structure may change, surface adapts
- **Dark mode**: Surface plane adaptation; skeleton/structure remain identical
- **AI context**: Agent needs structured brief (strategy/scope) before generating (skeleton/surface)

## Anti-AI-Slop Indicators

- Expert: Consistent patterns; visible system status; clear navigation hierarchy ≤3 levels
- AI slop: Inconsistent button styles; no breadcrumbs or location indicators; deep nested navigation
- Expert: Error prevention via constraints (disabled buttons, input masks, smart defaults)
- AI slop: Confirmation dialogs for everything; no input validation; errors only shown after submission

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Five planes model | Skills workflow | Brief→Design workflow structure | Agent follows planes sequentially |
| Navigation depth limit | `design-rules/layout.rules.json` | `navigation.maxDepth: 3` | Enforced findability |
| Consistency principle | Token system + Component library | All artifacts | System-wide consistency mechanism |
| Error prevention hierarchy | `design-rules/interaction.rules.json` | Error handling priority order | Constraints preferred over dialogs |
| Usability heuristics | `quality-gate/criteria.json` | Nielsen's heuristics checklist | Gate validates against heuristics |

## Cross-References

- Five planes model aligns with UI-UX design skill workflow phases
- Consistency principle enforced by Token_System requirement (Req 3)
- Error prevention hierarchy matches Don't Make Me Think's "don't make me think" principle
- Navigation depth confirmed by Mobile App UX Principles
- Iterative cycle matches impeccable-main's audit/fix workflow
