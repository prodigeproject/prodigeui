---
sourceId: ruined-by-design
sourceType: book
sourceName: "Ruined by Design: How Designers Destroyed the World and What We Can Do to Fix It"
sourceLocation: "Book/design-principles/Ruined_by_Design_How_Designers_Destroyed_the_World_and_What_We_Can_Do_to_Fix_It_Mike_Monteiro.epub"
appliedTo: []
---

## Key Principles Extracted

1. **Designer as Gatekeeper**: Designers are responsible for what they put into the world. "Just doing my job" is not an ethical defense. A design system (like ProdigeUI) should encode ethical guardrails that make harmful patterns harder to implement than helpful ones.

2. **Design as Decision-Making**: Every design choice is a decision about who benefits and who is harmed. Default states, empty states, error handling, feature prioritization — all are ethical decisions. ProdigeUI must make the ethical choice the easy/default choice.

3. **Dark Patterns are Intentional**: Manipulative design is never accidental — it's optimized for exploitation. Confirmshaming, forced continuity, hidden costs, misdirection. A quality gate must detect and flag these patterns.

4. **Inclusivity is Not Optional**: Designing only for the majority actively excludes minorities. Accessibility is civil rights, not a feature request. ProdigeUI tokens and rules must ENFORCE accessibility — not make it an optional addon.

5. **Consequences Scale with Reach**: Design at scale affects millions. Small ethical compromises multiply into massive harm. AI agents generating UIs from ProdigeUI will create hundreds of interfaces — encoded ethics scale positively.

6. **Saying No is a Design Skill**: Refusing to implement harmful patterns (engagement manipulation, addiction mechanics, privacy violations) is part of professional practice. ProdigeUI quality gate is a "No" encoded in rules.

7. **Transparency as Design Principle**: Users deserve to know what's happening with their data, what an interface is doing, and why. No hidden actions. Loading states reveal process. Settings are honest about implications.

8. **Diversity in Design Process**: Homogeneous teams produce designs that work only for people like them. ProdigeUI must account for diverse users: cultural (RTL, varied color meanings), physical (disability spectrum), contextual (stress, distraction, emergency).

9. **Regulation Through Design Systems**: When individual designers can't refuse harmful requests, design systems can encode ethics at the infrastructure level. Token-level accessibility enforcement, component-level state requirements, quality-gate-level harm detection.

10. **Long-term Thinking**: Design for the 10-year consequence, not the quarterly metric. Sustainable patterns that build trust over time > growth-hacking patterns that extract short-term engagement.

## Concrete Rules & Parameters

| Principle | Measurable Rule | Implementation |
|-----------|----------------|----------------|
| Ethical Defaults | Destructive actions NOT styled as primary; dismiss option same visual weight as proceed | Component variant rules |
| Dark Pattern Detection | Flag: confirmshaming language, hidden opt-outs, asymmetric styling of options | Quality gate criteria |
| Accessibility Enforcement | WCAG AA minimum is non-negotiable, not optional configuration | Token system enforces by default |
| Transparency | All async operations visible; no background actions without indicator | Component state requirements |
| Diversity Support | RTL support; cultural color considerations; scalable text (200% zoom) | Token system and layout rules |
| Consent Patterns | Opt-in as default (not opt-out); clear language; genuine choice | Form component ethical rules |
| Scale Awareness | Every pattern evaluated for "what if 1M users encounter this?" | Quality gate impact assessment |
| Harm Hierarchy | Safety > usability > aesthetics priority when in conflict | Design rule priority ordering |
| Reversibility | All user actions reversible or confirmed; no trap states | Interaction pattern requirements |
| Honest Communication | No misleading labels; progress bars reflect actual progress; no fake urgency | Copy and interaction integrity rules |

## Modern Context Application

