var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Loader } from "./Classes/Loader";
window.customRequestAnimationFrame = (() => {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        ((callback) => window.setTimeout(callback, 1000 / 60));
})();
window.customCancelRequestAnimationFrame = (() => {
    return window.cancelAnimationFrame ||
        window.webkitCancelRequestAnimationFrame ||
        window.mozCancelRequestAnimationFrame ||
        window.oCancelRequestAnimationFrame ||
        window.msCancelRequestAnimationFrame ||
        clearTimeout;
})();
class Main {
    loadFromArray(tagId, params, index) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader.loadFromArray(tagId, params, index);
        });
    }
    load(tagId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return Loader.load(tagId, params);
        });
    }
    loadJSON(tagId, pathConfigJson) {
        return Loader.loadJSON(tagId, pathConfigJson);
    }
    setOnClickHandler(callback) {
        Loader.setOnClickHandler(callback);
    }
    dom() {
        return Loader.dom();
    }
    domItem(index) {
        return Loader.domItem(index);
    }
}
const tsParticles = new Main();
Object.freeze(tsParticles);
window.tsParticles = tsParticles;
Object.freeze(window.tsParticles);
window.particlesJS = (tagId, params) => {
    tsParticles.load(tagId, params);
};
window.particlesJS.load = (tagId, pathConfigJson, callback) => {
    tsParticles.loadJSON(tagId, pathConfigJson).then((container) => {
        if (container) {
            callback(container);
        }
    });
};
window.particlesJS.setOnClickHandler = (callback) => {
    tsParticles.setOnClickHandler(callback);
};
window.pJSDom = () => {
    return window.tsParticles.dom();
};
//# sourceMappingURL=Main.js.map