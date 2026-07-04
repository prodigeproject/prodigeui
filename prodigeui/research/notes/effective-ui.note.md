---
sourceId: effective-ui
sourceType: book
sourceName: "Effective UI: The Art of Building Great User Experience in Software"
sourceLocation: "Book/UI/Effective UI The Art of Building Great User Experience in Software (Jonathan Anderson, John McRee, Robb Wilson) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

Anderson, McRee, and Wilson bridge UX strategy with implementation. Focus on the process of creating effective UI, not just the visual output:

- **User research drives design:** Design decisions grounded in observed user behavior, not assumptions. Persona-based design prevents designing for yourself.
- **Task-centered design:** Interfaces should be organized around user tasks, not system architecture. Users think in goals, not features.
- **Information architecture precedes visual design:** Structure (what goes where, how things relate) must be resolved before pixels.
- **Iterative prototyping:** Low-fidelity → high-fidelity → functional prototype. Each stage validates different concerns.
- **Usability testing is non-negotiable:** Test with real users at every fidelity level. 5 users find 80% of usability issues.
- **Cross-functional collaboration:** UI design requires designers, developers, and stakeholders working together continuously.
- **Performance is UX:** Slow interfaces destroy user experience regardless of visual quality.
- **Consistency reduces learning curve:** Consistent patterns across the application let users transfer knowledge between features.
- **Error handling as first-class design:** Error states, edge cases, and failure modes designed with same care as happy paths.
- **Accessibility is not optional:** Universal design principles ensure interfaces work for all users, not just the majority.

## Concrete Rules & Parameters

| Principle | Parameter | Design Rule |
|-----------|-----------|-------------|
| Usability test size | 5 users | 5 users find ~80% of usability issues per round |
| Task completion | Target | 90%+ first-attempt success rate for primary tasks |
| Error recovery | Max steps | Users should recover from any error in ≤ 2 actions |
| Learning curve | New user | Core features usable within 5 minutes without training |
| Performance threshold | Load time | First meaningful paint < 1.5 seconds |
| Consistency | Pattern reuse | Same interaction pattern for same type of task (100% reuse) |
| Accessibility baseline | WCAG level | AA minimum for all public-facing interfaces |
| Prototype fidelity stages | Count | 3 stages: low-fi (paper/wireframe), mid-fi (interactive), high-fi (visual) |
| Feedback loops | Timing | User research → design iteration cycle ≤ 2 weeks |
| Information density | Task-dependent | Show only information relevant to current task |
| Progressive complexity | Levels | Simple mode → advanced mode for power users |
| Cross-device consistency | Rule | Same task, same mental model, adapted presentation |

## Modern Context Application

**Responsive Design:**
- Task-centered design means mobile prioritizes most frequent tasks (not all tasks equally)
- Cross-device consistency: same information architecture, different layout/navigation
- Performance especially critical on mobile (slower connections, smaller screens)
- Progressive complexity: mobile shows simple mode by default

**Dark Mode:**
- Error states must be equally clear in dark mode (not just red on dark = muddy)
- Performance perception: dark mode can feel faster (less visual processing)
- Accessibility: contrast ratios re-verified for dark mode
- Consistency: dark/light mode use same interaction patterns and IA

**Token Systems:**
- Task-based token organization (tokens grouped by what they serve, not what they are)
- Performance tokens: transition limits that respect performance budgets
- Consistency enforcement: tokens ensure same visual treatment for same component types
- Error state tokens: dedicated color/spacing for error conditions

**Component States:**
- Error recovery: every error state includes clear path to resolution
- Loading states: meaningful progress (not generic spinner)
- Empty states: task-oriented (guide user to accomplish their goal)
- Success states: confirm task completion clearly
- Offline states: graceful degradation with preserved functionality where possible

## Anti-AI-Slop Indicators

Expert UI (Effective UI principles):
- Interface organized by user tasks (not system features)
- Error states with recovery guidance
- Consistent interaction patterns across features
- Performance-optimized (fast load, responsive interactions)
- Accessible (keyboard navigation, screen reader, contrast)
- Progressive disclosure (simple by default, advanced available)
- Task completion with minimal friction

AI Slop (ignores effectiveness):
- Feature-dump organization (every capability exposed equally)
- Generic error messages ("Something went wrong" without guidance)
- Inconsistent patterns (different navigation in different sections)
- Slow, heavy interfaces (large bundles, unnecessary animations)
- Inaccessible (no keyboard support, poor contrast, no semantics)
- All complexity visible immediately (overwhelming)
- Many steps for simple tasks (friction-heavy flows)

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Task-centered organization | `design-rules/structure.rules.json` | IA organized by user goals | User mental model alignment |
| Error recovery steps | `design-rules/structure.rules.json` | maxErrorRecoverySteps: 2 | Friction reduction |
| Performance budget | `quality-gate/criteria.json` | firstPaint: 1500ms max | UX performance threshold |
| Pattern consistency | `quality-gate/criteria.json` | Same task type = same interaction pattern | Learning curve reduction |
| Accessibility baseline | `quality-gate/criteria.json` | WCAG AA compliance required | Universal access |
| Usability test threshold | `quality-gate/criteria.json` | 90% first-attempt success target | Effectiveness metric |
| Progressive complexity | `design-rules/structure.rules.json` | simple/advanced mode architecture | Complexity management |
| Learning curve target | `quality-gate/criteria.json` | Core features usable < 5 minutes | Onboarding efficiency |
| Information density | `design-rules/structure.rules.json` | Show only task-relevant information | Focus maintenance |
| Cross-device consistency | `design-rules/structure.rules.json` | Same IA across breakpoints | Mental model preservation |
| Error state design | `quality-gate/criteria.json` | Errors include cause + recovery action | Error as designed state |
| Iteration support | Process documentation | Prototype → test → iterate cycle | Quality process |

## Cross-References

- **Design of Everyday Things (Norman):** Conceptual models, Gulf of Execution/Evaluation are the theory underlying task-centered design
- **Laws of UX (Yablonski):** Jakob's Law (conventions), Tesler's Law (complexity management) formalize these principles
- **100 Things Every Designer (Weinschenk):** Cognitive science basis for 5-user testing, progressive disclosure
- **Designing Interfaces (Tidwell):** Pattern library implementing the "consistency" principle
- **Practical UI (Dannaway):** Visual implementation of consistent, accessible patterns
