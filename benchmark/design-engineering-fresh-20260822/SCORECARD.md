# Scorecard — design-engineering fresh benchmark

## Result

The tuned implementation wins on every held-constant brief, moving the mean
screen-and-contract score from **3.2 to 4.0 / 5**. The gain is not that the
pages became more decorative: it comes from preserving the product decision
while making the current context, feedback, recovery, and focus behavior
observable.

This is a small, qualitative implementation benchmark. It is **not** evidence
that a prompt or model will produce the same result every time, nor that the
current guidance is final.

| Case | Baseline | Tuned | Delta | What earned the change |
| --- | ---: | ---: | ---: | --- |
| MIRA / fashion | 3.0 | 4.0 | +1.0 | Selected size, stock feedback, retained bag/delivery/exchange context, intentional editorial type. |
| Relay / release SaaS | 3.4 | 4.1 | +0.7 | Operational context, explicit ownership recovery, release confidence, and a real decision dialog. |
| Rasa / care | 3.0 | 3.9 | +0.9 | Urgent route remains visible; the next step carries the person's chosen concern and availability context. |
| ORION / automotive | 3.2 | 4.0 | +0.8 | A low-pressure drive planner retains vehicle, location, day, and an unavailable-time recovery. |
| Kala / cultural visit | 3.2 | 4.0 | +0.8 | Programme, access, arrival, and change context stay attached to the ticket decision. |
| **Mean** | **3.2** | **4.0** | **+0.8** | |

No result is scored 5. A five would require rendered compact-width review,
real service/error integration, accessibility testing beyond a code audit, and
at least one human task review.

## Rubric

Each screen is judged on seven equally important qualities: product/task fit,
information topology and header context, typography, colour/state semantics,
decision and recovery feedback, keyboard/motion contract, and distinctiveness
from a repeated house layout. A **3** is coherent but incomplete; a **4** is
appropriate and observable; a **5** is independently validated in use.

The frozen side is `43f629e`, the user-approved market-calibrated baseline in
the v3.0.8 lineage. The tuned side is the present working-tree guidance. Both
pages in a case are independently authored from the same brief and reuse the
same local product photo when a photo is relevant.

## Evidence actually checked

- Desktop visual review was performed for all five pairs in the local browser.
- All five tuned pages pass JavaScript syntax validation.
- All five tuned pages include visible status messaging, focus-visible styling,
  active feedback, and a reduced-motion path.
- Four use a native dialog for a consequential decision; Rasa intentionally
  keeps its clinical route inline so the safety context stays in view.
- Compact layouts were inspected in code, but were **not** rendered in a
  device-width browser. This is a known gap, not a pass.
- Pending, error, and success states are local simulations. They are not real
  inventory, booking, medical, payment, or release APIs.

## Honest notes by case

### MIRA

The tuned page makes the fashion purchase specific: a set, a size, a delivery
window, and exchange reassurance survive into the bag. Its risk is that the
large editorial headline can still compete with fast price/size comparison on a
smaller handset. The next test should include a denser product-list-to-detail
journey, not only a hero product page.

### Relay

The tuned page is materially better because its principal action keeps the
rollout, owner, blocker, and rollback context together. During this audit the
decision card initially used a Georgia serif, which made operational work feel
editorial. It was corrected to the UI typeface before scoring. This is a useful
guardrail: calm is not synonymous with serif.

### Rasa

The tuned route is calmer without hiding urgency, and the primary action names
what happens next. It should not be treated as finished clinical UX: language,
triage thresholds, accessibility, and safety outcomes need domain review.

### ORION

The planner is less like a generic vehicle hero because it makes the booking
context primary and explicitly avoids a purchase-pressure claim. The audit also
found that its linked wordmark inherited browser-blue; it is now deliberately
contrasted. Availability, consent, and appointment delivery still need a real
booking integration.

### Kala

The type and pacing suit a cultural visit, while time choice carries programme
and access facts. It still needs ticket price/eligibility and capacity behavior
to be a complete public booking experience.

## Regressions fixed before scoring

These are fixes to the new **tuned fixtures only**. The frozen baseline was not
changed.

1. Relay's decision and dialog titles now use its operational UI typeface.
2. ORION's wordmark explicitly maintains contrast in the dark linked header.
3. MIRA preserves its success message after the bag state repaints.

## What is still not good enough

The tuned examples still lean toward desaturated paper, dark ink, small
monospace labels, and editorial display type. They are no longer the same
NOVA-shaped layout, but this can become a quieter repeated house style if it is
treated as a default. A product's market, frequency of use, urgency, content
density, and evidence type must continue to choose the typography, colour
system, header, and action topology.

Before the guidance becomes final, it should pass a fresh benchmark containing
at least a dense finance/admin tool, a playful consumer product, and an
information-heavy public service, then be rendered at compact widths and
reviewed by people performing the real tasks.
