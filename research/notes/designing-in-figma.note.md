---
sourceId: designing-in-figma
sourceType: book
sourceName: "Designing in Figma"
sourceLocation: "Book/design-tools/Figma/Designing in Figma (Eugene Fedorenko) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Constraint-Driven Design**: Figma's constraints system (left, right, top, bottom, center, scale) forces designers to think about how elements behave when containers change size. This constraint thinking translates directly to CSS positioning strategies.

2. **Style Abstraction as Design Discipline**: Creating and using styles (color, text, effect, grid) is a discipline that pays off at scale. Every raw value is technical debt. Styles = tokens. More styles used consistently = more maintainable, themeable design.

3. **Component Instances and Overrides**: Instances inherit from main components but can override specific properties. This is EXACTLY the CSS cascade: global tokens → semantic tokens → component tokens → local overrides. Specificity increases with locality.

4. **Vector Network Editing for Icons**: Figma's vector networks enable consistent icon creation with shared visual properties (stroke width, corner radius, proportional sizing). Icon systems need: consistent stroke weight, consistent optical sizing, consistent padding.

5. **Layout Grids as Visible Structure**: Figma layout grids overlay the canvas showing column/row structure. Making grid visible during design enforces adherence. In code: CSS Grid inspector tools serve the same purpose.

6. **Boolean Operations for Shape Construction**: Union, subtract, intersect, exclude — creating complex shapes from simple primitives. Principle: complex forms built from simple, systematic parts. Parallels component composition.

7. **Smart Animate and Transition Logic**: Smart Animate morphs between frames based on matching layer names. Principle: meaningful animation connects states (not decorates). Named layers = named component states.

8. **Plugin Ecosystem for Validation**: Plugins extend Figma with validation (contrast checkers, spacing validators, style usage auditors). Principle: design systems need automated validation — not just guidelines that humans may forget.

9. **Team Libraries and Sharing**: Components shared via team libraries enable consistency across projects. Same component, same source, same updates. This is the design system distribution model that ProdigeUI must mirror.

10. **Frame vs Group Distinction**: Frames have layout properties (auto-layout, constraints, clipping); Groups don't. Choosing Frame = choosing structured, responsive layout. Choosing Group = choosing loose, static arrangement. Always Frame for design system components.

## Concrete Rules & Parameters

| Principle | Measurable Rule | Application |
|-----------|----------------|-------------|
| Constraint Coverage | All responsive components have constraints for all 4 edges + resize behavior defined | Component responsive spec |
| Style Usage | 100% style usage (0 raw values) in design system components | Token adherence |
| Override Limitation | Instance overrides limited to content (text, images) not structure or style | Override rules in component specs |
| Icon Consistency | Stroke width: consistent (1.5 or 2px); optical size: consistent grid (24×24); padding: consistent (2px inner) | Icon token specifications |
| Grid Visibility | Layout grids defined and visible during design review | Development aid |
| Composition over Complexity | Complex shapes: max 4 boolean operations; prefer simple forms | Simplicity constraint |
| Animation Naming | Animated states share layer names for morphing (named state transitions) | Motion specification pattern |
| Automated Validation | Design system has automated checks (contrast, spacing, token usage) | Quality gate requirements |
| Library Distribution | Single source of truth distributed to all consuming projects | Manifest/versioning pattern |
| Structured Frames | All design system components use frames with auto-layout (never groups) | Component structure rule |

## Modern Context Application

- **Constraints + CSS Layout**: Figma constraints map to CSS: "left+right" = `position: absolute; left: 0; right: 0` or `width: 100%`. "Scale" = percentage-based sizing. "Center" = `margin: auto` or flexbox centering. Designers thinking in constraints produce directly implementable designs.
- **Style Abstraction + Token Compilation**: Every Figma style should correspond to a ProdigeUI token. `Color/Primary/500` in Figma = `--color-primary-500` in CSS = `color.primary.500` in tokens JSON. One-to-one mapping eliminates translation.
- **Instances/Overrides + Component Props**: Figma instance overrides = React component props. Main component = default props. Instance with overrides = component with custom props passed. The mental model is identical.
- **Icon System + SVG Optimization**: Consistent icon properties in Figma translate to consistent SVG output: `stroke-width: 1.5`, `viewBox: "0 0 24 24"`, `fill: currentColor` or `stroke: currentColor`. Token-driven icon styling.
- **Plugin Validation + Quality Gate**: Figma plugins that check design quality = ProdigeUI quality gate criteria that check generated output quality. Same validation concept, different execution context.
- **Library Distribution + Package Publishing**: Figma team library publishing = npm package publishing. Version, document changes, distribute, consume. ProdigeUI manifest enables this distribution model.

## Anti-AI-Slop Indicators

| Expert Figma Usage | AI-Slop Figma Patterns |
|-------------------|------------------------|
| All components use frames with auto-layout (structured) | Groups with absolute positioning (fragile) |
| 100% style references (all values from centralized styles) | Mix of styles and hardcoded values |
| Constraints defined for responsive behavior | No constraints (components break on resize) |
| Consistent icon system (uniform stroke, size, padding) | Icons from different sources with inconsistent visual weight |
| Named layers following convention (for animation/dev handoff) | Default layer names (Frame 1, Rectangle 4) |
| Override-limited instances (content only, not structure) | Heavily overridden instances that deviate from main component |
| Layout grids actively used during composition | No grid awareness in element placement |
| Plugin-validated quality (automated checks) | Manual-only review without automated validation |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Constraint-driven responsive | `components/` manifest | `responsive` field with behavior per breakpoint | Forces responsive thinking |
| Style → Token mapping | `tokens/` naming convention | Token names Figma-style-compatible | Enables direct mapping |
| Instance/Override model | `components/` manifest | Props = controlled overrides; structure immutable | Clear override boundaries |
| Icon system consistency | `assets/icons/` specifications | Stroke: 1.5px, grid: 24×24, padding: 2px | Unified icon visual language |
| Automated validation | `quality-gate/` criteria | Automated checks: contrast, spacing, token usage | Catches issues before manual review |
| Library distribution | `manifest.json` | Version, components list, installation instructions | Enables package-like distribution |
| Frame-only components | `design-rules/structure.rules.json` | Components must be structured (not loosely grouped) | Ensures responsive, maintainable output |
| Named layers | `design-rules/structure.rules.json` | `namingConvention` rules for all elements | Enables animation and dev handoff |
| Boolean composition | `design-rules/structure.rules.json` | Prefer composition of simple shapes over complex single shapes | Maintainability principle |
| Override rules | `components/` manifest | `overridable: ["content", "variant"]` — not structure | Protects component integrity |

## Cross-References

- **Designing and Prototyping (1st Ed)**: Complementary — Fedorenko focuses on tool mastery; Staiano on process
- **Designing and Prototyping 2nd Ed**: Adds variables system that extends Fedorenko's style abstraction
- **The Designer's Guide to Figma**: Collaboration workflow around the components Fedorenko designs
- **UX Design with Figma**: Research process that precedes the design implementation Fedorenko covers
- **shadcn/ui**: Code-side implementation of the same component architecture patterns
- **Atomic Design**: Theoretical framework for the component hierarchy implemented in Figma
