---
sourceId: ux-fundamentals
sourceType: book
sourceName: "UX Fundamentals for Non-UX Professionals (Edward Stull)"
sourceLocation: "Book/UX/UX Fundamentals for Non-UX Professionals User Experience Principles for Managers, Writers, Designers, and Developers (Edward Stull) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

- **UX is Everyone's Responsibility:** User experience is shaped by every team member's decisions — not just designers. Developers, writers, and managers all impact UX through their choices.
- **Utility Before Usability:** A product must be useful (solves a real problem) before it can be usable (easy to use). Don't optimize the experience of something nobody needs.
- **Mental Models Rule:** Users approach products with pre-existing mental models from other products. Match those models or invest heavily in teaching new ones.
- **Progressive Complexity:** Reveal complexity gradually as user skill grows. Novices need simple paths; experts need shortcuts and power features. Both must coexist.
- **Feedback Loops:** Every user action requires system response. The gap between action and feedback is where uncertainty and frustration live.
- **Consistency Creates Confidence:** Consistent patterns build user confidence. Users who feel confident explore more, accomplish more, and forgive more.
- **Error Prevention > Recovery:** Design to prevent errors (constraints, confirmations, smart defaults) rather than providing error recovery after the fact.

## Concrete Rules & Parameters

- Mental model alignment: test navigation labels with 5+ target users; ≥80% correct first-click success rate
- Progressive complexity: 3 tiers of interface depth — basic (80% of users), intermediate (15%), advanced (5%)
- Feedback requirement: visual acknowledgment within 100ms for any user input; state change within 400ms
- Consistency checklist: same term for same concept (no synonyms); same position for same function; same visual treatment for same element type
- Error prevention: constrain inputs (dropdowns over free text where options are known); validate early (blur); provide undo over confirmation
- Onboarding progressive disclosure: show 3 key features initially; reveal additional features after usage milestones
- Success metric: time-to-first-value ≤ 60 seconds for new users

## Modern Context Application

- **Agent as Non-Designer:** AI agents are the ultimate "non-UX professionals" — they need explicit, rule-based UX guidance rather than intuitive design sense.
- **Mental Model Database:** ProdigeUI can encode common mental models (e-commerce flow, SaaS onboarding, form submission) that agents apply by context.
- **Progressive UI Generation:** Agents generate base-level simple interfaces first, with extension points for intermediate/advanced features.
- **Automated Consistency Checks:** Quality gate validates terminology consistency, position consistency, and visual treatment consistency.

## Anti-AI-Slop Indicators

| Principled UX Fundamentals | AI Slop |
|---|---|
| Mental model-aligned navigation | Navigation that mirrors code structure |
| Progressive complexity (basic first) | All features equally prominent |
| Immediate feedback for all actions | Silent operations without acknowledgment |
| Consistent terminology throughout | Synonyms used interchangeably (save/submit/confirm) |
| Error prevention through constraints | Free-text where selections would work |
| Clear utility before polish | Beautiful interface solving no real problem |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| Progressive complexity tiers | `design-rules/structure.md` | Interface depth tiers | 80/15/5% user tier model |
| Mental model patterns | `design-rules/structure.md` | Common flow patterns | Standard mental models by use case |
| Feedback timing rules | `design-rules/interaction.md` | Response time requirements | 100ms/400ms thresholds |
| Consistency checklist | `quality-gate/criteria.json` | "consistency" criterion | Term, position, visual consistency |
| Error prevention patterns | `design-rules/forms.md` | Input constraint rules | Dropdowns > free text where applicable |
| Time-to-first-value metric | `quality-gate/criteria.json` | "onboarding-speed" criterion | ≤60s to first value |

## Cross-References

- Progressive complexity aligns with `simple-and-usable` Hide/Displace strategies
- Mental model concept from `designing-with-mind-in-mind` Memory Mind
- Feedback timing consistent with `design-for-how-people-think` response rules
- Consistency feeds Quality_Gate criteria (Requirement 12)
- Error prevention aligns with `designing-ux-forms` error prevention philosophy
- Agent-as-non-designer validates ProdigeUI's explicit-rule approach
