# World-Class Interactive Hero Canvas Recipe (ProdigeUI)

> **Grade Target:** Awwwards Site of the Day / FWA (9.5+/10)  
> **Core Requirement:** Combine domain-specific interactive anchors (node DAG, spatial blueprint, WebGL canvas) with rich editorial storytelling. Do NOT copy hardcoded text verbatim across briefs. Synthesize dynamically per domain.

---

## 1. Material Inset Lighting Depth Styles

```css
/* Generalized Material Inset Surface & Depth Lighting */
:root {
  --prodigeui-material-inset: inset 0 1px 0 0 rgba(255, 255, 255, 0.12), 0 24px 65px -12px rgba(0, 0, 0, 0.6);
  --prodigeui-radius-card: 16px;
}

.card-material {
  background: var(--prodigeui-color-surface);
  border: 1px solid var(--prodigeui-color-border);
  border-radius: var(--prodigeui-radius-card);
  box-shadow: var(--prodigeui-material-inset);
  position: relative;
  isolation: isolate;
}
```

---

## 2. Interactive Product Node Canvas Pattern (n8n & Lovable Workflow)

```html
<div class="card-material canvas-frame">
  <div class="canvas-header">
    <div class="canvas-tabs">
      <button class="tab-btn active">{Tab 01}</button>
      <button class="tab-btn">{Tab 02}</button>
    </div>
    <span class="status-indicator">● {LIVE STATUS}</span>
  </div>

  <div class="dag-grid">
    <article class="dag-node">
      <span class="mono-tag">{NODE 01}</span>
      <h4 class="node-title">{Node Title 1}</h4>
    </article>
    <article class="dag-node active-node">
      <span class="mono-tag">{NODE 02}</span>
      <h4 class="node-title">{Node Title 2}</h4>
    </article>
  </div>
</div>
```

---

## 3. Spatial Architectural Blueprint Floorplan Inspector Pattern

```html
<div class="spatial-inspector-frame">
  <div class="inspector-controls">
    <button class="room-btn active">{Section 01}</button>
    <button class="room-btn">{Section 02}</button>
  </div>

  <svg class="architectural-floorplan-svg" viewBox="0 0 500 220" fill="none" stroke="currentColor">
    <!-- Perimeter Walls & Room Polygons -->
    <rect x="15" y="15" width="470" height="190" stroke="currentColor" stroke-opacity="0.5" stroke-width="2"/>
    <g class="room-group active">
      <rect x="30" y="30" width="145" height="160" fill="currentColor" fill-opacity="0.25"/>
      <text x="42" y="60" fill="currentColor" font-family="monospace" font-size="10" font-weight="700">{ROOM 01}</text>
      <text x="42" y="80" fill="currentColor" font-family="monospace" font-size="8">{DIMENSIONS | SPECS}</text>
    </g>
  </svg>

  <div class="telemetry-readout">
    <span class="mono-tag">{LIVE SPATIAL TELEMETRY READOUT}</span>
  </div>
</div>
```
