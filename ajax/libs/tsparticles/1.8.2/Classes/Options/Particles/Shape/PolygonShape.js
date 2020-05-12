"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonShape = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Messages = require("../../../Utils/Messages");

var PolygonShape = /*#__PURE__*/function () {
  (0, _createClass2["default"])(PolygonShape, [{
    key: "nb_sides",

    /**
     *
     * @deprecated this property is obsolete, please use the new sides
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.shape.polygon.nb_sides", "particles.shape.polygon.sides");

      return this.sides;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new sides
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.shape.polygon.nb_sides", "particles.shape.polygon.sides");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1NoYXBlL1BvbHlnb25TaGFwZS50cyJdLCJuYW1lcyI6WyJQb2x5Z29uU2hhcGUiLCJNZXNzYWdlcyIsImRlcHJlY2F0ZWQiLCJzaWRlcyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRWFBLFk7Ozs7QUFDVDs7Ozt3QkFJOEI7QUFDMUJDLHlCQUFTQyxVQUFULENBQW9CLGtDQUFwQixFQUF3RCwrQkFBeEQ7O0FBRUEsYUFBTyxLQUFLQyxLQUFaO0FBQ0g7QUFFRDs7Ozs7O3NCQUtvQkMsSyxFQUFlO0FBQy9CSCx5QkFBU0MsVUFBVCxDQUFvQixrQ0FBcEIsRUFBd0QsK0JBQXhEOztBQUVBLFdBQUtDLEtBQUwsR0FBYUMsS0FBYjtBQUNIOzs7QUFJRCwwQkFBYztBQUFBO0FBQUEsU0FGUEQsS0FFTztBQUNWLFNBQUtBLEtBQUwsR0FBYSxDQUFiO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lQb2x5Z29uU2hhcGV9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvU2hhcGUvSVBvbHlnb25TaGFwZVwiO1xuaW1wb3J0IHtNZXNzYWdlc30gZnJvbSBcIi4uLy4uLy4uL1V0aWxzL01lc3NhZ2VzXCI7XG5cbmV4cG9ydCBjbGFzcyBQb2x5Z29uU2hhcGUgaW1wbGVtZW50cyBJUG9seWdvblNoYXBlIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBzaWRlc1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgbmJfc2lkZXMoKTogbnVtYmVyIHtcbiAgICAgICAgTWVzc2FnZXMuZGVwcmVjYXRlZChcInBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzXCIsIFwicGFydGljbGVzLnNoYXBlLnBvbHlnb24uc2lkZXNcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2lkZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgc2lkZXNcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IG5iX3NpZGVzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgTWVzc2FnZXMuZGVwcmVjYXRlZChcInBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzXCIsIFwicGFydGljbGVzLnNoYXBlLnBvbHlnb24uc2lkZXNcIik7XG5cbiAgICAgICAgdGhpcy5zaWRlcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaWRlczogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2lkZXMgPSA1O1xuICAgIH1cbn1cbiJdfQ==