"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Drawer = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Container = require("./Container");

var _ShapeType = require("../Enums/ShapeType");

var Drawer = /*#__PURE__*/function () {
  function Drawer(container) {
    (0, _classCallCheck2["default"])(this, Drawer);
    this.container = void 0;
    this.container = container;
  }

  (0, _createClass2["default"])(Drawer, [{
    key: "draw",
    value: function draw(timestamp) {
      var _this = this;

      var container = this.container;
      var options = container.options; // FPS limit logic
      // If we are too fast, just draw without updating

      var fpsLimit = options.fpsLimit > 0 ? options.fpsLimit : 60;

      if (timestamp < container.lastFrameTime + 1000 / fpsLimit) {
        container.drawAnimationFrame = _Container.Container.requestFrame(function (t) {
          return _this.draw(t);
        });
        return;
      }

      var delta = timestamp - container.lastFrameTime;
      container.lastFrameTime = timestamp;

      if (options.particles.shape.type === _ShapeType.ShapeType.image && container.images.every(function (img) {
        return img.error;
      })) {
        return;
      }

      container.particles.draw(delta);

      if (container.drawAnimationFrame !== undefined && !options.particles.move.enable) {
        _Container.Container.cancelAnimation(container.drawAnimationFrame);
      } else {
        container.drawAnimationFrame = _Container.Container.requestFrame(function (t) {
          return _this.draw(t);
        });
      }
    }
  }]);
  return Drawer;
}();

