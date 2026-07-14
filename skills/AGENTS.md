# ProdigeUI Skill Registry

This file indexes all available ProdigeUI skills. Each skill is a folder containing a `SKILL.md` file with frontmatter (name, description, triggers) and workflow instructions.

## How to Use

1. Match your current need against the triggers listed below.
2. Open the corresponding skill folder.
3. Read the SKILL.md and follow the workflow steps.
4. Reference the artifacts pointed to by each step.
5. Validate output with the Quality Gate before delivering.

## Available Skills

### prodige-ui-end-to-end
- **Description:** Comprehensive UI/UX design skill from brief to implementation
- **Triggers:** "design ui", "create interface", "build component", "ui end to end", "design from brief"
- **Folder:** `skills/prodige-ui-end-to-end/`

### quality-check
- **Description:** Evaluates design output against Quality Gate criteria and anti-AI-slop checklist
- **Triggers:** "check quality", "run quality gate", "audit design", "anti slop check"
- **Folder:** `skills/quality-check/`

### token-management
- **Description:** Manages the token system (add, modify, validate tokens across layers)
- **Triggers:** "manage tokens", "add token", "update token", "validate tokens"
- **Folder:** `skills/token-management/`

### theme-creation
- **Description:** Creates a new theme with palette selection, token mapping, and contrast verification
- **Triggers:** "create theme", "new theme", "custom theme", "brand theme"
- **Folder:** `skills/theme-creation/`

### responsive-design
- **Description:** Guides creation of responsive layouts across breakpoints with grid, fluid typography, and touch-target handling
- **Triggers:** "responsive design", "responsive layout", "breakpoints", "mobile layout", "adaptive grid"
- **Folder:** `skills/responsive-design/`

### accessibility-audit
- **Description:** Comprehensive WCAG 2.1 AA audit covering contrast, keyboard, ARIA, screen readers, focus, and motion preferences
- **Triggers:** "accessibility audit", "wcag check", "a11y audit", "check accessibility", "screen reader test"
- **Folder:** `skills/accessibility-audit/`

### color-palette-generation
- **Description:** Generates brand color palettes from a base hue with tonal scales, semantic roles, and contrast verification
- **Triggers:** "generate palette", "color palette", "create colors", "brand colors", "tonal scale"
- **Folder:** `skills/color-palette-generation/`

### typography-system
- **Description:** Designs a complete typography system with modular scale, line-heights, letter-spacing, and fluid type
- **Triggers:** "typography system", "type scale", "font system", "typographic scale", "setup typography"
- **Folder:** `skills/typography-system/`

### layout-composition
- **Description:** Composes page layouts using grid systems and atomic design with spacing rhythm and hierarchy
- **Triggers:** "layout composition", "compose layout", "page layout", "grid layout", "design layout"
- **Folder:** `skills/layout-composition/`

### motion-choreography
- **Description:** Designs multi-element animation sequences with personality presets, stagger timing, and a11y fallbacks
- **Triggers:** "motion choreography", "animation sequence", "design animation", "stagger animation", "motion design"
- **Folder:** `skills/motion-choreography/`

### motion-review
- **Description:** Reviews animation/motion code against a high craft bar (easing, frequency, origin, interruptibility, GPU, a11y). Default to flagging; approval is earned.
- **Triggers:** "review animations", "review motion", "motion review", "check animations", "is this animation good"
- **Folder:** `skills/motion-review/`

### design-lens
- **Description:** Applies a focused adjustment lens to an EXISTING design (bolder/quieter/distill/harden/polish/animate/colorize/typeset/layout/delight/overdrive/clarify/adapt/optimize) instead of rebuilding.
- **Triggers:** "make it bolder", "tone it down", "fix the spacing", "colors feel flat", "polish this", "distill this", "harden this", "improve the copy", "make it responsive", "optimize performance"
- **Folder:** `skills/design-lens/`

### design-review
- **Description:** Peer reviews design output across hierarchy, spacing, tokens, typography, color, and motion dimensions
- **Triggers:** "design review", "review design", "critique design", "design feedback", "peer review"
- **Folder:** `skills/design-review/`

### dark-mode-adaptation
- **Description:** Converts light designs to proper dark mode with luminance inversion, elevation, and contrast validation
- **Triggers:** "dark mode", "dark theme", "convert to dark", "dark mode adaptation", "night mode"
- **Folder:** `skills/dark-mode-adaptation/`

---

> **Adding a new skill:** Create a folder under `skills/` with a `SKILL.md` file containing the required frontmatter (name, description, triggers). Then add an entry to this registry. Do not modify existing entries.
