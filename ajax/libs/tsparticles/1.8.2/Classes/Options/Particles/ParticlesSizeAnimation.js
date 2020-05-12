"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParticlesSizeAnimation = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Messages = require("../../Utils/Messages");

var ParticlesSizeAnimation = /*#__PURE__*/function () {
  (0, _createClass2["default"])(ParticlesSizeAnimation, [{
    key: "size_min",

    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.size.animation.size_min", "particles.size.animation.minimumValue");

      return this.minimumValue;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.size.animation.size_min", "particles.size.animation.minimumValue");

      this.minimumValue = value;
    }
  }]);

  function ParticlesSizeAnimation() {
    (0, _classCallCheck2["default"])(this, ParticlesSizeAnimation);
    this.enable = void 0;
    this.minimumValue = void 0;
    this.speed = void 0;
    this.sync = void 0;
    this.enable = false;
    this.minimumValue = 0;
    this.speed = 20;
    this.sync = false;
  }

  return ParticlesSizeAnimation;
}();

exports.ParticlesSizeAnimation = ParticlesSizeAnimation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1BhcnRpY2xlc1NpemVBbmltYXRpb24udHMiXSwibmFtZXMiOlsiUGFydGljbGVzU2l6ZUFuaW1hdGlvbiIsIk1lc3NhZ2VzIiwiZGVwcmVjYXRlZCIsIm1pbmltdW1WYWx1ZSIsInZhbHVlIiwiZW5hYmxlIiwic3BlZWQiLCJzeW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRWFBLHNCOzs7O0FBQ1Q7Ozs7d0JBSThCO0FBQzFCQyx5QkFBU0MsVUFBVCxDQUFvQixtQ0FBcEIsRUFBeUQsdUNBQXpEOztBQUVBLGFBQU8sS0FBS0MsWUFBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLb0JDLEssRUFBZTtBQUMvQkgseUJBQVNDLFVBQVQsQ0FBb0IsbUNBQXBCLEVBQXlELHVDQUF6RDs7QUFFQSxXQUFLQyxZQUFMLEdBQW9CQyxLQUFwQjtBQUNIOzs7QUFPRCxvQ0FBYztBQUFBO0FBQUEsU0FMUEMsTUFLTztBQUFBLFNBSlBGLFlBSU87QUFBQSxTQUhQRyxLQUdPO0FBQUEsU0FGUEMsSUFFTztBQUNWLFNBQUtGLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0YsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFNBQUtHLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVNpemVBbmltYXRpb259IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lTaXplQW5pbWF0aW9uXCI7XG5pbXBvcnQge01lc3NhZ2VzfSBmcm9tIFwiLi4vLi4vVXRpbHMvTWVzc2FnZXNcIjtcblxuZXhwb3J0IGNsYXNzIFBhcnRpY2xlc1NpemVBbmltYXRpb24gaW1wbGVtZW50cyBJU2l6ZUFuaW1hdGlvbiB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgbWluaW11bVZhbHVlXG4gICAgICovXG4gICAgcHVibGljIGdldCBzaXplX21pbigpOiBudW1iZXIge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwicGFydGljbGVzLnNpemUuYW5pbWF0aW9uLnNpemVfbWluXCIsIFwicGFydGljbGVzLnNpemUuYW5pbWF0aW9uLm1pbmltdW1WYWx1ZVwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5taW5pbXVtVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgbWluaW11bVZhbHVlXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBzaXplX21pbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJwYXJ0aWNsZXMuc2l6ZS5hbmltYXRpb24uc2l6ZV9taW5cIiwgXCJwYXJ0aWNsZXMuc2l6ZS5hbmltYXRpb24ubWluaW11bVZhbHVlXCIpO1xuXG4gICAgICAgIHRoaXMubWluaW11bVZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGVuYWJsZTogYm9vbGVhbjtcbiAgICBwdWJsaWMgbWluaW11bVZhbHVlOiBudW1iZXI7XG4gICAgcHVibGljIHNwZWVkOiBudW1iZXI7XG4gICAgcHVibGljIHN5bmM6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbmFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5taW5pbXVtVmFsdWUgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMjA7XG4gICAgICAgIHRoaXMuc3luYyA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==