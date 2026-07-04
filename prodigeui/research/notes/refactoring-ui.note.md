---
sourceId: refactoring-ui
sourceType: book
sourceName: "Refactoring UI"
sourceLocation: "Book/UI/Refactoring UI (Adam Wathan, Steve Schoger) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

Wathan and Schoger provide the most directly parameterizable design rules of any design book. Every principle has a concrete implementation. Core framework:

- **Start with too much whitespace, then remove:** Space creates hierarchy. Default to generous spacing, reduce only where density is needed.
- **Establish a spacing/sizing system:** Limit values to a defined scale. Never use arbitrary values.
- **Hierarchy is everything:** Visual hierarchy communicates importance without requiring reading. Size, weight, color create 3 independent hierarchy channels.
- **Don't rely on font size alone:** Use weight and color as hierarchy tools. De-emphasize secondary content by reducing contrast, not just size.
- **Limit your color palette:** A full palette needs: neutrals (8-10 shades), primary (5-7 shades), accent colors (5-7 shades each). Build from a system.
- **Define typography scale upfront:** Limited set of font sizes used everywhere. Typically 10-12 sizes covering the full range.
- **Use weight to build hierarchy:** 2 font weights (normal 400 + bold 600-700) are sufficient. Avoid thin/light weights for UI text.
- **Overlap elements to create layers:** Overlapping breaks rigidity and creates depth/visual interest.
- **Supercharge with utility-first:** Utility classes enable fast iteration and systematic constraint.
- **Use fewer borders:** Spacing, background differences, and shadows separate elements more elegantly than borders.
- **Think outside the box (literally):** Cards and containers aren't always needed. Spacing alone can create groups.
- **Design in grayscale first:** Establish hierarchy through spacing, size, and weight before adding color.

## Concrete Rules & Parameters

| Rule | Parameter | Value/Range |
|------|-----------|-------------|
| Spacing scale | Base unit | 4px (scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96) |
| Font size scale | Range | 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72px |
| Font weight for UI | Allowed values | 400 (normal), 500 (medium), 600 (semibold), 700 (bold) |
| Neutral color shades | Count per palette | 8-10 shades (50, 100, 200, 300, 400, 500, 600, 700, 800, 900) |
| Primary color shades | Count | 5-9 shades (lighter for backgrounds, darker for text) |
| Line height for UI text | Body text | 1.5 (small text: 1.6-1.75, headings: 1-1.25) |
| Letter spacing | Headings | Slight negative (-0.02em to -0.05em) for large text |
| Max content width | Readability | 65-75ch for paragraph text |
| Border radius system | Scale | 0, 2, 4, 6, 8, 12, 16px (+ full round) |
| Shadow elevation | System | 5 levels (sm, base, md, lg, xl) with defined offset/blur/spread |
| Icon sizing | Grid | 16, 20, 24, 32, 40, 48px (matching text scale) |
| Button padding | Ratio | Horizontal padding = 1.5-2× vertical padding |
| CTA hierarchy | Max per viewport | 1 primary, 1-2 secondary, unlimited tertiary (links) |
| Color contrast for text | Hierarchy tool | Primary text: 900, Secondary: 500-600, Tertiary: 400 |

## Modern Context Application

**Responsive Design:**
- Spacing scale maintained proportionally across breakpoints (base unit may scale: 4px → 3px on mobile)
- Typography scale needs responsive adjustment (48px heading desktop → 30px mobile)
- Content width constraints apply at every breakpoint (never exceed 75ch)
- Shadow/elevation may reduce on mobile (less layering on smaller screens)

**Dark Mode:**
- Grayscale-first principle means hierarchy survives mode switch
- Neutral shades invert: 900 (darkest on light) becomes surface on dark
- Primary color shades need brightness adjustment for dark backgrounds
- Shadows less effective on dark backgrounds; use subtle lighter borders or glow instead

