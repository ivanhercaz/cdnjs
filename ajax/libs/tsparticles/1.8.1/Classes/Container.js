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
                if (!(this.options.particles.shape.type === _ShapeType.ShapeType.image)) {
                  _context3.next = 47;
                  break;
                }

                if (!(this.options.particles.shape.image instanceof Array)) {
                  _context3.next = 38;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 9;
                _iterator = this.options.particles.shape.image[Symbol.iterator]();

              case 11:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context3.next = 22;
                  break;
                }

                optionsImage = _step.value;
                src = optionsImage.src;
                image = {
                  error: false
                };
                image.type = src.substr(src.length - 3);
                _context3.next = 18;
                return this.loadImg(image, optionsImage);

              case 18:
                this.images.push(image);

              case 19:
                _iteratorNormalCompletion = true;
                _context3.next = 11;
                break;

              case 22:
                _context3.next = 28;
                break;

              case 24:
                _context3.prev = 24;
                _context3.t0 = _context3["catch"](9);
                _didIteratorError = true;
                _iteratorError = _context3.t0;

              case 28:
                _context3.prev = 28;
                _context3.prev = 29;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 31:
                _context3.prev = 31;

                if (!_didIteratorError) {
                  _context3.next = 34;
                  break;
                }

                throw _iteratorError;

              case 34:
                return _context3.finish(31);

              case 35:
                return _context3.finish(28);

              case 36:
                _context3.next = 45;
                break;

              case 38:
                _optionsImage = this.options.particles.shape.image;
                _src = _optionsImage.src;
                _image = {
                  error: false
                };
                _image.type = _src.substr(_src.length - 3);
                _context3.next = 44;
                return this.loadImg(_image, _optionsImage);

              case 44:
                this.images.push(_image);

              case 45:
                _context3.next = 48;
                break;

              case 47:
                this.checkBeforeDraw();

              case 48:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[9, 24, 28, 36], [29,, 31, 35]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL0NvbnRhaW5lci50cyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJkcmF3QW5pbWF0aW9uRnJhbWUiLCJ2YWx1ZSIsImNoZWNrQW5pbWF0aW9uRnJhbWUiLCJ0YWdJZCIsInBhcmFtcyIsImludGVyYWN0aXZpdHkiLCJvcHRpb25zIiwicmV0aW5hIiwiY2FudmFzIiwicGFydGljbGVzIiwicG9seWdvbiIsImJ1YmJsZSIsInJlcHVsc2UiLCJpbWFnZXMiLCJsYXN0RnJhbWVUaW1lIiwicGFnZUhpZGRlbiIsImRyYXdlciIsIl9ldmVudExpc3RlbmVycyIsIlJldGluYSIsIkNhbnZhcyIsIlBhcnRpY2xlcyIsIlBvbHlnb25NYXNrIiwiRHJhd2VyIiwibW91c2UiLCJjb250YWluZXIiLCJyZXNvbHZlIiwiVXRpbHMiLCJkZWVwRXh0ZW5kIiwiRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudHNMaXN0ZW5lcnMiLCJzdGFydCIsInRoZW4iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlIiwiZXJyb3IiLCJudW1iZXIiLCJkZW5zaXR5IiwiZW5hYmxlIiwiYXJlYSIsImVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImlzUmV0aW5hIiwicHhSYXRpbyIsIm9wdFBhcnRpY2xlc051bWJlciIsInBhcnRpY2xlc051bWJlciIsIm1pc3NpbmdQYXJ0aWNsZXMiLCJhcnJheSIsImxlbmd0aCIsInB1c2giLCJNYXRoIiwiYWJzIiwicmVtb3ZlIiwidW5kZWZpbmVkIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXNldCIsImlkeCIsIkxvYWRlciIsImRvbSIsImluZGV4T2YiLCJzcGxpY2UiLCJ3aW5kb3ciLCJvcGVuIiwidG9EYXRhVVJMIiwiaW1hZ2UiLCJvcHRpb25zSW1hZ2UiLCJzcmMiLCJpbWciLCJJbWFnZSIsIm9iaiIsImNoZWNrQmVmb3JlRHJhdyIsImNvbnNvbGUiLCJjYW5jZWxBbmltYXRpb24iLCJjbGVhciIsImxpbmVMaW5rZWRDb2xvciIsInVybCIsInBhcnNlU3ZnUGF0aFRvUG9seWdvbiIsInJhdyIsInNoYXBlIiwidHlwZSIsIlNoYXBlVHlwZSIsIkFycmF5Iiwic3Vic3RyIiwibG9hZEltZyIsImluaXQiLCJkZW5zaXR5QXV0b1BhcnRpY2xlcyIsImhpZGRlbiIsInBlcmZvcm1hbmNlIiwibm93IiwiZHJhdyIsImV2ZXJ5IiwiY2FsbGJhY2siLCJjdXN0b21SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoYW5kbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUtBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUVBOzs7SUFHYUEsUzs7OztBQUNUOzs7d0JBRytDO0FBQzNDLGFBQU8sS0FBS0Msa0JBQVo7QUFDSDtBQUVEOzs7OztzQkFJeUJDLEssRUFBMkI7QUFDaEQsV0FBS0Qsa0JBQUwsR0FBMEJDLEtBQTFCO0FBQ0g7QUFFRDs7Ozs7O3dCQUdnRDtBQUM1QyxhQUFPLEtBQUtDLG1CQUFaO0FBQ0g7QUFFRDs7Ozs7c0JBSTBCRCxLLEVBQTJCO0FBQ2pELFdBQUtDLG1CQUFMLEdBQTJCRCxLQUEzQjtBQUNIOzs7QUFtQkQscUJBQVlFLEtBQVosRUFBMkJDLE1BQTNCLEVBQTZDO0FBQUE7O0FBQUE7QUFBQSxTQWpCdENDLGFBaUJzQztBQUFBLFNBaEJ0Q0MsT0FnQnNDO0FBQUEsU0FmdENDLE1BZXNDO0FBQUEsU0FkdENDLE1BY3NDO0FBQUEsU0FidENDLFNBYXNDO0FBQUEsU0FadENDLE9BWXNDO0FBQUEsU0FYdENSLG1CQVdzQztBQUFBLFNBVnRDRixrQkFVc0M7QUFBQSxTQVR0Q1csTUFTc0M7QUFBQSxTQVJ0Q0MsT0FRc0M7QUFBQSxTQVB0Q0MsTUFPc0M7QUFBQSxTQU50Q0MsYUFNc0M7QUFBQSxTQUx0Q0MsVUFLc0M7QUFBQSxTQUp0Q0MsTUFJc0M7QUFBQSxTQUY1QkMsZUFFNEI7QUFD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cEYsT0FBTCxDQUFhRyxTQUFiLENBQXVCc0UsS0FBdkIsQ0FBNkJDLElBQTdCLEtBQXNDQyxxQkFBVWhCLEtBQXBELEVBQTJEO0FBQ3ZELFlBQUksS0FBSy9ELG1CQUFULEVBQThCO0FBQzFCSCxVQUFBQSxTQUFTLENBQUMwRSxlQUFWLENBQTBCLEtBQUt2RSxtQkFBL0I7QUFDSDs7QUFFRCxZQUFJLEtBQUtXLE1BQUwsQ0FBWThFLEtBQVosQ0FBa0IsVUFBQ3ZCLEdBQUQ7QUFBQSxpQkFBU0EsR0FBRyxDQUFDakMsS0FBYjtBQUFBLFNBQWxCLENBQUosRUFBMkM7QUFDdkM7QUFDSDtBQUNKOztBQUVELFdBQUtrRCxJQUFMO0FBQ0EsV0FBS3JFLE1BQUwsQ0FBWTBFLElBQVosQ0FBaUIsQ0FBakI7QUFDSDs7O2lDQXZLMEJFLFEsRUFBd0M7QUFDL0QsYUFBTzlCLE1BQU0sQ0FBQytCLDJCQUFQLENBQW1DRCxRQUFuQyxDQUFQO0FBQ0g7OztvQ0FFNkJFLE0sRUFBc0I7QUFDaERoQyxNQUFBQSxNQUFNLENBQUNQLG9CQUFQLENBQTRCdUMsTUFBNUI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQge0NhbnZhc30gZnJvbSBcIi4vQ2FudmFzXCI7XG5pbXBvcnQge0V2ZW50TGlzdGVuZXJzfSBmcm9tIFwiLi9VdGlscy9FdmVudExpc3RlbmVyc1wiO1xuaW1wb3J0IHtJUmVwdWxzZX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVJlcHVsc2VcIjtcbmltcG9ydCB7SUJ1YmJsZX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUJ1YmJsZVwiO1xuaW1wb3J0IHtJSW1hZ2V9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lJbWFnZVwiO1xuaW1wb3J0IHtJQ29udGFpbmVySW50ZXJhY3Rpdml0eX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbnRhaW5lckludGVyYWN0aXZpdHlcIjtcbmltcG9ydCB7TG9hZGVyfSBmcm9tIFwiLi9Mb2FkZXJcIjtcbmltcG9ydCB7UGFydGljbGVzfSBmcm9tIFwiLi9QYXJ0aWNsZXNcIjtcbmltcG9ydCB7UmV0aW5hfSBmcm9tIFwiLi9SZXRpbmFcIjtcbmltcG9ydCB7U2hhcGVUeXBlfSBmcm9tIFwiLi4vRW51bXMvU2hhcGVUeXBlXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi9VdGlscy9VdGlsc1wiO1xuaW1wb3J0IHtQb2x5Z29uTWFza30gZnJvbSBcIi4vUG9seWdvbk1hc2tcIjtcbmltcG9ydCB7SW1hZ2VTaGFwZX0gZnJvbSBcIi4vT3B0aW9ucy9QYXJ0aWNsZXMvU2hhcGUvSW1hZ2VTaGFwZVwiO1xuaW1wb3J0IHtJT3B0aW9uc30gZnJvbSBcIi4uL0ludGVyZmFjZXMvT3B0aW9ucy9JT3B0aW9uc1wiO1xuaW1wb3J0IHtjb250YWluZXJ9IGZyb20gXCJ0c3lyaW5nZVwiO1xuaW1wb3J0IHtEcmF3ZXJ9IGZyb20gXCIuL0RyYXdlclwiO1xuXG4vKipcbiAqIFRoZSBvYmplY3QgbG9hZGVkIGludG8gYW4gSFRNTCBlbGVtZW50LCBpdCdsbCBjb250YWluIG9wdGlvbnMgbG9hZGVkIGFuZCBhbGwgZGF0YSB0byBsZXQgZXZlcnl0aGluZyB3b3JraW5nXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250YWluZXIge1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBkcmF3QW5pbWF0aW9uRnJhbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGRyYXdBbmltRnJhbWUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhd0FuaW1hdGlvbkZyYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBkcmF3QW5pbWF0aW9uRnJhbWVcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGRyYXdBbmltRnJhbWUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmRyYXdBbmltYXRpb25GcmFtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBjaGVja0FuaW1hdGlvbkZyYW1lXG4gICAgICovXG4gICAgcHVibGljIGdldCBjaGVja0FuaW1GcmFtZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0FuaW1hdGlvbkZyYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBjaGVja0FuaW1hdGlvbkZyYW1lXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBjaGVja0FuaW1GcmFtZSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tBbmltYXRpb25GcmFtZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnRlcmFjdGl2aXR5OiBJQ29udGFpbmVySW50ZXJhY3Rpdml0eTtcbiAgICBwdWJsaWMgb3B0aW9uczogSU9wdGlvbnM7XG4gICAgcHVibGljIHJldGluYTogUmV0aW5hO1xuICAgIHB1YmxpYyBjYW52YXM6IENhbnZhcztcbiAgICBwdWJsaWMgcGFydGljbGVzOiBQYXJ0aWNsZXM7XG4gICAgcHVibGljIHBvbHlnb246IFBvbHlnb25NYXNrO1xuICAgIHB1YmxpYyBjaGVja0FuaW1hdGlvbkZyYW1lPzogbnVtYmVyO1xuICAgIHB1YmxpYyBkcmF3QW5pbWF0aW9uRnJhbWU/OiBudW1iZXI7XG4gICAgcHVibGljIGJ1YmJsZTogSUJ1YmJsZTtcbiAgICBwdWJsaWMgcmVwdWxzZTogSVJlcHVsc2U7XG4gICAgcHVibGljIGltYWdlczogSUltYWdlW107XG4gICAgcHVibGljIGxhc3RGcmFtZVRpbWU6IG51bWJlcjtcbiAgICBwdWJsaWMgcGFnZUhpZGRlbjogYm9vbGVhbjtcbiAgICBwdWJsaWMgZHJhd2VyOiBEcmF3ZXI7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ldmVudExpc3RlbmVyczogRXZlbnRMaXN0ZW5lcnM7XG5cbiAgICBjb25zdHJ1Y3Rvcih0YWdJZDogc3RyaW5nLCBwYXJhbXM6IElPcHRpb25zKSB7XG4gICAgICAgIHRoaXMubGFzdEZyYW1lVGltZSA9IDA7XG4gICAgICAgIHRoaXMucGFnZUhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJldGluYSA9IG5ldyBSZXRpbmEodGhpcyk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh0aGlzLCB0YWdJZCk7XG4gICAgICAgIHRoaXMucGFydGljbGVzID0gbmV3IFBhcnRpY2xlcyh0aGlzKTtcbiAgICAgICAgdGhpcy5wb2x5Z29uID0gbmV3IFBvbHlnb25NYXNrKHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdlciA9IG5ldyBEcmF3ZXIodGhpcyk7XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpdml0eSA9IHtcbiAgICAgICAgICAgIG1vdXNlOiB7fSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5idWJibGUgPSB7fTtcbiAgICAgICAgdGhpcy5yZXB1bHNlID0ge307XG5cbiAgICAgICAgLyogdHNQYXJ0aWNsZXMgdmFyaWFibGVzIHdpdGggZGVmYXVsdCB2YWx1ZXMgKi9cbiAgICAgICAgdGhpcy5vcHRpb25zID0gY29udGFpbmVyLnJlc29sdmU8SU9wdGlvbnM+KFwiSU9wdGlvbnNcIik7XG5cbiAgICAgICAgLyogcGFyYW1zIHNldHRpbmdzICovXG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgIFV0aWxzLmRlZXBFeHRlbmQodGhpcy5vcHRpb25zLCBwYXJhbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogLS0tLS0tLS0tLSB0c1BhcnRpY2xlcyAtIHN0YXJ0IC0tLS0tLS0tLS0tLSAqL1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVycyA9IG5ldyBFdmVudExpc3RlbmVycyh0aGlzKTtcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMuYWRkRXZlbnRzTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgdGhpcy5zdGFydCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICBDYW5jZWwgYW5pbWF0aW9uIGlmIHBhZ2UgaXMgbm90IGluIGZvY3VzXG4gICAgICAgICAgICAgICAgQnJvd3NlcnMgd2lsbCBkbyB0aGlzIGFueXdheSwgaG93ZXZlciB0aGVcbiAgICAgICAgICAgICAgICBEZWx0YSB0aW1lIG11c3QgYWxzbyBiZSByZXNldCwgc28gY2FuY2VsaW5nXG4gICAgICAgICAgICAgICAgdGhlIG9sZCBmcmFtZSBhbmQgc3RhcnRpbmcgYSBuZXcgb25lIGlzIG5lY2Vzc2FyeVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsICgpID0+IHRoaXMuaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSgpLCBmYWxzZSk7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdEZyYW1lKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjayk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuY3VzdG9tUmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNhbmNlbEFuaW1hdGlvbihoYW5kbGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICB9XG5cbiAgICAvKiAtLS0tLS0tLS0tIHRzUGFydGljbGVzIGZ1bmN0aW9ucyAtIHZlbmRvcnMgLS0tLS0tLS0tLS0tICovXG5cbiAgICBwdWJsaWMgZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFydGljbGVzLm51bWJlci5kZW5zaXR5LmVuYWJsZSkge1xuICAgICAgICAgICAgLyogY2FsYyBhcmVhICovXG4gICAgICAgICAgICBsZXQgYXJlYSA9IHRoaXMuY2FudmFzLmVsZW1lbnQud2lkdGggKiB0aGlzLmNhbnZhcy5lbGVtZW50LmhlaWdodCAvIDEwMDA7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJldGluYS5pc1JldGluYSkge1xuICAgICAgICAgICAgICAgIGFyZWEgLz0gdGhpcy5jYW52YXMucHhSYXRpbyAqIDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG9wdFBhcnRpY2xlc051bWJlciA9IHRoaXMub3B0aW9ucy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZGVuc2l0eSA9IHRoaXMub3B0aW9ucy5wYXJ0aWNsZXMubnVtYmVyLmRlbnNpdHkuYXJlYTtcblxuICAgICAgICAgICAgLyogY2FsYyBudW1iZXIgb2YgcGFydGljbGVzIGJhc2VkIG9uIGRlbnNpdHkgYXJlYSAqL1xuICAgICAgICAgICAgY29uc3QgcGFydGljbGVzTnVtYmVyID0gYXJlYSAqIG9wdFBhcnRpY2xlc051bWJlciAvIGRlbnNpdHk7XG5cbiAgICAgICAgICAgIC8qIGFkZCBvciByZW1vdmUgWCBwYXJ0aWNsZXMgKi9cbiAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJ0aWNsZXMgPSB0aGlzLnBhcnRpY2xlcy5hcnJheS5sZW5ndGggLSBwYXJ0aWNsZXNOdW1iZXI7XG5cbiAgICAgICAgICAgIGlmIChtaXNzaW5nUGFydGljbGVzIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFydGljbGVzLnB1c2goTWF0aC5hYnMobWlzc2luZ1BhcnRpY2xlcykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5yZW1vdmUobWlzc2luZ1BhcnRpY2xlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhd0FuaW1hdGlvbkZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhd0FuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmV0aW5hLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuY2FudmFzLmVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICAgICAgY29uc3QgaWR4ID0gTG9hZGVyLmRvbSgpLmluZGV4T2YodGhpcyk7XG5cbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICBMb2FkZXIuZG9tKCkuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZXhwb3J0SW1nKCk6IHZvaWQge1xuICAgICAgICB3aW5kb3cub3Blbih0aGlzLmNhbnZhcy5lbGVtZW50LnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSwgXCJfYmxhbmtcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGxvYWRJbWcoaW1hZ2U6IElJbWFnZSwgb3B0aW9uc0ltYWdlOiBJbWFnZVNoYXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGltYWdlLmVycm9yID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKG9wdGlvbnNJbWFnZS5zcmMpIHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGltYWdlLm9iaiA9IGltZztcblxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tCZWZvcmVEcmF3KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW1nLnNyYyA9IG9wdGlvbnNJbWFnZS5zcmM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdHNQYXJ0aWNsZXMgLSBObyBpbWFnZS5zcmNcIik7XG5cbiAgICAgICAgICAgIGltYWdlLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyByZWZyZXNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICAvKiBpbml0IGFsbCAqL1xuICAgICAgICBpZiAodGhpcy5jaGVja0FuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgICAgICBDb250YWluZXIuY2FuY2VsQW5pbWF0aW9uKHRoaXMuY2hlY2tBbmltYXRpb25GcmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kcmF3QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgICAgIENvbnRhaW5lci5jYW5jZWxBbmltYXRpb24odGhpcy5kcmF3QW5pbWF0aW9uRnJhbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yZXRpbmEucmVzZXQoKTtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgICAgICBkZWxldGUgdGhpcy5wYXJ0aWNsZXMubGluZUxpbmtlZENvbG9yO1xuXG4gICAgICAgIC8qIHJlc3RhcnQgKi9cbiAgICAgICAgYXdhaXQgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgLyogSWYgaXMgc2V0IHRoZSB1cmwgb2Ygc3ZnIGVsZW1lbnQsIGxvYWQgaXQgYW5kIHBhcnNlIGludG8gcmF3IHBvbHlnb24gZGF0YSxcbiAgICAgICAgICogd29ya3Mgb25seSB3aXRoIHNpbmdsZSBwYXRoIFNWR1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb2x5Z29uLnVybCkge1xuICAgICAgICAgICAgdGhpcy5wb2x5Z29uLnJhdyA9IGF3YWl0IHRoaXMucG9seWdvbi5wYXJzZVN2Z1BhdGhUb1BvbHlnb24odGhpcy5vcHRpb25zLnBvbHlnb24udXJsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFydGljbGVzLnNoYXBlLnR5cGUgPT09IFNoYXBlVHlwZS5pbWFnZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2UgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uc0ltYWdlIG9mIHRoaXMub3B0aW9ucy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gb3B0aW9uc0ltYWdlLnNyYztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2U6IElJbWFnZSA9IHtlcnJvcjogZmFsc2V9O1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnR5cGUgPSBzcmMuc3Vic3RyKHNyYy5sZW5ndGggLSAzKTtcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRJbWcoaW1hZ2UsIG9wdGlvbnNJbWFnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChpbWFnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zSW1hZ2UgPSB0aGlzLm9wdGlvbnMucGFydGljbGVzLnNoYXBlLmltYWdlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IG9wdGlvbnNJbWFnZS5zcmM7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2U6IElJbWFnZSA9IHtlcnJvcjogZmFsc2V9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2UudHlwZSA9IHNyYy5zdWJzdHIoc3JjLmxlbmd0aCAtIDMpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkSW1nKGltYWdlLCBvcHRpb25zSW1hZ2UpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChpbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQmVmb3JlRHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgICAgICAvKiBpbml0IGNhbnZhcyArIHBhcnRpY2xlcyAqL1xuICAgICAgICB0aGlzLnJldGluYS5pbml0KCk7XG4gICAgICAgIHRoaXMuY2FudmFzLmluaXQoKTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKCk6IHZvaWQge1xuICAgICAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VIaWRkZW4gPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kcmF3QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBDb250YWluZXIuY2FuY2VsQW5pbWF0aW9uKHRoaXMuZHJhd0FuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFnZUhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICB0aGlzLmRyYXdlci5kcmF3KDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0JlZm9yZURyYXcoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFydGljbGVzLnNoYXBlLnR5cGUgPT09IFNoYXBlVHlwZS5pbWFnZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tBbmltYXRpb25GcmFtZSkge1xuICAgICAgICAgICAgICAgIENvbnRhaW5lci5jYW5jZWxBbmltYXRpb24odGhpcy5jaGVja0FuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VzLmV2ZXJ5KChpbWcpID0+IGltZy5lcnJvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5kcmF3ZXIuZHJhdygwKTtcbiAgICB9XG59XG4iXX0=