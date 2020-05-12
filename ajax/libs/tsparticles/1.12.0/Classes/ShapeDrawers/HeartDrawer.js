export class HeartDrawer {
    draw(context, particle, radius) {
        const x = -radius / 2;
        const y = -radius / 2;
        context.moveTo(x, y + radius / 4);
        context.quadraticCurveTo(x, y, x + radius / 4, y);
        context.quadraticCurveTo(x + radius / 2, y, x + radius / 2, y + radius / 4);
        context.quadraticCurveTo(x + radius / 2, y, x + radius * 3 / 4, y);
        context.quadraticCurveTo(x + radius, y, x + radius, y + radius / 4);
        context.quadraticCurveTo(x + radius, y + radius / 2, x + radius * 3 / 4, y + radius * 3 / 4);
        context.lineTo(x + radius / 2, y + radius);
        context.lineTo(x + radius / 4, y + radius * 3 / 4);
        context.quadraticCurveTo(x, y + radius / 2, x, y + radius / 4);
    }
}
//# sourceMappingURL=HeartDrawer.js.map