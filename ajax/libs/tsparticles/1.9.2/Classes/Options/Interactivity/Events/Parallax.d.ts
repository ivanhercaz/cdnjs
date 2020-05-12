import { IParallax } from "../../../../Interfaces/Options/Interactivity/Events/IParallax";
export declare class Parallax implements IParallax {
    enable: boolean;
    force: number;
    smooth: number;
    constructor();
    load(data: IParallax): void;
}
