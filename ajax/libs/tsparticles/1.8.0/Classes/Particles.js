"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Particles = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Particle = require("./Particle");

var _PolygonMaskType = require("../Enums/PolygonMaskType");

/**
 * Particles manager
 */
var Particles = /*#__PURE__*/function () {
  function Particles(container) {
    (0, _classCallCheck2["default"])(this, Particles);
    this.array = void 0;
    this.pushing = void 0;
    this.lineLinkedColor = void 0;
    this.container = void 0;
    this.container = container;
    this.array = [];
  }
  /* --------- tsParticles functions - particles ----------- */


  (0, _createClass2["default"])(Particles, [{
    key: "init",
    value: function init() {
      var container = this.container;
      var options = container.options;

      if (options.polygon.type === _PolygonMaskType.PolygonMaskType.inline) {
        container.polygon.drawPointsOnPolygonPath();
      } else {
        for (var i = this.array.length; i < options.particles.number.value; i++) {
          var p = new _Particle.Particle(container);
          this.array.push(p);
        }
      }
    }
  }, {
    key: "update",
    value: function update(delta) {
      var container = this.container;
      var options = container.options;

      for (var i = 0; i < this.array.length; i++) {
        /* the particle */
        var p = this.array[i]; // let d = ( dx = container.interactivity.mouse.click_pos_x - p.x ) * dx +
        //         ( dy = container.interactivity.mouse.click_pos_y - p.y ) * dy;
        // let f = -BANG_SIZE / d;
        // if ( d < BANG_SIZE ) {
        //     let t = Math.atan2( dy, dx );
        //     p.vx = f * Math.cos(t);
        //     p.vy = f * Math.sin(t);
        // }

        p.update(i, delta);
        /* interaction auto between particles */

        if (options.particles.lineLinked.enable || options.particles.move.attract.enable) {
          for (var j = i + 1; j < this.array.length; j++) {
            var p2 = this.array[j];
            p.interact(p2);
          }
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(delta) {
      var container = this.container;
      var options = container.options;
      /* clear canvas */

      container.canvas.clear();
      /* update each particles param */

      this.update(delta);
      /* draw polygon shape in debug mode */

      if (options.polygon.draw.enable) {
        container.polygon.drawPolygon();
      }
      /* draw each particle */


      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var p = _step.value;
          p.draw();
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
  }, {
    key: "clear",
    value: function clear() {
      this.array = [];
    }
    /* ---------- tsParticles functions - modes events ------------ */

  }, {
    key: "push",
    value: function push(nb, mousePosition) {
      var container = this.container;
      var options = container.options;
      this.pushing = true;

      if (options.particles.number.limit > 0) {
        if (this.array.length + nb > options.particles.number.limit) {
          this.remove(this.array.length + nb - options.particles.number.limit);
        }
      }

      var pos;

      if (mousePosition) {
        pos = mousePosition.position || {
          x: 0,
          y: 0
        };
      }

      for (var i = 0; i < nb; i++) {
        var p = new _Particle.Particle(container, pos);
        this.array.push(p);
      }

      if (!options.particles.move.enable) {
        this.draw(0);
      }

      this.pushing = false;
    }
  }, {
    key: "remove",
    value: function remove(nb) {
      var container = this.container;
      var options = container.options;
      this.array.splice(0, nb);

      if (!options.particles.move.enable) {
        this.draw(0);
      }
    }
  }]);
  return Particles;
}();

exports.Particles = Particles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL1BhcnRpY2xlcy50cyJdLCJuYW1lcyI6WyJQYXJ0aWNsZXMiLCJjb250YWluZXIiLCJhcnJheSIsInB1c2hpbmciLCJsaW5lTGlua2VkQ29sb3IiLCJvcHRpb25zIiwicG9seWdvbiIsInR5cGUiLCJQb2x5Z29uTWFza1R5cGUiLCJpbmxpbmUiLCJkcmF3UG9pbnRzT25Qb2x5Z29uUGF0aCIsImkiLCJsZW5ndGgiLCJwYXJ0aWNsZXMiLCJudW1iZXIiLCJ2YWx1ZSIsInAiLCJQYXJ0aWNsZSIsInB1c2giLCJkZWx0YSIsInVwZGF0ZSIsImxpbmVMaW5rZWQiLCJlbmFibGUiLCJtb3ZlIiwiYXR0cmFjdCIsImoiLCJwMiIsImludGVyYWN0IiwiY2FudmFzIiwiY2xlYXIiLCJkcmF3IiwiZHJhd1BvbHlnb24iLCJuYiIsIm1vdXNlUG9zaXRpb24iLCJsaW1pdCIsInJlbW92ZSIsInBvcyIsInBvc2l0aW9uIiwieCIsInkiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FBTUE7O0FBQ0E7O0FBRUE7OztJQUdhQSxTO0FBT1QscUJBQVlDLFNBQVosRUFBa0M7QUFBQTtBQUFBLFNBTjNCQyxLQU0yQjtBQUFBLFNBTDNCQyxPQUsyQjtBQUFBLFNBSjNCQyxlQUkyQjtBQUFBLFNBRmpCSCxTQUVpQjtBQUM5QixTQUFLQSxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0g7QUFFRDs7Ozs7MkJBQ29CO0FBQ2hCLFVBQU1ELFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUNBLFVBQU1JLE9BQU8sR0FBR0osU0FBUyxDQUFDSSxPQUExQjs7QUFFQSxVQUFJQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLElBQWhCLEtBQXlCQyxpQ0FBZ0JDLE1BQTdDLEVBQXFEO0FBQ2pEUixRQUFBQSxTQUFTLENBQUNLLE9BQVYsQ0FBa0JJLHVCQUFsQjtBQUNILE9BRkQsTUFFTztBQUNILGFBQUss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b0IsRUFBckIsR0FBMkIzQixPQUFPLENBQUNRLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCb0IsS0FBaEU7QUFDSDtBQUNKOztBQUVELFVBQUlFLEdBQUo7O0FBRUEsVUFBSUgsYUFBSixFQUFtQjtBQUNmRyxRQUFBQSxHQUFHLEdBQUdILGFBQWEsQ0FBQ0ksUUFBZCxJQUEwQjtBQUFDQyxVQUFBQSxDQUFDLEVBQUUsQ0FBSjtBQUFPQyxVQUFBQSxDQUFDLEVBQUU7QUFBVixTQUFoQztBQUNIOztBQUVELFdBQUssSUFBSTVCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdxQixFQUFwQixFQUF3QnJCLENBQUMsRUFBekIsRUFBNkI7QUFDekIsWUFBTUssQ0FBQyxHQUFHLElBQUlDLGtCQUFKLENBQWFoQixTQUFiLEVBQXdCbUMsR0FBeEIsQ0FBVjtBQUVBLGFBQUtsQyxLQUFMLENBQVdnQixJQUFYLENBQWdCRixDQUFoQjtBQUNIOztBQUVELFVBQUksQ0FBQ1gsT0FBTyxDQUFDUSxTQUFSLENBQWtCVSxJQUFsQixDQUF1QkQsTUFBNUIsRUFBb0M7QUFDaEMsYUFBS1EsSUFBTCxDQUFVLENBQVY7QUFDSDs7QUFFRCxXQUFLM0IsT0FBTCxHQUFlLEtBQWY7QUFDSDs7OzJCQUVhNkIsRSxFQUFrQjtBQUM1QixVQUFNL0IsU0FBUyxHQUFHLEtBQUtBLFNBQXZCO0FBQ0EsVUFBTUksT0FBTyxHQUFHSixTQUFTLENBQUNJLE9BQTFCO0FBRUEsV0FBS0gsS0FBTCxDQUFXc0MsTUFBWCxDQUFrQixDQUFsQixFQUFxQlIsRUFBckI7O0FBRUEsVUFBSSxDQUFDM0IsT0FBTyxDQUFDUSxTQUFSLENBQWtCVSxJQUFsQixDQUF1QkQsTUFBNUIsRUFBb0M7QUFDaEMsYUFBS1EsSUFBTCxDQUFVLENBQVY7QUFDSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCB7SUNvb3JkaW5hdGVzfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29vcmRpbmF0ZXNcIjtcbmltcG9ydCB7SU1vdXNlRGF0YX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU1vdXNlRGF0YVwiO1xuaW1wb3J0IHtJUmdifSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JUmdiXCI7XG5pbXBvcnQge1BhcnRpY2xlfSBmcm9tIFwiLi9QYXJ0aWNsZVwiO1xuaW1wb3J0IHtQb2x5Z29uTWFza1R5cGV9IGZyb20gXCIuLi9FbnVtcy9Qb2x5Z29uTWFza1R5cGVcIjtcblxuLyoqXG4gKiBQYXJ0aWNsZXMgbWFuYWdlclxuICovXG5leHBvcnQgY2xhc3MgUGFydGljbGVzIHtcbiAgICBwdWJsaWMgYXJyYXk6IFBhcnRpY2xlW107XG4gICAgcHVibGljIHB1c2hpbmc/OiBib29sZWFuO1xuICAgIHB1YmxpYyBsaW5lTGlua2VkQ29sb3I/OiBJUmdiIHwgc3RyaW5nIHwgbnVsbDtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyOiBDb250YWluZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IENvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5hcnJheSA9IFtdO1xuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLSB0c1BhcnRpY2xlcyBmdW5jdGlvbnMgLSBwYXJ0aWNsZXMgLS0tLS0tLS0tLS0gKi9cbiAgICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb250YWluZXIub3B0aW9ucztcblxuICAgICAgICBpZiAob3B0aW9ucy5wb2x5Z29uLnR5cGUgPT09IFBvbHlnb25NYXNrVHlwZS5pbmxpbmUpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5wb2x5Z29uLmRyYXdQb2ludHNPblBvbHlnb25QYXRoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5hcnJheS5sZW5ndGg7IGkgPCBvcHRpb25zLnBhcnRpY2xlcy5udW1iZXIudmFsdWU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBuZXcgUGFydGljbGUoY29udGFpbmVyKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXkucHVzaChwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLyogdGhlIHBhcnRpY2xlICovXG4gICAgICAgICAgICBjb25zdCBwID0gdGhpcy5hcnJheVtpXTtcbiAgICAgICAgICAgIC8vIGxldCBkID0gKCBkeCA9IGNvbnRhaW5lci5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194IC0gcC54ICkgKiBkeCArXG4gICAgICAgICAgICAvLyAgICAgICAgICggZHkgPSBjb250YWluZXIuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSAtIHAueSApICogZHk7XG4gICAgICAgICAgICAvLyBsZXQgZiA9IC1CQU5HX1NJWkUgLyBkO1xuICAgICAgICAgICAgLy8gaWYgKCBkIDwgQkFOR19TSVpFICkge1xuICAgICAgICAgICAgLy8gICAgIGxldCB0ID0gTWF0aC5hdGFuMiggZHksIGR4ICk7XG4gICAgICAgICAgICAvLyAgICAgcC52eCA9IGYgKiBNYXRoLmNvcyh0KTtcbiAgICAgICAgICAgIC8vICAgICBwLnZ5ID0gZiAqIE1hdGguc2luKHQpO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICBwLnVwZGF0ZShpLCBkZWx0YSk7XG5cbiAgICAgICAgICAgIC8qIGludGVyYWN0aW9uIGF1dG8gYmV0d2VlbiBwYXJ0aWNsZXMgKi9cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBhcnRpY2xlcy5saW5lTGlua2VkLmVuYWJsZSB8fCBvcHRpb25zLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5hcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwMiA9IHRoaXMuYXJyYXlbal07XG5cbiAgICAgICAgICAgICAgICAgICAgcC5pbnRlcmFjdChwMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRyYXcoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuXG4gICAgICAgIC8qIGNsZWFyIGNhbnZhcyAqL1xuICAgICAgICBjb250YWluZXIuY2FudmFzLmNsZWFyKCk7XG5cbiAgICAgICAgLyogdXBkYXRlIGVhY2ggcGFydGljbGVzIHBhcmFtICovXG4gICAgICAgIHRoaXMudXBkYXRlKGRlbHRhKTtcblxuICAgICAgICAvKiBkcmF3IHBvbHlnb24gc2hhcGUgaW4gZGVidWcgbW9kZSAqL1xuICAgICAgICBpZiAob3B0aW9ucy5wb2x5Z29uLmRyYXcuZW5hYmxlKSB7XG4gICAgICAgICAgICBjb250YWluZXIucG9seWdvbi5kcmF3UG9seWdvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogZHJhdyBlYWNoIHBhcnRpY2xlICovXG4gICAgICAgIGZvciAoY29uc3QgcCBvZiB0aGlzLmFycmF5KSB7XG4gICAgICAgICAgICBwLmRyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcnJheSA9IFtdO1xuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0gdHNQYXJ0aWNsZXMgZnVuY3Rpb25zIC0gbW9kZXMgZXZlbnRzIC0tLS0tLS0tLS0tLSAqL1xuICAgIHB1YmxpYyBwdXNoKG5iOiBudW1iZXIsIG1vdXNlUG9zaXRpb24/OiBJTW91c2VEYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5wdXNoaW5nID0gdHJ1ZTtcblxuICAgICAgICBpZiAob3B0aW9ucy5wYXJ0aWNsZXMubnVtYmVyLmxpbWl0ID4gMCkge1xuICAgICAgICAgICAgaWYgKCh0aGlzLmFycmF5Lmxlbmd0aCArIG5iKSA+IG9wdGlvbnMucGFydGljbGVzLm51bWJlci5saW1pdCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKCh0aGlzLmFycmF5Lmxlbmd0aCArIG5iKSAtIG9wdGlvbnMucGFydGljbGVzLm51bWJlci5saW1pdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcG9zOiBJQ29vcmRpbmF0ZXMgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKG1vdXNlUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHBvcyA9IG1vdXNlUG9zaXRpb24ucG9zaXRpb24gfHwge3g6IDAsIHk6IDB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gbmV3IFBhcnRpY2xlKGNvbnRhaW5lciwgcG9zKTtcblxuICAgICAgICAgICAgdGhpcy5hcnJheS5wdXNoKHApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3KDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wdXNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZShuYjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5hcnJheS5zcGxpY2UoMCwgbmIpO1xuXG4gICAgICAgIGlmICghb3B0aW9ucy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhdygwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==