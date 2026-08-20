# 8-Reference Visual Canvas & Material Inset Recipe (ProdigeUI v3.0.5)

> **Synthesized Reference Standard:** `yoyoyo.ai`, `crewai.com`, `n8n.io`, `framer.com`, `webflow.com`, `stripe.com`, `delvearchitects.com`, `nestjs.com`.

---

## 1. Core Material Depth & Inset Lighting Patterns

```css
/* Inset Top Highlight + Multi-Layer Shadow */
.surface-material-depth {
  background: var(--prodigeui-primitive-obsidian-pure);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 
    inset 0 1px 0 0 rgba(255, 255, 255, 0.12),
    0 24px 65px -12px rgba(0, 0, 0, 0.6);
  isolation: isolate;
  position: relative;
  transition: border-color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* NestJS Ruby Tech CLI Terminal Anchor */
.terminal-ruby-anchor {
  background: #181e25;
  border: 1px solid rgba(224, 35, 78, 0.3);
  border-radius: 12px;
  box-shadow: 
    inset 0 1px 0 0 rgba(255, 255, 255, 0.08),
    0 0 30px rgba(224, 35, 78, 0.12);
  font-family: 'JetBrains Mono', monospace;
}

/* yoyoyo.ai Spatial Cyan Voice Card Anchor */
.card-cyan-spatial {
  background: rgba(18, 20, 26, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(0, 240, 255, 0.25);
  box-shadow: 
    inset 0 1px 0 0 rgba(255, 255, 255, 0.15),
    0 0 35px rgba(0, 240, 255, 0.15);
}
```

---

## 2. Interactive Product Canvas Examples

### A. NestJS CLI Terminal Hero Canvas
```html
<div class="terminal-ruby-anchor">
  <div class="terminal-header">
    <span class="mono">nest g module telemetry</span>
    <span class="status-ruby">● CLI ACTIVE</span>
  </div>
  <pre class="terminal-code"><code>$ nest start --watch
[Nest] 10842  - 08/20/2026, 11:30 AM   LOG [NestFactory] Starting Nest application...
[Nest] 10842  - 08/20/2026, 11:30 AM   LOG [InstanceLoader] TelemetryModule dependencies initialized</code></pre>
</div>
```

### B. yoyoyo.ai Spatial AI Voice Canvas
```html
<div class="card-cyan-spatial">
  <div class="voice-wave-container">
    <svg width="200" height="40" viewBox="0 0 200 40">
      <path d="M0 20 Q 25 5, 50 20 T 100 20 T 150 20 T 200 20" stroke="#00f0ff" stroke-width="2" fill="none" />
    </svg>
    <span class="mono">● AI VOICE ACTIVE (0.4ms)</span>
  </div>
</div>
```
