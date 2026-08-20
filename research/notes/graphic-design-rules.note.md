---
sourceId: graphic-design-rules
sourceType: book
sourceName: "Graphic Design Rules: 365 Essential Design Dos and Don'ts"
sourceLocation: "Book/graphic-design/Graphic Design Rules (Stefan G. Bucher) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Limit Your Palette**: Fewer colors = stronger identity. Rule: max 3-5 colors for any composition (primary, secondary, accent, 2 neutrals). Each color earns its place by serving a distinct function. Token system: limit semantic color roles.

2. **Respect the Grid, Then Know When to Break It**: The grid exists to create order. Follow it religiously for body content. Break it ONLY for primary focal points (heroes, CTAs) and make the break dramatic enough to appear intentional. Subtle grid breaks look like mistakes.

3. **White Space is Not Wasted Space**: White space (negative space) improves readability, directs attention, and communicates luxury/quality. Cramming = amateur; breathing room = professional. More white space around an element = more perceived importance.

4. **Typography: Less is More**: Limit to 2 typefaces maximum. Use weight/size/case variations within those families for hierarchy. Each typographic choice must serve a purpose. Random type variation = visual chaos.

5. **Align Everything**: Find invisible alignment lines and snap elements to them. Inconsistent alignment (off by 2-3px) is more disturbing than dramatic intentional misalignment. In code: use grid/flexbox alignment, not approximate positioning.

6. **Contrast Isn't Just Black and White**: Contrast operates on multiple dimensions: size, weight, color, texture, density, direction. Use at least 2 contrast types simultaneously for hierarchy. Bold + large + colored = strong hierarchy signal.

7. **Every Element Needs a Job**: If you can't articulate what an element does (informs, guides, separates, emphasizes, brands), remove it. Decoration without function is noise. In component systems: every prop/variant must solve a documented use case.

8. **Consistency Builds Trust**: Identical elements styled identically everywhere. Similar elements styled similarly. Different elements styled distinctly. Breaking this contract confuses users and erodes trust. Tokens enforce this.

