// Responsible AI Hull — front page behaviour
(function () {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  // Dropdowns (click/tap + keyboard)
  document.querySelectorAll('.sub-toggle').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var li = btn.parentElement;
      var open = !li.classList.contains('open');
      document.querySelectorAll('.has-sub.open').forEach(function (o) {
        o.classList.remove('open');
        o.querySelector('.sub-toggle').setAttribute('aria-expanded', 'false');
      });
      if (open) li.classList.add('open');
      btn.setAttribute('aria-expanded', open);
    });
  });
  document.addEventListener('click', function () {
    document.querySelectorAll('.has-sub.open').forEach(function (o) {
      o.classList.remove('open');
      o.querySelector('.sub-toggle').setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') document.body.click();
  });

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
