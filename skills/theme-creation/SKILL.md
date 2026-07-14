---
name: theme-creation
description: |
  Creates a new ProdigeUI theme by guiding the agent through palette selection, semantic token mapping, contrast verification, and theme file generation.
triggers:
  - "create theme"
  - "new theme"
  - "custom theme"
  - "brand theme"
---

# theme-creation

## Purpose

Guide the creation of a new ProdigeUI theme from scratch, ensuring the result
conforms to `themes/theme.schema.json`, covers all 24 required semantic color
tokens, and passes WCAG 2.1 AA contrast requirements. Follows the process
documented in `themes/creating-a-theme.md`.

## When to Use

- Creating a brand-specific theme for a client or product
- Adding a new use-case theme (e.g., fintech, healthcare, education)
- Adapting an existing theme to a new color palette
- Generating light/dark mode variants from a single brand palette

## Workflow Steps

### Step 1 — Gather Brand Inputs

1. Collect primary brand color (hex or descriptive intent).
2. Collect secondary/accent color if available.
3. Determine mode: light, dark, or both.
4. Identify use-case context (SaaS, landing, ecommerce, etc.) for semantic guidance.
5. Note any specific constraints (e.g., must use existing logo colors).

### Step 2 — Generate Primitive Palette

1. From the primary color, derive a full tonal scale (50-950) using perceptual steps.
2. Generate neutral scale for backgrounds and text.
3. Generate semantic status colors (success, warning, error, info) if not specified.
4. Ensure sufficient tonal range for both interactive and non-interactive uses.

### Step 3 — Map Semantic Tokens

1. Read `themes/creating-a-theme.md` for the complete list of required semantic tokens.
2. Assign each semantic token to a specific primitive value from the generated palette.
3. Follow role-based logic:
   - `color.background` / `color.foreground` — highest contrast pair
   - `color.primary` / `color.primary-foreground` — brand action color + readable text
   - `color.muted` / `color.muted-foreground` — subtle background + legible text
   - `color.destructive` — error/danger semantic color
   - `color.border` / `color.ring` — UI structure colors
4. Verify every one of the 24 required tokens has an assigned value.

### Step 4 — Verify Contrast Compliance

1. For each foreground/background pair, calculate WCAG contrast ratio.
2. Normal text pairs must achieve >= 4.5:1.
3. Large text and UI element pairs must achieve >= 3:1.
4. If any pair fails: adjust the lighter or darker value until compliant.
5. Document all contrast ratios in an internal verification table.

### Step 5 — Generate Theme File

1. Create the theme JSON conforming to `themes/theme.schema.json`.
2. Set `name` to a kebab-case identifier (e.g., `fintech-blue`).
3. Set `mode` to `light` or `dark`.
4. Set `extends` to `_default` for fallback coverage.
5. Populate `overrides` with all semantic token assignments.
6. Save to `themes/{name}.theme.json`.

### Step 6 — Validate Theme

1. Verify the file passes schema validation against `themes/theme.schema.json`.
2. Verify all tokens referenced in `components/components.manifest.json` are covered.
3. Run the `quality-check` skill on a sample component rendered with the new theme.
4. If validation fails: report missing tokens or contrast violations and iterate.

### Step 7 — Register and Document

1. Update `manifest.json` to include the new theme entry.
2. Add a brief description of the theme's intended use-case and brand rationale.
3. If both light and dark variants are created, cross-reference them in each file.
4. Inform the user the theme is ready for use with activation instructions.
