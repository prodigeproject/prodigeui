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

### Pattern 3: Delve Tactile Paper Architectural Blueprint Floorplan Inspector
<!-- Detailed SVG Architectural Blueprint Floorplan Canvas -->
<svg class="architectural-floorplan-svg" viewBox="0 0 500 240" fill="none" stroke="#a64b2a" stroke-width="1.5">
  <!-- Outer Monolith Wall Perimeter -->
  <rect x="20" y="20" width="460" height="200" stroke="#f5f2eb" stroke-opacity="0.4" stroke-width="2"/>
  <rect x="24" y="24" width="452" height="192" stroke="#f5f2eb" stroke-opacity="0.2"/>

  <!-- Atrium Gallery (Room 01) -->
  <g id="svg-room-1" class="room-group active">
    <rect x="35" y="35" width="140" height="170" fill="rgba(166, 75, 42, 0.45)" stroke="#a64b2a" stroke-width="2"/>
    <text x="50" y="65" fill="#f5f2eb" font-family="monospace" font-size="11" font-weight="700">01. ATRIUM GALLERY</text>
    <text x="50" y="85" fill="#a64b2a" font-family="monospace" font-size="9">14.8m x 9.2m | CLEAR HEIGHT 4.5m</text>
    <!-- Door Swing Arc -->
    <path d="M 175 120 A 25 25 0 0 1 150 145" stroke="#f5f2eb" stroke-opacity="0.6" stroke-dasharray="3,3"/>
  </g>

  <!-- Granite Thermal Mass Core (Room 02) -->
  <g id="svg-room-2" class="room-group">
    <rect x="190" y="35" width="130" height="170" fill="none" stroke="#f5f2eb" stroke-opacity="0.3" stroke-width="1.5"/>
    <text x="202" y="65" fill="#f5f2eb" font-family="monospace" font-size="11" font-weight="700">02. THERMAL MASS</text>
    <text x="202" y="85" fill="#9ca3af" font-family="monospace" font-size="9">9.5m x 9.2m | GRANITE CORE</text>
  </g>

  <!-- European Larch Pavilion (Room 03) -->
  <g id="svg-room-3" class="room-group">
    <rect x="335" y="35" width="130" height="170" fill="none" stroke="#f5f2eb" stroke-opacity="0.3" stroke-width="1.5"/>
    <text x="347" y="65" fill="#f5f2eb" font-family="monospace" font-size="11" font-weight="700">03. LARCH PAVILION</text>
    <text x="347" y="85" fill="#9ca3af" font-family="monospace" font-size="9">11.2m x 9.2m | TIMBER DECK</text>
  </g>

  <!-- Solar Orientation Compass & Dimension Ticks -->
  <circle cx="450" cy="50" r="16" stroke="#a64b2a" stroke-opacity="0.6"/>
  <line x1="450" y1="30" x2="450" y2="70" stroke="#a64b2a" stroke-dasharray="2,2"/>
  <text x="447" y="27" fill="#a64b2a" font-family="monospace" font-size="9">N</text>
</svg>
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
