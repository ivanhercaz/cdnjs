import { ShapeType } from "../../Enums/ShapeType";
import { ColorUtils } from "./ColorUtils";
export class ShapeUtils {
    static drawShape(context, particle, radius, stroke, strokeColor) {
        var _a, _b;
        const pos = {
            x: particle.offset.x,
            y: particle.offset.y,
        };
        const sides = (_b = (_a = particle.polygon) === null || _a === void 0 ? void 0 : _a.sides) !== null && _b !== void 0 ? _b : 5;
        switch (particle.shape) {
            case ShapeType.line:
                this.drawLineShape(context, radius, stroke, strokeColor);
                break;
            case ShapeType.circle:
                this.drawCircleShape(context, radius, pos);
                break;
            case ShapeType.edge:
            case ShapeType.square:
                this.drawSquareShape(context, radius);
                break;
            case ShapeType.triangle:
                this.drawTriangleShape(context, radius);
                break;
            case ShapeType.polygon:
                this.drawPolygonShape(context, radius, sides);
                break;
            case ShapeType.star:
                this.drawStarShape(context, radius, sides);
                break;
            case ShapeType.heart:
                this.drawHeartShape(context, radius);
                break;
            case ShapeType.char:
            case ShapeType.character:
                this.drawTextShape(context, particle.character, particle.text, radius);
                break;
            case ShapeType.image:
                this.drawImageShape(context, particle, radius);
                break;
        }
    }
    static drawTriangleShape(context, radius) {
        const start = {
            x: -radius,
            y: radius / 1.66,
        };
        const side = {
            count: {
                denominator: 2,
                numerator: 3,
            },
            length: radius * 2,
        };
        this.drawGenericPolygonShape(context, start, side);
    }
    static drawPolygonShape(context, radius, sides) {
        const start = {
            x: -radius / (sides / 3.5),
            y: -radius / (2.66 / 3.5),
        };
        const side = {
            count: {
                denominator: 1,
                numerator: sides,
            },
            length: radius * 2.66 / (sides / 3),
        };
        this.drawGenericPolygonShape(context, start, side);
    }
    static drawStarShape(context, radius, sides) {
        const start = {
            x: -radius * 2 / (sides / 4),
            y: -radius / (2 * 2.66 / 3.5),
        };
        const side = {
            count: {
                denominator: 2,
                numerator: sides,
            },
            length: radius * 2 * 2.66 / (sides / 3),
        };
        this.drawGenericPolygonShape(context, start, side);
    }
    static drawLineShape(context, length, stroke, strokeColor) {
        if (strokeColor) {
            context.moveTo(0, -length / 2);
            context.lineTo(0, length / 2);
            context.strokeStyle = ColorUtils.getStyleFromColor(strokeColor);
            context.lineWidth = stroke.width;
            context.stroke();
        }
    }
    static drawCircleShape(context, radius, center) {
        context.arc(center.x, center.y, radius, 0, Math.PI * 2, false);
    }
    static drawSquareShape(context, side) {
        context.rect(-side, -side, side * 2, side * 2);
    }
    static drawHeartShape(context, radius) {
        const x = -radius / 2;
        const y = -radius / 2;
        context.moveTo(x, y + radius / 4);
        context.quadraticCurveTo(x, y, x + radius / 4, y);
        context.quadraticCurveTo(x + radius / 2, y, x + radius / 2, y + radius / 4);
        context.quadraticCurveTo(x + radius / 2, y, x + radius * 3 / 4, y);
        context.quadraticCurveTo(x + radius, y, x + radius, y + radius / 4);
        context.quadraticCurveTo(x + radius, y + radius / 2, x + radius * 3 / 4, y + radius * 3 / 4);
        context.lineTo(x + radius / 2, y + radius);
        context.lineTo(x + radius / 4, y + radius * 3 / 4);
        context.quadraticCurveTo(x, y + radius / 2, x, y + radius / 4);
    }
    static drawTextShape(context, character, text, radius) {
        if (text === undefined || character === undefined) {
            return;
        }
        const style = character.style;
        const weight = character.weight;
        const size = Math.round(radius) * 2;
        const font = character.font;
        const fill = character.fill;
        context.font = `${style} ${weight} ${size}px "${font}"`;
        const pos = {
            x: -radius / 2,
            y: radius / 2,
        };
        if (fill) {
            context.fillText(text, pos.x, pos.y);
        }
        else {
            context.strokeText(text, pos.x, pos.y);
        }
    }
    static drawGenericPolygonShape(context, start, side) {
        const sideCount = side.count.numerator * side.count.denominator;
        const decimalSides = side.count.numerator / side.count.denominator;
        const interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
        const interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
        if (!context) {
            return;
        }
        context.save();
        context.beginPath();
        context.translate(start.x, start.y);
        context.moveTo(0, 0);
        for (let i = 0; i < sideCount; i++) {
            context.lineTo(side.length, 0);
            context.translate(side.length, 0);
            context.rotate(interiorAngle);
        }
        context.fill();
        context.restore();
    }
    static drawImageShape(context, particle, radius) {
        var _a;
        if (!context) {
            return;
        }
        const imgObj = (_a = particle.image) === null || _a === void 0 ? void 0 : _a.data.obj;
        if (!imgObj) {
            return;
        }
        let ratio = 1;
        if (particle.image) {
            ratio = particle.image.ratio;
        }
        const pos = {
            x: -radius,
            y: -radius,
        };
        context.drawImage(imgObj, pos.x, pos.y, radius * 2, radius * 2 / ratio);
    }
}
//# sourceMappingURL=ShapeUtils.js.map