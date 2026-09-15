document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () { nav.classList.toggle('open'); });
  }
  var dropdown = document.getElementById('nav-more');
  if (dropdown) {
    var dropdownBtn = dropdown.querySelector('.nav-dropdown-toggle');
    dropdownBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = dropdown.classList.toggle('open');
      dropdownBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdown.classList.remove('open');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Get a Quote page: Cleaning / Snow Removal tab toggle
  var quoteTabs = document.querySelectorAll('.quote-tab');
  if (quoteTabs.length) {
    quoteTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        quoteTabs.forEach(function (t) {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        document.querySelectorAll('.quote-panel').forEach(function (panel) {
          panel.classList.toggle('active', panel.id === tab.getAttribute('data-target'));
        });
      });
    });
  }
  var popup = document.getElementById('first-time-popup');
  if (popup) {
    if (!sessionStorage.getItem('lsd_offer_shown')) {
      setTimeout(function () {
        popup.classList.add('open');
        sessionStorage.setItem('lsd_offer_shown', '1');
      }, 8000);
    }
    var closeBtn = popup.querySelector('.popup-close');
    if (closeBtn) closeBtn.addEventListener('click', function () { popup.classList.remove('open'); });
    popup.addEventListener('click', function (e) { if (e.target === popup) popup.classList.remove('open'); });
  }
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main-nav a').forEach(function (a) {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
  document.getElementById('year').textContent = new Date().getFullYear();
});