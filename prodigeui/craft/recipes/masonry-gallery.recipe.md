# Masonry Gallery

CSS columns masonry image gallery with hover overlay effect.

## When to Use

- Portfolio / photography showcases
- Inspiration boards or mood boards
- Any image-heavy grid where items have varying aspect ratios

## HTML

```html
<section class="masonry" aria-label="Image gallery">
  <figure class="masonry__item">
    <img
      src="photo-1.jpg"
      alt="Descriptive alt text for image"
      class="masonry__img"
      loading="lazy"
    />
    <figcaption class="masonry__overlay">
      <span class="masonry__caption">Project Title</span>
    </figcaption>
  </figure>

  <figure class="masonry__item">
    <img
      src="photo-2.jpg"
      alt="Descriptive alt text for image"
      class="masonry__img"
      loading="lazy"
    />
    <figcaption class="masonry__overlay">
      <span class="masonry__caption">Project Title</span>
    </figcaption>
  </figure>

  <!-- Repeat items -->
</section>
```

## CSS

```css
.masonry {
  columns: 3;
  column-gap: 16px;
}

.masonry__item {
  break-inside: avoid;
  margin-bottom: 16px;
  border-radius: var(--r-lg);
  overflow: hidden;
  position: relative;
  max-height: 420px;
}

.masonry__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s var(--ease-out);
}

.masonry__item:hover .masonry__img {
  transform: scale(1.03);
}

.masonry__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.4s;
  display: grid;
  place-items: center;
  margin: 0; /* reset figure margin */
}

.masonry__item:hover .masonry__overlay {
  opacity: 1;
}

.masonry__caption {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.01em;
}

/* Responsive columns */
@media (max-width: 1024px) {
  .masonry {
    columns: 2;
  }
}

@media (max-width: 600px) {
  .masonry {
    columns: 1;
  }

  .masonry__item {
    max-height: none;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .masonry__img {
    transition: none;
  }

  .masonry__overlay {
    transition: none;
  }
}
```

## JavaScript

```js
// Masonry gallery is CSS-only — no JS required for base layout.
// Optional: add lightbox or lazy-load intersection observer.

function initMasonryLazyLoad(container) {
  const images = container.querySelectorAll('.masonry__img[loading="lazy"]');

  // Fallback for browsers without native lazy loading
  if (!('loading' in HTMLImageElement.prototype)) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => observer.observe(img));
  }
}

document.querySelectorAll('.masonry').forEach(initMasonryLazyLoad);
```

## Accessibility Checklist

- [x] Container has `aria-label` identifying it as a gallery
- [x] Each image has descriptive `alt` text (never empty for content images)
- [x] `<figure>` + `<figcaption>` provides semantic grouping
- [x] Overlay text is in `<figcaption>` so it's accessible even when visually hidden
- [x] `loading="lazy"` for performance without sacrificing accessibility
- [x] Color contrast of overlay text on dark background meets WCAG AA (white on 40% black = passes)
- [x] `prefers-reduced-motion` disables hover animation

## Common Mistakes

1. **Omitting `max-height` on items** — portrait images create extremely tall columns, breaking visual rhythm.
2. **Using `height:100%` on item without constraint** — item expands infinitely; `max-height` is the fix.
3. **Using `::after` for overlay AND `<figcaption>`** — redundant; pick one. Prefer `<figcaption>` for semantics.
4. **Forgetting `break-inside:avoid`** — columns will split a single card across two columns.
5. **Not resetting `<figure>` margin** — browsers add default margin to `<figure>`, creating unexpected spacing.

## Responsive Notes

- 3 columns on desktop (>1024px), 2 on tablet (601–1024px), 1 on mobile (≤600px).
- On single-column mobile, remove `max-height` constraint to show full images.
- Consider adding a "Load more" button or infinite scroll for galleries with 20+ items.
- On touch devices, overlay is not discoverable via hover — consider always-visible captions or a tap-to-reveal pattern.
