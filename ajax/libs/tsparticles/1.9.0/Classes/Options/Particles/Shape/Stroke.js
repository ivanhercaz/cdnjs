"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stroke = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../../../Utils/Utils");

var Stroke = /*#__PURE__*/function () {
  function Stroke() {
    (0, _classCallCheck2["default"])(this, Stroke);
    this.color = void 0;
    this.width = void 0;
    this.color = "#ff0000";
    this.width = 0;
  }

  (0, _createClass2["default"])(Stroke, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.color)) {
          this.color = data.color;
        }

        if (_Utils.Utils.hasData(data.width)) {
          this.width = data.width;
        }
      }
    }
  }]);
  return Stroke;
}();

exports.Stroke = Stroke;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1NoYXBlL1N0cm9rZS50cyJdLCJuYW1lcyI6WyJTdHJva2UiLCJjb2xvciIsIndpZHRoIiwiZGF0YSIsIlV0aWxzIiwiaGFzRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztJQUVhQSxNO0FBSVQsb0JBQWM7QUFBQTtBQUFBLFNBSFBDLEtBR087QUFBQSxTQUZQQyxLQUVPO0FBQ1YsU0FBS0QsS0FBTCxHQUFhLFNBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNIOzs7O3lCQUVXQyxJLEVBQXFCO0FBQzdCLFVBQUlDLGFBQU1DLE9BQU4sQ0FBY0YsSUFBZCxDQUFKLEVBQXlCO0FBQ3JCLFlBQUlDLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDRixLQUFuQixDQUFKLEVBQStCO0FBQzNCLGVBQUtBLEtBQUwsR0FBYUUsSUFBSSxDQUFDRixLQUFsQjtBQUNIOztBQUVELFlBQUlHLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDRCxLQUFuQixDQUFKLEVBQStCO0FBQzNCLGVBQUtBLEtBQUwsR0FBYUMsSUFBSSxDQUFDRCxLQUFsQjtBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVN0cm9rZX0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9QYXJ0aWNsZXMvU2hhcGUvSVN0cm9rZVwiO1xuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4uLy4uLy4uL1V0aWxzL1V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBTdHJva2UgaW1wbGVtZW50cyBJU3Ryb2tlIHtcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZztcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbG9yID0gXCIjZmYwMDAwXCI7XG4gICAgICAgIHRoaXMud2lkdGggPSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKGRhdGE6IElTdHJva2UpOiB2b2lkIHtcbiAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YSkpIHtcbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuY29sb3IpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9IGRhdGEuY29sb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEud2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IGRhdGEud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=