"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Density = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Messages = require("../../Utils/Messages");

var _Utils = require("../../Utils/Utils");

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

  (0, _createClass2["default"])(Density, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.area)) {
          this.area = data.area;
        }

        if (_Utils.Utils.hasData(data.value_area)) {
          this.value_area = data.value_area;
        }
      }
    }
  }]);
  return Density;
}();

exports.Density = Density;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL0RlbnNpdHkudHMiXSwibmFtZXMiOlsiRGVuc2l0eSIsIk1lc3NhZ2VzIiwiZGVwcmVjYXRlZCIsImFyZWEiLCJ2YWx1ZSIsImVuYWJsZSIsImRhdGEiLCJVdGlscyIsImhhc0RhdGEiLCJ2YWx1ZV9hcmVhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0lBRWFBLE87Ozs7QUFDVDs7Ozt3QkFJZ0M7QUFDNUJDLHlCQUFTQyxVQUFULENBQW9CLHFDQUFwQixFQUEyRCwrQkFBM0Q7O0FBRUEsYUFBTyxLQUFLQyxJQUFaO0FBQ0g7QUFFRDs7Ozs7O3NCQUtzQkMsSyxFQUFlO0FBQ2pDSCx5QkFBU0MsVUFBVCxDQUFvQixxQ0FBcEIsRUFBMkQsK0JBQTNEOztBQUVBLFdBQUtDLElBQUwsR0FBWUMsS0FBWjtBQUNIOzs7QUFLRCxxQkFBYztBQUFBO0FBQUEsU0FIUEMsTUFHTztBQUFBLFNBRlBGLElBRU87QUFDVixTQUFLRSxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUtGLElBQUwsR0FBWSxHQUFaO0FBQ0g7Ozs7eUJBRVdHLEksRUFBc0I7QUFDOUIsVUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFkLENBQUosRUFBeUI7QUFDckIsWUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNELE1BQW5CLENBQUosRUFBZ0M7QUFDNUIsZUFBS0EsTUFBTCxHQUFjQyxJQUFJLENBQUNELE1BQW5CO0FBQ0g7O0FBRUQsWUFBSUUsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNILElBQW5CLENBQUosRUFBOEI7QUFDMUIsZUFBS0EsSUFBTCxHQUFZRyxJQUFJLENBQUNILElBQWpCO0FBQ0g7O0FBRUQsWUFBSUksYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNHLFVBQW5CLENBQUosRUFBb0M7QUFDaEMsZUFBS0EsVUFBTCxHQUFrQkgsSUFBSSxDQUFDRyxVQUF2QjtBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SURlbnNpdHl9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lEZW5zaXR5XCI7XG5pbXBvcnQge01lc3NhZ2VzfSBmcm9tIFwiLi4vLi4vVXRpbHMvTWVzc2FnZXNcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgRGVuc2l0eSBpbXBsZW1lbnRzIElEZW5zaXR5IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBhcmVhXG4gICAgICovXG4gICAgcHVibGljIGdldCB2YWx1ZV9hcmVhKCk6IG51bWJlciB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJwYXJ0aWNsZXMubnVtYmVyLmRlbnNpdHkudmFsdWVfYXJlYVwiLCBcInBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS5hcmVhXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFyZWE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgYXJlYVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgdmFsdWVfYXJlYSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJwYXJ0aWNsZXMubnVtYmVyLmRlbnNpdHkudmFsdWVfYXJlYVwiLCBcInBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS5hcmVhXCIpO1xuXG4gICAgICAgIHRoaXMuYXJlYSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBlbmFibGU6IGJvb2xlYW47XG4gICAgcHVibGljIGFyZWE6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYXJlYSA9IDgwMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChkYXRhOiBJRGVuc2l0eSk6IHZvaWQge1xuICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhKSkge1xuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5lbmFibGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGUgPSBkYXRhLmVuYWJsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5hcmVhKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJlYSA9IGRhdGEuYXJlYTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS52YWx1ZV9hcmVhKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVfYXJlYSA9IGRhdGEudmFsdWVfYXJlYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==