- **Ethics + AI-Generated UI**: When AI agents generate interfaces from ProdigeUI, the encoded ethics propagate automatically. If the quality gate flags dark patterns, AI-generated UIs can't easily contain manipulation. The system IS the ethical enforcement.
- **Dark Patterns + Component Defaults**: Component default variants should be the ethical choice. The "easy path" (default button style, default form pattern, default modal behavior) should be the responsible one. Making unethical patterns HARDER to implement.
- **Transparency + Loading/Progress**: Every component that performs async operations must have loading state defined. No "silent" operations. Users always know: (1) something is happening, (2) how long it might take, (3) whether it succeeded/failed.
- **Diversity + Token Adaptability**: Tokens support: RTL layouts (logical properties `inline-start`/`inline-end` instead of `left`/`right`), cultural color adaptation (red ≠ error in all cultures), and text scaling.
- **Consent + Form Patterns**: Default form component behavior: nothing pre-checked, opt-in language, clear consequences of each choice. ProdigeUI checkbox/toggle defaults to unchecked. Marketing consent never pre-selected.
- **Long-term + Token Stability**: Tokens are stable APIs. Once published, they don't break. Components built on tokens are future-proof. This is long-term thinking applied to architecture.

## Anti-AI-Slop Indicators

| Ethical Design | Irresponsible AI-Slop Design |
|---------------|-------------------------------|
| Destructive actions styled differently from constructive (visual warning) | Delete button styled same as Save button |
| Options presented with equal visual weight (genuine choice) | "Accept" is large/colorful; "Decline" is tiny/gray (manipulation) |
| Accessibility built into every component state | Accessibility bolted on as afterthought (if at all) |
| Error states with recovery paths (forgiveness) | Error states that punish (data loss, restart required) |
| Transparent about data usage and consequences | Actions with hidden side effects |
| Cultural awareness in color and icon choices | Western-centric assumptions (red=error everywhere) |
| Progressive complexity (simple by default) | Full complexity exposed immediately (overwhelming) |
| Honest progress indicators (reflecting actual state) | Fake progress bars that don't represent reality |
| Consent explicitly obtained (opt-in) | Pre-checked boxes and assumed consent (opt-out) |
| Dismiss/cancel as easy as proceed | Hard-to-find exit patterns (trap states) |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Ethical defaults principle | `components/` manifest | Button `destructive` variant distinct from `primary`; defaults are ethical | Makes responsible design the path of least resistance |
| Dark pattern detection | `quality-gate/criteria.json` | `anti-slop-patterns` category: option symmetry, honest language, no confirmshaming | Automated detection of manipulation |
| Accessibility enforcement | `tokens/semantic.tokens.json` | All color pairs pre-validated for WCAG AA; no opt-out | Accessibility at token level = non-negotiable |
| Transparency requirement | `components/` manifest | All async components: `loadingState` and `errorState` required fields | No hidden operations |
| Diversity support | `tokens/primitive.tokens.json` | Logical properties; RTL-compatible spacing; scalable values | Works for diverse users by default |
| Consent patterns | `design-rules/structure.rules.json` | `consentDefaults: "opt-in"`, `preCheckedProhibited: true` | Encodes consent ethics in structure |
| Harm priority hierarchy | `design-rules/` | Priority ordering: safety > usability > aesthetics | Resolves conflicts ethically |
| Reversibility requirement | `components/` manifest | Interactive components: `supportsUndo: true` or `requiresConfirmation: true` | No trap states or irreversible accidents |
| Honest communication | `design-rules/structure.rules.json` | `progressBarsAccurate: true`, `noFakeUrgency: true`, `labelsHonest: true` | Communication integrity rules |
| Scale awareness | `quality-gate/criteria.json` | `scale-impact` consideration in quality evaluation | Forces thinking about pattern multiplication |

## Cross-References

- **Tragic Design**: Complements — Tragic Design shows consequences; Ruined by Design shows causes and responsibility
- **Universal Principles of UX**: The UX principles are WHAT to do; Monteiro provides the WHY (ethical obligation)
- **Don't Make Me Think (Krug)**: Overlapping ease-of-use principles but from ethical rather than efficiency perspective
- **Designing for Emotion**: Positive emotional design vs Monteiro's critique of emotionally manipulative design
- **WCAG Standards**: The technical standards that operationalize Monteiro's inclusivity imperative
- **Laws of UX (Yablonski)**: The cognitive science showing WHY dark patterns work (and why that makes them worse)
