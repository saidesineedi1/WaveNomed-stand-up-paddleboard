

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
      const currentTheme = html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  const applyDirection = (isRtl) => {
    if (isRtl) {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
      if (langLabel) langLabel.textContent = 'RTL';
      if (langToggleBtn) {
        langToggleBtn.setAttribute('title', 'Mode: RTL (Click to switch to LTR)');
        langToggleBtn.setAttribute('aria-label', 'Switch to LTR mode');
      }
      localStorage.setItem('wavenomad-rtl', 'true');
    } else {
      html.removeAttribute('dir');
      html.setAttribute('lang', 'en');
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
      const isRtl = html.getAttribute('dir') === 'rtl';
      applyDirection(!isRtl);
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
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  const homeDropdownItem = document.getElementById('home-dropdown-item');
  const homeDropdownBtn = document.getElementById('home-dropdown-btn');
  if (homeDropdownBtn && homeDropdownItem) {
    homeDropdownBtn.addEventListener('click', (e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        homeDropdownItem.classList.toggle('active');
      }
    });
  }

  const boardsData = {
    allround: {
      id: 'allround',
      name: "The Horizon All-Round 10'6\"",
      categoryTag: "ALL-ROUND DISCIPLINE",
      badge: "MOST POPULAR CRUISER",
      image: "assets/images/rentals-board-allround.jpg",
      desc: "Stable, versatile and perfect for relaxed paddling. Designed with an ultra-buoyant volume profile, soft diamond-traction deck pad, and effortless glide across glass and light chop.",
      capacity: "1 Person (310 lbs)",
      skill: "Beginner to All",
      length: "10'6\" × 32\"",
      stability: "9.6 / 10",
      stabilityPercent: "96%",
      price: "35",
      priceMultiplier: 1.0
    },
    touring: {
      id: 'touring',
      name: "The Expedition Touring 12'6\"",
      categoryTag: "LONG DISTANCE DISPLACEMENT",
      badge: "ALPINE EXPEDITION CHOICE",
      image: "assets/images/rentals-board-touring.jpg",
      desc: "Pointed displacement prow and recessed standing cockpit built for covering high mileage effortlessly. Complete with dual bungee cargo nets for mountain bivy kits.",
      capacity: "1-2 Persons (380 lbs)",
      skill: "Intermediate to Advanced",
      length: "12'6\" × 30\"",
      stability: "8.8 / 10",
      stabilityPercent: "88%",
      price: "50",
      priceMultiplier: 1.2
    },
    performance: {
      id: 'performance',
      name: "The Apex Carbon Race 14'0\"",
      categoryTag: "SPEED & ULTRA-EFFICIENCY",
      badge: "AEROSPACE MONOCOQUE CARBON",
      image: "assets/images/rentals-board-performance.jpg",
      desc: "Razor-sharp hydrodynamic water-piercing nose with narrow 25\" beam. Maximum glide speed with single-stroke propulsion and competition US-Box carbon fin.",
      capacity: "1 Person (240 lbs)",
      skill: "Advanced Explorers",
      length: "14'0\" × 25\"",
      stability: "7.6 / 10",
      stabilityPercent: "76%",
      price: "65",
      priceMultiplier: 1.35
    },
    beginner: {
      id: 'beginner',
      name: "The Haven Oasis Cruiser 10'8\"",
      categoryTag: "MAXIMUM STABILITY CRUISER",
      badge: "EFFORTLESS FIRST-TIME GLIDE",
      image: "assets/images/rentals-board-beginner.jpg",
      desc: "Extra-wide 34\" beam and non-slip full-length EVA deck cushion. Designed for family outings, calm morning lake yoga, and first-time confidence on pristine water.",
      capacity: "1-2 Persons (350 lbs)",
      skill: "Beginner Friendly",
      length: "10'8\" × 34\"",
      stability: "9.9 / 10",
      stabilityPercent: "99%",
      price: "30",
      priceMultiplier: 0.95
    },
    premium: {
      id: 'premium',
      name: "The Vanguard Heritage Edition 11'6\"",
      categoryTag: "LUXURY BESPOKE CRAFT",
      badge: "INLAID TEAK & GOLD ANODIZED",
      image: "assets/images/rentals-board-premium.jpg",
      desc: "Master-crafted real teak wood deck with exposed carbon weave rails and hand-stitched leather grab handles. The pinnacle of alpine lake craftsmanship.",
      capacity: "1 Person (330 lbs)",
      skill: "All Skill Levels",
      length: "11'6\" × 31\"",
      stability: "9.4 / 10",
      stabilityPercent: "94%",
      price: "75",
      priceMultiplier: 1.5
    }
  };

  const boardKeys = Object.keys(boardsData);
  let currentBoardIndex = 0;

  const categoryPills = document.querySelectorAll('.category-pill-btn');
  const thumbBtns = document.querySelectorAll('.thumb-btn');
  const featuredImg = document.getElementById('featured-board-img');
  const featuredBadge = document.getElementById('featured-board-badge');
  const featuredCategoryTag = document.getElementById('featured-board-category-tag');
  const featuredName = document.getElementById('featured-board-name');
  const featuredDesc = document.getElementById('featured-board-desc');
  const featuredCapacity = document.getElementById('featured-board-capacity');
  const featuredSkill = document.getElementById('featured-board-skill');
  const featuredLength = document.getElementById('featured-board-length');
  const featuredStability = document.getElementById('featured-board-stability');
  const featuredStabilityFill = document.getElementById('featured-stability-fill');
  const featuredPrice = document.getElementById('featured-board-price');
  const reserveBoardBtn = document.getElementById('reserve-board-btn');
  const prevBoardBtn = document.getElementById('board-prev-btn');
  const nextBoardBtn = document.getElementById('board-next-btn');

  const updateShowroomBoard = (key, animate = true) => {
    const data = boardsData[key];
    if (!data) return;

    currentBoardIndex = boardKeys.indexOf(key);

    categoryPills.forEach(pill => {
      const isSelected = pill.getAttribute('data-category') === key;
      pill.classList.toggle('active', isSelected);
      pill.setAttribute('aria-selected', isSelected);
    });

    thumbBtns.forEach(thumb => {
      thumb.classList.toggle('active', thumb.getAttribute('data-category') === key);
    });

    if (animate && featuredImg) {
      featuredImg.style.opacity = '0';
      featuredImg.style.transform = 'scale(0.97)';
      
      setTimeout(() => {
        featuredImg.src = data.image;
        featuredImg.alt = data.name;
        if (featuredBadge) featuredBadge.textContent = data.badge;
        if (featuredCategoryTag) featuredCategoryTag.textContent = data.categoryTag;
        if (featuredName) featuredName.textContent = data.name;
        if (featuredDesc) featuredDesc.textContent = data.desc;
        if (featuredCapacity) featuredCapacity.textContent = data.capacity;
        if (featuredSkill) featuredSkill.textContent = data.skill;
        if (featuredLength) featuredLength.textContent = data.length;
        if (featuredStability) featuredStability.textContent = data.stability;
        if (featuredStabilityFill) featuredStabilityFill.style.width = data.stabilityPercent;
        if (featuredPrice) featuredPrice.textContent = data.price;
        if (reserveBoardBtn) reserveBoardBtn.setAttribute('data-board-id', data.id);

        featuredImg.style.opacity = '1';
        featuredImg.style.transform = 'scale(1)';
      }, 250);
    } else {
      if (featuredImg) featuredImg.src = data.image;
      if (featuredBadge) featuredBadge.textContent = data.badge;
      if (featuredCategoryTag) featuredCategoryTag.textContent = data.categoryTag;
      if (featuredName) featuredName.textContent = data.name;
      if (featuredDesc) featuredDesc.textContent = data.desc;
      if (featuredCapacity) featuredCapacity.textContent = data.capacity;
      if (featuredSkill) featuredSkill.textContent = data.skill;
      if (featuredLength) featuredLength.textContent = data.length;
      if (featuredStability) featuredStability.textContent = data.stability;
      if (featuredStabilityFill) featuredStabilityFill.style.width = data.stabilityPercent;
      if (featuredPrice) featuredPrice.textContent = data.price;
      if (reserveBoardBtn) reserveBoardBtn.setAttribute('data-board-id', data.id);
    }
  };

  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const cat = pill.getAttribute('data-category');
      updateShowroomBoard(cat);
    });
  });

  thumbBtns.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const cat = thumb.getAttribute('data-category');
      updateShowroomBoard(cat);
    });
  });

  if (prevBoardBtn) {
    prevBoardBtn.addEventListener('click', () => {
      currentBoardIndex = (currentBoardIndex - 1 + boardKeys.length) % boardKeys.length;
      updateShowroomBoard(boardKeys[currentBoardIndex]);
    });
  }

  if (nextBoardBtn) {
    nextBoardBtn.addEventListener('click', () => {
      currentBoardIndex = (currentBoardIndex + 1) % boardKeys.length;
      updateShowroomBoard(boardKeys[currentBoardIndex]);
    });
  }

  const detailBoardWrap = document.getElementById('detail-board-wrap');
  const hotspotPins = document.querySelectorAll('.board-hotspot-pin');
  const specCards = document.querySelectorAll('.spec-callout-card');

  const highlightSpec = (specId) => {
    hotspotPins.forEach(pin => {
      pin.classList.toggle('active', pin.getAttribute('data-spec') === specId);
    });
    specCards.forEach(card => {
      card.classList.toggle('active', card.getAttribute('data-spec') === specId);
    });
  };

  hotspotPins.forEach(pin => {
    pin.addEventListener('mouseenter', () => highlightSpec(pin.getAttribute('data-spec')));
    pin.addEventListener('click', () => highlightSpec(pin.getAttribute('data-spec')));
  });

  specCards.forEach(card => {
    card.addEventListener('mouseenter', () => highlightSpec(card.getAttribute('data-spec')));
    card.addEventListener('click', () => highlightSpec(card.getAttribute('data-spec')));
  });

  if (detailBoardWrap && window.innerWidth > 992) {
    detailBoardWrap.addEventListener('mousemove', (e) => {
      const rect = detailBoardWrap.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -(y / rect.height) * 10;
      const rotateY = (x / rect.width) * 10;
      detailBoardWrap.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    detailBoardWrap.addEventListener('mouseleave', () => {
      detailBoardWrap.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
    });
  }

  const plansData = {
    '1hr': {
      tierName: '1 HOUR · RAPID SESSION',
      price: '30',
      avail: '🟢 High Availability · 22 Boards on Dock',
      desc: 'Perfect for a brisk morning fitness session, quick mirror cove exploration, or building early stand-up paddle confidence.',
      btnText: 'Reserve for 1 Hour →',
      statTime: '1 hr',
      statDistance: '1–2 mi',
      statWindow: '7–9 AM'
    },
    '2hr': {
      tierName: '2 HOURS · LAKE DISCOVERY',
      price: '45',
      avail: '🟢 High Availability · 18 Boards on Dock',
      desc: 'Ideal for paddling to Granite Cove and Emerald Bay, enjoying a restorative swim, and capturing reflective photographs in tranquil morning or sunset light.',
      btnText: 'Reserve for 2 Hours →',
      statTime: '2 hrs',
      statDistance: '4–6 mi',
      statWindow: '6–10 AM'
    },
    'halfday': {
      tierName: 'HALF DAY (4 HOURS) · MOUNTAIN EXPLORER',
      price: '75',
      avail: '🟡 Moderate Availability · 12 Boards Remaining',
      desc: 'Cruise along the Sierra shoreline, explore isolated rock islands, moor at boulder beaches for lunch, and return at your own unhurried pace.',
      btnText: 'Reserve Half-Day Pass →',
      statTime: '4 hrs',
      statDistance: '8–14 mi',
      statWindow: '8 AM–12 PM'
    },
    'fullday': {
      tierName: 'FULL DAY (8+ HOURS) · DAWN-TO-DUSK EXPEDITION',
      price: '110',
      avail: '🟢 High Availability · 10 Boards on Dock',
      desc: 'The ultimate freedom. Paddle from dawn alpenglow through noon glassy narrows to sunset golden hour. Includes spare battery pack and deluxe cooler deck mount.',
      btnText: 'Reserve Full-Day Pass →',
      statTime: '8+ hrs',
      statDistance: '20–30 mi',
      statWindow: 'Sunrise–Sunset'
    }
  };

  const durationTabs = document.querySelectorAll('.duration-tab-btn');
  const planTierName = document.getElementById('plan-tier-name');
  const planAvailText = document.getElementById('plan-avail-text');
  const planPriceVal = document.getElementById('plan-price-val');
  const planExperienceDesc = document.getElementById('plan-experience-desc');
  const planBtnText = document.getElementById('plan-btn-text');
  const planStatTime = document.getElementById('plan-stat-time');
  const planStatDistance = document.getElementById('plan-stat-distance');
  const planStatWindow = document.getElementById('plan-stat-window');

  let activeDuration = '2hr';

  const updateDurationPlan = (durationKey) => {
    const data = plansData[durationKey];
    if (!data) return;

    activeDuration = durationKey;

    durationTabs.forEach(tab => {
      const isSelected = tab.getAttribute('data-duration') === durationKey;
      tab.classList.toggle('active', isSelected);
      tab.setAttribute('aria-selected', isSelected);
    });

    if (planTierName) planTierName.textContent = data.tierName;
    if (planAvailText) planAvailText.textContent = data.avail;
    if (planPriceVal) planPriceVal.textContent = data.price;
    if (planExperienceDesc) planExperienceDesc.textContent = data.desc;
    if (planBtnText) planBtnText.textContent = data.btnText;
    if (planStatTime) planStatTime.textContent = data.statTime;
    if (planStatDistance) planStatDistance.textContent = data.statDistance;
    if (planStatWindow) planStatWindow.textContent = data.statWindow;
  };

  durationTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const dur = tab.getAttribute('data-duration');
      updateDurationPlan(dur);
    });
  });

  const waterlineFill = document.getElementById('waterline-fill');
  const journeySection = document.getElementById('journey');

  if (waterlineFill && journeySection) {
    const onScrollWaterline = () => {
      const rect = journeySection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.min(Math.max((windowHeight - rect.top) / (rect.height + 200), 0.15), 1);
        waterlineFill.style.width = `${progress * 100}%`;
      }
    };
    window.addEventListener('scroll', onScrollWaterline, { passive: true });
    onScrollWaterline();
  }

  const reservationModal = document.getElementById('reservation-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const rentalConfigForm = document.getElementById('rental-config-form');
  const modalBoardSelect = document.getElementById('modal-board-select');
  const modalDurationRadios = document.querySelectorAll('input[name="modal-duration"]');
  const modalDateInput = document.getElementById('modal-date-input');
  const summaryPassType = document.getElementById('summary-pass-type');
  const summaryTotalPrice = document.getElementById('summary-total-price');
  const modalSuccessBox = document.getElementById('modal-success-box');
  const successDoneBtn = document.getElementById('success-done-btn');

  const planReserveBtn = document.getElementById('plan-reserve-btn');
  const finalReserveBtn = document.getElementById('final-reserve-btn');

  if (modalDateInput) {
    const today = new Date().toISOString().split('T')[0];
    modalDateInput.value = today;
    modalDateInput.min = today;
  }

  const openReservationModal = (preferredBoard = null, preferredDuration = null) => {
    if (preferredBoard && modalBoardSelect) {
      modalBoardSelect.value = preferredBoard;
    }
    if (preferredDuration) {
      const radio = document.querySelector(`input[name="modal-duration"][value="${preferredDuration}"]`);
      if (radio) radio.checked = true;
    } else {
      const activeRadio = document.querySelector(`input[name="modal-duration"][value="${activeDuration}"]`);
      if (activeRadio) activeRadio.checked = true;
    }

    if (modalSuccessBox) modalSuccessBox.style.display = 'none';
    if (rentalConfigForm) rentalConfigForm.style.display = 'flex';

    calculateModalTotal();

    if (reservationModal) {
      reservationModal.classList.add('open');
      reservationModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeReservationModal = () => {
    if (reservationModal) {
      reservationModal.classList.remove('open');
      reservationModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  const calculateModalTotal = () => {
    if (!modalBoardSelect || !summaryTotalPrice || !summaryPassType) return;

    const selectedOption = modalBoardSelect.options[modalBoardSelect.selectedIndex];
    const multiplier = parseFloat(selectedOption.getAttribute('data-price-multiplier') || '1.0');
    const boardTitle = selectedOption.text.split('(')[0].trim();

    let baseDurationPrice = 45;
    let durationLabel = '2 Hours';

    modalDurationRadios.forEach(radio => {
      if (radio.checked) {
        baseDurationPrice = parseFloat(radio.getAttribute('data-base-price') || '45');
        durationLabel = radio.closest('.radio-pill').querySelector('strong').textContent;
      }
    });

    const total = Math.round(baseDurationPrice * multiplier);
    summaryPassType.textContent = `${boardTitle} (${durationLabel})`;
    summaryTotalPrice.textContent = `$${total}.00`;
  };

  if (modalBoardSelect) {
    modalBoardSelect.addEventListener('change', calculateModalTotal);
  }

  modalDurationRadios.forEach(radio => {
    radio.addEventListener('change', calculateModalTotal);
  });

  if (reserveBoardBtn) {
    reserveBoardBtn.addEventListener('click', () => {
      const boardKey = reserveBoardBtn.getAttribute('data-board-id') || 'allround';
      openReservationModal(boardKey, activeDuration);
    });
  }

  if (planReserveBtn) {
    planReserveBtn.addEventListener('click', () => {
      openReservationModal(null, activeDuration);
    });
  }

  if (finalReserveBtn) {
    finalReserveBtn.addEventListener('click', () => {
      openReservationModal('allround', '2hr');
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeReservationModal);
  }

  if (reservationModal) {
    reservationModal.addEventListener('click', (e) => {
      if (e.target === reservationModal) closeReservationModal();
    });
  }

  if (rentalConfigForm) {
    rentalConfigForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const guestName = document.getElementById('guest-name')?.value || 'Guest';
      rentalConfigForm.style.display = 'none';
      if (modalSuccessBox) {
        modalSuccessBox.style.display = 'block';
        const confText = document.getElementById('success-confirmation-text');
        if (confText) {
          confText.textContent = `Thank you, ${guestName}! Confirmation and mobile dock voucher have been sent to your email. Your board will be calibrated and waiting on Dock 4.`;
        }
      }
    });
  }

  if (successDoneBtn) {
    successDoneBtn.addEventListener('click', closeReservationModal);
  }

  const navLoginBtn = document.getElementById('nav-login-btn');
  const loginModal = document.getElementById('login-modal');
  const loginCloseBtn = document.getElementById('login-close-btn');
  const loginForm = document.getElementById('login-form');

  if (navLoginBtn) {
    navLoginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'login.html';
    });
  }

  if (loginCloseBtn && loginModal) {
    loginCloseBtn.addEventListener('click', () => {
      loginModal.classList.remove('open');
      loginModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }

  if (loginModal) {
    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) {
        loginModal.classList.remove('open');
        loginModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      loginModal.classList.remove('open');
      loginModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      window.location.href = 'dashboard.html';
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeReservationModal();
      if (loginModal) {
        loginModal.classList.remove('open');
        loginModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }
  });

});
