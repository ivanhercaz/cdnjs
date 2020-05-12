/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Utils = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(28));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _MoveDirection = __webpack_require__(16);
/* ---------- global functions - vendors ------------ */


var Utils = /*#__PURE__*/function () {
  function Utils() {
    (0, _classCallCheck2["default"])(this, Utils);
  }

  (0, _createClass2["default"])(Utils, null, [{
    key: "hexToRgb",

    /**
     * Converts hexadecimal string (HTML color code) in a [[IRgb]] object
     * @param hex the hexadecimal string (#f70 or #ff7700)
     */
    value: function hexToRgb(hex) {
      // By Tim Down - http://stackoverflow.com/a/5624139/3493650
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      var hexFixed = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexFixed);
      return result ? {
        b: parseInt(result[3], 16),
        g: parseInt(result[2], 16),
        r: parseInt(result[1], 16)
      } : undefined;
    }
    /**
     * Converts a Hue Saturation Lightness ([[IHsl]]) object in a [[IRgb]] object
     * @param hsl
     */

  }, {
    key: "hslToRgb",
    value: function hslToRgb(hsl) {
      var result = {
        b: 0,
        g: 0,
        r: 0
      };

      if (hsl.s == 0) {
        result.b = hsl.l; // achromatic

        result.g = hsl.l;
        result.r = hsl.l;
      } else {
        var q = hsl.l < 0.5 ? hsl.l * (1 + hsl.s) : hsl.l + hsl.s - hsl.l * hsl.s;
        var p = 2 * hsl.l - q;
        result.r = Utils.hue2rgb(p, q, hsl.h + 1 / 3);
        result.g = Utils.hue2rgb(p, q, hsl.h);
        result.b = Utils.hue2rgb(p, q, hsl.h - 1 / 3);
      }

      result.r = Math.round(result.r * 255);
      result.g = Math.round(result.g * 255);
      result.b = Math.round(result.b * 255);
      return result;
    }
    /**
     * Generate a random RGBA color
     * @param min a minimum seed value for all 3 values
     */

  }, {
    key: "getRandomColorRGBA",
    value: function getRandomColorRGBA(min) {
      var fixedMin = min || 0;
      return {
        b: Math.floor(Math.random() * (255 * fixedMin) + fixedMin),
        g: Math.floor(Math.random() * (255 * fixedMin) + fixedMin),
        r: Math.floor(Math.random() * (255 * fixedMin) + fixedMin)
      };
    }
    /**
     * Clamps a number between a minimum and maximum value
     * @param num the source number
     * @param min the minimum value
     * @param max the maximum value
     */

  }, {
    key: "clamp",
    value: function clamp(num, min, max) {
      return Math.min(Math.max(num, min), max);
    }
    /**
     * Check if a value is equal to the destination, if same type, or is in the provided array
     * @param value the value to check
     * @param array the data array or single value
     */

  }, {
    key: "isInArray",
    value: function isInArray(value, array) {
      return value === array || array.indexOf(value) > -1;
    }
    /**
     *
     * @param comp1
     * @param comp2
     * @param weight1
     * @param weight2
     */

  }, {
    key: "mixComponents",
    value: function mixComponents(comp1, comp2, weight1, weight2) {
      return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
    }
    /**
     * Prepares a rgba() css function from a [[IRgb]] object
     * @param color the [[IRgb]] color to convert
     */

  }, {
    key: "getStyleFromColor",
    value: function getStyleFromColor(color) {
      return "rgba(".concat(Math.floor(color.r), ", ").concat(Math.floor(color.g), ", ").concat(Math.floor(color.b), ", 0.4)");
    }
    /**
     * Get Particle base velocity
     * @param options the options to use for calculating the velocity
     */

  }, {
    key: "getParticleBaseVelocity",
    value: function getParticleBaseVelocity(options) {
      var velocityBase;

      switch (options.particles.move.direction) {
        case _MoveDirection.MoveDirection.top:
          velocityBase = {
            x: 0,
            y: -1
          };
          break;

        case _MoveDirection.MoveDirection.topRight:
          velocityBase = {
            x: 0.5,
            y: -0.5
          };
          break;

        case _MoveDirection.MoveDirection.right:
          velocityBase = {
            x: 1,
            y: -0
          };
          break;

        case _MoveDirection.MoveDirection.bottomRight:
          velocityBase = {
            x: 0.5,
            y: 0.5
          };
          break;

        case _MoveDirection.MoveDirection.bottom:
          velocityBase = {
            x: 0,
            y: 1
          };
          break;

        case _MoveDirection.MoveDirection.bottomLeft:
          velocityBase = {
            x: -0.5,
            y: 1
          };
          break;

        case _MoveDirection.MoveDirection.left:
          velocityBase = {
            x: -1,
            y: 0
          };
          break;

        case _MoveDirection.MoveDirection.topLeft:
          velocityBase = {
            x: -0.5,
            y: -0.5
          };
          break;

        default:
          velocityBase = {
            x: 0,
            y: 0
          };
          break;
      }

      return velocityBase;
    }
    /**
     * Gets the particles color
     * @param color the input color to convert in [[IRgb]] object
     */

  }, {
    key: "getParticleColor",
    value: function getParticleColor(color) {
      var res;

      if ((0, _typeof2["default"])(color.value) === "object") {
        if (color.value instanceof Array) {
          var arr = color.value;
          var colorSelected = color.value[Math.floor(Math.random() * arr.length)];
          res = Utils.hexToRgb(colorSelected);
        } else {
          var rgbColor = color.value;

          if (rgbColor.r !== undefined) {
            res = rgbColor;
          }

          var hslColor = color.value;

          if (hslColor.h !== undefined) {
            res = Utils.hslToRgb(hslColor);
          }
        }
      } else {
        if (color.value === "random") {
          res = {
            b: Math.floor(Math.random() * 256),
            g: Math.floor(Math.random() * 256),
            r: Math.floor(Math.random() * 256)
          };
        } else {
          res = Utils.hexToRgb(color.value);
        }
      }

      return res;
    }
    /**
     * Gets the distance between two coordinates
     * @param pointA the first coordinate
     * @param pointB the second coordinate
     */

  }, {
    key: "getDistanceBetweenCoordinates",
    value: function getDistanceBetweenCoordinates(pointA, pointB) {
      var dx = pointA.x - pointB.x;
      var dy = pointA.y - pointB.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }, {
    key: "hasData",
    value: function hasData(value) {
      return value !== undefined && value !== null;
    }
    /**
     *
     * @param p
     * @param q
     * @param t
     */

  }, {
    key: "hue2rgb",
    value: function hue2rgb(p, q, t) {
      var tCalc = t;

      if (tCalc < 0) {
        tCalc += 1;
      }

      if (tCalc > 1) {
        tCalc -= 1;
      }

      if (tCalc < 1 / 6) {
        return p + (q - p) * 6 * tCalc;
      }

      if (tCalc < 1 / 2) {
        return q;
      }

      if (tCalc < 2 / 3) {
        return p + (q - p) * (2 / 3 - tCalc) * 6;
      }

      return p;
    }
  }]);
  return Utils;
}();

exports.Utils = Utils;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Messages = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */


var Messages = /*#__PURE__*/function () {
  function Messages() {
    (0, _classCallCheck2["default"])(this, Messages);
  }

  (0, _createClass2["default"])(Messages, null, [{
    key: "deprecated",
    value: function deprecated(oldProperty, newProperty) {
      if (console) {
        var obsolete = "The property ".concat(oldProperty, " is obsolete and will be removed in a future release.");
        var useNew = "Please use the new property ".concat(newProperty, ".");
        console.warn("".concat(obsolete, " ").concat(useNew));
      }
    }
  }]);
  return Messages;
}();

exports.Messages = Messages;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonMaskType = void 0;
var PolygonMaskType;
exports.PolygonMaskType = PolygonMaskType;

(function (PolygonMaskType) {
  PolygonMaskType["inline"] = "inline";
  PolygonMaskType["inside"] = "inside";
  PolygonMaskType["outside"] = "outside";
  PolygonMaskType["none"] = "none";
})(PolygonMaskType || (exports.PolygonMaskType = PolygonMaskType = {}));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClickMode = void 0;
var ClickMode;
exports.ClickMode = ClickMode;

(function (ClickMode) {
  ClickMode["bubble"] = "bubble";
  ClickMode["push"] = "push";
  ClickMode["remove"] = "remove";
  ClickMode["repulse"] = "repulse";
})(ClickMode || (exports.ClickMode = ClickMode = {}));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShapeType = void 0;
var ShapeType;
exports.ShapeType = ShapeType;

(function (ShapeType) {
  ShapeType["char"] = "char";
  ShapeType["character"] = "character";
  ShapeType["circle"] = "circle";
  ShapeType["edge"] = "edge";
  ShapeType["heart"] = "heart";
  ShapeType["image"] = "image";
  ShapeType["line"] = "line";
  ShapeType["polygon"] = "polygon";
  ShapeType["square"] = "square";
  ShapeType["star"] = "star";
  ShapeType["triangle"] = "triangle";
})(ShapeType || (exports.ShapeType = ShapeType = {}));

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoverMode = void 0;
var HoverMode;
exports.HoverMode = HoverMode;

(function (HoverMode) {
  HoverMode["bubble"] = "bubble";
  HoverMode["connect"] = "connect";
  HoverMode["grab"] = "grab";
  HoverMode["repulse"] = "repulse";
})(HoverMode || (exports.HoverMode = HoverMode = {}));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OutMode = void 0;
var OutMode;
exports.OutMode = OutMode;

(function (OutMode) {
  OutMode["bounce"] = "bounce";
  OutMode["bounceHorizontal"] = "bounce-horizontal";
  OutMode["bounceVertical"] = "bounce-vertical";
  OutMode["out"] = "out";
  OutMode["destroy"] = "destroy";
})(OutMode || (exports.OutMode = OutMode = {}));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonMaskInlineArrangement = void 0;
var PolygonMaskInlineArrangement;
exports.PolygonMaskInlineArrangement = PolygonMaskInlineArrangement;

(function (PolygonMaskInlineArrangement) {
  PolygonMaskInlineArrangement["equidistant"] = "equidistant";
  PolygonMaskInlineArrangement["onePerPoint"] = "one-per-point";
  PolygonMaskInlineArrangement["perPoint"] = "per-point";
  PolygonMaskInlineArrangement["randomLength"] = "random-length";
  PolygonMaskInlineArrangement["randomPoint"] = "random-point";
})(PolygonMaskInlineArrangement || (exports.PolygonMaskInlineArrangement = PolygonMaskInlineArrangement = {}));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(8));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(9));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Constants = __webpack_require__(14);

var _Container = __webpack_require__(15);

var tsParticlesDom = [];
/**
 * Main class for creating the [[Container]] objects
 */

