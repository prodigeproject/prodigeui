---
sourceId: simple-and-usable
sourceType: book
sourceName: "Simple and Usable (Giles Colborne)"
sourceLocation: "Book/UX/Simple and Usable (Giles Colborne) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

- **Four Strategies for Simplicity:** Remove (eliminate unnecessary features), Organize (group and structure existing elements), Hide (tuck away rarely-used features), Displace (move complexity to another place/time).
- **Remove First:** The most powerful simplification strategy. If a feature doesn't serve the core user need, remove it entirely. Reduction is more impactful than reorganization.
- **Mainstream Users vs. Experts:** Design for the mainstream user (willing to learn just enough to complete their task) rather than expert users (who seek control and completeness). Mainstream users want simple and done; experts want powerful and flexible.
- **What Users Really Want:** Users want to complete a task successfully, feel confident while doing it, and be done quickly. They do NOT want features, options, or flexibility for its own sake.
- **Organize by User Mental Model:** Group and label elements using the user's mental model, not the system's architecture. Category names should use user language, not developer jargon.
- **Progressive Disclosure (Hide):** Show the basic flow by default; make advanced options available but not visible. "Hide" is revealing complexity only when the user demonstrates need.
- **Displace Wisely:** Move complexity to setup (one-time), to other users (admin vs. end-user), or to automation (smart defaults, algorithms).

## Concrete Rules & Parameters

- Feature inclusion rule: if fewer than 80% of target users need it, consider Remove or Hide
- Navigation labels: max 5 words per label; user-language only (no technical jargon)
- Default state: most common choice should be pre-selected; power users opt into complexity
- Option count per decision point: ideal 3-5 options; maximum 7 before grouping is required
- Visible controls: show only controls for the current task step; hide others behind "More" or "Advanced"
- One-thing-at-a-time: present one primary action per context (viewport, modal, step)
- Error recovery: undo is simpler than confirmation dialogs; prefer reversible actions
- Information density: white space ≥ 40% of total layout area (perception of simplicity)
- Sentence length in UI: max 15 words for instructions; max 8 words for button/action labels
- Progressive disclosure threshold: show base version to 80% of users; advanced to 20% who seek it

## Modern Context Application

- **AI Scope Control:** AI agents generating interfaces tend toward feature maximalism ("AI slop"). Colborne's Remove strategy directly combats this: agents must justify every element's inclusion.
- **Component Variants:** The four strategies inform component variant design — base variants are simple; complex variants are available but not default.
- **Default-First Design:** AI agents should generate the simplest viable interface first, with progressive complexity accessible on demand. Matches the mainstream-user-first philosophy.
- **Smart Defaults for AI:** AI can calculate and pre-fill optimal defaults based on context, displacing complexity from user to system intelligence.
- **Template Simplification:** Prompt templates should instruct agents to apply Remove first, then Organize, then Hide, then Displace — in that priority order.

## Anti-AI-Slop Indicators

| Expert Simplicity (Colborne) | AI Slop |
|---|---|
| Minimum viable interface, every element justified | Feature-packed interface "in case user needs it" |
| Clear visual hierarchy with white space | Dense, cluttered layouts with no breathing room |
| One primary action per context | Multiple competing actions everywhere |
| Smart defaults pre-selected | Blank forms requiring decisions for everything |
| Labels in user language | Developer/technical jargon in UI labels |
| Progressive disclosure (basic first, advanced on demand) | All options visible at once, overwhelming |
| Mainstream user optimized (simple path prominent) | Power-user-first with everything exposed |
| Reversible actions (undo) over confirmations | Confirmation dialogs for every action |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| Four simplification strategies (Remove/Organize/Hide/Displace) | `skills/ux-design-e2e/SKILL.md` | Simplification workflow step | Agent applies ROHD framework to generated UI |
| Remove-first priority | `quality-gate/criteria.json` | "element-justification" criterion | Every UI element must map to user need; unjustified = remove |
| 80% user threshold for features | `design-rules/structure.md` | Feature inclusion rule | Guides agent scope decisions |
| Max 7 options per decision point | `design-rules/forms.md` / `design-rules/navigation.md` | Choice limit rules | Prevents option overload |
| White space ≥ 40% | `design-rules/layout.md` | Density rule | Measurable simplicity metric |
| Smart defaults displacement | `components/*/` | Default prop values | Components ship with intelligent defaults |
| Progressive disclosure | `components/accordion/`, `components/tabs/` | Disclosure patterns | Hide strategy implemented as components |
| One primary action per viewport | `design-rules/layout.md` | Action hierarchy rule | Aligns with Krug's primary CTA rule |
| Sentence length limits | `design-rules/typography.md` | Copy length constraints | Max 15 words instruction, max 8 words action |

## Cross-References

- Directly complementary to `dont-make-me-think-revisited` (usability through simplicity)
- Informs scope decisions in `elements-user-experience` (Scope plane — what to include)
- Remove strategy feeds `quality-gate/criteria.json` element-justification checks
- Progressive disclosure informs component architecture (base vs. advanced variants)
- White space rule feeds `design-rules/layout.md` density parameters
- Aligns with `design-systems-handbook` on component API simplicity
