"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParticlesNumber = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Density = require("./Density");

var _Utils = require("../../Utils/Utils");

var ParticlesNumber = /*#__PURE__*/function () {
  function ParticlesNumber() {
    (0, _classCallCheck2["default"])(this, ParticlesNumber);
    this.density = void 0;
    this.limit = void 0;
    this.value = void 0;
    this.density = new _Density.Density();
    this.limit = 0;
    this.value = 400;
  }

  (0, _createClass2["default"])(ParticlesNumber, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        this.density.load(data.density);

        if (_Utils.Utils.hasData(data.limit)) {
          this.limit = data.limit;
        }

        if (_Utils.Utils.hasData(data.value)) {
          this.value = data.value;
        }
      }
    }
  }]);
  return ParticlesNumber;
}();

exports.ParticlesNumber = ParticlesNumber;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1BhcnRpY2xlc051bWJlci50cyJdLCJuYW1lcyI6WyJQYXJ0aWNsZXNOdW1iZXIiLCJkZW5zaXR5IiwibGltaXQiLCJ2YWx1ZSIsIkRlbnNpdHkiLCJkYXRhIiwiVXRpbHMiLCJoYXNEYXRhIiwibG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztJQUVhQSxlO0FBS1QsNkJBQWM7QUFBQTtBQUFBLFNBSlBDLE9BSU87QUFBQSxTQUhQQyxLQUdPO0FBQUEsU0FGUEMsS0FFTztBQUNWLFNBQUtGLE9BQUwsR0FBZSxJQUFJRyxnQkFBSixFQUFmO0FBQ0EsU0FBS0YsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsR0FBYjtBQUNIOzs7O3lCQUVXRSxJLEVBQThCO0FBQ3RDLFVBQUlDLGFBQU1DLE9BQU4sQ0FBY0YsSUFBZCxDQUFKLEVBQXlCO0FBQ3JCLGFBQUtKLE9BQUwsQ0FBYU8sSUFBYixDQUFrQkgsSUFBSSxDQUFDSixPQUF2Qjs7QUFFQSxZQUFJSyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0gsS0FBbkIsQ0FBSixFQUErQjtBQUMzQixlQUFLQSxLQUFMLEdBQWFHLElBQUksQ0FBQ0gsS0FBbEI7QUFDSDs7QUFFRCxZQUFJSSxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0YsS0FBbkIsQ0FBSixFQUErQjtBQUMzQixlQUFLQSxLQUFMLEdBQWFFLElBQUksQ0FBQ0YsS0FBbEI7QUFDSDtBQUNKO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lQYXJ0aWNsZXNOdW1iZXJ9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lQYXJ0aWNsZXNOdW1iZXJcIjtcbmltcG9ydCB7SURlbnNpdHl9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lEZW5zaXR5XCI7XG5pbXBvcnQge0RlbnNpdHl9IGZyb20gXCIuL0RlbnNpdHlcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgUGFydGljbGVzTnVtYmVyIGltcGxlbWVudHMgSVBhcnRpY2xlc051bWJlciB7XG4gICAgcHVibGljIGRlbnNpdHk6IElEZW5zaXR5O1xuICAgIHB1YmxpYyBsaW1pdDogbnVtYmVyO1xuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGVuc2l0eSA9IG5ldyBEZW5zaXR5KCk7XG4gICAgICAgIHRoaXMubGltaXQgPSAwO1xuICAgICAgICB0aGlzLnZhbHVlID0gNDAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKGRhdGE6IElQYXJ0aWNsZXNOdW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGVuc2l0eS5sb2FkKGRhdGEuZGVuc2l0eSk7XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEubGltaXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saW1pdCA9IGRhdGEubGltaXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGRhdGEudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=