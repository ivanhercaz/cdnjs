"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Canvas = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Constants = require("./Utils/Constants");

var _Utils = require("./Utils/Utils");

var _CanvasUtils = require("./Utils/CanvasUtils");

/**
 * Canvas manager
 */
var Canvas = /*#__PURE__*/function () {
  /**
   * The particles canvas
   */

  /**
   * The particles canvas dimension
   */

  /**
   * The parent container
   */

  /**
   * The particles canvas context
   */

  /**
   * Constructor of canvas manager
   * @param container the parent container
   */
  function Canvas(container) {
    (0, _classCallCheck2["default"])(this, Canvas);
    this.element = void 0;
    this.dimension = void 0;
    this.container = void 0;
    this.context = void 0;
    this.generatedCanvas = void 0;
    this.container = container;
    this.dimension = {
      height: 0,
      width: 0
    };
    var domContainer = document.getElementById(container.id);

    if (!domContainer) {
      throw new Error("dom element #".concat(container.id, " not found!"));
    }

    var existingCanvases = domContainer.getElementsByTagName("canvas");
    var canvasEl;
    /* get existing canvas if present, otherwise a new one will be created */

    if (existingCanvases.length) {
      canvasEl = existingCanvases[0];

      if (!canvasEl.className) {
        canvasEl.className = _Constants.Constants.canvasClass;
      }

      this.generatedCanvas = false;
    } else {
      this.generatedCanvas = true;
      /* create canvas element */

      canvasEl = document.createElement("canvas");
      canvasEl.className = _Constants.Constants.canvasClass;
      /* set size canvas */

      canvasEl.style.width = "100%";
      canvasEl.style.height = "100%";
      /* append canvas */

      domContainer.appendChild(canvasEl);
    }

    this.element = canvasEl;
    this.dimension.height = canvasEl.offsetHeight;
    this.dimension.width = canvasEl.offsetWidth;
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
  }, {
    key: "changeCanvas",
    value: function changeCanvas(canvas) {
      if (!canvas.className) {
        canvas.className = _Constants.Constants.canvasClass;
      }

      if (this.generatedCanvas) {
        this.element.remove();
      }

      this.generatedCanvas = false;
      this.element = canvas;
      this.dimension.height = canvas.offsetHeight;
      this.dimension.width = canvas.offsetWidth;
      this.context = this.element.getContext("2d");
      this.container.retina.init();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.generatedCanvas) {
        this.element.remove();
      }

      if (this.context) {
        _CanvasUtils.CanvasUtils.clear(this.context, this.dimension);
      }
    }
    /**
     * Calculates the size of the canvas
     */

  }, {
    key: "size",
    value: function size() {
      if (this.element) {
        this.element.width = this.dimension.width;
        this.element.height = this.dimension.height;
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
    /**
     * Clears the canvas content
     */

  }, {
    key: "clear",
    value: function clear() {
      var container = this.container;
      var options = container.options;
      var trail = options.particles.move.trail;

      var fillColor = _Utils.Utils.hexToRgb(trail.fillColor);

      if (options.backgroundMask.enable) {
        this.paint();
      } else if (trail.enable && trail.length > 0 && fillColor) {
        this.paintBase("rgba(".concat(fillColor.r, ", ").concat(fillColor.g, ", ").concat(fillColor.b, ",").concat(1 / trail.length));
      } else {
        if (this.context) {
          _CanvasUtils.CanvasUtils.clear(this.context, this.dimension);
        }
      }
    }
  }, {
    key: "drawPolygonMask",
    value: function drawPolygonMask(rawData) {
      var container = this.container;
      var options = container.options;
      var context = this.context;
      var polygonDraw = options.polygon.draw;

      if (context) {
        _CanvasUtils.CanvasUtils.drawPolygonMask(context, rawData, polygonDraw.stroke);
      }
    }
  }, {
    key: "drawLinkedLine",
    value: function drawLinkedLine(p1, p2, pos1, pos2, opacity) {
      var container = this.container;
      var options = container.options;
      var ctx = this.context;

      if (!ctx) {
        return;
      }

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
      } else if (container.particles.lineLinkedColor == "mid" && p1.color && p2.color) {
        var sourceColor = p1.color;
        var destColor = p2.color;
        colorLine = {
          b: Math.floor(_Utils.Utils.mixComponents(sourceColor.b, destColor.b, p1.radius, p2.radius)),
          g: Math.floor(_Utils.Utils.mixComponents(sourceColor.g, destColor.g, p1.radius, p2.radius)),
          r: Math.floor(_Utils.Utils.mixComponents(sourceColor.r, destColor.r, p1.radius, p2.radius))
        };
      } else {
        colorLine = container.particles.lineLinkedColor;
      }

      var width = container.retina.lineLinkedWidth;

      _CanvasUtils.CanvasUtils.drawLineLinked(ctx, width, pos1, pos2, options.backgroundMask.enable, colorLine, opacity, options.particles.lineLinked.shadow);
    }
  }, {
    key: "drawConnectLine",
    value: function drawConnectLine(p1, p2) {
      var lineStyle = this.lineStyle(p1, p2);

      if (!lineStyle) {
        return;
      }

      var ctx = this.context;

      if (!ctx) {
        return;
      }

      _CanvasUtils.CanvasUtils.drawConnectLine(ctx, this.container.retina.lineLinkedWidth, lineStyle, p1.position, p2.position);
    }
  }, {
    key: "drawGrabLine",
    value: function drawGrabLine(particle, opacity, mousePos) {
      var container = this.container;
      var options = container.options;
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

      if (!ctx) {
        return;
      }

      if (container.particles.lineLinkedColor == "random") {
        colorLine = _Utils.Utils.getRandomColorRGBA();
      } else {
        colorLine = container.particles.lineLinkedColor || colorLine;
      }

      var beginPos = {
        x: particle.position.x + particle.offset.x,
        y: particle.position.y + particle.offset.y
      };

      _CanvasUtils.CanvasUtils.drawGrabLine(ctx, container.retina.lineLinkedWidth, beginPos, mousePos, colorLine, opacity);
    }
  }, {
    key: "drawParticle",
    value: function drawParticle(particle) {
      var container = this.container;
      var options = container.options;
      var radius;
      var opacity;
      var colorValue;

      if (particle.bubbler.radius !== undefined) {
        radius = particle.bubbler.radius;
      } else {
        radius = particle.radius;
      }

      if (particle.bubbler.opacity !== undefined) {
        opacity = particle.bubbler.opacity;
      } else {
        opacity = particle.opacity.value;
      }

      if (particle.color) {
        colorValue = "rgba(".concat(particle.color.r, ", ").concat(particle.color.g, ", ").concat(particle.color.b, ", ").concat(opacity, ")");
      }

      if (!this.context || !colorValue) {
        return;
      }

      _CanvasUtils.CanvasUtils.drawParticle(this.context, particle, colorValue, options.backgroundMask.enable, radius, options.particles.shape.stroke);
    }
  }, {
    key: "paintBase",
    value: function paintBase(baseColor) {
      if (this.context) {
        _CanvasUtils.CanvasUtils.paintBase(this.context, this.dimension, baseColor);
      }
    }
  }, {
    key: "lineStyle",
    value: function lineStyle(p1, p2) {
      if (p1.color && p2.color) {
        var sourceRgb = p1.color;
        var destRgb = p2.color;
        var rgb = {
          b: _Utils.Utils.mixComponents(sourceRgb.b, destRgb.b, p1.radius, p2.radius),
          g: _Utils.Utils.mixComponents(sourceRgb.g, destRgb.g, p1.radius, p2.radius),
          r: _Utils.Utils.mixComponents(sourceRgb.r, destRgb.r, p1.radius, p2.radius)
        };

        var midColor = _Utils.Utils.getStyleFromColor(rgb);

        if (this.context) {
          return _CanvasUtils.CanvasUtils.gradient(this.context, p1, p2, midColor);
        }
      }
    }
  }]);
  return Canvas;
}();

