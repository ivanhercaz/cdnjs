"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectLineLinked = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../../../Utils/Utils");

var ConnectLineLinked = /*#__PURE__*/function () {
  function ConnectLineLinked() {
    (0, _classCallCheck2["default"])(this, ConnectLineLinked);
    this.opacity = void 0;
    this.opacity = 0.5;
  }

  (0, _createClass2["default"])(ConnectLineLinked, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.opacity)) {
          this.opacity = data.opacity;
        }
      }
    }
  }]);
  return ConnectLineLinked;
}();

exports.ConnectLineLinked = ConnectLineLinked;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9Db25uZWN0TGluZUxpbmtlZC50cyJdLCJuYW1lcyI6WyJDb25uZWN0TGluZUxpbmtlZCIsIm9wYWNpdHkiLCJkYXRhIiwiVXRpbHMiLCJoYXNEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRWFBLGlCO0FBR1QsK0JBQWM7QUFBQTtBQUFBLFNBRlBDLE9BRU87QUFDVixTQUFLQSxPQUFMLEdBQWUsR0FBZjtBQUNIOzs7O3lCQUVXQyxJLEVBQWdDO0FBQ3hDLFVBQUlDLGFBQU1DLE9BQU4sQ0FBY0YsSUFBZCxDQUFKLEVBQXlCO0FBQ3JCLFlBQUlDLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDRCxPQUFuQixDQUFKLEVBQWlDO0FBQzdCLGVBQUtBLE9BQUwsR0FBZUMsSUFBSSxDQUFDRCxPQUFwQjtBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUNvbm5lY3RMaW5lTGlua2VkfSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL0ludGVyYWN0aXZpdHkvTW9kZXMvSUNvbm5lY3RMaW5lTGlua2VkXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vLi4vLi4vVXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIENvbm5lY3RMaW5lTGlua2VkIGltcGxlbWVudHMgSUNvbm5lY3RMaW5lTGlua2VkIHtcbiAgICBwdWJsaWMgb3BhY2l0eTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IDAuNTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChkYXRhOiBJQ29ubmVjdExpbmVMaW5rZWQpOiB2b2lkIHtcbiAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YSkpIHtcbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEub3BhY2l0eSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSBkYXRhLm9wYWNpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=