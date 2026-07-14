---
sourceId: design-for-how-people-think
sourceType: book
sourceName: "Design for How People Think (John Whalen)"
sourceLocation: "Book/UX/Design for how People Think (John Whalen) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

- **Six Minds Framework:** Human cognition operates through six "minds" simultaneously: Vision (visual processing), Attention (focus and filtering), Memory (recognition and recall), Language (comprehension and labeling), Decision-Making (choice and commitment), Emotion (feeling and motivation).
- **Vision Mind:** Users process visual information in patterns — proximity groups, similarity categorizes, contrast draws attention, alignment creates order. Design WITH the visual system, not against it.
- **Attention Mind:** Attention is a limited resource. Design must direct focus to what matters through visual weight, motion, color contrast, and isolation. Reduce competing signals.
- **Memory Mind:** Recognition is far easier than recall. Show options rather than asking users to remember them. Use familiar patterns (conventions) to leverage existing memory.
- **Language Mind:** Labels, button text, and instructions must match user vocabulary and mental models. Ambiguous language creates cognitive friction.
- **Decision Mind:** Simplify decisions by reducing options, providing defaults, showing social proof, and framing choices clearly. Decision fatigue degrades UX quality.
- **Emotion Mind:** Emotional responses (trust, delight, frustration) shape the entire experience. Design should create appropriate emotional states through aesthetics, feedback, and pacing.

## Concrete Rules & Parameters

- Gestalt grouping: elements within 1x spacing unit are perceived as grouped; 2x+ creates separation
- Attention: maximum 3 competing focal points per viewport; primary focus should be ≥2x visual weight of secondary
- Memory: max 5 options before grouping required (working memory limit); recognition over recall always
- Language: UI labels ≤4 words; match user language (test with actual users); avoid negative phrasing ("Don't forget to..." → "Remember to...")
- Decision: max 3 options before decision quality degrades; present a recommended default when possible
- Emotion: feedback within 100ms for direct manipulation; 400ms maximum for system acknowledgment
- Scanning pattern: F-pattern for text-heavy pages, Z-pattern for marketing/sparse layouts
- Visual weight hierarchy: size > color > contrast > position > whitespace (in attention-drawing power)

## Modern Context Application

- **Cognitive Load Management:** AI agents must manage user cognitive load — generated interfaces should respect attention limits, memory constraints, and decision fatigue.
- **Agent as Cognitive Advocate:** When generating UI, the agent acts as advocate for user cognition — applying six minds principles as design constraints.
- **Emotion in AI Interfaces:** AI-generated interfaces often feel emotionally flat ("AI slop"). Whalen's emotion mind principles provide measurable emotional design parameters.
- **Language Quality Gate:** Generated UI copy must pass language mind criteria — user vocabulary, concise labels, positive framing.
- **Decision Architecture:** AI-generated option screens must apply decision mind rules — limited choices, clear recommendation, smart defaults.

## Anti-AI-Slop Indicators

| Cognitive-Aware Design | AI Slop |
|---|---|
| Gestalt grouping creating clear relationships | Random element placement without proximity logic |
| ≤3 focal points per viewport | Everything competing for attention equally |
| Recognition-based (show options) | Recall-required (remember codes, paths) |
| User-language labels (tested) | Technical/generic labels |
| ≤3 decision options with recommendation | Many options without guidance |
| Feedback within 100ms for interactions | No response feedback, dead feeling |
| Appropriate emotional design (trust cues) | Emotionally flat, no personality |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| Six Minds framework | `skills/ux-design-e2e/SKILL.md` | Cognitive audit step | Agent evaluates design against all six minds |
| Attention limit (3 focal points) | `design-rules/layout.md` | Focal point maximum | Measurable attention management rule |
| Decision limit (3 options max) | `design-rules/structure.md` | Decision point rules | Prevents decision overload |
| Gestalt spacing rules | `tokens/semantic/spacing.json` | Group vs. separate spacing | Token values encode proximity relationships |
| Feedback timing (100ms/400ms) | `design-rules/interaction.md` | Response time requirements | Interaction feedback rules |
| Language mind rules | `design-rules/typography.md` | Label writing rules | Max 4 words, user language, positive framing |
| F-pattern/Z-pattern | `design-rules/layout.md` | Content arrangement patterns | Scanning pattern guidance for agents |
| Emotion indicators | `quality-gate/criteria.json` | "emotional-design" criterion | Check for trust cues, personality, feedback |

## Cross-References

- Cognitive principles feed `quality-gate/criteria.json` attention/decision criteria
- Gestalt rules inform spacing token semantics (Requirement 3)
- Complements `dont-make-me-think-revisited` — "don't make me think" = respect all six minds
- Decision mind aligns with `simple-and-usable` option reduction
- Language mind feeds `strategic-writing-ux` principles
- Attention mind supports `design-rules/layout.md` hierarchy rules
- Emotion mind connects to Requirement 12 ("enterprise-grade" feeling)
