---
sourceId: neuro-web-design
sourceType: book
sourceName: "Neuro Web Design: What Makes Them Click?"
sourceLocation: "Book/psychology/Neuro Web Design What Makes Them Click (Susan M. Weinschenk) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

Susan Weinschenk applies neuroscience and behavioral psychology to web design, focusing on unconscious decision drivers. Key principles for design systems:

- **Old Brain dominance:** The reptilian/emotional brain makes most decisions before the rational brain engages. Visual design triggers emotional response first, then logical evaluation.
- **Social validation:** People look to others' behavior to determine their own. Social proof elements (testimonials, usage counts, ratings) leverage mirror neurons.
- **Scarcity and urgency:** Limited availability increases perceived value. The brain treats potential loss more seriously than potential gain (loss aversion).
- **Commitment and consistency:** Small initial commitments lead to larger ones. Micro-interactions build behavioral momentum.
- **Reciprocity principle:** Giving something (value, information) creates obligation to reciprocate. Free content/tools create engagement debt.
- **Unconscious decision-making:** ~95% of cognition is unconscious. Design must appeal to System 1 (fast, intuitive) not just System 2 (slow, analytical).
- **Fear of loss > desire for gain:** Loss aversion is 2× stronger than gain motivation. Frame CTAs around what users keep/protect, not just what they gain.
- **Stories activate multiple brain regions:** Narrative engages emotional processing beyond what facts alone achieve.
- **Dopamine loops:** Variable rewards (notifications, feeds) create dopamine-driven engagement loops. Ethical design acknowledges this power.
- **Trust signals process unconsciously:** Visual credibility (professional design, consistent patterns) builds trust before content is read.

## Concrete Rules & Parameters

| Principle | Parameter | Design Rule |
|-----------|-----------|-------------|
| Old Brain response time | < 50ms | First visual impression forms in under 50ms; visual hierarchy must be instant |
| Social proof placement | Above the fold | Trust signals in first viewport (before scroll commitment) |
| Loss aversion ratio | 2:1 | Loss-framed messaging 2× more effective than gain-framed |
| Commitment gradient | 3-step escalation | Micro → small → large commitment progression |
| Trust indicators | 3-5 signals minimum | Logo quality, consistent spacing, professional typography, social proof, security |
| Unconscious processing | System 1 first | Default interaction paths must work without conscious thought |
| Reciprocity trigger | Value-before-ask | Provide value/content before requesting user action |
| Dopamine interval | Variable timing | Feedback/reward timing should be slightly unpredictable (ethical: not manipulative) |
| Story structure | Beginning-middle-end | User flows should follow narrative arc (context → action → resolution) |
| Credibility threshold | 3 visual consistency markers | Aligned grid, consistent type, coherent color = unconscious trust |

## Modern Context Application

**Responsive Design:**
- Old Brain: first impression on mobile is even more critical (smaller viewport, faster judgment)
- Trust signals: must be visible without scrolling on all breakpoints
- Commitment gradient: mobile forms should be single-field progressive (lower initial commitment)
- Social proof: compact formats for mobile (star ratings vs. full testimonials)

**Dark Mode:**
- Trust/credibility: dark mode must feel equally professional (not "hacker" aesthetic unless intentional)
- Emotional response: dark mode conveys calm/focus/premium; light mode conveys open/friendly/accessible
- Old Brain: dark mode contrast hierarchy must be as clear as light mode (luminance-based hierarchy)

**Token Systems:**
- Trust through consistency: tokens enforce the visual consistency that builds unconscious credibility
- Spacing tokens create rhythm that the unconscious brain perceives as "ordered" and "reliable"
- Color tokens with semantic meaning leverage Old Brain's color associations (red=danger, green=safe)
- Typography scale creates hierarchy that System 1 processes without conscious effort

**Component States:**
- Commitment gradient: form components should feel lightweight at first interaction
- Social proof components: rating displays, testimonial cards, usage counters as standard patterns
- Loss aversion: destructive action confirmations emphasize what will be lost
- Dopamine: success states and micro-animations provide reward feedback

## Anti-AI-Slop Indicators

Expert UI (leverages neuroscience):
- Instant visual hierarchy (Old Brain can parse in < 50ms)
- Trust signals immediately visible (professional polish, alignment, consistency)
- Progressive commitment (easy first steps, gradual depth)
- Clear narrative flow through the interface (context → action → outcome)
- Emotional design aligned with purpose (not random decoration)
- Ethical engagement patterns (helpful, not manipulative)

AI Slop (ignores unconscious processing):
- Flat visual hierarchy requiring conscious parsing (everything looks equal)
- Inconsistent visual quality (misaligned elements break unconscious trust)
- Immediate high-commitment requests (sign up before showing value)
- No narrative structure (disconnected information blocks)
- Decoration without emotional purpose (gradients, shadows for no reason)
- Dark patterns leveraging loss aversion unethically

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| 50ms first impression | `quality-gate/criteria.json` | Visual hierarchy score (instant parsability) | Old Brain processes layout before reading |
| Trust through consistency | `quality-gate/criteria.json` | Alignment/spacing consistency threshold | Unconscious credibility assessment |
| Commitment gradient | `design-rules/structure.rules.json` | Progressive disclosure pattern rules | Behavioral momentum design |
| Loss aversion framing | `design-rules/structure.rules.json` | Destructive action confirmation requirements | Loss > gain psychological weight |
| Social proof patterns | Component library | Rating, testimonial, counter components | Mirror neuron activation |
| System 1 optimization | `quality-gate/criteria.json` | Cognitive load score (< threshold = System 1 friendly) | Unconscious processing preference |
| Narrative flow | `design-rules/structure.rules.json` | User flow arc requirement (context→action→outcome) | Story structure engagement |
| Variable reward (ethical) | `tokens/motion.json` | Subtle timing variation in success animations | Dopamine engagement (ethical bounds) |
| Color emotion mapping | `tokens/color.json` | Semantic color roles with emotional associations | Old Brain color processing |
| Credibility markers | `quality-gate/criteria.json` | Minimum 3 visual consistency checks per viewport | Trust threshold |

## Cross-References

- **100 Things Every Designer (Weinschenk):** Same author's broader cognitive science principles; this book focuses specifically on persuasion/conversion
- **Laws of UX (Yablonski):** Aesthetic-Usability Effect aligns with Old Brain first-impression research
- **Design of Everyday Things (Norman):** Affordances work because they speak to System 1 (unconscious understanding)
- **Designing for Emotion (book in collection):** Emotional design principles overlap with Old Brain engagement
- **Refactoring UI:** Visual hierarchy techniques directly implement "instant parsability" for Old Brain
