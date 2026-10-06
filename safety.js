

document.addEventListener('DOMContentLoaded', () => {

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  const htmlElement = document.documentElement;

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      htmlElement.setAttribute('data-theme', 'dark');
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'block';
      localStorage.setItem('wavenomad-theme', 'dark');
    } else {
      htmlElement.removeAttribute('data-theme');
      if (sunIcon) sunIcon.style.display = 'block';
      if (moonIcon) moonIcon.style.display = 'none';
      localStorage.setItem('wavenomad-theme', 'light');
    }
  };

  const savedTheme = localStorage.getItem('wavenomad-theme') ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langLabel = document.getElementById('lang-label');

  const applyDirection = (isRtl) => {
    if (isRtl) {
      htmlElement.setAttribute('dir', 'rtl');
      htmlElement.setAttribute('lang', 'ar');
      if (langLabel) langLabel.textContent = 'RTL';
      if (langToggleBtn) {
        langToggleBtn.setAttribute('title', 'Mode: RTL (Click to switch to LTR)');
        langToggleBtn.setAttribute('aria-label', 'Switch to LTR mode');
      }
      localStorage.setItem('wavenomad-rtl', 'true');
    } else {
      htmlElement.removeAttribute('dir');
      htmlElement.setAttribute('lang', 'en');
      if (langLabel) langLabel.textContent = 'LTR';
      if (langToggleBtn) {
        langToggleBtn.setAttribute('title', 'Mode: LTR (Click to switch to RTL)');
        langToggleBtn.setAttribute('aria-label', 'Switch to RTL mode');
      }
      localStorage.setItem('wavenomad-rtl', 'false');
    }
  };

  const savedRtl = localStorage.getItem('wavenomad-rtl') === 'true';
  applyDirection(savedRtl);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const isCurrentlyRtl = htmlElement.getAttribute('dir') === 'rtl';
      applyDirection(!isCurrentlyRtl);
    });
  }

  const siteHeader = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const homeDropdownBtn = document.getElementById('home-dropdown-btn');
  const homeDropdownItem = document.getElementById('home-dropdown-item');
  const home1Option = document.getElementById('home1-option');
  const home2Option = document.getElementById('home2-option');
  const navLoginBtn = document.getElementById('nav-login-btn');

  if (siteHeader) {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

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

  if (home1Option) {
    home1Option.addEventListener('click', () => {
      if (homeDropdownItem) homeDropdownItem.classList.remove('open');
    });
  }

  if (home2Option) {
    home2Option.addEventListener('click', () => {
      if (homeDropdownItem) homeDropdownItem.classList.remove('open');
    });
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      navMenu.classList.toggle('active', isOpen);
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navMenu.querySelectorAll('.nav-link:not(.dropdown-caret)').forEach(link => {
      link.addEventListener('click', () => {
        if (!link.closest('.dropdown-menu') && link.id !== 'home-dropdown-btn') {
          navMenu.classList.remove('open', 'active');
          menuToggle.classList.remove('open', 'active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && (navMenu.classList.contains('open') || navMenu.classList.contains('active'))) {
        navMenu.classList.remove('open', 'active');
        menuToggle.classList.remove('open', 'active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (navLoginBtn) {
    navLoginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'login.html';
    });
  }

  const sensorData = {
    pier4: {
      name: 'Pier 4 Shore Basin',
      status: 'Suitable for paddling',
      statusClass: 'status-badge-live',
      temp: '22°C',
      tempSub: 'Comfortable · 2mm Shorty / Boardshorts',
      wind: '12 km/h',
      windSub: 'Southwest 210° · Gentle morning draft',
      wave: '0.5 m',
      waveSub: 'Minor rolling ripples · Glassy surface',
      vis: 'Excellent',
      visSub: '14 km Horizon · 10m depth penetration',
      quality: 'Clear',
      qualitySub: 'pH 7.4 · Grade-A Alpine Snowmelt',
      overall: 'Suitable for paddling',
      overallSub: 'All Fleet Categories Authorized'
    },
    emerald: {
      name: 'Emerald Bay Outer Buoy',
      status: 'Moderate swell · Caution advised',
      statusClass: 'status-badge-live',
      temp: '20.8°C',
      tempSub: 'Crisp thermal current · Wetsuit recommended',
      wind: '17 km/h',
      windSub: 'West-Northwest 285° · Moderate gusts',
      wave: '0.8 m',
      waveSub: 'Rhythmic rollers · Intermediate skill',
      vis: 'Very Good',
      visSub: '11 km Horizon · 8m depth penetration',
      quality: 'Pristine',
      qualitySub: 'pH 7.3 · Deep basin flow',
      overall: 'Caution Advised',
      overallSub: 'Touring & Guided Groups Only'
    },
    fjord: {
      name: 'West Shelf Sensor Mast',
      status: 'Active chop · Experienced paddlers',
      statusClass: 'status-badge-live',
      temp: '19.4°C',
      tempSub: 'Chilly deep pocket · Full neo recommended',
      wind: '24 km/h',
      windSub: 'North 010° · Offshore funnel winds',
      wave: '1.2 m',
      waveSub: 'Wind swell & whitecaps outside bay',
      vis: 'Moderate',
      visSub: '7 km Horizon · Mountain shadow',
      quality: 'Good',
      qualitySub: 'pH 7.2 · Surface aeration',
      overall: 'Challenging Channel',
      overallSub: 'Advanced Paddlers & Guides'
    }
  };

  const sensorPings = document.querySelectorAll('.radar-sensor-ping');
  const sensorNameElem = document.getElementById('active-sensor-name');
  const sensorStatusElem = document.getElementById('active-sensor-status');
  const radarTempVal = document.getElementById('radar-temp-val');
  const radarWindVal = document.getElementById('radar-wind-val');
  const radarWaveVal = document.getElementById('radar-wave-val');
  const radarVisVal = document.getElementById('radar-vis-val');
  const radarQualityVal = document.getElementById('radar-quality-val');
  const radarOverallVal = document.getElementById('radar-overall-val');

  sensorPings.forEach(ping => {
    ping.addEventListener('click', () => {
      sensorPings.forEach(p => p.classList.remove('active'));
      ping.classList.add('active');

      let key = 'pier4';
      if (ping.id === 'sensor-btn-emerald') key = 'emerald';
      else if (ping.id === 'sensor-btn-fjord') key = 'fjord';

      const data = sensorData[key];
      if (!data) return;

      if (sensorNameElem) sensorNameElem.textContent = data.name;
      if (sensorStatusElem) {
        sensorStatusElem.innerHTML = `<span class="hud-pulse-ring" style="width: 8px; height: 8px;"></span><span>${data.status}</span>`;
      }
      if (radarTempVal) radarTempVal.textContent = data.temp;
      if (radarWindVal) radarWindVal.textContent = data.wind;
      if (radarWaveVal) radarWaveVal.textContent = data.wave;
      if (radarVisVal) radarVisVal.textContent = data.vis;
      if (radarQualityVal) radarQualityVal.textContent = data.quality;
      if (radarOverallVal) radarOverallVal.textContent = data.overall;
    });
  });

  const timelineRows = document.querySelectorAll('.protocol-step-row');
  const spineFill = document.getElementById('protocol-spine-fill');

  const updateTimelineProgress = () => {
    const triggerBottom = window.innerHeight * 0.75;
    let highestActiveIndex = 0;

    timelineRows.forEach((row, idx) => {
      const top = row.getBoundingClientRect().top;
      if (top < triggerBottom) {
        row.classList.add('active');
        highestActiveIndex = idx + 1;
      } else {
        if (idx > 1) {
          row.classList.remove('active');
        }
      }
    });

    if (spineFill && timelineRows.length > 0) {
      const percentage = Math.min(100, Math.max(15, (highestActiveIndex / timelineRows.length) * 100));
      spineFill.style.height = `${percentage}%`;
    }
  };

  window.addEventListener('scroll', updateTimelineProgress, { passive: true });
  updateTimelineProgress();

  const tierButtons = {
    calm: document.getElementById('btn-state-calm'),
    moderate: document.getElementById('btn-state-moderate'),
    challenging: document.getElementById('btn-state-challenging')
  };

  const simStateLabel = document.getElementById('sim-state-label');
  const simWindBadge = document.getElementById('sim-wind-badge');
  const simWaterTypeTag = document.getElementById('sim-water-type-tag');
  const simDisplayTitle = document.getElementById('sim-display-title');
  const simSuitabilityBadge = document.getElementById('sim-suitability-badge');
  const simDisplayDesc = document.getElementById('sim-display-desc');
  const simParamWind = document.getElementById('sim-param-wind');
  const simParamWave = document.getElementById('sim-param-wave');
  const simParamSkill = document.getElementById('sim-param-skill');
  const simParamBoard = document.getElementById('sim-param-board');

  const wavePath1 = document.getElementById('wave-path-1');
  const wavePath2 = document.getElementById('wave-path-2');
  const wavePath3 = document.getElementById('wave-path-3');
  const waveCanvasBox = document.getElementById('wave-canvas-box');

  const conditionConfigs = {
    calm: {
      stateLabel: 'CALM STATE',
      windBadge: 'WIND: 4–10 KM/H',
      typeTag: 'MIRROR SHORELINE',
      title: 'Calm Conditions',
      badge: '✓ Ideal for beginners & first-timers',
      badgeColor: '#10B981',
      desc: 'Glass-like morning water with low ambient wind and minimal wake. The premier condition for effortless cruising, touring photography, sunrise yoga, and beginner skills development.',
      windParam: '0 – 12 km/h',
      waveParam: '< 0.3 m (Glass)',
      skillParam: 'All Levels Welcome',
      boardParam: 'All-Around & Touring',
      d1: 'M 0 60 C 150 40 300 80 450 50 C 600 20 750 70 900 45 L 900 180 L 0 180 Z',
      d2: 'M 0 80 C 180 55 320 95 480 75 C 640 55 780 100 900 70 L 900 180 L 0 180 Z',
      d3: 'M 0 110 C 140 95 280 120 420 105 C 560 90 700 125 900 100 L 900 180 L 0 180 Z',
      skylineGrad: 'linear-gradient(180deg, #102A43 0%, #071923 100%)'
    },
    moderate: {
      stateLabel: 'MODERATE STATE',
      windBadge: 'WIND: 13–20 KM/H',
      typeTag: 'THERMAL BREEZE & CHOP',
      title: 'Moderate Conditions',
      badge: '⚠ Suitable for experienced paddlers',
      badgeColor: '#F59E0B',
      desc: 'Afternoon thermal drafts produce textured surface ripples and light 0.4m swell. Demands dynamic knee flex, solid blade plant, and course trimming against crossbreeze.',
      windParam: '13 – 22 km/h',
      waveParam: '0.4 – 0.8 m (Chop)',
      skillParam: 'Intermediate Paddlers',
      boardParam: 'Touring & Performance',
      d1: 'M 0 45 C 120 15 250 85 390 35 C 530 0 680 85 900 30 L 900 180 L 0 180 Z',
      d2: 'M 0 65 C 160 30 310 105 460 55 C 620 15 760 110 900 50 L 900 180 L 0 180 Z',
      d3: 'M 0 95 C 130 65 290 135 440 90 C 580 50 720 130 900 80 L 900 180 L 0 180 Z',
      skylineGrad: 'linear-gradient(180deg, #0F324D 0%, #061B24 100%)'
    },
    challenging: {
      stateLabel: 'CHALLENGING STATE',
      windBadge: 'WIND: 21–32 KM/H',
      typeTag: 'HIGH WIND / CHANNEL SWELL',
      title: 'Challenging Conditions',
      badge: '⛔ Additional caution & guide escort required',
      badgeColor: '#EF4444',
      desc: 'Accelerated funnel winds creating crested whitecaps and active multi-directional wave reflection. Recommended solely for advanced endurance paddlers or guided safety flotillas.',
      windParam: '23 – 35 km/h',
      waveParam: '> 0.8 m (Whitecaps)',
      skillParam: 'Advanced / Guided Only',
      boardParam: 'High-Volume Expedition',
      d1: 'M 0 30 C 90 -10 200 95 320 15 C 440 -20 570 100 900 10 L 900 180 L 0 180 Z',
      d2: 'M 0 50 C 120 0 250 115 390 35 C 520 -10 680 120 900 30 L 900 180 L 0 180 Z',
      d3: 'M 0 80 C 110 30 260 145 410 70 C 560 20 710 140 900 60 L 900 180 L 0 180 Z',
      skylineGrad: 'linear-gradient(180deg, #1C2E3D 0%, #05141D 100%)'
    }
  };

  const setConditionTier = (tierKey) => {
    Object.keys(tierButtons).forEach(k => {
      const btn = tierButtons[k];
      if (btn) {
        if (k === tierKey) {
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
        } else {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        }
      }
    });

    const cfg = conditionConfigs[tierKey];
    if (!cfg) return;

    if (simStateLabel) simStateLabel.textContent = cfg.stateLabel;
    if (simWindBadge) simWindBadge.textContent = cfg.windBadge;
    if (simWaterTypeTag) simWaterTypeTag.textContent = cfg.typeTag;
    if (simDisplayTitle) simDisplayTitle.textContent = cfg.title;
    if (simSuitabilityBadge) {
      simSuitabilityBadge.textContent = cfg.badge;
      simSuitabilityBadge.style.color = cfg.badgeColor;
    }
    if (simDisplayDesc) simDisplayDesc.textContent = cfg.desc;
    if (simParamWind) simParamWind.textContent = cfg.windParam;
    if (simParamWave) simParamWave.textContent = cfg.waveParam;
    if (simParamSkill) simParamSkill.textContent = cfg.skillParam;
    if (simParamBoard) simParamBoard.textContent = cfg.boardParam;

    if (wavePath1) wavePath1.setAttribute('d', cfg.d1);
    if (wavePath2) wavePath2.setAttribute('d', cfg.d2);
    if (wavePath3) wavePath3.setAttribute('d', cfg.d3);

    if (waveCanvasBox) {
      waveCanvasBox.style.background = cfg.skylineGrad;
    }
  };

  Object.keys(tierButtons).forEach(k => {
    const btn = tierButtons[k];
    if (btn) {
      btn.addEventListener('click', () => setConditionTier(k));
    }
  });

  const checklistItems = document.querySelectorAll('.checklist-item');
  const readinessStatusText = document.getElementById('readiness-status-text');

  const updateChecklistStatus = () => {
    let completed = 0;
    checklistItems.forEach(item => {
      if (item.classList.contains('checked') || !item.classList.contains('unchecked')) {
        completed++;
      }
    });

    if (readinessStatusText) {
      if (completed === checklistItems.length) {
        readinessStatusText.textContent = `${completed} of ${checklistItems.length} Complete · Cleared for Launch`;
        readinessStatusText.style.color = '#10B981';
      } else {
        readinessStatusText.textContent = `${completed} of ${checklistItems.length} Complete · Action Required`;
        readinessStatusText.style.color = '#F59E0B';
      }
    }
  };

  checklistItems.forEach(item => {
    item.addEventListener('click', () => {
      const checkboxBox = item.querySelector('.checklist-checkbox-box');
      if (item.classList.contains('unchecked')) {
        item.classList.remove('unchecked');
        if (checkboxBox) {
          checkboxBox.textContent = '✓';
          checkboxBox.style.background = 'var(--primary-accent)';
          checkboxBox.style.borderColor = 'var(--primary-accent)';
        }
      } else {
        item.classList.add('unchecked');
        if (checkboxBox) {
          checkboxBox.textContent = '';
          checkboxBox.style.background = 'transparent';
          checkboxBox.style.borderColor = 'var(--border-color)';
        }
      }
      updateChecklistStatus();
    });
  });

});
