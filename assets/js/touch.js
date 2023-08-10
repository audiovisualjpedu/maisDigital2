let slideIndex = 1;
const slides = document.querySelectorAll('.carousel-slider .card');
const slider = document.querySelector('.carousel-slider');

document.getElementById('prevBtn').addEventListener('click', () => moveSlides(-1));
document.getElementById('nextBtn').addEventListener('click', () => moveSlides(1));

function moveSlides(n) {
    if (slideIndex + n > slides.length - 2) {
        slideIndex = 1;
    } else if (slideIndex + n < 1) {
        slideIndex = slides.length - 2;
    } else {
        slideIndex += n;
    }
    updateCarousel();
}

function updateCarousel() {
    let offset = -((slideIndex - 1) * slides[0].offsetWidth);
    slider.style.transform = 'translateX(' + offset + 'px)';
}
