"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Push = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Push = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Push, [{
    key: "particles_nb",

    /**
     *
     * @deprecated this property is obsolete, please use the new quantity
     */
    get: function get() {
      return this.quantity;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new quantity
     * @param value
     */
    ,
    set: function set(value) {
      this.quantity = value;
    }
  }]);

  function Push() {
    (0, _classCallCheck2["default"])(this, Push);
    this.quantity = void 0;
    this.quantity = 4;
  }

  return Push;
}();

exports.Push = Push;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9QdXNoLnRzIl0sIm5hbWVzIjpbIlB1c2giLCJxdWFudGl0eSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBRWFBLEk7Ozs7QUFDVDs7Ozt3QkFJa0M7QUFDOUIsYUFBTyxLQUFLQyxRQUFaO0FBQ0g7QUFFRDs7Ozs7O3NCQUt3QkMsSyxFQUFlO0FBQ25DLFdBQUtELFFBQUwsR0FBZ0JDLEtBQWhCO0FBQ0g7OztBQUlELGtCQUFjO0FBQUE7QUFBQSxTQUZQRCxRQUVPO0FBQ1YsU0FBS0EsUUFBTCxHQUFnQixDQUFoQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUHVzaH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L01vZGVzL0lQdXNoXCI7XG5cbmV4cG9ydCBjbGFzcyBQdXNoIGltcGxlbWVudHMgSVB1c2gge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IHF1YW50aXR5XG4gICAgICovXG4gICAgcHVibGljIGdldCBwYXJ0aWNsZXNfbmIoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVhbnRpdHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgcXVhbnRpdHlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHBhcnRpY2xlc19uYih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcXVhbnRpdHk6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnF1YW50aXR5ID0gNDtcbiAgICB9XG59XG4iXX0=