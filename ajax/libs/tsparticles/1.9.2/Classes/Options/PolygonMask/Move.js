"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Move = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../../Utils/Utils");

var Move = /*#__PURE__*/function () {
  function Move() {
    (0, _classCallCheck2["default"])(this, Move);
    this.radius = void 0;
    this.radius = 10;
  }

  (0, _createClass2["default"])(Move, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.radius)) {
          this.radius = data.radius;
        }
      }
    }
  }]);
  return Move;
}();

exports.Move = Move;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUG9seWdvbk1hc2svTW92ZS50cyJdLCJuYW1lcyI6WyJNb3ZlIiwicmFkaXVzIiwiZGF0YSIsIlV0aWxzIiwiaGFzRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztJQUVhQSxJO0FBR1Qsa0JBQWM7QUFBQTtBQUFBLFNBRlBDLE1BRU87QUFDVixTQUFLQSxNQUFMLEdBQWMsRUFBZDtBQUNIOzs7O3lCQUVXQyxJLEVBQThCO0FBQ3RDLFVBQUlDLGFBQU1DLE9BQU4sQ0FBY0YsSUFBZCxDQUFKLEVBQXlCO0FBQ3JCLFlBQUlDLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDRCxNQUFuQixDQUFKLEVBQWdDO0FBQzVCLGVBQUtBLE1BQUwsR0FBY0MsSUFBSSxDQUFDRCxNQUFuQjtBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVBvbHlnb25NYXNrTW92ZX0gZnJvbSBcIi4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9Qb2x5Z29uTWFzay9JUG9seWdvbk1hc2tNb3ZlXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vLi4vVXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIE1vdmUgaW1wbGVtZW50cyBJUG9seWdvbk1hc2tNb3ZlIHtcbiAgICBwdWJsaWMgcmFkaXVzOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAxMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChkYXRhOiBJUG9seWdvbk1hc2tNb3ZlKTogdm9pZCB7XG4gICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEpKSB7XG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLnJhZGl1cykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJhZGl1cyA9IGRhdGEucmFkaXVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19