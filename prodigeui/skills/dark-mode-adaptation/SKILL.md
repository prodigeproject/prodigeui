---
name: dark-mode-adaptation
description: |
  Converts a light design to proper dark mode by inverting luminance strategy, adjusting surface elevation, verifying contrast, handling images, and validating semantic color mapping.
triggers:
  - "dark mode"
  - "dark theme"
  - "convert to dark"
  - "dark mode adaptation"
  - "night mode"
---

# dark-mode-adaptation

## Purpose

Convert a light-mode design to a properly crafted dark mode. Goes beyond
naive color inversion by applying a luminance-based strategy, adjusting
surface elevation semantics, verifying all contrast pairs in the dark context,
adapting images and illustrations, and validating every semantic color mapping
produces the intended result.

## When to Use

- Creating a dark mode variant of an existing light-mode design
- Adding dark mode support to the design system token layer
- Verifying an auto-generated dark palette actually works visually
- Fixing dark mode issues: washed-out colors, poor contrast, glaring surfaces
- Adapting illustrations and images that were designed for light backgrounds

## Workflow Steps

### Step 1 — Invert Luminance Strategy (Not Colors)

1. Understand the principle: dark mode inverts lightness, not hue or saturation.
2. Map the light-mode surface hierarchy to dark equivalents:
   - Light background (white/gray-50) -> dark surface (gray-900/gray-950)
   - Light elevated (white) -> dark elevated (gray-800)
   - Light sunken (gray-100) -> dark sunken (gray-950/black)
3. Maintain the same depth relationships: elevated surfaces are lighter in dark mode.
4. Keep brand/accent hues the same — only adjust their lightness and saturation.
5. Reduce overall saturation slightly (vibrant colors are harsh on dark backgrounds).
6. Text color inverts: dark text on light -> light text on dark.

### Step 2 — Adjust Surface Elevation

1. In dark mode, elevation is communicated through lighter surfaces (not shadows).
2. Define elevation levels using surface lightness:
   - Level 0 (base): darkest surface (e.g., gray-950, #0a0a0a)
   - Level 1 (card/panel): slightly lighter (e.g., gray-900, #171717)
   - Level 2 (dropdown/popover): lighter still (e.g., gray-800, #262626)
   - Level 3 (modal/dialog): lightest elevated (e.g., gray-750, #303030)
3. Reduce or remove box-shadows (they are invisible on dark backgrounds).
4. Use subtle borders (1px, low-opacity white) to delineate surfaces instead.
5. Maintain consistent elevation token mapping across the system.

### Step 3 — Verify Contrast in Dark Context

1. Recalculate all text/background contrast ratios for dark surfaces.
2. Primary text (white/gray-100 on gray-900): must achieve >= 4.5:1.
3. Secondary/muted text: must still achieve >= 4.5:1 (gray-400 on gray-900).
4. Check interactive element contrast: buttons, links, inputs against dark surfaces.
5. Verify focus indicators are visible on dark backgrounds (>= 3:1).
6. Status colors (success, error, warning) may need lightened variants for dark mode.
7. Adjust any failing pairs: prefer lightening the foreground over darkening it further.

### Step 4 — Handle Images and Illustrations

1. Photographs: generally work without changes; verify they don't blow out.
2. Illustrations with white/light backgrounds: add rounded corners with dark bg blend.
3. Icons: ensure they use currentColor or semantic tokens (auto-adapt).
4. Logos: provide dark-mode variants if the primary logo is dark-colored.
5. Decorative graphics: reduce opacity or add dark overlay to prevent glare.
6. Screenshots/UI images: consider adding a subtle border to separate from dark UI.
7. SVG illustrations: map fill colors to semantic tokens for auto-adaptation.

### Step 5 — Test Semantic Color Mapping

1. Review all 24 semantic color tokens in the dark theme file.
2. Verify each mapping produces the intended visual role:
   - `color.background` is the darkest surface (not an inverted white).
   - `color.foreground` is light enough for high readability.
   - `color.primary` maintains brand identity while being legible on dark surfaces.
   - `color.muted` is subdued but still distinguishable from background.
   - `color.border` is subtle but visible (low-opacity white or gray-700).
3. Check component-specific tokens: input backgrounds, card surfaces, dividers.
4. Verify hover/active states provide visible feedback on dark surfaces.
5. Test with actual components rendered: buttons, cards, forms, navigation.

### Step 6 — Validate All Pairs

1. Build a comprehensive contrast verification table for the dark theme.
2. Test every foreground/background pair used in the component library.
3. Verify status indicators: success/error badges on dark card backgrounds.
4. Check data visualization colors: chart lines/bars must be distinguishable.
5. Test mixed contexts: dark modal on top of dark page (elevation must differentiate).
6. Verify the theme file against `themes/theme.schema.json`.
7. Run the accessibility-audit skill focused on contrast in dark context.
8. Report: all token mappings, contrast ratios, image adaptations, any failures.
