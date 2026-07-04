---
sourceId: skills-main
sourceType: repo
sourceName: "skills-main"
sourceLocation: "Skill & Library/skills-main"
appliedTo: []
---

## Structural Analysis

Generic skills framework and infrastructure. Provides the PROTOCOL and MECHANISM for skill installation and management (`npx skills add`). This is not a design skill itself — it's the PLUMBING that enables skills to be distributed, installed, and discovered.

**Architecturally sound patterns:**
- **Registry pattern**: Centralized skill registry where skills are published and discovered
- **Installation mechanism**: `npx skills add <name>` — one-command installation into any project
- **Skill manifest format**: `skill.json` defining skill metadata, dependencies, and configuration
- **Package distribution**: Skills as installable packages (npm-like ecosystem)
- **Composability**: Multiple skills can be installed in a single project without conflict

**Structural characteristics:**
- Infrastructure-focused (distribution mechanism, not content)
- Protocol-oriented (defines HOW skills are packaged, not WHAT they contain)
- Ecosystem enabler (creates the rails for skill distribution)

## Content Quality Audit

**Value as infrastructure:**
- Demonstrates proven skill distribution pattern (npm-like install flow)
- Shows what metadata a skill needs for discoverability (name, description, category, version)
- Establishes installation conventions (where skills land in a project)
- Provides conflict resolution approach (multiple skills coexisting)

**AI Slop indicators:**
- Infrastructure without quality control (installs whatever, no verification)
- No quality assessment of installed skills (anyone can publish)
- No dependency management sophistication (basic requires, no version resolution)
- Distribution mechanism is commodity (the HARD problem is skill CONTENT quality)

## Gap Analysis vs Theory

**Strengths:**
- Practical, working distribution mechanism
- Proves that skills-as-packages pattern works
- Shows minimum viable skill metadata requirements
- Establishes installation convention expectations

**Gaps:**
- No content quality requirements for publishable skills
- No testing framework for skill output quality
- No skill composition rules (when skills conflict, which wins?)
- No version compatibility matrix
- No skill dependency graph resolution
- Missing: skill capability declaration (what can this skill DO vs what does it KNOW)
- Missing: skill output format specification (standardized output contracts)

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| Registry/installation pattern | ProdigeUI's installation is simpler (copy folder or use adapter). But metadata from registry concept informs `manifest.json` structure. Add: quality tier (verified/unverified), compatibility declaration, output contract. |
| Skill manifest format (skill.json) | Evolve into SKILL.md frontmatter with: `outputs` (what the skill produces), `validates` (quality-gate criteria it satisfies), `requires` (design artifacts it needs), `conflicts` (skills it's incompatible with) |
| One-command installation | ProdigeUI's `installers/` directory provides tool-specific installation scripts. Adopt the simplicity principle (one action = installed). |
| Composability approach | ProdigeUI skills are designed as NON-OVERLAPPING by design (each has clear scope). No composition conflicts because responsibilities are clearly partitioned. |

## Adaptation Strategy

This repo's infrastructure patterns inform ProdigeUI's DISTRIBUTION strategy:

1. **Registry → manifest.json**: ProdigeUI doesn't need a remote registry — it IS the package. `manifest.json` serves as the local skill registry.
2. **Installation → adapters**: ProdigeUI's `installers/adapters/` replaces generic `npx skills add` with tool-specific installation (`.claude/`, `.cursor/`, etc.)
3. **Skill manifest → SKILL.md frontmatter**: The metadata concept is adopted but enriched with validation, output, and dependency declarations
4. **Ecosystem approach → self-contained system**: Rather than depending on external skill ecosystem, ProdigeUI provides ALL needed skills internally (quality-controlled)

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| Registry pattern | `manifest.json` | `artifacts[]` array with skill entries | Local registry replaces remote discovery |
| Skill manifest metadata | `skills/*/SKILL.md` | Frontmatter schema | Enriched version of skill.json metadata |
| Installation mechanism | `installers/adapters/` | Per-tool install scripts | Tool-specific installation replaces generic npx |
| Package distribution concept | ProdigeUI as a whole | Delivery format | ProdigeUI itself is the "installed skill package" |
| Composability requirements | `skills/*/SKILL.md` | `requires` and `conflicts` frontmatter | Non-overlapping skill design prevents conflicts |
| Metadata discoverability | `AGENTS.md` | Skill routing instructions | Agent discovers skills via AGENTS.md, not registry lookup |

## Points Copied

- One-command installation simplicity principle
- Skill metadata requirements (name, description, category, version)
- Composability goal (multiple skills coexisting without conflict)
- Registry/discovery pattern for finding relevant skills

## Points Improved/Fixed

- External registry dependency → self-contained `manifest.json` (works offline, no network needed)
- Generic installation → tool-specific adapters (Claude, Cursor, Codex-specific installation)
- No quality control → ProdigeUI skills are internally quality-validated
- Basic metadata → rich SKILL.md frontmatter with outputs, validates, requires fields
- No output contracts → every ProdigeUI skill has defined output format specification
- Composition by luck → composition by design (non-overlapping responsibility boundaries)

## Points Adapted

- `skill.json` → SKILL.md YAML frontmatter (markdown-first, version-control-friendly)
- `npx skills add` → folder copy + adapter installation (simpler, no toolchain dependency)
- Remote registry → `manifest.json` local registry + `AGENTS.md` routing
- Ecosystem of independent skills → curated, quality-controlled skill suite (ProdigeUI IS the ecosystem)
