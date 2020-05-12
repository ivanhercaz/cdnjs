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

var _Utils = require("./Utils/Utils");

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
      _Utils.Utils.deepExtend(this.options, params);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL0NvbnRhaW5lci50cyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJkcmF3QW5pbWF0aW9uRnJhbWUiLCJ2YWx1ZSIsImNoZWNrQW5pbWF0aW9uRnJhbWUiLCJ0YWdJZCIsInBhcmFtcyIsImludGVyYWN0aXZpdHkiLCJvcHRpb25zIiwicmV0aW5hIiwiY2FudmFzIiwicGFydGljbGVzIiwicG9seWdvbiIsImJ1YmJsZSIsInJlcHVsc2UiLCJpbWFnZXMiLCJsYXN0RnJhbWVUaW1lIiwicGFnZUhpZGRlbiIsImRyYXdlciIsIl9ldmVudExpc3RlbmVycyIsIlJldGluYSIsIkNhbnZhcyIsIlBhcnRpY2xlcyIsIlBvbHlnb25NYXNrIiwiRHJhd2VyIiwibW91c2UiLCJjb250YWluZXIiLCJyZXNvbHZlIiwiVXRpbHMiLCJkZWVwRXh0ZW5kIiwiRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudHNMaXN0ZW5lcnMiLCJzdGFydCIsInRoZW4iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlIiwiZXJyb3IiLCJudW1iZXIiLCJkZW5zaXR5IiwiZW5hYmxlIiwiYXJlYSIsImVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImlzUmV0aW5hIiwicHhSYXRpbyIsIm9wdFBhcnRpY2xlc051bWJlciIsInBhcnRpY2xlc051bWJlciIsIm1pc3NpbmdQYXJ0aWNsZXMiLCJhcnJheSIsImxlbmd0aCIsInB1c2giLCJNYXRoIiwiYWJzIiwicmVtb3ZlIiwidW5kZWZpbmVkIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXNldCIsImlkeCIsIkxvYWRlciIsImRvbSIsImluZGV4T2YiLCJzcGxpY2UiLCJ3aW5kb3ciLCJvcGVuIiwidG9EYXRhVVJMIiwiaW1hZ2UiLCJvcHRpb25zSW1hZ2UiLCJzcmMiLCJpbWciLCJJbWFnZSIsIm9iaiIsImNoZWNrQmVmb3JlRHJhdyIsImNvbnNvbGUiLCJjYW5jZWxBbmltYXRpb24iLCJjbGVhciIsImxpbmVMaW5rZWRDb2xvciIsInVybCIsInBhcnNlU3ZnUGF0aFRvUG9seWdvbiIsInJhdyIsInBlcmZvcm1hbmNlIiwibm93Iiwic2hhcGUiLCJ0eXBlIiwiU2hhcGVUeXBlIiwiQXJyYXkiLCJzdWJzdHIiLCJsb2FkSW1nIiwiaW5pdCIsImRlbnNpdHlBdXRvUGFydGljbGVzIiwiaGlkZGVuIiwiZHJhdyIsImV2ZXJ5IiwiY2FsbGJhY2siLCJjdXN0b21SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoYW5kbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUtBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUVBOzs7SUFHYUEsUzs7OztBQUNUOzs7d0JBRytDO0FBQzNDLGFBQU8sS0FBS0Msa0JBQVo7QUFDSDtBQUVEOzs7OztzQkFJeUJDLEssRUFBMkI7QUFDaEQsV0FBS0Qsa0JBQUwsR0FBMEJDLEtBQTFCO0FBQ0g7QUFFRDs7Ozs7O3dCQUdnRDtBQUM1QyxhQUFPLEtBQUtDLG1CQUFaO0FBQ0g7QUFFRDs7Ozs7c0JBSTBCRCxLLEVBQTJCO0FBQ2pELFdBQUtDLG1CQUFMLEdBQTJCRCxLQUEzQjtBQUNIOzs7QUFtQkQscUJBQVlFLEtBQVosRUFBMkJDLE1BQTNCLEVBQTZDO0FBQUE7O0FBQUE7QUFBQSxTQWpCdENDLGFBaUJzQztBQUFBLFNBaEJ0Q0MsT0FnQnNDO0FBQUEsU0FmdENDLE1BZXNDO0FBQUEsU0FkdENDLE1BY3NDO0FBQUEsU0FidENDLFNBYXNDO0FBQUEsU0FadENDLE9BWXNDO0FBQUEsU0FYdENSLG1CQVdzQztBQUFBLFNBVnRDRixrQkFVc0M7QUFBQSxTQVR0Q1csTUFTc0M7QUFBQSxTQVJ0Q0MsT0FRc0M7QUFBQSxTQVB0Q0MsTUFPc0M7QUFBQSxTQU50Q0MsYUFNc0M7QUFBQSxTQUx0Q0MsVUFLc0M7QUFBQSxTQUp0Q0MsTUFJc0M7QUFBQSxTQUY1QkMsZUFFNEI7QUFD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WTBFLElBQVosQ0FBaUIsQ0FBakI7QUFDSDtBQUNKOzs7c0NBRStCO0FBQzVCLFVBQUksS0FBS3BGLE9BQUwsQ0FBYUcsU0FBYixDQUF1QndFLEtBQXZCLENBQTZCQyxJQUE3QixLQUFzQ0MscUJBQVVsQixLQUFwRCxFQUEyRDtBQUN2RCxZQUFJLEtBQUsvRCxtQkFBVCxFQUE4QjtBQUMxQkgsVUFBQUEsU0FBUyxDQUFDMEUsZUFBVixDQUEwQixLQUFLdkUsbUJBQS9CO0FBQ0g7O0FBRUQsWUFBSSxLQUFLVyxNQUFMLENBQVk4RSxLQUFaLENBQWtCLFVBQUN2QixHQUFEO0FBQUEsaUJBQVNBLEdBQUcsQ0FBQ2pDLEtBQWI7QUFBQSxTQUFsQixDQUFKLEVBQTJDO0FBQ3ZDO0FBQ0g7QUFDSjs7QUFFRCxXQUFLb0QsSUFBTDtBQUNBLFdBQUt2RSxNQUFMLENBQVkwRSxJQUFaLENBQWlCLENBQWpCO0FBQ0g7OztpQ0F6SzBCRSxRLEVBQXdDO0FBQy9ELGFBQU85QixNQUFNLENBQUMrQiwyQkFBUCxDQUFtQ0QsUUFBbkMsQ0FBUDtBQUNIOzs7b0NBRTZCRSxNLEVBQXNCO0FBQ2hEaEMsTUFBQUEsTUFBTSxDQUFDUCxvQkFBUCxDQUE0QnVDLE1BQTVCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHtDYW52YXN9IGZyb20gXCIuL0NhbnZhc1wiO1xuaW1wb3J0IHtFdmVudExpc3RlbmVyc30gZnJvbSBcIi4vVXRpbHMvRXZlbnRMaXN0ZW5lcnNcIjtcbmltcG9ydCB7SVJlcHVsc2V9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lSZXB1bHNlXCI7XG5pbXBvcnQge0lCdWJibGV9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lCdWJibGVcIjtcbmltcG9ydCB7SUltYWdlfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JSW1hZ2VcIjtcbmltcG9ydCB7SUNvbnRhaW5lckludGVyYWN0aXZpdHl9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb250YWluZXJJbnRlcmFjdGl2aXR5XCI7XG5pbXBvcnQge0xvYWRlcn0gZnJvbSBcIi4vTG9hZGVyXCI7XG5pbXBvcnQge1BhcnRpY2xlc30gZnJvbSBcIi4vUGFydGljbGVzXCI7XG5pbXBvcnQge1JldGluYX0gZnJvbSBcIi4vUmV0aW5hXCI7XG5pbXBvcnQge1NoYXBlVHlwZX0gZnJvbSBcIi4uL0VudW1zL1NoYXBlVHlwZVwiO1xuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4vVXRpbHMvVXRpbHNcIjtcbmltcG9ydCB7UG9seWdvbk1hc2t9IGZyb20gXCIuL1BvbHlnb25NYXNrXCI7XG5pbXBvcnQge0ltYWdlU2hhcGV9IGZyb20gXCIuL09wdGlvbnMvUGFydGljbGVzL1NoYXBlL0ltYWdlU2hhcGVcIjtcbmltcG9ydCB7SU9wdGlvbnN9IGZyb20gXCIuLi9JbnRlcmZhY2VzL09wdGlvbnMvSU9wdGlvbnNcIjtcbmltcG9ydCB7Y29udGFpbmVyfSBmcm9tIFwidHN5cmluZ2VcIjtcbmltcG9ydCB7RHJhd2VyfSBmcm9tIFwiLi9EcmF3ZXJcIjtcblxuLyoqXG4gKiBUaGUgb2JqZWN0IGxvYWRlZCBpbnRvIGFuIEhUTUwgZWxlbWVudCwgaXQnbGwgY29udGFpbiBvcHRpb25zIGxvYWRlZCBhbmQgYWxsIGRhdGEgdG8gbGV0IGV2ZXJ5dGhpbmcgd29ya2luZ1xuICovXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyIHtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgZHJhd0FuaW1hdGlvbkZyYW1lXG4gICAgICovXG4gICAgcHVibGljIGdldCBkcmF3QW5pbUZyYW1lKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyYXdBbmltYXRpb25GcmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgZHJhd0FuaW1hdGlvbkZyYW1lXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBkcmF3QW5pbUZyYW1lKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5kcmF3QW5pbWF0aW9uRnJhbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgY2hlY2tBbmltYXRpb25GcmFtZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgY2hlY2tBbmltRnJhbWUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tBbmltYXRpb25GcmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgY2hlY2tBbmltYXRpb25GcmFtZVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgY2hlY2tBbmltRnJhbWUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmNoZWNrQW5pbWF0aW9uRnJhbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW50ZXJhY3Rpdml0eTogSUNvbnRhaW5lckludGVyYWN0aXZpdHk7XG4gICAgcHVibGljIG9wdGlvbnM6IElPcHRpb25zO1xuICAgIHB1YmxpYyByZXRpbmE6IFJldGluYTtcbiAgICBwdWJsaWMgY2FudmFzOiBDYW52YXM7XG4gICAgcHVibGljIHBhcnRpY2xlczogUGFydGljbGVzO1xuICAgIHB1YmxpYyBwb2x5Z29uOiBQb2x5Z29uTWFzaztcbiAgICBwdWJsaWMgY2hlY2tBbmltYXRpb25GcmFtZT86IG51bWJlcjtcbiAgICBwdWJsaWMgZHJhd0FuaW1hdGlvbkZyYW1lPzogbnVtYmVyO1xuICAgIHB1YmxpYyBidWJibGU6IElCdWJibGU7XG4gICAgcHVibGljIHJlcHVsc2U6IElSZXB1bHNlO1xuICAgIHB1YmxpYyBpbWFnZXM6IElJbWFnZVtdO1xuICAgIHB1YmxpYyBsYXN0RnJhbWVUaW1lOiBudW1iZXI7XG4gICAgcHVibGljIHBhZ2VIaWRkZW46IGJvb2xlYW47XG4gICAgcHVibGljIGRyYXdlcjogRHJhd2VyO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBfZXZlbnRMaXN0ZW5lcnM6IEV2ZW50TGlzdGVuZXJzO1xuXG4gICAgY29uc3RydWN0b3IodGFnSWQ6IHN0cmluZywgcGFyYW1zOiBJT3B0aW9ucykge1xuICAgICAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSAwO1xuICAgICAgICB0aGlzLnBhZ2VIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXRpbmEgPSBuZXcgUmV0aW5hKHRoaXMpO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXModGhpcywgdGFnSWQpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZXModGhpcyk7XG4gICAgICAgIHRoaXMucG9seWdvbiA9IG5ldyBQb2x5Z29uTWFzayh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSBuZXcgRHJhd2VyKHRoaXMpO1xuICAgICAgICB0aGlzLmludGVyYWN0aXZpdHkgPSB7XG4gICAgICAgICAgICBtb3VzZToge30sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XG4gICAgICAgIHRoaXMuYnViYmxlID0ge307XG4gICAgICAgIHRoaXMucmVwdWxzZSA9IHt9O1xuXG4gICAgICAgIC8qIHRzUGFydGljbGVzIHZhcmlhYmxlcyB3aXRoIGRlZmF1bHQgdmFsdWVzICovXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IGNvbnRhaW5lci5yZXNvbHZlPElPcHRpb25zPihcIklPcHRpb25zXCIpO1xuXG4gICAgICAgIC8qIHBhcmFtcyBzZXR0aW5ncyAqL1xuICAgICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgICAgICBVdGlscy5kZWVwRXh0ZW5kKHRoaXMub3B0aW9ucywgcGFyYW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIC0tLS0tLS0tLS0gdHNQYXJ0aWNsZXMgLSBzdGFydCAtLS0tLS0tLS0tLS0gKi9cbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMgPSBuZXcgRXZlbnRMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzLmFkZEV2ZW50c0xpc3RlbmVycygpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgQ2FuY2VsIGFuaW1hdGlvbiBpZiBwYWdlIGlzIG5vdCBpbiBmb2N1c1xuICAgICAgICAgICAgICAgIEJyb3dzZXJzIHdpbGwgZG8gdGhpcyBhbnl3YXksIGhvd2V2ZXIgdGhlXG4gICAgICAgICAgICAgICAgRGVsdGEgdGltZSBtdXN0IGFsc28gYmUgcmVzZXQsIHNvIGNhbmNlbGluZ1xuICAgICAgICAgICAgICAgIHRoZSBvbGQgZnJhbWUgYW5kIHN0YXJ0aW5nIGEgbmV3IG9uZSBpcyBuZWNlc3NhcnlcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCAoKSA9PiB0aGlzLmhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSwgZmFsc2UpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlcXVlc3RGcmFtZShjYWxsYmFjazogRnJhbWVSZXF1ZXN0Q2FsbGJhY2spOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gd2luZG93LmN1c3RvbVJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjYW5jZWxBbmltYXRpb24oaGFuZGxlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZSk7XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLSB0c1BhcnRpY2xlcyBmdW5jdGlvbnMgLSB2ZW5kb3JzIC0tLS0tLS0tLS0tLSAqL1xuXG4gICAgcHVibGljIGRlbnNpdHlBdXRvUGFydGljbGVzKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS5lbmFibGUpIHtcbiAgICAgICAgICAgIC8qIGNhbGMgYXJlYSAqL1xuICAgICAgICAgICAgbGV0IGFyZWEgPSB0aGlzLmNhbnZhcy5lbGVtZW50LndpZHRoICogdGhpcy5jYW52YXMuZWxlbWVudC5oZWlnaHQgLyAxMDAwO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5yZXRpbmEuaXNSZXRpbmEpIHtcbiAgICAgICAgICAgICAgICBhcmVhIC89IHRoaXMuY2FudmFzLnB4UmF0aW8gKiAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBvcHRQYXJ0aWNsZXNOdW1iZXIgPSB0aGlzLm9wdGlvbnMucGFydGljbGVzLm51bWJlci52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGRlbnNpdHkgPSB0aGlzLm9wdGlvbnMucGFydGljbGVzLm51bWJlci5kZW5zaXR5LmFyZWE7XG5cbiAgICAgICAgICAgIC8qIGNhbGMgbnVtYmVyIG9mIHBhcnRpY2xlcyBiYXNlZCBvbiBkZW5zaXR5IGFyZWEgKi9cbiAgICAgICAgICAgIGNvbnN0IHBhcnRpY2xlc051bWJlciA9IGFyZWEgKiBvcHRQYXJ0aWNsZXNOdW1iZXIgLyBkZW5zaXR5O1xuXG4gICAgICAgICAgICAvKiBhZGQgb3IgcmVtb3ZlIFggcGFydGljbGVzICovXG4gICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoIC0gcGFydGljbGVzTnVtYmVyO1xuXG4gICAgICAgICAgICBpZiAobWlzc2luZ1BhcnRpY2xlcyA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKE1hdGguYWJzKG1pc3NpbmdQYXJ0aWNsZXMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucmVtb3ZlKG1pc3NpbmdQYXJ0aWNsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRyYXdBbmltYXRpb25GcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmRyYXdBbmltYXRpb25GcmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJldGluYS5yZXNldCgpO1xuICAgICAgICB0aGlzLmNhbnZhcy5lbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgICAgIGNvbnN0IGlkeCA9IExvYWRlci5kb20oKS5pbmRleE9mKHRoaXMpO1xuXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgTG9hZGVyLmRvbSgpLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGV4cG9ydEltZygpOiB2b2lkIHtcbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5jYW52YXMuZWxlbWVudC50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIiksIFwiX2JsYW5rXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBsb2FkSW1nKGltYWdlOiBJSW1hZ2UsIG9wdGlvbnNJbWFnZTogSW1hZ2VTaGFwZSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpbWFnZS5lcnJvciA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChvcHRpb25zSW1hZ2Uuc3JjKSB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpbWFnZS5vYmogPSBpbWc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQmVmb3JlRHJhdygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGltZy5zcmMgPSBvcHRpb25zSW1hZ2Uuc3JjO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHRzUGFydGljbGVzIC0gTm8gaW1hZ2Uuc3JjXCIpO1xuXG4gICAgICAgICAgICBpbWFnZS5lcnJvciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgcmVmcmVzaCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgLyogaW5pdCBhbGwgKi9cbiAgICAgICAgaWYgKHRoaXMuY2hlY2tBbmltYXRpb25GcmFtZSkge1xuICAgICAgICAgICAgQ29udGFpbmVyLmNhbmNlbEFuaW1hdGlvbih0aGlzLmNoZWNrQW5pbWF0aW9uRnJhbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhd0FuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgICAgICBDb250YWluZXIuY2FuY2VsQW5pbWF0aW9uKHRoaXMuZHJhd0FuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XG4gICAgICAgIHRoaXMucGFydGljbGVzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmV0aW5hLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICAgICAgZGVsZXRlIHRoaXMucGFydGljbGVzLmxpbmVMaW5rZWRDb2xvcjtcblxuICAgICAgICAvKiByZXN0YXJ0ICovXG4gICAgICAgIGF3YWl0IHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIC8qIElmIGlzIHNldCB0aGUgdXJsIG9mIHN2ZyBlbGVtZW50LCBsb2FkIGl0IGFuZCBwYXJzZSBpbnRvIHJhdyBwb2x5Z29uIGRhdGEsXG4gICAgICAgICAqIHdvcmtzIG9ubHkgd2l0aCBzaW5nbGUgcGF0aCBTVkdcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9seWdvbi51cmwpIHtcbiAgICAgICAgICAgIHRoaXMucG9seWdvbi5yYXcgPSBhd2FpdCB0aGlzLnBvbHlnb24ucGFyc2VTdmdQYXRoVG9Qb2x5Z29uKHRoaXMub3B0aW9ucy5wb2x5Z29uLnVybCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBhcnRpY2xlcy5zaGFwZS50eXBlID09PSBTaGFwZVR5cGUuaW1hZ2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFydGljbGVzLnNoYXBlLmltYWdlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbnNJbWFnZSBvZiB0aGlzLm9wdGlvbnMucGFydGljbGVzLnNoYXBlLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IG9wdGlvbnNJbWFnZS5zcmM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlOiBJSW1hZ2UgPSB7ZXJyb3I6IGZhbHNlfTtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZS50eXBlID0gc3JjLnN1YnN0cihzcmMubGVuZ3RoIC0gMyk7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkSW1nKGltYWdlLCBvcHRpb25zSW1hZ2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc0ltYWdlID0gdGhpcy5vcHRpb25zLnBhcnRpY2xlcy5zaGFwZS5pbWFnZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSBvcHRpb25zSW1hZ2Uuc3JjO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlOiBJSW1hZ2UgPSB7ZXJyb3I6IGZhbHNlfTtcblxuICAgICAgICAgICAgICAgIGltYWdlLnR5cGUgPSBzcmMuc3Vic3RyKHNyYy5sZW5ndGggLSAzKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZEltZyhpbWFnZSwgb3B0aW9uc0ltYWdlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGVja0JlZm9yZURyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLyogaW5pdCBjYW52YXMgKyBwYXJ0aWNsZXMgKi9cbiAgICAgICAgdGhpcy5yZXRpbmEuaW5pdCgpO1xuICAgICAgICB0aGlzLmNhbnZhcy5pbml0KCk7XG4gICAgICAgIHRoaXMucGFydGljbGVzLmluaXQoKTtcbiAgICAgICAgdGhpcy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmhpZGRlbikge1xuICAgICAgICAgICAgdGhpcy5wYWdlSGlkZGVuID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZHJhd0FuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgICAgICAgICAgQ29udGFpbmVyLmNhbmNlbEFuaW1hdGlvbih0aGlzLmRyYXdBbmltYXRpb25GcmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGFzdEZyYW1lVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy5kcmF3ZXIuZHJhdygwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tCZWZvcmVEcmF3KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBhcnRpY2xlcy5zaGFwZS50eXBlID09PSBTaGFwZVR5cGUuaW1hZ2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrQW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBDb250YWluZXIuY2FuY2VsQW5pbWF0aW9uKHRoaXMuY2hlY2tBbmltYXRpb25GcmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlcy5ldmVyeSgoaW1nKSA9PiBpbWcuZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMuZHJhd2VyLmRyYXcoMCk7XG4gICAgfVxufVxuIl19