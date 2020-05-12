"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Canvas = require("./Canvas");

var _EventListeners = require("./Utils/EventListeners");

var _Loader = require("./Loader");

var _Particles = require("./Particles");

var _Retina = require("./Retina");

var _ShapeType = require("../Enums/ShapeType");

var _PolygonMask = require("./PolygonMask");

var _tsyringe = require("tsyringe");

var _Drawer = require("./Drawer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL0NvbnRhaW5lci50cyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJkcmF3QW5pbWF0aW9uRnJhbWUiLCJ2YWx1ZSIsImNoZWNrQW5pbWF0aW9uRnJhbWUiLCJ0YWdJZCIsInBhcmFtcyIsInNvdXJjZU9wdGlvbnMiLCJpbnRlcmFjdGl2aXR5Iiwib3B0aW9ucyIsInJldGluYSIsImNhbnZhcyIsInBhcnRpY2xlcyIsInBvbHlnb24iLCJidWJibGUiLCJyZXB1bHNlIiwiaW1hZ2VzIiwibGFzdEZyYW1lVGltZSIsInBhZ2VIaWRkZW4iLCJkcmF3ZXIiLCJfZXZlbnRMaXN0ZW5lcnMiLCJSZXRpbmEiLCJDYW52YXMiLCJQYXJ0aWNsZXMiLCJQb2x5Z29uTWFzayIsIkRyYXdlciIsIm1vdXNlIiwiY29udGFpbmVyIiwicmVzb2x2ZSIsImxvYWQiLCJFdmVudExpc3RlbmVycyIsImFkZEV2ZW50c0xpc3RlbmVycyIsInN0YXJ0IiwidGhlbiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVZpc2liaWxpdHlDaGFuZ2UiLCJlcnJvciIsIm51bWJlciIsImRlbnNpdHkiLCJlbmFibGUiLCJhcmVhIiwiZWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiaXNSZXRpbmEiLCJweFJhdGlvIiwib3B0UGFydGljbGVzTnVtYmVyIiwicGFydGljbGVzTnVtYmVyIiwibWlzc2luZ1BhcnRpY2xlcyIsImFycmF5IiwibGVuZ3RoIiwicHVzaCIsIk1hdGgiLCJhYnMiLCJyZW1vdmUiLCJ1bmRlZmluZWQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlc2V0IiwiaWR4IiwiTG9hZGVyIiwiZG9tIiwiaW5kZXhPZiIsInNwbGljZSIsIndpbmRvdyIsIm9wZW4iLCJ0b0RhdGFVUkwiLCJpbWFnZSIsIm9wdGlvbnNJbWFnZSIsInNyYyIsImltZyIsIkltYWdlIiwib2JqIiwiY2hlY2tCZWZvcmVEcmF3IiwiY29uc29sZSIsImNhbmNlbEFuaW1hdGlvbiIsImNsZWFyIiwibGluZUxpbmtlZENvbG9yIiwidXJsIiwicGFyc2VTdmdQYXRoVG9Qb2x5Z29uIiwicmF3IiwicGVyZm9ybWFuY2UiLCJub3ciLCJzaGFwZSIsInR5cGUiLCJTaGFwZVR5cGUiLCJBcnJheSIsInN1YnN0ciIsImxvYWRJbWciLCJpbml0IiwiZGVuc2l0eUF1dG9QYXJ0aWNsZXMiLCJoaWRkZW4iLCJkcmF3IiwiZXZlcnkiLCJjYWxsYmFjayIsImN1c3RvbVJlcXVlc3RBbmltYXRpb25GcmFtZSIsImhhbmRsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBS0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBRUE7OztJQUdhQSxTOzs7O0FBQ1Q7Ozt3QkFHK0M7QUFDM0MsYUFBTyxLQUFLQyxrQkFBWjtBQUNIO0FBRUQ7Ozs7O3NCQUl5QkMsSyxFQUEyQjtBQUNoRCxXQUFLRCxrQkFBTCxHQUEwQkMsS0FBMUI7QUFDSDtBQUVEOzs7Ozs7d0JBR2dEO0FBQzVDLGFBQU8sS0FBS0MsbUJBQVo7QUFDSDtBQUVEOzs7OztzQkFJMEJELEssRUFBMkI7QUFDakQsV0FBS0MsbUJBQUwsR0FBMkJELEtBQTNCO0FBQ0g7OztBQW9CRCxxQkFBWUUsS0FBWixFQUEyQkMsTUFBM0IsRUFBNkM7QUFBQTs7QUFBQTtBQUFBLFNBbEI3QkMsYUFrQjZCO0FBQUEsU0FqQnRDQyxhQWlCc0M7QUFBQSxTQWhCdENDLE9BZ0JzQztBQUFBLFNBZnRDQyxNQWVzQztBQUFBLFNBZHRDQyxNQWNzQztBQUFBLFNBYnRDQyxTQWFzQztBQUFBLFNBWnRDQyxPQVlzQztBQUFBLFNBWHRDVCxtQkFXc0M7QUFBQSxTQVZ0Q0Ysa0JBVXNDO0FBQUEsU0FUdENZLE1BU3NDO0FBQUEsU0FSdENDLE9BUXNDO0FBQUEsU0FQdENDLE1BT3NDO0FBQUEsU0FOdENDLGFBTXNDO0FBQUEsU0FMdENDLFVBS3NDO0FBQUEsU0FKdENDLE1BSXNDO0FBQUEs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LFdBQVcsQ0FBQ0MsR0FBWixFQUFyQjtBQUNBLGFBQUsvRCxNQUFMLENBQVl5RSxJQUFaLENBQWlCLENBQWpCO0FBQ0g7QUFDSjs7O3NDQUUrQjtBQUM1QixVQUFJLEtBQUtuRixPQUFMLENBQWFHLFNBQWIsQ0FBdUJ1RSxLQUF2QixDQUE2QkMsSUFBN0IsS0FBc0NDLHFCQUFVbEIsS0FBcEQsRUFBMkQ7QUFDdkQsWUFBSSxLQUFLL0QsbUJBQVQsRUFBOEI7QUFDMUJILFVBQUFBLFNBQVMsQ0FBQzBFLGVBQVYsQ0FBMEIsS0FBS3ZFLG1CQUEvQjtBQUNIOztBQUVELFlBQUksS0FBS1ksTUFBTCxDQUFZNkUsS0FBWixDQUFrQixVQUFDdkIsR0FBRDtBQUFBLGlCQUFTQSxHQUFHLENBQUNqQyxLQUFiO0FBQUEsU0FBbEIsQ0FBSixFQUEyQztBQUN2QztBQUNIO0FBQ0o7O0FBRUQsV0FBS29ELElBQUw7QUFDQSxXQUFLdEUsTUFBTCxDQUFZeUUsSUFBWixDQUFpQixDQUFqQjtBQUNIOzs7aUNBekswQkUsUSxFQUF3QztBQUMvRCxhQUFPOUIsTUFBTSxDQUFDK0IsMkJBQVAsQ0FBbUNELFFBQW5DLENBQVA7QUFDSDs7O29DQUU2QkUsTSxFQUFzQjtBQUNoRGhDLE1BQUFBLE1BQU0sQ0FBQ1Asb0JBQVAsQ0FBNEJ1QyxNQUE1QjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7Q2FudmFzfSBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCB7RXZlbnRMaXN0ZW5lcnN9IGZyb20gXCIuL1V0aWxzL0V2ZW50TGlzdGVuZXJzXCI7XG5pbXBvcnQge0lSZXB1bHNlfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JUmVwdWxzZVwiO1xuaW1wb3J0IHtJQnViYmxlfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQnViYmxlXCI7XG5pbXBvcnQge0lJbWFnZX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUltYWdlXCI7XG5pbXBvcnQge0lDb250YWluZXJJbnRlcmFjdGl2aXR5fSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29udGFpbmVySW50ZXJhY3Rpdml0eVwiO1xuaW1wb3J0IHtMb2FkZXJ9IGZyb20gXCIuL0xvYWRlclwiO1xuaW1wb3J0IHtQYXJ0aWNsZXN9IGZyb20gXCIuL1BhcnRpY2xlc1wiO1xuaW1wb3J0IHtSZXRpbmF9IGZyb20gXCIuL1JldGluYVwiO1xuaW1wb3J0IHtTaGFwZVR5cGV9IGZyb20gXCIuLi9FbnVtcy9TaGFwZVR5cGVcIjtcbmltcG9ydCB7UG9seWdvbk1hc2t9IGZyb20gXCIuL1BvbHlnb25NYXNrXCI7XG5pbXBvcnQge0ltYWdlU2hhcGV9IGZyb20gXCIuL09wdGlvbnMvUGFydGljbGVzL1NoYXBlL0ltYWdlU2hhcGVcIjtcbmltcG9ydCB7SU9wdGlvbnN9IGZyb20gXCIuLi9JbnRlcmZhY2VzL09wdGlvbnMvSU9wdGlvbnNcIjtcbmltcG9ydCB7Y29udGFpbmVyfSBmcm9tIFwidHN5cmluZ2VcIjtcbmltcG9ydCB7RHJhd2VyfSBmcm9tIFwiLi9EcmF3ZXJcIjtcblxuLyoqXG4gKiBUaGUgb2JqZWN0IGxvYWRlZCBpbnRvIGFuIEhUTUwgZWxlbWVudCwgaXQnbGwgY29udGFpbiBvcHRpb25zIGxvYWRlZCBhbmQgYWxsIGRhdGEgdG8gbGV0IGV2ZXJ5dGhpbmcgd29ya2luZ1xuICovXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyIHtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgZHJhd0FuaW1hdGlvbkZyYW1lXG4gICAgICovXG4gICAgcHVibGljIGdldCBkcmF3QW5pbUZyYW1lKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXdBbmltYXRpb25GcmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgZHJhd0FuaW1hdGlvbkZyYW1lXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBkcmF3QW5pbUZyYW1lKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5kcmF3QW5pbWF0aW9uRnJhbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgY2hlY2tBbmltYXRpb25GcmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgY2hlY2tBbmltRnJhbWUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tBbmltYXRpb25GcmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgY2hlY2tBbmltYXRpb25GcmFtZVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgY2hlY2tBbmltRnJhbWUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNoZWNrQW5pbWF0aW9uRnJhbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgc291cmNlT3B0aW9uczogSU9wdGlvbnM7XG4gICAgcHVibGljIGludGVyYWN0aXZpdHk6IElDb250YWluZXJJbnRlcmFjdGl2aXR5O1xuICAgIHB1YmxpYyBvcHRpb25zOiBJT3B0aW9ucztcbiAgICBwdWJsaWMgcmV0aW5hOiBSZXRpbmE7XG4gICAgcHVibGljIGNhbnZhczogQ2FudmFzO1xuICAgIHB1YmxpYyBwYXJ0aWNsZXM6IFBhcnRpY2xlcztcbiAgICBwdWJsaWMgcG9seWdvbjogUG9seWdvbk1hc2s7XG4gICAgcHVibGljIGNoZWNrQW5pbWF0aW9uRnJhbWU/OiBudW1iZXI7XG4gICAgcHVibGljIGRyYXdBbmltYXRpb25GcmFtZT86IG51bWJlcjtcbiAgICBwdWJsaWMgYnViYmxlOiBJQnViYmxlO1xuICAgIHB1YmxpYyByZXB1bHNlOiBJUmVwdWxzZTtcbiAgICBwdWJsaWMgaW1hZ2VzOiBJSW1hZ2VbXTtcbiAgICBwdWJsaWMgbGFzdEZyYW1lVGltZTogbnVtYmVyO1xuICAgIHB1YmxpYyBwYWdlSGlkZGVuOiBib29sZWFuO1xuICAgIHB1YmxpYyBkcmF3ZXI6IERyYXdlcjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2V2ZW50TGlzdGVuZXJzOiBFdmVudExpc3RlbmVycztcblxuICAgIGNvbnN0cnVjdG9yKHRhZ0lkOiBzdHJpbmcsIHBhcmFtczogSU9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zb3VyY2VPcHRpb25zID0gcGFyYW1zO1xuICAgICAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSAwO1xuICAgICAgICB0aGlzLnBhZ2VIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXRpbmEgPSBuZXcgUmV0aW5hKHRoaXMpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXModGhpcywgdGFnSWQpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZXModGhpcyk7XG4gICAgICAgIHRoaXMucG9seWdvbiA9IG5ldyBQb2x5Z29uTWFzayh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSBuZXcgRHJhd2VyKHRoaXMpO1xuICAgICAgICB0aGlzLmludGVyYWN0aXZpdHkgPSB7XG4gICAgICAgICAgICBtb3VzZToge30sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XG4gICAgICAgIHRoaXMuYnViYmxlID0ge307XG4gICAgICAgIHRoaXMucmVwdWxzZSA9IHt9O1xuXG4gICAgICAgIC8qIHRzUGFydGljbGVzIHZhcmlhYmxlcyB3aXRoIGRlZmF1bHQgdmFsdWVzICovXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IGNvbnRhaW5lci5yZXNvbHZlPElPcHRpb25zPihcIklPcHRpb25zXCIpO1xuXG4gICAgICAgIC8qIHBhcmFtcyBzZXR0aW5ncyAqL1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubG9hZCh0aGlzLnNvdXJjZU9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogLS0tLS0tLS0tLSB0c1BhcnRpY2xlcyAtIHN0YXJ0IC0tLS0tLS0tLS0tLSAqL1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVycyA9IG5ldyBFdmVudExpc3RlbmVycyh0aGlzKTtcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMuYWRkRXZlbnRzTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgdGhpcy5zdGFydCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICBDYW5jZWwgYW5pbWF0aW9uIGlmIHBhZ2UgaXMgbm90IGluIGZvY3VzXG4gICAgICAgICAgICAgICAgQnJvd3NlcnMgd2lsbCBkbyB0aGlzIGFueXdheSwgaG93ZXZlciB0aGVcbiAgICAgICAgICAgICAgICBEZWx0YSB0aW1lIG11c3QgYWxzbyBiZSByZXNldCwgc28gY2FuY2VsaW5nXG4gICAgICAgICAgICAgICAgdGhlIG9sZCBmcmFtZSBhbmQgc3RhcnRpbmcgYSBuZXcgb25lIGlzIG5lY2Vzc2FyeVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsICgpID0+IHRoaXMuaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSgpLCBmYWxzZSk7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdEZyYW1lKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjayk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuY3VzdG9tUmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNhbmNlbEFuaW1hdGlvbihoYW5kbGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICB9XG5cbiAgICAvKiAtLS0tLS0tLS0tIHRzUGFydGljbGVzIGZ1bmN0aW9ucyAtIHZlbmRvcnMgLS0tLS0tLS0tLS0tICovXG5cbiAgICBwdWJsaWMgZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFydGljbGVzLm51bWJlci5kZW5zaXR5LmVuYWJsZSkge1xuICAgICAgICAgICAgLyogY2FsYyBhcmVhICovXG4gICAgICAgICAgICBsZXQgYXJlYSA9IHRoaXMuY2FudmFzLmVsZW1lbnQud2lkdGggKiB0aGlzLmNhbnZhcy5lbGVtZW50LmhlaWdodCAvIDEwMDA7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJldGluYS5pc1JldGluYSkge1xuICAgICAgICAgICAgICAgIGFyZWEgLz0gdGhpcy5jYW52YXMucHhSYXRpbyAqIDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdFBhcnRpY2xlc051bWJlciA9IHRoaXMub3B0aW9ucy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZGVuc2l0eSA9IHRoaXMub3B0aW9ucy5wYXJ0aWNsZXMubnVtYmVyLmRlbnNpdHkuYXJlYTtcblxuICAgICAgICAgICAgLyogY2FsYyBudW1iZXIgb2YgcGFydGljbGVzIGJhc2VkIG9uIGRlbnNpdHkgYXJlYSAqL1xuICAgICAgICAgICAgY29uc3QgcGFydGljbGVzTnVtYmVyID0gYXJlYSAqIG9wdFBhcnRpY2xlc051bWJlciAvIGRlbnNpdHk7XG5cbiAgICAgICAgICAgIC8qIGFkZCBvciByZW1vdmUgWCBwYXJ0aWNsZXMgKi9cbiAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5hcnJheS5sZW5ndGggLSBwYXJ0aWNsZXNOdW1iZXI7XG5cbiAgICAgICAgICAgIGlmIChtaXNzaW5nUGFydGljbGVzIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFydGljbGVzLnB1c2goTWF0aC5hYnMobWlzc2luZ1BhcnRpY2xlcykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5yZW1vdmUobWlzc2luZ1BhcnRpY2xlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhd0FuaW1hdGlvbkZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhd0FuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmV0aW5hLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuY2FudmFzLmVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICAgICAgY29uc3QgaWR4ID0gTG9hZGVyLmRvbSgpLmluZGV4T2YodGhpcyk7XG5cbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICBMb2FkZXIuZG9tKCkuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZXhwb3J0SW1nKCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cub3Blbih0aGlzLmNhbnZhcy5lbGVtZW50LnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSwgXCJfYmxhbmtcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGxvYWRJbWcoaW1hZ2U6IElJbWFnZSwgb3B0aW9uc0ltYWdlOiBJbWFnZVNoYXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGltYWdlLmVycm9yID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKG9wdGlvbnNJbWFnZS5zcmMpIHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGltYWdlLm9iaiA9IGltZztcblxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tCZWZvcmVEcmF3KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW1nLnNyYyA9IG9wdGlvbnNJbWFnZS5zcmM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdHNQYXJ0aWNsZXMgLSBObyBpbWFnZS5zcmNcIik7XG5cbiAgICAgICAgICAgIGltYWdlLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyByZWZyZXNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICAvKiBpbml0IGFsbCAqL1xuICAgICAgICBpZiAodGhpcy5jaGVja0FuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgICAgICBDb250YWluZXIuY2FuY2VsQW5pbWF0aW9uKHRoaXMuY2hlY2tBbmltYXRpb25GcmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kcmF3QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgICAgIENvbnRhaW5lci5jYW5jZWxBbmltYXRpb24odGhpcy5kcmF3QW5pbWF0aW9uRnJhbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yZXRpbmEucmVzZXQoKTtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgICAgICBkZWxldGUgdGhpcy5wYXJ0aWNsZXMubGluZUxpbmtlZENvbG9yO1xuXG4gICAgICAgIC8qIHJlc3RhcnQgKi9cbiAgICAgICAgYXdhaXQgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgLyogSWYgaXMgc2V0IHRoZSB1cmwgb2Ygc3ZnIGVsZW1lbnQsIGxvYWQgaXQgYW5kIHBhcnNlIGludG8gcmF3IHBvbHlnb24gZGF0YSxcbiAgICAgICAgICogd29ya3Mgb25seSB3aXRoIHNpbmdsZSBwYXRoIFNWR1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb2x5Z29uLnVybCkge1xuICAgICAgICAgICAgdGhpcy5wb2x5Z29uLnJhdyA9IGF3YWl0IHRoaXMucG9seWdvbi5wYXJzZVN2Z1BhdGhUb1BvbHlnb24odGhpcy5vcHRpb25zLnBvbHlnb24udXJsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGFzdEZyYW1lVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFydGljbGVzLnNoYXBlLnR5cGUgPT09IFNoYXBlVHlwZS5pbWFnZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2UgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uc0ltYWdlIG9mIHRoaXMub3B0aW9ucy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gb3B0aW9uc0ltYWdlLnNyYztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2U6IElJbWFnZSA9IHtlcnJvcjogZmFsc2V9O1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnR5cGUgPSBzcmMuc3Vic3RyKHNyYy5sZW5ndGggLSAzKTtcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRJbWcoaW1hZ2UsIG9wdGlvbnNJbWFnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChpbWFnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zSW1hZ2UgPSB0aGlzLm9wdGlvbnMucGFydGljbGVzLnNoYXBlLmltYWdlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IG9wdGlvbnNJbWFnZS5zcmM7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2U6IElJbWFnZSA9IHtlcnJvcjogZmFsc2V9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2UudHlwZSA9IHNyYy5zdWJzdHIoc3JjLmxlbmd0aCAtIDMpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkSW1nKGltYWdlLCBvcHRpb25zSW1hZ2UpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChpbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQmVmb3JlRHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgICAgICAvKiBpbml0IGNhbnZhcyArIHBhcnRpY2xlcyAqL1xuICAgICAgICB0aGlzLnJldGluYS5pbml0KCk7XG4gICAgICAgIHRoaXMuY2FudmFzLmluaXQoKTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKCk6IHZvaWQge1xuICAgICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VIaWRkZW4gPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kcmF3QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBDb250YWluZXIuY2FuY2VsQW5pbWF0aW9uKHRoaXMuZHJhd0FuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFnZUhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdlci5kcmF3KDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0JlZm9yZURyYXcoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFydGljbGVzLnNoYXBlLnR5cGUgPT09IFNoYXBlVHlwZS5pbWFnZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tBbmltYXRpb25GcmFtZSkge1xuICAgICAgICAgICAgICAgIENvbnRhaW5lci5jYW5jZWxBbmltYXRpb24odGhpcy5jaGVja0FuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VzLmV2ZXJ5KChpbWcpID0+IGltZy5lcnJvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5kcmF3ZXIuZHJhdygwKTtcbiAgICB9XG59XG4iXX0=