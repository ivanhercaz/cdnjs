import { ICharacterShape } from "../../../../Interfaces/Options/Particles/Shape/ICharacterShape";
export declare class CharacterShape implements ICharacterShape {
    fill: boolean;
    font: string;
    style: string;
    value: string | string[];
    weight: string;
    constructor();
    load(data: ICharacterShape): void;
}