var Loader = /*#__PURE__*/function () {
  function Loader() {
    (0, _classCallCheck2["default"])(this, Loader);
  }

  (0, _createClass2["default"])(Loader, null, [{
    key: "dom",

    /**
     * All the [[Container]] objects loaded
     */
    value: function dom() {
      if (!tsParticlesDom) {
        tsParticlesDom = [];
      }

      return tsParticlesDom;
    }
    /**
     * Retrieves a [[Container]] from all the objects loaded
     * @param index the object index
     */

  }, {
    key: "domItem",
    value: function domItem(index) {
      return Loader.dom()[index];
    }
    /**
     * Loads an options object from the provided array to create a [[Container]] object.
     * @param tagId the particles container element id
     * @param params the options array to get the item from
     * @param index if provided gets the corresponding item from the array
     */

  }, {
    key: "loadFromArray",
    value: function loadFromArray(tagId, params, index) {
      var idx;

      if (index === undefined || index < 0 || index >= params.length) {
        idx = Math.floor(Math.random() * params.length);
      } else {
        idx = index;
      }

      return Loader.load(tagId, params[idx]);
    }
    /**
     * Loads the provided options to create a [[Container]] object.
     * @param tagId the particles container element id
     * @param params the options object to initialize the [[Container]]
     */

  }, {
    key: "load",
    value: function load(tagId, params) {
      var _document$getElementB;
      /* elements */


      var tag = document.getElementById(tagId);

      if (!tag) {
        return;
      }

      var existCanvas = tag.getElementsByClassName(_Constants.Constants.canvasClass);
      /* remove canvas if exists into the container target tag */

      if (existCanvas.length) {
        while (existCanvas.length > 0) {
          tag.removeChild(existCanvas[0]);
        }
      }
      /* create canvas element */


      var canvasEl = document.createElement("canvas");
      canvasEl.className = _Constants.Constants.canvasClass;
      /* set size canvas */

      canvasEl.style.width = "100%";
      canvasEl.style.height = "100%";
      /* append canvas */

      var canvas = (_document$getElementB = document.getElementById(tagId)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.appendChild(canvasEl);
      /* launch tsparticle */

      if (!canvas) {
        return;
      }

      var newItem = new _Container.Container(tagId, params);
      var dom = Loader.dom();
      var idx = dom.findIndex(function (v) {
        return v.canvas.tagId === tagId;
      });

      if (idx >= 0) {
        dom.splice(idx, 1, newItem);
      } else {
        dom.push(newItem);
      }

      return newItem;
    }
    /**
     * Loads the provided json with a GET request. The content will be used to create a [[Container]] object.
     * This method is async, so if you need a callback refer to JavaScript function `fetch`
     * @param tagId the particles container element id
     * @param jsonUrl the json path to use in the GET request
     */

  }, {
    key: "loadJSON",
    value: function () {
      var _loadJSON = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(tagId, jsonUrl) {
        var response, params;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(jsonUrl);

              case 2:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 14;
                  break;
                }

                _context.next = 6;
                return response.json();

              case 6:
                params = _context.sent;

                if (!(params instanceof Array)) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", Loader.loadFromArray(tagId, params));

              case 11:
                return _context.abrupt("return", Loader.load(tagId, params));

              case 12:
                _context.next = 16;
                break;

              case 14:
                console.error("Error tsParticles - fetch status: ".concat(response.status));
                console.error("Error tsParticles - File config not found");

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function loadJSON(_x, _x2) {
        return _loadJSON.apply(this, arguments);
      }

      return loadJSON;
    }()
  }, {
    key: "setOnClickHandler",

    /**
     * Adds an additional click handler to all the loaded [[Container]] objects.
     * @param callback the function called after the click event is fired
     */
    value: function setOnClickHandler(callback) {
      var dom = Loader.dom();

      if (dom.length === 0) {
        throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = dom[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var domItem = _step.value;
          var el = domItem.interactivity.element;

          if (el) {
            el.addEventListener("click", callback);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);
  return Loader;
}();

exports.Loader = Loader;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Project's constants
 */

var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Constants = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var Constants = function Constants() {
  (0, _classCallCheck2["default"])(this, Constants);
};

exports.Constants = Constants;
Constants.canvasClass = "tsparticles-canvas-el";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(8));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(9));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Canvas = __webpack_require__(27);

var _EventListeners = __webpack_require__(29);

var _Loader = __webpack_require__(13);

var _Particles = __webpack_require__(30);

var _Retina = __webpack_require__(43);

var _ShapeType = __webpack_require__(7);

var _PolygonMask = __webpack_require__(44);

var _tsyringe = __webpack_require__(21);

var _Drawer = __webpack_require__(45);
/**
 * The object loaded into an HTML element, it'll contain options loaded and all data to let everything working
 */


var Container = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Container, [{
    key: "drawAnimFrame",

    /**
     * @deprecated this property is obsolete, please use the new drawAnimationFrame
     */
    get: function get() {
      return this.drawAnimationFrame;
    }
    /**
     * @deprecated this property is obsolete, please use the new drawAnimationFrame
     * @param value
     */
    ,
    set: function set(value) {
      this.drawAnimationFrame = value;
    }
    /**
     * @deprecated this property is obsolete, please use the new checkAnimationFrame
     */

  }, {
    key: "checkAnimFrame",
    get: function get() {
      return this.checkAnimationFrame;
    }
    /**
     * @deprecated this property is obsolete, please use the new checkAnimationFrame
     * @param value
     */
    ,
    set: function set(value) {
      this.checkAnimationFrame = value;
    }
  }]);

  function Container(tagId, params) {
    var _this = this;

    (0, _classCallCheck2["default"])(this, Container);
    this.sourceOptions = void 0;
    this.interactivity = void 0;
    this.options = void 0;
    this.retina = void 0;
    this.canvas = void 0;
    this.particles = void 0;
    this.polygon = void 0;
    this.checkAnimationFrame = void 0;
    this.drawAnimationFrame = void 0;
    this.bubble = void 0;
    this.repulse = void 0;
    this.images = void 0;
    this.lastFrameTime = void 0;
    this.pageHidden = void 0;
    this.drawer = void 0;
    this._eventListeners = void 0;
    this.sourceOptions = params;
    this.lastFrameTime = 0;
    this.pageHidden = false;
    this.retina = new _Retina.Retina(this);
    this.canvas = new _Canvas.Canvas(this, tagId);
    this.particles = new _Particles.Particles(this);
    this.polygon = new _PolygonMask.PolygonMask(this);
    this.drawer = new _Drawer.Drawer(this);
    this.interactivity = {
      mouse: {}
    };
    this.images = [];
    this.bubble = {};
    this.repulse = {};
    /* tsParticles variables with default values */

    this.options = _tsyringe.container.resolve("IOptions");
    /* params settings */

    if (params) {
      this.options.load(this.sourceOptions);
    }
    /* ---------- tsParticles - start ------------ */


    this._eventListeners = new _EventListeners.EventListeners(this);

    this._eventListeners.addEventsListeners();

    this.start().then(function () {
      /*
          Cancel animation if page is not in focus
          Browsers will do this anyway, however the
          Delta time must also be reset, so canceling
          the old frame and starting a new one is necessary
      */
      document.addEventListener("visibilitychange", function () {
        return _this.handleVisibilityChange();
      }, false);
    })["catch"](function (error) {
      throw error;
    });
  }

  (0, _createClass2["default"])(Container, [{
    key: "densityAutoParticles",

    /* ---------- tsParticles functions - vendors ------------ */
    value: function densityAutoParticles() {
      if (this.options.particles.number.density.enable) {
        /* calc area */
        var area = this.canvas.element.width * this.canvas.element.height / 1000;

        if (this.retina.isRetina) {
          area /= this.canvas.pxRatio * 2;
        }

        var optParticlesNumber = this.options.particles.number.value;
        var density = this.options.particles.number.density.area;
        /* calc number of particles based on density area */

        var particlesNumber = area * optParticlesNumber / density;
        /* add or remove X particles */

        var missingParticles = this.particles.array.length - particlesNumber;

        if (missingParticles < 0) {
          this.particles.push(Math.abs(missingParticles));
        } else {
          this.particles.remove(missingParticles);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.drawAnimationFrame !== undefined) {
        cancelAnimationFrame(this.drawAnimationFrame);
      }

      this.retina.reset();
      this.canvas.element.remove();

      var idx = _Loader.Loader.dom().indexOf(this);

      if (idx >= 0) {
        _Loader.Loader.dom().splice(idx, 1);
      }
    }
  }, {
    key: "exportImg",
    value: function exportImg() {
      window.open(this.canvas.element.toDataURL("image/png"), "_blank");
    }
  }, {
    key: "loadImg",
    value: function () {
      var _loadImg = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(image, optionsImage) {
        var _this2 = this;

        var img;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                image.error = false;

                if (optionsImage.src) {
                  img = new Image();
                  img.addEventListener("load", function () {
                    image.obj = img;

                    _this2.checkBeforeDraw();
                  });
                  img.src = optionsImage.src;
                } else {
                  console.error("Error tsParticles - No image.src");
                  image.error = true;
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function loadImg(_x, _x2) {
        return _loadImg.apply(this, arguments);
      }

      return loadImg;
    }()
  }, {
    key: "refresh",
    value: function () {
      var _refresh = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                /* init all */
                if (this.checkAnimationFrame) {
                  Container.cancelAnimation(this.checkAnimationFrame);
                }

                if (this.drawAnimationFrame) {
                  Container.cancelAnimation(this.drawAnimationFrame);
                }

                this.images = [];
                this.particles.clear();
                this.retina.reset();
                this.canvas.clear();
                delete this.particles.lineLinkedColor;
                /* restart */

                _context2.next = 9;
                return this.start();

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function refresh() {
        return _refresh.apply(this, arguments);
      }

      return refresh;
    }()
  }, {
    key: "start",
    value: function () {
      var _start = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, optionsImage, src, image, _optionsImage, _src, _image;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.options.polygon.url) {
                  _context3.next = 4;
                  break;
                }

                _context3.next = 3;
                return this.polygon.parseSvgPathToPolygon(this.options.polygon.url);

              case 3:
                this.polygon.raw = _context3.sent;

              case 4:
                this.lastFrameTime = performance.now();

                if (!(this.options.particles.shape.type === _ShapeType.ShapeType.image)) {
                  _context3.next = 48;
                  break;
                }

                if (!(this.options.particles.shape.image instanceof Array)) {
                  _context3.next = 39;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 10;
                _iterator = this.options.particles.shape.image[Symbol.iterator]();

              case 12:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context3.next = 23;
                  break;
                }

                optionsImage = _step.value;
                src = optionsImage.src;
                image = {
                  error: false
                };
                image.type = src.substr(src.length - 3);
                _context3.next = 19;
                return this.loadImg(image, optionsImage);

              case 19:
                this.images.push(image);

              case 20:
                _iteratorNormalCompletion = true;
                _context3.next = 12;
                break;

              case 23:
                _context3.next = 29;
                break;

              case 25:
                _context3.prev = 25;
                _context3.t0 = _context3["catch"](10);
                _didIteratorError = true;
                _iteratorError = _context3.t0;

              case 29:
                _context3.prev = 29;
                _context3.prev = 30;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 32:
                _context3.prev = 32;

                if (!_didIteratorError) {
                  _context3.next = 35;
                  break;
                }

                throw _iteratorError;

              case 35:
                return _context3.finish(32);

              case 36:
                return _context3.finish(29);

              case 37:
                _context3.next = 46;
                break;

              case 39:
                _optionsImage = this.options.particles.shape.image;
                _src = _optionsImage.src;
                _image = {
                  error: false
                };
                _image.type = _src.substr(_src.length - 3);
                _context3.next = 45;
                return this.loadImg(_image, _optionsImage);

              case 45:
                this.images.push(_image);

              case 46:
                _context3.next = 49;
                break;

              case 48:
                this.checkBeforeDraw();

              case 49:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[10, 25, 29, 37], [30,, 32, 36]]);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "init",
    value: function init() {
      /* init canvas + particles */
      this.retina.init();
      this.canvas.init();
      this.particles.init();
      this.densityAutoParticles();
    }
  }, {
    key: "handleVisibilityChange",
    value: function handleVisibilityChange() {
      if (document.hidden) {
        this.pageHidden = true;

        if (this.drawAnimationFrame) {
          Container.cancelAnimation(this.drawAnimationFrame);
        }
      } else {
        this.pageHidden = false;
        this.lastFrameTime = performance.now();
        this.drawer.draw(0);
      }
    }
  }, {
    key: "checkBeforeDraw",
    value: function checkBeforeDraw() {
      if (this.options.particles.shape.type === _ShapeType.ShapeType.image) {
        if (this.checkAnimationFrame) {
          Container.cancelAnimation(this.checkAnimationFrame);
        }

        if (this.images.every(function (img) {
          return img.error;
        })) {
          return;
        }
      }

      this.init();
      this.drawer.draw(0);
    }
  }], [{
    key: "requestFrame",
    value: function requestFrame(callback) {
      return window.customRequestAnimationFrame(callback);
    }
  }, {
    key: "cancelAnimation",
    value: function cancelAnimation(handle) {
      window.cancelAnimationFrame(handle);
    }
  }]);
  return Container;
}();

exports.Container = Container;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveDirection = void 0;
var MoveDirection;
exports.MoveDirection = MoveDirection;

(function (MoveDirection) {
  MoveDirection["bottom"] = "bottom";
  MoveDirection["bottomLeft"] = "bottom-left";
  MoveDirection["bottomRight"] = "bottom-right";
  MoveDirection["left"] = "left";
  MoveDirection["none"] = "none";
  MoveDirection["right"] = "right";
  MoveDirection["top"] = "top";
  MoveDirection["topLeft"] = "top-left";
  MoveDirection["topRight"] = "top-right";
})(MoveDirection || (exports.MoveDirection = MoveDirection = {}));

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InteractivityDetect = void 0;
var InteractivityDetect;
exports.InteractivityDetect = InteractivityDetect;

(function (InteractivityDetect) {
  InteractivityDetect["canvas"] = "canvas";
  InteractivityDetect["parent"] = "parent";
  InteractivityDetect["window"] = "window";
})(InteractivityDetect || (exports.InteractivityDetect = InteractivityDetect = {}));

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Particle = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Bubbler = __webpack_require__(31);

var _Drawer = __webpack_require__(33);

var _Grabber = __webpack_require__(34);

var _Repulser = __webpack_require__(35);

var _ShapeType = __webpack_require__(7);

var _Updater = __webpack_require__(36);

var _Utils = __webpack_require__(3);

var _PolygonMaskType = __webpack_require__(5);

var _Connecter = __webpack_require__(38);

var _InteractionManager = __webpack_require__(39);

var _HoverMode = __webpack_require__(10);

var _ClickMode = __webpack_require__(6);
/**
 * The single particle object
 */


var Particle = /*#__PURE__*/function () {
  /* --------- tsParticles functions - particles ----------- */
  function Particle(container, position) {
    (0, _classCallCheck2["default"])(this, Particle);
    this.radius = void 0;
    this.angle = void 0;
    this.size = void 0;
    this.initialPosition = void 0;
    this.position = void 0;
    this.offset = void 0;
    this.color = void 0;
    this.opacity = void 0;
    this.velocity = void 0;
    this.shape = void 0;
    this.image = void 0;
    this.initialVelocity = void 0;
    this.updater = void 0;
    this.bubbler = void 0;
    this.repulser = void 0;
    this.connecter = void 0;
    this.drawer = void 0;
    this.grabber = void 0;
    this.interactionManager = void 0;
    this.container = void 0;
    this.container = container;
    var options = container.options;
    var color = options.particles.color;
    /* size */

    this.size = {};
    this.angle = options.particles.rotate.random ? Math.random() * 360 : options.particles.rotate.value;
    this.radius = (options.particles.size.random ? Math.random() : 1) * container.retina.sizeValue;

    if (options.particles.size.animation.enable) {
      this.size.status = false;
      this.size.velocity = container.retina.sizeAnimationSpeed / 100;

      if (!options.particles.size.animation.sync) {
        this.size.velocity = this.size.velocity * Math.random();
      }
    }

    if (options.particles.rotate.animation.enable) {
      if (!options.particles.rotate.animation.sync) {
        this.angle = Math.random() * 360;
      }
    }
    /* position */


    this.position = this.calcPosition(this.container, position);

    if (options.polygon.type === _PolygonMaskType.PolygonMaskType.inline) {
      this.initialPosition = {
        x: this.position.x,
        y: this.position.y
      };
    }
    /* parallax */


    this.offset = {
      x: 0,
      y: 0
    };
    /* check position - avoid overlap */

    if (options.particles.move.bounce) {
      this.checkOverlap(position);
    }
    /* color */


    this.color = _Utils.Utils.getParticleColor(color);
    /* opacity */

    this.opacity = {
      value: (options.particles.opacity.random ? Math.random() : 1) * options.particles.opacity.value
    };

    if (options.particles.opacity.animation.enable) {
      this.opacity.status = false;
      this.opacity.velocity = options.particles.opacity.animation.speed / 100;

      if (!options.particles.opacity.animation.sync) {
        this.opacity.velocity *= Math.random();
      }
    }
    /* animation - velocity for speed */


    this.initialVelocity = Particle.calculateVelocity(options);
    this.velocity = {
      horizontal: this.initialVelocity.horizontal,
      vertical: this.initialVelocity.vertical
    };
    /* if shape is image */

    var shapeType = options.particles.shape.type;

    if (shapeType instanceof Array) {
      this.shape = shapeType[Math.floor(Math.random() * shapeType.length)];
    } else {
      this.shape = shapeType;
    }

    if (this.shape === _ShapeType.ShapeType.image) {
      var shape = options.particles.shape;
      var index = Math.floor(Math.random() * container.images.length);
      var image = container.images[index];
      var optionsImage = shape.image instanceof Array ? shape.image[index] : shape.image;
      this.image = {
        data: image,
        ratio: optionsImage.width / optionsImage.height,
        replaceColor: optionsImage.replaceColor,
        src: optionsImage.src
      };

      if (!this.image.ratio) {
        this.image.ratio = 1;
      }
    }

    this.updater = new _Updater.Updater(this.container, this);
    this.bubbler = new _Bubbler.Bubbler(this.container, this);
    this.repulser = new _Repulser.Repulser(this.container, this);
    this.drawer = new _Drawer.Drawer(this.container, this, this.bubbler);
    this.grabber = new _Grabber.Grabber(this.container, this);
    this.connecter = new _Connecter.Connecter(this.container, this);
    this.interactionManager = new _InteractionManager.InteractionManager(this.container, this);
  }

  (0, _createClass2["default"])(Particle, [{
    key: "resetVelocity",
    value: function resetVelocity() {
      var container = this.container;
      var options = container.options;
      var velocity = Particle.calculateVelocity(options);
      this.velocity.horizontal = velocity.horizontal;
      this.velocity.vertical = velocity.vertical;
    }
  }, {
    key: "update",
    value: function update(index, delta) {
      var container = this.container;
      var options = container.options;
      this.updater.update(delta);
      var hoverMode = options.interactivity.events.onHover.mode;
      var clickMode = options.interactivity.events.onClick.mode;
      /* events */

      if (_Utils.Utils.isInArray(_HoverMode.HoverMode.grab, hoverMode)) {
        this.grabber.grab();
      } //  New interactivity `connect` which would just connect the particles on hover


      if (_Utils.Utils.isInArray(_HoverMode.HoverMode.connect, options.interactivity.events.onHover.mode)) {
        for (var j = index + 1; j < container.particles.array.length; j++) {
          var p2 = container.particles.array[j];
          this.connecter.connect(p2);
        }
      }

      if (_Utils.Utils.isInArray(_HoverMode.HoverMode.bubble, hoverMode) || _Utils.Utils.isInArray(_ClickMode.ClickMode.bubble, clickMode)) {
        this.bubbler.bubble();
      }

      if (_Utils.Utils.isInArray(_HoverMode.HoverMode.repulse, hoverMode) || _Utils.Utils.isInArray(_ClickMode.ClickMode.repulse, clickMode)) {
        this.repulser.repulse();
      }
    }
  }, {
    key: "interact",
    value: function interact(p2) {
      this.interactionManager.interact(p2);
    }
  }, {
    key: "draw",
    value: function draw() {
      this.drawer.draw();
    }
  }, {
    key: "isOverlapping",
    value: function isOverlapping() {
      var container = this.container;
      var p = this;
      var collisionFound = false;
      var iterations = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = container.particles.array.filter(function (t) {
          return t != p;
        })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var p2 = _step.value;
          iterations++;

          var dist = _Utils.Utils.getDistanceBetweenCoordinates(p.position, p2.position);

          if (dist <= p.radius + p2.radius) {
            collisionFound = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return {
        collisionFound: collisionFound,
        iterations: iterations
      };
    }
  }, {
    key: "checkOverlap",
    value: function checkOverlap(position) {
      var container = this.container;
      var p = this;
      var overlapResult = p.isOverlapping();

      if (overlapResult.iterations >= container.particles.array.length) {
        var idx = container.particles.array.indexOf(this);

        if (idx >= 0) {
          // too many particles, removing from the current
          container.particles.array.splice(idx);
        }
      }

      if (overlapResult.collisionFound) {
        p.position.x = position ? position.x : Math.random() * container.canvas.dimension.width;
        p.position.y = position ? position.y : Math.random() * container.canvas.dimension.height;
        p.checkOverlap();
      }
    }
  }, {
    key: "calcPosition",
    value: function calcPosition(container, position) {
      var pos = {
        x: 0,
        y: 0
      };

      if (container.polygon.raw && container.polygon.raw.length > 0) {
        if (position) {
          pos.x = position.x;
          pos.y = position.y;
        } else {
          var randomPoint = container.polygon.randomPointInPolygon();
          pos.x = randomPoint.x;
          pos.y = randomPoint.y;
        }
      } else {
        pos.x = position ? position.x : Math.random() * container.canvas.dimension.width;
        pos.y = position ? position.y : Math.random() * container.canvas.dimension.height;
        /* check position  - into the canvas */

        if (pos.x > container.canvas.dimension.width - this.radius * 2) {
          pos.x -= this.radius;
        } else if (pos.x < this.radius * 2) {
          pos.x += this.radius;
        }

        if (pos.y > container.canvas.dimension.height - this.radius * 2) {
          pos.y -= this.radius;
        } else if (pos.y < this.radius * 2) {
          pos.y += this.radius;
        }
      }

      return pos;
    }
  }], [{
    key: "calculateVelocity",
    value: function calculateVelocity(options) {
      var baseVelocity = _Utils.Utils.getParticleBaseVelocity(options);

      var res = {
        horizontal: 0,
        vertical: 0
      };

      if (options.particles.move.straight) {
        res.horizontal = baseVelocity.x;
        res.vertical = baseVelocity.y;

        if (options.particles.move.random) {
          res.horizontal *= Math.random();
          res.vertical *= Math.random();
        }
      } else {
        res.horizontal = baseVelocity.x + Math.random() - 0.5;
        res.vertical = baseVelocity.y + Math.random() - 0.5;
      } // const theta = 2.0 * Math.PI * Math.random();
      // res.x = Math.cos(theta);
      // res.y = Math.sin(theta);


      return res;
    }
  }]);
  return Particle;
}();

exports.Particle = Particle;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DivMode = void 0;
var DivMode;
exports.DivMode = DivMode;

(function (DivMode) {
  DivMode["repulse"] = "repulse";
})(DivMode || (exports.DivMode = DivMode = {}));

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RotateDirection = void 0;
var RotateDirection;
exports.RotateDirection = RotateDirection;

(function (RotateDirection) {
  RotateDirection["clockwise"] = "clockwise";
  RotateDirection["counterClockwise"] = "counter-clockwise";
})(RotateDirection || (exports.RotateDirection = RotateDirection = {}));

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Lifecycle", function() { return /* reexport */ types_lifecycle; });
__webpack_require__.d(__webpack_exports__, "autoInjectable", function() { return /* reexport */ auto_injectable; });
__webpack_require__.d(__webpack_exports__, "inject", function() { return /* reexport */ decorators_inject; });
__webpack_require__.d(__webpack_exports__, "injectable", function() { return /* reexport */ decorators_injectable; });
__webpack_require__.d(__webpack_exports__, "registry", function() { return /* reexport */ decorators_registry; });
__webpack_require__.d(__webpack_exports__, "singleton", function() { return /* reexport */ decorators_singleton; });
__webpack_require__.d(__webpack_exports__, "injectAll", function() { return /* reexport */ inject_all; });
__webpack_require__.d(__webpack_exports__, "scoped", function() { return /* reexport */ scoped; });
__webpack_require__.d(__webpack_exports__, "instanceCachingFactory", function() { return /* reexport */ instanceCachingFactory; });
__webpack_require__.d(__webpack_exports__, "predicateAwareClassFactory", function() { return /* reexport */ predicateAwareClassFactory; });
__webpack_require__.d(__webpack_exports__, "isClassProvider", function() { return /* reexport */ isClassProvider; });
__webpack_require__.d(__webpack_exports__, "isFactoryProvider", function() { return /* reexport */ isFactoryProvider; });
__webpack_require__.d(__webpack_exports__, "isNormalToken", function() { return /* reexport */ isNormalToken; });
__webpack_require__.d(__webpack_exports__, "isTokenProvider", function() { return /* reexport */ isTokenProvider; });
__webpack_require__.d(__webpack_exports__, "isValueProvider", function() { return /* reexport */ isValueProvider; });
__webpack_require__.d(__webpack_exports__, "container", function() { return /* reexport */ instance; });

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/types/lifecycle.js
var Lifecycle;
(function (Lifecycle) {
    Lifecycle[Lifecycle["Transient"] = 0] = "Transient";
    Lifecycle[Lifecycle["Singleton"] = 1] = "Singleton";
    Lifecycle[Lifecycle["ResolutionScoped"] = 2] = "ResolutionScoped";
    Lifecycle[Lifecycle["ContainerScoped"] = 3] = "ContainerScoped";
})(Lifecycle || (Lifecycle = {}));
/* harmony default export */ var types_lifecycle = (Lifecycle);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/types/index.js


// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/reflection-helpers.js
var INJECTION_TOKEN_METADATA_KEY = "injectionTokens";
function getParamInfo(target) {
    var params = Reflect.getMetadata("design:paramtypes", target) || [];
    var injectionTokens = Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) || {};
    Object.keys(injectionTokens).forEach(function (key) {
        params[+key] = injectionTokens[key];
    });
    return params;
}
function defineInjectionTokenMetadata(data) {
    return function (target, _propertyKey, parameterIndex) {
        var injectionTokens = Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) || {};
        injectionTokens[parameterIndex] = data;
        Reflect.defineMetadata(INJECTION_TOKEN_METADATA_KEY, injectionTokens, target);
    };
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/class-provider.js
function isClassProvider(provider) {
    return !!provider.useClass;
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/factory-provider.js
function isFactoryProvider(provider) {
    return !!provider.useFactory;
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/injection-token.js
function isNormalToken(token) {
    return typeof token === "string" || typeof token === "symbol";
}
function isTokenDescriptor(descriptor) {
    return (typeof descriptor === "object" &&
        "token" in descriptor &&
        "multiple" in descriptor);
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/token-provider.js
function isTokenProvider(provider) {
    return !!provider.useToken;
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/value-provider.js
function isValueProvider(provider) {
    return provider.useValue != undefined;
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/index.js






// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/provider.js




function isProvider(provider) {
    return (isClassProvider(provider) ||
        isValueProvider(provider) ||
        isTokenProvider(provider) ||
        isFactoryProvider(provider));
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/registry.js
var Registry = (function () {
    function Registry() {
        this._registryMap = new Map();
    }
    Registry.prototype.entries = function () {
        return this._registryMap.entries();
    };
    Registry.prototype.getAll = function (key) {
        this.ensure(key);
        return this._registryMap.get(key);
    };
    Registry.prototype.get = function (key) {
        this.ensure(key);
        var value = this._registryMap.get(key);
        return value[value.length - 1] || null;
    };
    Registry.prototype.set = function (key, value) {
        this.ensure(key);
        this._registryMap.get(key).push(value);
    };
    Registry.prototype.setAll = function (key, value) {
        this._registryMap.set(key, value);
    };
    Registry.prototype.has = function (key) {
        this.ensure(key);
        return this._registryMap.get(key).length > 0;
    };
    Registry.prototype.clear = function () {
        this._registryMap.clear();
    };
    Registry.prototype.ensure = function (key) {
        if (!this._registryMap.has(key)) {
            this._registryMap.set(key, []);
        }
    };
    return Registry;
}());
/* harmony default export */ var registry = (Registry);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/resolution-context.js
var ResolutionContext = (function () {
    function ResolutionContext() {
        this.scopedResolutions = new Map();
    }
    return ResolutionContext;
}());
/* harmony default export */ var resolution_context = (ResolutionContext);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/error-helpers.js

function formatDependency(params, idx) {
    if (params === null) {
        return "at position #" + idx;
    }
    var argName = params.split(",")[idx].trim();
    return "\"" + argName + "\" at position #" + idx;
}
function composeErrorMessage(msg, e, indent) {
    if (indent === void 0) { indent = "    "; }
    return __spread([msg], e.message.split("\n").map(function (l) { return indent + l; })).join("\n");
}
function formatErrorCtor(ctor, paramIdx, error) {
    var _a = __read(ctor.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), _b = _a[1], params = _b === void 0 ? null : _b;
    var dep = formatDependency(params, paramIdx);
    return composeErrorMessage("Cannot inject the dependency " + dep + " of \"" + ctor.name + "\" constructor. Reason:", error);
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/dependency-container.js








var typeInfo = new Map();
var dependency_container_InternalDependencyContainer = (function () {
    function InternalDependencyContainer(parent) {
        this.parent = parent;
        this._registry = new registry();
    }
    InternalDependencyContainer.prototype.register = function (token, providerOrConstructor, options) {
        if (options === void 0) { options = { lifecycle: types_lifecycle.Transient }; }
        var provider;
        if (!isProvider(providerOrConstructor)) {
            provider = { useClass: providerOrConstructor };
        }
        else {
            provider = providerOrConstructor;
        }
        if (options.lifecycle === types_lifecycle.Singleton ||
            options.lifecycle == types_lifecycle.ContainerScoped ||
            options.lifecycle == types_lifecycle.ResolutionScoped) {
            if (isValueProvider(provider) || isFactoryProvider(provider)) {
                throw new Error("Cannot use lifecycle \"" + types_lifecycle[options.lifecycle] + "\" with ValueProviders or FactoryProviders");
            }
        }
        this._registry.set(token, { provider: provider, options: options });
        return this;
    };
    InternalDependencyContainer.prototype.registerType = function (from, to) {
        if (isNormalToken(to)) {
            return this.register(from, {
                useToken: to
            });
        }
        return this.register(from, {
            useClass: to
        });
    };
    InternalDependencyContainer.prototype.registerInstance = function (token, instance) {
        return this.register(token, {
            useValue: instance
        });
    };
    InternalDependencyContainer.prototype.registerSingleton = function (from, to) {
        if (isNormalToken(from)) {
            if (isNormalToken(to)) {
                return this.register(from, {
                    useToken: to
                }, { lifecycle: types_lifecycle.Singleton });
            }
            else if (to) {
                return this.register(from, {
                    useClass: to
                }, { lifecycle: types_lifecycle.Singleton });
            }
            throw new Error('Cannot register a type name as a singleton without a "to" token');
        }
        var useClass = from;
        if (to && !isNormalToken(to)) {
            useClass = to;
        }
        return this.register(from, {
            useClass: useClass
        }, { lifecycle: types_lifecycle.Singleton });
    };
    InternalDependencyContainer.prototype.resolve = function (token, context) {
        if (context === void 0) { context = new resolution_context(); }
        var registration = this.getRegistration(token);
        if (!registration && isNormalToken(token)) {
            throw new Error("Attempted to resolve unregistered dependency token: \"" + token.toString() + "\"");
        }
        if (registration) {
            return this.resolveRegistration(registration, context);
        }
        return this.construct(token, context);
    };
    InternalDependencyContainer.prototype.resolveRegistration = function (registration, context) {
        if (registration.options.lifecycle === types_lifecycle.ResolutionScoped &&
            context.scopedResolutions.has(registration)) {
            return context.scopedResolutions.get(registration);
        }
        var isSingleton = registration.options.lifecycle === types_lifecycle.Singleton;
        var isContainerScoped = registration.options.lifecycle === types_lifecycle.ContainerScoped;
        var returnInstance = isSingleton || isContainerScoped;
        var resolved;
        if (isValueProvider(registration.provider)) {
            resolved = registration.provider.useValue;
        }
        else if (isTokenProvider(registration.provider)) {
            resolved = returnInstance
                ? registration.instance ||
                    (registration.instance = this.resolve(registration.provider.useToken, context))
                : this.resolve(registration.provider.useToken, context);
        }
        else if (isClassProvider(registration.provider)) {
            resolved = returnInstance
                ? registration.instance ||
                    (registration.instance = this.construct(registration.provider.useClass, context))
                : this.construct(registration.provider.useClass, context);
        }
        else if (isFactoryProvider(registration.provider)) {
            resolved = registration.provider.useFactory(this);
        }
        else {
            resolved = this.construct(registration.provider, context);
        }
        if (registration.options.lifecycle === types_lifecycle.ResolutionScoped) {
            context.scopedResolutions.set(registration, resolved);
        }
        return resolved;
    };
    InternalDependencyContainer.prototype.resolveAll = function (token, context) {
        var _this = this;
        if (context === void 0) { context = new resolution_context(); }
        var registrations = this.getAllRegistrations(token);
        if (!registrations && isNormalToken(token)) {
            throw new Error("Attempted to resolve unregistered dependency token: \"" + token.toString() + "\"");
        }
        if (registrations) {
            return registrations.map(function (item) {
                return _this.resolveRegistration(item, context);
            });
        }
        return [this.construct(token, context)];
    };
    InternalDependencyContainer.prototype.isRegistered = function (token, recursive) {
        if (recursive === void 0) { recursive = false; }
        return (this._registry.has(token) ||
            (recursive &&
                (this.parent || false) &&
                this.parent.isRegistered(token, true)));
    };
    InternalDependencyContainer.prototype.reset = function () {
        this._registry.clear();
    };
    InternalDependencyContainer.prototype.createChildContainer = function () {
        var e_1, _a;
        var childContainer = new InternalDependencyContainer(this);
        try {
            for (var _b = __values(this._registry.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), token = _d[0], registrations = _d[1];
                if (registrations.some(function (_a) {
                    var options = _a.options;
                    return options.lifecycle === types_lifecycle.ContainerScoped;
                })) {
                    childContainer._registry.setAll(token, registrations.map(function (registration) {
                        if (registration.options.lifecycle === types_lifecycle.ContainerScoped) {
                            return {
                                provider: registration.provider,
                                options: registration.options
                            };
                        }
                        return registration;
                    }));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return childContainer;
    };
    InternalDependencyContainer.prototype.getRegistration = function (token) {
        if (this.isRegistered(token)) {
            return this._registry.get(token);
        }
        if (this.parent) {
            return this.parent.getRegistration(token);
        }
        return null;
    };
    InternalDependencyContainer.prototype.getAllRegistrations = function (token) {
        if (this.isRegistered(token)) {
            return this._registry.getAll(token);
        }
        if (this.parent) {
            return this.parent.getAllRegistrations(token);
        }
        return null;
    };
    InternalDependencyContainer.prototype.construct = function (ctor, context) {
        if (typeof ctor === "undefined") {
            throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem.");
        }
        if (ctor.length === 0) {
            return new ctor();
        }
        var paramInfo = typeInfo.get(ctor);
        if (!paramInfo || paramInfo.length === 0) {
            throw new Error("TypeInfo not known for \"" + ctor.name + "\"");
        }
        var params = paramInfo.map(this.resolveParams(context, ctor));
        return new (ctor.bind.apply(ctor, __spread([void 0], params)))();
    };
    InternalDependencyContainer.prototype.resolveParams = function (context, ctor) {
        var _this = this;
        return function (param, idx) {
            try {
                if (isTokenDescriptor(param)) {
                    return param.multiple
                        ? _this.resolveAll(param.token)
                        : _this.resolve(param.token, context);
                }
                return _this.resolve(param, context);
            }
            catch (e) {
                throw new Error(formatErrorCtor(ctor, idx, e));
            }
        };
    };
    return InternalDependencyContainer;
}());
var instance = new dependency_container_InternalDependencyContainer();
/* harmony default export */ var dependency_container = (instance);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/auto-injectable.js





function autoInjectable() {
    return function (target) {
        var paramInfo = getParamInfo(target);
        return (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, __spread(args.concat(paramInfo.slice(args.length).map(function (type, index) {
                    try {
                        if (isTokenDescriptor(type)) {
                            return type.multiple
                                ? instance.resolveAll(type.token)
                                : instance.resolve(type.token);
                        }
                        return instance.resolve(type);
                    }
                    catch (e) {
                        var argIndex = index + args.length;
                        throw new Error(formatErrorCtor(target, argIndex, e));
                    }
                })))) || this;
            }
            return class_1;
        }(target));
    };
}
/* harmony default export */ var auto_injectable = (autoInjectable);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/inject.js

function inject(token) {
    return defineInjectionTokenMetadata(token);
}
/* harmony default export */ var decorators_inject = (inject);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/injectable.js


function injectable() {
    return function (target) {
        typeInfo.set(target, getParamInfo(target));
    };
}
/* harmony default export */ var decorators_injectable = (injectable);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/registry.js


function registry_registry(registrations) {
    if (registrations === void 0) { registrations = []; }
    return function (target) {
        registrations.forEach(function (_a) {
            var token = _a.token, options = _a.options, provider = __rest(_a, ["token", "options"]);
            return instance.register(token, provider, options);
        });
        return target;
    };
}
/* harmony default export */ var decorators_registry = (registry_registry);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/singleton.js


function singleton() {
    return function (target) {
        decorators_injectable()(target);
        instance.registerSingleton(target);
    };
}
/* harmony default export */ var decorators_singleton = (singleton);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/inject-all.js

function injectAll(token) {
    var data = { token: token, multiple: true };
    return defineInjectionTokenMetadata(data);
}
/* harmony default export */ var inject_all = (injectAll);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/scoped.js


function scoped(lifecycle, token) {
    return function (target) {
        decorators_injectable()(target);
        instance.register(token || target, target, {
            lifecycle: lifecycle
        });
    };
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/index.js








// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/factories/instance-caching-factory.js
function instanceCachingFactory(factoryFunc) {
    var instance;
    return function (dependencyContainer) {
        if (instance == undefined) {
            instance = factoryFunc(dependencyContainer);
        }
        return instance;
    };
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/factories/predicate-aware-class-factory.js
function predicateAwareClassFactory(predicate, trueConstructor, falseConstructor, useCaching) {
    if (useCaching === void 0) { useCaching = true; }
    var instance;
    var previousPredicate;
    return function (dependencyContainer) {
        var currentPredicate = predicate(dependencyContainer);
        if (!useCaching || previousPredicate !== currentPredicate) {
            if ((previousPredicate = currentPredicate)) {
                instance = dependencyContainer.resolve(trueConstructor);
            }
            else {
                instance = dependencyContainer.resolve(falseConstructor);
            }
        }
        return instance;
    };
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/factories/index.js



// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/index.js
if (typeof Reflect === "undefined" || !Reflect.getMetadata) {
    throw new Error("tsyringe requires a reflect polyfill. Please add 'import \"reflect-metadata\"' to the top of your entry point.");
}







/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* -----------------------------------------------
/* Author : Matteo Bruni - https://www.matteobruni.it
/* MIT license: https://opensource.org/licenses/MIT
/* Demo / Generator : https://particles.matteobruni.it/
/* GitHub : https://www.github.com/matteobruni/tsparticles
/* How to use? : Check the GitHub README
/* v1.9.2
/* ----------------------------------------------- */

var _interopRequireDefault = __webpack_require__(2);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(23);

var _Loader = __webpack_require__(13);

var _support = __webpack_require__(46);

var _tsyringe = __webpack_require__(21);

var _Options = __webpack_require__(48);

var _dec, _class;
/* ---------- global functions - vendors ------------ */


window.customRequestAnimationFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
  };
}();

window.customCancelRequestAnimationFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}();
/* ---------- tsParticles functions - start ------------ */

/**
 * Main class for creating the singleton on window.
 * It's a proxy to the static [[Loader]] class
 */


var Main = (_dec = (0, _tsyringe.singleton)(), _dec(_class = /*#__PURE__*/function () {
  function Main() {
    (0, _classCallCheck2["default"])(this, Main);
  }

  (0, _createClass2["default"])(Main, [{
    key: "loadFromArray",

    /**
     * Loads an options object from the provided array to create a [[Container]] object.
     * @param tagId the particles container element id
     * @param params the options array to get the item from
     * @param index if provided gets the corresponding item from the array
     */
    value: function loadFromArray(tagId, params, index) {
      return _Loader.Loader.loadFromArray(tagId, params, index);
    }
    /**
     * Loads the provided options to create a [[Container]] object.
     * @param tagId the particles container element id
     * @param params the options object to initialize the [[Container]]
     */

  }, {
    key: "load",
    value: function load(tagId, params) {
      return _Loader.Loader.load(tagId, params);
    }
    /**
     * Loads the provided json with a GET request. The content will be used to create a [[Container]] object.
     * This method is async, so if you need a callback refer to JavaScript function `fetch`
     * @param tagId the particles container element id
     * @param pathConfigJson the json path to use in the GET request
     */

  }, {
    key: "loadJSON",
    value: function loadJSON(tagId, pathConfigJson) {
      return _Loader.Loader.loadJSON(tagId, pathConfigJson);
    }
    /**
     * Adds an additional click handler to all the loaded [[Container]] objects.
     * @param callback the function called after the click event is fired
     */

  }, {
    key: "setOnClickHandler",
    value: function setOnClickHandler(callback) {
      _Loader.Loader.setOnClickHandler(callback);
    }
    /**
     * All the [[Container]] objects loaded
     */

  }, {
    key: "dom",
    value: function dom() {
      return _Loader.Loader.dom();
    }
    /**
     * Retrieves a [[Container]] from all the objects loaded
     * @param index the object index
     */

  }, {
    key: "domItem",
    value: function domItem(index) {
      return _Loader.Loader.domItem(index);
    }
  }]);
  return Main;
}()) || _class);

_tsyringe.container.register("IOptions", {
  useClass: _Options.Options
});
/**
 * The new singleton, replacing the old particlesJS
 */


window.tsParticles = _tsyringe.container.resolve(Main);
Object.freeze(window.tsParticles);
/* particles.js compatibility */

/**
 * Loads the provided options to create a [[Container]] object.
 * @deprecated this method is obsolete, please use the new tsParticles.load
 * @param tagId the particles container element id
 * @param params the options object to initialize the [[Container]]
 */

window.particlesJS = function (tagId, params) {
  return _support.ParticlesJS.load(tagId, params);
};
/**
 * Loads the provided json with a GET request. The content will be used to create a [[Container]] object.
 * @deprecated this method is obsolete, please use the new tsParticles.loadJSON
 * @param tagId the particles container element id
 * @param pathConfigJson the json path to use in the GET request
 * @param callback the function called after the [[Container]] object is loaded that will be passed as a parameter
 */


window.particlesJS.load = function (tagId, pathConfigJson, callback) {
  return _support.ParticlesJS.loadJson(tagId, pathConfigJson, callback);
};
/**
 * Adds an additional click handler to all the loaded [[Container]] objects.
 * @deprecated this method is obsolete, please use the new tsParticles.setOnClickHandler
 * @param callback the function called after the click event is fired
 */


window.particlesJS.setOnClickHandler = function (callback) {
  return _support.ParticlesJS.setOnClickHandler(callback);
};
/**
 * All the [[Container]] objects loaded
 * @deprecated this method is obsolete, please use the new tsParticles.dom
 */


window.pJSDom = function () {
  if (console) {
    console.warn("this method is obsolete, please use the new tsParticles.dom");
  }

  return window.tsParticles.dom();
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(24), __webpack_require__(25)))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Canvas = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(8));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(9));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Constants = __webpack_require__(14);

var _PolygonMaskType = __webpack_require__(5);

var _Utils = __webpack_require__(3);
/**
 * Canvas manager
 */


var Canvas = /*#__PURE__*/function () {
  /**
   * The particles canvas
   */

  /**
   * The particles canvas context
   */

  /**
   * The particles canvas dimension
   */

  /**
   * The particles canvas container element id
   */

  /**
   * The ratio used by the particles canvas
   */

  /**
   * The parent container
   */

  /**
   * Constructor of canvas manager
   * @param container the parent container
   * @param tagId the particles container element id
   */
  function Canvas(container, tagId) {
    (0, _classCallCheck2["default"])(this, Canvas);
    this.element = void 0;
    this.context = void 0;
    this.dimension = void 0;
    this.tagId = void 0;
    this.pxRatio = void 0;
    this.container = void 0;
    var canvasEl = document.querySelector("#".concat(tagId, " > .").concat(_Constants.Constants.canvasClass));
    this.container = container;
    this.element = canvasEl;
    this.dimension = {
      height: canvasEl.offsetHeight,
      width: canvasEl.offsetWidth
    };
    this.tagId = tagId;
    this.pxRatio = 1;
    this.context = this.element.getContext("2d");
  }
  /* ---------- tsParticles functions - canvas ------------ */

  /**
   * Initializes the canvas element
   */


  (0, _createClass2["default"])(Canvas, [{
    key: "init",
    value: function init() {
      this.size();
      this.paint();
    }
    /**
     * Calculates the size of the canvas
     */

  }, {
    key: "size",
    value: function size() {
      var _this = this;

      var container = this.container;
      var options = container.options;
      this.element.width = this.dimension.width;
      this.element.height = this.dimension.height;

      if (options.interactivity.events.resize) {
        window.addEventListener("resize", function () {
          _this.dimension.width = _this.element.offsetWidth;
          _this.dimension.height = _this.element.offsetHeight;
          /* resize canvas */

          if (container.retina.isRetina) {
            _this.dimension.width *= _this.pxRatio;
            _this.dimension.height *= _this.pxRatio;
          }

          _this.element.width = _this.dimension.width;
          _this.element.height = _this.dimension.height;
          /* repaint canvas on anim disabled */

          if (!options.particles.move.enable) {
            container.particles.clear();
            container.particles.init();
            container.particles.draw(0);
          }
          /* density particles enabled */


          container.densityAutoParticles();

          if (options.polygon.type !== _PolygonMaskType.PolygonMaskType.none) {
            if (container.polygon.redrawTimeout) {
              clearTimeout(container.polygon.redrawTimeout);
            }

            container.polygon.redrawTimeout = setTimeout( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return container.polygon.parseSvgPathToPolygon();

                    case 2:
                      container.polygon.raw = _context.sent;
                      container.particles.clear();
                      container.particles.init();
                      container.particles.draw(0);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })), 250);
          }
        });
      }
    }
    /**
     * Paints the canvas background
     */

  }, {
    key: "paint",
    value: function paint() {
      var container = this.container;
      var options = container.options;

      if (this.context) {
        if (options.backgroundMask.enable && options.backgroundMask.cover) {
          var color = _Utils.Utils.getParticleColor(options.backgroundMask.cover);

          if (color) {
            this.paintBase(_Utils.Utils.getStyleFromColor(color));
          } else {
            this.paintBase();
          }
        } else {
          this.paintBase();
        }
      }
    }
  }, {
    key: "paintBase",
    value: function paintBase() {
      var baseColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "rgba(255, 255, 255, 0)";

      if (this.context) {
        this.context.fillStyle = baseColor;
        this.context.fillRect(0, 0, this.dimension.width, this.dimension.height);
      }
    }
    /**
     * Clears the canvas content
     */

  }, {
    key: "clear",
    value: function clear() {
      var container = this.container;
      var options = container.options;

      if (options.backgroundMask.enable) {
        this.paint();
      } else {
        if (this.context) {
          this.context.clearRect(0, 0, this.dimension.width, this.dimension.height);
        }
      }
    }
  }]);
  return Canvas;
}();

exports.Canvas = Canvas;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventListeners = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _ClickMode = __webpack_require__(6);

var _InteractivityDetect = __webpack_require__(17);

var _PolygonMaskType = __webpack_require__(5);
/**
 * Particles container event listeners manager
 */


var EventListeners = /*#__PURE__*/function () {
  /**
   * Events listener constructor
   * @param container the calling container
   */
  function EventListeners(container) {
    (0, _classCallCheck2["default"])(this, EventListeners);
    this.container = void 0;
    this.container = container;
  }
  /**
   * Initializing event listeners
   */


  (0, _createClass2["default"])(EventListeners, [{
    key: "addEventsListeners",
    value: function addEventsListeners() {
      var _this = this;

      var container = this.container;
      var options = container.options;
      /* events target element */

      if (options.interactivity.detectsOn === _InteractivityDetect.InteractivityDetect.window) {
        container.interactivity.element = window;
      } else if (container.options.interactivity.detectsOn === _InteractivityDetect.InteractivityDetect.parent) {
        container.interactivity.element = container.canvas.element.parentNode;
      } else {
        container.interactivity.element = container.canvas.element;
      }

      var interactivityEl = container.interactivity.element;
      /* detect mouse pos - on hover / click event */

      if (options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable) {
        if (interactivityEl) {
          /* el on mousemove */
          interactivityEl.addEventListener("mousemove", function (e) {
            return _this.mouseTouchMove(e);
          });
          /* el on touchstart */

          interactivityEl.addEventListener("touchstart", function (e) {
            return _this.mouseTouchMove(e);
          });
          /* el on touchmove */

          interactivityEl.addEventListener("touchmove", function (e) {
            return _this.mouseTouchMove(e);
          });

          if (!options.interactivity.events.onClick.enable) {
            /* el on touchend */
            interactivityEl.addEventListener("touchend", function () {
              return _this.mouseTouchFinish();
            });
          }
          /* el on onmouseleave */


          interactivityEl.addEventListener("mouseleave", function () {
            return _this.mouseTouchFinish();
          });
          /* el on touchcancel */

          interactivityEl.addEventListener("touchcancel", function () {
            return _this.mouseTouchFinish();
          });
        }
      }
      /* on click event */


      if (options.interactivity.events.onClick.enable) {
        if (interactivityEl) {
          interactivityEl.addEventListener("touchend", function (e) {
            return _this.mouseTouchClick(e);
          });
          interactivityEl.addEventListener("mouseup", function (e) {
            return _this.mouseTouchClick(e);
          });
        }
      }
    }
    /**
     * Mouse/Touch move event
     * @param e the event arguments
     */

  }, {
    key: "mouseTouchMove",
    value: function mouseTouchMove(e) {
      var container = this.container;
      var options = container.options;
      var pos;

      if (e.type.startsWith("mouse")) {
        var mouseEvent = e;

        if (container.interactivity.element === window) {
          var clientRect = container.canvas.element.getBoundingClientRect();
          pos = {
            x: mouseEvent.clientX - clientRect.left,
            y: mouseEvent.clientY - clientRect.top
          };
        } else if (options.interactivity.detectsOn === _InteractivityDetect.InteractivityDetect.parent) {
          var source = mouseEvent.target;
          var target = mouseEvent.currentTarget;

          if (source && target) {
            var sourceRect = source.getBoundingClientRect();
            var targetRect = target.getBoundingClientRect();
            pos = {
              x: mouseEvent.offsetX + sourceRect.left - targetRect.left,
              y: mouseEvent.offsetY + sourceRect.top - targetRect.top
            };
          } else {
            pos = {
              x: mouseEvent.offsetX || mouseEvent.clientX,
              y: mouseEvent.offsetY || mouseEvent.clientY
            };
          }
        } else {
          pos = {
            x: mouseEvent.offsetX || mouseEvent.clientX,
            y: mouseEvent.offsetY || mouseEvent.clientY
          };
        }
      } else {
        var touchEvent = e;
        var lastTouch = touchEvent.touches[touchEvent.touches.length - 1];
        pos = {
          x: lastTouch.clientX,
          y: lastTouch.clientY
        };
      }

      container.interactivity.mouse.position = pos;

      if (container.retina.isRetina) {
        container.interactivity.mouse.position.x *= container.canvas.pxRatio;
        container.interactivity.mouse.position.y *= container.canvas.pxRatio;
      }

      container.interactivity.status = "mousemove";
    }
    /**
     * Mouse/Touch event finish
     */

  }, {
    key: "mouseTouchFinish",
    value: function mouseTouchFinish() {
      var container = this.container;
      container.interactivity.mouse.position = null;
      container.interactivity.status = "mouseleave";
    }
    /**
     * Mouse/Touch click/tap event
     * @param e the click event arguments
     */

  }, {
    key: "mouseTouchClick",
    value: function mouseTouchClick(e) {
      var container = this.container;
      var options = container.options;

      if (options.polygon.type !== _PolygonMaskType.PolygonMaskType.none && options.polygon.type !== _PolygonMaskType.PolygonMaskType.inline) {
        if (container.polygon.checkInsidePolygon(container.interactivity.mouse.position)) {
          this.doMouseTouchClick(e);
        }
      } else {
        this.doMouseTouchClick(e);
      }
    }
    /**
     * Mouse/Touch click/tap event implementation
     * @param e the click event arguments
     */

  }, {
    key: "doMouseTouchClick",
    value: function doMouseTouchClick(e) {
      var _this2 = this;

      var container = this.container;
      var options = container.options;

      if (container.interactivity.mouse.position) {
        container.interactivity.mouse.clickPosition = {
          x: container.interactivity.mouse.position.x,
          y: container.interactivity.mouse.position.y
        };
      }

      container.interactivity.mouse.clickTime = new Date().getTime();
      var pushNb = options.interactivity.modes.push.quantity;
      var removeNb = options.interactivity.modes.remove.quantity;

      switch (options.interactivity.events.onClick.mode) {
        case _ClickMode.ClickMode.push:
          if (options.particles.move.enable) {
            container.particles.push(pushNb, container.interactivity.mouse);
          } else {
            if (options.interactivity.modes.push.quantity === 1) {
              container.particles.push(pushNb, container.interactivity.mouse);
            } else if (options.interactivity.modes.push.quantity > 1) {
              container.particles.push(pushNb);
            }
          }

          break;

        case _ClickMode.ClickMode.remove:
          container.particles.remove(removeNb);
          break;

        case _ClickMode.ClickMode.bubble:
          container.bubble.clicking = true;
          break;

        case _ClickMode.ClickMode.repulse:
          container.repulse.clicking = true;
          container.repulse.count = 0;
          container.repulse.finish = false;
          setTimeout(function () {
            container.repulse.clicking = false;
          }, options.interactivity.modes.repulse.duration * 1000);
          break;
      }

      e.preventDefault();

      if (e.type === "touchend") {
        setTimeout(function () {
          return _this2.mouseTouchFinish();
        }, 500);
      }

      e.preventDefault();
    }
  }]);
  return EventListeners;
}();

exports.EventListeners = EventListeners;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Particles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Particle = __webpack_require__(18);

var _PolygonMaskType = __webpack_require__(5);

var _PolygonMaskInlineArrangement = __webpack_require__(12);
/**
 * Particles manager
 */


var Particles = /*#__PURE__*/function () {
  function Particles(container) {
    (0, _classCallCheck2["default"])(this, Particles);
    this.array = void 0;
    this.pushing = void 0;
    this.lineLinkedColor = void 0;
    this.container = void 0;
    this.interactionsEnabled = void 0;
    this.container = container;
    this.array = [];
    this.interactionsEnabled = false;
  }
  /* --------- tsParticles functions - particles ----------- */


  (0, _createClass2["default"])(Particles, [{
    key: "init",
    value: function init() {
      var container = this.container;
      var options = container.options;

      if (options.polygon.type === _PolygonMaskType.PolygonMaskType.inline && options.polygon.inlineArrangement === _PolygonMaskInlineArrangement.PolygonMaskInlineArrangement.onePerPoint) {
        container.polygon.drawPointsOnPolygonPath();
      } else {
        for (var i = this.array.length; i < options.particles.number.value; i++) {
          var p = new _Particle.Particle(container);
          this.array.push(p);
        }
      }

      this.interactionsEnabled = options.particles.lineLinked.enable || options.particles.move.attract.enable || options.particles.move.bounce;
    }
  }, {
    key: "update",
    value: function update(delta) {
      for (var i = 0; i < this.array.length; i++) {
        /* the particle */
        var p = this.array[i]; // let d = ( dx = container.interactivity.mouse.click_pos_x - p.x ) * dx +
        //         ( dy = container.interactivity.mouse.click_pos_y - p.y ) * dy;
        // let f = -BANG_SIZE / d;
        // if ( d < BANG_SIZE ) {
        //     let t = Math.atan2( dy, dx );
        //     p.vx = f * Math.cos(t);
        //     p.vy = f * Math.sin(t);
        // }

        p.update(i, delta);
        /* interaction auto between particles */

        if (this.interactionsEnabled) {
          for (var j = i + 1; j < this.array.length; j++) {
            var p2 = this.array[j];
            p.interact(p2);
          }
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(delta) {
      var container = this.container;
      var options = container.options;
      /* clear canvas */

      container.canvas.clear();
      /* update each particles param */

      this.update(delta);
      /* draw polygon shape in debug mode */

      if (options.polygon.draw.enable) {
        container.polygon.drawPolygon();
      }
      /* draw each particle */


      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var p = _step.value;
          p.draw();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.array = [];
    }
    /* ---------- tsParticles functions - modes events ------------ */

  }, {
    key: "push",
    value: function push(nb, mousePosition) {
      var container = this.container;
      var options = container.options;
      this.pushing = true;

      if (options.particles.number.limit > 0) {
        if (this.array.length + nb > options.particles.number.limit) {
          this.remove(this.array.length + nb - options.particles.number.limit);
        }
      }

      var pos;

      if (mousePosition) {
        pos = mousePosition.position || {
          x: 0,
          y: 0
        };
      }

      for (var i = 0; i < nb; i++) {
        var p = new _Particle.Particle(container, pos);
        this.array.push(p);
      }

      if (!options.particles.move.enable) {
        this.draw(0);
      }

      this.pushing = false;
    }
  }, {
    key: "remove",
    value: function remove(nb) {
      var container = this.container;
      var options = container.options;
      this.array.splice(0, nb);

      if (!options.particles.move.enable) {
        this.draw(0);
      }
    }
  }]);
  return Particles;
}();

exports.Particles = Particles;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bubbler = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _ProcessBubbleType = __webpack_require__(32);

var _Utils = __webpack_require__(3);

var _HoverMode = __webpack_require__(10);

var _ClickMode = __webpack_require__(6);
/**
 * Particle bubble manager
 */


var Bubbler = /*#__PURE__*/function () {
  function Bubbler(container, particle) {
    (0, _classCallCheck2["default"])(this, Bubbler);
    this.opacity = void 0;
    this.radius = void 0;
    this.particle = void 0;
    this.container = void 0;
    this.container = container;
    this.particle = particle;
  }

  (0, _createClass2["default"])(Bubbler, [{
    key: "bubble",
    value: function bubble() {
      var container = this.container;
      var options = container.options;
      var hoverEnabled = options.interactivity.events.onHover.enable;
      var hoverMode = options.interactivity.events.onHover.mode;
      var clickEnabled = options.interactivity.events.onClick.enable;
      var clickMode = options.interactivity.events.onClick.mode;
      /* on hover event */

      if (hoverEnabled && _Utils.Utils.isInArray(_HoverMode.HoverMode.bubble, hoverMode)) {
        this.hoverBubble();
      } else if (clickEnabled && _Utils.Utils.isInArray(_ClickMode.ClickMode.bubble, clickMode)) {
        this.clickBubble();
      }
    }
  }, {
    key: "init",
    value: function init() {
      var particle = this.particle;
      this.opacity = particle.opacity.value;
      this.radius = particle.radius;
    }
  }, {
    key: "process",
    value: function process(distMouse, timeSpent, data) {
      var container = this.container;
      var options = container.options;
      var bubbleDuration = options.interactivity.modes.bubble.duration;
      var bubbleParam = data.bubbleObj.optValue;
      var bubbleDistance = container.retina.bubbleModeDistance;
      var particlesParam = data.particlesObj.optValue;
      var pObjBubble = data.bubbleObj.value;
      var pObj = data.particlesObj.value || 0;
      var type = data.type;

      if (bubbleParam !== particlesParam) {
        if (!container.bubble.durationEnd) {
          if (distMouse <= bubbleDistance) {
            var obj;

            if (pObjBubble) {
              obj = pObjBubble;
            } else {
              obj = pObj;
            }

            if (obj !== bubbleParam) {
              var value = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;

              if (type === _ProcessBubbleType.ProcessBubbleType.size) {
                this.radius = value;
              }

              if (type === _ProcessBubbleType.ProcessBubbleType.opacity) {
                this.opacity = value;
              }
            }
          } else {
            if (type === _ProcessBubbleType.ProcessBubbleType.size) {
              this.radius = undefined;
            }

            if (type === _ProcessBubbleType.ProcessBubbleType.opacity) {
              this.opacity = undefined;
            }
          }
        } else if (pObjBubble) {
          var tmpValue = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;
          var dif = bubbleParam - tmpValue;

          var _value = bubbleParam + dif;

          if (type === _ProcessBubbleType.ProcessBubbleType.size) {
            this.radius = _value;
          }

          if (type === _ProcessBubbleType.ProcessBubbleType.opacity) {
            this.opacity = _value;
          }
        }
      }
    }
  }, {
    key: "clickBubble",
    value: function clickBubble() {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;
      /* on click event */

      var mouseClickPos = container.interactivity.mouse.clickPosition || {
        x: 0,
        y: 0
      };

      var distMouse = _Utils.Utils.getDistanceBetweenCoordinates(particle.position, mouseClickPos);

      var timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime || 0)) / 1000;

      if (container.bubble.clicking) {
        if (timeSpent > options.interactivity.modes.bubble.duration) {
          container.bubble.durationEnd = true;
        }

        if (timeSpent > options.interactivity.modes.bubble.duration * 2) {
          container.bubble.clicking = false;
          container.bubble.durationEnd = false;
        }
      }

      if (container.bubble.clicking) {
        /* size */
        var sizeData = {
          bubbleObj: {
            optValue: container.retina.bubbleModeSize,
            value: this.radius
          },
          particlesObj: {
            optValue: container.retina.sizeValue,
            value: this.particle.radius
          },
          type: _ProcessBubbleType.ProcessBubbleType.size
        };
        this.process(distMouse, timeSpent, sizeData);
        /* opacity */

        var opacityData = {
          bubbleObj: {
            optValue: options.interactivity.modes.bubble.opacity,
            value: this.opacity
          },
          particlesObj: {
            optValue: options.particles.opacity.value,
            value: this.particle.opacity.value
          },
          type: _ProcessBubbleType.ProcessBubbleType.opacity
        };
        this.process(distMouse, timeSpent, opacityData);
      }
    }
  }, {
    key: "hoverBubble",
    value: function hoverBubble() {
      var container = this.container;
      var particle = this.particle;
      var mousePos = container.interactivity.mouse.position || {
        x: 0,
        y: 0
      };

      var distMouse = _Utils.Utils.getDistanceBetweenCoordinates(particle.position, mousePos);

      var ratio = 1 - distMouse / container.retina.bubbleModeDistance;
      /* mousemove - check ratio */

      if (distMouse <= container.retina.bubbleModeDistance) {
        if (ratio >= 0 && container.interactivity.status === "mousemove") {
          /* size */
          this.hoverBubbleSize(ratio);
          /* opacity */

          this.hoverBubbleOpacity(ratio);
        }
      } else {
        this.init();
      }
      /* mouseleave */


      if (container.interactivity.status === "mouseleave") {
        this.init();
      }
    }
  }, {
    key: "hoverBubbleSize",
    value: function hoverBubbleSize(ratio) {
      var container = this.container;
      var particle = this.particle;

      if (container.retina.bubbleModeSize !== container.retina.sizeValue) {
        if (container.retina.bubbleModeSize > container.retina.sizeValue) {
          var size = particle.radius + container.retina.bubbleModeSize * ratio;

          if (size >= 0) {
            this.radius = size;
          }
        } else {
          var dif = particle.radius - container.retina.bubbleModeSize;

          var _size = particle.radius - dif * ratio;

          if (_size > 0) {
            this.radius = _size;
          } else {
            this.radius = 0;
          }
        }
      }
    }
  }, {
    key: "hoverBubbleOpacity",
    value: function hoverBubbleOpacity(ratio) {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;
      var modeOpacity = options.interactivity.modes.bubble.opacity;
      var optOpacity = options.particles.opacity.value;
      var pOpacity = particle.opacity.value;

      if (modeOpacity !== optOpacity) {
        if (modeOpacity > optOpacity) {
          var opacity = options.interactivity.modes.bubble.opacity * ratio;

          if (opacity > pOpacity && opacity <= modeOpacity) {
            this.opacity = opacity;
          }
        } else {
          var _opacity = pOpacity - (optOpacity - modeOpacity) * ratio;

          if (_opacity < pOpacity && _opacity >= modeOpacity) {
            this.opacity = _opacity;
          }
        }
      }
    }
  }]);
  return Bubbler;
}();

exports.Bubbler = Bubbler;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProcessBubbleType = void 0;
var ProcessBubbleType;
exports.ProcessBubbleType = ProcessBubbleType;

(function (ProcessBubbleType) {
  ProcessBubbleType["opacity"] = "opacity";
  ProcessBubbleType["size"] = "size";
})(ProcessBubbleType || (exports.ProcessBubbleType = ProcessBubbleType = {}));

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Drawer = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _ShapeType = __webpack_require__(7);
/**
 * Particle draw manager
 */


var Drawer = /*#__PURE__*/function () {
  function Drawer(container, particle, bubbler) {
    (0, _classCallCheck2["default"])(this, Drawer);
    this.particle = void 0;
    this.container = void 0;
    this.bubbler = void 0;
    this.text = void 0;
    this.container = container;
    this.particle = particle;
    this.bubbler = bubbler;
    var options = this.container.options;

    if (this.particle.shape === _ShapeType.ShapeType["char"] || particle.shape === _ShapeType.ShapeType.character) {
      var value = options.particles.shape.character.value;

      if (typeof value === "string") {
        this.text = value;
      } else {
        this.text = value[Math.floor(Math.random() * value.length)];
      }
    }
  }

  (0, _createClass2["default"])(Drawer, [{
    key: "draw",
    value: function draw() {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;
      var radius;
      var opacity;
      var colorValue;

      if (this.bubbler.radius !== undefined) {
        radius = this.bubbler.radius;
      } else {
        radius = particle.radius;
      }

      if (this.bubbler.opacity !== undefined) {
        opacity = this.bubbler.opacity;
      } else {
        opacity = particle.opacity.value;
      }

      if (particle.color) {
        colorValue = "rgba(".concat(particle.color.r, ", ").concat(particle.color.g, ", ").concat(particle.color.b, ", ").concat(opacity, ")");
      }

      if (!container.canvas.context || !colorValue) {
        return;
      }

      var ctx = container.canvas.context;
      ctx.save(); // TODO: Performance issues, the canvas shadow is really slow
      // const shadow = options.particles.shadow;
      // if (shadow.enable) {
      //     ctx.shadowBlur = shadow.blur;
      //     ctx.shadowColor = shadow.color;
      //     ctx.shadowOffsetX = shadow.offset.x;
      //     ctx.shadowOffsetY = shadow.offset.y;
      // } else {
      //     delete ctx.shadowBlur;
      //     delete ctx.shadowColor;
      //     delete ctx.shadowOffsetX;
      //     delete ctx.shadowOffsetY;
      // }

      ctx.fillStyle = colorValue;
      var pos = {
        x: particle.position.x,
        y: particle.position.y
      };
      ctx.translate(pos.x, pos.y);
      ctx.beginPath();

      if (particle.angle !== 0) {
        ctx.rotate(particle.angle * Math.PI / 180);
      }

      if (options.backgroundMask.enable) {
        ctx.globalCompositeOperation = 'destination-out';
      }

      this.drawShape(radius);
      ctx.closePath();

      if (options.particles.shape.stroke.width > 0) {
        ctx.strokeStyle = options.particles.shape.stroke.color;
        ctx.lineWidth = options.particles.shape.stroke.width;
        ctx.stroke();
      }

      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "drawShape",
    value: function drawShape(radius) {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;
      var ctx = container.canvas.context;

      if (!ctx) {
        return;
      }

      var pos = {
        x: particle.offset.x,
        y: particle.offset.y
      };

      switch (particle.shape) {
        case _ShapeType.ShapeType.line:
          ctx.moveTo(0, 0);
          ctx.lineTo(0, radius);
          ctx.strokeStyle = options.particles.shape.stroke.color;
          ctx.lineWidth = options.particles.shape.stroke.width;
          ctx.stroke();
          break;

        case _ShapeType.ShapeType.circle:
          ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2, false);
          break;

        case _ShapeType.ShapeType.edge:
        case _ShapeType.ShapeType.square:
          ctx.rect(-radius, -radius, radius * 2, radius * 2);
          break;

        case _ShapeType.ShapeType.triangle:
          {
            var start = {
              x: -radius,
              y: radius / 1.66
            };
            var side = {
              count: {
                denominator: 2,
                numerator: 3
              },
              length: radius * 2
            };
            Drawer.subDrawShape(ctx, start, side);
          }
          break;

        case _ShapeType.ShapeType.polygon:
          {
            var _start = {
              x: -radius / (options.particles.shape.polygon.sides / 3.5),
              y: -radius / (2.66 / 3.5)
            };
            var _side = {
              count: {
                denominator: 1,
                numerator: options.particles.shape.polygon.sides
              },
              length: radius * 2.66 / (options.particles.shape.polygon.sides / 3)
            };
            Drawer.subDrawShape(ctx, _start, _side);
          }
          break;

        case _ShapeType.ShapeType.star:
          {
            var _start2 = {
              x: -radius * 2 / (options.particles.shape.polygon.sides / 4),
              y: -radius / (2 * 2.66 / 3.5)
            };
            var _side2 = {
              count: {
                denominator: 2,
                numerator: options.particles.shape.polygon.sides
              },
              length: radius * 2 * 2.66 / (options.particles.shape.polygon.sides / 3)
            };
            Drawer.subDrawShape(ctx, _start2, _side2);
          }
          break;

        case _ShapeType.ShapeType.heart:
          {
            var x = -radius / 2;
            var y = -radius / 2;
            ctx.moveTo(x, y + radius / 4);
            ctx.quadraticCurveTo(x, y, x + radius / 4, y);
            ctx.quadraticCurveTo(x + radius / 2, y, x + radius / 2, y + radius / 4);
            ctx.quadraticCurveTo(x + radius / 2, y, x + radius * 3 / 4, y);
            ctx.quadraticCurveTo(x + radius, y, x + radius, y + radius / 4);
            ctx.quadraticCurveTo(x + radius, y + radius / 2, x + radius * 3 / 4, y + radius * 3 / 4);
            ctx.lineTo(x + radius / 2, y + radius);
            ctx.lineTo(x + radius / 4, y + radius * 3 / 4);
            ctx.quadraticCurveTo(x, y + radius / 2, x, y + radius / 4);
          }
          break;

        case _ShapeType.ShapeType["char"]:
        case _ShapeType.ShapeType.character:
          {
            var style = options.particles.shape.character.style;
            var weight = options.particles.shape.character.weight;
            var size = Math.round(radius) * 2;
            var font = options.particles.shape.character.font;
            var text = this.text;
            ctx.font = "".concat(style, " ").concat(weight, " ").concat(size, "px ").concat(font);

            if (text) {
              var _x = -radius / 2;

              var _y = radius / 2;

              if (options.particles.shape.character.fill) {
                ctx.fillText(text, _x, _y);
              } else {
                ctx.strokeText(text, _x, _y);
              }
            }
          }
          break;

        case _ShapeType.ShapeType.image:
          if (particle.image && particle.image.data.obj) {
            this.subDraw(ctx, particle.image.data.obj, radius);
          }

          break;
      }
    }
  }, {
    key: "subDraw",
    value: function subDraw(ctx, imgObj, radius) {
      var particle = this.particle;
      var ratio = 1;

      if (particle.image) {
        ratio = particle.image.ratio;
      }

      var pos = {
        x: -radius,
        y: -radius
      };
      ctx.drawImage(imgObj, pos.x, pos.y, radius * 2, radius * 2 / ratio);
    }
  }], [{
    key: "subDrawShape",
    value: function subDrawShape(ctx, start, side) {
      // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
      var sideCount = side.count.numerator * side.count.denominator;
      var decimalSides = side.count.numerator / side.count.denominator;
      var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
      var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians

      ctx.save();
      ctx.beginPath();
      ctx.translate(start.x, start.y);
      ctx.moveTo(0, 0);

      for (var i = 0; i < sideCount; i++) {
        ctx.lineTo(side.length, 0);
        ctx.translate(side.length, 0);
        ctx.rotate(interiorAngle);
      } // c.stroke();


      ctx.fill();
      ctx.restore();
    }
  }]);
  return Drawer;
}();

exports.Drawer = Drawer;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grabber = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);
/**
 * Particle grab manager
 */


var Grabber = /*#__PURE__*/function () {
  function Grabber(container, particle) {
    (0, _classCallCheck2["default"])(this, Grabber);
    this.container = void 0;
    this.particle = void 0;
    this.container = container;
    this.particle = particle;
  }

  (0, _createClass2["default"])(Grabber, [{
    key: "grab",
    value: function grab() {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;

      if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
        var mousePos = container.interactivity.mouse.position || {
          x: 0,
          y: 0
        };

        var distMouse = _Utils.Utils.getDistanceBetweenCoordinates(particle.position, mousePos);
        /*
           draw a line between the cursor and the particle
           if the distance between them is under the config distance
        */


        if (distMouse <= container.retina.grabModeDistance) {
          var lineOpacity = options.interactivity.modes.grab.lineLinked.opacity;
          var grabDistance = container.retina.grabModeDistance;
          var opacityLine = lineOpacity - distMouse / (1 / lineOpacity) / grabDistance;

          if (opacityLine > 0) {
            /* style */
            var optColor = options.particles.lineLinked.color;

            var lineColor = container.particles.lineLinkedColor || _Utils.Utils.hexToRgb(optColor);

            if (lineColor == "random") {
              lineColor = _Utils.Utils.getRandomColorRGBA();
            }

            container.particles.lineLinkedColor = lineColor;
            var colorLine = {
              r: 127,
              g: 127,
              b: 127
            };
            var ctx = container.canvas.context;

            if (ctx) {
              if (container.particles.lineLinkedColor == "random") {
                colorLine = _Utils.Utils.getRandomColorRGBA();
              } else {
                colorLine = container.particles.lineLinkedColor || colorLine;
              }

              ctx.strokeStyle = "rgba(".concat(colorLine.r, ",").concat(colorLine.g, ",").concat(colorLine.b, ",").concat(opacityLine, ")");
              ctx.lineWidth = container.retina.lineLinkedWidth; // container.canvas.ctx.lineCap = "round"; /* performance issue */

              /* path */

              ctx.beginPath();
              ctx.moveTo(particle.position.x + particle.offset.x, particle.position.y + particle.offset.y);
              ctx.lineTo(mousePos.x, mousePos.y);
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }
    }
  }]);
  return Grabber;
}();

exports.Grabber = Grabber;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Repulser = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _ClickMode = __webpack_require__(6);

var _HoverMode = __webpack_require__(10);

var _OutMode = __webpack_require__(11);

var _Utils = __webpack_require__(3);

var _DivMode = __webpack_require__(19);
/**
 * Particle repulse manager
 */


var Repulser = /*#__PURE__*/function () {
  function Repulser(container, particle) {
    (0, _classCallCheck2["default"])(this, Repulser);
    this.particle = void 0;
    this.container = void 0;
    this.container = container;
    this.particle = particle;
  }

  (0, _createClass2["default"])(Repulser, [{
    key: "repulse",
    value: function repulse() {
      var container = this.container;
      var options = container.options;
      var hoverEnabled = options.interactivity.events.onHover.enable;
      var clickEnabled = options.interactivity.events.onClick.enable;
      var mouseMoveStatus = container.interactivity.status === "mousemove";
      var hoverMode = options.interactivity.events.onHover.mode;
      var clickMode = options.interactivity.events.onClick.mode;
      var divMode = options.interactivity.events.onDiv.mode;

      if (mouseMoveStatus && hoverEnabled && _Utils.Utils.isInArray(_HoverMode.HoverMode.repulse, hoverMode)) {
        this.hoverRepulse();
      } else if (clickEnabled && _Utils.Utils.isInArray(_ClickMode.ClickMode.repulse, clickMode)) {
        this.clickRepulse();
      } else if (options.interactivity.events.onDiv.enable && _Utils.Utils.isInArray(_DivMode.DivMode.repulse, divMode)) {
        this.divRepulse();
      }
    }
  }, {
    key: "divRepulse",
    value: function divRepulse() {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;
      var elem = document.getElementById(options.interactivity.events.onDiv.elementId);
      var pos = {
        x: elem.offsetLeft + elem.offsetWidth / 2,
        y: elem.offsetTop + elem.offsetHeight / 2
      };
      var divWidth = elem.offsetWidth / 2;

      if (container.retina.isRetina) {
        pos.x *= container.canvas.pxRatio;
        pos.y *= container.canvas.pxRatio;
        divWidth *= container.canvas.pxRatio;
      }

      var dxDiv = particle.position.x - pos.x;
      var dyDiv = particle.position.y - pos.y;
      var distDiv = Math.sqrt(dxDiv * dxDiv + dyDiv * dyDiv);
      var normVec = {
        x: dxDiv / distDiv,
        y: dyDiv / distDiv
      };
      var repulseRadius = divWidth;
      var velocity = 100;

      var repulseFactor = _Utils.Utils.clamp((-Math.pow(distDiv / repulseRadius, 4) + 1) * velocity, 0, 50);

      this.particle.position.x += normVec.x * repulseFactor;
      this.particle.position.y += normVec.y * repulseFactor;
    }
  }, {
    key: "clickRepulse",
    value: function clickRepulse() {
      var container = this.container;
      var particle = this.particle;

      if (!container.repulse.finish) {
        if (!container.repulse.count) {
          container.repulse.count = 0;
        }

        container.repulse.count++;

        if (container.repulse.count === container.particles.array.length) {
          container.repulse.finish = true;
        }
      }

      if (container.repulse.clicking) {
        var repulseDistance = container.retina.repulseModeDistance;
        var repulseRadius = Math.pow(repulseDistance / 6, 3);
        var mouseClickPos = container.interactivity.mouse.clickPosition || {
          x: 0,
          y: 0
        };
        var dx = mouseClickPos.x - particle.position.x;
        var dy = mouseClickPos.y - particle.position.y;
        var d = dx * dx + dy * dy;
        var force = -repulseRadius / d; // default

        if (d <= repulseRadius) {
          this.processRepulse(dx, dy, force);
        } // bang - slow motion mode
        // if(!container.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }

      } else if (container.repulse.clicking === false) {
        particle.velocity.horizontal = particle.initialVelocity.horizontal;
        particle.velocity.vertical = particle.initialVelocity.vertical;
      }
    }
  }, {
    key: "hoverRepulse",
    value: function hoverRepulse() {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;
      var mousePos = container.interactivity.mouse.position || {
        x: 0,
        y: 0
      };
      var dxMouse = particle.position.x - mousePos.x;
      var dyMouse = particle.position.y - mousePos.y;
      var distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
      var normVec = {
        x: dxMouse / distMouse,
        y: dyMouse / distMouse
      };
      var repulseRadius = container.retina.repulseModeDistance;
      var velocity = 100;

      var repulseFactor = _Utils.Utils.clamp((1 - Math.pow(distMouse / repulseRadius, 2)) * velocity, 0, 50);

      var pos = {
        x: particle.position.x + normVec.x * repulseFactor,
        y: particle.position.y + normVec.y * repulseFactor
      };
      var outMode = options.particles.move.outMode;

      if (outMode === _OutMode.OutMode.bounce || outMode === _OutMode.OutMode.bounceVertical || outMode === _OutMode.OutMode.bounceHorizontal) {
        var isInside = {
          horizontal: pos.x - particle.radius > 0 && pos.x + particle.radius < container.canvas.dimension.width,
          vertical: pos.y - particle.radius > 0 && pos.y + particle.radius < container.canvas.dimension.height
        };

        if (outMode === _OutMode.OutMode.bounceVertical || isInside.horizontal) {
          particle.position.x = pos.x;
        }

        if (outMode === _OutMode.OutMode.bounceHorizontal || isInside.vertical) {
          particle.position.y = pos.y;
        }
      } else {
        particle.position.x = pos.x;
        particle.position.y = pos.y;
      }
    }
  }, {
    key: "processRepulse",
    value: function processRepulse(dx, dy, force) {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;
      var f = Math.atan2(dy, dx);
      particle.velocity.horizontal = force * Math.cos(f);
      particle.velocity.vertical = force * Math.sin(f);
      var outMode = options.particles.move.outMode;

      if (outMode === _OutMode.OutMode.bounce || outMode === _OutMode.OutMode.bounceHorizontal || outMode === _OutMode.OutMode.bounceVertical) {
        var pos = {
          x: particle.position.x + particle.velocity.horizontal,
          y: particle.position.y + particle.velocity.vertical
        };

        if (outMode !== _OutMode.OutMode.bounceVertical) {
          if (pos.x + particle.radius > container.canvas.dimension.width || pos.x - particle.radius < 0) {
            particle.velocity.horizontal = -particle.velocity.horizontal;
          }
        }

        if (outMode !== _OutMode.OutMode.bounceHorizontal) {
          if (pos.y + particle.radius > container.canvas.dimension.height || pos.y - particle.radius < 0) {
            particle.velocity.vertical = -particle.velocity.vertical;
          }
        }
      }
    }
  }]);
  return Repulser;
}();

exports.Repulser = Repulser;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Updater = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _OutMode = __webpack_require__(11);

var _Utils = __webpack_require__(3);

var _ClickMode = __webpack_require__(6);

var _PolygonMaskType = __webpack_require__(5);

var _Mover = __webpack_require__(37);

var _RotateDirection = __webpack_require__(20);
/**
 * Particle updater, it manages movement
 */


var Updater = /*#__PURE__*/function () {
  function Updater(container, particle) {
    (0, _classCallCheck2["default"])(this, Updater);
    this.particle = void 0;
    this.container = void 0;
    this.mover = void 0;
    this.container = container;
    this.particle = particle;
    this.mover = new _Mover.Mover(container, particle);
  }

  (0, _createClass2["default"])(Updater, [{
    key: "update",
    value: function update(delta) {
      /* move the particle */
      this.mover.move(delta);
      /* change opacity status */

      this.updateOpacity();
      /* change size */

      this.updateSize();
      /* change size */

      this.updateAngle();
      /* change particle position if it is out of canvas */

      this.fixOutOfCanvasPosition();
      /* out of canvas modes */

      this.updateOutMode();
    }
  }, {
    key: "updateOpacity",
    value: function updateOpacity() {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;

      if (options.particles.opacity.animation.enable) {
        if (particle.opacity.status) {
          if (particle.opacity.value >= options.particles.opacity.value) {
            particle.opacity.status = false;
          }

          particle.opacity.value += particle.opacity.velocity || 0;
        } else {
          if (particle.opacity.value <= options.particles.opacity.animation.minimumValue) {
            particle.opacity.status = true;
          }

          particle.opacity.value -= particle.opacity.velocity || 0;
        }

        if (particle.opacity.value < 0) {
          particle.opacity.value = 0;
        }
      }
    }
  }, {
    key: "updateSize",
    value: function updateSize() {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;

      if (options.particles.size.animation.enable) {
        if (particle.size.status) {
          if (particle.radius >= container.retina.sizeValue) {
            particle.size.status = false;
          }

          particle.radius += particle.size.velocity || 0;
        } else {
          if (particle.radius <= options.particles.size.animation.minimumValue) {
            particle.size.status = true;
          }

          particle.radius -= particle.size.velocity || 0;
        }

        if (particle.radius < 0) {
          particle.radius = 0;
        }
      }
    }
  }, {
    key: "updateAngle",
    value: function updateAngle() {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;

      if (options.particles.rotate.animation.enable) {
        switch (options.particles.rotate.direction) {
          case _RotateDirection.RotateDirection.clockwise:
            particle.angle += options.particles.rotate.animation.speed * Math.PI / 18;
            break;

          case _RotateDirection.RotateDirection.counterClockwise:
          default:
            particle.angle -= options.particles.rotate.animation.speed * Math.PI / 18;
            break;
        }
      }
    }
  }, {
    key: "fixOutOfCanvasPosition",
    value: function fixOutOfCanvasPosition() {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;
      var outMode = options.particles.move.outMode;
      var newPos;

      if (outMode === _OutMode.OutMode.bounce) {
        newPos = {
          x_left: particle.radius,
          x_right: container.canvas.dimension.width,
          y_bottom: container.canvas.dimension.height,
          y_top: particle.radius
        };
      } else if (outMode === _OutMode.OutMode.bounceHorizontal) {
        newPos = {
          x_left: particle.radius,
          x_right: container.canvas.dimension.width,
          y_bottom: container.canvas.dimension.height + particle.radius - particle.offset.y,
          y_top: -particle.radius - particle.offset.y
        };
      } else if (outMode === _OutMode.OutMode.bounceVertical) {
        newPos = {
          x_left: -particle.radius - particle.offset.x,
          x_right: container.canvas.dimension.width + particle.radius + particle.offset.x,
          y_bottom: container.canvas.dimension.height,
          y_top: particle.radius
        };
      } else {
        newPos = {
          x_left: -particle.radius - particle.offset.x,
          x_right: container.canvas.dimension.width + particle.radius + particle.offset.x,
          y_bottom: container.canvas.dimension.height + particle.radius - particle.offset.y,
          y_top: -particle.radius - particle.offset.y
        };
      }

      if (outMode === _OutMode.OutMode.destroy) {
        if (particle.position.x + particle.radius < 0 || particle.position.y + particle.radius < 0 || particle.position.x - particle.radius > container.canvas.dimension.width || particle.position.y - particle.radius > container.canvas.dimension.height) {
          var idx = container.particles.array.indexOf(particle);
          container.particles.array.splice(idx, 1);
          /* remove the canvas if the array is empty */

          var clickMode = options.interactivity.events.onClick.mode;

          if (!container.particles.array.length && !_Utils.Utils.isInArray(_ClickMode.ClickMode.push, clickMode)) {
            container.destroy();
          }
        }
      } else {
        var nextPos = {
          x_left: particle.position.x - particle.radius,
          x_right: particle.position.x + particle.radius,
          y_bottom: particle.position.y + particle.radius,
          y_top: particle.position.y - particle.radius
        };
        var dimension = container.canvas.dimension;

        if (nextPos.x_left > dimension.width - particle.offset.x) {
          particle.position.x = newPos.x_left;
          particle.position.y = Math.random() * dimension.height;
        } else if (nextPos.x_right < -particle.offset.x) {
          particle.position.x = newPos.x_right;
          particle.position.y = Math.random() * dimension.height;
        }

        if (nextPos.y_top > container.canvas.dimension.height - particle.offset.y) {
          particle.position.y = newPos.y_top;
          particle.position.x = Math.random() * container.canvas.dimension.width;
        } else if (nextPos.y_bottom < -particle.offset.y) {
          particle.position.y = newPos.y_bottom;
          particle.position.x = Math.random() * container.canvas.dimension.width;
        }
      }
    }
  }, {
    key: "updateOutMode",
    value: function updateOutMode() {
      var container = this.container;
      var options = container.options;

      switch (options.particles.move.outMode) {
        case _OutMode.OutMode.bounce:
        case _OutMode.OutMode.bounceVertical:
        case _OutMode.OutMode.bounceHorizontal:
          this.updateBounce();
          break;
      }
    }
  }, {
    key: "updateBounce",
    value: function updateBounce() {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;
      /* check bounce against polygon boundaries */

      if (options.polygon.type !== _PolygonMaskType.PolygonMaskType.none && options.polygon.type !== _PolygonMaskType.PolygonMaskType.inline) {
        if (!container.polygon.checkInsidePolygon(particle.position)) {
          this.polygonBounce();
        }
      } else if (options.polygon.type === _PolygonMaskType.PolygonMaskType.inline) {
        if (particle.initialPosition) {
          var dist = _Utils.Utils.getDistanceBetweenCoordinates(particle.initialPosition, particle.position);

          if (dist > container.retina.polygonMaskMoveRadius) {
            this.polygonBounce();
          }
        }
      } else {
        var outMode = options.particles.move.outMode;
        var x = particle.position.x + particle.offset.x;
        var y = particle.position.y + particle.offset.y;

        if (outMode === _OutMode.OutMode.bounce || outMode === _OutMode.OutMode.bounceHorizontal) {
          Updater.checkBounds(x, particle.radius, container.canvas.dimension.width, function () {
            particle.velocity.horizontal = -particle.velocity.horizontal;
          });
        }

        if (outMode === _OutMode.OutMode.bounce || outMode === _OutMode.OutMode.bounceVertical) {
          Updater.checkBounds(y, particle.radius, container.canvas.dimension.height, function () {
            particle.velocity.vertical = -particle.velocity.vertical;
          });
        }
      }
    }
  }, {
    key: "polygonBounce",
    value: function polygonBounce() {
      var particle = this.particle;
      particle.velocity.horizontal = -particle.velocity.horizontal + particle.velocity.vertical / 2;
      particle.velocity.vertical = -particle.velocity.vertical + particle.velocity.horizontal / 2;
    }
  }], [{
    key: "checkBounds",
    value: function checkBounds(coordinate, radius, size, outside) {
      if (coordinate + radius > size || coordinate - radius < 0) {
        outside();
      }
    }
  }]);
  return Updater;
}();

exports.Updater = Updater;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mover = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var Mover = /*#__PURE__*/function () {
  function Mover(container, particle) {
    (0, _classCallCheck2["default"])(this, Mover);
    this.container = void 0;
    this.particle = void 0;
    this.container = container;
    this.particle = particle;
  }

  (0, _createClass2["default"])(Mover, [{
    key: "move",
    value: function move(delta) {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;

      if (options.particles.move.enable) {
        var slowFactor = this.getProximitySpeedFactor();
        var deltaFactor = options.fpsLimit > 0 ? 60 * delta / 1000 : 3.6;
        var moveSpeed = container.retina.moveSpeed / 2 * slowFactor * deltaFactor;
        particle.position.x += particle.velocity.horizontal * moveSpeed;
        particle.position.y += particle.velocity.vertical * moveSpeed;
      }
      /* parallax */


      this.moveParallax();
    }
  }, {
    key: "moveParallax",
    value: function moveParallax() {
      var container = this.container;
      var options = container.options;

      if (!options.interactivity.events.onHover.parallax.enable) {
        return;
      }

      var particle = this.particle;
      var parallaxForce = options.interactivity.events.onHover.parallax.force;
      var mousePos = container.interactivity.mouse.position || {
        x: 0,
        y: 0
      };
      var windowDimension = {
        height: window.innerHeight / 2,
        width: window.innerWidth / 2
      };
      var parallaxSmooth = options.interactivity.events.onHover.parallax.smooth;
      /* smaller is the particle, longer is the offset distance */

      var tmp = {
        x: (mousePos.x - windowDimension.width) * (particle.radius / parallaxForce),
        y: (mousePos.y - windowDimension.height) * (particle.radius / parallaxForce)
      };
      particle.offset.x += (tmp.x - particle.offset.x) / parallaxSmooth; // Easing equation

      particle.offset.y += (tmp.y - particle.offset.y) / parallaxSmooth; // Easing equation
    }
  }, {
    key: "getProximitySpeedFactor",
    value: function getProximitySpeedFactor() {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;
      var active = options.interactivity.modes.slow.active;

      if (!active) {
        return 1;
      }

      var mousePos = this.container.interactivity.mouse.position;

      if (!mousePos) {
        return 1;
      }

      var particlePos = particle.position;

      var dist = _Utils.Utils.getDistanceBetweenCoordinates(mousePos, particlePos);

      var radius = container.retina.slowModeRadius;

      if (dist > radius) {
        return 1;
      }

      var proximityFactor = dist / radius || 0;
      var slowFactor = options.interactivity.modes.slow.factor;
      return proximityFactor / slowFactor;
    }
  }]);
  return Mover;
}();

exports.Mover = Mover;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Connecter = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);
/**
 * Particle connection manager
 */


var Connecter = /*#__PURE__*/function () {
  function Connecter(container, particle) {
    (0, _classCallCheck2["default"])(this, Connecter);
    this.particle = void 0;
    this.container = void 0;
    this.container = container;
    this.particle = particle;
  }
  /**
   * Connecting particles on hover interactivity
   */


  (0, _createClass2["default"])(Connecter, [{
    key: "connect",
    value: function connect(destParticle) {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;
      var ctx = container.canvas.context;

      if (!ctx) {
        return;
      }

      if (options.interactivity.events.onHover.enable && container.interactivity.status == 'mousemove') {
        var xDiff = Math.abs(particle.position.x - destParticle.position.x);
        var yDiff = Math.abs(particle.position.y - destParticle.position.y);
        var mousePos = container.interactivity.mouse.position || {
          x: 0,
          y: 0
        };
        var xCoreDiff = Math.abs(particle.position.x - mousePos.x);
        var yCoreDiff = Math.abs(particle.position.y - mousePos.y);
        var distMax = Math.abs(container.retina.connectModeDistance);
        var connectAreaRadius = Math.abs(container.retina.connectModeRadius);

        if (xDiff < distMax && yDiff < distMax && xCoreDiff < connectAreaRadius && yCoreDiff < connectAreaRadius) {
          var lineStyle = this.lineStyle(destParticle);

          if (!lineStyle) {
            return;
          }

          ctx.beginPath();
          ctx.strokeStyle = lineStyle;
          ctx.moveTo(particle.position.x, particle.position.y);
          ctx.lineTo(destParticle.position.x, destParticle.position.y);
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  }, {
    key: "lineStyle",
    value: function lineStyle(destParticle) {
      var particle = this.particle;

      if (particle.color && destParticle.color) {
        var sourceRgb = particle.color;
        var destRgb = destParticle.color;
        var rgb = {
          b: _Utils.Utils.mixComponents(sourceRgb.b, destRgb.b, particle.radius, destParticle.radius),
          g: _Utils.Utils.mixComponents(sourceRgb.g, destRgb.g, particle.radius, destParticle.radius),
          r: _Utils.Utils.mixComponents(sourceRgb.r, destRgb.r, particle.radius, destParticle.radius)
        };

        var midColor = _Utils.Utils.getStyleFromColor(rgb);

        return this.gradient(destParticle, midColor);
      }
    }
  }, {
    key: "gradient",
    value: function gradient(destParticle, midColor) {
      var container = this.container;
      var particle = this.particle;
      var gradStop = Math.floor(destParticle.radius / particle.radius);
      var ctx = container.canvas.context;

      if (!ctx || !particle.color || !destParticle.color) {
        return;
      }

      var sourcePos = particle.position;
      var destPos = destParticle.position;
      var grad = ctx.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
      grad.addColorStop(0, _Utils.Utils.getStyleFromColor(particle.color));
      grad.addColorStop(gradStop > 1 ? 1 : gradStop, midColor);
      grad.addColorStop(1, _Utils.Utils.getStyleFromColor(destParticle.color));
      return grad;
    }
  }]);
  return Connecter;
}();

exports.Connecter = Connecter;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InteractionManager = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Linker = __webpack_require__(40);

var _Attracter = __webpack_require__(41);

var _Bouncer = __webpack_require__(42);

var InteractionManager = /*#__PURE__*/function () {
  function InteractionManager(container, particle) {
    (0, _classCallCheck2["default"])(this, InteractionManager);
    this.container = void 0;
    this.particle = void 0;
    this.linker = void 0;
    this.attracter = void 0;
    this.bouncer = void 0;
    this.container = container;
    this.particle = particle;
    this.linker = new _Linker.Linker(container, particle);
    this.attracter = new _Attracter.Attracter(container, particle);
    this.bouncer = new _Bouncer.Bouncer(container, particle);
  }

  (0, _createClass2["default"])(InteractionManager, [{
    key: "interact",
    value: function interact(p2) {
      var container = this.container;
      var options = container.options;
      /* link particles */

      if (options.particles.lineLinked.enable) {
        this.link(p2);
      }
      /* attract particles */


      if (options.particles.move.attract.enable) {
        this.attract(p2);
      }
      /* bounce particles */


      if (options.particles.move.bounce) {
        this.bounce(p2);
      }
    }
  }, {
    key: "link",
    value: function link(p2) {
      this.linker.link(p2);
    }
  }, {
    key: "attract",
    value: function attract(p2) {
      this.attracter.attract(p2);
    }
  }, {
    key: "bounce",
    value: function bounce(p2) {
      this.bouncer.bounce(p2);
    }
  }]);
  return InteractionManager;
}();

exports.InteractionManager = InteractionManager;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Linker = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var Linker = /*#__PURE__*/function () {
  function Linker(container, particle) {
    (0, _classCallCheck2["default"])(this, Linker);
    this.container = void 0;
    this.particle = void 0;
    this.container = container;
    this.particle = particle;
  }

  (0, _createClass2["default"])(Linker, [{
    key: "link",
    value: function link(p2) {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;
      var x1 = particle.position.x + particle.offset.x;
      var x2 = p2.position.x + p2.offset.x;
      var dx = x1 - x2;
      var y1 = particle.position.y + particle.offset.y;
      var y2 = p2.position.y + p2.offset.y;
      var dy = y1 - y2;
      var dist = Math.sqrt(dx * dx + dy * dy);
      var optOpacity = options.particles.lineLinked.opacity;
      var optDistance = container.retina.lineLinkedDistance;
      /* draw a line between p1 and p2 if the distance between them is under the config distance */

      if (dist <= optDistance) {
        var opacityLine = optOpacity - dist * optOpacity / optDistance;

        if (opacityLine > 0) {
          /* style */
          if (!container.particles.lineLinkedColor) {
            var color = options.particles.lineLinked.color;
            /* particles.line_linked - convert hex colors to rgb */
            //  check for the color profile requested and
            //  then return appropriate value

            if (color === "random") {
              if (options.particles.lineLinked.consent) {
                container.particles.lineLinkedColor = _Utils.Utils.hexToRgb(color);
              } else if (options.particles.lineLinked.blink) {
                container.particles.lineLinkedColor = "random";
              } else {
                container.particles.lineLinkedColor = "mid";
              }
            } else {
              container.particles.lineLinkedColor = _Utils.Utils.hexToRgb(color);
            }
          }

          if (!container.canvas.context) {
            return;
          }

          var ctx = container.canvas.context;
          var colorLine;
          /*
           * particles connecting line color:
           *
           *  random: in blink mode : in every frame refresh the color would change
           *          hence resulting blinking of lines
           *  mid: in consent mode: sample particles color and get a mid level color
           *                        from those two for the connecting line color
           */

          if (container.particles.lineLinkedColor === "random") {
            colorLine = _Utils.Utils.getRandomColorRGBA();
          } else if (container.particles.lineLinkedColor == "mid" && particle.color && p2.color) {
            var sourceColor = particle.color;
            var destColor = p2.color;
            colorLine = {
              b: Math.floor(_Utils.Utils.mixComponents(sourceColor.b, destColor.b, particle.radius, p2.radius)),
              g: Math.floor(_Utils.Utils.mixComponents(sourceColor.g, destColor.g, particle.radius, p2.radius)),
              r: Math.floor(_Utils.Utils.mixComponents(sourceColor.r, destColor.r, particle.radius, p2.radius))
            };
          } else {
            colorLine = container.particles.lineLinkedColor;
          }

          ctx.save();

          if (options.backgroundMask.enable) {
            ctx.globalCompositeOperation = 'destination-out';
          }

          if (colorLine) {
            ctx.strokeStyle = "rgba(".concat(colorLine.r, ",").concat(colorLine.g, ",").concat(colorLine.b, ",").concat(opacityLine, ")");
          }

          ctx.lineWidth = container.retina.lineLinkedWidth; // container.canvas.ctx.lineCap = "round"; /* performance issue */

          /* path */

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
          ctx.closePath();
          ctx.restore();
        }
      }
    }
  }]);
  return Linker;
}();

exports.Linker = Linker;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Attracter = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var Attracter = /*#__PURE__*/function () {
  function Attracter(container, particle) {
    (0, _classCallCheck2["default"])(this, Attracter);
    this.container = void 0;
    this.particle = void 0;
    this.container = container;
    this.particle = particle;
  }

  (0, _createClass2["default"])(Attracter, [{
    key: "attract",
    value: function attract(p2) {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;
      /* condensed particles */

      var dx = particle.position.x - p2.position.x;
      var dy = particle.position.y - p2.position.y;
      var dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= container.retina.lineLinkedDistance) {
        var ax = dx / (options.particles.move.attract.rotate.x * 1000);
        var ay = dy / (options.particles.move.attract.rotate.y * 1000);
        particle.velocity.horizontal -= ax;
        particle.velocity.vertical -= ay;
        p2.velocity.horizontal += ax;
        p2.velocity.vertical += ay;
      }
    }
  }]);
  return Attracter;
}();

exports.Attracter = Attracter;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bouncer = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var Bouncer = /*#__PURE__*/function () {
  function Bouncer(container, particle) {
    (0, _classCallCheck2["default"])(this, Bouncer);
    this.container = void 0;
    this.particle = void 0;
    this.container = container;
    this.particle = particle;
  }

  (0, _createClass2["default"])(Bouncer, [{
    key: "bounce",
    value: function bounce(p2) {
      var p1 = this.particle;

      if (p1 === p2) {
        return;
      }

      var dist = _Utils.Utils.getDistanceBetweenCoordinates(p1.position, p2.position);

      var distP = (p1.bubbler.radius || p1.radius) + (p2.bubbler.radius || p2.radius);

      if (dist <= distP) {
        p1.resetVelocity();
        p2.resetVelocity();
      }
    }
  }]);
  return Bouncer;
}();

exports.Bouncer = Bouncer;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Retina = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var Retina = /*#__PURE__*/function () {
  function Retina(container) {
    (0, _classCallCheck2["default"])(this, Retina);
    this.isRetina = void 0;
    this.bubbleModeDistance = void 0;
    this.bubbleModeSize = void 0;
    this.connectModeDistance = void 0;
    this.connectModeRadius = void 0;
    this.grabModeDistance = void 0;
    this.repulseModeDistance = void 0;
    this.slowModeRadius = void 0;
    this.lineLinkedDistance = void 0;
    this.lineLinkedWidth = void 0;
    this.moveSpeed = void 0;
    this.sizeValue = void 0;
    this.sizeAnimationSpeed = void 0;
    this.polygonMaskMoveRadius = void 0;
    this.container = void 0;
    this.container = container;
    this.isRetina = false;
    this.bubbleModeDistance = 0;
    this.bubbleModeSize = 0;
    this.connectModeDistance = 0;
    this.connectModeRadius = 0;
    this.grabModeDistance = 0;
    this.repulseModeDistance = 0;
    this.slowModeRadius = 0;
    this.lineLinkedDistance = 0;
    this.lineLinkedWidth = 0;
    this.moveSpeed = 0;
    this.sizeValue = 0;
    this.sizeAnimationSpeed = 0;
    this.polygonMaskMoveRadius = 0;
  }

  (0, _createClass2["default"])(Retina, [{
    key: "init",
    value: function init() {
      var container = this.container;
      var options = container.options;

      if (options.detectRetina && window.devicePixelRatio > 1) {
        container.canvas.pxRatio = window.devicePixelRatio;
        this.isRetina = true;
      } else {
        container.canvas.pxRatio = 1;
        this.isRetina = false;
      }

      var ratio = container.canvas.pxRatio;
      container.canvas.dimension.width = container.canvas.element.offsetWidth * ratio;
      container.canvas.dimension.height = container.canvas.element.offsetHeight * ratio;
      this.bubbleModeDistance = options.interactivity.modes.bubble.distance * ratio;
      this.bubbleModeSize = options.interactivity.modes.bubble.size * ratio;
      this.connectModeDistance = options.interactivity.modes.connect.distance * ratio;
      this.connectModeRadius = options.interactivity.modes.connect.radius * ratio;
      this.grabModeDistance = options.interactivity.modes.grab.distance * ratio;
      this.repulseModeDistance = options.interactivity.modes.repulse.distance * ratio;
      this.slowModeRadius = options.interactivity.modes.slow.radius * ratio;
      this.lineLinkedDistance = options.particles.lineLinked.distance * ratio;
      this.lineLinkedWidth = options.particles.lineLinked.width * ratio;
      this.moveSpeed = options.particles.move.speed * ratio;
      this.sizeValue = options.particles.size.value * ratio;
      this.sizeAnimationSpeed = options.particles.size.animation.speed * ratio;
      this.polygonMaskMoveRadius = options.polygon.move.radius * ratio;
    }
  }, {
    key: "reset",
    value: function reset() {}
  }]);
  return Retina;
}();

exports.Retina = Retina;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonMask = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(8));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(9));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _PolygonMaskType = __webpack_require__(5);

var _Particle = __webpack_require__(18);

var _PolygonMaskInlineArrangement = __webpack_require__(12);
/**
 * Polygon Mask manager
 */


var PolygonMask = /*#__PURE__*/function () {
  function PolygonMask(container) {
    (0, _classCallCheck2["default"])(this, PolygonMask);
    this.redrawTimeout = void 0;
    this.raw = void 0;
    this.svg = void 0;
    this.path = void 0;
    this.container = void 0;
    this.width = void 0;
    this.height = void 0;
    this.offset = void 0;
    this.container = container;
    this.width = 0;
    this.height = 0;
  }

  (0, _createClass2["default"])(PolygonMask, [{
    key: "checkInsidePolygon",
    value: function checkInsidePolygon(position) {
      var container = this.container;
      var options = container.options;

      if (options.polygon.type === _PolygonMaskType.PolygonMaskType.none) {
        return true;
      } // https://github.com/substack/point-in-polygon
      // ray-casting algorithm based on
      // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html


      if (options.polygon.type !== _PolygonMaskType.PolygonMaskType.inline) {
        if (!this.raw) {
          this.raw = [];
        }

        if (this.raw.length > 0) {
          var x = position ? position.x : Math.random() * container.canvas.dimension.width;
          var y = position ? position.y : Math.random() * container.canvas.dimension.height;
          var inside = false;

          for (var i = 0, j = this.raw.length - 1; i < this.raw.length; j = i++) {
            var xi = this.raw[i].x;
            var yi = this.raw[i].y;
            var xj = this.raw[j].x;
            var yj = this.raw[j].y;
            var intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;

            if (intersect) {
              inside = !inside;
            }
          }

          if (options.polygon.type === _PolygonMaskType.PolygonMaskType.inside) {
            return inside;
          } else if (options.polygon.type === _PolygonMaskType.PolygonMaskType.outside) {
            return !inside;
          }
        } else {
          console.error('No polygon found, you need to specify SVG url in config.');
          return true;
        }
      } else {
        return true;
      }

      return false;
    }
  }, {
    key: "randomPointInPolygon",
    value: function randomPointInPolygon() {
      var container = this.container;
      var options = container.options;
      var position;

      if (options.polygon.type === _PolygonMaskType.PolygonMaskType.inline) {
        switch (options.polygon.inlineArrangement) {
          case _PolygonMaskInlineArrangement.PolygonMaskInlineArrangement.randomPoint:
            position = this.getRandomPointOnPolygonPath();
            break;

          case _PolygonMaskInlineArrangement.PolygonMaskInlineArrangement.randomLength:
            position = this.getRandomPointOnPolygonPathByLength();
            break;

          case _PolygonMaskInlineArrangement.PolygonMaskInlineArrangement.equidistant:
            position = this.getEquidistantPointOnPolygonPathByIndex(container.particles.array.length);
            break;

          case _PolygonMaskInlineArrangement.PolygonMaskInlineArrangement.onePerPoint:
          default:
            position = this.getPoingOnPolygonPathByIndex(container.particles.array.length);
        }
      } else {
        position = {
          x: Math.random() * container.canvas.dimension.width,
          y: Math.random() * container.canvas.dimension.height
        };
      }

      if (this.checkInsidePolygon(position)) {
        return position;
      } else {
        return this.randomPointInPolygon();
      }
    }
    /**
     * Depends on SVGPathSeg API polyfill https://github.com/progers/pathseg for Chrome
     * Deprecate SVGPathElement.getPathSegAtLength removed in:
     * Chrome for desktop release 62
     * Chrome for Android release 62
     * Android WebView release 62
     * Opera release 49
     * Opera for Android release 49
     */

  }, {
    key: "parseSvgPathToPolygon",
    value: function () {
      var _parseSvgPathToPolygon = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(svgUrl) {
        var container, options, url, req, xml, parser, doc, scale, len, polygonRaw, p, i, segment, absSeg, relSeg;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                container = this.container;
                options = container.options;
                url = svgUrl || options.polygon.url; // Load SVG from file on server

                if (!(!this.path || !this.svg)) {
                  _context.next = 19;
                  break;
                }

                _context.next = 6;
                return fetch(url);

              case 6:
                req = _context.sent;

                if (!req.ok) {
                  _context.next = 17;
                  break;
                }

                _context.next = 10;
                return req.text();

              case 10:
                xml = _context.sent;
                parser = new DOMParser();
                doc = parser.parseFromString(xml, "image/svg+xml");
                this.svg = doc.getElementsByTagName("svg")[0];
                this.path = doc.getElementsByTagName("path")[0];
                _context.next = 19;
                break;

              case 17:
                console.error("tsParticles Error - during polygon mask download");
                return _context.abrupt("return");

              case 19:
                scale = options.polygon.scale;
                this.width = parseFloat(this.svg.getAttribute("width") || "0") * scale;
                this.height = parseFloat(this.svg.getAttribute("height") || "0") * scale;
                /* centering of the polygon mask */

                this.offset = {
                  x: container.canvas.dimension.width / 2 - this.width / 2,
                  y: container.canvas.dimension.height / 2 - this.height / 2
                };
                len = this.path.pathSegList.numberOfItems;
                polygonRaw = [];
                p = {
                  x: 0,
                  y: 0
                };
                i = 0;

              case 27:
                if (!(i < len)) {
                  _context.next = 53;
                  break;
                }

                segment = this.path.pathSegList.getItem(i);
                _context.t0 = segment.pathSegType;
                _context.next = _context.t0 === window.SVGPathSeg.PATHSEG_MOVETO_ABS ? 32 : _context.t0 === window.SVGPathSeg.PATHSEG_LINETO_ABS ? 32 : _context.t0 === window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS ? 32 : _context.t0 === window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS ? 32 : _context.t0 === window.SVGPathSeg.PATHSEG_ARC_ABS ? 32 : _context.t0 === window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS ? 32 : _context.t0 === window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS ? 32 : _context.t0 === window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS ? 36 : _context.t0 === window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS ? 38 : _context.t0 === window.SVGPathSeg.PATHSEG_LINETO_REL ? 40 : _context.t0 === window.SVGPathSeg.PATHSEG_MOVETO_REL ? 40 : _context.t0 === window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL ? 40 : _context.t0 === window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL ? 40 : _context.t0 === window.SVGPathSeg.PATHSEG_ARC_REL ? 40 : _context.t0 === window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL ? 40 : _context.t0 === window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL ? 40 : _context.t0 === window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL ? 44 : _context.t0 === window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL ? 46 : _context.t0 === window.SVGPathSeg.PATHSEG_UNKNOWN ? 48 : _context.t0 === window.SVGPathSeg.PATHSEG_CLOSEPATH ? 48 : 49;
                break;

              case 32:
                absSeg = segment;
                p.x = absSeg.x;
                p.y = absSeg.y;
                return _context.abrupt("break", 49);

              case 36:
                p.x = segment.x;
                return _context.abrupt("break", 49);

              case 38:
                p.y = segment.y;
                return _context.abrupt("break", 49);

              case 40:
                relSeg = segment;
                p.x += relSeg.x;
                p.y += relSeg.y;
                return _context.abrupt("break", 49);

              case 44:
                p.x += segment.x;
                return _context.abrupt("break", 49);

              case 46:
                p.y += segment.y;
                return _context.abrupt("break", 49);

              case 48:
                return _context.abrupt("continue", 50);

              case 49:
                polygonRaw.push({
                  x: p.x * scale + this.offset.x,
                  y: p.y * scale + this.offset.y
                });

              case 50:
                i++;
                _context.next = 27;
                break;

              case 53:
                return _context.abrupt("return", polygonRaw);

              case 54:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function parseSvgPathToPolygon(_x) {
        return _parseSvgPathToPolygon.apply(this, arguments);
      }

      return parseSvgPathToPolygon;
    }()
  }, {
    key: "drawPolygon",
    value: function drawPolygon() {
      var container = this.container;
      var options = container.options;
      var context = container.canvas.context;

      if (context && this.raw) {
        context.beginPath();
        context.moveTo(this.raw[0].x, this.raw[0].y);

        for (var i = 1; i < this.raw.length; i++) {
          context.lineTo(this.raw[i].x, this.raw[i].y);
        }

        context.closePath();
        context.strokeStyle = options.polygon.draw.lineColor;
        context.lineWidth = options.polygon.draw.lineWidth;
        context.stroke();
      }
    }
  }, {
    key: "drawPointsOnPolygonPath",
    value: function drawPointsOnPolygonPath() {
      var container = this.container;

      if (this.raw) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.raw[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            var position = {
              x: item.x,
              y: item.y
            };
            var particle = new _Particle.Particle(container, position);
            container.particles.array.push(particle);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: "getRandomPointOnPolygonPath",
    value: function getRandomPointOnPolygonPath() {
      if (!this.raw || !this.raw.length) throw new Error("No polygon data loaded.");
      var coords = this.raw[Math.floor(Math.random() * this.raw.length)];
      return {
        x: coords.x,
        y: coords.y
      };
    }
  }, {
    key: "getRandomPointOnPolygonPathByLength",
    value: function getRandomPointOnPolygonPathByLength() {
      var _this$offset, _this$offset2;

      var container = this.container;
      var options = container.options;
      if (!this.raw || !this.raw.length || !this.path) throw new Error("No polygon data loaded.");
      var distance = Math.floor(Math.random() * this.path.getTotalLength()) + 1;
      var point = this.path.getPointAtLength(distance);
      return {
        x: point.x * options.polygon.scale + (((_this$offset = this.offset) === null || _this$offset === void 0 ? void 0 : _this$offset.x) || 0),
        y: point.y * options.polygon.scale + (((_this$offset2 = this.offset) === null || _this$offset2 === void 0 ? void 0 : _this$offset2.y) || 0)
      };
    }
  }, {
    key: "getEquidistantPointOnPolygonPathByIndex",
    value: function getEquidistantPointOnPolygonPathByIndex(index) {
      var _this$offset3, _this$offset4;

      var container = this.container;
      var options = container.options;
      if (!this.raw || !this.raw.length || !this.path) throw new Error("No polygon data loaded.");
      var distance = this.path.getTotalLength() / options.particles.number.value * index;
      var point = this.path.getPointAtLength(distance);
      return {
        x: point.x * options.polygon.scale + (((_this$offset3 = this.offset) === null || _this$offset3 === void 0 ? void 0 : _this$offset3.x) || 0),
        y: point.y * options.polygon.scale + (((_this$offset4 = this.offset) === null || _this$offset4 === void 0 ? void 0 : _this$offset4.y) || 0)
      };
    }
  }, {
    key: "getPoingOnPolygonPathByIndex",
    value: function getPoingOnPolygonPathByIndex(index) {
      if (!this.raw || !this.raw.length) throw new Error("No polygon data loaded.");
      var coords = this.raw[index % this.raw.length];
      return {
        x: coords.x,
        y: coords.y
      };
    }
  }]);
  return PolygonMask;
}();

exports.PolygonMask = PolygonMask;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Drawer = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Container = __webpack_require__(15);

var _ShapeType = __webpack_require__(7);

var Drawer = /*#__PURE__*/function () {
  function Drawer(container) {
    (0, _classCallCheck2["default"])(this, Drawer);
    this.container = void 0;
    this.container = container;
  }

  (0, _createClass2["default"])(Drawer, [{
    key: "draw",
    value: function draw(timestamp) {
      var _this = this;

      var container = this.container;
      var options = container.options; // FPS limit logic
      // If we are too fast, just draw without updating

      var fpsLimit = options.fpsLimit > 0 ? options.fpsLimit : 60;

      if (timestamp < container.lastFrameTime + 1000 / fpsLimit) {
        container.drawAnimationFrame = _Container.Container.requestFrame(function (t) {
          return _this.draw(t);
        });
        return;
      }

      var delta = timestamp - container.lastFrameTime;
      container.lastFrameTime = timestamp;

      if (options.particles.shape.type === _ShapeType.ShapeType.image && container.images.every(function (img) {
        return img.error;
      })) {
        return;
      }

      container.particles.draw(delta);

      if (container.drawAnimationFrame !== undefined && !options.particles.move.enable) {
        _Container.Container.cancelAnimation(container.drawAnimationFrame);
      } else {
        container.drawAnimationFrame = _Container.Container.requestFrame(function (t) {
          return _this.draw(t);
        });
      }
    }
  }]);
  return Drawer;
}();

exports.Drawer = Drawer;

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticlesJS", function() { return ParticlesJS; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



__webpack_require__(47);
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

/**
 * A wrapper to call the new methods, with deprecation warnings
 */


var ParticlesJS = /*#__PURE__*/function () {
  function ParticlesJS() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ParticlesJS);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ParticlesJS, null, [{
    key: "load",

    /**
     * Loads the provided options to create a [[Container]] object.
     * @deprecated this method is obsolete, please use the new tsParticles.load
     * @param tagId the particles container element id
     * @param params the options object to initialize the [[Container]]
     */
    value: function load(tagId, params) {
      if (console) {
        console.warn("this method is obsolete, please use the new tsParticles.load");
      }

      return window.tsParticles.load(tagId, params);
    }
    /**
     * Loads the provided json with a GET request. The content will be used to create a [[Container]] object.
     * @deprecated this method is obsolete, please use the new tsParticles.loadJSON
     * @param tagId the particles container element id
     * @param pathConfigJson the json path to use in the GET request
     * @param callback the function called after the [[Container]] object is loaded that will be passed as a parameter
     */

  }, {
    key: "loadJson",
    value: function loadJson(tagId, pathConfigJson, callback) {
      if (console) {
        console.warn("this method is obsolete, please use the new tsParticles.loadJSON");
      }

      window.tsParticles.loadJSON(tagId, pathConfigJson).then(callback)["catch"](function (error) {
        console.error(error);
      });
    }
    /**
     * Adds an additional click handler to all the loaded [[Container]] objects.
     * @deprecated this method is obsolete, please use the new tsParticles.setOnClickHandler
     * @param callback the function called after the click event is fired
     */

  }, {
    key: "setOnClickHandler",
    value: function setOnClickHandler(callback) {
      if (console) {
        console.warn("this method is obsolete, please use the new tsParticles.setOnClickHandler");
      }

      window.tsParticles.setOnClickHandler(callback);
    }
  }]);

  return ParticlesJS;
}();

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// SVGPathSeg API polyfill
// https://github.com/progers/pathseg
//
// This is a drop-in replacement for the SVGPathSeg and SVGPathSegList APIs that were removed from
// SVG2 (https://lists.w3.org/Archives/Public/www-svg/2015Jun/0044.html), including the latest spec
// changes which were implemented in Firefox 43 and Chrome 46.

(function() { "use strict";
    if (!("SVGPathSeg" in window)) {
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSeg
        window.SVGPathSeg = function(type, typeAsLetter, owningPathSegList) {
            this.pathSegType = type;
            this.pathSegTypeAsLetter = typeAsLetter;
            this._owningPathSegList = owningPathSegList;
        }

        window.SVGPathSeg.prototype.classname = "SVGPathSeg";

        window.SVGPathSeg.PATHSEG_UNKNOWN = 0;
        window.SVGPathSeg.PATHSEG_CLOSEPATH = 1;
        window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2;
        window.SVGPathSeg.PATHSEG_MOVETO_REL = 3;
        window.SVGPathSeg.PATHSEG_LINETO_ABS = 4;
        window.SVGPathSeg.PATHSEG_LINETO_REL = 5;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9;
        window.SVGPathSeg.PATHSEG_ARC_ABS = 10;
        window.SVGPathSeg.PATHSEG_ARC_REL = 11;
        window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12;
        window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13;
        window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14;
        window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;

        // Notify owning PathSegList on any changes so they can be synchronized back to the path element.
        window.SVGPathSeg.prototype._segmentChanged = function() {
            if (this._owningPathSegList)
                this._owningPathSegList.segmentChanged(this);
        }

        window.SVGPathSegClosePath = function(owningPathSegList) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", owningPathSegList);
        }
        window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegClosePath.prototype.toString = function() { return "[object SVGPathSegClosePath]"; }
        window.SVGPathSegClosePath.prototype._asPathString = function() { return this.pathSegTypeAsLetter; }
        window.SVGPathSegClosePath.prototype.clone = function() { return new window.SVGPathSegClosePath(undefined); }

        window.SVGPathSegMovetoAbs = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegMovetoAbs.prototype.toString = function() { return "[object SVGPathSegMovetoAbs]"; }
        window.SVGPathSegMovetoAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegMovetoAbs.prototype.clone = function() { return new window.SVGPathSegMovetoAbs(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegMovetoRel = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegMovetoRel.prototype.toString = function() { return "[object SVGPathSegMovetoRel]"; }
        window.SVGPathSegMovetoRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegMovetoRel.prototype.clone = function() { return new window.SVGPathSegMovetoRel(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoAbs = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoAbs.prototype.toString = function() { return "[object SVGPathSegLinetoAbs]"; }
        window.SVGPathSegLinetoAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegLinetoAbs.prototype.clone = function() { return new window.SVGPathSegLinetoAbs(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoRel = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoRel.prototype.toString = function() { return "[object SVGPathSegLinetoRel]"; }
        window.SVGPathSegLinetoRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegLinetoRel.prototype.clone = function() { return new window.SVGPathSegLinetoRel(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicAbs = function(owningPathSegList, x, y, x1, y1, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
        }
        window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicAbs]"; }
        window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoCubicAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicAbs(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2); }
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicRel = function(owningPathSegList, x, y, x1, y1, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
        }
        window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicRel.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicRel]"; }
        window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoCubicRel.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicRel(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2); }
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticAbs = function(owningPathSegList, x, y, x1, y1) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
        }
        window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticAbs]"; }
        window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticAbs(undefined, this._x, this._y, this._x1, this._y1); }
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticRel = function(owningPathSegList, x, y, x1, y1) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
        }
        window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticRel]"; }
        window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticRel(undefined, this._x, this._y, this._x1, this._y1); }
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegArcAbs = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
        }
        window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegArcAbs.prototype.toString = function() { return "[object SVGPathSegArcAbs]"; }
        window.SVGPathSegArcAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y; }
        window.SVGPathSegArcAbs.prototype.clone = function() { return new window.SVGPathSegArcAbs(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag); }
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", { get: function() { return this._r1; }, set: function(r1) { this._r1 = r1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", { get: function() { return this._r2; }, set: function(r2) { this._r2 = r2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", { get: function() { return this._angle; }, set: function(angle) { this._angle = angle; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", { get: function() { return this._largeArcFlag; }, set: function(largeArcFlag) { this._largeArcFlag = largeArcFlag; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", { get: function() { return this._sweepFlag; }, set: function(sweepFlag) { this._sweepFlag = sweepFlag; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegArcRel = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
        }
        window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegArcRel.prototype.toString = function() { return "[object SVGPathSegArcRel]"; }
        window.SVGPathSegArcRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y; }
        window.SVGPathSegArcRel.prototype.clone = function() { return new window.SVGPathSegArcRel(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag); }
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", { get: function() { return this._r1; }, set: function(r1) { this._r1 = r1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", { get: function() { return this._r2; }, set: function(r2) { this._r2 = r2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", { get: function() { return this._angle; }, set: function(angle) { this._angle = angle; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", { get: function() { return this._largeArcFlag; }, set: function(largeArcFlag) { this._largeArcFlag = largeArcFlag; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", { get: function() { return this._sweepFlag; }, set: function(sweepFlag) { this._sweepFlag = sweepFlag; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoHorizontalAbs = function(owningPathSegList, x) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", owningPathSegList);
            this._x = x;
        }
        window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function() { return "[object SVGPathSegLinetoHorizontalAbs]"; }
        window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x; }
        window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function() { return new window.SVGPathSegLinetoHorizontalAbs(undefined, this._x); }
        Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoHorizontalRel = function(owningPathSegList, x) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", owningPathSegList);
            this._x = x;
        }
        window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoHorizontalRel.prototype.toString = function() { return "[object SVGPathSegLinetoHorizontalRel]"; }
        window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x; }
        window.SVGPathSegLinetoHorizontalRel.prototype.clone = function() { return new window.SVGPathSegLinetoHorizontalRel(undefined, this._x); }
        Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoVerticalAbs = function(owningPathSegList, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", owningPathSegList);
            this._y = y;
        }
        window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoVerticalAbs.prototype.toString = function() { return "[object SVGPathSegLinetoVerticalAbs]"; }
        window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._y; }
        window.SVGPathSegLinetoVerticalAbs.prototype.clone = function() { return new window.SVGPathSegLinetoVerticalAbs(undefined, this._y); }
        Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoVerticalRel = function(owningPathSegList, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", owningPathSegList);
            this._y = y;
        }
        window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoVerticalRel.prototype.toString = function() { return "[object SVGPathSegLinetoVerticalRel]"; }
        window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._y; }
        window.SVGPathSegLinetoVerticalRel.prototype.clone = function() { return new window.SVGPathSegLinetoVerticalRel(undefined, this._y); }
        Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicSmoothAbs = function(owningPathSegList, x, y, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
        }
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicSmoothAbs]"; }
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, this._x, this._y, this._x2, this._y2); }
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicSmoothRel = function(owningPathSegList, x, y, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
        }
        window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicSmoothRel]"; }
        window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, this._x, this._y, this._x2, this._y2); }
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticSmoothAbs = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticSmoothAbs]"; }
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticSmoothRel = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticSmoothRel]"; }
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        // Add createSVGPathSeg* functions to window.SVGPathElement.
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-Interfacewindow.SVGPathElement.
        window.SVGPathElement.prototype.createSVGPathSegClosePath = function() { return new window.SVGPathSegClosePath(undefined); }
        window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(x, y) { return new window.SVGPathSegMovetoAbs(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function(x, y) { return new window.SVGPathSegMovetoRel(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(x, y) { return new window.SVGPathSegLinetoAbs(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function(x, y) { return new window.SVGPathSegLinetoRel(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(x, y, x1, y1, x2, y2) { return new window.SVGPathSegCurvetoCubicAbs(undefined, x, y, x1, y1, x2, y2); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(x, y, x1, y1, x2, y2) { return new window.SVGPathSegCurvetoCubicRel(undefined, x, y, x1, y1, x2, y2); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(x, y, x1, y1) { return new window.SVGPathSegCurvetoQuadraticAbs(undefined, x, y, x1, y1); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(x, y, x1, y1) { return new window.SVGPathSegCurvetoQuadraticRel(undefined, x, y, x1, y1); }
        window.SVGPathElement.prototype.createSVGPathSegArcAbs = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) { return new window.SVGPathSegArcAbs(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag); }
        window.SVGPathElement.prototype.createSVGPathSegArcRel = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) { return new window.SVGPathSegArcRel(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(x) { return new window.SVGPathSegLinetoHorizontalAbs(undefined, x); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(x) { return new window.SVGPathSegLinetoHorizontalRel(undefined, x); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(y) { return new window.SVGPathSegLinetoVerticalAbs(undefined, y); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(y) { return new window.SVGPathSegLinetoVerticalRel(undefined, y); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(x, y, x2, y2) { return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, x, y, x2, y2); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(x, y, x2, y2) { return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, x, y, x2, y2); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(x, y) { return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(x, y) { return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, x, y); }

        if (!("getPathSegAtLength" in window.SVGPathElement.prototype)) {
            // Add getPathSegAtLength to SVGPathElement.
            // Spec: https://www.w3.org/TR/SVG11/single-page.html#paths-__svg__SVGPathElement__getPathSegAtLength
            // This polyfill requires SVGPathElement.getTotalLength to implement the distance-along-a-path algorithm.
            window.SVGPathElement.prototype.getPathSegAtLength = function(distance) {
                if (distance === undefined || !isFinite(distance))
                    throw "Invalid arguments.";

                var measurementElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                measurementElement.setAttribute("d", this.getAttribute("d"));
                var lastPathSegment = measurementElement.pathSegList.numberOfItems - 1;

                // If the path is empty, return 0.
                if (lastPathSegment <= 0)
                    return 0;

                do {
                    measurementElement.pathSegList.removeItem(lastPathSegment);
                    if (distance > measurementElement.getTotalLength())
                        break;
                    lastPathSegment--;
                } while (lastPathSegment > 0);
                return lastPathSegment;
            }
        }
    }

    // Checking for SVGPathSegList in window checks for the case of an implementation without the
    // SVGPathSegList API.
    // The second check for appendItem is specific to Firefox 59+ which removed only parts of the
    // SVGPathSegList API (e.g., appendItem). In this case we need to re-implement the entire API
    // so the polyfill data (i.e., _list) is used throughout.
    if (!("SVGPathSegList" in window) || !("appendItem" in window.SVGPathSegList.prototype)) {
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSegList
        window.SVGPathSegList = function(pathElement) {
            this._pathElement = pathElement;
            this._list = this._parsePath(this._pathElement.getAttribute("d"));

            // Use a MutationObserver to catch changes to the path's "d" attribute.
            this._mutationObserverConfig = { "attributes": true, "attributeFilter": ["d"] };
            this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
        }

        window.SVGPathSegList.prototype.classname = "SVGPathSegList";

        Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
            get: function() {
                this._checkPathSynchronizedToList();
                return this._list.length;
            },
            enumerable: true
        });

        // Add the pathSegList accessors to window.SVGPathElement.
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGAnimatedPathData
        Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
            get: function() {
                if (!this._pathSegList)
                    this._pathSegList = new window.SVGPathSegList(this);
                return this._pathSegList;
            },
            enumerable: true
        });
        // FIXME: The following are not implemented and simply return window.SVGPathElement.pathSegList.
        Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });
        Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });
        Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });

        // Process any pending mutations to the path element and update the list as needed.
        // This should be the first call of all public functions and is needed because
        // MutationObservers are not synchronous so we can have pending asynchronous mutations.
        window.SVGPathSegList.prototype._checkPathSynchronizedToList = function() {
            this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords());
        }

        window.SVGPathSegList.prototype._updateListFromPathMutations = function(mutationRecords) {
            if (!this._pathElement)
                return;
            var hasPathMutations = false;
            mutationRecords.forEach(function(record) {
                if (record.attributeName == "d")
                    hasPathMutations = true;
            });
            if (hasPathMutations)
                this._list = this._parsePath(this._pathElement.getAttribute("d"));
        }

        // Serialize the list and update the path's 'd' attribute.
        window.SVGPathSegList.prototype._writeListToPath = function() {
            this._pathElementMutationObserver.disconnect();
            this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
        }

        // When a path segment changes the list needs to be synchronized back to the path element.
        window.SVGPathSegList.prototype.segmentChanged = function(pathSeg) {
            this._writeListToPath();
        }

        window.SVGPathSegList.prototype.clear = function() {
            this._checkPathSynchronizedToList();

            this._list.forEach(function(pathSeg) {
                pathSeg._owningPathSegList = null;
            });
            this._list = [];
            this._writeListToPath();
        }

        window.SVGPathSegList.prototype.initialize = function(newItem) {
            this._checkPathSynchronizedToList();

            this._list = [newItem];
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        }

        window.SVGPathSegList.prototype._checkValidIndex = function(index) {
            if (isNaN(index) || index < 0 || index >= this.numberOfItems)
                throw "INDEX_SIZE_ERR";
        }

        window.SVGPathSegList.prototype.getItem = function(index) {
            this._checkPathSynchronizedToList();

            this._checkValidIndex(index);
            return this._list[index];
        }

        window.SVGPathSegList.prototype.insertItemBefore = function(newItem, index) {
            this._checkPathSynchronizedToList();

            // Spec: If the index is greater than or equal to numberOfItems, then the new item is appended to the end of the list.
            if (index > this.numberOfItems)
                index = this.numberOfItems;
            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._list.splice(index, 0, newItem);
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        }

        window.SVGPathSegList.prototype.replaceItem = function(newItem, index) {
            this._checkPathSynchronizedToList();

            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._checkValidIndex(index);
            this._list[index] = newItem;
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        }

        window.SVGPathSegList.prototype.removeItem = function(index) {
            this._checkPathSynchronizedToList();

            this._checkValidIndex(index);
            var item = this._list[index];
            this._list.splice(index, 1);
            this._writeListToPath();
            return item;
        }

        window.SVGPathSegList.prototype.appendItem = function(newItem) {
            this._checkPathSynchronizedToList();

            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._list.push(newItem);
            newItem._owningPathSegList = this;
            // TODO: Optimize this to just append to the existing attribute.
            this._writeListToPath();
            return newItem;
        }

        window.SVGPathSegList._pathSegArrayAsString = function(pathSegArray) {
            var string = "";
            var first = true;
            pathSegArray.forEach(function(pathSeg) {
                if (first) {
                    first = false;
                    string += pathSeg._asPathString();
                } else {
                    string += " " + pathSeg._asPathString();
                }
            });
            return string;
        }

        // This closely follows SVGPathParser::parsePath from Source/core/svg/SVGPathParser.cpp.
        window.SVGPathSegList.prototype._parsePath = function(string) {
            if (!string || string.length == 0)
                return [];

            var owningPathSegList = this;

            var Builder = function() {
                this.pathSegList = [];
            }

            Builder.prototype.appendSegment = function(pathSeg) {
                this.pathSegList.push(pathSeg);
            }

            var Source = function(string) {
                this._string = string;
                this._currentIndex = 0;
                this._endIndex = this._string.length;
                this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN;

                this._skipOptionalSpaces();
            }

            Source.prototype._isCurrentSpace = function() {
                var character = this._string[this._currentIndex];
                return character <= " " && (character == " " || character == "\n" || character == "\t" || character == "\r" || character == "\f");
            }

            Source.prototype._skipOptionalSpaces = function() {
                while (this._currentIndex < this._endIndex && this._isCurrentSpace())
                    this._currentIndex++;
                return this._currentIndex < this._endIndex;
            }

            Source.prototype._skipOptionalSpacesOrDelimiter = function() {
                if (this._currentIndex < this._endIndex && !this._isCurrentSpace() && this._string.charAt(this._currentIndex) != ",")
                    return false;
                if (this._skipOptionalSpaces()) {
                    if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ",") {
                        this._currentIndex++;
                        this._skipOptionalSpaces();
                    }
                }
                return this._currentIndex < this._endIndex;
            }

            Source.prototype.hasMoreData = function() {
                return this._currentIndex < this._endIndex;
            }

            Source.prototype.peekSegmentType = function() {
                var lookahead = this._string[this._currentIndex];
                return this._pathSegTypeFromChar(lookahead);
            }

            Source.prototype._pathSegTypeFromChar = function(lookahead) {
                switch (lookahead) {
                case "Z":
                case "z":
                    return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                case "M":
                    return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                case "m":
                    return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                case "L":
                    return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                case "l":
                    return window.SVGPathSeg.PATHSEG_LINETO_REL;
                case "C":
                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                case "c":
                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                case "Q":
                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                case "q":
                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                case "A":
                    return window.SVGPathSeg.PATHSEG_ARC_ABS;
                case "a":
                    return window.SVGPathSeg.PATHSEG_ARC_REL;
                case "H":
                    return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                case "h":
                    return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                case "V":
                    return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                case "v":
                    return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                case "S":
                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                case "s":
                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                case "T":
                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                case "t":
                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                default:
                    return window.SVGPathSeg.PATHSEG_UNKNOWN;
                }
            }

            Source.prototype._nextCommandHelper = function(lookahead, previousCommand) {
                // Check for remaining coordinates in the current command.
                if ((lookahead == "+" || lookahead == "-" || lookahead == "." || (lookahead >= "0" && lookahead <= "9")) && previousCommand != window.SVGPathSeg.PATHSEG_CLOSEPATH) {
                    if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_ABS)
                        return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                    if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_REL)
                        return window.SVGPathSeg.PATHSEG_LINETO_REL;
                    return previousCommand;
                }
                return window.SVGPathSeg.PATHSEG_UNKNOWN;
            }

            Source.prototype.initialCommandIsMoveTo = function() {
                // If the path is empty it is still valid, so return true.
                if (!this.hasMoreData())
                    return true;
                var command = this.peekSegmentType();
                // Path must start with moveTo.
                return command == window.SVGPathSeg.PATHSEG_MOVETO_ABS || command == window.SVGPathSeg.PATHSEG_MOVETO_REL;
            }

            // Parse a number from an SVG path. This very closely follows genericParseNumber(...) from Source/core/svg/SVGParserUtilities.cpp.
            // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-PathDataBNF
            Source.prototype._parseNumber = function() {
                var exponent = 0;
                var integer = 0;
                var frac = 1;
                var decimal = 0;
                var sign = 1;
                var expsign = 1;

                var startIndex = this._currentIndex;

                this._skipOptionalSpaces();

                // Read the sign.
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "+")
                    this._currentIndex++;
                else if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "-") {
                    this._currentIndex++;
                    sign = -1;
                }

                if (this._currentIndex == this._endIndex || ((this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && this._string.charAt(this._currentIndex) != "."))
                    // The first character of a number must be one of [0-9+-.].
                    return undefined;

                // Read the integer part, build right-to-left.
                var startIntPartIndex = this._currentIndex;
                while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9")
                    this._currentIndex++; // Advance to first non-digit.

                if (this._currentIndex != startIntPartIndex) {
                    var scanIntPartIndex = this._currentIndex - 1;
                    var multiplier = 1;
                    while (scanIntPartIndex >= startIntPartIndex) {
                        integer += multiplier * (this._string.charAt(scanIntPartIndex--) - "0");
                        multiplier *= 10;
                    }
                }

                // Read the decimals.
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ".") {
                    this._currentIndex++;

                    // There must be a least one digit following the .
                    if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
                        return undefined;
                    while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                        frac *= 10;
                        decimal += (this._string.charAt(this._currentIndex) - "0") / frac;
                        this._currentIndex += 1;
                    }
                }

                // Read the exponent part.
                if (this._currentIndex != startIndex && this._currentIndex + 1 < this._endIndex && (this._string.charAt(this._currentIndex) == "e" || this._string.charAt(this._currentIndex) == "E") && (this._string.charAt(this._currentIndex + 1) != "x" && this._string.charAt(this._currentIndex + 1) != "m")) {
                    this._currentIndex++;

                    // Read the sign of the exponent.
                    if (this._string.charAt(this._currentIndex) == "+") {
                        this._currentIndex++;
                    } else if (this._string.charAt(this._currentIndex) == "-") {
                        this._currentIndex++;
                        expsign = -1;
                    }

                    // There must be an exponent.
                    if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
                        return undefined;

                    while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                        exponent *= 10;
                        exponent += (this._string.charAt(this._currentIndex) - "0");
                        this._currentIndex++;
                    }
                }

                var number = integer + decimal;
                number *= sign;

                if (exponent)
                    number *= Math.pow(10, expsign * exponent);

                if (startIndex == this._currentIndex)
                    return undefined;

                this._skipOptionalSpacesOrDelimiter();

                return number;
            }

            Source.prototype._parseArcFlag = function() {
                if (this._currentIndex >= this._endIndex)
                    return undefined;
                var flag = false;
                var flagChar = this._string.charAt(this._currentIndex++);
                if (flagChar == "0")
                    flag = false;
                else if (flagChar == "1")
                    flag = true;
                else
                    return undefined;

                this._skipOptionalSpacesOrDelimiter();
                return flag;
            }

            Source.prototype.parseSegment = function() {
                var lookahead = this._string[this._currentIndex];
                var command = this._pathSegTypeFromChar(lookahead);
                if (command == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                    // Possibly an implicit command. Not allowed if this is the first command.
                    if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN)
                        return null;
                    command = this._nextCommandHelper(lookahead, this._previousCommand);
                    if (command == window.SVGPathSeg.PATHSEG_UNKNOWN)
                        return null;
                } else {
                    this._currentIndex++;
                }

                this._previousCommand = command;

                switch (command) {
                case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                    return new window.SVGPathSegMovetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                    return new window.SVGPathSegMovetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_REL:
                    return new window.SVGPathSegLinetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                    return new window.SVGPathSegLinetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                    return new window.SVGPathSegLinetoHorizontalRel(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                    return new window.SVGPathSegLinetoHorizontalAbs(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                    return new window.SVGPathSegLinetoVerticalRel(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                    return new window.SVGPathSegLinetoVerticalAbs(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                    this._skipOptionalSpaces();
                    return new window.SVGPathSegClosePath(owningPathSegList);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoCubicRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoCubicAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                    var points = {x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoCubicSmoothRel(owningPathSegList, points.x, points.y, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                    var points = {x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoCubicSmoothAbs(owningPathSegList, points.x, points.y, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoQuadraticRel(owningPathSegList, points.x, points.y, points.x1, points.y1);
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoQuadraticAbs(owningPathSegList, points.x, points.y, points.x1, points.y1);
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                    return new window.SVGPathSegCurvetoQuadraticSmoothRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                    return new window.SVGPathSegCurvetoQuadraticSmoothAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_ARC_REL:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegArcRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                case window.SVGPathSeg.PATHSEG_ARC_ABS:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegArcAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                default:
                    throw "Unknown path seg type."
                }
            }

            var builder = new Builder();
            var source = new Source(string);

            if (!source.initialCommandIsMoveTo())
                return [];
            while (source.hasMoreData()) {
                var pathSeg = source.parseSegment();
                if (!pathSeg)
                    return [];
                builder.appendSegment(pathSeg);
            }

            return builder.pathSegList;
        }
    }
}());


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Options = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Interactivity = __webpack_require__(49);

var _Particles = __webpack_require__(65);

var _PolygonMask = __webpack_require__(83);

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var _BackgroundMask = __webpack_require__(86);

var Options = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Options, [{
    key: "fps_limit",

    /**
     *
     * @deprecated this property is obsolete, please use the new fpsLimit
     */
    get: function get() {
      _Messages.Messages.deprecated("fps_limit", "fpsLimit");

      return this.fpsLimit;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new fpsLimit
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("fps_limit", "fpsLimit");

      this.fpsLimit = value;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new retinaDetect
     */

  }, {
    key: "retina_detect",
    get: function get() {
      _Messages.Messages.deprecated("retina_detect", "detectsRetina");

      return this.detectRetina;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new retinaDetect
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("retina_detect", "detectsRetina");

      this.detectRetina = value;
    }
  }]);

  function Options() {
    (0, _classCallCheck2["default"])(this, Options);
    this.detectRetina = void 0;
    this.fpsLimit = void 0;
    this.interactivity = void 0;
    this.particles = void 0;
    this.polygon = void 0;
    this.backgroundMask = void 0;
    this.detectRetina = false;
    this.fpsLimit = 60;
    this.interactivity = new _Interactivity.Interactivity();
    this.particles = new _Particles.Particles();
    this.polygon = new _PolygonMask.PolygonMask();
    this.backgroundMask = new _BackgroundMask.BackgroundMask();
  }

  (0, _createClass2["default"])(Options, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.detectRetina)) {
          this.detectRetina = data.detectRetina;
        }

        if (_Utils.Utils.hasData(data.retina_detect)) {
          this.retina_detect = data.retina_detect;
        }

        if (_Utils.Utils.hasData(data.fpsLimit)) {
          this.fpsLimit = data.fpsLimit;
        }

        if (_Utils.Utils.hasData(data.fps_limit)) {
          this.fps_limit = data.fps_limit;
        }

        this.interactivity.load(data.interactivity);
        this.particles.load(data.particles);
        this.polygon.load(data.polygon);
        this.backgroundMask.load(data.backgroundMask);
      }
    }
  }]);
  return Options;
}();

