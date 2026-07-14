---
name: typography-system
description: |
  Designs a complete typography system including typeface selection, modular scale, line-heights, letter-spacing, fluid type, and readability validation.
triggers:
  - "typography system"
  - "type scale"
  - "font system"
  - "typographic scale"
  - "setup typography"
---

# typography-system

## Purpose

Design a comprehensive typography system that ensures consistent, readable,
and aesthetically coherent text across all components and viewports. Covers
typeface selection, modular scale definition, line-height tuning, letter-spacing
rules, responsive fluid type configuration, and readability validation.

## When to Use

- Setting up typography for a new design system or project
- Replacing or updating typefaces while maintaining scale relationships
- Adding a new text level (display, caption, overline) to an existing system
- Converting fixed type sizes to fluid responsive typography
- Auditing an existing type system for readability and consistency issues

## Workflow Steps

### Step 1 — Select Typefaces

1. Determine the number of typeface families needed (typically 1-2, max 3).
2. Choose a primary typeface for body/UI text: prioritize readability at small sizes.
3. Choose a secondary typeface for headings/display (if different from primary).
4. Consider monospace needs for code blocks or tabular data.
5. Evaluate typeface characteristics:
   - x-height and cap-height proportions
   - Available weights (at minimum: regular, medium, bold)
   - Language/character set coverage
   - Availability of variable font axis (weight, width, optical size)
6. Document fallback font stack for each family.
7. Verify licensing is compatible with intended deployment.

### Step 2 — Define Modular Scale

1. Choose a scale ratio based on content density and hierarchy needs:
   - Compact UI: 1.125 (Major Second) or 1.2 (Minor Third)
   - Standard: 1.25 (Major Third)
   - Editorial/marketing: 1.333 (Perfect Fourth) or 1.5 (Perfect Fifth)
2. Set the base size (typically 16px for body text).
3. Generate scale steps from the ratio:
   - xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl (minimum 7 steps)
4. Round values to whole pixels or sensible sub-pixel increments.
5. Map scale steps to semantic roles: body, caption, subheading, heading levels.
6. Document the computed sizes at each step.

### Step 3 — Set Line-Heights Per Level

1. Apply tighter line-heights for larger text (headings: 1.1-1.3).
2. Apply looser line-heights for smaller text (body: 1.5-1.7, caption: 1.4-1.5).
3. Use unitless values for line-height (not px) to scale with font-size.
4. Specific guidelines:
   - Display (3xl+): 1.1
   - Heading (xl-2xl): 1.2-1.3
   - Body (base-lg): 1.5-1.6
   - Caption/small (xs-sm): 1.4-1.5
5. Verify that multi-line text at each level has comfortable inter-line spacing.
6. Check that line-height values align to the spacing grid (4px or 8px baseline).

### Step 4 — Configure Letter-Spacing

1. Headings and display text: slightly tighter tracking (-0.01em to -0.02em).
2. Body text: default tracking (0em, use font's built-in spacing).
3. All-caps text (labels, overlines): looser tracking (+0.05em to +0.1em).
4. Small text (captions): optionally slightly looser (+0.01em).
5. Never apply positive tracking to lowercase body text.
6. Document letter-spacing values per semantic role.

### Step 5 — Define Responsive Fluid Type

1. Set minimum font-size for mobile viewport (e.g., base = 16px at 375px).
2. Set maximum font-size for desktop viewport (e.g., base = 18px at 1440px).
3. Use CSS clamp() for fluid interpolation between min and max.
4. Apply fluid scaling primarily to heading levels (body can remain fixed).
5. Formula: `clamp(min, preferred-vw-calc, max)`.
6. Verify the scale ratio is maintained at both extremes.
7. Test that heading hierarchy remains visually distinct at all viewport widths.

### Step 6 — Validate Readability

1. Check line length at each breakpoint: target 45-75 characters for body text.
2. Verify paragraph spacing is 0.5-1.0x the line-height.
3. Ensure sufficient contrast between heading levels (min 1.2x size difference).
4. Check font-weight differentiation: headings should be visually heavier.
5. Test with real content (not lorem ipsum) at every level to catch issues.
6. Verify numbers are legible in context (tabular vs proportional figures).
7. Document the complete type system as typography tokens in the token system.
8. Output final type scale with: name, size, line-height, weight, letter-spacing.
