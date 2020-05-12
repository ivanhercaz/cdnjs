"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Remove = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Remove = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Remove, [{
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

  function Remove() {
    (0, _classCallCheck2["default"])(this, Remove);
    this.quantity = void 0;
    this.quantity = 2;
  }

  return Remove;
}();

exports.Remove = Remove;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9SZW1vdmUudHMiXSwibmFtZXMiOlsiUmVtb3ZlIiwicXVhbnRpdHkiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUVhQSxNOzs7O0FBQ1Q7Ozs7d0JBSWtDO0FBQzlCLGFBQU8sS0FBS0MsUUFBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLd0JDLEssRUFBZTtBQUNuQyxXQUFLRCxRQUFMLEdBQWdCQyxLQUFoQjtBQUNIOzs7QUFJRCxvQkFBYztBQUFBO0FBQUEsU0FGUEQsUUFFTztBQUNWLFNBQUtBLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVJlbW92ZX0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L01vZGVzL0lSZW1vdmVcIjtcblxuZXhwb3J0IGNsYXNzIFJlbW92ZSBpbXBsZW1lbnRzIElSZW1vdmUge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IHF1YW50aXR5XG4gICAgICovXG4gICAgcHVibGljIGdldCBwYXJ0aWNsZXNfbmIoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVhbnRpdHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgcXVhbnRpdHlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHBhcnRpY2xlc19uYih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcXVhbnRpdHk6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnF1YW50aXR5ID0gMjtcbiAgICB9XG59XG4iXX0=