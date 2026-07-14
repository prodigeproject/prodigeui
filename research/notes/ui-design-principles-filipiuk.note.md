---
sourceId: ui-design-principles-filipiuk
sourceType: book
sourceName: "UI Design Principles: Learn to create beautiful and usable interfaces from scratch"
sourceLocation: "Book/UI/UI Design Principles Learn to create beautiful and usable interfaces from scratch (Michael Filipiuk, (ed.)) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

Filipiuk distills UI design principles into focused, actionable rules for creating visually polished and functionally usable interfaces:

- **Proximity defines relationships:** Elements close together are perceived as related. The space between elements is the primary communication tool.
- **Alignment creates order:** Everything must align to something. Misalignment signals either intentionality (breaking rules) or carelessness.
- **Repetition builds recognition:** Consistent visual treatment for consistent meaning. Repetition creates the pattern language users learn.
- **Contrast directs attention:** Differences in size, color, weight, or space create focal points. Without contrast, nothing stands out.
- **Visual balance:** Symmetric layouts feel stable/formal; asymmetric feels dynamic/modern. Choose based on brand personality.
- **White space is not empty:** Active negative space controls reading flow, creates emphasis, and signals premium quality.
- **Typography hierarchy through scale and weight:** Size alone isn't enough. Weight, color, and spacing all contribute to type hierarchy.
- **Color as communication system:** Colors carry meaning. A limited palette with clear semantic roles communicates efficiently.
- **Consistency reduces cognitive effort:** Same appearance = same behavior. Users shouldn't have to re-learn patterns within one interface.
- **Feedback completes the interaction loop:** Every user action requires acknowledgment. Silence = broken interface.

## Concrete Rules & Parameters

| Principle | Parameter | Design Rule |
|-----------|-----------|-------------|
| Proximity ratio | Inner vs outer | Space within group < 50% of space between groups |
| Alignment grid | Tolerance | 0px deviation from alignment grid |
| Repetition threshold | Consistency | 100% visual consistency for same element type |
| Contrast minimum | CTA | 3:1 contrast vs immediate surroundings for primary actions |
| Visual balance | Weight distribution | No more than 60:40 visual weight ratio left-to-right |
| White space | Minimum padding | 16px minimum around any content block |
| Type scale step | Ratio | Each heading level 20-33% larger than next (1.2-1.33 ratio) |
| Color semantics | Max categories | 4-6 semantic color roles (primary, secondary, success, warning, error, info) |
| Consistency | Rule | Same component type = identical visual properties (0 exceptions) |
| Feedback timing | Response | < 200ms visual acknowledgment for any interaction |
| Grouping indicator | Methods | Proximity, shared background, shared border, shared color (use one, not all) |
| Leading hierarchy | Levels | 3 distinct typographic levels minimum per viewport |

## Modern Context Application

**Responsive Design:**
- Proximity ratios maintained proportionally across screen sizes
- Alignment to responsive grid (fewer columns but same alignment discipline)
- Repetition ensures mobile and desktop feel like same product
- Contrast may increase on mobile (smaller elements need stronger differentiation)

**Dark Mode:**
- Proximity and alignment unchanged (structural principles)
- Contrast must be re-verified (maintain same ratio relationships in dark)
- Color semantic meanings preserved (red=error in both modes)
- White space becomes "dark space" but serves identical purpose

**Token Systems:**
- Proximity → spacing tokens with clear inner/outer distinction
- Alignment → grid tokens providing structural reference
- Repetition → tokens ensure identical rendering of same types
- Contrast → color tokens with pre-validated contrast pairs
- White space → padding/margin tokens with minimums
- Type scale → typography tokens with mathematical ratio

**Component States:**
- Feedback as state design: every interactive component has hover/active/focus response
- Consistency: all components of same type share identical state styling
- Contrast: active/selected state clearly distinct from default
- Proximity: form errors positioned near (within group of) their input

## Anti-AI-Slop Indicators

Expert UI (design principles applied):
- Clear spatial grouping (proximity creates obvious relationships)
- Perfect alignment throughout (grid discipline visible)
- Consistent visual treatment for same elements (repetition)
- One clear focal point per section (contrast)
- Balanced layout (visual weight distributed intentionally)
- Generous white space (premium, breathable feel)
- 3+ type hierarchy levels clearly distinguished

AI Slop (principles violated):
- Equal spacing everywhere (no proximity-based grouping)
- Misaligned elements (sloppy positioning)
- Same elements styled differently (inconsistency)
- Everything competing for attention (no contrast hierarchy)
- Top-heavy or side-heavy layouts (unbalanced)
- Cramped content with minimal breathing room
- Single type size/weight (flat typographic hierarchy)

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Proximity ratio | `design-rules/structure.rules.json` | innerSpacingRatio: "< 50% of outer" | Grouping rule |
| Alignment enforcement | `quality-gate/criteria.json` | alignmentTolerance: 0 | Grid discipline |
| Repetition consistency | `quality-gate/criteria.json` | 100% style match for same component type | Pattern language |
| CTA contrast | `quality-gate/criteria.json` | ctaContrastVsSurround: "3:1 minimum" | Attention direction |
| Visual balance | `quality-gate/criteria.json` | layoutWeightRatio: "max 60:40" | Balance check |
| Minimum padding | `tokens/spacing.json` | minContentPadding: 16 | Breathing room |
| Type scale ratio | `tokens/typography.json` | scaleRatio: 1.25 | Hierarchy system |
| Semantic color roles | `tokens/color.json` | roles: [primary, secondary, success, warning, error, info] | Communication system |
| Feedback timing | `tokens/motion.json` | interactionFeedback: "< 200ms" | Response requirement |
| Type hierarchy levels | `quality-gate/criteria.json` | minTypeLevels: 3 per viewport | Visual hierarchy |
| Grouping method | `design-rules/structure.rules.json` | Use ONE grouping method, not multiple simultaneously | Clean grouping |
| Consistency rule | `quality-gate/criteria.json` | Zero exceptions for same-type styling | Cognitive savings |

## Cross-References

- **Ultimate UI Design Roadmap (Filipiuk):** Same author, roadmap format vs principles format—complementary coverage
- **Practical UI (Dannaway):** Overlapping principles with more visual before/after examples
- **Refactoring UI (Wathan/Schoger):** Spacing, contrast, and hierarchy principles in deep visual detail
- **Laws of UX (Yablonski):** Proximity = Law of Proximity; Repetition = Law of Similarity; formally named versions
- **Design of Everyday Things (Norman):** Feedback principle as fundamental design requirement
