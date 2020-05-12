"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineLinked = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../../Utils/Utils");

var LineLinked = /*#__PURE__*/function () {
  function LineLinked() {
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
  }

  (0, _createClass2["default"])(LineLinked, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.blink)) {
          this.blink = data.blink;
        }

        if (_Utils.Utils.hasData(data.color)) {
          this.color = data.color;
        }

        if (_Utils.Utils.hasData(data.consent)) {
          this.consent = data.consent;
        }

        if (_Utils.Utils.hasData(data.distance)) {
          this.distance = data.distance;
        }

        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.opacity)) {
          this.opacity = data.opacity;
        }

        if (_Utils.Utils.hasData(data.width)) {
          this.width = data.width;
        }
      }
    }
  }]);
  return LineLinked;
}();

exports.LineLinked = LineLinked;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL0xpbmVMaW5rZWQudHMiXSwibmFtZXMiOlsiTGluZUxpbmtlZCIsImJsaW5rIiwiY29sb3IiLCJjb25zZW50IiwiZGlzdGFuY2UiLCJlbmFibGUiLCJvcGFjaXR5Iiwid2lkdGgiLCJkYXRhIiwiVXRpbHMiLCJoYXNEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRWFBLFU7QUFTVCx3QkFBYztBQUFBO0FBQUEsU0FSUEMsS0FRTztBQUFBLFNBUFBDLEtBT087QUFBQSxTQU5QQyxPQU1PO0FBQUEsU0FMUEMsUUFLTztBQUFBLFNBSlBDLE1BSU87QUFBQSxTQUhQQyxPQUdPO0FBQUEsU0FGUEMsS0FFTztBQUNWLFNBQUtOLEtBQUwsR0FBYSxLQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLE1BQWI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsR0FBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDSDs7Ozt5QkFFV0MsSSxFQUF5QjtBQUNqQyxVQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF5QjtBQUNyQixZQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ1AsS0FBbkIsQ0FBSixFQUErQjtBQUMzQixlQUFLQSxLQUFMLEdBQWFPLElBQUksQ0FBQ1AsS0FBbEI7QUFDSDs7QUFFRCxZQUFJUSxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ04sS0FBbkIsQ0FBSixFQUErQjtBQUMzQixlQUFLQSxLQUFMLEdBQWFNLElBQUksQ0FBQ04sS0FBbEI7QUFDSDs7QUFFRCxZQUFJTyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0wsT0FBbkIsQ0FBSixFQUFpQztBQUM3QixlQUFLQSxPQUFMLEdBQWVLLElBQUksQ0FBQ0wsT0FBcEI7QUFDSDs7QUFFRCxZQUFJTSxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0osUUFBbkIsQ0FBSixFQUFrQztBQUM5QixlQUFLQSxRQUFMLEdBQWdCSSxJQUFJLENBQUNKLFFBQXJCO0FBQ0g7O0FBRUQsWUFBSUssYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNILE1BQW5CLENBQUosRUFBZ0M7QUFDNUIsZUFBS0EsTUFBTCxHQUFjRyxJQUFJLENBQUNILE1BQW5CO0FBQ0g7O0FBRUQsWUFBSUksYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNGLE9BQW5CLENBQUosRUFBaUM7QUFDN0IsZUFBS0EsT0FBTCxHQUFlRSxJQUFJLENBQUNGLE9BQXBCO0FBQ0g7O0FBRUQsWUFBSUcsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNELEtBQW5CLENBQUosRUFBK0I7QUFDM0IsZUFBS0EsS0FBTCxHQUFhQyxJQUFJLENBQUNELEtBQWxCO0FBQ0g7QUFDSjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJTGluZUxpbmtlZH0gZnJvbSBcIi4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9QYXJ0aWNsZXMvSUxpbmVMaW5rZWRcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgTGluZUxpbmtlZCBpbXBsZW1lbnRzIElMaW5lTGlua2VkIHtcbiAgICBwdWJsaWMgYmxpbms6IGJvb2xlYW47XG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbnNlbnQ6IGJvb2xlYW47XG4gICAgcHVibGljIGRpc3RhbmNlOiBudW1iZXI7XG4gICAgcHVibGljIGVuYWJsZTogYm9vbGVhbjtcbiAgICBwdWJsaWMgb3BhY2l0eTogbnVtYmVyO1xuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYmxpbmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IFwiI2ZmZlwiO1xuICAgICAgICB0aGlzLmNvbnNlbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IDEwMDtcbiAgICAgICAgdGhpcy5lbmFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSAxO1xuICAgICAgICB0aGlzLndpZHRoID0gMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChkYXRhOiBJTGluZUxpbmtlZCk6IHZvaWQge1xuICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhKSkge1xuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5ibGluaykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJsaW5rID0gZGF0YS5ibGluaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5jb2xvcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gZGF0YS5jb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5jb25zZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc2VudCA9IGRhdGEuY29uc2VudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5kaXN0YW5jZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gZGF0YS5kaXN0YW5jZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5lbmFibGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGUgPSBkYXRhLmVuYWJsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5vcGFjaXR5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eSA9IGRhdGEub3BhY2l0eTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS53aWR0aCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gZGF0YS53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==