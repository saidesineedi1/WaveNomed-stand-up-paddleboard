$css = Get-Content "about.css" -Raw -Encoding utf8

$newHeroCss = @'
/* Ambient Under-Glow Radial Halo */
.hero-cards-ambient-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 125%;
  height: 125%;
  background: radial-gradient(circle at 45% 45%, 
    rgba(21, 151, 184, 0.22) 0%, 
    rgba(245, 166, 35, 0.12) 36%, 
    rgba(32, 184, 209, 0.05) 58%, 
    transparent 76%);
  filter: blur(52px);
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.5s ease;
}

[data-theme="dark"] .hero-cards-ambient-glow {
  background: radial-gradient(circle at 45% 45%, 
    rgba(32, 184, 209, 0.28) 0%, 
    rgba(224, 159, 62, 0.14) 38%, 
    rgba(21, 151, 184, 0.06) 62%, 
    transparent 78%);
  filter: blur(60px);
}

/* Hero Card Container */
.about-hero-card-stack {
  position: relative;
  width: 100%;
  max-width: 530px;
  height: 500px;
  margin: 0;
  z-index: 1;
  perspective: 1200px;
}

/* Layout Presentation Switcher */
.hero-layout-toggle-bar {
  position: absolute;
  top: -46px;
  right: 0;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  background: var(--surface-card);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border-color);
  border-radius: 999px;
  box-shadow: 0 4px 16px -2px rgba(16, 42, 67, 0.08);
  z-index: 10;
  transition: all 0.3s ease;
}

[data-theme="dark"] .hero-layout-toggle-bar {
  background: rgba(16, 47, 59, 0.85);
  border-color: rgba(36, 80, 93, 0.8);
  box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.4);
}

[dir="rtl"] .hero-layout-toggle-bar {
  right: auto;
  left: 0;
}

.hero-layout-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  background: transparent;
  border: none;
  border-radius: 999px;
  color: var(--secondary-text);
  font-family: inherit;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-layout-btn svg {
  flex-shrink: 0;
  stroke: currentColor;
}

.hero-layout-btn:hover {
  color: var(--primary-accent);
}

.hero-layout-btn.active {
  background: var(--primary-accent);
  color: #FFFFFF;
  box-shadow: 0 2px 8px rgba(21, 151, 184, 0.35);
}

[data-theme="dark"] .hero-layout-btn.active {
  background: var(--primary-accent);
  color: #041217;
  box-shadow: 0 2px 10px rgba(32, 184, 209, 0.4);
}

/* Base Card Item - Layered Editorial View */
.about-hero-card-stack .card-item {
  position: absolute;
  box-sizing: border-box;
  will-change: transform, box-shadow, z-index;
  cursor: pointer;
  outline: none;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.4s ease,
              z-index 0.3s ease;
}

/* Card 1: Main Feature (Sunset Mirror Reflection) */
.about-hero-card-stack .card-1 {
  top: 0;
  left: 0;
  width: 84%;
  height: 320px;
  z-index: 2;
  animation: heroFloatA 8.5s ease-in-out infinite;
}

/* Card 2: Accent Feature (Emerald Cove Glide) */
.about-hero-card-stack .card-2 {
  bottom: 0;
  right: 0;
  width: 74%;
  height: 270px;
  z-index: 3;
  animation: heroFloatB 8.5s ease-in-out infinite;
}

/* RTL Alignment */
[dir="rtl"] .about-hero-card-stack .card-1 {
  left: auto;
  right: 0;
}

[dir="rtl"] .about-hero-card-stack .card-2 {
  right: auto;
  left: 0;
}

/* Hover & Focus Elevated Interactions */
.about-hero-card-stack:hover .card-item {
  animation-play-state: paused;
}

.about-hero-card-stack .card-item:hover,
.about-hero-card-stack .card-item:focus-visible,
.about-hero-card-stack .card-item.is-elevated {
  z-index: 8 !important;
  transform: translateY(-8px) scale(1.02) !important;
}

/* Subtle Counter Float Animations */
@keyframes heroFloatA {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes heroFloatB {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(7px);
  }
}

/* ==========================================================================
   PREMIUM MULTI-LAYER GALLERY FRAMING & BORDERS
   ========================================================================== */
.about-hero-card {
  position: relative;
  background: #FFFFFF;
  border-radius: 24px;
  padding: 6px;
  border: 1.5px solid rgba(21, 151, 184, 0.32);
  box-shadow: 0 24px 48px -12px rgba(16, 42, 67, 0.18),
              0 8px 24px -4px rgba(16, 42, 67, 0.08),
              0 0 0 1px rgba(255, 255, 255, 0.85) inset;
}

.about-hero-card:hover,
.about-hero-card:focus-visible,
.about-hero-card.is-elevated {
  border-color: rgba(21, 151, 184, 0.7);
  box-shadow: 0 32px 64px -14px rgba(8, 127, 155, 0.3),
              0 12px 30px -4px rgba(16, 42, 67, 0.12),
              0 0 32px rgba(21, 151, 184, 0.25),
              0 0 0 1px #FFFFFF inset;
}

