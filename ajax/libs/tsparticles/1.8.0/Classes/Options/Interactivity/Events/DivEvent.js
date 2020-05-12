"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DivEvent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _DivMode = require("../../../../Enums/Modes/DivMode");

var DivEvent = /*#__PURE__*/function () {
  (0, _createClass2["default"])(DivEvent, [{
    key: "el",

    /**
     *
     * @deprecated this property is obsolete, please use the new elementId
     */
    get: function get() {
      return this.elementId;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new elementId
     * @param value
     */
    ,
    set: function set(value) {
      this.elementId = value;
    }
  }]);

  function DivEvent() {
    (0, _classCallCheck2["default"])(this, DivEvent);
    this.elementId = void 0;
    this.enable = void 0;
    this.mode = void 0;
    this.elementId = "repulse-div";
    this.enable = false;
    this.mode = _DivMode.DivMode.repulse;
  }

  return DivEvent;
}();

exports.DivEvent = DivEvent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9FdmVudHMvRGl2RXZlbnQudHMiXSwibmFtZXMiOlsiRGl2RXZlbnQiLCJlbGVtZW50SWQiLCJ2YWx1ZSIsImVuYWJsZSIsIm1vZGUiLCJEaXZNb2RlIiwicmVwdWxzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztJQUVhQSxROzs7O0FBQ1Q7Ozs7d0JBSXdCO0FBQ3BCLGFBQU8sS0FBS0MsU0FBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLY0MsSyxFQUFlO0FBQ3pCLFdBQUtELFNBQUwsR0FBaUJDLEtBQWpCO0FBQ0g7OztBQU1ELHNCQUFjO0FBQUE7QUFBQSxTQUpQRCxTQUlPO0FBQUEsU0FIUEUsTUFHTztBQUFBLFNBRlBDLElBRU87QUFDVixTQUFLSCxTQUFMLEdBQWlCLGFBQWpCO0FBQ0EsU0FBS0UsTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVlDLGlCQUFRQyxPQUFwQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRGl2RXZlbnR9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9FdmVudHMvSURpdkV2ZW50XCI7XG5pbXBvcnQge0Rpdk1vZGV9IGZyb20gXCIuLi8uLi8uLi8uLi9FbnVtcy9Nb2Rlcy9EaXZNb2RlXCI7XG5cbmV4cG9ydCBjbGFzcyBEaXZFdmVudCBpbXBsZW1lbnRzIElEaXZFdmVudCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgZWxlbWVudElkXG4gICAgICovXG4gICAgcHVibGljIGdldCBlbCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50SWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgZWxlbWVudElkXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBlbCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudElkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGVsZW1lbnRJZDogc3RyaW5nO1xuICAgIHB1YmxpYyBlbmFibGU6IGJvb2xlYW47XG4gICAgcHVibGljIG1vZGU6IERpdk1vZGUgfCBEaXZNb2RlW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50SWQgPSBcInJlcHVsc2UtZGl2XCI7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW9kZSA9IERpdk1vZGUucmVwdWxzZTtcbiAgICB9XG59XG4iXX0=