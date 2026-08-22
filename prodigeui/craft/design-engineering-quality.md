# Design Engineering Quality

> Craft is not a layer applied after the product is usable. It is the discipline
> of making the product’s intent, states, and details feel coherent at the speed
> and frequency at which people really use them.

Use this document after `product-experience-architecture.md` and
`market-reference-calibration.md`, and before declaring an implementation ready
for review. It turns a Product Opportunity Record into typography, colour,
header, action, state, and motion decisions that can be inspected in a real
render.

This is not a new house style. A calm healthcare router, a dense release room,
an editorial fashion shop, and a cultural programme may share quality rules but
must not inherit the same visual voice.

## 1. Add productive friction before building

Cheap generation makes it easy to ship the first plausible version. Do not
mistake that speed for a decision.

Before implementation, create a **Judgement Record** with the following:

| Field | Required decision |
| --- | --- |
| User moment | What is the person trying to understand or safely do right now? |
| Candidate A / B | Which two materially different treatments are being considered? Change one design variable at a time. |
| Hypothesis | Why should the selected type, hierarchy, header, action, or motion help this particular person? |
| Evidence | What market reference, user need, product mechanism, or accessibility constraint supports it? |
| Rejection | Why is the rejected option wrong here—not merely less attractive? |
| Test | Which realistic content, viewport, interruption, and input method will prove or disprove the choice? |

Render both candidates when uncertainty is real. Compare them in the actual
product context, not as empty style tiles. A quick A/B prototype is a useful
thinking tool only when a human or an explicit review rubric chooses and records
the reason for the decision.

This is the system’s deliberate friction: it prevents a model from emitting an
unexamined default while preserving the speed to explore alternatives.

## 2. Typography is product behaviour, not decoration

### Establish a real type plan

Every artifact must name its type roles and source:

| Role | Decision required |
| --- | --- |
| Brand / display | Does the market and the product’s proof call for a distinct display voice, or should hierarchy remain utilitarian? |
| Interface / body | Which face, x-height, weights, and fallbacks keep controls and prose readable at the intended density? |
| Data / metadata | Are tabular figures, timestamps, labels, or long identifiers present? Give them a legible, stable treatment. |
| Fallback | What system fallback has compatible proportions and weight, so loading does not visibly change the layout? |

- Do not write `Inter` (or any named face) unless it is actually available by
  local asset, `@font-face`, or a declared provider. A pretend font plan silently
  becomes a device-dependent default.
- Use at most two type families by default. Add a third only when data or code
  truly requires it.
- Cap prose measure around 65ch unless a product-specific reading mode has a
  documented reason to differ. Keep labels, captions, and metadata narrower.
- Use `font-variant-numeric: tabular-nums` for aligned prices, money, dates, or
  score columns. Do not use a display face to make a number look premium at the
  cost of scanability.
- Give uppercase labels positive tracking and modest weight. Tight all-caps
  text is a common source of false "premium" styling and poor reading rhythm.
- Reserve underlines for links. Keep italic for quoted or linguistic emphasis,
  not as a generic UI hierarchy device.
- A large display title must earn its size by carrying a meaningful orientation
  decision. A task screen, price comparison, care route, or dense workflow may
  need a smaller, faster-to-scan heading than a cultural or editorial entry.

### Review type in context

Test a long product name, a two-line action label, an error message, a currency
amount, and a 2–3 sentence body paragraph. A typography decision fails when it
only works with the sample headline used to generate it.

## 3. Build a colour system with a job

Choose colour from the Market Reference Read, the emotional and regulatory
posture of the product, the dominant proof, and the action risk. Then name the
roles rather than relying on a one-off palette:

```text
surface / elevated surface / text / muted text / line
primary action / secondary action / selected / focus
success / warning / error / unavailable
media overlay / data-positive / data-negative (when applicable)
```

- A pale surface plus one saturated accent is a starting point, not a completed
  system. It becomes a recognizable default when used unchanged across unrelated
  products.
- Check foreground/background contrast for every actual text and state pairing.
  Do not infer accessibility from a palette swatch.
- Colour may identify a selected option or a risk state only when another cue
  (copy, icon, shape, position, or state) carries the meaning too.
- Use a strong accent where it helps a real choice; do not spread it across every
  label, border, and decorative object until the product loses its action
  hierarchy.
