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

var _PolygonMaskInlineArrangement = require("../Enums/PolygonMaskInlineArrangement");

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
    this.interactionsEnabled = void 0;
    this.container = container;
    this.array = [];
    this.interactionsEnabled = false;
  }
  /* --------- tsParticles functions - particles ----------- */


  (0, _createClass2["default"])(Particles, [{
    key: "init",
    value: function init() {
      var container = this.container;
      var options = container.options;

      if (options.polygon.type === _PolygonMaskType.PolygonMaskType.inline && options.polygon.inlineArrangement === _PolygonMaskInlineArrangement.PolygonMaskInlineArrangement.onePerPoint) {
        container.polygon.drawPointsOnPolygonPath();
      } else {
        for (var i = this.array.length; i < options.particles.number.value; i++) {
          var p = new _Particle.Particle(container);
          this.array.push(p);
        }
      }

      this.interactionsEnabled = options.particles.lineLinked.enable || options.particles.move.attract.enable || options.particles.move.bounce;
    }
  }, {
    key: "update",
    value: function update(delta) {
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

        if (this.interactionsEnabled) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL1BhcnRpY2xlcy50cyJdLCJuYW1lcyI6WyJQYXJ0aWNsZXMiLCJjb250YWluZXIiLCJhcnJheSIsInB1c2hpbmciLCJsaW5lTGlua2VkQ29sb3IiLCJpbnRlcmFjdGlvbnNFbmFibGVkIiwib3B0aW9ucyIsInBvbHlnb24iLCJ0eXBlIiwiUG9seWdvbk1hc2tUeXBlIiwiaW5saW5lIiwiaW5saW5lQXJyYW5nZW1lbnQiLCJQb2x5Z29uTWFza0lubGluZUFycmFuZ2VtZW50Iiwib25lUGVyUG9pbnQiLCJkcmF3UG9pbnRzT25Qb2x5Z29uUGF0aCIsImkiLCJsZW5ndGgiLCJwYXJ0aWNsZXMiLCJudW1iZXIiLCJ2YWx1ZSIsInAiLCJQYXJ0aWNsZSIsInB1c2giLCJsaW5lTGlua2VkIiwiZW5hYmxlIiwibW92ZSIsImF0dHJhY3QiLCJib3VuY2UiLCJkZWx0YSIsInVwZGF0ZSIsImoiLCJwMiIsImludGVyYWN0IiwiY2FudmFzIiwiY2xlYXIiLCJkcmF3IiwiZHJhd1BvbHlnb24iLCJuYiIsIm1vdXNlUG9zaXRpb24iLCJsaW1pdCIsInJlbW92ZSIsInBvcyIsInBvc2l0aW9uIiwieCIsInkiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBRUE7OztJQUdhQSxTO0FBUVQscUJBQVlDLFNBQVosRUFBa0M7QUFBQTtBQUFBLFNBUDNCQyxLQU8yQjtBQUFBLFNBTjNCQyxPQU0yQjtBQUFBLFNBTDNCQyxlQUsyQjtBQUFBLFNBSGpCSCxTQUdpQjtBQUFBLFNBRjFCSSxtQkFFMEI7QUFDOUIsU0FBS0osU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtHLG1CQUFMLEdBQTJCLEtBQTNCO0FBQ0g7QUFFRDs7Ozs7MkJBQ29CO0FBQ2hCLFVBQU1KLFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUNBLFVBQU1LLE9BQU8sR0FBR0wsU0FB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RUFBcUJSLEVBQXJCOztBQUVBLFVBQUksQ0FBQy9CLE9BQU8sQ0FBQ1csU0FBUixDQUFrQlEsSUFBbEIsQ0FBdUJELE1BQTVCLEVBQW9DO0FBQ2hDLGFBQUtXLElBQUwsQ0FBVSxDQUFWO0FBQ0g7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQge0lDb29yZGluYXRlc30gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvb3JkaW5hdGVzXCI7XG5pbXBvcnQge0lNb3VzZURhdGF9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lNb3VzZURhdGFcIjtcbmltcG9ydCB7SVJnYn0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVJnYlwiO1xuaW1wb3J0IHtQYXJ0aWNsZX0gZnJvbSBcIi4vUGFydGljbGVcIjtcbmltcG9ydCB7UG9seWdvbk1hc2tUeXBlfSBmcm9tIFwiLi4vRW51bXMvUG9seWdvbk1hc2tUeXBlXCI7XG5pbXBvcnQge1BvbHlnb25NYXNrSW5saW5lQXJyYW5nZW1lbnR9IGZyb20gXCIuLi9FbnVtcy9Qb2x5Z29uTWFza0lubGluZUFycmFuZ2VtZW50XCI7XG5cbi8qKlxuICogUGFydGljbGVzIG1hbmFnZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFBhcnRpY2xlcyB7XG4gICAgcHVibGljIGFycmF5OiBQYXJ0aWNsZVtdO1xuICAgIHB1YmxpYyBwdXNoaW5nPzogYm9vbGVhbjtcbiAgICBwdWJsaWMgbGluZUxpbmtlZENvbG9yPzogSVJnYiB8IHN0cmluZyB8IG51bGw7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHByaXZhdGUgaW50ZXJhY3Rpb25zRW5hYmxlZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLmFycmF5ID0gW107XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25zRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLSB0c1BhcnRpY2xlcyBmdW5jdGlvbnMgLSBwYXJ0aWNsZXMgLS0tLS0tLS0tLS0gKi9cbiAgICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb250YWluZXIub3B0aW9ucztcblxuICAgICAgICBpZiAob3B0aW9ucy5wb2x5Z29uLnR5cGUgPT09IFBvbHlnb25NYXNrVHlwZS5pbmxpbmUgJiZcbiAgICAgICAgICAgIG9wdGlvbnMucG9seWdvbi5pbmxpbmVBcnJhbmdlbWVudCA9PT0gUG9seWdvbk1hc2tJbmxpbmVBcnJhbmdlbWVudC5vbmVQZXJQb2ludCkge1xuICAgICAgICAgICAgY29udGFpbmVyLnBvbHlnb24uZHJhd1BvaW50c09uUG9seWdvblBhdGgoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmFycmF5Lmxlbmd0aDsgaSA8IG9wdGlvbnMucGFydGljbGVzLm51bWJlci52YWx1ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IG5ldyBQYXJ0aWNsZShjb250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJheS5wdXNoKHApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvbnNFbmFibGVkID0gb3B0aW9ucy5wYXJ0aWNsZXMubGluZUxpbmtlZC5lbmFibGUgfHxcbiAgICAgICAgICAgIG9wdGlvbnMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5lbmFibGUgfHxcbiAgICAgICAgICAgIG9wdGlvbnMucGFydGljbGVzLm1vdmUuYm91bmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8qIHRoZSBwYXJ0aWNsZSAqL1xuICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMuYXJyYXlbaV07XG5cbiAgICAgICAgICAgIC8vIGxldCBkID0gKCBkeCA9IGNvbnRhaW5lci5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194IC0gcC54ICkgKiBkeCArXG4gICAgICAgICAgICAvLyAgICAgICAgICggZHkgPSBjb250YWluZXIuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSAtIHAueSApICogZHk7XG4gICAgICAgICAgICAvLyBsZXQgZiA9IC1CQU5HX1NJWkUgLyBkO1xuICAgICAgICAgICAgLy8gaWYgKCBkIDwgQkFOR19TSVpFICkge1xuICAgICAgICAgICAgLy8gICAgIGxldCB0ID0gTWF0aC5hdGFuMiggZHksIGR4ICk7XG4gICAgICAgICAgICAvLyAgICAgcC52eCA9IGYgKiBNYXRoLmNvcyh0KTtcbiAgICAgICAgICAgIC8vICAgICBwLnZ5ID0gZiAqIE1hdGguc2luKHQpO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICBwLnVwZGF0ZShpLCBkZWx0YSk7XG5cbiAgICAgICAgICAgIC8qIGludGVyYWN0aW9uIGF1dG8gYmV0d2VlbiBwYXJ0aWNsZXMgKi9cbiAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCB0aGlzLmFycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAyID0gdGhpcy5hcnJheVtqXTtcblxuICAgICAgICAgICAgICAgICAgICBwLmludGVyYWN0KHAyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZHJhdyhkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG5cbiAgICAgICAgLyogY2xlYXIgY2FudmFzICovXG4gICAgICAgIGNvbnRhaW5lci5jYW52YXMuY2xlYXIoKTtcblxuICAgICAgICAvKiB1cGRhdGUgZWFjaCBwYXJ0aWNsZXMgcGFyYW0gKi9cbiAgICAgICAgdGhpcy51cGRhdGUoZGVsdGEpO1xuXG4gICAgICAgIC8qIGRyYXcgcG9seWdvbiBzaGFwZSBpbiBkZWJ1ZyBtb2RlICovXG4gICAgICAgIGlmIChvcHRpb25zLnBvbHlnb24uZHJhdy5lbmFibGUpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5wb2x5Z29uLmRyYXdQb2x5Z29uKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBkcmF3IGVhY2ggcGFydGljbGUgKi9cbiAgICAgICAgZm9yIChjb25zdCBwIG9mIHRoaXMuYXJyYXkpIHtcbiAgICAgICAgICAgIHAuZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFycmF5ID0gW107XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLSB0c1BhcnRpY2xlcyBmdW5jdGlvbnMgLSBtb2RlcyBldmVudHMgLS0tLS0tLS0tLS0tICovXG4gICAgcHVibGljIHB1c2gobmI6IG51bWJlciwgbW91c2VQb3NpdGlvbj86IElNb3VzZURhdGEpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb250YWluZXIub3B0aW9ucztcblxuICAgICAgICB0aGlzLnB1c2hpbmcgPSB0cnVlO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnBhcnRpY2xlcy5udW1iZXIubGltaXQgPiAwKSB7XG4gICAgICAgICAgICBpZiAoKHRoaXMuYXJyYXkubGVuZ3RoICsgbmIpID4gb3B0aW9ucy5wYXJ0aWNsZXMubnVtYmVyLmxpbWl0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoKHRoaXMuYXJyYXkubGVuZ3RoICsgbmIpIC0gb3B0aW9ucy5wYXJ0aWNsZXMubnVtYmVyLmxpbWl0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwb3M6IElDb29yZGluYXRlcyB8IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAobW91c2VQb3NpdGlvbikge1xuICAgICAgICAgICAgcG9zID0gbW91c2VQb3NpdGlvbi5wb3NpdGlvbiB8fCB7eDogMCwgeTogMH07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBuZXcgUGFydGljbGUoY29udGFpbmVyLCBwb3MpO1xuXG4gICAgICAgICAgICB0aGlzLmFycmF5LnB1c2gocCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdGlvbnMucGFydGljbGVzLm1vdmUuZW5hYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXcoMCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnB1c2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlKG5iOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb250YWluZXIub3B0aW9ucztcblxuICAgICAgICB0aGlzLmFycmF5LnNwbGljZSgwLCBuYik7XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3KDApO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19