import { Container } from "./Container";
import type { ICoordinates } from "../Interfaces/ICoordinates";
export declare class PolygonMask {
    redrawTimeout?: number;
    raw?: ICoordinates[];
    svg?: SVGSVGElement;
    path?: SVGPathElement;
    private readonly container;
    private readonly path2DSupported;
    private polygonPath?;
    private polygonPathLength;
    private width;
    private height;
    private offset?;
    constructor(container: Container);
    checkInsidePolygon(position: ICoordinates | undefined | null): boolean;
    randomPointInPolygon(): ICoordinates;
    parseSvgPathToPolygon(svgUrl?: string): Promise<ICoordinates[] | undefined>;
    drawPolygon(): void;
    drawPointsOnPolygonPath(): void;
    private getRandomPointOnPolygonPath;
    private getRandomPointOnPolygonPathByLength;
    private getEquidistantPointOnPolygonPathByIndex;
    private getPoingOnPolygonPathByIndex;
    private createPath2D;
}
