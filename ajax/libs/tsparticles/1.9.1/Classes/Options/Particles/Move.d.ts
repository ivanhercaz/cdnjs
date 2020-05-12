import { IMove } from "../../../Interfaces/Options/Particles/IMove";
import { MoveDirection } from "../../../Enums/MoveDirection";
import { OutMode } from "../../../Enums/OutMode";
import { IAttract } from "../../../Interfaces/Options/Particles/IAttract";
export declare class Move implements IMove {
    /**
     *
     * @deprecated this property is obsolete, please use the new outMode
     */
    get out_mode(): OutMode;
    /**
     *
     * @deprecated this property is obsolete, please use the new outMode
     * @param value
     */
    set out_mode(value: OutMode);
    attract: IAttract;
    bounce: boolean;
    direction: MoveDirection;
    enable: boolean;
    outMode: OutMode;
    random: boolean;
    speed: number;
    straight: boolean;
    constructor();
    load(data: IMove): void;
}
