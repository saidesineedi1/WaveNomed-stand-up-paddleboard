

document.addEventListener('DOMContentLoaded', () => {

  const html = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIconSun = document.getElementById('theme-icon-sun');
  const themeIconMoon = document.getElementById('theme-icon-moon');
  
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langLabel = document.getElementById('lang-label');
  
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  const homeDropdownItem = document.getElementById('home-dropdown-item');
  const homeDropdownBtn = document.getElementById('home-dropdown-btn');
  const home1Option = document.getElementById('home1-option');
  const home2Option = document.getElementById('home2-option');
  const homeActiveBadge = document.getElementById('home-active-badge');
  
  const navDashboardBtn = document.getElementById('nav-dashboard-btn');
  const heroDashboardBtn = document.getElementById('hero-dashboard-btn');
  const dashboardDrawer = document.getElementById('dashboard-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const loginBtn = document.getElementById('login-btn');
  const newsletterForm = document.getElementById('newsletter-form');
  const siteHeader = document.getElementById('site-header');
  const currentSlideNum = document.getElementById('current-slide-num');
  const sliderPrevBtn = document.getElementById('slider-prev-btn');
  const sliderNextBtn = document.getElementById('slider-next-btn');

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
      if (themeIconSun) themeIconSun.style.display = 'none';
      if (themeIconMoon) themeIconMoon.style.display = 'block';
      if (currentSlideNum) currentSlideNum.textContent = '02';
      localStorage.setItem('wavenomad-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
      if (themeIconSun) themeIconSun.style.display = 'block';
      if (themeIconMoon) themeIconMoon.style.display = 'none';
      if (currentSlideNum) currentSlideNum.textContent = '01';
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

  if (sliderPrevBtn) {
    sliderPrevBtn.addEventListener('click', () => {
      applyTheme('light');
    });
  }

  if (sliderNextBtn) {
    sliderNextBtn.addEventListener('click', () => {
      applyTheme('dark');
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
      const isCurrentlyRtl = html.getAttribute('dir') === 'rtl';
      applyDirection(!isCurrentlyRtl);
    });
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (home2Option) {
    home2Option.addEventListener('click', () => {
      if (homeDropdownItem) homeDropdownItem.classList.remove('open');
    });
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('open')) {
        menuToggle.classList.remove('open');
        navMenu.classList.remove('open');
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

  if (navDashboardBtn) {
    navDashboardBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSec = document.getElementById('timeline') || document.getElementById('booking');
      if (targetSec) targetSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (heroDashboardBtn) {
    heroDashboardBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSec = document.getElementById('visual-moments') || document.getElementById('rentals');
      if (targetSec) targetSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const tabFlow = document.getElementById('tab-rental-flow');
  const tabSchedule = document.getElementById('tab-daily-schedule');
  const paneFlow = document.getElementById('timeline-pane-flow');
  const paneSchedule = document.getElementById('timeline-pane-schedule');

  if (tabFlow && tabSchedule && paneFlow && paneSchedule) {
    tabFlow.addEventListener('click', () => {
      tabFlow.classList.add('active');
      tabFlow.setAttribute('aria-selected', 'true');
      tabSchedule.classList.remove('active');
      tabSchedule.setAttribute('aria-selected', 'false');

      paneFlow.classList.add('active');
      paneSchedule.classList.remove('active');
    });

    tabSchedule.addEventListener('click', () => {
      tabSchedule.classList.add('active');
      tabSchedule.setAttribute('aria-selected', 'true');
      tabFlow.classList.remove('active');
      tabFlow.setAttribute('aria-selected', 'false');

      paneSchedule.classList.add('active');
      paneFlow.classList.remove('active');
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('.newsletter-input');
      const btn = newsletterForm.querySelector('.newsletter-btn');
      if (input && input.value) {
        const origText = btn.textContent;
        btn.textContent = 'Subscribed!';
        btn.style.background = '#10B981';
        input.value = '';
        setTimeout(() => {
          btn.textContent = origText;
          btn.style.background = '';
        }, 2500);
      }
    });
  }

  const filterBtns = document.querySelectorAll('.fleet-filter-btn');
  const boardCards = document.querySelectorAll('.board-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      boardCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  const bookingType = document.getElementById('booking-exp-type');
  const bookingGear = document.getElementById('booking-gear');
  const bookingDuration = document.getElementById('booking-duration');
  const bookingPaddlers = document.getElementById('booking-paddlers');
  const addonCheckboxes = document.querySelectorAll('.addon-checkbox');
  
  const summaryBaseRate = document.getElementById('summary-base-rate');
  const summaryAddons = document.getElementById('summary-addons');
  const summaryTotal = document.getElementById('summary-total-price');
  const bookingForm = document.getElementById('adventure-booking-form');

  const updateBookingTotal = () => {
    if (!bookingDuration || !bookingPaddlers) return;

    let baseRate = 35;
    const durationMultiplier = parseFloat(bookingDuration.value) || 1;
    const paddlers = parseInt(bookingPaddlers.value) || 1;

    if (bookingGear) {
      if (bookingGear.value === 'apex') baseRate = 45;
      else if (bookingGear.value === 'terraflow') baseRate = 35;
      else if (bookingGear.value === 'tandem') baseRate = 65;
    }

    if (bookingType && bookingType.value === 'tour') {
      baseRate = 85;
    } else if (bookingType && bookingType.value === 'lesson') {
      baseRate = 65;
    }

    const calculatedBase = baseRate * durationMultiplier * paddlers;

    let addonsTotal = 0;
    addonCheckboxes.forEach(cb => {
      const parentPill = cb.closest('.addon-pill');
      if (cb.checked) {
        addonsTotal += parseFloat(cb.getAttribute('data-price')) || 0;
        if (parentPill) parentPill.classList.add('active');
      } else {
        if (parentPill) parentPill.classList.remove('active');
      }
    });

    const total = calculatedBase + addonsTotal;

    if (summaryBaseRate) summaryBaseRate.textContent = `$${calculatedBase.toFixed(2)}`;
    if (summaryAddons) summaryAddons.textContent = `$${addonsTotal.toFixed(2)}`;
    if (summaryTotal) summaryTotal.textContent = `$${total.toFixed(2)}`;
  };

  if (bookingType) bookingType.addEventListener('change', updateBookingTotal);
  if (bookingGear) bookingGear.addEventListener('change', updateBookingTotal);
  if (bookingDuration) bookingDuration.addEventListener('change', updateBookingTotal);
  if (bookingPaddlers) bookingPaddlers.addEventListener('change', updateBookingTotal);
  addonCheckboxes.forEach(cb => cb.addEventListener('change', updateBookingTotal));

  updateBookingTotal();

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('btn-confirm-reservation');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Reserving Gear...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = 'Reservation Confirmed! ✓';
        submitBtn.style.background = '#10B981';
        
        setTimeout(() => {
          alert('Adventure booked! A confirmation email and digital QR pass have been dispatched to your email.');
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 600);
      }, 900);
    });
  }

  const reserveButtons = document.querySelectorAll('.btn-card-reserve');
  reserveButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const boardKey = btn.getAttribute('data-board');
      if (bookingGear && boardKey) {
        bookingGear.value = boardKey;
        updateBookingTotal();
      }
      const bookingSec = document.getElementById('booking');
      if (bookingSec) {
        bookingSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const footerHome1Trigger = document.querySelector('.footer-home1-trigger');
  const footerHome2Trigger = document.querySelector('.footer-home2-trigger');
  const footerPricingTrigger = document.querySelector('.footer-pricing-trigger');
  const footerLink404 = document.getElementById('footer-link-404');
  const footerLinkComingSoon = document.getElementById('footer-link-coming-soon');
  const footerLinkDashboard = document.getElementById('footer-link-dashboard');
  const modal404 = document.getElementById('modal-404');
  const modalComingSoon = document.getElementById('modal-coming-soon');
  const modalDashboard = document.getElementById('modal-dashboard');
  const footerScrollTopBtn = document.getElementById('footer-scroll-top-btn');

  if (footerHome1Trigger) {
    footerHome1Trigger.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (footerHome2Trigger) {
    footerHome2Trigger.addEventListener('click', () => {
      window.location.href = 'home2.html';
    });
  }

  if (footerPricingTrigger) {
    footerPricingTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      const rentalsSec = document.getElementById('rentals');
      if (rentalsSec) rentalsSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const openFooterModal = (modal) => {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeFooterModal = (modal) => {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const allFooterModals = [modal404, modalComingSoon, modalDashboard].filter(Boolean);

  if (footerLink404) {

  }

  if (footerLinkComingSoon) {

  }

  if (footerLinkDashboard) {
    footerLinkDashboard.addEventListener('click', (e) => {
      e.preventDefault();
      openFooterModal(modalDashboard);
    });
  }

  allFooterModals.forEach((modal) => {

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeFooterModal(modal);
      }
    });

    const closeBtns = modal.querySelectorAll('.footer-modal-close, .footer-modal-close-trigger, .modal-close-and-scroll');
    closeBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        closeFooterModal(modal);
        const targetHref = btn.getAttribute('href');
        if (targetHref && targetHref.startsWith('#')) {
          const targetEl = document.querySelector(targetHref);
          if (targetEl) {
            e.preventDefault();
            setTimeout(() => {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }, 180);
          }
        }
      });
    });
  });

  const modal404HomeBtn = document.getElementById('modal-404-home-btn');
  if (modal404HomeBtn) {
    modal404HomeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeFooterModal(modal404);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (footerScrollTopBtn) {
    footerScrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const momentsData = [
    {
      index: 0,
      category: 'calm',
      src: 'assets/images/moment-sunrise-glide.jpg',
      badge: '06:15 AM Dawn Patrol',
      badgeClass: 'badge-sunrise',
      conditions: 'Glass Water · 62°F',
      location: 'Glacial Peak Lake · Emerald Cove',
      title: 'Mirror Stillness & Alpine Sunburst',
      desc: 'Rented the Apex Carbon 12\'6 at first light. Total mirror glass water and alpine silence. Absolutely spiritual.',
      board: "Apex Carbon Touring 12'6\"",
      paddler: 'Sarah T.',
      likes: 148,
      liked: false
    },
    {
      index: 1,
      category: 'wellness',
      src: 'assets/images/moment-sup-yoga.jpg',
      badge: 'SUP Yoga Flow',
      badgeClass: 'badge-wellness',
      conditions: 'Still Air',
      location: 'Whispering Pines Cove',
      title: 'Morning Prana & Balance',
      desc: 'The extra 34-inch beam on the Zen Bamboo board made warrior poses feel like floating on cloud nine.',
      board: "Zen Bamboo All-Around 10'8\"",
      paddler: 'Instructor: Maya L.',
      likes: 194,
      liked: false
    },
    {
      index: 2,
      category: 'cove',
      src: 'assets/images/moment-cove-explore.jpg',
      badge: 'Secret Narrows',
      badgeClass: 'badge-cove',
      conditions: '25ft Clarity',
      location: 'Granite Canyon Passage',
      title: 'Hidden Granite Waters',
      desc: 'Only accessible by paddleboard. Water so crystalline you see trout swimming beneath your fins.',
      board: 'Touring Discovery Duo',
      paddler: 'Guests: Chloe & Marcus',
      likes: 167,
      liked: false
    },
    {
      index: 3,
      category: 'community',
      src: 'assets/images/moment-dog-pilot.jpg',
      badge: 'Dog-Friendly Approved',
      badgeClass: 'badge-pup',
      conditions: 'Tail Wags 100%',
      location: 'Sunnyside Sandy Shallows',
      title: 'First Mate Barnaby',
      desc: 'WaveNomad gave us a free pup PFD and claw-guard deck pad. Barnaby didn\'t want to get off!',
      board: "Voyager Inflatable 11'0\"",
      paddler: 'Guests: Emma & Barnaby',
      likes: 312,
      liked: false
    },
    {
      index: 4,
      category: 'calm',
      src: 'assets/images/moment-aerial-view.jpg',
      badge: 'Aerial Drone View',
      badgeClass: 'badge-aerial',
      conditions: 'Zero Currents',
      location: 'Alpine Basin Shallows',
      title: 'Floating in Liquid Glass',
      desc: 'Looking down from the bluff, the rental boards looked like they were suspended weightlessly in mid-air.',
      board: 'Twin Apex Touring Fleet',
      paddler: 'Paddlers: Dave & Julian',
      likes: 228,
      liked: false
    },
    {
      index: 5,
      category: 'sunset',
      src: 'assets/images/moment-sunset-glow.jpg',
      badge: 'Golden Hour Twilight',
      badgeClass: 'badge-sunset',
      conditions: 'Sub-Hull LED Glow',
      location: 'Sunset Point Rental Dock',
      title: 'Vermillion Skies & Twilight Calm',
      desc: 'Ended our 4-hour rental right as the sky ignited. The dock crew handed us warm spiced cider as we came in.',
      board: 'Solstice Twilight Edition',
      paddler: 'Paddler: Alicia R.',
      likes: 287,
      liked: false
    }
  ];

  const momentCards = document.querySelectorAll('.moment-card');

  momentCards.forEach((card) => {
    const likeBtn = card.querySelector('.moment-like-btn');
    const index = parseInt(card.dataset.index, 10);
    if (likeBtn && !isNaN(index) && momentsData[index]) {
      likeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const data = momentsData[index];
        data.liked = !data.liked;
        data.likes += data.liked ? 1 : -1;
        likeBtn.classList.toggle('liked', data.liked);
        const countSpan = likeBtn.querySelector('.like-count');
        if (countSpan) countSpan.textContent = data.likes;
      });
    }

    const mediaWrap = card.querySelector('.moment-media-wrapper');
    if (mediaWrap && !isNaN(index)) {
      mediaWrap.addEventListener('click', () => {
        openLightbox(index);
      });
      mediaWrap.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });
    }

    const expandBtn = card.querySelector('.moment-expand-btn');
    if (expandBtn && !isNaN(index)) {
      expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openLightbox(index);
      });
    }
  });

  const lightboxModal = document.getElementById('moment-lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbBadge = document.getElementById('lightbox-badge');
  const lbCounter = document.getElementById('lightbox-counter');
  const lbTitle = document.getElementById('lightbox-title');
  const lbLoc = document.getElementById('lightbox-loc-text');
  const lbDesc = document.getElementById('lightbox-desc');
  const lbBoard = document.getElementById('lightbox-board');
  const lbConditions = document.getElementById('lightbox-conditions');
  const lbPaddler = document.getElementById('lightbox-paddler');
  const lbLikeBtn = document.getElementById('lightbox-like-btn');
  const lbLikeCount = document.getElementById('lightbox-like-count');
  const lbCloseBtn = document.getElementById('lightbox-close');
  const lbPrevBtn = document.getElementById('lightbox-prev');
  const lbNextBtn = document.getElementById('lightbox-next');
  const lbBackdrop = document.getElementById('lightbox-backdrop');

  let currentLbIndex = 0;

  function openLightbox(index) {
    if (!lightboxModal || index < 0 || index >= momentsData.length) return;
    currentLbIndex = index;
    renderLightboxItem();
    lightboxModal.classList.add('is-open');
    lightboxModal.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('is-open');
    lightboxModal.setAttribute('aria-hidden', 'true');
  }

  function renderLightboxItem() {
    const item = momentsData[currentLbIndex];
    if (!item) return;
    if (lbImg) {
      lbImg.src = item.src;
      lbImg.alt = item.title;
    }
    if (lbBadge) lbBadge.textContent = item.badge;
    if (lbCounter) lbCounter.textContent = `${currentLbIndex + 1} / ${momentsData.length}`;
    if (lbTitle) lbTitle.textContent = item.title;
    if (lbLoc) lbLoc.textContent = item.location;
    if (lbDesc) lbDesc.textContent = `“${item.desc.replace(/[""]/g, '')}”`;
    if (lbBoard) lbBoard.textContent = item.board;
    if (lbConditions) lbConditions.textContent = item.conditions;
    if (lbPaddler) lbPaddler.textContent = item.paddler;
    if (lbLikeCount) lbLikeCount.textContent = `${item.likes} Likes`;
    if (lbLikeBtn) lbLikeBtn.classList.toggle('liked', item.liked);
  }

  function getVisibleIndices() {
    return momentsData.map((_, idx) => idx);
  }

  function prevLightbox() {
    const visible = getVisibleIndices();
    if (!visible.length) return;
    const currentPos = visible.indexOf(currentLbIndex);
    const newPos = currentPos <= 0 ? visible.length - 1 : currentPos - 1;
    currentLbIndex = visible[newPos];
    renderLightboxItem();
  }

  function nextLightbox() {
    const visible = getVisibleIndices();
    if (!visible.length) return;
    const currentPos = visible.indexOf(currentLbIndex);
    const newPos = currentPos >= visible.length - 1 ? 0 : currentPos + 1;
    currentLbIndex = visible[newPos];
    renderLightboxItem();
  }

  if (lbCloseBtn) lbCloseBtn.addEventListener('click', closeLightbox);
  if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);
  if (lbPrevBtn) lbPrevBtn.addEventListener('click', prevLightbox);
  if (lbNextBtn) lbNextBtn.addEventListener('click', nextLightbox);

  if (lbLikeBtn) {
    lbLikeBtn.addEventListener('click', () => {
      const item = momentsData[currentLbIndex];
      if (!item) return;
      item.liked = !item.liked;
      item.likes += item.liked ? 1 : -1;
      lbLikeBtn.classList.toggle('liked', item.liked);
      if (lbLikeCount) lbLikeCount.textContent = `${item.likes} Likes`;

      const targetCard = document.querySelector(`.moment-card[data-index="${currentLbIndex}"]`);
      if (targetCard) {
        const cardLikeBtn = targetCard.querySelector('.moment-like-btn');
        if (cardLikeBtn) {
          cardLikeBtn.classList.toggle('liked', item.liked);
          const cCount = cardLikeBtn.querySelector('.like-count');
          if (cCount) cCount.textContent = item.likes;
        }
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (homeDropdownItem) homeDropdownItem.classList.remove('open');
      allFooterModals.forEach(closeFooterModal);
      closeLightbox();
    } else if (lightboxModal && lightboxModal.classList.contains('is-open')) {
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    }
  });
});
