$css = [System.IO.File]::ReadAllText("style.css", [System.Text.Encoding]::UTF8)

$newSafetyCSS = @"
/* ==========================================================================
   SAFETY & EXPEDITION SHOWCASE SECTION (EQUAL-HEIGHT DUAL-VISTA COMPOSITION)
   ========================================================================== */

#safety {
  padding: clamp(3.5rem, 6vh, 5.5rem) 0;
  position: relative;
  overflow: hidden;
}

.safety-showcase-grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 3.5rem;
  align-items: stretch;
  min-height: 600px;
}

.safety-content-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.safety-header-group {
  margin-bottom: 1.25rem;
}

.safety-header-group .section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: var(--primary-accent);
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.safety-header-group .section-headline {
  font-size: clamp(2rem, 3.2vw, 2.75rem);
  font-weight: 700;
  line-height: 1.18;
  color: var(--primary-text);
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.safety-lead-p {
  font-size: 1.02rem;
  line-height: 1.65;
  color: var(--secondary-text);
  margin-bottom: 0.75rem;
}

.safety-sub-p {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--secondary-text);
  margin-bottom: 0;
  opacity: 0.9;
}

/* 3 Luxury Protocol Spec Pillars */
.safety-pillars-stack {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  margin: 1.5rem 0 1.75rem;
}

.safety-pillar-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.95rem 1.15rem;
  background: var(--surface-card);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  box-shadow: var(--shadow-subtle);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.safety-pillar-row:hover {
  transform: translateX(4px);
  border-color: var(--primary-accent);
  box-shadow: var(--shadow-elevated), 0 0 16px rgba(21, 151, 184, 0.15);
}

[dir="rtl"] .safety-pillar-row:hover {
  transform: translateX(-4px);
}

.pillar-icon-box {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: var(--soft-accent);
  border: 1px solid rgba(21, 151, 184, 0.25);
  color: var(--primary-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0.15rem;
  transition: all 0.3s ease;
}

.safety-pillar-row:hover .pillar-icon-box {
  background: var(--primary-accent);
  color: #ffffff;
  transform: scale(1.05);
}

.pillar-text-content {
  flex: 1;
}

.pillar-top-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}

.pillar-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--primary-text);
  margin: 0;
  line-height: 1.25;
}

.pillar-tag {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: rgba(21, 151, 184, 0.1);
  color: var(--primary-accent);
  border: 1px solid rgba(21, 151, 184, 0.25);
  white-space: nowrap;
}

.pillar-tag.telemetry-tag {
  background: rgba(16, 185, 129, 0.1);
  color: #10B981;
  border-color: rgba(16, 185, 129, 0.25);
}

.pillar-tag.gate-tag {
  background: rgba(245, 158, 11, 0.1);
  color: #D97706;
  border-color: rgba(245, 158, 11, 0.25);
}

[data-theme="dark"] .pillar-tag.gate-tag {
  color: #FBBF24;
}

.pillar-desc {
  font-size: 0.8rem;
  line-height: 1.45;
  color: var(--secondary-text);
  margin: 0;
}

/* Footer Action & Reassurance Row */
.safety-footer-action-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  flex-wrap: wrap;
}

.safety-guarantee-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
}

.guarantee-beacon {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #10B981;
  position: relative;
  flex-shrink: 0;
}

.guarantee-beacon::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: #10B981;
  opacity: 0.45;
  animation: pulsePing 2s infinite ease-out;
}

.guarantee-text {
  display: flex;
  flex-direction: column;
}

.guarantee-text strong {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--primary-text);
  line-height: 1.2;
}

.guarantee-text span {
  font-size: 0.68rem;
  color: var(--secondary-text);
  line-height: 1.2;
}

/* ==========================================================================
   RIGHT COLUMN: DUAL-CANVAS OVERLAPPING FRAMEWORK
   ========================================================================== */

.safety-media-col {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.safety-dual-canvas-frame {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 580px;
}

/* Canvas Primary (Dock Readiness) */
.safety-canvas-primary {
  position: absolute;
  top: 0;
  left: 0;
  width: 74%;
  height: 84%;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: var(--shadow-elevated);
  border: 1px solid var(--border-color);
  background: #081721;
}

[dir="rtl"] .safety-canvas-primary {
  left: auto;
  right: 0;
}

/* Canvas Secondary (Emerald Cove Action) */
.safety-canvas-secondary {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 58%;
  height: 60%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35), 0 0 28px rgba(21, 151, 184, 0.28);
  border: 3px solid var(--surface-card);
  background: #081721;
  z-index: 2;
}

