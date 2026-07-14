---
sourceId: tailwindcss-motion-main
sourceType: repo
sourceName: "tailwindcss-motion-main"
sourceLocation: "Skill & Library/tailwindcss-motion-main"
appliedTo: []
---

## Structural Analysis

CSS custom property based animation system structured as a Tailwind CSS plugin. Architecture follows:

- **Plugin core** → Registers keyframes, utilities, and variants
- **Defaults layer** → Base duration (700ms), timing (cubic-bezier(.165,.84,.44,1))
- **Keyframes layer** → Named animation keyframes (fade, slide, spin, etc.)
- **Presets layer** → Composed animations from keyframe + timing + duration
- **Modifiers layer** → Size variants (sm/md/lg), loop control, delay

**Key technical patterns:**
- All animation properties exposed as `--motion-*` CSS custom properties
- `@property` declarations for type-safe custom properties (enables animation interpolation)
- Spring easing defined as `linear()` approximation functions (smooth, snappy, bouncy, bouncier, bounciest)
- Clean separation: enter animations vs exit animations vs loop animations
- Size variants apply perceptual multipliers (sm=0.5x, md=1x, lg=1.5x)

**Naming convention:** `motion-preset-*` for composed animations, `motion-*` for individual properties. Namespace prevents collision.

## Content Quality Audit

**Genuinely valuable content:**
- Named preset vocabulary: fade, slide, focus, blur, rebound, bounce, expand, shrink, pop, compress, shake, wiggle, pulse, wobble, seesaw, oscillate, stretch, float, spin, blink, typewriter — comprehensive library
- Spring easing curves as `linear()` functions (practical CSS implementation of spring physics)
- Perceptual size multipliers (not just scaling values, but how animation FEELS at different sizes)
- Enter/exit separation (important for mounting/unmounting flows)
- Default values are sensible (700ms is generous for most UI, cubic-bezier(.165,.84,.44,1) is a good deceleration curve)

**AI Slop indicators:**
- No rationale for WHY specific duration defaults were chosen (700ms is unusually long for UI — most guidelines suggest 200-400ms)
- No documentation explaining WHEN to use which preset (shake vs wiggle — what's the semantic difference?)
- Spring curve values lack explanation of what physical parameters they model
- No guidance on combining presets (can you layer fade + slide? what are conflicts?)
- Missing accessibility consideration (no prefers-reduced-motion in the plugin itself)

## Gap Analysis vs Theory

**Strengths:**
- Technical implementation of spring physics via `linear()` is state-of-the-art CSS
- Named presets prevent raw `@keyframes` proliferation
- Custom property approach enables runtime theme switching (aligns with ProdigeUI token system)

**Gaps vs theory:**
- 700ms default contradicts Nielsen's 100ms-400ms recommendation for UI feedback
- No purpose classification (which presets are for feedback? attention? navigation? celebration?)
- Missing Disney principles mapping (which preset embodies which principle?)
- No cognitive load consideration (too many simultaneous animations)
- No choreography/sequencing support (stagger, cascade, chain)
- No scroll-based presets (only time-based)
- Spring curves lack documentation of their damping/stiffness equivalents

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| Named preset vocabulary (20+ names) | Categorize by PURPOSE: feedback (shake, pulse), attention (bounce, pop), navigation (slide, fade), celebration (confetti, wobble). Add semantic intent metadata. |
| Spring easing as linear() | Document the physical model: smooth=high damping, bouncy=low damping. Map to use cases: smooth→subtle UI, bouncy→playful feedback. |
| CSS custom property pattern (`--motion-*`) | Adopt as ProdigeUI motion token CSS output format. Add layer: `--motion-*` references `--token-motion-*` (token layer → motion layer) |
| Size variants (sm/md/lg) | Add rationale: sm for peripheral/utility elements, md for primary content, lg for hero/emphasis. Map to component weight classes. |
| Default duration 700ms | OVERRIDE: Use research-backed defaults — 200ms for micro-interactions, 300ms for transitions, 500ms for page-level. 700ms only for complex choreographed sequences. |
| Enter/exit separation | Adopt but add asymmetry rule: exits should be 20-30% faster than enters (perception research: users tolerate slower appearances but not slow disappearances) |

## Adaptation Strategy

The CSS custom property architecture is directly adoptable for ProdigeUI's `tokens/build/tokens.css` output. The token → CSS variable pipeline:

```
motion.tokens.json → semantic.tokens.json (motion refs) → build/tokens.css (--motion-* variables)
```

The named presets become ProdigeUI motion preset JSON files, but with critical additions:
- Each preset gets a `purpose` field (feedback/attention/navigation/celebration/ambient)
- Each preset gets a `reducedMotion` variant
- Each preset gets a `principle` reference (linking to motion principles)
- Duration defaults are corrected based on perception research

The spring easing vocabulary (smooth/snappy/bouncy) is adopted as ProdigeUI's easing token naming — but with documented physical model parameters.

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| `--motion-*` custom property pattern | `tokens/build/tokens.css` | CSS variable naming for motion tokens | Consistent namespace; runtime switchable; theme-compatible |
| Named presets (fade, slide, pop, etc.) | `motion/presets/*.json` | Preset `name` values | Provides semantic vocabulary for AI agents instead of raw keyframe descriptions |
| Spring easing curves (smooth/snappy/bouncy) | `motion/motion.tokens.json` | `easing.spring.*` token definitions | Named spring curves with documented physical models |
| Size variants (sm/md/lg multipliers) | `motion/motion.tokens.json` | `duration.multiplier.*` tokens | Perceptual scaling tied to element importance/size |
| @property declarations | `tokens/build/tokens.css` | Type-safe custom property registration | Enables CSS animation interpolation of custom properties |
| Enter/exit separation | `motion/presets/enter-exit.json` | Separate `enter` and `exit` configs per preset | Asymmetric timing (exit faster) matches perception research |

## Points Copied

- CSS custom property naming pattern (`--motion-*` namespace)
- Named preset vocabulary as semantic animation language
- Spring easing naming (smooth, snappy, bouncy) as semantic aliases
- Size variant multiplier concept (sm/md/lg intensity levels)
- @property declaration pattern for type-safe custom properties
- Enter/exit animation separation

## Points Improved/Fixed

- Default duration corrected from 700ms to research-backed values (200-500ms range)
- Each preset assigned a purpose category (feedback/attention/navigation/celebration)
- Spring curves documented with physical model parameters (damping ratio, stiffness)
- Added prefers-reduced-motion variant for every preset
- Added combination/conflict rules (which presets can layer, which conflict)
- Added choreography support (stagger delay calculation per preset)

## Points Adapted

- Tailwind plugin architecture → ProdigeUI token build pipeline (JSON → CSS)
- Utility class approach → Token reference approach (components reference token names, not classes)
- Modifier system (sm/md/lg) → Multiplier tokens applied per component weight class
- Preset composition → Preset JSON files with explicit token references and principle links
- Loop animations → Separated into "ambient" category with strict performance budget