exports.Options = Options;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interactivity = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _InteractivityDetect = __webpack_require__(17);

var _Events = __webpack_require__(50);

var _Modes = __webpack_require__(55);

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var Interactivity = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Interactivity, [{
    key: "detect_on",

    /**
     *
     * @deprecated this property is obsolete, please use the new detectsOn
     */
    get: function get() {
      _Messages.Messages.deprecated("interactivity.detect_on", "interactivity.detectsOn");

      return this.detectsOn;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new detectsOn
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("interactivity.detect_on", "interactivity.detectsOn");

      this.detectsOn = value;
    }
  }]);

  function Interactivity() {
    (0, _classCallCheck2["default"])(this, Interactivity);
    this.detectsOn = void 0;
    this.events = void 0;
    this.modes = void 0;
    this.detectsOn = _InteractivityDetect.InteractivityDetect.canvas;
    this.events = new _Events.Events();
    this.modes = new _Modes.Modes();
  }

  (0, _createClass2["default"])(Interactivity, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.detectsOn)) {
          this.detectsOn = data.detectsOn;
        }

        if (_Utils.Utils.hasData(data.detect_on)) {
          this.detect_on = data.detect_on;
        }

        this.events.load(data.events);
        this.modes.load(data.modes);
      }
    }
  }]);
  return Interactivity;
}();

