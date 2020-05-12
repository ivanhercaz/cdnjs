import type { RecursivePartial } from "../../Types/RecursivePartial";
import type { IOptions } from "../../Interfaces/Options/IOptions";
import { PresetType } from "../../Enums/PresetType";
export declare class Presets {
    static getPreset(key: PresetType): RecursivePartial<IOptions> | undefined;
    private static get available();
    private static get basic();
    private static get backgroundMask();
    private static get fontAwesome();
    private static get snow();
    private static get bouncing();
    private static get stars();
}
