---
sourceId: color-theory-dan-scott
sourceType: book
sourceName: "Color Theory"
sourceLocation: "Book/colors/Color Theory (Dan Scott) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Color wheel relationships**: Complementary (opposite), Analogous (adjacent), Triadic (120° apart), Split-complementary (softer contrast)
2. **HSL as design language**: Hue (identity), Saturation (intensity), Lightness (weight) — manipulate independently for systematic palettes
3. **Color temperature**: Warm colors advance (feel closer), Cool colors recede (feel farther) — use for depth hierarchy
4. **Simultaneous contrast**: Colors appear different depending on neighbors — always test in context, never in isolation
5. **Value structure**: Light/dark pattern creates hierarchy independent of hue — design in grayscale first
6. **Color proportion rule**: 60-30-10 distribution (dominant, secondary, accent) for balanced compositions

## Concrete Rules & Parameters

- Primary palette generation: Start with brand hue, derive using 60° analogous or 180° complementary
- Saturation scale: 5-7 steps from desaturated (5-15%) to vibrant (70-90%) per hue
- Lightness scale: 9-11 steps from near-white (95%) to near-black (10%) per hue
- 60-30-10 rule: 60% dominant (surfaces), 30% secondary (components), 10% accent (CTAs, focus)
- Warm/cool balance: Interface should lean 70% neutral-cool (reduces fatigue), 30% warm (creates focus)
- Context testing: Every color swatch must be evaluated on light AND dark backgrounds before approval

## Modern Context Application

- **Tokens**: HSL-based token system allows systematic generation (`--hue`, `--saturation`, `--lightness` as primitives)
- **Dark mode**: Invert lightness scale; reduce saturation 10-20% for dark mode (vibrant colors on dark = eye strain)
- **Component systems**: Components reference semantic color tokens; color harmony handled at theme level
- **Responsive**: N/A for color (screen-independent) but density affects color proportion perception
- **Accessibility**: Value structure (lightness) determines contrast — WCAG compliance is fundamentally a value problem

## Anti-AI-Slop Indicators

- Expert: Systematic palette from HSL manipulation; 60-30-10 distribution; dark mode saturation adjusted
- AI slop: Random color picks; no proportion system; same saturation in light and dark modes
- Expert: Grays derived from brand hue (warm grays or cool grays matching palette)
- AI slop: Pure neutral grays (#808080) that feel disconnected from brand palette

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| HSL-based generation | `tokens/tokens.json` | Primitive color tokens as H/S/L values | Systematic derivation, not arbitrary hex |
| Lightness/saturation scales | `tokens/tokens.json` | Color scale steps (50-900) | Consistent shade generation |
| 60-30-10 proportion | `design-rules/color.rules.json` | Distribution guidance | Prevents unbalanced palettes |
| Dark mode saturation reduction | `themes/dark.theme.json` | Saturation adjustment (-10-20%) | Reduces eye strain on dark backgrounds |
| Temperature as hierarchy | `design-rules/color.rules.json` | Warm=emphasis, Cool=recede rule | Consistent depth signaling |
| Hue-derived grays | `tokens/tokens.json` | Neutral tokens with brand hue tint | Cohesive palette integration |

## Cross-References

- HSL system validates pearl-ui-main's token architecture (systematic color derivation)
- 60-30-10 aligns with Visual Design Solutions' hierarchy through contrast
- Dark mode saturation confirmed by tixl-main's dark-mode-first approach
- Value structure connects to WCAG contrast requirements (Req 4.6)
- Temperature as hierarchy relates to Designing for Emotion's priming concept
- Systematic generation matches design-dna-main's automated token derivation
