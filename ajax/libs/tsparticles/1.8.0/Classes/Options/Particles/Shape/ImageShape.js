"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageShape = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var ImageShape = /*#__PURE__*/function () {
  (0, _createClass2["default"])(ImageShape, [{
    key: "replace_color",

    /**
     *
     * @deprecated this property is obsolete, please use the new replaceColor
     */
    get: function get() {
      return this.replaceColor;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new replaceColor
     * @param value
     */
    ,
    set: function set(value) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1NoYXBlL0ltYWdlU2hhcGUudHMiXSwibmFtZXMiOlsiSW1hZ2VTaGFwZSIsInJlcGxhY2VDb2xvciIsInZhbHVlIiwiaGVpZ2h0Iiwic3JjIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFFYUEsVTs7OztBQUNUOzs7O3dCQUlvQztBQUNoQyxhQUFPLEtBQUtDLFlBQVo7QUFDSDtBQUVEOzs7Ozs7c0JBS3lCQyxLLEVBQWdCO0FBQ3JDLFdBQUtELFlBQUwsR0FBb0JDLEtBQXBCO0FBQ0g7OztBQU9ELHdCQUFjO0FBQUE7QUFBQSxTQUxQQyxNQUtPO0FBQUEsU0FKUEYsWUFJTztBQUFBLFNBSFBHLEdBR087QUFBQSxTQUZQQyxLQUVPO0FBQ1YsU0FBS0YsTUFBTCxHQUFjLEdBQWQ7QUFDQSxTQUFLRixZQUFMLEdBQW9CLElBQXBCO0FBQ0EsU0FBS0csR0FBTCxHQUFXLEVBQVg7QUFDQSxTQUFLQyxLQUFMLEdBQWEsR0FBYjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJSW1hZ2VTaGFwZX0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9TaGFwZS9JSW1hZ2VTaGFwZVwiO1xuXG5leHBvcnQgY2xhc3MgSW1hZ2VTaGFwZSBpbXBsZW1lbnRzIElJbWFnZVNoYXBlIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyByZXBsYWNlQ29sb3JcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHJlcGxhY2VfY29sb3IoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2VDb2xvcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyByZXBsYWNlQ29sb3JcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHJlcGxhY2VfY29sb3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5yZXBsYWNlQ29sb3IgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gICAgcHVibGljIHJlcGxhY2VDb2xvcjogYm9vbGVhbjtcbiAgICBwdWJsaWMgc3JjOiBzdHJpbmc7XG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDA7XG4gICAgICAgIHRoaXMucmVwbGFjZUNvbG9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcmMgPSBcIlwiO1xuICAgICAgICB0aGlzLndpZHRoID0gMTAwO1xuICAgIH1cbn1cbiJdfQ==