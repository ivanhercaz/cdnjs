import type { IOptionLoader } from "../../IOptionLoader";
export interface IPolygonShape extends IOptionLoader<IPolygonShape> {
    nb_sides: number;
    sides: number;
}
