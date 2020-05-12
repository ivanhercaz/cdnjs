"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Attract = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Attract = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Attract, [{
    key: "rotateX",

    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.x
     */
    get: function get() {
      return this.rotate.x;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.x
     * @param value
     */
    ,
    set: function set(value) {
      this.rotate.x = value;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.y
     */

  }, {
    key: "rotateY",
    get: function get() {
      return this.rotate.y;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.y
     * @param value
     */
    ,
    set: function set(value) {
      this.rotate.y = value;
    }
  }]);

  function Attract() {
    (0, _classCallCheck2["default"])(this, Attract);
    this.enable = void 0;
    this.rotate = void 0;
    this.enable = false;
    this.rotate = {
      x: 3000,
      y: 3000
    };
  }

  return Attract;
}();

exports.Attract = Attract;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL0F0dHJhY3QudHMiXSwibmFtZXMiOlsiQXR0cmFjdCIsInJvdGF0ZSIsIngiLCJ2YWx1ZSIsInkiLCJlbmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFHYUEsTzs7OztBQUNUOzs7O3dCQUk2QjtBQUN6QixhQUFPLEtBQUtDLE1BQUwsQ0FBWUMsQ0FBbkI7QUFDSDtBQUVEOzs7Ozs7c0JBS21CQyxLLEVBQWU7QUFDOUIsV0FBS0YsTUFBTCxDQUFZQyxDQUFaLEdBQWdCQyxLQUFoQjtBQUNIO0FBRUQ7Ozs7Ozs7d0JBSTZCO0FBQ3pCLGFBQU8sS0FBS0YsTUFBTCxDQUFZRyxDQUFuQjtBQUNIO0FBRUQ7Ozs7OztzQkFLbUJELEssRUFBZTtBQUM5QixXQUFLRixNQUFMLENBQVlHLENBQVosR0FBZ0JELEtBQWhCO0FBQ0g7OztBQUtELHFCQUFjO0FBQUE7QUFBQSxTQUhQRSxNQUdPO0FBQUEsU0FGUEosTUFFTztBQUNWLFNBQUtJLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0osTUFBTCxHQUFjO0FBQ1ZDLE1BQUFBLENBQUMsRUFBRSxJQURPO0FBRVZFLE1BQUFBLENBQUMsRUFBRTtBQUZPLEtBQWQ7QUFJSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUF0dHJhY3R9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lBdHRyYWN0XCI7XG5pbXBvcnQge0lDb29yZGluYXRlc30gZnJvbSBcIi4uLy4uLy4uL0ludGVyZmFjZXMvSUNvb3JkaW5hdGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBBdHRyYWN0IGltcGxlbWVudHMgSUF0dHJhY3Qge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IHJvdGF0ZS54XG4gICAgICovXG4gICAgcHVibGljIGdldCByb3RhdGVYKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZS54O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IHJvdGF0ZS54XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCByb3RhdGVYKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5yb3RhdGUueCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IHJvdGF0ZS55XG4gICAgICovXG4gICAgcHVibGljIGdldCByb3RhdGVZKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0ZS55O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IHJvdGF0ZS55XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCByb3RhdGVZKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5yb3RhdGUueSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBlbmFibGU6IGJvb2xlYW47XG4gICAgcHVibGljIHJvdGF0ZTogSUNvb3JkaW5hdGVzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm90YXRlID0ge1xuICAgICAgICAgICAgeDogMzAwMCxcbiAgICAgICAgICAgIHk6IDMwMDAsXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19