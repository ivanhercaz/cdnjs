"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpacityAnimation = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Messages = require("../../Utils/Messages");

var _Utils = require("../../Utils/Utils");

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

  (0, _createClass2["default"])(OpacityAnimation, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.minimumValue)) {
          this.minimumValue = data.minimumValue;
        }

        if (_Utils.Utils.hasData(data.opacity_min)) {
          this.opacity_min = data.opacity_min;
        }

        if (_Utils.Utils.hasData(data.speed)) {
          this.speed = data.speed;
        }

        if (_Utils.Utils.hasData(data.sync)) {
          this.sync = data.sync;
        }
      }
    }
  }]);
  return OpacityAnimation;
}();

exports.OpacityAnimation = OpacityAnimation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL09wYWNpdHlBbmltYXRpb24udHMiXSwibmFtZXMiOlsiT3BhY2l0eUFuaW1hdGlvbiIsIk1lc3NhZ2VzIiwiZGVwcmVjYXRlZCIsIm1pbmltdW1WYWx1ZSIsInZhbHVlIiwiZW5hYmxlIiwic3BlZWQiLCJzeW5jIiwiZGF0YSIsIlV0aWxzIiwiaGFzRGF0YSIsIm9wYWNpdHlfbWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0lBRWFBLGdCOzs7O0FBQ1Q7Ozs7d0JBSWlDO0FBQzdCQyx5QkFBU0MsVUFBVCxDQUFvQix5Q0FBcEIsRUFBK0QsMENBQS9EOztBQUVBLGFBQU8sS0FBS0MsWUFBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLdUJDLEssRUFBZTtBQUNsQ0gseUJBQVNDLFVBQVQsQ0FBb0IseUNBQXBCLEVBQStELDBDQUEvRDs7QUFFQSxXQUFLQyxZQUFMLEdBQW9CQyxLQUFwQjtBQUNIOzs7QUFPRCw4QkFBYztBQUFBO0FBQUEsU0FMUEMsTUFLTztBQUFBLFNBSlBGLFlBSU87QUFBQSxTQUhQRyxLQUdPO0FBQUEsU0FGUEMsSUFFTztBQUNWLFNBQUtGLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0YsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFNBQUtHLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDSDs7Ozt5QkFFV0MsSSxFQUErQjtBQUN2QyxVQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF5QjtBQUNyQixZQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0gsTUFBbkIsQ0FBSixFQUFnQztBQUM1QixlQUFLQSxNQUFMLEdBQWNHLElBQUksQ0FBQ0gsTUFBbkI7QUFDSDs7QUFFRCxZQUFJSSxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0wsWUFBbkIsQ0FBSixFQUFzQztBQUNsQyxlQUFLQSxZQUFMLEdBQW9CSyxJQUFJLENBQUNMLFlBQXpCO0FBQ0g7O0FBRUQsWUFBSU0sYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNHLFdBQW5CLENBQUosRUFBcUM7QUFDakMsZUFBS0EsV0FBTCxHQUFtQkgsSUFBSSxDQUFDRyxXQUF4QjtBQUNIOztBQUVELFlBQUlGLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDRixLQUFuQixDQUFKLEVBQStCO0FBQzNCLGVBQUtBLEtBQUwsR0FBYUUsSUFBSSxDQUFDRixLQUFsQjtBQUNIOztBQUVELFlBQUlHLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDRCxJQUFuQixDQUFKLEVBQThCO0FBQzFCLGVBQUtBLElBQUwsR0FBWUMsSUFBSSxDQUFDRCxJQUFqQjtBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SU9wYWNpdHlBbmltYXRpb259IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lPcGFjaXR5QW5pbWF0aW9uXCI7XG5pbXBvcnQge01lc3NhZ2VzfSBmcm9tIFwiLi4vLi4vVXRpbHMvTWVzc2FnZXNcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgT3BhY2l0eUFuaW1hdGlvbiBpbXBsZW1lbnRzIElPcGFjaXR5QW5pbWF0aW9uIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBtaW5pbXVtVmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG9wYWNpdHlfbWluKCk6IG51bWJlciB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJwYXJ0aWNsZXMub3BhY2l0eS5hbmltYXRpb24ub3BhY2l0eV9taW5cIiwgXCJwYXJ0aWNsZXMub3BhY2l0eS5hbmltYXRpb24ubWluaW11bVZhbHVlXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm1pbmltdW1WYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBtaW5pbXVtVmFsdWVcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IG9wYWNpdHlfbWluKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgTWVzc2FnZXMuZGVwcmVjYXRlZChcInBhcnRpY2xlcy5vcGFjaXR5LmFuaW1hdGlvbi5vcGFjaXR5X21pblwiLCBcInBhcnRpY2xlcy5vcGFjaXR5LmFuaW1hdGlvbi5taW5pbXVtVmFsdWVcIik7XG5cbiAgICAgICAgdGhpcy5taW5pbXVtVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlOiBib29sZWFuO1xuICAgIHB1YmxpYyBtaW5pbXVtVmFsdWU6IG51bWJlcjtcbiAgICBwdWJsaWMgc3BlZWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgc3luYzogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVuYWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1pbmltdW1WYWx1ZSA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAyO1xuICAgICAgICB0aGlzLnN5bmMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChkYXRhOiBJT3BhY2l0eUFuaW1hdGlvbik6IHZvaWQge1xuICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhKSkge1xuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5lbmFibGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGUgPSBkYXRhLmVuYWJsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5taW5pbXVtVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5taW5pbXVtVmFsdWUgPSBkYXRhLm1pbmltdW1WYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5vcGFjaXR5X21pbikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHlfbWluID0gZGF0YS5vcGFjaXR5X21pbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5zcGVlZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gZGF0YS5zcGVlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5zeW5jKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3luYyA9IGRhdGEuc3luYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==