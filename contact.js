/**
 * WaveNomad — Contact & Concierge Water Intelligence Script
 *
 * Handles:
 *  1. WaveNomad Theme System (Light / Dark mode persistence matching Home 1)
 *  2. WaveNomad RTL / Reading Direction System (Arabic / English text direction)
 *  3. Header Scroll, Dropdown & Mobile Menu Interactivity
 *  4. Hero Water Ripple Ambient Dynamics & Interactive Topic Pills
 *  5. Section 02 Editorial Panels Quick-Select & Smooth Scroll Routing
 *  6. Section 03 Floating Contact Form with Real-Time Validation & Success State
 *  7. Section 04 Stylized Minimal Map SVG Route Line Drawing via IntersectionObserver
 *  8. Section 05 Final Connection Smooth Anchor Handlers
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. THEME TOGGLE (LIGHT / DARK) SYSTEM — EXACT HOME 1 PARITY
  // =========================================================================
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

  // =========================================================================
  // 2. RTL / LTR DIRECTION TOGGLE — EXACT HOME 1 PARITY
  // =========================================================================
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

  // =========================================================================
  // 3. HEADER SCROLL, DROPDOWN & MOBILE MENU — EXACT HOME 1 PARITY
  // =========================================================================
  const siteHeader = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const homeDropdownBtn = document.getElementById('home-dropdown-btn');
  const homeDropdownItem = document.getElementById('home-dropdown-item');
  const home1Option = document.getElementById('home1-option');
  const home2Option = document.getElementById('home2-option');

  // Header Scrolled Glass Effect
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

  // Home 1 / Home 2 Dropdown Navigation Logic
  if (homeDropdownBtn && homeDropdownItem) {
    homeDropdownBtn.addEventListener('click', (e) => {
      e.preventDefault();
      homeDropdownItem.classList.toggle('open');
      const isExpanded = homeDropdownItem.classList.contains('open');
      homeDropdownBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!homeDropdownItem.contains(e.target)) {
        homeDropdownItem.classList.remove('open');
        homeDropdownBtn.setAttribute('aria-expanded', 'false');
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

  // Mobile Hamburger Menu
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    const navLinks = navMenu.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    const navLoginBtn = document.getElementById('nav-login-btn');
    if (navLoginBtn) {
      navLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'dashboard.html';
      });
    }
  }

  // =========================================================================
  // 4. HERO SECTION: INTERACTIVE WATER RIPPLE & TOPIC PILLS
  // =========================================================================
  const rippleStage = document.getElementById('contact-ripple-stage');
  const rippleWrapper = document.getElementById('shoreline-ripple-container');
  const topicPills = document.querySelectorAll('.ripple-topic-pill');
  const planningSection = document.getElementById('contact-planning');
  const topicSelect = document.getElementById('contact-topic');
  const fullNameInput = document.getElementById('contact-full-name');
  const messageInput = document.getElementById('contact-message');
  const formCard = document.getElementById('contact-form-wrapper');

  // Subtle Mouse-Responsive Tilt on Ripple Canvas (Restrained & Calm)
  if (rippleStage && rippleWrapper && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    let isHovering = false;
    let animationFrameId = null;

    const onMouseMove = (e) => {
      const rect = rippleStage.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      // Normalised offset (-1 to 1)
      mouseX = (e.clientX - centerX) / (rect.width / 2);
      mouseY = (e.clientY - centerY) / (rect.height / 2);
    };

    const updateTilt = () => {
      if (isHovering) {
        // Smooth interpolation
        currentX += (mouseX * 7 - currentX) * 0.08;
        currentY += (mouseY * 7 - currentY) * 0.08;
        rippleWrapper.style.transform = `perspective(800px) rotateX(${-currentY}deg) rotateY(${currentX}deg) translateZ(10px)`;
      } else {
        currentX += (0 - currentX) * 0.08;
        currentY += (0 - currentY) * 0.08;
        rippleWrapper.style.transform = `perspective(800px) rotateX(${-currentY}deg) rotateY(${currentX}deg) translateZ(0px)`;
        if (Math.abs(currentX) < 0.05 && Math.abs(currentY) < 0.05) {
          rippleWrapper.style.transform = '';
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
          return;
        }
      }
      animationFrameId = requestAnimationFrame(updateTilt);
    };

    rippleStage.addEventListener('mouseenter', () => {
      isHovering = true;
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateTilt);
      }
    });

    rippleStage.addEventListener('mousemove', onMouseMove);

    rippleStage.addEventListener('mouseleave', () => {
      isHovering = false;
      mouseX = 0;
      mouseY = 0;
    });
  }

  /**
   * Helper: Select Enquiry Topic, Smoothly Scroll to Form, and Focus Name Input
   */
  const routeToConciergeForm = (topicValue) => {
    if (topicSelect && topicValue) {
      // Map topic names accurately to select options
      const normalizedTopic = {
        'Rental': 'Rental',
        'Rentals': 'Rental',
        'Lesson': 'Lesson',
        'Lessons': 'Lesson',
        'Tour': 'Tour',
        'Tours': 'Tour',
        'Questions': 'General Question',
        'General Question': 'General Question',
        'Something Else': 'Other',
        'Group Experience': 'Group Experience'
      }[topicValue] || topicValue;

      topicSelect.value = normalizedTopic;
      // Trigger change event for floating label state
      topicSelect.dispatchEvent(new Event('change', { bubbles: true }));
      topicSelect.classList.remove('is-invalid');
      const topicError = document.getElementById('topic-error-msg');
      if (topicError) topicError.style.display = 'none';
    }

    if (planningSection) {
      planningSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Gentle pulse feedback on the form card to guide the eye
    if (formCard) {
      formCard.classList.remove('pulse-highlight');
      void formCard.offsetWidth; // Reflow
      formCard.classList.add('pulse-highlight');
      setTimeout(() => formCard.classList.remove('pulse-highlight'), 1400);
    }

    // Set focus on Name field after smooth scroll begins
    setTimeout(() => {
      if (fullNameInput) fullNameInput.focus({ preventScroll: true });
    }, 450);
  };

  // Wire up Hero Topic Pills (Click & Keyboard Enter/Space)
  topicPills.forEach(pill => {
    const handlePillSelect = (e) => {
      e.preventDefault();
      const topic = pill.getAttribute('data-topic');
      routeToConciergeForm(topic);
    };

    pill.addEventListener('click', handlePillSelect);
    pill.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handlePillSelect(e);
      }
    });
  });

  // =========================================================================
  // 5. SECTION 02: EDITORIAL CONTACT OPTIONS (2x2 GRID CARDS)
  // =========================================================================
  const contactPanels = document.querySelectorAll('.contact-panel-card');

  contactPanels.forEach(panel => {
    const handlePanelClick = (e) => {
      const topic = panel.getAttribute('data-topic');
      routeToConciergeForm(topic);
    };

    panel.addEventListener('click', handlePanelClick);

    // Keyboard accessibility for interactive panels
    panel.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handlePanelClick(e);
      }
    });
  });

  // =========================================================================
  // 6. SECTION 03: FLOATING CONTACT FORM & VALIDATION ENGINE
  // =========================================================================
  const contactForm = document.getElementById('contact-planning-form');
  const emailInput = document.getElementById('contact-email');
  const phoneInput = document.getElementById('contact-phone');
  const dateInput = document.getElementById('contact-date');
  const submitBtn = document.getElementById('contact-submit-btn');
  const successState = document.getElementById('form-success-state');
  const sendAnotherBtn = document.getElementById('btn-send-another');

  // Error message elements
  const nameError = document.getElementById('name-error-msg');
  const emailError = document.getElementById('email-error-msg');
  const topicError = document.getElementById('topic-error-msg');
  const msgError = document.getElementById('msg-error-msg');

  // Email format validation regex
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  };

  // Clear validation styling on typing
  const bindInputClearing = (inputEl, errorEl) => {
    if (!inputEl) return;
    const clearError = () => {
      inputEl.classList.remove('is-invalid');
      const parentGroup = inputEl.closest('.form-field-group');
      if (parentGroup) parentGroup.classList.remove('has-error');
      if (errorEl) errorEl.style.display = 'none';
    };
    inputEl.addEventListener('input', clearError);
    inputEl.addEventListener('change', clearError);
  };

  bindInputClearing(fullNameInput, nameError);
  bindInputClearing(emailInput, emailError);
  bindInputClearing(topicSelect, topicError);
  bindInputClearing(messageInput, msgError);

  // Validate form fields on submit
  const validateForm = () => {
    let isValid = true;
    let firstInvalidField = null;

    // 1. Full Name
    if (!fullNameInput || fullNameInput.value.trim().length < 2) {
      isValid = false;
      if (fullNameInput) {
        fullNameInput.classList.add('is-invalid');
        const parent = fullNameInput.closest('.form-field-group');
        if (parent) parent.classList.add('has-error');
      }
      if (nameError) nameError.style.display = 'block';
      if (!firstInvalidField) firstInvalidField = fullNameInput;
    }

    // 2. Email Address
    if (!emailInput || !isValidEmail(emailInput.value)) {
      isValid = false;
      if (emailInput) {
        emailInput.classList.add('is-invalid');
        const parent = emailInput.closest('.form-field-group');
        if (parent) parent.classList.add('has-error');
      }
      if (emailError) emailError.style.display = 'block';
      if (!firstInvalidField) firstInvalidField = emailInput;
    }

    // 3. Topic Selection
    if (!topicSelect || !topicSelect.value) {
      isValid = false;
      if (topicSelect) {
        topicSelect.classList.add('is-invalid');
        const parent = topicSelect.closest('.form-field-group');
        if (parent) parent.classList.add('has-error');
      }
      if (topicError) topicError.style.display = 'block';
      if (!firstInvalidField) firstInvalidField = topicSelect;
    }

    // 4. Message
    if (!messageInput || messageInput.value.trim().length < 5) {
      isValid = false;
      if (messageInput) {
        messageInput.classList.add('is-invalid');
        const parent = messageInput.closest('.form-field-group');
        if (parent) parent.classList.add('has-error');
      }
      if (msgError) msgError.style.display = 'block';
      if (!firstInvalidField) firstInvalidField = messageInput;
    }

    if (firstInvalidField) {
      firstInvalidField.focus();
    }

    return isValid;
  };

  // Form Submit Handler
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      // Enter Loading State
      if (submitBtn) {
        submitBtn.classList.add('is-loading');
        submitBtn.setAttribute('disabled', 'true');
        const btnText = submitBtn.querySelector('.btn-text');
        if (btnText) btnText.textContent = 'Transmitting Note...';
      }

      // Simulated network concierge transmission
      setTimeout(() => {
        // Hide Form
        contactForm.style.display = 'none';

        // Reveal Success State
        if (successState) {
          successState.style.display = 'flex';
          successState.classList.add('is-revealed');
          successState.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Reset submit button state
        if (submitBtn) {
          submitBtn.classList.remove('is-loading');
          submitBtn.removeAttribute('disabled');
          const btnText = submitBtn.querySelector('.btn-text');
          if (btnText) btnText.textContent = 'Send Your Message';
        }
      }, 700);
    });
  }

  // "Send Another Note" Reset Handler
  if (sendAnotherBtn) {
    sendAnotherBtn.addEventListener('click', () => {
      if (contactForm) {
        contactForm.reset();
        contactForm.style.display = 'block';
      }
      if (successState) {
        successState.style.display = 'none';
        successState.classList.remove('is-revealed');
      }
      // Clear all potential error states
      [fullNameInput, emailInput, phoneInput, dateInput, topicSelect, messageInput].forEach(field => {
        if (field) {
          field.classList.remove('is-invalid');
          const parent = field.closest('.form-field-group');
          if (parent) parent.classList.remove('has-error');
        }
      });
      [nameError, emailError, topicError, msgError].forEach(err => {
        if (err) err.style.display = 'none';
      });

      if (fullNameInput) {
        fullNameInput.focus();
      }
    });
  }

  // =========================================================================
  // 7. SECTION 04: MEET US BY THE WATER (STYLIZED SVG MAP ANIMATION)
  // =========================================================================
  const mapCard = document.getElementById('waterfront-map-card');
  const routePath = document.getElementById('map-route-path');

  if (mapCard && routePath) {
    try {
      const pathLength = routePath.getTotalLength();
      routePath.style.strokeDasharray = `${pathLength} ${pathLength}`;
      routePath.style.strokeDashoffset = `${pathLength}`;

      const mapObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            mapCard.classList.add('is-inview');
            // Animate route line smoothly
            routePath.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(0.22, 1, 0.36, 1)';
            routePath.style.strokeDashoffset = '0';
            observer.unobserve(mapCard);
          }
        });
      }, { threshold: 0.25 });

      mapObserver.observe(mapCard);
    } catch (e) {
      // Fallback for environments where getTotalLength is not available
      mapCard.classList.add('is-inview');
    }
  }

  // Get Directions link enhancement
  const directionsBtn = document.getElementById('loc-directions-btn');
  if (directionsBtn) {
    directionsBtn.addEventListener('click', (e) => {
      // Directs to Emerald Bay Pier Lake Tahoe coordinates
      directionsBtn.setAttribute('href', 'https://www.google.com/maps/search/?api=1&query=Emerald+Bay+Lake+Tahoe');
    });
  }

  // =========================================================================
  // 8. SECTION 05: FINAL CONNECTION CTA SMOOTH ANCHOR
  // =========================================================================
  const finalCtaBtn = document.getElementById('final-start-conversation-btn');
  const heroCtaBtn = document.getElementById('hero-start-conversation-btn');

  const setupSmoothContactScroll = (btn) => {
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      routeToConciergeForm('');
    });
  };

  setupSmoothContactScroll(heroCtaBtn);
  setupSmoothContactScroll(finalCtaBtn);

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#' && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

});