9. **Hierarchy Before Decoration**: Establish information hierarchy FIRST (what's most important, second, third). THEN apply visual treatment. Starting with decoration before hierarchy = pretty but confusing.

10. **Size Matters (Proportionally)**: Size differences between elements communicate importance relationships. Differences must be large enough to perceive — minimum 1.25× ratio between adjacent hierarchy levels. Subtle differences cause confusion.

## Concrete Rules & Parameters

| Rule | Measurable Parameter | Implementation |
|------|---------------------|----------------|
| Palette Limit | Max 5 semantic colors + neutral scale | Token color role limit |
| Grid Adherence | Body content: 100% grid-aligned; focal points: intentional 10% deviation | Quality gate grid check |
| White Space | Min component padding: 16px (mobile), 24px (desktop); section margin > component padding | Spacing token hierarchy |
| Typography Limit | Max 2 typefaces; max 4 weights per face | Token typography constraints |
| Alignment Precision | 0px tolerance for alignment (no "close enough") | CSS grid/flexbox enforcement |
| Contrast Multiplier | Hierarchy steps use ≥2 simultaneous contrast types | Design rule multi-contrast |
| Element Justification | Every visual element documented purpose | Quality gate necessity check |
| Consistency Rule | Same semantic token for same purpose across all instances | Token adherence criterion |
| Hierarchy Before Style | Component hierarchy defined before visual treatment applied | Component spec structure |
| Size Ratio | Min 1.25× between adjacent hierarchy levels | Typography/size scale ratio |

## Modern Context Application

- **Palette Limit + Token System**: Token system naturally limits colors by defining fixed semantic roles. Adding a new color means adding a new ROLE (which requires justification), not just a new hex value. This is structural palette limitation.
- **Grid Adherence + CSS Grid**: `display: grid` with `grid-template-columns: repeat(12, 1fr)` enforces grid at the code level. `align-items`, `justify-items` enforce alignment. The technology makes rule-following easier than rule-breaking.
- **White Space + Responsive**: White space scales with viewport — not removed on mobile. Instead, reduced proportionally. `padding: clamp(16px, 4vw, 48px)` ensures breathing room at all sizes.
- **Typography + Variable Fonts**: Modern variable fonts provide full weight/width spectrum in single file. But the RULE still applies: limit to 3-4 weight POSITIONS even with full range available. Availability ≠ necessity.
- **Alignment + Subpixel Rendering**: Browser renders at subpixel precision. Using px, rem, grid, and flexbox prevents misalignment. Avoid: relative positioning with arbitrary values, percentage-based sizes without grid.
- **Consistency + Component Tokens**: Component tokens are THE consistency mechanism. Button uses `color.primary` → always consistent. If someone uses a raw hex → inconsistency introduced. Quality gate catches raw values.
- **Element Justification + Quality Gate**: For AI-generated UIs: quality gate must ask "what does this element DO?" for every decoration. If no functional answer → flag for removal.

## Anti-AI-Slop Indicators

| Rules-Following Expert | AI-Slop Rule Violations |
|-----------------------|------------------------|
| 3-5 colors max, each with clear role | 8+ colors with overlapping or unclear purposes |
| Grid discipline visible in alignment | Elements "approximately" aligned (off by 2-5px) |
| Generous whitespace creating hierarchy | Cramped layouts or wasted space without purpose |
| 2 typefaces, 3-4 weights, clear hierarchy | Multiple typefaces, random weights, no hierarchy |
| Every element traceable to a function | Decorative elements (lines, shapes, gradients) without function |
| Contrast on multiple dimensions (size + weight + color) | Single-dimension contrast (only color for hierarchy) |
| Consistent styling for same-purpose elements | Same-purpose elements styled differently in different sections |
| Hierarchy established through size ratio (≥1.25×) | Similar-sized elements competing for attention |
| Intentional, dramatic grid breaks (rare) | Subtle inconsistencies that look like errors |
| Size differences large enough to be unmistakable | Ambiguous sizing (is this heading or subheading?) |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Palette limitation rule | `tokens/semantic.tokens.json` | Max 5 color roles + neutral scale (structural limit) | Prevents color proliferation |
| Grid adherence rule | `quality-gate/criteria.json` | `grid-adherence` criterion: 100% alignment for body content | Catches sloppy alignment |
| White space requirement | `tokens/primitive.tokens.json` | Min spacing values per context (mobile: 16px, desktop: 24px) | Enforces breathing room |
| Typography limits | `tokens/primitive.tokens.json` | `fontFamily` array max length: 2; `fontWeight` max entries: 4 | Structural variety limitation |
| Alignment precision | `quality-gate/criteria.json` | `grid-adherence` criterion: 0px tolerance | No "close enough" alignment |
| Multi-contrast hierarchy | `design-rules/typography.rules.json` | Hierarchy steps use ≥2 contrast types simultaneously | Clear, unmistakable hierarchy |
| Element justification | `quality-gate/criteria.json` | `anti-slop-patterns` criterion: decorative elements flagged | Catches functionless decoration |
| Consistency enforcement | `quality-gate/criteria.json` | `token-coverage` criterion: same token for same purpose | Prevents inconsistent styling |
| Size ratio minimum | `tokens/primitive.tokens.json` | Typography scale ratio ≥1.25 between steps | Perceivable hierarchy differences |
| Hierarchy-first approach | `components/` manifest structure | Component specs define hierarchy before visual treatment | Structure before decoration |

## Cross-References

- **Design Elements (Samara)**: Overlapping principles presented as theoretical framework vs Bucher's practical rules
- **Grid Systems (Mueller-Brockmann)**: Deep theory behind Bucher's grid adherence rule
- **Universal Principles of Design (Lidwell)**: Scientific backing for contrast, hierarchy, consistency rules
- **Practical UI (Dannaway)**: Modern web-specific application of many of Bucher's 365 rules
- **Design Elements 3rd Edition**: Updated digital applications of the same core principles
- **shadcn/ui Token System**: Modern implementation of palette limitation and consistency principles
