---
sourceId: designing-ux-forms
sourceType: book
sourceName: "Designing UX Forms (Jessica Enders)"
sourceLocation: "Book/UX/Designing UX Forms Create Forms That Don't Drive Your Users Crazy (Jessica Enders) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

- **Form as Conversation:** A well-designed form is a conversation between system and user. Each field is a question — it should be clear, necessary, and in logical order.
- **Ask Only What You Need:** Every field has a cost (cognitive load, time, error risk). Remove any field that doesn't directly serve the form's purpose.
- **One Thing Per Page:** Breaking multi-step forms into focused single-question or single-topic pages reduces cognitive load and error rates.
- **Labels Above Fields:** Top-aligned labels are fastest to scan and most compatible across screen sizes. Avoid placeholder-only labels.
- **Error Prevention > Error Messages:** Design to prevent errors (constraints, defaults, format hints) rather than relying on error messages after submission.
- **Progressive Disclosure:** Show fields only when they become relevant based on previous answers. Don't overwhelm with all possibilities upfront.
- **Smart Defaults:** Pre-fill with intelligent defaults based on context (locale, previous input, most common selection) to reduce input effort.
- **Clear Completion Path:** Users must always know how many steps remain, what happens after submission, and how to go back.

## Concrete Rules & Parameters

- Maximum fields per visible viewport: 7 fields (before scrolling); ideal: 3-5 fields
- Label placement: above field (top-aligned), left-aligned text; NEVER placeholder-as-label alone
- Label text: sentence case, concise (1-4 words ideal), matches the question being asked
- Field width: should hint at expected input length (postal code narrower than street address)
- Required vs optional: mark optional fields with "(optional)" text; don't mark required with asterisk alone
- Error message placement: inline, immediately below the field, in error color; appear on blur or submit (not on every keystroke)
- Error message format: "[What went wrong] + [How to fix it]" — never generic ("Invalid input")
- Multi-step indicator: step counter or progress bar showing current/total (e.g., "Step 2 of 4")
- Submit button: left-aligned (matching field alignment), descriptive text ("Create account" not "Submit")
- Minimum tap target: 44×44px for touch; minimum field height: 44px
- Character limit: display remaining count only when user approaches limit (80% threshold)
- Autofocus: place on first interactive field; never autofocus on mobile (triggers keyboard)
- Validation timing: validate on blur for individual fields, on submit for cross-field rules

## Modern Context Application

- **AI Form Generation:** Agents generating forms must follow field-count limits, proper label placement, and validation rules as hard constraints — not suggestions.
- **Dynamic Form Adaptation:** AI can generate conditional fields (progressive disclosure) based on user data models, but must respect max-fields-per-view rule.
- **Error Message Generation:** AI agents can generate contextual error messages following the "[What went wrong] + [How to fix it]" formula as a template.
- **Form Analytics for AI:** AI systems can identify form abandonment patterns and suggest field reduction/reordering based on completion data.
- **Responsive Form Patterns:** Form components must adapt layout per breakpoint: single-column on mobile, optional two-column for related short fields on desktop.

## Anti-AI-Slop Indicators

| Expert Form Design (Enders) | AI Slop Forms |
|---|---|
| Minimal fields, each with clear purpose | Exhaustive field dump ("just in case" fields) |
| Labels above fields, descriptive text | Placeholder-only labels that disappear on focus |
| Smart defaults reducing input effort | Empty fields requiring manual entry for common cases |
| Progressive disclosure showing fields when relevant | All fields visible regardless of context |
| Specific error messages with fix guidance | Generic "Invalid input" or "Error in form" |
| Field width hinting at expected input | Uniform-width fields for all input types |
| Single-column layout on mobile | Multi-column complex forms on small screens |
| Descriptive submit button text | Generic "Submit" button |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| Max 7 fields per viewport | `design-rules/forms.md` | Field count rule | Hard constraint for AI form generation |
| Label placement (above, left-aligned) | `design-rules/forms.md` | Label positioning rule | Consistent form anatomy |
| Error format "[problem] + [fix]" | `design-rules/forms.md` | Error message template | Agents generate proper error messages |
| 44×44px minimum tap target | `design-rules/interaction.md` | Touch target minimum | Accessibility and usability compliance |
| Field width = input hint | `components/form-input/` | Width variant guidelines | Component spec includes width guidance |
| Progressive disclosure | `skills/form-design/SKILL.md` | Workflow step: conditional fields | Skill instructs agent on progressive reveal |
| Submit button text rule | `design-rules/forms.md` | CTA text requirement | "Create account" not "Submit" |
| Multi-step indicator | `components/stepper/` | Step indicator component spec | Required component for multi-step forms |
| Validation timing rules | `design-rules/forms.md` | Validation timing specification | blur for fields, submit for cross-field |
| Mark optional (not required) | `design-rules/forms.md` | Field marking convention | "(optional)" suffix, not asterisk for required |

## Cross-References

- Directly feeds `design-rules/forms.md` (Requirement 9 AC 1-5)
- Complements `dont-make-me-think-revisited` on form simplification
- Informs Component_Library form components (Requirement 6 AC 1: input & form category)
- Feeds Quality_Gate criteria for form validation (Requirement 12)
- Pairs with `strategic-writing-ux` for label and error message writing
- Accessibility rules map to Requirement 13 (tap targets, focus indicators)
