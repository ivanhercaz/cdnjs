import { IParticlesColor } from "../../../Interfaces/Options/Particles/IParticlesColor";
import { IColor } from "../../../Interfaces/IColor";
export declare class Color implements IParticlesColor {
    value: string | IColor | string[];
    constructor();
    load(data: IParticlesColor): void;
}
