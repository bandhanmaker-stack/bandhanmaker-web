// Laser Background Animation
const canvas = document.getElementById('laserCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let time = 0;

const lasers = [
    { angle: 15, speed: 0.01, color: 'rgba(0, 229, 255, 0.3)' },
    { angle: 45, speed: 0.008, color: 'rgba(255, 20, 147, 0.2)' },
    { angle: 75, speed: 0.009, color: 'rgba(0, 229, 255, 0.25)' },
    { angle: 105, speed: 0.01, color: 'rgba(255, 20, 147, 0.15)' },
    { angle: 135, speed: 0.007, color: 'rgba(0, 229, 255, 0.2)' },
    { angle: 165, speed: 0.011, color: 'rgba(255, 165, 0, 0.15)' },
];

function drawLaser(angle, color, offset) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const length = Math.max(canvas.width, canvas.height) * 1.5;

    const rad = (angle + offset) * Math.PI / 180;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(
        centerX + Math.cos(rad) * length,
        centerY + Math.sin(rad) * length
    );
    ctx.stroke();

    // Glow effect
    ctx.shadowBlur = 15;
    ctx.shadowColor = color;
    ctx.stroke();
    ctx.shadowBlur = 0;
}

function animate() {
    // Slight trail effect
    ctx.fillStyle = 'rgba(15, 20, 25, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    lasers.forEach(laser => {
        const offset = time * laser.speed * 100;
        drawLaser(laser.angle, laser.color, offset);
    });

    time += 0.016;
    requestAnimationFrame(animate);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Adjust canvas on orientation change
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, 100);
});