exports.Canvas = Canvas;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL0NhbnZhcy50cyJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb250YWluZXIiLCJlbGVtZW50IiwiZGltZW5zaW9uIiwiY29udGV4dCIsImdlbmVyYXRlZENhbnZhcyIsImhlaWdodCIsIndpZHRoIiwiZG9tQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiRXJyb3IiLCJleGlzdGluZ0NhbnZhc2VzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjYW52YXNFbCIsImxlbmd0aCIsImNsYXNzTmFtZSIsIkNvbnN0YW50cyIsImNhbnZhc0NsYXNzIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiYXBwZW5kQ2hpbGQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRXaWR0aCIsImdldENvbnRleHQiLCJzaXplIiwicGFpbnQiLCJjYW52YXMiLCJyZW1vdmUiLCJyZXRpbmEiLCJpbml0IiwiQ2FudmFzVXRpbHMiLCJjbGVhciIsIm9wdGlvbnMiLCJiYWNrZ3JvdW5kTWFzayIsImVuYWJsZSIsImNvdmVyIiwiY29sb3IiLCJVdGlscyIsImdldFBhcnRpY2xlQ29sb3IiLCJwYWludEJhc2UiLCJnZXRTdHlsZUZyb21Db2xvciIsInRyYWlsIiwicGFydGljbGVzIiwibW92ZSIsImZpbGxDb2xvciIsImhleFRvUmdiIiwiciIsImciLCJiIiwicmF3RGF0YSIsInBvbHlnb25EcmF3IiwicG9seWdvbiIsImRyYXciLCJkcmF3UG9seWdvbk1hc2siLCJzdHJva2UiLCJwMSIsInAyIiwicG9zMSIsInBvczIiLCJvcGFjaXR5IiwiY3R4IiwiY29sb3JMaW5lIiwibGluZUxpbmtlZENvbG9yIiwiZ2V0UmFuZG9tQ29sb3JSR0JBIiwic291cmNlQ29sb3IiLCJkZXN0Q29sb3IiLCJNYXRoIiwiZmxvb3IiLCJtaXhDb21wb25lbnRzIiwicmFkaXVzIiwibGluZUxpbmtlZFdpZHRoIiwiZHJhd0xpbmVMaW5rZWQiLCJsaW5lTGlua2VkIiwic2hhZG93IiwibGluZVN0eWxlIiwiZHJhd0Nvbm5lY3RMaW5lIiwicG9zaXRpb24iLCJwYXJ0aWNsZSIsIm1vdXNlUG9zIiwib3B0Q29sb3IiLCJsaW5lQ29sb3IiLCJiZWdpblBvcyIsIngiLCJvZmZzZXQiLCJ5IiwiZHJhd0dyYWJMaW5lIiwiY29sb3JWYWx1ZSIsImJ1YmJsZXIiLCJ1bmRlZmluZWQiLCJ2YWx1ZSIsImRyYXdQYXJ0aWNsZSIsInNoYXBlIiwiYmFzZUNvbG9yIiwic291cmNlUmdiIiwiZGVzdFJnYiIsInJnYiIsIm1pZENvbG9yIiwiZ3JhZGllbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FBRUE7O0FBR0E7O0FBSUE7O0FBRUE7OztJQUdhQSxNO0FBQ1Q7Ozs7QUFJQTs7OztBQUtBOzs7O0FBS0E7Ozs7QUFPQTs7OztBQUlBLGtCQUFZQyxTQUFaLEVBQWtDO0FBQUE7QUFBQSxTQXRCM0JDLE9Bc0IyQjtBQUFBLFNBbEJsQkMsU0FrQmtCO0FBQUEsU0FiakJGLFNBYWlCO0FBQUEsU0FSMUJHLE9BUTBCO0FBQUEsU0FOMUJDLGVBTTBCO0FBQzlCLFNBQUtKLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0UsU0FBTCxHQUFpQjtBQUNiRyxNQUFBQSxNQUFNLEVBQUUsQ0FESztBQUViQyxNQUFBQSxLQUFLLEVBQUU7QUFGTSxLQUFqQjtBQUtBLFFBQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCVCxTQUFTLENBQUNVLEVBQWxDLENBQXJCOztBQUVBLFFBQUksQ0FBQ0gsWUFBTCxFQUFtQjtBQUNmLFlBQU0sSUFBSUksS0FBSix3QkFBMEJYLFNBQVMsQ0FBQ1UsRUFBcEMsaUJBQU47QUFDSDs7QUFFRCxRQUFNRSxnQkFBZ0IsR0FBR0wsWUFBWSxDQUFDTSxvQkFBYixDQUFrQyxRQUFsQyxDQUF6QjtBQUVBLFFBQUlDLFFBQUo7QUFFQTs7QUFDQSxRQUFJRixnQkFBZ0IsQ0FBQ0csTUFBckIsRUFBNkI7QUFDekJELE1BQUFBLFFBQVEsR0FB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TyxDQUFDL0MsQ0FBekMsRUFBNENRLEVBQUUsQ0FBQ2MsTUFBL0MsRUFBdURiLEVBQUUsQ0FBQ2EsTUFBMUQsQ0FGSztBQUdSdkIsVUFBQUEsQ0FBQyxFQUFFVCxhQUFNK0IsYUFBTixDQUFvQnlCLFNBQVMsQ0FBQy9DLENBQTlCLEVBQWlDZ0QsT0FBTyxDQUFDaEQsQ0FBekMsRUFBNENTLEVBQUUsQ0FBQ2MsTUFBL0MsRUFBdURiLEVBQUUsQ0FBQ2EsTUFBMUQ7QUFISyxTQUFaOztBQU1BLFlBQU0yQixRQUFRLEdBQUczRCxhQUFNRyxpQkFBTixDQUF3QnVELEdBQXhCLENBQWpCOztBQUVBLFlBQUksS0FBSzdGLE9BQVQsRUFBa0I7QUFDZCxpQkFBTzRCLHlCQUFZbUUsUUFBWixDQUFxQixLQUFLL0YsT0FBMUIsRUFBbUNxRCxFQUFuQyxFQUF1Q0MsRUFBdkMsRUFBMkN3QyxRQUEzQyxDQUFQO0FBQ0g7QUFDSjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tIFwiLi9VdGlscy9Db25zdGFudHNcIjtcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCB7SURpbWVuc2lvbn0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSURpbWVuc2lvblwiO1xuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4vVXRpbHMvVXRpbHNcIjtcbmltcG9ydCB7SVJnYn0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVJnYlwiO1xuaW1wb3J0IHtQYXJ0aWNsZX0gZnJvbSBcIi4vUGFydGljbGVcIjtcbmltcG9ydCB7SUNvb3JkaW5hdGVzfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29vcmRpbmF0ZXNcIjtcbmltcG9ydCB7Q2FudmFzVXRpbHN9IGZyb20gXCIuL1V0aWxzL0NhbnZhc1V0aWxzXCI7XG5cbi8qKlxuICogQ2FudmFzIG1hbmFnZXJcbiAqL1xuZXhwb3J0IGNsYXNzIENhbnZhcyB7XG4gICAgLyoqXG4gICAgICogVGhlIHBhcnRpY2xlcyBjYW52YXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgLyoqXG4gICAgICogVGhlIHBhcnRpY2xlcyBjYW52YXMgZGltZW5zaW9uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGRpbWVuc2lvbjogSURpbWVuc2lvbjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJlbnQgY29udGFpbmVyXG4gICAgICovXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IENvbnRhaW5lcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBwYXJ0aWNsZXMgY2FudmFzIGNvbnRleHRcbiAgICAgKi9cbiAgICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw7XG5cbiAgICBwcml2YXRlIGdlbmVyYXRlZENhbnZhczogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIG9mIGNhbnZhcyBtYW5hZ2VyXG4gICAgICogQHBhcmFtIGNvbnRhaW5lciB0aGUgcGFyZW50IGNvbnRhaW5lclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbiA9IHtcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRvbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lci5pZCk7XG5cbiAgICAgICAgaWYgKCFkb21Db250YWluZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZG9tIGVsZW1lbnQgIyR7Y29udGFpbmVyLmlkfSBub3QgZm91bmQhYCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdGluZ0NhbnZhc2VzID0gZG9tQ29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpO1xuXG4gICAgICAgIGxldCBjYW52YXNFbDogSFRNTENhbnZhc0VsZW1lbnQ7XG5cbiAgICAgICAgLyogZ2V0IGV4aXN0aW5nIGNhbnZhcyBpZiBwcmVzZW50LCBvdGhlcndpc2UgYSBuZXcgb25lIHdpbGwgYmUgY3JlYXRlZCAqL1xuICAgICAgICBpZiAoZXhpc3RpbmdDYW52YXNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhbnZhc0VsID0gZXhpc3RpbmdDYW52YXNlc1swXTtcblxuICAgICAgICAgICAgaWYgKCFjYW52YXNFbC5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBjYW52YXNFbC5jbGFzc05hbWUgPSBDb25zdGFudHMuY2FudmFzQ2xhc3M7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVkQ2FudmFzID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlZENhbnZhcyA9IHRydWU7XG4gICAgICAgICAgICAvKiBjcmVhdGUgY2FudmFzIGVsZW1lbnQgKi9cbiAgICAgICAgICAgIGNhbnZhc0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblxuICAgICAgICAgICAgY2FudmFzRWwuY2xhc3NOYW1lID0gQ29uc3RhbnRzLmNhbnZhc0NsYXNzO1xuXG4gICAgICAgICAgICAvKiBzZXQgc2l6ZSBjYW52YXMgKi9cbiAgICAgICAgICAgIGNhbnZhc0VsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgICAgICBjYW52YXNFbC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcblxuICAgICAgICAgICAgLyogYXBwZW5kIGNhbnZhcyAqL1xuICAgICAgICAgICAgZG9tQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbnZhc0VsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGNhbnZhc0VsO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPSBjYW52YXNFbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHRoaXMuZGltZW5zaW9uLndpZHRoID0gY2FudmFzRWwub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuZWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLSB0c1BhcnRpY2xlcyBmdW5jdGlvbnMgLSBjYW52YXMgLS0tLS0tLS0tLS0tICovXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIGNhbnZhcyBlbGVtZW50XG4gICAgICovXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2l6ZSgpO1xuICAgICAgICB0aGlzLnBhaW50KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZUNhbnZhcyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGlmICghY2FudmFzLmNsYXNzTmFtZSkge1xuICAgICAgICAgICAgY2FudmFzLmNsYXNzTmFtZSA9IENvbnN0YW50cy5jYW52YXNDbGFzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdlbmVyYXRlZENhbnZhcykge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZWRDYW52YXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY2FudmFzO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbi5oZWlnaHQgPSBjYW52YXMub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB0aGlzLmRpbWVuc2lvbi53aWR0aCA9IGNhbnZhcy5vZmZzZXRXaWR0aDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gdGhpcy5lbGVtZW50LmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmV0aW5hLmluaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZ2VuZXJhdGVkQ2FudmFzKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0KSB7XG4gICAgICAgICAgICBDYW52YXNVdGlscy5jbGVhcih0aGlzLmNvbnRleHQsIHRoaXMuZGltZW5zaW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIHNpemUgb2YgdGhlIGNhbnZhc1xuICAgICAqL1xuICAgIHB1YmxpYyBzaXplKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQud2lkdGggPSB0aGlzLmRpbWVuc2lvbi53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5oZWlnaHQgPSB0aGlzLmRpbWVuc2lvbi5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYWludHMgdGhlIGNhbnZhcyBiYWNrZ3JvdW5kXG4gICAgICovXG4gICAgcHVibGljIHBhaW50KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmJhY2tncm91bmRNYXNrLmVuYWJsZSAmJiBvcHRpb25zLmJhY2tncm91bmRNYXNrLmNvdmVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBVdGlscy5nZXRQYXJ0aWNsZUNvbG9yKG9wdGlvbnMuYmFja2dyb3VuZE1hc2suY292ZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFpbnRCYXNlKFV0aWxzLmdldFN0eWxlRnJvbUNvbG9yKGNvbG9yKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWludEJhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGFpbnRCYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGNhbnZhcyBjb250ZW50XG4gICAgICovXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuICAgICAgICBjb25zdCB0cmFpbCA9IG9wdGlvbnMucGFydGljbGVzLm1vdmUudHJhaWw7XG4gICAgICAgIGNvbnN0IGZpbGxDb2xvciA9IFV0aWxzLmhleFRvUmdiKHRyYWlsLmZpbGxDb2xvcik7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYmFja2dyb3VuZE1hc2suZW5hYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnBhaW50KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHJhaWwuZW5hYmxlICYmIHRyYWlsLmxlbmd0aCA+IDAgJiYgZmlsbENvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLnBhaW50QmFzZShgcmdiYSgke2ZpbGxDb2xvci5yfSwgJHtmaWxsQ29sb3IuZ30sICR7ZmlsbENvbG9yLmJ9LCR7MSAvIHRyYWlsLmxlbmd0aH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBDYW52YXNVdGlscy5jbGVhcih0aGlzLmNvbnRleHQsIHRoaXMuZGltZW5zaW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkcmF3UG9seWdvbk1hc2socmF3RGF0YTogSUNvb3JkaW5hdGVzW10pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb250YWluZXIub3B0aW9ucztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgcG9seWdvbkRyYXcgPSBvcHRpb25zLnBvbHlnb24uZHJhdztcblxuICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgQ2FudmFzVXRpbHMuZHJhd1BvbHlnb25NYXNrKGNvbnRleHQsIHJhd0RhdGEsIHBvbHlnb25EcmF3LnN0cm9rZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZHJhd0xpbmtlZExpbmUocDE6IFBhcnRpY2xlLCBwMjogUGFydGljbGUsIHBvczE6IElDb29yZGluYXRlcywgcG9zMjogSUNvb3JkaW5hdGVzLCBvcGFjaXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb250YWluZXIub3B0aW9ucztcblxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgaWYgKCFjdHgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb2xvckxpbmU6IElSZ2IgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgLypcbiAgICAgICAgICogcGFydGljbGVzIGNvbm5lY3RpbmcgbGluZSBjb2xvcjpcbiAgICAgICAgICpcbiAgICAgICAgICogIHJhbmRvbTogaW4gYmxpbmsgbW9kZSA6IGluIGV2ZXJ5IGZyYW1lIHJlZnJlc2ggdGhlIGNvbG9yIHdvdWxkIGNoYW5nZVxuICAgICAgICAgKiAgICAgICAgICBoZW5jZSByZXN1bHRpbmcgYmxpbmtpbmcgb2YgbGluZXNcbiAgICAgICAgICogIG1pZDogaW4gY29uc2VudCBtb2RlOiBzYW1wbGUgcGFydGljbGVzIGNvbG9yIGFuZCBnZXQgYSBtaWQgbGV2ZWwgY29sb3JcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICBmcm9tIHRob3NlIHR3byBmb3IgdGhlIGNvbm5lY3RpbmcgbGluZSBjb2xvclxuICAgICAgICAgKi9cblxuICAgICAgICBpZiAoY29udGFpbmVyLnBhcnRpY2xlcy5saW5lTGlua2VkQ29sb3IgPT09IFwicmFuZG9tXCIpIHtcbiAgICAgICAgICAgIGNvbG9yTGluZSA9IFV0aWxzLmdldFJhbmRvbUNvbG9yUkdCQSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5wYXJ0aWNsZXMubGluZUxpbmtlZENvbG9yID09IFwibWlkXCIgJiYgcDEuY29sb3IgJiYgcDIuY29sb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZUNvbG9yID0gcDEuY29sb3I7XG4gICAgICAgICAgICBjb25zdCBkZXN0Q29sb3IgPSBwMi5jb2xvcjtcblxuICAgICAgICAgICAgY29sb3JMaW5lID0ge1xuICAgICAgICAgICAgICAgIGI6IE1hdGguZmxvb3IoVXRpbHMubWl4Q29tcG9uZW50cyhzb3VyY2VDb2xvci5iLCBkZXN0Q29sb3IuYiwgcDEucmFkaXVzLCBwMi5yYWRpdXMpKSxcbiAgICAgICAgICAgICAgICBnOiBNYXRoLmZsb29yKFV0aWxzLm1peENvbXBvbmVudHMoc291cmNlQ29sb3IuZywgZGVzdENvbG9yLmcsIHAxLnJhZGl1cywgcDIucmFkaXVzKSksXG4gICAgICAgICAgICAgICAgcjogTWF0aC5mbG9vcihVdGlscy5taXhDb21wb25lbnRzKHNvdXJjZUNvbG9yLnIsIGRlc3RDb2xvci5yLCBwMS5yYWRpdXMsIHAyLnJhZGl1cykpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbG9yTGluZSA9IGNvbnRhaW5lci5wYXJ0aWNsZXMubGluZUxpbmtlZENvbG9yIGFzIElSZ2I7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lci5yZXRpbmEubGluZUxpbmtlZFdpZHRoO1xuXG4gICAgICAgIENhbnZhc1V0aWxzLmRyYXdMaW5lTGlua2VkKGN0eCxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgcG9zMSxcbiAgICAgICAgICAgIHBvczIsXG4gICAgICAgICAgICBvcHRpb25zLmJhY2tncm91bmRNYXNrLmVuYWJsZSxcbiAgICAgICAgICAgIGNvbG9yTGluZSxcbiAgICAgICAgICAgIG9wYWNpdHksXG4gICAgICAgICAgICBvcHRpb25zLnBhcnRpY2xlcy5saW5lTGlua2VkLnNoYWRvdyk7XG4gICAgfVxuXG4gICAgcHVibGljIGRyYXdDb25uZWN0TGluZShwMTogUGFydGljbGUsIHAyOiBQYXJ0aWNsZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBsaW5lU3R5bGUgPSB0aGlzLmxpbmVTdHlsZShwMSwgcDIpO1xuXG4gICAgICAgIGlmICghbGluZVN0eWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdHggPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgaWYgKCFjdHgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIENhbnZhc1V0aWxzLmRyYXdDb25uZWN0TGluZShjdHgsIHRoaXMuY29udGFpbmVyLnJldGluYS5saW5lTGlua2VkV2lkdGgsIGxpbmVTdHlsZSwgcDEucG9zaXRpb24sIHAyLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZHJhd0dyYWJMaW5lKHBhcnRpY2xlOiBQYXJ0aWNsZSwgb3BhY2l0eTogbnVtYmVyLCBtb3VzZVBvczogSUNvb3JkaW5hdGVzKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IG9wdENvbG9yID0gb3B0aW9ucy5wYXJ0aWNsZXMubGluZUxpbmtlZC5jb2xvcjtcblxuICAgICAgICBsZXQgbGluZUNvbG9yID0gY29udGFpbmVyLnBhcnRpY2xlcy5saW5lTGlua2VkQ29sb3IgfHwgVXRpbHMuaGV4VG9SZ2Iob3B0Q29sb3IpO1xuXG4gICAgICAgIGlmIChsaW5lQ29sb3IgPT0gXCJyYW5kb21cIikge1xuICAgICAgICAgICAgbGluZUNvbG9yID0gVXRpbHMuZ2V0UmFuZG9tQ29sb3JSR0JBKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIucGFydGljbGVzLmxpbmVMaW5rZWRDb2xvciA9IGxpbmVDb2xvcjtcblxuICAgICAgICBsZXQgY29sb3JMaW5lOiBJUmdiID0ge3I6IDEyNywgZzogMTI3LCBiOiAxMjd9O1xuICAgICAgICBjb25zdCBjdHggPSBjb250YWluZXIuY2FudmFzLmNvbnRleHQ7XG5cbiAgICAgICAgaWYgKCFjdHgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250YWluZXIucGFydGljbGVzLmxpbmVMaW5rZWRDb2xvciA9PSBcInJhbmRvbVwiKSB7XG4gICAgICAgICAgICBjb2xvckxpbmUgPSBVdGlscy5nZXRSYW5kb21Db2xvclJHQkEoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbG9yTGluZSA9IGNvbnRhaW5lci5wYXJ0aWNsZXMubGluZUxpbmtlZENvbG9yIGFzIElSZ2IgfHwgY29sb3JMaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmVnaW5Qb3MgPSB7XG4gICAgICAgICAgICB4OiBwYXJ0aWNsZS5wb3NpdGlvbi54ICsgcGFydGljbGUub2Zmc2V0LngsXG4gICAgICAgICAgICB5OiBwYXJ0aWNsZS5wb3NpdGlvbi55ICsgcGFydGljbGUub2Zmc2V0LnksXG4gICAgICAgIH07XG5cbiAgICAgICAgQ2FudmFzVXRpbHMuZHJhd0dyYWJMaW5lKGN0eCwgY29udGFpbmVyLnJldGluYS5saW5lTGlua2VkV2lkdGgsIGJlZ2luUG9zLCBtb3VzZVBvcywgY29sb3JMaW5lLCBvcGFjaXR5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZHJhd1BhcnRpY2xlKHBhcnRpY2xlOiBQYXJ0aWNsZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuXG4gICAgICAgIGxldCByYWRpdXM6IG51bWJlcjtcbiAgICAgICAgbGV0IG9wYWNpdHk6IG51bWJlcjtcbiAgICAgICAgbGV0IGNvbG9yVmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAocGFydGljbGUuYnViYmxlci5yYWRpdXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmFkaXVzID0gcGFydGljbGUuYnViYmxlci5yYWRpdXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByYWRpdXMgPSBwYXJ0aWNsZS5yYWRpdXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFydGljbGUuYnViYmxlci5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9wYWNpdHkgPSBwYXJ0aWNsZS5idWJibGVyLm9wYWNpdHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcGFjaXR5ID0gcGFydGljbGUub3BhY2l0eS52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJ0aWNsZS5jb2xvcikge1xuICAgICAgICAgICAgY29sb3JWYWx1ZSA9IGByZ2JhKCR7cGFydGljbGUuY29sb3Iucn0sICR7cGFydGljbGUuY29sb3IuZ30sICR7cGFydGljbGUuY29sb3IuYn0sICR7b3BhY2l0eX0pYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5jb250ZXh0IHx8ICFjb2xvclZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBDYW52YXNVdGlscy5kcmF3UGFydGljbGUodGhpcy5jb250ZXh0LFxuICAgICAgICAgICAgcGFydGljbGUsXG4gICAgICAgICAgICBjb2xvclZhbHVlLFxuICAgICAgICAgICAgb3B0aW9ucy5iYWNrZ3JvdW5kTWFzay5lbmFibGUsXG4gICAgICAgICAgICByYWRpdXMsIG9wdGlvbnMucGFydGljbGVzLnNoYXBlLnN0cm9rZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwYWludEJhc2UoYmFzZUNvbG9yPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgICAgIENhbnZhc1V0aWxzLnBhaW50QmFzZSh0aGlzLmNvbnRleHQsIHRoaXMuZGltZW5zaW9uLCBiYXNlQ29sb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsaW5lU3R5bGUocDE6IFBhcnRpY2xlLCBwMjogUGFydGljbGUpOiBDYW52YXNHcmFkaWVudCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChwMS5jb2xvciAmJiBwMi5jb2xvcikge1xuICAgICAgICAgICAgY29uc3Qgc291cmNlUmdiID0gcDEuY29sb3I7XG4gICAgICAgICAgICBjb25zdCBkZXN0UmdiID0gcDIuY29sb3I7XG5cbiAgICAgICAgICAgIGNvbnN0IHJnYiA9IHtcbiAgICAgICAgICAgICAgICBiOiBVdGlscy5taXhDb21wb25lbnRzKHNvdXJjZVJnYi5iLCBkZXN0UmdiLmIsIHAxLnJhZGl1cywgcDIucmFkaXVzKSxcbiAgICAgICAgICAgICAgICBnOiBVdGlscy5taXhDb21wb25lbnRzKHNvdXJjZVJnYi5nLCBkZXN0UmdiLmcsIHAxLnJhZGl1cywgcDIucmFkaXVzKSxcbiAgICAgICAgICAgICAgICByOiBVdGlscy5taXhDb21wb25lbnRzKHNvdXJjZVJnYi5yLCBkZXN0UmdiLnIsIHAxLnJhZGl1cywgcDIucmFkaXVzKSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IG1pZENvbG9yID0gVXRpbHMuZ2V0U3R5bGVGcm9tQ29sb3IocmdiKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBDYW52YXNVdGlscy5ncmFkaWVudCh0aGlzLmNvbnRleHQsIHAxLCBwMiwgbWlkQ29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19