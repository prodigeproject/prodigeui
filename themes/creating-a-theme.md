# Creating a Theme

## Overview

A **theme** in ProdigeUI is a set of overrides applied to the semantic color token values
defined in `_default.theme.json`. Themes do not rename or restructure tokens — they reassign
the primitive values that semantic tokens resolve to, producing a distinct visual identity
while preserving the token contract that all components depend on.

Every theme file conforms to `theme.schema.json` and lives in the `themes/` directory.

---

## Required Semantic Color Tokens

A complete theme MUST define a value for every semantic color token used by the
Component_Library. There are **24 required tokens** organized into functional groups:

### Base / Canvas

| Token | Role |
|---|---|
| `color.background` | Page-level background |
| `color.foreground` | Primary body text |
| `color.muted` | Muted/subtle background (e.g., aside, code block) |
| `color.muted-foreground` | Text on muted background |

### Surface

| Token | Role |
|---|---|
| `color.surface` | Card/panel surface |
| `color.surface-foreground` | Text on surface |

### Borders & Inputs

| Token | Role |
|---|---|
| `color.border` | Default border color |
| `color.input` | Input field border |
| `color.ring` | Focus ring color |

### Primary

| Token | Role |
|---|---|
| `color.primary` | Primary brand/action color |
| `color.primary-foreground` | Text on primary |

### Secondary

| Token | Role |
|---|---|
| `color.secondary` | Secondary action color |
| `color.secondary-foreground` | Text on secondary |

### Accent

| Token | Role |
|---|---|
| `color.accent` | Accent/highlight background |
| `color.accent-foreground` | Text on accent |

### Destructive

| Token | Role |
|---|---|
| `color.destructive` | Destructive/danger action |
| `color.destructive-foreground` | Text on destructive |

### Success

| Token | Role |
|---|---|
| `color.success` | Success state indicator |
| `color.success-foreground` | Text on success |

### Warning

| Token | Role |
|---|---|
| `color.warning` | Warning state indicator |
| `color.warning-foreground` | Text on warning |

### Info

| Token | Role |
|---|---|
| `color.info` | Informational state indicator |
| `color.info-foreground` | Text on info |

If any token is missing, theme validation fails and reports the missing token names.
Tokens not overridden in your theme fall back to `_default.theme.json` values and are
flagged as `incomplete` in the validation report.

---

## Theme Schema

Every theme file must conform to `themes/theme.schema.json`. The schema defines four fields:

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Unique theme identifier (e.g., `"brand-acme"`, `"dark"`) |
| `mode` | `"light"` or `"dark"` | Yes | Luminance classification (see Light vs Dark rules) |
| `extends` | string | No | Theme to inherit from. Defaults to `"_default"` |
| `overrides` | object | No | Map of semantic token name to primitive token reference or value |

Each key in `overrides` is a semantic token name (e.g., `color.primary`). Each value
is either a reference to a primitive token using dot-notation (e.g., `palette.primary.s600`)
or a direct color value.

---

## Steps to Create a Theme

### Step 1: Decide Mode (Light or Dark)

Determine whether your theme is **light** or **dark** based on luminance direction:

- **Light mode**: Background luminance is HIGHER than foreground (text) luminance.
  Example: white background (`#ffffff`) with dark text (`#0a0a0a`).
- **Dark mode**: Background luminance is LOWER than foreground (text) luminance.
  Example: near-black background (`#0a0a0a`) with light text (`#fafafa`).

Set the `mode` field accordingly. This classification is validated — if your `color.background`
and `color.foreground` contradict the declared mode, validation will fail.

### Step 2: Choose Your Primary Brand Color

Select a primary hue that represents your brand identity. This color drives:
- `color.primary` — buttons, links, active indicators
- `color.ring` — focus outlines

Generate a full shade scale (50–950) from this hue using a perceptually uniform color
space (e.g., OKLCH or HSLuv). A typical scale has 11 stops: s50, s100, s200, s300,
s400, s500, s600, s700, s800, s900, s950.

For light themes, use a mid-to-dark shade (s500–s700) as `color.primary`.
For dark themes, use a lighter shade (s300–s500) to maintain contrast against dark surfaces.

### Step 3: Generate a Neutral Scale (or Reuse Existing)

Neutrals form the backbone of your theme — backgrounds, borders, muted text. You can:

1. **Reuse** the built-in `palette.neutral` scale from `primitive.tokens.json`
2. **Create a custom neutral** with a slight tint from your primary hue for brand warmth

If creating a custom scale, ensure the stops span from very light (s50 ~ luminance 0.95+)
to very dark (s950 ~ luminance 0.05-) with smooth perceptual progression.

### Step 4: Map Semantic Roles to Your Palette

