"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParticlesSizeAnimation = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Messages = require("../../Utils/Messages");

var _Utils = require("../../Utils/Utils");

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

  (0, _createClass2["default"])(ParticlesSizeAnimation, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.minimumValue)) {
          this.minimumValue = data.minimumValue;
        }

        if (_Utils.Utils.hasData(data.size_min)) {
          this.size_min = data.size_min;
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
  return ParticlesSizeAnimation;
}();

exports.ParticlesSizeAnimation = ParticlesSizeAnimation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1BhcnRpY2xlc1NpemVBbmltYXRpb24udHMiXSwibmFtZXMiOlsiUGFydGljbGVzU2l6ZUFuaW1hdGlvbiIsIk1lc3NhZ2VzIiwiZGVwcmVjYXRlZCIsIm1pbmltdW1WYWx1ZSIsInZhbHVlIiwiZW5hYmxlIiwic3BlZWQiLCJzeW5jIiwiZGF0YSIsIlV0aWxzIiwiaGFzRGF0YSIsInNpemVfbWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0lBRWFBLHNCOzs7O0FBQ1Q7Ozs7d0JBSThCO0FBQzFCQyx5QkFBU0MsVUFBVCxDQUFvQixtQ0FBcEIsRUFBeUQsdUNBQXpEOztBQUVBLGFBQU8sS0FBS0MsWUFBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLb0JDLEssRUFBZTtBQUMvQkgseUJBQVNDLFVBQVQsQ0FBb0IsbUNBQXBCLEVBQXlELHVDQUF6RDs7QUFFQSxXQUFLQyxZQUFMLEdBQW9CQyxLQUFwQjtBQUNIOzs7QUFPRCxvQ0FBYztBQUFBO0FBQUEsU0FMUEMsTUFLTztBQUFBLFNBSlBGLFlBSU87QUFBQSxTQUhQRyxLQUdPO0FBQUEsU0FGUEMsSUFFTztBQUNWLFNBQUtGLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0YsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFNBQUtHLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDSDs7Ozt5QkFFV0MsSSxFQUE0QjtBQUNwQyxVQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF5QjtBQUNyQixZQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0gsTUFBbkIsQ0FBSixFQUFnQztBQUM1QixlQUFLQSxNQUFMLEdBQWNHLElBQUksQ0FBQ0gsTUFBbkI7QUFDSDs7QUFFRCxZQUFJSSxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0wsWUFBbkIsQ0FBSixFQUFzQztBQUNsQyxlQUFLQSxZQUFMLEdBQW9CSyxJQUFJLENBQUNMLFlBQXpCO0FBQ0g7O0FBRUQsWUFBSU0sYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNHLFFBQW5CLENBQUosRUFBa0M7QUFDOUIsZUFBS0EsUUFBTCxHQUFnQkgsSUFBSSxDQUFDRyxRQUFyQjtBQUNIOztBQUVELFlBQUlGLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDRixLQUFuQixDQUFKLEVBQStCO0FBQzNCLGVBQUtBLEtBQUwsR0FBYUUsSUFBSSxDQUFDRixLQUFsQjtBQUNIOztBQUVELFlBQUlHLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDRCxJQUFuQixDQUFKLEVBQThCO0FBQzFCLGVBQUtBLElBQUwsR0FBWUMsSUFBSSxDQUFDRCxJQUFqQjtBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVNpemVBbmltYXRpb259IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lTaXplQW5pbWF0aW9uXCI7XG5pbXBvcnQge01lc3NhZ2VzfSBmcm9tIFwiLi4vLi4vVXRpbHMvTWVzc2FnZXNcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgUGFydGljbGVzU2l6ZUFuaW1hdGlvbiBpbXBsZW1lbnRzIElTaXplQW5pbWF0aW9uIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBtaW5pbXVtVmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHNpemVfbWluKCk6IG51bWJlciB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJwYXJ0aWNsZXMuc2l6ZS5hbmltYXRpb24uc2l6ZV9taW5cIiwgXCJwYXJ0aWNsZXMuc2l6ZS5hbmltYXRpb24ubWluaW11bVZhbHVlXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm1pbmltdW1WYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBtaW5pbXVtVmFsdWVcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHNpemVfbWluKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgTWVzc2FnZXMuZGVwcmVjYXRlZChcInBhcnRpY2xlcy5zaXplLmFuaW1hdGlvbi5zaXplX21pblwiLCBcInBhcnRpY2xlcy5zaXplLmFuaW1hdGlvbi5taW5pbXVtVmFsdWVcIik7XG5cbiAgICAgICAgdGhpcy5taW5pbXVtVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZW5hYmxlOiBib29sZWFuO1xuICAgIHB1YmxpYyBtaW5pbXVtVmFsdWU6IG51bWJlcjtcbiAgICBwdWJsaWMgc3BlZWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgc3luYzogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVuYWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1pbmltdW1WYWx1ZSA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAyMDtcbiAgICAgICAgdGhpcy5zeW5jID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQoZGF0YTogSVNpemVBbmltYXRpb24pOiB2b2lkIHtcbiAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YSkpIHtcbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuZW5hYmxlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlID0gZGF0YS5lbmFibGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEubWluaW11bVZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWluaW11bVZhbHVlID0gZGF0YS5taW5pbXVtVmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuc2l6ZV9taW4pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaXplX21pbiA9IGRhdGEuc2l6ZV9taW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuc3BlZWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IGRhdGEuc3BlZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuc3luYykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN5bmMgPSBkYXRhLnN5bmM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=