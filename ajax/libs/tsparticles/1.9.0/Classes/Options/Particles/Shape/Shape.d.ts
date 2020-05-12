import { IShape } from "../../../../Interfaces/Options/Particles/Shape/IShape";
import { ShapeType } from "../../../../Enums/ShapeType";
import { IImageShape } from "../../../../Interfaces/Options/Particles/Shape/IImageShape";
import { ICharacterShape } from "../../../../Interfaces/Options/Particles/Shape/ICharacterShape";
import { IPolygonShape } from "../../../../Interfaces/Options/Particles/Shape/IPolygonShape";
import { IStroke } from "../../../../Interfaces/Options/Particles/Shape/IStroke";
export declare class Shape implements IShape {
    character: ICharacterShape;
    image: IImageShape | IImageShape[];
    polygon: IPolygonShape;
    stroke: IStroke;
    type: ShapeType | ShapeType[];
    constructor();
    load(data: IShape): void;
}
