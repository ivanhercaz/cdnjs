import { IPolygonMaskDraw } from "../../../Interfaces/Options/PolygonMask/IPolygonMaskDraw";
export declare class Draw implements IPolygonMaskDraw {
    enable: boolean;
    lineColor: string;
    lineWidth: number;
    constructor();
    load(data: IPolygonMaskDraw): void;
}
