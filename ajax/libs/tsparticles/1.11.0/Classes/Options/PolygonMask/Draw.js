import { PolygonMaskDrawStroke } from "./PolygonMaskDrawStroke";
export class Draw {
    constructor() {
        this.enable = false;
        this.stroke = new PolygonMaskDrawStroke();
    }
    get lineWidth() {
        return this.stroke.width;
    }
    set lineWidth(value) {
        this.stroke.width = value;
    }
    get lineColor() {
        return this.stroke.color;
    }
    set lineColor(value) {
        this.stroke.color = value;
    }
    load(data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.stroke !== undefined) {
                this.stroke.load(data.stroke);
            }
            else {
                if (data.lineColor !== undefined) {
                    this.lineColor = data.lineColor;
                }
                if (data.lineWidth !== undefined) {
                    this.lineWidth = data.lineWidth;
                }
            }
        }
    }
}
//# sourceMappingURL=Draw.js.map