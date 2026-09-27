/**
 * WaveNomad - Home 2: Sunset & Twilight Paddleboard Experience
 * Interactive controller for Home 2 page (Matching Reference Behavior)
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initDirectionToggle();
  initDropdown();
  initMobileMenu();
  initHeaderScroll();
  initHeaderActions();
  initQuickLaunchCalculator();
  initExperiencePillars();
  initDayFlowSteps();
  initPassesAndAddons();
  initTelemetryLiveClock();
  initSmoothScroll();
});

/* ==========================================================================
   1. Light & Dark Mode Toggle (Synchronized with Home 1)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  const htmlRoot = document.documentElement;

  // Retrieve existing or saved theme (supporting both storage keys)
  const savedTheme = localStorage.getItem('wavenomad-theme') || localStorage.getItem('wavenomad_theme') || 'light';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
      localStorage.setItem('wavenomad-theme', newTheme);
      localStorage.setItem('wavenomad_theme', newTheme);
    });
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      htmlRoot.setAttribute('data-theme', 'dark');
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'block';
    } else {
      htmlRoot.removeAttribute('data-theme');
      if (sunIcon) sunIcon.style.display = 'block';
      if (moonIcon) moonIcon.style.display = 'none';
    }
  }
}

/* ==========================================================================
   2. RTL / LTR Direction Toggle (Synchronized with Home 1)
   ========================================================================== */
function initDirectionToggle() {
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langLabel = document.getElementById('lang-label');
  const htmlRoot = document.documentElement;

  const isRtlSaved = localStorage.getItem('wavenomad-rtl') === 'true' || localStorage.getItem('wavenomad_direction') === 'rtl';
  applyDirection(isRtlSaved ? 'rtl' : 'ltr');

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const currentDir = htmlRoot.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
      applyDirection(newDir);
      localStorage.setItem('wavenomad-rtl', (newDir === 'rtl').toString());
      localStorage.setItem('wavenomad_direction', newDir);
    });
  }

  function applyDirection(dir) {
    if (dir === 'rtl') {
      htmlRoot.setAttribute('dir', 'rtl');
      htmlRoot.setAttribute('lang', 'ar');
      if (langLabel) langLabel.textContent = 'RTL';
      if (langToggleBtn) {
        langToggleBtn.setAttribute('title', 'Mode: RTL (Click to switch to LTR)');
        langToggleBtn.setAttribute('aria-label', 'Switch to LTR mode');
      }
    } else {
      htmlRoot.removeAttribute('dir');
      htmlRoot.setAttribute('lang', 'en');
      if (langLabel) langLabel.textContent = 'LTR';
      if (langToggleBtn) {
        langToggleBtn.setAttribute('title', 'Mode: LTR (Click to switch to RTL)');
        langToggleBtn.setAttribute('aria-label', 'Switch to RTL mode');
      }
    }
  }
}

/* ==========================================================================
   3. Dropdown Menu Toggle (Home 1 / Home 2 switcher)
   ========================================================================== */
function initDropdown() {
  const homeDropdownItem = document.getElementById('home-dropdown-item');
  const homeDropdownBtn = document.getElementById('home-dropdown-btn');
  const home1Option = document.getElementById('home1-option');
  const home2Option = document.getElementById('home2-option');

  if (homeDropdownBtn && homeDropdownItem) {
    homeDropdownBtn.addEventListener('click', (e) => {
      e.preventDefault();
      homeDropdownItem.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!homeDropdownItem.contains(e.target)) {
        homeDropdownItem.classList.remove('open');
      }
    });
  }

  // Already on Home 2, smooth scroll to top
  if (home2Option && homeDropdownItem) {
    home2Option.addEventListener('click', () => {
      homeDropdownItem.classList.remove('open');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Navigating to Home 1
  if (home1Option && homeDropdownItem) {
    home1Option.addEventListener('click', () => {
      homeDropdownItem.classList.remove('open');
    });
  }
}

/* ==========================================================================
   4. Mobile Navigation Menu Toggle
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const homeDropdownItem = document.getElementById('home-dropdown-item');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen.toString());
    });

    // Close when clicking nav links
    navMenu.querySelectorAll('.nav-link:not(.dropdown > .nav-link)').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        if (homeDropdownItem) homeDropdownItem.classList.remove('open');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/* ==========================================================================
   5. Header Scroll Effect
   ========================================================================== */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   6. Header Action Buttons
   ========================================================================== */
function initHeaderActions() {
  const navLoginBtn = document.getElementById('nav-login-btn');
  if (navLoginBtn) {
    navLoginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'dashboard.html';
    });
  }
}

/* ==========================================================================
   5. Interactive Quick Launch Calculator (Hero Drawer)
   ========================================================================== */
function initQuickLaunchCalculator() {
  const expSelect = document.getElementById('quick-exp-select');
  const durationSelect = document.getElementById('quick-duration');
  const paddlersSelect = document.getElementById('quick-paddlers');
  const totalPriceEl = document.getElementById('quick-total-price');

  if (!expSelect || !durationSelect || !paddlersSelect || !totalPriceEl) return;

  const expBaseRates = {
    sunset: 58,
    dawn: 54,
    fjord: 68,
    glow: 79,
    pup: 52
  };

  const durationMultipliers = {
    '2h': 0.85,
    '4h': 1.0,
    '8h': 1.45,
    'multi': 2.8
  };

  function updatePrice() {
    const exp = expSelect.value;
    const dur = durationSelect.value;
    const paddlersVal = paddlersSelect.value;
    const paddlerCount = paddlersVal === 'custom' ? 6 : parseInt(paddlersVal, 10) || 1;

    const baseRate = expBaseRates[exp] || 58;
    const durMult = durationMultipliers[dur] || 1.0;

    let total = Math.round(baseRate * durMult * paddlerCount);
    totalPriceEl.textContent = `$${total}`;
  }

  expSelect.addEventListener('change', updatePrice);
  durationSelect.addEventListener('change', updatePrice);
  paddlersSelect.addEventListener('change', updatePrice);

  updatePrice();
}

