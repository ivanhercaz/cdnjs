import { Container } from "./Container";
import { IVelocity } from "../Interfaces/IVelocity";
import { ISize } from "../Interfaces/ISize";
import { IOpacity } from "../Interfaces/IOpacity";
import { ICoordinates } from "../Interfaces/ICoordinates";
import { IParticleImage } from "../Interfaces/IParticleImage";
import { ShapeType } from "../Enums/ShapeType";
import { IRgb } from "../Interfaces/IRgb";
/**
 * The single particle object
 */
export declare class Particle {
    radius: number;
    size: ISize;
    initialPosition?: ICoordinates;
    position: ICoordinates;
    offset: ICoordinates;
    color: IRgb | null;
    opacity: IOpacity;
    velocity: IVelocity;
    shape?: ShapeType;
    image?: IParticleImage;
    readonly initialVelocity: IVelocity;
    private readonly _updater;
    private readonly _bubbler;
    private readonly _repulser;
    private readonly _connecter;
    private readonly _drawer;
    private readonly _grabber;
    private readonly _interactionManager;
    private readonly _container;
    constructor(container: Container, position?: ICoordinates);
    private static calculateVelocity;
    update(index: number, delta: number): void;
    interact(p2: Particle): void;
    draw(): void;
    checkOverlap(position?: ICoordinates): void;
    private calcPosition;
}
