"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shadow = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../../Utils/Utils");

var Shadow = /*#__PURE__*/function () {
  function Shadow() {
    (0, _classCallCheck2["default"])(this, Shadow);
    this.blur = void 0;
    this.color = void 0;
    this.enable = void 0;
    this.offset = void 0;
    this.blur = 0;
    this.color = "#000000";
    this.enable = false;
    this.offset = {
      x: 0,
      y: 0
    };
  }

  (0, _createClass2["default"])(Shadow, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.blur)) {
          this.blur = data.blur;
        }

        if (_Utils.Utils.hasData(data.color)) {
          this.color = data.color;
        }

        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.offset)) {
          if (_Utils.Utils.hasData(data.offset.x)) {
            this.offset.x = data.offset.x;
          }

          if (_Utils.Utils.hasData(data.offset.y)) {
            this.offset.y = data.offset.y;
          }
        }
      }
    }
  }]);
  return Shadow;
}();

exports.Shadow = Shadow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1NoYWRvdy50cyJdLCJuYW1lcyI6WyJTaGFkb3ciLCJibHVyIiwiY29sb3IiLCJlbmFibGUiLCJvZmZzZXQiLCJ4IiwieSIsImRhdGEiLCJVdGlscyIsImhhc0RhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQTs7SUFFYUEsTTtBQU1ULG9CQUFjO0FBQUE7QUFBQSxTQUxQQyxJQUtPO0FBQUEsU0FKUEMsS0FJTztBQUFBLFNBSFBDLE1BR087QUFBQSxTQUZQQyxNQUVPO0FBQ1YsU0FBS0gsSUFBTCxHQUFZLENBQVo7QUFDQSxTQUFLQyxLQUFMLEdBQWEsU0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjO0FBQ1ZDLE1BQUFBLENBQUMsRUFBRSxDQURPO0FBRVZDLE1BQUFBLENBQUMsRUFBRTtBQUZPLEtBQWQ7QUFJSDs7Ozt5QkFFV0MsSSxFQUFxQjtBQUM3QixVQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF5QjtBQUNyQixZQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ04sSUFBbkIsQ0FBSixFQUE4QjtBQUMxQixlQUFLQSxJQUFMLEdBQVlNLElBQUksQ0FBQ04sSUFBakI7QUFDSDs7QUFFRCxZQUFJTyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0wsS0FBbkIsQ0FBSixFQUErQjtBQUMzQixlQUFLQSxLQUFMLEdBQWFLLElBQUksQ0FBQ0wsS0FBbEI7QUFDSDs7QUFFRCxZQUFJTSxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0osTUFBbkIsQ0FBSixFQUFnQztBQUM1QixlQUFLQSxNQUFMLEdBQWNJLElBQUksQ0FBQ0osTUFBbkI7QUFDSDs7QUFFRCxZQUFJSyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0gsTUFBbkIsQ0FBSixFQUFnQztBQUM1QixjQUFJSSxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0gsTUFBTCxDQUFZQyxDQUExQixDQUFKLEVBQWtDO0FBQzlCLGlCQUFLRCxNQUFMLENBQVlDLENBQVosR0FBZ0JFLElBQUksQ0FBQ0gsTUFBTCxDQUFZQyxDQUE1QjtBQUNIOztBQUVELGNBQUlHLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDSCxNQUFMLENBQVlFLENBQTFCLENBQUosRUFBa0M7QUFDOUIsaUJBQUtGLE1BQUwsQ0FBWUUsQ0FBWixHQUFnQkMsSUFBSSxDQUFDSCxNQUFMLENBQVlFLENBQTVCO0FBQ0g7QUFDSjtBQUNKO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lTaGFkb3d9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lTaGFkb3dcIjtcbmltcG9ydCB7SUNvb3JkaW5hdGVzfSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9JQ29vcmRpbmF0ZXNcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgU2hhZG93IGltcGxlbWVudHMgSVNoYWRvdyB7XG4gICAgcHVibGljIGJsdXI6IG51bWJlcjtcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZztcbiAgICBwdWJsaWMgZW5hYmxlOiBib29sZWFuO1xuICAgIHB1YmxpYyBvZmZzZXQ6IElDb29yZGluYXRlcztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJsdXIgPSAwO1xuICAgICAgICB0aGlzLmNvbG9yID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQoZGF0YTogSVNoYWRvdyk6IHZvaWQge1xuICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhKSkge1xuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5ibHVyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmx1ciA9IGRhdGEuYmx1cjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5jb2xvcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gZGF0YS5jb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5lbmFibGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGUgPSBkYXRhLmVuYWJsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5vZmZzZXQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5vZmZzZXQueCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQueCA9IGRhdGEub2Zmc2V0Lng7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5vZmZzZXQueSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmZzZXQueSA9IGRhdGEub2Zmc2V0Lnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19