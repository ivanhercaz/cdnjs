import { ICoordinates } from "../../ICoordinates";
export interface IAttract {
    enable: boolean;
    /**
     * @deprecated use the new rotate.x instead
     */
    rotateX: number;
    /**
     * @deprecated use the new rotate.y instead
     */
    rotateY: number;
    rotate: ICoordinates;
}
