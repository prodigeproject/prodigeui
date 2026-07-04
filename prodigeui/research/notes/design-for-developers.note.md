---
sourceId: design-for-developers
sourceType: book
sourceName: "Design for Developers (Adrian Twarog)"
sourceLocation: "Book/UX/Design for Developers (Adrian Twarog, George Moller) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

- **Design Literacy for Code:** Developers can produce professional-quality design by following systematic rules — design taste is learnable, not innate.
- **Constraint-Based Design:** Great design comes from constraints, not freedom. Limiting choices (color palette, type scale, spacing) produces more cohesive results.
- **Type Scale as Foundation:** Typography establishes hierarchy before any other design decision. Choose a modular scale (1.2, 1.25, 1.333, 1.5) and derive all sizes mathematically.
- **Color from System:** Generate color palettes algorithmically from a single base hue using HSL manipulation. Semantic roles (primary, secondary, surface, error) create purpose-driven application.
- **Layout through Grid:** All layouts should follow a grid system. CSS Grid and Flexbox make systematic layout accessible to developers without design tools.
- **Visual Balance:** Elements balance through size, color weight, position, and whitespace. Heavy elements need counterbalancing — asymmetric balance is more dynamic than symmetric.
- **Consistency Trumps Creativity:** For product UI, consistency (predictable patterns) is more valuable than creative novelty. Reserve creativity for brand moments.

## Concrete Rules & Parameters

- Type scale ratios: 1.2 (minor third), 1.25 (major third), 1.333 (perfect fourth), 1.5 (perfect fifth)
- Body text minimum: 16px web, 14px mobile dense contexts
- Line height: 1.4-1.6 for body text, 1.1-1.3 for headings
- Color palette generation: 1 primary + 1 secondary + neutral scale (50-900) + semantic (success/warning/error/info)
- Spacing scale from base unit: 4px micro, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
- Border radius consistency: pick one scale (0, 4, 8, 12, 16, 999) and use everywhere
- Shadow elevation: 3-5 levels with consistent spread/blur ratio increase per level
- Grid: 12-column for desktop, 8-column tablet, 4-column mobile
- Max content width: 1200-1440px with centered container

## Modern Context Application

- **Token Scale Generation:** Type scale ratios and spacing progressions directly generate token values for the Token_System.
- **AI as Constrained Developer:** AI agents are the ultimate "developer who needs design rules" — Twarog's systematic approach translates perfectly to agent constraints.
- **Algorithmic Color:** HSL-based palette generation can be encoded as a skill/function that agents execute to produce harmonious palettes.
- **Grid as Layout Primitive:** Grid system with defined columns per breakpoint becomes a design rule that agents must follow.

## Anti-AI-Slop Indicators

| Systematic Developer Design | AI Slop |
|---|---|
| Mathematical type scale (consistent ratios) | Arbitrary font sizes without relationship |
| HSL-derived color palette with roles | Random colors without systematic generation |
| Consistent border-radius from scale | Mixed radius values (2px, 7px, 11px, 20px) |
| Grid-based layout with column system | Elements positioned without grid structure |
| Defined shadow elevation levels | Inconsistent shadows (different spreads/colors) |
| Base-unit spacing (multiples of 4/8) | Random spacing values |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| Type scale ratios | `tokens/primitives/typography.json` | Scale ratio definition | Mathematical font size generation |
| Color palette generation (HSL) | `skills/color-system/SKILL.md` | Palette generation workflow | Agent creates harmonious palettes |
| Spacing scale from base unit | `tokens/primitives/spacing.json` | Complete spacing scale | 4/8px base with defined steps |
| 12/8/4 column grid | `design-rules/layout.md` | Responsive grid specification | Column counts per breakpoint |
| Border radius scale | `tokens/primitives/radius.json` | Radius token values | Consistent roundness options |
| Shadow elevation levels | `tokens/primitives/shadow.json` | Shadow elevation scale | 3-5 defined elevation levels |
| Max content width | `design-rules/layout.md` | Container width constraint | 1200-1440px maximum |

## Cross-References

- Type scale feeds directly into `tokens/primitives/typography.json` (Requirement 3)
- Spacing aligns with `app-design-apprentice` 8px base unit
- Color generation methodology complements `design-systems-handbook` token approach
- Grid rules feed `design-rules/layout.md` (Requirement 9 AC 3)
- Constraint-based philosophy aligns with `simple-and-usable` Remove strategy
- Validates that ProdigeUI's rule-based approach works for non-designers (which AI agents effectively are)
