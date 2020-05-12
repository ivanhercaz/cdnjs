import { IShadow } from "../../../Interfaces/Options/Particles/IShadow";
import { ICoordinates } from "../../../Interfaces/ICoordinates";
export declare class Shadow implements IShadow {
    blur: number;
    color: string;
    enable: boolean;
    offset: ICoordinates;
    constructor();
}
