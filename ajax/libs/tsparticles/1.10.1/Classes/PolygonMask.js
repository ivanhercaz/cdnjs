"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonMask = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _PolygonMaskType = require("../Enums/PolygonMaskType");

var _Particle = require("./Particle");

var _PolygonMaskInlineArrangement = require("../Enums/PolygonMaskInlineArrangement");

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

      if (this.raw) {
        container.canvas.drawPolygonMask(this.raw);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL1BvbHlnb25NYXNrLnRzIl0sIm5hbWVzIjpbIlBvbHlnb25NYXNrIiwiY29udGFpbmVyIiwicmVkcmF3VGltZW91dCIsInJhdyIsInN2ZyIsInBhdGgiLCJ3aWR0aCIsImhlaWdodCIsIm9mZnNldCIsInBvc2l0aW9uIiwib3B0aW9ucyIsInBvbHlnb24iLCJ0eXBlIiwiUG9seWdvbk1hc2tUeXBlIiwibm9uZSIsImlubGluZSIsImxlbmd0aCIsIngiLCJNYXRoIiwicmFuZG9tIiwiY2FudmFzIiwiZGltZW5zaW9uIiwieSIsImluc2lkZSIsImkiLCJqIiwieGkiLCJ5aSIsInhqIiwieWoiLCJpbnRlcnNlY3QiLCJvdXRzaWRlIiwiY29uc29sZSIsImVycm9yIiwiaW5saW5lQXJyYW5nZW1lbnQiLCJQb2x5Z29uTWFza0lubGluZUFycmFuZ2VtZW50IiwicmFuZG9tUG9pbnQiLCJnZXRSYW5kb21Qb2ludE9uUG9seWdvblBhdGgiLCJyYW5kb21MZW5ndGgiLCJnZXRSYW5kb21Qb2ludE9uUG9seWdvblBhdGhCeUxlbmd0aCIsImVxdWlkaXN0YW50IiwiZ2V0RXF1aWRpc3RhbnRQb2ludE9uUG9seWdvblBhdGhCeUluZGV4IiwicGFydGljbGVzIiwiYXJyYXkiLCJvbmVQZXJQb2ludCIsImdldFBvaW5nT25Qb2x5Z29uUGF0aEJ5SW5kZXgiLCJjaGVja0luc2lkZVBvbHlnb24iLCJyYW5kb21Qb2ludEluUG9seWdvbiIsInN2Z1VybCIsInVybCIsImZldGNoIiwicmVxIiwib2siLCJ0ZXh0IiwieG1sIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY2FsZSIsInBhcnNlRmxvYXQiLCJnZXRBdHRyaWJ1dGUiLCJsZW4iLCJwYXRoU2VnTGlzdCIsIm51bWJlck9mSXRlbXMiLCJwb2x5Z29uUmF3IiwicCIsInNlZ21lbnQiLCJnZXRJdGVtIiwicGF0aFNlZ1R5cGUiLCJ3aW5kb3ciLCJTVkdQYXRoU2VnIiwiUEFUSFNFR19NT1ZFVE9fQUJTIiwiUEFUSFNFR19MSU5FVE9fQUJTIiwiUEFUSFNFR19DVVJWRVRPX0NVQklDX0FCUyIsIlBBVEhTRUdfQ1VSVkVUT19RVUFEUkFUSUNfQUJTIiwiUEFUSFNFR19BUkNfQUJTIiwiUEFUSFNFR19DVVJWRVRPX0NVQklDX1NNT09USF9BQlMiLCJQQVRIU0VHX0NVUlZFVE9fUVVBRFJBVElDX1NNT09USF9BQlMiLCJQQVRIU0VHX0xJTkVUT19IT1JJWk9OVEFMX0FCUyIsIlBBVEhTRUdfTElORVRPX1ZFUlRJQ0FMX0FCUyIsIlBBVEhTRUdfTElORVRPX1JFTCIsIlBBVEhTRUdfTU9WRVRPX1JFTCIsIlBBVEhTRUdfQ1VSVkVUT19DVUJJQ19SRUwiLCJQQVRIU0VHX0NVUlZFVE9fUVVBRFJBVElDX1JFTCIsIlBBVEhTRUdfQVJDX1JFTCIsIlBBVEhTRUdfQ1VSVkVUT19DVUJJQ19TTU9PVEhfUkVMIiwiUEFUSFNFR19DVVJWRVRPX1FVQURSQVRJQ19TTU9PVEhfUkVMIiwiUEFUSFNFR19MSU5FVE9fSE9SSVpPTlRBTF9SRUwiLCJQQVRIU0VHX0xJTkVUT19WRVJUSUNBTF9SRUwiLCJQQVRIU0VHX1VOS05PV04iLCJQQVRIU0VHX0NMT1NFUEFUSCIsImFic1NlZyIsInJlbFNlZyIsInB1c2giLCJkcmF3UG9seWdvbk1hc2siLCJpdGVtIiwicGFydGljbGUiLCJQYXJ0aWNsZSIsIkVycm9yIiwiY29vcmRzIiwiZmxvb3IiLCJkaXN0YW5jZSIsImdldFRvdGFsTGVuZ3RoIiwicG9pbnQiLCJnZXRQb2ludEF0TGVuZ3RoIiwiaW5kZXgiLCJudW1iZXIiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBb0JBOzs7SUFHYUEsVztBQVdULHVCQUFZQyxTQUFaLEVBQWtDO0FBQUE7QUFBQSxTQVYzQkMsYUFVMkI7QUFBQSxTQVQzQkMsR0FTMkI7QUFBQSxTQVIz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b0YsTUFBTSxDQUFDcEYsQ0FEUDtBQUVISyxRQUFBQSxDQUFDLEVBQUUrRSxNQUFNLENBQUMvRTtBQUZQLE9BQVA7QUFJSCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQge0lDb29yZGluYXRlc30gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvb3JkaW5hdGVzXCI7XG5pbXBvcnQge1BvbHlnb25NYXNrVHlwZX0gZnJvbSBcIi4uL0VudW1zL1BvbHlnb25NYXNrVHlwZVwiO1xuaW1wb3J0IHtQYXJ0aWNsZX0gZnJvbSBcIi4vUGFydGljbGVcIjtcbmltcG9ydCB7UG9seWdvbk1hc2tJbmxpbmVBcnJhbmdlbWVudH0gZnJvbSBcIi4uL0VudW1zL1BvbHlnb25NYXNrSW5saW5lQXJyYW5nZW1lbnRcIjtcblxudHlwZSBTdmdBYnNvbHV0ZUNvb3JkaW5hdGVzVHlwZXMgPVxuICAgIHwgU1ZHUGF0aFNlZ0FyY0Fic1xuICAgIHwgU1ZHUGF0aFNlZ0N1cnZldG9DdWJpY0Fic1xuICAgIHwgU1ZHUGF0aFNlZ0N1cnZldG9DdWJpY1Ntb290aEFic1xuICAgIHwgU1ZHUGF0aFNlZ0N1cnZldG9RdWFkcmF0aWNBYnNcbiAgICB8IFNWR1BhdGhTZWdDdXJ2ZXRvUXVhZHJhdGljU21vb3RoQWJzXG4gICAgfCBTVkdQYXRoU2VnTGluZXRvQWJzXG4gICAgfCBTVkdQYXRoU2VnTW92ZXRvQWJzO1xuXG50eXBlIFN2Z1JlbGF0aXZlQ29vcmRpbmF0ZXNUeXBlcyA9XG4gICAgfCBTVkdQYXRoU2VnQXJjUmVsXG4gICAgfCBTVkdQYXRoU2VnQ3VydmV0b0N1YmljUmVsXG4gICAgfCBTVkdQYXRoU2VnQ3VydmV0b0N1YmljU21vb3RoUmVsXG4gICAgfCBTVkdQYXRoU2VnQ3VydmV0b1F1YWRyYXRpY1JlbFxuICAgIHwgU1ZHUGF0aFNlZ0N1cnZldG9RdWFkcmF0aWNTbW9vdGhSZWxcbiAgICB8IFNWR1BhdGhTZWdMaW5ldG9SZWxcbiAgICB8IFNWR1BhdGhTZWdNb3ZldG9SZWw7XG5cbi8qKlxuICogUG9seWdvbiBNYXNrIG1hbmFnZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFBvbHlnb25NYXNrIHtcbiAgICBwdWJsaWMgcmVkcmF3VGltZW91dD86IG51bWJlcjtcbiAgICBwdWJsaWMgcmF3PzogSUNvb3JkaW5hdGVzW107XG4gICAgcHVibGljIHN2Zz86IFNWR1NWR0VsZW1lbnQ7XG4gICAgcHVibGljIHBhdGg/OiBTVkdQYXRoRWxlbWVudDtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyOiBDb250YWluZXI7XG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBvZmZzZXQ/OiBJQ29vcmRpbmF0ZXM7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IENvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tJbnNpZGVQb2x5Z29uKHBvc2l0aW9uOiBJQ29vcmRpbmF0ZXMgfCB1bmRlZmluZWQgfCBudWxsKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucG9seWdvbi50eXBlID09PSBQb2x5Z29uTWFza1R5cGUubm9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3Vic3RhY2svcG9pbnQtaW4tcG9seWdvblxuICAgICAgICAvLyByYXktY2FzdGluZyBhbGdvcml0aG0gYmFzZWQgb25cbiAgICAgICAgLy8gaHR0cDovL3d3dy5lY3NlLnJwaS5lZHUvSG9tZXBhZ2VzL3dyZi9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuICAgICAgICBpZiAob3B0aW9ucy5wb2x5Z29uLnR5cGUgIT09IFBvbHlnb25NYXNrVHlwZS5pbmxpbmUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5yYXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJhdyA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5yYXcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnggOiBNYXRoLnJhbmRvbSgpICogY29udGFpbmVyLmNhbnZhcy5kaW1lbnNpb24ud2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHBvc2l0aW9uID8gcG9zaXRpb24ueSA6IE1hdGgucmFuZG9tKCkgKiBjb250YWluZXIuY2FudmFzLmRpbWVuc2lvbi5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgbGV0IGluc2lkZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSB0aGlzLnJhdy5sZW5ndGggLSAxOyBpIDwgdGhpcy5yYXcubGVuZ3RoOyBqID0gaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhpID0gdGhpcy5yYXdbaV0ueDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeWkgPSB0aGlzLnJhd1tpXS55O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB4aiA9IHRoaXMucmF3W2pdLng7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHlqID0gdGhpcy5yYXdbal0ueTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0ID0gKCh5aSA+IHkpICE9PSAoeWogPiB5KSkgJiYgKHggPCAoeGogLSB4aSkgKiAoeSAtIHlpKSAvICh5aiAtIHlpKSArIHhpKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW50ZXJzZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNpZGUgPSAhaW5zaWRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucG9seWdvbi50eXBlID09PSBQb2x5Z29uTWFza1R5cGUuaW5zaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnNpZGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnBvbHlnb24udHlwZSA9PT0gUG9seWdvbk1hc2tUeXBlLm91dHNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFpbnNpZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBwb2x5Z29uIGZvdW5kLCB5b3UgbmVlZCB0byBzcGVjaWZ5IFNWRyB1cmwgaW4gY29uZmlnLicpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHJhbmRvbVBvaW50SW5Qb2x5Z29uKCk6IElDb29yZGluYXRlcyB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG5cbiAgICAgICAgbGV0IHBvc2l0aW9uOiBJQ29vcmRpbmF0ZXM7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucG9seWdvbi50eXBlID09PSBQb2x5Z29uTWFza1R5cGUuaW5saW5lKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG9wdGlvbnMucG9seWdvbi5pbmxpbmVBcnJhbmdlbWVudCkge1xuICAgICAgICAgICAgICAgIGNhc2UgUG9seWdvbk1hc2tJbmxpbmVBcnJhbmdlbWVudC5yYW5kb21Qb2ludDpcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFJhbmRvbVBvaW50T25Qb2x5Z29uUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFBvbHlnb25NYXNrSW5saW5lQXJyYW5nZW1lbnQucmFuZG9tTGVuZ3RoOlxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuZ2V0UmFuZG9tUG9pbnRPblBvbHlnb25QYXRoQnlMZW5ndGgoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBQb2x5Z29uTWFza0lubGluZUFycmFuZ2VtZW50LmVxdWlkaXN0YW50OlxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuZ2V0RXF1aWRpc3RhbnRQb2ludE9uUG9seWdvblBhdGhCeUluZGV4KGNvbnRhaW5lci5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBQb2x5Z29uTWFza0lubGluZUFycmFuZ2VtZW50Lm9uZVBlclBvaW50OlxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5nZXRQb2luZ09uUG9seWdvblBhdGhCeUluZGV4KFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcnRpY2xlcy5hcnJheS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiBjb250YWluZXIuY2FudmFzLmRpbWVuc2lvbi53aWR0aCxcbiAgICAgICAgICAgICAgICB5OiBNYXRoLnJhbmRvbSgpICogY29udGFpbmVyLmNhbnZhcy5kaW1lbnNpb24uaGVpZ2h0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNoZWNrSW5zaWRlUG9seWdvbihwb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhbmRvbVBvaW50SW5Qb2x5Z29uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXBlbmRzIG9uIFNWR1BhdGhTZWcgQVBJIHBvbHlmaWxsIGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9nZXJzL3BhdGhzZWcgZm9yIENocm9tZVxuICAgICAqIERlcHJlY2F0ZSBTVkdQYXRoRWxlbWVudC5nZXRQYXRoU2VnQXRMZW5ndGggcmVtb3ZlZCBpbjpcbiAgICAgKiBDaHJvbWUgZm9yIGRlc2t0b3AgcmVsZWFzZSA2MlxuICAgICAqIENocm9tZSBmb3IgQW5kcm9pZCByZWxlYXNlIDYyXG4gICAgICogQW5kcm9pZCBXZWJWaWV3IHJlbGVhc2UgNjJcbiAgICAgKiBPcGVyYSByZWxlYXNlIDQ5XG4gICAgICogT3BlcmEgZm9yIEFuZHJvaWQgcmVsZWFzZSA0OVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBwYXJzZVN2Z1BhdGhUb1BvbHlnb24oc3ZnVXJsPzogc3RyaW5nKTogUHJvbWlzZTxJQ29vcmRpbmF0ZXNbXSB8IHVuZGVmaW5lZD4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuICAgICAgICBjb25zdCB1cmwgPSBzdmdVcmwgfHwgb3B0aW9ucy5wb2x5Z29uLnVybDtcblxuICAgICAgICAvLyBMb2FkIFNWRyBmcm9tIGZpbGUgb24gc2VydmVyXG4gICAgICAgIGlmICghdGhpcy5wYXRoIHx8ICF0aGlzLnN2Zykge1xuICAgICAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgICAgIGlmIChyZXEub2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4bWwgPSBhd2FpdCByZXEudGV4dCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWwsIFwiaW1hZ2Uvc3ZnK3htbFwiKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3ZnID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3ZnXCIpWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMucGF0aCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhdGhcIilbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ0c1BhcnRpY2xlcyBFcnJvciAtIGR1cmluZyBwb2x5Z29uIG1hc2sgZG93bmxvYWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NhbGUgPSBvcHRpb25zLnBvbHlnb24uc2NhbGU7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IHBhcnNlRmxvYXQodGhpcy5zdmcuZ2V0QXR0cmlidXRlKFwid2lkdGhcIikgfHwgXCIwXCIpICogc2NhbGU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gcGFyc2VGbG9hdCh0aGlzLnN2Zy5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIikgfHwgXCIwXCIpICogc2NhbGU7XG5cbiAgICAgICAgLyogY2VudGVyaW5nIG9mIHRoZSBwb2x5Z29uIG1hc2sgKi9cbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICAgICAgICB4OiBjb250YWluZXIuY2FudmFzLmRpbWVuc2lvbi53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IGNvbnRhaW5lci5jYW52YXMuZGltZW5zaW9uLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDIsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbGVuID0gdGhpcy5wYXRoLnBhdGhTZWdMaXN0Lm51bWJlck9mSXRlbXM7XG4gICAgICAgIGNvbnN0IHBvbHlnb25SYXc6IElDb29yZGluYXRlc1tdID0gW107XG4gICAgICAgIGNvbnN0IHAgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzZWdtZW50OiBTVkdQYXRoU2VnID0gdGhpcy5wYXRoLnBhdGhTZWdMaXN0LmdldEl0ZW0oaSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoc2VnbWVudC5wYXRoU2VnVHlwZSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gQWJzb2x1dGVcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19NT1ZFVE9fQUJTOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19MSU5FVE9fQUJTOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19DVVJWRVRPX0NVQklDX0FCUzpcbiAgICAgICAgICAgICAgICBjYXNlIHdpbmRvdy5TVkdQYXRoU2VnLlBBVEhTRUdfQ1VSVkVUT19RVUFEUkFUSUNfQUJTOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19BUkNfQUJTOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19DVVJWRVRPX0NVQklDX1NNT09USF9BQlM6XG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX0NVUlZFVE9fUVVBRFJBVElDX1NNT09USF9BQlM6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFic1NlZyA9IHNlZ21lbnQgYXMgU3ZnQWJzb2x1dGVDb29yZGluYXRlc1R5cGVzO1xuXG4gICAgICAgICAgICAgICAgICAgIHAueCA9IGFic1NlZy54O1xuICAgICAgICAgICAgICAgICAgICBwLnkgPSBhYnNTZWcueTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIHdpbmRvdy5TVkdQYXRoU2VnLlBBVEhTRUdfTElORVRPX0hPUklaT05UQUxfQUJTOlxuICAgICAgICAgICAgICAgICAgICBwLnggPSAoc2VnbWVudCBhcyBTVkdQYXRoU2VnTGluZXRvSG9yaXpvbnRhbEFicykueDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIHdpbmRvdy5TVkdQYXRoU2VnLlBBVEhTRUdfTElORVRPX1ZFUlRJQ0FMX0FCUzpcbiAgICAgICAgICAgICAgICAgICAgcC55ID0gKHNlZ21lbnQgYXMgU1ZHUGF0aFNlZ0xpbmV0b1ZlcnRpY2FsQWJzKS55O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gUmVsYXRpdmVcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19MSU5FVE9fUkVMOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19NT1ZFVE9fUkVMOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19DVVJWRVRPX0NVQklDX1JFTDpcbiAgICAgICAgICAgICAgICBjYXNlIHdpbmRvdy5TVkdQYXRoU2VnLlBBVEhTRUdfQ1VSVkVUT19RVUFEUkFUSUNfUkVMOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19BUkNfUkVMOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19DVVJWRVRPX0NVQklDX1NNT09USF9SRUw6XG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX0NVUlZFVE9fUVVBRFJBVElDX1NNT09USF9SRUw6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbFNlZyA9IHNlZ21lbnQgYXMgU3ZnUmVsYXRpdmVDb29yZGluYXRlc1R5cGVzO1xuXG4gICAgICAgICAgICAgICAgICAgIHAueCArPSByZWxTZWcueDtcbiAgICAgICAgICAgICAgICAgICAgcC55ICs9IHJlbFNlZy55O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19MSU5FVE9fSE9SSVpPTlRBTF9SRUw6XG4gICAgICAgICAgICAgICAgICAgIHAueCArPSAoc2VnbWVudCBhcyBTVkdQYXRoU2VnTGluZXRvSG9yaXpvbnRhbFJlbCkueDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX0xJTkVUT19WRVJUSUNBTF9SRUw6XG4gICAgICAgICAgICAgICAgICAgIHAueSArPSAoc2VnbWVudCBhcyBTVkdQYXRoU2VnTGluZXRvVmVydGljYWxSZWwpLnk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX1VOS05PV046XG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX0NMT1NFUEFUSDpcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7IC8vIFNraXAgdGhlIGNsb3NpbmcgcGF0aCAoYW5kIHRoZSBVTktOT1dOKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb2x5Z29uUmF3LnB1c2goe1xuICAgICAgICAgICAgICAgIHg6IHAueCAqIHNjYWxlICsgdGhpcy5vZmZzZXQueCxcbiAgICAgICAgICAgICAgICB5OiBwLnkgKiBzY2FsZSArIHRoaXMub2Zmc2V0LnksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb2x5Z29uUmF3O1xuICAgIH1cblxuICAgIHB1YmxpYyBkcmF3UG9seWdvbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG5cbiAgICAgICAgaWYgKHRoaXMucmF3KSB7XG4gICAgICAgICAgICBjb250YWluZXIuY2FudmFzLmRyYXdQb2x5Z29uTWFzayh0aGlzLnJhdyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZHJhd1BvaW50c09uUG9seWdvblBhdGgoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuXG4gICAgICAgIGlmICh0aGlzLnJhdykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMucmF3KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGl0ZW0ueCxcbiAgICAgICAgICAgICAgICAgICAgeTogaXRlbS55LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgcGFydGljbGUgPSBuZXcgUGFydGljbGUoY29udGFpbmVyLCBwb3NpdGlvbik7XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIucGFydGljbGVzLmFycmF5LnB1c2gocGFydGljbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSYW5kb21Qb2ludE9uUG9seWdvblBhdGgoKTogSUNvb3JkaW5hdGVzIHtcbiAgICAgICAgaWYgKCF0aGlzLnJhdyB8fCAhdGhpcy5yYXcubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoYE5vIHBvbHlnb24gZGF0YSBsb2FkZWQuYCk7XG5cbiAgICAgICAgY29uc3QgY29vcmRzID0gdGhpcy5yYXdbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5yYXcubGVuZ3RoKV07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGNvb3Jkcy54LFxuICAgICAgICAgICAgeTogY29vcmRzLnksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSYW5kb21Qb2ludE9uUG9seWdvblBhdGhCeUxlbmd0aCgpOiBJQ29vcmRpbmF0ZXMge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuXG4gICAgICAgIGlmICghdGhpcy5yYXcgfHwgIXRoaXMucmF3Lmxlbmd0aCB8fCAhdGhpcy5wYXRoKSB0aHJvdyBuZXcgRXJyb3IoYE5vIHBvbHlnb24gZGF0YSBsb2FkZWQuYCk7XG5cbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnBhdGguZ2V0VG90YWxMZW5ndGgoKSkgKyAxO1xuICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMucGF0aC5nZXRQb2ludEF0TGVuZ3RoKGRpc3RhbmNlKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogcG9pbnQueCAqIG9wdGlvbnMucG9seWdvbi5zY2FsZSArICh0aGlzLm9mZnNldD8ueCB8fCAwKSxcbiAgICAgICAgICAgIHk6IHBvaW50LnkgKiBvcHRpb25zLnBvbHlnb24uc2NhbGUgKyAodGhpcy5vZmZzZXQ/LnkgfHwgMCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRFcXVpZGlzdGFudFBvaW50T25Qb2x5Z29uUGF0aEJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IElDb29yZGluYXRlcyB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG5cbiAgICAgICAgaWYgKCF0aGlzLnJhdyB8fCAhdGhpcy5yYXcubGVuZ3RoIHx8ICF0aGlzLnBhdGgpIHRocm93IG5ldyBFcnJvcihgTm8gcG9seWdvbiBkYXRhIGxvYWRlZC5gKTtcblxuICAgICAgICBjb25zdCBkaXN0YW5jZSA9ICh0aGlzLnBhdGguZ2V0VG90YWxMZW5ndGgoKSAvIG9wdGlvbnMucGFydGljbGVzLm51bWJlci52YWx1ZSkgKiBpbmRleDtcbiAgICAgICAgY29uc3QgcG9pbnQgPSB0aGlzLnBhdGguZ2V0UG9pbnRBdExlbmd0aChkaXN0YW5jZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHBvaW50LnggKiBvcHRpb25zLnBvbHlnb24uc2NhbGUgKyAodGhpcy5vZmZzZXQ/LnggfHwgMCksXG4gICAgICAgICAgICB5OiBwb2ludC55ICogb3B0aW9ucy5wb2x5Z29uLnNjYWxlICsgKHRoaXMub2Zmc2V0Py55IHx8IDApLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UG9pbmdPblBvbHlnb25QYXRoQnlJbmRleChpbmRleDogbnVtYmVyKTogSUNvb3JkaW5hdGVzIHtcbiAgICAgICAgaWYgKCF0aGlzLnJhdyB8fCAhdGhpcy5yYXcubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoYE5vIHBvbHlnb24gZGF0YSBsb2FkZWQuYCk7XG5cbiAgICAgICAgY29uc3QgY29vcmRzID0gdGhpcy5yYXdbaW5kZXggJSB0aGlzLnJhdy5sZW5ndGhdO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBjb29yZHMueCxcbiAgICAgICAgICAgIHk6IGNvb3Jkcy55LFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==