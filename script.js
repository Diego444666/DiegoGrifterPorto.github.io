// Select the navigation toggle button and navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

// Add click event listener to navigation toggle button
navToggle.addEventListener('click', () => {
  // Toggle the 'nav-open' class on the navigation menu
  navMenu.classList.toggle('nav-open');
});
