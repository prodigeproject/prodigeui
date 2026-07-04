---
sourceId: hyperframes-main
sourceType: repo
sourceName: "hyperframes-main"
sourceLocation: "Skill & Library/hyperframes-main"
appliedTo: []
---

## Structural Analysis

Video rendering framework (HTML → video) with exceptionally rich skill architecture:

- **Skill system:** 18+ skills documented in `skills-manifest.json` including motion-graphics and hyperframes-animation
- **Multi-adapter pattern:** Supports multiple AI tools via `.claude/`, `.codex/`, `.cursor-plugin/` directories
- **DESIGN.md:** Explicit architecture documentation
- **Registry pattern:** Reusable blocks/components registered for composition
- **Frame adapter:** Seek-by-frame animation model (deterministic rendering)
- **GSAP integration:** Timeline-based animation engine

**Architecturally sound patterns:**
- Skills manifest JSON: Machine-readable skill registry (name, description, triggers, path) — EXCELLENT for AI agent discovery
- Multi-adapter pattern: Same skill content, different delivery formats per AI tool — directly mirrors ProdigeUI's installer/adapter concept
- Block registry: Reusable, composable visual elements with registration → enables component library pattern
- Deterministic rendering: Frame-by-frame control ensures predictable output (relevant for quality assurance)
- DESIGN.md architecture documentation pattern

**Architectural uniqueness:**
- Video-focused (not UI animation), BUT skill architecture is highly transferable
- Motion-graphics skill within may contain relevant timing/easing principles
- The "frame adapter" concept ensures animations are TESTABLE (reproducible at any frame)

## Content Quality Audit

**Genuinely valuable content:**
- `skills-manifest.json` pattern: Machine-readable skill index with:
  - `name`: unique identifier
  - `description`: what the skill does
  - `triggers`: when to activate
  - `path`: where to find SKILL.md
  - This is the BEST skill registry pattern found across all repos.
- Multi-adapter delivery: `.claude/CLAUDE.md`, `.codex/AGENTS.md`, `.cursor-plugin/` — same content, tool-specific format
- Block registry: Components registered with metadata, composable via references
- DESIGN.md: Architectural decisions documented with rationale
- Deterministic rendering rules: Every frame produces predictable output (no randomness unless seeded)

**AI Slop indicators:**
- Video-focused, so motion timing principles are for video (24/30/60fps frame timing), not UI interaction timing
- 18+ skills may include some that are shallow/auto-generated
- Motion-graphics skill quality unknown without deeper inspection
- Some adapter files may be thin wrappers without full content adaptation

## Gap Analysis vs Theory

**Strengths:**
- Skill manifest is the closest to an ideal machine-readable skill registry for AI agents
- Multi-adapter pattern solves the portability problem ProdigeUI faces
- Deterministic rendering connects to testability principle (animations should be verifiable)
- Block registry aligns with component library concepts

**Gaps vs theory:**
- Video timing (frame-based) differs from UI timing (event-based, continuous)
- No UI-specific motion principles (no hover states, no scroll triggers, no reduce-motion)
- Missing interactive animation concepts (user-triggered vs auto-play)
- No accessibility considerations (video renders don't need WCAG compliance)
- Motion-graphics principles may not translate to micro-interaction design
- GSAP dependency ties to specific engine (ProdigeUI should be engine-agnostic)

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| skills-manifest.json pattern | Adopt as ProdigeUI's skill registry format. ENHANCE with: `outputs` field (what the skill produces), `validates` field (what Quality_Gate criteria apply), `requires` field (prerequisites). |
| Multi-adapter delivery | Adopt as Installer architecture. Ensure content parity: same skill content, different file paths/formats per Agentic_Tool. Add automated content sync validation. |
| Block registry (reusable components) | Transform from video blocks to UI component manifest. Add: token references, state specifications, a11y metadata per block. |
| DESIGN.md architecture doc | Adopt as `design-system/design-system.md` pattern. Document dependency graph, design decisions with rationale, integration points. |
| Deterministic rendering rules | Adapt principle: ProdigeUI motion presets should produce PREDICTABLE, TESTABLE results (given same tokens → same animation). Enables quality validation. |
| Frame adapter concept (seekable animation) | Not directly applicable, but principle adapted: motion presets should be decomposable into discrete states (start → intermediate → end) for documentation/preview. |

## Adaptation Strategy

Hyperframes' primary value is its SKILL INFRASTRUCTURE, not its motion content (which is video-oriented):

1. **skills-manifest.json** → Direct adoption as ProdigeUI's skill registry format (enhanced with ProdigeUI-specific fields)
2. **Multi-adapter pattern** → Becomes the core of ProdigeUI's Installer/adapter system
3. **Block registry** → Informs `components/components.manifest.json` structure
4. **DESIGN.md** → Pattern for `design-system/design-system.md`
5. **Deterministic rendering** → Quality principle: tokens produce predictable, testable outputs

The motion-graphics skill may yield timing principles applicable to UI, but the primary extraction is architectural.

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| skills-manifest.json (machine-readable skill registry) | `AGENTS.md` + potential `skills/skills-manifest.json` | Skill listing with name, description, triggers, path | Best-in-class skill discovery pattern for AI agents |
| Multi-adapter delivery (.claude/, .codex/, .cursor-plugin/) | `installers/adapters/` | Per-tool adapter files | Solves portability: one source, many delivery formats |
| Block registry pattern | `components/components.manifest.json` | Component registration with metadata | Reusable, composable elements with machine-readable specs |
| DESIGN.md architecture documentation | `design-system/design-system.md` | Dependency graph, rationale sections | Architectural clarity for both humans and AI agents |
| Deterministic rendering principle | `quality-gate/criteria.json` | `motion-determinism` criterion | Same tokens → same visual result; enables automated validation |
| Frame adapter (seekable state) | `motion/presets/*.json` | `keyframes` field with percentage states | Presets decomposed into inspectable/previewable states |

## Points Copied

- skills-manifest.json as machine-readable skill registry (best pattern found)
- Multi-adapter delivery pattern (one content, multiple AI tool formats)
- Block/component registry with metadata
- DESIGN.md for architectural documentation with rationale
- Deterministic output principle (same input → same output, testable)

## Points Improved/Fixed

- Skill manifest enhanced with `outputs`, `validates`, `requires` fields for ProdigeUI specifics
- Multi-adapter validated for content parity (automated sync checking)
- Block registry enhanced with token references, states, accessibility metadata
- DESIGN.md expanded to include dependency graph between all six core artifact systems
- Determinism principle extended to include Quality_Gate automated verification capability

## Points Adapted

- Video frame timing → UI event timing (frame-based → duration-based)
- GSAP timeline → Engine-agnostic preset specification (JSON, not code)
- Video blocks → UI components (different concerns: interactivity, states, accessibility)
- 18+ skills → Curated ProdigeUI skill set (fewer, deeper skills instead of many shallow ones)
- Frame adapter → Keyframe percentage decomposition in motion presets
