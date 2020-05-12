"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShapeType_1 = require("../Enums/ShapeType");
var Updater_1 = require("./Particle/Updater");
var Utils_1 = require("../Utils/Utils");
var PolygonMaskType_1 = require("../Enums/PolygonMaskType");
var RotateDirection_1 = require("../Enums/RotateDirection");
var ColorUtils_1 = require("../Utils/ColorUtils");
var Particles_1 = require("../Options/Classes/Particles/Particles");
var SizeAnimationStatus_1 = require("../Enums/SizeAnimationStatus");
var OpacityAnimationStatus_1 = require("../Enums/OpacityAnimationStatus");
var Shape_1 = require("../Options/Classes/Particles/Shape/Shape");
var StartValueType_1 = require("../Enums/StartValueType");
var CanvasUtils_1 = require("../Utils/CanvasUtils");
var Particle = (function () {
    function Particle(container, position, emitter) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        this.container = container;
        this.emitter = emitter;
        this.fill = true;
        this.close = true;
        this.links = [];
        this.lastNoiseTime = 0;
        this.destroyed = false;
        var options = container.options;
        var particlesOptions = new Particles_1.Particles();
        particlesOptions.load(options.particles);
        if (((_b = (_a = emitter === null || emitter === void 0 ? void 0 : emitter.emitterOptions) === null || _a === void 0 ? void 0 : _a.particles) === null || _b === void 0 ? void 0 : _b.shape) !== undefined) {
            var shapeType = (_c = emitter.emitterOptions.particles.shape.type) !== null && _c !== void 0 ? _c : particlesOptions.shape.type;
            this.shape = shapeType instanceof Array ? Utils_1.Utils.itemFromArray(shapeType) : shapeType;
            var shapeOptions = new Shape_1.Shape();
            shapeOptions.load(emitter.emitterOptions.particles.shape);
            if (this.shape !== undefined) {
                var shapeData = shapeOptions.options[this.shape];
                if (shapeData !== undefined) {
                    this.shapeData = Utils_1.Utils.deepExtend({}, shapeData instanceof Array ?
                        Utils_1.Utils.itemFromArray(shapeData) :
                        shapeData);
                    this.fill = (_e = (_d = this.shapeData) === null || _d === void 0 ? void 0 : _d.fill) !== null && _e !== void 0 ? _e : this.fill;
                    this.close = (_g = (_f = this.shapeData) === null || _f === void 0 ? void 0 : _f.close) !== null && _g !== void 0 ? _g : this.close;
                }
            }
        }
        else {
            var shapeType = particlesOptions.shape.type;
            this.shape = shapeType instanceof Array ? Utils_1.Utils.itemFromArray(shapeType) : shapeType;
            var shapeData = particlesOptions.shape.options[this.shape];
            if (shapeData) {
                this.shapeData = Utils_1.Utils.deepExtend({}, shapeData instanceof Array ?
                    Utils_1.Utils.itemFromArray(shapeData) :
                    shapeData);
                this.fill = (_j = (_h = this.shapeData) === null || _h === void 0 ? void 0 : _h.fill) !== null && _j !== void 0 ? _j : this.fill;
                this.close = (_l = (_k = this.shapeData) === null || _k === void 0 ? void 0 : _k.close) !== null && _l !== void 0 ? _l : this.close;
            }
        }
        if (((_m = emitter === null || emitter === void 0 ? void 0 : emitter.emitterOptions) === null || _m === void 0 ? void 0 : _m.particles) !== undefined) {
            particlesOptions.load(emitter.emitterOptions.particles);
        }
        this.particlesOptions = particlesOptions;
        var noiseDelay = this.particlesOptions.move.noise.delay;
        this.noiseDelay = (noiseDelay.random.enable ?
            Utils_1.Utils.randomInRange(noiseDelay.random.minimumValue, noiseDelay.value) :
            noiseDelay.value) * 1000;
        container.retina.initParticle(this);
        var color = this.particlesOptions.color;
        var sizeValue = ((_o = this.sizeValue) !== null && _o !== void 0 ? _o : container.retina.sizeValue);
        var randomSize = typeof this.particlesOptions.size.random === "boolean" ?
            this.particlesOptions.size.random :
            this.particlesOptions.size.random.enable;
        this.size = {
            value: randomSize && this.randomMinimumSize !== undefined ?
                Utils_1.Utils.randomInRange(this.randomMinimumSize, sizeValue) :
                sizeValue,
        };
        this.direction = emitter ? emitter.emitterOptions.direction : this.particlesOptions.move.direction;
        this.bubble = {};
        this.angle = this.particlesOptions.rotate.random ? Math.random() * 360 : this.particlesOptions.rotate.value;
        if (this.particlesOptions.rotate.direction == RotateDirection_1.RotateDirection.random) {
            var index = Math.floor(Math.random() * 2);
            if (index > 0) {
                this.rotateDirection = RotateDirection_1.RotateDirection.counterClockwise;
            }
            else {
                this.rotateDirection = RotateDirection_1.RotateDirection.clockwise;
            }
        }
        else {
            this.rotateDirection = this.particlesOptions.rotate.direction;
        }
        if (this.particlesOptions.size.animation.enable) {
            switch (this.particlesOptions.size.animation.startValue) {
                case StartValueType_1.StartValueType.min:
                    if (!randomSize) {
                        var pxRatio = container.retina.pixelRatio;
                        this.size.value = this.particlesOptions.size.animation.minimumValue * pxRatio;
                    }
                    break;
            }
            this.size.status = SizeAnimationStatus_1.SizeAnimationStatus.increasing;
            this.size.velocity = ((_p = this.sizeAnimationSpeed) !== null && _p !== void 0 ? _p : container.retina.sizeAnimationSpeed) / 100;
            if (!this.particlesOptions.size.animation.sync) {
                this.size.velocity = this.size.velocity * Math.random();
            }
        }
        if (this.particlesOptions.rotate.animation.enable) {
            if (!this.particlesOptions.rotate.animation.sync) {
                this.angle = Math.random() * 360;
            }
        }
        this.position = this.calcPosition(this.container, position);
        if (options.polygon.enable && options.polygon.type === PolygonMaskType_1.PolygonMaskType.inline) {
            this.initialPosition = {
                x: this.position.x,
                y: this.position.y,
            };
        }
        this.offset = {
            x: 0,
            y: 0,
        };
        if (this.particlesOptions.collisions.enable) {
            this.checkOverlap(position);
        }
        if (color instanceof Array) {
            this.color = ColorUtils_1.ColorUtils.colorToRgb(Utils_1.Utils.itemFromArray(color));
        }
        else {
            this.color = ColorUtils_1.ColorUtils.colorToRgb(color);
        }
        var randomOpacity = this.particlesOptions.opacity.random;
        var opacityValue = this.particlesOptions.opacity.value;
        this.opacity = {
            value: randomOpacity.enable ? Utils_1.Utils.randomInRange(randomOpacity.minimumValue, opacityValue) : opacityValue,
        };
        if (this.particlesOptions.opacity.animation.enable) {
            this.opacity.status = OpacityAnimationStatus_1.OpacityAnimationStatus.increasing;
            this.opacity.velocity = this.particlesOptions.opacity.animation.speed / 100;
            if (!this.particlesOptions.opacity.animation.sync) {
                this.opacity.velocity *= Math.random();
            }
        }
        this.initialVelocity = this.calculateVelocity();
        this.velocity = {
            horizontal: this.initialVelocity.horizontal,
            vertical: this.initialVelocity.vertical,
        };
        var drawer = container.drawers[this.shape];
        if (!drawer) {
            drawer = CanvasUtils_1.CanvasUtils.getShapeDrawer(this.shape);
            container.drawers[this.shape] = drawer;
        }
        if (this.shape === ShapeType_1.ShapeType.image || this.shape === ShapeType_1.ShapeType.images) {
            var shape = this.particlesOptions.shape;
            var imageDrawer = drawer;
            var imagesOptions = shape.options[this.shape];
            var images = imageDrawer.getImages(container).images;
            var index = Utils_1.Utils.arrayRandomIndex(images);
            var image_1 = images[index];
            var optionsImage = (imagesOptions instanceof Array ?
                imagesOptions.filter(function (t) { return t.src === image_1.source; })[0] :
                imagesOptions);
            this.image = {
                data: image_1,
                ratio: optionsImage.width / optionsImage.height,
                replaceColor: (_q = optionsImage.replaceColor) !== null && _q !== void 0 ? _q : optionsImage.replace_color,
                source: optionsImage.src,
            };
            if (!this.image.ratio) {
                this.image.ratio = 1;
            }
            this.fill = (_r = optionsImage.fill) !== null && _r !== void 0 ? _r : this.fill;
            this.close = (_s = optionsImage.close) !== null && _s !== void 0 ? _s : this.close;
        }
        this.stroke = this.particlesOptions.stroke instanceof Array ?
            Utils_1.Utils.itemFromArray(this.particlesOptions.stroke) :
            this.particlesOptions.stroke;
        this.strokeColor = typeof this.stroke.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(this.stroke.color) :
            ColorUtils_1.ColorUtils.colorToRgb(this.stroke.color);
        this.shadowColor = typeof this.particlesOptions.shadow.color === "string" ?
            ColorUtils_1.ColorUtils.stringToRgb(this.particlesOptions.shadow.color) :
            ColorUtils_1.ColorUtils.colorToRgb(this.particlesOptions.shadow.color);
        this.updater = new Updater_1.Updater(this.container, this);
    }
    Particle.prototype.update = function (index, delta) {
        this.links = [];
        this.updater.update(delta);
    };
    Particle.prototype.draw = function () {
        this.container.canvas.drawParticle(this);
    };
    Particle.prototype.isOverlapping = function () {
        var container = this.container;
        var p = this;
        var collisionFound = false;
        var iterations = 0;
        for (var _i = 0, _a = container.particles.array.filter(function (t) { return t != p; }); _i < _a.length; _i++) {
            var p2 = _a[_i];
            iterations++;
            var pos1 = {
                x: p.position.x + p.offset.x,
                y: p.position.y + p.offset.y
            };
            var pos2 = {
                x: p2.position.x + p2.offset.x,
                y: p2.position.y + p2.offset.y
            };
            var dist = Utils_1.Utils.getDistanceBetweenCoordinates(pos1, pos2);
            if (dist <= p.size.value + p2.size.value) {
                collisionFound = true;
                break;
            }
        }
        return {
            collisionFound: collisionFound,
            iterations: iterations,
        };
    };
    Particle.prototype.checkOverlap = function (position) {
        var container = this.container;
        var p = this;
        var overlapResult = p.isOverlapping();
        if (overlapResult.iterations >= container.particles.count) {
            container.particles.remove(this);
        }
        else if (overlapResult.collisionFound) {
            p.position.x = position ? position.x : Math.random() * container.canvas.size.width;
            p.position.y = position ? position.y : Math.random() * container.canvas.size.height;
            p.checkOverlap();
        }
    };
    Particle.prototype.startInfection = function (stage) {
        var _this = this;
        var container = this.container;
        var options = container.options;
        var stages = options.infection.stages;
        var stagesCount = stages.length;
        if (stage > stagesCount || stage < 0) {
            return;
        }
        var infection = options.infection;
        var infectionStage = stages[stage];
        this.infectionTimeout = window.setTimeout(function () {
            _this.infectionStage = stage;
            if (infectionStage.duration !== undefined && infectionStage.duration >= 0) {
                _this.infectionTimeout = window.setTimeout(function () {
                    _this.nextInfectionStage();
                }, infectionStage.duration * 1000);
            }
        }, infection.delay * 1000);
    };
    Particle.prototype.updateInfection = function (stage) {
        var _this = this;
        var container = this.container;
        var options = container.options;
        var stagesCount = options.infection.stages.length;
        if (stage > stagesCount || stage < 0 || (this.infectionStage !== undefined && this.infectionStage > stage)) {
            return;
        }
        if (this.infectionTimeout !== undefined) {
            window.clearTimeout(this.infectionTimeout);
        }
        this.infectionStage = stage;
        var infectionStage = options.infection.stages[this.infectionStage];
        if (infectionStage.duration !== undefined && infectionStage.duration >= 0) {
            this.infectionTimeout = window.setTimeout(function () {
                _this.nextInfectionStage();
            }, infectionStage.duration * 1000);
        }
    };
    Particle.prototype.nextInfectionStage = function () {
        var _this = this;
        var container = this.container;
        var options = container.options;
        var stagesCount = options.infection.stages.length;
        if (stagesCount <= 0 || this.infectionStage === undefined) {
            return;
        }
        if (stagesCount <= ++this.infectionStage) {
            if (options.infection.cure) {
                delete this.infectionStage;
                return;
            }
            else {
                this.infectionStage = 0;
            }
        }
        var infectionStage = options.infection.stages[this.infectionStage];
        if (infectionStage.duration !== undefined && infectionStage.duration >= 0) {
            this.infectionTimeout = window.setTimeout(function () {
                _this.nextInfectionStage();
            }, infectionStage.duration * 1000);
        }
    };
    Particle.prototype.destroy = function () {
        this.destroyed = true;
    };
    Particle.prototype.calcPosition = function (container, position) {
        for (var _i = 0, _a = container.plugins; _i < _a.length; _i++) {
            var plugin = _a[_i];
            var pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position) : undefined;
            if (pluginPos !== undefined) {
                return pluginPos;
            }
        }
        var pos = { x: 0, y: 0 };
        pos.x = position ? position.x : Math.random() * container.canvas.size.width;
        pos.y = position ? position.y : Math.random() * container.canvas.size.height;
        if (pos.x > container.canvas.size.width - this.size.value * 2) {
            pos.x -= this.size.value;
        }
        else if (pos.x < this.size.value * 2) {
            pos.x += this.size.value;
        }
        if (pos.y > container.canvas.size.height - this.size.value * 2) {
            pos.y -= this.size.value;
        }
        else if (pos.y < this.size.value * 2) {
            pos.y += this.size.value;
        }
        return pos;
    };
    Particle.prototype.calculateVelocity = function () {
        var baseVelocity = Utils_1.Utils.getParticleBaseVelocity(this);
        var res = {
            horizontal: 0,
            vertical: 0,
        };
        if (this.particlesOptions.move.straight) {
            res.horizontal = baseVelocity.x;
            res.vertical = baseVelocity.y;
            if (this.particlesOptions.move.random) {
                res.horizontal *= Math.random();
                res.vertical *= Math.random();
            }
        }
        else {
            res.horizontal = baseVelocity.x + Math.random() - 0.5;
            res.vertical = baseVelocity.y + Math.random() - 0.5;
        }
        return res;
    };
    return Particle;
}());
exports.Particle = Particle;
