"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rotate = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../../Utils/Utils");

var _RotateAnimation = require("./RotateAnimation");

var _RotateDirection = require("../../../Enums/RotateDirection");

var Rotate = /*#__PURE__*/function () {
  function Rotate() {
    (0, _classCallCheck2["default"])(this, Rotate);
    this.animation = void 0;
    this.direction = void 0;
    this.random = void 0;
    this.value = void 0;
    this.animation = new _RotateAnimation.RotateAnimation();
    this.direction = _RotateDirection.RotateDirection.clockwise;
    this.random = false;
    this.value = 0;
  }

  (0, _createClass2["default"])(Rotate, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        this.animation.load(data.animation);

        if (_Utils.Utils.hasData(data.random)) {
          this.random = data.random;
        }

        if (_Utils.Utils.hasData(data.random)) {
          this.value = data.value;
        }
      }
    }
  }]);
  return Rotate;
}();

exports.Rotate = Rotate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1JvdGF0ZS50cyJdLCJuYW1lcyI6WyJSb3RhdGUiLCJhbmltYXRpb24iLCJkaXJlY3Rpb24iLCJyYW5kb20iLCJ2YWx1ZSIsIlJvdGF0ZUFuaW1hdGlvbiIsIlJvdGF0ZURpcmVjdGlvbiIsImNsb2Nrd2lzZSIsImRhdGEiLCJVdGlscyIsImhhc0RhdGEiLCJsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0lBRWFBLE07QUFNVCxvQkFBYztBQUFBO0FBQUEsU0FMUEMsU0FLTztBQUFBLFNBSlBDLFNBSU87QUFBQSxTQUhQQyxNQUdPO0FBQUEsU0FGUEMsS0FFTztBQUNWLFNBQUtILFNBQUwsR0FBaUIsSUFBSUksZ0NBQUosRUFBakI7QUFDQSxTQUFLSCxTQUFMLEdBQWlCSSxpQ0FBZ0JDLFNBQWpDO0FBQ0EsU0FBS0osTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNIOzs7O3lCQUVXSSxJLEVBQXFCO0FBQzdCLFVBQUlDLGFBQU1DLE9BQU4sQ0FBY0YsSUFBZCxDQUFKLEVBQXlCO0FBQ3JCLGFBQUtQLFNBQUwsQ0FBZVUsSUFBZixDQUFvQkgsSUFBSSxDQUFDUCxTQUF6Qjs7QUFFQSxZQUFJUSxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0wsTUFBbkIsQ0FBSixFQUFnQztBQUM1QixlQUFLQSxNQUFMLEdBQWNLLElBQUksQ0FBQ0wsTUFBbkI7QUFDSDs7QUFFRCxZQUFJTSxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0wsTUFBbkIsQ0FBSixFQUFnQztBQUM1QixlQUFLQyxLQUFMLEdBQWFJLElBQUksQ0FBQ0osS0FBbEI7QUFDSDtBQUNKO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lSb3RhdGV9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lSb3RhdGVcIjtcbmltcG9ydCB7SVJvdGF0ZUFuaW1hdGlvbn0gZnJvbSBcIi4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9QYXJ0aWNsZXMvSVJvdGF0ZUFuaW1hdGlvblwiO1xuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4uLy4uL1V0aWxzL1V0aWxzXCI7XG5pbXBvcnQge1JvdGF0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vUm90YXRlQW5pbWF0aW9uXCI7XG5pbXBvcnQge1JvdGF0ZURpcmVjdGlvbn0gZnJvbSBcIi4uLy4uLy4uL0VudW1zL1JvdGF0ZURpcmVjdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgUm90YXRlIGltcGxlbWVudHMgSVJvdGF0ZSB7XG4gICAgcHVibGljIGFuaW1hdGlvbjogSVJvdGF0ZUFuaW1hdGlvbjtcbiAgICBwdWJsaWMgZGlyZWN0aW9uOiBSb3RhdGVEaXJlY3Rpb247XG4gICAgcHVibGljIHJhbmRvbTogYm9vbGVhbjtcbiAgICBwdWJsaWMgdmFsdWU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBSb3RhdGVBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBSb3RhdGVEaXJlY3Rpb24uY2xvY2t3aXNlO1xuICAgICAgICB0aGlzLnJhbmRvbSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhbHVlID0gMFxuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKGRhdGE6IElSb3RhdGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YSkpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLmxvYWQoZGF0YS5hbmltYXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLnJhbmRvbSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmRvbSA9IGRhdGEucmFuZG9tXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEucmFuZG9tKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBkYXRhLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=