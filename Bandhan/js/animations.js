// Scroll-triggered animations using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal');

            // Add staggered delays for multiple elements
            const siblings = entry.target.parentElement.querySelectorAll('.service-item, .portfolio-card, .feature-card, .stat-item');
            siblings.forEach((sibling, index) => {
                sibling.style.animationDelay = (index * 0.1) + 's';
            });

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.service-item, .portfolio-card, .feature-card, .stat-item').forEach(el => {
    observer.observe(el);
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const canvas = document.getElementById('laserCanvas');

    if (canvas) {
        // Subtle parallax on laser background
        canvas.style.transform = `translateY(${scrolled * 0.05}px)`;
    }
});

// Number counter animation
function animateCounter(element, target, duration = 2000) {
    const start = parseInt(element.textContent);
    const increment = (target - start) / (duration / 16);
    let current = start;

    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Trigger counter animations when stats section is visible
const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');

            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const match = text.match(/(\d+)/);
                if (match) {
                    const target = parseInt(match[1]);
                    animateCounter(stat, target);
                }
            });

            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Page load animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Fade in animations on page load
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hero-content, .section-header');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`;
    });
});