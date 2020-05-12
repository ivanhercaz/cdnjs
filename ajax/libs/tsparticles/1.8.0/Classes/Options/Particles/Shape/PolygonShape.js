"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonShape = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var PolygonShape = /*#__PURE__*/function () {
  (0, _createClass2["default"])(PolygonShape, [{
    key: "nb_sides",

    /**
     *
     * @deprecated this property is obsolete, please use the new sides
     */
    get: function get() {
      return this.sides;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new sides
     * @param value
     */
    ,
    set: function set(value) {
      this.sides = value;
    }
  }]);

  function PolygonShape() {
    (0, _classCallCheck2["default"])(this, PolygonShape);
    this.sides = void 0;
    this.sides = 5;
  }

  return PolygonShape;
}();

exports.PolygonShape = PolygonShape;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1NoYXBlL1BvbHlnb25TaGFwZS50cyJdLCJuYW1lcyI6WyJQb2x5Z29uU2hhcGUiLCJzaWRlcyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBRWFBLFk7Ozs7QUFDVDs7Ozt3QkFJOEI7QUFDMUIsYUFBTyxLQUFLQyxLQUFaO0FBQ0g7QUFFRDs7Ozs7O3NCQUtvQkMsSyxFQUFlO0FBQy9CLFdBQUtELEtBQUwsR0FBYUMsS0FBYjtBQUNIOzs7QUFJRCwwQkFBYztBQUFBO0FBQUEsU0FGUEQsS0FFTztBQUNWLFNBQUtBLEtBQUwsR0FBYSxDQUFiO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lQb2x5Z29uU2hhcGV9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvU2hhcGUvSVBvbHlnb25TaGFwZVwiO1xuXG5leHBvcnQgY2xhc3MgUG9seWdvblNoYXBlIGltcGxlbWVudHMgSVBvbHlnb25TaGFwZSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgc2lkZXNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG5iX3NpZGVzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpZGVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IHNpZGVzXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBuYl9zaWRlcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2lkZXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2lkZXM6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNpZGVzID0gNTtcbiAgICB9XG59XG4iXX0=