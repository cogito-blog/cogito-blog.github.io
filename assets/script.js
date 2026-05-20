const year = new Date().getFullYear();
['year', 'year-2', 'year-3', 'year-4', 'year-5', 'year-6'].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.textContent = year;
});

const isHome = window.location.pathname.endsWith('/index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
const params = new URLSearchParams(window.location.search);
const skipIntro = params.get('skipIntro') === '1';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const intro = document.getElementById('eva-startup');

if (isHome && intro) {
  const played = sessionStorage.getItem('cogitoIntroPlayed') === '1';
  if (skipIntro || played || reducedMotion) {
    intro.style.display = 'none';
  } else {
    sessionStorage.setItem('cogitoIntroPlayed', '1');
    setTimeout(() => {
      intro.style.display = 'none';
    }, 4000);
  }
}

document.querySelectorAll('.eva-block').forEach((card, index) => {
  card.style.animationDelay = `${Math.min(index * 0.12, 0.6)}s`;
});