exports.Interactivity = Interactivity;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Events = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _ClickEvent = __webpack_require__(51);

var _DivEvent = __webpack_require__(52);

var _HoverEvent = __webpack_require__(53);

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var Events = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Events, [{
    key: "onclick",

    /**
     *
     * @deprecated this property is obsolete, please use the new onClick
     */
    get: function get() {
      _Messages.Messages.deprecated("interactivity.events.onclick", "interactivity.events.onClick");

      return this.onClick;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new onClick
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("interactivity.events.onclick", "interactivity.events.onClick");

      this.onClick = value;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new onDiv
     */

  }, {
    key: "ondiv",
    get: function get() {
      _Messages.Messages.deprecated("interactivity.events.ondiv", "interactivity.events.onDiv");

      return this.onDiv;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new onDiv
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("interactivity.events.ondiv", "interactivity.events.onDiv");

      this.onDiv = value;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new onHover
     */

  }, {
    key: "onhover",
    get: function get() {
      _Messages.Messages.deprecated("interactivity.events.onhover", "interactivity.events.onHover");

      return this.onHover;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new onHover
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("interactivity.events.onhover", "interactivity.events.onHover");

      this.onHover = value;
    }
  }]);

  function Events() {
    (0, _classCallCheck2["default"])(this, Events);
    this.onClick = void 0;
    this.onDiv = void 0;
    this.onHover = void 0;
    this.resize = void 0;
    this.onClick = new _ClickEvent.ClickEvent();
    this.onDiv = new _DivEvent.DivEvent();
    this.onHover = new _HoverEvent.HoverEvent();
    this.resize = true;
  }

  (0, _createClass2["default"])(Events, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.onClick)) {
          this.onClick.load(data.onClick);
        }

        if (_Utils.Utils.hasData(data.onclick)) {
          this.onclick.load(data.onclick);
        }

        if (_Utils.Utils.hasData(data.onDiv)) {
          this.onDiv.load(data.onDiv);
        }

        if (_Utils.Utils.hasData(data.ondiv)) {
          this.ondiv.load(data.ondiv);
        }

        if (_Utils.Utils.hasData(data.onHover)) {
          this.onHover.load(data.onHover);
        }

        if (_Utils.Utils.hasData(data.onhover)) {
          this.onhover.load(data.onhover);
        }

        if (_Utils.Utils.hasData(data.resize)) {
          this.resize = data.resize;
        }
      }
    }
  }]);
  return Events;
}();

