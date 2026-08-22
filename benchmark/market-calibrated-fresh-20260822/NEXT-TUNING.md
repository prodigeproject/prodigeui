# Next Tuning — Critique of the Market-Calibrated Baseline

**Baseline:** `43f629e` — `feat(benchmark): add market-calibrated experience baseline`
**Status:** promising direction; not an accepted universal quality bar.

The benchmark has made the important structural correction: each case now has a
different product decision, dominant proof, and first-viewport engine. MIRA is
not a disguised release dashboard, ORION starts from a vehicle and a test-drive
decision, Rasa starts from care need, and Lumen starts from operational state.

However, the pages are still first-pass visual fixtures. The current result is
more product-specific than the rejected Nova-like output, but not yet sufficiently
crafted or whole enough to model a production experience.

## Observed evidence

- The ten product pages contain **no script tags**. Buttons therefore demonstrate
  position and label, not a real user action, pending state, confirmation, error,
  drawer, toast, or recovery path.
- **Nine of ten** pages mention an Arial stack and **nine of ten** mention an
  Inter stack, but none declares `@font-face` or a font provider. The purported
  type choices will collapse to different device defaults.
- None of the ten pages defines a `:active` treatment. Even an immediate press
  acknowledgement is absent.
- Most discovery pages retain a broad top navigation band. The labels vary, but
  the topology is still often brand-left / links-right / one coloured end link.
  On compact widths, several simply hide most links without introducing a task-
  appropriate replacement.
- The pages use different palettes, but frequently settle into paper/pale surface
  + dark ink + one saturated accent. That is a reasonable first palette posture,
  not yet a category-native colour system with selected, warning, unavailable,
  focus, and action roles.

## What is working

| Case | Direction worth retaining |
| --- | --- |
| MIRA | Product imagery, fit/material language, price, and size intent make it recognisably commerce instead of a generic fashion moodboard. |
| Relay / Lumen | A real state and a decision queue lead; the pages are more operational than marketing-led. |
| ORION / Nara / Pesisir | Object/place evidence is tied to a concrete decision (drive, viewing, travel plan). |
| Rasa / Sora / Kala | The copy has a humane task and recovery intention rather than an empty feature list. |
| Ruang | Work is placed ahead of generic studio claims, which is the correct evidence hierarchy. |

## Critical gaps by craft dimension

### 1. Typography and font choice — P0

The system currently selects *font genres* in code (`Arial`, imagined `Inter`)
rather than actual typefaces with a reason. The repeated heavy, tightly tracked,
large sans heading is enough to make different industries feel authored by the
same generator even when layout differs.

- Build a font plan per case: actual local/provider source, display/interface/data
  roles, weight availability, fallback metrics, and body measure.
- Let MIRA use material/editorial contrast only if the selected type supports
  product facts and size selection; let Relay/Lumen privilege compact UI and
  numeric clarity; let Rasa privilege legibility and calm; let Ruang earn a more
  authored display treatment through the work itself.
- Reduce the shared `clamp(34px–72px)` / aggressive negative tracking pattern.
  Larger type should be reserved for a specific entry moment, not applied to
  every first viewport.
- Add realistic stress content: long item names, Indonesian/English language
  changes, errors, values, dates, and wrapped CTAs.

### 2. Colour — P0

The benchmark now has different hues, but not a fully differentiated colour
behaviour. Several experiences still rely on a soft base, dark ink, saturated
primary action, and decorative accent blocks.

- Derive palette roles from confidence and task: Rasa needs readable triage and
  escalation, Lumen needs safe financial positive/negative/approval states,
  MIRA needs material/selection/availability contrast, and Kala needs programme
  and visit logistics without treating both as a campaign.
- Specify focus, selected, hover, disabled, loading, success, warning, error,
  and unavailable states. Check actual contrast pairings, not just palette chips.
- Make a colour carry a task before using it decoratively. Do not turn every
  category into the same "paper + one bright CTA" composition.

