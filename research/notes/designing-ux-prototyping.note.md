---
sourceId: designing-ux-prototyping
sourceType: book
sourceName: "Designing UX: Prototyping (Ben Coleman, Dan Goodwin)"
sourceLocation: "Book/UX/Designing UX Prototyping (Ben Coleman, Dan Goodwin) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

- **Fidelity Spectrum:** Prototypes range from low-fidelity (paper sketches, wireframes) to high-fidelity (interactive, pixel-perfect). Match fidelity to the question being answered.
- **Prototype to Answer Questions:** Every prototype exists to answer a specific design question. Define the question before choosing the prototype method.
- **Fastest Path to Feedback:** Choose the lowest-fidelity prototype that can answer your question. Higher fidelity costs more time and biases feedback toward surface details.
- **Interactive Over Static:** Interactive prototypes reveal usability issues that static mockups cannot. Users behave differently when they can click/tap through a flow.
- **Disposable Artifacts:** Prototypes are disposable — they test ideas, not build products. The value is in learnings, not in the prototype artifact itself.
- **Context of Use:** Test prototypes in the context where the final product will be used (mobile = test on phone, not desktop browser).
- **Content-First Prototyping:** Use real content in prototypes, not lorem ipsum. Content affects layout decisions, readability, and user comprehension.

## Concrete Rules & Parameters

- Fidelity selection: concept validation → paper/whiteboard; flow validation → clickable wireframes; interaction validation → interactive prototype; visual validation → hi-fi prototype
- Prototype scope: test one user flow per prototype; don't build complete apps as prototypes
- Interaction points: max 5-7 screens/steps per user flow being tested
- Feedback sessions: 5 users minimum for qualitative insights; 20+ for quantitative validation
- Iteration cycle: prototype → test → learn → iterate in ≤1 week cycles
- Content rule: use representative real content for any text > 5 words (no lorem ipsum)
- Annotation standard: annotate prototype screens with interaction specs for developer handoff

## Modern Context Application

- **AI as Rapid Prototyper:** AI agents can generate interactive prototypes at unprecedented speed — but must still follow fidelity-matches-question principle.
- **Skill Workflow Integration:** ProdigeUI can include a prototyping skill that instructs agents to generate appropriate-fidelity outputs based on project phase.
- **Component Prototyping:** Using the component library to assemble prototypes ensures prototype → production consistency.
- **Prompt-Driven Fidelity:** Prompt templates can specify target fidelity level, preventing agents from over-engineering early explorations.

## Anti-AI-Slop Indicators

| Expert Prototyping | AI Slop |
|---|---|
| Fidelity matches the design question | High-fidelity output for every exploration |
| One flow per prototype, focused scope | Complete app generated without specific focus |
| Real content driving layout decisions | Lorem ipsum throughout |
| Interactive, testable with users | Static screenshots presented as "prototypes" |
| Disposable, fast iteration | Precious, over-engineered artifacts |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| Fidelity spectrum selection | `skills/ux-design-e2e/SKILL.md` | Phase-appropriate output step | Agent selects fidelity based on design phase |
| Content-first approach | `prompt-templates/*/constraints.md` | Content requirements | Templates require real content, not placeholders |
| Prototype → test → iterate cycle | `skills/ux-design-e2e/SKILL.md` | Iteration workflow step | Skill includes testing/iteration phase |
| Annotation standard | `design-rules/handoff.md` | Developer handoff format | Specs for communicating design intent |

## Cross-References

- Workflow phases map to `elements-user-experience` five planes (prototyping occurs at skeleton level)
- Content-first aligns with `strategic-writing-ux` content strategy
- Iteration cycle supports Requirement 2 (Agentic_Workflow) skill execution loop
- Disposable artifacts principle counters AI tendency toward over-production
