import type { IStroke } from "../../../../Interfaces/Options/Particles/Shape/IStroke";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IColor } from "../../../../Interfaces/Options/Particles/IColor";
export declare class Stroke implements IStroke {
    color: string | IColor;
    width: number;
    constructor();
    load(data?: RecursivePartial<IStroke>): void;
}
