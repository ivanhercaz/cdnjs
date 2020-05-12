import { ILineLinked } from "../../../Interfaces/Options/Particles/ILineLinked";
export declare class LineLinked implements ILineLinked {
    blink: boolean;
    color: string;
    consent: boolean;
    distance: number;
    enable: boolean;
    opacity: number;
    width: number;
    constructor();
    load(data: ILineLinked): void;
}
