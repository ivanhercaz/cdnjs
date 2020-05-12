import { Canvas } from "./Canvas";
import { IRepulse } from "../Interfaces/IRepulse";
import { IBubble } from "../Interfaces/IBubble";
import { IImage } from "../Interfaces/IImage";
import { IContainerInteractivity } from "../Interfaces/IContainerInteractivity";
import { Particles } from "./Particles";
import { Retina } from "./Retina";
import { PolygonMask } from "./PolygonMask";
import { ImageShape } from "./Options/Particles/Shape/ImageShape";
import { IOptions } from "../Interfaces/Options/IOptions";
import { Drawer } from "./Drawer";
/**
 * The object loaded into an HTML element, it'll contain options loaded and all data to let everything working
 */
export declare class Container {
    /**
     * @deprecated this property is obsolete, please use the new drawAnimationFrame
     */
    get drawAnimFrame(): number | undefined;
    /**
     * @deprecated this property is obsolete, please use the new drawAnimationFrame
     * @param value
     */
    set drawAnimFrame(value: number | undefined);
    /**
     * @deprecated this property is obsolete, please use the new checkAnimationFrame
     */
    get checkAnimFrame(): number | undefined;
    /**
     * @deprecated this property is obsolete, please use the new checkAnimationFrame
     * @param value
     */
    set checkAnimFrame(value: number | undefined);
    interactivity: IContainerInteractivity;
    options: IOptions;
    retina: Retina;
    canvas: Canvas;
    particles: Particles;
    polygon: PolygonMask;
    checkAnimationFrame?: number;
    drawAnimationFrame?: number;
    bubble: IBubble;
    repulse: IRepulse;
    images: IImage[];
    lastFrameTime: number;
    pageHidden: boolean;
    drawer: Drawer;
    private readonly _eventListeners;
    constructor(tagId: string, params: IOptions);
    static requestFrame(callback: FrameRequestCallback): number;
    static cancelAnimation(handle: number): void;
    densityAutoParticles(): void;
    destroy(): void;
    exportImg(): void;
    loadImg(image: IImage, optionsImage: ImageShape): Promise<void>;
    refresh(): Promise<void>;
    start(): Promise<void>;
    private init;
    private handleVisibilityChange;
    private checkBeforeDraw;
}
