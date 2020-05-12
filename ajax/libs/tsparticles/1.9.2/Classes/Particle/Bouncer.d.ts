import { Container } from "../Container";
import { Particle } from "../Particle";
export declare class Bouncer {
    private readonly container;
    private readonly particle;
    constructor(container: Container, particle: Particle);
    bounce(p2: Particle): void;
}
