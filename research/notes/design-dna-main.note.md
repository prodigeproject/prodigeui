---
sourceId: design-dna-main
sourceType: repo
sourceName: "design-dna-main"
sourceLocation: "Skill & Library/design-dna-main"
appliedTo: []
---

## Structural Analysis

Design DNA extraction tool that captures brand identity from URLs/screenshots and generates design tokens. Represents the "reverse engineering" approach to design system creation.

**Architecturally sound patterns:**
- **Input → token pipeline**: URL/screenshot → analysis → structured tokens. Clean transformation pipeline.
- **Brand extraction methodology**: Systematic identification of brand-defining visual elements (colors, typography, spacing, patterns)
- **Token output format**: Generates structured design tokens as output (not just descriptions)
- **Automated derivation**: Color palette, typography scale, spacing grid derived FROM existing design rather than manually specified

**Structural characteristics:**
- Tool-oriented (performs extraction, not specification)
- Reverse-engineering approach (existing design → tokens vs tokens → design)
- Automation of design analysis tasks typically done manually

## Content Quality Audit

**Genuinely valuable content:**
- The CONCEPT of automated brand extraction → token generation is sound
- Demonstrates what structured token output should look like
- Shows which visual properties are "brand-defining" vs generic

**AI Slop concerns:**
- Extraction quality depends heavily on analysis accuracy (colors from screenshots can be noisy)
- Generated tokens may lack the semantic layer (just raw extracted values, not role-assigned tokens)
- May miss non-visual brand elements (spacing rhythm, motion personality, interaction patterns)
- Risk: extracting SURFACE appearance without understanding INTENT (the WHY behind design decisions)

## Gap Analysis vs Theory

**Strengths:**
- Practical approach to capturing existing brand identity
- Output format demonstrates token structure
- Shows automation potential for design system creation

**Gaps:**
- No semantic layer assignment (extracted blue = ??? role)
- No contrast ratio validation on extracted palette
- No typography scale detection (just font identification)
- No spacing rhythm analysis (just measurement extraction)
- No brand personality inference (extracts WHAT, not WHY)
- Missing: dark mode derivation from extracted light palette
- Missing: accessibility evaluation of extracted design (is the original even accessible?)
- No motion/animation extraction capability

## Improvement Blueprint

| Point copied | Required improvement |
|---|---|
| Input → token pipeline concept | ProdigeUI inverts this: instead of extracting FROM design, SPECIFY design through tokens. But the pipeline concept informs theme creation workflow (user provides reference → ProdigeUI maps to theme tokens). |
| Color extraction → palette | Add: automatic role assignment (dominant=background, secondary=surface, accent=CTA color). Add contrast validation. Add harmony classification (complementary/triadic/analogous). |
| Typography detection | Add: scale ratio detection, weight hierarchy analysis, line-height derivation, pairing compatibility check |
| Structured token output format | Adopt output structure but ensure three-layer token system (primitive → semantic → component) |

## Adaptation Strategy

Design-DNA informs ProdigeUI's THEME CREATION workflow — how users/agents can create new themes:

1. **Reference-based theme creation**: User provides URL or brand guidelines → ProdigeUI maps extracted values to its token structure (filling the THREE-LAYER system: primitive → semantic → component)
2. **Validation layer**: Every extracted/derived value passes through ProdigeUI's design-rules validation (contrast check, scale coherence, harmony assessment)
3. **Gap filling**: Where extraction can't determine intent, ProdigeUI provides DEFAULTS from its research-backed rules
4. **Brand personality inference**: Goes beyond extraction to CLASSIFY the brand personality (enabling dial position inference from taste-skill methodology)

## Concrete Artifact Mapping

| Finding | ProdigeUI artifact | Field/section affected | Rationale |
|---|---|---|---|
| Input → token pipeline concept | `themes/creating-a-theme.md` | Workflow section "From reference design" | Informs how users create themes from existing brand materials |
| Color extraction → role assignment | `tokens/semantic.tokens.json` | Color role assignment methodology | Shows which color properties need semantic roles assigned |
| Structured token output format | `tokens/tokens.schema.json` | Schema structure | Validates ProdigeUI's token structure against real extraction output needs |
| Typography detection approach | `design-rules/typography.rules.json` | Scale detection criteria | Informs what typography properties are "brand-defining" |
| Brand property identification | `themes/theme.schema.json` | Required properties per theme | Which properties MUST be specified for a complete theme |
| Automated derivation concept | `scripts/` (future) | Token generation utilities | Potential automation for theme generation from references |

## Points Copied

- Input → structured token pipeline concept
- Brand-defining property identification (which visual elements define a brand vs are generic)
- Structured token output format
- Extraction-based design system creation workflow concept

## Points Improved/Fixed

- Raw extraction → ProdigeUI adds semantic role assignment (every extracted value gets a ROLE)
- No validation → ProdigeUI validates all extracted values against design-rules (contrast, harmony, scale)
- Surface-only extraction → ProdigeUI infers INTENT and personality from extracted patterns
- Single-mode output → ProdigeUI derives light/dark mode + reduced-motion variants
- No accessibility check → ProdigeUI ensures extracted palette meets WCAG AA
- Flat token output → ProdigeUI maps to three-layer system (primitive → semantic → component)

## Points Adapted

- Extraction tool → theme creation workflow in `themes/creating-a-theme.md`
- Pipeline architecture → skill workflow step (reference analysis in theme-creation skill)
- Output format → ProdigeUI token schema input specification (what format references should be provided in)
- Brand identification logic → ProdigeUI brand personality inference connecting to taste-skill dials
