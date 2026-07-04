---
sourceId: designing-with-ai-generated
sourceType: book
sourceName: "Designing with AI-Generated"
sourceLocation: "Book/DESIGNING WITH AI-GENERATED.pdf"
appliedTo: []
---

## Key Principles Extracted

1. **AI output requires curation**: Raw AI output needs human design judgment for refinement — AI generates, humans curate
2. **Prompt engineering for visual output**: Specificity in constraints yields better results; vague prompts yield generic output
3. **Style consistency enforcement**: AI-generated assets need post-processing through style guides to maintain visual unity
4. **Iteration protocol**: Generate → Evaluate → Refine prompt → Regenerate (minimum 3 iteration cycles)
5. **Quality threshold definition**: Establish measurable acceptance criteria BEFORE generation to avoid subjective drift

## Concrete Rules & Parameters

- Prompt specificity: Include at minimum: style, mood, constraints, color palette reference, aspect ratio
- Iteration minimum: 3 cycles before accepting AI output
- Consistency check: Compare generated output against 5+ existing assets for style deviation
- Acceptance criteria: Define color tolerance (deltaE < 3), proportion rules, style markers before generating

## Modern Context Application

- **Tokens**: AI-generated assets must conform to token-defined color palette (post-process to match tokens)
- **Component systems**: AI illustrations/icons need standardized sizing, padding, and style tokens applied
- **Quality gates**: Automated checks for color deviation, proportion compliance, accessibility contrast
- **ProdigeUI context**: The entire system IS the quality framework that prevents AI slop in UI generation

## Anti-AI-Slop Indicators

- Expert: Clear acceptance criteria defined before generation; iterative refinement; style guide compliance
- AI slop: First output accepted without evaluation; no consistency checks; no defined quality threshold
- Expert: Generated assets post-processed to match system tokens exactly
- AI slop: Raw AI output used directly with clashing colors, inconsistent styling

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Quality threshold definition | `quality-gate/criteria.json` | Asset acceptance criteria | Measurable gates for generated output |
| Iteration protocol | Skills workflow | Generation cycle steps | Agent follows structured refinement loop |
| Style consistency rules | `design-rules/asset.rules.json` | Style conformance checklist | Ensures visual unity across generated assets |
| Prompt engineering patterns | `prompt-templates/` | Template structure with constraints | Structured prompts prevent vague output |

## Cross-References

- Quality threshold concept directly supports ProdigeUI's Quality_Gate system
- Prompt specificity validates prompt-templates requirement (Req 7)
- Iteration protocol aligns with impeccable-main's audit/fix workflow
- Anti-slop focus matches taste-skill-main's Anti-Default Discipline
