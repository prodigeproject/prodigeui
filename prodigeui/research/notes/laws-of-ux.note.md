---
sourceId: laws-of-ux
sourceType: book
sourceName: "Laws of UX: Using Psychology to Design Better Products & Services"
sourceLocation: "Book/psychology/Laws of UX - Using Psychology to Design Better Products  Services (Jon Yablonski) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

Jon Yablonski codifies psychological research into 21 named, parameterizable UX laws. Each law is a concise principle backed by research with clear design implications. The most impactful for automated design systems:

- **Hick's Law:** Decision time increases logarithmically with number of choices. T = b × log₂(n + 1). Fewer options = faster decisions.
- **Fitts's Law:** Time to acquire a target is a function of distance and target size. T = a + b × log₂(1 + D/W). Larger targets closer to cursor = faster interaction.
- **Miller's Law:** Average person holds 7±2 items in working memory. Group content into chunks of 5-9 items.
- **Jakob's Law:** Users spend most time on OTHER sites/apps. They expect yours to work the same way. Follow conventions.
- **Aesthetic-Usability Effect:** Users perceive aesthetically pleasing design as more usable, regardless of actual usability.
- **Doherty Threshold:** Productivity soars when system response time is < 400ms. Above this, users lose flow state.
- **Law of Proximity:** Elements near each other are perceived as related. Spacing defines grouping.
- **Law of Similarity:** Elements sharing visual properties are perceived as related. Consistent styling = perceived connection.
- **Law of Common Region:** Elements within a boundary are perceived as a group. Cards, containers, dividers create groups.
- **Peak-End Rule:** People judge experiences based on peak moment and end moment, not average. Last impression matters most.
- **Serial Position Effect:** First and last items in a list are remembered best. Place critical content at beginning/end.
- **Von Restorff Effect (Isolation Effect):** Items that stand out from their surroundings are more memorable. Use contrast for CTAs.
- **Zeigarnik Effect:** Incomplete tasks are remembered better than complete ones. Progress indicators motivate completion.
- **Tesler's Law (Conservation of Complexity):** Every system has irreducible complexity. Question is who bears it: user or system.
- **Postel's Law:** Be liberal in what you accept, conservative in what you output. Flexible input, predictable output.
- **Parkinson's Law:** Work expands to fill available time. Constraints and deadlines improve focus.

## Concrete Rules & Parameters

| Law | Parameter | Design Rule | Threshold |
|-----|-----------|-------------|-----------|
| Hick's Law | Choice count | Limit options per decision point | ≤ 5-7 options in navigation, ≤ 4 primary actions |
| Fitts's Law | Target size | Interactive elements minimum size | 44×44px touch, 32×32px pointer |
| Fitts's Law | Target distance | Primary actions near current focus | CTA within 1 thumb-reach zone on mobile |
| Miller's Law | Chunk size | Group related items | 5-9 items per chunk (7±2) |
| Doherty Threshold | Response time | System feedback speed | < 400ms for perceived instantaneity |
| Doherty Threshold | Animation duration | Transition perceived as instant | 100-300ms for UI transitions |
| Law of Proximity | Spacing ratio | Related vs unrelated spacing | Inner spacing ≤ 50% of outer spacing |
| Von Restorff Effect | Contrast ratio | CTA distinctiveness | Primary CTA: 3:1 contrast vs surroundings |
| Jakob's Law | Convention adherence | Follow platform patterns | Navigation, form layout, interaction patterns |
| Aesthetic-Usability | Visual polish | Consistent spacing, alignment | Zero pixel misalignment tolerance |
| Serial Position | Content ordering | Critical items placement | Key info in first 2 and last 1 positions |
| Zeigarnik Effect | Progress visibility | Show completion status | Progress bar for multi-step flows |
| Law of Similarity | Visual consistency | Same type = same style | Components of same type share 100% visual properties |
| Law of Common Region | Container boundaries | Explicit grouping | Cards/borders for related content groups |
| Tesler's Law | Complexity allocation | System absorbs complexity | Smart defaults, progressive disclosure |

## Modern Context Application

**Responsive Design:**
- Fitts's Law: touch targets must scale UP on mobile (48px), pointer targets can be smaller (32px)
- Hick's Law: mobile navs must collapse choices (hamburger menu = explicit choice reduction)
- Law of Proximity: spacing tokens need responsive multipliers maintaining ratio relationships
- Serial Position: bottom navigation leverages thumb zone + serial position (first/last tabs most used)

