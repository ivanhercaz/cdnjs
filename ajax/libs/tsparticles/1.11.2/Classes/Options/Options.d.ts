import type { IOptions } from "../../Interfaces/Options/IOptions";
import type { IInteractivity } from "../../Interfaces/Options/Interactivity/IInteractivity";
import type { IParticles } from "../../Interfaces/Options/Particles/IParticles";
import type { IPolygonMask } from "../../Interfaces/Options/PolygonMask/IPolygonMask";
import type { IBackgroundMask } from "../../Interfaces/Options/BackgroundMask/IBackgroundMask";
import type { RecursivePartial } from "../../Types/RecursivePartial";
import { PresetType } from "../../Enums/PresetType";
export declare class Options implements IOptions {
    get fps_limit(): number;
    set fps_limit(value: number);
    get retina_detect(): boolean;
    set retina_detect(value: boolean);
    detectRetina: boolean;
    fpsLimit: number;
    interactivity: IInteractivity;
    particles: IParticles;
    polygon: IPolygonMask;
    backgroundMask: IBackgroundMask;
    pauseOnBlur: boolean;
    preset?: PresetType | PresetType[];
    constructor();
    load(data: RecursivePartial<IOptions>): void;
    private importPreset;
}
