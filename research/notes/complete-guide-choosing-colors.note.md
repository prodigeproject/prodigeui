---
sourceId: complete-guide-choosing-colors
sourceType: book
sourceName: "The Complete Guide for Choosing Colors"
sourceLocation: "Book/colors/The Complete Guide for Choosing Colors (Ran Segall, Flux Academy) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Start with one color**: Choose primary brand color first; derive everything else from it (systematic, not additive)
2. **Color roles in UI**: Background, Surface, Primary, Secondary, Accent, Text, Border — each role has constraints
3. **Neutral generation**: Derive neutrals by desaturating primary (3-5% saturation, matching hue) — creates cohesion
4. **Light/Dark mode pair thinking**: Design both modes simultaneously — ensure token names work in both contexts
5. **60-30-10 for UI specifically**: 60% neutrals/background, 30% primary on surfaces/components, 10% accent on CTAs/focus

## Concrete Rules & Parameters

- Primary color selection: Consider industry conventions + desired emotion + contrast potential
- Neutral palette: 7-9 shades from primary hue at 3-5% saturation
- Text colors: Never pure black (#000) or pure white (#fff) — use 90-95% lightness and 5-10% lightness
- Background-to-surface contrast: ≥1.1:1 ratio (subtle but perceptible layer differentiation)
- Accent to primary relationship: Minimum 60° hue separation for clear differentiation
- Border colors: Primary hue at 10-20% opacity or neutral at matching lightness step

## Modern Context Application

- **Tokens**: Role-based token naming matches these UI color roles exactly (`color.background`, `color.surface`, `color.primary`)
- **Dark mode**: Same token names, different values — this guide's dual-mode thinking is the token model
- **Component systems**: Components reference role tokens; palette changes are theme-level only
- **Responsive**: Color roles are viewport-independent
- **AI context**: Agent always specifies colors by ROLE not by value ("use color.accent" not "use #FF6B35")

## Anti-AI-Slop Indicators

- Expert: Cohesive palette derived from one hue; neutrals tinted; roles clearly defined
- AI slop: Disconnected colors; pure gray neutrals (#888, #ccc); no role differentiation
- Expert: Never pure black or white; text/bg derived from same hue family
- AI slop: #000 text on #fff background (maximum contrast but no personality)

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Color role taxonomy | `tokens/tokens.json` | Semantic color token structure | Direct mapping to token names |
| Neutral derivation method | `design-rules/color.rules.json` | Neutral generation formula | Consistent, derivable neutrals |
| No pure black/white rule | `quality-gate/criteria.json` | Text/background value checks | Prevents harsh contrast |
| 60° accent separation | `design-rules/color.rules.json` | Hue relationship constraints | Clear role differentiation |
| Dual-mode thinking | `themes/` | Light + dark theme pair | Designed together, not retrofit |
| Layer contrast minimum | `design-rules/color.rules.json` | Surface differentiation ratio | Perceptible depth layers |

## Cross-References

- Color roles match Token_System requirement (Req 3.3: semantic naming like `color.surface.primary`)
- 60-30-10 confirmed by Color Theory and Color Works
- Neutral derivation aligns with Color Works' neutral tinting principle
- Dual-mode thinking validates Theme_Catalog requirement (Req 4.1: light + dark minimum)
- No pure black/white matches contemporary dark mode best practices (tixl-main)
- Role taxonomy matches pearl-ui-main's role-based token naming
