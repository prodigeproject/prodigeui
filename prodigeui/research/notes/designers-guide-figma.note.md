---
sourceId: designers-guide-figma
sourceType: book
sourceName: "The Designer's Guide to Figma: Master Prototyping, Collaboration, Handoff, and Workflow"
sourceLocation: "Book/design-tools/Figma/The Designer's Guide to Figma Master Prototyping, Collaboration, Handoff, and Workflow (Daniel Schwarz) (Z-Library).epub"
appliedTo: []
---

## Key Principles Extracted

1. **Design-to-Development Handoff as System Property**: Handoff quality depends on design system maturity. Well-tokenized, properly-named, consistently-structured components produce clean handoff. Messy designs produce messy handoff regardless of tool features.

2. **Collaboration Through Shared Language**: Designers and developers need shared vocabulary. Component names, token names, state names, spacing concepts — when the same word means the same thing to both sides, miscommunication drops dramatically.

3. **Version Control for Design**: Design systems need versioning (what changed, when, why). Breaking changes documented. Migration paths provided. Same discipline as code packages. ProdigeUI manifest includes version tracking.

4. **Prototyping as Specification**: Interactive prototypes serve as living specifications — they demonstrate behavior that static mockups cannot communicate (transitions, timing, conditional logic). But: prototypes are NOT documentation; they supplement written specs.

5. **Component Documentation Standards**: Each component needs: (1) description/purpose, (2) anatomy diagram, (3) variant showcase, (4) usage guidelines (do/don't), (5) interaction spec, (6) accessibility notes. This IS the component manifest structure.

6. **Workflow Automation**: Repetitive design tasks (creating variants, updating styles, generating redlines) should be automated. In ProdigeUI context: token compilation, quality checks, and component validation should be automated — not manual.

7. **Branching for Design Exploration**: Design branches (like git branches) enable exploration without breaking main library. Principle: stable main + experimental branches = safe innovation. ProdigeUI: stable manifest + experimental additions.

8. **Inspection Precision**: Developers need exact values (not approximations). Handoff should provide: exact spacing (in tokens), exact colors (in token references), exact typography (in token references), exact sizing. Ambiguity causes implementation drift.

9. **Component Usage Guidelines**: Beyond "what it looks like" — document "when to use" and "when NOT to use." Do: use Button for primary actions. Don't: use Button where Link semantics are appropriate. ProdigeUI component manifest includes usage context.

10. **Cross-Functional Review**: Design reviews should include developers (feasibility), content designers (copy), accessibility specialists (a11y). Multiple perspectives catch issues single-discipline review misses. Quality gate = automated cross-functional review.

## Concrete Rules & Parameters

| Principle | Measurable Rule | Application |
|-----------|----------------|-------------|
| Handoff Quality | 100% token reference in specs; 0 ambiguous values | Token adherence enforcement |
| Shared Vocabulary | Component/token naming identical in design and code | Naming convention rules |
| Version Control | Semantic versioning; changelog per release; breaking changes documented | Manifest version field |
| Documentation Completeness | 6 required sections per component doc (description, anatomy, variants, usage, interaction, a11y) | Component manifest schema |
| Automation Coverage | Token compilation, quality checks, validation = automated (0 manual) | Scripts/ validation pipeline |
| Inspection Precision | All values expressed as token references (not raw measurements) | Quality gate token check |
| Usage Guidelines | Each component: ≥1 "do" example + ≥1 "don't" example | Component manifest usage field |
| Review Coverage | Quality gate checks: visual consistency, accessibility, token adherence, interaction completeness | Multi-concern quality gate |
| Branching Stability | Main/stable manifest + experimental/draft additions | Versioning strategy |
| Cross-Functional | Quality gate criteria span: visual, a11y, interaction, content, performance | Comprehensive criteria |

## Modern Context Application

- **Handoff + AI Agents**: In ProdigeUI's context, the "handoff" is from the design system to AI coding agents. Clean, token-based, well-documented components enable agents to generate correct code. Ambiguity in specs = hallucination in agent output.
- **Shared Language + LLM Understanding**: Token names and component names must be LLM-interpretable. `color-primary-500` is clearer to an AI agent than `blue3`. Semantic naming improves both human and AI understanding.
- **Version Control + Manifest**: ProdigeUI's `manifest.json` version field enables agents to know which system version they're working with. Breaking changes trigger agent behavior adaptation.
- **Documentation + Agent Consumption**: Component documentation structured for machine consumption (JSON manifest) not just human reading (markdown). Agents parse structured data; humans read rendered documentation.
- **Automation + Quality Gate**: ProdigeUI quality gate IS the automation — checking generated output against design rules without human intervention. The gate runs after every generation.
- **Cross-Functional Review + Multi-Criteria Gate**: Quality gate criteria cover multiple disciplines: visual (token adherence, contrast), interaction (state coverage), accessibility (WCAG), content (hierarchy, readability). No single-concern review.

## Anti-AI-Slop Indicators

| Expert Handoff/Workflow | AI-Slop Workflow |
|------------------------|------------------|
| All values expressed as token references (implementable) | Approximate values ("about 16px", "something blue") |
| Complete component documentation (all 6 sections) | Incomplete specs (missing states, missing a11y) |
| Shared naming between design and code | Different names for same concept across tools |
| Versioned releases with changelogs | Untracked changes; no version awareness |
| Automated validation catching issues | Issues found only in production |
| Usage guidelines (when to use / not use) | Components without context guidance |
| Cross-functional quality checks | Single-perspective review missing concerns |
| Prototypes supplementing (not replacing) documentation | Prototypes as sole specification (ambiguous behavior) |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Handoff precision | `quality-gate/criteria.json` | `token-adherence: 100%` — all values must be token refs | Eliminates implementation ambiguity |
| Shared vocabulary | Token + component naming conventions | `manifest.json` naming rules + component name list | Same word = same meaning across contexts |
| Version control | `manifest.json` | `version` field with semver; `changelog` section | Tracks system evolution |
| Documentation schema | `components/` manifest | 6 required fields: description, anatomy, variants, usage, interaction, a11y | Complete component specification |
| Automation | `scripts/` + `quality-gate/` | Automated validation pipeline | No manual quality assurance |
| Usage guidelines | `components/` manifest | `usage: { do: [...], dont: [...] }` per component | Context-appropriate component selection |
| Review coverage | `quality-gate/criteria.json` | Multi-category criteria: visual, a11y, interaction, content | Comprehensive quality checking |
| Inspection precision | `tokens/` system | Named tokens with resolved values (agent reads token name, knows value) | Zero ambiguity in implementation |
| AI-agent handoff | `AGENTS.md` + manifest structure | Machine-readable specs structured for agent consumption | Optimized for AI agent parsing |
| Cross-functional gate | `quality-gate/criteria.json` | Criteria spanning multiple design disciplines | Catches issues across all concerns |

## Cross-References

- **Designing and Prototyping (1st/2nd Ed)**: Technical component creation that Schwarz's workflow wraps
- **Designing in Figma**: Tool fundamentals that support the collaboration Schwarz describes
- **open-design-main (repo)**: Similar multi-tool delivery and documentation standards
- **hyperframes-main (repo)**: skills-manifest.json pattern aligned with Schwarz's documentation standards
- **shadcn/ui**: Code-side implementation with similar version/distribution philosophy
- **impeccable-main (repo)**: Quality gate concept aligned with Schwarz's automated review
