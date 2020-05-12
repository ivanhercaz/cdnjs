import { IOptionsInteractivityModes } from "../../../../Interfaces/Options/Interactivity/Modes/IOptionsInteractivityModes";
import { IBubble } from "../../../../Interfaces/Options/Interactivity/Modes/IBubble";
import { IConnect } from "../../../../Interfaces/Options/Interactivity/Modes/IConnect";
import { IGrab } from "../../../../Interfaces/Options/Interactivity/Modes/IGrab";
import { IPush } from "../../../../Interfaces/Options/Interactivity/Modes/IPush";
import { IRemove } from "../../../../Interfaces/Options/Interactivity/Modes/IRemove";
import { IRepulse } from "../../../../Interfaces/Options/Interactivity/Modes/IRepulse";
import { ISlow } from "../../../../Interfaces/Options/Interactivity/Modes/ISlow";
export declare class Modes implements IOptionsInteractivityModes {
    bubble: IBubble;
    connect: IConnect;
    grab: IGrab;
    push: IPush;
    remove: IRemove;
    repulse: IRepulse;
    slow: ISlow;
    constructor();
}
