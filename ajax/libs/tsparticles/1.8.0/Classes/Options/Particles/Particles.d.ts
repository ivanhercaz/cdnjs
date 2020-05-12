import { IParticles } from "../../../Interfaces/Options/Particles/IParticles";
import { LineLinked } from "./LineLinked";
import { IParticlesColor } from "../../../Interfaces/Options/Particles/IParticlesColor";
import { ILineLinked } from "../../../Interfaces/Options/Particles/ILineLinked";
import { IMove } from "../../../Interfaces/Options/Particles/IMove";
import { IParticlesNumber } from "../../../Interfaces/Options/Particles/IParticlesNumber";
import { IOpacity } from "../../../Interfaces/Options/Particles/IOpacity";
import { IShape } from "../../../Interfaces/Options/Shape/IShape";
import { ISize } from "../../../Interfaces/Options/Particles/ISize";
export declare class Particles implements IParticles {
    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     */
    get line_linked(): LineLinked;
    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     * @param value
     */
    set line_linked(value: LineLinked);
    color: IParticlesColor;
    lineLinked: ILineLinked;
    move: IMove;
    number: IParticlesNumber;
    opacity: IOpacity;
    shape: IShape;
    size: ISize;
    constructor();
}
