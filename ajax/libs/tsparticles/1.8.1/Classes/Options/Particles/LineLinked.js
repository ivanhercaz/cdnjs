"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineLinked = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var LineLinked = function LineLinked() {
  (0, _classCallCheck2["default"])(this, LineLinked);
  this.blink = void 0;
  this.color = void 0;
  this.consent = void 0;
  this.distance = void 0;
  this.enable = void 0;
  this.opacity = void 0;
  this.width = void 0;
  this.blink = false;
  this.color = "#fff";
  this.consent = false;
  this.distance = 100;
  this.enable = true;
  this.opacity = 1;
  this.width = 1;
};

exports.LineLinked = LineLinked;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL0xpbmVMaW5rZWQudHMiXSwibmFtZXMiOlsiTGluZUxpbmtlZCIsImJsaW5rIiwiY29sb3IiLCJjb25zZW50IiwiZGlzdGFuY2UiLCJlbmFibGUiLCJvcGFjaXR5Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBRWFBLFUsR0FTVCxzQkFBYztBQUFBO0FBQUEsT0FSUEMsS0FRTztBQUFBLE9BUFBDLEtBT087QUFBQSxPQU5QQyxPQU1PO0FBQUEsT0FMUEMsUUFLTztBQUFBLE9BSlBDLE1BSU87QUFBQSxPQUhQQyxPQUdPO0FBQUEsT0FGUEMsS0FFTztBQUNWLE9BQUtOLEtBQUwsR0FBYSxLQUFiO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLE1BQWI7QUFDQSxPQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsR0FBaEI7QUFDQSxPQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNBLE9BQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJTGluZUxpbmtlZH0gZnJvbSBcIi4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9QYXJ0aWNsZXMvSUxpbmVMaW5rZWRcIjtcblxuZXhwb3J0IGNsYXNzIExpbmVMaW5rZWQgaW1wbGVtZW50cyBJTGluZUxpbmtlZCB7XG4gICAgcHVibGljIGJsaW5rOiBib29sZWFuO1xuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xuICAgIHB1YmxpYyBjb25zZW50OiBib29sZWFuO1xuICAgIHB1YmxpYyBkaXN0YW5jZTogbnVtYmVyO1xuICAgIHB1YmxpYyBlbmFibGU6IGJvb2xlYW47XG4gICAgcHVibGljIG9wYWNpdHk6IG51bWJlcjtcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJsaW5rID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sb3IgPSBcIiNmZmZcIjtcbiAgICAgICAgdGhpcy5jb25zZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSAxMDA7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMTtcbiAgICAgICAgdGhpcy53aWR0aCA9IDE7XG4gICAgfVxufVxuIl19