### 3. Scale, rhythm, and density — P0

The pages have more different topology than before but similar vertical drama:
large statement, a strong media/colour mass, then three explanatory cards.
This is especially visible on Rasa, Pesisir, Nara, ORION, and Kala.

- Give frequent operational work denser, faster scan paths; give high-
  consideration choices more comparison and retained context; give editorial
  work selective pauses rather than empty luxury whitespace.
- Compress headings when the user’s first need is to choose, compare, or resolve.
  Expand hierarchy only when the person is genuinely being oriented to a story,
  place, or product.
- Avoid making every supporting section a three-card explanation. The correct
  next surface might be a comparison row, availability calendar, spec table,
  checklist, work index, or saved-state preview.

### 4. Header topology — P1

The current headers prove that products have names and links, but they do not yet
consistently prove that persistent context is necessary.

- Replace default top nav per experience: MIRA should emphasise search/bag/size
  context; Rasa should elevate safe escalation and support; ORION should keep the
  configuration/drive context; Kala should keep date, ticket, and access context;
  a studio may need a work index and inquiry instead of generic product tabs.
- When links disappear on mobile, supply a real task-menu/drawer/contextual
  control. Do not treat breakpoint hiding as responsive information architecture.

### 5. Buttons, actions, and feedback — P0

The labels are better than generic `Get started`, but the interactions stop at
the label. A user cannot see a choice persist, an action become pending, an error
explain itself, or a result lead to a next step.

- Turn one decisive flow in each page into a runnable vertical slice before
  adding more visual sections: MIRA add-to-bag and size/stock feedback; ORION
  time choice and confirmation; Rasa route selection and care availability;
  Lumen review/approval; Kala ticket selection; etc.
- Place confirmation next to the context that makes it intelligible. A transient
  toast alone cannot prove an important decision succeeded.
- Give repeated low-risk controls quick, restrained response; reserve a review
  step for bookings, payments, health choices, or irreversible changes.

### 6. Motion and component engineering — P1

There is currently no implemented motion, drawer, toast, interruption handling,
or real-device input testing. Adding random scroll reveals would not solve that.

- Start with stateful task feedback, then build one production-minded drawer or
  sheet where the mobile flow benefits from it (e.g. MIRA bag/size decision,
  Pesisir filters, Kala ticket selection).
- Add motion only to explain state change: press, selection, sheet entry, toast,
  row update. It must remain correct under fast interruption and reduced motion.
- Use clip-path only if it visually communicates reveal, comparison, or selected
  state; never as a generic "made by AI" flourish.

## Recommended tuning order

1. Establish **font and text-role contracts**, then rerender the ten first
   viewports using real assets/fallbacks.
2. Add **semantic colour and state contracts** per market, including actual
   contrast checks.
3. Recompose **header + first decisive action** around the active task rather
   than generic navigation.
4. Implement one **end-to-end stateful vertical slice** per category, with
   pending, success, error/recovery, focus, and compact behaviour.
5. Add only the motion that makes those states feel causally connected, then
   test interruption, keyboard, reduced motion, and mobile input.
6. Run a recorded before/after fresh-generation benchmark from the updated
   rules. Freeze this baseline commit, use the same evaluation set plus transfer
   briefs, and report regressions as well as gains. Do not repair this fixture
   only; the new rules must also produce different future products.

## Acceptance bar for the next benchmark

A new benchmark may claim progress only when every case has:

- an actual font plan that loads or intentionally uses named system fonts;
- a documented typography/colour/header/action rationale tied to the user task;
- at least one real action that reaches a changed state and a recovery route;
- a compact viewport route that preserves the primary task;
- a state-aware visual review, not only a first-viewport screenshot; and
- a comparison record showing what was deliberately rejected and why.

The aim is not to make every page more animated or more expensive-looking. It is
to make each product feel as though a designer and an engineer made concrete,
testable choices for the people who will actually use it.
