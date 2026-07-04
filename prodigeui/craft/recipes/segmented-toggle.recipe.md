# Segmented Toggle

A sliding-thumb radio group for binary choices (e.g., Monthly/Annual pricing toggle).

## When to Use

- Pricing period switches (Monthly vs Annual)
- View mode toggles (Grid vs List)
- Any mutually exclusive two-option selector where visual emphasis matters

## HTML

```html
<div class="segmented-toggle" role="radiogroup" aria-label="Billing period">
  <div class="segmented-toggle__thumb" aria-hidden="true"></div>
  <button
    class="segmented-toggle__btn is-active"
    role="radio"
    aria-checked="true"
    tabindex="0"
  >
    Monthly
  </button>
  <button
    class="segmented-toggle__btn"
    role="radio"
    aria-checked="false"
    tabindex="-1"
  >
    Annual <span class="segmented-toggle__badge">−20%</span>
  </button>
</div>
```

## CSS

```css
.segmented-toggle {
  position: relative;
  display: inline-flex;
  border-radius: 999px;
  padding: 4px;
  background: var(--surface-2);
  border: 1px solid var(--line);
}

.segmented-toggle__thumb {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  width: calc(50% - 4px);
  background: var(--accent);
  border-radius: 999px;
  transition: transform 0.22s var(--ease-out);
  z-index: 0;
}

.segmented-toggle__btn {
  flex: 1;
  text-align: center;
  position: relative;
  z-index: 1;
  border-radius: 999px;
  padding: 8px 18px;
  font-size: 13.5px;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--muted);
  transition: color 0.2s;
}

.segmented-toggle__btn.is-active {
  color: var(--accent-ink);
}

/* All children of active button inherit the accent color */
.segmented-toggle__btn.is-active * {
  color: inherit;
}

.segmented-toggle__badge {
  font-size: 11px;
  font-weight: 700;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .segmented-toggle__thumb {
    transition: none;
  }
}
```

## JavaScript

```js
function initSegmentedToggle(el) {
  const buttons = el.querySelectorAll('.segmented-toggle__btn');
  const thumb = el.querySelector('.segmented-toggle__thumb');

  function activate(index) {
    buttons.forEach((btn, i) => {
      const isActive = i === index;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-checked', String(isActive));
      btn.setAttribute('tabindex', isActive ? '0' : '-1');
    });
    // Move thumb
    thumb.style.transform =
      index === 0 ? 'translateX(0)' : 'translateX(calc(100% + 8px))';
    // Dispatch custom event
    el.dispatchEvent(new CustomEvent('toggle-change', { detail: { index } }));
  }

  buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => activate(i));
  });

  // Roving tabindex — arrow key navigation
  el.addEventListener('keydown', (e) => {
    const current = [...buttons].findIndex(
      (b) => b.getAttribute('aria-checked') === 'true'
    );
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (current + 1) % buttons.length;
      activate(next);
      buttons[next].focus();
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (current - 1 + buttons.length) % buttons.length;
      activate(prev);
      buttons[prev].focus();
    }
  });
}

// Init all toggles on page
document.querySelectorAll('.segmented-toggle').forEach(initSegmentedToggle);
```

## Accessibility Checklist

- [x] `role="radiogroup"` on container with descriptive `aria-label`
- [x] Each button has `role="radio"` and `aria-checked`
- [x] Roving tabindex: only active button is in tab order
- [x] Arrow keys cycle selection (Left/Right and Up/Down)
- [x] Focus visible via browser default or custom `:focus-visible` ring
- [x] Thumb is `aria-hidden="true"` (decorative)
- [x] `prefers-reduced-motion` disables animation

## Common Mistakes

1. **Using `<div>` instead of `<button>`** — loses keyboard focusability and click semantics.
2. **Forgetting z-index on buttons** — thumb covers text; buttons must sit above thumb.
3. **Hardcoding thumb width in px** — breaks when text length varies; use `calc(50% - 4px)`.
4. **Not inheriting color on badge children** — badge stays muted when parent is active.
5. **Missing `will-change` consideration** — avoid; the animation is simple enough to not need it.

## Responsive Notes

- On very small viewports, reduce padding to `6px 12px` and font-size to `12px`.
- For 3+ options, calculate thumb width dynamically: `calc(100% / N - offset)`.
- Touch targets already meet 44px minimum height with the 8px padding + text.
