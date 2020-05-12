"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Linker = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../Utils/Utils");

var Linker = /*#__PURE__*/function () {
  function Linker(container, particle) {
    (0, _classCallCheck2["default"])(this, Linker);
    this.container = void 0;
    this.particle = void 0;
    this.container = container;
    this.particle = particle;
  }

  (0, _createClass2["default"])(Linker, [{
    key: "link",
    value: function link(p2) {
      var container = this.container;
      var options = container.options;
      var particle = this.particle;
      var x1 = particle.position.x + particle.offset.x;
      var x2 = p2.position.x + p2.offset.x;
      var dx = x1 - x2;
      var y1 = particle.position.y + particle.offset.y;
      var y2 = p2.position.y + p2.offset.y;
      var dy = y1 - y2;
      var dist = Math.sqrt(dx * dx + dy * dy);
      var optOpacity = options.particles.lineLinked.opacity;
      var optDistance = container.retina.lineLinkedDistance;
      /* draw a line between p1 and p2 if the distance between them is under the config distance */

      if (dist <= optDistance) {
        var opacityLine = optOpacity - dist * optOpacity / optDistance;

        if (opacityLine > 0) {
          /* style */
          if (!container.particles.lineLinkedColor) {
            var color = options.particles.lineLinked.color;
            /* particles.line_linked - convert hex colors to rgb */
            //  check for the color profile requested and
            //  then return appropriate value

            if (color === "random") {
              if (options.particles.lineLinked.consent) {
                container.particles.lineLinkedColor = _Utils.Utils.hexToRgb(color);
              } else if (options.particles.lineLinked.blink) {
                container.particles.lineLinkedColor = "random";
              } else {
                container.particles.lineLinkedColor = "mid";
              }
            } else {
              container.particles.lineLinkedColor = _Utils.Utils.hexToRgb(color);
            }
          }

          if (!container.canvas.context) {
            return;
          }

          var ctx = container.canvas.context;
          var colorLine;
          /*
           * particles connecting line color:
           *
           *  random: in blink mode : in every frame refresh the color would change
           *          hence resulting blinking of lines
           *  mid: in consent mode: sample particles color and get a mid level color
           *                        from those two for the connecting line color
           */

          if (container.particles.lineLinkedColor === "random") {
            colorLine = _Utils.Utils.getRandomColorRGBA();
          } else if (container.particles.lineLinkedColor == "mid" && particle.color && p2.color) {
            var sourceColor = particle.color;
            var destColor = p2.color;
            colorLine = {
              b: Math.floor(_Utils.Utils.mixComponents(sourceColor.b, destColor.b, particle.radius, p2.radius)),
              g: Math.floor(_Utils.Utils.mixComponents(sourceColor.g, destColor.g, particle.radius, p2.radius)),
              r: Math.floor(_Utils.Utils.mixComponents(sourceColor.r, destColor.r, particle.radius, p2.radius))
            };
          } else {
            colorLine = container.particles.lineLinkedColor;
          }

          ctx.save();

          if (options.backgroundMask.enable) {
            ctx.globalCompositeOperation = 'destination-out';
          }

          if (colorLine) {
            ctx.strokeStyle = "rgba(".concat(colorLine.r, ",").concat(colorLine.g, ",").concat(colorLine.b, ",").concat(opacityLine, ")");
          }

          ctx.lineWidth = container.retina.lineLinkedWidth; // container.canvas.ctx.lineCap = "round"; /* performance issue */

          /* path */

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
          ctx.closePath();
          ctx.restore();
        }
      }
    }
  }]);
  return Linker;
}();

