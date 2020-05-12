"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParticlesSize = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ParticlesSizeAnimation = require("./ParticlesSizeAnimation");

var ParticlesSize = /*#__PURE__*/function () {
  (0, _createClass2["default"])(ParticlesSize, [{
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

  function ParticlesSize() {
    (0, _classCallCheck2["default"])(this, ParticlesSize);
    this.animation = void 0;
    this.random = void 0;
    this.value = void 0;
    this.animation = new _ParticlesSizeAnimation.ParticlesSizeAnimation();
    this.random = false;
    this.value = 20;
  }

  return ParticlesSize;
}();

exports.ParticlesSize = ParticlesSize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1BhcnRpY2xlc1NpemUudHMiXSwibmFtZXMiOlsiUGFydGljbGVzU2l6ZSIsImFuaW1hdGlvbiIsInZhbHVlIiwicmFuZG9tIiwiUGFydGljbGVzU2l6ZUFuaW1hdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztJQUdhQSxhOzs7O0FBQ1Q7Ozs7d0JBSWtDO0FBQzlCLGFBQU8sS0FBS0MsU0FBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLZ0JDLEssRUFBdUI7QUFDbkMsV0FBS0QsU0FBTCxHQUFpQkMsS0FBakI7QUFDSDs7O0FBTUQsMkJBQWM7QUFBQTtBQUFBLFNBSlBELFNBSU87QUFBQSxTQUhQRSxNQUdPO0FBQUEsU0FGUEQsS0FFTztBQUNWLFNBQUtELFNBQUwsR0FBaUIsSUFBSUcsOENBQUosRUFBakI7QUFDQSxTQUFLRCxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtELEtBQUwsR0FBYSxFQUFiO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lTaXplfSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JU2l6ZVwiO1xuaW1wb3J0IHtQYXJ0aWNsZXNTaXplQW5pbWF0aW9ufSBmcm9tIFwiLi9QYXJ0aWNsZXNTaXplQW5pbWF0aW9uXCI7XG5pbXBvcnQge0lTaXplQW5pbWF0aW9ufSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JU2l6ZUFuaW1hdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgUGFydGljbGVzU2l6ZSBpbXBsZW1lbnRzIElTaXplIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBhbmltYXRpb25cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGFuaW0oKTogSVNpemVBbmltYXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5hbmltYXRpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgYW5pbWF0aW9uXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBhbmltKHZhbHVlOiBJU2l6ZUFuaW1hdGlvbikge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhbmltYXRpb246IElTaXplQW5pbWF0aW9uO1xuICAgIHB1YmxpYyByYW5kb206IGJvb2xlYW47XG4gICAgcHVibGljIHZhbHVlOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSBuZXcgUGFydGljbGVzU2l6ZUFuaW1hdGlvbigpO1xuICAgICAgICB0aGlzLnJhbmRvbSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhbHVlID0gMjA7XG4gICAgfVxufVxuIl19