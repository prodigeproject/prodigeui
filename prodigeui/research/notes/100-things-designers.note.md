---
sourceId: 100-things-designers
sourceType: book
sourceName: "100 Things Every Designer Needs to Know about People"
sourceLocation: "Book/psychology/100 Things Every Designer Needs to Know about People What Makes Them Tick (Susan Weinschenk) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

Susan Weinschenk bridges cognitive psychology research into actionable design rules. Core behavioral/cognitive principles relevant to UI design systems:

- **Peripheral vision dominates attention:** People use peripheral vision more than central vision to get the gist of a scene. Design must work at the peripheral level (visual hierarchy, not just content).
- **Pattern recognition is automatic:** Humans seek and create patterns constantly. Consistent visual structure reduces cognitive effort.
- **Progressive disclosure respects cognitive limits:** Show only what's needed at each step. Complexity overwhelms; simplicity enables.
- **People read in F-patterns/Z-patterns:** Eye-tracking data shows predictable scanning behaviors. Layout must respect these natural reading flows.
- **Chunking reduces cognitive load:** Breaking information into groups of 3-4 items (not 7±2 as commonly cited; Weinschenk corrects this to 3-4 for working memory).
- **Recognition over recall:** People are better at recognizing things than remembering them. UI should present options, not require memory.
- **Mental models drive expectations:** Users form internal models of how systems work. Violating mental models creates confusion and errors.
- **Emotions influence decisions more than logic:** Affective responses happen before rational thought. Aesthetic design influences perceived usability.
- **People are social processors:** Social proof, trust signals, and conversational tone affect engagement and compliance.
- **Attention is selective and limited:** Inattentional blindness means users miss things outside their focus. Critical information needs visual prominence.

## Concrete Rules & Parameters

| Rule | Parameter | Source Basis |
|------|-----------|--------------|
| Working memory chunk size | 3-4 items (not 7±2) | Ch. 6 - corrected Miller's number for working memory tasks |
| Font size for body text | 12-14px minimum for legibility | Ch. 2 - reading research |
| Line length for readability | 45-72 characters per line | Ch. 3 - optimal saccade length |
| Peripheral vision trigger | High-contrast or motion in periphery captures attention | Ch. 1 - visual processing |
| Progressive disclosure layers | Max 3 levels of depth before disorientation | Ch. 7 - navigation research |
| Recognition accuracy | ~90% for previously seen items vs ~60% recall | Ch. 5 - memory systems |
| Error rate reduction | Constraints reduce errors by 50-80% | Ch. 8 - error prevention |
| Reading speed impact | Sans-serif fonts: no measurable speed difference from serif at screen sizes ≥12px | Ch. 2 |
| Touch target size | 44×44px minimum (aligned with Apple HIG) | Ch. 4 - motor control |
| Cognitive load threshold | 3-4 simultaneous choices before decision fatigue | Ch. 6 - choice architecture |

## Modern Context Application

**Responsive Design:**
- Chunking principle maps directly to card-based layouts (3-4 cards per row maximum)
- F-pattern scanning requires left-aligned primary content on desktop, linear on mobile
- Progressive disclosure translates to accordion/expandable patterns on small screens

**Dark Mode:**
- Peripheral vision principle: contrast ratios must be maintained in both modes
- Pattern recognition: consistent component shapes regardless of color scheme
- Emotion influence: dark mode conveys different emotional tone (professional, immersive)

**Token Systems:**
- Spacing tokens should create 3-4 visual groupings (chunk-friendly)
- Typography scale must ensure minimum legibility thresholds across breakpoints
- Color tokens need semantic grouping (primary action, secondary, destructive) matching recognition patterns

**Component States:**
- Recognition > recall: active states must be visually distinct (not just color change)
- Error states must use peripheral vision triggers (color + icon + position, not just red text)
- Loading states maintain mental model continuity (skeleton screens > spinners)

## Anti-AI-Slop Indicators

Expert UI (respects cognitive science):
- Information grouped in chunks of 3-4 (never 10+ ungrouped items)
- Clear visual hierarchy with peripheral vision hooks (size, contrast, whitespace)
- Progressive disclosure with clear navigation back
- Consistent patterns that build on established mental models
- Error prevention through constraints, not just error messages
- Sufficient contrast and text size for effortless reading

AI Slop (violates cognitive principles):
- Long unstructured lists with no grouping
- Uniform visual weight across all elements (no hierarchy)
- All information visible simultaneously (cognitive overload)
- Inconsistent interaction patterns across similar components
- Tiny click/tap targets below 44px
- Text below 12px or lines exceeding 80 characters
- Relying on user memory (hidden states, no breadcrumbs)
- Decorative elements that compete with functional content for attention

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| 3-4 item chunking rule | `design-rules/structure.rules.json` | `maxItemsPerGroup: 4` | Cognitive science limit for working memory |
| 44px touch targets | `design-rules/structure.rules.json` | `minTouchTarget: 44` | Motor control research minimum |
| 45-72 char line length | `tokens/typography.json` | `maxLineLength: "72ch"` | Optimal reading saccade |
| 12-14px minimum text | `tokens/typography.json` | `minBodyFontSize: 14` | Legibility threshold |
| Progressive disclosure limit | `design-rules/structure.rules.json` | `maxDisclosureDepth: 3` | Navigation disorientation prevention |
| Recognition > recall | `quality-gate/criteria.json` | Rule: active states must differ by 2+ visual properties | Prevent reliance on memory |
| Peripheral vision hooks | `quality-gate/criteria.json` | Rule: error states use color + icon + position | Multi-channel attention capture |
| F-pattern layout | `design-rules/structure.rules.json` | Primary content left-aligned, CTAs in scan path | Eye-tracking research |
| Emotion-first aesthetics | `quality-gate/criteria.json` | Aesthetic consistency score threshold | Emotional response precedes rational evaluation |
| Cognitive load threshold | `design-rules/structure.rules.json` | `maxSimultaneousChoices: 4` | Decision fatigue prevention |

## Cross-References

- **Laws of UX (Yablonski):** Formalizes many same principles (Miller's Law, Hick's Law) into named, parameterizable laws
- **Design of Everyday Things (Norman):** Shared foundation in mental models, affordances, constraints
- **Practical UI (Dannaway):** Applies these cognitive principles to concrete spacing/typography systems
- **Refactoring UI (Wathan/Schoger):** Visual hierarchy techniques directly implement attention/chunking research
- **Web UI Design for the Human Eye:** Eye-tracking validation of scanning patterns described here
