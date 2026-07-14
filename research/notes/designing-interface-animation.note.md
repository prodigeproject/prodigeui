---
sourceId: designing-interface-animation
sourceType: book
sourceName: "Designing Interface Animation: Meaningful Motion for User Experience"
sourceLocation: "Book/Designing Interface Animation - Meaningful Motion for User Experience ( PDFDrive ).pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Animation purpose taxonomy**: Orient (spatial), Focus (attention), Show Change (state), Provide Feedback, Demonstrate (onboarding)
2. **12 Principles of Animation adapted for UI**: Timing/Spacing, Follow-through, Anticipation, Secondary Action (most relevant four)
3. **Duration by cognitive task**: Simple state change 100-200ms, complex repositioning 300-500ms, page transitions 400-700ms
4. **Easing selection framework**: Ease-out for entrances (arrives gently), Ease-in for exits (departs quickly), Ease-in-out for moves within viewport
5. **Choreography rules**: Lead with the trigger element; secondary elements follow with stagger; maintain spatial logic
6. **Animation as communication**: Motion conveys hierarchy (important moves first), relationship (connected things move together), causality (A triggers B)
7. **Performance budget**: Max 60fps; animation should not add more than 4ms to frame budget; test on low-end devices
8. **Reduced motion spectrum**: Not binary on/off — reduce distance, reduce duration, maintain essential feedback (opacity crossfade)
9. **Brand motion principles**: Each brand needs 3-5 documented motion principles (e.g., "precise", "fluid", "responsive")
10. **Animation audit process**: Record screen → catalog every animation → classify purpose → evaluate necessity → consolidate

## Concrete Rules & Parameters

- Simple state change (toggle, color): 100-200ms
- Moderate repositioning (slide panel): 250-400ms
- Complex transition (page/route): 300-600ms
- Max stagger per list item: 30-50ms (20 items max before collapsing to batch)
- Easing curves: Enter=`cubic-bezier(0, 0, 0.2, 1)`, Exit=`cubic-bezier(0.4, 0, 1, 1)`, Standard=`cubic-bezier(0.4, 0, 0.2, 1)`
- Reduced motion: opacity-only, max 150ms, no transform translations
- Objects >400px travel: split into staged reveals (don't animate full distance)

## Modern Context Application

- **Tokens**: Every timing/easing value is a token; components reference token names, never raw values
- **Dark mode**: Same motion tokens; but ambient/decorative animations may be further reduced in dark mode (less visual noise)
- **Responsive**: Distance tokens scale with viewport (`--motion-distance-sm` on mobile, `--motion-distance-lg` on desktop)
- **Component systems**: Each component's motion documented in manifest (which preset, which trigger, which properties)
- **Accessibility**: `prefers-reduced-motion` triggers alternative token set (shorter durations, no translation, crossfade only)

## Anti-AI-Slop Indicators

- Expert: Every animation has stated PURPOSE; easing matches direction; duration matches complexity
- AI slop: `transition: all 0.3s ease` on everything (no purpose, wrong easing, wrong duration)
- Expert: Choreography follows spatial logic and trigger-origin
- AI slop: Everything fades in simultaneously from the same direction regardless of context
- Expert: Reduced motion carefully designed as alternative experience
- AI slop: Reduced motion = everything disabled with no fallback feedback

## Concrete Artifact Mapping

| Finding | Artifact | Field/Section | Rationale |
|---------|----------|---------------|-----------|
| Purpose taxonomy (5 categories) | `motion/presets/` | Folder structure by purpose | Presets organized by WHY, not HOW |
| Duration tiers with cognitive rationale | `tokens/motion.tokens.json` | `duration` scale with comments | Named tiers backed by cognition research |
| Easing curves (enter/exit/standard) | `tokens/motion.tokens.json` | `easing` named values | Three curves cover 95% of UI motion needs |
| Choreography rules | `motion/MOTION_GUIDE.md` | Choreography section | Agent follows spatial/temporal logic |
| Reduced motion token set | `tokens/motion.tokens.json` | `reducedMotion` override object | First-class a11y support in token layer |
| Brand motion principles | `design-system/personality.json` | `motionPrinciples` array | Guides all motion decisions consistently |
| Animation audit process | Skill: motion-audit | Audit workflow steps | Agent can evaluate existing motion |
| Performance budget (4ms) | `quality-gate/criteria.json` | Motion performance threshold | Gate enforces frame budget |

## Cross-References

- Duration tiers closely match motion-design-skill-main's tables (validates both sources)
- Easing framework confirmed by Animation for the Web's personality concept
- Reduced motion spectrum aligns with animation-in-design-systems' first-class treatment
- Purpose taxonomy extends ant-motion-master's category separation
- Brand motion principles connect to Designing for Emotion's personality framework
- Choreography rules validated by expo-motion-tabs-main's spatial continuity principle
