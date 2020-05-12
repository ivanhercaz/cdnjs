import type { ICharacterShape } from "../../../../Interfaces/Options/Particles/Shape/ICharacterShape";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class CharacterShape implements ICharacterShape {
    fill: boolean;
    font: string;
    style: string;
    value: string | string[];
    weight: string;
    constructor();
    load(data?: RecursivePartial<ICharacterShape>): void;
}
