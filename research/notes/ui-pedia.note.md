---
sourceId: ui-pedia
sourceType: book
sourceName: "UI Pedia - A Complete UI Design Guide"
sourceLocation: "Book/UI/UI Pedia/UI Pedia - A Complete UI Design Guide (Pixsel Academy) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

UI Pedia serves as an encyclopedic reference covering all UI design topics systematically. Key organizational principles:

- **Comprehensive UI vocabulary:** Defines and catalogs every UI component type, pattern, and principle with visual examples.
- **Component taxonomy:** Classification system for UI elements: inputs, displays, navigation, feedback, containers, overlays.
- **Platform conventions catalog:** Documents platform-specific patterns (iOS, Android, Web) and when to follow vs deviate.
- **Interaction pattern library:** Standard interactions mapped to appropriate component types (select from list, enter data, confirm action, etc.).
- **Visual design foundations:** Grid, typography, color, spacing, iconography as interconnected systems, not isolated topics.
- **Responsive design as integral:** Not a separate topic but woven into every component/pattern discussion.
- **Accessibility as baseline:** WCAG guidelines integrated into component specifications, not separate accessibility chapter.
- **Design handoff requirements:** What information developers need: states, spacing, color values, responsive behavior, interactions.
- **Component anatomy standardization:** Each component broken into: container, content, action, indicator sub-elements.
- **Design decision documentation:** Rationale for why specific patterns solve specific problems (not just what they look like).

## Concrete Rules & Parameters

| Topic | Parameter | Rule |
|-------|-----------|------|
| Component categories | Count | 6 major categories: inputs, displays, navigation, feedback, containers, overlays |
| Standard component states | Per component | Rest, hover, focus, active, disabled, loading, error (7 states) |
| Component anatomy | Structure | Container + Content + Action + Indicator (up to 4 layers) |
| Platform awareness | Rule | Document platform deviation points per component |
| Handoff requirements | Minimum | States, spacing, colors, responsive, interactions, accessibility |
| Touch target | iOS | 44×44pt minimum |
| Touch target | Android/Material | 48×48dp minimum |
| Touch target | Web | 44×44px (pointer: 32×32px acceptable) |
| Navigation depth | Maximum | 4 levels before user loses context |
| Form field labels | Position | Above input (default), inline/floating (compact), left-aligned (wide forms) |
| Icon sizes | Standard | 16, 20, 24, 32, 48px grid |
| Notification types | Categories | Success, warning, error, info (4 semantic types) |
| Modal sizes | Variants | Small (400px), Medium (600px), Large (800px), Full-screen |

## Modern Context Application

**Responsive Design:**
- Component behavior documented per breakpoint (not just layout changes)
- Mobile-specific patterns: bottom sheets, pull-to-refresh, swipe actions
- Desktop-specific patterns: hover tooltips, right-click menus, drag-and-drop
- Tablet as hybrid: some mobile patterns, some desktop patterns

**Dark Mode:**
- Every component visual documented in both modes
- Container differentiation: light mode uses shadows; dark mode uses surface elevation
- Notification colors adjusted for dark backgrounds (less saturated)
- Icon contrast re-verified per mode

**Token Systems:**
- Component anatomy → token structure per component (container tokens, content tokens, action tokens)
- Platform tokens: platform-specific overrides when conventions differ
- State tokens: complete set for all 7 standard states
- Category tokens: semantic grouping matching component taxonomy

**Component States:**
- 7 standard states as minimum per interactive component
- Transition paths: which states can transition to which (state machine)
- State inheritance: container state affects child component state (disabled parent = disabled children)
- Compound state: loading + progress, error + inline message

## Anti-AI-Slop Indicators

Expert UI (encyclopedic awareness):
- Correct component choice for each interaction need
- All states designed (not just default + hover)
- Platform-appropriate patterns (follows conventions)
- Complete component anatomy (container, content, action, indicator all present)
- Proper notification type matching (error for errors, not warning)
- Touch targets meeting platform standards

AI Slop (encyclopedic gaps):
- Wrong component for interaction (dropdown for 2 options, when toggle suffices)
- Missing states (only default state designed)
- Platform-inappropriate patterns (iOS patterns on Android)
- Incomplete component anatomy (button without loading state)
- Generic notifications (same style for all message types)
- Undersized touch targets

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Component taxonomy | `design-rules/structure.rules.json` | Component categories definition | Organizational structure |
| 7 standard states | `quality-gate/criteria.json` | Required states per interactive component | State completeness |
| Component anatomy | Component specs | Container + Content + Action + Indicator model | Structural standard |
| Platform touch targets | `design-rules/structure.rules.json` | Platform-specific target sizes | Platform compliance |
| Navigation depth | `design-rules/structure.rules.json` | maxNavDepth: 4 | Context preservation |
| Form label position | `design-rules/structure.rules.json` | Default: above, compact: floating | Input design standard |
| Icon size grid | `tokens/sizing.json` | iconSizes: [16, 20, 24, 32, 48] | Visual consistency |
| Notification types | `tokens/color.json` | semantic: [success, warning, error, info] | Feedback categorization |
| Modal sizes | `tokens/sizing.json` | modal: {sm: 400, md: 600, lg: 800} | Overlay standards |
| Handoff requirements | `quality-gate/criteria.json` | Documentation completeness checklist | Developer handoff |
| State transitions | Component specs | State machine per component type | Interaction logic |
| Category organization | Architecture | 6 categories organizing component library | Discoverability |

## Cross-References

- **Designing Interfaces (Tidwell):** Pattern-level detail; UI Pedia provides component-level encyclopedic reference
- **Practical UI Patterns (MacDonald):** Systematic pattern approach compatible with this taxonomy
- **UI Design Systems Mastery (Budarina):** System architecture for organizing these component definitions
- **Practical UI (Dannaway):** Visual rules applied to these component standards
- **Design of Everyday Things (Norman):** Theoretical basis for why components need affordances and feedback
