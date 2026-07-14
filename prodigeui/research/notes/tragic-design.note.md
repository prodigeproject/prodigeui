---
sourceId: tragic-design
sourceType: book
sourceName: "Tragic Design: The True Impact of Bad Design and How to Fix It"
sourceLocation: "Book/design-principles/ebin.pub_tragic-design-the-true-impact-of-bad-design-and-how-to-fix-it-0636920038887-9781491923610-149192361x.pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Design Has Consequences**: Bad design isn't just ugly — it kills (medical device errors), bankrupts (confusing financial UIs), excludes (inaccessible interfaces), and angers (dark patterns). Every design decision has ethical weight. ProdigeUI quality gate must enforce harm-prevention rules.

2. **Anger-Inducing Design Patterns**: Designs that frustrate: hidden information, forced unnecessary steps, inconsistent behavior, broken promises (buttons that don't work), unexpected state loss, and manipulation (dark patterns). These destroy trust permanently.

3. **Exclusionary Design**: Design that works only for the "average user" excludes everyone else. Exclusion dimensions: ability (vision, motor, cognitive), context (noise, sunlight, one-handed), technology (slow connection, old device), culture (language, reading direction).

4. **Sad Design (Emotional Harm)**: Interfaces that deliver bad news poorly, expose private information, remind of loss, or fail to acknowledge emotional context. Design must be empathetic — aware of emotional states during critical interactions.

5. **Design Ethics Framework**: Questions before shipping: (1) Who could this harm? (2) What's the worst-case misuse? (3) Are we manipulating or empowering? (4) Does it work for edge cases, not just happy paths? (5) Have we tested with diverse users?

6. **Error Messages as Design**: How a system communicates failure matters enormously. Bad: cryptic codes, blame language, no recovery path. Good: plain language explanation, specific next steps, maintaining user's work, no data loss.

7. **Progressive Trust Building**: Users don't trust immediately — trust builds through consistent, predictable, honest behavior. Each interaction either builds or erodes trust. Broken promises (loading states that never resolve, buttons that don't respond) destroy trust fastest.

8. **Inclusivity as Default**: Universal design isn't a checklist — it's a mindset. Color is never the only indicator. Motion respects `prefers-reduced-motion`. Text is readable at 200% zoom. Touch targets work for all hand sizes. Content makes sense without images.

9. **Context-Aware Design**: The same interface fails differently in different contexts. Emergency use (stress, time pressure), public use (privacy), mobile use (one hand, poor connection), accessibility use (screen reader, switch control). Design must account for worst-case context.

10. **Measurement of Harm**: Track negative metrics alongside positive ones: error rate, rage clicks, form abandonment, support ticket triggers, accessibility failures, time-to-frustration. These indicate design causing harm.

## Concrete Rules & Parameters

| Principle | Measurable Rule | Implementation |
|-----------|----------------|----------------|
| Harm Prevention | No color-only indicators; no auto-play without control; no irreversible actions without confirmation | Quality gate hard rules |
| Error Messages | Plain language + specific action + maintain state; max 2 sentences | Component error state specs |
| Inclusivity | WCAG AA minimum; keyboard navigable; screen-reader compatible; reduced-motion supported | Token pairs validated; component a11y specs |
| Trust Building | Loading states show progress; actions provide feedback within 100ms; no silent failures | Feedback timing rules; loading state requirements |
| Context Awareness | Touch targets ≥44px; readable in sunlight (contrast ≥7:1 for critical info); offline-capable states | Design rules for degraded contexts |
| Dark Pattern Prevention | No hidden costs; no trick questions; no forced continuity; no misdirection | Quality gate ethical criteria |
| Emotional Awareness | Destructive actions use neutral language; no celebration of negative outcomes | Copy guidelines; tone rules |
| Error Rate Tracking | Every form component tracks: submission failures, validation triggers, abandonment | Component telemetry specs |
| State Preservation | User input never lost without explicit permission; auto-save capability | Form component requirements |
| Progressive Trust | Consistent behavior across sessions; promises kept (if "saving..." then actually save) | Interaction consistency rules |

## Modern Context Application

