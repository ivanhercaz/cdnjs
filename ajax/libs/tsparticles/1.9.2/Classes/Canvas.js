"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Canvas = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Constants = require("./Utils/Constants");

var _PolygonMaskType = require("../Enums/PolygonMaskType");

var _Utils = require("./Utils/Utils");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL0NhbnZhcy50cyJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb250YWluZXIiLCJ0YWdJZCIsImVsZW1lbnQiLCJjb250ZXh0IiwiZGltZW5zaW9uIiwicHhSYXRpbyIsImNhbnZhc0VsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiQ29uc3RhbnRzIiwiY2FudmFzQ2xhc3MiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiZ2V0Q29udGV4dCIsInNpemUiLCJwYWludCIsIm9wdGlvbnMiLCJpbnRlcmFjdGl2aXR5IiwiZXZlbnRzIiwicmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJldGluYSIsImlzUmV0aW5hIiwicGFydGljbGVzIiwibW92ZSIsImVuYWJsZSIsImNsZWFyIiwiaW5pdCIsImRyYXciLCJkZW5zaXR5QXV0b1BhcnRpY2xlcyIsInBvbHlnb24iLCJ0eXBlIiwiUG9seWdvbk1hc2tUeXBlIiwibm9uZSIsInJlZHJhd1RpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicGFyc2VTdmdQYXRoVG9Qb2x5Z29uIiwicmF3IiwiYmFja2dyb3VuZE1hc2siLCJjb3ZlciIsImNvbG9yIiwiVXRpbHMiLCJnZXRQYXJ0aWNsZUNvbG9yIiwicGFpbnRCYXNlIiwiZ2V0U3R5bGVGcm9tQ29sb3IiLCJiYXNlQ29sb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNsZWFyUmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztJQUdhQSxNO0FBQ1Q7Ozs7QUFJQTs7OztBQUlBOzs7O0FBSUE7Ozs7QUFJQTs7OztBQUtBOzs7O0FBS0E7Ozs7O0FBS0Esa0JBQVlDLFNBQVosRUFBa0NDLEtBQWxDLEVBQWlEO0FBQUE7QUFBQSxTQTVCMUNDLE9BNEIwQztBQUFBLFNBeEIxQ0MsT0F3QjBDO0FB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QUNBLGFBQUs5QyxPQUFMLENBQWFnRCxRQUFiLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLEtBQUsvQyxTQUFMLENBQWVTLEtBQTNDLEVBQWtELEtBQUtULFNBQUwsQ0FBZU8sTUFBakU7QUFDSDtBQUNKO0FBRUQ7Ozs7Ozs0QkFHcUI7QUFDakIsVUFBTVgsU0FBUyxHQUFHLEtBQUtBLFNBQXZCO0FBQ0EsVUFBTWtCLE9BQU8sR0FBR2xCLFNBQVMsQ0FBQ2tCLE9BQTFCOztBQUVBLFVBQUlBLE9BQU8sQ0FBQ3dCLGNBQVIsQ0FBdUJkLE1BQTNCLEVBQW1DO0FBQy9CLGFBQUtYLEtBQUw7QUFDSCxPQUZELE1BRU87QUFDSCxZQUFJLEtBQUtkLE9BQVQsRUFBa0I7QUFDZCxlQUFLQSxPQUFMLENBQWFpRCxTQUFiLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLEtBQUtoRCxTQUFMLENBQWVTLEtBQTVDLEVBQW1ELEtBQUtULFNBQUwsQ0FBZU8sTUFBbEU7QUFDSDtBQUNKO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gXCIuL1V0aWxzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IHtQb2x5Z29uTWFza1R5cGV9IGZyb20gXCIuLi9FbnVtcy9Qb2x5Z29uTWFza1R5cGVcIjtcbmltcG9ydCB7SURpbWVuc2lvbn0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSURpbWVuc2lvblwiO1xuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4vVXRpbHMvVXRpbHNcIjtcblxuLyoqXG4gKiBDYW52YXMgbWFuYWdlclxuICovXG5leHBvcnQgY2xhc3MgQ2FudmFzIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcGFydGljbGVzIGNhbnZhc1xuICAgICAqL1xuICAgIHB1YmxpYyBlbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBUaGUgcGFydGljbGVzIGNhbnZhcyBjb250ZXh0XG4gICAgICovXG4gICAgcHVibGljIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw7XG4gICAgLyoqXG4gICAgICogVGhlIHBhcnRpY2xlcyBjYW52YXMgZGltZW5zaW9uXG4gICAgICovXG4gICAgcHVibGljIGRpbWVuc2lvbjogSURpbWVuc2lvbjtcbiAgICAvKipcbiAgICAgKiBUaGUgcGFydGljbGVzIGNhbnZhcyBjb250YWluZXIgZWxlbWVudCBpZFxuICAgICAqL1xuICAgIHB1YmxpYyB0YWdJZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSByYXRpbyB1c2VkIGJ5IHRoZSBwYXJ0aWNsZXMgY2FudmFzXG4gICAgICovXG4gICAgcHVibGljIHB4UmF0aW86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJlbnQgY29udGFpbmVyXG4gICAgICovXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IENvbnRhaW5lcjtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIG9mIGNhbnZhcyBtYW5hZ2VyXG4gICAgICogQHBhcmFtIGNvbnRhaW5lciB0aGUgcGFyZW50IGNvbnRhaW5lclxuICAgICAqIEBwYXJhbSB0YWdJZCB0aGUgcGFydGljbGVzIGNvbnRhaW5lciBlbGVtZW50IGlkXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBDb250YWluZXIsIHRhZ0lkOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YWdJZH0gPiAuJHtDb25zdGFudHMuY2FudmFzQ2xhc3N9YCkgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGNhbnZhc0VsO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbiA9IHtcbiAgICAgICAgICAgIGhlaWdodDogY2FudmFzRWwub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGg6IGNhbnZhc0VsLm9mZnNldFdpZHRoLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRhZ0lkID0gdGFnSWQ7XG4gICAgICAgIHRoaXMucHhSYXRpbyA9IDE7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuZWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLSB0c1BhcnRpY2xlcyBmdW5jdGlvbnMgLSBjYW52YXMgLS0tLS0tLS0tLS0tICovXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIGNhbnZhcyBlbGVtZW50XG4gICAgICovXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2l6ZSgpO1xuICAgICAgICB0aGlzLnBhaW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgc2l6ZSBvZiB0aGUgY2FudmFzXG4gICAgICovXG4gICAgcHVibGljIHNpemUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LndpZHRoID0gdGhpcy5kaW1lbnNpb24ud2lkdGg7XG4gICAgICAgIHRoaXMuZWxlbWVudC5oZWlnaHQgPSB0aGlzLmRpbWVuc2lvbi5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaW50ZXJhY3Rpdml0eS5ldmVudHMucmVzaXplKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaW1lbnNpb24ud2lkdGggPSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5kaW1lbnNpb24uaGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgICAgIC8qIHJlc2l6ZSBjYW52YXMgKi9cbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLnJldGluYS5pc1JldGluYSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpbWVuc2lvbi53aWR0aCAqPSB0aGlzLnB4UmF0aW87XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGltZW5zaW9uLmhlaWdodCAqPSB0aGlzLnB4UmF0aW87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LndpZHRoID0gdGhpcy5kaW1lbnNpb24ud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmhlaWdodCA9IHRoaXMuZGltZW5zaW9uLmhlaWdodDtcblxuICAgICAgICAgICAgICAgIC8qIHJlcGFpbnQgY2FudmFzIG9uIGFuaW0gZGlzYWJsZWQgKi9cbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMucGFydGljbGVzLm1vdmUuZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJ0aWNsZXMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcnRpY2xlcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJ0aWNsZXMuZHJhdygwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKiBkZW5zaXR5IHBhcnRpY2xlcyBlbmFibGVkICovXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5wb2x5Z29uLnR5cGUgIT09IFBvbHlnb25NYXNrVHlwZS5ub25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIucG9seWdvbi5yZWRyYXdUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoY29udGFpbmVyLnBvbHlnb24ucmVkcmF3VGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucG9seWdvbi5yZWRyYXdUaW1lb3V0ID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucG9seWdvbi5yYXcgPSBhd2FpdCBjb250YWluZXIucG9seWdvbi5wYXJzZVN2Z1BhdGhUb1BvbHlnb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJ0aWNsZXMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJ0aWNsZXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcnRpY2xlcy5kcmF3KDApO1xuICAgICAgICAgICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFpbnRzIHRoZSBjYW52YXMgYmFja2dyb3VuZFxuICAgICAqL1xuICAgIHB1YmxpYyBwYWludCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb250YWluZXIub3B0aW9ucztcblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0KSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5iYWNrZ3JvdW5kTWFzay5lbmFibGUgJiYgb3B0aW9ucy5iYWNrZ3JvdW5kTWFzay5jb3Zlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gVXRpbHMuZ2V0UGFydGljbGVDb2xvcihvcHRpb25zLmJhY2tncm91bmRNYXNrLmNvdmVyKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb2xvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhaW50QmFzZShVdGlscy5nZXRTdHlsZUZyb21Db2xvcihjb2xvcikpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFpbnRCYXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhaW50QmFzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwYWludEJhc2UoYmFzZUNvbG9yOiBzdHJpbmcgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gYmFzZUNvbG9yO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9uLndpZHRoLCB0aGlzLmRpbWVuc2lvbi5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBjYW52YXMgY29udGVudFxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb250YWluZXIub3B0aW9ucztcblxuICAgICAgICBpZiAob3B0aW9ucy5iYWNrZ3JvdW5kTWFzay5lbmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMucGFpbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9uLndpZHRoLCB0aGlzLmRpbWVuc2lvbi5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19