"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Density = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Density = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Density, [{
    key: "value_area",

    /**
     *
     * @deprecated this property is obsolete, please use the new area
     */
    get: function get() {
      return this.area;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new area
     * @param value
     */
    ,
    set: function set(value) {
      this.area = value;
    }
  }]);

  function Density() {
    (0, _classCallCheck2["default"])(this, Density);
    this.enable = void 0;
    this.area = void 0;
    this.enable = true;
    this.area = 800;
  }

  return Density;
}();

exports.Density = Density;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL0RlbnNpdHkudHMiXSwibmFtZXMiOlsiRGVuc2l0eSIsImFyZWEiLCJ2YWx1ZSIsImVuYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUVhQSxPOzs7O0FBQ1Q7Ozs7d0JBSWdDO0FBQzVCLGFBQU8sS0FBS0MsSUFBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLc0JDLEssRUFBZTtBQUNqQyxXQUFLRCxJQUFMLEdBQVlDLEtBQVo7QUFDSDs7O0FBS0QscUJBQWM7QUFBQTtBQUFBLFNBSFBDLE1BR087QUFBQSxTQUZQRixJQUVPO0FBQ1YsU0FBS0UsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLRixJQUFMLEdBQVksR0FBWjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRGVuc2l0eX0gZnJvbSBcIi4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9QYXJ0aWNsZXMvSURlbnNpdHlcIjtcblxuZXhwb3J0IGNsYXNzIERlbnNpdHkgaW1wbGVtZW50cyBJRGVuc2l0eSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgYXJlYVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgdmFsdWVfYXJlYSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hcmVhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IGFyZWFcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHZhbHVlX2FyZWEodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFyZWEgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlOiBib29sZWFuO1xuICAgIHB1YmxpYyBhcmVhOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbmFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFyZWEgPSA4MDA7XG4gICAgfVxufVxuIl19