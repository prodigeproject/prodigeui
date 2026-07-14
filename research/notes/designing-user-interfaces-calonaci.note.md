---
sourceId: designing-user-interfaces-calonaci
sourceType: book
sourceName: "Designing User Interfaces: Exploring User Interfaces, UI Elements, Design Prototypes and the Figma UI Design Tool"
sourceLocation: "Book/design-tools/Figma/Designing User Interfaces Exploring User Interfaces, UI Elements, Design Prototypes and the Figma UI Design Tool (English... (Dario Calonaci) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

1. **UI Element Taxonomy**: Systematic classification of UI elements: inputs (text, select, checkbox, radio, toggle), feedback (toast, alert, progress), navigation (tabs, sidebar, breadcrumb), containers (card, modal, drawer), actions (button, link, icon-button). Taxonomy drives component library structure.

2. **State Machine Thinking**: Every interactive element is a state machine: idle → hover → focus → active → disabled/error/success. Transitions between states must be defined (what triggers change, what visual changes occur). Complete state coverage = complete component specification.

3. **Visual Hierarchy Through Layering**: UI depth created through: elevation (shadows), opacity (overlays), blur (background), position (z-index). Each depth layer has a purpose: base content → interactive elements → overlays → modals → system notifications.

4. **Input Design Patterns**: Input anatomy: label (always visible) + field (clear boundary) + placeholder (hint, disappears) + helper text (persistent guidance) + error message (state-triggered). Each part has specific token assignments.

5. **Responsive Layout Strategies**: Four strategies: (1) Reflow (stack columns), (2) Resize (scale proportionally), (3) Reveal/Hide (show/hide elements), (4) Reorganize (change structure entirely). Each component specifies which strategy applies.

6. **Feedback System Design**: Three channels: visual (color, icon, animation), textual (message content), temporal (duration, persistence). Toast: temporary visual+text. Alert: persistent visual+text. Progress: ongoing visual. Each type has defined parameters.

7. **Navigation Pattern Selection**: Navigation type depends on: content depth, item count, frequency of switching, mobile context. Flat + few items = tabs. Deep + many items = sidebar. Sequential = stepper. Contextual = breadcrumbs.

8. **Spacing System (4px/8px Base)**: All spacing derives from base unit. Internal spacing (padding) is component's domain. External spacing (margin/gap) is parent's domain. Spacing scale provides predefined options preventing arbitrary values.

9. **Color Role Assignment**: Colors assigned by ROLE not appearance: primary (brand/action), secondary (less emphasis), success (positive), warning (caution), error (negative), info (neutral information), surface (backgrounds), on-surface (content on surfaces).

10. **Accessibility Integration (Not Afterthought)**: Accessibility considered during design, not tested after: contrast in color selection, target size in layout, focus indicators in state design, semantic structure in hierarchy. Built-in > bolted-on.

## Concrete Rules & Parameters

| Principle | Measurable Rule | Application |
|-----------|----------------|-------------|
| Element Taxonomy | 5 categories: inputs, feedback, navigation, containers, actions | Component manifest organization |
| State Machine | Min 5 states per interactive element (idle, hover, focus, active, disabled) | Component state spec requirement |
| Depth Layers | 5 z-index layers: base(0), interactive(10), overlay(100), modal(200), system(300) | Z-index token scale |
| Input Anatomy | Label + field + helper/error — all present (placeholder optional, not a label substitute) | Input component spec |
| Responsive Strategy | Each component declares: reflow, resize, reveal/hide, or reorganize | Component responsive field |
| Feedback Duration | Toast: 3-5s auto-dismiss; Alert: persistent until action; Progress: until completion | Feedback timing rules |
| Navigation Selection | ≤5 items=tabs; ≤10=sidebar; sequential=stepper; deep hierarchy=tree | Navigation structure rules |
| Spacing Base | 4px base; scale: 4,8,12,16,20,24,32,40,48,64 | Spacing token values |
| Color Roles | 8 semantic roles: primary, secondary, success, warning, error, info, surface, on-surface | Semantic token structure |
| Accessibility Min | 4.5:1 contrast (text); 3:1 (UI); 44px touch targets; visible focus indicators | Quality gate non-negotiables |

