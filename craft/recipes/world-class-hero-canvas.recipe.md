# World-Class Hero Product Canvas Recipe (Inspired by Linear, n8n, Lovable, Builder.io, Stripe, Framer)

> **Purpose:** Eliminate generic static hero sections by embedding an interactive, live-canvas product anchor featuring inset lighting depth, shimmer borders, and domain-authentic telemetry controls.

---

## 1. CSS Material Depth Tokens & Utility Patterns

```css
:root {
  /* Surface Material Depth */
  --surface-obsidian: #08090a;
  --surface-card: #121316;
  --surface-card-hover: #1a1b1e;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-shimmer: rgba(255, 255, 255, 0.2);

  /* Linear-style Material Inset Lighting */
  --shadow-material: 
    inset 0 1px 0 0 rgba(255, 255, 255, 0.12),
    0 24px 65px -12px rgba(0, 0, 0, 0.6);
}

/* Inset Lit Card Container */
.card-material {
  background: var(--surface-card);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
  box-shadow: var(--shadow-material);
  isolation: isolate;
  position: relative;
  transition: border-color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-material:hover {
  border-color: var(--border-shimmer);
}

/* Shimmer Sweep Hover Button */
.btn-shimmer {
  position: relative;
  overflow: hidden;
  background: #ffffff;
  color: #000000;
  font-weight: 700;
  padding: 0.75rem 1.6rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  z-index: 2;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-shimmer::before {
  content: "";
  position: absolute;
  top: -50%; left: -50%; width: 200%; height: 200%;
  background: linear-gradient(
    60deg,
    transparent 30%,
    rgba(255, 255, 255, 0.6) 50%,
    transparent 70%
  );
  transform: rotate(25deg) translateX(-100%);
  transition: transform 0.6s ease;
}

.btn-shimmer:hover::before {
  transform: rotate(25deg) translateX(100%);
}

.btn-shimmer:hover {
  transform: translateY(-2px);
}
```

---

## 2. Interactive Product Node Canvas Structure (n8n & Lovable Pattern)

```html
<div class="card-material canvas-frame">
  <div class="canvas-header">
    <div class="canvas-tabs">
      <button class="tab-btn active">Visual Workflow</button>
      <button class="tab-btn">Live Code</button>
      <button class="tab-btn">Trace Log</button>
    </div>
    <span class="status-indicator">● LIVE EXECUTION</span>
  </div>

  <div class="canvas-viewport">
    <!-- Interactive Node Graph -->
    <div class="node-item source">
      <span class="node-tag">TRIGGER</span>
      <strong>GitHub PR Opened</strong>
    </div>

    <svg class="connection-line" width="100" height="40">
      <path d="M 0 20 L 100 20" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-dasharray="4" />
    </svg>

    <div class="node-item agent">
      <span class="node-tag agent-color">AGENT ENGINE</span>
      <strong>Auto-Review &amp; Test Suite</strong>
    </div>
  </div>
</div>
```
