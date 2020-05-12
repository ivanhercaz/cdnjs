import type { IImageShape } from "../../../../Interfaces/Options/Particles/Shape/IImageShape";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class ImageShape implements IImageShape {
    get replace_color(): boolean;
    set replace_color(value: boolean);
    height: number;
    replaceColor: boolean;
    src: string;
    width: number;
    constructor();
    load(data?: RecursivePartial<IImageShape>): void;
}
