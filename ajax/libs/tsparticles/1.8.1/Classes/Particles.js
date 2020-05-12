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

      if (options.polygon.type === _PolygonMaskType.PolygonMaskType.inline) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL1BhcnRpY2xlcy50cyJdLCJuYW1lcyI6WyJQYXJ0aWNsZXMiLCJjb250YWluZXIiLCJhcnJheSIsInB1c2hpbmciLCJsaW5lTGlua2VkQ29sb3IiLCJpbnRlcmFjdGlvbnNFbmFibGVkIiwib3B0aW9ucyIsInBvbHlnb24iLCJ0eXBlIiwiUG9seWdvbk1hc2tUeXBlIiwiaW5saW5lIiwiZHJhd1BvaW50c09uUG9seWdvblBhdGgiLCJpIiwibGVuZ3RoIiwicGFydGljbGVzIiwibnVtYmVyIiwidmFsdWUiLCJwIiwiUGFydGljbGUiLCJwdXNoIiwibGluZUxpbmtlZCIsImVuYWJsZSIsIm1vdmUiLCJhdHRyYWN0IiwiYm91bmNlIiwiZGVsdGEiLCJ1cGRhdGUiLCJqIiwicDIiLCJpbnRlcmFjdCIsImNhbnZhcyIsImNsZWFyIiwiZHJhdyIsImRyYXdQb2x5Z29uIiwibmIiLCJtb3VzZVBvc2l0aW9uIiwibGltaXQiLCJyZW1vdmUiLCJwb3MiLCJwb3NpdGlvbiIsIngiLCJ5Iiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQU1BOztBQUNBOztBQUVBOzs7SUFHYUEsUztBQVFULHFCQUFZQyxTQUFaLEVBQWtDO0FBQUE7QUFBQSxTQVAzQkMsS0FPMkI7QUFBQSxTQU4zQkMsT0FNMkI7QUFBQSxTQUwzQkMsZUFLMkI7QUFBQSxTQUhqQkgsU0FHaUI7QUFBQSxTQUYxQkksbUJBRTBCO0FBQzlCLFNBQUtKLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLRyxtQkFBTCxHQUEyQixLQUEzQjtBQUNIO0FBRUQ7Ozs7OzJCQUNvQjtBQUNoQixVQUFNSixTQUFTLEdBQUcsS0FBS0EsU0FBdkI7QUFDQSxVQUFNSyxPQUFPLEdBQUdMLFNBQVMsQ0FBQ0ssT0FBMUI7O0FBRUEsVUFBSUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCQyxJQUFoQixLQUF5QkMsaUNBQWdCQyxN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IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQge0lDb29yZGluYXRlc30gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvb3JkaW5hdGVzXCI7XG5pbXBvcnQge0lNb3VzZURhdGF9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lNb3VzZURhdGFcIjtcbmltcG9ydCB7SVJnYn0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVJnYlwiO1xuaW1wb3J0IHtQYXJ0aWNsZX0gZnJvbSBcIi4vUGFydGljbGVcIjtcbmltcG9ydCB7UG9seWdvbk1hc2tUeXBlfSBmcm9tIFwiLi4vRW51bXMvUG9seWdvbk1hc2tUeXBlXCI7XG5cbi8qKlxuICogUGFydGljbGVzIG1hbmFnZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFBhcnRpY2xlcyB7XG4gICAgcHVibGljIGFycmF5OiBQYXJ0aWNsZVtdO1xuICAgIHB1YmxpYyBwdXNoaW5nPzogYm9vbGVhbjtcbiAgICBwdWJsaWMgbGluZUxpbmtlZENvbG9yPzogSVJnYiB8IHN0cmluZyB8IG51bGw7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lcjogQ29udGFpbmVyO1xuICAgIHByaXZhdGUgaW50ZXJhY3Rpb25zRW5hYmxlZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogQ29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLmFycmF5ID0gW107XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25zRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLSB0c1BhcnRpY2xlcyBmdW5jdGlvbnMgLSBwYXJ0aWNsZXMgLS0tLS0tLS0tLS0gKi9cbiAgICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb250YWluZXIub3B0aW9ucztcblxuICAgICAgICBpZiAob3B0aW9ucy5wb2x5Z29uLnR5cGUgPT09IFBvbHlnb25NYXNrVHlwZS5pbmxpbmUpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5wb2x5Z29uLmRyYXdQb2ludHNPblBvbHlnb25QYXRoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5hcnJheS5sZW5ndGg7IGkgPCBvcHRpb25zLnBhcnRpY2xlcy5udW1iZXIudmFsdWU7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBuZXcgUGFydGljbGUoY29udGFpbmVyKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXkucHVzaChwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25zRW5hYmxlZCA9IG9wdGlvbnMucGFydGljbGVzLmxpbmVMaW5rZWQuZW5hYmxlIHx8XG4gICAgICAgICAgICBvcHRpb25zLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlIHx8XG4gICAgICAgICAgICBvcHRpb25zLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvKiB0aGUgcGFydGljbGUgKi9cbiAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLmFycmF5W2ldO1xuXG4gICAgICAgICAgICAvLyBsZXQgZCA9ICggZHggPSBjb250YWluZXIuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCAtIHAueCApICogZHggK1xuICAgICAgICAgICAgLy8gICAgICAgICAoIGR5ID0gY29udGFpbmVyLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3kgLSBwLnkgKSAqIGR5O1xuICAgICAgICAgICAgLy8gbGV0IGYgPSAtQkFOR19TSVpFIC8gZDtcbiAgICAgICAgICAgIC8vIGlmICggZCA8IEJBTkdfU0laRSApIHtcbiAgICAgICAgICAgIC8vICAgICBsZXQgdCA9IE1hdGguYXRhbjIoIGR5LCBkeCApO1xuICAgICAgICAgICAgLy8gICAgIHAudnggPSBmICogTWF0aC5jb3ModCk7XG4gICAgICAgICAgICAvLyAgICAgcC52eSA9IGYgKiBNYXRoLnNpbih0KTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgcC51cGRhdGUoaSwgZGVsdGEpO1xuXG4gICAgICAgICAgICAvKiBpbnRlcmFjdGlvbiBhdXRvIGJldHdlZW4gcGFydGljbGVzICovXG4gICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGlvbnNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5hcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwMiA9IHRoaXMuYXJyYXlbal07XG5cbiAgICAgICAgICAgICAgICAgICAgcC5pbnRlcmFjdChwMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRyYXcoZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuXG4gICAgICAgIC8qIGNsZWFyIGNhbnZhcyAqL1xuICAgICAgICBjb250YWluZXIuY2FudmFzLmNsZWFyKCk7XG5cbiAgICAgICAgLyogdXBkYXRlIGVhY2ggcGFydGljbGVzIHBhcmFtICovXG4gICAgICAgIHRoaXMudXBkYXRlKGRlbHRhKTtcblxuICAgICAgICAvKiBkcmF3IHBvbHlnb24gc2hhcGUgaW4gZGVidWcgbW9kZSAqL1xuICAgICAgICBpZiAob3B0aW9ucy5wb2x5Z29uLmRyYXcuZW5hYmxlKSB7XG4gICAgICAgICAgICBjb250YWluZXIucG9seWdvbi5kcmF3UG9seWdvbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogZHJhdyBlYWNoIHBhcnRpY2xlICovXG4gICAgICAgIGZvciAoY29uc3QgcCBvZiB0aGlzLmFycmF5KSB7XG4gICAgICAgICAgICBwLmRyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcnJheSA9IFtdO1xuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0gdHNQYXJ0aWNsZXMgZnVuY3Rpb25zIC0gbW9kZXMgZXZlbnRzIC0tLS0tLS0tLS0tLSAqL1xuICAgIHB1YmxpYyBwdXNoKG5iOiBudW1iZXIsIG1vdXNlUG9zaXRpb24/OiBJTW91c2VEYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5wdXNoaW5nID0gdHJ1ZTtcblxuICAgICAgICBpZiAob3B0aW9ucy5wYXJ0aWNsZXMubnVtYmVyLmxpbWl0ID4gMCkge1xuICAgICAgICAgICAgaWYgKCh0aGlzLmFycmF5Lmxlbmd0aCArIG5iKSA+IG9wdGlvbnMucGFydGljbGVzLm51bWJlci5saW1pdCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKCh0aGlzLmFycmF5Lmxlbmd0aCArIG5iKSAtIG9wdGlvbnMucGFydGljbGVzLm51bWJlci5saW1pdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcG9zOiBJQ29vcmRpbmF0ZXMgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKG1vdXNlUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHBvcyA9IG1vdXNlUG9zaXRpb24ucG9zaXRpb24gfHwge3g6IDAsIHk6IDB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gbmV3IFBhcnRpY2xlKGNvbnRhaW5lciwgcG9zKTtcblxuICAgICAgICAgICAgdGhpcy5hcnJheS5wdXNoKHApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3KDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wdXNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZShuYjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy5hcnJheS5zcGxpY2UoMCwgbmIpO1xuXG4gICAgICAgIGlmICghb3B0aW9ucy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhdygwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==