exports.Drawer = Drawer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL0RyYXdlci50cyJdLCJuYW1lcyI6WyJEcmF3ZXIiLCJjb250YWluZXIiLCJ0aW1lc3RhbXAiLCJvcHRpb25zIiwiZnBzTGltaXQiLCJsYXN0RnJhbWVUaW1lIiwiZHJhd0FuaW1hdGlvbkZyYW1lIiwiQ29udGFpbmVyIiwicmVxdWVzdEZyYW1lIiwidCIsImRyYXciLCJkZWx0YSIsInBhcnRpY2xlcyIsInNoYXBlIiwidHlwZSIsIlNoYXBlVHlwZSIsImltYWdlIiwiaW1hZ2VzIiwiZXZlcnkiLCJpbWciLCJlcnJvciIsInVuZGVmaW5lZCIsIm1vdmUiLCJlbmFibGUiLCJjYW5jZWxBbmltYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7SUFFYUEsTTtBQUdULGtCQUFZQyxTQUFaLEVBQWtDO0FBQUE7QUFBQSxTQUZqQkEsU0FFaUI7QUFDOUIsU0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDSDs7Ozt5QkFFV0MsUyxFQUFzQztBQUFBOztBQUM5QyxVQUFNRCxTQUFTLEdBQUcsS0FBS0EsU0FBdkI7QUFDQSxVQUFNRSxPQUFPLEdBQUdGLFNBQVMsQ0FBQ0UsT0FBMUIsQ0FGOEMsQ0FJOUM7QUFDQTs7QUFDQSxVQUFNQyxRQUFRLEdBQUdELE9BQU8sQ0FBQ0MsUUFBUixHQUFtQixDQUFuQixHQUF1QkQsT0FBTyxDQUFDQyxRQUEvQixHQUEwQyxFQUEzRDs7QUFFQSxVQUFJRixTQUFTLEdBQUdELFNBQVMsQ0FBQ0ksYUFBVixHQUEyQixPQUFPRCxRQUFsRCxFQUE2RDtBQUN6REgsUUFBQUEsU0FBUyxDQUFDSyxrQkFBVixHQUErQkMscUJBQVVDLFlBQVYsQ0FBdUIsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPLEtBQUksQ0FBQ0MsSUFBTCxDQUFVRCxDQUFWLENBQVA7QUFBQSxTQUF2QixDQUEvQjtBQUNBO0FBQ0g7O0FBRUQsVUFBTUUsS0FBSyxHQUFHVCxTQUFTLEdBQUdELFNBQVMsQ0FBQ0ksYUFBcEM7QUFFQUosTUFBQUEsU0FBUyxDQUFDSSxhQUFWLEdBQTBCSCxTQUExQjs7QUFFQSxVQUFJQyxPQUFPLENBQUNTLFNBQVIsQ0FBa0JDLEtBQWxCLENBQXdCQyxJQUF4QixLQUFpQ0MscUJBQVVDLEtBQTNDLElBQW9EZixTQUFTLENBQUNnQixNQUFWLENBQWlCQyxLQUFqQixDQUF1QixVQUFDQyxHQUFEO0FBQUEsZUFBU0EsR0FBRyxDQUFDQyxLQUFiO0FBQUEsT0FBdkIsQ0FBeEQsRUFBb0c7QUFDaEc7QUFDSDs7QUFFRG5CLE1BQUFBLFNBQVMsQ0FBQ1csU0FBVixDQUFvQkYsSUFBcEIsQ0FBeUJDLEtBQXpCOztBQUVBLFVBQUlWLFNBQVMsQ0FBQ0ssa0JBQVYsS0FBaUNlLFNBQWpDLElBQThDLENBQUNsQixPQUFPLENBQUNTLFNBQVIsQ0FBa0JVLElBQWxCLENBQXVCQyxNQUExRSxFQUFrRjtBQUM5RWhCLDZCQUFVaUIsZUFBVixDQUEwQnZCLFNBQVMsQ0FBQ0ssa0JBQXBDO0FBQ0gsT0FGRCxNQUVPO0FBQ0hMLFFBQUFBLFNBQVMsQ0FBQ0ssa0JBQVYsR0FBK0JDLHFCQUFVQyxZQUFWLENBQXVCLFVBQUNDLENBQUQ7QUFBQSxpQkFBTyxLQUFJLENBQUNDLElBQUwsQ0FBVUQsQ0FBVixDQUFQO0FBQUEsU0FBdkIsQ0FBL0I7QUFDSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IHtTaGFwZVR5cGV9IGZyb20gXCIuLi9FbnVtcy9TaGFwZVR5cGVcIjtcblxuZXhwb3J0IGNsYXNzIERyYXdlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IENvbnRhaW5lcjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBkcmF3KHRpbWVzdGFtcDogRE9NSGlnaFJlc1RpbWVTdGFtcCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuXG4gICAgICAgIC8vIEZQUyBsaW1pdCBsb2dpY1xuICAgICAgICAvLyBJZiB3ZSBhcmUgdG9vIGZhc3QsIGp1c3QgZHJhdyB3aXRob3V0IHVwZGF0aW5nXG4gICAgICAgIGNvbnN0IGZwc0xpbWl0ID0gb3B0aW9ucy5mcHNMaW1pdCA+IDAgPyBvcHRpb25zLmZwc0xpbWl0IDogNjA7XG5cbiAgICAgICAgaWYgKHRpbWVzdGFtcCA8IGNvbnRhaW5lci5sYXN0RnJhbWVUaW1lICsgKDEwMDAgLyBmcHNMaW1pdCkpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5kcmF3QW5pbWF0aW9uRnJhbWUgPSBDb250YWluZXIucmVxdWVzdEZyYW1lKCh0KSA9PiB0aGlzLmRyYXcodCkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsdGEgPSB0aW1lc3RhbXAgLSBjb250YWluZXIubGFzdEZyYW1lVGltZTtcblxuICAgICAgICBjb250YWluZXIubGFzdEZyYW1lVGltZSA9IHRpbWVzdGFtcDtcblxuICAgICAgICBpZiAob3B0aW9ucy5wYXJ0aWNsZXMuc2hhcGUudHlwZSA9PT0gU2hhcGVUeXBlLmltYWdlICYmIGNvbnRhaW5lci5pbWFnZXMuZXZlcnkoKGltZykgPT4gaW1nLmVycm9yKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLnBhcnRpY2xlcy5kcmF3KGRlbHRhKTtcblxuICAgICAgICBpZiAoY29udGFpbmVyLmRyYXdBbmltYXRpb25GcmFtZSAhPT0gdW5kZWZpbmVkICYmICFvcHRpb25zLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkge1xuICAgICAgICAgICAgQ29udGFpbmVyLmNhbmNlbEFuaW1hdGlvbihjb250YWluZXIuZHJhd0FuaW1hdGlvbkZyYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5kcmF3QW5pbWF0aW9uRnJhbWUgPSBDb250YWluZXIucmVxdWVzdEZyYW1lKCh0KSA9PiB0aGlzLmRyYXcodCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19