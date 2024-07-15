(function() {
  const headerImage = document.querySelector('.header_image');
  const headerContent = document.querySelector('.header_content');
  const sectionDescription = document.querySelector('.section_description');
  const headerButton = document.querySelector('.header_button');
  const navMenuBtn = document.getElementById('menu-btn'); // Ensure ID exists
  const navLinks = document.querySelector('.nav_links');

  // Handle potential errors
  if (!headerImage || !headerContent) {
    console.error("Missing required elements. Ensure classes 'header_image' and 'header_content' exist.");
    return;
  }

  // Initial styles - adjust offset for image transition from right
  headerImage.style.transform = 'translateX(100%)'; // Image transition from right
  headerContent.style.transform = 'translateX(-100%)'; // Content transition from left (unchanged)

  // Combined transitions with adjusted duration
  headerImage.style.transition = 'transform 1s ease-in-out';
  headerContent.style.transition = 'transform 1s ease-in-out';
  sectionDescription.style.transition = 'transform 1s ease-in-out';
  headerButton.style.transition = 'transform 1s ease-in-out';

  // Toggle navigation links on menu button click
  navMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open'); // Toggles the 'open' class for visibility
  });

  // Animate elements on page load
  window.addEventListener('load', () => {
    headerImage.style.transform = 'translateX(0)';
    headerContent.style.transform = 'translateX(0)';
    sectionDescription.style.transform = 'translateX(0)';
    headerButton.style.transform = 'translateX(0)';
  });
})();
