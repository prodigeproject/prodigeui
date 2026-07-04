---
sourceId: storytelling-in-design
sourceType: book
sourceName: "Storytelling in Design (Anna Dahlstrom)"
sourceLocation: "Book/UX/Storytelling in Design Defining, Designing, and Selling Multidevice Products (Anna Dahlström) (Z-Library).epub"
appliedTo: []
---

## Key Principles Extracted

- **Narrative Structure in UX:** User journeys have narrative structure: beginning (entry/onboarding), middle (core task), and end (completion/exit). Design each act with appropriate pacing and emotion.
- **User Story as Literal Story:** Map user flows as stories with protagonist (user), goal (task completion), conflict (obstacles/friction), and resolution (successful outcome).
- **Multi-Device Narrative:** User journeys span devices — start on mobile, continue on desktop. The narrative must be coherent across context switches without forcing users to restart.
- **Pacing and Rhythm:** Interfaces have rhythm — density of interaction, frequency of decisions, moments of rest. Good pacing alternates engagement and recovery.
- **Context Awareness:** The same content/feature needs different presentation based on device, time, location, and user state. Context drives design adaptation.
- **Emotional Arc:** Map emotional states through the journey: confidence at start, potential frustration at complexity, satisfaction at completion. Design to support the desired emotional trajectory.

## Concrete Rules & Parameters

- Journey acts: Entry (≤3 steps to value) → Core Task (flow without interruption) → Completion (clear confirmation + next action)
- Pacing: after 3+ consecutive decision points, provide a "rest" moment (confirmation, summary, or lower-density content)
- Multi-device continuity: state must sync across devices; no data loss on context switch; progress preserved
- Emotional checkpoints: celebrate milestones (form steps completed, account created, order placed)
- Content adaptation: long-form on desktop, summary on mobile, notification on watch — same information, different density
- Narrative consistency: terminology, voice, and visual language must be consistent across all journey touchpoints
- Conflict resolution: every identified friction point must have a designed resolution (help text, alternative path, or undo)

## Modern Context Application

- **AI-Generated User Flows:** Agents generating multi-step flows should apply narrative structure — not just functional correctness but experiential coherence.
- **Multi-Device Component Variants:** Components must adapt their information density per device context while maintaining narrative continuity.
- **Journey Validation:** Quality gate can check for narrative completeness — does the flow have proper entry, resolution, and exit?
- **Emotional Design Integration:** Agents apply emotional arc principles to determine appropriate feedback, celebration, and pacing moments.

## Anti-AI-Slop Indicators

| Narrative-Driven Design | AI Slop |
|---|---|
| Clear beginning/middle/end structure | Disconnected screens without flow logic |
| Pacing alternates density and rest | Uniform density throughout (monotonous) |
| Multi-device continuity (state preserved) | Device-specific silos losing context |
| Emotional milestones celebrated | No acknowledgment of user progress |
| Friction points have designed resolutions | Dead-ends without recovery paths |
| Consistent voice across touchpoints | Different tone/language per screen |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---|---|---|---|
| Three-act journey structure | `skills/ux-design-e2e/SKILL.md` | User flow design step | Agent structures flows narratively |
| Pacing rules (decision density) | `design-rules/structure.md` | Flow pacing requirements | Max 3 consecutive decisions before rest |
| Multi-device continuity | `design-rules/responsive.md` | Cross-device sync rules | State preservation requirements |
| Emotional milestones | `components/toast/`, `components/celebration/` | Success/milestone variants | Components for journey celebrations |
| Content adaptation by device | `design-rules/responsive.md` | Content density per breakpoint | Long/summary/notification variants |
| Conflict resolution design | `design-rules/structure.md` | Error recovery paths | Every friction point needs resolution |

## Cross-References

- Narrative structure extends `elements-user-experience` five planes with temporal dimension
- Emotional arc connects to `principles-product-design` emotional design
- Pacing rules complement `simple-and-usable` cognitive load management
- Multi-device supports Requirement 11 (multi-platform: desktop, web, mobile)
- Journey milestones inform component emotional states
- Voice consistency feeds `strategic-writing-ux` content strategy
