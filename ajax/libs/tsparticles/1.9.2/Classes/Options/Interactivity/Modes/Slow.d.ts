import { ISlow } from "../../../../Interfaces/Options/Interactivity/Modes/ISlow";
export declare class Slow implements ISlow {
    active: boolean;
    factor: number;
    radius: number;
    constructor();
    load(data: ISlow): void;
}
