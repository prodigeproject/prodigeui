# Interaction Patterns — Modern, Accessible Implementation

> `skills/accessibility-audit/SKILL.md` tells you how to AUDIT for a11y after the fact.
> This document tells you how to BUILD it right the first time — the modern, native,
> low-JS implementation patterns for the interactive parts that AI output usually gets
> wrong (dropdowns clipped by overflow, modals with hand-rolled focus traps, placeholder-
> as-label forms, confirm dialogs where undo belongs).
>
> Distilled from impeccable's `interaction-design.md` and ui-ux-pro-max's touch/nav/forms
> rule set. These are implementation patterns; the WCAG thresholds still live in the
> accessibility skill and `quality-gate/`.

## 1. The eight interactive states (design ALL of them)

Default · Hover (pointer only) · Focus (keyboard) · Active (pressed) · Disabled · Loading ·
Error · Success. **The common miss: designing hover without focus.** Keyboard users never
see hover. Every interactive element needs a focus treatment distinct from hover.

## 2. Focus rings — never `outline: none` without a replacement

```css
button:focus { outline: none; }                 /* mouse/touch: quiet */
button:focus-visible {                           /* keyboard: visible */
  outline: 2px solid var(--color-action-primary);
  outline-offset: 2px;
}
```
Ring: ≥3:1 against adjacent colors, 2–3px, offset (not inside), consistent everywhere.

## 3. Modals — native `<dialog>` + `inert`, not a hand-rolled trap

```js
const dialog = document.querySelector('dialog');
dialog.showModal();   // focus trap + Escape-to-close for free, placed in the top layer
```
Or mark the background `inert` so it can't be focused or clicked. On close, **return focus
to the trigger** element. Modals stay `transform-origin: center` (see motion-craft §4).

## 4. Dropdowns / tooltips / menus — escape the overflow clip

A dropdown with `position: absolute` inside an `overflow:hidden|auto` ancestor gets clipped.
This is the single most common generated-dropdown bug. Fixes, best first:

1. **Popover API** — `popovertarget` + `popover`; the element goes to the top layer (above
   everything regardless of z-index/overflow), with light-dismiss and a11y built in.
2. **CSS Anchor Positioning** — `anchor-name` + `position-anchor` + `position-area`, with
   `@position-try` to flip at viewport edges. `position: fixed` escapes the clip.
   (Chrome/Edge 125+; provide a fallback for Firefox/Safari.)
3. **Portal / `position: fixed`** — render at `document.body` (`createPortal`, `<Teleport>`),
   position from the trigger's `getBoundingClientRect()`, recalc on scroll/resize, flip if
   it would overflow the bottom/right edge.

```html
<button popovertarget="menu">Open</button>
<div id="menu" popover>…</div>
```

## 5. Keyboard patterns

- **Roving tabindex** for groups (tabs, menus, radio groups, board columns): one item
  `tabindex="0"`, the rest `-1`; arrow keys move the 0 between items, Tab leaves the group.
- **Skip link**: `<a href="#main" class="skip-link">Skip to content</a>` — off-screen, shown
  on focus. Move focus to the main region on SPA route change.
- Buttons activate on Enter/Space; overlays close on Escape; focus never gets trapped
  outside an intentional modal.

### 5b. Segmented control (pill toggle)

A sliding-thumb radio group (e.g. Monthly/Annual pricing toggle). Implementation rules:

**Structure:**
```html
<div class="seg" role="radiogroup" aria-label="..." style="position:relative">
  <span class="thumb" aria-hidden="true"></span>
  <button role="radio" aria-checked="true" tabindex="0">Option A</button>
  <button role="radio" aria-checked="false" tabindex="-1">Option B</button>
</div>
```

**CSS requirements:**
1. Container (`.seg`) MUST have `position:relative` (contains the absolute thumb).
2. Radio buttons use natural width (sized by content + padding). Do NOT use `flex:1` —
   it forces equal widths which distorts when one label is longer (e.g. "Annual −20%").
3. Thumb: `position:absolute; top:4px; bottom:4px; left:4px; background:var(--accent);
   border-radius:999px; z-index:0`. Width and translateX set dynamically by JS.
