---
sourceId: design-of-everyday-things-norman
sourceType: book
sourceName: "The Design of Everyday Things + Emotional Design (Donald A. Norman)"
sourceLocation: "Book/psychology/Donald A. Norman/English/"
appliedTo: []
---

## Key Principles Extracted

Norman's works establish the foundational framework for human-centered design. Two key works combined:

### The Design of Everyday Things (DOET)
- **Affordances:** Properties of objects that suggest how they can be used. Digital affordances = visual cues that communicate interaction possibility.
- **Signifiers:** Signals that communicate where and how to act. Affordances exist whether perceived or not; signifiers make them discoverable.
- **Mapping:** Relationship between controls and their effects. Natural mapping leverages spatial correspondence.
- **Feedback:** Communication of action results back to the user. Every action needs immediate, informative feedback.
- **Conceptual Models:** Simplified mental representations of how things work. Good design creates accurate mental models.
- **Constraints:** Limiting possible actions to prevent errors. Physical, cultural, semantic, and logical constraints.
- **Discoverability:** Can the user figure out what actions are possible and how to perform them?
- **Understanding:** Can the user figure out what the system means and what happened?
- **Gulf of Execution:** Gap between user's intention and available actions. Good design bridges this gap.
- **Gulf of Evaluation:** Gap between system state and user's understanding. Good feedback bridges this gap.
- **Error taxonomy:** Slips (execution errors) vs Mistakes (planning errors). Different error types need different prevention strategies.

### Emotional Design
- **Three levels of processing:** Visceral (appearance), Behavioral (function/usability), Reflective (meaning/self-image).
- **Visceral design:** Immediate emotional response to appearance. Color, shape, texture, sound trigger visceral reactions.
- **Behavioral design:** Pleasure from effective use. Function, performance, usability create behavioral satisfaction.
- **Reflective design:** Self-image, personal meaning, memories. Brand, status, storytelling operate at reflective level.
- **Attractive things work better:** Positive affect (from aesthetic pleasure) broadens cognitive abilities and problem-solving.

## Concrete Rules & Parameters

| Principle | Parameter | Design Rule |
|-----------|-----------|-------------|
| Affordance visibility | 100% interactive elements have visual cues | Buttons look pressable, links look clickable, inputs look editable |
| Signifier clarity | Within 2 seconds | User can identify interactive elements without exploration |
| Natural mapping | Spatial correspondence | Controls near their effects; layout follows logical spatial model |
| Feedback latency | < 100ms acknowledgment | Every interaction provides immediate visual/haptic confirmation |
| Feedback informativeness | State change visible | User can determine system state after every action |
| Constraint coverage | All destructive actions | Irreversible actions require explicit confirmation |
| Error prevention | Constraints before correction | Design prevents errors rather than handling them after |
| Gulf of Execution | Max 3 steps to any action | No action should require more than 3 steps to initiate |
| Gulf of Evaluation | Visible system status | Current state always visible without user interrogation |
| Visceral response | < 50ms | First aesthetic impression forms before conscious evaluation |
| Behavioral satisfaction | Task completion < expected time | Usability measured by task completion efficiency |
| Reflective alignment | Consistent personality | Design personality matches target user's self-image |

## Modern Context Application

**Responsive Design:**
- Affordances change by device: hover affordances don't exist on touch (need alternative signifiers)
- Mapping: mobile swipe gestures need clear directional signifiers
- Feedback: haptic on mobile, visual on desktop (multi-modal feedback)
- Constraints: touch targets larger to prevent slip errors on imprecise input

**Dark Mode:**
- Visceral level: dark mode creates different emotional impression (professional, focused, premium)
- Signifiers: must remain equally visible in dark mode (contrast maintenance)
- Affordances: button elevation/depth cues work differently on dark backgrounds
- Feedback: state changes need sufficient contrast delta in both modes

**Token Systems:**
- Affordance tokens: interactive elements have distinct token sets (elevation, color, cursor)
- Feedback tokens: transition durations, colors for state changes
- Constraint tokens: disabled state tokens remove affordance cues
- Mapping tokens: spacing/positioning tokens maintain spatial relationships
- Visceral tokens: first-impression properties (color harmony, spacing rhythm, type elegance)

**Component States:**
- Default: clear affordance signifiers (looks interactive)
- Hover: enhanced signifier (confirms interactivity before commitment)
- Active/Pressed: feedback (action is being received)
- Focus: accessibility signifier (keyboard interaction path)
- Disabled: removed affordance (constraint: cannot interact)
- Loading: Gulf of Evaluation bridge (system is processing)
- Error: slip/mistake feedback (what went wrong and how to fix)
- Success: positive feedback (action completed successfully)

## Anti-AI-Slop Indicators

Expert UI (Norman's principles):
- Every interactive element has clear affordance cues
- Feedback for every action (no silent failures)
- Constraints prevent errors before they occur
- System state always visible (no hidden modes)
- Natural mappings between actions and results
- Error messages explain cause AND recovery path
- Three emotional levels addressed (beautiful + usable + meaningful)
- Discoverability without instruction

AI Slop (violates Norman's principles):
- Interactive elements look identical to static content (no affordances)
- Actions with no feedback (click and nothing happens)
- No error prevention (users can easily break things)
- Hidden system state (is it loading? saved? failed?)
- Arbitrary mappings (unrelated position of controls to effects)
- Error messages without recovery guidance ("Something went wrong")
- Only visceral design (pretty but unusable) or only functional (ugly but works)
- Requires explicit instruction to discover basic functions

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Affordance visibility | `quality-gate/criteria.json` | Rule: all interactive elements have visual distinction | Discoverability requirement |
| Signifier timing | `quality-gate/criteria.json` | 2-second identification test for interactivity | Signifier clarity threshold |
| Feedback < 100ms | `tokens/motion.json` | `feedbackDuration: 100` for acknowledgment | Immediate response requirement |
| Natural mapping | `design-rules/structure.rules.json` | Spatial proximity rules (control near effect) | Mapping principle |
| Constraints | `design-rules/structure.rules.json` | Destructive action confirmation requirement | Error prevention |
| Gulf of Execution | `design-rules/structure.rules.json` | `maxStepsToAction: 3` | Execution accessibility |
| Gulf of Evaluation | `quality-gate/criteria.json` | Visible state rule (current state always shown) | Evaluation bridge |
| Error taxonomy | `design-rules/structure.rules.json` | Slip prevention (constraints) + mistake recovery (undo) | Error handling strategy |
| Visceral design | `quality-gate/criteria.json` | Aesthetic score (color harmony, spacing, typography) | Emotional processing level 1 |
| Behavioral design | `quality-gate/criteria.json` | Task completion efficiency metrics | Emotional processing level 2 |
| Reflective design | `design-rules/structure.rules.json` | Brand personality consistency rules | Emotional processing level 3 |
| Component states | `tokens/` + `design-rules/` | Complete state token set per interactive component | Full interaction lifecycle |

## Cross-References

- **Laws of UX (Yablonski):** Jakob's Law = Norman's mental models; Fitts's Law = affordance sizing; Doherty = feedback timing
- **100 Things Every Designer (Weinschenk):** Cognitive foundations that explain WHY Norman's principles work
- **Neuro Web Design (Weinschenk):** Old Brain/System 1 processing aligns with visceral design level
- **Designing Interfaces (Tidwell):** Pattern catalog organized around solving the problems Norman identifies
- **Practical UI / Refactoring UI:** Practical implementation of signifiers, affordances, feedback in component design
- **Designing for Emotion (book in collection):** Extends Norman's emotional design into digital product design