exports.Events = Events;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClickEvent = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _ClickMode = __webpack_require__(6);

var _Utils = __webpack_require__(3);

var ClickEvent = /*#__PURE__*/function () {
  function ClickEvent() {
    (0, _classCallCheck2["default"])(this, ClickEvent);
    this.enable = void 0;
    this.mode = void 0;
    this.enable = true;
    this.mode = _ClickMode.ClickMode.push;
  }

  (0, _createClass2["default"])(ClickEvent, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.mode)) {
          this.mode = data.mode;
        }
      }
    }
  }]);
  return ClickEvent;
}();

exports.ClickEvent = ClickEvent;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DivEvent = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _DivMode = __webpack_require__(19);

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var DivEvent = /*#__PURE__*/function () {
  (0, _createClass2["default"])(DivEvent, [{
    key: "el",

    /**
     *
     * @deprecated this property is obsolete, please use the new elementId
     */
    get: function get() {
      _Messages.Messages.deprecated("interactivity.events.onDiv.detect_on", "interactivity.events.onDiv.detectsOn");

      return this.elementId;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new elementId
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("interactivity.events.onDiv.detect_on", "interactivity.events.onDiv.detectsOn");

      this.elementId = value;
    }
  }]);

  function DivEvent() {
    (0, _classCallCheck2["default"])(this, DivEvent);
    this.elementId = void 0;
    this.enable = void 0;
    this.mode = void 0;
    this.elementId = "repulse-div";
    this.enable = false;
    this.mode = _DivMode.DivMode.repulse;
  }

  (0, _createClass2["default"])(DivEvent, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.elementId)) {
          this.elementId = data.elementId;
        }

        if (_Utils.Utils.hasData(data.el)) {
          this.el = data.el;
        }

        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.mode)) {
          this.mode = data.mode;
        }
      }
    }
  }]);
  return DivEvent;
}();

