
---
name: prodige-ui-end-to-end
description: |
  Comprehensive UI/UX design skill that guides an AI agent from brief to implementation using ProdigeUI. Covers brief analysis, Design Read declaration, token selection, component composition, and Quality Gate validation.
triggers:
  - "design ui"
  - "create interface"
  - "build component"
  - "ui end to end"
  - "design from brief"
---

# ProdigeUI End-to-End: Brief to Implementation

This skill guides you through the complete UI/UX design workflow using ProdigeUI artifacts.
Follow each step sequentially. Every design decision must be grounded in the Token_System,
validated against Design_Rules, and pass the Quality_Gate before delivery.

---

## Step 1: Brief Analysis

**Goal:** Understand the user request and establish design context.

Actions:
1. Read the user request carefully. Identify:
   - **Use-case type** (SaaS, landing page, ecommerce, portfolio, HRIS, agentic app)
   - **Target audience** (technical users, general public, enterprise, etc.)
   - **Platform** (desktop, web, mobile, or multi-platform)
   - **Key features/screens** requested
2. Check `use-cases/<type>/guide.md` for the matching use-case pattern guidance
3. Identify constraints: performance budget, accessibility needs, brand direction
4. Summarize the brief analysis before proceeding

**Output:** Brief summary document with use-case, audience, platform, key screens, and constraints.

0. Read `craft/model-robust-generation.md` and keep its six-line Generation Contract in
   working context. This is mandatory on Kiro, DeepSeek, and other models prone to following
   the nearest visual example instead of completing the product-derivation steps.
   Apply its Typography enhancement layer after the composition is stable; typography may
   refine hierarchy and measure but must not replace the successful page structure.
   Complete its five-decision creative checkpoint before implementation and its render-truth
   checkpoint after implementation. These checkpoints assess reasoning and rendered quality;
   they must never be converted into benchmark geometry or a fixed section recipe.
   Also read `canonical/generation.contract.json`. Record its six required decisions,
   especially `typeJobs` and `closingSurface`, in working context. The final Quality Gate must
   prove that the selected fonts rendered and the closing CTA continues an established color
   role rather than inventing a new one.

   Read `canonical/accepted-quality.profile.json` immediately after the generation contract.
   When the brief matches `operationalProduct` or `expressiveStudio`, transfer its semantic
   quality invariants into the six decisions. Do not read or imitate benchmark HTML: the
   profile explicitly forbids benchmark geometry, copy, section order, dimensions, and color
   retrieval. A fresh no-reference run must still preserve the selected profile's value
   mechanism, credible artifact, type-role discipline, palette commitment, rhythm, and close.

5. **Route: invent vs reach for a real system.** Read `craft/design-system-routing.md`.
   If design SERVES the product (dashboard, admin, enterprise, regulated), consider an
   official design system (Fluent/Carbon/Material/Radix/shadcn/govuk/uswds) before building
   a bespoke token layer. If design IS the product (landing, portfolio, brand), invent with
   `craft/`. Record the decision; it changes Steps 3â€“4.

---

## Step 2: Design Read Declaration

**Goal:** Establish the aesthetic direction and calibrate the Three Dials.

Actions:
1. Declare the **aesthetic direction** (e.g., minimal-professional, bold-creative, warm-friendly)
2. Set the **Three Dials** based on use-case and audience:
   - `DESIGN_VARIANCE` (0.0-1.0): How much variation from standard patterns
     - 0.0-0.3 = Conservative (enterprise, HRIS)
     - 0.4-0.6 = Balanced (SaaS, ecommerce)
     - 0.7-1.0 = Expressive (portfolio, landing page)
   - `MOTION_INTENSITY` (0.0-1.0): Animation presence and complexity
     - 0.0-0.3 = Subtle (enterprise, accessibility-first)
     - 0.4-0.6 = Moderate (SaaS, ecommerce)
     - 0.7-1.0 = Dynamic (portfolio, agentic app)
   - `VISUAL_DENSITY` (0.0-1.0): Information density per viewport
     - 0.0-0.3 = Spacious (landing page, portfolio)
     - 0.4-0.6 = Balanced (SaaS, ecommerce)
     - 0.7-1.0 = Dense (HRIS, data-heavy dashboards)