[dir="rtl"] .safety-canvas-secondary {
  right: auto;
  left: 0;
}

.safety-img-asset {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: translate3d(0, 0, 0) scale(1);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transition: transform 0.65s cubic-bezier(0.25, 1, 0.35, 1);
}

.safety-canvas-primary:hover .safety-img-asset,
.safety-canvas-secondary:hover .safety-img-asset {
  transform: translate3d(0, 0, 0) scale(1.06);
}

.safety-canvas-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(5, 16, 23, 0.28) 0%,
    rgba(5, 16, 23, 0.04) 30%,
    rgba(5, 16, 23, 0.08) 60%,
    rgba(5, 16, 23, 0.7) 100%
  );
  pointer-events: none;
}

.canvas-caption-pill {
  position: absolute;
  bottom: 1rem;
  left: 1.15rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background: rgba(7, 25, 35, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  z-index: 3;
}

[dir="rtl"] .canvas-caption-pill {
  left: auto;
  right: 1.15rem;
}

.caption-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary-accent);
  box-shadow: 0 0 6px var(--primary-accent);
}

/* Floating Glass Badges */
.safety-floating-badge {
  position: absolute;
  top: 1.5rem;
  right: 1rem;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.55rem 0.95rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  animation: floatSubtle 4s ease-in-out infinite alternate;
}

[dir="rtl"] .safety-floating-badge {
  right: auto;
  left: 1rem;
}

[data-theme="dark"] .safety-floating-badge {
  background: rgba(10, 37, 64, 0.85);
  border-color: rgba(21, 151, 184, 0.35);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.4);
}

.badge-icon-circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.15);
  color: #10B981;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-text-stack {
  display: flex;
  flex-direction: column;
}

.badge-super {
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--primary-accent);
  line-height: 1.1;
}

.badge-sub {
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--primary-text);
  line-height: 1.1;
}

/* Floating Stat Card (Bottom Left) */
.safety-floating-stat-card {
  position: absolute;
  bottom: 2rem;
  left: 1.5rem;
  z-index: 3;
  padding: 0.65rem 1rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.16);
  animation: floatSubtleRev 4.5s ease-in-out infinite alternate;
}

[dir="rtl"] .safety-floating-stat-card {
  left: auto;
  right: 1.5rem;
}

[data-theme="dark"] .safety-floating-stat-card {
  background: rgba(10, 37, 64, 0.9);
  border-color: rgba(21, 151, 184, 0.35);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
}

.stat-big-val {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--primary-accent);
  line-height: 1;
}

.stat-small-lbl {
  font-size: 0.65rem;
  font-weight: 600;
  color: var(--secondary-text);
  margin-top: 0.15rem;
}

"@

# Replace old telemetry and protocols block
$pattern1 = '(?s)\.telemetry-dashboard-wrap\s*\{.*?\n(?=\.timeline-tab-bar)'
$css = $css -replace $pattern1, ($newSafetyCSS + "`n")

# Replace old responsive protocols block at bottom
$pattern2 = '(?s)@media \(max-width: 1080px\) \{\s*\.protocols-bento-grid.*?@media \(max-width: 768px\) \{\s*\.telemetry-metrics-grid.*?\}\s*\}'
$newResponsiveCSS = @"
@media (max-width: 991px) {
  .safety-showcase-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
    min-height: auto;
  }

  .safety-dual-canvas-frame {
    height: 480px;
    min-height: 480px;
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 600px) {
  .safety-dual-canvas-frame {
    height: 380px;
    min-height: 380px;
  }

  .safety-canvas-primary {
    width: 80%;
    height: 82%;
  }

  .safety-canvas-secondary {
    width: 64%;
    height: 60%;
  }

  .safety-footer-action-bar {
    flex-direction: column;
    align-items: flex-start;
  }
}
"@

$css = $css -replace $pattern2, $newResponsiveCSS

[System.IO.File]::WriteAllText("style.css", $css, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText("css/style.css", $css, [System.Text.Encoding]::UTF8)

"Successfully updated style.css and css/style.css!"
