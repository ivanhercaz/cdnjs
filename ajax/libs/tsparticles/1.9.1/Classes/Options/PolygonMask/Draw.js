"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Draw = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../../Utils/Utils");

var Draw = /*#__PURE__*/function () {
  function Draw() {
    (0, _classCallCheck2["default"])(this, Draw);
    this.enable = void 0;
    this.lineColor = void 0;
    this.lineWidth = void 0;
    this.enable = false;
    this.lineColor = "#ffffff";
    this.lineWidth = 0.5;
  }

  (0, _createClass2["default"])(Draw, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.lineColor)) {
          this.lineColor = data.lineColor;
        }

        if (_Utils.Utils.hasData(data.lineWidth)) {
          this.lineWidth = data.lineWidth;
        }
      }
    }
  }]);
  return Draw;
}();

exports.Draw = Draw;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUG9seWdvbk1hc2svRHJhdy50cyJdLCJuYW1lcyI6WyJEcmF3IiwiZW5hYmxlIiwibGluZUNvbG9yIiwibGluZVdpZHRoIiwiZGF0YSIsIlV0aWxzIiwiaGFzRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztJQUVhQSxJO0FBS1Qsa0JBQWM7QUFBQTtBQUFBLFNBSlBDLE1BSU87QUFBQSxTQUhQQyxTQUdPO0FBQUEsU0FGUEMsU0FFTztBQUNWLFNBQUtGLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixTQUFqQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsR0FBakI7QUFDSDs7Ozt5QkFFV0MsSSxFQUE4QjtBQUN0QyxVQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF5QjtBQUNyQixZQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0gsTUFBbkIsQ0FBSixFQUFnQztBQUM1QixlQUFLQSxNQUFMLEdBQWNHLElBQUksQ0FBQ0gsTUFBbkI7QUFDSDs7QUFFRCxZQUFJSSxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0YsU0FBbkIsQ0FBSixFQUFtQztBQUMvQixlQUFLQSxTQUFMLEdBQWlCRSxJQUFJLENBQUNGLFNBQXRCO0FBQ0g7O0FBRUQsWUFBSUcsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNELFNBQW5CLENBQUosRUFBbUM7QUFDL0IsZUFBS0EsU0FBTCxHQUFpQkMsSUFBSSxDQUFDRCxTQUF0QjtBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVBvbHlnb25NYXNrRHJhd30gZnJvbSBcIi4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9Qb2x5Z29uTWFzay9JUG9seWdvbk1hc2tEcmF3XCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vLi4vVXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIERyYXcgaW1wbGVtZW50cyBJUG9seWdvbk1hc2tEcmF3IHtcbiAgICBwdWJsaWMgZW5hYmxlOiBib29sZWFuO1xuICAgIHB1YmxpYyBsaW5lQ29sb3I6IHN0cmluZztcbiAgICBwdWJsaWMgbGluZVdpZHRoOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbmFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saW5lQ29sb3IgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSAwLjU7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQoZGF0YTogSVBvbHlnb25NYXNrRHJhdyk6IHZvaWQge1xuICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhKSkge1xuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5lbmFibGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGUgPSBkYXRhLmVuYWJsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5saW5lQ29sb3IpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saW5lQ29sb3IgPSBkYXRhLmxpbmVDb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5saW5lV2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saW5lV2lkdGggPSBkYXRhLmxpbmVXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==