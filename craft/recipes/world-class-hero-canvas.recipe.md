> **Grade Target:** Awwwards Site of the Day / FWA (9.5+/10)  
> **Core Requirement:** Combine domain-specific interactive anchors with rich editorial storytelling.  
> ⚠️ **Strict Anti-Slop Rule:** NEVER leak prompt instructions in micro-copy (e.g. `(CLICK TO SWITCH...)`). Maintain visual restraint, generous whitespace, and un-crammed column structures.

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

## 4. Interactive Spatial Photo & Material Telemetry Inspector Pattern

```html
<div class="spatial-photo-inspector-frame">
  <!-- Interactive Section Toggle Buttons -->
  <div class="spatial-controls">
    <button class="room-btn active" onclick="inspectRoom(1)">{Section 01}</button>
    <button class="room-btn" onclick="inspectRoom(2)">{Section 02}</button>
  </div>

  <!-- High-Res Dynamic Architectural Photo Viewport -->
  <div class="photo-viewport">
    <img id="active-photo" src="{Photo URL}" alt="{Section Alt}">
  </div>

  <!-- Crisp 100% Legible Material & Telemetry Card -->
  <div class="material-telemetry-card">
    <div class="telemetry-grid">
      <div class="metric-item">
        <span class="mono-tag">{PRIMARY MATERIAL}</span>
        <span class="metric-value">{Granite / Timber}</span>
      </div>
      <div class="metric-item">
        <span class="mono-tag">{ACOUSTIC RATING}</span>
        <span class="metric-value">{58dB}</span>
      </div>
    </div>
  </div>
</div>
```
