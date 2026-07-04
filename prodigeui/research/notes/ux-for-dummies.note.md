---
sourceId: ux-for-dummies
sourceType: book
sourceName: "UX for Dummies"
sourceLocation: "Book/"
appliedTo: []
---

## Key Principles Extracted

1. **UX process overview**: Research → Strategy → Design → Test → Iterate (accessible introduction to full UX lifecycle)
2. **User personas as design anchors**: Define 3-5 personas with goals/frustrations; every design decision tested against personas
3. **Wireframing before visual**: Structure decisions precede aesthetic decisions (prevents "lipstick on a pig")
4. **Content strategy integration**: Content shapes UI, not the other way around — plan content types before layout
5. **Heuristic evaluation**: Quick usability assessment using established heuristic lists (Nielsen's 10, Shneiderman's 8)

## Concrete Rules & Parameters

- Persona count: 3-5 per product (fewer = oversimplified; more = conflicting priorities)
- Wireframe fidelity: Lo-fi = grayscale, no imagery, system fonts; Mid-fi = actual copy, basic layout; Hi-fi = real tokens
- Content priority: Define content hierarchy before layout (what matters most per screen)
- Heuristic pass: Evaluate against top-5 heuristics minimum before user testing
- Test frequency: Every 2 weeks during active development (continuous, not end-loaded)

## Modern Context Application

- **AI context**: Agent needs persona context in brief to make appropriate design decisions
- **Component systems**: Components tested against persona needs (power user vs novice)
- **Responsive**: Persona device preferences inform responsive priority (mobile-first if mobile persona dominant)
- **Tokens**: Fidelity progression maps to token usage (lo-fi = structure tokens only, hi-fi = full token set)

## Anti-AI-Slop Indicators

- Expert: Design decisions justified by persona needs; content-first structure; heuristic compliance
- AI slop: No user context considered; layout-first design; no heuristic validation
- Expert: Wireframes show information hierarchy clearly (size = importance)
- AI slop: Wireframes are essentially "gray screenshots" with no hierarchy communication

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Persona-driven design | Skills workflow | Brief requirements (persona context) | Agent needs user context |
| Heuristic checklist | `quality-gate/criteria.json` | Usability heuristics section | Quick validation before detailed review |
| Content-first principle | `prompt-templates/` | Template requires content spec before layout | Prevents layout-first mistakes |
| Wireframe fidelity stages | Skills workflow | Design phase progression | Structured fidelity increase |

## Cross-References

- UX process matches User Experience Design's five planes model
- Heuristic evaluation aligns with Don't Make Me Think's usability principles
- Content-first validated by Atomic Design's content-first testing principle
- Personas connect to taste-skill-main's audience-picks-aesthetic principle