/* Dark Mode Luxury Framing */
[data-theme="dark"] .about-hero-card {
  background: #0D2633;
  border: 1.5px solid rgba(32, 184, 209, 0.44);
  box-shadow: 0 28px 56px -12px rgba(0, 0, 0, 0.75),
              0 10px 24px -4px rgba(0, 0, 0, 0.4),
              0 0 28px rgba(32, 184, 209, 0.14),
              0 0 0 1px rgba(255, 255, 255, 0.07) inset;
}

[data-theme="dark"] .about-hero-card:hover,
[data-theme="dark"] .about-hero-card:focus-visible,
[data-theme="dark"] .about-hero-card.is-elevated {
  border-color: rgba(32, 184, 209, 0.85);
  box-shadow: 0 34px 68px -12px rgba(0, 0, 0, 0.85),
              0 14px 32px -4px rgba(0, 0, 0, 0.5),
              0 0 40px rgba(32, 184, 209, 0.35),
              0 0 0 1px rgba(255, 255, 255, 0.16) inset;
}

/* Inner Frame containing the Image & Badges */
.card-inner-frame {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 18px;
  overflow: hidden;
  background: #081B24;
}

.hero-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  border-radius: 18px;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
}

.about-hero-card:hover .hero-card-img,
.about-hero-card.is-elevated .hero-card-img {
  transform: scale(1.045);
}

/* Glass Sheen Reflection Overlay */
.card-glass-sheen {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.18) 0%, 
    rgba(255, 255, 255, 0.04) 35%, 
    transparent 65%, 
    rgba(0, 0, 0, 0.45) 100%);
  pointer-events: none;
  border-radius: 18px;
  transition: opacity 0.4s ease;
}

/* Floating Glass Badges on Images */
.hero-card-floating-badge {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  background: rgba(16, 42, 67, 0.72);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  color: #FFFFFF;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  pointer-events: none;
  z-index: 2;
  transition: all 0.3s ease;
}

.hero-card-floating-badge.badge-top-left {
  top: 14px;
  left: 14px;
}

.hero-card-floating-badge.badge-top-right {
  top: 14px;
  right: 14px;
}

[dir="rtl"] .hero-card-floating-badge.badge-top-left {
  left: auto;
  right: 14px;
}

[dir="rtl"] .hero-card-floating-badge.badge-top-right {
  right: auto;
  left: 14px;
}

.badge-accent-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #20B8D1;
  box-shadow: 0 0 8px #20B8D1;
}

.badge-pulse-glow {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #F5A623;
  box-shadow: 0 0 10px #F5A623;
  animation: pulseDot 2s infinite ease-in-out;
}

@keyframes pulseDot {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.75;
  }
}

/* Inset Meta Caption in Card Corner */
.hero-card-meta-caption {
  position: absolute;
  bottom: 12px;
  left: 14px;
  right: 14px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px 10px;
  background: linear-gradient(180deg, rgba(7, 25, 35, 0) 0%, rgba(7, 25, 35, 0.78) 100%);
  border-radius: 10px;
  pointer-events: none;
  z-index: 2;
}

.hero-card-meta-caption .meta-tag {
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #20B8D1;
  text-transform: uppercase;
}

.hero-card-meta-caption .meta-title {
  font-size: 0.82rem;
  font-weight: 600;
  color: #FFFFFF;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
}

/* Floating Luxury Heritage Seal Medallion */
.hero-cards-heritage-pill {
  position: absolute;
  bottom: 24px;
  left: 0;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1.5px solid rgba(21, 151, 184, 0.32);
  border-radius: 999px;
  box-shadow: 0 16px 36px -8px rgba(16, 42, 67, 0.18),
              0 0 0 1px rgba(255, 255, 255, 0.9) inset;
  z-index: 5;
  pointer-events: none;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

[data-theme="dark"] .hero-cards-heritage-pill {
  background: rgba(13, 38, 51, 0.92);
  border-color: rgba(32, 184, 209, 0.45);
  box-shadow: 0 18px 40px -8px rgba(0, 0, 0, 0.6),
              0 0 20px rgba(32, 184, 209, 0.15),
              0 0 0 1px rgba(255, 255, 255, 0.08) inset;
}

[dir="rtl"] .hero-cards-heritage-pill {
  left: auto;
  right: 0;
}

.heritage-pill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(21, 151, 184, 0.15) 0%, rgba(21, 151, 184, 0.35) 100%);
  color: var(--primary-accent);
}

.heritage-pill-text {
  display: flex;
  flex-direction: column;
}

.heritage-pill-text .pill-title {
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: var(--primary-text);
  line-height: 1.2;
}

.heritage-pill-text .pill-sub {
  font-size: 0.65rem;
  font-weight: 600;
  color: var(--secondary-text);
  line-height: 1.2;
}

/* ==========================================================================
   SIDE-BY-SIDE / SPLIT VIEW (WHEN .layout-split CLASS IS ACTIVE)
   ========================================================================== */
.about-hero-card-stack.layout-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  height: 480px;
}

