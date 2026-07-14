---
sourceId: designing-with-mind-in-mind
sourceType: book
sourceName: "Designing with the Mind in Mind (Jeff Johnson)"
sourceLocation: "Book/UX/Designing_with_the_Mind_in_Mind_Simple_G.pdf"
appliedTo: []
---

## Key Principles Extracted

- **Perception is Biased:** Human perception is not a camera — it's an active process shaped by expectations, context, and past experience. Design must account for perceptual biases.
- **Gestalt Principles as Law:** Proximity, similarity, continuity, closure, figure/ground, and common fate are not suggestions — they are perceptual laws the brain follows automatically.
- **Reading is Unnatural:** Reading requires trained visual processing. Design must optimize for reading ease: contrast, size, familiar fonts, left-alignment, and appropriate line length.
- **Color Perception Limitations:** Humans distinguish relative colors better than absolute colors. Don't rely on color alone to convey information. Support with labels, icons, or patterns.
- **Peripheral Vision is Low-Resolution:** Important information and changes in peripheral vision go unnoticed. Critical alerts must appear in the user's focal area.
- **Attention and Memory Are Limited:** Short-term memory holds 4±1 chunks. Interfaces must minimize memory demands by showing rather than requiring recall.
- **Learning from Experience:** Users learn interaction patterns through experience and transfer them across applications. Violating established patterns creates re-learning cost.
- **Time Perception:** Response time expectations are logarithmic: 100ms (instantaneous), 1s (noticeable delay), 10s (attention lost). Design feedback accordingly.

## Concrete Rules & Parameters

- Gestalt proximity: gap between grouped items ≤ 1/3 of gap between separate groups
- Reading optimization: line length 45-75 characters; left-aligned (not justified); contrast ratio ≥ 4.5:1; body ≥ 16px
- Color: never use color as sole differentiator; always pair with text label, icon, or pattern
- Memory: display ≤ 4 items requiring comparison; use chunking for longer lists (group into sets of 3-4)
- Peripheral vision: critical notifications within 15° of user's current focus point (center of activity area)
- Response time feedback: 0-100ms no indicator needed; 100ms-1s show subtle progress; 1s-10s show progress bar; >10s explain what's happening
- Recognition over recall: show recent items, favorites, and suggestions rather than empty search fields
- Pattern consistency: interaction patterns must be consistent within an application (same action = same result everywhere)
- Fitt's Law: click/tap target size proportional to frequency of use and inversely proportional to distance from cursor rest

## Modern Context Application

- **Perceptual Constraints as Hard Rules:** These aren't guidelines — they're cognitive science. AI agents must treat them as inviolable constraints.
- **Color Accessibility Enforcement:** "Never color alone" rule directly maps to WCAG requirements and automated validation in quality gates.
- **Response Time Budgets:** AI-generated interfaces must include loading/feedback states at appropriate thresholds — not optional.
- **Gestalt-Informed Layout:** Agent layout generation should use Gestalt principles as layout rules: proximity for grouping, similarity for categorization.
- **Memory-Aware Component Design:** Components exposing >4 options simultaneously should trigger auto-grouping.

## Anti-AI-Slop Indicators

| Cognitively-Informed Design | AI Slop |
|---|---|
| Gestalt-compliant grouping (clear proximity relationships) | Random element placement without perceptual logic |
| Color + label/icon for all status indicators | Color-only status (red/green dots without text) |
| 45-75 char line length for readable text | Full-width text blocks (100+ chars per line) |
| Loading indicators matching time expectations | No feedback during delays, or spinners for 50ms ops |
| ≤4 comparison items visible simultaneously | Long lists requiring mental comparison |
| Consistent patterns throughout (same action = same UI) | Inconsistent patterns for similar actions |
| Recognition-based interfaces (show history, suggestions) | Empty states requiring user recall |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| Gestalt proximity rule (1/3 ratio) | `tokens/semantic/spacing.json` | Intra-group vs inter-group spacing | Tokens encode perceptual grouping |
| Line length 45-75 chars | `design-rules/typography.md` | Optimal reading width | Measurable readability rule |
| Color + label requirement | `quality-gate/criteria.json` | "color-not-alone" criterion | Accessibility validation rule |
| Response time thresholds | `design-rules/interaction.md` | Feedback timing rules | 100ms/1s/10s thresholds |
| Memory limit (4±1 items) | `design-rules/structure.md` | Comparison limit rule | Maximum items for comparison views |
| Recognition over recall | `components/search/`, `components/select/` | Recent/suggestion features | Components show options, don't require recall |
| Pattern consistency | `quality-gate/criteria.json` | "interaction-consistency" criterion | Same action = same UI pattern validation |
| Fitt's Law sizing | `design-rules/interaction.md` | Target size rules | Size proportional to frequency |

## Cross-References

- Scientific foundation for `dont-make-me-think-revisited` usability principles
- Gestalt principles inform token spacing values in `tokens/semantic/spacing.json`
- Color rules directly support Requirement 13 (Accessibility)
- Memory limits align with `simple-and-usable` option reduction rules
- Response time rules map to `design-rules/interaction.md`
- Complements `design-for-how-people-think` cognitive framework
- Pattern consistency feeds Quality_Gate consistency criteria (Requirement 12)
