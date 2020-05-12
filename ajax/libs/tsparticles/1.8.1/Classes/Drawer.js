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

      var fpsLimit = options.fpsLimit;

      if (fpsLimit > 0 && timestamp < container.lastFrameTime + 1000 / fpsLimit) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL0RyYXdlci50cyJdLCJuYW1lcyI6WyJEcmF3ZXIiLCJjb250YWluZXIiLCJ0aW1lc3RhbXAiLCJvcHRpb25zIiwiZnBzTGltaXQiLCJsYXN0RnJhbWVUaW1lIiwiZHJhd0FuaW1hdGlvbkZyYW1lIiwiQ29udGFpbmVyIiwicmVxdWVzdEZyYW1lIiwidCIsImRyYXciLCJkZWx0YSIsInBhcnRpY2xlcyIsInNoYXBlIiwidHlwZSIsIlNoYXBlVHlwZSIsImltYWdlIiwiaW1hZ2VzIiwiZXZlcnkiLCJpbWciLCJlcnJvciIsInVuZGVmaW5lZCIsIm1vdmUiLCJlbmFibGUiLCJjYW5jZWxBbmltYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7SUFFYUEsTTtBQUdULGtCQUFZQyxTQUFaLEVBQWtDO0FBQUE7QUFBQSxTQUZqQkEsU0FFaUI7QUFDOUIsU0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDSDs7Ozt5QkFFV0MsUyxFQUFzQztBQUFBOztBQUM5QyxVQUFNRCxTQUFTLEdBQUcsS0FBS0EsU0FBdkI7QUFDQSxVQUFNRSxPQUFPLEdBQUdGLFNBQVMsQ0FBQ0UsT0FBMUIsQ0FGOEMsQ0FJOUM7QUFDQTs7QUFDQSxVQUFNQyxRQUFRLEdBQUdELE9BQU8sQ0FBQ0MsUUFBekI7O0FBRUEsVUFBSUEsUUFBUSxHQUFHLENBQVgsSUFBZ0JGLFNBQVMsR0FBR0QsU0FBUyxDQUFDSSxhQUFWLEdBQTJCLE9BQU9ELFFBQWxFLEVBQTZFO0FBQ3pFSCxRQUFBQSxTQUFTLENBQUNLLGtCQUFWLEdBQStCQyxxQkFBVUMsWUFBVixDQUF1QixVQUFDQyxDQUFEO0FBQUEsaUJBQU8sS0FBSSxDQUFDQyxJQUFMLENBQVVELENBQVYsQ0FBUDtBQUFBLFNBQXZCLENBQS9CO0FBQ0E7QUFDSDs7QUFFRCxVQUFNRSxLQUFLLEdBQUdULFNBQVMsR0FBR0QsU0FBUyxDQUFDSSxhQUFwQztBQUVBSixNQUFBQSxTQUFTLENBQUNJLGFBQVYsR0FBMEJILFNBQTFCOztBQUVBLFVBQUlDLE9BQU8sQ0FBQ1MsU0FBUixDQUFrQkMsS0FBbEIsQ0FBd0JDLElBQXhCLEtBQWlDQyxxQkFBVUMsS0FBM0MsSUFBb0RmLFNBQVMsQ0FBQ2dCLE1BQVYsQ0FBaUJDLEtBQWpCLENBQXVCLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxHQUFHLENBQUNDLEtBQWI7QUFBQSxPQUF2QixDQUF4RCxFQUFvRztBQUNoRztBQUNIOztBQUVEbkIsTUFBQUEsU0FBUyxDQUFDVyxTQUFWLENBQW9CRixJQUFwQixDQUF5QkMsS0FBekI7O0FBRUEsVUFBSVYsU0FBUyxDQUFDSyxrQkFBVixLQUFpQ2UsU0FBakMsSUFBOEMsQ0FBQ2xCLE9BQU8sQ0FBQ1MsU0FBUixDQUFrQlUsSUFBbEIsQ0FBdUJDLE1BQTFFLEVBQWtGO0FBQzlFaEIsNkJBQVVpQixlQUFWLENBQTBCdkIsU0FBUyxDQUFDSyxrQkFBcEM7QUFDSCxPQUZELE1BRU87QUFDSEwsUUFBQUEsU0FBUyxDQUFDSyxrQkFBVixHQUErQkMscUJBQVVDLFlBQVYsQ0FBdUIsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPLEtBQUksQ0FBQ0MsSUFBTCxDQUFVRCxDQUFWLENBQVA7QUFBQSxTQUF2QixDQUEvQjtBQUNIO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQge1NoYXBlVHlwZX0gZnJvbSBcIi4uL0VudW1zL1NoYXBlVHlwZVwiO1xuXG5leHBvcnQgY2xhc3MgRHJhd2VyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lcjogQ29udGFpbmVyO1xuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBDb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGRyYXcodGltZXN0YW1wOiBET01IaWdoUmVzVGltZVN0YW1wKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG5cbiAgICAgICAgLy8gRlBTIGxpbWl0IGxvZ2ljXG4gICAgICAgIC8vIElmIHdlIGFyZSB0b28gZmFzdCwganVzdCBkcmF3IHdpdGhvdXQgdXBkYXRpbmdcbiAgICAgICAgY29uc3QgZnBzTGltaXQgPSBvcHRpb25zLmZwc0xpbWl0O1xuXG4gICAgICAgIGlmIChmcHNMaW1pdCA+IDAgJiYgdGltZXN0YW1wIDwgY29udGFpbmVyLmxhc3RGcmFtZVRpbWUgKyAoMTAwMCAvIGZwc0xpbWl0KSkge1xuICAgICAgICAgICAgY29udGFpbmVyLmRyYXdBbmltYXRpb25GcmFtZSA9IENvbnRhaW5lci5yZXF1ZXN0RnJhbWUoKHQpID0+IHRoaXMuZHJhdyh0KSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWx0YSA9IHRpbWVzdGFtcCAtIGNvbnRhaW5lci5sYXN0RnJhbWVUaW1lO1xuXG4gICAgICAgIGNvbnRhaW5lci5sYXN0RnJhbWVUaW1lID0gdGltZXN0YW1wO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnBhcnRpY2xlcy5zaGFwZS50eXBlID09PSBTaGFwZVR5cGUuaW1hZ2UgJiYgY29udGFpbmVyLmltYWdlcy5ldmVyeSgoaW1nKSA9PiBpbWcuZXJyb3IpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIucGFydGljbGVzLmRyYXcoZGVsdGEpO1xuXG4gICAgICAgIGlmIChjb250YWluZXIuZHJhd0FuaW1hdGlvbkZyYW1lICE9PSB1bmRlZmluZWQgJiYgIW9wdGlvbnMucGFydGljbGVzLm1vdmUuZW5hYmxlKSB7XG4gICAgICAgICAgICBDb250YWluZXIuY2FuY2VsQW5pbWF0aW9uKGNvbnRhaW5lci5kcmF3QW5pbWF0aW9uRnJhbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGFpbmVyLmRyYXdBbmltYXRpb25GcmFtZSA9IENvbnRhaW5lci5yZXF1ZXN0RnJhbWUoKHQpID0+IHRoaXMuZHJhdyh0KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=