.about-hero-card-stack.layout-split .card-item {
  position: relative !important;
  top: auto !important;
  left: auto !important;
  bottom: auto !important;
  right: auto !important;
  width: 100% !important;
  height: 100% !important;
  animation: none !important;
}

.about-hero-card-stack.layout-split .card-1 {
  z-index: 1 !important;
}

.about-hero-card-stack.layout-split .card-2 {
  z-index: 1 !important;
}

.about-hero-card-stack.layout-split .hero-cards-heritage-pill {
  bottom: -22px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
}

[dir="rtl"] .about-hero-card-stack.layout-split .hero-cards-heritage-pill {
  left: 50%;
  right: auto;
  transform: translateX(-50%);
}

@media (prefers-reduced-motion: reduce) {
  .about-hero-card-stack .card-1,
  .about-hero-card-stack .card-2 {
    animation: none !important;
  }
  .badge-pulse-glow {
    animation: none !important;
  }
}
'@

# Replace the main hero cards block
$patternMain = '(?s)\.about-hero-card-stack\s*\{.*?(\r?\n\.about-hero-content\s*\{)'
$css = $css -replace $patternMain, ($newHeroCss + "`r`n`r`n`$1")

# Update 992px breakpoint for hero card stack
$pattern992 = '(?s)(\.about-hero-card-stack\s*\{\s*max-width:\s*480px;\s*height:\s*440px;\s*margin:\s*0\s*auto;\s*\})'
$replacement992 = @'
  .about-hero-card-stack {
    max-width: 490px;
    height: 460px;
    margin: 1.5rem auto 0;
  }
  .about-hero-card-stack .card-1 {
    width: 84%;
    height: 295px;
  }
  .about-hero-card-stack .card-2 {
    width: 74%;
    height: 250px;
  }
  .about-hero-card-stack.layout-split {
    height: 420px;
  }
'@
$css = $css -replace $pattern992, $replacement992

# Update 768px breakpoint
$pattern768 = '(?s)\.about-hero-card-stack\s*\{\s*max-width:\s*420px;\s*height:\s*380px;\s*padding-bottom:\s*12px;\s*padding-right:\s*12px;\s*margin:\s*0\s*auto;\s*\}\s*\[dir="rtl"\]\s*\.about-hero-card-stack\s*\{\s*padding-right:\s*0;\s*padding-left:\s*12px;\s*\}'
$replacement768 = @'
  .about-hero-card-stack {
    max-width: 440px;
    height: 400px;
    margin: 1.5rem auto 0;
  }
  .about-hero-card-stack .card-1 {
    width: 85%;
    height: 260px;
  }
  .about-hero-card-stack .card-2 {
    width: 75%;
    height: 220px;
  }
  .hero-layout-toggle-bar {
    top: -42px;
  }
  .about-hero-card-stack.layout-split {
    grid-template-columns: 1fr;
    height: auto;
    gap: 14px;
  }
  .about-hero-card-stack.layout-split .card-item {
    height: 220px !important;
  }
  .about-hero-card-stack.layout-split .hero-cards-heritage-pill {
    position: static;
    transform: none;
    margin: 10px auto 0;
    display: inline-flex;
  }
'@
$css = $css -replace $pattern768, $replacement768

# Update 480px breakpoint
$pattern480 = '(?s)\.about-hero-card-stack\s*\{\s*max-width:\s*100%;\s*height:\s*310px;\s*padding-bottom:\s*10px;\s*padding-right:\s*10px;\s*\}\s*\[dir="rtl"\]\s*\.about-hero-card-stack\s*\{\s*padding-right:\s*0;\s*padding-left:\s*10px;\s*\}'
$replacement480 = @'
  .about-hero-card-stack {
    max-width: 100%;
    height: 335px;
    margin: 1.5rem auto 0;
  }
  .about-hero-card-stack .card-1 {
    width: 86%;
    height: 215px;
  }
  .about-hero-card-stack .card-2 {
    width: 76%;
    height: 185px;
  }
  .about-hero-card {
    padding: 4px;
    border-radius: 18px;
  }
  .card-inner-frame {
    border-radius: 14px;
  }
  .hero-card-img {
    border-radius: 14px;
  }
  .hero-card-floating-badge {
    padding: 4px 9px;
    font-size: 0.64rem;
  }
  .hero-card-meta-caption {
    padding: 4px 8px;
  }
  .hero-card-meta-caption .meta-tag {
    font-size: 0.58rem;
  }
  .hero-card-meta-caption .meta-title {
    font-size: 0.74rem;
  }
  .hero-cards-heritage-pill {
    padding: 6px 12px;
    bottom: 12px;
  }
  .heritage-pill-icon {
    width: 26px;
    height: 26px;
  }
  .heritage-pill-text .pill-title {
    font-size: 0.68rem;
  }
  .heritage-pill-text .pill-sub {
    font-size: 0.58rem;
  }
  .about-hero-card-stack.layout-split .card-item {
    height: 180px !important;
  }
'@
$css = $css -replace $pattern480, $replacement480

Set-Content -Path "about.css" -Value $css -Encoding utf8 -NoNewline
Write-Output "Successfully updated about.css"
