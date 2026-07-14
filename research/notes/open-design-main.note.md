---
sourceId: open-design-main
sourceType: repo
sourceName: "open-design-main"
sourceLocation: "Skill & Library/open-design-main"
appliedTo: []
---

## Structural Analysis

THE reference architecture for ProdigeUI's skill ecosystem. Massive repository with 100+ skills organized by category, a design systems directory with 100+ brand/aesthetic presets, and a craft system providing brand-agnostic quality rules.

**Architecturally sound patterns:**
- **Skill frontmatter schema**: Structured YAML with `name`, `description`, `triggers`, and `od` block containing `mode`, `surface`, `platform`, `scenario`, `category`, `upstream`, `design_system.requires`, `craft.requires`. This is a MACHINE-READABLE skill contract.
- **AGENTS.md hierarchy**: Root-level + per-directory agents, providing progressive context loading. Agent reads top-level AGENTS.md first, then navigates to relevant sub-directory.
- **Design system DESIGN.md pattern**: Each brand/aesthetic preset encapsulated in a single DESIGN.md with standardized sections: color roles, typography, component styling, layout, depth/elevation, do's/don'ts, responsive rules, agent prompt guide.
- **Craft system**: Brand-AGNOSTIC rules (typography discipline, color discipline, anti-ai-slop, animation-discipline) separate from brand-SPECIFIC design systems. Critical architectural separation.
- **Lazy scanner discovery**: Skills discoverable without loading everything. Frontmatter provides enough metadata for routing.
- **Multi-tool adapters**: `.claude/`, `.codex/`, `.cursor-plugin/` — same knowledge packaged for different AI tools.

**Overengineered aspects:**
- Some skills are just stubs pointing to upstream repos (no local value)
- Design systems directory is BROAD but SHALLOW (100+ systems but each is surface-level)

**Too simple aspects:**
- No formal validation mechanism for DESIGN.md conformance
- No inter-skill dependency resolution beyond simple `upstream` field
- No versioning or change tracking for design systems

## Content Quality Audit

**Genuinely substantive:**
- Craft system rules (anti-ai-slop, typography discipline) contain SPECIFIC, actionable rules with examples
- Anti-AI-slop list explicitly names patterns to avoid: AI-purple gradients, centered hero over dark mesh, three equal cards, generic glassmorphism, Inter+slate-900 defaults
- DESIGN.md color role system: background, foreground, accent, muted, border, surface, success/warn/danger — good semantic separation

**AI Slop indicators found:**
- Design system presets are surface-level: palette + basic rules only. No full token system with semantic referencing. No contrast ratios calculated. No component-level token mapping.
- Many skills are vague: "choose appropriate colors" without specifying HOW. No link to color theory or token system.
- Inconsistency between skills — some have deep rationale, others are 5-line stubs
- Typography sections often just list font names without scale ratios, line-height rules, or pairing rationale
- Layout sections mention "grid" without specifying column counts, gutter ratios, or breakpoint logic

**Quality variance:** HIGH. Top-tier skills (taste-skill, craft rules) are excellent. Design system presets are mostly surface-level. Stub skills add noise without value.

## Gap Analysis vs Theory

**Strengths relative to design theory:**
- Separation of brand-specific (design systems) from brand-agnostic (craft) mirrors the distinction between style guides and design principles
- Color role system partially implements semantic color theory
- Anti-AI-slop approach demonstrates awareness of LLM failure modes

**Critical gaps:**
- No Atomic Design component hierarchy in design systems (just flat component styling rules)
- No token system connecting design system values to component implementation
- No accessibility requirements per design system (contrast ratios, focus indicators)
- No spacing system based on mathematical scales (just arbitrary values)
- Typography lacks modular scale theory (no ratio, no vertical rhythm rules)
- No responsive breakpoint strategy tied to content needs
- No motion principles per design system (static visual design only)
- No Gestalt principles applied (proximity, similarity, closure not formalized)
- No information hierarchy rules (visual weight, reading order)

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| Skill frontmatter schema (name, triggers, od.*) | Add: `outputs` field (what artifacts skill produces), `validates` field (link to Quality_Gate criteria), `requires.tokens` (which token categories are needed), `version` field |
| DESIGN.md color roles | Expand to full token system: primitive → semantic → component. Add contrast ratios (min 4.5:1 normal, 3:1 large). Add palette generation method (complementary/triadic/analogous). Add dark mode derivation rules. |
| Craft anti-ai-slop rules | Formalize as JSON checklist with measurable criteria (not just "avoid X" but "verify Y"). Add severity levels. Link to Quality_Gate scoring. |
| Design system template structure | Add: token file reference, component token mapping, accessibility spec, responsive strategy, motion personality, spacing scale, typography scale with ratio |
| AGENTS.md hierarchy | Enhance with: explicit skill routing rules, context budget hints, fallback chains, output format specifications |
| Multi-tool adapters | Standardize adapter format. Add: capability detection, tool-specific constraint documentation, shared knowledge base vs tool-specific instructions |