**Dark Mode:**
- Aesthetic-Usability Effect: dark mode must be equally polished (not an afterthought)
- Von Restorff Effect: isolation contrast must work in both themes (CTA standout recalculated per mode)
- Law of Similarity: component visual consistency must hold across color schemes

**Token Systems:**
- Law of Proximity → spacing scale with clear grouping ratios (4/8/12/16/24/32/48/64)
- Law of Similarity → variant tokens ensure consistent visual language per component type
- Fitts's Law → minimum size tokens for interactive elements (--min-target-size: 44px)
- Doherty Threshold → motion duration tokens capped (--transition-fast: 150ms, --transition-base: 250ms)

**Component States:**
- Aesthetic-Usability: all states (hover, focus, active, disabled) must feel polished
- Von Restorff: active/selected state must visually isolate from surrounding elements
- Zeigarnik: multi-step components show progress (stepper, wizard patterns)
- Doherty: state transitions must be < 400ms for responsiveness perception

## Anti-AI-Slop Indicators

Expert UI (implements UX laws):
- Navigation with ≤ 7 top-level items (Hick's Law)
- Touch targets ≥ 44px with generous hit areas (Fitts's Law)
- Clear spatial grouping through consistent spacing ratios (Proximity)
- One visually dominant CTA per viewport (Von Restorff)
- Sub-400ms transition feedback for all interactions (Doherty)
- Consistent component styling within type categories (Similarity)
- Progressive disclosure reducing visible choices (Tesler's Law)
- Content chunked into scannable groups (Miller's Law)

AI Slop (violates UX laws):
- 15+ navigation items with equal visual weight (violates Hick's + hierarchy)
- Small, densely packed interactive elements (violates Fitts's)
- Uniform spacing with no grouping relationships (violates Proximity)
- Multiple competing CTAs per viewport (violates Von Restorff)
- No loading/transition states (violates Doherty)
- Inconsistent styling for same component types (violates Similarity)
- All complexity exposed simultaneously (violates Tesler's)
- Long unbroken lists without chunking (violates Miller's)

## Concrete Artifact Mapping

| Law | ProdigeUI Artifact | Field/Section | Implementation |
|-----|-------------------|---------------|----------------|
| Hick's Law | `design-rules/structure.rules.json` | `maxNavItems: 7`, `maxActionsPerGroup: 4` | Enforce choice limits |
| Fitts's Law | `design-rules/structure.rules.json` | `minTouchTarget: 44`, `minPointerTarget: 32` | Size enforcement |
| Miller's Law | `design-rules/structure.rules.json` | `maxChunkSize: 7`, `recommendedChunkSize: 5` | Grouping limits |
| Doherty Threshold | `tokens/motion.json` | `maxTransitionDuration: 400`, `baseDuration: 250` | Speed enforcement |
| Law of Proximity | `tokens/spacing.json` | Ratio-based scale with inner/outer distinction | Grouping through space |
| Von Restorff | `quality-gate/criteria.json` | Rule: max 1 primary CTA per viewport | Isolation enforcement |
| Jakob's Law | `design-rules/structure.rules.json` | Convention checklist per component type | Pattern adherence |
| Aesthetic-Usability | `quality-gate/criteria.json` | Visual polish score (alignment, spacing consistency) | Quality threshold |
| Law of Similarity | `quality-gate/criteria.json` | Rule: same component type = same visual properties | Consistency check |
| Law of Common Region | `design-rules/structure.rules.json` | Explicit container requirement for grouped content | Boundary enforcement |
| Serial Position | `design-rules/structure.rules.json` | Critical content in first/last positions | Placement rules |
| Zeigarnik Effect | `design-rules/structure.rules.json` | Progress indicator required for multi-step flows | Completion visibility |
| Tesler's Law | `design-rules/structure.rules.json` | Smart defaults required, progressive disclosure | Complexity management |
| Postel's Law | `quality-gate/criteria.json` | Input flexibility rules (format tolerance) | Input handling |

## Cross-References

- **100 Things Every Designer (Weinschenk):** Provides the cognitive science foundation that these laws formalize
- **Practical UI (Dannaway):** Implements many of these laws through concrete spacing/typography systems
- **Refactoring UI (Wathan/Schoger):** Visual hierarchy techniques are Fitts's + Von Restorff + Proximity in practice
- **Design of Everyday Things (Norman):** Mental models and affordances underlying Jakob's Law
- **Web UI Design for the Human Eye:** Eye-tracking validation of Serial Position and Proximity effects
- **Designing Interfaces (Tidwell):** Pattern library organized around solving problems these laws define
