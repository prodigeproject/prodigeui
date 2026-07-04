---
sourceId: designing-for-emotion
sourceType: book
sourceName: "Designing for Emotion"
sourceLocation: "Book/Designing for Emotion - Spool - A Book Apart (2011).pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Maslow's hierarchy for UX**: Functional → Reliable → Usable → Pleasurable (build from bottom up; don't skip levels)
2. **Personality in interfaces**: Design systems should have documented personality traits that guide tone, copy, and visual decisions
3. **Surprise and delight as trust-builders**: Unexpected positive moments create emotional bonds and memory anchors
4. **Contrast principle for emotion**: Reserve emotional design moments for KEY interactions; overuse dilutes impact
5. **Priming through visual design**: Color, typography, and imagery prime users' emotional state before they read content
6. **Forgiveness design**: When errors occur, personality-infused error states reduce frustration and maintain relationship
7. **Baby-face bias**: Rounded shapes, large eyes, and soft curves trigger nurturing response (applicable to icons, illustrations)

## Concrete Rules & Parameters

- Pleasurable layer: Only AFTER functional+reliable+usable are satisfied (never sacrifice usability for delight)
- Emotional moment frequency: 1 per user flow maximum (more = diminishing returns)
- Personality definition: 3-5 adjectives that describe the system's voice (e.g., "confident, approachable, precise")
- Error state formula: Acknowledge + Explain + Guide + [Optional: personality touch]
- Border-radius for approachability: Rounded (8-16px) signals friendly; Sharp (0-2px) signals precision

## Modern Context Application

- **Tokens**: Personality encoded in token choices — border-radius scale reflects approachability level
- **Dark mode**: Emotional design adapts tone (dark = more subdued delight, less exuberant)
- **Component systems**: Empty states, error states, success states designed as emotional touchpoints
- **Responsive**: Micro-interactions are the primary emotional vehicle on mobile (no room for illustrations)
- **AI context**: AI agents need personality parameters to avoid generic output (ProdigeUI personality traits)

## Anti-AI-Slop Indicators

- Expert: Restrained emotional design; delight at specific strategic moments; documented personality
- AI slop: Emojis everywhere; gratuitous micro-animations on every element; no consistent personality
- Expert: Error states have specific, helpful copy with personality
- AI slop: Generic "Oops! Something went wrong" with a sad face emoji

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Personality definition framework | `design-system/personality.json` | Personality traits array | Guides all aesthetic decisions system-wide |
| Emotional moment budget | `design-rules/interaction.rules.json` | Delight frequency constraint | Prevents overuse, maintains impact |
| Error state formula | `components/` feedback components | Error state specification structure | Ensures errors are emotional touchpoints |
| Border-radius as personality signal | `tokens/tokens.json` | `radius` scale values + rationale | Radius choices reflect documented personality |
| Maslow's UX hierarchy | `quality-gate/criteria.json` | Hierarchy validation order | Gate checks function→reliable→usable before pleasurable |

## Cross-References

- Maslow's hierarchy validates Don't Make Me Think's "usability first" principle
- Personality framework aligns with taste-skill-main's Design Variance dial
- Emotional moment budget confirmed by design-motion-principles-main's Frequency Gate
- Border-radius as signal validated by Universal Principles of Design (baby-face bias)
- Error state design connects to White Hat UX's ethical persuasion patterns