- A dark brand band, paper background, and bright CTA can be right for one
  product. It must not become ProdigeUI’s visual signature by default.

## 4. Size and composition follow the task

Before specifying `clamp()` values or a hero height, write the reading distance,
entry speed, and next decision. The same large `34–72px` headline with negative
tracking across every category is an identity-collapse signal, not a flexible
scale.

| Situation | Bias the hierarchy toward |
| --- | --- |
| Operational / frequent workflow | current state, action queue, data alignment, small but clear controls |
| High-consideration decision | proof, comparison inputs, retained context, reversible next step |
| Editorial / culture / brand | point of view and work, with logistics or inquiry visible before commitment |
| Commerce | object, fit/specification, selection, availability, price, and a safe add/buy step |
| Care / trust-critical route | plain-language orientation, safety escalation, choice clarity, and recovery |

Use whitespace to clarify a decision boundary, not merely to make a generated
page feel luxurious. When content is dense, use alignment, grouping, and
progressive disclosure instead of inflating all components.

## 5. Choose a header topology; do not default to a navigation strip

A header is part of the experience architecture. It must answer: what context
must persist while the person completes the first task?

| Product situation | Likely header behaviour |
| --- | --- |
| Focused tool or form | minimal context, back/close, saved state, help, and the task action |
| Operational workspace | persistent navigation, location/breadcrumb, role/status, and scoped actions |
| Discovery / commerce | brand, category/search/saved state, and an honest route to the active decision |
| Care / support | service identity, immediate safety escalation, access/help route; do not bury urgent care in generic navigation |
| Culture / editorial | identity and programme/inquiry/visit route; do not invent product-style tabs if the work is the proof |

- Do not automatically use brand-left / links-right / coloured final link.
- A compact viewport cannot simply hide the primary navigation. It needs a
  deliberate replacement: task menu, drawer, segmented context, persistent
  search, or an explicitly narrower scope.
- Header copy must preserve context. `Saved homes · 2`, `Synced 2 min ago`, and
  a release breadcrumb are useful only when they describe a real reachable state.

## 6. Actions need a result, feedback, and a recovery path

An action label states the outcome that will happen: `See available times`,
`Review payment`, `Add size M to bag`, `Request the care guide`. Avoid generic
labels such as `Submit`, `Continue`, or `Get started` when the result can be
named.

For every material action, design this state chain before writing the button:

```text
idle -> pressed -> pending -> success / changed state -> error or recovery
```

- Provide immediate acknowledgement. A subtle `:active` response can support a
  press, but never replaces a visible pending, success, error, or changed
  product state.
- Make the hit target at least 44px in the smallest intended interaction mode.
  Preserve a clear keyboard focus treatment.
- Match friction to risk. High-cost, destructive, regulated, or hard-to-reverse
  actions deserve a review, clear consequence, confirmation, undo, or an
  escalation path. Low-risk repeated actions should remain fast.
- A toast may acknowledge a secondary, reversible action. It must not be the
  sole proof that an important payment, booking, care request, or deletion
  succeeded.
- A primary CTA has to live beside the evidence needed to make that commitment.
  Do not use one detached full-width accent button as the only conversion story.

## 6A. Quiet capability: complete, but not constantly exposed

`Complete behaviour != constant exposure.` A product can retain pending,
success, recovery, history, help, and context without presenting all of them as
permanent first-viewport furniture. The default frame should make one current
decision feel inevitable; the rest should become visible at the moment it
changes that decision.

Before writing layout, make a private **Exposure Map**:

| Exposure | Typical content | Default treatment |
| --- | --- | --- |
| Always visible | orientation, dominant proof, safety escalation, price or eligibility needed now, primary action | Give it hierarchy and a stable place. |
| Decision-time | comparison detail, size/variant, form fields, precise terms | Reveal when the person begins the relevant choice. |
| Action-result | pending acknowledgement, selected-item summary, confirmation | Surface after action while preserving the initiating context. |
| Exception / recovery | unavailable time, invalid input, missing owner, undo route | Keep it reachable and explicit when triggered; do not pre-fill the quiet default with hypothetical failure panels. |
| Returning context | saved progress, changed availability, resume action | Restore it on return, not as decorative metadata for a first-time visitor. |