exports.Linker = Linker;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DbGFzc2VzL1BhcnRpY2xlL0xpbmtlci50cyJdLCJuYW1lcyI6WyJMaW5rZXIiLCJjb250YWluZXIiLCJwYXJ0aWNsZSIsInAyIiwib3B0aW9ucyIsIngxIiwicG9zaXRpb24iLCJ4Iiwib2Zmc2V0IiwieDIiLCJkeCIsInkxIiwieSIsInkyIiwiZHkiLCJkaXN0IiwiTWF0aCIsInNxcnQiLCJvcHRPcGFjaXR5IiwicGFydGljbGVzIiwibGluZUxpbmtlZCIsIm9wYWNpdHkiLCJvcHREaXN0YW5jZSIsInJldGluYSIsImxpbmVMaW5rZWREaXN0YW5jZSIsIm9wYWNpdHlMaW5lIiwibGluZUxpbmtlZENvbG9yIiwiY29sb3IiLCJjb25zZW50IiwiVXRpbHMiLCJoZXhUb1JnYiIsImJsaW5rIiwiY2FudmFzIiwiY29udGV4dCIsImN0eCIsImNvbG9yTGluZSIsImdldFJhbmRvbUNvbG9yUkdCQSIsInNvdXJjZUNvbG9yIiwiZGVzdENvbG9yIiwiYiIsImZsb29yIiwibWl4Q29tcG9uZW50cyIsInJhZGl1cyIsImciLCJyIiwic2F2ZSIsImJhY2tncm91bmRNYXNrIiwiZW5hYmxlIiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJsaW5lTGlua2VkV2lkdGgiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJjbG9zZVBhdGgiLCJyZXN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBSWFBLE07QUFJVCxrQkFBWUMsU0FBWixFQUFrQ0MsUUFBbEMsRUFBc0Q7QUFBQTtBQUFBLFNBSHJDRCxTQUdxQztBQUFBLFNBRnJDQyxRQUVxQztBQUNsRCxTQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0g7Ozs7eUJBRVdDLEUsRUFBb0I7QUFDNUIsVUFBTUYsU0FBUyxHQUFHLEtBQUtBLFNBQXZCO0FB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U0FBUyxDQUFDUyxDQUFwQyxjQUF5Q1QsU0FBUyxDQUFDUSxDQUFuRCxjQUF3RFIsU0FBUyxDQUFDSSxDQUFsRSxjQUF1RWQsV0FBdkU7QUFDSDs7QUFFRFMsVUFBQUEsR0FBRyxDQUFDZ0IsU0FBSixHQUFnQmpELFNBQVMsQ0FBQ3NCLE1BQVYsQ0FBaUI0QixlQUFqQyxDQWhFaUIsQ0FpRWpCOztBQUNBOztBQUNBakIsVUFBQUEsR0FBRyxDQUFDa0IsU0FBSjtBQUNBbEIsVUFBQUEsR0FBRyxDQUFDbUIsTUFBSixDQUFXaEQsRUFBWCxFQUFlTSxFQUFmO0FBQ0F1QixVQUFBQSxHQUFHLENBQUNvQixNQUFKLENBQVc3QyxFQUFYLEVBQWVJLEVBQWY7QUFDQXFCLFVBQUFBLEdBQUcsQ0FBQ3FCLE1BQUo7QUFDQXJCLFVBQUFBLEdBQUcsQ0FBQ3NCLFNBQUo7QUFDQXRCLFVBQUFBLEdBQUcsQ0FBQ3VCLE9BQUo7QUFDSDtBQUNKO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BhcnRpY2xlfSBmcm9tIFwiLi4vUGFydGljbGVcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi9VdGlscy9VdGlsc1wiO1xuaW1wb3J0IHtJUmdifSBmcm9tIFwiLi4vLi4vSW50ZXJmYWNlcy9JUmdiXCI7XG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4uL0NvbnRhaW5lclwiO1xuXG5leHBvcnQgY2xhc3MgTGlua2VyIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcGFydGljbGU6IFBhcnRpY2xlO1xuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBDb250YWluZXIsIHBhcnRpY2xlOiBQYXJ0aWNsZSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZSA9IHBhcnRpY2xlO1xuICAgIH1cblxuICAgIHB1YmxpYyBsaW5rKHAyOiBQYXJ0aWNsZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuICAgICAgICBjb25zdCBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGU7XG4gICAgICAgIGNvbnN0IHgxID0gcGFydGljbGUucG9zaXRpb24ueCArIHBhcnRpY2xlLm9mZnNldC54O1xuICAgICAgICBjb25zdCB4MiA9IHAyLnBvc2l0aW9uLnggKyBwMi5vZmZzZXQueDtcbiAgICAgICAgY29uc3QgZHggPSB4MSAtIHgyO1xuICAgICAgICBjb25zdCB5MSA9IHBhcnRpY2xlLnBvc2l0aW9uLnkgKyBwYXJ0aWNsZS5vZmZzZXQueTtcbiAgICAgICAgY29uc3QgeTIgPSBwMi5wb3NpdGlvbi55ICsgcDIub2Zmc2V0Lnk7XG4gICAgICAgIGNvbnN0IGR5ID0geTEgLSB5MjtcbiAgICAgICAgY29uc3QgZGlzdCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgIGNvbnN0IG9wdE9wYWNpdHkgPSBvcHRpb25zLnBhcnRpY2xlcy5saW5lTGlua2VkLm9wYWNpdHk7XG4gICAgICAgIGNvbnN0IG9wdERpc3RhbmNlID0gY29udGFpbmVyLnJldGluYS5saW5lTGlua2VkRGlzdGFuY2U7XG5cbiAgICAgICAgLyogZHJhdyBhIGxpbmUgYmV0d2VlbiBwMSBhbmQgcDIgaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlbSBpcyB1bmRlciB0aGUgY29uZmlnIGRpc3RhbmNlICovXG4gICAgICAgIGlmIChkaXN0IDw9IG9wdERpc3RhbmNlKSB7XG4gICAgICAgICAgICBjb25zdCBvcGFjaXR5TGluZSA9IG9wdE9wYWNpdHkgLSAoZGlzdCAqIG9wdE9wYWNpdHkpIC8gb3B0RGlzdGFuY2U7XG5cbiAgICAgICAgICAgIGlmIChvcGFjaXR5TGluZSA+IDApIHtcbiAgICAgICAgICAgICAgICAvKiBzdHlsZSAqL1xuICAgICAgICAgICAgICAgIGlmICghY29udGFpbmVyLnBhcnRpY2xlcy5saW5lTGlua2VkQ29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBvcHRpb25zLnBhcnRpY2xlcy5saW5lTGlua2VkLmNvbG9yO1xuXG4gICAgICAgICAgICAgICAgICAgIC8qIHBhcnRpY2xlcy5saW5lX2xpbmtlZCAtIGNvbnZlcnQgaGV4IGNvbG9ycyB0byByZ2IgKi9cbiAgICAgICAgICAgICAgICAgICAgLy8gIGNoZWNrIGZvciB0aGUgY29sb3IgcHJvZmlsZSByZXF1ZXN0ZWQgYW5kXG4gICAgICAgICAgICAgICAgICAgIC8vICB0aGVuIHJldHVybiBhcHByb3ByaWF0ZSB2YWx1ZVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xvciA9PT0gXCJyYW5kb21cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucGFydGljbGVzLmxpbmVMaW5rZWQuY29uc2VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJ0aWNsZXMubGluZUxpbmtlZENvbG9yID0gVXRpbHMuaGV4VG9SZ2IoY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnBhcnRpY2xlcy5saW5lTGlua2VkLmJsaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcnRpY2xlcy5saW5lTGlua2VkQ29sb3IgPSBcInJhbmRvbVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucGFydGljbGVzLmxpbmVMaW5rZWRDb2xvciA9IFwibWlkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucGFydGljbGVzLmxpbmVMaW5rZWRDb2xvciA9IFV0aWxzLmhleFRvUmdiKGNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghY29udGFpbmVyLmNhbnZhcy5jb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBjb250YWluZXIuY2FudmFzLmNvbnRleHQ7XG5cbiAgICAgICAgICAgICAgICBsZXQgY29sb3JMaW5lOiBJUmdiIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgKiBwYXJ0aWNsZXMgY29ubmVjdGluZyBsaW5lIGNvbG9yOlxuICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICogIHJhbmRvbTogaW4gYmxpbmsgbW9kZSA6IGluIGV2ZXJ5IGZyYW1lIHJlZnJlc2ggdGhlIGNvbG9yIHdvdWxkIGNoYW5nZVxuICAgICAgICAgICAgICAgICAqICAgICAgICAgIGhlbmNlIHJlc3VsdGluZyBibGlua2luZyBvZiBsaW5lc1xuICAgICAgICAgICAgICAgICAqICBtaWQ6IGluIGNvbnNlbnQgbW9kZTogc2FtcGxlIHBhcnRpY2xlcyBjb2xvciBhbmQgZ2V0IGEgbWlkIGxldmVsIGNvbG9yXG4gICAgICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICBmcm9tIHRob3NlIHR3byBmb3IgdGhlIGNvbm5lY3RpbmcgbGluZSBjb2xvclxuICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5wYXJ0aWNsZXMubGluZUxpbmtlZENvbG9yID09PSBcInJhbmRvbVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yTGluZSA9IFV0aWxzLmdldFJhbmRvbUNvbG9yUkdCQSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLnBhcnRpY2xlcy5saW5lTGlua2VkQ29sb3IgPT0gXCJtaWRcIiAmJiBwYXJ0aWNsZS5jb2xvciAmJiBwMi5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VDb2xvciA9IHBhcnRpY2xlLmNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0Q29sb3IgPSBwMi5jb2xvcjtcblxuICAgICAgICAgICAgICAgICAgICBjb2xvckxpbmUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiOiBNYXRoLmZsb29yKFV0aWxzLm1peENvbXBvbmVudHMoc291cmNlQ29sb3IuYiwgZGVzdENvbG9yLmIsIHBhcnRpY2xlLnJhZGl1cywgcDIucmFkaXVzKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBnOiBNYXRoLmZsb29yKFV0aWxzLm1peENvbXBvbmVudHMoc291cmNlQ29sb3IuZywgZGVzdENvbG9yLmcsIHBhcnRpY2xlLnJhZGl1cywgcDIucmFkaXVzKSksXG4gICAgICAgICAgICAgICAgICAgICAgICByOiBNYXRoLmZsb29yKFV0aWxzLm1peENvbXBvbmVudHMoc291cmNlQ29sb3IuciwgZGVzdENvbG9yLnIsIHBhcnRpY2xlLnJhZGl1cywgcDIucmFkaXVzKSksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3JMaW5lID0gY29udGFpbmVyLnBhcnRpY2xlcy5saW5lTGlua2VkQ29sb3IgYXMgSVJnYjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYmFja2dyb3VuZE1hc2suZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY29sb3JMaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKCR7Y29sb3JMaW5lLnJ9LCR7Y29sb3JMaW5lLmd9LCR7Y29sb3JMaW5lLmJ9LCR7b3BhY2l0eUxpbmV9KWA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IGNvbnRhaW5lci5yZXRpbmEubGluZUxpbmtlZFdpZHRoO1xuICAgICAgICAgICAgICAgIC8vIGNvbnRhaW5lci5jYW52YXMuY3R4LmxpbmVDYXAgPSBcInJvdW5kXCI7IC8qIHBlcmZvcm1hbmNlIGlzc3VlICovXG4gICAgICAgICAgICAgICAgLyogcGF0aCAqL1xuICAgICAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==