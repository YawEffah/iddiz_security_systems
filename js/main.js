

// Get all animation info items
const animationItems = document.querySelectorAll('.scroll-animation');

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event and add animation class
function handleScroll() {
  animationItems.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('animated');
    } else {
      item.classList.remove('animated');
    }
  });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check in case elements are already in viewport on page load
handleScroll();


