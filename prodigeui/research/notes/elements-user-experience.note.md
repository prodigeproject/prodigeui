---
sourceId: elements-user-experience
sourceType: book
sourceName: "The Elements of User Experience (Jesse James Garrett)"
sourceLocation: "Book/UX/The_Elements_of_User_Experience_Jesse_Ja.pdf"
appliedTo: []
---

## Key Principles Extracted

- **Five Planes Model:** UX design proceeds through five conceptual planes from abstract to concrete: Strategy → Scope → Structure → Skeleton → Surface. Each plane constrains and informs the next.
- **Strategy Plane:** Defines user needs and business objectives. Every design decision must trace back to identified user needs and measurable business goals.
- **Scope Plane:** Translates strategy into functional specifications (what the system does) and content requirements (what information it provides).
- **Structure Plane:** Interaction design (how the system behaves in response to user actions) and information architecture (how content is organized and categorized).
- **Skeleton Plane:** Interface design (arrangement of elements), navigation design (moving between information), and information design (presentation for understanding).
- **Surface Plane:** Visual/sensory design — the final aesthetic layer that users perceive directly.
- **Duality of Product:** Web/digital products exist on a spectrum between "functionality-oriented" (task completion) and "information-oriented" (content consumption), and design approach differs accordingly.
- **Conceptual vs. Concrete:** Design moves from conceptual models (mental models, taxonomies) to concrete implementation (wireframes, visual design), never the reverse.

## Concrete Rules & Parameters

- Navigation depth: maximum 3 clicks/taps to reach any primary content from entry point (3-click rule applied to IA)
- Information architecture: card sorting validates category structure; tree testing validates findability
- Skeleton-level constraints: primary action must occupy dominant visual position (top-right or center); max 7±2 navigation items at any single level
- Structure patterns: user flows must have defined entry points, decision nodes, and terminal states
- Scope documentation: each feature requires a user story AND an acceptance criterion before skeleton work begins
- Surface consistency: no more than 3 typefaces, 5 font sizes, and 1 primary accent color per interface view
- Strategy validation: every interface element must map to at least one user need or business objective (traceability matrix)

## Modern Context Application

- **AI Workflow Mapping:** The five planes map directly to agent workflow steps: Strategy = Brief intake, Scope = Feature definition, Structure = IA/flow design, Skeleton = Wireframe/layout, Surface = Token application + styling.
- **Agent Decision Boundaries:** Each plane represents a decision boundary — agents should complete and validate one plane before proceeding to the next, preventing premature visual design.
- **Prompt Engineering:** Prompt templates can be structured per-plane, ensuring agents don't skip conceptual work and jump straight to code.
- **Component Composition:** Structure plane thinking informs how components compose (layout patterns, navigation hierarchies) rather than treating them as flat collections.
- **Quality Gates Per Plane:** Each plane transition can have validation criteria — an AI quality gate that checks if strategy is defined before allowing scope work.

## Anti-AI-Slop Indicators

| Expert UX (Garrett Model) | AI Slop |
|---|---|
| Clear strategy → surface progression | Jumping directly to visual design without user needs |
| Information architecture with validated taxonomy | Random page organization without mental model |
| Navigation designed from user mental models | Navigation mirrors developer's file structure |
| Skeleton informed by interaction patterns | Layout based on visual appeal alone |
| Every element traceable to user need | Decorative elements without functional purpose |
| Scope defined before skeleton | Feature creep with no strategic justification |
| Conceptual model before concrete implementation | Pixel-perfect mockup without underlying logic |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| Five planes workflow | `skills/ux-design-e2e/SKILL.md` | Workflow steps (5 phases) | Agent follows strategy→surface progression |
| Strategy plane (user needs + business goals) | `prompt-templates/*/context.md` | Context section requiring user needs | Ensures prompts capture strategy before design |
| Scope plane (features + content) | `prompt-templates/*/constraints.md` | Scope boundaries in prompt | Prevents AI scope creep |
| Structure plane (IA + interaction) | `design-rules/structure.md` | Navigation depth rules, IA patterns | Measurable structure rules |
| Skeleton plane (interface + navigation) | `design-rules/layout.md` | Grid, navigation item limits | Concrete skeleton constraints |
| Surface plane (visual design) | Token application via `tokens/` | Token mapping to visual properties | Surface = token values applied to skeleton |
| Traceability requirement | `quality-gate/criteria.json` | "element-traceability" criterion | Every element maps to user need |
| 3-click navigation rule | `design-rules/structure.md` | Navigation depth maximum | Measurable IA quality rule |

## Cross-References

- Foundation for all skills that involve UX workflow (strategy→surface progression)
- Informs `design-rules/structure.md` navigation and IA rules
- Complements `dont-make-me-think-revisited` (usability testing at skeleton/surface level)
- Complements `simple-and-usable` (scope plane — what to include/exclude)
- Pairs with `design-systems-handbook` at the component/surface layer
- Maps to Requirement 2 (Agentic_Workflow) — skill workflow mimics five planes
