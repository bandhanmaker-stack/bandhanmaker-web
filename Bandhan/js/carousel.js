// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;
let autoplayInterval;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    slides[n].classList.add('active');
    indicators[n].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
    resetAutoplay();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
    resetAutoplay();
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
    resetAutoplay();
}

function autoplay() {
    nextSlide();
}

function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(autoplay, 4000);
}

// Event Listeners
document.getElementById('nextBtn')?.addEventListener('click', nextSlide);
document.getElementById('prevBtn')?.addEventListener('click', prevSlide);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => goToSlide(index));
});

// Initialize carousel
showSlide(0);
autoplayInterval = setInterval(autoplay, 4000);

// Pause autoplay on hover
document.querySelector('.hero-carousel')?.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});

// Resume autoplay on mouse leave
document.querySelector('.hero-carousel')?.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(autoplay, 4000);
});