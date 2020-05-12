import type { Particle } from "../Particle";
import type { IStroke } from "../../Interfaces/Options/Particles/Shape/IStroke";
import { IRgb } from "../../Interfaces/IRgb";
export declare class ShapeUtils {
    static drawShape(context: CanvasRenderingContext2D, particle: Particle, radius: number, stroke: IStroke, strokeColor: IRgb | undefined): void;
    private static drawTriangleShape;
    private static drawPolygonShape;
    private static drawStarShape;
    private static drawLineShape;
    private static drawCircleShape;
    private static drawSquareShape;
    private static drawHeartShape;
    private static drawTextShape;
    private static drawGenericPolygonShape;
    private static drawImageShape;
}
