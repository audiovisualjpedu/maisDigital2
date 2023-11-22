let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-slide-gallery').length;
const carousel = document.querySelector('.carousel-gallery');

function showSlide(index) {
  const slideWidth = document.querySelector('.carousel-slide-gallery').offsetWidth;
  carousel.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 2 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Image zoom
const slides = document.querySelectorAll('.carousel-slide-gallery');
slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const zoomedImg = document.createElement('img');
    zoomedImg.src = slide.src;
    zoomedImg.alt = `Zoomed Image ${index + 1}`;

    overlay.appendChild(zoomedImg);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});

// Automatic carousel
setInterval(nextSlide, 4000);
