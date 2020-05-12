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

      var area = this.retina.particlesDensityArea;
      var optParticlesNumber = this.options.particles.number.value;
      var density = this.options.particles.number.density.area;
      var particlesNumber = area * optParticlesNumber / density;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL0NvbnRhaW5lci50cyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJjdXN0b21SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJjdXN0b21DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyVGltZW91dCIsIkNvbnRhaW5lciIsImlkIiwicGFyYW1zIiwic291cmNlT3B0aW9ucyIsImludGVyYWN0aXZpdHkiLCJvcHRpb25zIiwicmV0aW5hIiwiY2FudmFzIiwicGFydGljbGVzIiwicG9seWdvbiIsImJ1YmJsZSIsInJlcHVsc2UiLCJpbWFnZXMiLCJsYXN0RnJhbWVUaW1lIiwicGFnZUhpZGRlbiIsImRyYXdlciIsInN0YXJ0ZWQiLCJwYXVzZWQiLCJkcmF3QW5pbWF0aW9uRnJhbWUiLCJldmVudExpc3RlbmVycyIsIlJldGluYSIsIkNhbnZhcyIsIlBhcnRpY2xlcyIsIlBvbHlnb25NYXNrIiwiRHJhd2VyIiwibW91c2UiLCJPcHRpb25zIiwibG9hZCIsIkV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRzTGlzdGVuZXJzIiwic3RhcnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInJlcXVlc3RGcmFtZSIsInQiLCJ1cGRhdGUiLCJ1bmRlZmluZWQiLCJjYW5jZWxBbmltYXRpb24iLCJlbGVtZW50IiwibnVtYmVyIiwiZGVuc2l0eSIsImVuYWJsZSIsImFyZWEiLCJwYXJ0aWNsZXNEZW5zaXR5QXJlYSIsIm9wdFBhcnRpY2xlc051bWJlciIsInZhbHVlIiwicGFydGljbGVzTnVtYmVyIiwibWlzc2luZ1BhcnRpY2xlcyIsImFycmF5IiwibGVuZ3RoIiwicHVzaCIsIk1hdGgiLCJhYnMiLCJyZW1vdmUiLCJzdG9wIiwicmVtb3ZlRXZlbnRzTGlzdGVuZXJzIiwicmVzZXQiLCJkZXN0cm95Iiwib3BlbiIsInRvRGF0YVVSTCIsImltYWdlIiwib3B0aW9uc0ltYWdlIiwiZXJyb3IiLCJzcmMiLCJpbWciLCJJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvYmoiLCJjaGVja0JlZm9yZURyYXciLCJjb25zb2xlIiwicGF1c2UiLCJjbGVhciIsImxpbmVMaW5rZWRDb2xvciIsInJhdyIsInBhdGgiLCJzdmciLCJ1cmwiLCJwYXJzZVN2Z1BhdGhUb1BvbHlnb24iLCJzaGFwZSIsInR5cGUiLCJTaGFwZVR5cGUiLCJBcnJheSIsInN1YnN0ciIsImxvYWRJbWciLCJ0aW1lc3RhbXAiLCJkcmF3IiwiaW5pdCIsImRlbnNpdHlBdXRvUGFydGljbGVzIiwiZXZlcnkiLCJwbGF5IiwiaGFuZGxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFLQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFFQTs7QUFnQkE7QUFFQUEsTUFBTSxDQUFDQywyQkFBUCxHQUFzQyxZQUFNO0FBQ3hDLFNBQU9ELE1BQU0sQ0FBQ0UscUJBQVAsSUFDSEYsTUFBTSxDQUFDRywyQkFESixJQUVISCxNQUFNLENBQUNJLHdCQUZKLElBR0hKLE1BQU0sQ0FBQ0ssc0JBSEosSUFJSEwsTUFBTSxDQUFDTSx1QkFKSixJQUtGLFVBQUNDLFFBQUQ7QUFBQSxXQUFjUCxNQUFNLENBQUNRLFVBQVAsQ0FBa0JELFFBQWxCLEVBQTRCLE9BQU8sRUFBbkMsQ0FBZDtBQUFBLEdBTEw7QUFNSCxD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RCxXQUFLd0IsSUFBTDtBQUNBLFdBQUtHLElBQUw7QUFDSDs7O2lDQTdMMEJsRyxRLEVBQXdDO0FBQy9ELGFBQU9QLE1BQU0sQ0FBQ0MsMkJBQVAsQ0FBbUNNLFFBQW5DLENBQVA7QUFDSDs7O29DQUU2Qm1HLE0sRUFBc0I7QUFDaEQxRyxNQUFBQSxNQUFNLENBQUNVLG9CQUFQLENBQTRCZ0csTUFBNUI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQge0NhbnZhc30gZnJvbSBcIi4vQ2FudmFzXCI7XG5pbXBvcnQge0V2ZW50TGlzdGVuZXJzfSBmcm9tIFwiLi9VdGlscy9FdmVudExpc3RlbmVyc1wiO1xuaW1wb3J0IHtJUmVwdWxzZX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVJlcHVsc2VcIjtcbmltcG9ydCB7SUJ1YmJsZX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUJ1YmJsZVwiO1xuaW1wb3J0IHtJSW1hZ2V9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lJbWFnZVwiO1xuaW1wb3J0IHtJQ29udGFpbmVySW50ZXJhY3Rpdml0eX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvbnRhaW5lckludGVyYWN0aXZpdHlcIjtcbmltcG9ydCB7UGFydGljbGVzfSBmcm9tIFwiLi9QYXJ0aWNsZXNcIjtcbmltcG9ydCB7UmV0aW5hfSBmcm9tIFwiLi9SZXRpbmFcIjtcbmltcG9ydCB7U2hhcGVUeXBlfSBmcm9tIFwiLi4vRW51bXMvU2hhcGVUeXBlXCI7XG5pbXBvcnQge1BvbHlnb25NYXNrfSBmcm9tIFwiLi9Qb2x5Z29uTWFza1wiO1xuaW1wb3J0IHtJbWFnZVNoYXBlfSBmcm9tIFwiLi9PcHRpb25zL1BhcnRpY2xlcy9TaGFwZS9JbWFnZVNoYXBlXCI7XG5pbXBvcnQge0lPcHRpb25zfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9PcHRpb25zL0lPcHRpb25zXCI7XG5pbXBvcnQge0RyYXdlcn0gZnJvbSBcIi4vRHJhd2VyXCI7XG5pbXBvcnQge1JlY3Vyc2l2ZVBhcnRpYWx9IGZyb20gXCIuLi9UeXBlcy9SZWN1cnNpdmVQYXJ0aWFsXCI7XG5pbXBvcnQge09wdGlvbnN9IGZyb20gXCIuL09wdGlvbnMvT3B0aW9uc1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgICAgIGN1c3RvbVJlcXVlc3RBbmltYXRpb25GcmFtZTogKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjaykgPT4gbnVtYmVyO1xuICAgICAgICBtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IChjYWxsYmFjazogRnJhbWVSZXF1ZXN0Q2FsbGJhY2spID0+IG51bWJlcjtcbiAgICAgICAgb1JlcXVlc3RBbmltYXRpb25GcmFtZTogKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjaykgPT4gbnVtYmVyO1xuICAgICAgICBtc1JlcXVlc3RBbmltYXRpb25GcmFtZTogKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjaykgPT4gbnVtYmVyO1xuICAgICAgICBjdXN0b21DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IChoYW5kbGU6IG51bWJlcikgPT4gdm9pZDtcbiAgICAgICAgd2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiAoaGFuZGxlOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgICAgIG1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZTogKGhhbmRsZTogbnVtYmVyKSA9PiB2b2lkO1xuICAgICAgICBvQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiAoaGFuZGxlOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgICAgIG1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiAoaGFuZGxlOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgfVxufVxuXG4vKiAtLS0tLS0tLS0tIGdsb2JhbCBmdW5jdGlvbnMgLSB2ZW5kb3JzIC0tLS0tLS0tLS0tLSAqL1xuXG53aW5kb3cuY3VzdG9tUmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKCgpID0+IHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICgoY2FsbGJhY2spID0+IHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApKTtcbn0pKCk7XG5cbndpbmRvdy5jdXN0b21DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoKCkgPT4ge1xuICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgd2luZG93LndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICB3aW5kb3cubW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIHdpbmRvdy5vQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIHdpbmRvdy5tc0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICBjbGVhclRpbWVvdXRcbn0pKCk7XG5cbi8qKlxuICogVGhlIG9iamVjdCBsb2FkZWQgaW50byBhbiBIVE1MIGVsZW1lbnQsIGl0J2xsIGNvbnRhaW4gb3B0aW9ucyBsb2FkZWQgYW5kIGFsbCBkYXRhIHRvIGxldCBldmVyeXRoaW5nIHdvcmtpbmdcbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhaW5lciB7XG4gICAgcHVibGljIHJlYWRvbmx5IHNvdXJjZU9wdGlvbnM/OiBSZWN1cnNpdmVQYXJ0aWFsPElPcHRpb25zPjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgICBwdWJsaWMgaW50ZXJhY3Rpdml0eTogSUNvbnRhaW5lckludGVyYWN0aXZpdHk7XG4gICAgcHVibGljIG9wdGlvbnM6IElPcHRpb25zO1xuICAgIHB1YmxpYyByZXRpbmE6IFJldGluYTtcbiAgICBwdWJsaWMgY2FudmFzOiBDYW52YXM7XG4gICAgcHVibGljIHBhcnRpY2xlczogUGFydGljbGVzO1xuICAgIHB1YmxpYyBwb2x5Z29uOiBQb2x5Z29uTWFzaztcbiAgICBwdWJsaWMgYnViYmxlOiBJQnViYmxlO1xuICAgIHB1YmxpYyByZXB1bHNlOiBJUmVwdWxzZTtcbiAgICBwdWJsaWMgaW1hZ2VzOiBJSW1hZ2VbXTtcbiAgICBwdWJsaWMgbGFzdEZyYW1lVGltZTogbnVtYmVyO1xuICAgIHB1YmxpYyBwYWdlSGlkZGVuOiBib29sZWFuO1xuICAgIHB1YmxpYyBkcmF3ZXI6IERyYXdlcjtcbiAgICBwdWJsaWMgc3RhcnRlZDogYm9vbGVhbjtcblxuICAgIHByaXZhdGUgcGF1c2VkOiBib29sZWFuO1xuICAgIHByaXZhdGUgZHJhd0FuaW1hdGlvbkZyYW1lPzogbnVtYmVyO1xuICAgIHByaXZhdGUgZXZlbnRMaXN0ZW5lcnM6IEV2ZW50TGlzdGVuZXJzO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgcGFyYW1zPzogUmVjdXJzaXZlUGFydGlhbDxJT3B0aW9ucz4pIHtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNvdXJjZU9wdGlvbnMgPSBwYXJhbXM7XG4gICAgICAgIHRoaXMubGFzdEZyYW1lVGltZSA9IDA7XG4gICAgICAgIHRoaXMucGFnZUhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJldGluYSA9IG5ldyBSZXRpbmEodGhpcyk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh0aGlzKTtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBuZXcgUGFydGljbGVzKHRoaXMpO1xuICAgICAgICB0aGlzLnBvbHlnb24gPSBuZXcgUG9seWdvbk1hc2sodGhpcyk7XG4gICAgICAgIHRoaXMuZHJhd2VyID0gbmV3IERyYXdlcih0aGlzKTtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2aXR5ID0ge1xuICAgICAgICAgICAgbW91c2U6IHt9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmltYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLmJ1YmJsZSA9IHt9O1xuICAgICAgICB0aGlzLnJlcHVsc2UgPSB7fTtcblxuICAgICAgICAvKiB0c1BhcnRpY2xlcyB2YXJpYWJsZXMgd2l0aCBkZWZhdWx0IHZhbHVlcyAqL1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBuZXcgT3B0aW9ucygpO1xuXG4gICAgICAgIC8qIHBhcmFtcyBzZXR0aW5ncyAqL1xuICAgICAgICBpZiAodGhpcy5zb3VyY2VPcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubG9hZCh0aGlzLnNvdXJjZU9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogLS0tLS0tLS0tLSB0c1BhcnRpY2xlcyAtIHN0YXJ0IC0tLS0tLS0tLS0tLSAqL1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gbmV3IEV2ZW50TGlzdGVuZXJzKHRoaXMpO1xuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmFkZEV2ZW50c0xpc3RlbmVycygpO1xuXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlcXVlc3RGcmFtZShjYWxsYmFjazogRnJhbWVSZXF1ZXN0Q2FsbGJhY2spOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gd2luZG93LmN1c3RvbVJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjYW5jZWxBbmltYXRpb24oaGFuZGxlOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXkoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcmF3QW5pbWF0aW9uRnJhbWUgPSBDb250YWluZXIucmVxdWVzdEZyYW1lKCh0KSA9PiB0aGlzLnVwZGF0ZSh0KSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBhdXNlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5kcmF3QW5pbWF0aW9uRnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgQ29udGFpbmVyLmNhbmNlbEFuaW1hdGlvbih0aGlzLmRyYXdBbmltYXRpb25GcmFtZSk7XG5cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRyYXdBbmltYXRpb25GcmFtZTtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0gdHNQYXJ0aWNsZXMgZnVuY3Rpb25zIC0gdmVuZG9ycyAtLS0tLS0tLS0tLS0gKi9cblxuICAgIHB1YmxpYyBkZW5zaXR5QXV0b1BhcnRpY2xlcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKCEodGhpcy5jYW52YXMuZWxlbWVudCAmJiB0aGlzLm9wdGlvbnMucGFydGljbGVzLm51bWJlci5kZW5zaXR5LmVuYWJsZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFyZWEgPSB0aGlzLnJldGluYS5wYXJ0aWNsZXNEZW5zaXR5QXJlYTtcbiAgICAgICAgY29uc3Qgb3B0UGFydGljbGVzTnVtYmVyID0gdGhpcy5vcHRpb25zLnBhcnRpY2xlcy5udW1iZXIudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlbnNpdHkgPSB0aGlzLm9wdGlvbnMucGFydGljbGVzLm51bWJlci5kZW5zaXR5LmFyZWE7XG4gICAgICAgIGNvbnN0IHBhcnRpY2xlc051bWJlciA9IGFyZWEgKiBvcHRQYXJ0aWNsZXNOdW1iZXIgLyBkZW5zaXR5O1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFydGljbGVzID0gdGhpcy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoIC0gcGFydGljbGVzTnVtYmVyO1xuXG4gICAgICAgIGlmIChtaXNzaW5nUGFydGljbGVzIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChNYXRoLmFicyhtaXNzaW5nUGFydGljbGVzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5yZW1vdmUobWlzc2luZ1BhcnRpY2xlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG5cbiAgICAgICAgdGhpcy5ldmVudExpc3RlbmVycy5yZW1vdmVFdmVudHNMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5yZXRpbmEucmVzZXQoKTtcbiAgICAgICAgdGhpcy5jYW52YXMuZGVzdHJveSgpO1xuXG4gICAgICAgIGRlbGV0ZSB0aGlzLmludGVyYWN0aXZpdHk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnJldGluYTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY2FudmFzO1xuICAgICAgICBkZWxldGUgdGhpcy5wYXJ0aWNsZXM7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBvbHlnb247XG4gICAgICAgIGRlbGV0ZSB0aGlzLmJ1YmJsZTtcbiAgICAgICAgZGVsZXRlIHRoaXMucmVwdWxzZTtcbiAgICAgICAgZGVsZXRlIHRoaXMuaW1hZ2VzO1xuICAgICAgICBkZWxldGUgdGhpcy5kcmF3ZXI7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50TGlzdGVuZXJzO1xuICAgIH1cblxuICAgIHB1YmxpYyBleHBvcnRJbWcoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNhbnZhcy5lbGVtZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cub3Blbih0aGlzLmNhbnZhcy5lbGVtZW50LnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSwgXCJfYmxhbmtcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgbG9hZEltZyhpbWFnZTogSUltYWdlLCBvcHRpb25zSW1hZ2U6IEltYWdlU2hhcGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaW1hZ2UuZXJyb3IgPSBmYWxzZTtcblxuICAgICAgICBpZiAob3B0aW9uc0ltYWdlLnNyYykge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaW1hZ2Uub2JqID0gaW1nO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0JlZm9yZURyYXcoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpbWcuc3JjID0gb3B0aW9uc0ltYWdlLnNyYztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB0c1BhcnRpY2xlcyAtIE5vIGltYWdlLnNyY1wiKTtcblxuICAgICAgICAgICAgaW1hZ2UuZXJyb3IgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHJlZnJlc2goKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIC8qIGluaXQgYWxsICovXG4gICAgICAgIC8vaWYgKHRoaXMuY2hlY2tBbmltYXRpb25GcmFtZSkge1xuICAgICAgICAvLyAgICBDb250YWluZXIuY2FuY2VsQW5pbWF0aW9uKHRoaXMuY2hlY2tBbmltYXRpb25GcmFtZSk7XG4gICAgICAgIC8vfVxuXG4gICAgICAgIC8qIHJlc3RhcnQgKi9cbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucGF1c2UoKTtcblxuICAgICAgICB0aGlzLmltYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnJldGluYS5yZXNldCgpO1xuICAgICAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgICAgIGRlbGV0ZSB0aGlzLnBhcnRpY2xlcy5saW5lTGlua2VkQ29sb3I7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBvbHlnb24ucmF3O1xuICAgICAgICBkZWxldGUgdGhpcy5wb2x5Z29uLnBhdGg7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBvbHlnb24uc3ZnO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgLyogSWYgaXMgc2V0IHRoZSB1cmwgb2Ygc3ZnIGVsZW1lbnQsIGxvYWQgaXQgYW5kIHBhcnNlIGludG8gcmF3IHBvbHlnb24gZGF0YSxcbiAgICAgICAgICogd29ya3Mgb25seSB3aXRoIHNpbmdsZSBwYXRoIFNWR1xuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb2x5Z29uLnVybCkge1xuICAgICAgICAgICAgdGhpcy5wb2x5Z29uLnJhdyA9IGF3YWl0IHRoaXMucG9seWdvbi5wYXJzZVN2Z1BhdGhUb1BvbHlnb24odGhpcy5vcHRpb25zLnBvbHlnb24udXJsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFydGljbGVzLnNoYXBlLnR5cGUgPT09IFNoYXBlVHlwZS5pbWFnZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2UgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uc0ltYWdlIG9mIHRoaXMub3B0aW9ucy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gb3B0aW9uc0ltYWdlLnNyYztcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2U6IElJbWFnZSA9IHtlcnJvcjogZmFsc2V9O1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnR5cGUgPSBzcmMuc3Vic3RyKHNyYy5sZW5ndGggLSAzKTtcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRJbWcoaW1hZ2UsIG9wdGlvbnNJbWFnZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChpbWFnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zSW1hZ2UgPSB0aGlzLm9wdGlvbnMucGFydGljbGVzLnNoYXBlLmltYWdlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IG9wdGlvbnNJbWFnZS5zcmM7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2U6IElJbWFnZSA9IHtlcnJvcjogZmFsc2V9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2UudHlwZSA9IHNyYy5zdWJzdHIoc3JjLmxlbmd0aCAtIDMpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkSW1nKGltYWdlLCBvcHRpb25zSW1hZ2UpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMucHVzaChpbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQmVmb3JlRHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGUodGltZXN0YW1wOiBET01IaWdoUmVzVGltZVN0YW1wKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZHJhd2VyLmRyYXcodGltZXN0YW1wKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgICAgIC8qIGluaXQgY2FudmFzICsgcGFydGljbGVzICovXG4gICAgICAgIHRoaXMucmV0aW5hLmluaXQoKTtcbiAgICAgICAgdGhpcy5jYW52YXMuaW5pdCgpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcy5pbml0KCk7XG4gICAgICAgIHRoaXMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrQmVmb3JlRHJhdygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wYXJ0aWNsZXMuc2hhcGUudHlwZSA9PT0gU2hhcGVUeXBlLmltYWdlKSB7XG4gICAgICAgICAgICAvL2lmICh0aGlzLmNoZWNrQW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgICAgIC8vICAgIENvbnRhaW5lci5jYW5jZWxBbmltYXRpb24odGhpcy5jaGVja0FuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgICAgIC8vfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZXMuZXZlcnkoKGltZykgPT4gaW1nLmVycm9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG59XG4iXX0=