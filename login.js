

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initDirectionToggle();
  initPasswordVisibility();
  initLoginForm();
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

function initPasswordVisibility() {
  const toggleBtn = document.getElementById('toggle-password');
  const passwordInput = document.getElementById('login-password');
  if (!toggleBtn || !passwordInput) return;

  const eyeShow = toggleBtn.querySelector('.eye-show');
  const eyeHide = toggleBtn.querySelector('.eye-hide');

  toggleBtn.addEventListener('click', () => {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    if (isPassword) {
      passwordInput.setAttribute('type', 'text');
      toggleBtn.setAttribute('aria-label', 'Hide password');
      if (eyeShow) eyeShow.style.display = 'none';
      if (eyeHide) eyeHide.style.display = 'block';
    } else {
      passwordInput.setAttribute('type', 'password');
      toggleBtn.setAttribute('aria-label', 'Show password');
      if (eyeShow) eyeShow.style.display = 'block';
      if (eyeHide) eyeHide.style.display = 'none';
    }
  });
}

function initLoginForm() {
  const form = document.getElementById('login-form');
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  const emailGroup = document.getElementById('group-username');
  const passwordGroup = document.getElementById('group-password');
  const emailError = document.getElementById('email-error');
  const passwordError = document.getElementById('password-error');
  const rememberCheckbox = document.getElementById('remember-me');

  const savedRemember = localStorage.getItem('wavenomad_remember_user');
  if (savedRemember && emailInput && rememberCheckbox) {
    emailInput.value = savedRemember;
    rememberCheckbox.checked = true;
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      emailGroup.classList.remove('has-error');
      if (emailError) emailError.textContent = '';
    });
  }

  if (passwordInput) {
    passwordInput.addEventListener('input', () => {
      passwordGroup.classList.remove('has-error');
      if (passwordError) passwordError.textContent = '';
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const emailValue = emailInput.value.trim();
      if (!emailValue) {
        isValid = false;
        emailGroup.classList.add('has-error');
        if (emailError) emailError.textContent = 'Please enter your email or username.';
      } else if (emailValue.includes('@') && !isValidEmail(emailValue)) {
        isValid = false;
        emailGroup.classList.add('has-error');
        if (emailError) emailError.textContent = 'Please enter a valid email address.';
      }

      const passwordValue = passwordInput.value;
      if (!passwordValue) {
        isValid = false;
        passwordGroup.classList.add('has-error');
        if (passwordError) passwordError.textContent = 'Please enter your password.';
      } else if (passwordValue.length < 6) {
        isValid = false;
        passwordGroup.classList.add('has-error');
        if (passwordError) passwordError.textContent = 'Password must be at least 6 characters.';
      }

      if (isValid) {

        if (rememberCheckbox && rememberCheckbox.checked) {
          localStorage.setItem('wavenomad_remember_user', emailValue);
        } else {
          localStorage.removeItem('wavenomad_remember_user');
        }

        showToast('✓ Welcome back! Signing in to WaveNomad...');

        setTimeout(() => {
          window.location.href = 'dashboard.html';
        }, 1200);
      }
    });
  }

  const forgotLink = document.getElementById('forgot-password-link');
  if (forgotLink) {
    forgotLink.addEventListener('click', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('login-email');
      const emailVal = emailInput ? emailInput.value.trim() : '';
      if (emailVal) {
        showToast(`✓ Password reset instructions sent to ${emailVal}!`);
      } else {
        showToast('Please enter your email above and click Forget Password.');
      }
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

function initSocialButtons() {
  const googleBtn = document.getElementById('btn-google-login');
  const appleBtn = document.getElementById('btn-apple-login');

  if (googleBtn) {
    googleBtn.addEventListener('click', () => {
      showToast('Connecting with Google Account...');
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    });
  }

  if (appleBtn) {
    appleBtn.addEventListener('click', () => {
      showToast('Connecting with Apple ID...');
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
