"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoverEvent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _HoverMode = require("../../../../Enums/Modes/HoverMode");

var _Parallax = require("./Parallax");

var _Utils = require("../../../Utils/Utils");

var HoverEvent = /*#__PURE__*/function () {
  function HoverEvent() {
    (0, _classCallCheck2["default"])(this, HoverEvent);
    this.enable = void 0;
    this.mode = void 0;
    this.parallax = void 0;
    this.enable = true;
    this.mode = _HoverMode.HoverMode.grab;
    this.parallax = new _Parallax.Parallax();
  }

  (0, _createClass2["default"])(HoverEvent, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.mode)) {
          this.mode = data.mode;
        }

        this.parallax.load(data.parallax);
      }
    }
  }]);
  return HoverEvent;
}();

exports.HoverEvent = HoverEvent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9FdmVudHMvSG92ZXJFdmVudC50cyJdLCJuYW1lcyI6WyJIb3ZlckV2ZW50IiwiZW5hYmxlIiwibW9kZSIsInBhcmFsbGF4IiwiSG92ZXJNb2RlIiwiZ3JhYiIsIlBhcmFsbGF4IiwiZGF0YSIsIlV0aWxzIiwiaGFzRGF0YSIsImxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7SUFFYUEsVTtBQUtULHdCQUFjO0FBQUE7QUFBQSxTQUpQQyxNQUlPO0FBQUEsU0FIUEMsSUFHTztBQUFBLFNBRlBDLFFBRU87QUFDVixTQUFLRixNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUtDLElBQUwsR0FBWUUscUJBQVVDLElBQXRCO0FBQ0EsU0FBS0YsUUFBTCxHQUFnQixJQUFJRyxrQkFBSixFQUFoQjtBQUNIOzs7O3lCQUVXQyxJLEVBQXlCO0FBQ2pDLFVBQUlDLGFBQU1DLE9BQU4sQ0FBY0YsSUFBZCxDQUFKLEVBQXlCO0FBQ3JCLFlBQUlDLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDTixNQUFuQixDQUFKLEVBQWdDO0FBQzVCLGVBQUtBLE1BQUwsR0FBY00sSUFBSSxDQUFDTixNQUFuQjtBQUNIOztBQUVELFlBQUlPLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDTCxJQUFuQixDQUFKLEVBQThCO0FBQzFCLGVBQUtBLElBQUwsR0FBWUssSUFBSSxDQUFDTCxJQUFqQjtBQUNIOztBQUVELGFBQUtDLFFBQUwsQ0FBY08sSUFBZCxDQUFtQkgsSUFBSSxDQUFDSixRQUF4QjtBQUNIO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lIb3ZlckV2ZW50fSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL0ludGVyYWN0aXZpdHkvRXZlbnRzL0lIb3ZlckV2ZW50XCI7XG5pbXBvcnQge0hvdmVyTW9kZX0gZnJvbSBcIi4uLy4uLy4uLy4uL0VudW1zL01vZGVzL0hvdmVyTW9kZVwiO1xuaW1wb3J0IHtQYXJhbGxheH0gZnJvbSBcIi4vUGFyYWxsYXhcIjtcbmltcG9ydCB7SVBhcmFsbGF4fSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL0ludGVyYWN0aXZpdHkvRXZlbnRzL0lQYXJhbGxheFwiO1xuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4uLy4uLy4uL1V0aWxzL1V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBIb3ZlckV2ZW50IGltcGxlbWVudHMgSUhvdmVyRXZlbnQge1xuICAgIHB1YmxpYyBlbmFibGU6IGJvb2xlYW47XG4gICAgcHVibGljIG1vZGU6IEhvdmVyTW9kZSB8IEhvdmVyTW9kZVtdO1xuICAgIHB1YmxpYyBwYXJhbGxheDogSVBhcmFsbGF4O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tb2RlID0gSG92ZXJNb2RlLmdyYWI7XG4gICAgICAgIHRoaXMucGFyYWxsYXggPSBuZXcgUGFyYWxsYXgoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChkYXRhOiBJSG92ZXJFdmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhKSkge1xuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5lbmFibGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGUgPSBkYXRhLmVuYWJsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5tb2RlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZSA9IGRhdGEubW9kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wYXJhbGxheC5sb2FkKGRhdGEucGFyYWxsYXgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19