4. Radio buttons MUST have `position:relative; z-index:1` so text renders ABOVE the thumb.
5. **Color inversion on active state:** When a radio is checked (text sits on the colored
   thumb), ALL child elements (including badges like "−20%") must inherit the inverted
   foreground color. Use `[aria-checked="true"]{color:var(--on-accent)}` and cascade to
   children. Never leave accent-colored text on an accent-colored background.

**JS (measurement-based thumb positioning):**
```js
function select(index) {
  // ... aria-checked, tabindex updates ...
  const activeBtn = radios[index];
  const groupRect = group.getBoundingClientRect();
  const btnRect = activeBtn.getBoundingClientRect();
  thumb.style.width = btnRect.width + 'px';
  thumb.style.transform = 'translateX(' + (btnRect.left - groupRect.left - 4) + 'px)';
}
// Call select(0) on init + window load (after fonts render)
```
This ensures the thumb ALWAYS covers the exact button width regardless of text length.
Arrow keys move selection (roving tabindex).

## 6. Forms — the non-obvious rules

- **Placeholders are not labels** (they vanish on input). Always a visible `<label>`.
- **Validate on blur**, not on every keystroke (exception: password strength). Error text
  **below** the field, linked via `aria-describedby`; error state uses `role="alert"` or an
  `aria-live` region.
- Semantic input types (`email`, `tel`, `number`) to trigger the right mobile keyboard;
  `autocomplete` for autofill; password show/hide toggle.
- Placeholder text still needs 4.5:1 contrast. Label above input, `gap-2` block.
- Multi-step: step indicator + back nav; long forms auto-save drafts; confirm before
  dismissing a sheet with unsaved changes.

## 7. Destructive actions — undo beats confirm

Users click through confirmations mindlessly. Remove from the UI immediately, show an
**undo toast**, delete for real after it expires. Reserve confirmation dialogs for truly
irreversible / high-cost / batch actions (account deletion). Destructive controls use the
danger color and are spatially separated from primary actions.

## 8. Loading & optimistic states

- **Skeletons > spinners** — preview the content's shape; feels faster.
- **Optimistic updates** for low-stakes actions (like/follow): show success immediately,
  roll back on failure. Never optimistic for payments or destructive actions.
- Show a loading affordance within ~400ms of any action (Doherty threshold; see
  `motion/principles.md` §8). Disable the button during async submit.

## 9. Touch & native baselines (mobile)

- Touch targets ≥ 44×44pt (iOS) / 48×48dp (Android); ≥ 8px between targets; extend hit area
  beyond the visual bounds for small icons.
- `touch-action: manipulation` to kill the 300ms tap delay. Real-time visual response that
  tracks the finger for drag/swipe/pinch. Never gesture-only — always a visible control too.
- Respect safe areas (notch, Dynamic Island, home indicator). `min-h-[100dvh]` not `100vh`.
- Platform idioms: iOS bottom tab bar vs Android top app bar; don't redefine system
  gestures (back-swipe, Control Center).

## 10. Navigation patterns

- Bottom nav ≤ 5 items, top-level only (never nest sub-nav in it); icon **and** label.
- Current location visibly highlighted. Back is predictable and restores scroll/filter/input
  state. All key screens reachable by URL/deep link. Breadcrumbs for 3+ level depth (web).
- Large screens (≥1024px) prefer a sidebar; small screens use bottom/top nav. Don't mix
  Tab + Sidebar + Bottom-nav at the same hierarchy level.

## 11. Charts & data (when the brief has metrics/dashboards)

- Match type to data: trend→line, comparison→bar, proportion→pie/donut (≤5 slices, else bar).
- Never color alone — add pattern/texture/shape/label; data vs bg ≥3:1, labels ≥4.5:1.
- Always: visible legend, tooltip on hover **and** keyboard focus, axis units, **tabular
  numbers** so values don't shift.
- Ship empty / loading (skeleton) / error (with retry) states — never a bare axis frame.
- Provide a table alternative or `aria-label` summary of the key insight for screen readers.

## Related
- `craft/patterns/motion-craft.md` — how these interactions should move
- `skills/accessibility-audit/SKILL.md` — the audit that verifies this was done
- `quality-gate/anti-ai-slop.checklist.md` — the FAIL/FLAG gate
- `design-rules/form.rules.json`, `design-rules/data-visualization.rules.json`
