---
sourceId: color-works
sourceType: book
sourceName: "Color Works: Best Practices for Graphic Designers"
sourceLocation: "Book/colors/Color Works Best Practices for Graphic Designers An Essential Guide to Understanding and Applying Color Design Principles (Eddie Opara, John Cantwell) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Color system architecture**: Build palettes as SYSTEMS — primary, secondary, neutral, semantic, accent — not isolated picks
2. **Color relationships define brand**: Specific hue combinations at specific proportions CREATE identity (not individual colors)
3. **Functional color categories**: Brand colors ≠ UI colors — separate aesthetic palette from functional palette (status, surface, text)
4. **Contrast as communication**: High contrast = importance/urgency; Low contrast = secondary/ambient; Contrast IS hierarchy
5. **Color reduction principle**: Fewer colors = stronger system; constrain to minimum colors needed for communication
6. **Environmental color testing**: Colors look different on screens vs print, daylight vs office lighting — test in actual context
7. **Sequential color scales**: For data visualization — single-hue luminance ramps or multi-hue divergent scales
8. **Cultural color awareness**: Red=luck(China)/danger(West); White=purity(West)/mourning(East) — know your audience
9. **Color accessibility as design constraint**: Accessibility is not compromise — it's a constraint that produces better design (forces clarity)
10. **Named color palettes**: Every production color needs a semantic name and defined use context (not just hex codes)

## Concrete Rules & Parameters

- Palette size: 1 primary + 1-2 secondary + 5-7 neutrals + 4 semantic (error/warning/success/info) + 1-2 accent = 12-16 total colors
- Each color: 9-11 shade steps (50, 100, 200... 900, 950) for complete scale
- Neutral derivation: Add 3-5% of primary hue to grays for cohesion
- Contrast as hierarchy: Primary CTA ≥7:1 contrast; Secondary CTA ≥4.5:1; Tertiary ≥3:1
- Color reduction: Max 3 hues visible on any single screen/component (excluding neutrals)
- Semantic colors: Error=red-family (hue 0-10°), Warning=amber (hue 35-45°), Success=green (hue 140-160°), Info=blue (hue 200-220°)
- Data viz scales: Single-hue with 5-7 distinguishable steps (DeltaE ≥5 between adjacent steps)

## Modern Context Application

- **Tokens**: Palette architecture maps directly to token structure (primitive → semantic → component layers)
- **Dark mode**: Palette needs dual lightness tracks — light mode text on light surface, dark mode text on dark surface
- **Component systems**: Components consume semantic colors, never palette colors directly (indirection enables theming)
- **Responsive**: Color system is viewport-independent; but color PROPORTION may shift (mobile = less accent surface area)
- **Design tokens**: Named color system IS the token system — semantic name + role + value
- **AI context**: Agent MUST use semantic color names in output, never raw hex values

## Anti-AI-Slop Indicators

- Expert: Systematic palette (derived scales, named roles, enforced proportions); neutrals tinted with brand
- AI slop: Random hex values; no palette relationship; pure gray neutrals; semantic colors from different hue families
- Expert: Max 3 hues per view; clear contrast hierarchy between interactive elements
- AI slop: 5+ competing hues; all CTAs same visual weight; no contrast-based hierarchy
- Expert: Semantic colors within prescribed hue ranges (red for error, not purple)
- AI slop: Arbitrary semantic color choices (pink for error, teal for success)

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Palette architecture (5 categories) | `tokens/tokens.json` | Color token structure (primary/secondary/neutral/semantic/accent) | System not random picks |
| 9-11 shade steps per hue | `tokens/tokens.json` | Per-color scale (50-950) | Complete shade coverage |
| Neutral derivation rule | `design-rules/color.rules.json` | "Tint neutrals with primary hue" rule | Cohesive palette integration |
| Semantic hue ranges | `design-rules/color.rules.json` | Prescribed hue ranges per semantic role | Prevents arbitrary semantic colors |
| Contrast hierarchy levels | `design-rules/color.rules.json` | CTA contrast tiers (primary/secondary/tertiary) | Contrast = importance |
| 3-hue-per-view limit | `quality-gate/criteria.json` | View color complexity check | Prevents visual chaos |
| Named color requirement | Token naming convention | Semantic names, never raw values | Agents use names not hex |
| Data viz scale specs | `design-rules/color.rules.json` | Sequential/divergent scale parameters | DeltaE-validated data colors |
| Palette size constraints | `design-rules/color.rules.json` | Total color count limits | Forces purposeful palette |
| Cultural color notes | `design-rules/color.rules.json` | Cultural context annotations | Locale-aware color choices |

## Cross-References

- Palette architecture directly maps to Token_System requirement (Req 3: primitive → semantic → component)
- Contrast hierarchy confirms Visual Design Solutions' hierarchy-through-contrast principle
- Semantic hue ranges validated by UI Design Principles' color-as-function rules
- Neutral derivation aligns with Color Theory's hue-derived grays concept
- DeltaE-validated scales confirmed by Color Vision and Colorimetry's perceptual measurement
- Named colors = Design of Everyday Things' signifier concept applied to code
- Accessibility-as-constraint matches White Hat UX's ethical design framing
- 3-hue limit confirms Experiencing Design's cognitive load management