## Modern Context Application

- **Element Taxonomy + Component Manifest**: ProdigeUI component manifest organized by Calonaci's taxonomy: atoms/inputs, atoms/actions, atoms/feedback, molecules/navigation, organisms/containers. Clear purpose per category.
- **State Machines + CSS States**: Each component state maps to CSS: `:hover`, `:focus-visible`, `:active`, `[disabled]`, `[aria-invalid]`. Token semantic system provides colors per state: `interactive-hover`, `interactive-active`, etc.
- **Depth Layers + Token z-index**: Five distinct z-index tiers prevent stacking conflicts. Each tier has defined purpose and maximum one overlay per tier visible simultaneously.
- **Input Patterns + Component Tokens**: Input components have dedicated tokens: `input-border`, `input-background`, `input-placeholder`, `input-error`, `input-focus-ring`. Complete token coverage per anatomy part.
- **Responsive Strategies + Container Queries**: Modern CSS enables per-component responsive strategy. Component-level `@container` queries enable reflow/resize without viewport dependence.
- **Color Roles + Token Architecture**: Calonaci's 8 color roles map directly to ProdigeUI semantic tokens. This fixed set of roles prevents color proliferation while covering all UI needs.

## Anti-AI-Slop Indicators

| Expert UI Element Design | AI-Slop UI Elements |
|-------------------------|---------------------|
| Complete state coverage (all 5+ states per element) | Only default state designed |
| Proper input anatomy (label + field + helper, never placeholder-as-label) | Placeholder used as label (disappears on input) |
| Defined depth hierarchy (consistent elevation model) | Random z-index values; stacking issues |
| Appropriate navigation for content (tabs for few, sidebar for many) | Inappropriate navigation pattern for content volume |
| Consistent spacing from 4px base (all values on-grid) | Arbitrary spacing values (17px, 13px, 23px) |
| Color by role (primary for action, error for negative) | Color used inconsistently (error color for non-error emphasis) |
| Feedback type matches message importance (toast=info, alert=action-needed) | Wrong feedback type for message severity |
| Responsive strategy declared per component | One-size rendering that breaks on different viewports |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| UI element taxonomy | `components/` folder structure | Categories: inputs, actions, feedback, navigation, containers | Clear organizational logic |
| State machine specification | `components/` manifest | `states` field: complete state enum per component | Forces complete specification |
| Z-index layer system | `tokens/primitive.tokens.json` | `zIndex` 5-tier scale: base, interactive, overlay, modal, system | Prevents stacking chaos |
| Input anatomy | `components/atoms/` | Input component: label, field, helper, error as defined sub-elements | Standard input architecture |
| Responsive strategy | `components/` manifest | `responsiveStrategy: "reflow" | "resize" | "reveal" | "reorganize"` | Component-level responsive specification |
| Feedback parameters | `components/atoms/` | Toast/Alert/Progress: duration, persistence, dismissal rules | Feedback behavior specification |
| Navigation selection rules | `design-rules/structure.rules.json` | `navigationSelection` mapping content-type to nav-pattern | Prevents inappropriate navigation |
| Spacing from 4px base | `tokens/primitive.tokens.json` | `spacing` scale: 4,8,12,16,20,24,32,40,48,64 | Mathematical spacing discipline |
| 8 color roles | `tokens/semantic.tokens.json` | Color categories: primary, secondary, success, warning, error, info, surface, on-surface | Complete role coverage |
| Accessibility integration | `quality-gate/criteria.json` | Built-in a11y checks: contrast, targets, focus, semantics | Accessibility as requirement |

## Cross-References

- **Designing and Prototyping (Staiano)**: Process-focused complement to Calonaci's element-focused approach
- **Designing in Figma (Fedorenko)**: Tool mastery context for implementing these element designs
- **Universal Principles of UX**: Theoretical backing for state machines and feedback timing
- **Practical UI (Dannaway)**: Modern web-specific application of these element patterns
- **shadcn/ui**: Code implementation of many elements Calonaci describes
- **Laws of UX (Yablonski)**: Cognitive science behind navigation selection and feedback timing rules
