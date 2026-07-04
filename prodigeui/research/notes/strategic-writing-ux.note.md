---
sourceId: strategic-writing-ux
sourceType: book
sourceName: "Strategic Writing for UX (Torrey Podmajersky)"
sourceLocation: "Book/UX/Strategic Writing for UX Drive Engagement, Conversion, and Retention with Every Word - 2nd Edition (Torrey Podmajersky) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

- **Every Word Earns Its Place:** UX writing is strategic — every word on screen must serve a purpose (guide, inform, reassure, or motivate). Remove anything that doesn't earn its space.
- **Voice and Tone Framework:** Voice is consistent (brand personality), tone adapts to context (empathetic during errors, celebratory on success, neutral in routine tasks).
- **Content Patterns:** Repeatable content patterns (button labels, headers, error messages, empty states, onboarding) ensure consistency across the product.
- **User-Centered Language:** Write from the user's perspective using their vocabulary. Avoid system/technical language unless the audience is technical.
- **Conciseness Hierarchy:** Headlines → Subheads → Body → Details. Each level more detailed. Users can stop reading at any level and still understand the core message.
- **Actionable Microcopy:** Button text should describe the action outcome ("Create account") not the mechanism ("Submit"). Help text should answer "what do I do?" not "what is this?"
- **Error Writing Formula:** What happened → Why → What to do now. Never blame the user. Be specific about the problem and clear about the solution.

## Concrete Rules & Parameters

- Button text: 1-4 words; verb-first ("Create account", "Save changes"); never generic ("Submit", "OK", "Click here")
- Headlines: ≤8 words; communicate value or next action; sentence case
- Error messages: max 2 sentences; format: "[What happened]. [What to do]." — e.g., "Email address already registered. Try logging in or use a different email."
- Empty states: purpose statement + primary action; never just "No data" or blank
- Loading text: describe what's happening, not just "Loading..." — e.g., "Preparing your dashboard..."
- Confirmation messages: confirm what happened + what's next — "Account created. Check your email for verification."
- Helper text: appears before input; answers "what should I enter?"; max 1 sentence
- Voice dimensions: formal↔casual, serious↔playful, respectful↔irreverent, enthusiastic↔matter-of-fact
- Tone adaptation: high-stakes = more formal, empathetic; low-stakes = casual, encouraging; error = neutral, helpful
- Word count caps: tooltip ≤ 15 words; notification ≤ 25 words; modal body ≤ 50 words

## Modern Context Application

- **AI Copy Generation:** AI agents generating UI copy must follow strict patterns — not freestyle text generation. Patterns prevent verbose AI output ("AI slop").
- **Content Templates for Agents:** Prompt templates include copy pattern specifications: button format, error format, empty state format. Agents fill templates, don't write freely.
- **Voice Configuration:** Product voice parameters in design rules enable consistent copy generation across all agent interactions.
- **Anti-Verbosity Rules:** AI's natural tendency toward verbose output is countered by strict word-count limits per UI element type.
- **Tone Auto-Detection:** Context (error state, success, onboarding) determines tone automatically — agents select appropriate tone variant based on UI context.

## Anti-AI-Slop Indicators

| Strategic UX Writing | AI Slop Copy |
|---|---|
| 1-4 word action buttons ("Save changes") | Generic ("Submit", "Click here", "OK") |
| Specific errors with fix guidance | Vague ("Something went wrong", "Error") |
| Concise (word count per element type) | Verbose paragraphs in UI (overexplaining) |
| User language (tested vocabulary) | System/technical jargon in user-facing text |
| Consistent voice across all touchpoints | Varying personality per screen |
| Meaningful empty states with actions | "No data" or blank pages |
| Context-adapted tone (empathetic in errors) | Same flat tone regardless of context |
| Value-communicating headlines (≤8 words) | Long descriptive headers or generic titles |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| Voice and tone framework | `design-rules/voice-tone.md` | Voice dimensions + tone adaptation | Consistent AI copy generation |
| Content patterns (button, error, empty) | `design-rules/content-patterns.md` | Pattern templates per element | Agents fill patterns, not freestyle |
| Word count limits per element | `design-rules/typography.md` | Content length constraints | Measurable anti-verbosity rules |
| Error message formula | `design-rules/forms.md` | Error writing specification | "[What happened]. [What to do]." |
| Button text rules | `design-rules/content-patterns.md` | Action label format | Verb-first, 1-4 words, outcome-focused |
| Empty state specification | `components/empty-state/` | Component content requirements | Purpose + action, never blank |
| Tone context mapping | `design-rules/voice-tone.md` | Context → tone table | Automatic tone selection per state |
| Conciseness hierarchy | `design-rules/typography.md` | Content hierarchy rules | Headlines → subheads → body cascade |

## Cross-References

- Directly feeds `design-rules/voice-tone.md` and `design-rules/content-patterns.md`
- Error writing aligns with `designing-ux-forms` error message requirements
- Conciseness supports `dont-make-me-think-revisited` "omit needless words"
- Voice framework connects to `principles-product-design` personality dimensions
- Word limits enforce `simple-and-usable` reduction principles
- Label quality feeds Quality_Gate content criteria (Requirement 12)
- Content patterns inform Prompt_Template generation (Requirement 10)
