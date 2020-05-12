"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grabber = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../Utils/Utils");

/**
 * Particle grab manager
 */
var Grabber = /*#__PURE__*/function () {
  function Grabber(container, particle) {
    (0, _classCallCheck2["default"])(this, Grabber);
    this.container = void 0;
    this.particle = void 0;
    this.container = container;
    this.particle = particle;
  }

  (0, _createClass2["default"])(Grabber, [{
    key: "grab",
    value: function grab() {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;

      if (options.interactivity.events.onHover.enable && container.interactivity.status === "mousemove") {
        var mousePos = container.interactivity.mouse.position || {
          x: 0,
          y: 0
        };

        var distMouse = _Utils.Utils.getDistanceBetweenCoordinates(particle.position, mousePos);
        /*
           draw a line between the cursor and the particle
           if the distance between them is under the config distance
        */


        if (distMouse <= container.retina.grabModeDistance) {
          var lineOpacity = options.interactivity.modes.grab.lineLinked.opacity;
          var grabDistance = container.retina.grabModeDistance;
          var opacityLine = lineOpacity - distMouse / (1 / lineOpacity) / grabDistance;

          if (opacityLine > 0) {
            /* style */
            var optColor = options.particles.lineLinked.color;

            var lineColor = container.particles.lineLinkedColor || _Utils.Utils.hexToRgb(optColor);

            if (lineColor == "random") {
              lineColor = _Utils.Utils.getRandomColorRGBA();
            }

            container.particles.lineLinkedColor = lineColor;
            var colorLine = {
              r: 127,
              g: 127,
              b: 127
            };
            var ctx = container.canvas.context;

            if (ctx) {
              if (container.particles.lineLinkedColor == "random") {
                colorLine = _Utils.Utils.getRandomColorRGBA();
              } else {
                colorLine = container.particles.lineLinkedColor || colorLine;
              }

              ctx.strokeStyle = "rgba(".concat(colorLine.r, ",").concat(colorLine.g, ",").concat(colorLine.b, ",").concat(opacityLine, ")");
              ctx.lineWidth = container.retina.lineLinkedWidth; // container.canvas.ctx.lineCap = "round"; /* performance issue */

              /* path */

              ctx.beginPath();
              ctx.moveTo(particle.position.x + particle.offset.x, particle.position.y + particle.offset.y);
              ctx.lineTo(mousePos.x, mousePos.y);
              ctx.stroke();
              ctx.closePath();
            }
          }
        }
      }
    }
  }]);
  return Grabber;
}();

