import { Color } from "./Color";
import { LineLinked } from "./LineLinked";
import { Move } from "./Move";
import { ParticlesNumber } from "./ParticlesNumber";
import { Opacity } from "./Opacity";
import { Shape } from "./Shape/Shape";
import { ParticlesSize } from "./ParticlesSize";
import { Rotate } from "./Rotate";
import { Shadow } from "./Shadow";
import { Stroke } from "./Stroke";
export class Particles {
    constructor() {
        this.color = new Color();
        this.lineLinked = new LineLinked();
        this.move = new Move();
        this.number = new ParticlesNumber();
        this.opacity = new Opacity();
        this.rotate = new Rotate();
        this.shape = new Shape();
        this.size = new ParticlesSize();
        this.shadow = new Shadow();
        this.stroke = new Stroke();
    }
    get line_linked() {
        return this.lineLinked;
    }
    set line_linked(value) {
        this.lineLinked = value;
    }
    load(data) {
        var _a, _b;
        if (data !== undefined) {
            if (data.color !== undefined) {
                if (data.color instanceof Array) {
                    this.color = data.color.map((s) => {
                        const tmp = new Color();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    this.color = new Color();
                    this.color.load(data.color);
                }
            }
            if (data.lineLinked !== undefined) {
                this.lineLinked.load(data.lineLinked);
            }
            else if (data.line_linked !== undefined) {
                this.line_linked.load(data.line_linked);
            }
            this.move.load(data.move);
            this.number.load(data.number);
            this.opacity.load(data.opacity);
            this.rotate.load(data.rotate);
            this.shape.load(data.shape);
            this.size.load(data.size);
            this.shadow.load(data.shadow);
            const strokeToLoad = (_a = data.stroke) !== null && _a !== void 0 ? _a : (_b = data.shape) === null || _b === void 0 ? void 0 : _b.stroke;
            if (strokeToLoad !== undefined) {
                if (strokeToLoad instanceof Array) {
                    this.stroke = strokeToLoad.map((s) => {
                        const tmp = new Stroke();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    this.stroke = new Stroke();
                    this.stroke.load(strokeToLoad);
                }
            }
        }
    }
}
//# sourceMappingURL=Particles.js.map