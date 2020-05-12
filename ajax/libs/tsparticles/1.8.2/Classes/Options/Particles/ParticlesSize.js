"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParticlesSize = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ParticlesSizeAnimation = require("./ParticlesSizeAnimation");

var _Messages = require("../../Utils/Messages");

var ParticlesSize = /*#__PURE__*/function () {
  (0, _createClass2["default"])(ParticlesSize, [{
    key: "anim",

    /**
     *
     * @deprecated this property is obsolete, please use the new animation
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.size.anim", "particles.size.animation");

      return this.animation;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new animation
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.size.anim", "particles.size.animation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1BhcnRpY2xlc1NpemUudHMiXSwibmFtZXMiOlsiUGFydGljbGVzU2l6ZSIsIk1lc3NhZ2VzIiwiZGVwcmVjYXRlZCIsImFuaW1hdGlvbiIsInZhbHVlIiwicmFuZG9tIiwiUGFydGljbGVzU2l6ZUFuaW1hdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBOztJQUVhQSxhOzs7O0FBQ1Q7Ozs7d0JBSWtDO0FBQzlCQyx5QkFBU0MsVUFBVCxDQUFvQixxQkFBcEIsRUFBMkMsMEJBQTNDOztBQUVBLGFBQU8sS0FBS0MsU0FBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLZ0JDLEssRUFBdUI7QUFDbkNILHlCQUFTQyxVQUFULENBQW9CLHFCQUFwQixFQUEyQywwQkFBM0M7O0FBRUEsV0FBS0MsU0FBTCxHQUFpQkMsS0FBakI7QUFDSDs7O0FBTUQsMkJBQWM7QUFBQTtBQUFBLFNBSlBELFNBSU87QUFBQSxTQUhQRSxNQUdPO0FBQUEsU0FGUEQsS0FFTztBQUNWLFNBQUtELFNBQUwsR0FBaUIsSUFBSUcsOENBQUosRUFBakI7QUFDQSxTQUFLRCxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtELEtBQUwsR0FBYSxFQUFiO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lTaXplfSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JU2l6ZVwiO1xuaW1wb3J0IHtQYXJ0aWNsZXNTaXplQW5pbWF0aW9ufSBmcm9tIFwiLi9QYXJ0aWNsZXNTaXplQW5pbWF0aW9uXCI7XG5pbXBvcnQge0lTaXplQW5pbWF0aW9ufSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JU2l6ZUFuaW1hdGlvblwiO1xuaW1wb3J0IHtNZXNzYWdlc30gZnJvbSBcIi4uLy4uL1V0aWxzL01lc3NhZ2VzXCI7XG5cbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZXNTaXplIGltcGxlbWVudHMgSVNpemUge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IGFuaW1hdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYW5pbSgpOiBJU2l6ZUFuaW1hdGlvbiB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJwYXJ0aWNsZXMuc2l6ZS5hbmltXCIsIFwicGFydGljbGVzLnNpemUuYW5pbWF0aW9uXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBhbmltYXRpb25cbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGFuaW0odmFsdWU6IElTaXplQW5pbWF0aW9uKSB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJwYXJ0aWNsZXMuc2l6ZS5hbmltXCIsIFwicGFydGljbGVzLnNpemUuYW5pbWF0aW9uXCIpO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFuaW1hdGlvbjogSVNpemVBbmltYXRpb247XG4gICAgcHVibGljIHJhbmRvbTogYm9vbGVhbjtcbiAgICBwdWJsaWMgdmFsdWU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBQYXJ0aWNsZXNTaXplQW5pbWF0aW9uKCk7XG4gICAgICAgIHRoaXMucmFuZG9tID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmFsdWUgPSAyMDtcbiAgICB9XG59XG4iXX0=