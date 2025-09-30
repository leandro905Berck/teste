document.addEventListener('mousemove', (e) => {
    const dot = createDot(e.clientX, e.clientY, trailColor);
    trail.push(dot);
    if (trail.length > trailLength) {
        const oldDot = trail.shift();
        oldDot.style.opacity = '0';
        setTimeout(() => oldDot.remove(), 300);
    }
    // Suaviza a opacidade dos pontos do rastro
    trail.forEach((d, i) => {
        d.style.opacity = ((i + 1) / trail.length * 0.7).toString();
    });
});