This is not permission to conceal cost, safety, consent, eligibility, or an
irreversible consequence. Those facts are always-visible or decision-time based
on the risk. The test is whether removing a region from the default frame makes
the immediate decision unsafe or ambiguous. If not, it should normally be
deferred.

### First-viewport exposure budget

Use a budget as a composition review, not a fixed component recipe:

- One primary decision and one dominant proof or working object should own the
  first scan.
- Keep only the context that changes the current decision. A breadcrumb,
  saved-state label, help affordance, or header action must pass a subtraction
  test: if removing it changes nothing the person can do now, relocate it.
- Let one compact supporting cue earn its place; avoid a second explanatory
  panel, decorative status bar, or repeated reassurance when the first proof
  and action are already clear.
- A status colour, warning surface, progress meter, or confirmation card belongs
  to the state it describes. Do not keep all semantic states visually active in
  the idle frame merely to prove that the system has them.
- Typography may use display, interface, and annotation roles, but every role
  must remain quiet enough to support the first decision. Do not add small
  monospace labels, heavy all-caps, or an editorial serif by default as a proxy
  for craft. Operational and high-frequency surfaces usually need a coherent UI
  voice; cultural or material evidence may earn a display voice.
- Whitespace is a decision boundary. It should release the dominant proof and
  action, not become an empty luxury band or force necessary task information
  below an arbitrary fold.

### Reveal without losing calm

The implementation must still contain the full state chain. Let a press create
a small pending acknowledgement, then a changed region, sheet, dialog, or
inline result appropriate to the task. Preserve the selected inputs and the
proof that justified the action. A quiet default that has no real feedback is
incomplete; a fully instrumented default that reads like a dashboard is noisy.

During review, ask:

1. Can a person describe the first viewport in one sentence without listing
   unrelated panels?
2. Can they find the primary action and evidence without reading helper copy?
3. Does new information appear only when it changes the decision, action, or
   recovery path?
4. After an action, does the product show a changed state without making the
   person reassemble their previous context?
5. Does the same quiet treatment remain appropriate for this market, rather than
   turning paper, dark ink, tiny mono labels, and display serif into a new house
   style?

## 7. Component-quality contracts

### Drawers and sheets

Use a drawer when a compact or mobile context benefits from an interruptible,
native-feeling continuation—not simply because a dialog is inconvenient.

- Build on an accessible dialog primitive or provide equivalent semantics,
  initial focus, focus trap, escape behaviour, labelled title, and focus return.
- Define the relationship between scroll and drag: a scrollable sheet may drag
  to dismiss only at the correct scroll position. Test flicks, multi-touch, and
  an input with the software keyboard open.
- Move the sheet using a transform on the moving element. Avoid inheritable CSS
  variables updated per drag when they trigger broad child style recalculation.
- Test real mobile hardware or a faithful emulator. Viewport and keyboard changes
  are part of the component contract, not a desktop resize edge case.

### Toasts and transient feedback

- Use interruptible transitions rather than one-shot keyframes when stacked
  notices can be added, removed, or re-ordered during movement.
- Pause dismissal when the document is hidden and when the person is inspecting
  the message. Keep pointer capture during a swipe.
- Support concise, appropriate announcement semantics and a visible close or
  undo route when the feedback is consequential.
- Stack only when several notifications are plausible; expose the full list on
  hover/focus or provide an equivalent accessible route.

### Tabs, reveals, and clip-path

`clip-path` is an optional rendering technique, not a generic flourish. It can
reveal media or move a visible tab treatment without changing layout, but it must
not duplicate interactive controls or hide semantic state.

- Use it when it explains spatial change, comparison, selection, or an image
  reveal; do not use it to conceal weak hierarchy.
- Keep the actual interactive tab/list semantic. Any visual overlay is
  `aria-hidden` and non-focusable.
- Prefer transform/opacity or clipping to layout-changing animation when it
  avoids layout shift, then test on constrained devices. Use Intersection
  Observer for small viewport-triggered effects rather than loading a large
  animation dependency only for one reveal.

## 8. Motion expresses causality, not decoration

| Scenario | Starting guidance |
| --- | --- |
| Press / micro-feedback | 100–150ms; subtle scale such as `0.97` when appropriate |
| Tooltip, popover, small menu | 150–250ms; origin-aware; entering/exiting uses a responsive ease-out |
| Drawer, dialog, large panel | 200–300ms for ordinary UI; duration follows travel distance and mass |
| High-frequency controls | reduce or remove repeated animation after the first useful cue |

