---
sourceId: ultimate-ui-design-roadmap
sourceType: book
sourceName: "The Ultimate UI Design Roadmap"
sourceLocation: "Book/UI/The Ultimate UI Design Roadmap (Michael Filipiuk) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

Michael Filipiuk provides a structured learning path for UI design, covering fundamentals through advanced topics in a systematic roadmap format:

- **Design fundamentals hierarchy:** Grid → Typography → Color → Spacing → Components (build upward from foundations).
- **Grid systems as design backbone:** 12-column or 8-column grids provide structural consistency. All elements align to grid.
- **Typography as 60% of UI design:** Most UI is text. Mastering type hierarchy solves most design problems.
- **Color psychology + systematic palette:** Colors chosen for psychological impact AND organized in systematic scales.
- **Spacing rhythm creates cohesion:** Consistent spacing values create visual rhythm that the eye follows naturally.
- **Component thinking:** Design in reusable pieces. Consistency emerges from component reuse, not manual alignment.
- **Layout composition:** How components arrange into pages follows principles of visual balance, flow, and hierarchy.
- **Responsive design is planning, not fixing:** Design for all screen sizes from the start, not as mobile-to-desktop afterthought.
- **Design systems as maturity indicator:** Moving from one-off designs to systematic, documented, scalable design systems.
- **Iteration over perfection:** Ship, test, improve. Design is never finished, only iterated.

## Concrete Rules & Parameters

| Topic | Parameter | Rule |
|-------|-----------|------|
| Grid columns | Standard | 12-column grid (desktop), 8 (tablet), 4 (mobile) |
| Grid gutter | Size | 16-24px (desktop), 16px (tablet), 16px (mobile) |
| Grid margin | Size | 24-80px (desktop), 24px (tablet), 16px (mobile) |
| Typography scale | Ratio | 1.2-1.333 (Minor Third to Perfect Fourth) |
| Font pairing | Max | 2 fonts maximum (1 often sufficient) |
| Color palette size | Total swatches | 50-80 total (5-9 per hue × 5-8 hues + neutrals) |
| Base spacing | Unit | 8px (alternatives: 4px for fine, 8px for standard) |
| Component height | Standard | 32 (small), 40 (medium/default), 48 (large) |
| Breakpoints | Standard | 320, 768, 1024, 1280, 1440px |
| Content area max | Width | 1200-1440px |
| Heading levels | Count | 6 levels but typically 4 used in practice |
| Line spacing | Body text | 150-175% of font size |
| Paragraph spacing | Between paragraphs | 1× line-height below each paragraph |

## Modern Context Application

**Responsive Design:**
- Grid adapts: 12-col → 8-col → 4-col at breakpoints
- Gutter/margin adjusts proportionally
- Component heights remain consistent (touch targets don't shrink)
- Typography scale tightens on mobile (smaller ratio)
- Layout shifts from multi-column to single-column

**Dark Mode:**
- Grid and spacing system unchanged (structural, not color-dependent)
- Color palette has dark-mode variants for each swatch
- Typography contrast re-verified
- Component backgrounds shift to dark surface tokens

**Token Systems:**
- Grid tokens: columns, gutter, margin per breakpoint
- Spacing tokens: 8px base scale
- Typography tokens: size scale from ratio, line-height, letter-spacing
- Color tokens: full palette organized by hue and lightness
- Sizing tokens: component height scale (32/40/48)
- Breakpoint tokens: standard breakpoint values

**Component States:**
- Size variants (small/medium/large) as standard across all components
- Consistent height within size variant across component types
- Responsive variants may change size variant (large on desktop → medium on mobile)

## Anti-AI-Slop Indicators

Expert UI (roadmap-aware):
- Elements aligned to grid (12-column structure visible)
- Typographic scale with clear mathematical relationship between sizes
- Spacing from defined scale (8px multiples visible)
- Consistent component heights within size category
- Responsive behavior planned (grid adapts, not just shrinks)
- Color palette organized with clear hierarchy and purpose

AI Slop (fundamentals missing):
- No grid alignment (elements placed arbitrarily)
- Random font sizes (no scale relationship)
- Inconsistent spacing (no base unit discernible)
- Mixed component heights (button is 36px, input is 42px, select is 38px)
- Responsive = cramped (same layout, smaller viewport)
- Colors without organization (no systematic palette visible)

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| 12-column grid | `tokens/grid.json` | columns: {desktop: 12, tablet: 8, mobile: 4} | Structural foundation |
| Grid gutter/margin | `tokens/grid.json` | gutter: {desktop: 24, mobile: 16}, margin: per breakpoint | Layout consistency |
| Typography ratio | `tokens/typography.json` | scaleRatio: 1.25 (Major Third) | Harmonious sizing |
| Base spacing unit | `tokens/spacing.json` | baseUnit: 8 | Rhythm foundation |
| Component heights | `tokens/sizing.json` | sm: 32, md: 40, lg: 48 | Consistent sizing |
| Breakpoints | `tokens/breakpoints.json` | [320, 768, 1024, 1280, 1440] | Responsive thresholds |
| Content max-width | `design-rules/structure.rules.json` | containerMaxWidth: 1280 | Layout constraint |
| Font pairing limit | `design-rules/structure.rules.json` | maxFonts: 2 | Typography discipline |
| Color palette structure | `tokens/color.json` | 5-9 shades per hue, organized by role | Systematic palette |
| Heading level usage | `design-rules/structure.rules.json` | practicalHeadingLevels: 4 | Typography hierarchy |
| Line spacing | `tokens/typography.json` | bodyLineHeight: "150-175%" | Readability |
| Design system maturity | Architecture goal | Scalable, documented, systematic | Long-term maintainability |

## Cross-References

- **Practical UI (Dannaway):** Overlapping spacing/typography rules; Filipiuk provides roadmap structure, Dannaway provides visual proof
- **Refactoring UI (Wathan/Schoger):** Same spacing/typography philosophy with deeper visual examples
- **UI Design Principles (Filipiuk):** Same author, different angle—principles vs roadmap
- **UI Design Systems Mastery (Budarina):** Design system maturity concept expanded in detail
- **Designing Interfaces (Tidwell):** Patterns operate within the grid/spacing/type foundation described here
