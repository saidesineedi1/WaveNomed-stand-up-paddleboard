const safeStorage = {
  get: (key, fallback = null) => {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? val : fallback;
    } catch (e) {
      return fallback;
    }
  },
  set: (key, val) => {
    try {
      localStorage.setItem(key, val);
    } catch (e) {}
  }
};

function initStatCounters() {
  const statsBox = document.getElementById('about-stats');
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  let animFrameId = null;

  function runCounters() {
    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = null;
    }

    const duration = 1800;
    const getNow = () => (window.performance && performance.now) ? performance.now() : Date.now();
    const startTime = getNow();

    const items = Array.from(counters).map((el) => {
      const target = parseInt(el.getAttribute('data-target'), 10) || 0;
      return { el, target };
    });

    function step(currentTime) {
      const now = (typeof currentTime === 'number' && currentTime > 0) ? currentTime : getNow();
      const elapsed = Math.max(0, now - startTime);
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      items.forEach(({ el, target }) => {
        const currentVal = Math.round(ease * target);
        if (target >= 1000) {
          el.textContent = currentVal.toLocaleString('en-US');
        } else {
          el.textContent = currentVal;
        }
      });

      if (progress < 1) {
        animFrameId = requestAnimationFrame(step);
      } else {
        items.forEach(({ el, target }) => {
          if (target >= 1000) {
            el.textContent = target.toLocaleString('en-US');
          } else {
            el.textContent = target;
          }
        });
        animFrameId = null;
      }
    }

    animFrameId = requestAnimationFrame(step);
  }
  window.runAboutStats = runCounters;
  runCounters();
  if ('IntersectionObserver' in window && statsBox) {
    let hasIntersected = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasIntersected) {
          hasIntersected = true;
          runCounters();
        }
      });
    }, { threshold: 0.15 });
    observer.observe(statsBox);
  }
  if (statsBox) {
    statsBox.style.cursor = 'pointer';
    statsBox.setAttribute('title', 'Click to replay stats animation');
    statsBox.addEventListener('click', () => {
      runCounters();
    });
  }
}

function initAboutPage() {
  const html = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIconSun = document.getElementById('theme-icon-sun');
  const themeIconMoon = document.getElementById('theme-icon-moon');

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
      if (themeIconSun) themeIconSun.style.display = 'none';
      if (themeIconMoon) themeIconMoon.style.display = 'block';
      safeStorage.set('wavenomad-theme', 'dark');
    } else {
      html.removeAttribute('data-theme');
      if (themeIconSun) themeIconSun.style.display = 'block';
      if (themeIconMoon) themeIconMoon.style.display = 'none';
      safeStorage.set('wavenomad-theme', 'light');
    }
  };

  const savedTheme = safeStorage.get('wavenomad-theme', 'light');
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = html.getAttribute('data-theme') === 'dark';
      applyTheme(isDark ? 'light' : 'dark');
    });
  }
  const langToggleBtn = document.getElementById('lang-toggle-btn');

  const applyDirection = (isRtl) => {
    if (isRtl) {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
      if (langToggleBtn) {
        langToggleBtn.setAttribute('title', 'Mode: RTL (Click to switch to LTR)');
        langToggleBtn.setAttribute('aria-label', 'Switch to LTR mode');
      }
      safeStorage.set('wavenomad-rtl', 'true');
    } else {
      html.removeAttribute('dir');
      html.setAttribute('lang', 'en');
      if (langToggleBtn) {
        langToggleBtn.setAttribute('title', 'Mode: LTR (Click to switch to RTL)');
        langToggleBtn.setAttribute('aria-label', 'Switch to RTL mode');
      }
      safeStorage.set('wavenomad-rtl', 'false');
    }
  };

  const savedRtl = safeStorage.get('wavenomad-rtl') === 'true';
  applyDirection(savedRtl);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const isRtl = html.getAttribute('dir') === 'rtl';
      applyDirection(!isRtl);
    });
  }
  const siteHeader = document.getElementById('site-header');
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
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open') || navMenu.classList.contains('active');
      if (isOpen) {
        navMenu.classList.remove('open', 'active');
        menuToggle.setAttribute('aria-expanded', 'false');
      } else {
        navMenu.classList.add('open', 'active');
        menuToggle.setAttribute('aria-expanded', 'true');
      }
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('open', 'active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  const homeDropdownItem = document.getElementById('home-dropdown-item');
  const homeDropdownBtn = document.getElementById('home-dropdown-btn');

  if (homeDropdownBtn && homeDropdownItem) {
    homeDropdownBtn.addEventListener('click', (e) => {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        homeDropdownItem.classList.toggle('open');
        const expanded = homeDropdownItem.classList.contains('open');
        homeDropdownBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      }
    });
  }
  const navLoginBtn = document.getElementById('nav-login-btn');
  if (navLoginBtn) {
    navLoginBtn.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  }
  const faqItems = document.querySelectorAll('.faq-accordion-item');
  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-accordion-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        faqItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove('active');
            const otherBtn = other.querySelector('.faq-accordion-trigger');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        if (isActive) {
          item.classList.remove('active');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
  initStatCounters();
}
if (document.getElementById('about-stats')) {
  initStatCounters();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAboutPage);
} else {
  initAboutPage();
}
