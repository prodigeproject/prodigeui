---
sourceId: design-systems-handbook
sourceType: book
sourceName: "Design Systems Handbook (Marco Suarez, Jina Anne, Katie Sylor-Miller)"
sourceLocation: "Book/UX/Design Systems Handbook (Marco Suarez, Jina Anne, Katie Sylor-Miller etc.) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

- **Shared Design Language:** A design system is a shared language that bridges design and development, enabling teams to build consistent products at scale. It encompasses principles, patterns, and practices rather than just a component library.
- **Design Tokens as Foundation:** Tokens are the atomic values (colors, spacing, typography) that feed into every component. They form the single source of truth for visual decisions.
- **Component API Contracts:** Every component should have well-defined APIs (props, variants, states) documented consistently across the system.
- **Governance Model:** A design system requires a contribution model (centralized, federated, or hybrid) determining who can add/modify components and tokens.
- **Incremental Adoption:** Systems should be adoptable incrementally — teams can start with tokens, then add components, then patterns, rather than all-or-nothing.
- **Living Documentation:** Documentation should be generated from the source of truth (code/tokens) to prevent drift between docs and implementation.
- **Design Principles as Guardrails:** Explicit, prioritized principles (e.g., "clarity over cleverness") guide decisions when the system doesn't prescribe a specific solution.

## Concrete Rules & Parameters

- Token naming hierarchy: global → alias → component-specific (3-tier naming)
- Component documentation must include: description, props table, usage guidelines, do/don't examples, accessibility notes
- Design system versioning: semantic versioning (major.minor.patch) for breaking changes, additions, and fixes
- Adoption metrics: coverage percentage = (components using tokens / total components) × 100; target ≥ 95%
- Contribution workflow: propose → review → implement → document → release (5-step pipeline)
- Component maturity model: Draft → Beta → Stable → Deprecated (4 stages with criteria for each transition)
- Token audit frequency: quarterly review of token usage and deprecation candidates

## Modern Context Application

- **AI Agent Consumption:** Design systems become the instruction set for AI agents — well-structured tokens and component APIs enable agents to generate compliant UI without hardcoding values.
- **Component Registries:** Modern distribution via registries (shadcn model) where agents pull component definitions rather than importing libraries.
- **Token-to-CSS Pipeline:** JSON tokens → CSS custom properties pipeline enables theme switching without rebuilds, critical for AI-generated adaptive interfaces.
- **Automated Quality Gates:** Design system rules become programmable constraints that agents and CI systems can validate automatically.
- **Multi-Platform Token Delivery:** Tokens compiled to platform-specific formats (CSS vars, Swift constants, Kotlin values) from a single source.

## Anti-AI-Slop Indicators

| Expert Design System | AI Slop |
|---|---|
| Semantic token names reflecting purpose (color.feedback.error) | Arbitrary color values (#ff0000) sprinkled throughout |
| Consistent spacing using scale (space.md, space.lg) | Random pixel values (padding: 17px, margin: 23px) |
| Component composition following atomic design | Flat component dump without hierarchy |
| Documented design principles driving decisions | Components without rationale or usage context |
| Versioned, governed system with contribution rules | Unstructured collection of UI elements |
| Living documentation synced with implementation | Outdated docs that contradict actual components |
| Progressive disclosure in component APIs | Overwhelming prop surfaces without guidance |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| 3-tier token hierarchy (global/alias/component) | `tokens/` structure | Folder organization: primitives/, semantic/, components/ | Mirrors industry-standard token architecture |
| Component maturity model | `components/` metadata | `maturity` field in component spec | Agents know which components are stable vs experimental |
| Design principles as guardrails | `design-rules/principles.md` | Numbered, prioritized principles | Agent decision-making when rules don't cover a case |
| Contribution workflow (5-step) | `AGENTS.md` | Skill contribution section | Guides agent or human adding new components |
| Governance model documentation | `AGENTS.md` | System governance section | Clarifies ownership and modification rules |
| Living documentation pattern | `skills/design-system-audit/SKILL.md` | Audit workflow steps | Skill validates docs match implementation |
| Adoption metrics formula | `quality-gate/criteria.json` | Token coverage criterion | Measurable quality gate for token adoption |

## Cross-References

- Directly informs Token_System structure (Requirement 3) and Component_Library governance (Requirement 6)
- Complements `open-design-main` repo findings on multi-skill architecture
- Aligns with `ui-shadcn` registry-based distribution model
- Design principles section feeds into `design-rules/` artifacts
- Contribution workflow maps to Agentic_Workflow skill addition process (Requirement 2, AC 5)
