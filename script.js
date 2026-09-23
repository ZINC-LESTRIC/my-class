const header = document.getElementById('header');
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
