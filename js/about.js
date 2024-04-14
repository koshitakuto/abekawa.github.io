// about.js
window.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
  
    fadeInElements.forEach((element) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
    });
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.5
    });
  
    fadeInElements.forEach((element) => {
      observer.observe(element);
    });
  });