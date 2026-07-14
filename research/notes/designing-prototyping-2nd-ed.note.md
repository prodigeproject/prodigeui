---
sourceId: designing-prototyping-2nd-ed
sourceType: book
sourceName: "Designing and Prototyping Interfaces with Figma, 2nd Edition"
sourceLocation: "Book/design-tools/Figma/Designing and Prototyping Interfaces with Figma, 2nd Edition.epub"
appliedTo: []
---

## Key Principles Extracted

1. **Variables as Design Tokens (Native)**: Figma variables (introduced post-1st edition) ARE design tokens natively. Collections = token categories. Modes = themes (light/dark). Scoping = where tokens apply. This eliminates the design-to-token translation gap.

2. **Mode Switching for Theming**: Variables with modes enable designing for light AND dark simultaneously. Components reference variables (not raw values); switching mode changes all values at once. Direct parallel to CSS custom property theming with class/attribute switching.

3. **Component Properties Evolution**: Beyond variants — boolean properties (toggle visibility), text properties (swap content), instance-swap (change nested icons/avatars). Reduces variant count while increasing flexibility. Maps to React prop patterns exactly.

4. **Dev Mode and Handoff**: Figma Dev Mode provides CSS/code output directly from designs. Variables show as custom property references. Spacing shows as token values. This validates: if design uses tokens correctly, handoff is near-automatic.

5. **Section Components**: Larger compositional units (sections/pages) as components with slot-based composition. Header section + Content section + Footer section. Maps to layout templates in code frameworks.

6. **Responsive Resizing (Advanced)**: Min/max width constraints + auto-layout fill/hug behaviors create truly responsive components that adapt without separate mobile/desktop variants. Maps to CSS `min-width`, `max-width`, `flex-grow`, `flex-shrink`.

7. **Prototype Variables (State)**: Variables used in prototyping for state management — counters, conditions, data-driven interactions. Bridges the gap between static prototype and functional specification. Maps to component state in code.

8. **Design System Organization (Figma-native)**: Pages for structure (Foundations, Components, Patterns); frames for categories within pages; sections for grouping related components. This organizational pattern maps to file structure in code-based design systems.

9. **Accessibility Checking (Native)**: Contrast checking built into variable workflows — variables can encode contrast requirements. Color variables scoped to text vs background ensure pairs maintain compliance.

10. **Multi-Brand Support**: Same components with different variable collections = different brands. Swap the collection, keep the structure. ProdigeUI parallel: same component manifests + different theme files = different brand expression.

## Concrete Rules & Parameters

| Principle | Measurable Rule | Application |
|-----------|----------------|-------------|
| Variables as Tokens | 100% of visual values stored as variables (0 raw values) | Token adherence enforcement |
| Mode Support | Every theme variable has light + dark mode values | Theme completeness check |
| Property Reduction | Boolean/text/instance-swap before adding new variants | Variant explosion prevention |
| Responsive Sizing | Components use min/max + fill/hug (no fixed sizes for flowing content) | Responsive component rule |
| Section Composition | Page layouts composed from section-level components with slots | Template architecture |
| Handoff Accuracy | Token names match between design and code (identical naming) | Naming synchronization |
| Organization | Hierarchy: Category → Subcategory → Component → Variant | File/folder structure pattern |
| Contrast Validation | Color variable pairs validated per WCAG at point of creation | Token pair validation |
| Multi-Brand | Component structure unchanged across brands; only token values change | Architecture separation principle |
| State Variables | Max 3 state variables per prototype flow (complexity limit) | Interaction complexity cap |

## Modern Context Application

- **Figma Variables = CSS Custom Properties**: `--color-primary: #3b82f6` in code = color variable "primary" in Figma. ProdigeUI token JSON compiles to CSS custom properties AND could inform Figma variable collections. Single source of truth.
- **Modes = Theme Classes**: Figma mode switching = `[data-theme="dark"]` or `.dark` class in HTML. Token values change; component structure unchanged. ProdigeUI themes are modes in implementation.
- **Dev Mode + Token Naming**: If Figma token names match CSS custom property names, dev mode output is directly usable. ProdigeUI naming convention must be Figma-compatible (no characters Figma can't handle).
- **Responsive Without Breakpoints**: Modern CSS (container queries, `clamp()`, flexbox wrapping) enables responsive behavior without explicit breakpoints — mirroring Figma's min/max + fill/hug approach.
- **Multi-Brand + Theme Files**: Same `components/` manifest works for all brands. Brand differentiation through theme files only (different token values). This is the same architecture Figma variables enable.
- **Accessibility at Token Level**: Creating accessible color pairs AT THE TOKEN LEVEL (not checking after the fact) is the approach both Figma variables and ProdigeUI enforce.

## Anti-AI-Slop Indicators

| Expert Variable/Token Usage | AI-Slop Token Misuse |
|----------------------------|---------------------|
| All values reference variables (zero raw colors/sizes) | Mix of raw values and variable references |
| Mode-aware components (work in both light and dark) | Components designed for one mode only |
| Minimal variants (properties reduce variant count) | Variant explosion (50+ variants per component) |
| Responsive sizing (min/max/fill/hug) | Fixed pixel dimensions that break on resize |
| Organized variable collections (clear category structure) | Flat, unorganized variable lists |
| Matching design-to-code token names | Different naming between design tool and code |
| Contrast validated per variable pair | Colors chosen without contrast verification |
| Section components for page composition | Flat page designs without compositional structure |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Variables as native tokens | `tokens/` JSON files | Token names compatible with Figma variable naming | Design-to-code naming sync |
| Mode = theme | `themes/` JSON files | Light + dark mode per theme (maps to Figma modes) | Same mental model across tools |
| Component property reduction | `components/` manifest | Prefer boolean/slot/text props over variant explosion | Manageable component APIs |
| Responsive min/max | `components/` manifest | `sizing: "responsive"` with min/max constraints documented | Fluid, not fixed components |
| Section-level composition | `prompt-templates/` | Templates composed from section components + slots | Compositional page architecture |
| Naming synchronization | `manifest.json` | Naming convention documentation (kebab-case, Figma-compatible) | Eliminates translation errors |
| Multi-brand architecture | `themes/` + `components/` separation | Components brand-agnostic; themes encode brand | Same components, different brands |
| Contrast at creation | `tokens/semantic.tokens.json` | Color pairs pre-validated for WCAG AA compliance | Accessibility by construction |
| Organization hierarchy | Folder structure | Category → subcategory → component pattern | Maps to Figma organizational logic |
| State limitation | `components/` manifest | `maxInteractionStates: 3` per component flow | Prevents interaction complexity |

## Cross-References

- **Designing and Prototyping Interfaces (1st Ed)**: Foundation; 2nd Ed adds variables, Dev Mode, advanced features
- **The Designer's Guide to Figma**: Collaboration and workflow context for these technical features
- **shadcn/ui**: Code implementation that mirrors Figma's variable-to-component architecture
- **Design Evolution (Samara)**: Principles evolving expression parallels variable modes changing values
- **CSS Custom Properties**: Technical implementation of the same concept Figma variables represent
- **Atomic Design**: Component composition theory that section components implement
