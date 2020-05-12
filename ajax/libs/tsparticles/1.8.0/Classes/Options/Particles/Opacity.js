"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Opacity = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _OpacityAnimation = require("./OpacityAnimation");

var Opacity = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Opacity, [{
    key: "anim",

    /**
     *
     * @deprecated this property is obsolete, please use the new animation
     */
    get: function get() {
      return this.animation;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new animation
     * @param value
     */
    ,
    set: function set(value) {
      this.animation = value;
    }
  }]);

  function Opacity() {
    (0, _classCallCheck2["default"])(this, Opacity);
    this.animation = void 0;
    this.random = void 0;
    this.value = void 0;
    this.animation = new _OpacityAnimation.OpacityAnimation();
    this.random = false;
    this.value = 1;
  }

  return Opacity;
}();

exports.Opacity = Opacity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL09wYWNpdHkudHMiXSwibmFtZXMiOlsiT3BhY2l0eSIsImFuaW1hdGlvbiIsInZhbHVlIiwicmFuZG9tIiwiT3BhY2l0eUFuaW1hdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztJQUdhQSxPOzs7O0FBQ1Q7Ozs7d0JBSXFDO0FBQ2pDLGFBQU8sS0FBS0MsU0FBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLZ0JDLEssRUFBMEI7QUFDdEMsV0FBS0QsU0FBTCxHQUFpQkMsS0FBakI7QUFDSDs7O0FBTUQscUJBQWM7QUFBQTtBQUFBLFNBSlBELFNBSU87QUFBQSxTQUhQRSxNQUdPO0FBQUEsU0FGUEQsS0FFTztBQUNWLFNBQUtELFNBQUwsR0FBaUIsSUFBSUcsa0NBQUosRUFBakI7QUFDQSxTQUFLRCxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtELEtBQUwsR0FBYSxDQUFiO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lPcGFjaXR5fSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JT3BhY2l0eVwiO1xuaW1wb3J0IHtPcGFjaXR5QW5pbWF0aW9ufSBmcm9tIFwiLi9PcGFjaXR5QW5pbWF0aW9uXCI7XG5pbXBvcnQge0lPcGFjaXR5QW5pbWF0aW9ufSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JT3BhY2l0eUFuaW1hdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgT3BhY2l0eSBpbXBsZW1lbnRzIElPcGFjaXR5IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBhbmltYXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGFuaW0oKTogSU9wYWNpdHlBbmltYXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5hbmltYXRpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgYW5pbWF0aW9uXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBhbmltKHZhbHVlOiBJT3BhY2l0eUFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhbmltYXRpb246IElPcGFjaXR5QW5pbWF0aW9uO1xuICAgIHB1YmxpYyByYW5kb206IGJvb2xlYW47XG4gICAgcHVibGljIHZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSBuZXcgT3BhY2l0eUFuaW1hdGlvbigpO1xuICAgICAgICB0aGlzLnJhbmRvbSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhbHVlID0gMTtcbiAgICB9XG59XG4iXX0=