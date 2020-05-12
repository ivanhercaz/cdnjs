import { IRotateAnimation } from "../../../Interfaces/Options/Particles/IRotateAnimation";
export declare class RotateAnimation implements IRotateAnimation {
    enable: boolean;
    speed: number;
    sync: boolean;
    constructor();
    load(data: IRotateAnimation): void;
}
