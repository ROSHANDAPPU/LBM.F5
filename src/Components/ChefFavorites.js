// Intersection Observer for Chef Favorites scroll reveal animation
const observerOptions = {
  threshold: 0.2 // Triggers when 20% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Find all cards within this section and add the visible class
      const cards = entry.target.querySelectorAll('.chef-favorite-card');
      cards.forEach(card => card.classList.add('is-visible'));
    }
  });
}, observerOptions);

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Tell the observer to watch the chef favorites section
  const section = document.querySelector('.chef-favorites-section');
  if (section) {
    observer.observe(section);
  }
});

export { observer };
