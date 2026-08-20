# Beauty & Women's Apparel Atelier Recipe

> **Use-case**: Women's Fashion, Botanical Beauty, Luxury Apparel, Jewelry, and Lifestyle Ateliers.
> **Target Audience & Tone**: Feminine grace, soft luxury, tactile silk, warm photography-forward surfaces, and editorial poise.
> **Color Calibration**: Soft Rose Quartz (`#fdf2f8`), Satin Ivory (`#fffdfa`), Velvet Berry/Noir text (`#2a0a16`), Satin Rose Red (`#e11d48`), Champagne Gold (`#d4af37`).
> **Anti-Deterministic Rule**: Do NOT use giant `::after` text watermarks on CTA cards. Use a clean floating glass newsletter input with satin pill CTA buttons.

```html
<style>
  :root {
    --paper-rose: #fdf2f8;
    --paper-silk: #fffdfa;
    --ink-berry: #2a0a16;
    --muted-rose: #701a3c;
    --primary-satin: #e11d48;
    --accent-blush: #fbcfe8;
    --gold-accent: #d4af37;
    --border-rose: rgba(244, 114, 182, 0.25);
    
    --font-display: 'Cormorant Garamond', Georgia, serif;
    --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;
    --font-mono: 'DM Mono', monospace;
  }

  body { margin: 0; background: var(--paper-rose); color: var(--ink-berry); font-family: var(--font-body); line-height: 1.6; }
  .wrap { width: min(1180px, 92vw); margin-inline: auto; }

  /* Hero Section */
  .hero-grid { padding: 5.5rem 0 4rem; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 4rem; align-items: center; }
  .hero-h1 { font-family: var(--font-display); font-size: clamp(3.2rem, 6.5vw, 6.5rem); font-weight: 600; line-height: 0.92; letter-spacing: -0.02em; }
  .hero-h1 em { font-style: italic; color: var(--primary-satin); font-weight: 400; }

  /* Lookbook Card Frame */
  .lookbook-frame { position: relative; border-radius: 24px; overflow: hidden; border: 1px solid var(--border-rose); box-shadow: 0 20px 40px rgba(225, 29, 72, 0.08); aspect-ratio: 4/5; }
  .lookbook-frame img { width: 100%; height: 100%; object-fit: cover; }

  /* Non-Deterministic VIP Atelier CTA Card */
  .vip-cta-card {
    background: #ffffff; border: 1px solid var(--border-rose); border-radius: 28px;
    padding: 4rem; box-shadow: 0 20px 50px rgba(225, 29, 72, 0.06);
    display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 3rem; align-items: center;
  }
  .input-pill-group { display: flex; gap: 0.75rem; background: var(--paper-rose); padding: 6px; border-radius: 9999px; border: 1px solid var(--border-rose); }
  .input-pill { border: none; background: transparent; padding: 0.75rem 1.25rem; font-family: var(--font-body); font-size: 0.95rem; outline: none; flex: 1; color: var(--ink-berry); }
  .btn-satin { background: var(--primary-satin); color: #ffffff; border: none; padding: 0.85rem 1.75rem; border-radius: 9999px; font-weight: 700; cursor: pointer; transition: transform 0.2s; }
  .btn-satin:hover { transform: translateY(-2px); }
</style>

<section class="vip-cta-card wrap">
  <div>
    <span class="mono" style="color: var(--primary-satin); font-size: 0.76rem; letter-spacing: 0.2em; text-transform: uppercase;">Private Lookbook Access</span>
    <h2 style="font-family: var(--font-display); font-size: clamp(2.2rem, 4vw, 3.8rem); margin: 0.75rem 0 0.5rem; line-height: 1;">Join the AURA VIP Circle</h2>
    <p style="color: var(--muted-rose); margin: 0; font-size: 1rem;">Receive private invitations to seasonal atelier drops &amp; bespoke fitting previews.</p>
  </div>

  <form class="input-pill-group" onsubmit="event.preventDefault();">
    <input type="email" class="input-pill" placeholder="Enter your email address..." required>
    <button type="submit" class="btn-satin">Join Atelier</button>
  </form>
</section>
```
