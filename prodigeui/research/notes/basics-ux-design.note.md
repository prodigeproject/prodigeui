---
sourceId: basics-ux-design
sourceType: book
sourceName: "The Basics of UX Design"
sourceLocation: "Book/UX/the-basics-of-ux-design.pdf"
appliedTo: []
---

## Key Principles Extracted

- **UX Design Process Overview:** UX design follows a structured process: Research → Define → Ideate → Prototype → Test → Iterate. Each phase has specific deliverables and exit criteria.
- **User Research Foundation:** Design decisions must be grounded in user research (interviews, surveys, usability tests), not assumptions. Research reduces the risk of building the wrong thing.
- **Personas and User Stories:** Abstract user data into personas (representative users) and user stories (task-based narratives) that drive design decisions and prioritization.
- **Information Architecture:** Content organization should mirror user mental models, not business structure. Card sorting and tree testing validate IA decisions.
- **Wireframing:** Low-fidelity representations focusing on layout, content priority, and interaction flow before visual design. Wireframes communicate structure without distraction.
- **Usability Heuristics:** Nielsen's 10 heuristics provide universal evaluation criteria: visibility, match to world, user control, consistency, error prevention, recognition, flexibility, aesthetics, error recovery, help.

## Concrete Rules & Parameters

- Research minimum: 5 user interviews or 50 survey responses before design phase
- Persona: 3-5 personas maximum representing distinct user segments; each with goals, frustrations, behaviors
- IA validation: card sort with 15+ participants for statistical significance; success rate ≥ 80% for findability
- Wireframe content: real labels and approximate text lengths; no lorem ipsum for navigation or headings
- Heuristic evaluation: score each of 10 heuristics 1-5; average ≥ 4 required before development
- Usability test: task completion rate ≥ 80% for primary flows; time-on-task within 1.5× optimal
- Iteration: minimum 2 design iterations before final handoff; each addressing top usability findings

## Modern Context Application

- **Process for AI Agents:** The UX process (research→test) maps to agent workflow skills — each phase becomes a skill step with defined inputs/outputs.
- **Personas in Prompts:** Prompt templates can include target persona descriptions to contextualize AI generation.
- **Heuristic-Based Quality Gate:** Nielsen's 10 heuristics translate directly to automated quality gate criteria.
- **IA Validation for AI:** Agents generating navigation should validate against common IA patterns and heuristics.

## Anti-AI-Slop Indicators

| Process-Driven UX | AI Slop |
|---|---|
| Research-informed design decisions | Design based on AI assumptions |
| User mental model-based IA | Developer-structure-based navigation |
| Wireframe validation before visual design | Jump straight to styled output |
| Heuristic evaluation scores documented | No evaluation criteria applied |
| Iterated through user testing | First output = final output |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| UX process phases | `skills/ux-design-e2e/SKILL.md` | Complete workflow phases | Agent follows full UX process |
| Nielsen's 10 heuristics | `quality-gate/criteria.json` | Heuristic evaluation criteria | Universal UX quality validation |
| Persona template | `prompt-templates/*/context.md` | User persona section | Prompts include target user context |
| IA principles | `design-rules/structure.md` | Information architecture rules | Navigation follows user mental models |
| Wireframe-first workflow | `skills/ux-design-e2e/SKILL.md` | Structure before surface step | Agent produces wireframe before styling |

## Cross-References

- Process maps to `elements-user-experience` five planes at higher level
- Heuristics complement `fixing-bad-ux-designs` anti-pattern detection
- IA principles feed `design-rules/structure.md` (Requirement 9)
- Persona concept informs Prompt_Template context sections (Requirement 10)
- Usability testing aligns with `dont-make-me-think-revisited` testing philosophy
