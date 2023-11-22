let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-slide-gallery').length;
const carousel = document.querySelector('.carousel-gallery');

function showSlide(index) {
  const slideWidth = document.querySelector('.carousel-slide-gallery').offsetWidth;
  const gap = 10; // Adicione o valor do gap entre as imagens
  const containerWidth = document.querySelector('.carousel-container-gallery').offsetWidth;
  const centerOffset = (containerWidth - slideWidth - gap) / 2;

  carousel.style.transform = `translateX(${-index * (slideWidth + gap) + centerOffset}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
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
let intervalId;

function startCarousel() {
  intervalId = setInterval(nextSlide, 4000);
}

startCarousel();

document.querySelector('.carousel-container-gallery').addEventListener('mouseenter', () => {
  clearInterval(intervalId);
});

document.querySelector('.carousel-container-gallery').addEventListener('mouseleave', () => {
  startCarousel();
});
