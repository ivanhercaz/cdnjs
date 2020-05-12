"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonShape = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Messages = require("../../../Utils/Messages");

var _Utils = require("../../../Utils/Utils");

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

  (0, _createClass2["default"])(PolygonShape, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.sides)) {
          this.sides = data.sides;
        }

        if (_Utils.Utils.hasData(data.nb_sides)) {
          this.nb_sides = data.nb_sides;
        }
      }
    }
  }]);
  return PolygonShape;
}();

exports.PolygonShape = PolygonShape;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1NoYXBlL1BvbHlnb25TaGFwZS50cyJdLCJuYW1lcyI6WyJQb2x5Z29uU2hhcGUiLCJNZXNzYWdlcyIsImRlcHJlY2F0ZWQiLCJzaWRlcyIsInZhbHVlIiwiZGF0YSIsIlV0aWxzIiwiaGFzRGF0YSIsIm5iX3NpZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0lBRWFBLFk7Ozs7QUFDVDs7Ozt3QkFJOEI7QUFDMUJDLHlCQUFTQyxVQUFULENBQW9CLGtDQUFwQixFQUF3RCwrQkFBeEQ7O0FBRUEsYUFBTyxLQUFLQyxLQUFaO0FBQ0g7QUFFRDs7Ozs7O3NCQUtvQkMsSyxFQUFlO0FBQy9CSCx5QkFBU0MsVUFBVCxDQUFvQixrQ0FBcEIsRUFBd0QsK0JBQXhEOztBQUVBLFdBQUtDLEtBQUwsR0FBYUMsS0FBYjtBQUNIOzs7QUFJRCwwQkFBYztBQUFBO0FBQUEsU0FGUEQsS0FFTztBQUNWLFNBQUtBLEtBQUwsR0FBYSxDQUFiO0FBQ0g7Ozs7eUJBRVdFLEksRUFBMkI7QUFDbkMsVUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFkLENBQUosRUFBeUI7QUFDckIsWUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNGLEtBQW5CLENBQUosRUFBK0I7QUFDM0IsZUFBS0EsS0FBTCxHQUFhRSxJQUFJLENBQUNGLEtBQWxCO0FBQ0g7O0FBRUQsWUFBSUcsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNHLFFBQW5CLENBQUosRUFBa0M7QUFDOUIsZUFBS0EsUUFBTCxHQUFnQkgsSUFBSSxDQUFDRyxRQUFyQjtBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVBvbHlnb25TaGFwZX0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9QYXJ0aWNsZXMvU2hhcGUvSVBvbHlnb25TaGFwZVwiO1xuaW1wb3J0IHtNZXNzYWdlc30gZnJvbSBcIi4uLy4uLy4uL1V0aWxzL01lc3NhZ2VzXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vLi4vLi4vVXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFBvbHlnb25TaGFwZSBpbXBsZW1lbnRzIElQb2x5Z29uU2hhcGUge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IHNpZGVzXG4gICAgICovXG4gICAgcHVibGljIGdldCBuYl9zaWRlcygpOiBudW1iZXIge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwicGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXNcIiwgXCJwYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5zaWRlc1wiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5zaWRlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBzaWRlc1xuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgbmJfc2lkZXModmFsdWU6IG51bWJlcikge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwicGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXNcIiwgXCJwYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5zaWRlc1wiKTtcblxuICAgICAgICB0aGlzLnNpZGVzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHNpZGVzOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zaWRlcyA9IDU7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQoZGF0YTogSVBvbHlnb25TaGFwZSk6IHZvaWQge1xuICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhKSkge1xuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5zaWRlcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpZGVzID0gZGF0YS5zaWRlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5uYl9zaWRlcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5iX3NpZGVzID0gZGF0YS5uYl9zaWRlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==