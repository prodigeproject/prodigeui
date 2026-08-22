# Product Experience Architecture

> A polished first viewport is not a product experience. Before art direction,
> ProdigeUI must decide what outcome the product helps create, why a particular
> user should believe it, and how the interface carries that person to the next
> meaningful state.

This is mandatory in Creative Mode before art direction, tokens, components,
layout, or media are selected. It prevents a
category label such as “SaaS”, “fashion”, or “premium” from becoming a substitute
for product thinking.

## 1. Start with the problem, not a screen genre

Create a private Product Opportunity Record. Mark unknown facts as assumptions;
do not make up customer segments, traction, prices, metrics, clinical claims, or
technical capability to make the experience feel more complete.

| Field | Decision to make |
| --- | --- |
| Offering | What changes hands or changes state: a service, tool, physical product, place, expertise, or relationship? |
| Primary actor | Who makes the next decision? What knowledge, time pressure, and confidence do they bring? |
| Supporting actor | Who else affects the outcome: approver, clinician, operator, household member, seller, or support team? |
| Trigger | What happened just before the person arrived? |
| Job and desired outcome | “When ___, I need to ___ so that ___.” Use the user’s language, not a feature name. |
| Current alternative | What would they do without this product: spreadsheet, competitor, waiting, asking someone, a physical visit, or abandoning? |
| Value mechanism | What specific product behavior makes the outcome easier, safer, faster, more legible, more enjoyable, or more credible? |
| Differentiator | What does this product make possible, notice, prove, or reduce that the current alternative does not? |
| Market and risk | What conventions must remain familiar? What would make the decision feel risky, expensive, regulated, irreversible, or culturally wrong? |
| Evidence | What truthful artifact can establish the mechanism: live state, product detail, place, care pathway, result, specification, or process? |
| Market reference calibration | Which two or more real experiences reveal the category's expected entry pattern, evidence, commitment, and recovery? What product-specific departure will this experience make? |
| Success signal | What observable user progress would mean the first experience worked? Do not invent a numeric KPI. |

The differentiator must be a product decision, not an aesthetic adjective. “Warm”,
“calm”, “premium”, or “minimal” can describe the expression of the answer, but
cannot be the answer itself.

## 2. Define the whole experience that the brief implies

Classify the request before producing a page:

| Experience scope | What must be designed |
| --- | --- |
| Campaign / discovery | Proposition, proof, objection handling, a specific next action, and the handoff into evaluation. |
| Commerce | Discovery, comparison, product detail, selection, cart or enquiry, confidence cues, and recovery from unavailable choices. |
| High-consideration decision | Evidence, comparison, consultation/viewing/booking path, and a clear record of the decision. |
| Trust-critical service | Orientation, plain-language choice, safety/support cues, form or triage, confirmation, and error/recovery. |
| Operational product | Current state, ownership, priority, action, feedback, history, and an empty/error/permission model. |
| Learning / habit | Current goal, next small action, feedback, progress, return loop, and lapse recovery. |
| Cultural / editorial | Point of view, relevant work or programme proof, logistics, accessibility/visit context, and invitation. |

Do not silently reduce a service or product flow to a hero and three feature cards.
If the requested scope is uncertain, declare the smallest honest scope and state
what is intentionally out of scope.

## 3. Calibrate to the real market before composing

Read `market-reference-calibration.md` after the Product Opportunity Record and
before choosing a layout family, type behavior, palette, or media treatment.
Create the Market Reference Read and select one experience archetype. Record the
dominant proof, the first-viewport compositional engine, the market convention
that protects comprehension, the product-specific departure, and the generic
fallback that is prohibited for this case.

This step is not an invitation to copy a reference. It is a test of whether the
experience respects what a person needs to recognize in this market while making
the product's own mechanism visible. A form, gallery, giant headline, split
panel, or dashboard is valid only when the selected archetype and decisive
journey explain it.

## 4. Map the decisive journey

For each primary actor, write one primary flow before component selection:

```text
entry or trigger
  -> orientation: what is this and why now?
  -> evidence: what reduces the main uncertainty?
  -> choice: what must they compare, provide, or decide?
  -> action: what is the safe next commitment?
  -> feedback: how do they know the system received it?
  -> result: what changed for them?
  -> next / return / recovery: what happens after success, delay, or failure?
```

Use the flow to decide navigation, sequence, progressive disclosure, and which
screens or states are necessary. A visual page can be a valid deliverable only
when the real next action is outside its scope and the handoff is explicit.

### Map exposure, not only states

A complete state model does **not** mean every state, explanation, reassurance,
or recovery mechanism belongs in the first viewport. Before composing, classify
each fact or region as one of the following:

| Exposure | Put it here when |
| --- | --- |
| Always visible | It creates orientation, proves the offering, prevents harm, or is needed for the immediate decision. |
| Decision-time | It is needed only once a person starts comparing, selecting, or committing. |
| Action-result | It acknowledges a submitted choice, changed state, or retained context. |
| Exception / recovery | It explains an unavailable, invalid, risky, or failed path. Keep it reachable, not permanently foregrounded. |
| Return context | It matters when the person comes back after an interruption, change, or saved decision. |

Safety, eligibility, cost, destructive consequence, and time-sensitive facts
are not candidates for decorative deferral. Otherwise, prefer a quiet default
surface that shows the next meaningful decision and lets the rest appear at the
moment it becomes useful. This is progressive disclosure for comprehension, not
an excuse to hide material information.

## 5. Create a screen, state, and content contract

For every meaningful flow, record the smallest set of screens or regions that
lets a user complete it. Each interactive unit needs a state matrix. Mark truly
inapplicable states `N/A` with a reason rather than emitting pretend UI.

