document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () { nav.classList.toggle('open'); });
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