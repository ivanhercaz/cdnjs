import { IClickEvent } from "../../../../Interfaces/Options/Interactivity/Events/IClickEvent";
import { ClickMode } from "../../../../Enums/Modes/ClickMode";
export declare class ClickEvent implements IClickEvent {
    enable: boolean;
    mode: ClickMode | ClickMode[];
    constructor();
}
