"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RotateAnimation = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../../Utils/Utils");

var RotateAnimation = /*#__PURE__*/function () {
  function RotateAnimation() {
    (0, _classCallCheck2["default"])(this, RotateAnimation);
    this.enable = void 0;
    this.speed = void 0;
    this.sync = void 0;
    this.enable = false;
    this.speed = 0;
    this.sync = false;
  }

  (0, _createClass2["default"])(RotateAnimation, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.speed)) {
          this.speed = data.speed;
        }

        if (_Utils.Utils.hasData(data.sync)) {
          this.sync = data.sync;
        }
      }
    }
  }]);
  return RotateAnimation;
}();

exports.RotateAnimation = RotateAnimation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1JvdGF0ZUFuaW1hdGlvbi50cyJdLCJuYW1lcyI6WyJSb3RhdGVBbmltYXRpb24iLCJlbmFibGUiLCJzcGVlZCIsInN5bmMiLCJkYXRhIiwiVXRpbHMiLCJoYXNEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRWFBLGU7QUFLVCw2QkFBYztBQUFBO0FBQUEsU0FKUEMsTUFJTztBQUFBLFNBSFBDLEtBR087QUFBQSxTQUZQQyxJQUVPO0FBQ1YsU0FBS0YsTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLElBQUwsR0FBWSxLQUFaO0FBQ0g7Ozs7eUJBRVdDLEksRUFBOEI7QUFDdEMsVUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFkLENBQUosRUFBeUI7QUFDckIsWUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNILE1BQW5CLENBQUosRUFBZ0M7QUFDNUIsZUFBS0EsTUFBTCxHQUFjRyxJQUFJLENBQUNILE1BQW5CO0FBQ0g7O0FBRUQsWUFBSUksYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNGLEtBQW5CLENBQUosRUFBK0I7QUFDM0IsZUFBS0EsS0FBTCxHQUFhRSxJQUFJLENBQUNGLEtBQWxCO0FBQ0g7O0FBRUQsWUFBSUcsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNELElBQW5CLENBQUosRUFBOEI7QUFDMUIsZUFBS0EsSUFBTCxHQUFZQyxJQUFJLENBQUNELElBQWpCO0FBQ0g7QUFDSjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUm90YXRlQW5pbWF0aW9ufSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JUm90YXRlQW5pbWF0aW9uXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vLi4vVXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFJvdGF0ZUFuaW1hdGlvbiBpbXBsZW1lbnRzIElSb3RhdGVBbmltYXRpb24ge1xuICAgIHB1YmxpYyBlbmFibGU6IGJvb2xlYW47XG4gICAgcHVibGljIHNwZWVkOiBudW1iZXI7XG4gICAgcHVibGljIHN5bmM6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbmFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgIHRoaXMuc3luYyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKGRhdGE6IElSb3RhdGVBbmltYXRpb24pOiB2b2lkIHtcbiAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YSkpIHtcbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuZW5hYmxlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlID0gZGF0YS5lbmFibGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuc3BlZWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IGRhdGEuc3BlZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuc3luYykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN5bmMgPSBkYXRhLnN5bmM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=