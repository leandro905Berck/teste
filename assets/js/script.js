function drawTrail() {
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
