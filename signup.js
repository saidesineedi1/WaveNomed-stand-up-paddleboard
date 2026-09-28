

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initDirectionToggle();
  initPasswordVisibilities();
  initSignupForm();
  initSocialButtons();
});

function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeModeText = document.getElementById('theme-mode-text');
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
      if (themeModeText) themeModeText.textContent = 'Light Mode';
    } else {
      htmlRoot.removeAttribute('data-theme');
      if (sunIcon) sunIcon.style.display = 'block';
      if (moonIcon) moonIcon.style.display = 'none';
      if (themeModeText) themeModeText.textContent = 'Dark Mode';
    }
  }
}

function initDirectionToggle() {
  const langToggleBtn = document.getElementById('lang-toggle-btn') || document.getElementById('rtl-toggle-btn');
  const htmlRoot = document.documentElement;

  const isRtlSaved = localStorage.getItem('wavenomad-rtl') === 'true' || localStorage.getItem('wavenomad_direction') === 'rtl';
  applyDirection(isRtlSaved);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const isRtl = htmlRoot.getAttribute('dir') === 'rtl';
      applyDirection(!isRtl);
    });
  }

  function applyDirection(isRtl) {
    if (isRtl) {
      htmlRoot.setAttribute('dir', 'rtl');
      htmlRoot.setAttribute('lang', 'ar');
      localStorage.setItem('wavenomad-rtl', 'true');
      localStorage.setItem('wavenomad_direction', 'rtl');
    } else {
      htmlRoot.removeAttribute('dir');
      htmlRoot.setAttribute('lang', 'en');
      localStorage.setItem('wavenomad-rtl', 'false');
      localStorage.setItem('wavenomad_direction', 'ltr');
    }
  }
}

function initPasswordVisibilities() {
  setupToggle('toggle-password', 'signup-password');
  setupToggle('toggle-confirm-password', 'signup-confirm-password');

  function setupToggle(buttonId, inputId) {
    const toggleBtn = document.getElementById(buttonId);
    const input = document.getElementById(inputId);
    if (!toggleBtn || !input) return;

    const eyeShow = toggleBtn.querySelector('.eye-show');
    const eyeHide = toggleBtn.querySelector('.eye-hide');

    toggleBtn.addEventListener('click', () => {
      const isPassword = input.getAttribute('type') === 'password';
      if (isPassword) {
        input.setAttribute('type', 'text');
        toggleBtn.setAttribute('aria-label', 'Hide password');
        if (eyeShow) eyeShow.style.display = 'none';
        if (eyeHide) eyeHide.style.display = 'block';
      } else {
        input.setAttribute('type', 'password');
        toggleBtn.setAttribute('aria-label', 'Show password');
        if (eyeShow) eyeShow.style.display = 'block';
        if (eyeHide) eyeHide.style.display = 'none';
      }
    });
  }
}

function initSignupForm() {
  const form = document.getElementById('signup-form');
  const nameInput = document.getElementById('signup-name');
  const emailInput = document.getElementById('signup-email');
  const passwordInput = document.getElementById('signup-password');
  const confirmPasswordInput = document.getElementById('signup-confirm-password');
  const termsCheckbox = document.getElementById('agree-terms');

  const nameGroup = document.getElementById('group-fullname');
  const emailGroup = document.getElementById('group-email');
  const passwordGroup = document.getElementById('group-password');
  const confirmGroup = document.getElementById('group-confirm-password');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  const confirmError = document.getElementById('confirm-password-error');
  const termsError = document.getElementById('terms-error');

  nameInput?.addEventListener('input', () => {
    nameGroup.classList.remove('has-error');
    if (nameError) nameError.textContent = '';
  });

  emailInput?.addEventListener('input', () => {
    emailGroup.classList.remove('has-error');
    if (emailError) emailError.textContent = '';
  });

  passwordInput?.addEventListener('input', () => {
    passwordGroup.classList.remove('has-error');
    if (passwordError) passwordError.textContent = '';
  });

  confirmPasswordInput?.addEventListener('input', () => {
    confirmGroup.classList.remove('has-error');
    if (confirmError) confirmError.textContent = '';
  });

  termsCheckbox?.addEventListener('change', () => {
    if (termsError) termsError.style.display = 'none';
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const nameVal = nameInput.value.trim();
      if (!nameVal || nameVal.length < 2) {
        isValid = false;
        nameGroup.classList.add('has-error');
        if (nameError) nameError.textContent = 'Please enter your full name.';
      }

      const emailVal = emailInput.value.trim();
      if (!emailVal || !isValidEmail(emailVal)) {
        isValid = false;
        emailGroup.classList.add('has-error');
        if (emailError) emailError.textContent = 'Please enter a valid email address.';
      }

      const passVal = passwordInput.value;
      if (!passVal || passVal.length < 6) {
        isValid = false;
        passwordGroup.classList.add('has-error');
        if (passwordError) passwordError.textContent = 'Password must be at least 6 characters.';
      }

      const confirmVal = confirmPasswordInput.value;
      if (!confirmVal) {
        isValid = false;
        confirmGroup.classList.add('has-error');
        if (confirmError) confirmError.textContent = 'Please confirm your password.';
      } else if (confirmVal !== passVal) {
        isValid = false;
        confirmGroup.classList.add('has-error');
        if (confirmError) confirmError.textContent = 'Passwords do not match.';
      }

      if (termsCheckbox && !termsCheckbox.checked) {
        isValid = false;
        if (termsError) {
          termsError.textContent = 'You must agree to the Rental Terms & Safety Waiver.';
          termsError.style.display = 'block';
        }
      }

      if (isValid) {

        localStorage.setItem('wavenomad_last_registered', emailVal);

        showToast('✓ Welcome aboard! Account created successfully.');

        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1400);
      }
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

function initSocialButtons() {
  const googleBtn = document.getElementById('btn-google-signup');
  const appleBtn = document.getElementById('btn-apple-signup');

  if (googleBtn) {
    googleBtn.addEventListener('click', () => {
      showToast('Signing up with Google Account...');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    });
  }

  if (appleBtn) {
    appleBtn.addEventListener('click', () => {
      showToast('Signing up with Apple ID...');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    });
  }
}

function showToast(message) {
  const toast = document.getElementById('auth-toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast) return;

  if (toastMsg) toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
