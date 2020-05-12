"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Opacity = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _OpacityAnimation = require("./OpacityAnimation");

var _Messages = require("../../Utils/Messages");

var Opacity = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Opacity, [{
    key: "anim",

    /**
     *
     * @deprecated this property is obsolete, please use the new animation
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.opacity.anim", "particles.opacity.animation");

      return this.animation;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new animation
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.opacity.anim", "particles.opacity.animation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL09wYWNpdHkudHMiXSwibmFtZXMiOlsiT3BhY2l0eSIsIk1lc3NhZ2VzIiwiZGVwcmVjYXRlZCIsImFuaW1hdGlvbiIsInZhbHVlIiwicmFuZG9tIiwiT3BhY2l0eUFuaW1hdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBOztJQUVhQSxPOzs7O0FBQ1Q7Ozs7d0JBSXFDO0FBQ2pDQyx5QkFBU0MsVUFBVCxDQUFvQix3QkFBcEIsRUFBOEMsNkJBQTlDOztBQUVBLGFBQU8sS0FBS0MsU0FBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLZ0JDLEssRUFBMEI7QUFDdENILHlCQUFTQyxVQUFULENBQW9CLHdCQUFwQixFQUE4Qyw2QkFBOUM7O0FBRUEsV0FBS0MsU0FBTCxHQUFpQkMsS0FBakI7QUFDSDs7O0FBTUQscUJBQWM7QUFBQTtBQUFBLFNBSlBELFNBSU87QUFBQSxTQUhQRSxNQUdPO0FBQUEsU0FGUEQsS0FFTztBQUNWLFNBQUtELFNBQUwsR0FBaUIsSUFBSUcsa0NBQUosRUFBakI7QUFDQSxTQUFLRCxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtELEtBQUwsR0FBYSxDQUFiO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lPcGFjaXR5fSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JT3BhY2l0eVwiO1xuaW1wb3J0IHtPcGFjaXR5QW5pbWF0aW9ufSBmcm9tIFwiLi9PcGFjaXR5QW5pbWF0aW9uXCI7XG5pbXBvcnQge0lPcGFjaXR5QW5pbWF0aW9ufSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JT3BhY2l0eUFuaW1hdGlvblwiO1xuaW1wb3J0IHtNZXNzYWdlc30gZnJvbSBcIi4uLy4uL1V0aWxzL01lc3NhZ2VzXCI7XG5cbmV4cG9ydCBjbGFzcyBPcGFjaXR5IGltcGxlbWVudHMgSU9wYWNpdHkge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IGFuaW1hdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYW5pbSgpOiBJT3BhY2l0eUFuaW1hdGlvbiB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJwYXJ0aWNsZXMub3BhY2l0eS5hbmltXCIsIFwicGFydGljbGVzLm9wYWNpdHkuYW5pbWF0aW9uXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBhbmltYXRpb25cbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGFuaW0odmFsdWU6IElPcGFjaXR5QW5pbWF0aW9uKSB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJwYXJ0aWNsZXMub3BhY2l0eS5hbmltXCIsIFwicGFydGljbGVzLm9wYWNpdHkuYW5pbWF0aW9uXCIpO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFuaW1hdGlvbjogSU9wYWNpdHlBbmltYXRpb247XG4gICAgcHVibGljIHJhbmRvbTogYm9vbGVhbjtcbiAgICBwdWJsaWMgdmFsdWU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBPcGFjaXR5QW5pbWF0aW9uKCk7XG4gICAgICAgIHRoaXMucmFuZG9tID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmFsdWUgPSAxO1xuICAgIH1cbn1cbiJdfQ==