exports.DivEvent = DivEvent;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoverEvent = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _HoverMode = __webpack_require__(10);

var _Parallax = __webpack_require__(54);

var _Utils = __webpack_require__(3);

var HoverEvent = /*#__PURE__*/function () {
  function HoverEvent() {
    (0, _classCallCheck2["default"])(this, HoverEvent);
    this.enable = void 0;
    this.mode = void 0;
    this.parallax = void 0;
    this.enable = true;
    this.mode = _HoverMode.HoverMode.grab;
    this.parallax = new _Parallax.Parallax();
  }

  (0, _createClass2["default"])(HoverEvent, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.mode)) {
          this.mode = data.mode;
        }

        this.parallax.load(data.parallax);
      }
    }
  }]);
  return HoverEvent;
}();

exports.HoverEvent = HoverEvent;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parallax = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var Parallax = /*#__PURE__*/function () {
  function Parallax() {
    (0, _classCallCheck2["default"])(this, Parallax);
    this.enable = void 0;
    this.force = void 0;
    this.smooth = void 0;
    this.enable = false;
    this.force = 2;
    this.smooth = 10;
  }

  (0, _createClass2["default"])(Parallax, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.force)) {
          this.force = data.force;
        }

        if (_Utils.Utils.hasData(data.smooth)) {
          this.smooth = data.smooth;
        }
      }
    }
  }]);
  return Parallax;
}();

