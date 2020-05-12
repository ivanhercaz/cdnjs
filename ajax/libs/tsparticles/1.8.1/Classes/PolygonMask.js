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
            var xi = this.raw[i][0];
            var yi = this.raw[i][1];
            var xj = this.raw[j][0];
            var yj = this.raw[j][1];
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
      var position = {
        x: Math.random() * container.canvas.dimension.width,
        y: Math.random() * container.canvas.dimension.height
      };

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
                polygonRaw.push([p.x * scale + this.offset.x, p.y * scale + this.offset.y]);

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
        context.moveTo(this.raw[0][0], this.raw[0][1]);

        for (var i = 1; i < this.raw.length; i++) {
          context.lineTo(this.raw[i][0], this.raw[i][1]);
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
              x: item[0],
              y: item[1]
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
  }]);
  return PolygonMask;
}();

exports.PolygonMask = PolygonMask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL1BvbHlnb25NYXNrLnRzIl0sIm5hbWVzIjpbIlBvbHlnb25NYXNrIiwiY29udGFpbmVyIiwicmVkcmF3VGltZW91dCIsInJhdyIsInN2ZyIsInBhdGgiLCJ3aWR0aCIsImhlaWdodCIsIm9mZnNldCIsInBvc2l0aW9uIiwib3B0aW9ucyIsInBvbHlnb24iLCJ0eXBlIiwiUG9seWdvbk1hc2tUeXBlIiwibm9uZSIsImlubGluZSIsImxlbmd0aCIsIngiLCJNYXRoIiwicmFuZG9tIiwiY2FudmFzIiwiZGltZW5zaW9uIiwieSIsImluc2lkZSIsImkiLCJqIiwieGkiLCJ5aSIsInhqIiwieWoiLCJpbnRlcnNlY3QiLCJvdXRzaWRlIiwiY29uc29sZSIsImVycm9yIiwiY2hlY2tJbnNpZGVQb2x5Z29uIiwicmFuZG9tUG9pbnRJblBvbHlnb24iLCJzdmdVcmwiLCJ1cmwiLCJmZXRjaCIsInJlcSIsIm9rIiwidGV4dCIsInhtbCIsInBhcnNlciIsIkRPTVBhcnNlciIsImRvYyIsInBhcnNlRnJvbVN0cmluZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2NhbGUiLCJwYXJzZUZsb2F0IiwiZ2V0QXR0cmlidXRlIiwibGVuIiwicGF0aFNlZ0xpc3QiLCJudW1iZXJPZkl0ZW1zIiwicG9seWdvblJhdyIsInAiLCJzZWdtZW50IiwiZ2V0SXRlbSIsInBhdGhTZWdUeXBlIiwid2luZG93IiwiU1ZHUGF0aFNlZyIsIlBBVEhTRUdfTU9WRVRPX0FCUyIsIlBBVEhTRUdfTElORVRPX0FCUyIsIlBBVEhTRUdfQ1VSVkVUT19DVUJJQ19BQlMiLCJQQVRIU0VHX0NVUlZFVE9fUVVBRFJBVElDX0FCUyIsIlBBVEhTRUdfQVJDX0FCUyIsIlBBVEhTRUdfQ1VSVkVUT19DVUJJQ19TTU9PVEhfQUJTIiwiUEFUSFNFR19DVVJWRVRPX1FVQURSQVRJQ19TTU9PVEhfQUJTIiwiUEFUSFNFR19MSU5FVE9fSE9SSVpPTlRBTF9BQlMiLCJQQVRIU0VHX0xJTkVUT19WRVJUSUNBTF9BQlMiLCJQQVRIU0VHX0xJTkVUT19SRUwiLCJQQVRIU0VHX01PVkVUT19SRUwiLCJQQVRIU0VHX0NVUlZFVE9fQ1VCSUNfUkVMIiwiUEFUSFNFR19DVVJWRVRPX1FVQURSQVRJQ19SRUwiLCJQQVRIU0VHX0FSQ19SRUwiLCJQQVRIU0VHX0NVUlZFVE9fQ1VCSUNfU01PT1RIX1JFTCIsIlBBVEhTRUdfQ1VSVkVUT19RVUFEUkFUSUNfU01PT1RIX1JFTCIsIlBBVEhTRUdfTElORVRPX0hPUklaT05UQUxfUkVMIiwiUEFUSFNFR19MSU5FVE9fVkVSVElDQUxfUkVMIiwiUEFUSFNFR19VTktOT1dOIiwiUEFUSFNFR19DTE9TRVBBVEgiLCJhYnNTZWciLCJyZWxTZWciLCJwdXNoIiwiY29udGV4dCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInN0cm9rZVN0eWxlIiwiZHJhdyIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsInN0cm9rZSIsIml0ZW0iLCJwYXJ0aWNsZSIsIlBhcnRpY2xlIiwicGFydGljbGVzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztBQUNBOztBQW9CQTs7O0lBR2FBLFc7QUFXVCx1QkFBWUMsU0FBWixFQUFrQztBQUFBO0FBQUEsU0FWM0JDLGFBVTJCO0FBQUEsU0FUM0JDLEdBUzJCO0FBQUEsU0FSM0JDLEdBUTJCO0FBQUEsU0FQM0JDLElBTzJCO0FBQUEsU0FMakJKLFNBS2lCO0FBQUEsU0FKMUJLLEtBSTBCO0FBQUEsU0FIMUJDLE1BRzBCO0FBQUEsU0FGMUJDLE1BRTBCO0FBQzlCLFNBQUtQLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0ssS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNIOzs7O3VDQUV5QkUsUSxFQUFvRDtBQUMxRSxVQUFNUixTQUFTLEdBQUcsS0FBS0EsU0FBdkI7QUFDQSxVQUFNUyxPQUFPLEdBQUdULFNBQVMsQ0FBQ1Ms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LFNBQTNDO0FBQ0FQLFFBQUFBLE9BQU8sQ0FBQ1EsU0FBUixHQUFvQmxGLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQitFLElBQWhCLENBQXFCRSxTQUF6QztBQUNBUixRQUFBQSxPQUFPLENBQUNTLE1BQVI7QUFDSDtBQUNKOzs7OENBRXNDO0FBQ25DLFVBQU01RixTQUFTLEdBQUcsS0FBS0EsU0FBdkI7O0FBRUEsVUFBSSxLQUFLRSxHQUFULEVBQWM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDViwrQkFBbUIsS0FBS0EsR0FBeEIsOEhBQTZCO0FBQUEsZ0JBQWxCMkYsSUFBa0I7QUFDekIsZ0JBQU1yRixRQUFRLEdBQUc7QUFDYlEsY0FBQUEsQ0FBQyxFQUFFNkUsSUFBSSxDQUFDLENBQUQsQ0FETTtBQUVieEUsY0FBQUEsQ0FBQyxFQUFFd0UsSUFBSSxDQUFDLENBQUQ7QUFGTSxhQUFqQjtBQUlBLGdCQUFNQyxRQUFRLEdBQUcsSUFBSUMsa0JBQUosQ0FBYS9GLFNBQWIsRUFBd0JRLFFBQXhCLENBQWpCO0FBRUFSLFlBQUFBLFNBQVMsQ0FBQ2dHLFNBQVYsQ0FBb0JDLEtBQXBCLENBQTBCZixJQUExQixDQUErQlksUUFBL0I7QUFDSDtBQVRTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVYjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCB7SUNvb3JkaW5hdGVzfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29vcmRpbmF0ZXNcIjtcbmltcG9ydCB7UG9seWdvbk1hc2tUeXBlfSBmcm9tIFwiLi4vRW51bXMvUG9seWdvbk1hc2tUeXBlXCI7XG5pbXBvcnQge1BhcnRpY2xlfSBmcm9tIFwiLi9QYXJ0aWNsZVwiO1xuXG50eXBlIFN2Z0Fic29sdXRlQ29vcmRpbmF0ZXNUeXBlcyA9XG4gICAgfCBTVkdQYXRoU2VnQXJjQWJzXG4gICAgfCBTVkdQYXRoU2VnQ3VydmV0b0N1YmljQWJzXG4gICAgfCBTVkdQYXRoU2VnQ3VydmV0b0N1YmljU21vb3RoQWJzXG4gICAgfCBTVkdQYXRoU2VnQ3VydmV0b1F1YWRyYXRpY0Fic1xuICAgIHwgU1ZHUGF0aFNlZ0N1cnZldG9RdWFkcmF0aWNTbW9vdGhBYnNcbiAgICB8IFNWR1BhdGhTZWdMaW5ldG9BYnNcbiAgICB8IFNWR1BhdGhTZWdNb3ZldG9BYnM7XG5cbnR5cGUgU3ZnUmVsYXRpdmVDb29yZGluYXRlc1R5cGVzID1cbiAgICB8IFNWR1BhdGhTZWdBcmNSZWxcbiAgICB8IFNWR1BhdGhTZWdDdXJ2ZXRvQ3ViaWNSZWxcbiAgICB8IFNWR1BhdGhTZWdDdXJ2ZXRvQ3ViaWNTbW9vdGhSZWxcbiAgICB8IFNWR1BhdGhTZWdDdXJ2ZXRvUXVhZHJhdGljUmVsXG4gICAgfCBTVkdQYXRoU2VnQ3VydmV0b1F1YWRyYXRpY1Ntb290aFJlbFxuICAgIHwgU1ZHUGF0aFNlZ0xpbmV0b1JlbFxuICAgIHwgU1ZHUGF0aFNlZ01vdmV0b1JlbDtcblxuLyoqXG4gKiBQb2x5Z29uIE1hc2sgbWFuYWdlclxuICovXG5leHBvcnQgY2xhc3MgUG9seWdvbk1hc2sge1xuICAgIHB1YmxpYyByZWRyYXdUaW1lb3V0PzogbnVtYmVyO1xuICAgIHB1YmxpYyByYXc/OiBudW1iZXJbXVtdO1xuICAgIHB1YmxpYyBzdmc/OiBTVkdTVkdFbGVtZW50O1xuICAgIHB1YmxpYyBwYXRoPzogU1ZHUGF0aEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xuICAgIHByaXZhdGUgb2Zmc2V0PzogSUNvb3JkaW5hdGVzO1xuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrSW5zaWRlUG9seWdvbihwb3NpdGlvbjogSUNvb3JkaW5hdGVzIHwgdW5kZWZpbmVkIHwgbnVsbCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnBvbHlnb24udHlwZSA9PT0gUG9seWdvbk1hc2tUeXBlLm5vbmUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N1YnN0YWNrL3BvaW50LWluLXBvbHlnb25cbiAgICAgICAgLy8gcmF5LWNhc3RpbmcgYWxnb3JpdGhtIGJhc2VkIG9uXG4gICAgICAgIC8vIGh0dHA6Ly93d3cuZWNzZS5ycGkuZWR1L0hvbWVwYWdlcy93cmYvUmVzZWFyY2gvU2hvcnRfTm90ZXMvcG5wb2x5Lmh0bWxcbiAgICAgICAgaWYgKG9wdGlvbnMucG9seWdvbi50eXBlICE9PSBQb2x5Z29uTWFza1R5cGUuaW5saW5lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucmF3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yYXcgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucmF3Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gcG9zaXRpb24gPyBwb3NpdGlvbi54IDogTWF0aC5yYW5kb20oKSAqIGNvbnRhaW5lci5jYW52YXMuZGltZW5zaW9uLndpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnkgOiBNYXRoLnJhbmRvbSgpICogY29udGFpbmVyLmNhbnZhcy5kaW1lbnNpb24uaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGxldCBpbnNpZGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gdGhpcy5yYXcubGVuZ3RoIC0gMTsgaSA8IHRoaXMucmF3Lmxlbmd0aDsgaiA9IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB4aSA9IHRoaXMucmF3W2ldWzBdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB5aSA9IHRoaXMucmF3W2ldWzFdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB4aiA9IHRoaXMucmF3W2pdWzBdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB5aiA9IHRoaXMucmF3W2pdWzFdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnRlcnNlY3QgPSAoKHlpID4geSkgIT09ICh5aiA+IHkpKSAmJiAoeCA8ICh4aiAtIHhpKSAqICh5IC0geWkpIC8gKHlqIC0geWkpICsgeGkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnRlcnNlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2lkZSA9ICFpbnNpZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5wb2x5Z29uLnR5cGUgPT09IFBvbHlnb25NYXNrVHlwZS5pbnNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc2lkZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucG9seWdvbi50eXBlID09PSBQb2x5Z29uTWFza1R5cGUub3V0c2lkZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWluc2lkZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIHBvbHlnb24gZm91bmQsIHlvdSBuZWVkIHRvIHNwZWNpZnkgU1ZHIHVybCBpbiBjb25maWcuJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmFuZG9tUG9pbnRJblBvbHlnb24oKTogSUNvb3JkaW5hdGVzIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogTWF0aC5yYW5kb20oKSAqIGNvbnRhaW5lci5jYW52YXMuZGltZW5zaW9uLndpZHRoLFxuICAgICAgICAgICAgeTogTWF0aC5yYW5kb20oKSAqIGNvbnRhaW5lci5jYW52YXMuZGltZW5zaW9uLmhlaWdodCxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5jaGVja0luc2lkZVBvbHlnb24ocG9zaXRpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYW5kb21Qb2ludEluUG9seWdvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVwZW5kcyBvbiBTVkdQYXRoU2VnIEFQSSBwb2x5ZmlsbCBodHRwczovL2dpdGh1Yi5jb20vcHJvZ2Vycy9wYXRoc2VnIGZvciBDaHJvbWVcbiAgICAgKiBEZXByZWNhdGUgU1ZHUGF0aEVsZW1lbnQuZ2V0UGF0aFNlZ0F0TGVuZ3RoIHJlbW92ZWQgaW46XG4gICAgICogQ2hyb21lIGZvciBkZXNrdG9wIHJlbGVhc2UgNjJcbiAgICAgKiBDaHJvbWUgZm9yIEFuZHJvaWQgcmVsZWFzZSA2MlxuICAgICAqIEFuZHJvaWQgV2ViVmlldyByZWxlYXNlIDYyXG4gICAgICogT3BlcmEgcmVsZWFzZSA0OVxuICAgICAqIE9wZXJhIGZvciBBbmRyb2lkIHJlbGVhc2UgNDlcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgcGFyc2VTdmdQYXRoVG9Qb2x5Z29uKHN2Z1VybD86IHN0cmluZyk6IFByb21pc2U8bnVtYmVyW11bXSB8IHVuZGVmaW5lZD4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuICAgICAgICBjb25zdCB1cmwgPSBzdmdVcmwgfHwgb3B0aW9ucy5wb2x5Z29uLnVybDtcblxuICAgICAgICAvLyBMb2FkIFNWRyBmcm9tIGZpbGUgb24gc2VydmVyXG4gICAgICAgIGlmICghdGhpcy5wYXRoIHx8ICF0aGlzLnN2Zykge1xuICAgICAgICAgICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgICAgIGlmIChyZXEub2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4bWwgPSBhd2FpdCByZXEudGV4dCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWwsIFwiaW1hZ2Uvc3ZnK3htbFwiKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3ZnID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3ZnXCIpWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMucGF0aCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhdGhcIilbMF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ0c1BhcnRpY2xlcyBFcnJvciAtIGR1cmluZyBwb2x5Z29uIG1hc2sgZG93bmxvYWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NhbGUgPSBvcHRpb25zLnBvbHlnb24uc2NhbGU7XG5cbiAgICAgICAgdGhpcy53aWR0aCA9IHBhcnNlRmxvYXQodGhpcy5zdmcuZ2V0QXR0cmlidXRlKFwid2lkdGhcIikgfHwgXCIwXCIpICogc2NhbGU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gcGFyc2VGbG9hdCh0aGlzLnN2Zy5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIikgfHwgXCIwXCIpICogc2NhbGU7XG5cbiAgICAgICAgLyogY2VudGVyaW5nIG9mIHRoZSBwb2x5Z29uIG1hc2sgKi9cbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7XG4gICAgICAgICAgICB4OiBjb250YWluZXIuY2FudmFzLmRpbWVuc2lvbi53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMixcbiAgICAgICAgICAgIHk6IGNvbnRhaW5lci5jYW52YXMuZGltZW5zaW9uLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDIsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbGVuID0gdGhpcy5wYXRoLnBhdGhTZWdMaXN0Lm51bWJlck9mSXRlbXM7XG4gICAgICAgIGNvbnN0IHBvbHlnb25SYXcgPSBbXTtcbiAgICAgICAgY29uc3QgcCA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNlZ21lbnQ6IFNWR1BhdGhTZWcgPSB0aGlzLnBhdGgucGF0aFNlZ0xpc3QuZ2V0SXRlbShpKTtcblxuICAgICAgICAgICAgc3dpdGNoIChzZWdtZW50LnBhdGhTZWdUeXBlKSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBBYnNvbHV0ZVxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX01PVkVUT19BQlM6XG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX0xJTkVUT19BQlM6XG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX0NVUlZFVE9fQ1VCSUNfQUJTOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19DVVJWRVRPX1FVQURSQVRJQ19BQlM6XG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX0FSQ19BQlM6XG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX0NVUlZFVE9fQ1VCSUNfU01PT1RIX0FCUzpcbiAgICAgICAgICAgICAgICBjYXNlIHdpbmRvdy5TVkdQYXRoU2VnLlBBVEhTRUdfQ1VSVkVUT19RVUFEUkFUSUNfU01PT1RIX0FCUzpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWJzU2VnID0gc2VnbWVudCBhcyBTdmdBYnNvbHV0ZUNvb3JkaW5hdGVzVHlwZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgcC54ID0gYWJzU2VnLng7XG4gICAgICAgICAgICAgICAgICAgIHAueSA9IGFic1NlZy55O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19MSU5FVE9fSE9SSVpPTlRBTF9BQlM6XG4gICAgICAgICAgICAgICAgICAgIHAueCA9IChzZWdtZW50IGFzIFNWR1BhdGhTZWdMaW5ldG9Ib3Jpem9udGFsQWJzKS54O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19MSU5FVE9fVkVSVElDQUxfQUJTOlxuICAgICAgICAgICAgICAgICAgICBwLnkgPSAoc2VnbWVudCBhcyBTVkdQYXRoU2VnTGluZXRvVmVydGljYWxBYnMpLnk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBSZWxhdGl2ZVxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX0xJTkVUT19SRUw6XG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX01PVkVUT19SRUw6XG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX0NVUlZFVE9fQ1VCSUNfUkVMOlxuICAgICAgICAgICAgICAgIGNhc2Ugd2luZG93LlNWR1BhdGhTZWcuUEFUSFNFR19DVVJWRVRPX1FVQURSQVRJQ19SRUw6XG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX0FSQ19SRUw6XG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX0NVUlZFVE9fQ1VCSUNfU01PT1RIX1JFTDpcbiAgICAgICAgICAgICAgICBjYXNlIHdpbmRvdy5TVkdQYXRoU2VnLlBBVEhTRUdfQ1VSVkVUT19RVUFEUkFUSUNfU01PT1RIX1JFTDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsU2VnID0gc2VnbWVudCBhcyBTdmdSZWxhdGl2ZUNvb3JkaW5hdGVzVHlwZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgcC54ICs9IHJlbFNlZy54O1xuICAgICAgICAgICAgICAgICAgICBwLnkgKz0gcmVsU2VnLnk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSB3aW5kb3cuU1ZHUGF0aFNlZy5QQVRIU0VHX0xJTkVUT19IT1JJWk9OVEFMX1JFTDpcbiAgICAgICAgICAgICAgICAgICAgcC54ICs9IChzZWdtZW50IGFzIFNWR1BhdGhTZWdMaW5ldG9Ib3Jpem9udGFsUmVsKS54O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHdpbmRvdy5TVkdQYXRoU2VnLlBBVEhTRUdfTElORVRPX1ZFUlRJQ0FMX1JFTDpcbiAgICAgICAgICAgICAgICAgICAgcC55ICs9IChzZWdtZW50IGFzIFNWR1BhdGhTZWdMaW5ldG9WZXJ0aWNhbFJlbCkueTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIHdpbmRvdy5TVkdQYXRoU2VnLlBBVEhTRUdfVU5LTk9XTjpcbiAgICAgICAgICAgICAgICBjYXNlIHdpbmRvdy5TVkdQYXRoU2VnLlBBVEhTRUdfQ0xPU0VQQVRIOlxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gU2tpcCB0aGUgY2xvc2luZyBwYXRoIChhbmQgdGhlIFVOS05PV04pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvbHlnb25SYXcucHVzaChbcC54ICogc2NhbGUgKyB0aGlzLm9mZnNldC54LCBwLnkgKiBzY2FsZSArIHRoaXMub2Zmc2V0LnldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb2x5Z29uUmF3O1xuICAgIH1cblxuICAgIHB1YmxpYyBkcmF3UG9seWdvbigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb250YWluZXIub3B0aW9ucztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNvbnRhaW5lci5jYW52YXMuY29udGV4dDtcblxuICAgICAgICBpZiAoY29udGV4dCAmJiB0aGlzLnJhdykge1xuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQubW92ZVRvKHRoaXMucmF3WzBdWzBdLCB0aGlzLnJhd1swXVsxXSk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5yYXcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmxpbmVUbyh0aGlzLnJhd1tpXVswXSwgdGhpcy5yYXdbaV1bMV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IG9wdGlvbnMucG9seWdvbi5kcmF3LmxpbmVDb2xvcjtcbiAgICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gb3B0aW9ucy5wb2x5Z29uLmRyYXcubGluZVdpZHRoO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkcmF3UG9pbnRzT25Qb2x5Z29uUGF0aCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG5cbiAgICAgICAgaWYgKHRoaXMucmF3KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5yYXcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogaXRlbVswXSxcbiAgICAgICAgICAgICAgICAgICAgeTogaXRlbVsxXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRpY2xlID0gbmV3IFBhcnRpY2xlKGNvbnRhaW5lciwgcG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcnRpY2xlcy5hcnJheS5wdXNoKHBhcnRpY2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==