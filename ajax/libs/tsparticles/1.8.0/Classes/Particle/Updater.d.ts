import { Container } from "../Container";
import { Particle } from "../Particle";
/**
 * Particle updater, it manages movement
 */
export declare class Updater {
    private readonly particle;
    private readonly container;
    constructor(container: Container, particle: Particle);
    update(delta: number): void;
    private move;
    private getProximitySpeedFactor;
    private moveParallax;
    private updateOpacity;
    private updateSize;
    private fixOutOfCanvasPosition;
    private updateOutMode;
    private updateBounce;
    private static checkBounds;
    private polygonBounce;
}
