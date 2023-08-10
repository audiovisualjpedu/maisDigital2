(function() {
    const carousel = {
        slider: document.querySelector('.carousel-slider'),
        slidePosition: 0,
        startTouchPositionX: null,
        currentTranslate: 0,
        lastTranslate: 0,
        isDragging: false,
        slideWidth: 250, // supondo que cada slide tem 250px
        totalSlides: document.querySelector('.carousel-slider').children.length, // Pega o número de slides baseado nos elementos filhos

        init: function() {
            this.attachEventListeners();
        },

        attachEventListeners: function() {
            this.slider.addEventListener('touchstart', this.touchStart.bind(this));
            this.slider.addEventListener('touchmove', this.touchMove.bind(this));
            this.slider.addEventListener('touchend', this.touchEnd.bind(this));
            document.querySelector('#prev').addEventListener('click', this.prevSlide.bind(this));
            document.querySelector('#next').addEventListener('click', this.nextSlide.bind(this));
        },

        touchStart: function(event) {
            this.startTouchPositionX = event.touches[0].clientX;
            this.isDragging = true;
        },

        touchMove: function(event) {
            if (!this.isDragging) return;

            const currentPosition = event.touches[0].clientX;
            this.currentTranslate = this.lastTranslate + currentPosition - this.startTouchPositionX;

            this.slider.style.transform = `translateX(${this.currentTranslate}px)`;
        },

        touchEnd: function() {
            this.isDragging = false;

            const movedBy = this.currentTranslate - this.lastTranslate;

            if (Math.abs(movedBy) > 50) {
                if (movedBy < 0 && this.slidePosition !== this.totalSlides - 1) {
                    this.nextSlide();
                } else if (movedBy > 0 && this.slidePosition !== 0) {
                    this.prevSlide();
                }
            } else {
                this.slider.style.transform = `translateX(${this.lastTranslate}px)`;
            }

            this.lastTranslate = this.currentTranslate;
        },

        nextSlide: function() {
            if (this.slidePosition < this.totalSlides - 1) {
                this.slidePosition++;
                this.updateSlidePosition();
            }
        },

        prevSlide: function() {
            if (this.slidePosition > 0) {
                this.slidePosition--;
                this.updateSlidePosition();
            }
        },

        updateSlidePosition: function() {
            this.lastTranslate = -this.slidePosition * this.slideWidth;
            this.slider.style.transform = `translateX(${this.lastTranslate}px)`;
        }
    };

    carousel.init();
})();
