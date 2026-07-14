---
sourceId: designing-prototyping-interfaces-figma
sourceType: book
sourceName: "Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes"
sourceLocation: "Book/design-tools/Figma/Designing and Prototyping Interfaces with Figma Learn essential UXUI design principles by creating interactive prototypes for… (Fabio Staiano) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Component Architecture as Design System Foundation**: Figma components mirror code components — main component defines structure, instances adapt via properties. This 1:1 mapping between design tool and code is the foundation of consistent handoff.

2. **Variant Organization Strategy**: Variants grouped by: type (primary/secondary/ghost), size (sm/md/lg), state (default/hover/focus/active/disabled). This 3-axis organization provides exhaustive coverage without combinatorial explosion.

3. **Auto Layout as Flexbox Mental Model**: Figma Auto Layout = CSS Flexbox. Properties map directly: spacing = gap, padding = padding, alignment = align-items/justify-content. Designing with Auto Layout = designing with code layout logic.

4. **Constraint-Based Responsive Design**: Elements constrained to edges (pin left, pin right, scale) mirror CSS positioning (fixed, absolute, relative, percentage-based). Constraints define how components adapt to container size changes.

5. **Design Token Integration**: Styles (colors, typography, effects) centralized and referenced. Changes propagate universally. This IS the token system concept — centralized values, referenced everywhere, change-once-update-all.

6. **Prototype Interaction Patterns**: Standard interactions: click (primary action), hover (preview/hint), press (feedback), drag (direct manipulation). Each interaction type maps to specific CSS pseudo-classes and JavaScript event handlers.

7. **Component Property Types**: Boolean (show/hide elements), text (content swap), instance (icon swap), enum (variant selection). These map directly to component props in code: boolean, string, ReactNode, union type.

8. **Frame Nesting as Component Composition**: Frames within frames mirror component composition. Parent frame = wrapper component; child frames = slot components. Nesting depth = composition complexity.

9. **Spacing and Padding Consistency**: Uniform spacing within component (internal padding) and between components (external spacing/gap). Internal ≠ external. Internal padding is component's responsibility; external gap is parent's responsibility.

10. **State Documentation Completeness**: Every interactive component needs all states designed: default, hover, focus, active, disabled, error, loading, empty, success. Incomplete state design = incomplete component specification.

## Concrete Rules & Parameters

| Principle | Measurable Rule | Application |
|-----------|----------------|-------------|
| Variant Axes | Max 3 axes: type × size × state; additional complexity through composition | Component manifest variant structure |
| Auto Layout Mapping | All layout uses flexbox/grid (no absolute positioning for flowing content) | Layout rule: position:absolute only for overlays |
| Token Reference | 0 raw values in component designs; all reference centralized styles | Quality gate token-adherence |
| Interaction Mapping | Click→onClick; Hover→:hover/onMouseEnter; Focus→:focus-visible; Press→:active | Component interaction spec |
| Property Types | Boolean, string, ReactNode/Slot, union — max 7 props total per component | Component API complexity limit |
| Nesting Depth | Max 4 frame nesting levels (component composition depth) | Component architecture limit |
| Internal/External Spacing | Component defines internal padding; parent defines gap between children | Spacing responsibility rule |
| State Completeness | All interactive components: 8 states minimum defined | Component manifest requirement |
| Responsive Constraints | Components define behavior at: mobile (320-640), tablet (641-1024), desktop (1025+) | Responsive spec requirement |
| Naming Convention | Components: PascalCase; variants: lowercase-type/lowercase-value | Naming rules |

## Modern Context Application

- **Component Architecture + Code Components**: Figma components with variants = React components with props. The same organizational logic (type/size/state axes) applies in both contexts. ProdigeUI component manifests mirror this structure.
- **Auto Layout + CSS Flexbox/Grid**: When Figma designers use Auto Layout, the resulting design translates directly to CSS Flexbox. Token-based gap values ensure design-to-code consistency: `gap: var(--space-4)` in both Figma and CSS.
- **Design Tokens + CSS Custom Properties**: Figma styles → CSS custom properties. Same abstraction, different implementation. `color/primary` in Figma = `--color-primary` in CSS. ProdigeUI tokens serve as the shared truth.
- **Prototype Interactions + Component States**: Figma prototype states (hover, press) map to CSS pseudo-classes (`:hover`, `:active`, `:focus-visible`). Component manifest must specify visual treatment for each state.
- **Constraint-Based Design + Container Queries**: Figma constraints (how elements resize) map to modern CSS container queries. Components that scale based on container size rather than viewport.
- **Frame Nesting + React Component Tree**: Figma frame hierarchy = React component tree. Design system components compose just as Figma frames nest. ProdigeUI component manifest documents composition patterns.

## Anti-AI-Slop Indicators

| Expert Figma/Component Design | AI-Slop Component Design |
|------------------------------|--------------------------|
| All components use Auto Layout (responsive by structure) | Fixed-size frames that break at different sizes |
| Consistent variant organization (type × size × state) | Inconsistent variant naming and grouping |
| Token/style references for all values (no raw hex/px) | Hardcoded values that can't be themed |
| All states designed (default through error/empty/loading) | Only default state designed; other states missing |
| Clear composition hierarchy (parent → child relationships) | Flat structures with unclear component boundaries |
| Internal padding defined by component; external by parent | Mixed spacing responsibility (sometimes in, sometimes out) |
| Responsive behavior specified for breakpoints | Single viewport design without responsive specification |
| Component props limited (≤7) and well-typed | Many props with unclear types or overlapping purposes |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Variant axes (type/size/state) | `components/` manifest | `variants: { type: [...], size: [...], state: [...] }` | Standard organization prevents chaos |
| Auto Layout ↔ Flexbox | `design-rules/layout.rules.json` | `layoutEngine: "flexbox/grid"`, no absolute for flowing content | Ensures translatable layouts |
| Token-only values | `quality-gate/criteria.json` | `token-adherence: 100%` — no raw values in component specs | Enforces themeable, consistent design |
| State completeness | `components/` manifest | `requiredStates: ["default","hover","focus","active","disabled","error","loading","empty"]` | Complete component specification |
| Property types mapping | `components/` manifest | Prop types: boolean, string, slot, enum (matching Figma property types) | Design-to-code alignment |
| Spacing responsibility | `design-rules/layout.rules.json` | Component owns padding; parent owns gap | Clear spacing ownership |
| Composition depth limit | `design-rules/structure.rules.json` | `maxNestingDepth: 4` | Prevents over-complex component trees |
| Responsive specs | `components/` manifest | Breakpoint-specific behavior documented per component | Responsive-first design |
| Naming conventions | `design-rules/structure.rules.json` | Component: PascalCase; token: kebab-case; variant: lowercase | Consistent naming across system |
| Interaction-to-CSS mapping | `components/` manifest | `interactions` field mapping actions to CSS pseudo-classes | Clear implementation guidance |

## Cross-References

- **Designing and Prototyping 2nd Ed**: Updated version with newer Figma features (variables, modes)
- **The Designer's Guide to Figma**: More workflow/collaboration focused complement
- **UX Design with Figma**: Research/prototyping process perspective
- **shadcn/ui**: Code implementation of the same component architecture patterns
- **Atomic Design**: Theoretical framework for the composition hierarchy Figma implements
- **Design Elements (Samara)**: Visual design principles that inform component aesthetic decisions
