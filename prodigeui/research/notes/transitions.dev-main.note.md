---
sourceId: transitions.dev-main
sourceType: repo
sourceName: "transitions.dev-main"
sourceLocation: "Skill & Library/transitions.dev-main"
appliedTo: []
---

## Structural Analysis

Collection of production-ready CSS transition snippets with agent skill packaging:

- **12+ named transitions:** card-resize, number-pop-in, notification-badge, text-states-swap, menu-dropdown, modal-open-close, panel-reveal, page-side-by-side, icon-swap, success-check, avatar-group-hover, error-state-shake
- **Self-contained format:** Each transition is a portable CSS snippet with:
  - Semantic CSS custom properties on `:root`
  - `t-*` namespaced classes (conflict-free)
  - `@media (prefers-reduced-motion: reduce)` guard built-in
- **Agent skill packaging:** Shipped as both CSS library and AI agent skill
- **Refine tool:** Live animation refinement capability
- **Build system:** `build/extract.mjs` for automatic extraction from source

**Architecturally sound patterns:**
- EVERY transition includes prefers-reduced-motion guard (accessibility baked-in, not bolted on)
- Custom property namespacing (`--pX-*`) prevents collision when multiple transitions coexist
- Self-contained snippets: each transition works independently (no shared dependencies)
- Skill packaging makes the same content consumable by AI agents
- Automatic extraction from source (single source of truth → multiple outputs)

## Content Quality Audit

**Genuinely valuable content:**
- Named, purpose-driven transitions: Each name indicates WHAT it does semantically:
  - `card-resize` → layout change feedback
  - `notification-badge` → attention signal
  - `modal-open-close` → overlay presence
  - `error-state-shake` → error feedback
  - `success-check` → positive confirmation
  - `menu-dropdown` → navigation reveal
- Built-in reduce-motion is EXEMPLARY — not a separate concern but integral to each snippet
- Custom property architecture enables theming: override `--pX-duration` to change timing without modifying keyframes
- Each snippet is COMPLETE (not a fragment that needs assembly)
- Transition names map directly to UI patterns (modal, card, menu, badge, etc.)

**AI Slop indicators: None.** Each transition is practical, production-ready, accessible, and self-contained. The naming is semantic, the structure is consistent, and reduce-motion is never forgotten.

## Gap Analysis vs Theory

**Strengths:**
- Purpose-driven naming (transitions named for WHAT they do, not HOW they look)
- Accessibility-first (reduce-motion is structural, not optional)
- Custom property approach enables token-like theming
- Self-contained architecture prevents dependency coupling
- Maps to real UI patterns (modals, cards, menus — actual components)

**Gaps vs theory:**
- Only 12 transitions — doesn't cover all common patterns (loading, drag-drop, collapse, tab-switch, toast)
- No documented easing rationale (why THESE specific curves for THESE transitions?)
- No duration guidelines (what range is appropriate for each?)
- No choreography/sequencing documentation (what if two transitions overlap?)
- No performance documentation (which are GPU-accelerated? layout-triggering?)
- No mobile-specific variants (touch feedback differs from hover feedback)
- Custom property names (`--pX-*`) use numeric prefix — not as semantic as possible

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| Named transitions mapped to UI patterns | Expand coverage: add loading-skeleton, tab-switch, collapse-expand, toast-appear, drag-feedback, scroll-reveal, skeleton-shimmer. Every common UI pattern needs a transition. |
| Built-in prefers-reduced-motion | Adopt as MANDATORY pattern in ProdigeUI: every motion preset MUST include reduce-motion variant. Enforce via Quality_Gate criterion. |
| CSS custom property architecture | Adopt but improve naming: use semantic names (`--modal-duration`, `--card-ease`) instead of numeric prefixes (`--p1-*`, `--p2-*`). |
| Self-contained snippet format | Adapt: ProdigeUI presets are also self-contained but reference shared tokens. Balance between independence and consistency (tokens provide the consistency). |
| Skill packaging for AI consumption | Adopt dual-format: same motion content available as both structured JSON (for token system) and consumable skill snippets (for agent context). |
| Automatic extraction (build/extract.mjs) | Adapt: ProdigeUI token build pipeline extracts CSS from JSON token definitions (same principle: single source → multiple outputs). |

## Adaptation Strategy

This repo is the closest to ProdigeUI's desired motion preset format — each transition IS effectively a named motion preset with built-in accessibility. The adaptation:

1. **Named transitions** → Direct mapping to `motion/presets/*.json` entries. Each entry named for its UI pattern.
2. **CSS custom property architecture** → Validates ProdigeUI's token-to-CSS approach. Motion tokens compile to CSS custom properties.
3. **Reduce-motion guard** → Mandatory field in every ProdigeUI preset (`reducedMotion` variant).
4. **Self-contained snippets** → ProdigeUI presets are also self-documenting units, but they reference shared tokens for consistency.
5. **Skill packaging** → ProdigeUI is inherently a skill package; this validates the approach.

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| Named transitions (modal-open-close, card-resize, etc.) | `motion/presets/*.json` | Preset entries named per UI pattern | Semantic naming enables agent to select by intent, not by visual description |
| CSS custom property architecture | `tokens/build/tokens.css` | Motion custom properties output | Custom properties enable runtime theming and override |
| Mandatory prefers-reduced-motion | `motion/presets/*.json` + `quality-gate/criteria.json` | `reducedMotion` field + QG criterion | Accessibility baked in, enforced by Quality_Gate |
| Self-contained snippet pattern | `motion/presets/*.json` | Each preset fully specified (not fragments) | Complete presets prevent agents from generating incomplete animations |
| t-* class namespace | `motion/presets/*.json` | Class naming convention documentation | Namespace prevents CSS conflicts in consuming projects |
| Build/extract pattern (single source → outputs) | Token build pipeline | `tokens/*.json` → `tokens/build/tokens.css` | Single source of truth with derived outputs |

## Points Copied

- Named transitions mapped to specific UI patterns (modal, card, badge, menu, etc.)
- Mandatory prefers-reduced-motion guard in every animation (accessibility-first)
- CSS custom property architecture for theming/overriding
- Self-contained, complete animation units (not fragments requiring assembly)
- Dual-format delivery (CSS library + AI skill content)
- Single source → automatic extraction build pattern

## Points Improved/Fixed

- Expanded from 12 to comprehensive coverage of all common UI patterns
- Custom property naming improved from numeric (`--p1-*`) to semantic (`--modal-*`, `--card-*`)
- Added explicit duration/easing rationale documentation per transition
- Added performance metadata (GPU-accelerated vs layout-triggering)
- Added mobile-specific variants where touch interaction differs
- Added choreography rules (what happens when transitions overlap)

## Points Adapted

- Standalone CSS snippets → Token-referencing JSON presets (consistent with ProdigeUI's token system)
- Class-based application → Component-to-preset mapping in manifest
- Skill packaging format → ProdigeUI skill/AGENTS.md integration
- Build/extract.mjs → ProdigeUI JSON-to-CSS token build pipeline
- Refine tool concept → Quality_Gate motion review criteria (different mechanism, same goal)
