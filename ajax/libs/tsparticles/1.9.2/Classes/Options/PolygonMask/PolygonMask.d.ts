import { IPolygonMask } from "../../../Interfaces/Options/PolygonMask/IPolygonMask";
import { PolygonMaskType } from "../../../Enums/PolygonMaskType";
import { IPolygonMaskDraw } from "../../../Interfaces/Options/PolygonMask/IPolygonMaskDraw";
import { IPolygonMaskMove } from "../../../Interfaces/Options/PolygonMask/IPolygonMaskMove";
import { PolygonMaskInlineArrangement } from "../../../Enums/PolygonMaskInlineArrangement";
export declare class PolygonMask implements IPolygonMask {
    draw: IPolygonMaskDraw;
    inlineArrangement: PolygonMaskInlineArrangement;
    move: IPolygonMaskMove;
    scale: number;
    type: PolygonMaskType;
    url: string;
    constructor();
    load(data: IPolygonMask): void;
}
