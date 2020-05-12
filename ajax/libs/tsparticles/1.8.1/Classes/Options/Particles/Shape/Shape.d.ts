import { IShape } from "../../../../Interfaces/Options/Shape/IShape";
import { ShapeType } from "../../../../Enums/ShapeType";
import { IImageShape } from "../../../../Interfaces/Options/Shape/IImageShape";
import { ICharacterShape } from "../../../../Interfaces/Options/Shape/ICharacterShape";
import { IPolygonShape } from "../../../../Interfaces/Options/Shape/IPolygonShape";
import { IStroke } from "../../../../Interfaces/Options/Shape/IStroke";
export declare class Shape implements IShape {
    character: ICharacterShape;
    image: IImageShape | IImageShape[];
    polygon: IPolygonShape;
    stroke: IStroke;
    type: ShapeType | ShapeType[];
    constructor();
}
