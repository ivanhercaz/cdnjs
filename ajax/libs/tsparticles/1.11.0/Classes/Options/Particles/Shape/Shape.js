import { ShapeType } from "../../../../Enums/ShapeType";
import { CharacterShape } from "./CharacterShape";
import { ImageShape } from "./ImageShape";
import { PolygonShape } from "./PolygonShape";
import { Stroke } from "./Stroke";
export class Shape {
    constructor() {
        this.character = new CharacterShape();
        this.image = new ImageShape();
        this.polygon = new PolygonShape();
        this.stroke = new Stroke();
        this.type = ShapeType.circle;
    }
    get images() {
        if (this.image instanceof Array) {
            return this.image;
        }
        return [];
    }
    set images(value) {
        this.image = value;
    }
    load(data) {
        if (data !== undefined) {
            if (data.character !== undefined) {
                if (data.character instanceof Array) {
                    this.character = data.character.map((s) => {
                        const tmp = new CharacterShape();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    this.character = new CharacterShape();
                    this.character.load(data.character);
                }
            }
            if (data.image !== undefined) {
                if (data.image instanceof Array) {
                    this.image = data.image.map((s) => {
                        const tmp = new ImageShape();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    this.image = new ImageShape();
                    this.image.load(data.image);
                }
            }
            if (data.stroke !== undefined) {
                if (data.stroke instanceof Array) {
                    this.stroke = data.stroke.map((s) => {
                        const tmp = new Stroke();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    this.stroke = new Stroke();
                    this.stroke.load(data.stroke);
                }
            }
            if (data.polygon !== undefined) {
                if (data.polygon instanceof Array) {
                    this.polygon = data.polygon.map((s) => {
                        const tmp = new PolygonShape();
                        tmp.load(s);
                        return tmp;
                    });
                }
                else {
                    this.polygon = new PolygonShape();
                    this.polygon.load(data.polygon);
                }
            }
            if (data.type !== undefined) {
                this.type = data.type;
            }
        }
    }
}
//# sourceMappingURL=Shape.js.map