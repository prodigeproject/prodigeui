
---
name: prodige-ui-end-to-end
description: |
  Comprehensive product-experience and UI/UX design skill that guides an AI agent from brief to implementation using ProdigeUI. Covers product opportunity, decisive user flow, Design Read declaration, token selection, component composition, state design, and Quality Gate validation.
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

**Output:** Brief summary document with use-case, audience, platform, known product facts, requested scope, key screens, and constraints. Unknowns are explicitly marked as assumptions.

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

   Execute `canonical/generation.contract.json#oneBuildPreflight` before emitting any
   implementation. Pre-resolve contrast pairs, type and weight budgets, 44x44 target boxes,
   focal-subject scale, mobile containment, reduced motion, font delivery, and encoding so
   the first artifact is the acceptance candidate rather than a knowingly failing draft.

5. **Route: invent vs reach for a real system.** Read `craft/design-system-routing.md`.
   If design SERVES the product (dashboard, admin, enterprise, regulated), consider an
   official design system (Fluent/Carbon/Material/Radix/shadcn/govuk/uswds) before building
   a bespoke token layer. If design IS the product (landing, portfolio, brand), invent with
   `craft/`. Record the decision; it changes Steps 4–5.

---

## Step 2: Product Experience Strategy

**Goal:** Define the outcome, differentiator, decisive journey, and implementation scope before visual design.

Actions:
1. Read `craft/product-experience-architecture.md` and create a private Product Opportunity Record:
   - primary and supporting actors, trigger, job, desired outcome, and current alternative;
   - value mechanism, product differentiator, market conventions, risk, and truthful evidence;
   - facts versus assumptions. Do not invent pricing, customers, metrics, claims, inventory, or capability.
2. Classify the experience scope: campaign/discovery, commerce, high-consideration decision,
   trust-critical service, operational product, learning/habit, or cultural/editorial.
   State the smallest honest scope when the brief does not authorize a full product.
3. Map the primary flow: entry -> orientation -> evidence -> choice -> action -> feedback ->
   result -> next/return/recovery. Name the uncertainty resolved at each step.
4. Define a screen/region map and a state matrix. Include default and every applicable
   loading, empty, invalid/error, permission/eligibility, success, and returning-context state.
   Mark only genuinely inapplicable states `N/A` with a reason.
5. Test differentiation: if a direct alternative could reuse the same claim, proof, task order,
   and CTA unchanged, rework the value mechanism before choosing a visual direction.
6. Record the product/system decision: when to use a familiar design system, when a bespoke
   interaction is justified, and what must remain implementable under responsive, accessibility,
   privacy, performance, and localization constraints.

**Output:** Product Experience Record with outcome, differentiator, flow, screen/state scope,
market/risk rationale, evidence plan, and engineering handoff.

**References:** `craft/product-experience-architecture.md`, `craft/market-reference-calibration.md`, `craft/intent-driven-art-direction.md`, `craft/design-system-routing.md`

---

## Step 3: Market Reference Calibration

**Goal:** Learn the task and evidence grammar of the real market before choosing
page topology, visual language, or a media treatment.

Actions:
1. Read `craft/market-reference-calibration.md`. Inspect at least two current,
   direct experiences from the relevant category. Prefer the product's own site,
   app, purchase flow, service guide, or help centre over galleries and trend
   roundups.
2. Create a private Market Reference Read with the direct URLs and date observed,
   the user's real entry pattern, credible evidence grammar, commitment/risk,
   visual grammar as function, market convention to preserve, and the
   product-specific departure. Never copy a reference's copy, assets, geometry,
   or identity.
3. Select one experience archetype and state which one owns the first viewport:
   operational control surface, high-consideration exploration, editorial
   commerce, trust/care navigation, place/visit, work-led studio, learning
   practice loop, or travel planning.
