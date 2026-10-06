

document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIconSun = document.getElementById('theme-icon-sun');
  const themeIconMoon = document.getElementById('theme-icon-moon');
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langLabel = document.getElementById('lang-label');
  const siteHeader = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
      if (themeIconSun) themeIconSun.style.display = 'none';
      if (themeIconMoon) themeIconMoon.style.display = 'block';
      localStorage.setItem('wavenomad-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
      if (themeIconSun) themeIconSun.style.display = 'block';
      if (themeIconMoon) themeIconMoon.style.display = 'none';
      localStorage.setItem('wavenomad-theme', 'light');
    }
  };

  const savedTheme = localStorage.getItem('wavenomad-theme') || 'light';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = html.getAttribute('data-theme') === 'dark';
      applyTheme(isDark ? 'light' : 'dark');
    });
  }

  const applyDirection = (isRtl) => {
    if (isRtl) {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
      if (langLabel) langLabel.textContent = 'RTL';
      localStorage.setItem('wavenomad-rtl', 'true');
    } else {
      html.removeAttribute('dir');
      html.setAttribute('lang', 'en');
      if (langLabel) langLabel.textContent = 'LTR';
      localStorage.setItem('wavenomad-rtl', 'false');
    }
  };

  const savedRtl = localStorage.getItem('wavenomad-rtl') === 'true';
  applyDirection(savedRtl);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const currentRtl = html.getAttribute('dir') === 'rtl';
      applyDirection(!currentRtl);
    });
  }

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

  const toursData = {
    sunset: {
      id: 'sunset',
      title: 'Sunset Drift',
      tag: 'CALM & GLASSY',
      desc: 'A calm evening paddle beneath the fading sun. Watch amber hues bounce across mirror-like water while learning tranquil glide rhythms.',
      duration: '1.5 Hours',
      difficulty: 'All Levels',
      distance: '2.4 Miles',
      group: 'Max 8',
      price: 75,
      image: 'assets/images/scenic-experience.jpg'
    },
    scenic: {
      id: 'scenic',
      title: 'Scenic Lake Tour',
      tag: 'SECRET EMERALD BAYS',
      desc: 'Explore hidden corners of the lake with an experienced guide. Glide past towering granite boulders and turquoise submerged coves.',
      duration: '2.5 Hours',
      difficulty: 'Easy-Moderate',
      distance: '4.8 Miles',
      group: 'Max 6',
      price: 95,
      image: 'assets/images/moment-cove-explore.jpg'
    },
    expedition: {
      id: 'expedition',
      title: 'Mountain Water Expedition',
      tag: 'FJORD & WILDERNESS',
      desc: 'A longer guided experience surrounded by alpine scenery. Navigate deep granite chasms, cross open lake passages, and enjoy pristine vistas.',
      duration: '4.0 Hours',
      difficulty: 'Moderate-Active',
      distance: '8.2 Miles',
      group: 'Max 5',
      price: 160,
      image: 'assets/images/home2-adventure-fjord.jpg'
    },
    private: {
      id: 'private',
      title: 'Private Water Escape',
      tag: 'CUSTOM & EXCLUSIVE',
      desc: 'A personalised experience designed around your pace. Tailor the duration, coaching intensity, and scenic stops with a dedicated private mentor.',
      duration: '2-3 Hours Custom',
      difficulty: 'Tailored',
      distance: 'Custom Pace',
      group: '1-4 Private',
      price: 220,
      image: 'assets/images/moment-aerial-view.jpg'
    }
  };

  const tourCards = document.querySelectorAll('.tour-route-card');
  const routePaths = document.querySelectorAll('.route-path-line');
  const waypoints = document.querySelectorAll('.map-waypoint-marker');

  const updateTourSelection = (tourKey) => {

    tourCards.forEach(card => {
      const matches = card.getAttribute('data-tour') === tourKey;
      card.classList.toggle('active', matches);
    });

    routePaths.forEach(path => {
      const matches = path.getAttribute('data-tour') === tourKey;
      path.classList.toggle('active', matches);
    });

    waypoints.forEach(wp => {
      const matches = wp.getAttribute('data-tour') === tourKey;
      wp.classList.toggle('active', matches);
    });
  };

  tourCards.forEach(card => {
    card.addEventListener('click', () => {
      const tour = card.getAttribute('data-tour');
      updateTourSelection(tour);
    });
  });

  waypoints.forEach(wp => {
    wp.addEventListener('click', () => {
      const tour = wp.getAttribute('data-tour');
      updateTourSelection(tour);
    });
  });

  const guidesData = [
    {
      id: 'alex',
      name: 'Alex Morgan',
      role: 'Lead Paddle Instructor',
      experience: '12+ Years On The Water',
      quote: "The best part isn't learning to stand. It's discovering what happens once you start moving.",
      stat1Val: '1,200+',
      stat1Lab: 'Sessions Guided',
      stat2Val: '8+ Yrs',
      stat2Lab: 'Teaching Exp',
      stat3Val: '100%',
      stat3Lab: 'Safety Record',
      certs: ['PSUPA Master Instructor', 'Open Water Guide', 'Wilderness First Aid'],
      image: 'assets/images/lessons-tour.jpg'
    },
    {
      id: 'marcus',
      name: 'Marcus Vance',
      role: 'Backcountry Touring Guide',
      experience: '10+ Years On The Water',
      quote: "Water teaches you humility first, then grants you unconditional freedom.",
      stat1Val: '950+',
      stat1Lab: 'Expeditions',
      stat2Val: '7 Yrs',
      stat2Lab: 'Guiding Exp',
      stat3Val: 'ACA-4',
      stat3Lab: 'Certified Lead',
      certs: ['ACA Level 4 SUP', 'Swiftwater Rescue', 'Alpine Naturalist'],
      image: 'assets/images/moment-dog-pilot.jpg'
    },
    {
      id: 'elena',
      name: 'Elena Rostova',
      role: 'Adventure & Distance Guide',
      experience: '9+ Years On The Water',
      quote: "Finding rhythm in your paddle stroke is like finding silence in the center of the wind.",
      stat1Val: '820+',
      stat1Lab: 'Tours Led',
      stat2Val: '5 Yrs',
      stat2Lab: 'WaveNomad Pro',
      stat3Val: 'Top 10',
      stat3Lab: 'Distance SUP',
      certs: ['PSUPA Flatwater & Coastal', 'Ocean Safety', 'Endurance Coach'],
      image: 'assets/images/moment-sunrise-glide.jpg'
    },
    {
      id: 'maya',
      name: 'Maya Lin',
      role: 'Private Coach & Flow Specialist',
      experience: '8+ Years On The Water',
      quote: "Balance on the board is simply listening to what the water is telling your feet.",
      stat1Val: '740+',
      stat1Lab: 'Private Clients',
      stat2Val: '6 Yrs',
      stat2Lab: 'Biomechanics',
      stat3Val: '500-HR',
      stat3Lab: 'SUP Yoga Pro',
      certs: ['SUP Yoga Alliance 500-HR', 'Biomechanics Analyst', 'USCG Master'],
      image: 'assets/images/moment-sup-yoga.jpg'
    }
  ];

  let currentGuideIndex = 0;
  const guidePhoto = document.getElementById('guide-portrait-img');
  const guideExpBadge = document.getElementById('guide-exp-badge');
  const guideRoleTitle = document.getElementById('guide-role-title');
  const guideName = document.getElementById('guide-name');
  const guideQuoteText = document.getElementById('guide-quote-text');
  const guideStat1 = document.getElementById('guide-stat-1');
  const guideStat1Lab = document.getElementById('guide-stat-1-lab');
  const guideStat2 = document.getElementById('guide-stat-2');
  const guideStat2Lab = document.getElementById('guide-stat-2-lab');
  const guideStat3 = document.getElementById('guide-stat-3');
  const guideStat3Lab = document.getElementById('guide-stat-3-lab');
  const guideCertsList = document.getElementById('guide-certs-list');
  const guideAvatarBtns = document.querySelectorAll('.guide-avatar-btn');
  const guidePrevBtn = document.getElementById('guide-prev-btn');
  const guideNextBtn = document.getElementById('guide-next-btn');

  const updateGuide = (index) => {
    currentGuideIndex = (index + guidesData.length) % guidesData.length;
    const guide = guidesData[currentGuideIndex];
    if (!guide) return;

    if (guidePhoto) {
      guidePhoto.style.opacity = '0';
      guidePhoto.style.transform = 'scale(0.97)';
      setTimeout(() => {
        guidePhoto.src = guide.image;
        guidePhoto.alt = `${guide.name} — ${guide.role}`;
        guidePhoto.style.opacity = '1';
        guidePhoto.style.transform = 'scale(1)';
      }, 200);
    }

    if (guideExpBadge) guideExpBadge.textContent = guide.experience;
    if (guideRoleTitle) guideRoleTitle.textContent = guide.role;
    if (guideName) guideName.textContent = guide.name;
    if (guideQuoteText) guideQuoteText.textContent = `"${guide.quote}"`;
    if (guideStat1) guideStat1.textContent = guide.stat1Val;
    if (guideStat1Lab) guideStat1Lab.textContent = guide.stat1Lab;
    if (guideStat2) guideStat2.textContent = guide.stat2Val;
    if (guideStat2Lab) guideStat2Lab.textContent = guide.stat2Lab;
    if (guideStat3) guideStat3.textContent = guide.stat3Val;
    if (guideStat3Lab) guideStat3Lab.textContent = guide.stat3Lab;

    if (guideCertsList) {
      guideCertsList.innerHTML = '';
      guide.certs.forEach(c => {
        const pill = document.createElement('span');
        pill.className = 'cert-pill';
        pill.textContent = `✓ ${c}`;
        guideCertsList.appendChild(pill);
      });
    }

    guideAvatarBtns.forEach((btn, idx) => {
      btn.classList.toggle('active', idx === currentGuideIndex);
    });
  };

  guideAvatarBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => updateGuide(idx));
  });

  if (guidePrevBtn) {
    guidePrevBtn.addEventListener('click', () => updateGuide(currentGuideIndex - 1));
  }

  if (guideNextBtn) {
    guideNextBtn.addEventListener('click', () => updateGuide(currentGuideIndex + 1));
  }

  const experiencePills = document.querySelectorAll('.config-group[data-group="goal"] .config-pill-btn');
  const levelPills = document.querySelectorAll('.config-group[data-group="level"] .config-pill-btn');
  const activityPills = document.querySelectorAll('.config-group[data-group="activity"] .config-pill-btn');
  const durationPills = document.querySelectorAll('.config-group[data-group="duration"] .config-pill-btn');
  
  const guestsMinusBtn = document.getElementById('guests-minus-btn');
  const guestsPlusBtn = document.getElementById('guests-plus-btn');
  const guestsCountEl = document.getElementById('guests-count');
  const livePriceEl = document.getElementById('live-booking-price');
  const bookExperienceBtn = document.getElementById('book-experience-btn');

  let currentGuests = 1;
  let currentBaseRate = 65;

  const recalculatePrice = () => {
    const activeActivity = document.querySelector('.config-group[data-group="activity"] .config-pill-btn.active');
    const activeDuration = document.querySelector('.config-group[data-group="duration"] .config-pill-btn.active');

    let base = 65;
    if (activeActivity) {
      const actVal = activeActivity.getAttribute('data-value');
      if (actVal === 'private-lesson') base = 120;
      else if (actVal === 'group-lesson') base = 65;
      else if (actVal === 'sunset-tour') base = 75;
      else if (actVal === 'scenic-tour') base = 95;
      else if (actVal === 'mountain-expedition') base = 160;
    }

    if (activeDuration) {
      const durVal = activeDuration.getAttribute('data-value');
      if (durVal === '2hr') base = Math.round(base * 1.45);
      else if (durVal === 'halfday') base = Math.round(base * 2.2);
    }

    currentBaseRate = base;
    const total = currentBaseRate * currentGuests;
    if (livePriceEl) {
      livePriceEl.textContent = total;
    }
  };

  const setupPillGroup = (pills) => {
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        recalculatePrice();
      });
    });
  };

  setupPillGroup(experiencePills);
  setupPillGroup(levelPills);
  setupPillGroup(activityPills);
  setupPillGroup(durationPills);

  if (guestsMinusBtn && guestsCountEl) {
    guestsMinusBtn.addEventListener('click', () => {
      if (currentGuests > 1) {
        currentGuests--;
        guestsCountEl.textContent = currentGuests;
        recalculatePrice();
      }
    });
  }

  if (guestsPlusBtn && guestsCountEl) {
    guestsPlusBtn.addEventListener('click', () => {
      if (currentGuests < 10) {
        currentGuests++;
        guestsCountEl.textContent = currentGuests;
        recalculatePrice();
      }
    });
  }

  recalculatePrice();

  const lessonsModal = document.getElementById('lessons-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalSummaryActivity = document.getElementById('modal-summary-activity');
  const modalSummaryGuests = document.getElementById('modal-summary-guests');
  const modalSummaryDate = document.getElementById('modal-summary-date');
  const modalSummaryPrice = document.getElementById('modal-summary-price');
  const modalForm = document.getElementById('modal-booking-form');

  if (bookExperienceBtn && lessonsModal) {
    bookExperienceBtn.addEventListener('click', () => {
      const activeActivity = document.querySelector('.config-group[data-group="activity"] .config-pill-btn.active');
      const dateInput = document.getElementById('booking-date-input');
      const timeSelect = document.getElementById('booking-time-select');

      const activityName = activeActivity ? activeActivity.textContent : 'Paddleboard Experience';
      const dateVal = dateInput && dateInput.value ? dateInput.value : 'Tomorrow';
      const timeVal = timeSelect ? timeSelect.value : '09:00 AM';
      const totalPrice = livePriceEl ? livePriceEl.textContent : '65';

      if (modalSummaryActivity) modalSummaryActivity.textContent = activityName;
      if (modalSummaryGuests) modalSummaryGuests.textContent = `${currentGuests} Guest${currentGuests > 1 ? 's' : ''}`;
      if (modalSummaryDate) modalSummaryDate.textContent = `${dateVal} (${timeVal})`;
      if (modalSummaryPrice) modalSummaryPrice.textContent = `$${totalPrice} USD`;

      lessonsModal.classList.add('open');
      lessonsModal.setAttribute('aria-hidden', 'false');
    });
  }

  if (modalCloseBtn && lessonsModal) {
    modalCloseBtn.addEventListener('click', () => {
      lessonsModal.classList.remove('open');
      lessonsModal.setAttribute('aria-hidden', 'true');
    });
  }

  if (lessonsModal) {
    lessonsModal.addEventListener('click', (e) => {
      if (e.target === lessonsModal) {
        lessonsModal.classList.remove('open');
        lessonsModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = modalForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = '✓ Booking Confirmed! We Sent Your Pass';
        submitBtn.style.background = '#10B981';
        setTimeout(() => {
          lessonsModal.classList.remove('open');
          submitBtn.textContent = 'Confirm Concierge Pass';
          submitBtn.style.background = '';
        }, 1800);
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
