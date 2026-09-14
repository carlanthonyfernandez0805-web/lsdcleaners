// LSD Cleaners — shared site behavior
document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // First-time offer pop-up: shows once per session, after a short delay,
  // only if the visitor hasn't already dismissed or submitted it.
  var popup = document.getElementById('first-time-popup');
  if (popup) {
    var alreadyShown = sessionStorage.getItem('lsd_offer_shown');
    if (!alreadyShown) {
      setTimeout(function () {
        popup.classList.add('open');
        sessionStorage.setItem('lsd_offer_shown', '1');
      }, 8000);
    }
    var closeBtn = popup.querySelector('.popup-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        popup.classList.remove('open');
      });
    }
    popup.addEventListener('click', function (e) {
      if (e.target === popup) popup.classList.remove('open');
    });
  }

  // Mark current page as active in nav
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main-nav a').forEach(function (a) {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});
