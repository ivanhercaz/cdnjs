import type { Container } from "./Classes/Container";
import type { IOptions } from "./Interfaces/Options/IOptions";
import type { RecursivePartial } from "./Types/RecursivePartial";
declare global {
    interface Window {
        particlesJS: any;
        tsParticles: Main;
        pJSDom: () => Container[];
    }
}
declare class Main {
    loadFromArray(tagId: string, params: RecursivePartial<IOptions>[], index?: number): Promise<Container | undefined>;
    load(tagId: string, params: RecursivePartial<IOptions>): Promise<Container | undefined>;
    loadJSON(tagId: string, pathConfigJson: string): Promise<Container | undefined>;
    setOnClickHandler(callback: EventListenerOrEventListenerObject): void;
    dom(): Container[];
    domItem(index: number): Container | undefined;
}
export {};
