// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple message on submit
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Your message has been sent successfully!');
});
