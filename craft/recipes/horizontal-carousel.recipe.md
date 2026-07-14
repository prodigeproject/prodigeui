# Horizontal Carousel

A horizontal scroll product card carousel with prev/next arrow buttons and snap scrolling.

## When to Use

- Product card grids that overflow horizontally
- Feature showcases, team member lists, logo rails
- Any horizontally scrollable content where arrow navigation aids discovery

## HTML

```html
<div class="carousel" aria-label="Featured products">
  <button
    class="carousel__arrow carousel__arrow--prev"
    aria-label="Scroll to previous items"
  >
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>

  <div class="carousel__track" role="list">
    <article class="carousel__card" role="listitem">
      <img src="product-1.jpg" alt="Product name" class="carousel__img" />
      <div class="carousel__body">
        <h3 class="carousel__title">Product Name</h3>
        <p class="carousel__price">$49</p>
      </div>
    </article>
    <!-- Repeat cards -->
  </div>

  <button
    class="carousel__arrow carousel__arrow--next"
    aria-label="Scroll to next items"
  >
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</div>
```

## CSS

```css
.carousel {
  position: relative;
}

.carousel__track {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  padding: 8px 0;
}

.carousel__track::-webkit-scrollbar {
  display: none;
}

.carousel__card {
  flex: 0 0 260px;
  scroll-snap-align: start;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  overflow: hidden;
  transition: border-color 0.3s;
}

.carousel__card:hover {
  border-color: var(--accent);
}

.carousel__img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.carousel__body {
  padding: 16px;
}

.carousel__title {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.carousel__price {
  font-size: 0.85rem;
  color: var(--muted);
}

/* Arrow Buttons */
.carousel__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: var(--bg);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: border-color 0.3s, background 0.3s;
  z-index: 2;
}

.carousel__arrow:hover {
  border-color: var(--accent);
  background: var(--accent-light);
}

.carousel__arrow--prev {
  left: -22px;
}

.carousel__arrow--next {
  right: -22px;
}

/* Hide arrows on mobile */
@media (max-width: 720px) {
  .carousel__arrow {
    display: none;
  }

  .carousel__track {
    padding-left: 16px;
    padding-right: 16px;
  }
}
```

## JavaScript

```js
function initCarousel(el) {
  const track = el.querySelector('.carousel__track');
  const prevBtn = el.querySelector('.carousel__arrow--prev');
  const nextBtn = el.querySelector('.carousel__arrow--next');
  const cardWidth = 260 + 24; // card flex-basis + gap

  function scroll(direction) {
    track.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  }

  prevBtn?.addEventListener('click', () => scroll(-1));
  nextBtn?.addEventListener('click', () => scroll(1));

  // Update arrow visibility based on scroll position
  function updateArrows() {
    if (!prevBtn || !nextBtn) return;
    prevBtn.disabled = track.scrollLeft <= 0;
    nextBtn.disabled =
      track.scrollLeft >= track.scrollWidth - track.clientWidth - 1;
  }

  track.addEventListener('scroll', updateArrows, { passive: true });
  updateArrows();
}

document.querySelectorAll('.carousel').forEach(initCarousel);
```

## Accessibility Checklist

- [x] Container has descriptive `aria-label`
- [x] Track uses `role="list"`, cards use `role="listitem"`
- [x] Arrow buttons have `aria-label` describing their action
- [x] SVGs are `aria-hidden="true"` (decorative within labeled button)
- [x] Arrows disable when at scroll boundaries (prevents confusion)
- [x] Cards remain keyboard-focusable via natural tab order within the scroll container

## Common Mistakes

1. **Using `overflow:hidden` instead of `overflow-x:auto`** — kills native scroll and accessibility.
2. **Not hiding scrollbar** — visual noise; use `scrollbar-width:none` + webkit pseudo-element.
3. **Arrow buttons too small** — must be 44×44px minimum for touch targets.
4. **Fixed arrow positioning overlapping content on small containers** — use negative offsets or inside-padding approach.
5. **Forgetting `scroll-snap-align` on cards** — scroll feels imprecise without it.

## Responsive Notes

- On mobile (<720px): hide arrows, rely on swipe. Add left/right padding so first/last card isn't flush.
- On tablet: reduce card width to `220px` and gap to `16px`.
- Consider reducing to `flex: 0 0 80vw` on mobile for a peek-through single-card layout.
