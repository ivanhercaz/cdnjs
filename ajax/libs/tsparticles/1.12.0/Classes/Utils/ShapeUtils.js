export class ShapeUtils {
    static addShapeDrawer(type, drawer) {
        if (!this.drawers[type]) {
            this.drawers[type] = drawer;
        }
    }
    static drawShape(context, particle, radius) {
        if (!particle.shape) {
            return;
        }
        const drawer = this.drawers[particle.shape];
        if (!drawer) {
            return;
        }
        drawer.draw(context, particle, radius);
    }
}
ShapeUtils.drawers = {};
//# sourceMappingURL=ShapeUtils.js.map