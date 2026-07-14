---
sourceId: design-of-everyday-things
sourceType: book
sourceName: "The Design of Everyday Things"
sourceLocation: "Book/psychology/Donald A. Norman/English/"
appliedTo: []
---

## Key Principles Extracted

1. **Affordances**: Objects should suggest their usage through physical/visual properties — buttons look pressable, sliders look draggable
2. **Signifiers**: Explicit cues that indicate WHERE and HOW to act (arrows, labels, underlines, cursor changes)
3. **Mapping**: Controls should have natural spatial/logical relationship to their effects (left knob controls left burner)
4. **Feedback**: Every action needs immediate, informative response — user must KNOW something happened
5. **Conceptual models**: Users build mental models; design must align with expected model (folder metaphor, trash can)
6. **Constraints**: Limit possible actions to prevent errors — physical, semantic, cultural, logical constraints
7. **Discoverability**: All necessary information for action visible or easily retrievable (no hidden functionality)
8. **Human error taxonomy**: Slips (correct intention, wrong execution) vs Mistakes (wrong intention) — design differently for each
9. **Gulf of execution**: Distance between intention and figuring out HOW (minimize with good signifiers/mapping)
10. **Gulf of evaluation**: Distance between system state and user understanding (minimize with good feedback)

## Concrete Rules & Parameters

- Feedback latency: <100ms for direct manipulation (feels connected); <1000ms for system actions
- Constraint types applied to UI: Disable invalid options (logical), gray out unavailable states (semantic), modal for destructive actions (forcing function)
- Affordance markers: Interactive elements need ≥2 visual cues (color change + cursor change, or shadow + label)
- Error recovery: Every destructive action must be undoable for ≥10 seconds (or require confirmation)
- Visibility principle: Primary functions visible; secondary ≤1 click away; never require recall of hidden commands
- Mapping: Navigation order matches visual order (left-to-right = first-to-last in tab order)

## Modern Context Application

- **Tokens**: Affordance tokens — interactive elements get `elevation`, `cursor`, `color.interactive.*` tokens
- **Dark mode**: Affordances must remain clear in dark mode (relying solely on shadow fails in dark themes; use border or color change)
- **Component systems**: Every interactive component specifies: affordance cues, signifiers, feedback states, constraints
- **Responsive**: Touch interfaces need LARGER signifiers (no hover state; affordance relies on visual alone)
- **Accessibility**: Screen readers = verbal signifiers (ARIA labels fulfill signifier role for non-visual users)
- **Design tokens**: Token naming IS signifier for developers — `color.interactive.hover` SIGNALS purpose

## Anti-AI-Slop Indicators

- Expert: Clear affordances (buttons look different from text); immediate feedback on every interaction; natural mapping
- AI slop: Flat design with no affordance differentiation; ghost buttons indistinguishable from labels; no feedback states
- Expert: Error prevention via constraints (disabled states, input masks, smart defaults)
- AI slop: All options always available regardless of context; errors caught only after submission
- Expert: Conceptual model consistent throughout (if drag works here, it works everywhere similar)
- AI slop: Inconsistent interaction patterns (drag in one place, click in equivalent other)

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Affordance requirements | `components/` all interactives | `affordanceCues` in component spec | Enforce ≥2 visual cues per interactive |
| Signifier checklist | `quality-gate/criteria.json` | Discoverability validation rules | Gate checks that actions are signified |
| Feedback state requirement | `components/` all interactives | States: hover/focus/active/disabled | Every state provides feedback |
| Constraint patterns | `design-rules/interaction.rules.json` | Error prevention patterns | Constraints > confirmations > undo |
| Natural mapping rule | `design-rules/layout.rules.json` | Tab order = visual order | Navigation matches spatial layout |
| Error recovery | `design-rules/interaction.rules.json` | Undo requirement (10s minimum) | Destructive actions recoverable |
| Gulf reduction | `quality-gate/criteria.json` | Execution/Evaluation gap check | Gate validates clear paths and feedback |
| Dark mode affordance | `tokens/tokens.json` | Interactive elements need border OR color shift (not shadow-only) | Shadow-based affordance fails in dark |

## Cross-References

- Affordances + Signifiers = Don't Make Me Think's "self-evidence" principle (same goal, different framing)
- Feedback requirement matches animation-for-the-web's micro-interaction timing
- Constraints align with White Hat UX's ethical choice architecture
- Conceptual models relate to User Experience Design's information architecture
- Error taxonomy informs component error state design (different UI for slips vs mistakes)
- Discoverability reinforces Experiencing Design's progressive disclosure (but adds: NEVER fully hidden)
- Gulf of evaluation connects directly to Designing for Emotion's feedback as trust-building
