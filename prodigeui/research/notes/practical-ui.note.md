---
sourceId: practical-ui
sourceType: book
sourceName: "Practical UI"
sourceLocation: "Book/UI/Practical UI (Adham Dannaway)/Practical UI (Adham Dannaway) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

Adham Dannaway presents design rules as binary do/don't decisions with before/after comparisons. The most systematic approach to measurable UI rules:

- **Align everything:** Every element should align to a grid or to other elements. Random placement = amateur design.
- **Use a consistent spacing system:** Multiples of 4px or 8px. Never arbitrary values.
- **Create visual hierarchy with size, weight, contrast:** Three independent channels for conveying importance.
- **Keep text readable:** Line height 1.4-1.6, line length 45-75 characters, sufficient contrast.
- **Use consistent border radius:** One radius value (or a small system) across the entire interface.
- **Limit your font choices:** Max 2 fonts (1 for headings, 1 for body). Often 1 is enough.
- **Use whitespace generously:** Space is the most powerful organizing tool. More space = more clarity.
- **Make interactive elements look interactive:** Buttons look clickable, inputs look fillable. Affordance through visual cues.
- **Group related elements, separate unrelated:** Proximity is the primary grouping mechanism.
- **Use consistent icon style:** Same weight, same size grid, same level of detail across all icons.
- **Reduce visual noise:** Remove unnecessary borders, backgrounds, and decorative elements.
- **Test at multiple sizes:** Design must work from mobile to widescreen.

## Concrete Rules & Parameters

| Rule | Parameter | Specific Value |
|------|-----------|----------------|
| Base spacing unit | Grid | 8px (or 4px for fine adjustments) |
| Spacing scale | Values | 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px |
| Line height (body) | Range | 1.4 - 1.6 |
| Line height (headings) | Range | 1.1 - 1.3 |
| Max line length | Characters | 45-75ch (optimal: 60ch) |
| Max fonts | Count | 2 (ideally 1 with weight variations) |
| Font weights | Allowed | 400, 600, 700 (max 3 weights) |
| Border radius | System | Pick ONE value or small scale (4px, 8px, full) |
| Button height | Minimum | 40px desktop, 48px mobile |
| Input height | Match | Same height as buttons (consistent form elements) |
| Icon grid | Size | 24×24px standard, 16×16px small, 32×32px large |
| Icon stroke weight | Consistency | Same stroke width across all icons (1.5-2px) |
| Card padding | Standard | 16-24px internal padding |
| Section spacing | Between sections | 48-96px vertical space between page sections |
| Content max-width | Container | 1200px typical; text: 720px |
| Color palette | Maximum | 1 primary + 1 secondary + neutrals + semantic (success/error/warning) |
| Contrast ratio | Text | 4.5:1 minimum (body), 3:1 (large text/UI elements) |
| Alignment tolerance | Pixel-perfect | 0px misalignment tolerance |

## Modern Context Application

**Responsive Design:**
- 8px grid scales naturally across breakpoints (smaller multipliers on mobile)
- Line length constraints create natural responsive behavior (content never goes full-width)
- Button/input heights scale: 40px desktop → 48px mobile (touch target)
- Section spacing reduces proportionally: 96px desktop → 48px mobile
- Icon size adjusts: standard 24px → compact 20px on mobile

**Dark Mode:**
- Same spacing/alignment rules apply (structure is color-independent)
- Border radius unchanged (geometric system independent of color)
- Contrast ratios must be re-verified (4.5:1 in dark mode too)
- Reduce visual noise even further in dark mode (fewer borders, use elevation instead)
- Card backgrounds shift from lighter-than-page to slightly-lighter-than-dark-bg

**Token Systems:**
- Direct 1:1 mapping: every rule = a token or constraint
- Spacing tokens: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
- Radius tokens: [0, 4, 8, 12, 9999] (minimal scale)
- Typography tokens: line-height, max-width, font-weight as constrained values
- Elevation tokens: card-padding, section-gap as semantic spacing
- Color tokens: limited palette enforced through token availability

**Component States:**
- Interactive affordance: buttons use filled/outlined/text variants (clear clickability)
- Form consistency: all inputs same height as adjacent buttons
- Card system: consistent padding + radius + shadow creates containment language
- Icon consistency: all icons render at same visual weight within a component

## Anti-AI-Slop Indicators

Expert UI (Practical UI rules):
- Perfect pixel alignment visible throughout (grid discipline)
- Consistent spacing rhythm (same gaps between similar elements)
- Clear interactive affordances (buttons obviously buttons, inputs obviously inputs)
- Generous whitespace creating calm, organized appearance
- Maximum 2 fonts, 3 weights
- Single border-radius value or minimal scale
- Icons all same visual weight and grid size
- Related content grouped with clear spatial relationship

AI Slop (violates Practical UI):
- Misaligned elements (text, cards, buttons at inconsistent positions)
- Arbitrary spacing (14px here, 17px there, 22px elsewhere)
- Unclear interactivity (is that text a button? is that a link?)
- Cramped layouts with insufficient breathing room
- 4+ fonts or random weight usage
- Mixed border-radius values without system
- Icons of different styles/weights/sizes mixed together
- No spatial grouping (everything equidistant)

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| 8px grid system | `tokens/spacing.json` | baseUnit: 8, scale: [4-128] | Foundation of spatial system |
| Line height system | `tokens/typography.json` | body: 1.5, heading: 1.2 | Readability parameters |
| Max line length | `tokens/typography.json` | maxWidth: "65ch" | Reading comprehension |
| Font limit | `design-rules/structure.rules.json` | maxFonts: 2, maxWeights: 3 | Typography discipline |
| Border radius | `tokens/radius.json` | Minimal scale [0, 4, 8, 9999] | Geometric consistency |
| Button/input height | `tokens/sizing.json` | minHeight: 40 (desktop), 48 (mobile) | Interactive element sizing |
| Icon system | `tokens/sizing.json` | iconGrid: [16, 20, 24, 32] | Visual weight consistency |
| Card padding | `tokens/spacing.json` | cardPad: 16-24 | Containment breathing room |
| Section spacing | `tokens/spacing.json` | sectionGap: [48, 64, 96] | Page rhythm |
| Content max-width | `design-rules/structure.rules.json` | containerMax: 1200, textMax: 720 | Layout constraint |
| Alignment tolerance | `quality-gate/criteria.json` | alignmentTolerance: 0 | Pixel-perfect enforcement |
| Color limit | `design-rules/structure.rules.json` | 1 primary + 1 secondary + neutrals + semantic | Palette discipline |
| Contrast enforcement | `quality-gate/criteria.json` | WCAG AA: 4.5:1 / 3:1 | Readability requirement |
| Visual noise reduction | `quality-gate/criteria.json` | Prefer spacing/shadow over borders | Clean separation |

## Cross-References

- **Refactoring UI (Wathan/Schoger):** Nearly identical spacing/typography philosophy; compatible systems that reinforce each other
- **Laws of UX (Yablonski):** Proximity, Similarity, Fitts's Law are the theoretical basis for these practical rules
- **100 Things Every Designer (Weinschenk):** Cognitive science underlying why alignment and consistency matter
- **Design of Everyday Things (Norman):** Affordances = "make interactive elements look interactive"
- **Practical UI 2nd Edition:** Updated version with additional rules and modern patterns
- **UI Design Principles (Filipiuk):** Overlapping but less systematic presentation of similar rules
