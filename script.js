let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slider img');
  const totalSlides = slides.length;
  
  // Ensure the index is within the correct range
  if (index >= totalSlides) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = totalSlides - 1;
  } else {
    slideIndex = index;
  }

  // Adjust the position of the slides
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(step) {
  showSlide(slideIndex + step);
}

// Initial slide display
showSlide(slideIndex);