3. Document the rationale for each dial setting
4. Declare display, body, and annotation type jobs before choosing font names
5. Declare the closing CTA surface role and which existing signal/primary token it resolves

**Output:** Design Read with aesthetic direction and Three Dials values with rationale.

**References:** `design-rules/design-rules.md`, `design-rules/structure.rules.json`

---

## Step 3: Token Selection

**Goal:** Choose or customize a theme from the Theme_Catalog.

Actions:
1. Review available themes in `themes/` directory
2. Select the closest matching theme for the use-case:
   - Check `themes/light.theme.json` or `themes/dark.theme.json` as base
   - Check use-case-specific themes (e.g., `themes/saas-professional.theme.json`)
3. If customization is needed, follow `themes/creating-a-theme.md`
4. **Verify contrast compliance:**
   - Normal text: ratio >= 4.5:1 against background
   - Large text (>=18pt or >=14pt bold): ratio >= 3:1
   - Interactive elements and focus indicators: ratio >= 3:1
5. Validate all semantic tokens required by components are defined
6. Reference `tokens/semantic.tokens.json` for available token roles

**Output:** Selected/customized theme file with verified contrast ratios.

**References:** `themes/theme.schema.json`, `themes/creating-a-theme.md`, `tokens/semantic.tokens.json`

---

## Step 4: Component Selection

**Goal:** Identify needed components from the Component_Library.

Actions:
1. Map each screen/feature from the brief to required components
2. Consult `components/components.manifest.json` for available components:
   - Atoms: Button, Input, Icon, Text, Badge, Toggle, Checkbox, Radio
   - Molecules: Field, Card, MenuItem, SearchBar, Tooltip
   - Organisms: Form, Navbar, Table, Modal, Sidebar, Footer
3. For each component, verify:
   - Required variants match the use-case
   - All states are accounted for (default, hover, focus, active, disabled, error)
   - ARIA roles and keyboard interactions are documented
4. Follow `components/composition-guidelines.md` for combining atoms into molecules/organisms
5. All component values must reference Design_Token only (no raw values)

**Output:** Component inventory with variants, states, and composition plan.

**References:** `components/components.manifest.json`, `components/composition-guidelines.md`

---

## Step 5: Layout Design

**Goal:** Apply the grid system and structural rules from Design_Rules.

Actions:
1. Define the page grid using `design-rules/layout.rules.json`:
   - Grid columns (12-column default)
   - Breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)
   - Spacing derived from base unit (consistent scale)
2. Apply structure rules from `design-rules/structure.rules.json`:
   - Visual hierarchy: heading levels, content grouping, whitespace rhythm
   - Navigation patterns: max items per level, menu depth limits
   - Content grouping: sections, cards, logical clusters
3. Respect `VISUAL_DENSITY` dial setting for spacing and content per viewport
4. Use spacing tokens from `tokens/semantic.tokens.json` (space.xs through space.3xl)
5. Ensure responsive behavior across all three breakpoints

**Output:** Layout specification with grid, spacing, and structure decisions.

**References:** `design-rules/layout.rules.json`, `design-rules/structure.rules.json`, `tokens/semantic.tokens.json`

---

## Step 6: Motion Design

**Goal:** Select motion personality and presets from the Motion_Library.

Actions:
1. Review motion principles in `motion/principles.md`
2. Select appropriate presets based on `MOTION_INTENSITY` dial:
   - Enter/exit animations: `motion/presets/enter-exit.json`
   - State transitions: `motion/presets/state-transition.json`
   - Hover/focus effects: `motion/presets/hover-focus.json`
   - Scroll-based animations: `motion/presets/scroll-based.json`
3. All motion values reference `motion/motion.tokens.json` (no hardcoded durations/easings)
4. Ensure reduce-motion compliance:
   - Non-essential animations disabled when `prefers-reduced-motion` is active
   - Essential animations limited to <=100ms, no position-based movement
