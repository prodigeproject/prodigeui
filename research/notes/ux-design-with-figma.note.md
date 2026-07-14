---
sourceId: ux-design-with-figma
sourceType: book
sourceName: "UX Design with Figma: User-Centered Interface Design and Prototyping with Figma (Design Thinking)"
sourceLocation: "Book/design-tools/Figma/UX Design with Figma User-Centered Interface Design and Prototyping with Figma (Design Thinking) (Tom Green, Kevin Brandon) (Z-Library).pdf"
appliedTo: []
---

## Key Principles Extracted

1. **User-Centered Design Process in Tool Context**: Design Thinking phases (Empathize → Define → Ideate → Prototype → Test) executed within Figma. Each phase produces artifacts: personas (empathize), user flows (define), wireframes (ideate), interactive prototypes (prototype), usability findings (test).

2. **Wireframe-to-High-Fidelity Progression**: Design progresses through fidelity levels: sketch → low-fi wireframe → mid-fi wireframe → high-fi mockup → interactive prototype. Each level adds detail. ProdigeUI serves the high-fi to code transition — but must support all fidelity levels.

3. **User Flow as Navigation Architecture**: User flows define how users move between screens/states. Flows reveal: entry points, decision points, dead ends, loops, completion paths. Navigation component design must support the flow structures users need.

4. **Prototyping for Behavior Validation**: Prototypes test BEHAVIOR (interaction patterns, timing, sequence) not just appearance. Can the user complete the task? Where do they hesitate? What confuses them? Interactive behavior specification is as important as visual specification.

5. **Gestalt Principles in Layout**: Proximity (group related), similarity (same style = same function), continuity (visual flow), closure (implied completeness), figure-ground (foreground/background distinction). These are the perceptual basis for all layout decisions.

6. **Information Architecture (IA) as Foundation**: Content structure precedes visual design. Card sorting results → navigation structure. Mental models → information hierarchy. IA determines WHAT appears WHERE; visual design determines HOW it appears.

7. **Responsive Design Thinking**: Design for the smallest screen FIRST, then scale up. Constraints of small screens force content prioritization. Desktop gets additional content, not different content. This mobile-first philosophy affects component behavior specs.

8. **Usability Heuristics as Quality Criteria**: Nielsen's 10 heuristics provide evaluation framework: system status visibility, user control, consistency, error prevention, recognition over recall, flexibility, minimalism, error recovery, help. These map to quality gate criteria.

9. **Micro-Interaction Design**: Small interactions that communicate: button press feedback, toggle animation, form validation appearance, loading state progression. Each micro-interaction has: trigger → rules → feedback → loop/mode.

10. **Content Strategy Integration**: UI design is inseparable from content. Real content (not lorem ipsum) reveals: length issues, hierarchy problems, localization challenges, empty state needs. Components must be designed with real content in mind.

## Concrete Rules & Parameters

| Principle | Measurable Rule | Application |
|-----------|----------------|-------------|
| Design Thinking Phases | Each use-case template maps to a user journey with defined phases | Prompt template user-flow integration |
| Fidelity Progression | Component specs support: wireframe (structure only) + high-fi (full styling) | Multi-fidelity rendering |
| User Flow Coverage | Templates define: entry, paths, decisions, completions, error recovery | Use-case template structure |
| Gestalt in Layout | Proximity: related elements grouped (gap < outer gap). Similarity: same function = same style | Spacing rules + consistency criteria |
| IA Before Visual | Component manifest defines content hierarchy before visual treatment | Manifest structure priority |
| Mobile-First | Component specs define mobile behavior FIRST, then tablet/desktop enhancements | Responsive specification order |
| Heuristic Quality | 10 heuristics mapped to quality gate checks | Quality gate criteria structure |
| Micro-Interaction | Trigger + rules + feedback + loop defined per interactive component | Motion/interaction specs |
| Content-Aware | Components tested with: short content, long content, missing content, RTL content | Component edge case specs |
| Usability Metrics | Task success rate, time on task, error rate — designed-for metrics per flow | Use-case success criteria |

## Modern Context Application