- **Harm Prevention + AI-Generated UIs**: AI agents generating UIs may not consider edge cases or harmful patterns. ProdigeUI's quality gate must catch: missing error states, color-only indicators, inaccessible contrast, destructive actions without confirmation.
- **Error Messages + Component System**: Every interactive component MUST define its error state. Not optional. Error message pattern: what happened (plain language) + why (brief) + what to do (specific action). Token for error color role.
- **Inclusivity + Token System**: Tokens enforce inclusivity by design. All color pairs pre-validated for contrast. Motion tokens include `reduced` variants. Size tokens ensure minimum target sizes. Using tokens = being inclusive.
- **Dark Patterns + Quality Gate**: Quality gate criteria must explicitly check for manipulative patterns: (1) Are options equal in visual weight? (2) Is the dismiss/cancel path as clear as the proceed path? (3) Is pricing/cost visible before commitment?
- **Context-Aware + Responsive Tokens**: Token values adapt to context. Mobile tokens enforce larger touch targets. Reduced-motion tokens provide non-animated alternatives. High-contrast mode tokens boost all contrast values.
- **Trust + Loading States**: Every async operation needs: (1) immediate visual acknowledgment (<100ms), (2) progress indication (>1s), (3) success/failure confirmation. No silent operations.

## Anti-AI-Slop Indicators

| Responsible Design | Harmful AI-Slop Design |
|-------------------|------------------------|
| Every interactive element has error/empty/loading/disabled states defined | Only "happy path" default state designed |
| Color + icon + text for status communication (multi-channel) | Color-only status indicators |
| Error messages are specific, actionable, human-friendly | Generic "Something went wrong" with no recovery path |
| Destructive actions require explicit confirmation | Delete buttons without confirmation or undo |
| Cancel/dismiss options equally visible as proceed options | Dismiss buried or styled as ghost (dark pattern) |
| Loading states show progress and set expectations | Spinners with no indication of duration or progress |
| All interactive elements keyboard accessible | Mouse-only interactions |
| Reduced motion alternatives for all animations | Animations with no `prefers-reduced-motion` respect |
| Form state preserved across navigation/errors | Form data lost on back button or validation failure |
| Consistent behavior (same action → same result) | Unpredictable behavior based on hidden state |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Harm prevention rules | `quality-gate/criteria.json` | `aria-roles` category: color-only check, confirmation check, a11y check | Catches dangerous design patterns before deployment |
| Error state requirement | `components/` manifest | Every interactive component: `states.error` defined (required field) | No component ships without error handling |
| Error message pattern | `design-rules/structure.rules.json` | `errorMessagePattern: { what, why, action }` | Consistent, helpful error communication |
| Inclusivity enforcement | `quality-gate/criteria.json` | `contrast-normal` category: contrast, targets, keyboard, screen-reader checks | Non-negotiable accessibility standards |
| Dark pattern detection | `quality-gate/criteria.json` | `anti-slop-patterns` category: equal option weight, visible costs, honest language | Prevents manipulation by AI agents |
| Trust-building patterns | `design-rules/structure.rules.json` | `feedbackTimings`, `loadingStateRequirements`, `statePreservation` rules | Systematic trust building through consistency |
| Context-aware tokens | `tokens/semantic.tokens.json` | Contextual token variations (mobile/high-contrast/reduced-motion) | Adaptation to degraded contexts |
| Multi-channel communication | `design-rules/structure.rules.json` | `statusCommunication: "color+icon+text"` (never color-only) | Ensures information accessible regardless of ability |
| State preservation | `components/` manifest | Form components: `preservesState: true` requirement | Prevents user work loss |
| Negative metrics | `quality-gate/criteria.json` | `harm-indicators` tracking criteria | Measures design causing harm |

## Cross-References

- **Universal Principles of UX**: Error prevention and feedback principles given stakes/consequences context
- **Ruined by Design (Monteiro)**: Overlapping ethics framework from designer responsibility angle
- **Laws of UX (Yablonski)**: Scientific backing for why bad design causes frustration
- **100 Things Every Designer Needs to Know**: Cognitive science explaining WHY bad patterns confuse
- **Designing for Emotion**: Contrasts — positive emotional design vs tragic design's emotional harm
- **WCAG Guidelines**: Standards that operationalize inclusivity requirements
