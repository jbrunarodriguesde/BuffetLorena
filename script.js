const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const progress = document.querySelector('[data-scroll-progress]');
const heroImage = document.querySelector('.hero-image img');
const revealSections = document.querySelectorAll('.reveal-section');

const updateScrollAnimation = () => {
  header.classList.toggle('scrolled', scrollY > 8);
  const pageHeight = document.documentElement.scrollHeight - innerHeight;
  progress.style.setProperty('--scroll-progress', pageHeight ? scrollY / pageHeight : 0);
  heroImage.style.setProperty('--hero-parallax', `${Math.min(scrollY * .14, 95)}px`);
};
addEventListener('scroll', updateScrollAnimation, { passive: true });
updateScrollAnimation();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (!isIntersecting) return;
    target.classList.add('is-visible');
    observer.unobserve(target);
  });
}, { threshold: .14 });
revealSections.forEach(section => observer.observe(section));
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
document.querySelector('[data-year]').textContent = new Date().getFullYear();
