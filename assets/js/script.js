document.addEventListener('DOMContentLoaded', () => {
    const trailLength = 20;
    const trail = [];
    let trailColor = 'rgba(0, 150, 255, 0.7)';

    function createDot(x, y, color) {
        const dot = document.createElement('div');
        dot.style.position = 'fixed';
        dot.style.left = `${x - 5}px`;
        dot.style.top = `${y - 5}px`;
        dot.style.width = '10px';
        dot.style.height = '10px';
        dot.style.borderRadius = '50%';
        dot.style.pointerEvents = 'none';
        dot.style.background = color;
        dot.style.zIndex = 9999;
        dot.style.transition = 'opacity 0.3s';
        document.body.appendChild(dot);
        return dot;
    }

    document.addEventListener('mousemove', (e) => {
        const dot = createDot(e.clientX, e.clientY, trailColor);
        trail.push(dot);
        if (trail.length > trailLength) {
            const oldDot = trail.shift();
            oldDot.style.opacity = '0';
            setTimeout(() => oldDot.remove(), 300);
        }
    });

    document.addEventListener('mousedown', () => {
        // Random color on click
        const r = Math.floor(Math.random() * 200 + 55);
        const g = Math.floor(Math.random() * 200 + 55);
        const b = Math.floor(Math.random() * 200 + 55);
        trailColor = `rgba(${r},${g},${b},0.7)`;
    });
});