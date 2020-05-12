import { Color } from "./Color";
import { LineLinked } from "./LineLinked";
import { Move } from "./Move";
import { ParticlesNumber } from "./ParticlesNumber";
import { Opacity } from "./Opacity";
import { Shape } from "./Shape/Shape";
import { ParticlesSize } from "./ParticlesSize";
import { Rotate } from "./Rotate";
import { Shadow } from "./Shadow";
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
    }
    get line_linked() {
        return this.lineLinked;
    }
    set line_linked(value) {
        this.lineLinked = value;
    }
    load(data) {
        if (data !== undefined) {
            this.color.load(data.color);
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
        }
    }
}
//# sourceMappingURL=Particles.js.map