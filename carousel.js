// carousel.js

const track = document.getElementById('carousel-track');
let scrollPosition = 0;
let scrollSpeed = 1;

function animateCarousel() {
  scrollPosition += scrollSpeed;
  if (scrollPosition >= track.scrollWidth / 2) {
    scrollPosition = 0;
  }
  track.scrollLeft = scrollPosition;
  requestAnimationFrame(animateCarousel);
}

animateCarousel();