- **Design Thinking + AI Agent Workflow**: ProdigeUI skills workflow mirrors Design Thinking: understand brief (empathize) → define requirements (define) → generate options (ideate) → produce output (prototype) → validate quality (test/quality gate).
- **Wireframe-to-Code + Token Fidelity**: Tokens support fidelity progression: wireframe mode (all borders, no colors) → full fidelity (complete token application). The same component spec, different token sets applied.
- **User Flow + Prompt Templates**: ProdigeUI prompt templates for different use-cases (SaaS, e-commerce, portfolio) encode standard user flows. A SaaS template includes: auth flow, onboarding flow, dashboard flow, settings flow.
- **Gestalt + Token System**: Gestalt principles are BUILT INTO the token system: proximity (spacing scale enables consistent grouping), similarity (same token = same visual = same function), figure-ground (surface tokens distinguish background layers).
- **Mobile-First + Responsive Tokens**: Token values defined mobile-first. Desktop values are enhancements: `padding: var(--space-4)` (mobile) → `var(--space-6)` (desktop). The mobile value is the base; desktop is the addition.
- **Nielsen's Heuristics + Quality Gate**: Each heuristic becomes a quality gate criterion: system status (loading states exist?), consistency (tokens used consistently?), error prevention (validation present?), minimalism (no unnecessary elements?).
- **Micro-Interactions + Motion Presets**: ProdigeUI motion presets encode micro-interaction behaviors: button-press (active state), toggle-switch (state change), form-validation (error appearance), loading (progress indication).

## Anti-AI-Slop Indicators

| Expert UX Design | AI-Slop UX Design |
|-----------------|-------------------|
| User flows defined before visual design (structure first) | Visual design without defined user journeys |
| Gestalt principles applied (clear grouping, similarity, flow) | Elements placed without perceptual logic |
| Mobile-first progressive enhancement | Desktop-only design that breaks on mobile |
| Real content testing (varying lengths, edge cases) | Lorem ipsum hiding content/layout issues |
| Micro-interactions serving communication purpose | Animations added for decoration, not communication |
| Nielsen's heuristics satisfied (all 10 addressed) | Multiple heuristic violations (no feedback, no consistency) |
| Information architecture preceding visual treatment | Visual treatment applied without content structure |
| Usability metrics defined (what does success look like?) | No success criteria or measurement plan |
| Error recovery paths designed (every error has a way forward) | Dead-end error states with no recovery |
| Progressive fidelity (structure validated before detail) | Jumping to high-fidelity without structural validation |

## Concrete Artifact Mapping

| Finding | ProdigeUI Artifact | Field/Section | Rationale |
|---------|-------------------|---------------|-----------|
| Design Thinking → Skill workflow | `skills/` workflow structure | Phases: understand → define → generate → validate | Expert process encoded |
| Fidelity progression | `tokens/` system | Wireframe-mode token set (borders only) vs full-fidelity set | Multi-fidelity rendering support |
| User flows → templates | `prompt-templates/` | Standard flows per use-case (auth, onboarding, dashboard) | Flow-aware template structure |
| Gestalt in tokens | `tokens/primitive.tokens.json` | Spacing scale enabling proximity-based grouping | Perceptual principles in token values |
| Mobile-first | `components/` manifest | Mobile behavior defined first; desktop as enhancement | Responsive-first specification |
| Nielsen's heuristics | `quality-gate/criteria.json` | 10 heuristic-derived criteria for quality evaluation | Established UX quality framework |
| Micro-interactions | `motion/presets/` | Presets per micro-interaction type (press, toggle, validate, load) | Behavior specification for common interactions |
| Content-awareness | `components/` manifest | `contentEdgeCases: ["short", "long", "empty", "rtl"]` | Forces content resilience |
| IA priority | `components/` manifest structure | Content hierarchy field precedes visual treatment field | Structure before aesthetics |
| Usability criteria | `use-cases/` specifications | Success metrics per user flow | Measurable design quality |

## Cross-References

- **Designing and Prototyping (1st/2nd Ed)**: Component creation detail for the prototypes Green/Brandon describe
- **Universal Principles of UX**: Theoretical backing for Gestalt, heuristics, cognitive principles applied here
- **Designing User Interfaces (Calonaci)**: Element-level design that implements the UX flows described here
- **Laws of UX (Yablonski)**: Scientific basis for the cognitive principles Green/Brandon apply
- **Don't Make Me Think (Krug)**: Complementary practical usability principles
- **Atomic Design**: Component architecture theory underlying the wireframe-to-code progression
