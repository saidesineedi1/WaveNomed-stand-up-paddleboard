

document.addEventListener('DOMContentLoaded', () => {

  const programsData = {
    beginner: {
      id: 'beginner',
      title: 'Beginner SUP Fundamentals',
      subtitle: 'First Stroke & Calm Water Balance',
      stageBadge: 'STAGE 01 · ACCREDITED PROGRAM',
      ratingText: '4.98 (240+ verified paddlers)',
      duration: '90 Minutes',
      ratio: 'Max 4:1 Ratio',
      level: 'Beginner (No exp.)',
      rate: 65,
      rateStr: '$65 USD',
      heroImage: 'assets/images/lesson-beginner-hero.jpg',
      synopsis: 'Eliminate all fear in minutes. Learn zero-roll stance, knee-to-feet transition drills, and smooth blade propulsion on mirror-flat waters with our patient PSUPA-certified instructors.',
      overviewTitle: 'What Makes This Lesson Transformative',
      overviewP1: 'Most beginner paddlers struggle because generic rental facilities hand them unsuitable gear and push them straight into rolling boat wake. At WaveNomad, our methodology is built around confidence-first biomechanics.',
      overviewP2: 'We start dockside with balance orientation, dry-dock stance drills, and custom paddle sizing. Once on the water in our protected calm-water lagoon, you\'ll naturally find your center of gravity without feeling tippy or unstable.',
      competencies: [
        'Zero-roll wide stance & core equilibrium',
        'Blade angle feathering & hand spacing',
        'Seated, kneeling & standing dock transitions',
        'Forward power catch & blade release',
        'Emergency stop, back-paddle & sweep turns',
        'Self-rescue & deep water remounting drills'
      ],
      curriculum: [
        {
          phase: 'PHASE 01 — DOCKSIDE FIT',
          duration: '15 Mins',
          title: 'Gear Ergonomics & Safety Briefing',
          desc: 'Paddle sizing to your exact wrist height, PFD inspection, leash attachment, and dry-land posture calibration.'
        },
        {
          phase: 'PHASE 02 — COVE LAUNCH',
          duration: '25 Mins',
          title: 'Knee-to-Feet Transitions & Zero-Roll Balance',
          desc: 'Launch into the glassy lagoon. Master the 3-point contact drill to transition from kneeling to a stable standing stance.'
        },
        {
          phase: 'PHASE 03 — BLADE MECHANICS',
          duration: '35 Mins',
          title: 'Efficient Forward Stroke & Core Rotation',
          desc: 'Engage large back and core muscles instead of tiring your arms. Learn the power triangle and feathering.'
        },
        {
          phase: 'PHASE 04 — OPEN WATER DRIFT',
          duration: '15 Mins',
          title: 'Guided Cove Cruise & Photo Airdrop',
          desc: 'Practice your new skills on a serene scenic cruise around Emerald Cove, with 4K action photos captured by your coach.'
        }
      ],
      stageCardPill: 'STAGE 01 · ACCREDITED',
      ratingShort: '4.98 (240+)',
      coachChipRole: 'Head PSUPA Trainer · Pier 4 Staging',
      coach: {
        name: 'Marcus Vance',
        role: 'Head of Water Instruction · PSUPA Level 3 Master Trainer',
        quote: '"Once you realize the water supports you rather than opposes you, balance ceases to be effort and becomes second nature."',
        avatar: 'assets/images/scenic-experience.jpg',
        exp: '12+ Years Coaching',
        students: '2,400+ Paddlers',
        safety: '100% Safety Record'
      }
    },

    intermediate: {
      id: 'intermediate',
      title: 'Intermediate Technique & Glide Clinic',
      subtitle: 'Stroke Efficiency & Dynamic Maneuvering',
      stageBadge: 'STAGE 02 · MOST POPULAR CLINIC',
      stageCardPill: 'STAGE 02 · INTERMEDIATE',
      ratingShort: '5.0 (180+)',
      coachChipRole: 'Expedition Specialist · Pier 4 Staging',
      ratingText: '5.0 (180+ verified paddlers)',
      duration: '2.0 Hours',
      ratio: 'Max 3:1 Ratio',
      level: 'Intermediate (Some exp.)',
      rate: 95,
      rateStr: '$95 USD',
      heroImage: 'assets/images/lesson-intermediate-hero.jpg',
      synopsis: 'For paddlers ready to eliminate arm fatigue, increase glide speed, and confidently handle wind, boat wake, and open-water swell using core-driven power stroke biomechanics.',
      overviewTitle: 'Unlock True Hydrodynamic Efficiency',
      overviewP1: 'If your shoulders ache after 45 minutes of paddling, you\'re pulling with your arms instead of driving through your core and hips. This clinic completely recalibrates your stroke geometry.',
      overviewP2: 'Under direct coaching with high-modulus carbon race paddles, you\'ll learn how to "plant" the blade in stationary water and pull the board cleanly past it, gaining up to 40% more glide distance per stroke.',
      competencies: [
        'Cantilever power catch & hip hinge drive',
        'Step-back pivot turns & tail-sink buoy rounding',
        'Cross-bow rudders & fast heading corrections',
        'Reading wind lines, chop angles & thermal currents',
        'Pacing cadences for high-mileage lake touring',
        'Rough-water stability & wake dampening'
      ],
      curriculum: [
        {
          phase: 'PHASE 01 — BIOMECHANICS AUDIT',
          duration: '20 Mins',
          title: 'Stroke Diagnostics & Blade Angle Tuning',
          desc: 'Dockside video capture of your current stroke. Identifying energy leaks, improper reach, and arm-dominant pulling.'
        },
        {
          phase: 'PHASE 02 — CORE POWER CATCH',
          duration: '40 Mins',
          title: 'Cantilever Forward Catch & Torso Rotation',
          desc: 'Re-engineering your stroke: early vertical paddle shaft, deep blade immersion, and abdominal power transfer.'
        },
        {
          phase: 'PHASE 03 — AGILITY MANEUVERS',
          duration: '35 Mins',
          title: 'Step-Back Pivot Turns & Wake Handling',
          desc: 'Shifting weight to the kick-pad for rapid 180° rotations, handling boat wakes at 45° angles without losing speed.'
        },
        {
          phase: 'PHASE 04 — CADENCE ENDURANCE',
          duration: '25 Mins',
          title: 'Interval Gliding & Open-Water Route',
          desc: 'High-speed distance tracking across the point with real-time biometric and cadence feedback from your instructor.'
        }
      ],
      coach: {
        name: 'Elena Rostova',
        role: 'Senior Expedition Specialist · 2x Tahoe Alpine Cup Champion',
        quote: '"Paddling fast isn\'t about brute force—it\'s about quiet water. When your blade enters without a splash, all energy becomes forward velocity."',
        avatar: 'assets/images/lessons-tour.jpg',
        exp: '9+ Years Coaching',
        students: '1,600+ Paddlers',
        safety: '100% Safety Record'
      }
    },

    advanced: {
      id: 'advanced',
      title: 'Private Masterclass Coaching',
      subtitle: 'Bespoke 1-on-1 Elite Mentorship',
      stageBadge: 'STAGE 03 / ELITE · ALL LEVELS WELCOME',
      stageCardPill: 'STAGE 03 · 1-ON-1 ELITE',
      ratingShort: '5.0 (95+)',
      coachChipRole: 'Master PSUPA Trainer · Pier 4 Staging',
      ratingText: '5.0 (95+ verified paddlers)',
      duration: '2.5 Hours',
      ratio: '1:1 Private Mentorship',
      level: 'Tailored to You',
      rate: 145,
      rateStr: '$145 USD',
      heroImage: 'assets/images/lesson-advanced-hero.jpg',
      synopsis: 'Private 1-on-1 mentorship with a senior PSUPA Master Trainer. Includes 4K stroke biomechanics video review, downwind routing, high-performance displacement boards, and custom expedition staging.',
      overviewTitle: 'Your Personal Masterclass on the Water',
      overviewP1: 'Whether you are an ambitious beginner wanting rapid acceleration or an experienced paddler training for endurance crossings, our private masterclass gives you 150 minutes of undivided elite attention.',
      overviewP2: 'Your coach customizes every drill to your exact physiology, comfort level, and personal goals. Includes full high-modulus carbon racing board demo options and personalized video analysis.',
      competencies: [
        'Dedicated 1-on-1 coaching adapted to your exact goals',
        '4K high-frame-rate video stroke biomechanics review',
        'Downwind swell surfing & wave catching',
        'GPS stroke rate telemetry & heart-rate pacing',
        'Narrow displacement race board mastery',
        'Wilderness backcountry route navigation'
      ],
      curriculum: [
        {
          phase: 'PHASE 01 — BESPOKE PLANNING',
          duration: '20 Mins',
          title: 'Goal Discovery & Fleet Custom Fitting',
          desc: 'One-on-one briefing over espresso at the dock lounge. Custom selection of ultra-light carbon displacement boards.'
        },
        {
          phase: 'PHASE 02 — 4K VIDEO ANALYSIS',
          duration: '45 Mins',
          title: 'Hydrodynamic Stroke Biomechanics',
          desc: 'High-speed 4K camera filming from chase craft, analyzing catch depth, blade slip, and hip kinetic chain.'
        },
        {
          phase: 'PHASE 03 — EXPEDITION TECHNIQUE',
          duration: '55 Mins',
          title: 'High-Performance Open Water Mastery',
          desc: 'Executing specialized drills: downwind surfing, bow steering, drafting, and navigating rough alpine chop.'
        },
        {
          phase: 'PHASE 04 — DEBRIEF & MEDIA',
          duration: '30 Mins',
          title: 'Video Debrief & Progression Roadmap',
          desc: 'Detailed slow-motion video review in the Pier 4 lounge, personalized homework drills, and raw 4K media airdrop.'
        }
      ],
      coach: {
        name: 'Kai Lindqvist',
        role: 'Master PSUPA Trainer & Ultralight Expedition Pioneer',
        quote: '"In 1-on-1 coaching, we shave hours of frustration off your learning curve. A minor grip adjustment or hip tilt creates immediate magic."',
        avatar: 'assets/images/home2-adventure-fjord.jpg',
        exp: '15+ Years Coaching',
        students: '3,200+ Paddlers',
        safety: '100% Safety Record'
      }
    }
  };

  const breadcrumbCurrentLabel = document.getElementById('breadcrumb-current-label');
  const programPills = document.querySelectorAll('.program-pill-btn');

  const heroDynamicImage = document.getElementById('hero-dynamic-image');
  const heroCardStagePill = document.getElementById('hero-card-stage-pill');
  const heroCardRatingText = document.getElementById('hero-card-rating-text');
  const heroCardCoachAvatar = document.getElementById('hero-card-coach-avatar');
  const heroCardCoachName = document.getElementById('hero-card-coach-name');
  const heroCardCoachRole = document.getElementById('hero-card-coach-role');

  const heroStageBadge = document.getElementById('hero-stage-badge');
  const heroRatingText = document.getElementById('hero-rating-text');
  const heroMainTitle = document.getElementById('hero-main-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroLeadSynopsis = document.getElementById('hero-lead-synopsis');
  const metricDuration = document.getElementById('metric-duration');
  const metricRatio = document.getElementById('metric-ratio');
  const metricLevel = document.getElementById('metric-level');
  const metricPrice = document.getElementById('metric-price');
  const btnHeroReserveCta = document.getElementById('btn-hero-reserve-cta');

  const overviewTitle = document.getElementById('overview-title');
  const overviewDesc = document.getElementById('overview-desc');
  const competenciesContainer = document.getElementById('competencies-container');

  const curriculumTimelineContainer = document.getElementById('curriculum-timeline-container');

  const coachAvatarImg = document.getElementById('coach-avatar-img');
  const coachName = document.getElementById('coach-name');
  const coachRole = document.getElementById('coach-role');
  const coachQuote = document.getElementById('coach-quote');

  const widgetProgramName = document.getElementById('widget-program-name');
  const widgetDateInput = document.getElementById('widget-date-input');
  const widgetTimeSelect = document.getElementById('widget-time-select');
  const stepperMinusBtn = document.getElementById('stepper-minus-btn');
  const stepperPlusBtn = document.getElementById('stepper-plus-btn');
  const stepperCountVal = document.getElementById('stepper-count-val');
  const widgetRateLabel = document.getElementById('widget-rate-label');
  const widgetSubtotalVal = document.getElementById('widget-subtotal-val');
  const widgetTotalVal = document.getElementById('widget-total-val');
  const btnOpenReserveModal = document.getElementById('btn-open-reserve-modal');

  const reserveModal = document.getElementById('reserve-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalSummaryProgram = document.getElementById('modal-summary-program');
  const modalSummaryGuests = document.getElementById('modal-summary-guests');
  const modalSummaryDatetime = document.getElementById('modal-summary-datetime');
  const modalSummaryPrice = document.getElementById('modal-summary-price');
  const reservationModalForm = document.getElementById('reservation-modal-form');
  const modalSuccessState = document.getElementById('modal-success-state');
  const btnDoneModal = document.getElementById('btn-done-modal');

  const switchProgramBtns = document.querySelectorAll('.switch-program-btn');

  let currentProgramId = 'beginner';
  let guestCount = 1;

  if (widgetDateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    widgetDateInput.value = `${yyyy}-${mm}-${dd}`;
    widgetDateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  const renderProgram = (programId) => {
    const data = programsData[programId] || programsData.beginner;
    currentProgramId = data.id;

    programPills.forEach(pill => {
      const isMatch = pill.getAttribute('data-lesson-id') === currentProgramId;
      pill.classList.toggle('active', isMatch);
      pill.setAttribute('aria-selected', isMatch);
    });

    if (breadcrumbCurrentLabel) {
      breadcrumbCurrentLabel.textContent = data.title;
    }

    if (heroDynamicImage) {
      heroDynamicImage.style.opacity = '0.3';
      setTimeout(() => {
        heroDynamicImage.src = data.heroImage;
        heroDynamicImage.style.opacity = '1';
      }, 150);
    }

    if (heroCardStagePill) heroCardStagePill.textContent = data.stageCardPill || data.stageBadge;
    if (heroCardRatingText) heroCardRatingText.textContent = data.ratingShort || '4.98 (240+)';
    if (heroCardCoachAvatar) heroCardCoachAvatar.src = data.coach.avatar;
    if (heroCardCoachName) heroCardCoachName.textContent = data.coach.name;
    if (heroCardCoachRole) heroCardCoachRole.textContent = data.coachChipRole || `${data.coach.name.split(' ')[0]}'s Staging · Pier 4`;

    if (heroStageBadge) heroStageBadge.textContent = data.stageBadge;
    if (heroRatingText) heroRatingText.textContent = data.ratingText;
    if (heroMainTitle) heroMainTitle.textContent = data.title;
    if (heroSubtitle) heroSubtitle.textContent = data.subtitle;
    if (heroLeadSynopsis) heroLeadSynopsis.textContent = data.synopsis;

    if (metricDuration) metricDuration.textContent = data.duration;
    if (metricRatio) metricRatio.textContent = data.ratio;
    if (metricLevel) metricLevel.textContent = data.level;
    if (metricPrice) metricPrice.textContent = data.rateStr;

    if (overviewTitle) overviewTitle.textContent = data.overviewTitle;
    if (overviewDesc) {
      overviewDesc.innerHTML = `<p>${data.overviewP1}</p><p>${data.overviewP2}</p>`;
    }

    if (competenciesContainer) {
      competenciesContainer.innerHTML = '';
      data.competencies.forEach(comp => {
        const item = document.createElement('div');
        item.className = 'competency-item';
        item.innerHTML = `
          <span class="comp-check" aria-hidden="true">✓</span>
          <span class="comp-text">${comp}</span>
        `;
        competenciesContainer.appendChild(item);
      });
    }

    if (curriculumTimelineContainer) {
      curriculumTimelineContainer.innerHTML = '';
      data.curriculum.forEach(step => {
        const item = document.createElement('div');
        item.className = 'timeline-step-item';
        item.innerHTML = `
          <span class="timeline-step-dot" aria-hidden="true"></span>
          <div class="timeline-header-row">
            <span class="timeline-phase-label">${step.phase}</span>
            <span class="timeline-duration-badge">${step.duration}</span>
          </div>
          <h4 class="timeline-title">${step.title}</h4>
          <p class="timeline-desc">${step.desc}</p>
        `;
        curriculumTimelineContainer.appendChild(item);
      });
    }

    if (coachAvatarImg) coachAvatarImg.src = data.coach.avatar;
    if (coachName) coachName.textContent = data.coach.name;
    if (coachRole) coachRole.textContent = data.coach.role;
    if (coachQuote) coachQuote.textContent = data.coach.quote;

    if (widgetProgramName) widgetProgramName.textContent = data.title;
    updateWidgetPricing();
  };

  const updateWidgetPricing = () => {
    const data = programsData[currentProgramId] || programsData.beginner;
    const total = data.rate * guestCount;

    if (widgetRateLabel) {
      widgetRateLabel.textContent = `$${data.rate} × ${guestCount} Paddler${guestCount > 1 ? 's' : ''}`;
    }
    if (widgetSubtotalVal) {
      widgetSubtotalVal.textContent = `$${total.toFixed(2)}`;
    }
    if (widgetTotalVal) {
      widgetTotalVal.textContent = `$${total} USD`;
    }
  };

  if (stepperMinusBtn && stepperCountVal) {
    stepperMinusBtn.addEventListener('click', () => {
      if (guestCount > 1) {
        guestCount--;
        stepperCountVal.textContent = guestCount;
        updateWidgetPricing();
      }
    });
  }

  if (stepperPlusBtn && stepperCountVal) {
    stepperPlusBtn.addEventListener('click', () => {
      if (guestCount < 12) {
        guestCount++;
        stepperCountVal.textContent = guestCount;
        updateWidgetPricing();
      }
    });
  }

  programPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const targetId = pill.getAttribute('data-lesson-id');
      renderProgram(targetId);

      const newUrl = `${window.location.pathname}?lesson=${targetId}`;
      window.history.replaceState({ lesson: targetId }, '', newUrl);
    });
  });

  switchProgramBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      renderProgram(targetId);
      const newUrl = `${window.location.pathname}?lesson=${targetId}`;
      window.history.replaceState({ lesson: targetId }, '', newUrl);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  if (btnHeroReserveCta) {
    btnHeroReserveCta.addEventListener('click', () => {
      if (btnOpenReserveModal) {
        btnOpenReserveModal.click();
      } else if (reserveModal) {
        reserveModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        faqItems.forEach(other => other.classList.remove('active'));

        if (!isActive) {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
        } else {
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });

  if (btnOpenReserveModal && reserveModal) {
    btnOpenReserveModal.addEventListener('click', () => {
      const data = programsData[currentProgramId] || programsData.beginner;
      const dateVal = widgetDateInput && widgetDateInput.value ? widgetDateInput.value : 'Tomorrow';
      const timeVal = widgetTimeSelect ? widgetTimeSelect.value : '10:00 AM';
      const totalAmount = data.rate * guestCount;

      if (modalSummaryProgram) modalSummaryProgram.textContent = data.title;
      if (modalSummaryGuests) modalSummaryGuests.textContent = `${guestCount} Paddler${guestCount > 1 ? 's' : ''}`;
      if (modalSummaryDatetime) modalSummaryDatetime.textContent = `${dateVal} at ${timeVal}`;
      if (modalSummaryPrice) modalSummaryPrice.textContent = `$${totalAmount} USD`;

      if (reservationModalForm) reservationModalForm.style.display = 'block';
      if (modalSuccessState) modalSuccessState.style.display = 'none';

      reserveModal.classList.add('open');
      reserveModal.setAttribute('aria-hidden', 'false');
    });
  }

  if (modalCloseBtn && reserveModal) {
    modalCloseBtn.addEventListener('click', () => {
      reserveModal.classList.remove('open');
      reserveModal.setAttribute('aria-hidden', 'true');
    });
  }

  if (reserveModal) {
    reserveModal.addEventListener('click', (e) => {
      if (e.target === reserveModal) {
        reserveModal.classList.remove('open');
        reserveModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  if (reservationModalForm) {
    reservationModalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = reservationModalForm.querySelector('.btn-submit-pass');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Processing Pass...</span>';
      }

      setTimeout(() => {
        if (reservationModalForm) reservationModalForm.style.display = 'none';
        if (modalSuccessState) modalSuccessState.style.display = 'block';
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Issue My Concierge Water Pass</span><span aria-hidden="true">→</span>';
        }
      }, 700);
    });
  }

  if (btnDoneModal && reserveModal) {
    btnDoneModal.addEventListener('click', () => {
      reserveModal.classList.remove('open');
      reserveModal.setAttribute('aria-hidden', 'true');
    });
  }

  const urlParams = new URLSearchParams(window.location.search);
  const requestedLesson = urlParams.get('lesson');
  if (requestedLesson && programsData[requestedLesson]) {
    renderProgram(requestedLesson);
  } else {
    renderProgram('beginner');
  }

  const siteHeader = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (siteHeader) {
      if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  const homeDropdownItem = document.getElementById('home-dropdown-item');
  const homeDropdownBtn = document.getElementById('home-dropdown-btn');

  if (homeDropdownBtn && homeDropdownItem) {
    homeDropdownBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = homeDropdownItem.classList.toggle('open');
      homeDropdownBtn.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (!homeDropdownItem.contains(e.target)) {
        homeDropdownItem.classList.remove('open');
        homeDropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('wavenomad-theme', theme);
    if (theme === 'dark') {
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'block';
    } else {
      if (sunIcon) sunIcon.style.display = 'block';
      if (moonIcon) moonIcon.style.display = 'none';
    }
  };

  const savedTheme = localStorage.getItem('wavenomad-theme') || 'light';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langLabel = document.getElementById('lang-label');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      if (currentDir === 'rtl') {
        document.documentElement.setAttribute('dir', 'ltr');
        if (langLabel) langLabel.textContent = 'LTR';
      } else {
        document.documentElement.setAttribute('dir', 'rtl');
        if (langLabel) langLabel.textContent = 'RTL';
      }
    });
  }

  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const navLoginBtn = document.getElementById('nav-login-btn');
  if (navLoginBtn) {
    navLoginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'login.html';
    });
  }

});
