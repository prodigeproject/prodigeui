---
sourceId: ux-writing
sourceType: book
sourceName: "UX Writing (Jason C. K. Tham, Tharon Howard)"
sourceLocation: "Book/UX/UX Writing Designing User-Centered Content [Team-IRA] (Jason C. K. Tham, Tharon Howard etc.) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

- **Content as Interface:** Words are UI elements. Content design is interaction design — every word guides, reassures, or enables user action.
- **User-Centered Content:** Write for users, not the business. User goals drive content structure, vocabulary, and priority.
- **Content Strategy Integration:** UX writing exists within a broader content strategy — voice guidelines, terminology databases, content governance, and reusable content patterns.
- **Inclusive Writing:** UX content must be accessible to diverse audiences: plain language, culturally neutral, translatable, and jargon-free unless targeting technical users.
- **Microcopy as Wayfinding:** Small text elements (labels, tooltips, placeholders, validation messages) are wayfinding aids — they orient users within the interface.
- **Content-First Design:** Content structure should drive layout decisions, not the reverse. Know what you're saying before deciding how to arrange it visually.
- **Testing Content:** UX writing should be tested like any other design element — A/B tests on button copy, comprehension tests on instructions, preference tests on voice.

## Concrete Rules & Parameters

- Plain language: aim for grade 8 reading level (Flesch-Kincaid); sentences ≤ 20 words; paragraphs ≤ 3 sentences in UI
- Terminology consistency: maintain a product glossary; one term per concept; never synonymize in UI text
- Inclusive language: avoid idioms, metaphors requiring cultural context; use gender-neutral language; support localization
- Microcopy hierarchy: labels > placeholder text > helper text > tooltip (in permanence/visibility priority)
- Call-to-action formula: verb + object ("Create account", "Download report"); avoid ambiguity ("Go", "Next")
- Content testing: A/B test primary CTA copy; comprehension test for error messages (5 users understand without help)
- Localization readiness: allow 30-40% text expansion for translation; avoid embedded text in images; no concatenated strings

## Modern Context Application

- **AI Copy Constraints:** AI agents must generate content within strict parameters — word limits, reading level, terminology database compliance.
- **Terminology Database:** ProdigeUI maintains approved terms for common UI concepts — agents pull from this database rather than inventing synonyms.
- **Localization-Ready Generation:** AI-generated content must follow localization rules (expansion space, no idioms, no concatenation) by default.
- **Content Patterns Library:** Reusable content templates for common UI situations enable consistent agent output.
- **Inclusive by Default:** Agent content generation should pass inclusive language checks automatically.

## Anti-AI-Slop Indicators

| Professional UX Writing | AI Slop Content |
|---|---|
| Grade 8 reading level (plain language) | Complex sentences, academic tone |
| Consistent terminology (one term per concept) | Synonyms throughout (save/submit/apply/confirm) |
| Microcopy guides without overwhelming | Either no guidance or over-explaining |
| Verb+object CTAs ("Create account") | Vague labels ("Go", "Next", "Submit") |
| Localization-ready (expansion space, no idioms) | Text that breaks on translation |
| Inclusive, culturally neutral | Idioms, colloquialisms, gendered language |
| Tested content (comprehension validated) | First-draft copy shipped as-is |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| Product glossary/terminology database | `design-rules/terminology.md` | Approved terms list | Agent uses approved terms only |
| Reading level target | `quality-gate/criteria.json` | "readability" criterion | Flesch-Kincaid ≤ grade 8 |
| Content patterns library | `design-rules/content-patterns.md` | Pattern templates | Reusable content for common situations |
| Inclusive language rules | `quality-gate/criteria.json` | "inclusive-language" criterion | Automated inclusive language check |
| Localization readiness | `design-rules/content-patterns.md` | Localization rules | 30-40% expansion, no idioms, no concatenation |
| Microcopy hierarchy | `design-rules/forms.md` | Label/placeholder/helper precedence | Clear priority order for text elements |
| CTA formula | `design-rules/content-patterns.md` | Action label pattern | Verb+object format enforced |

## Cross-References

- Extends `strategic-writing-ux` with academic UX writing theory foundation
- Terminology database feeds consistent labeling (complements `dont-make-me-think-revisited`)
- Inclusive writing supports Requirement 13 (Accessibility) content aspect
- Reading level target adds measurable criterion to Quality_Gate (Requirement 12)
- Content-first design aligns with `designing-ux-prototyping` content-first approach
- Microcopy as wayfinding connects to wayfinding book principles
