import { IPolygonMask } from "../../../Interfaces/Options/PolygonMask/IPolygonMask";
import { PolygonMaskType } from "../../../Enums/PolygonMaskType";
import { IPolygonMaskDraw } from "../../../Interfaces/Options/PolygonMask/IPolygonMaskDraw";
import { IPolygonMaskMove } from "../../../Interfaces/Options/PolygonMask/IPolygonMaskMove";
export declare class PolygonMask implements IPolygonMask {
    draw: IPolygonMaskDraw;
    move: IPolygonMaskMove;
    scale: number;
    type: PolygonMaskType;
    url: string;
    constructor();
}