exports.Parallax = Parallax;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modes = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Bubble = __webpack_require__(56);

var _Connect = __webpack_require__(57);

var _Grab = __webpack_require__(59);

var _Remove = __webpack_require__(61);

var _Push = __webpack_require__(62);

var _Repulse = __webpack_require__(63);

var _Slow = __webpack_require__(64);

var _Utils = __webpack_require__(3);

var Modes = /*#__PURE__*/function () {
  function Modes() {
    (0, _classCallCheck2["default"])(this, Modes);
    this.bubble = void 0;
    this.connect = void 0;
    this.grab = void 0;
    this.push = void 0;
    this.remove = void 0;
    this.repulse = void 0;
    this.slow = void 0;
    this.bubble = new _Bubble.Bubble();
    this.connect = new _Connect.Connect();
    this.grab = new _Grab.Grab();
    this.push = new _Push.Push();
    this.remove = new _Remove.Remove();
    this.repulse = new _Repulse.Repulse();
    this.slow = new _Slow.Slow();
  }

  (0, _createClass2["default"])(Modes, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        this.bubble.load(data.bubble);
        this.connect.load(data.connect);
        this.grab.load(data.grab);
        this.push.load(data.push);
        this.remove.load(data.remove);
        this.repulse.load(data.repulse);
        this.slow.load(data.slow);
      }
    }
  }]);
  return Modes;
}();

exports.Modes = Modes;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bubble = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var Bubble = /*#__PURE__*/function () {
  function Bubble() {
    (0, _classCallCheck2["default"])(this, Bubble);
    this.distance = void 0;
    this.duration = void 0;
    this.opacity = void 0;
    this.size = void 0;
    this.distance = 200;
    this.duration = 0.4;
    this.opacity = 1;
    this.size = 80;
  }

  (0, _createClass2["default"])(Bubble, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.distance)) {
          this.distance = data.distance;
        }

        if (_Utils.Utils.hasData(data.duration)) {
          this.duration = data.duration;
        }

        if (_Utils.Utils.hasData(data.opacity)) {
          this.opacity = data.opacity;
        }

        if (_Utils.Utils.hasData(data.size)) {
          this.size = data.size;
        }
      }
    }
  }]);
  return Bubble;
}();

exports.Bubble = Bubble;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Connect = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _ConnectLineLinked = __webpack_require__(58);

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var Connect = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Connect, [{
    key: "line_linked",

    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     */
    get: function get() {
      _Messages.Messages.deprecated("interactivity.modes.connect.line_linked", "interactivity.modes.connect.lineLinked");

      return this.lineLinked;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("interactivity.modes.connect.line_linked", "interactivity.modes.connect.lineLinked");

      this.lineLinked = value;
    }
  }]);

  function Connect() {
    (0, _classCallCheck2["default"])(this, Connect);
    this.distance = void 0;
    this.lineLinked = void 0;
    this.radius = void 0;
    this.distance = 80;
    this.lineLinked = new _ConnectLineLinked.ConnectLineLinked();
    this.radius = 60;
  }

  (0, _createClass2["default"])(Connect, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.distance)) {
          this.distance = data.distance;
        }

        if (_Utils.Utils.hasData(data.lineLinked)) {
          this.lineLinked.load(data.lineLinked);
        }

        if (_Utils.Utils.hasData(data.line_linked)) {
          this.line_linked.load(data.line_linked);
        }

        if (_Utils.Utils.hasData(data.radius)) {
          this.radius = data.radius;
        }
      }
    }
  }]);
  return Connect;
}();

exports.Connect = Connect;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectLineLinked = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var ConnectLineLinked = /*#__PURE__*/function () {
  function ConnectLineLinked() {
    (0, _classCallCheck2["default"])(this, ConnectLineLinked);
    this.opacity = void 0;
    this.opacity = 0.5;
  }

  (0, _createClass2["default"])(ConnectLineLinked, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.opacity)) {
          this.opacity = data.opacity;
        }
      }
    }
  }]);
  return ConnectLineLinked;
}();

exports.ConnectLineLinked = ConnectLineLinked;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grab = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _GrabLineLinked = __webpack_require__(60);

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var Grab = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Grab, [{
    key: "line_linked",

    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     */
    get: function get() {
      _Messages.Messages.deprecated("interactivity.modes.grab.line_linked", "interactivity.modes.grab.lineLinked");

      return this.lineLinked;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("interactivity.modes.grab.line_linked", "interactivity.modes.grab.lineLinked");

      this.lineLinked = value;
    }
  }]);

  function Grab() {
    (0, _classCallCheck2["default"])(this, Grab);
    this.distance = void 0;
    this.lineLinked = void 0;
    this.distance = 100;
    this.lineLinked = new _GrabLineLinked.GrabLineLinked();
  }

  (0, _createClass2["default"])(Grab, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.distance)) {
          this.distance = data.distance;
        }

        if (_Utils.Utils.hasData(data.lineLinked)) {
          this.lineLinked.load(data.lineLinked);
        }

        if (_Utils.Utils.hasData(data.line_linked)) {
          this.line_linked.load(data.line_linked);
        }
      }
    }
  }]);
  return Grab;
}();

exports.Grab = Grab;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrabLineLinked = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var GrabLineLinked = /*#__PURE__*/function () {
  function GrabLineLinked() {
    (0, _classCallCheck2["default"])(this, GrabLineLinked);
    this.opacity = void 0;
    this.opacity = 1;
  }

  (0, _createClass2["default"])(GrabLineLinked, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.opacity)) {
          this.opacity = data.opacity;
        }
      }
    }
  }]);
  return GrabLineLinked;
}();

exports.GrabLineLinked = GrabLineLinked;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Remove = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var Remove = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Remove, [{
    key: "particles_nb",

    /**
     *
     * @deprecated this property is obsolete, please use the new quantity
     */
    get: function get() {
      _Messages.Messages.deprecated("interactivity.modes.remove.particles_nb", "interactivity.modes.remove.quantity");

      return this.quantity;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new quantity
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("interactivity.modes.remove.particles_nb", "interactivity.modes.remove.quantity");

      this.quantity = value;
    }
  }]);

  function Remove() {
    (0, _classCallCheck2["default"])(this, Remove);
    this.quantity = void 0;
    this.quantity = 2;
  }

  (0, _createClass2["default"])(Remove, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.quantity)) {
          this.quantity = data.quantity;
        }

        if (_Utils.Utils.hasData(data.particles_nb)) {
          this.particles_nb = data.particles_nb;
        }
      }
    }
  }]);
  return Remove;
}();

exports.Remove = Remove;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Push = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var Push = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Push, [{
    key: "particles_nb",

    /**
     *
     * @deprecated this property is obsolete, please use the new quantity
     */
    get: function get() {
      _Messages.Messages.deprecated("interactivity.modes.push.particles_nb", "interactivity.modes.push.quantity");

      return this.quantity;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new quantity
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("interactivity.modes.push.particles_nb", "interactivity.modes.push.quantity");

      this.quantity = value;
    }
  }]);

  function Push() {
    (0, _classCallCheck2["default"])(this, Push);
    this.quantity = void 0;
    this.quantity = 4;
  }

  (0, _createClass2["default"])(Push, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.quantity)) {
          this.quantity = data.quantity;
        }

        if (_Utils.Utils.hasData(data.particles_nb)) {
          this.particles_nb = data.particles_nb;
        }
      }
    }
  }]);
  return Push;
}();

