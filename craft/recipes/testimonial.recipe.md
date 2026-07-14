# Testimonial

Centered testimonial block with large quote, decorative quotation mark, and attribution.

## When to Use

- Social proof sections on landing pages
- Customer success stories
- Review highlights on product pages
- Trust-building content near CTAs

## HTML

```html
<section class="testimonial" aria-label="Customer testimonial">
  <blockquote class="testimonial__quote">
    <span class="testimonial__mark" aria-hidden="true">&ldquo;</span>
    <p class="testimonial__text">
      This product completely transformed our workflow. What used to take hours
      now takes minutes, and the team actually enjoys using it.
    </p>
  </blockquote>

  <div class="testimonial__attribution">
    <img
      src="avatar.jpg"
      alt=""
      class="testimonial__avatar"
      loading="lazy"
    />
    <div class="testimonial__meta">
      <cite class="testimonial__name">Sarah Chen</cite>
      <span class="testimonial__role">VP of Product, Acme Corp</span>
    </div>
  </div>
</section>
```

### Carousel Variant (multiple testimonials)

```html
<section class="testimonial-carousel" aria-label="Customer testimonials" aria-roledescription="carousel">
  <div class="testimonial-carousel__track" aria-live="off">
    <article class="testimonial-carousel__slide" role="group" aria-roledescription="slide" aria-label="1 of 3">
      <blockquote class="testimonial__quote">
        <span class="testimonial__mark" aria-hidden="true">&ldquo;</span>
        <p class="testimonial__text">First testimonial text here.</p>
      </blockquote>
      <div class="testimonial__attribution">
        <img src="avatar-1.jpg" alt="" class="testimonial__avatar" />
        <div class="testimonial__meta">
          <cite class="testimonial__name">Name One</cite>
          <span class="testimonial__role">Role, Company</span>
        </div>
      </div>
    </article>
    <!-- Additional slides -->
  </div>

  <div class="testimonial-carousel__dots" role="tablist" aria-label="Testimonial slides">
    <button role="tab" aria-selected="true" aria-label="Slide 1" class="testimonial-carousel__dot is-active"></button>
    <button role="tab" aria-selected="false" aria-label="Slide 2" class="testimonial-carousel__dot"></button>
    <button role="tab" aria-selected="false" aria-label="Slide 3" class="testimonial-carousel__dot"></button>
  </div>
</section>
```

## CSS

```css
/* Single testimonial */
.testimonial {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.testimonial__quote {
  margin: 0;
  padding: 0;
  border: none;
}

.testimonial__mark {
  display: block;
  font-size: 7rem;
  line-height: 1;
  color: rgba(var(--accent-rgb), 0.15);
  margin-bottom: -20px;
  font-family: Georgia, serif;
}

.testimonial__text {
  font-family: var(--font-display-serif, Georgia, serif);
  font-size: clamp(1.3rem, 3vw, 2.2rem);
  font-weight: 500;
  line-height: 1.35;
  letter-spacing: -0.01em;
}

.testimonial__attribution {
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  color: var(--muted);
}

.testimonial__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial__meta {
  text-align: left;
}

.testimonial__name {
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 0.95rem;
}

.testimonial__role {
  display: block;
  font-size: 0.8rem;
  color: var(--faint);
}

/* Carousel variant */
.testimonial-carousel {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
}

.testimonial-carousel__track {
  overflow: hidden;
}

.testimonial-carousel__slide {
  display: none;
}

.testimonial-carousel__slide.is-active {
  display: block;
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.testimonial-carousel__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
}

.testimonial-carousel__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: var(--line);
  cursor: pointer;
  padding: 0;
  transition: background 0.3s, transform 0.3s;
}

.testimonial-carousel__dot.is-active {
  background: var(--accent);
  transform: scale(1.3);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .testimonial-carousel__slide.is-active {
    animation: none;
  }
}
```

## JavaScript

```js
function initTestimonialCarousel(el) {
  const slides = el.querySelectorAll('.testimonial-carousel__slide');
  const dots = el.querySelectorAll('.testimonial-carousel__dot');
  let current = 0;
  let autoplayTimer = null;
  const INTERVAL = 6000;

  function goTo(index) {
    slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
    dots.forEach((d, i) => {
      d.classList.toggle('is-active', i === index);
      d.setAttribute('aria-selected', String(i === index));
    });
    current = index;
  }

  function next() {
    goTo((current + 1) % slides.length);
  }

  function startAutoplay() {
    autoplayTimer = setInterval(next, INTERVAL);
  }

  function stopAutoplay() {
    clearInterval(autoplayTimer);
  }

  // Dot clicks
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goTo(i);
      stopAutoplay();
      startAutoplay();
    });
  });

  // Pause on hover
  el.addEventListener('mouseenter', stopAutoplay);
  el.addEventListener('mouseleave', startAutoplay);

  // Pause on focus within (keyboard users)
  el.addEventListener('focusin', stopAutoplay);
  el.addEventListener('focusout', startAutoplay);

  // Init
  goTo(0);
  startAutoplay();
}

document.querySelectorAll('.testimonial-carousel').forEach(initTestimonialCarousel);
```

## Accessibility Checklist

- [x] `<blockquote>` used for quote semantics
- [x] `<cite>` wraps the person's name
- [x] Avatar has empty `alt=""` (decorative; name provides identity)
- [x] Decorative quotation mark is `aria-hidden="true"`
- [x] Carousel variant: `aria-roledescription="carousel"` on container
- [x] Each slide: `role="group"` with `aria-roledescription="slide"` and `aria-label="X of Y"`
- [x] Dots use `role="tablist"` / `role="tab"` with `aria-selected`
- [x] Auto-rotate pauses on hover AND focusin (keyboard accessible)
- [x] `aria-live="off"` on track prevents disruptive announcements during auto-rotation

## Common Mistakes

1. **Quotation mark taking up real semantic space** — must be `aria-hidden` and purely decorative.
2. **Avatar with person's name as `alt`** — redundant with visible name; use empty `alt=""`.
3. **Auto-rotating without pause mechanism** — frustrating and WCAG 2.2.2 violation.
4. **Missing `font-style:normal` on `<cite>`** — browsers italicize `<cite>` by default.
5. **Hardcoding font-size** — use `clamp()` for responsive scaling without breakpoints.

## Responsive Notes

- Quote text scales via `clamp(1.3rem, 3vw, 2.2rem)` — no breakpoint needed.
- Quotation mark may be reduced to `5rem` on mobile if it overflows.
- Attribution row remains centered; on very small screens, avatar may shrink to 40px.
- Carousel dots remain touch-friendly at 8px visual + adequate spacing.
