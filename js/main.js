
document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Intersection Observer for Fade-In Animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      } else {
        entry.target.classList.remove('fade-in');
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.about-me, .projects, .courses, .contact').forEach(section => {
    observer.observe(section);
    section.classList.add('fade-out');
  });

  // Responsive Navigation Toggle (for mobile view)
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    shapes.length = 0;
    createShapes();
  });
});