exports.Grabber = Grabber;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DbGFzc2VzL1BhcnRpY2xlL0dyYWJiZXIudHMiXSwibmFtZXMiOlsiR3JhYmJlciIsImNvbnRhaW5lciIsInBhcnRpY2xlIiwib3B0aW9ucyIsImludGVyYWN0aXZpdHkiLCJldmVudHMiLCJvbkhvdmVyIiwiZW5hYmxlIiwic3RhdHVzIiwibW91c2VQb3MiLCJtb3VzZSIsInBvc2l0aW9uIiwieCIsInkiLCJkaXN0TW91c2UiLCJVdGlscyIsImdldERpc3RhbmNlQmV0d2VlbkNvb3JkaW5hdGVzIiwicmV0aW5hIiwiZ3JhYk1vZGVEaXN0YW5jZSIsImxpbmVPcGFjaXR5IiwibW9kZXMiLCJncmFiIiwibGluZUxpbmtlZCIsIm9wYWNpdHkiLCJncmFiRGlzdGFuY2UiLCJvcGFjaXR5TGluZSIsIm9wdENvbG9yIiwicGFydGljbGVzIiwiY29sb3IiLCJsaW5lQ29sb3IiLCJsaW5lTGlua2VkQ29sb3IiLCJoZXhUb1JnYiIsImdldFJhbmRvbUNvbG9yUkdCQSIsImNvbG9yTGluZSIsInIiLCJnIiwiYiIsImN0eCIsImNhbnZhcyIsImNvbnRleHQiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImxpbmVMaW5rZWRXaWR0aCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsIm9mZnNldCIsImxpbmVUbyIsInN0cm9rZSIsImNsb3NlUGF0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFHQTs7O0lBR2FBLE87QUFJVCxtQkFBWUMsU0FBWixFQUFrQ0MsUUFBbEMsRUFBc0Q7QUFBQTtBQUFBLFNBSHJDRCxTQUdxQztBQUFBLFNBRnJDQyxRQUVxQztBQUNsRCxTQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0g7Ozs7MkJBRW1CO0FBQ2hCLFVBQU1ELFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUNBLFVBQU1FLE9BQU8sR0FBR0YsU0FBUyxDQUFDRSxPQUExQjtBQUNBLFVB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LFFBQVEsQ0FBQ0csQ0FBcEIsRUFBdUJILFFBQVEsQ0FBQ0ksQ0FBaEM7QUFDQXdCLGNBQUFBLEdBQUcsQ0FBQ1UsTUFBSjtBQUNBVixjQUFBQSxHQUFHLENBQUNXLFNBQUo7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiLi4vQ29udGFpbmVyXCI7XG5pbXBvcnQge1BhcnRpY2xlfSBmcm9tIFwiLi4vUGFydGljbGVcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi9VdGlscy9VdGlsc1wiO1xuaW1wb3J0IHtJUmdifSBmcm9tIFwiLi4vLi4vSW50ZXJmYWNlcy9JUmdiXCI7XG5cbi8qKlxuICogUGFydGljbGUgZ3JhYiBtYW5hZ2VyXG4gKi9cbmV4cG9ydCBjbGFzcyBHcmFiYmVyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcGFydGljbGU6IFBhcnRpY2xlO1xuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBDb250YWluZXIsIHBhcnRpY2xlOiBQYXJ0aWNsZSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZSA9IHBhcnRpY2xlO1xuICAgIH1cblxuICAgIHB1YmxpYyBncmFiKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuICAgICAgICBjb25zdCBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGU7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25Ib3Zlci5lbmFibGUgJiYgY29udGFpbmVyLmludGVyYWN0aXZpdHkuc3RhdHVzID09PSBcIm1vdXNlbW92ZVwiKSB7XG4gICAgICAgICAgICBjb25zdCBtb3VzZVBvcyA9IGNvbnRhaW5lci5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc2l0aW9uIHx8IHt4OiAwLCB5OiAwfTtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RNb3VzZSA9IFV0aWxzLmdldERpc3RhbmNlQmV0d2VlbkNvb3JkaW5hdGVzKHBhcnRpY2xlLnBvc2l0aW9uLCBtb3VzZVBvcyk7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgZHJhdyBhIGxpbmUgYmV0d2VlbiB0aGUgY3Vyc29yIGFuZCB0aGUgcGFydGljbGVcbiAgICAgICAgICAgICAgIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZW0gaXMgdW5kZXIgdGhlIGNvbmZpZyBkaXN0YW5jZVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChkaXN0TW91c2UgPD0gY29udGFpbmVyLnJldGluYS5ncmFiTW9kZURpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZU9wYWNpdHkgPSBvcHRpb25zLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5saW5lTGlua2VkLm9wYWNpdHk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JhYkRpc3RhbmNlID0gY29udGFpbmVyLnJldGluYS5ncmFiTW9kZURpc3RhbmNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wYWNpdHlMaW5lID0gbGluZU9wYWNpdHkgLSAoZGlzdE1vdXNlIC8gKDEgLyBsaW5lT3BhY2l0eSkpIC8gZ3JhYkRpc3RhbmNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wYWNpdHlMaW5lID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvKiBzdHlsZSAqL1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRDb2xvciA9IG9wdGlvbnMucGFydGljbGVzLmxpbmVMaW5rZWQuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaW5lQ29sb3IgPSBjb250YWluZXIucGFydGljbGVzLmxpbmVMaW5rZWRDb2xvciB8fCBVdGlscy5oZXhUb1JnYihvcHRDb2xvcik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmVDb2xvciA9PSBcInJhbmRvbVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lQ29sb3IgPSBVdGlscy5nZXRSYW5kb21Db2xvclJHQkEoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJ0aWNsZXMubGluZUxpbmtlZENvbG9yID0gbGluZUNvbG9yO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2xvckxpbmU6IElSZ2IgPSB7cjogMTI3LCBnOiAxMjcsIGI6IDEyN307XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNvbnRhaW5lci5jYW52YXMuY29udGV4dDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLnBhcnRpY2xlcy5saW5lTGlua2VkQ29sb3IgPT0gXCJyYW5kb21cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yTGluZSA9IFV0aWxzLmdldFJhbmRvbUNvbG9yUkdCQSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvckxpbmUgPSBjb250YWluZXIucGFydGljbGVzLmxpbmVMaW5rZWRDb2xvciBhcyBJUmdiIHx8IGNvbG9yTGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoJHtjb2xvckxpbmUucn0sJHtjb2xvckxpbmUuZ30sJHtjb2xvckxpbmUuYn0sJHtvcGFjaXR5TGluZX0pYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBjb250YWluZXIucmV0aW5hLmxpbmVMaW5rZWRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5lci5jYW52YXMuY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7IC8qIHBlcmZvcm1hbmNlIGlzc3VlICovXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBwYXRoICovXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHBhcnRpY2xlLnBvc2l0aW9uLnggKyBwYXJ0aWNsZS5vZmZzZXQueCwgcGFydGljbGUucG9zaXRpb24ueSArIHBhcnRpY2xlLm9mZnNldC55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5saW5lVG8obW91c2VQb3MueCwgbW91c2VQb3MueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=