- Do not animate an element from `scale(0)`. Start near its resting size (for
  example `0.95`) so it retains visual continuity.
- Entering and exiting UI should feel responsive early in the curve; use a
  deliberate ease-out rather than a slow ease-in default.
- Set `transform-origin` to the trigger location for popovers, menus, and
  contextual panels.
- Motion must tolerate interruption: rapidly opening/closing, adding a second
  toast, switching tabs, or a late network result should retarget cleanly instead
  of jumping to a stale end state.
- Respect `prefers-reduced-motion`; the non-animated state must remain complete
  and intelligible.
- Blur can sometimes bridge a short visual state change, but it is a repair tool,
  not a substitute for a coherent transition or readable content.

## 9. Required rendered review

Before approving an artifact, inspect it with realistic content at desktop and
compact widths, with keyboard navigation, and with motion reduced. Test at least:

1. a long label or product name;
2. the primary action through pending, success, and error/recovery;
3. a rapid interaction interruption;
4. an unreachable/empty/changed state relevant to the product;
5. header and primary task behaviour at compact width; and
6. the chosen distinguishing visual decision beside its rejected alternative.

For interactive components, include one real runnable path. A static mock may
illustrate architecture, but it cannot receive a pass for action feedback or
motion quality.

## 10. Benchmark every material tuning change

A tuning change is a hypothesis, not a quality claim. Freeze the accepted
baseline commit before changing the rules, then create a comparative benchmark
after the new rules have generated artifacts.

1. **Freeze the comparison.** Record the baseline commit, tuned commit, exact
   prompts, model/runtime, viewport sizes, asset provenance, and review date.
2. **Test both regression and transfer.** Re-run a small set of the original
   product situations to protect their strengths, then use materially different
   product briefs to test whether the tuning transfers rather than overfits.
3. **Generate fresh artifacts.** Each baseline and tuned case must be independently
   authored from the prompt and current system. Do not repair a previous HTML
   file, reuse a shared benchmark generator, or select only a flattering output.
4. **Review the same tasks.** Compare typography/font reality, colour-state
   behaviour, first-viewport topology, header context, primary action state
   chain, media evidence, compact task continuity, and interruption/reduced
   motion handling.
5. **Publish gains and regressions.** Include side-by-side renders, a scorecard,
   concrete evidence, known limitations, and any previously accepted property
   that became worse. A tuning cannot pass by improving only its target metric.
6. **Decide honestly.** Promote the tuned version only when it meets the prior
   baseline bar and demonstrates the intended improvement across the stated
   evaluation set. Otherwise retain the baseline and revise the hypothesis.

The benchmark is a design review artifact, not a marketing asset. It is allowed
to show that a supposedly better tuning is worse.

## 11. Source-to-rule notes

This contract synthesizes the following design-engineering readings by Emil
Kowalski. They inform the rules above; they do not authorize copying their visual
style or implementation verbatim.

- [Building a drawer component](https://emilkowal.ski/ui/building-a-drawer-component): gesture performance, scroll/drag coordination, visual viewport handling, focus, and real-device testing.
- [Train your judgement](https://emilkowal.ski/ui/train-your-judgement): make comparisons explicit and articulate why one treatment feels better.
- [7 practical animation tips](https://emilkowal.ski/ui/7-practical-animation-tips): immediate feedback, scale restraint, origin-aware motion, ease-out, brief durations, and frequency-aware motion.
- [The magic of clip-path](https://emilkowal.ski/ui/the-magic-of-clip-path): clipping for deliberate reveal and selection treatments without layout shift, while keeping semantics real.
- [Developing taste](https://emilkowal.ski/ui/developing-taste): study excellent work, rationalise decisions, practice, and seek useful critique.
- [Building a toast component](https://emilkowal.ski/ui/building-a-toast-component): interruptible stacking, visibility-aware timers, pointer capture, and invisible reliability details.
- [Agents with taste](https://emilkowal.ski/ui/agents-with-taste): make conditional craft knowledge explicit enough that an agent can apply and audit it.
- [Friction as a feature](https://emilkowal.ski/ui/friction-as-a-feature): use deliberate review and validation to stop cheap generation from becoming unexamined output.
