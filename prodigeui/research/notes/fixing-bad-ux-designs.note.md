---
sourceId: fixing-bad-ux-designs
sourceType: book
sourceName: "Fixing Bad UX Designs (Lisandra Maioli)"
sourceLocation: "Book/UX/Fixing Bad UX Designs (Lisandra Maioli) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

- **Pattern Recognition of Bad UX:** Bad UX follows predictable patterns. Identifying these patterns enables systematic prevention rather than reactive fixing.
- **Common UX Failures:** Confusing navigation, overwhelming forms, unclear error messages, hidden feedback, inconsistent interactions, inaccessible content, dark patterns.
- **Fix Framework:** Identify problem → Understand root cause → Apply UX principle → Validate improvement. Never fix symptoms without understanding cause.
- **Navigation Failures:** Most navigation problems stem from: too many options, unclear labeling, missing current-location indicator, inconsistent behavior across pages.
- **Form Failures:** Bad forms share: too many fields, unclear requirements, poor error handling, no progress indication, lost data on errors.
- **Feedback Failures:** Users need acknowledgment for every action. Missing feedback = user uncertainty = repeated actions or abandonment.
- **Dark Patterns vs. Bad UX:** Distinguish intentional manipulation (dark patterns) from unintentional poor design. Both produce bad outcomes but require different solutions.

## Concrete Rules & Parameters

- Navigation audit: ≤7 top-level items; current page highlighted; consistent position across pages; breadcrumbs for >2 levels deep
- Form audit: ≤5 fields per step; labels always visible; inline validation; no data loss on errors; progress shown for multi-step
- Error message audit: specific (not generic); actionable (tells how to fix); timely (appears at point of error); non-blocking (doesn't require modal dismissal to fix)
- Feedback audit: visual feedback within 200ms for user actions; loading indicator within 1s; never "swallow" user input silently
- Consistency audit: same component for same function throughout; same interaction pattern for same action type; same terminology for same concept
- Accessibility audit: keyboard navigable; screen-reader compatible; sufficient contrast; no information via color alone

## Modern Context Application

- **AI Anti-Pattern Detector:** These failure patterns become automated quality gate checks. The agent validates its own output against known bad-UX patterns.
- **Pre-Generation Constraints:** Rather than fixing bad UX after generation, encode avoidance rules as generation constraints.
- **Audit Skill:** A dedicated "UX audit" skill can systematically check generated output against each failure category.
- **Self-Correction Loop:** Agent generates → audit skill checks → identifies patterns → agent fixes. Automated improvement cycle.

## Anti-AI-Slop Indicators

| Expert UX Fix Awareness | AI Slop Patterns |
|---|---|
| Navigation with clear location + hierarchy | Menu without active state or breadcrumbs |
| Inline validation at appropriate timing | Validation only on submit (all errors at once) |
| Specific error messages with fix guidance | "Something went wrong" generic errors |
| Immediate visual feedback for actions | Silent action handling (did my click work?) |
| Consistent interaction patterns | Different patterns for same action type |
| Accessible by default | Inaccessible unless explicitly requested |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| Bad UX pattern catalog | `quality-gate/criteria.json` | Anti-pattern checklist | Automated detection of known bad patterns |
| Navigation audit rules | `quality-gate/criteria.json` | Navigation criteria | ≤7 items, active state, breadcrumbs check |
| Form audit rules | `quality-gate/criteria.json` | Form criteria | Field count, validation, progress checks |
| Error message audit | `design-rules/forms.md` | Error message requirements | Specific, actionable, timely, non-blocking |
| Feedback timing | `design-rules/interaction.md` | Response time rules | 200ms visual, 1s loading |
| Consistency audit | `quality-gate/criteria.json` | Consistency criteria | Same component for same function |
| Fix framework process | `skills/ux-audit/SKILL.md` | Audit workflow steps | Identify → root cause → fix → validate |

## Cross-References

- Anti-pattern catalog feeds `quality-gate/criteria.json` (Requirement 12 AC 5: "anti AI slop" checklist)
- Navigation rules align with `dont-make-me-think-revisited` persistent navigation
- Form rules align with `designing-ux-forms` field limits and validation
- Feedback timing matches `designing-with-mind-in-mind` response time thresholds
- Consistency aligns with Requirement 8 (Design System Cohesion)
- Accessibility checks support Requirement 13