Assign each of the 24 semantic tokens to a primitive token reference. Use this mapping
logic:

**For light mode:**
- `color.background` → lightest neutral or white
- `color.foreground` → darkest neutral (s900–s950)
- `color.muted` → light neutral (s100)
- `color.muted-foreground` → mid neutral (s500)
- `color.surface` → white or lightest neutral
- `color.surface-foreground` → darkest neutral (s900–s950)
- `color.border`, `color.input` → light neutral (s200)
- `color.ring` → primary shade
- `color.primary` → primary mid-dark shade (s500–s600)
- `color.primary-foreground` → white (or lightest if primary is too light)
- Semantic pairs (destructive, success, warning, info) → status color + contrasting text

**For dark mode:**
- `color.background` → darkest neutral (s900–s950)
- `color.foreground` → lightest neutral (s50)
- `color.muted` → dark neutral (s800)
- `color.muted-foreground` → mid-light neutral (s400)
- `color.surface` → slightly lighter than background (s800–s900)
- `color.surface-foreground` → lightest neutral (s50)
- `color.border`, `color.input` → dark-mid neutral (s700)
- `color.ring` → primary lighter shade (s400)
- `color.primary` → primary lighter shade (s400) for readability
- `color.primary-foreground` → darkest neutral (s950)
- Semantic pairs → desaturated status color + high-contrast text

### Step 5: Verify Contrast Ratios

Every text/background pair MUST meet WCAG 2.1 AA minimums:

| Pair type | Minimum ratio |
|---|---|
| Normal text (< 18pt, or < 14pt bold) | **4.5:1** |
| Large text (>= 18pt, or >= 14pt bold) | **3:1** |
| Non-text UI components & state indicators | **3:1** |

Check these critical pairs at minimum:
- `color.foreground` against `color.background`
- `color.primary-foreground` against `color.primary`
- `color.destructive-foreground` against `color.destructive`
- `color.success-foreground` against `color.success`
- `color.warning-foreground` against `color.warning`
- `color.info-foreground` against `color.info`
- `color.muted-foreground` against `color.muted`
- `color.surface-foreground` against `color.surface`
- `color.accent-foreground` against `color.accent`

Use the relative luminance formula (WCAG 2.1):
```
L = 0.2126 * R + 0.7152 * G + 0.0722 * B
contrast_ratio = (L_lighter + 0.05) / (L_darker + 0.05)
```

### Step 6: Test with Component_Library Components

After creating your theme file, validate it against real components:

1. Run `validateTheme` to ensure all 24 tokens are defined
2. Run `checkThemeContrast` to verify WCAG compliance
3. Visually test with representative components: Button, Input, Card, Modal, Alert
4. Verify that disabled states remain visually distinct but muted
5. Confirm focus rings are visible against all surface colors

---

## Light vs Dark Mode Rules

| Aspect | Light mode | Dark mode |
|---|---|---|
| Background luminance | Higher than text | Lower than text |
| Primary shade | Use mid-dark (s500–s700) | Use lighter (s300–s500) |
| Surface vs background | Same or very close | Surface slightly lighter than background |
| Border visibility | Light borders (s200) on white | Mid borders (s600–s700) on dark |
| Shadow utility | Shadows visible and useful | Shadows less visible; rely on surface layering |
| Status colors | Use saturated variants | May need lighter/desaturated variants |
| Foreground text | Dark neutrals (s800–s950) | Light neutrals (s50–s200) |

Key principles:
- Dark mode is NOT simply an inversion of light mode values
- Dark mode backgrounds should avoid pure black (`#000000`) — use `s900`–`s950` neutrals
- Lighter shades of primary/status colors maintain readability on dark surfaces
- Reduce surface contrast range in dark mode to avoid eye strain

---

## Contrast Requirements (WCAG 2.1 AA)

ProdigeUI enforces the WCAG 2.1 Level AA accessibility standard for all themes:

### Minimum Ratios

- **4.5:1** — Normal text against its background. Normal text is defined as text smaller
  than 18pt (24px) or smaller than 14pt (18.67px) bold.
- **3:1** — Large text against its background. Large text is 18pt+ or 14pt+ bold.
- **3:1** — Non-text UI components (borders, icons, form controls) and graphical objects
  that convey meaning.

### What Gets Checked

The `checkThemeContrast` validator evaluates:
1. Every `-foreground` token against its paired background token
2. `color.border` against `color.background` and `color.surface`
3. `color.ring` against `color.background` and `color.surface`
4. `color.muted-foreground` against both `color.muted` and `color.background`

### Tips for Passing

- White text (`#ffffff`) needs a background of at least L=0.18 relative luminance (~`s600`+)
- Dark text (`#0a0a0a`) works on backgrounds up to L=0.40 relative luminance (~`s400`-)
- Warning yellow is tricky — pair with dark text (`s900`), never white
- Info blue and success green mid-shades may need foreground adjustment per mode