5. Each animation choice must link to a documented motion principle
6. **Apply interaction-level motion craft** from `craft/patterns/motion-craft.md`: committed
   easing curves (not weak built-ins; `ease-in` banned on UI), entrance physics (never
   `scale(0)` â†’ `scale(0.95)`+opacity), origin-aware popovers (modals exempt), interruptible
   transitions for rapid UI, asymmetric enter/exit, GPU-only properties. **No animation on
   keyboard-triggered or 100+/day actions.**

**Output:** Motion specification with selected presets, curves, and reduce-motion fallbacks.

**References:** `craft/patterns/motion-craft.md`, `motion/principles.md`, `motion/choreography.md`, `motion/motion.tokens.json`, `motion/presets/`, `skills/motion-review/SKILL.md`

---

## Step 7: Implementation

**Goal:** Generate code or design specification using tokens, components, and rules.

Actions:
1. Assemble the final implementation combining:
   - Theme tokens (CSS variables from `tokens/build/tokens.css`)
   - Component markup with proper ARIA attributes
   - Motion classes/styles referencing motion tokens
   - Layout grid and responsive structure
2. Ensure every visual value comes from the token system:
   - Colors: `var(--color-surface-primary)`, `var(--color-text-primary)`, etc.
   - Spacing: `var(--space-md)`, `var(--space-lg)`, etc.
   - Typography: `var(--font-size-base)`, `var(--font-weight-medium)`, etc.
   - Radius: `var(--radius-md)`, etc.
3. Apply component states and interactions per manifest specification
4. Include accessibility attributes: roles, aria-labels, keyboard handlers, focus management
5. Reference assets via unique IDs from `assets/assets.manifest.json` where needed
6. **Build interactive parts with the modern patterns** in `craft/patterns/interaction-patterns.md`:
   native `<dialog>`/`inert` for modals, Popover API / anchor positioning / portal for
   dropdowns (escape overflow clipping), `:focus-visible` rings, roving tabindex for groups,
   skip links, visible form labels + validate-on-blur + `aria-live` errors, undo-toast over
   confirm dialogs, chart empty/loading/error states with tabular numbers.

**Output:** Complete implementation (code, markup, or detailed spec) ready for validation.

**References:** `tokens/build/tokens.css`, `components/components.manifest.json`, `assets/assets.manifest.json`

---

## Step 8: Quality Gate Validation

**Goal:** Run the anti-AI-slop checklist and criteria.json evaluation.

Actions:
1. Run evaluation against `quality-gate/criteria.json`:
   - **Token compliance:** No raw/hardcoded values (hex, px, rem) outside token system
   - **Design Rules adherence:** Typography scale, grid alignment, contrast ratios
   - **Theme consistency:** All values sourced from active theme tokens
   - **Accessibility:** WCAG 2.1 AA â€” contrast, keyboard, ARIA, focus indicators
2. Run `quality-gate/anti-ai-slop.checklist.md` indicators:
   - Consistent spacing rhythm (no arbitrary margins)
   - Intentional visual hierarchy (not random sizing)
   - Purposeful motion (every animation has documented reason)
   - Meaningful whitespace (not filler)
   - Coherent color usage (roles, not decoration)
   - Typography discipline (scale adherence, limited weights)
   - Computed font truth (the intended display family actually rendered)
   - Type-role integrity (display, body, and annotation keep distinct repeated jobs)
   - Closing CTA continuity (no new or muddy near-match hue at the final section)
3. For each criterion:
   - Status: PASS or FAIL
   - If FAIL: identify the issue, location, and actionable recommendation
4. Overall result: PASS only if ALL criteria pass
5. If any criterion fails, iterate back to the relevant step and fix before delivery

**Output:** Quality Gate report (pass/fail per criterion, overall status, recommendations).

**References:** `quality-gate/criteria.json`, `quality-gate/anti-ai-slop.checklist.md`, `quality-gate/report.schema.json`

---

## Workflow Summary

```
Brief Analysis â†’ Design Read â†’ Token Selection â†’ Component Selection
     â†’ Layout Design â†’ Motion Design â†’ Implementation â†’ Quality Gate
```

If Quality Gate fails, loop back to the step that produced the violation and fix it.
Only deliver the final output once all Quality Gate criteria pass.