/* ==========================================================================
   6. 01 The Paddleboard Experience: Pillar Interaction
   ========================================================================== */
function initExperiencePillars() {
  const pillarCards = document.querySelectorAll('.exp-pillar-card');
  const hotspotPins = document.querySelectorAll('.hotspot-pin');

  pillarCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      pillarCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      // Pulse corresponding hotspot pin if present
      if (hotspotPins[index]) {
        hotspotPins.forEach(p => p.querySelector('.hotspot-dot').style.transform = 'scale(1)');
        const activeDot = hotspotPins[index].querySelector('.hotspot-dot');
        if (activeDot) {
          activeDot.style.transform = 'scale(1.35)';
          setTimeout(() => {
            activeDot.style.transform = 'scale(1)';
          }, 800);
        }
      }
    });
  });

  hotspotPins.forEach((pin, index) => {
    pin.addEventListener('click', () => {
      if (pillarCards[index]) {
        pillarCards.forEach(c => c.classList.remove('active'));
        pillarCards[index].classList.add('active');
        pillarCards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });
}

/* ==========================================================================
   7. 03 Your Day on the Water: Step Interaction & Rotating Cards Coordination
   ========================================================================== */
function initDayFlowSteps() {
  const stepItems = document.querySelectorAll('.flow-step-item');
  const rotatorTrack = document.getElementById('day-rotator-track');
  const rotatorCards = document.querySelectorAll('.rotator-card');
  const btnPrev = document.getElementById('rotator-btn-prev');
  const btnNext = document.getElementById('rotator-btn-next');

  // Coordinated step click: updates steps and highlights corresponding card
  stepItems.forEach(item => {
    item.addEventListener('click', () => {
      stepItems.forEach(s => s.classList.remove('active'));
      item.classList.add('active');

      const stepNum = item.getAttribute('data-step');
      rotatorCards.forEach(card => {
        const ref = card.getAttribute('data-step-ref');
        if (ref === stepNum || (stepNum === '2' && ref === '1')) {
          card.classList.add('active-step');
        } else {
          card.classList.remove('active-step');
        }
      });
    });
  });

  // Clicking any card highlights corresponding step on the right
  rotatorCards.forEach(card => {
    card.addEventListener('click', () => {
      const stepRef = card.getAttribute('data-step-ref');
      if (stepRef) {
        const targetStep = document.querySelector(`.flow-step-item[data-step="${stepRef}"]`);
        if (targetStep) {
          stepItems.forEach(s => s.classList.remove('active'));
          targetStep.classList.add('active');
          targetStep.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    });
  });

  // Up button: rotates / nudges cards upwards
  if (btnPrev && rotatorTrack) {
    btnPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      rotatorTrack.style.animationPlayState = 'paused';
      rotatorTrack.parentElement.scrollBy({ top: -160, behavior: 'smooth' });
      setTimeout(() => {
        rotatorTrack.style.animationPlayState = '';
      }, 3500);
    });
  }

  // Down button: rotates / nudges cards downwards
  if (btnNext && rotatorTrack) {
    btnNext.addEventListener('click', (e) => {
      e.stopPropagation();
      rotatorTrack.style.animationPlayState = 'paused';
      rotatorTrack.parentElement.scrollBy({ top: 160, behavior: 'smooth' });
      setTimeout(() => {
        rotatorTrack.style.animationPlayState = '';
      }, 3500);
    });
  }
}

/* ==========================================================================
   8. 05 Passes Selection Interaction
   ========================================================================== */
function initPassesAndAddons() {
  const passButtons = document.querySelectorAll('.btn-pass-action');

  passButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const passCard = btn.closest('.pass-card');
      const passName = passCard ? passCard.querySelector('.pass-name')?.textContent : 'Adventure Pass';

      // Update button text with brief confirmation feedback
      const originalText = btn.textContent;
      btn.textContent = `✓ ${passName} Selected`;
      btn.style.background = '#10B981';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 2200);
    });
  });
}

/* ==========================================================================
   9. 04 Live Telemetry Real-Time Clock & Sunset Countdown
   ========================================================================== */
function initTelemetryLiveClock() {
  const timeDisplay = document.getElementById('intel-time-display');
  const sunsetTimer = document.getElementById('sunset-timer');

  if (!timeDisplay) return;

  function updateTelemetryTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    timeDisplay.textContent = `Telemetry Updated: ${hours}:${minutes}:${seconds} (Live)`;

    if (sunsetTimer) {
      // Calculate realistic remaining time to sunset (~18:45)
      const targetSunset = new Date();
      targetSunset.setHours(18, 45, 0, 0);

      let diffMs = targetSunset - now;
      if (diffMs < 0) {
        // Sunset passed for today, show evening stars mode
        sunsetTimer.textContent = 'Milky Way Night Mode Active';
      } else {
        const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        sunsetTimer.textContent = `Sunset Alpenglow in ${diffHrs}h ${diffMins}m`;
      }
    }
  }

  updateTelemetryTime();
  setInterval(updateTelemetryTime, 10000);
}

/* ==========================================================================
   10. Smooth Scrolling for Anchor Links
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
