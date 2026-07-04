---
sourceId: theatre-main
sourceType: repo
sourceName: "theatre-main"
sourceLocation: "Skill & Library/theatre-main"
appliedTo: []
---

## Structural Analysis

Animation timeline editor/sequencer for the web — conceptually similar to After Effects timeline:

- **Monorepo structure:** Lerna-managed packages
- **Core packages:** Studio (visual editor), Core (runtime engine), R3F (React Three Fiber integration)
- **Paradigm:** Timeline/sequence-based animation (keyframes on a timeline, not declarative transitions)
- **Testing:** Jest for unit tests
- **Examples folder:** Demo implementations showing usage patterns

**Architecturally sound patterns:**
- Separation of editor (Studio) from runtime (Core) — design-time vs runtime split
- Package-based architecture with clear responsibilities per package
- Timeline paradigm enables complex choreography (multiple properties animated in parallel on a time axis)
- Visual editor concept (GUI for animation authoring) represents the gold standard of animation tooling
- Monorepo with shared types/utilities

**Architectural considerations:**
- Heavy framework (not lightweight utility)
- Visual editor is development-time tool (not consumed at runtime)
- Timeline approach excels at choreography but is overkill for micro-interactions
- React-specific integrations limit portability

## Content Quality Audit

**Genuinely valuable content:**
- Timeline/sequencer paradigm: Animations composed on a time axis with:
  - Multiple parallel tracks (different properties animate simultaneously)
  - Keyframes at specific points in time
  - Easing between keyframes (per-segment, not global)
  - Play/pause/seek controls (testable, previewable)
- Design-time vs runtime separation: What you edit (visual, interactive) vs what ships (lightweight, optimized)
- Sequence concept: Named sequences group related animations (entrance sequence, exit sequence, hover sequence)
- Per-segment easing: Each keyframe-to-keyframe transition can have its own easing (not one easing for entire animation)

**AI Slop indicators:**
- Primarily implementation code — no motion design documentation or principles
- No guidance on WHEN to use timeline approach vs simpler CSS transitions
- No timing recommendations (the tool is agnostic — any timing works)
- Missing accessibility considerations in the animation runtime
- Examples show capability but not design rationale

## Gap Analysis vs Theory

**Strengths:**
- Timeline paradigm maps to Disney's animation workflow (keyframing is fundamental)
- Per-segment easing enables "slow in, slow out" principle application at granular level
- Sequence concept supports "staging" principle (one thing at a time, sequenced)
- Seek/preview capability supports iterative refinement

**Gaps vs theory:**
- Pure tool — zero design guidance or timing principles
- No integration with design tokens (all values are absolute in the timeline)
- No prefers-reduced-motion concept
- No performance awareness (a timeline with 50 tracks will destroy mobile performance)
- No purpose classification (timeline doesn't know if animation is functional or decorative)
- No responsive behavior (same timeline plays regardless of viewport)

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| Timeline paradigm (parallel tracks, keyframes, easing) | Adopt CONCEPT for complex choreography specification in ProdigeUI. But implement as JSON preset format, not a runtime engine. Presets define keyframe percentages with token-referenced values. |
| Per-segment easing | Adopt: ProdigeUI motion presets can specify different easing for different phases. Entrance phase uses decelerate, exit phase uses accelerate — per-segment, not global easing. |
| Sequence concept (named groups) | Adopt as choreography units: `motion/presets/enter-exit.json` sequences define ordered groups of animations with timing offsets. Name them semantically (page-entrance, card-reveal). |
| Design-time vs runtime split | ProdigeUI analogue: Research/specification files (design-time knowledge) are separate from generated outputs (tokens.css = runtime artifact). |
| Seek/preview capability | Adapt principle: Motion presets should define intermediate states (0%, 25%, 50%, 75%, 100%) so agents can preview/validate animation progression without playing. |

## Adaptation Strategy

Theatre's value for ProdigeUI is the TIMELINE PARADIGM applied to complex animations — but simplified and tokenized:

1. **Timeline tracks** → ProdigeUI choreography specification: multi-property animation with per-property timing, expressed as JSON (not interactive editor)
2. **Per-segment easing** → Preset format supports segment-specific easing tokens (entrance-easing vs exit-easing)
3. **Named sequences** → Motion preset categories with explicit play order and timing offsets
4. **Studio/Core split** → Design-time artifacts (research, specifications, rules) vs runtime artifacts (tokens.css, compiled outputs)

Theatre's timeline editor is NOT adopted (ProdigeUI is not a visual tool), but the TEMPORAL MODEL it represents informs how complex animations are specified in preset JSON.

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| Timeline paradigm (parallel tracks) | `motion/presets/enter-exit.json` | `choreography` field with parallel property animations | Complex entrance/exit animations need multi-track specification |
| Per-segment easing | `motion/presets/*.json` | `segments[].easing` field per keyframe pair | Different phases of animation have different perceptual needs |
| Named sequences concept | `motion/presets/*.json` | Top-level `sequences` grouping | Named choreography units (e.g., "page-reveal", "card-cascade") |
| Design-time vs runtime separation | ProdigeUI folder structure | Research + specs (design-time) vs tokens/build (runtime) | Clear separation enables different consumption patterns |
| Seek/preview (intermediate states) | `motion/presets/*.json` | `keyframes` with percentage markers | Allows agents to reason about animation without playing it |
| Studio (visual editor concept) | Not directly applicable | — | ProdigeUI is consumed by text-based agents, not visual editors |

## Points Copied

- Timeline paradigm for complex choreography (multiple properties on time axis)
- Per-segment easing (different easing between different keyframe pairs)
- Named sequence groupings for choreography units
- Keyframe intermediate states for preview/validation
- Design-time vs runtime artifact separation

## Points Improved/Fixed

- Timeline specification format is JSON (not proprietary editor format) — portable and agent-readable
- All keyframe values reference Design Tokens (not absolute values)
- Added prefers-reduced-motion behavior per sequence (skip decorative, instant functional)
- Added performance budget per sequence (max parallel tracks, max duration)
- Added purpose/intent metadata per sequence (navigational, decorative, feedback)
- Added responsive behavior specifications (simplified choreography on mobile)

## Points Adapted

- Interactive visual editor → Declarative JSON preset format (for AI agent consumption)
- Runtime animation engine → CSS/JS-agnostic specification (ProdigeUI describes, doesn't implement)
- Package architecture → ProdigeUI folder-based knowledge organization
- React/R3F integration → Framework-agnostic specification (usable with any framework)
- Lerna monorepo → Single folder with clear internal organization
