"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parallax = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../../../Utils/Utils");

var Parallax = /*#__PURE__*/function () {
  function Parallax() {
    (0, _classCallCheck2["default"])(this, Parallax);
    this.enable = void 0;
    this.force = void 0;
    this.smooth = void 0;
    this.enable = false;
    this.force = 2;
    this.smooth = 10;
  }

  (0, _createClass2["default"])(Parallax, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.force)) {
          this.force = data.force;
        }

        if (_Utils.Utils.hasData(data.smooth)) {
          this.smooth = data.smooth;
        }
      }
    }
  }]);
  return Parallax;
}();

exports.Parallax = Parallax;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9FdmVudHMvUGFyYWxsYXgudHMiXSwibmFtZXMiOlsiUGFyYWxsYXgiLCJlbmFibGUiLCJmb3JjZSIsInNtb290aCIsImRhdGEiLCJVdGlscyIsImhhc0RhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7SUFFYUEsUTtBQUtULHNCQUFjO0FBQUE7QUFBQSxTQUpQQyxNQUlPO0FBQUEsU0FIUEMsS0FHTztBQUFBLFNBRlBDLE1BRU87QUFDVixTQUFLRixNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDSDs7Ozt5QkFFV0MsSSxFQUF1QjtBQUMvQixVQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF5QjtBQUNyQixZQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0gsTUFBbkIsQ0FBSixFQUFnQztBQUM1QixlQUFLQSxNQUFMLEdBQWNHLElBQUksQ0FBQ0gsTUFBbkI7QUFDSDs7QUFFRCxZQUFJSSxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0YsS0FBbkIsQ0FBSixFQUErQjtBQUMzQixlQUFLQSxLQUFMLEdBQWFFLElBQUksQ0FBQ0YsS0FBbEI7QUFDSDs7QUFFRCxZQUFJRyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0QsTUFBbkIsQ0FBSixFQUFnQztBQUM1QixlQUFLQSxNQUFMLEdBQWNDLElBQUksQ0FBQ0QsTUFBbkI7QUFDSDtBQUNKO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lQYXJhbGxheH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L0V2ZW50cy9JUGFyYWxsYXhcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi8uLi8uLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgUGFyYWxsYXggaW1wbGVtZW50cyBJUGFyYWxsYXgge1xuICAgIHB1YmxpYyBlbmFibGU6IGJvb2xlYW47XG4gICAgcHVibGljIGZvcmNlOiBudW1iZXI7XG4gICAgcHVibGljIHNtb290aDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9yY2UgPSAyO1xuICAgICAgICB0aGlzLnNtb290aCA9IDEwO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKGRhdGE6IElQYXJhbGxheCk6IHZvaWQge1xuICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhKSkge1xuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5lbmFibGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGUgPSBkYXRhLmVuYWJsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5mb3JjZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcmNlID0gZGF0YS5mb3JjZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5zbW9vdGgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbW9vdGggPSBkYXRhLnNtb290aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==