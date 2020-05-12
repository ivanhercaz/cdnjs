"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Repulse = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../../../Utils/Utils");

var Repulse = /*#__PURE__*/function () {
  function Repulse() {
    (0, _classCallCheck2["default"])(this, Repulse);
    this.distance = void 0;
    this.duration = void 0;
    this.distance = 200;
    this.duration = 0.4;
  }

  (0, _createClass2["default"])(Repulse, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.distance)) {
          this.distance = data.distance;
        }

        if (_Utils.Utils.hasData(data.duration)) {
          this.duration = data.duration;
        }
      }
    }
  }]);
  return Repulse;
}();

exports.Repulse = Repulse;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9SZXB1bHNlLnRzIl0sIm5hbWVzIjpbIlJlcHVsc2UiLCJkaXN0YW5jZSIsImR1cmF0aW9uIiwiZGF0YSIsIlV0aWxzIiwiaGFzRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztJQUVhQSxPO0FBSVQscUJBQWM7QUFBQTtBQUFBLFNBSFBDLFFBR087QUFBQSxTQUZQQyxRQUVPO0FBQ1YsU0FBS0QsUUFBTCxHQUFnQixHQUFoQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsR0FBaEI7QUFDSDs7Ozt5QkFFV0MsSSxFQUFzQjtBQUM5QixVQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF5QjtBQUNyQixZQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0YsUUFBbkIsQ0FBSixFQUFrQztBQUM5QixlQUFLQSxRQUFMLEdBQWdCRSxJQUFJLENBQUNGLFFBQXJCO0FBQ0g7O0FBRUQsWUFBSUcsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNELFFBQW5CLENBQUosRUFBa0M7QUFDOUIsZUFBS0EsUUFBTCxHQUFnQkMsSUFBSSxDQUFDRCxRQUFyQjtBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVJlcHVsc2V9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9JUmVwdWxzZVwiO1xuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4uLy4uLy4uL1V0aWxzL1V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBSZXB1bHNlIGltcGxlbWVudHMgSVJlcHVsc2Uge1xuICAgIHB1YmxpYyBkaXN0YW5jZTogbnVtYmVyO1xuICAgIHB1YmxpYyBkdXJhdGlvbjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSAyMDA7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwLjQ7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQoZGF0YTogSVJlcHVsc2UpOiB2b2lkIHtcbiAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YSkpIHtcbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuZGlzdGFuY2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0YW5jZSA9IGRhdGEuZGlzdGFuY2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuZHVyYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IGRhdGEuZHVyYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=