import { Color } from "../Particles/Color";
import { ColorUtils } from "../../Utils/ColorUtils";
export class PolygonMaskDrawStroke {
    constructor() {
        this.color = new Color();
        this.width = 0.5;
        this.opacity = 1;
    }
    load(data) {
        var _a;
        if (data !== undefined) {
            if (data.color !== undefined) {
                if (typeof this.color === "string") {
                    this.color = data.color;
                    this.opacity = (_a = ColorUtils.stringToAlpha(data.color)) !== null && _a !== void 0 ? _a : this.opacity;
                }
                else {
                    this.color.load(data.color);
                }
            }
            if (data.width !== undefined) {
                this.width = data.width;
            }
        }
    }
}
//# sourceMappingURL=PolygonMaskDrawStroke.js.map