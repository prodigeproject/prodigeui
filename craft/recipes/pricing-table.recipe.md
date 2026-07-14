# Pricing Table

3-tier pricing grid with optional period toggle and feature comparison.

## When to Use

- SaaS pricing pages with Free / Pro / Enterprise tiers
- Subscription plan selectors
- Any feature-gated offering comparison

## HTML

```html
<section class="pricing" aria-labelledby="pricing-heading">
  <header class="pricing__header">
    <h2 id="pricing-heading" class="pricing__title">Simple, transparent pricing</h2>
    <!-- Period toggle — uses segmented-toggle recipe -->
    <div class="segmented-toggle" role="radiogroup" aria-label="Billing period">
      <div class="segmented-toggle__thumb" aria-hidden="true"></div>
      <button class="segmented-toggle__btn is-active" role="radio" aria-checked="true" tabindex="0">Monthly</button>
      <button class="segmented-toggle__btn" role="radio" aria-checked="false" tabindex="-1">Annual <span class="segmented-toggle__badge">−20%</span></button>
    </div>
  </header>

  <div class="pricing__grid">
    <!-- Tier 1 -->
    <article class="pricing__card">
      <h3 class="pricing__plan">Starter</h3>
      <p class="pricing__desc">For individuals getting started</p>
      <p class="pricing__price" data-monthly="$0" data-annual="$0">
        <span class="pricing__amount">$0</span>
        <span class="pricing__period">/month</span>
      </p>
      <ul class="pricing__features">
        <li class="pricing__feature">
          <svg class="pricing__check" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
          Up to 3 projects
        </li>
        <li class="pricing__feature">
          <svg class="pricing__check" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
          Basic analytics
        </li>
      </ul>
      <button class="pricing__cta">Get Started</button>
    </article>

    <!-- Tier 2 — Popular -->
    <article class="pricing__card pricing__card--popular">
      <span class="pricing__badge">Most Popular</span>
      <h3 class="pricing__plan">Pro</h3>
      <p class="pricing__desc">For growing teams</p>
      <p class="pricing__price" data-monthly="$29" data-annual="$23">
        <span class="pricing__amount">$29</span>
        <span class="pricing__period">/month</span>
      </p>
      <ul class="pricing__features">
        <li class="pricing__feature">
          <svg class="pricing__check" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
          Unlimited projects
        </li>
        <li class="pricing__feature">
          <svg class="pricing__check" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
          Advanced analytics
        </li>
        <li class="pricing__feature">
          <svg class="pricing__check" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
          Priority support
        </li>
      </ul>
      <button class="pricing__cta pricing__cta--accent">Upgrade to Pro</button>
    </article>

    <!-- Tier 3 -->
    <article class="pricing__card">
      <h3 class="pricing__plan">Enterprise</h3>
      <p class="pricing__desc">For large organizations</p>
      <p class="pricing__price" data-monthly="$99" data-annual="$79">
        <span class="pricing__amount">$99</span>
        <span class="pricing__period">/month</span>
      </p>
      <ul class="pricing__features">
        <li class="pricing__feature">
          <svg class="pricing__check" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
          Everything in Pro
        </li>
        <li class="pricing__feature">
          <svg class="pricing__check" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
          Custom integrations
        </li>
        <li class="pricing__feature">
          <svg class="pricing__check" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
          Dedicated account manager
        </li>
      </ul>
      <button class="pricing__cta">Contact Sales</button>
    </article>
  </div>
</section>
```

## CSS

```css
.pricing__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 40px;
}

.pricing__title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 700;
}

.pricing__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: start;
}

.pricing__card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  padding: 30px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.pricing__card--popular {
  border-color: var(--accent);
  background: linear-gradient(180deg, rgba(var(--accent-rgb), 0.06), transparent);
}

.pricing__badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent);
  color: var(--accent-ink);
  font-size: 11px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.pricing__plan {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.pricing__desc {
  font-size: 0.85rem;
  color: var(--muted);
  margin-bottom: 20px;
}

.pricing__price {
  margin-bottom: 24px;
}

.pricing__amount {
  font-family: var(--font-display);
  font-size: 2.6rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.pricing__period {
  font-size: 0.85rem;
  color: var(--muted);
}

.pricing__features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin-bottom: 28px;
  flex-grow: 1;
}

.pricing__feature {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
}

.pricing__check {
  color: var(--accent);
  flex-shrink: 0;
}

.pricing__cta {
  width: 100%;
  padding: 12px;
  border-radius: var(--r-md);
  border: 1px solid var(--line);
  background: var(--surface);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: border-color 0.3s, background 0.3s;
}

.pricing__cta:hover {
  border-color: var(--accent);
}

.pricing__cta--accent {
  background: var(--accent);
  color: var(--accent-ink);
  border-color: var(--accent);
}

.pricing__cta--accent:hover {
  opacity: 0.9;
}

/* Responsive */
@media (max-width: 900px) {
  .pricing__grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
}
```

## JavaScript

```js
function initPricingToggle(section) {
  const toggle = section.querySelector('.segmented-toggle');
  const prices = section.querySelectorAll('.pricing__price');

  if (!toggle) return;

  toggle.addEventListener('toggle-change', (e) => {
    const isAnnual = e.detail.index === 1;

    prices.forEach((el) => {
      const amount = el.querySelector('.pricing__amount');
      const value = isAnnual ? el.dataset.annual : el.dataset.monthly;
      amount.textContent = value;
    });
  });
}

document.querySelectorAll('.pricing').forEach(initPricingToggle);
```

## Accessibility Checklist

- [x] Section uses `aria-labelledby` pointing to heading
- [x] Period toggle follows segmented-toggle recipe (full radio group semantics)
- [x] Check icons are `aria-hidden="true"` (decorative; text provides meaning)
- [x] `font-variant-numeric: tabular-nums` prevents layout shift when prices change
- [x] CTA buttons have descriptive text (not just "Buy")
- [x] Popular badge is visible text, not icon-only

## Common Mistakes

1. **Not using `align-items:start` on grid** — cards stretch to tallest, but uneven features look odd without `flex-grow:1` on feature list.
2. **Animating price number change without `tabular-nums`** — digits jump because proportional numbers have different widths.
3. **Forgetting `flex-grow:1` on feature list** — CTA buttons won't align at bottom of cards.
4. **Using `<table>` for non-comparison layouts** — grid is more flexible; reserve `<table>` for actual feature-by-feature comparison matrices.
5. **Popular card badge cut off** — needs parent `overflow:visible` (default) and negative top positioning.

## Responsive Notes

- On mobile: single column, max-width 400px centered.
- Header wraps: toggle drops below title naturally with `flex-wrap:wrap`.
- Cards stack in order: consider reordering Popular card first on mobile via `order:-1`.
