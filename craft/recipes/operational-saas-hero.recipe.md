# Operational SaaS Hero & Live Decision Record Recipe

> **Use-case**: B2B Engineering SaaS, DevOps, Infrastructure, and Operational AI tools (e.g. FlowAI).
> **Goal**: Avoid generic slate `#0f172a` boxes. Produce accountable, evidence-backed landing pages with variable display typography, tilted live decision records, and high-impact section contrast.

```html
<style>
  :root {
    --paper: #f4f1e8;
    --paper-2: #e8e4d8;
    --ink: #12221d;
    --muted: #52625c;
    --forest: #173f34;
    --signal: #ff654a;
    --signal-dark: #a72b1e;
    --lime: #d4ef77;
    --line: #a8b0a8;
    --white: #fffdf7;
    --display: Recursive, 'Plus Jakarta Sans', system-ui, sans-serif;
    --body: Manrope, 'Inter', system-ui, sans-serif;
    --mono: "DM Mono", 'JetBrains Mono', monospace;
    --shadow: 0 24px 70px rgba(18, 34, 29, 0.12);
  }

  body { margin: 0; background: var(--paper); color: var(--ink); font: 400 16px/1.58 var(--body); }
  .wrap { width: min(1180px, calc(100% - 40px)); margin-inline: auto; }
  .mono { font: 400 12px/1.4 var(--mono); letter-spacing: 0.06em; text-transform: uppercase; }

  /* Hero Section */
  .hero { padding: 88px 0 82px; display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 70px; align-items: center; }
  .hero h1 { margin: 20px 0 25px; font: 630 clamp(3.7rem, 6.5vw, 6.8rem)/0.91 var(--display); letter-spacing: -0.065em; font-variation-settings: "CASL" 0.2; }
  .hero h1 em { font-style: normal; color: var(--signal-dark); }
  .lead { max-width: 540px; color: var(--muted); font-size: 18px; line-height: 1.65; }

  /* Live Decision Record Card */
  .record { position: relative; padding: 22px; background: var(--forest); color: var(--white); border-radius: 7px; box-shadow: var(--shadow); transform: rotate(1deg); }
  .record:before { content: ""; position: absolute; inset: 12px -12px -12px 12px; border: 1px solid var(--forest); border-radius: 7px; z-index: -1; }
  .record-head { padding-bottom: 18px; display: flex; justify-content: space-between; gap: 16px; border-bottom: 1px solid #58756c; }
  .record-title h2 { margin: 0; font: 620 25px/1.1 var(--display); letter-spacing: -0.03em; }
  
  .issue { padding: 18px; margin-bottom: 12px; background: var(--white); color: var(--ink); border-radius: 5px; }
  .issue-tag { padding: 3px 7px; background: var(--signal); color: var(--ink); border-radius: 3px; }
  .decision { padding: 16px; display: grid; grid-template-columns: 1fr auto; gap: 14px; align-items: center; background: #244e42; color: var(--white); border-radius: 5px; }
  .review { padding: 8px 12px; background: var(--lime); color: var(--ink); border-radius: 3px; }
</style>

<section class="hero wrap">
  <div>
    <div class="eyebrow mono">Live work, accountable plan</div>
    <h1>A plan that moves when <em>reality does.</em></h1>
    <p class="lead">FlowAI reads pull requests, tickets, owners, and decisions—then shows which change protects the sprint and why.</p>
  </div>

  <div class="record" aria-label="Sprint decision record">
    <div class="record-head mono">
      <span>Payments reliability / Sprint 31</span>
      <span style="color: var(--lime);">● Live evidence</span>
    </div>
    <div class="record-title">
      <h2>The release path just changed.</h2>
      <span class="mono">Updated 11:19</span>
    </div>
    <article class="issue">
      <div class="mono" style="display: flex; justify-content: space-between;">
        <span class="issue-tag">Schedule risk</span>
        <span>PR #2217 &bull; 11:18</span>
      </div>
      <h3 style="margin: 14px 0 8px;">Retry contract needs one more platform review</h3>
      <p style="color: var(--muted); font-size: 13px;">Load testing cannot start until the idempotency path has an owner.</p>
    </article>
    <div class="decision">
      <div>
        <strong>Proposed: move dashboard polish behind load validation</strong>
      </div>
      <span class="review mono">Review change</span>
    </div>
  </div>
</section>
```
