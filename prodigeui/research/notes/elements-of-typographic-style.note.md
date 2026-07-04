---
sourceId: elements-of-typographic-style
sourceType: book
sourceName: "The Elements of Typographic Style"
sourceLocation: "Book/"
appliedTo: []
---

## Key Principles Extracted

1. **Modular scale for type sizing**: Use mathematical ratios (1.2 minor third, 1.25 major second, 1.333 perfect fourth) — never arbitrary sizes
2. **Vertical rhythm**: Line-height creates baseline grid; all spacing derived from base line-height unit
3. **Measure (line length)**: Optimal 45-75 characters per line for body text; 40-50 for narrow columns
4. **Typographic hierarchy**: Maximum 2-3 typefaces per project; hierarchy through size, weight, and case — not font variety
5. **Optical alignment**: Text alignment follows visual edge, not mathematical edge (hanging punctuation, optical margin adjustments)
6. **Paragraph spacing**: Either indent (1em, no space between) OR block spacing (1 line-height, no indent) — never both
7. **Font pairing principles**: Contrast in one dimension (serif+sans), harmony in others (x-height, proportion)
8. **Whitespace as active element**: Space is not "empty" — it creates grouping, hierarchy, and breathing room (Gestalt proximity)
9. **Tracking and context**: Tighter tracking for display type (large); looser for small caps and body text

## Concrete Rules & Parameters

- Modular scale ratio: 1.25 (major second) for dense UI; 1.333 (perfect fourth) for editorial
- Line-height: 1.4-1.6 for body text; 1.1-1.2 for headings; 1.6-1.8 for small text
- Measure: 45-75 characters (body); implemented via `max-width` in `ch` units
- Maximum typefaces: 2 (1 sans for UI, 1 serif/display for headings — if needed)
- Font weights used: max 3-4 per typeface (regular, medium, semibold, bold)
- Paragraph spacing: 1× line-height between paragraphs (block style for UI)
- Letter-spacing: -0.01em to -0.02em for headings >24px; +0.01em for text <12px; 0 for body
- Baseline unit: Derive from body line-height (e.g., 24px line-height → 4px or 8px baseline unit)

## Modern Context Application

- **Tokens**: Type scale as token array generated from modular ratio (`type.scale.xs` through `type.scale.4xl`)
- **Responsive**: Fluid type with `clamp(min, preferred, max)` — scale ratio preserved across viewports
- **Dark mode**: Slightly increase font-weight in dark mode (+100 optical weight to compensate luminance)
- **Component systems**: Every text component consumes type tokens (never raw px values)
- **Design tokens**: Spacing tokens derived from baseline unit (all spacing = N × baseline-unit)
- **Variable fonts**: Single font file with weight/width axes for token-driven interpolation

## Anti-AI-Slop Indicators

- Expert: Consistent modular scale; max 2 typefaces; line-height varies by text role; measure controlled
- AI slop: Random font sizes (13px, 15px, 18px, 22px — no mathematical relationship); 4+ typefaces; no measure constraint
- Expert: Spacing derived from baseline grid (8px grid → spacing is 8, 16, 24, 32, 40...)
- AI slop: Random spacing (12px, 18px, 25px, 36px — no system)
- Expert: Letter-spacing adjusted by size context (tighter for large, looser for small)
- AI slop: Same letter-spacing everywhere, or 0 everywhere

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Modular scale ratio | `design-rules/typography.rules.json` | `scaleRatio` (1.25 or 1.333) | Prevents arbitrary type sizing |
| Type scale tokens | `tokens/tokens.json` | `typography.scale.*` generated from ratio | Mathematical relationship between sizes |
| Line-height by role | `tokens/tokens.json` | `typography.lineHeight.body/heading/small` | Context-appropriate vertical rhythm |
| Measure constraint | `design-rules/typography.rules.json` | `measure.min: 45ch, measure.max: 75ch` | Enforced readability |
| Baseline unit | `tokens/tokens.json` | `spacing.baseline` (4px or 8px) | All spacing derives from this unit |
| Font weight limit | `design-rules/typography.rules.json` | `maxWeights: 4` per typeface | Prevents weight proliferation |
| Letter-spacing rules | `tokens/tokens.json` | `typography.tracking.heading/body/small` | Context-aware spacing |
| Dark mode weight adjustment | `themes/dark.theme.json` | Font-weight optical compensation | Maintains readability in dark |
| Fluid type implementation | `tokens/build/tokens.css` | `clamp()` functions for font-size | Responsive without breakpoints |

## Cross-References

- Modular scale validates design-dna-main's automated derivation concept (mathematically derived, not arbitrary)
- Baseline grid aligns with Semantic-UI-master's spacing system concept
- Measure constraint confirmed by Don't Make Me Think's scanability principles
- Type hierarchy limit (2-3 typefaces) reinforces taste-skill-main's Anti-Default Discipline
- Vertical rhythm concept connects to pearl-ui-main's spacing scale tokens
- Whitespace as active element validates Atomic Design's composition principles
- Font pairing relates to Color Works' contrast/harmony balance applied to typography
