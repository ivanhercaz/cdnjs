"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpacityAnimation = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Messages = require("../../Utils/Messages");

var OpacityAnimation = /*#__PURE__*/function () {
  (0, _createClass2["default"])(OpacityAnimation, [{
    key: "opacity_min",

    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.opacity.animation.opacity_min", "particles.opacity.animation.minimumValue");

      return this.minimumValue;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new minimumValue
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.opacity.animation.opacity_min", "particles.opacity.animation.minimumValue");

      this.minimumValue = value;
    }
  }]);

  function OpacityAnimation() {
    (0, _classCallCheck2["default"])(this, OpacityAnimation);
    this.enable = void 0;
    this.minimumValue = void 0;
    this.speed = void 0;
    this.sync = void 0;
    this.enable = false;
    this.minimumValue = 0;
    this.speed = 2;
    this.sync = false;
  }

  return OpacityAnimation;
}();

exports.OpacityAnimation = OpacityAnimation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL09wYWNpdHlBbmltYXRpb24udHMiXSwibmFtZXMiOlsiT3BhY2l0eUFuaW1hdGlvbiIsIk1lc3NhZ2VzIiwiZGVwcmVjYXRlZCIsIm1pbmltdW1WYWx1ZSIsInZhbHVlIiwiZW5hYmxlIiwic3BlZWQiLCJzeW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRWFBLGdCOzs7O0FBQ1Q7Ozs7d0JBSWlDO0FBQzdCQyx5QkFBU0MsVUFBVCxDQUFvQix5Q0FBcEIsRUFBK0QsMENBQS9EOztBQUVBLGFBQU8sS0FBS0MsWUFBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLdUJDLEssRUFBZTtBQUNsQ0gseUJBQVNDLFVBQVQsQ0FBb0IseUNBQXBCLEVBQStELDBDQUEvRDs7QUFFQSxXQUFLQyxZQUFMLEdBQW9CQyxLQUFwQjtBQUNIOzs7QUFPRCw4QkFBYztBQUFBO0FBQUEsU0FMUEMsTUFLTztBQUFBLFNBSlBGLFlBSU87QUFBQSxTQUhQRyxLQUdPO0FBQUEsU0FGUEMsSUFFTztBQUNWLFNBQUtGLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0YsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFNBQUtHLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SU9wYWNpdHlBbmltYXRpb259IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lPcGFjaXR5QW5pbWF0aW9uXCI7XG5pbXBvcnQge01lc3NhZ2VzfSBmcm9tIFwiLi4vLi4vVXRpbHMvTWVzc2FnZXNcIjtcblxuZXhwb3J0IGNsYXNzIE9wYWNpdHlBbmltYXRpb24gaW1wbGVtZW50cyBJT3BhY2l0eUFuaW1hdGlvbiB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgbWluaW11bVZhbHVlXG4gICAgICovXG4gICAgcHVibGljIGdldCBvcGFjaXR5X21pbigpOiBudW1iZXIge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwicGFydGljbGVzLm9wYWNpdHkuYW5pbWF0aW9uLm9wYWNpdHlfbWluXCIsIFwicGFydGljbGVzLm9wYWNpdHkuYW5pbWF0aW9uLm1pbmltdW1WYWx1ZVwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5taW5pbXVtVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgbWluaW11bVZhbHVlXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBvcGFjaXR5X21pbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJwYXJ0aWNsZXMub3BhY2l0eS5hbmltYXRpb24ub3BhY2l0eV9taW5cIiwgXCJwYXJ0aWNsZXMub3BhY2l0eS5hbmltYXRpb24ubWluaW11bVZhbHVlXCIpO1xuXG4gICAgICAgIHRoaXMubWluaW11bVZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGVuYWJsZTogYm9vbGVhbjtcbiAgICBwdWJsaWMgbWluaW11bVZhbHVlOiBudW1iZXI7XG4gICAgcHVibGljIHNwZWVkOiBudW1iZXI7XG4gICAgcHVibGljIHN5bmM6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbmFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5taW5pbXVtVmFsdWUgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMjtcbiAgICAgICAgdGhpcy5zeW5jID0gZmFsc2U7XG4gICAgfVxufVxuIl19