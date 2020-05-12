"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InteractionManager = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Linker = require("./Linker");

var _Attracter = require("./Attracter");

var _Bouncer = require("./Bouncer");

var InteractionManager = /*#__PURE__*/function () {
  function InteractionManager(container, particle) {
    (0, _classCallCheck2["default"])(this, InteractionManager);
    this.container = void 0;
    this.particle = void 0;
    this.linker = void 0;
    this.attracter = void 0;
    this.bouncer = void 0;
    this.container = container;
    this.particle = particle;
    this.linker = new _Linker.Linker(container, particle);
    this.attracter = new _Attracter.Attracter(container, particle);
    this.bouncer = new _Bouncer.Bouncer(container, particle);
  }

  (0, _createClass2["default"])(InteractionManager, [{
    key: "interact",
    value: function interact(p2) {
      var container = this.container;
      var options = container.options;
      /* link particles */

      if (options.particles.lineLinked.enable) {
        this.link(p2);
      }
      /* attract particles */


      if (options.particles.move.attract.enable) {
        this.attract(p2);
      }
      /* bounce particles */


      if (options.particles.move.bounce) {
        this.bounce(p2);
      }
    }
  }, {
    key: "link",
    value: function link(p2) {
      this.linker.link(p2);
    }
  }, {
    key: "attract",
    value: function attract(p2) {
      this.attracter.attract(p2);
    }
  }, {
    key: "bounce",
    value: function bounce(p2) {
      this.bouncer.bounce(p2);
    }
  }]);
  return InteractionManager;
}();

