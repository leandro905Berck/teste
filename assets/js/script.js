const TRAIL_DURATION = 2000; // milissegundos (2 segundos)

function drawTrail() {
    const now = Date.now();
    // Remove pontos antigos
    while (trail.length && now - trail[0].timestamp > TRAIL_DURATION) {
        trail.shift();
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (trail.length < 2) return;
    ctx.beginPath();
    ctx.moveTo(trail[0].x, trail[0].y);
    for (let i = 1; i < trail.length; i++) {
        ctx.lineTo(trail[i].x, trail[i].y);
    }
    ctx.strokeStyle = trailColor;
    ctx.lineWidth = 3;
    ctx.stroke();
}

// Ao adicionar um ponto ao rastro:
function addTrailPoint(x, y) {
    trail.push({ x, y, timestamp: Date.now() });
}
