// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const elementVisible = 100;

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load to show elements initially in view
revealOnScroll();

// Smooth Scrolling for anchor links (if browser doesn't support CSS scroll-behavior natively)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
