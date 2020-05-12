import { IImageShape } from "../../../../Interfaces/Options/Shape/IImageShape";
export declare class ImageShape implements IImageShape {
    /**
     *
     * @deprecated this property is obsolete, please use the new replaceColor
     */
    get replace_color(): boolean;
    /**
     *
     * @deprecated this property is obsolete, please use the new replaceColor
     * @param value
     */
    set replace_color(value: boolean);
    height: number;
    replaceColor: boolean;
    src: string;
    width: number;
    constructor();
}
