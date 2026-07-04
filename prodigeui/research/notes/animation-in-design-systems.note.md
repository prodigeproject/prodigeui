---
sourceId: animation-in-design-systems
sourceType: book
sourceName: "Animation in Design Systems"
sourceLocation: "Book/Animation-in-Design-Systems.pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Motion as design token**: Animation values (duration, easing, distance) must be tokenized at system level, not per-component
2. **Motion principles hierarchy**: Purpose → Tone → Timing → Technical (decisions cascade top-down)
3. **Shared vocabulary**: Teams need named motion patterns (fade-in, slide-up, scale-reveal) as shared language
4. **Consistency over creativity**: Within a system, motion should feel unified — same easing family, proportional durations
5. **Documentation-driven motion**: Every preset requires: name, purpose, when-to-use, when-not-to-use, code example
6. **Reduced motion as first-class**: Not an afterthought — design the reduced version explicitly, don't just disable
7. **Audit methodology**: Inventory all existing motion → categorize → consolidate → tokenize → document

## Concrete Rules & Parameters

- Duration scale: 100ms / 200ms / 300ms / 500ms (geometric-ish progression, never arbitrary)
- Easing families: max 3-4 curves per system (standard, enter, exit, spring)
- Motion audit categories: entrance, exit, emphasis, transition, loading, ambient
- Reduced motion: instant state changes (duration: 0ms) or crossfade-only (max 100ms)
- Distance scale tied to spacing tokens: motion distance = spacing token value

## Modern Context Application

- **Tokens**: Motion tokens sit alongside color/spacing tokens; same override/theming mechanism
- **Dark mode**: Motion tokens can vary per theme (dark = slightly slower, calmer motion)
- **Component systems**: Components consume motion tokens, not raw values; swappable system-wide
- **Responsive**: Mobile motion uses shorter distances (smaller viewport = less travel needed)

## Anti-AI-Slop Indicators

- Expert: Finite set of motion tokens used everywhere; clear purpose documentation per preset
- AI slop: Every component has unique, ad-hoc animation values; no visible system or shared vocabulary
- Expert: Reduced motion carefully designed (not just `animation: none`)
- AI slop: `@media (prefers-reduced-motion) { * { animation: none !important; } }`

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Motion token taxonomy | `tokens/motion.tokens.json` | Root structure (duration, easing, distance) | Central authority for all motion values |
| Named motion patterns | `motion/presets/*.json` | Each preset file = one named pattern | Shared vocabulary for agents/developers |
| Documentation template | `motion/MOTION_GUIDE.md` | Preset documentation format | Every preset self-documents purpose |
| Reduced motion strategy | `motion/motion.tokens.json` | `reducedMotion` override layer | First-class alternative, not hack |
| Audit methodology | `quality-gate/criteria.json` | Motion audit rules | Gates enforce token usage, reject raw values |

## Cross-References

- Confirms motion-design-skill-main's duration tables and easing selection rules
- Aligns with transitions.dev-main's mandatory prefers-reduced-motion requirement
- Vocabulary concept matches open-design-main's naming conventions
- Token-first approach validated by pearl-ui-main's theme provider architecture
