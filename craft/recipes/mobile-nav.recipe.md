# Mobile Nav

Hamburger menu trigger with full-screen slide panel overlay.

## When to Use

- Primary navigation on mobile viewports (≤720px)
- Any site with 4+ nav links that won't fit in a horizontal bar on small screens
- SPAs and multi-page sites alike

## HTML

```html
<nav class="site-nav" aria-label="Main navigation">
  <!-- Desktop links (hidden on mobile) -->
  <ul class="site-nav__links">
    <li><a href="/features">Features</a></li>
    <li><a href="/pricing">Pricing</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>

  <!-- Hamburger trigger (hidden on desktop) -->
  <button
    class="site-nav__trigger"
    aria-expanded="false"
    aria-controls="mobile-panel"
    aria-label="Open menu"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </button>
</nav>
```

```html
<!-- Mobile Panel -->
<div
  id="mobile-panel"
  class="mobile-panel"
  aria-hidden="true"
  role="dialog"
  aria-label="Navigation menu"
>
  <button
    class="mobile-panel__close"
    aria-label="Close menu"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  </button>

  <ul class="mobile-panel__links">
    <li><a href="/features" class="mobile-panel__link">Features</a></li>
    <li><a href="/pricing" class="mobile-panel__link">Pricing</a></li>
    <li><a href="/about" class="mobile-panel__link">About</a></li>
    <li><a href="/contact" class="mobile-panel__link">Contact</a></li>
  </ul>
</div>
```

## CSS

```css
/* Hamburger trigger — hidden on desktop */
.site-nav__trigger {
  display: none;
  width: 44px;
  height: 44px;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: var(--r-sm);
  transition: background 0.2s;
}

.site-nav__trigger:hover {
  background: var(--surface-2);
}

@media (max-width: 720px) {
  .site-nav__links {
    display: none;
  }

  .site-nav__trigger {
    display: grid;
    place-items: center;
  }
}

/* Mobile Panel */
.mobile-panel {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: var(--bg);
  transform: translateX(100%);
  transition: transform 0.35s var(--ease-out);
  display: flex;
  flex-direction: column;
  padding: 24px;
}

.mobile-panel.is-open {
  transform: translateX(0);
}

.mobile-panel__close {
  align-self: flex-end;
  width: 44px;
  height: 44px;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: var(--r-sm);
  display: grid;
  place-items: center;
  margin-bottom: 32px;
  transition: background 0.2s;
}

.mobile-panel__close:hover {
  background: var(--surface-2);
}

.mobile-panel__links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mobile-panel__link {
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 14px 16px;
  border-radius: var(--r-md);
  color: var(--ink);
  text-decoration: none;
  transition: background 0.2s;
}

.mobile-panel__link:hover {
  background: var(--surface-2);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .mobile-panel {
    transition: none;
  }
}
```

## JavaScript

```js
function initMobileNav() {
  const trigger = document.querySelector('.site-nav__trigger');
  const panel = document.getElementById('mobile-panel');
  const closeBtn = panel.querySelector('.mobile-panel__close');
  const links = panel.querySelectorAll('.mobile-panel__link');

  function open() {
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    trigger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Focus close button
    closeBtn.focus();
  }

  function close() {
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    trigger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    // Return focus to trigger
    trigger.focus();
  }

  trigger.addEventListener('click', open);
  closeBtn.addEventListener('click', close);

  // Close on link click (SPA route change)
  links.forEach((link) => link.addEventListener('click', close));

  // Escape key closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('is-open')) {
      close();
    }
  });

  // Focus trap
  panel.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusable = panel.querySelectorAll(
      'button, a[href], input, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}

initMobileNav();
```

## Accessibility Checklist

- [x] Trigger: `aria-expanded`, `aria-controls` pointing to panel ID
- [x] Trigger: `aria-label="Open menu"` (icon-only button)
- [x] Panel: `role="dialog"` with `aria-label`
- [x] Panel: `aria-hidden="true"` when closed, `"false"` when open
- [x] Close button: `aria-label="Close menu"`, 44×44 touch target
- [x] Focus management: close button receives focus on open, trigger receives focus on close
- [x] Focus trap: Tab cycles within panel while open
- [x] Escape key closes panel
- [x] Body scroll locked when panel is open
- [x] `prefers-reduced-motion`: disables slide transition

## Common Mistakes

1. **Not locking body scroll** — user can scroll behind the overlay, causing disorientation.
2. **Missing focus trap** — Tab key escapes the panel, focusing invisible elements behind it.
3. **Not returning focus to trigger on close** — keyboard user loses their place on the page.
4. **Trigger button smaller than 44×44px** — fails touch target minimum.
5. **Using `display:none` to hide panel** — prevents transition; use `transform` or `visibility` approach.
6. **Forgetting to close on route change** — panel stays open after SPA navigation.

## Responsive Notes

- Panel and trigger are only relevant at ≤720px; desktop shows inline `site-nav__links`.
- Links inside panel use generous 1.5rem+ font size for easy tap targets.
- Close button positioned top-right for thumb reachability on mobile.
- Consider adding a subtle backdrop overlay (`rgba(0,0,0,.3)`) behind panel for visual separation.
