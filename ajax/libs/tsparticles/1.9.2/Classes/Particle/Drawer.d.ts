import { Bubbler } from "./Bubbler";
import { Container } from "../Container";
import { Particle } from "../Particle";
/**
 * Particle draw manager
 */
export declare class Drawer {
    private readonly particle;
    private readonly container;
    private readonly bubbler;
    private readonly text?;
    constructor(container: Container, particle: Particle, bubbler: Bubbler);
    private static subDrawShape;
    draw(): void;
    private drawShape;
    private subDraw;
}