**Token Systems:**
- Direct mapping: spacing scale → spacing tokens, type scale → typography tokens
- Color shade system → color tokens with numeric scale (primary-50 through primary-900)
- Shadow system → elevation tokens (shadow-sm through shadow-xl)
- Border radius scale → radius tokens
- Every "magic number" replaced by token reference

**Component States:**
- Primary CTA: filled background + white text + shadow elevation
- Secondary: border/outline + primary color text + no shadow
- Tertiary: no border + primary color text (link-style)
- Hover: slight darkness increase (background-color shift 1 shade darker)
- Active: additional shade darker + reduced shadow (pressed feel)
- Disabled: reduced opacity (50%) or lightest shade + no cursor change
- Focus: ring/outline (2px offset, primary color at 50% opacity)

## Anti-AI-Slop Indicators

Expert UI (Refactoring UI principles):
- Clear 3-level hierarchy (primary/secondary/tertiary) visible instantly
- Consistent spacing from defined scale (no arbitrary 13px or 17px values)
- Font weights doing heavy lifting (not just font sizes)
- Limited, systematic color palette with clear shade progression
- Generous whitespace creating breathing room
- Shadows/elevation creating depth without borders
- Single primary CTA per section (clear focus)
- Secondary text de-emphasized through color/weight, not just smaller size

AI Slop (violates these principles):
- Flat hierarchy (everything same visual weight)
- Arbitrary spacing values (inconsistent gaps between elements)
- Only font-size used for hierarchy (no weight/color variation)
- Too many colors without systematic relationship
- Cramped layouts with insufficient whitespace
- Heavy borders everywhere for separation
- Multiple competing primary-style buttons
- All text same weight and contrast (no de-emphasis)

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| 4px spacing scale | `tokens/spacing.json` | Scale: [4,8,12,16,20,24,32,40,48,64,80,96] | Systematic spacing constraint |
| Typography scale | `tokens/typography.json` | fontSize scale: [12-72] with defined steps | Limited font size vocabulary |
| Font weight constraint | `tokens/typography.json` | allowedWeights: [400, 500, 600, 700] | Weight hierarchy system |
| Neutral shade system | `tokens/color.json` | neutral-50 through neutral-900 (10 shades) | Grayscale hierarchy foundation |
| Primary color shades | `tokens/color.json` | primary-50 through primary-900 | Systematic color hierarchy |
| Shadow elevation | `tokens/elevation.json` | 5-level shadow scale (sm/base/md/lg/xl) | Depth system |
| Border radius scale | `tokens/radius.json` | Scale: [0,2,4,6,8,12,16,9999] | Consistent roundness |
| Line height rules | `tokens/typography.json` | body: 1.5, heading: 1.1-1.25, small: 1.6 | Readability system |
| CTA hierarchy | `design-rules/structure.rules.json` | max 1 primary + 2 secondary per section | Focus enforcement |
| Content width | `design-rules/structure.rules.json` | maxParagraphWidth: "75ch" | Readability constraint |
| Button padding ratio | `tokens/spacing.json` | horizontalPad: 1.5-2× verticalPad | Proportional sizing |
| De-emphasis technique | `quality-gate/criteria.json` | Secondary text uses weight/color reduction, not just size | Multi-channel hierarchy |
| Borders as last resort | `quality-gate/criteria.json` | Prefer spacing/background/shadow over borders | Cleaner separation |
| Design in grayscale | `quality-gate/criteria.json` | Hierarchy must work without color | Color-independent structure |

## Cross-References

- **Laws of UX (Yablonski):** Von Restorff Effect = CTA hierarchy; Proximity = spacing system; Hick's = limited choices
- **Practical UI (Dannaway):** Very similar approach to spacing/typography systems, compatible rules
- **100 Things Every Designer (Weinschenk):** Cognitive chunking maps to spacing-based grouping
- **Design of Everyday Things (Norman):** Signifiers through visual weight, affordances through depth/shadow
- **Web UI Design for Human Eye:** Eye-tracking validation of hierarchy principles
- **UI Design Principles (Filipiuk):** Overlapping principle set focused on Polish design tradition
