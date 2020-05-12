import { Container } from "./Container";
import { IDimension } from "../Interfaces/IDimension";
/**
 * Canvas manager
 */
export declare class Canvas {
    /**
     * The particles canvas
     */
    element: HTMLCanvasElement;
    /**
     * The particles canvas context
     */
    context: CanvasRenderingContext2D | null;
    /**
     * The particles canvas dimension
     */
    dimension: IDimension;
    /**
     * The particles canvas container element id
     */
    tagId: string;
    /**
     * The ratio used by the particles canvas
     */
    pxRatio: number;
    /**
     * The parent container
     */
    private readonly container;
    /**
     * Constructor of canvas manager
     * @param container the parent container
     * @param tagId the particles container element id
     */
    constructor(container: Container, tagId: string);
    /**
     * Initializes the canvas element
     */
    init(): void;
    /**
     * Calculates the size of the canvas
     */
    size(): void;
    /**
     * Paints the canvas background
     */
    paint(): void;
    private paintBase;
    /**
     * Clears the canvas content
     */
    clear(): void;
}
