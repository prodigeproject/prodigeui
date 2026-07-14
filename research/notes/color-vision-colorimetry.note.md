---
sourceId: color-vision-colorimetry
sourceType: book
sourceName: "Color Vision and Colorimetry: Theory and Applications"
sourceLocation: "Book/colors/Color Vision and Colorimetry Theory and Applications (Daniel Malacara) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Color perception is relative**: Same wavelength appears different based on surrounding colors, adaptation state, and viewing conditions
2. **CIE color spaces**: L*a*b* provides perceptually uniform color distance — deltaE measures perceived difference
3. **Color deficiency prevalence**: ~8% males, ~0.5% females have color vision deficiency — never rely on color alone
4. **Metamerism**: Colors that match under one light source may differ under another — test across conditions
5. **Chromatic adaptation**: Eyes adjust white point — interface colors perceived relative to screen "white"
6. **Contrast sensitivity**: Human vision most sensitive to luminance contrast (not chromatic contrast)

## Concrete Rules & Parameters

- DeltaE thresholds: <1 imperceptible, 1-2 barely noticeable, 2-3.5 noticeable, >5 different color
- Color deficiency safe: Must be distinguishable with deuteranopia, protanopia simulations
- Minimum color pairs: Never red+green as ONLY differentiator (use shape, icon, or position additionally)
- Luminance contrast priority: WCAG 4.5:1 for text (fundamentally a luminance requirement)
- Adaptation consideration: Dark mode needs 2-3 minutes adaptation time — avoid immediate high-contrast elements
- Perceptual uniformity: Use OKLCH/OKLAB for palette generation (perceptually uniform unlike HSL)

## Modern Context Application

- **Tokens**: Use OKLCH for token generation (perceptually uniform); store as hex/HSL for CSS compatibility
- **Dark mode**: Chromatic adaptation means dark mode needs carefully tuned "white" (not pure white on dark)
- **Component systems**: Status indicators use shape+color+icon (never color alone per color deficiency)
- **Accessibility**: WCAG contrast is luminance-based; confirms contrast calculation approach
- **Quality gates**: DeltaE comparison for validating theme consistency across palettes

## Anti-AI-Slop Indicators

- Expert: Palettes generated in perceptually uniform space (OKLCH); multi-cue status indicators; contrast calculated precisely
- AI slop: HSL-generated palettes with perceptual jumps; color-only differentiation; approximate contrast ("looks okay")
- Expert: Color palette tested with CVD simulations before approval
- AI slop: No consideration of color blindness; red/green as primary semantic pair

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| OKLCH for generation | `design-rules/color.rules.json` | Palette generation color space | Perceptual uniformity |
| DeltaE thresholds | `quality-gate/criteria.json` | Color consistency validation | Measurable color difference checks |
| Multi-cue requirement | `components/` all status indicators | `statusIndicator` spec (icon+color+label) | Color deficiency safety |
| WCAG as luminance | `quality-gate/criteria.json` | Contrast calculation method | Correct contrast implementation |
| Dark mode adaptation | `themes/dark.theme.json` | Reduced contrast for initial view elements | Adaptation-aware design |
| CVD testing requirement | `quality-gate/criteria.json` | Color deficiency simulation check | Palette accessibility validation |

## Cross-References

- Perceptual uniformity validates need for OKLCH over raw HSL (Color Theory book's HSL is starting point, this refines)
- Luminance-based contrast confirms WCAG requirements (Req 4.6)
- Color deficiency matches Accessibility_Standard requirement
- Multi-cue principle aligns with Design of Everyday Things' multiple signifiers concept
- DeltaE as quality metric connects to Designing with AI-Generated's measurable acceptance criteria