4. Declare the dominant proof, first-viewport compositional engine, and rejected
   generic fallback. A headline, split panel, dashboard, gallery, or form is
   permitted only if it helps the selected task.
5. Compare the proposed direction with the previous unrelated artifact. If four
   or more of topology, type behavior, palette posture, media role, density,
   action placement, and section sequence remain unchanged without a product
   reason, return to the Market Reference Read.

**Output:** Market Reference Read with references, archetype, dominant proof,
first-viewport engine, convention to preserve, product-specific departure, and
rejected generic fallback.

**References:** `craft/market-reference-calibration.md`

---

## Step 4: Design Read Declaration

**Goal:** Establish the aesthetic direction and calibrate the Three Dials.

Actions:
1. Complete the Intent & Art Direction Brief using the Product Experience Record and Market
   Reference Read. Declare the experience thesis, selected archetype, dominant proof,
   first-viewport engine, layout family, media role, product-specific departure, rejected
   generic fallback, and what visual choices make the product mechanism easier to understand.
2. Set `DESIGN_VARIANCE`, `MOTION_INTENSITY`, and `VISUAL_DENSITY` from decision risk,
   reading/comparison load, content maturity, and emotional register—not from the category name.
   Give each dial a one-sentence product rationale and a failure risk if it is too high or low.
3. Declare display, body, annotation, and data type jobs before choosing font names. Name the
   actual font source or deliberate system stack and fallback; do not write a font name that is
   unavailable in the implementation.
4. Create the Judgement Record in `craft/design-engineering-quality.md` for any material
   typography, palette, header, action, or interaction choice. Render competing candidates when
   the product rationale is uncertain, then record the selected and rejected treatment.
5. Declare the closing CTA surface role and which existing signal/primary token it resolves.
   Define its idle, pressed, pending, success/changed, error, and recovery states before it is
   styled.
6. Make an Exposure Map before composing the first viewport. Mark each region as always visible,
   decision-time, action-result, exception/recovery, or returning context. Keep the full state
   contract reachable, but do not make hypothetical status, helper, or recovery panels permanent
   visual furniture unless safety, cost, eligibility, or the current commitment requires them.
7. Re-run the differentiation and identity-collapse tests after writing the visual thesis. If
   the same art direction would still fit an unrelated product, return to the Product
   Experience Record and Market Reference Read.

**Output:** Design Read with aesthetic direction, Three Dials values, and an Exposure Map with rationale.

**References:** `craft/design-engineering-quality.md`, `design-rules/design-rules.md`, `design-rules/structure.rules.json`

---

## Step 5: Intent-driven token synthesis

**Goal:** Derive semantic roles from the Intent & Art Direction Brief instead of
selecting a sector theme or hidden preset.

Actions:
1. Read `craft/intent-driven-art-direction.md` and record the selected experience
   route, archetype, proof/media strategy, first-viewport engine, layout family,
   type jobs, product-specific departure, and rejected alternative.
2. Read `themes/generative-theme-synthesis.md` and synthesize surface, content,
   signal, border, focus, typography, and spatial roles for this product.
3. Re-derive the values when product, target market, or user job changes; do not
   copy a prior theme name, palette, or page geometry.
4. **Verify contrast compliance:**
   - Normal text: ratio >= 4.5:1 against background
   - Large text (>=18pt or >=14pt bold): ratio >= 3:1
   - Interactive elements and focus indicators: ratio >= 3:1
5. Validate all semantic tokens required by components are defined
6. Reference `tokens/semantic.tokens.json` for role names and the generated token boundary

**Output:** Intent-linked semantic token record with verified contrast ratios.

**References:** `themes/theme.schema.json`, `themes/creating-a-theme.md`, `tokens/semantic.tokens.json`

---

## Step 6: Component Selection and State Contracts

**Goal:** Identify needed components from the Component_Library.