exports.Push = Push;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Repulse = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var Repulse = /*#__PURE__*/function () {
  function Repulse() {
    (0, _classCallCheck2["default"])(this, Repulse);
    this.distance = void 0;
    this.duration = void 0;
    this.distance = 200;
    this.duration = 0.4;
  }

  (0, _createClass2["default"])(Repulse, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.distance)) {
          this.distance = data.distance;
        }

        if (_Utils.Utils.hasData(data.duration)) {
          this.duration = data.duration;
        }
      }
    }
  }]);
  return Repulse;
}();

exports.Repulse = Repulse;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slow = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var Slow = /*#__PURE__*/function () {
  function Slow() {
    (0, _classCallCheck2["default"])(this, Slow);
    this.active = void 0;
    this.factor = void 0;
    this.radius = void 0;
    this.active = false;
    this.factor = 1;
    this.radius = 0;
  }

  (0, _createClass2["default"])(Slow, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.active)) {
          this.active = data.active;
        }

        if (_Utils.Utils.hasData(data.factor)) {
          this.factor = data.factor;
        }

        if (_Utils.Utils.hasData(data.radius)) {
          this.radius = data.radius;
        }
      }
    }
  }]);
  return Slow;
}();

exports.Slow = Slow;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Particles = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Color = __webpack_require__(66);

var _LineLinked = __webpack_require__(67);

var _Move = __webpack_require__(68);

var _ParticlesNumber = __webpack_require__(70);

var _Opacity = __webpack_require__(72);

var _Shape = __webpack_require__(74);

var _ParticlesSize = __webpack_require__(79);

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var _Rotate = __webpack_require__(81);

var Particles = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Particles, [{
    key: "line_linked",

    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.line_linked", "particles.lineLinked");

      return this.lineLinked;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.line_linked", "particles.lineLinked");

      this.lineLinked = value;
    }
  }]); // public shadow: IShadow;

  function Particles() {
    (0, _classCallCheck2["default"])(this, Particles);
    this.color = void 0;
    this.lineLinked = void 0;
    this.move = void 0;
    this.number = void 0;
    this.opacity = void 0;
    this.rotate = void 0;
    this.shape = void 0;
    this.size = void 0;
    this.color = new _Color.Color();
    this.lineLinked = new _LineLinked.LineLinked();
    this.move = new _Move.Move();
    this.number = new _ParticlesNumber.ParticlesNumber();
    this.opacity = new _Opacity.Opacity();
    this.rotate = new _Rotate.Rotate();
    this.shape = new _Shape.Shape();
    this.size = new _ParticlesSize.ParticlesSize(); //this.shadow = new Shadow();
  }

  (0, _createClass2["default"])(Particles, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        this.color.load(data.color);

        if (_Utils.Utils.hasData(data.lineLinked)) {
          this.lineLinked.load(data.lineLinked);
        }

        if (_Utils.Utils.hasData(data.line_linked)) {
          this.line_linked.load(data.line_linked);
        }

        this.move.load(data.move);
        this.number.load(data.number);
        this.opacity.load(data.opacity);
        this.rotate.load(data.rotate);
        this.shape.load(data.shape);
        this.size.load(data.size);
      }
    }
  }]);
  return Particles;
}();

exports.Particles = Particles;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var Color = /*#__PURE__*/function () {
  function Color() {
    (0, _classCallCheck2["default"])(this, Color);
    this.value = void 0;
    this.value = "#fff";
  }

  (0, _createClass2["default"])(Color, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.value)) {
          this.value = data.value;
        }
      }
    }
  }]);
  return Color;
}();

exports.Color = Color;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineLinked = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var LineLinked = /*#__PURE__*/function () {
  function LineLinked() {
    (0, _classCallCheck2["default"])(this, LineLinked);
    this.blink = void 0;
    this.color = void 0;
    this.consent = void 0;
    this.distance = void 0;
    this.enable = void 0;
    this.opacity = void 0;
    this.width = void 0;
    this.blink = false;
    this.color = "#fff";
    this.consent = false;
    this.distance = 100;
    this.enable = true;
    this.opacity = 1;
    this.width = 1;
  }

  (0, _createClass2["default"])(LineLinked, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.blink)) {
          this.blink = data.blink;
        }

        if (_Utils.Utils.hasData(data.color)) {
          this.color = data.color;
        }

        if (_Utils.Utils.hasData(data.consent)) {
          this.consent = data.consent;
        }

        if (_Utils.Utils.hasData(data.distance)) {
          this.distance = data.distance;
        }

        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.opacity)) {
          this.opacity = data.opacity;
        }

        if (_Utils.Utils.hasData(data.width)) {
          this.width = data.width;
        }
      }
    }
  }]);
  return LineLinked;
}();

exports.LineLinked = LineLinked;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Move = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Attract = __webpack_require__(69);

var _MoveDirection = __webpack_require__(16);

var _OutMode = __webpack_require__(11);

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var Move = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Move, [{
    key: "out_mode",

    /**
     *
     * @deprecated this property is obsolete, please use the new outMode
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.move.out_mode", "particles.move.outMode");

      return this.outMode;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new outMode
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.move.out_mode", "particles.move.outMode");

      this.outMode = value;
    }
  }]);

  function Move() {
    (0, _classCallCheck2["default"])(this, Move);
    this.attract = void 0;
    this.bounce = void 0;
    this.direction = void 0;
    this.enable = void 0;
    this.outMode = void 0;
    this.random = void 0;
    this.speed = void 0;
    this.straight = void 0;
    this.attract = new _Attract.Attract();
    this.bounce = false;
    this.direction = _MoveDirection.MoveDirection.none;
    this.enable = true;
    this.outMode = _OutMode.OutMode.out;
    this.random = false;
    this.speed = 2;
    this.straight = false;
  }

  (0, _createClass2["default"])(Move, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        this.attract.load(data.attract);

        if (_Utils.Utils.hasData(data.bounce)) {
          this.bounce = data.bounce;
        }

        if (_Utils.Utils.hasData(data.direction)) {
          this.direction = data.direction;
        }

        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.outMode)) {
          this.outMode = data.outMode;
        }

        if (_Utils.Utils.hasData(data.out_mode)) {
          this.out_mode = data.out_mode;
        }

        if (_Utils.Utils.hasData(data.random)) {
          this.random = data.random;
        }

        if (_Utils.Utils.hasData(data.speed)) {
          this.speed = data.speed;
        }

        if (_Utils.Utils.hasData(data.straight)) {
          this.straight = data.straight;
        }
      }
    }
  }]);
  return Move;
}();

exports.Move = Move;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Attract = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var Attract = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Attract, [{
    key: "rotateX",

    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.x
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.move.attract.rotateX", "particles.move.attract.rotate.x");

      return this.rotate.x;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.x
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.move.attract.rotateX", "particles.move.attract.rotate.x");

      this.rotate.x = value;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.y
     */

  }, {
    key: "rotateY",
    get: function get() {
      _Messages.Messages.deprecated("particles.move.attract.rotateY", "particles.move.attract.rotate.y");

      return this.rotate.y;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.y
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.move.attract.rotateY", "particles.move.attract.rotate.y");

      this.rotate.y = value;
    }
  }]);

  function Attract() {
    (0, _classCallCheck2["default"])(this, Attract);
    this.enable = void 0;
    this.rotate = void 0;
    this.enable = false;
    this.rotate = {
      x: 3000,
      y: 3000
    };
  }

  (0, _createClass2["default"])(Attract, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        var _data$rotate, _data$rotate2;

        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData((_data$rotate = data.rotate) === null || _data$rotate === void 0 ? void 0 : _data$rotate.x)) {
          this.rotate.x = data.rotate.x;
        }

        if (_Utils.Utils.hasData((_data$rotate2 = data.rotate) === null || _data$rotate2 === void 0 ? void 0 : _data$rotate2.y)) {
          this.rotate.y = data.rotate.y;
        }

        if (_Utils.Utils.hasData(data.rotateX)) {
          this.rotateX = data.rotateX;
        }

        if (_Utils.Utils.hasData(data.rotateY)) {
          this.rotateY = data.rotateY;
        }
      }
    }
  }]);
  return Attract;
}();

exports.Attract = Attract;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParticlesNumber = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Density = __webpack_require__(71);

var _Utils = __webpack_require__(3);

var ParticlesNumber = /*#__PURE__*/function () {
  function ParticlesNumber() {
    (0, _classCallCheck2["default"])(this, ParticlesNumber);
    this.density = void 0;
    this.limit = void 0;
    this.value = void 0;
    this.density = new _Density.Density();
    this.limit = 0;
    this.value = 400;
  }

  (0, _createClass2["default"])(ParticlesNumber, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        this.density.load(data.density);

        if (_Utils.Utils.hasData(data.limit)) {
          this.limit = data.limit;
        }

        if (_Utils.Utils.hasData(data.value)) {
          this.value = data.value;
        }
      }
    }
  }]);
  return ParticlesNumber;
}();

exports.ParticlesNumber = ParticlesNumber;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Density = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var Density = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Density, [{
    key: "value_area",

    /**
     *
     * @deprecated this property is obsolete, please use the new area
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.number.density.value_area", "particles.number.density.area");

      return this.area;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new area
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.number.density.value_area", "particles.number.density.area");

      this.area = value;
    }
  }]);

  function Density() {
    (0, _classCallCheck2["default"])(this, Density);
    this.enable = void 0;
    this.area = void 0;
    this.enable = true;
    this.area = 800;
  }

  (0, _createClass2["default"])(Density, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.area)) {
          this.area = data.area;
        }

        if (_Utils.Utils.hasData(data.value_area)) {
          this.value_area = data.value_area;
        }
      }
    }
  }]);
  return Density;
}();

exports.Density = Density;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Opacity = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _OpacityAnimation = __webpack_require__(73);

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var Opacity = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Opacity, [{
    key: "anim",

    /**
     *
     * @deprecated this property is obsolete, please use the new animation
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.opacity.anim", "particles.opacity.animation");

      return this.animation;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new animation
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.opacity.anim", "particles.opacity.animation");

      this.animation = value;
    }
  }]);

  function Opacity() {
    (0, _classCallCheck2["default"])(this, Opacity);
    this.animation = void 0;
    this.random = void 0;
    this.value = void 0;
    this.animation = new _OpacityAnimation.OpacityAnimation();
    this.random = false;
    this.value = 1;
  }

  (0, _createClass2["default"])(Opacity, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.animation)) {
          this.animation.load(data.animation);
        }

        if (_Utils.Utils.hasData(data.anim)) {
          this.anim.load(data.anim);
        }

        if (_Utils.Utils.hasData(data.random)) {
          this.random = data.random;
        }

        if (_Utils.Utils.hasData(data.value)) {
          this.value = data.value;
        }
      }
    }
  }]);
  return Opacity;
}();

exports.Opacity = Opacity;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpacityAnimation = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var OpacityAnimation = /*#__PURE__*/function () {
  (0, _createClass2["default"])(OpacityAnimation, [{
    key: "opacity_min",

    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.opacity.animation.opacity_min", "particles.opacity.animation.minimumValue");

      return this.minimumValue;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.opacity.animation.opacity_min", "particles.opacity.animation.minimumValue");

      this.minimumValue = value;
    }
  }]);

  function OpacityAnimation() {
    (0, _classCallCheck2["default"])(this, OpacityAnimation);
    this.enable = void 0;
    this.minimumValue = void 0;
    this.speed = void 0;
    this.sync = void 0;
    this.enable = false;
    this.minimumValue = 0;
    this.speed = 2;
    this.sync = false;
  }

  (0, _createClass2["default"])(OpacityAnimation, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.minimumValue)) {
          this.minimumValue = data.minimumValue;
        }

        if (_Utils.Utils.hasData(data.opacity_min)) {
          this.opacity_min = data.opacity_min;
        }

        if (_Utils.Utils.hasData(data.speed)) {
          this.speed = data.speed;
        }

        if (_Utils.Utils.hasData(data.sync)) {
          this.sync = data.sync;
        }
      }
    }
  }]);
  return OpacityAnimation;
}();

exports.OpacityAnimation = OpacityAnimation;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shape = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _ShapeType = __webpack_require__(7);

var _CharacterShape = __webpack_require__(75);

var _ImageShape = __webpack_require__(76);

var _PolygonShape = __webpack_require__(77);

var _Stroke = __webpack_require__(78);

var _Utils = __webpack_require__(3);

var Shape = /*#__PURE__*/function () {
  function Shape() {
    (0, _classCallCheck2["default"])(this, Shape);
    this.character = void 0;
    this.image = void 0;
    this.polygon = void 0;
    this.stroke = void 0;
    this.type = void 0;
    this.character = new _CharacterShape.CharacterShape();
    this.image = new _ImageShape.ImageShape();
    this.polygon = new _PolygonShape.PolygonShape();
    this.stroke = new _Stroke.Stroke();
    this.type = _ShapeType.ShapeType.circle;
  }

  (0, _createClass2["default"])(Shape, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        this.character.load(data.character);

        if (_Utils.Utils.hasData(data.image)) {
          if (data.image instanceof Array) {
            this.image = data.image.map(function (s) {
              var tmp = new _ImageShape.ImageShape();
              tmp.load(s);
              return tmp;
            });
          } else {
            this.image = new _ImageShape.ImageShape();
            this.image.load(data.image);
          }
        }

        this.stroke.load(data.stroke);

        if (_Utils.Utils.hasData(data.type)) {
          this.type = data.type;
        }
      }
    }
  }]);
  return Shape;
}();

exports.Shape = Shape;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CharacterShape = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var CharacterShape = /*#__PURE__*/function () {
  function CharacterShape() {
    (0, _classCallCheck2["default"])(this, CharacterShape);
    this.fill = void 0;
    this.font = void 0;
    this.style = void 0;
    this.value = void 0;
    this.weight = void 0;
    this.fill = false;
    this.font = "Verdana";
    this.style = "";
    this.value = "*";
    this.weight = "400";
  }

  (0, _createClass2["default"])(CharacterShape, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.fill)) {
          this.fill = data.fill;
        }

        if (_Utils.Utils.hasData(data.font)) {
          this.font = data.font;
        }

        if (_Utils.Utils.hasData(data.style)) {
          this.style = data.style;
        }

        if (_Utils.Utils.hasData(data.value)) {
          this.value = data.value;
        }

        if (_Utils.Utils.hasData(data.weight)) {
          this.weight = data.weight;
        }
      }
    }
  }]);
  return CharacterShape;
}();

exports.CharacterShape = CharacterShape;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageShape = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var ImageShape = /*#__PURE__*/function () {
  (0, _createClass2["default"])(ImageShape, [{
    key: "replace_color",

    /**
     *
     * @deprecated this property is obsolete, please use the new replaceColor
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.shape.image.replace_color", "particles.shape.image.replaceColor");

      return this.replaceColor;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new replaceColor
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.shape.image.replace_color", "particles.shape.image.replaceColor");

      this.replaceColor = value;
    }
  }]);

  function ImageShape() {
    (0, _classCallCheck2["default"])(this, ImageShape);
    this.height = void 0;
    this.replaceColor = void 0;
    this.src = void 0;
    this.width = void 0;
    this.height = 100;
    this.replaceColor = true;
    this.src = "";
    this.width = 100;
  }

  (0, _createClass2["default"])(ImageShape, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.height)) {
          this.height = data.height;
        }

        if (_Utils.Utils.hasData(data.replaceColor)) {
          this.replaceColor = data.replaceColor;
        }

        if (_Utils.Utils.hasData(data.replace_color)) {
          this.replace_color = data.replace_color;
        }

        if (_Utils.Utils.hasData(data.src)) {
          this.src = data.src;
        }

        if (_Utils.Utils.hasData(data.width)) {
          this.width = data.width;
        }
      }
    }
  }]);
  return ImageShape;
}();

exports.ImageShape = ImageShape;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonShape = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var PolygonShape = /*#__PURE__*/function () {
  (0, _createClass2["default"])(PolygonShape, [{
    key: "nb_sides",

    /**
     *
     * @deprecated this property is obsolete, please use the new sides
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.shape.polygon.nb_sides", "particles.shape.polygon.sides");

      return this.sides;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new sides
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.shape.polygon.nb_sides", "particles.shape.polygon.sides");

      this.sides = value;
    }
  }]);

  function PolygonShape() {
    (0, _classCallCheck2["default"])(this, PolygonShape);
    this.sides = void 0;
    this.sides = 5;
  }

  (0, _createClass2["default"])(PolygonShape, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.sides)) {
          this.sides = data.sides;
        }

        if (_Utils.Utils.hasData(data.nb_sides)) {
          this.nb_sides = data.nb_sides;
        }
      }
    }
  }]);
  return PolygonShape;
}();

exports.PolygonShape = PolygonShape;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stroke = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var Stroke = /*#__PURE__*/function () {
  function Stroke() {
    (0, _classCallCheck2["default"])(this, Stroke);
    this.color = void 0;
    this.width = void 0;
    this.color = "#ff0000";
    this.width = 0;
  }

  (0, _createClass2["default"])(Stroke, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.color)) {
          this.color = data.color;
        }

        if (_Utils.Utils.hasData(data.width)) {
          this.width = data.width;
        }
      }
    }
  }]);
  return Stroke;
}();

exports.Stroke = Stroke;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParticlesSize = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _ParticlesSizeAnimation = __webpack_require__(80);

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var ParticlesSize = /*#__PURE__*/function () {
  (0, _createClass2["default"])(ParticlesSize, [{
    key: "anim",

    /**
     *
     * @deprecated this property is obsolete, please use the new animation
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.size.anim", "particles.size.animation");

      return this.animation;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new animation
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.size.anim", "particles.size.animation");

      this.animation = value;
    }
  }]);

  function ParticlesSize() {
    (0, _classCallCheck2["default"])(this, ParticlesSize);
    this.animation = void 0;
    this.random = void 0;
    this.value = void 0;
    this.animation = new _ParticlesSizeAnimation.ParticlesSizeAnimation();
    this.random = false;
    this.value = 20;
  }

  (0, _createClass2["default"])(ParticlesSize, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.animation)) {
          this.animation.load(data.animation);
        }

        if (_Utils.Utils.hasData(data.anim)) {
          this.anim.load(data.anim);
        }

        if (_Utils.Utils.hasData(data.random)) {
          this.random = data.random;
        }

        if (_Utils.Utils.hasData(data.value)) {
          this.value = data.value;
        }
      }
    }
  }]);
  return ParticlesSize;
}();

exports.ParticlesSize = ParticlesSize;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParticlesSizeAnimation = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Messages = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var ParticlesSizeAnimation = /*#__PURE__*/function () {
  (0, _createClass2["default"])(ParticlesSizeAnimation, [{
    key: "size_min",

    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.size.animation.size_min", "particles.size.animation.minimumValue");

      return this.minimumValue;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.size.animation.size_min", "particles.size.animation.minimumValue");

      this.minimumValue = value;
    }
  }]);

  function ParticlesSizeAnimation() {
    (0, _classCallCheck2["default"])(this, ParticlesSizeAnimation);
    this.enable = void 0;
    this.minimumValue = void 0;
    this.speed = void 0;
    this.sync = void 0;
    this.enable = false;
    this.minimumValue = 0;
    this.speed = 20;
    this.sync = false;
  }

  (0, _createClass2["default"])(ParticlesSizeAnimation, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.minimumValue)) {
          this.minimumValue = data.minimumValue;
        }

        if (_Utils.Utils.hasData(data.size_min)) {
          this.size_min = data.size_min;
        }

        if (_Utils.Utils.hasData(data.speed)) {
          this.speed = data.speed;
        }

        if (_Utils.Utils.hasData(data.sync)) {
          this.sync = data.sync;
        }
      }
    }
  }]);
  return ParticlesSizeAnimation;
}();

exports.ParticlesSizeAnimation = ParticlesSizeAnimation;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rotate = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var _RotateAnimation = __webpack_require__(82);

var _RotateDirection = __webpack_require__(20);

var Rotate = /*#__PURE__*/function () {
  function Rotate() {
    (0, _classCallCheck2["default"])(this, Rotate);
    this.animation = void 0;
    this.direction = void 0;
    this.random = void 0;
    this.value = void 0;
    this.animation = new _RotateAnimation.RotateAnimation();
    this.direction = _RotateDirection.RotateDirection.clockwise;
    this.random = false;
    this.value = 0;
  }

  (0, _createClass2["default"])(Rotate, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        this.animation.load(data.animation);

        if (_Utils.Utils.hasData(data.random)) {
          this.random = data.random;
        }

        if (_Utils.Utils.hasData(data.random)) {
          this.value = data.value;
        }
      }
    }
  }]);
  return Rotate;
}();

exports.Rotate = Rotate;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RotateAnimation = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var RotateAnimation = /*#__PURE__*/function () {
  function RotateAnimation() {
    (0, _classCallCheck2["default"])(this, RotateAnimation);
    this.enable = void 0;
    this.speed = void 0;
    this.sync = void 0;
    this.enable = false;
    this.speed = 0;
    this.sync = false;
  }

  (0, _createClass2["default"])(RotateAnimation, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.speed)) {
          this.speed = data.speed;
        }

        if (_Utils.Utils.hasData(data.sync)) {
          this.sync = data.sync;
        }
      }
    }
  }]);
  return RotateAnimation;
}();

exports.RotateAnimation = RotateAnimation;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonMask = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _PolygonMaskType = __webpack_require__(5);

var _Draw = __webpack_require__(84);

var _Move = __webpack_require__(85);

var _PolygonMaskInlineArrangement = __webpack_require__(12);

var _Utils = __webpack_require__(3);

var PolygonMask = /*#__PURE__*/function () {
  function PolygonMask() {
    (0, _classCallCheck2["default"])(this, PolygonMask);
    this.draw = void 0;
    this.inlineArrangement = void 0;
    this.move = void 0;
    this.scale = void 0;
    this.type = void 0;
    this.url = void 0;
    this.draw = new _Draw.Draw();
    this.inlineArrangement = _PolygonMaskInlineArrangement.PolygonMaskInlineArrangement.onePerPoint;
    this.move = new _Move.Move();
    this.scale = 1;
    this.type = _PolygonMaskType.PolygonMaskType.none;
    this.url = "";
  }

  (0, _createClass2["default"])(PolygonMask, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        this.draw.load(data.draw);

        if (_Utils.Utils.hasData(data.inlineArrangement)) {
          this.inlineArrangement = data.inlineArrangement;
        }

        this.move.load(data.move);

        if (_Utils.Utils.hasData(data.scale)) {
          this.scale = data.scale;
        }

        if (_Utils.Utils.hasData(data.type)) {
          this.type = data.type;
        }

        if (_Utils.Utils.hasData(data.url)) {
          this.url = data.url;
        }
      }
    }
  }]);
  return PolygonMask;
}();

exports.PolygonMask = PolygonMask;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Draw = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var Draw = /*#__PURE__*/function () {
  function Draw() {
    (0, _classCallCheck2["default"])(this, Draw);
    this.enable = void 0;
    this.lineColor = void 0;
    this.lineWidth = void 0;
    this.enable = false;
    this.lineColor = "#ffffff";
    this.lineWidth = 0.5;
  }

  (0, _createClass2["default"])(Draw, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.lineColor)) {
          this.lineColor = data.lineColor;
        }

        if (_Utils.Utils.hasData(data.lineWidth)) {
          this.lineWidth = data.lineWidth;
        }
      }
    }
  }]);
  return Draw;
}();

exports.Draw = Draw;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Move = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var Move = /*#__PURE__*/function () {
  function Move() {
    (0, _classCallCheck2["default"])(this, Move);
    this.radius = void 0;
    this.radius = 10;
  }

  (0, _createClass2["default"])(Move, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.radius)) {
          this.radius = data.radius;
        }
      }
    }
  }]);
  return Move;
}();

exports.Move = Move;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(2);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundMask = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(0));

var _createClass2 = _interopRequireDefault(__webpack_require__(1));

var _Utils = __webpack_require__(3);

var BackgroundMask = /*#__PURE__*/function () {
  function BackgroundMask() {
    (0, _classCallCheck2["default"])(this, BackgroundMask);
    this.cover = void 0;
    this.enable = void 0;
    this.enable = false;
  }

  (0, _createClass2["default"])(BackgroundMask, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.cover)) {
          this.cover = data.cover;
        }

        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }
      }
    }
  }]);
  return BackgroundMask;
}();

exports.BackgroundMask = BackgroundMask;

/***/ })
/******/ ]);