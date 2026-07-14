---
sourceId: principles-product-design
sourceType: book
sourceName: "Principles of Product Design (Aarron Walter)"
sourceLocation: "Book/UX/Principles of Product Design (Aarron Walter) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

- **Design Hierarchy of Needs:** Products must be functional → reliable → usable → pleasurable, in that order. Each level requires the previous to be solid.
- **Personality in Design:** Products should have intentional personality expressed through voice, tone, visual style, and interaction behavior. Personality creates emotional connection and memorability.
- **Systems Thinking:** Individual screens/features don't exist in isolation — they're part of a system. Design decisions ripple across the entire product.
- **Surprise and Delight:** Moments of unexpected pleasure (micro-copy, animations, easter eggs) elevate functional products into loved products. But only AFTER functional/reliable/usable are met.
- **Empathy-Driven Design:** Understanding user emotions at each interaction point enables designing appropriate responses (reassurance during checkout, celebration on completion, empathy during errors).
- **Design Principles as North Star:** A small set of product-specific principles (3-5 max) guide every design decision and resolve conflicts between options.
- **Iteration Over Perfection:** Ship good enough, learn from real usage, improve. Perfect is the enemy of shipped.

## Concrete Rules & Parameters

- Product principles: define 3-5 principles maximum; each must be prioritizable against others (if X and Y conflict, X wins)
- Personality spectrum: map product personality on dimensions: formal↔casual, serious↔playful, authoritative↔friendly, conventional↔innovative
- Delight budget: delight moments ≤ 10% of interface area/attention; never at expense of core task completion
- Emotional design by state: success = celebration; error = empathy + guidance; waiting = reassurance; completion = satisfaction
- Feedback personality: micro-copy should reflect product personality (formal product = professional messages; casual = conversational)
- Onboarding: first-run experience within 3 steps/30 seconds should demonstrate core value proposition

## Modern Context Application

- **AI Product Personality:** AI-generated interfaces tend toward personality-less output. ProdigeUI should encode personality parameters that agents apply consistently.
- **Hierarchy Validation:** Quality gate should check: is the product functional before attempting delight? Don't add motion to a broken form.
- **Delight as Skill:** A skill that adds appropriate personality/delight moments AFTER core functionality is validated complete.
- **Emotional State Mapping:** Components can include emotional-state variants (success state, error state, empty state) with appropriate personality.
- **Brand Voice Integration:** Prompt templates should include personality parameters that carry through to generated copy and interactions.

## Anti-AI-Slop Indicators

| Intentional Product Design | AI Slop |
|---|---|
| Defined personality consistently applied | Generic, personality-free interfaces |
| Delight moments that reinforce purpose | Random animations/flourishes without purpose |
| Empathetic error states | Technical error messages without emotional awareness |
| Functional → usable → pleasurable hierarchy | Decorative surface over broken functionality |
| 3-5 clear design principles guiding decisions | Ad-hoc decisions without guiding framework |
| Celebration on meaningful completions | No acknowledgment of user achievements |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| Product personality dimensions | `design-rules/personality.md` | Personality spectrum definition | Agents apply consistent personality |
| Delight budget (≤10%) | `quality-gate/criteria.json` | "delight-proportion" criterion | Prevents over-decoration |
| Emotional state mapping | `components/*/` | Component state variants | Success/error/empty emotional states |
| Design hierarchy of needs | `quality-gate/criteria.json` | "hierarchy-of-needs" criterion | Check functional before pleasurable |
| Product principles template | `prompt-templates/*/context.md` | Principles section | Prompts include product principles |
| Personality in copy | `design-rules/voice-tone.md` | Copy personality guidelines | AI-generated copy matches personality |
| Onboarding rule (3 steps/30s) | `design-rules/structure.md` | Onboarding requirements | First-run experience constraints |

## Cross-References

- Emotional design connects to `design-for-how-people-think` Emotion Mind
- Personality concept extends beyond `simple-and-usable` functional simplicity
- Hierarchy of needs validates QualityGate priority (function before form)
- Systems thinking aligns with Requirement 8 (Design System Cohesion)
- Principles framework feeds `design-rules/principles.md`
- Micro-copy personality connects to `strategic-writing-ux` voice guidelines
