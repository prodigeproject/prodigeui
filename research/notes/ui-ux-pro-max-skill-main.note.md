---
sourceId: ui-ux-pro-max-skill-main
sourceType: repo
sourceName: "ui-ux-pro-max-skill-main"
sourceLocation: "Skill & Library/ui-ux-pro-max-skill-main"
appliedTo: []
---

## Structural Analysis

Enhanced UI/UX skill with multi-tool adapter delivery, CLI interface, and project-based output structure. Represents a more mature skill packaging than basic single-file skills.

**Architecturally sound patterns:**
- **Multi-adapter delivery**: `.claude/`, `.claude-plugin/` directories — same knowledge packaged for different AI tool integration points
- **CLAUDE.md pattern**: Root-level instruction file for Claude Code integration (standard convention)
- **CLI interface**: Command-line access for skill management (install, configure, run)
- **Project folder pattern**: `projects/` directory for skill output organization (separates skill definition from skill output)
- **Skill.json manifest**: Machine-readable skill metadata and configuration
- **Preview capability**: `preview/` folder showing example outputs (documentation by example)
- **Documentation directory**: `docs/` with usage guides and reference material
- **Screenshots/references**: Visual examples of expected output quality

**Multi-component architecture (vs single-file skills):**
- Skill definition (CLAUDE.md + skill.json)
- Delivery adapters (.claude/, .claude-plugin/)
- Output organization (projects/)
- Documentation (docs/)
- Visual reference (preview/, screenshots/)

## Content Quality Audit

**Genuinely valuable architectural patterns:**
- Multi-adapter delivery proves that ONE knowledge base can serve MULTIPLE AI tools
- Project-based output shows how to organize generated artifacts per use-case
- Preview folder establishes "expected output" — useful for quality comparison
- Documentation alongside skill (not separate, lives with the skill)

**AI Slop risk areas:**
- CLI overhead may be unnecessary for simple skill consumption
- Projects folder may produce generic output that isn't quality-validated
- If the underlying design knowledge is shallow (complex packaging around thin content)
- Screenshots as reference may be brittle (visual comparisons are unreliable)
- Risk: impressive packaging but generic design advice inside

## Gap Analysis vs Theory

**Strengths:**
- Most mature PACKAGING architecture of any skill analyzed
- Multi-tool support is forward-thinking (not locked to one AI platform)
- Project-based output organization scales to multiple use-cases
- Preview/reference concept provides quality baseline

**Gaps:**
- No quality gate mechanism (generates but doesn't verify output quality)
- No token system integration (may generate raw values)
- Packaging sophistication may exceed content sophistication
- No integration with external design rules or knowledge systems
- Missing: structured output format (output is "whatever the AI generates")
- Missing: validation against design theory standards
- Missing: accessibility requirements in output spec
- No anti-AI-slop checks in the generation workflow
- No iteration/improvement loop when output is substandard

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| Multi-adapter delivery pattern | ProdigeUI adopts this in `installers/adapters/`. Add: adapter capability matrix (which features each tool supports), adapter-specific constraint documentation, shared vs adapter-specific configuration. |
| CLAUDE.md integration pattern | ProdigeUI uses AGENTS.md (tool-agnostic naming). Content structure borrowed but enriched with context budget hints, skill routing, artifact references. |
| Project-based output | ProdigeUI's output is structured by the skill OUTPUT specification (not ad-hoc project folders). Each skill defines exact output format. Quality-gate validates output structure. |
| Preview/reference folder | ProdigeUI equivalent: `quality-gate/` criteria define "good output" measurably. Visual comparison replaced by structured quality scoring. |
| Skill.json manifest | ProdigeUI uses SKILL.md YAML frontmatter (markdown-first). Same metadata but richer: outputs, validates, requires, version. |
| Documentation alongside skill | ProdigeUI: each skill's SKILL.md IS the documentation (self-documenting format). Separate docs/ not needed. |

## Adaptation Strategy

This repo's PACKAGING architecture informs ProdigeUI's delivery and installation layer:

1. **Multi-adapter** → `installers/adapters/` with per-tool installation scripts/configs
2. **CLAUDE.md** → tool-agnostic `AGENTS.md` (works with any AI tool that supports it)
3. **CLI** → NOT adopted (ProdigeUI is a knowledge package, not a CLI tool; consumed by AI agents directly)
4. **Project output** → ProdigeUI skills define output FORMAT in frontmatter; organization is agent's responsibility
5. **Preview** → Quality_Gate criteria replace visual comparison (measurable > visual)
6. **Docs** → SKILL.md is self-documenting; README.md provides overview

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| Multi-adapter delivery (.claude/, .claude-plugin/) | `installers/adapters/` | Per-tool adapter files | One knowledge base, multiple tool integrations |
| CLAUDE.md pattern | `AGENTS.md` | Root agent instruction file | Tool-agnostic equivalent for AI code agent integration |
| Skill.json manifest format | `skills/*/SKILL.md` | YAML frontmatter metadata | Enriched version of machine-readable skill manifest |
| Project-based output organization | `skills/*/SKILL.md` | `outputs` field specification | Defines what each skill produces (format, structure) |
| Preview/example output | `quality-gate/criteria.json` | Quality criteria (replace visual comparison) | Measurable quality standards > visual examples |
| Documentation structure | `README.md` + `AGENTS.md` + SKILL.md | Layered documentation | Self-documenting skills with overview entry points |
| Screenshots as reference | Not adopted | — | Visual comparison is unreliable for AI; structured criteria preferred |

## Points Copied

- Multi-adapter delivery concept (same knowledge → multiple tool integrations)
- Machine-readable skill manifest (structured metadata for routing/discovery)
- Documentation alongside skill (not separate documentation system)
- Tool-specific integration file pattern (CLAUDE.md → AGENTS.md)
- Output organization awareness (skills should define what they produce)

## Points Improved/Fixed

- Multi-adapter files → ProdigeUI's standardized `installers/adapters/` format
- Generic CLAUDE.md → enriched AGENTS.md with context budget, skill routing, artifact references
- CLI dependency → eliminated (ProdigeUI consumed directly by AI agents, no CLI needed)
- Visual preview comparison → measurable Quality_Gate criteria (objective, automatable)
- skill.json → SKILL.md YAML frontmatter (richer metadata, markdown-first)
- Ad-hoc project output → structured output format specification per skill
- No validation → Quality_Gate validates every output
- Tool-locked (Claude-specific) → tool-agnostic with optional tool-specific adapters

## Points Adapted

- Multi-component packaging → ProdigeUI's layered architecture (manifest + AGENTS.md + skills + adapters)
- Project-based output → skill output specifications in frontmatter
- Preview gallery → Quality_Gate scoring system (measured quality, not visual comparison)
- CLI management → not needed (ProdigeUI is a static knowledge package, not an application)
- .claude-plugin/ pattern → `installers/adapters/claude/` standardized adapter
