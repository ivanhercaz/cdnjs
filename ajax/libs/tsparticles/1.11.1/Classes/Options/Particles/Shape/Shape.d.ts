import type { IShape } from "../../../../Interfaces/Options/Particles/Shape/IShape";
import { ShapeType } from "../../../../Enums/ShapeType";
import type { IImageShape } from "../../../../Interfaces/Options/Particles/Shape/IImageShape";
import type { ICharacterShape } from "../../../../Interfaces/Options/Particles/Shape/ICharacterShape";
import type { IPolygonShape } from "../../../../Interfaces/Options/Particles/Shape/IPolygonShape";
import type { IStroke } from "../../../../Interfaces/Options/Particles/Shape/IStroke";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare class Shape implements IShape {
    get images(): IImageShape[];
    set images(value: IImageShape[]);
    character: ICharacterShape | ICharacterShape[];
    image: IImageShape | IImageShape[];
    polygon: IPolygonShape | IPolygonShape[];
    stroke: IStroke | IStroke[];
    type: ShapeType | ShapeType[];
    constructor();
    load(data?: RecursivePartial<IShape>): void;
}
