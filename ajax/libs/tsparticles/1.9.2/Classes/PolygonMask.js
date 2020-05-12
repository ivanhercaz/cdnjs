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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL1BvbHlnb25NYXNrLnRzIl0sIm5hbWVzIjpbIlBvbHlnb25NYXNrIiwiY29udGFpbmVyIiwicmVkcmF3VGltZW91dCIsInJhdyIsInN2ZyIsInBhdGgiLCJ3aWR0aCIsImhlaWdodCIsIm9mZnNldCIsInBvc2l0aW9uIiwib3B0aW9ucyIsInBvbHlnb24iLCJ0eXBlIiwiUG9seWdvbk1hc2tUeXBlIiwibm9uZSIsImlubGluZSIsImxlbmd0aCIsIngiLCJNYXRoIiwicmFuZG9tIiwiY2FudmFzIiwiZGltZW5zaW9uIiwieSIsImluc2lkZSIsImkiLCJqIiwieGkiLCJ5aSIsInhqIiwieWoiLCJpbnRlcnNlY3QiLCJvdXRzaWRlIiwiY29uc29sZSIsImVycm9yIiwiaW5saW5lQXJyYW5nZW1lbnQiLCJQb2x5Z29uTWFza0lubGluZUFycmFuZ2VtZW50IiwicmFuZG9tUG9pbnQiLCJnZXRSYW5kb21Qb2ludE9uUG9seWdvblBhdGgiLCJyYW5kb21MZW5ndGgiLCJnZXRSYW5kb21Qb2ludE9uUG9seWdvblBhdGhCeUxlbmd0aCIsImVxdWlkaXN0YW50IiwiZ2V0RXF1aWRpc3RhbnRQb2ludE9uUG9seWdvblBhdGhCeUluZGV4IiwicGFydGljbGVzIiwiYXJyYXkiLCJvbmVQZXJQb2ludCIsImdldFBvaW5nT25Qb2x5Z29uUGF0aEJ5SW5kZXgiLCJjaGVja0luc2lkZVBvbHlnb24iLCJyYW5kb21Qb2ludEluUG9seWdvbiIsInN2Z1VybCIsInVybCIsImZldGNoIiwicmVxIiwib2siLCJ0ZXh0IiwieG1sIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY2FsZSIsInBhcnNlRmxvYXQiLCJnZXRBdHRyaWJ1dGUiLCJsZW4iLCJwYXRoU2VnTGlzdCIsIm51bWJlck9mSXRlbXMiLCJwb2x5Z29uUmF3IiwicCIsInNlZ21lbnQiLCJnZXRJdGVtIiwicGF0aFNlZ1R5cGUiLCJ3aW5kb3ciLCJTVkdQYXRoU2VnIiwiUEFUSFNFR19NT1ZFVE9fQUJTIiwiUEFUSFNFR19MSU5FVE9fQUJTIiwiUEFUSFNFR19DVVJWRVRPX0NVQklDX0FCUyIsIlBBVEhTRUdfQ1VSVkVUT19RVUFEUkFUSUNfQUJTIiwiUEFUSFNFR19BUkNfQUJTIiwiUEFUSFNFR19DVVJWRVRPX0NVQklDX1NNT09USF9BQlMiLCJQQVRIU0VHX0NVUlZFVE9fUVVBRFJBVElDX1NNT09USF9BQlMiLCJQQVRIU0VHX0xJTkVUT19IT1JJWk9OVEFMX0FCUyIsIlBBVEhTRUdfTElORVRPX1ZFUlRJQ0FMX0FCUyIsIlBBVEhTRUdfTElORVRPX1JFTCIsIlBBVEhTRUdfTU9WRVRPX1JFTCIsIlBBVEhTRUdfQ1VSVkVUT19DVUJJQ19SRUwiLCJQQVRIU0VHX0NVUlZFVE9fUVVBRFJBVElDX1JFTCIsIlBBVEhTRUdfQVJDX1JFTCIsIlBBVEhTRUdfQ1VSVkVUT19DVUJJQ19TTU9PVEhfUkVMIiwiUEFUSFNFR19DVVJWRVRPX1FVQURSQVRJQ19TTU9PVEhfUkVMIiwiUEFUSFNFR19MSU5FVE9fSE9SSVpPTlRBTF9SRUwiLCJQQVRIU0VHX0xJTkVUT19WRVJUSUNBTF9SRUwiLCJQQVRIU0VHX1VOS05PV04iLCJQQVRIU0VHX0NMT1NFUEFUSCIsImFic1NlZyIsInJlbFNlZyIsInB1c2giLCJjb250ZXh0IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJkcmF3IiwibGluZUNvbG9yIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiaXRlbSIsInBhcnRpY2xlIiwiUGFydGljbGUiLCJFcnJvciIsImNvb3JkcyIsImZsb29yIiwiZGlzdGFuY2UiLCJnZXRUb3RhbExlbmd0aCIsInBvaW50IiwiZ2V0UG9pbnRBdExlbmd0aCIsImluZGV4IiwibnVtYmVyIiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztBQUNBOztBQUNBOztB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LElBQTNDLEVBQWlELE1BQU0sSUFBSXdHLEtBQUosMkJBQU47QUFFakQsVUFBTUcsUUFBUSxHQUFJLEtBQUszRyxJQUFMLENBQVU0RyxjQUFWLEtBQTZCdkcsT0FBTyxDQUFDZ0MsU0FBUixDQUFrQjJFLE1BQWxCLENBQXlCQyxLQUF2RCxHQUFnRUYsS0FBakY7QUFDQSxVQUFNRixLQUFLLEdBQUcsS0FBSzdHLElBQUwsQ0FBVThHLGdCQUFWLENBQTJCSCxRQUEzQixDQUFkO0FBRUEsYUFBTztBQUNIL0YsUUFBQUEsQ0FBQyxFQUFFaUcsS0FBSyxDQUFDakcsQ0FBTixHQUFVUCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JpRCxLQUExQixJQUFtQyx1QkFBS3BELE1BQUwsZ0VBQWFTLENBQWIsS0FBa0IsQ0FBckQsQ0FEQTtBQUVISyxRQUFBQSxDQUFDLEVBQUU0RixLQUFLLENBQUM1RixDQUFOLEdBQVVaLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQmlELEtBQTFCLElBQW1DLHVCQUFLcEQsTUFBTCxnRUFBYWMsQ0FBYixLQUFrQixDQUFyRDtBQUZBLE9BQVA7QUFJSDs7O2lEQUVvQzhGLEssRUFBNkI7QUFDOUQsVUFBSSxDQUFDLEtBQUtqSCxHQUFOLElBQWEsQ0FBQyxLQUFLQSxHQUFMLENBQVNhLE1BQTNCLEVBQW1DLE1BQU0sSUFBSTZGLEtBQUosMkJBQU47QUFFbkMsVUFBTUMsTUFBTSxHQUFHLEtBQUszRyxHQUFMLENBQVNpSCxLQUFLLEdBQUcsS0FBS2pILEdBQUwsQ0FBU2EsTUFBMUIsQ0FBZjtBQUVBLGFBQU87QUFDSEMsUUFBQUEsQ0FBQyxFQUFFNkYsTUFBTSxDQUFDN0YsQ0FEUDtBQUVISyxRQUFBQSxDQUFDLEVBQUV3RixNQUFNLENBQUN4RjtBQUZQLE9BQVA7QUFJSCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQge0lDb29yZGluYXRlc30gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvb3JkaW5hdGVzXCI7XG5pbXBvcnQge1BvbHlnb25NYXNrVHlwZX0gZnJvbSBcIi4uL0VudW1zL1BvbHlnb25NYXNrVHlwZVwiO1xuaW1wb3J0IHtQYXJ0aWNsZX0gZnJvbSBcIi4vUGFydGljbGVcIjtcbmltcG9ydCB7UG9seWdvbk1hc2tJbmxpbmVBcnJhbmdlbWVudH0gZnJvbSBcIi4uL0VudW1zL1BvbHlnb25NYXNrSW5saW5lQXJyYW5nZW1lbnRcIjtcblxudHlwZSBTdmdBYnNvbHV0ZUNvb3JkaW5hdGVzVHlwZXMgPVxuICAgIHwgU1ZHUGF0aFNlZ0FyY0Fic1xuICAgIHwgU1ZHUGF0aFNlZ0N1cnZldG9DdWJpY0Fic1xuICAgIHwgU1ZHUGF0aFNlZ0N1cnZldG9DdWJpY1Ntb290aEFic1xuICAgIHwgU1ZHUGF0aFNlZ0N1cnZldG9RdWFkcmF0aWNBYnNcbiAgICB8IFNWR1BhdGhTZWdDdXJ2ZXRvUXVhZHJhdGljU21vb3RoQWJzXG4gICAgfCBTVkdQYXRoU2VnTGluZXRvQWJzXG4gICAgfCBTVkdQYXRoU2VnTW92ZXRvQWJzO1xuXG50eXBlIFN2Z1JlbGF0aXZlQ29vcmRpbmF0ZXNUeXBlcyA9XG4gICAgfCBTVkdQYXRoU2VnQXJjUmVsXG4gICAgfCBTVkdQYXRoU2VnQ3VydmV0b0N1YmljUmVsXG4gICAgfCBTVkdQYXRoU2VnQ3VydmV0b0N1YmljU21vb3RoUmVsXG4gICAgfCBTVkdQYXRoU2VnQ3VydmV0b1F1YWRyYXRpY1JlbFxuICAgIHwgU1ZHUGF0aFNlZ0N1cnZldG9RdWFkcmF0aWNTbW9vdGhSZWxcbiAgICB8IFNWR1BhdGhTZWdMaW5ldG9SZWxcbiAgICB8IFNWR1BhdGhTZWdNb3ZldG9SZWw7XG5cbi8qKlxuICogUG9seWdvbiBNYXNrIG1hbmFnZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFBvbHlnb25NYXNrIHtcbiAgICBwdWJsaWMgcmVkcmF3VGltZW91dD86IG51bWJlcjtcbiAgICBwdWJsaWMgcmF3PzogSUNvb3JkaW5hdGVzW107XG4gICAgcHVibGljIHN2Zz86IFNWR1NWR0VsZW1lbnQ7XG4gICAgcHVibGljIHBhdGg/OiBTVkdQYXRoRWxlbWVudDtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyOiBDb250YWluZXI7XG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBvZmZzZXQ/OiBJQ29vcmRpbmF0ZXM7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IENvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tJbnNpZGVQb2x5Z29uKHBvc2l0aW9uOiBJQ29vcmRpbmF0ZXMgfCB1bmRlZmluZWQgfCBudWxsKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucG9seWdvbi50eXBlID09PSBQb2x5Z29uTWFza1R5cGUubm9uZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3Vic3RhY2svcG9pbnQtaW4tcG9seWdvblxuICAgICAgICAvLyByYXktY2FzdGluZyBhbGdvcml0aG0gYmFzZWQgb25cbiAgICAgICAgLy8gaHR0cDovL3d3dy5lY3NlLnJwaS5lZHUvSG9tZXBhZ2VzL3dyZi9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuICAgICAgICBpZiAob3B0aW9ucy5wb2x5Z29uLnR5cGUgIT09IFBvbHlnb25NYXNrVHlwZS5pbmxpbmUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5yYXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJhdyA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5yYXcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnggOiBNYXRoLnJhbmRvbSgpICogY29udGFpbmVyLmNhbnZhcy5kaW1lbnNpb24ud2lkdGg7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHBvc2l0aW9uID8gcG9zaXRpb24ueSA6IE1hdGgucmFuZG9tKCkgKiBjb250YWluZXIuY2FudmFzLmRpbWVuc2lvbi5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgbGV0IGluc2lkZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSB0aGlzLnJhdy5sZW5ndGggLSAxOyBpIDwgdGhpcy5yYXcubGVuZ3RoOyBqID0gaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHhpID0gdGhpcy5yYXdbaV0ueDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeWkgPSB0aGlzLnJhd1tpXS55O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB4aiA9IHRoaXMucmF3W2pdLng7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHlqID0gdGhpcy5yYXdbal0ueTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0ID0gKCh5aSA+IHkpICE9PSAoeWogPiB5KSkgJiYgKHggPCAoeGogLSB4aSkgKiAoeSAtIHlpKSAvICh5aiAtIHlpKSArIHhpKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW50ZXJzZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNpZGUgPSAhaW5zaWRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucG9seWdvbi50eXBlID09PSBQb2x5Z29uTWFza1R5cGUuaW5zaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnNpZGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnBvbHlnb24udHlwZSA9PT0gUG9seWdvbk1hc2tUeXBlLm91dHNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFpbnNpZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBwb2x5Z29uIGZvdW5kLCB5b3UgbmVlZCB0byBzcGVjaWZ5IFNWRyB1cmwgaW4gY29uZmlnLicpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHJhbmRvbVBvaW50SW5Qb2x5Z29uKCk6IElDb29yZGluYXRlcyB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG5cbiAgICAgICAgbGV0IHBvc2l0aW9uOiBJQ29vcmRpbmF0ZXM7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucG9seWdvbi50eXBlID09PSBQb2x5Z29uTWFza1R5cGUuaW5saW5lKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG9wdGlvbnMucG9seWdvbi5pbmxpbmVBcnJhbmdlbWVudCkge1xuICAgICAgICAgICAgICAgIGNhc2UgUG9seWdvbk1hc2tJbmxpbmVBcnJhbmdlbWVudC5yYW5kb21Qb2ludDpcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFJhbmRvbVBvaW50T25Qb2x5Z29uUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFBvbHlnb25NYXNrSW5saW5lQXJyYW5nZW1lbnQucmFuZG9tTGVuZ3RoOlxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuZ2V0UmFuZG9tUG9pbnRPblBvbHlnb25QYXRoQnlMZW5ndGgoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBQb2x5Z29uTWFza0lubGluZUFycmFuZ2VtZW50LmVxdWlkaXN0YW50OlxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuZ2V0RXF1aWRpc3RhbnRQb2ludE9uUG9seWdvblBhdGhCeUluZGV4KGNvbnRhaW5lci5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBQb2x5Z29uTWFza0lubGluZUFycmFuZ2VtZW50Lm9uZVBlclBvaW50OlxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5nZXRQb2luZ09uUG9seWdvblBhdGhCeUluZGV4KFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcnRpY2xlcy5hcnJheS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiBjb250YWluZXIuY2FudmFzLmRpbWVuc2lvbi53aWR0aCxcbiAgICAgICAgICAgICAgICB5OiBNYXRoLnJhbmRvbSgpICogY29udGFpbmVyLmNhbnZhcy5kaW1lbnNpb24uaGVpZ2h0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNoZWNrSW5zaWRlUG9seWdvbihwb3NpdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhbmRvbVBvaW50SW5Qb2x5Z29uKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXBlbmRzIG9uIFNWR1BhdGhTZWcgQVBJIHBvbHlmaWxsIGh0dHBzOi8vZ2l0aHViLmNvbS9wcm9nZXJzL3BhdGhzZWcgZm9yIENocm9tZVxuICAgICAqIERlcHJlY2F0ZSBTVkdQYXRoRWxlbWVudC5nZXRQYXRoU2VnQXRMZW5ndGggcmVtb3ZlZCBpbjpcbiAgICAgKiBDaHJvbWUgZm9yIGRlc2t0b3AgcmVsZWFzZSA2MlxuICAgICAqIENocm9tZSBmb3IgQW5kcm9pZCByZWxlYXNlIDYyXG4gICAgICogQW5kcm9pZCBXZWJWaWV3IHJlbGVhc2UgNjJcbiAgICAgKiBPcGVyYSByZWxlYXNlIDQ5XG4gICAgICogT3BlcmEgZm9yIEFuZHJvaWQgcmVsZWFzZSA0OVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBwYXJzZVN2Z1BhdGhUb1BvbHlnb24oc3ZnVXJsPzogc3RyaW5nKTogUHJvbWlzZTxJQ29vcmRpbmF0ZXNbXSB8IHVuZGVmaW5lZD4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuICAgICAgICBjb25zdCB1cmwgPSBzdmdVcmwgfHwgb3B0aW9ucy5wb2x5Z29uLnVybDtcblxuICAgICAgICAvLyBMb2FkIFNWRyBmcm9tIGZpbGUgb24gc2VydmVyXG4gICAgICAgIGlmICghdGhpcy5wYXRoIHx8ICF0aGlzLnN2Zykge1xuICAgICAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgICAgIGlmIChyZXEub2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4bWwgPSBhd2FpdCByZXEudGV4dCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWwsIFwiaW1hZ2Uvc3ZnK3htbFwiKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3ZnID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3ZnXCIpWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMucGF0aCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhdGhcIilbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ0c1BhcnRpY2xlcyBFcnJvciAtIGR1cmluZyBwb2x5Z29uIG1hc2sgZG93bmxvYWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NhbGUgPSBvcHRpb25zLnBvbHlnb24uc2NhbGU7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IHBhcnNlRmxvYXQodGhpcy5zdmcuZ2V0QXR0cmlidXRlKFwid2lkdGhcIikgfHwgXCIwXCIpICogc2NhbGU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gcGFyc2VGbG9hdCh0aGlzLnN2Zy5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIikgfHwgXCIwXCIpICogc2NhbGU7XG5cbiAgICAgICAgLyogY2VudGVyaW5nIG9mIHRoZSBwb2x5Z29uIG1hc2sgKi9cbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICAgICAgICB4OiBjb250YWluZXIuY2FudmFzLmRpbWVuc2lvbi53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IGNvbnRhaW5lci5jYW52YXMuZGltZW5zaW9uLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDIsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbGVuID0gdGhpcy5wYXRoLnBhdGhTZWdMaXN0Lm51bWJlck9mSXRlbXM7XG4gICAgICAgIGNvbnN0IHBvbHlnb25SYXc6IElDb29yZGluYXRlc1tdID0gW107XG4gICAgICAgIGNvbnN0IHAgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzZWdtZW50OiBTVkdQYXRoU2VnID0gdGhpcy5wYXRoLnBhdGhTZWdMaXN0LmdldEl0ZW0oaSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoc2VnbWVudC5wYXRoU2VnVHlwZSkge1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gQWJzb2x1dGVcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19NT1ZFVE9fQUJTOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19MSU5FVE9fQUJTOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19DVVJWRVRPX0NVQklDX0FCUzpcbiAgICAgICAgICAgICAgICBjYXNlIHdpbmRvdy5TVkdQYXRoU2VnLlBBVEhTRUdfQ1VSVkVUT19RVUFEUkFUSUNfQUJTOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19BUkNfQUJTOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19DVVJWRVRPX0NVQklDX1NNT09USF9BQlM6XG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX0NVUlZFVE9fUVVBRFJBVElDX1NNT09USF9BQlM6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFic1NlZyA9IHNlZ21lbnQgYXMgU3ZnQWJzb2x1dGVDb29yZGluYXRlc1R5cGVzO1xuXG4gICAgICAgICAgICAgICAgICAgIHAueCA9IGFic1NlZy54O1xuICAgICAgICAgICAgICAgICAgICBwLnkgPSBhYnNTZWcueTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIHdpbmRvdy5TVkdQYXRoU2VnLlBBVEhTRUdfTElORVRPX0hPUklaT05UQUxfQUJTOlxuICAgICAgICAgICAgICAgICAgICBwLnggPSAoc2VnbWVudCBhcyBTVkdQYXRoU2VnTGluZXRvSG9yaXpvbnRhbEFicykueDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIHdpbmRvdy5TVkdQYXRoU2VnLlBBVEhTRUdfTElORVRPX1ZFUlRJQ0FMX0FCUzpcbiAgICAgICAgICAgICAgICAgICAgcC55ID0gKHNlZ21lbnQgYXMgU1ZHUGF0aFNlZ0xpbmV0b1ZlcnRpY2FsQWJzKS55O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gUmVsYXRpdmVcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19MSU5FVE9fUkVMOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19NT1ZFVE9fUkVMOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19DVVJWRVRPX0NVQklDX1JFTDpcbiAgICAgICAgICAgICAgICBjYXNlIHdpbmRvdy5TVkdQYXRoU2VnLlBBVEhTRUdfQ1VSVkVUT19RVUFEUkFUSUNfUkVMOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19BUkNfUkVMOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19DVVJWRVRPX0NVQklDX1NNT09USF9SRUw6XG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX0NVUlZFVE9fUVVBRFJBVElDX1NNT09USF9SRUw6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbFNlZyA9IHNlZ21lbnQgYXMgU3ZnUmVsYXRpdmVDb29yZGluYXRlc1R5cGVzO1xuXG4gICAgICAgICAgICAgICAgICAgIHAueCArPSByZWxTZWcueDtcbiAgICAgICAgICAgICAgICAgICAgcC55ICs9IHJlbFNlZy55O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19MSU5FVE9fSE9SSVpPTlRBTF9SRUw6XG4gICAgICAgICAgICAgICAgICAgIHAueCArPSAoc2VnbWVudCBhcyBTVkdQYXRoU2VnTGluZXRvSG9yaXpvbnRhbFJlbCkueDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX0xJTkVUT19WRVJUSUNBTF9SRUw6XG4gICAgICAgICAgICAgICAgICAgIHAueSArPSAoc2VnbWVudCBhcyBTVkdQYXRoU2VnTGluZXRvVmVydGljYWxSZWwpLnk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX1VOS05PV046XG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX0NMT1NFUEFUSDpcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7IC8vIFNraXAgdGhlIGNsb3NpbmcgcGF0aCAoYW5kIHRoZSBVTktOT1dOKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb2x5Z29uUmF3LnB1c2goe1xuICAgICAgICAgICAgICAgIHg6IHAueCAqIHNjYWxlICsgdGhpcy5vZmZzZXQueCxcbiAgICAgICAgICAgICAgICB5OiBwLnkgKiBzY2FsZSArIHRoaXMub2Zmc2V0LnksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb2x5Z29uUmF3O1xuICAgIH1cblxuICAgIHB1YmxpYyBkcmF3UG9seWdvbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb250YWluZXIub3B0aW9ucztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNvbnRhaW5lci5jYW52YXMuY29udGV4dDtcblxuICAgICAgICBpZiAoY29udGV4dCAmJiB0aGlzLnJhdykge1xuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKHRoaXMucmF3WzBdLngsIHRoaXMucmF3WzBdLnkpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMucmF3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5saW5lVG8odGhpcy5yYXdbaV0ueCwgdGhpcy5yYXdbaV0ueSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gb3B0aW9ucy5wb2x5Z29uLmRyYXcubGluZUNvbG9yO1xuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBvcHRpb25zLnBvbHlnb24uZHJhdy5saW5lV2lkdGg7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRyYXdQb2ludHNPblBvbHlnb25QYXRoKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcblxuICAgICAgICBpZiAodGhpcy5yYXcpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLnJhdykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBpdGVtLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IGl0ZW0ueSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRpY2xlID0gbmV3IFBhcnRpY2xlKGNvbnRhaW5lciwgcG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcnRpY2xlcy5hcnJheS5wdXNoKHBhcnRpY2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UmFuZG9tUG9pbnRPblBvbHlnb25QYXRoKCk6IElDb29yZGluYXRlcyB7XG4gICAgICAgIGlmICghdGhpcy5yYXcgfHwgIXRoaXMucmF3Lmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKGBObyBwb2x5Z29uIGRhdGEgbG9hZGVkLmApO1xuXG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMucmF3W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucmF3Lmxlbmd0aCldO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBjb29yZHMueCxcbiAgICAgICAgICAgIHk6IGNvb3Jkcy55LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UmFuZG9tUG9pbnRPblBvbHlnb25QYXRoQnlMZW5ndGgoKTogSUNvb3JkaW5hdGVzIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb250YWluZXIub3B0aW9ucztcblxuICAgICAgICBpZiAoIXRoaXMucmF3IHx8ICF0aGlzLnJhdy5sZW5ndGggfHwgIXRoaXMucGF0aCkgdGhyb3cgbmV3IEVycm9yKGBObyBwb2x5Z29uIGRhdGEgbG9hZGVkLmApO1xuXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5wYXRoLmdldFRvdGFsTGVuZ3RoKCkpICsgMTtcbiAgICAgICAgY29uc3QgcG9pbnQgPSB0aGlzLnBhdGguZ2V0UG9pbnRBdExlbmd0aChkaXN0YW5jZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHBvaW50LnggKiBvcHRpb25zLnBvbHlnb24uc2NhbGUgKyAodGhpcy5vZmZzZXQ/LnggfHwgMCksXG4gICAgICAgICAgICB5OiBwb2ludC55ICogb3B0aW9ucy5wb2x5Z29uLnNjYWxlICsgKHRoaXMub2Zmc2V0Py55IHx8IDApLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RXF1aWRpc3RhbnRQb2ludE9uUG9seWdvblBhdGhCeUluZGV4KGluZGV4OiBudW1iZXIpOiBJQ29vcmRpbmF0ZXMge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuXG4gICAgICAgIGlmICghdGhpcy5yYXcgfHwgIXRoaXMucmF3Lmxlbmd0aCB8fCAhdGhpcy5wYXRoKSB0aHJvdyBuZXcgRXJyb3IoYE5vIHBvbHlnb24gZGF0YSBsb2FkZWQuYCk7XG5cbiAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAodGhpcy5wYXRoLmdldFRvdGFsTGVuZ3RoKCkgLyBvcHRpb25zLnBhcnRpY2xlcy5udW1iZXIudmFsdWUpICogaW5kZXg7XG4gICAgICAgIGNvbnN0IHBvaW50ID0gdGhpcy5wYXRoLmdldFBvaW50QXRMZW5ndGgoZGlzdGFuY2UpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBwb2ludC54ICogb3B0aW9ucy5wb2x5Z29uLnNjYWxlICsgKHRoaXMub2Zmc2V0Py54IHx8IDApLFxuICAgICAgICAgICAgeTogcG9pbnQueSAqIG9wdGlvbnMucG9seWdvbi5zY2FsZSArICh0aGlzLm9mZnNldD8ueSB8fCAwKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFBvaW5nT25Qb2x5Z29uUGF0aEJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IElDb29yZGluYXRlcyB7XG4gICAgICAgIGlmICghdGhpcy5yYXcgfHwgIXRoaXMucmF3Lmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKGBObyBwb2x5Z29uIGRhdGEgbG9hZGVkLmApO1xuXG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMucmF3W2luZGV4ICUgdGhpcy5yYXcubGVuZ3RoXTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogY29vcmRzLngsXG4gICAgICAgICAgICB5OiBjb29yZHMueSxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=