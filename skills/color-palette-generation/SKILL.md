---
name: color-palette-generation
description: |
  Generates brand color palettes from a base hue, producing tonal scales, semantic role assignments, contrast-verified pairs, and primitive token output.
triggers:
  - "generate palette"
  - "color palette"
  - "create colors"
  - "brand colors"
  - "tonal scale"
---

# color-palette-generation

## Purpose

Generate a complete, production-ready color palette from a single base hue.
Produces a perceptually uniform tonal scale (50-950), derives semantic color
roles, calculates all contrast pairs, verifies WCAG compliance, and outputs
results as primitive design tokens ready for integration into the token system.

## When to Use

- Starting a new brand that needs a full color system from one key color
- Extending the token system with a new color family
- Generating accessible color ramps for data visualization
- Creating a palette for a new theme starting from a brand hex value
- Replacing or augmenting existing color primitives

## Workflow Steps

### Step 1 — Select Base Hue

1. Obtain the base color input (hex code, HSL values, or color intent description).
2. If descriptive: translate intent to a specific hue angle (e.g., "trustworthy" -> blue 220).
3. Convert to OKLCH color space for perceptually uniform manipulation.
4. Document the base color and its intended brand meaning.
5. Determine if a warm, cool, or neutral bias is desired for the scale.

### Step 2 — Generate Tonal Scale (50-950)

1. Create an 11-step tonal ramp from lightest (50) to darkest (950).
2. Use perceptual lightness steps in OKLCH: L values from ~0.97 (50) to ~0.15 (950).
3. Maintain consistent chroma across the scale, reducing slightly at extremes.
4. Ensure each step is visually distinguishable from its neighbors.
5. Name each step: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950.
6. Verify the 500 step is closest to the original base hue input.
7. Generate a neutral/gray scale using the same hue with near-zero chroma.

**HCT Preference:** Use HCT (Hue-Chroma-Tone) perceptual color space for tonal palette generation. HCT guarantees perceptually uniform lightness across hues, unlike HSL where yellow appears brighter than blue at the same L value. When HCT is unavailable, OKLCH is the closest alternative.

**Tonal palette tones (Material 3 alignment):** [0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100] — use these extended tone stops for fine-grained palette control in addition to the 50-950 naming convention.

### Step 3 — Derive Semantic Roles

1. Assign primary role: select the scale step with best balance of vibrance and readability.
2. Assign background roles: lightest steps (50, 100) for surfaces.
3. Assign foreground roles: darkest steps (900, 950) for text on light backgrounds.
4. Derive secondary and accent colors:
   - Complementary: hue + 180 degrees
   - Analogous: hue +/- 30 degrees
   - Triadic: hue +/- 120 degrees
5. Generate semantic status colors if not provided:
   - Success: green (hue ~145)
   - Warning: amber (hue ~45)
   - Error: red (hue ~25)
   - Info: blue (hue ~220)
6. Map each semantic role to a specific tonal step.

### Step 4 — Calculate Contrast Pairs

1. For every foreground/background combination, compute WCAG contrast ratio.
2. Build a contrast matrix: which steps can be paired at 4.5:1 (normal text).
3. Build a secondary matrix for 3:1 (large text, UI elements).
4. Identify the recommended pairs:
   - Primary text on background: >= 4.5:1
   - Muted text on background: >= 4.5:1
   - Primary color on white/dark: determine viable directions
5. Document all valid pairings in a lookup table.

### Step 5 — Verify WCAG Compliance

1. Test all semantic pairs against WCAG 2.1 AA thresholds.
2. For any failing pair: suggest the nearest compliant alternative step.
3. Verify status colors against both light and dark surface tokens.
4. Check that interactive states (hover, active, focus) maintain contrast.
5. If the base hue is inherently low-contrast (yellow, light green):
   document the limitation and provide darkened alternatives for text use.

### Step 6 — Output as Primitive Tokens

1. Format the palette as `tokens/primitive.tokens.json` entries.
2. Use naming convention: `color.{family}.{step}` (e.g., `color.brand.500`).
3. Include hex values and OKLCH source values as metadata.
4. Include neutral scale as `color.neutral.{step}`.
5. Include status colors as `color.success.{step}`, `color.error.{step}`, etc.
6. Validate output against `tokens/tokens.schema.json`.
7. Report: total tokens generated, contrast compliance status, any limitations.