Actions:
1. Map each flow step, screen/region, and state from the Product Experience Record to required components
2. Consult `components/components.manifest.json` for available components:
   - Atoms: Button, Input, Icon, Text, Badge, Toggle, Checkbox, Radio
   - Molecules: Field, Card, MenuItem, SearchBar, Tooltip
   - Organisms: Form, Navbar, Table, Modal, Sidebar, Footer
3. For each component, verify:
   - Required variants match the use-case
   - All applicable states are accounted for (default, hover, focus, active, disabled, loading, empty, error, permission, success)
   - ARIA roles and keyboard interactions are documented
4. Follow `components/composition-guidelines.md` for combining atoms into molecules/organisms
5. For drawers, sheets, toasts, tabs, and contextual overlays, define interruption, focus,
   keyboard, reduced-motion, and compact-viewport behavior with
   `craft/design-engineering-quality.md`; do not approve a visually static stand-in as a
   component contract.
6. All component values must reference Design_Token only (no raw values)

**Output:** Component inventory with variants, state contracts, flow ownership, and composition plan.

**References:** `craft/design-engineering-quality.md`, `components/components.manifest.json`, `components/composition-guidelines.md`

---

## Step 7: Information Architecture and Layout Design

**Goal:** Apply the grid system and structural rules from Design_Rules.

Actions:
1. Define page/screen topology from the decisive flow and selected experience archetype using `design-rules/layout.rules.json`:
   - Choose grid columns, rails, stacked task steps, gallery sequence, comparison matrix, or app shell from content relationships; 12 columns are an option, not a default
   - Breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)
   - Spacing derived from base unit (consistent scale)
2. Apply structure rules from `design-rules/structure.rules.json`:
   - Visual hierarchy: heading levels, content grouping, whitespace rhythm
   - Navigation patterns: max items per level, menu depth limits
   - Content grouping: sections, cards, logical clusters
3. Respect the documented density rationale for spacing and content per viewport; do not hide a required task merely to preserve a sparse hero
4. Use spacing tokens from `tokens/semantic.tokens.json` (space.xs through space.3xl)
5. Choose and document header topology from the persistent user context. On compact viewports,
   replace unavailable navigation with a task-appropriate menu, drawer, search, or narrowed
   scope rather than merely hiding links.
6. Ensure responsive behavior across all three breakpoints

**Output:** Information architecture and layout specification with flow stage, grid/topology, spacing, evidence, and action decisions.

**References:** `design-rules/layout.rules.json`, `design-rules/structure.rules.json`, `tokens/semantic.tokens.json`

---

## Step 8: Motion and Feedback Design

**Goal:** Select motion personality and presets from the Motion_Library.

Actions:
1. Review motion principles in `motion/principles.md`
2. Select appropriate presets from the feedback, explanation, and orientation needs recorded in the flow; `MOTION_INTENSITY` calibrates those decisions rather than selecting a category default:
   - Enter/exit animations: `motion/presets/enter-exit.json`
   - State transitions: `motion/presets/state-transition.json`
   - Hover/focus effects: `motion/presets/hover-focus.json`
   - Scroll-based animations: `motion/presets/scroll-based.json`
3. All motion values reference `motion/motion.tokens.json` (no hardcoded durations/easings)
4. Ensure reduce-motion compliance:
   - Non-essential animations disabled when `prefers-reduced-motion` is active
   - Essential animations limited to <=100ms, no position-based movement
5. Each animation choice must link to a documented motion principle
6. **Apply interaction-level motion craft** from `craft/patterns/motion-craft.md` and
   `craft/design-engineering-quality.md`: committed
   easing curves (not weak built-ins; `ease-in` banned on UI), entrance physics (never
   `scale(0)` → `scale(0.95)`+opacity), origin-aware popovers (modals exempt), interruptible
   transitions for rapid UI, asymmetric enter/exit, GPU-only properties. **No animation on
   keyboard-triggered or 100+/day actions.**

**Output:** Motion specification with selected presets, curves, and reduce-motion fallbacks.

