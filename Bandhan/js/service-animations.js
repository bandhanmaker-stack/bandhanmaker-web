document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-detailed');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            removeActiveClass();
            const animationType = getAnimationType(card);
            card.classList.add('active', animationType);
            createServiceParticles(card, animationType);

            setTimeout(() => {
                card.classList.remove(animationType);
            }, 800);
        });
    });

    function getAnimationType(card) {
        const title = card.querySelector('h2').textContent.toLowerCase();

        if (title.includes('wedding')) return 'wedding-animate';
        if (title.includes('sound') || title.includes('light')) return 'sound-animate';
        if (title.includes('photoshoot')) return 'photo-animate';
        if (title.includes('stage')) return 'stage-animate';
        if (title.includes('exhibition')) return 'exhibition-animate';
        if (title.includes('party') || title.includes('parties')) return 'party-animate';

        return 'pulse-animate';
    }

    function removeActiveClass() {
        document.querySelectorAll('.service-detailed.active').forEach(card => {
            card.classList.remove('active');
        });
    }

    function createServiceParticles(card, animationType) {
        const rect = card.getBoundingClientRect();
        const particleCount = animationType === 'wedding-animate' ? 15 : 8;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '999';

            if (animationType === 'wedding-animate') {
                particle.innerHTML = ['💍', '🎊', '✨', '💐'][Math.floor(Math.random() * 4)];
                particle.style.fontSize = '20px';
            } else if (animationType === 'photo-animate') {
                particle.innerHTML = '📸';
                particle.style.fontSize = '18px';
            } else if (animationType === 'sound-animate') {
                particle.innerHTML = ['🎵', '🎶'][Math.floor(Math.random() * 2)];
                particle.style.fontSize = '16px';
            } else if (animationType === 'exhibition-animate') {
                particle.innerHTML = '✨';
                particle.style.fontSize = '14px';
            } else if (animationType === 'party-animate') {
                particle.innerHTML = ['🎉', '🎊'][Math.floor(Math.random() * 2)];
                particle.style.fontSize = '18px';
            } else {
                particle.innerHTML = '⭐';
                particle.style.fontSize = '14px';
            }

            particle.style.left = rect.left + rect.width / 2 + 'px';
            particle.style.top = rect.top + rect.height / 2 + 'px';
            particle.style.animation = `particleFloat 0.8s ease-out forwards`;

            document.body.appendChild(particle);

            setTimeout(() => particle.remove(), 800);
        }
    }
});

const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(${Math.cos(Math.random() * Math.PI * 2) * 100}px, ${-Math.random() * 150}px) scale(0);
        }
    }
`;
document.head.appendChild(style);
