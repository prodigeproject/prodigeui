---
sourceId: experiencing-design
sourceType: book
sourceName: "Experiencing Design"
sourceLocation: "Book/Experiencing-Design.pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Experience mapping**: Every design decision maps to a moment in user's emotional journey — map touchpoints to emotions
2. **Cognitive load management**: Reduce extraneous load (irrelevant complexity); optimize germane load (meaningful learning)
3. **Progressive disclosure**: Reveal complexity only when needed; default interface shows minimum viable information
4. **Sensory design integration**: Visual + auditory + haptic feedback creates richer, more memorable experiences
5. **Flow state facilitation**: Design should minimize interruptions; clear goals + immediate feedback + matched challenge
6. **Temporal design**: User perception of time varies — perceived performance matters more than actual performance

## Concrete Rules & Parameters

- Working memory limit: 4±1 chunks visible simultaneously (not Miller's outdated 7±2)
- Progressive disclosure: Primary actions visible; secondary behind one interaction; tertiary behind two
- Feedback latency: <100ms feels instant; 100-300ms acknowledged; >1000ms requires progress indicator
- Flow state: Zero modal interruptions during core task execution
- Perceived performance: Skeleton screens reduce perceived wait time by ~30%

## Modern Context Application

- **Tokens**: Information density tokens (compact/comfortable/spacious) control cognitive load
- **Component systems**: Components default to progressive disclosure (show primary, collapse secondary)
- **Responsive**: Mobile = more aggressive progressive disclosure (less screen real estate)
- **Dark mode**: Reduced visual noise in dark mode can help flow state maintenance
- **Loading states**: Skeleton screens as standard component state (not spinner)

## Anti-AI-Slop Indicators

- Expert: Information hierarchy clear; progressive disclosure intentional; cognitive load managed
- AI slop: All information shown simultaneously; no hierarchy; overwhelming density
- Expert: Loading states use skeleton screens matching actual content layout
- AI slop: Generic spinner or no loading state consideration

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Progressive disclosure rules | `design-rules/interaction.rules.json` | Disclosure levels definition | Agent designs with proper information hierarchy |
| Cognitive load limits | `design-rules/layout.rules.json` | Maximum visible actions/items | Prevents overwhelming interfaces |
| Feedback latency thresholds | `design-rules/interaction.rules.json` | Response time categories | Defines when to show loading states |
| Skeleton screen requirement | `components/atoms/` | Loading state specification | Standard loading pattern, not spinners |
| Flow state guidelines | `quality-gate/criteria.json` | Interruption audit rules | Gate checks for modal abuse, unnecessary alerts |

## Cross-References

- Cognitive load limits validate Don't Make Me Think's simplicity principles
- Progressive disclosure confirmed by Mobile App UX Principles
- Feedback latency thresholds align with animation-for-the-web timing rules
- Flow state concept connects to Designing for Emotion's pleasurable layer
- Skeleton screens validated by modern UI library patterns (shadcn/ui loading states)
