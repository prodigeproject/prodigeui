---
sourceId: universal-principles-ux
sourceType: book
sourceName: "Universal Principles of UX: 100 Timeless Strategies to Create Positive Interactions Between People and Technology"
sourceLocation: "Book/design-principles/dokumen.pub_universal-principles-of-ux-100-timeless-strategies-to-create-positive-interactions-between-people-and-technology-volume-4-rockport-universal-4-9780760378045-0760378045.pdf"
appliedTo: []
---

## Key Principles Extracted

1. **Affordance and Signifiers**: Interactive elements must visually communicate their interactivity. Buttons look clickable (elevation, contrast, shape). Inputs look fillable (border, placeholder). Links look navigable (color, underline). The visual appearance IS the instruction manual.

2. **Cognitive Load Reduction**: Every additional element, choice, or interaction increases cognitive load. Three types: intrinsic (task complexity), extraneous (poor design), germane (useful learning). Design eliminates extraneous load while supporting germane.

3. **Error Prevention Over Error Recovery**: Design that prevents errors is superior to design that recovers from them. Techniques: constraints (disabled states), confirmations (destructive actions), defaults (smart pre-fill), undo (reversibility). Map to component states and interaction patterns.

4. **Feedback Loops**: Every user action must produce visible system response within acceptable time: immediate (<100ms), animated (<1000ms), progress-indicated (>1000ms). Feedback types: visual (state change), auditory (sound), haptic (vibration).

5. **Mental Models Alignment**: Users have existing expectations about how things work. Design that matches mental models feels intuitive. Sources: platform conventions, real-world analogies, learned patterns. Breaking mental models requires strong justification.

6. **Recognition Over Recall**: Show options rather than requiring users to remember them. Navigation: visible labels, not hidden behind gestures. Forms: dropdowns over free text when options are finite. Search: show recent/suggested.

7. **Satisfaction and Delight**: Beyond usability, design should create positive emotional responses. Micro-delights: subtle animations on completion, personality in copy, unexpected helpful features. But: delight must not compromise efficiency for repeat users.

8. **Accessibility as Universal Design**: Designing for accessibility improves experience for ALL users, not just those with disabilities. High contrast helps in sunlight; large targets help on bumpy trains; clear hierarchy helps under cognitive load.

9. **Progressive Complexity**: Start simple, allow advancement. Novice users see simplified interface; expert users discover advanced features. Not hidden — progressively revealed based on context and user behavior.

10. **Spatial Consistency**: Elements in consistent positions across screens/states reduce cognitive effort. Navigation always same position. Primary actions always same corner. Status always same area. Spatial memory reduces search time.

## Concrete Rules & Parameters

| Principle | Measurable Rule | Implementation |
|-----------|----------------|----------------|
| Affordance | Interactive elements: min contrast 3:1 vs non-interactive; distinct shape/elevation | Token semantic distinction: `interactive` vs `static` |
| Cognitive Load | Max 5-7 choices per decision point; max 3 steps per task flow | Structure rules limiting options and depth |
| Error Prevention | Destructive actions require confirmation; form validation inline | Component state: `confirmation-required`, validation timing |
| Feedback Timing | <100ms: state change; <1000ms: animation; >1000ms: progress indicator | Motion token durations aligned to cognitive thresholds |
| Mental Models | Platform conventions followed unless 2× improvement justifies deviation | Design rules referencing platform guidelines |
| Recognition | All navigation items visible/labeled; max 2 hidden-until-hover items | Structure rules for navigation visibility |
| Delight | Micro-animations on success states; personality in empty states | Motion presets for success/completion; copy guidelines |
| Accessibility | WCAG AA minimum (4.5:1 text, 3:1 UI); keyboard navigable; screen-reader compatible | Token contrast pairs; component a11y specs |
| Progressive Complexity | Default view: essential controls; advanced: behind explicit toggle/expansion | Component variants: `simple` and `advanced` |
| Spatial Consistency | Fixed elements: nav, breadcrumbs, primary CTA always in same position | Layout template regions with consistent placement |

## Modern Context Application

