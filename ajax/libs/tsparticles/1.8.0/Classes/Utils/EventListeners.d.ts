import { Container } from "../Container";
/**
 * Particles container event listeners manager
 */
export declare class EventListeners {
    private readonly container;
    /**
     * Events listener constructor
     * @param container the calling container
     */
    constructor(container: Container);
    /**
     * Initializing event listeners
     */
    addEventsListeners(): void;
    /**
     * Mouse/Touch move event
     * @param e the event arguments
     */
    private mouseTouchMove;
    /**
     * Mouse/Touch event finish
     */
    private mouseTouchFinish;
    /**
     * Mouse/Touch click/tap event
     * @param e the click event arguments
     */
    private mouseTouchClick;
    /**
     * Mouse/Touch click/tap event implementation
     * @param e the click event arguments
     */
    private doMouseTouchClick;
}
