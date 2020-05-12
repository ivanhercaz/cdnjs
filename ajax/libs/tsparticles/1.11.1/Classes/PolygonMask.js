var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PolygonMaskType } from "../Enums/PolygonMaskType";
import { Particle } from "./Particle";
import { PolygonMaskInlineArrangement } from "../Enums/PolygonMaskInlineArrangement";
import { Utils } from "./Utils/Utils";
export class PolygonMask {
    constructor(container) {
        this.container = container;
        this.width = 0;
        this.height = 0;
        this.polygonPathLength = 0;
        this.path2DSupported = window.hasOwnProperty("Path2D");
    }
    checkInsidePolygon(position) {
        const container = this.container;
        const options = container.options;
        if (!options.polygon.enable ||
            options.polygon.type === PolygonMaskType.none ||
            options.polygon.type === PolygonMaskType.inline) {
            return true;
        }
        if (!this.raw) {
            console.error('No polygon found, you need to specify SVG url in config.');
            return true;
        }
        const x = position ? position.x : Math.random() * container.canvas.dimension.width;
        const y = position ? position.y : Math.random() * container.canvas.dimension.height;
        let inside = false;
        if (this.path2DSupported && this.polygonPath && position) {
            inside = container.canvas.isPointInPath(this.polygonPath, position);
        }
        else {
            for (let i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
                const xi = this.raw[i].x;
                const yi = this.raw[i].y;
                const xj = this.raw[j].x;
                const yj = this.raw[j].y;
                const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
                if (intersect) {
                    inside = !inside;
                }
            }
        }
        if (options.polygon.type === PolygonMaskType.inside) {
            return inside;
        }
        else if (options.polygon.type === PolygonMaskType.outside) {
            return !inside;
        }
        return false;
    }
    randomPointInPolygon() {
        const container = this.container;
        const options = container.options;
        let position;
        if (options.polygon.type === PolygonMaskType.inline) {
            switch (options.polygon.inline.arrangement) {
                case PolygonMaskInlineArrangement.randomPoint:
                    position = this.getRandomPointOnPolygonPath();
                    break;
                case PolygonMaskInlineArrangement.randomLength:
                    position = this.getRandomPointOnPolygonPathByLength();
                    break;
                case PolygonMaskInlineArrangement.equidistant:
                    position = this.getEquidistantPointOnPolygonPathByIndex(container.particles.count);
                    break;
                case PolygonMaskInlineArrangement.onePerPoint:
                default:
                    position = this.getPoingOnPolygonPathByIndex(container.particles.count);
            }
        }
        else {
            position = {
                x: Math.random() * container.canvas.dimension.width,
                y: Math.random() * container.canvas.dimension.height,
            };
        }
        if (this.checkInsidePolygon(position)) {
            return position;
        }
        else {
            return this.randomPointInPolygon();
        }
    }
    parseSvgPathToPolygon(svgUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const container = this.container;
            const options = container.options;
            const url = svgUrl || options.polygon.url;
            if (!this.path || !this.svg) {
                const req = yield fetch(url);
                if (req.ok) {
                    const xml = yield req.text();
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(xml, "image/svg+xml");
                    this.svg = doc.getElementsByTagName("svg")[0];
                    this.path = doc.getElementsByTagName("path")[0];
                    if (this.path) {
                        this.polygonPathLength = this.path.getTotalLength();
                    }
                    this.createPath2D();
                }
                else {
                    console.error("tsParticles Error - during polygon mask download");
                    return;
                }
            }
            const scale = options.polygon.scale;
            this.width = parseFloat(this.svg.getAttribute("width") || "0") * scale;
            this.height = parseFloat(this.svg.getAttribute("height") || "0") * scale;
            this.offset = {
                x: container.canvas.dimension.width / 2 - this.width / 2,
                y: container.canvas.dimension.height / 2 - this.height / 2,
            };
            const len = this.path.pathSegList.numberOfItems;
            const polygonRaw = [];
            const p = {
                x: 0,
                y: 0,
            };
            for (let i = 0; i < len; i++) {
                const segment = this.path.pathSegList.getItem(i);
                switch (segment.pathSegType) {
                    case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                    case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                    case window.SVGPathSeg.PATHSEG_ARC_ABS:
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                        const absSeg = segment;
                        p.x = absSeg.x;
                        p.y = absSeg.y;
                        break;
                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                        p.x = segment.x;
                        break;
                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                        p.y = segment.y;
                        break;
                    case window.SVGPathSeg.PATHSEG_LINETO_REL:
                    case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                    case window.SVGPathSeg.PATHSEG_ARC_REL:
                    case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                    case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                        const relSeg = segment;
                        p.x += relSeg.x;
                        p.y += relSeg.y;
                        break;
                    case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                        p.x += segment.x;
                        break;
                    case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                        p.y += segment.y;
                        break;
                    case window.SVGPathSeg.PATHSEG_UNKNOWN:
                    case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                        continue;
                }
                polygonRaw.push({
                    x: p.x * scale + this.offset.x,
                    y: p.y * scale + this.offset.y,
                });
            }
            return polygonRaw;
        });
    }
    drawPolygon() {
        const container = this.container;
        if (this.raw) {
            container.canvas.drawPolygonMask(this.raw);
        }
    }
    drawPointsOnPolygonPath() {
        const container = this.container;
        if (this.raw) {
            for (const item of this.raw) {
                const position = {
                    x: item.x,
                    y: item.y,
                };
                const particle = new Particle(container, position);
                container.particles.addParticle(particle);
            }
        }
    }
    getRandomPointOnPolygonPath() {
        if (!this.raw || !this.raw.length)
            throw new Error(`No polygon data loaded.`);
        const coords = Utils.itemFromArray(this.raw);
        return {
            x: coords.x,
            y: coords.y,
        };
    }
    getRandomPointOnPolygonPathByLength() {
        var _a, _b;
        const container = this.container;
        const options = container.options;
        if (!this.raw || !this.raw.length || !this.path)
            throw new Error(`No polygon data loaded.`);
        const distance = Math.floor(Math.random() * this.polygonPathLength) + 1;
        const point = this.path.getPointAtLength(distance);
        return {
            x: point.x * options.polygon.scale + (((_a = this.offset) === null || _a === void 0 ? void 0 : _a.x) || 0),
            y: point.y * options.polygon.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.y) || 0),
        };
    }
    getEquidistantPointOnPolygonPathByIndex(index) {
        var _a, _b;
        const container = this.container;
        const options = container.options;
        if (!this.raw || !this.raw.length || !this.path)
            throw new Error(`No polygon data loaded.`);
        const distance = (this.polygonPathLength / options.particles.number.value) * index;
        const point = this.path.getPointAtLength(distance);
        return {
            x: point.x * options.polygon.scale + (((_a = this.offset) === null || _a === void 0 ? void 0 : _a.x) || 0),
            y: point.y * options.polygon.scale + (((_b = this.offset) === null || _b === void 0 ? void 0 : _b.y) || 0),
        };
    }
    getPoingOnPolygonPathByIndex(index) {
        if (!this.raw || !this.raw.length)
            throw new Error(`No polygon data loaded.`);
        const coords = this.raw[index % this.raw.length];
        return {
            x: coords.x,
            y: coords.y,
        };
    }
    createPath2D() {
        if (!this.path2DSupported || !this.raw) {
            return;
        }
        this.polygonPath = new Path2D();
        this.polygonPath.moveTo(this.raw[0].x, this.raw[0].y);
        this.raw.forEach((pos, i) => {
            var _a;
            if (i > 0) {
                (_a = this.polygonPath) === null || _a === void 0 ? void 0 : _a.lineTo(pos.x, pos.y);
            }
        });
        this.polygonPath.closePath();
    }
}
//# sourceMappingURL=PolygonMask.js.map