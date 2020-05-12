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
      if (this.context) {
        this.context.fillStyle = "rgba(255, 255, 255, 0)";
        this.context.fillRect(0, 0, this.dimension.width, this.dimension.height);
      }
    }
    /**
     * Clears the canvas content
     */

  }, {
    key: "clear",
    value: function clear() {
      if (this.context) {
        this.context.clearRect(0, 0, this.dimension.width, this.dimension.height);
      }
    }
  }]);
  return Canvas;
}();

exports.Canvas = Canvas;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL0NhbnZhcy50cyJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb250YWluZXIiLCJ0YWdJZCIsImVsZW1lbnQiLCJjb250ZXh0IiwiZGltZW5zaW9uIiwicHhSYXRpbyIsImNhbnZhc0VsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiQ29uc3RhbnRzIiwiY2FudmFzQ2xhc3MiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwiZ2V0Q29udGV4dCIsInNpemUiLCJwYWludCIsIm9wdGlvbnMiLCJpbnRlcmFjdGl2aXR5IiwiZXZlbnRzIiwicmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJldGluYSIsImlzUmV0aW5hIiwicGFydGljbGVzIiwibW92ZSIsImVuYWJsZSIsImNsZWFyIiwiaW5pdCIsImRyYXciLCJkZW5zaXR5QXV0b1BhcnRpY2xlcyIsInBvbHlnb24iLCJ0eXBlIiwiUG9seWdvbk1hc2tUeXBlIiwibm9uZSIsInJlZHJhd1RpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicGFyc2VTdmdQYXRoVG9Qb2x5Z29uIiwicmF3IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjbGVhclJlY3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOztBQUdBOzs7SUFHYUEsTTtBQUNUOzs7O0FBSUE7Ozs7QUFJQTs7OztBQUlBOzs7O0FBSUE7Ozs7QUFLQTs7OztBQUtBOzs7OztBQUtBLGtCQUFZQyxTQUFaLEVBQWtDQyxLQUFsQyxFQUFpRDtBQUFBO0FBQUEsU0E1QjFDQyxPQTRCMEM7QUFBQSxTQXhCMUNDLE9Bd0IwQztBQUFBLFNBcEIxQ0MsU0FvQjBDO0FBQUEsU0FoQjFDSCxLQWdCMEM7QUFBQSxTQVoxQ0ksT0FZMEM7QUFBQSxTQVBoQ0wsU0FPZ0M7QUFDN0MsUUFBTU0sUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFB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dUI7QUFFekN6QyxzQkFBQUEsU0FBUyxDQUFDMEIsU0FBVixDQUFvQkcsS0FBcEI7QUFDQTdCLHNCQUFBQSxTQUFTLENBQUMwQixTQUFWLENBQW9CSSxJQUFwQjtBQUNBOUIsc0JBQUFBLFNBQVMsQ0FBQzBCLFNBQVYsQ0FBb0JLLElBQXBCLENBQXlCLENBQXpCOztBQUp5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFELElBS3pDLEdBTHlDLENBQTVDO0FBTUg7QUFDSixTQW5DRDtBQW9DSDtBQUNKO0FBRUQ7Ozs7Ozs0QkFHcUI7QUFDakIsVUFBSSxLQUFLNUIsT0FBVCxFQUFrQjtBQUNkLGFBQUtBLE9BQUwsQ0FBYXVDLFNBQWIsR0FBeUIsd0JBQXpCO0FBQ0EsYUFBS3ZDLE9BQUwsQ0FBYXdDLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsS0FBS3ZDLFNBQUwsQ0FBZVMsS0FBM0MsRUFBa0QsS0FBS1QsU0FBTCxDQUFlTyxNQUFqRTtBQUNIO0FBQ0o7QUFFRDs7Ozs7OzRCQUdxQjtBQUNqQixVQUFJLEtBQUtSLE9BQVQsRUFBa0I7QUFDZCxhQUFLQSxPQUFMLENBQWF5QyxTQUFiLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLEtBQUt4QyxTQUFMLENBQWVTLEtBQTVDLEVBQW1ELEtBQUtULFNBQUwsQ0FBZU8sTUFBbEU7QUFDSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tIFwiLi9VdGlscy9Db25zdGFudHNcIjtcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCB7UG9seWdvbk1hc2tUeXBlfSBmcm9tIFwiLi4vRW51bXMvUG9seWdvbk1hc2tUeXBlXCI7XG5pbXBvcnQge0lEaW1lbnNpb259IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lEaW1lbnNpb25cIjtcblxuLyoqXG4gKiBDYW52YXMgbWFuYWdlclxuICovXG5leHBvcnQgY2xhc3MgQ2FudmFzIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcGFydGljbGVzIGNhbnZhc1xuICAgICAqL1xuICAgIHB1YmxpYyBlbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAvKipcbiAgICAgKiBUaGUgcGFydGljbGVzIGNhbnZhcyBjb250ZXh0XG4gICAgICovXG4gICAgcHVibGljIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw7XG4gICAgLyoqXG4gICAgICogVGhlIHBhcnRpY2xlcyBjYW52YXMgZGltZW5zaW9uXG4gICAgICovXG4gICAgcHVibGljIGRpbWVuc2lvbjogSURpbWVuc2lvbjtcbiAgICAvKipcbiAgICAgKiBUaGUgcGFydGljbGVzIGNhbnZhcyBjb250YWluZXIgZWxlbWVudCBpZFxuICAgICAqL1xuICAgIHB1YmxpYyB0YWdJZDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSByYXRpbyB1c2VkIGJ5IHRoZSBwYXJ0aWNsZXMgY2FudmFzXG4gICAgICovXG4gICAgcHVibGljIHB4UmF0aW86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJlbnQgY29udGFpbmVyXG4gICAgICovXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IENvbnRhaW5lcjtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIG9mIGNhbnZhcyBtYW5hZ2VyXG4gICAgICogQHBhcmFtIGNvbnRhaW5lciB0aGUgcGFyZW50IGNvbnRhaW5lclxuICAgICAqIEBwYXJhbSB0YWdJZCB0aGUgcGFydGljbGVzIGNvbnRhaW5lciBlbGVtZW50IGlkXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBDb250YWluZXIsIHRhZ0lkOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YWdJZH0gPiAuJHtDb25zdGFudHMuY2FudmFzQ2xhc3N9YCkgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGNhbnZhc0VsO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbiA9IHtcbiAgICAgICAgICAgIGhlaWdodDogY2FudmFzRWwub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGg6IGNhbnZhc0VsLm9mZnNldFdpZHRoLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRhZ0lkID0gdGFnSWQ7XG4gICAgICAgIHRoaXMucHhSYXRpbyA9IDE7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuZWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLSB0c1BhcnRpY2xlcyBmdW5jdGlvbnMgLSBjYW52YXMgLS0tLS0tLS0tLS0tICovXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIGNhbnZhcyBlbGVtZW50XG4gICAgICovXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2l6ZSgpO1xuICAgICAgICB0aGlzLnBhaW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgc2l6ZSBvZiB0aGUgY2FudmFzXG4gICAgICovXG4gICAgcHVibGljIHNpemUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LndpZHRoID0gdGhpcy5kaW1lbnNpb24ud2lkdGg7XG4gICAgICAgIHRoaXMuZWxlbWVudC5oZWlnaHQgPSB0aGlzLmRpbWVuc2lvbi5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaW50ZXJhY3Rpdml0eS5ldmVudHMucmVzaXplKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaW1lbnNpb24ud2lkdGggPSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5kaW1lbnNpb24uaGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgICAgIC8qIHJlc2l6ZSBjYW52YXMgKi9cbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLnJldGluYS5pc1JldGluYSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpbWVuc2lvbi53aWR0aCAqPSB0aGlzLnB4UmF0aW87XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGltZW5zaW9uLmhlaWdodCAqPSB0aGlzLnB4UmF0aW87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LndpZHRoID0gdGhpcy5kaW1lbnNpb24ud2lkdGg7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmhlaWdodCA9IHRoaXMuZGltZW5zaW9uLmhlaWdodDtcblxuICAgICAgICAgICAgICAgIC8qIHJlcGFpbnQgY2FudmFzIG9uIGFuaW0gZGlzYWJsZWQgKi9cbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMucGFydGljbGVzLm1vdmUuZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJ0aWNsZXMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcnRpY2xlcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJ0aWNsZXMuZHJhdygwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKiBkZW5zaXR5IHBhcnRpY2xlcyBlbmFibGVkICovXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5wb2x5Z29uLnR5cGUgIT09IFBvbHlnb25NYXNrVHlwZS5ub25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIucG9seWdvbi5yZWRyYXdUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoY29udGFpbmVyLnBvbHlnb24ucmVkcmF3VGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucG9seWdvbi5yZWRyYXdUaW1lb3V0ID0gc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucG9seWdvbi5yYXcgPSBhd2FpdCBjb250YWluZXIucG9seWdvbi5wYXJzZVN2Z1BhdGhUb1BvbHlnb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJ0aWNsZXMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJ0aWNsZXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcnRpY2xlcy5kcmF3KDApO1xuICAgICAgICAgICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFpbnRzIHRoZSBjYW52YXMgYmFja2dyb3VuZFxuICAgICAqL1xuICAgIHB1YmxpYyBwYWludCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiO1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9uLndpZHRoLCB0aGlzLmRpbWVuc2lvbi5oZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBjYW52YXMgY29udGVudFxuICAgICAqL1xuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmRpbWVuc2lvbi53aWR0aCwgdGhpcy5kaW1lbnNpb24uaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==