---

## Example: Creating a Brand Theme ("brand-ocean")

This walkthrough creates a dark theme for a fictional ocean-themed SaaS brand.

### 1. Define the mode

The brand uses dark interfaces. Mode: `"dark"`.

### 2. Choose primary color

Brand color: teal/ocean blue. Primary hue at HSL ~185. Generate a scale:
- `palette.ocean.s400` = `#22d3ee` (used for primary in dark mode)
- `palette.ocean.s500` = `#06b6d4`
- `palette.ocean.s600` = `#0891b2`

### 3. Neutral scale

Reuse the built-in `palette.neutral` scale — no brand tint needed for this case.

### 4. Map tokens

```json
{
  "name": "brand-ocean",
  "mode": "dark",
  "extends": "_default",
  "overrides": {
    "color.background": "palette.neutral.s950",
    "color.foreground": "palette.neutral.s50",
    "color.muted": "palette.neutral.s800",
    "color.muted-foreground": "palette.neutral.s400",
    "color.surface": "palette.neutral.s900",
    "color.surface-foreground": "palette.neutral.s50",
    "color.border": "palette.neutral.s700",
    "color.input": "palette.neutral.s700",
    "color.ring": "palette.ocean.s400",
    "color.primary": "palette.ocean.s400",
    "color.primary-foreground": "palette.neutral.s950",
    "color.secondary": "palette.secondary.s500",
    "color.secondary-foreground": "palette.white",
    "color.accent": "palette.neutral.s800",
    "color.accent-foreground": "palette.neutral.s100",
    "color.destructive": "palette.error.s500",
    "color.destructive-foreground": "palette.neutral.s50",
    "color.success": "palette.success.s500",
    "color.success-foreground": "palette.neutral.s950",
    "color.warning": "palette.warning.s500",
    "color.warning-foreground": "palette.neutral.s950",
    "color.info": "palette.ocean.s400",
    "color.info-foreground": "palette.neutral.s950"
  }
}
```

### 5. Verify contrast

| Pair | Ratio | Pass? |
|---|---|---|
| foreground (`#fafafa`) on background (`#0a0a0a`) | ~19.5:1 | Yes |
| primary-foreground (`#0a0a0a`) on primary (`#22d3ee`) | ~12.8:1 | Yes |
| muted-foreground (`#a3a3a3`) on muted (`#262626`) | ~5.6:1 | Yes |
| warning-foreground (`#0a0a0a`) on warning | ~10.5:1 | Yes |

All pairs exceed the 4.5:1 threshold.

### 6. Test with components

- Button (primary variant): teal background with dark text — legible and distinct
- Card: `s900` surface on `s950` background — subtle layering visible
- Alert (destructive): red background with light text — clear urgency signal
- Input focus: teal ring visible against dark surface

Theme passes validation. Save as `themes/brand-ocean.theme.json`.

---

## Common Mistakes

### 1. Missing tokens

Defining only the tokens you want to change and leaving others undefined. Every theme
MUST provide all 24 semantic color tokens (or explicitly extend a complete parent theme).
Missing tokens trigger validation failure.

### 2. Mode/luminance mismatch

Declaring `"mode": "dark"` but assigning a light color to `color.background` and a dark
color to `color.foreground`. The classifier checks actual luminance values — your declared
mode must match.

### 3. Insufficient contrast on status colors

Warning yellow (`#eab308`) paired with white text fails contrast. Always use dark text
(`s900`+) on yellow/amber backgrounds. Similarly, light green on white backgrounds fails.

### 4. Pure black backgrounds

Using `#000000` as background creates harsh contrast and reduces the ability to layer
surfaces. Use `s900`–`s950` neutrals instead for comfortable dark themes.

### 5. Ignoring the foreground pair rule

Every semantic color that can serve as a background (primary, secondary, accent,
destructive, success, warning, info) has a `-foreground` pair. These pairs must contrast
at 4.5:1 minimum. Forgetting to adjust foreground when changing the base color is the
most common contrast failure.

### 6. Referencing non-existent primitive tokens

Override values must reference tokens that exist in `primitive.tokens.json`. Referencing
`palette.ocean.s400` without first adding that token to the primitive layer causes
resolution failure.

### 7. Using raw hex values instead of token references

While the schema allows direct values, prefer referencing primitive tokens to maintain
consistency and enable centralized palette changes. Raw values bypass the token system's
change propagation guarantees.

### 8. Copying light token assignments into a dark theme

Light mode tokens do not transfer to dark mode. For example, using `palette.neutral.s200`
for borders works in light mode but produces invisible borders on a dark background.
Re-map each token considering the reversed luminance context.
