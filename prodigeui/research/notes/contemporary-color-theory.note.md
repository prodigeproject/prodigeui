---
sourceId: contemporary-color-theory
sourceType: book
sourceName: "Contemporary Color Theory and Use"
sourceLocation: "Book/colors/Contemporary Color Theory and Use (Steven Bleicher) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Subtractive vs Additive**: Screen design is additive (RGB/light); print is subtractive (CMYK/pigment) — different rules apply
2. **Color interaction systems**: Itten's 7 contrasts — hue, value, saturation, temperature, quantity, simultaneous, complementary
3. **Optical mixing**: Adjacent small color areas mix perceptually at distance — relevant for icon/pattern design
4. **Color schemes as formulas**: Monochromatic, Analogous, Complementary, Triadic, Tetradic — each has specific emotional tone
5. **Psychological color associations**: Blue=trust, Green=growth, Orange=energy, Purple=premium (culturally influenced)
6. **Color fatigue and afterimages**: Prolonged exposure to saturated color causes fatigue — reduce saturation for sustained viewing

## Concrete Rules & Parameters

- Screen color gamut: sRGB as baseline; P3 for modern displays (provide fallback)
- Color scheme formulas: Analogous ±30°, Complementary 180°, Triadic 120°, Split-complementary ±150°
- Saturation for sustained use: Body/surface colors ≤20% saturation; accents 60-80% saturation
- Itten quantity contrast: Ratio of complementary areas = relative brightness inverse (yellow:purple ≈ 1:3)
- Psychological priming: Primary brand hue should align with desired emotional association
- Color fatigue mitigation: Large surface areas must be low-saturation (≤15% for backgrounds)

## Modern Context Application

- **Tokens**: Color scheme formula embedded in token generation logic (derive secondaries from primary via angle)
- **Dark mode**: Background saturation ≤5% in dark mode; ≤10% in light mode (fatigue prevention)
- **Component systems**: Large surface components (cards, backgrounds) enforce low saturation tokens
- **Responsive**: Smaller viewport = proportionally less saturated accent area visible (fatigue management)
- **Design tokens**: P3 color space with sRGB fallback in CSS (`color()` function with `@supports`)

## Anti-AI-Slop Indicators

- Expert: Palette derived from deliberate color scheme formula; surfaces low-saturation; accents constrained
- AI slop: Random colors without relationship; highly saturated backgrounds; no saturation hierarchy
- Expert: Color scheme angles (30°, 120°, 180°) precisely calculated
- AI slop: "Complementary" colors that are actually 160° apart (approximate, not systematic)

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Color scheme formulas | `design-rules/color.rules.json` | Palette generation methods | Systematic, not arbitrary |
| Surface saturation limits | `design-rules/color.rules.json` | Background saturation ≤15% rule | Fatigue prevention |
| P3 with sRGB fallback | `tokens/build/tokens.css` | Color function usage | Modern gamut with fallback |
| Psychological associations | `design-rules/color.rules.json` | Hue-emotion mapping reference | Informed brand hue selection |
| Itten's contrasts | `design-rules/color.rules.json` | Contrast type documentation | Rich contrast vocabulary |

## Cross-References

- Color scheme formulas align with Color Theory's wheel relationships
- Saturation limits confirm Colour Perception's fatigue findings
- Psychological associations connect to Designing for Emotion's priming principle
- P3 gamut consideration validated by modern browser/device capabilities
- Surface saturation rule supports Color Works' functional color separation
