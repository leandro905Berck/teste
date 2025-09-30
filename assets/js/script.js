// Adicione um canvas ao seu HTML
const canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.pointerEvents = 'none';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
const trail = [];
const trailLength = 30;
const trailColor = 'rgba(0, 150, 255, 0.7)';

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

document.addEventListener('mousemove', (e) => {
    trail.push({ x: e.clientX, y: e.clientY });
    if (trail.length > trailLength) {
        trail.shift();
    }
    drawTrail();
});

function drawTrail() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (let i = 0; i < trail.length - 1; i++) {
        const opacity = ((i + 1) / trail.length * 0.7);
        ctx.strokeStyle = `rgba(0, 150, 255, ${opacity})`;
        ctx.moveTo(trail[i].x, trail[i].y);
        ctx.lineTo(trail[i + 1].x, trail[i + 1].y);
        ctx.stroke();
    }
}
