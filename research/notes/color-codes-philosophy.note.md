---
sourceId: color-codes-philosophy
sourceType: book
sourceName: "Color Codes: Modern Theories of Color in Philosophy, Painting and Architecture, Literature, Music and Psychology"
sourceLocation: "Book/psychology/vdoc.pub_color-codes-modern-theories-of-color-in-philosophy-painting-and-architecture-literature-music-and-psychology.epub"
appliedTo: []
---

## Key Principles Extracted

This interdisciplinary work examines color from philosophical, psychological, and perceptual perspectives. Key principles relevant to design systems:

- **Color is relational, not absolute:** Colors are perceived relative to surrounding colors. The same hue appears different depending on context (simultaneous contrast).
- **Color carries cultural and psychological weight:** Colors evoke emotional and cultural associations that vary across contexts but have some universal tendencies.
- **Perceptual color space is non-uniform:** Equal numeric differences in color values do not produce equal perceptual differences. Perceptually uniform color spaces (CIELAB, OKLCH) are necessary for consistent design.
- **Color as information carrier:** Color communicates meaning beyond aesthetics—it signals state, category, hierarchy, and urgency.
- **Synesthetic associations:** Color connects to other sensory domains (warm/cool, heavy/light, loud/quiet). These cross-modal associations are consistent across populations.
- **Color constancy mechanisms:** The visual system compensates for lighting changes to maintain stable color perception. Design must account for varying viewing conditions.
- **Opponent process theory:** Color perception is organized in opponent pairs (red-green, blue-yellow, black-white). This affects how colors interact and which combinations are most readable.
- **Color and spatial perception:** Colors affect perceived depth, weight, and size. Warm colors advance; cool colors recede.
- **Phenomenal vs physical color:** The experienced color differs from the measured wavelength. Design decisions must be based on perceptual outcome, not numeric values.
- **Color harmony as perceptual balance:** Harmonious color combinations create a sense of completeness and reduced visual tension.

## Concrete Rules & Parameters

| Principle | Parameter | Design Rule |
|-----------|-----------|-------------|
| Simultaneous contrast | Context-dependent adjustment | Test colors against actual backgrounds (not in isolation) |
| Perceptual uniformity | OKLCH color space | Use perceptually uniform space for palette generation |
| Opponent process | Complementary pairs | Red-green and blue-yellow as maximum contrast pairs |
| Warm/cool spatial effect | Depth hierarchy | Warm colors for foreground/CTA, cool for background/recede |
| Color constancy | Dark/light mode testing | Verify color relationships hold across viewing conditions |
| Information density | Max 5-7 categorical colors | Beyond 7, color becomes unreliable as differentiator |
| Contrast ratio (a11y) | WCAG AA: 4.5:1 text, 3:1 large | Minimum perceptual contrast for readability |
| Color harmony | Complementary/analogous/triadic | Systematic palette construction from harmonic relationships |
| Cultural variation | Semantic naming over color naming | Use "danger/success/warning" not "red/green/yellow" |
| Synesthetic weight | Saturation = visual weight | High saturation draws attention; low saturation recedes |

## Modern Context Application

**Responsive Design:**
- Color relationships must maintain perceptual contrast at all viewport sizes
- Small text requires higher contrast ratios (4.5:1 vs 3:1 for large text)
- Color alone should never carry meaning (accessibility: pair with shape/icon/text)

**Dark Mode:**
- Color constancy: hues must be perceptually adjusted for dark backgrounds (not just inverted)
- Opponent process: contrast relationships reverse in dark mode (light text on dark = different opponent channel activation)
- Saturation adjustment: colors need desaturation on dark backgrounds to avoid visual vibration
- OKLCH enables systematic lightness adjustment while maintaining hue identity

**Token Systems:**
- Semantic color tokens map to information function, not aesthetic preference
- Palette generation should use perceptually uniform steps (OKLCH lightness scale)
- Color scales need perceptual validation (equal visual steps ≠ equal numeric steps)
- Foreground/background pairs must be pre-validated for contrast compliance
- Color roles: surface, on-surface, primary, secondary, tertiary, error, success, warning

**Component States:**
- State colors must maintain perceptual distinctiveness (not just hue shift)
- Hover/active states: lightness shift in OKLCH maintains hue while signaling change
- Error states: red channel activation (opponent process) for urgency
- Disabled states: reduced saturation signals inactivity (synesthetic "quiet")
- Focus states: high-contrast outline (not color-only) for accessibility

## Anti-AI-Slop Indicators

Expert UI (color theory aware):
- Colors chosen for perceptual harmony and functional communication
- Consistent color roles (same meaning everywhere)
- Appropriate contrast maintained across all contexts
- Color pairs tested against actual backgrounds
- Systematic palette with clear lightness/saturation logic
- Color reinforces hierarchy (not decorates randomly)

AI Slop (color theory ignorant):
- Random color choices without perceptual relationship
- Vibrating color combinations (high-saturation complementaries touching)
- Colors that fail contrast requirements
- Same hue used for different meanings across the interface
- "Rainbow" effect (too many hues without purpose)
- Color as sole differentiator (fails accessibility)
- Dark mode = literal inversion (breaks perceptual balance)

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Perceptual uniformity | `tokens/color.json` | OKLCH-based palette generation | Equal perceptual steps in color scales |
| Simultaneous contrast | `quality-gate/criteria.json` | Rule: test colors in-context not isolated | Relational color perception |
| Semantic color roles | `tokens/color.json` | Role-based naming (primary, danger, success) | Cultural independence |
| Contrast requirements | `quality-gate/criteria.json` | WCAG AA enforcement (4.5:1 / 3:1) | Readability threshold |
| Dark mode adjustment | `tokens/color.json` | Mode-specific lightness/saturation tokens | Color constancy across conditions |
| Max categorical colors | `design-rules/structure.rules.json` | `maxCategoricalColors: 7` | Perceptual discrimination limit |
| Warm/cool depth | `design-rules/structure.rules.json` | Warm=foreground, cool=background guideline | Spatial perception |
| Color harmony | `tokens/color.json` | Palette relationships (complementary/analogous) | Perceptual balance |
| Saturation as weight | `design-rules/structure.rules.json` | High saturation reserved for CTAs/alerts | Attention direction |
| Opponent pairs | `tokens/color.json` | Avoid red-green only differentiation | Accessibility + perception science |

## Cross-References

- **100 Things Every Designer (Weinschenk):** Peripheral vision uses color for pre-attentive processing—connects to color as information carrier
- **Laws of UX (Yablonski):** Von Restorff Effect relies on color isolation (opponent process contrast)
- **Practical UI (Dannaway):** Practical application of limited palette with systematic scale construction
- **Refactoring UI (Wathan/Schoger):** Color system chapter implements many principles (limited palette, systematic lightness)
- **Color Theory (Dan Scott) in colors folder:** Technical color theory foundation for these philosophical principles