**References:** `craft/design-engineering-quality.md`, `craft/patterns/motion-craft.md`, `motion/principles.md`, `motion/choreography.md`, `motion/motion.tokens.json`, `motion/presets/`, `skills/motion-review/SKILL.md`

---

## Step 9: Implementation

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
6. When raster imagery has a semantic job, prefer user/project assets, then discover relevant
   official or license-cleared real media online when web access is available. Verify rights,
   download the selected asset locally, record source/license/retrieval metadata, and consume
   the local file. Invoke image generation only when no authentic source fits or the concept
   requires original artwork. Do not leave an image suggestion, gray placeholder, generic
   blob, or empty oversized card in its place.
7. **Build interactive parts with the modern patterns** in `craft/patterns/interaction-patterns.md`:
   native `<dialog>`/`inert` for modals, Popover API / anchor positioning / portal for
   dropdowns (escape overflow clipping), `:focus-visible` rings, roving tabindex for groups,
   skip links, visible form labels + validate-on-blur + `aria-live` errors, undo-toast over
   confirm dialogs, chart empty/loading/error states with tabular numbers.
8. Implement the primary flow and its declared recovery states, not just its first visual state.
   If delivery scope is a single page, make the handoff into the next state explicit and truthful.

**Output:** Complete implementation (code, markup, or detailed spec) ready for validation.

**References:** `tokens/build/tokens.css`, `components/components.manifest.json`, `assets/assets.manifest.json`

---

## Step 10: Quality Gate and Product Experience Review

**Goal:** Run the anti-AI-slop checklist and criteria.json evaluation.

Actions:
1. Run evaluation against `quality-gate/criteria.json`:
   - **Token compliance:** No raw/hardcoded values (hex, px, rem) outside token system
   - **Design Rules adherence:** Typography scale, grid alignment, contrast ratios
   - **Theme consistency:** All values sourced from active theme tokens
   - **Accessibility:** WCAG 2.1 AA — contrast, keyboard, ARIA, focus indicators
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
3. Complete `quality-gate/product-experience.review.template.json` from three lenses:
   UX designer, product designer, and design engineer. Review product-outcome clarity,
   differentiator, journey continuity, states/recovery, market/risk fit, responsive task
   continuity, implementation viability, reference calibration, archetype/task fit,
   visual-evidence/task fit, cross-domain identity separation, actual typography/font
   availability, colour-state contrast, header topology, action feedback/recovery,
   interruption/reduced-motion behavior, quiet-capability exposure, and the Judgement Record.
4. For every material visual product, verify that media is the relevant proof: a
   physical product, place, or people in context must not be replaced by abstract
   geometry, a color block, or a fake screenshot where a real/generated asset is
   available and appropriate.
5. For each criterion:
   - Status: PASS or FAIL
   - If FAIL: identify the issue, location, and actionable recommendation
6. Overall result: PASS only if all applicable automated and manual criteria pass.
7. If any criterion fails, iterate back to the relevant step and fix before delivery.
8. After any material system tuning, run the fresh-generation comparison protocol in
   `craft/design-engineering-quality.md`: freeze the baseline, generate independent
   baseline/tuned artifacts from the same evaluation set plus transfer briefs, and
   publish both gains and regressions before promoting the tuning.

**Output:** Quality Gate report (pass/fail per criterion, overall status, recommendations).

**References:** `quality-gate/criteria.json`, `quality-gate/anti-ai-slop.checklist.md`, `quality-gate/report.schema.json`

---

## Workflow Summary

```
Brief Analysis → Product Experience Strategy → Market Reference Calibration
     → Design Read → Token Selection → Component/State Contracts
     → Information Architecture → Motion/Feedback → Implementation
     → Quality Gate + Product Experience Review
```

If Quality Gate fails, loop back to the step that produced the violation and fix it.
Only deliver the final output once all Quality Gate criteria pass.