exports.InteractionManager = InteractionManager;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DbGFzc2VzL1BhcnRpY2xlL0ludGVyYWN0aW9uTWFuYWdlci50cyJdLCJuYW1lcyI6WyJJbnRlcmFjdGlvbk1hbmFnZXIiLCJjb250YWluZXIiLCJwYXJ0aWNsZSIsImxpbmtlciIsImF0dHJhY3RlciIsImJvdW5jZXIiLCJMaW5rZXIiLCJBdHRyYWN0ZXIiLCJCb3VuY2VyIiwicDIiLCJvcHRpb25zIiwicGFydGljbGVzIiwibGluZUxpbmtlZCIsImVuYWJsZSIsImxpbmsiLCJtb3ZlIiwiYXR0cmFjdCIsImJvdW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztJQUVhQSxrQjtBQU9ULDhCQUFZQyxTQUFaLEVBQWtDQyxRQUFsQyxFQUFzRDtBQUFBO0FBQUEsU0FOckNELFNBTXFDO0FBQUEsU0FMckNDLFFBS3FDO0FBQUEsU0FKckNDLE1BSXFDO0FBQUEsU0FIckNDLFNBR3FDO0FBQUEsU0FGckNDLE9BRXFDO0FBQ2xELFNBQUtKLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUcsY0FBSixDQUFXTCxTQUFYLEVBQXNCQyxRQUF0QixDQUFkO0FBQ0EsU0FBS0UsU0FBTCxHQUFpQixJQUFJRyxvQkFBSixDQUFjTixTQUFkLEVBQXlCQyxRQUF6QixDQUFqQjtBQUNBLFNBQUtHLE9BQUwsR0FBZSxJQUFJRyxnQkFBSixDQUFZUCxTQUFaLEVBQXVCQyxRQUF2QixDQUFmO0FBQ0g7Ozs7NkJBRWVPLEUsRUFBb0I7QUFDaEMsVUFBTVIsU0FBUyxHQUFHLEtBQUtBLFNBQXZCO0FBQ0EsVUFBTVMsT0FBTyxHQUFHVCxTQUFTLENBQUNTLE9BQTFCO0FBRUE7O0FBQ0EsVUFBSUEsT0FBTyxDQUFDQyxTQUFSLENBQWtCQyxVQUFsQixDQUE2QkMsTUFBakMsRUFBeUM7QUFDckMsYUFBS0MsSUFBTCxDQUFVTCxFQUFWO0FBQ0g7QUFFRDs7O0FBQ0EsVUFBSUMsT0FBTyxDQUFDQyxTQUFSLENBQWtCSSxJQUFsQixDQUF1QkMsT0FBdkIsQ0FBK0JILE1BQW5DLEVBQTJDO0FBQ3ZDLGFBQUtHLE9BQUwsQ0FBYVAsRUFBYjtBQUNIO0FBRUQ7OztBQUNBLFVBQUlDLE9BQU8sQ0FBQ0MsU0FBUixDQUFrQkksSUFBbEIsQ0FBdUJFLE1BQTNCLEVBQW1DO0FBQy9CLGFBQUtBLE1BQUwsQ0FBWVIsRUFBWjtBQUNIO0FBQ0o7Ozt5QkFFWUEsRSxFQUFvQjtBQUM3QixXQUFLTixNQUFMLENBQVlXLElBQVosQ0FBaUJMLEVBQWpCO0FBQ0g7Ozs0QkFFZUEsRSxFQUFvQjtBQUNoQyxXQUFLTCxTQUFMLENBQWVZLE9BQWYsQ0FBdUJQLEVBQXZCO0FBQ0g7OzsyQkFFY0EsRSxFQUFvQjtBQUMvQixXQUFLSixPQUFMLENBQWFZLE1BQWIsQ0FBb0JSLEVBQXBCO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4uL0NvbnRhaW5lclwiO1xuaW1wb3J0IHtQYXJ0aWNsZX0gZnJvbSBcIi4uL1BhcnRpY2xlXCI7XG5pbXBvcnQge0xpbmtlcn0gZnJvbSBcIi4vTGlua2VyXCI7XG5pbXBvcnQge0F0dHJhY3Rlcn0gZnJvbSBcIi4vQXR0cmFjdGVyXCI7XG5pbXBvcnQge0JvdW5jZXJ9IGZyb20gXCIuL0JvdW5jZXJcIjtcblxuZXhwb3J0IGNsYXNzIEludGVyYWN0aW9uTWFuYWdlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IENvbnRhaW5lcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhcnRpY2xlOiBQYXJ0aWNsZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpbmtlcjogTGlua2VyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgYXR0cmFjdGVyOiBBdHRyYWN0ZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBib3VuY2VyOiBCb3VuY2VyO1xuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBDb250YWluZXIsIHBhcnRpY2xlOiBQYXJ0aWNsZSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZSA9IHBhcnRpY2xlO1xuICAgICAgICB0aGlzLmxpbmtlciA9IG5ldyBMaW5rZXIoY29udGFpbmVyLCBwYXJ0aWNsZSk7XG4gICAgICAgIHRoaXMuYXR0cmFjdGVyID0gbmV3IEF0dHJhY3Rlcihjb250YWluZXIsIHBhcnRpY2xlKTtcbiAgICAgICAgdGhpcy5ib3VuY2VyID0gbmV3IEJvdW5jZXIoY29udGFpbmVyLCBwYXJ0aWNsZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGludGVyYWN0KHAyOiBQYXJ0aWNsZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuXG4gICAgICAgIC8qIGxpbmsgcGFydGljbGVzICovXG4gICAgICAgIGlmIChvcHRpb25zLnBhcnRpY2xlcy5saW5lTGlua2VkLmVuYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5saW5rKHAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGF0dHJhY3QgcGFydGljbGVzICovXG4gICAgICAgIGlmIChvcHRpb25zLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmF0dHJhY3QocDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogYm91bmNlIHBhcnRpY2xlcyAqL1xuICAgICAgICBpZiAob3B0aW9ucy5wYXJ0aWNsZXMubW92ZS5ib3VuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuYm91bmNlKHAyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbGluayhwMjogUGFydGljbGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5saW5rZXIubGluayhwMik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhdHRyYWN0KHAyOiBQYXJ0aWNsZSk6IHZvaWQge1xuICAgICAgICB0aGlzLmF0dHJhY3Rlci5hdHRyYWN0KHAyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGJvdW5jZShwMjogUGFydGljbGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib3VuY2VyLmJvdW5jZShwMik7XG4gICAgfVxufVxuIl19