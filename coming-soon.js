

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initCountdownTimer();
  initNotifyForm();
});

function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  const htmlRoot = document.documentElement;

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

function initCountdownTimer() {
  const daysEl = document.getElementById('count-days');
  const hoursEl = document.getElementById('count-hours');
  const minsEl = document.getElementById('count-mins');
  const secsEl = document.getElementById('count-secs');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 42);

  function updateTimer() {
    const now = new Date().getTime();
    const diff = targetDate.getTime() - now;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

function initNotifyForm() {
  const form = document.getElementById('cs-notify-form');
  const emailInput = document.getElementById('cs-email-input');
  const toast = document.getElementById('cs-toast');
  const toastMsg = document.getElementById('toast-message');

  if (!form || !emailInput) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailVal = emailInput.value.trim();

    if (!emailVal || !emailVal.includes('@')) {
      showToast('Please enter a valid email address.', true);
      return;
    }

    showToast(`✓ VIP Invitation Sent to ${emailVal}! We'll keep you updated.`);
    emailInput.value = '';
  });

  function showToast(message, isError = false) {
    if (!toast) return;
    if (toastMsg) toastMsg.textContent = message;

    if (isError) {
      toast.style.background = '#FEECEE';
      toast.style.color = '#E12D39';
      toast.style.borderColor = 'rgba(225, 45, 57, 0.3)';
    } else {
      toast.style.background = '';
      toast.style.color = '';
      toast.style.borderColor = '';
    }

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}
