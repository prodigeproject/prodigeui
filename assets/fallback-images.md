# Fallback Image Library

Reference for reliable image URLs when external images are unavailable — offline mode, CORS blocked, restricted browsers (VS Code Simple Browser), or expired URLs. Every image container must degrade gracefully.

---

## CSS Fallback Pattern

Every image container **must** include these styles:

```css
/* Every image container MUST have a background-color fallback */
.img-container { background-color: var(--surface-2); }
img { background-color: var(--surface-2); }

/* Broken image styling — hide the broken icon */
img[src=""], img:not([src]) { opacity: 0; }
img::after { content: attr(alt); display: grid; place-items: center; height: 100%; color: var(--muted); font-size: 0.8rem; }
```

---

## Reliable Image Sources (ranked)

| Tier | Source | Why |
|------|--------|-----|
| 1 | `picsum.photos/seed/{name}/{w}/{h}` | Consistent per-seed, CDN-backed, free, no auth |
| 2 | `images.unsplash.com/photo-{id}?w=&h=&fit=crop` | Unsplash CDN, very stable, specific results |
| 3 | `i.pravatar.cc/{size}?img={n}` | Reliable avatars, free, deterministic |
| ✗ | `cdn.simpleicons.org` | SVG — blocked in some contexts |
| ✗ | Random stock sites | Unstable URLs, auth walls |

---

## Curated Fallback Library

### Interiors / Home
| URL | Description | Size |
|-----|-------------|------|
| `https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&h=1200&fit=crop` | Minimalist living room, warm tones | 900×1200 |
| `https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop` | Bedroom, neutral palette | 800×600 |
| `https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=1000&fit=crop` | Kitchen, clean lines | 800×1000 |
| `https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop` | Bathroom, minimalist | 800×600 |

### Products / Objects
| URL | Description | Size |
|-----|-------------|------|
| `https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=750&fit=crop` | Ceramic vase | 600×750 |
| `https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=750&fit=crop` | Sofa / cushion | 600×750 |
| `https://images.unsplash.com/photo-1507473885765-e6ed057ab852?w=600&h=750&fit=crop` | Table lamp | 600×750 |
| `https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&h=750&fit=crop` | Woven basket | 600×750 |

### Animals / Pets
| URL | Description | Size |
|-----|-------------|------|
| `https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=1000&fit=crop` | Orange tabby cat | 800×1000 |
| `https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&h=600&fit=crop` | Cat resting | 800×600 |
| `https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=800&h=1000&fit=crop` | Grey cat, green eyes | 800×1000 |
| `https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop` | Golden retriever | 800×600 |

### People / Avatars
| URL | Description | Size |
|-----|-------------|------|
| `https://i.pravatar.cc/96?img=12` | Female professional | 96×96 |
| `https://i.pravatar.cc/96?img=32` | Female casual | 96×96 |
| `https://i.pravatar.cc/96?img=44` | Male professional | 96×96 |
| `https://i.pravatar.cc/128?img=47` | Male creative | 128×128 |

### Tech / Dashboard
| URL | Description | Size |
|-----|-------------|------|
| `https://picsum.photos/seed/dashboard-dark/1400/735` | Abstract dark (SaaS hero) | 1400×735 |
| `https://picsum.photos/seed/flowai-roadmap/900/506` | Abstract (feature illustration) | 900×506 |

### Nature / Landscape
| URL | Description | Size |
|-----|-------------|------|
| `https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=800&fit=crop` | Lake & mountains | 1200×800 |
| `https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop` | Mountain sunrise | 1200×800 |

### Video (Mixkit CDN — verified mp4 direct links)
| URL | Description |
|-----|-------------|
| `https://assets.mixkit.co/videos/45170/45170-720.mp4` | Cat, looping |
| `https://assets.mixkit.co/videos/4815/4815-720.mp4` | Interior / ambient |
| `https://assets.mixkit.co/videos/1542/1542-720.mp4` | Nature / abstract |
| `https://assets.mixkit.co/videos/12436/12436-720.mp4` | Urban / motion |

---

## Usage Rules

1. **Always** set `background-color: var(--surface-2)` on image containers.
2. Add `onerror="this.style.opacity='0.5'"` as inline JS fallback on `<img>`.
3. Hero images → CSS `background-image` with color fallback (immune to browser intervention).
4. Product/content images → `<img>` with `loading="lazy"` + explicit `width`/`height` to prevent layout shift.
5. **Always** include `alt` text — even if the image fails, alt text provides context.

---

## Quality Gate

`criteria.json` must include a criterion verifying that **all image containers define a `background-color` fallback**. If missing, the build should warn.
