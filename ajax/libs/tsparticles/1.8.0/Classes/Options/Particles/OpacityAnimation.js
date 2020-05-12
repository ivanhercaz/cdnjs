"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpacityAnimation = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var OpacityAnimation = /*#__PURE__*/function () {
  (0, _createClass2["default"])(OpacityAnimation, [{
    key: "opacity_min",

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

  function OpacityAnimation() {
    (0, _classCallCheck2["default"])(this, OpacityAnimation);
    this.enable = void 0;
    this.minimumValue = void 0;
    this.speed = void 0;
    this.sync = void 0;
    this.enable = false;
    this.minimumValue = 0;
    this.speed = 2;
    this.sync = false;
  }

  return OpacityAnimation;
}();

exports.OpacityAnimation = OpacityAnimation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL09wYWNpdHlBbmltYXRpb24udHMiXSwibmFtZXMiOlsiT3BhY2l0eUFuaW1hdGlvbiIsIm1pbmltdW1WYWx1ZSIsInZhbHVlIiwiZW5hYmxlIiwic3BlZWQiLCJzeW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBRWFBLGdCOzs7O0FBQ1Q7Ozs7d0JBSWlDO0FBQzdCLGFBQU8sS0FBS0MsWUFBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLdUJDLEssRUFBZTtBQUNsQyxXQUFLRCxZQUFMLEdBQW9CQyxLQUFwQjtBQUNIOzs7QUFPRCw4QkFBYztBQUFBO0FBQUEsU0FMUEMsTUFLTztBQUFBLFNBSlBGLFlBSU87QUFBQSxTQUhQRyxLQUdPO0FBQUEsU0FGUEMsSUFFTztBQUNWLFNBQUtGLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0YsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFNBQUtHLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SU9wYWNpdHlBbmltYXRpb259IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lPcGFjaXR5QW5pbWF0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBPcGFjaXR5QW5pbWF0aW9uIGltcGxlbWVudHMgSU9wYWNpdHlBbmltYXRpb24ge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IG1pbmltdW1WYWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgb3BhY2l0eV9taW4oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWluaW11bVZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IG1pbmltdW1WYWx1ZVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgb3BhY2l0eV9taW4odmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLm1pbmltdW1WYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBlbmFibGU6IGJvb2xlYW47XG4gICAgcHVibGljIG1pbmltdW1WYWx1ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBzcGVlZDogbnVtYmVyO1xuICAgIHB1YmxpYyBzeW5jOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWluaW11bVZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDI7XG4gICAgICAgIHRoaXMuc3luYyA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==