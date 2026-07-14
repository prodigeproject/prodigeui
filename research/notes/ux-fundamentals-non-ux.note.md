---
sourceId: ux-fundamentals-non-ux
sourceType: book
sourceName: "UX Fundamentals for Non-UX Professionals"
sourceLocation: "Book/"
appliedTo: []
---

## Key Principles Extracted

1. **Mental models matter**: Users approach interfaces with existing expectations; align design with their mental models
2. **Cognitive biases in UI**: Anchoring (first number seen influences), framing (how options presented matters), serial position (first/last remembered)
3. **Fitts's Law practical**: Time to target = f(distance/size) — larger targets closer to cursor = faster interaction
4. **Hick's Law practical**: Decision time = f(number of choices) — reduce options to speed decisions
5. **Jakob's Law**: Users spend most time on OTHER sites — follow conventions users already know

## Concrete Rules & Parameters

- Fitts's Law: Primary CTA minimum 44px and within 200px of likely cursor position (after page load)
- Hick's Law: Max 5-7 options before grouping/categorizing (choice paralysis threshold)
- Serial position: Most important items first AND last in lists (primacy + recency effect)
- Anchoring: Show recommended/default option first or most prominently
- Jakob's Law: 80%+ of interface patterns should follow industry conventions

## Modern Context Application

- **Component systems**: Button sizes enforce Fitts's Law minimums via tokens
- **Tokens**: Option count limits as design rules (not tokens, but rules referencing token-sized components)
- **Responsive**: Fitts's Law critical on mobile (thumb zone + target size)
- **AI context**: Agent must follow conventions (Jakob's Law) unless explicitly briefed to innovate
- **Accessibility**: Fitts's Law and Hick's Law improvements benefit all users including assistive tech users

## Anti-AI-Slop Indicators

- Expert: Options limited per view; primary actions large and accessible; follows platform conventions
- AI slop: Overwhelming option counts; small targets; novel navigation patterns without justification
- Expert: Information ordered by importance (serial position effect leveraged)
- AI slop: Random ordering; important items buried in middle of lists

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Fitts's Law minimums | `tokens/tokens.json` | `size.interactive.min` token | Enforced minimum target size |
| Hick's Law limits | `design-rules/layout.rules.json` | `options.maxVisible` rule | Prevents choice paralysis |
| Serial position rule | `design-rules/layout.rules.json` | Content ordering guidelines | Important items first/last |
| Jakob's Law convention | `quality-gate/criteria.json` | Convention compliance check | Reject novel patterns without justification |
| Anchoring for defaults | `design-rules/interaction.rules.json` | Default/recommended prominence | Guide user to good defaults |

## Cross-References

- Fitts's Law confirms Mobile App UX Principles' touch target sizing
- Hick's Law validates Experiencing Design's progressive disclosure
- Jakob's Law IS Don't Make Me Think's "follow conventions" principle
- Mental models align with Design of Everyday Things' conceptual models
- Cognitive biases inform White Hat UX's ethical choice architecture