| Moment | Required question |
| --- | --- |
| Default | What can the person understand or do without instruction? |
| Loading / waiting | What remains useful while the result is unavailable? |
| Empty / first use | What explains the absence and starts a valuable action? |
| Invalid / error | What went wrong, where, why, and how can it be repaired? |
| Permission / eligibility | What is blocked, who can resolve it, and what is the safe alternative? |
| Success / confirmation | What changed, what proof is retained, and what is the next step? |
| Returning / changed context | How does the experience preserve progress and explain new information? |

For forms, errors must be described in text and connected to the correction path.
For financial, health, legal, or irreversible actions, show review, consent, or
undo/escalation behavior appropriate to the actual risk.

## 6. Turn product logic into information architecture

Only now choose the first proof, page topology, and layout family. The structure
must answer the flow’s current question, not merely make the page visually varied.

1. Put the proposition, mechanism, and proof needed for immediate orientation or
   commitment in the first meaningful viewport. A category label alone is
   insufficient; neither is a permanent dashboard of future states.
2. Separate recognition from commitment. Use small, reversible actions before a
   high-risk action when the user is not ready to decide.
3. Let familiar market conventions carry basic comprehension; spend visual
   distinctiveness on the product’s differentiating mechanism or evidence.
4. Give each section a named decision or uncertainty to resolve. Remove sections
   that only restate a category promise.
5. Make the next action describe its result: `Compare ranges`, `Choose a roast`,
   `Request a care guide`, or `Resolve release risk`, not `Get started`.
6. Let the selected experience archetype own the first viewport. Lead with the
   relevant working object, product set, journey input, place, care need, or
   practice moment; do not replace it with a universal promotional composition.

## 7. Make differentiation visible without inventing claims

Run this test before implementation:

- If the product name is removed, could a direct competitor use exactly the same
  headline, proof, cards, and CTA? If yes, the value mechanism is still generic.
- If the primary user changes, do the trigger, proof, terminology, task order,
  density, and commitment level change? At least four should be re-derived.
- Is the differentiator visible as a product artifact, workflow, comparison,
  material detail, service pathway, or decision model—not only as a color or font?
- Does the design preserve category familiarity where it protects trust, while
  changing the part of the experience where the product is genuinely different?
- Compared with the previous unrelated artifact, do at least four of first
  viewport topology, type behavior, palette posture, media role, density,
  action placement, and section sequence change for a product reason? If not,
  run the identity-collapse test in `market-reference-calibration.md`.

The goal is not novelty for its own sake. It is a recognisable, useful reason for
this product to exist.

## 8. Design-engineering handoff

Read `design-engineering-quality.md` before turning this record into UI. It
adds the required judgement record and the implementation contracts for type,
colour, headers, action feedback, state transitions, motion, drawers, and
transient feedback. Its rules make the final mile of craft inspectable without
forcing one shared visual style across products.

The implementation record must name:

- the selected scope, primary flow, and intentionally excluded flow;
- the exposure map: what is always visible, decision-time, action-result,
  exception/recovery, and returning context, including any safety exception;
- screens/regions, navigation topology, and deep-link or handoff behavior;
- content model and source/provenance for each material claim or asset;
- state matrix, semantic controls, keyboard/focus behavior, and assistive copy;
- responsive task changes, not only breakpoint geometry;
- performance, privacy, security, localization, and platform constraints when relevant;
- semantic tokens, component contracts, and the reason a bespoke pattern is or is not needed;
- the Market Reference Read, selected archetype, dominant proof, and
  product-specific departure;
- the design read, art direction record, media rationale, and rejected alternative.

Visual craft is then free to be ambitious, but it may not erase the product’s
decision model or invent a decorative product surface that cannot exist.

## 9. Review from three disciplines

### UX designer

Can the intended person orient, decide, act, recover, and continue without
learning the organization’s internal model? Does every screen reduce an actual
uncertainty or advance the task?

### Product designer

Does the experience make the value mechanism and product differentiation visible?
Are market expectations, business trade-offs, trust, and the core loop reflected
in the information hierarchy? Is this enough experience to reach a meaningful
outcome rather than a beautiful fragment?

### Design engineer

Are the states, semantics, focus management, responsive transitions, data
dependencies, error behavior, and component boundaries implementable? Does the
visual treatment remain truthful when assets fail, content grows, motion is
reduced, or the user returns with a changed state?

## 10. Fresh-generation protocol for regression work

A generative benchmark is valid only when each case is independently authored
from its own Product Opportunity Record, Market Reference Read, and Design Read.

- Do not use a shared HTML generator, common layout skeleton, preset page order,
  or reusable CSS sheet for the evaluated artifacts.
- Keep a shared *review rubric*, not shared implementation code.
- Give each case its own product, audience, trigger, differentiator, flow, state
  model, reference calibration, archetype, media plan, navigation, token
  rationale, and responsive behavior.
- Evaluate both the rendered surface and the flow/state record. A technically
  clean static page is incomplete if it cannot explain how the user proceeds.
- Report limitations honestly: one agent-authored fixture per domain does not
  prove cross-model generalization or user preference.

## Sources informing this contract

This contract adapts user-centred service principles: start with the user problem,
avoid assuming a solution, examine the whole journey, and keep testing assumptions.
See [GOV.UK’s user-needs standard](https://www.gov.uk/service-manual/service-standard/point-1-understand-user-needs), [its guidance on defining user needs and experience maps](https://www.gov.uk/service-manual/user-research/start-by-learning-user-needs), and [its end-to-end service design guidance](https://www.gov.uk/service-manual/design/introduction-designing-government-services). Error, feedback, and correction states also follow [W3C’s explanation of WCAG error identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification).
