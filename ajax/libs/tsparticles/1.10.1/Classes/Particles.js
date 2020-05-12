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

      this.interactionsEnabled = options.particles.lineLinked.enable || options.particles.move.attract.enable || options.particles.move.collisions;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL1BhcnRpY2xlcy50cyJdLCJuYW1lcyI6WyJQYXJ0aWNsZXMiLCJjb250YWluZXIiLCJhcnJheSIsInB1c2hpbmciLCJsaW5lTGlua2VkQ29sb3IiLCJpbnRlcmFjdGlvbnNFbmFibGVkIiwib3B0aW9ucyIsInBvbHlnb24iLCJ0eXBlIiwiUG9seWdvbk1hc2tUeXBlIiwiaW5saW5lIiwiaW5saW5lQXJyYW5nZW1lbnQiLCJQb2x5Z29uTWFza0lubGluZUFycmFuZ2VtZW50Iiwib25lUGVyUG9pbnQiLCJkcmF3UG9pbnRzT25Qb2x5Z29uUGF0aCIsImkiLCJsZW5ndGgiLCJwYXJ0aWNsZXMiLCJudW1iZXIiLCJ2YWx1ZSIsInAiLCJQYXJ0aWNsZSIsInB1c2giLCJsaW5lTGlua2VkIiwiZW5hYmxlIiwibW92ZSIsImF0dHJhY3QiLCJjb2xsaXNpb25zIiwiZGVsdGEiLCJ1cGRhdGUiLCJqIiwicDIiLCJpbnRlcmFjdCIsImNhbnZhcyIsImNsZWFyIiwiZHJhdyIsImRyYXdQb2x5Z29uIiwibmIiLCJtb3VzZVBvc2l0aW9uIiwibGltaXQiLCJyZW1vdmUiLCJwb3MiLCJwb3NpdGlvbiIsIngiLCJ5Iiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQU1BOztBQUNBOztBQUNBOztBQUVBOzs7SUFHYUEsUztBQVFULHFCQUFZQyxTQUFaLEVBQWtDO0FBQUE7QUFBQSxTQVAzQkMsS0FPMkI7QUFBQSxTQU4zQkMsT0FNMkI7QUFBQSxTQUwzQkMsZUFLMkI7QUFBQSxTQUhqQkgsU0FHaUI7QUFBQSxTQUYxQkksbUJBRTBCO0FBQzlCLFNBQUtKLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLRyxtQkFBTCxHQUEyQixLQUEzQjtBQUNIO0FBRUQ7Ozs7OzJCQUNvQjtBQUNoQixVQUFNSixTQUFTLEdBQUcsS0FBS0EsU0FBdkI7QUFDQSxVQUFNSyxPQUFPLEdBQUdM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QWxCLEVBQXFCUixFQUFyQjs7QUFFQSxVQUFJLENBQUMvQixPQUFPLENBQUNXLFNBQVIsQ0FBa0JRLElBQWxCLENBQXVCRCxNQUE1QixFQUFvQztBQUNoQyxhQUFLVyxJQUFMLENBQVUsQ0FBVjtBQUNIO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IHtJQ29vcmRpbmF0ZXN9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb29yZGluYXRlc1wiO1xuaW1wb3J0IHtJTW91c2VEYXRhfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JTW91c2VEYXRhXCI7XG5pbXBvcnQge0lSZ2J9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lSZ2JcIjtcbmltcG9ydCB7UGFydGljbGV9IGZyb20gXCIuL1BhcnRpY2xlXCI7XG5pbXBvcnQge1BvbHlnb25NYXNrVHlwZX0gZnJvbSBcIi4uL0VudW1zL1BvbHlnb25NYXNrVHlwZVwiO1xuaW1wb3J0IHtQb2x5Z29uTWFza0lubGluZUFycmFuZ2VtZW50fSBmcm9tIFwiLi4vRW51bXMvUG9seWdvbk1hc2tJbmxpbmVBcnJhbmdlbWVudFwiO1xuXG4vKipcbiAqIFBhcnRpY2xlcyBtYW5hZ2VyXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZXMge1xuICAgIHB1YmxpYyBhcnJheTogUGFydGljbGVbXTtcbiAgICBwdWJsaWMgcHVzaGluZz86IGJvb2xlYW47XG4gICAgcHVibGljIGxpbmVMaW5rZWRDb2xvcj86IElSZ2IgfCBzdHJpbmcgfCBudWxsO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IENvbnRhaW5lcjtcbiAgICBwcml2YXRlIGludGVyYWN0aW9uc0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IENvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5hcnJheSA9IFtdO1xuICAgICAgICB0aGlzLmludGVyYWN0aW9uc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKiAtLS0tLS0tLS0gdHNQYXJ0aWNsZXMgZnVuY3Rpb25zIC0gcGFydGljbGVzIC0tLS0tLS0tLS0tICovXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucG9seWdvbi50eXBlID09PSBQb2x5Z29uTWFza1R5cGUuaW5saW5lICYmXG4gICAgICAgICAgICBvcHRpb25zLnBvbHlnb24uaW5saW5lQXJyYW5nZW1lbnQgPT09IFBvbHlnb25NYXNrSW5saW5lQXJyYW5nZW1lbnQub25lUGVyUG9pbnQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5wb2x5Z29uLmRyYXdQb2ludHNPblBvbHlnb25QYXRoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5hcnJheS5sZW5ndGg7IGkgPCBvcHRpb25zLnBhcnRpY2xlcy5udW1iZXIudmFsdWU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBuZXcgUGFydGljbGUoY29udGFpbmVyKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXkucHVzaChwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25zRW5hYmxlZCA9IG9wdGlvbnMucGFydGljbGVzLmxpbmVMaW5rZWQuZW5hYmxlIHx8XG4gICAgICAgICAgICBvcHRpb25zLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlIHx8XG4gICAgICAgICAgICBvcHRpb25zLnBhcnRpY2xlcy5tb3ZlLmNvbGxpc2lvbnM7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLyogdGhlIHBhcnRpY2xlICovXG4gICAgICAgICAgICBjb25zdCBwID0gdGhpcy5hcnJheVtpXTtcblxuICAgICAgICAgICAgLy8gbGV0IGQgPSAoIGR4ID0gY29udGFpbmVyLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggLSBwLnggKSAqIGR4ICtcbiAgICAgICAgICAgIC8vICAgICAgICAgKCBkeSA9IGNvbnRhaW5lci5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195IC0gcC55ICkgKiBkeTtcbiAgICAgICAgICAgIC8vIGxldCBmID0gLUJBTkdfU0laRSAvIGQ7XG4gICAgICAgICAgICAvLyBpZiAoIGQgPCBCQU5HX1NJWkUgKSB7XG4gICAgICAgICAgICAvLyAgICAgbGV0IHQgPSBNYXRoLmF0YW4yKCBkeSwgZHggKTtcbiAgICAgICAgICAgIC8vICAgICBwLnZ4ID0gZiAqIE1hdGguY29zKHQpO1xuICAgICAgICAgICAgLy8gICAgIHAudnkgPSBmICogTWF0aC5zaW4odCk7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIHAudXBkYXRlKGksIGRlbHRhKTtcblxuICAgICAgICAgICAgLyogaW50ZXJhY3Rpb24gYXV0byBiZXR3ZWVuIHBhcnRpY2xlcyAqL1xuICAgICAgICAgICAgaWYgKHRoaXMuaW50ZXJhY3Rpb25zRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IHRoaXMuYXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcDIgPSB0aGlzLmFycmF5W2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIHAuaW50ZXJhY3QocDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkcmF3KGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb250YWluZXIub3B0aW9ucztcblxuICAgICAgICAvKiBjbGVhciBjYW52YXMgKi9cbiAgICAgICAgY29udGFpbmVyLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgICAgIC8qIHVwZGF0ZSBlYWNoIHBhcnRpY2xlcyBwYXJhbSAqL1xuICAgICAgICB0aGlzLnVwZGF0ZShkZWx0YSk7XG5cbiAgICAgICAgLyogZHJhdyBwb2x5Z29uIHNoYXBlIGluIGRlYnVnIG1vZGUgKi9cbiAgICAgICAgaWYgKG9wdGlvbnMucG9seWdvbi5kcmF3LmVuYWJsZSkge1xuICAgICAgICAgICAgY29udGFpbmVyLnBvbHlnb24uZHJhd1BvbHlnb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGRyYXcgZWFjaCBwYXJ0aWNsZSAqL1xuICAgICAgICBmb3IgKGNvbnN0IHAgb2YgdGhpcy5hcnJheSkge1xuICAgICAgICAgICAgcC5kcmF3KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBbXTtcbiAgICB9XG5cbiAgICAvKiAtLS0tLS0tLS0tIHRzUGFydGljbGVzIGZ1bmN0aW9ucyAtIG1vZGVzIGV2ZW50cyAtLS0tLS0tLS0tLS0gKi9cbiAgICBwdWJsaWMgcHVzaChuYjogbnVtYmVyLCBtb3VzZVBvc2l0aW9uPzogSU1vdXNlRGF0YSk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuXG4gICAgICAgIHRoaXMucHVzaGluZyA9IHRydWU7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucGFydGljbGVzLm51bWJlci5saW1pdCA+IDApIHtcbiAgICAgICAgICAgIGlmICgodGhpcy5hcnJheS5sZW5ndGggKyBuYikgPiBvcHRpb25zLnBhcnRpY2xlcy5udW1iZXIubGltaXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSgodGhpcy5hcnJheS5sZW5ndGggKyBuYikgLSBvcHRpb25zLnBhcnRpY2xlcy5udW1iZXIubGltaXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBvczogSUNvb3JkaW5hdGVzIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmIChtb3VzZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICBwb3MgPSBtb3VzZVBvc2l0aW9uLnBvc2l0aW9uIHx8IHt4OiAwLCB5OiAwfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmI7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcCA9IG5ldyBQYXJ0aWNsZShjb250YWluZXIsIHBvcyk7XG5cbiAgICAgICAgICAgIHRoaXMuYXJyYXkucHVzaChwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghb3B0aW9ucy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhdygwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHVzaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUobmI6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuXG4gICAgICAgIHRoaXMuYXJyYXkuc3BsaWNlKDAsIG5iKTtcblxuICAgICAgICBpZiAoIW9wdGlvbnMucGFydGljbGVzLm1vdmUuZW5hYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXcoMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=