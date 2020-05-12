"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParticlesSizeAnimation = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var ParticlesSizeAnimation = /*#__PURE__*/function () {
  (0, _createClass2["default"])(ParticlesSizeAnimation, [{
    key: "size_min",

    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     */
    get: function get() {
      return this.minimumValue;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     * @param value
     */
    ,
    set: function set(value) {
      this.minimumValue = value;
    }
  }]);

  function ParticlesSizeAnimation() {
    (0, _classCallCheck2["default"])(this, ParticlesSizeAnimation);
    this.enable = void 0;
    this.minimumValue = void 0;
    this.speed = void 0;
    this.sync = void 0;
    this.enable = false;
    this.minimumValue = 0;
    this.speed = 20;
    this.sync = false;
  }

  return ParticlesSizeAnimation;
}();

exports.ParticlesSizeAnimation = ParticlesSizeAnimation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1BhcnRpY2xlc1NpemVBbmltYXRpb24udHMiXSwibmFtZXMiOlsiUGFydGljbGVzU2l6ZUFuaW1hdGlvbiIsIm1pbmltdW1WYWx1ZSIsInZhbHVlIiwiZW5hYmxlIiwic3BlZWQiLCJzeW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBRWFBLHNCOzs7O0FBQ1Q7Ozs7d0JBSThCO0FBQzFCLGFBQU8sS0FBS0MsWUFBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLb0JDLEssRUFBZTtBQUMvQixXQUFLRCxZQUFMLEdBQW9CQyxLQUFwQjtBQUNIOzs7QUFPRCxvQ0FBYztBQUFBO0FBQUEsU0FMUEMsTUFLTztBQUFBLFNBSlBGLFlBSU87QUFBQSxTQUhQRyxLQUdPO0FBQUEsU0FGUEMsSUFFTztBQUNWLFNBQUtGLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0YsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFNBQUtHLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVNpemVBbmltYXRpb259IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lTaXplQW5pbWF0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZXNTaXplQW5pbWF0aW9uIGltcGxlbWVudHMgSVNpemVBbmltYXRpb24ge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IG1pbmltdW1WYWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgc2l6ZV9taW4oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluaW11bVZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IG1pbmltdW1WYWx1ZVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgc2l6ZV9taW4odmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLm1pbmltdW1WYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBlbmFibGU6IGJvb2xlYW47XG4gICAgcHVibGljIG1pbmltdW1WYWx1ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBzcGVlZDogbnVtYmVyO1xuICAgIHB1YmxpYyBzeW5jOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWluaW11bVZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDIwO1xuICAgICAgICB0aGlzLnN5bmMgPSBmYWxzZTtcbiAgICB9XG59XG4iXX0=