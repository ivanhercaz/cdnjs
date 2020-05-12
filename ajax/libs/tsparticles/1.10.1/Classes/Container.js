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

var _Particles = require("./Particles");

var _Retina = require("./Retina");

var _ShapeType = require("../Enums/ShapeType");

var _PolygonMask = require("./PolygonMask");

var _Drawer = require("./Drawer");

var _Options = require("./Options/Options");

/* ---------- global functions - vendors ------------ */
window.customRequestAnimationFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
  };
}();

window.customCancelRequestAnimationFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}();
/**
 * The object loaded into an HTML element, it'll contain options loaded and all data to let everything working
 */


var Container = /*#__PURE__*/function () {
  function Container(id, params) {
    (0, _classCallCheck2["default"])(this, Container);
    this.sourceOptions = void 0;
    this.id = void 0;
    this.interactivity = void 0;
    this.options = void 0;
    this.retina = void 0;
    this.canvas = void 0;
    this.particles = void 0;
    this.polygon = void 0;
    this.bubble = void 0;
    this.repulse = void 0;
    this.images = void 0;
    this.lastFrameTime = void 0;
    this.pageHidden = void 0;
    this.drawer = void 0;
    this.started = void 0;
    this.paused = void 0;
    this.drawAnimationFrame = void 0;
    this.eventListeners = void 0;
    this.started = false;
    this.id = id;
    this.paused = true;
    this.sourceOptions = params;
    this.lastFrameTime = 0;
    this.pageHidden = false;
    this.retina = new _Retina.Retina(this);
    this.canvas = new _Canvas.Canvas(this);
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

    this.options = new _Options.Options();
    /* params settings */

    if (this.sourceOptions) {
      this.options.load(this.sourceOptions);
    }
    /* ---------- tsParticles - start ------------ */


    this.eventListeners = new _EventListeners.EventListeners(this);
    this.eventListeners.addEventsListeners();
    this.start();
  }

  (0, _createClass2["default"])(Container, [{
    key: "play",
    value: function play() {
      var _this = this;

      if (this.paused) {
        this.lastFrameTime = performance.now();
        this.paused = false;
      }

      this.drawAnimationFrame = Container.requestFrame(function (t) {
        return _this.update(t);
      });
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.drawAnimationFrame !== undefined) {
        Container.cancelAnimation(this.drawAnimationFrame);
        delete this.drawAnimationFrame;
        this.paused = true;
      }
    }
    /* ---------- tsParticles functions - vendors ------------ */

  }, {
    key: "densityAutoParticles",
    value: function densityAutoParticles() {
      if (!(this.canvas.element && this.options.particles.number.density.enable)) {
        return;
      }

      var area = this.canvas.element.width * this.canvas.element.height / 1000;

      if (this.retina.isRetina) {
        area /= this.retina.pxRatio * 2;
      } //const area = this.retina.particlesDensityArea;


      var optParticlesNumber = this.options.particles.number.value;
      var density = this.options.particles.number.density.area;
      var particlesNumber = area * optParticlesNumber / density;
      console.log(particlesNumber);
      var missingParticles = this.particles.array.length - particlesNumber;

      if (missingParticles < 0) {
        this.particles.push(Math.abs(missingParticles));
      } else {
        this.particles.remove(missingParticles);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.stop();
      this.eventListeners.removeEventsListeners();
      this.retina.reset();
      this.canvas.destroy();
      delete this.interactivity;
      delete this.options;
      delete this.retina;
      delete this.canvas;
      delete this.particles;
      delete this.polygon;
      delete this.bubble;
      delete this.repulse;
      delete this.images;
      delete this.drawer;
      delete this.eventListeners;
    }
  }, {
    key: "exportImg",
    value: function exportImg() {
      if (this.canvas.element) {
        window.open(this.canvas.element.toDataURL("image/png"), "_blank");
      }
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
                //if (this.checkAnimationFrame) {
                //    Container.cancelAnimation(this.checkAnimationFrame);
                //}

                /* restart */
                this.stop();
                _context2.next = 3;
                return this.start();

              case 3:
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
    key: "stop",
    value: function stop() {
      if (!this.started) {
        return;
      }

      this.started = false;
      this.pause();
      this.images = [];
      this.particles.clear();
      this.retina.reset();
      this.canvas.clear();
      delete this.particles.lineLinkedColor;
      delete this.polygon.raw;
      delete this.polygon.path;
      delete this.polygon.svg;
    }
  }, {
    key: "start",
    value: function () {
      var _start = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, optionsImage, src, image, _optionsImage, _src, _image;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.started) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                this.started = true;
                /* If is set the url of svg element, load it and parse into raw polygon data,
                 * works only with single path SVG
                 */

                if (!this.options.polygon.url) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 6;
                return this.polygon.parseSvgPathToPolygon(this.options.polygon.url);

              case 6:
                this.polygon.raw = _context3.sent;

              case 7:
                if (!(this.options.particles.shape.type === _ShapeType.ShapeType.image)) {
                  _context3.next = 50;
                  break;
                }

                if (!(this.options.particles.shape.image instanceof Array)) {
                  _context3.next = 41;
                  break;
                }

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context3.prev = 12;
                _iterator = this.options.particles.shape.image[Symbol.iterator]();

              case 14:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context3.next = 25;
                  break;
                }

                optionsImage = _step.value;
                src = optionsImage.src;
                image = {
                  error: false
                };
                image.type = src.substr(src.length - 3);
                _context3.next = 21;
                return this.loadImg(image, optionsImage);

              case 21:
                this.images.push(image);

              case 22:
                _iteratorNormalCompletion = true;
                _context3.next = 14;
                break;

              case 25:
                _context3.next = 31;
                break;

              case 27:
                _context3.prev = 27;
                _context3.t0 = _context3["catch"](12);
                _didIteratorError = true;
                _iteratorError = _context3.t0;

              case 31:
                _context3.prev = 31;
                _context3.prev = 32;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 34:
                _context3.prev = 34;

                if (!_didIteratorError) {
                  _context3.next = 37;
                  break;
                }

                throw _iteratorError;

              case 37:
                return _context3.finish(34);

              case 38:
                return _context3.finish(31);

              case 39:
                _context3.next = 48;
                break;

              case 41:
                _optionsImage = this.options.particles.shape.image;
                _src = _optionsImage.src;
                _image = {
                  error: false
                };
                _image.type = _src.substr(_src.length - 3);
                _context3.next = 47;
                return this.loadImg(_image, _optionsImage);

              case 47:
                this.images.push(_image);

              case 48:
                _context3.next = 51;
                break;

              case 50:
                this.checkBeforeDraw();

              case 51:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[12, 27, 31, 39], [32,, 34, 38]]);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "update",
    value: function update(timestamp) {
      this.drawer.draw(timestamp);
    }
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
    key: "checkBeforeDraw",
    value: function checkBeforeDraw() {
      if (this.options.particles.shape.type === _ShapeType.ShapeType.image) {
        //if (this.checkAnimationFrame) {
        //    Container.cancelAnimation(this.checkAnimationFrame);
        //}
        if (this.images.every(function (img) {
          return img.error;
        })) {
          return;
        }
      }

      this.init();
      this.play();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL0NvbnRhaW5lci50cyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJjdXN0b21SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJjdXN0b21DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyVGltZW91dCIsIkNvbnRhaW5lciIsImlkIiwicGFyYW1zIiwic291cmNlT3B0aW9ucyIsImludGVyYWN0aXZpdHkiLCJvcHRpb25zIiwicmV0aW5hIiwiY2FudmFzIiwicGFydGljbGVzIiwicG9seWdvbiIsImJ1YmJsZSIsInJlcHVsc2UiLCJpbWFnZXMiLCJsYXN0RnJhbWVUaW1lIiwicGFnZUhpZGRlbiIsImRyYXdlciIsInN0YXJ0ZWQiLCJwYXVzZWQiLCJkcmF3QW5pbWF0aW9uRnJhbWUiLCJldmVudExpc3RlbmVycyIsIlJldGluYSIsIkNhbnZhcyIsIlBhcnRpY2xlcyIsIlBvbHlnb25NYXNrIiwiRHJhd2VyIiwibW91c2UiLCJPcHRpb25zIiwibG9hZCIsIkV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRzTGlzdGVuZXJzIiwic3RhcnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInJlcXVlc3RGcmFtZSIsInQiLCJ1cGRhdGUiLCJ1bmRlZmluZWQiLCJjYW5jZWxBbmltYXRpb24iLCJlbGVtZW50IiwibnVtYmVyIiwiZGVuc2l0eSIsImVuYWJsZSIsImFyZWEiLCJ3aWR0aCIsImhlaWdodCIsImlzUmV0aW5hIiwicHhSYXRpbyIsIm9wdFBhcnRpY2xlc051bWJlciIsInZhbHVlIiwicGFydGljbGVzTnVtYmVyIiwiY29uc29sZSIsImxvZyIsIm1pc3NpbmdQYXJ0aWNsZXMiLCJhcnJheSIsImxlbmd0aCIsInB1c2giLCJNYXRoIiwiYWJzIiwicmVtb3ZlIiwic3RvcCIsInJlbW92ZUV2ZW50c0xpc3RlbmVycyIsInJlc2V0IiwiZGVzdHJveSIsIm9wZW4iLCJ0b0RhdGFVUkwiLCJpbWFnZSIsIm9wdGlvbnNJbWFnZSIsImVycm9yIiwic3JjIiwiaW1nIiwiSW1hZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwib2JqIiwiY2hlY2tCZWZvcmVEcmF3IiwicGF1c2UiLCJjbGVhciIsImxpbmVMaW5rZWRDb2xvciIsInJhdyIsInBhdGgiLCJzdmciLCJ1cmwiLCJwYXJzZVN2Z1BhdGhUb1BvbHlnb24iLCJzaGFwZSIsInR5cGUiLCJTaGFwZVR5cGUiLCJBcnJheSIsInN1YnN0ciIsImxvYWRJbWciLCJ0aW1lc3RhbXAiLCJkcmF3IiwiaW5pdCIsImRlbnNpdHlBdXRvUGFydGljbGVzIiwiZXZlcnkiLCJwbGF5IiwiaGFuZGxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFFQTs7QUFnQkE7QUFFQUEsTUFBTSxDQUFDQywyQkFBUCxHQUFzQyxZQUFNO0FBQ3hDLFNBQU9ELE1BQU0sQ0FBQ0UscUJBQVAsSUFDSEYsTUFBTSxDQUFDRywyQkFESixJQUVISCxNQUFNLENBQUNJLHdCQUZKLElBR0hKLE1BQU0sQ0FBQ0ssc0JBSEosSUFJSEwsTUFBTSxDQUFDTSx1QkFKSixJQUtGLFVBQUNDLFFBQUQ7QUFBQSxXQUFjUCxNQUFNLENBQUNRLFVBQVAsQ0FBa0JELFFBQWxCLEVBQTRCLE9BQU8sRUFBbkMs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QkFBTDtBQUNIOzs7c0NBRStCO0FBQzVCLFVBQUksS0FBS3RGLE9BQUwsQ0FBYUcsU0FBYixDQUF1QjBFLEtBQXZCLENBQTZCQyxJQUE3QixLQUFzQ0MscUJBQVVuQixLQUFwRCxFQUEyRDtBQUN2RDtBQUNBO0FBQ0E7QUFFQSxZQUFJLEtBQUtyRCxNQUFMLENBQVlnRixLQUFaLENBQWtCLFVBQUN2QixHQUFEO0FBQUEsaUJBQVNBLEdBQUcsQ0FBQ0YsS0FBYjtBQUFBLFNBQWxCLENBQUosRUFBMkM7QUFDdkM7QUFDSDtBQUNKOztBQUVELFdBQUt1QixJQUFMO0FBQ0EsV0FBS0csSUFBTDtBQUNIOzs7aUNBbE0wQnRHLFEsRUFBd0M7QUFDL0QsYUFBT1AsTUFBTSxDQUFDQywyQkFBUCxDQUFtQ00sUUFBbkMsQ0FBUDtBQUNIOzs7b0NBRTZCdUcsTSxFQUFzQjtBQUNoRDlHLE1BQUFBLE1BQU0sQ0FBQ1Usb0JBQVAsQ0FBNEJvRyxNQUE1QjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7Q2FudmFzfSBmcm9tIFwiLi9DYW52YXNcIjtcbmltcG9ydCB7RXZlbnRMaXN0ZW5lcnN9IGZyb20gXCIuL1V0aWxzL0V2ZW50TGlzdGVuZXJzXCI7XG5pbXBvcnQge0lSZXB1bHNlfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JUmVwdWxzZVwiO1xuaW1wb3J0IHtJQnViYmxlfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQnViYmxlXCI7XG5pbXBvcnQge0lJbWFnZX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUltYWdlXCI7XG5pbXBvcnQge0lDb250YWluZXJJbnRlcmFjdGl2aXR5fSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29udGFpbmVySW50ZXJhY3Rpdml0eVwiO1xuaW1wb3J0IHtQYXJ0aWNsZXN9IGZyb20gXCIuL1BhcnRpY2xlc1wiO1xuaW1wb3J0IHtSZXRpbmF9IGZyb20gXCIuL1JldGluYVwiO1xuaW1wb3J0IHtTaGFwZVR5cGV9IGZyb20gXCIuLi9FbnVtcy9TaGFwZVR5cGVcIjtcbmltcG9ydCB7UG9seWdvbk1hc2t9IGZyb20gXCIuL1BvbHlnb25NYXNrXCI7XG5pbXBvcnQge0ltYWdlU2hhcGV9IGZyb20gXCIuL09wdGlvbnMvUGFydGljbGVzL1NoYXBlL0ltYWdlU2hhcGVcIjtcbmltcG9ydCB7SU9wdGlvbnN9IGZyb20gXCIuLi9JbnRlcmZhY2VzL09wdGlvbnMvSU9wdGlvbnNcIjtcbmltcG9ydCB7RHJhd2VyfSBmcm9tIFwiLi9EcmF3ZXJcIjtcbmltcG9ydCB7UmVjdXJzaXZlUGFydGlhbH0gZnJvbSBcIi4uL1R5cGVzL1JlY3Vyc2l2ZVBhcnRpYWxcIjtcbmltcG9ydCB7T3B0aW9uc30gZnJvbSBcIi4vT3B0aW9ucy9PcHRpb25zXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAgICAgY3VzdG9tUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiAoY2FsbGJhY2s6IEZyYW1lUmVxdWVzdENhbGxiYWNrKSA9PiBudW1iZXI7XG4gICAgICAgIG1velJlcXVlc3RBbmltYXRpb25GcmFtZTogKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjaykgPT4gbnVtYmVyO1xuICAgICAgICBvUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiAoY2FsbGJhY2s6IEZyYW1lUmVxdWVzdENhbGxiYWNrKSA9PiBudW1iZXI7XG4gICAgICAgIG1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiAoY2FsbGJhY2s6IEZyYW1lUmVxdWVzdENhbGxiYWNrKSA9PiBudW1iZXI7XG4gICAgICAgIGN1c3RvbUNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZTogKGhhbmRsZTogbnVtYmVyKSA9PiB2b2lkO1xuICAgICAgICB3ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IChoYW5kbGU6IG51bWJlcikgPT4gdm9pZDtcbiAgICAgICAgbW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiAoaGFuZGxlOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgICAgIG9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IChoYW5kbGU6IG51bWJlcikgPT4gdm9pZDtcbiAgICAgICAgbXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IChoYW5kbGU6IG51bWJlcikgPT4gdm9pZDtcbiAgICB9XG59XG5cbi8qIC0tLS0tLS0tLS0gZ2xvYmFsIGZ1bmN0aW9ucyAtIHZlbmRvcnMgLS0tLS0tLS0tLS0tICovXG5cbndpbmRvdy5jdXN0b21SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoKCkgPT4ge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgKChjYWxsYmFjaykgPT4gd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCkpO1xufSkoKTtcblxud2luZG93LmN1c3RvbUNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSA9ICgoKSA9PiB7XG4gICAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgd2luZG93Lm9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgd2luZG93Lm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIGNsZWFyVGltZW91dFxufSkoKTtcblxuLyoqXG4gKiBUaGUgb2JqZWN0IGxvYWRlZCBpbnRvIGFuIEhUTUwgZWxlbWVudCwgaXQnbGwgY29udGFpbiBvcHRpb25zIGxvYWRlZCBhbmQgYWxsIGRhdGEgdG8gbGV0IGV2ZXJ5dGhpbmcgd29ya2luZ1xuICovXG5leHBvcnQgY2xhc3MgQ29udGFpbmVyIHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgc291cmNlT3B0aW9ucz86IFJlY3Vyc2l2ZVBhcnRpYWw8SU9wdGlvbnM+O1xuICAgIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nO1xuICAgIHB1YmxpYyBpbnRlcmFjdGl2aXR5OiBJQ29udGFpbmVySW50ZXJhY3Rpdml0eTtcbiAgICBwdWJsaWMgb3B0aW9uczogSU9wdGlvbnM7XG4gICAgcHVibGljIHJldGluYTogUmV0aW5hO1xuICAgIHB1YmxpYyBjYW52YXM6IENhbnZhcztcbiAgICBwdWJsaWMgcGFydGljbGVzOiBQYXJ0aWNsZXM7XG4gICAgcHVibGljIHBvbHlnb246IFBvbHlnb25NYXNrO1xuICAgIHB1YmxpYyBidWJibGU6IElCdWJibGU7XG4gICAgcHVibGljIHJlcHVsc2U6IElSZXB1bHNlO1xuICAgIHB1YmxpYyBpbWFnZXM6IElJbWFnZVtdO1xuICAgIHB1YmxpYyBsYXN0RnJhbWVUaW1lOiBudW1iZXI7XG4gICAgcHVibGljIHBhZ2VIaWRkZW46IGJvb2xlYW47XG4gICAgcHVibGljIGRyYXdlcjogRHJhd2VyO1xuICAgIHB1YmxpYyBzdGFydGVkOiBib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBwYXVzZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBkcmF3QW5pbWF0aW9uRnJhbWU/OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBldmVudExpc3RlbmVyczogRXZlbnRMaXN0ZW5lcnM7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBwYXJhbXM/OiBSZWN1cnNpdmVQYXJ0aWFsPElPcHRpb25zPikge1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc291cmNlT3B0aW9ucyA9IHBhcmFtcztcbiAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gMDtcbiAgICAgICAgdGhpcy5wYWdlSGlkZGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmV0aW5hID0gbmV3IFJldGluYSh0aGlzKTtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHRoaXMpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZXModGhpcyk7XG4gICAgICAgIHRoaXMucG9seWdvbiA9IG5ldyBQb2x5Z29uTWFzayh0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSBuZXcgRHJhd2VyKHRoaXMpO1xuICAgICAgICB0aGlzLmludGVyYWN0aXZpdHkgPSB7XG4gICAgICAgICAgICBtb3VzZToge30sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW107XG4gICAgICAgIHRoaXMuYnViYmxlID0ge307XG4gICAgICAgIHRoaXMucmVwdWxzZSA9IHt9O1xuXG4gICAgICAgIC8qIHRzUGFydGljbGVzIHZhcmlhYmxlcyB3aXRoIGRlZmF1bHQgdmFsdWVzICovXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG5ldyBPcHRpb25zKCk7XG5cbiAgICAgICAgLyogcGFyYW1zIHNldHRpbmdzICovXG4gICAgICAgIGlmICh0aGlzLnNvdXJjZU9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5sb2FkKHRoaXMuc291cmNlT3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiAtLS0tLS0tLS0tIHRzUGFydGljbGVzIC0gc3RhcnQgLS0tLS0tLS0tLS0tICovXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBuZXcgRXZlbnRMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuYWRkRXZlbnRzTGlzdGVuZXJzKCk7XG5cbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdEZyYW1lKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjayk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuY3VzdG9tUmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNhbmNlbEFuaW1hdGlvbihoYW5kbGU6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaGFuZGxlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYXdBbmltYXRpb25GcmFtZSA9IENvbnRhaW5lci5yZXF1ZXN0RnJhbWUoKHQpID0+IHRoaXMudXBkYXRlKHQpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGF1c2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRyYXdBbmltYXRpb25GcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBDb250YWluZXIuY2FuY2VsQW5pbWF0aW9uKHRoaXMuZHJhd0FuaW1hdGlvbkZyYW1lKTtcblxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZHJhd0FuaW1hdGlvbkZyYW1lO1xuICAgICAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLSB0c1BhcnRpY2xlcyBmdW5jdGlvbnMgLSB2ZW5kb3JzIC0tLS0tLS0tLS0tLSAqL1xuXG4gICAgcHVibGljIGRlbnNpdHlBdXRvUGFydGljbGVzKCk6IHZvaWQge1xuICAgICAgICBpZiAoISh0aGlzLmNhbnZhcy5lbGVtZW50ICYmIHRoaXMub3B0aW9ucy5wYXJ0aWNsZXMubnVtYmVyLmRlbnNpdHkuZW5hYmxlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFyZWEgPSB0aGlzLmNhbnZhcy5lbGVtZW50LndpZHRoICogdGhpcy5jYW52YXMuZWxlbWVudC5oZWlnaHQgLyAxMDAwO1xuICAgICAgICBpZiAodGhpcy5yZXRpbmEuaXNSZXRpbmEpIHtcbiAgICAgICAgICAgIGFyZWEgLz0gdGhpcy5yZXRpbmEucHhSYXRpbyAqIDI7XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zdCBhcmVhID0gdGhpcy5yZXRpbmEucGFydGljbGVzRGVuc2l0eUFyZWE7XG4gICAgICAgIGNvbnN0IG9wdFBhcnRpY2xlc051bWJlciA9IHRoaXMub3B0aW9ucy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlO1xuICAgICAgICBjb25zdCBkZW5zaXR5ID0gdGhpcy5vcHRpb25zLnBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS5hcmVhO1xuICAgICAgICBjb25zdCBwYXJ0aWNsZXNOdW1iZXIgPSBhcmVhICogb3B0UGFydGljbGVzTnVtYmVyIC8gZGVuc2l0eTtcbiAgICAgICAgY29uc29sZS5sb2cocGFydGljbGVzTnVtYmVyKTtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcnRpY2xlcyA9IHRoaXMucGFydGljbGVzLmFycmF5Lmxlbmd0aCAtIHBhcnRpY2xlc051bWJlcjtcblxuICAgICAgICBpZiAobWlzc2luZ1BhcnRpY2xlcyA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzLnB1c2goTWF0aC5hYnMobWlzc2luZ1BhcnRpY2xlcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucmVtb3ZlKG1pc3NpbmdQYXJ0aWNsZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMucmVtb3ZlRXZlbnRzTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMucmV0aW5hLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuY2FudmFzLmRlc3Ryb3koKTtcblxuICAgICAgICBkZWxldGUgdGhpcy5pbnRlcmFjdGl2aXR5O1xuICAgICAgICBkZWxldGUgdGhpcy5vcHRpb25zO1xuICAgICAgICBkZWxldGUgdGhpcy5yZXRpbmE7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNhbnZhcztcbiAgICAgICAgZGVsZXRlIHRoaXMucGFydGljbGVzO1xuICAgICAgICBkZWxldGUgdGhpcy5wb2x5Z29uO1xuICAgICAgICBkZWxldGUgdGhpcy5idWJibGU7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnJlcHVsc2U7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmltYWdlcztcbiAgICAgICAgZGVsZXRlIHRoaXMuZHJhd2VyO1xuICAgICAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVycztcbiAgICB9XG5cbiAgICBwdWJsaWMgZXhwb3J0SW1nKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jYW52YXMuZWxlbWVudCkge1xuICAgICAgICAgICAgd2luZG93Lm9wZW4odGhpcy5jYW52YXMuZWxlbWVudC50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIiksIFwiX2JsYW5rXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGxvYWRJbWcoaW1hZ2U6IElJbWFnZSwgb3B0aW9uc0ltYWdlOiBJbWFnZVNoYXBlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGltYWdlLmVycm9yID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKG9wdGlvbnNJbWFnZS5zcmMpIHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGltYWdlLm9iaiA9IGltZztcblxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tCZWZvcmVEcmF3KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW1nLnNyYyA9IG9wdGlvbnNJbWFnZS5zcmM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdHNQYXJ0aWNsZXMgLSBObyBpbWFnZS5zcmNcIik7XG5cbiAgICAgICAgICAgIGltYWdlLmVycm9yID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyByZWZyZXNoKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICAvKiBpbml0IGFsbCAqL1xuICAgICAgICAvL2lmICh0aGlzLmNoZWNrQW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgLy8gICAgQ29udGFpbmVyLmNhbmNlbEFuaW1hdGlvbih0aGlzLmNoZWNrQW5pbWF0aW9uRnJhbWUpO1xuICAgICAgICAvL31cblxuICAgICAgICAvKiByZXN0YXJ0ICovXG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICBhd2FpdCB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3AoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5zdGFydGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnBhdXNlKCk7XG5cbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yZXRpbmEucmVzZXQoKTtcbiAgICAgICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgICAgICBkZWxldGUgdGhpcy5wYXJ0aWNsZXMubGluZUxpbmtlZENvbG9yO1xuICAgICAgICBkZWxldGUgdGhpcy5wb2x5Z29uLnJhdztcbiAgICAgICAgZGVsZXRlIHRoaXMucG9seWdvbi5wYXRoO1xuICAgICAgICBkZWxldGUgdGhpcy5wb2x5Z29uLnN2ZztcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IHRydWU7XG4gICAgICAgIC8qIElmIGlzIHNldCB0aGUgdXJsIG9mIHN2ZyBlbGVtZW50LCBsb2FkIGl0IGFuZCBwYXJzZSBpbnRvIHJhdyBwb2x5Z29uIGRhdGEsXG4gICAgICAgICAqIHdvcmtzIG9ubHkgd2l0aCBzaW5nbGUgcGF0aCBTVkdcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9seWdvbi51cmwpIHtcbiAgICAgICAgICAgIHRoaXMucG9seWdvbi5yYXcgPSBhd2FpdCB0aGlzLnBvbHlnb24ucGFyc2VTdmdQYXRoVG9Qb2x5Z29uKHRoaXMub3B0aW9ucy5wb2x5Z29uLnVybCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBhcnRpY2xlcy5zaGFwZS50eXBlID09PSBTaGFwZVR5cGUuaW1hZ2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFydGljbGVzLnNoYXBlLmltYWdlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbnNJbWFnZSBvZiB0aGlzLm9wdGlvbnMucGFydGljbGVzLnNoYXBlLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IG9wdGlvbnNJbWFnZS5zcmM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlOiBJSW1hZ2UgPSB7ZXJyb3I6IGZhbHNlfTtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZS50eXBlID0gc3JjLnN1YnN0cihzcmMubGVuZ3RoIC0gMyk7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkSW1nKGltYWdlLCBvcHRpb25zSW1hZ2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uc0ltYWdlID0gdGhpcy5vcHRpb25zLnBhcnRpY2xlcy5zaGFwZS5pbWFnZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSBvcHRpb25zSW1hZ2Uuc3JjO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlOiBJSW1hZ2UgPSB7ZXJyb3I6IGZhbHNlfTtcblxuICAgICAgICAgICAgICAgIGltYWdlLnR5cGUgPSBzcmMuc3Vic3RyKHNyYy5sZW5ndGggLSAzKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZEltZyhpbWFnZSwgb3B0aW9uc0ltYWdlKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGVja0JlZm9yZURyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlKHRpbWVzdGFtcDogRE9NSGlnaFJlc1RpbWVTdGFtcCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyYXdlci5kcmF3KHRpbWVzdGFtcCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgICAgICAvKiBpbml0IGNhbnZhcyArIHBhcnRpY2xlcyAqL1xuICAgICAgICB0aGlzLnJldGluYS5pbml0KCk7XG4gICAgICAgIHRoaXMuY2FudmFzLmluaXQoKTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0JlZm9yZURyYXcoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFydGljbGVzLnNoYXBlLnR5cGUgPT09IFNoYXBlVHlwZS5pbWFnZSkge1xuICAgICAgICAgICAgLy9pZiAodGhpcy5jaGVja0FuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgICAgICAvLyAgICBDb250YWluZXIuY2FuY2VsQW5pbWF0aW9uKHRoaXMuY2hlY2tBbmltYXRpb25GcmFtZSk7XG4gICAgICAgICAgICAvL31cblxuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VzLmV2ZXJ5KChpbWcpID0+IGltZy5lcnJvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxufVxuIl19