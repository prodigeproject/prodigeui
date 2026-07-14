---
sourceId: colour-perception
sourceType: book
sourceName: "Colour Perception: Mind and the Physical World"
sourceLocation: "Book/colors/Colour Perception Mind and the Physical World (Rainer Mausfeld, Dieter Heyer) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Color constancy**: Perception adjusts for illumination — same object looks "same color" under different lights (design implication: relative contrast matters more than absolute values)
2. **Chromatic induction**: Surrounding colors shift perceived color of central element — context is everything
3. **Attention and color**: Saturated, warm colors capture attention involuntarily (pre-attentive processing)
4. **Color memory**: People remember colors as more saturated/pure than they actually were — design for recognition, not recall
5. **Surface vs illuminant perception**: Brain separates surface color from lighting — flat UI removes this depth cue

## Concrete Rules & Parameters

- Pre-attentive color: Saturated warm accent detected in <200ms without conscious search
- Color memory bias: Users will perceive brand colors as ~10% more saturated than displayed — slightly desaturate for accuracy
- Chromatic induction: Adjacent complementary colors amplify each other; adjacent similar colors merge
- Attention capture: Max 1 saturated accent element per viewport to prevent competition
- Background influence: Test all component colors on actual background (not isolated swatch cards)

## Modern Context Application

- **Tokens**: Accent colors (high saturation) limited to specific semantic roles (`color.accent.*`)
- **Dark mode**: Color constancy means users adapt — but transition should be gradual (not jarring instant switch)
- **Component systems**: Components tested on their actual surfaces, not in isolation (chromatic induction)
- **Accessibility**: Pre-attentive color is a strength BUT must be paired with secondary cue for color-deficient users

## Anti-AI-Slop Indicators

- Expert: Single accent per viewport; colors tested in context (on actual backgrounds); saturation controlled
- AI slop: Multiple high-saturation elements competing; colors chosen from swatch card without context testing
- Expert: Dark/light mode transitions use smooth color interpolation (animation)
- AI slop: Instant theme switch with no transition consideration

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Single accent per viewport | `quality-gate/criteria.json` | Accent color density check | Prevents attention competition |
| Context testing requirement | `quality-gate/criteria.json` | "Test on actual surface" rule | Chromatic induction awareness |
| Pre-attentive color for CTAs | `design-rules/color.rules.json` | Accent usage guidelines | Leverage attention capture responsibly |
| Theme transition smoothing | `motion/presets/theme-switch.json` | Color interpolation duration | Gradual adaptation, not jarring |
| Saturation control | `tokens/tokens.json` | Accent saturation range limits | Controlled attention signals |

## Cross-References

- Pre-attentive processing validates Color Works' contrast-as-communication principle
- Chromatic induction confirms Color Vision and Colorimetry's relative perception emphasis
- Single accent rule connects to Experiencing Design's cognitive load limits
- Context testing aligns with Designing Interface Animation's "motion in context" evaluation
- Color constancy relates to dark mode design (users adapt, but smoothly)
