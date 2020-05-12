"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageShape = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Messages = require("../../../Utils/Messages");

var ImageShape = /*#__PURE__*/function () {
  (0, _createClass2["default"])(ImageShape, [{
    key: "replace_color",

    /**
     *
     * @deprecated this property is obsolete, please use the new replaceColor
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.shape.image.replace_color", "particles.shape.image.replaceColor");

      return this.replaceColor;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new replaceColor
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.shape.image.replace_color", "particles.shape.image.replaceColor");

      this.replaceColor = value;
    }
  }]);

  function ImageShape() {
    (0, _classCallCheck2["default"])(this, ImageShape);
    this.height = void 0;
    this.replaceColor = void 0;
    this.src = void 0;
    this.width = void 0;
    this.height = 100;
    this.replaceColor = true;
    this.src = "";
    this.width = 100;
  }

  return ImageShape;
}();

exports.ImageShape = ImageShape;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1NoYXBlL0ltYWdlU2hhcGUudHMiXSwibmFtZXMiOlsiSW1hZ2VTaGFwZSIsIk1lc3NhZ2VzIiwiZGVwcmVjYXRlZCIsInJlcGxhY2VDb2xvciIsInZhbHVlIiwiaGVpZ2h0Iiwic3JjIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7SUFFYUEsVTs7OztBQUNUOzs7O3dCQUlvQztBQUNoQ0MseUJBQVNDLFVBQVQsQ0FBb0IscUNBQXBCLEVBQTJELG9DQUEzRDs7QUFFQSxhQUFPLEtBQUtDLFlBQVo7QUFDSDtBQUVEOzs7Ozs7c0JBS3lCQyxLLEVBQWdCO0FBQ3JDSCx5QkFBU0MsVUFBVCxDQUFvQixxQ0FBcEIsRUFBMkQsb0NBQTNEOztBQUVBLFdBQUtDLFlBQUwsR0FBb0JDLEtBQXBCO0FBQ0g7OztBQU9ELHdCQUFjO0FBQUE7QUFBQSxTQUxQQyxNQUtPO0FBQUEsU0FKUEYsWUFJTztBQUFBLFNBSFBHLEdBR087QUFBQSxTQUZQQyxLQUVPO0FBQ1YsU0FBS0YsTUFBTCxHQUFjLEdBQWQ7QUFDQSxTQUFLRixZQUFMLEdBQW9CLElBQXBCO0FBQ0EsU0FBS0csR0FBTCxHQUFXLEVBQVg7QUFDQSxTQUFLQyxLQUFMLEdBQWEsR0FBYjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJSW1hZ2VTaGFwZX0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9TaGFwZS9JSW1hZ2VTaGFwZVwiO1xuaW1wb3J0IHtNZXNzYWdlc30gZnJvbSBcIi4uLy4uLy4uL1V0aWxzL01lc3NhZ2VzXCI7XG5cbmV4cG9ydCBjbGFzcyBJbWFnZVNoYXBlIGltcGxlbWVudHMgSUltYWdlU2hhcGUge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IHJlcGxhY2VDb2xvclxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcmVwbGFjZV9jb2xvcigpOiBib29sZWFuIHtcbiAgICAgICAgTWVzc2FnZXMuZGVwcmVjYXRlZChcInBhcnRpY2xlcy5zaGFwZS5pbWFnZS5yZXBsYWNlX2NvbG9yXCIsIFwicGFydGljbGVzLnNoYXBlLmltYWdlLnJlcGxhY2VDb2xvclwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlQ29sb3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgcmVwbGFjZUNvbG9yXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCByZXBsYWNlX2NvbG9yKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJwYXJ0aWNsZXMuc2hhcGUuaW1hZ2UucmVwbGFjZV9jb2xvclwiLCBcInBhcnRpY2xlcy5zaGFwZS5pbWFnZS5yZXBsYWNlQ29sb3JcIik7XG5cbiAgICAgICAgdGhpcy5yZXBsYWNlQ29sb3IgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gICAgcHVibGljIHJlcGxhY2VDb2xvcjogYm9vbGVhbjtcbiAgICBwdWJsaWMgc3JjOiBzdHJpbmc7XG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDA7XG4gICAgICAgIHRoaXMucmVwbGFjZUNvbG9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcmMgPSBcIlwiO1xuICAgICAgICB0aGlzLndpZHRoID0gMTAwO1xuICAgIH1cbn1cbiJdfQ==