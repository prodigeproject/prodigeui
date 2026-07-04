---
sourceId: practical-ui-patterns
sourceType: book
sourceName: "Practical UI Patterns for Design Systems: Fast-Track Interaction Design for a Seamless User Experience"
sourceLocation: "Book/UI/Practical UI Patterns for Design Systems. Fast-Track Interaction Design for a Seamless User Experience (Diana MacDonald) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

Diana MacDonald focuses on pattern implementation within design systems—how patterns become standardized, documented, reusable components:

- **Patterns as system-level decisions:** Once a pattern is chosen for a problem, it's standardized system-wide. No ad-hoc pattern selection per page.
- **Pattern documentation requirements:** Each pattern needs: problem it solves, when to use, when NOT to use, anatomy, behavior, accessibility, variants.
- **Interaction pattern anatomy:** Every pattern has: trigger → action → feedback → completion. All four stages must be designed.
- **Pattern composition:** Complex interactions are compositions of simpler patterns. Wizard = stepper + form + navigation + progress.
- **State management across patterns:** Patterns share state (selection in a list affects detail panel). Cross-pattern state design is critical.
- **Accessibility built into patterns:** Keyboard navigation, screen reader announcements, and focus management are part of pattern definition, not afterthought.
- **Pattern governance:** Who decides when to add/modify/deprecate patterns? Design systems need governance model.
- **Progressive enhancement:** Patterns should work at base level without JavaScript, enhance with interactivity.
- **Context-sensitive defaults:** Same pattern may have different defaults in different contexts (inline edit in a table vs form edit on a page).
- **Pattern relationships:** Patterns exist in hierarchies (card is a pattern; card grid is a composed pattern; filterable card grid is another composition level).

## Concrete Rules & Parameters

| Pattern Concept | Parameter | Rule |
|----------------|-----------|------|
| Pattern documentation | Required sections | Problem, When to use, When NOT to use, Anatomy, States, Behavior, A11y, Variants |
| Interaction lifecycle | Stages | Trigger → Action → Feedback → Completion (all 4 required) |
| Pattern adoption threshold | When to systematize | Used in 3+ places = candidate for system pattern |
| Pattern variants | Maximum | 3-5 variants per pattern (beyond = new pattern) |
| Accessibility per pattern | Requirements | Keyboard nav + ARIA roles + focus management + announcements |
| Focus management | On state change | Focus moves to new content (modal → first focusable, close → trigger) |
| Keyboard patterns | Standard | Tab for navigation, Enter/Space for activation, Escape for dismiss |
| Pattern composition depth | Maximum | 3 levels of nesting (atomic → molecule → organism in Atomic Design terms) |
| State synchronization | Requirement | Cross-component state updates within 1 frame (< 16ms) |
| Progressive enhancement | Requirement | Core content accessible without JavaScript |
| Pattern deprecation | Process | Announce → migration period → remove (never sudden removal) |
| Context variants | Documentation | Same pattern + different context = documented configuration |

## Modern Context Application

**Responsive Design:**
- Patterns define responsive behavior as part of specification (not as afterthought)
- Pattern anatomy includes breakpoint-specific layout changes
- Mobile may compose patterns differently (separate pages vs panels)
- Touch-specific interaction variants documented per pattern

**Dark Mode:**
- Patterns are color-agnostic at behavioral level (dark mode doesn't change interaction)
- Visual anatomy may adapt (borders vs shadows per mode)
- Pattern states maintain visibility in both modes
- Documentation includes both mode screenshots

**Token Systems:**
- Pattern tokens: spacing, sizing, timing specific to pattern context
- Token + pattern relationship: tokens parameterize visual aspects, patterns define behavior
- Pattern-specific tokens (e.g., `modal-overlay-opacity`, `toast-duration`, `accordion-animation-duration`)
- Token governance aligned with pattern governance

**Component States:**
- Complete state coverage per pattern: rest, hover, focus, active, loading, error, disabled, success
- Focus management rules per pattern type (modal focus trap, dropdown focus return)
- Transition between states: defined duration and easing per state change
- Cross-component state: selection state propagates to dependent patterns

## Anti-AI-Slop Indicators

Expert UI (pattern-system thinking):
- Consistent pattern usage (same problem → same pattern everywhere)
- Complete interaction lifecycle (trigger → action → feedback → completion)
- Keyboard navigable with logical focus flow
- Pattern compositions clearly structured (levels of nesting visible)
- State changes are smooth and announced to assistive technology
- Patterns documented with when-to-use AND when-NOT-to-use

AI Slop (pattern-system ignorant):
- Ad-hoc interaction per page (custom solutions for standard problems)
- Incomplete interactions (trigger exists, feedback missing)
- No keyboard navigation support
- Flat component structure (no composition hierarchy)
- Jarring state changes (no transitions, no announcements)
- Same pattern used for wrong problem (modal for non-blocking info)

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Pattern documentation standard | `design-rules/structure.rules.json` | Pattern doc template requirements | Standardized documentation |
| Interaction lifecycle | `quality-gate/criteria.json` | Rule: all interactions have trigger+action+feedback+completion | Complete interaction design |
| 3+ usage = systematize | `design-rules/structure.rules.json` | patternAdoptionThreshold: 3 | Governance rule |
| Max pattern variants | `design-rules/structure.rules.json` | maxPatternVariants: 5 | Variant discipline |
| Focus management rules | `quality-gate/criteria.json` | Focus returns to trigger on close, moves to content on open | Accessibility standard |
| Keyboard patterns | `quality-gate/criteria.json` | Standard keyboard interaction per pattern type | Accessibility baseline |
| Composition depth | `design-rules/structure.rules.json` | maxCompositionDepth: 3 | Complexity containment |
| State sync timing | `quality-gate/criteria.json` | Cross-component sync < 16ms | Consistency perception |
| Progressive enhancement | `quality-gate/criteria.json` | Core content accessible without JS | Resilience |
| Pattern-specific tokens | `tokens/` | Per-pattern token sets (modal, toast, accordion, etc.) | Contextual parameterization |
| Pattern governance | Process documentation | Adoption/deprecation workflow | System maintenance |
| Context variants | `design-rules/structure.rules.json` | Document per-context defaults | Flexibility within consistency |

## Cross-References

- **Designing Interfaces (Tidwell):** Provides the pattern catalog; MacDonald explains how to systematize them
- **Laws of UX (Yablonski):** Jakob's Law validates pattern reuse; Hick's Law governs variant limits
- **Design of Everyday Things (Norman):** Feedback principle is part of interaction lifecycle
- **Refactoring UI (Wathan/Schoger):** Visual implementation of pattern variants (primary/secondary/tertiary)
- **UI Design Systems Mastery (Budarina):** System-level governance and architecture for pattern libraries
- **Effective UI (Anderson):** Process context for when and how patterns get tested and adopted