- **Affordance + Flat Design Era**: With skeuomorphism gone, affordance relies on: (1) color contrast between interactive/non-interactive, (2) cursor changes, (3) subtle elevation/shadow, (4) hover/focus states. Tokens must distinguish `interactive-foreground` from `static-foreground`.
- **Cognitive Load + SPA Navigation**: Single-page apps risk cognitive overload by showing too much simultaneously. Solutions: page-level transitions showing context change; progressive disclosure patterns; view state management.
- **Error Prevention + Form Components**: Modern form patterns: inline validation on blur (not on type), disabled submit until valid, auto-save drafts, undo capability. Component specs must define validation timing and error display rules.
- **Feedback + Motion Tokens**: Motion duration tokens map to feedback timing: `instant` (<100ms, state changes), `quick` (150-300ms, micro-interactions), `moderate` (300-500ms, transitions), `slow` (500ms+, page transitions with progress indication).
- **Accessibility + Token System**: Tokens as the ENFORCEMENT mechanism: all color pairs in tokens are pre-validated for contrast. Using tokens = guaranteed accessible. Bypassing tokens = accessibility risk.
- **Progressive Complexity + Component Variants**: shadcn/UI pattern: basic component variant covers 80% of use cases; additional variants (sizes, states, compositions) address the remaining 20%.

## Anti-AI-Slop Indicators

| Expert UX | AI-Slop UX |
|-----------|------------|
| Clear affordances (interactive elements look interactive) | Flat elements with no visual distinction between interactive and static |
| Minimal cognitive load (only necessary information shown) | Information overload; all features visible at once |
| Error prevention built into flow (constraints, defaults, confirmations) | Errors handled only after they occur (reactive, not preventive) |
| Consistent feedback timing (immediate for actions, animated for transitions) | No feedback or inconsistent feedback timing |
| Spatial consistency (navigation, actions in same position across views) | Layout shifts between pages; elements in different positions |
| Progressive disclosure (complexity revealed on demand) | Everything at maximum complexity from the start |
| Accessibility baked in (contrast, targets, keyboard, screen-reader) | Accessibility as afterthought (low contrast, small targets) |
| Micro-interactions that communicate state (not just decorate) | Animations that serve no communicative purpose |
| Recognition-based navigation (visible labels, no hidden controls) | Mystery icons without labels; hidden navigation |
| Mental model alignment (follows platform conventions) | Novel interactions that require learning without benefit |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Affordance distinction | `tokens/semantic.tokens.json` | Separate `interactive-*` and `static-*` color tokens | Visual distinction between clickable and non-clickable |
| Cognitive load limits | `design-rules/structure.rules.json` | `maxChoicesPerDecision: 7`, `maxStepsPerFlow: 3` | Respects working memory capacity |
| Error prevention patterns | `components/` manifest | Form components: `validationTiming`, `confirmationRequired` fields | Built-in prevention over recovery |
| Feedback timing | `motion/motion.tokens.json` | Duration categories aligned: `instant`, `quick`, `moderate`, `slow` | Feedback matches cognitive processing speed |
| Mental model reference | `design-rules/structure.rules.json` | `platformConventions` reference section | Documents expected patterns per platform |
| Recognition over recall | `design-rules/structure.rules.json` | `maxHiddenControls: 2`, `navLabelsRequired: true` | Forces visible, labeled navigation |
| Accessibility enforcement | `quality-gate/criteria.json` | `contrast-normal` criterion with specific checks | Non-negotiable quality threshold |
| Progressive complexity | `components/` manifest | Components support `variant: "simple" | "advanced"` | Start simple, allow advancement |
| Spatial consistency | `design-rules/layout.rules.json` | `fixedRegions` defining consistent element positions | Reduces spatial search cognitive cost |
| Delight integration | `motion/presets/` | Success/completion animation presets | Meaningful delight without sacrificing efficiency |

## Cross-References

- **Universal Principles of Design (Lidwell)**: Shares many principles (Fitts's, Hick's, Progressive Disclosure) — UX-specific applications
- **Laws of UX (Yablonski)**: Deeper scientific backing for several principles mentioned here
- **100 Things Every Designer Needs to Know**: Cognitive science basis for load, memory, and attention principles
- **Tragic Design**: Real-world consequences of violating these UX principles
- **Designing for Emotion**: Expands the delight/satisfaction principle
- **Don't Make Me Think (Krug)**: Recognition over recall and cognitive load principles applied practically
