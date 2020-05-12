import type { IOptionLoader } from "../../IOptionLoader";
export interface IImageShape extends IOptionLoader<IImageShape> {
    replace_color: boolean;
    replaceColor: boolean;
    src: string;
    width: number;
    height: number;
}
