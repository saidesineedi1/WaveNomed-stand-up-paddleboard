

document.addEventListener('DOMContentLoaded', () => {

  const toastContainer = document.getElementById('dash-toast-container');

  const showToast = (message, type = 'info', duration = 3500) => {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `dash-toast toast-${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, duration);
  };

  const sidebarNavItems = document.querySelectorAll('.sidebar-nav-item');
  const portalViews = document.querySelectorAll('.portal-view');
  const sidebar = document.getElementById('dashboard-sidebar');

  const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');

  const closeSidebar = () => {
    if (sidebar) sidebar.classList.remove('mobile-open');
    if (sidebarBackdrop) sidebarBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  const openSidebar = () => {
    if (sidebar) sidebar.classList.add('mobile-open');
    if (sidebarBackdrop) sidebarBackdrop.classList.add('active');
    document.body.style.overflow = '';
  };

  const switchPortalView = (targetViewId) => {
    sidebarNavItems.forEach(item => {
      const isMatch = item.getAttribute('data-target') === targetViewId;
      item.classList.toggle('active', isMatch);
      item.setAttribute('aria-selected', isMatch);
    });

    portalViews.forEach(view => {
      const isMatch = view.id === targetViewId;
      view.classList.toggle('active', isMatch);
    });

    closeSidebar();
  };

  sidebarNavItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      switchPortalView(targetId);
    });
  });

  const mobileToggle = document.getElementById('sidebar-mobile-toggle');
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (sidebar.classList.contains('mobile-open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });

    if (sidebarCloseBtn) {
      sidebarCloseBtn.addEventListener('click', () => {
        closeSidebar();
      });
    }

    if (sidebarBackdrop) {
      sidebarBackdrop.addEventListener('click', () => {
        closeSidebar();
      });
    }

    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeSidebar();
      }
    });
  }

  const returnWrap = document.getElementById('return-menu-wrap');
  const btnReturn = document.getElementById('btn-sidebar-return');
  if (btnReturn && returnWrap) {
    btnReturn.addEventListener('click', (e) => {
      e.stopPropagation();
      returnWrap.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!returnWrap.contains(e.target)) {
        returnWrap.classList.remove('open');
      }
    });
  }

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const moonIcon = document.getElementById('theme-icon-moon');
  const sunIcon = document.getElementById('theme-icon-sun');
  const htmlElement = document.documentElement;

  const applyTheme = (theme) => {
    if (theme === 'light') {
      htmlElement.setAttribute('data-theme', 'light');
      if (moonIcon) moonIcon.style.display = 'none';
      if (sunIcon) sunIcon.style.display = 'block';
      localStorage.setItem('wavenomad-portal-theme', 'light');
    } else {
      htmlElement.setAttribute('data-theme', 'dark');
      if (moonIcon) moonIcon.style.display = 'block';
      if (sunIcon) sunIcon.style.display = 'none';
      localStorage.setItem('wavenomad-portal-theme', 'dark');
    }
  };

  const savedTheme = localStorage.getItem('wavenomad-portal-theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = htmlElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      applyTheme(current === 'dark' ? 'light' : 'dark');
      showToast(`Theme changed to ${current === 'dark' ? 'Light' : 'Dark'} mode`, 'info', 2000);
    });
  }

  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langLabel = document.getElementById('lang-label');

  const applyDirection = (isRtl) => {
    if (isRtl) {
      htmlElement.setAttribute('dir', 'rtl');
      htmlElement.setAttribute('lang', 'ar');
      if (langLabel) langLabel.textContent = 'RTL';
      localStorage.setItem('wavenomad-portal-rtl', 'true');
    } else {
      htmlElement.removeAttribute('dir');
      htmlElement.setAttribute('lang', 'en');
      if (langLabel) langLabel.textContent = 'LTR';
      localStorage.setItem('wavenomad-portal-rtl', 'false');
    }
  };

  const savedRtl = localStorage.getItem('wavenomad-portal-rtl') === 'true';
  applyDirection(savedRtl);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const isRtl = htmlElement.getAttribute('dir') === 'rtl';
      applyDirection(!isRtl);
      showToast(`Direction set to ${!isRtl ? 'RTL' : 'LTR'}`, 'info', 2000);
    });
  }

  const notifWrap = document.getElementById('notif-wrap');
  const notifBtn = document.getElementById('notif-btn');
  const btnClearNotifs = document.getElementById('btn-clear-notifs');
  const notifCountBadge = document.getElementById('notif-count-badge');

  if (notifBtn && notifWrap) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifWrap.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!notifWrap.contains(e.target)) {
        notifWrap.classList.remove('open');
      }
    });
  }

  if (btnClearNotifs) {
    btnClearNotifs.addEventListener('click', () => {
      if (notifCountBadge) notifCountBadge.style.display = 'none';
      const unreadDots = document.querySelectorAll('.notif-item-dot');
      unreadDots.forEach(d => d.style.opacity = '0.3');
      showToast('All notifications marked as read', 'info');
    });
  }

  const userWrap = document.getElementById('topbar-user-wrap');
  const userBtn = document.getElementById('topbar-user-btn');
  const guestSwitchButtons = document.querySelectorAll('.tud-switch-btn');

  if (userBtn && userWrap) {
    userBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userWrap.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!userWrap.contains(e.target)) {
        userWrap.classList.remove('open');
      }
    });
  }

  const profiles = {
    elena: {
      name: 'Elena Vance',
      role: 'Explorer VIP',
      memberNum: 'Member #WN-8849',
      revenue: '$48,250.00',
      orders: '1,420',
      members: '3,890',
      stock: '98.4%'
    },
    marcus: {
      name: 'Marcus Reed',
      role: 'Trainee Guest',
      memberNum: 'Member #WN-3190',
      revenue: '$12,400.00',
      orders: '430',
      members: '1,200',
      stock: '95.0%'
    },
    sarah: {
      name: 'Sarah Kim',
      role: 'Season Pro Gold',
      memberNum: 'Member #WN-9901',
      revenue: '$94,600.00',
      orders: '3,210',
      members: '7,450',
      stock: '99.2%'
    }
  };

  guestSwitchButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const guestKey = btn.getAttribute('data-guest');
      const p = profiles[guestKey];
      if (!p) return;

      document.getElementById('topbar-user-name').textContent = p.name;
      document.getElementById('header-user-name').textContent = p.name;
      document.getElementById('header-user-role').textContent = p.role;
      document.getElementById('dropdown-guest-name').textContent = p.name;
      document.getElementById('sidebar-member-num').textContent = p.memberNum;
      document.getElementById('wcert-name').textContent = p.name;

      document.getElementById('metric-val-revenue').textContent = p.revenue;
      document.getElementById('metric-val-orders').textContent = p.orders;
      document.getElementById('metric-val-members').textContent = p.members;
      document.getElementById('metric-val-stock').textContent = p.stock;

      guestSwitchButtons.forEach(b => b.classList.toggle('active', b === btn));
      userWrap.classList.remove('open');
      showToast(`Switched account to ${p.name}`, 'success');
    });
  });

  const chartRangeButtons = document.querySelectorAll('.cfilter-btn');
  chartRangeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      chartRangeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const range = btn.getAttribute('data-range');
      showToast(`Filtered analytics for ${range === '6m' ? '6 Months' : '1 Year'} trend`, 'info', 1800);
    });
  });

  const modalBooking = document.getElementById('modal-booking-wizard');
  const btnQuickBooking = document.getElementById('btn-quick-new-booking');
  const btnPortalBook = document.getElementById('btn-portal-book-slot');
  const btnCloseBooking = document.getElementById('btn-close-booking');
  const btnCancelBookingModal = document.getElementById('btn-cancel-booking-modal');
  const bookingForm = document.getElementById('portal-booking-form');

  const openModal = (m) => {
    if (!m) return;
    m.classList.add('open');
  };

  const closeModal = (m) => {
    if (!m) return;
    m.classList.remove('open');
  };

  if (btnQuickBooking) btnQuickBooking.addEventListener('click', () => openModal(modalBooking));
  if (btnPortalBook) btnPortalBook.addEventListener('click', () => openModal(modalBooking));
  if (btnCloseBooking) btnCloseBooking.addEventListener('click', () => closeModal(modalBooking));
  if (btnCancelBookingModal) btnCancelBookingModal.addEventListener('click', () => closeModal(modalBooking));

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(modalBooking);
      const newPin = Math.floor(1000 + Math.random() * 9000);
      showToast(`Booking Confirmed! Assigned Dock Locker #14 (PIN: ${newPin})`, 'success', 4000);
      openModal(modalQr);
    });
  }

  const modalQr = document.getElementById('modal-qr-pass');
  const btnQuickQr = document.getElementById('btn-quick-open-qr');
  const btnCloseQr = document.getElementById('btn-close-qr');
  const btnModalNfc = document.getElementById('btn-modal-nfc-tap');
  const btnView3Nfc = document.getElementById('btn-view3-nfc-sim');
  const qrTriggers = document.querySelectorAll('.btn-qr-trigger');

  if (btnQuickQr) btnQuickQr.addEventListener('click', () => openModal(modalQr));
  if (btnCloseQr) btnCloseQr.addEventListener('click', () => closeModal(modalQr));

  qrTriggers.forEach(btn => {
    btn.addEventListener('click', () => openModal(modalQr));
  });

  const simulateNfc = () => {
    showToast('Connecting Bluetooth NFC to Dock Locker #14...', 'info', 1500);
    setTimeout(() => {
      showToast('Lock Disengaged! Bay #14 door opened.', 'success', 3500);
      closeModal(modalQr);
    }, 1600);
  };

  if (btnModalNfc) btnModalNfc.addEventListener('click', simulateNfc);
  if (btnView3Nfc) btnView3Nfc.addEventListener('click', simulateNfc);

  const modalWaiver = document.getElementById('modal-waiver-pad');
  const btnOpenWaiver = document.getElementById('btn-open-sign-pad-main');
  const btnCloseWaiver = document.getElementById('btn-close-waiver');
  const btnCancelWaiver = document.getElementById('btn-cancel-waiver');
  const waiverForm = document.getElementById('portal-waiver-form');
  const sigCanvas = document.getElementById('signature-canvas');
  const btnClearSig = document.getElementById('btn-clear-sig');

  if (btnOpenWaiver) btnOpenWaiver.addEventListener('click', () => openModal(modalWaiver));
  if (btnCloseWaiver) btnCloseWaiver.addEventListener('click', () => closeModal(modalWaiver));
  if (btnCancelWaiver) btnCancelWaiver.addEventListener('click', () => closeModal(modalWaiver));

  if (sigCanvas) {
    const ctx = sigCanvas.getContext('2d');
    let drawing = false;

    const start = (e) => {
      drawing = true;
      const rect = sigCanvas.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
      ctx.beginPath();
      ctx.moveTo(x, y);
    };

    const draw = (e) => {
      if (!drawing) return;
      e.preventDefault();
      const rect = sigCanvas.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.strokeStyle = '#221F1B';
      ctx.lineTo(x, y);
      ctx.stroke();
    };

    const stop = () => { drawing = false; };

    sigCanvas.addEventListener('mousedown', start);
    sigCanvas.addEventListener('mousemove', draw);
    sigCanvas.addEventListener('mouseup', stop);

    sigCanvas.addEventListener('touchstart', start, { passive: false });
    sigCanvas.addEventListener('touchmove', draw, { passive: false });
    sigCanvas.addEventListener('touchend', stop);

    if (btnClearSig) {
      btnClearSig.addEventListener('click', () => {
        ctx.clearRect(0, 0, sigCanvas.width, sigCanvas.height);
      });
    }
  }

  if (waiverForm) {
    waiverForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(modalWaiver);
      showToast('Waiver signed and verified for Season 2026!', 'success', 3500);
    });
  }

  const btnCopyPin = document.getElementById('btn-copy-pin-main');
  if (btnCopyPin) {
    btnCopyPin.addEventListener('click', () => {
      navigator.clipboard.writeText('8492').then(() => {
        showToast('Locker PIN #8492 copied to clipboard!', 'success');
      });
    });
  }

  const btnSaveSettings = document.getElementById('btn-save-settings');
  if (btnSaveSettings) {
    btnSaveSettings.addEventListener('click', () => {
      showToast('Guest preferences saved successfully.', 'success');
    });
  }

  const btnDownloadWaiver = document.getElementById('btn-download-waiver');
  if (btnDownloadWaiver) {
    btnDownloadWaiver.addEventListener('click', () => {
      window.print();
    });
  }

  const receiptButtons = document.querySelectorAll('.btn-receipt-view');
  receiptButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const inv = btn.getAttribute('data-inv') || '#WN-INV-9041';
      showToast(`Generating itemized tax receipt for ${inv}...`, 'info');
      setTimeout(() => window.print(), 600);
    });
  });

  document.querySelectorAll('.btn-extend-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('✓ Extended reservation by +1 Hour ($20 added to invoice)', 'success');
    });
  });

  document.querySelectorAll('.btn-cancel-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Are you sure you want to cancel this reservation?')) {
        showToast('Reservation cancelled. Full refund issued to original card.', 'info');
      }
    });
  });

  document.querySelectorAll('.btn-msg-coach-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Opening direct channel to Coach Marcus...', 'info');
    });
  });

  document.querySelectorAll('.btn-cal-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('✓ Calendar event file (.ics) downloaded!', 'success');
    });
  });

  const btnAddCard = document.getElementById('btn-add-card-main');
  if (btnAddCard) {
    btnAddCard.addEventListener('click', () => {
      showToast('Secure payment gateway ready. Enter new card details.', 'info');
    });
  }

  const topSearch = document.getElementById('topbar-search-input');
  if (topSearch) {
    topSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.stream-booking-card, .metric-card');
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) || !query ? '' : 'none';
      });
    });
  }

});
