"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Density = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Messages = require("../../Utils/Messages");

var Density = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Density, [{
    key: "value_area",

    /**
     *
     * @deprecated this property is obsolete, please use the new area
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.number.density.value_area", "particles.number.density.area");

      return this.area;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new area
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.number.density.value_area", "particles.number.density.area");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL0RlbnNpdHkudHMiXSwibmFtZXMiOlsiRGVuc2l0eSIsIk1lc3NhZ2VzIiwiZGVwcmVjYXRlZCIsImFyZWEiLCJ2YWx1ZSIsImVuYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztJQUVhQSxPOzs7O0FBQ1Q7Ozs7d0JBSWdDO0FBQzVCQyx5QkFBU0MsVUFBVCxDQUFvQixxQ0FBcEIsRUFBMkQsK0JBQTNEOztBQUVBLGFBQU8sS0FBS0MsSUFBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLc0JDLEssRUFBZTtBQUNqQ0gseUJBQVNDLFVBQVQsQ0FBb0IscUNBQXBCLEVBQTJELCtCQUEzRDs7QUFFQSxXQUFLQyxJQUFMLEdBQVlDLEtBQVo7QUFDSDs7O0FBS0QscUJBQWM7QUFBQTtBQUFBLFNBSFBDLE1BR087QUFBQSxTQUZQRixJQUVPO0FBQ1YsU0FBS0UsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLRixJQUFMLEdBQVksR0FBWjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRGVuc2l0eX0gZnJvbSBcIi4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9QYXJ0aWNsZXMvSURlbnNpdHlcIjtcbmltcG9ydCB7TWVzc2FnZXN9IGZyb20gXCIuLi8uLi9VdGlscy9NZXNzYWdlc1wiO1xuXG5leHBvcnQgY2xhc3MgRGVuc2l0eSBpbXBsZW1lbnRzIElEZW5zaXR5IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBhcmVhXG4gICAgICovXG4gICAgcHVibGljIGdldCB2YWx1ZV9hcmVhKCk6IG51bWJlciB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJwYXJ0aWNsZXMubnVtYmVyLmRlbnNpdHkudmFsdWVfYXJlYVwiLCBcInBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS5hcmVhXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFyZWE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgYXJlYVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgdmFsdWVfYXJlYSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJwYXJ0aWNsZXMubnVtYmVyLmRlbnNpdHkudmFsdWVfYXJlYVwiLCBcInBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS5hcmVhXCIpO1xuXG4gICAgICAgIHRoaXMuYXJlYSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBlbmFibGU6IGJvb2xlYW47XG4gICAgcHVibGljIGFyZWE6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYXJlYSA9IDgwMDtcbiAgICB9XG59XG4iXX0=