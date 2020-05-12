import { IParticlesNumber } from "../../../Interfaces/Options/Particles/IParticlesNumber";
import { IDensity } from "../../../Interfaces/Options/Particles/IDensity";
export declare class ParticlesNumber implements IParticlesNumber {
    density: IDensity;
    limit: number;
    value: number;
    constructor();
}
