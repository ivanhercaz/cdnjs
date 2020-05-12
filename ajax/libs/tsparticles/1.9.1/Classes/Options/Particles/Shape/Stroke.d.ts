import { IStroke } from "../../../../Interfaces/Options/Particles/Shape/IStroke";
export declare class Stroke implements IStroke {
    color: string;
    width: number;
    constructor();
    load(data: IStroke): void;
}
