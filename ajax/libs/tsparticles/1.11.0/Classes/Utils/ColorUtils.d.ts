import { IColor } from "../../Interfaces/Options/Particles/IColor";
import { IRgb } from "../../Interfaces/IRgb";
import { IRgba } from "../../Interfaces/IRgba";
import { IHsl } from "../../Interfaces/IHsl";
import { IHsla } from "../../Interfaces/IHsla";
export declare class ColorUtils {
    static colorToRgb(color: IColor): IRgb | undefined;
    static stringToAlpha(input: string): number | undefined;
    static stringToRgb(input: string): IRgb | undefined;
    static hslToRgb(hsl: IHsl): IRgb;
    static hslaToRgba(hsla: IHsla): IRgba;
    static getRandomRgbColor(min?: number): IRgb;
    static getStyleFromColor(color: IRgb, opacity?: number): string;
    private static hue2rgb;
    private static stringToRgba;
}
