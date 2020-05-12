"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bubble = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../../../Utils/Utils");

var Bubble = /*#__PURE__*/function () {
  function Bubble() {
    (0, _classCallCheck2["default"])(this, Bubble);
    this.distance = void 0;
    this.duration = void 0;
    this.opacity = void 0;
    this.size = void 0;
    this.distance = 200;
    this.duration = 0.4;
    this.opacity = 1;
    this.size = 80;
  }

  (0, _createClass2["default"])(Bubble, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.distance)) {
          this.distance = data.distance;
        }

        if (_Utils.Utils.hasData(data.duration)) {
          this.duration = data.duration;
        }

        if (_Utils.Utils.hasData(data.opacity)) {
          this.opacity = data.opacity;
        }

        if (_Utils.Utils.hasData(data.size)) {
          this.size = data.size;
        }
      }
    }
  }]);
  return Bubble;
}();

exports.Bubble = Bubble;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9CdWJibGUudHMiXSwibmFtZXMiOlsiQnViYmxlIiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJzaXplIiwiZGF0YSIsIlV0aWxzIiwiaGFzRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztJQUVhQSxNO0FBTVQsb0JBQWM7QUFBQTtBQUFBLFNBTFBDLFFBS087QUFBQSxTQUpQQyxRQUlPO0FBQUEsU0FIUEMsT0FHTztBQUFBLFNBRlBDLElBRU87QUFDVixTQUFLSCxRQUFMLEdBQWdCLEdBQWhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixHQUFoQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEVBQVo7QUFDSDs7Ozt5QkFFV0MsSSxFQUFxQjtBQUM3QixVQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF5QjtBQUNyQixZQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0osUUFBbkIsQ0FBSixFQUFrQztBQUM5QixlQUFLQSxRQUFMLEdBQWdCSSxJQUFJLENBQUNKLFFBQXJCO0FBQ0g7O0FBRUQsWUFBSUssYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNILFFBQW5CLENBQUosRUFBa0M7QUFDOUIsZUFBS0EsUUFBTCxHQUFnQkcsSUFBSSxDQUFDSCxRQUFyQjtBQUNIOztBQUVELFlBQUlJLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDRixPQUFuQixDQUFKLEVBQWlDO0FBQzdCLGVBQUtBLE9BQUwsR0FBZUUsSUFBSSxDQUFDRixPQUFwQjtBQUNIOztBQUVELFlBQUlHLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDRCxJQUFuQixDQUFKLEVBQThCO0FBQzFCLGVBQUtBLElBQUwsR0FBWUMsSUFBSSxDQUFDRCxJQUFqQjtBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUJ1YmJsZX0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L01vZGVzL0lCdWJibGVcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi8uLi8uLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgQnViYmxlIGltcGxlbWVudHMgSUJ1YmJsZSB7XG4gICAgcHVibGljIGRpc3RhbmNlOiBudW1iZXI7XG4gICAgcHVibGljIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgcHVibGljIG9wYWNpdHk6IG51bWJlcjtcbiAgICBwdWJsaWMgc2l6ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSAyMDA7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwLjQ7XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IDE7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDgwO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKGRhdGE6IElCdWJibGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YSkpIHtcbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuZGlzdGFuY2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSA9IGRhdGEuZGlzdGFuY2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuZHVyYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGRhdGEuZHVyYXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEub3BhY2l0eSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSBkYXRhLm9wYWNpdHk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuc2l6ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=