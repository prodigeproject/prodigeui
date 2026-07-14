---
sourceId: designers-dictionary-color
sourceType: book
sourceName: "The Designer's Dictionary of Color"
sourceLocation: "Book/colors/The Designers Dictionary of Color (Sean Adams) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Color as cultural communication**: Each color carries cultural/historical meaning that influences user perception — context matters
2. **Color palette curation over generation**: Expert palettes are curated (tested, refined, validated) not algorithmically generated alone
3. **Color families**: Colors work in families (warm reds, cool reds, muted reds) — each variant has different emotional connotation
4. **Color and typography interaction**: Color weight affects type readability — lighter colors need heavier weight; darker colors can be thinner
5. **Production color considerations**: Screen rendering varies — validate on multiple displays and conditions
6. **Historical color meaning**: Colors accrue meaning over time (Tiffany blue, Coca-Cola red) — leverage or avoid associations deliberately

## Concrete Rules & Parameters

- Color family depth: Each primary hue needs 3 tonal variants (vivid, muted, dark) for versatility
- Typography color rule: Text below 14px should use high-contrast colors only (≥7:1 for small text)
- Display variation: Validate palette on minimum 3 display types (budget LCD, quality IPS, OLED)
- Cultural considerations: Document cultural meaning for primary palette colors (minimum 3 cultures)
- Color naming: Use evocative but professional names in style guide (not just "Blue-500")
- Family structure: Each color family = 1 base hue + warm shift variant + cool shift variant

## Modern Context Application

- **Tokens**: Token values validated across display types (not just designed on one screen)
- **Dark mode**: Color families allow dark mode to shift variant (vivid → muted) maintaining family cohesion
- **Component systems**: Components use color families (different variant per state: base, hover=vivid, disabled=muted)
- **Responsive**: Smaller text → stricter contrast requirements (7:1 minimum below 14px)
- **Accessibility**: Small text contrast requirement EXCEEDS WCAG AA (which is 4.5:1) — this is quality standard

## Anti-AI-Slop Indicators

- Expert: Color palette has documented cultural context; multiple tonal variants per hue; tested on multiple displays
- AI slop: Single shade per color; no cultural awareness; designed on one display type
- Expert: Color names are meaningful and documented (not generic "primary-blue")
- AI slop: Auto-generated names with no semantic meaning

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Tonal variants per hue | `tokens/tokens.json` | Color families with vivid/muted/dark variants | State-based color shifting |
| Small text contrast (7:1) | `quality-gate/criteria.json` | Enhanced contrast for text <14px | Quality exceeds minimum WCAG |
| Cultural documentation | `design-rules/color.rules.json` | Cultural meaning annotations | Locale-aware design guidance |
| Display validation | `quality-gate/criteria.json` | Multi-display testing checklist | Consistent cross-device appearance |
| Color-typography interaction | `design-rules/typography.rules.json` | Weight-by-color rules | Readability optimization |
| Family structure | `tokens/tokens.json` | Per-hue variant organization | Coherent state transitions |

## Cross-References

- Color families concept deepens Color Works' palette architecture (adds tonal variants)
- Cultural awareness confirms Color Theory's acknowledgment of cultural color meaning
- Typography-color interaction connects to Elements of Typographic Style's weight principles
- Display validation aligns with Color Vision and Colorimetry's metamerism awareness
- Small text contrast exceeds WCAG requirement (Req 4.6) — ProdigeUI quality standard is higher
- Naming philosophy matches Token_System's semantic naming requirement (Req 3.3)