## Adaptation Strategy

Open-design-main becomes ProdigeUI's architectural SKELETON, but every layer is deepened:

1. **Skill frontmatter** → ProdigeUI SKILL.md frontmatter with additional `outputs`, `validates`, `requires.tokens` fields
2. **DESIGN.md pattern** → ProdigeUI themes are FULL token override files (not prose descriptions). The DESIGN.md prose becomes `themes/docs/` documentation per theme.
3. **Craft system** → ProdigeUI `design-rules/` JSON files with measurable criteria (not prose rules)
4. **Anti-AI-slop** → ProdigeUI `quality-gate/anti-slop.criteria.json` with automated detection checklist
5. **AGENTS.md** → ProdigeUI `AGENTS.md` with explicit routing, context budget, and output format specs
6. **Lazy discovery** → ProdigeUI `manifest.json` serves as machine-readable registry (superior to scanning)

The key transformation: EVERYTHING that's prose guidance in open-design becomes STRUCTURED DATA in ProdigeUI — measurable, validatable, enforceable.

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| Skill frontmatter schema | `skills/*/SKILL.md` | YAML frontmatter format | Provides machine-readable skill metadata for routing and validation |
| DESIGN.md color roles (bg/fg/accent/muted/border/surface/success/warn/danger) | `tokens/semantic.tokens.json` | `color.*` role names | Establishes standard color role vocabulary across all themes |
| Craft anti-ai-slop rules | `quality-gate/criteria.json` | `antiSlop.*` criteria | Transforms prose rules into checkable quality criteria |
| Design system DESIGN.md template | `themes/*.theme.json` + `themes/docs/` | Theme structure and documentation | Separates machine-readable tokens from human-readable rationale |
| AGENTS.md hierarchy | `AGENTS.md` | Root agent instructions | Skill routing, context management, output format specs |
| Multi-tool adapter pattern | `installers/adapters/` | Per-tool installation files | Enables ProdigeUI consumption by any AI tool |
| Craft typography discipline | `design-rules/typography.rules.json` | All typography rules | Formalizes typography craft as measurable rules |
| Craft color discipline | `design-rules/color.rules.json` | Contrast and harmony rules | Transforms color craft into enforceable standards |
| Lazy scanner frontmatter discovery | `manifest.json` | `artifacts[]` registry | Centralized registry superior to scanning-based discovery |
| `design_system.requires` + `craft.requires` in skills | `skills/*/SKILL.md` | `requires` frontmatter field | Dependency declaration for validation chain |

## Points Copied

- Skill frontmatter schema structure (name, description, triggers, od.* namespace)
- AGENTS.md hierarchical pattern (root + per-directory)
- Design system color role vocabulary (background, foreground, accent, muted, border, surface, semantic states)
- Craft system separation from brand-specific design (brand-agnostic rules vs brand-specific aesthetics)
- Anti-AI-slop explicit pattern naming (list of defaults to avoid)
- Multi-tool adapter delivery pattern (.claude/, .codex/, etc.)
- Category-based skill organization

## Points Improved/Fixed

- Skill frontmatter enhanced with `outputs`, `validates`, `requires.tokens`, and `version` fields
- Design system presets deepened from surface-level DESIGN.md to full token override files with calculated contrast ratios
- Craft rules formalized as measurable JSON criteria (not prose)
- Anti-AI-slop rules converted to Quality_Gate scoring system with severity levels
- Typography sections enhanced with modular scale ratios, vertical rhythm, and line-height calculations
- Color roles expanded to three-layer token system (primitive → semantic → component)
- Added accessibility requirements per design system (WCAG AA minimums)
- Added motion personality per design system (not just static visual)
- Added responsive strategy per design system (breakpoints, fluid behavior)
- Removed stub skills (no value-add without local content)

## Points Adapted

- DESIGN.md prose → structured JSON theme files (machine-readable, not human-only)
- Lazy scanner discovery → centralized `manifest.json` registry (deterministic, not scanning-based)
- Craft system → `design-rules/` folder with rule-type JSON files (typography, color, layout, structure)
- Skill `upstream` field → full dependency graph with validation chain
- Per-brand design system → per-brand theme.json extending base semantic tokens
- Multi-tool adapters → `installers/adapters/` with standardized adapter format and capability detection
- AGENTS.md flat hierarchy → layered context with budget hints and fallback chains
