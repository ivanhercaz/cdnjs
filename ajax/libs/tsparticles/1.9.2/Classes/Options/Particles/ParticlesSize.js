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

var _Utils = require("../../Utils/Utils");

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

  (0, _createClass2["default"])(ParticlesSize, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.animation)) {
          this.animation.load(data.animation);
        }

        if (_Utils.Utils.hasData(data.anim)) {
          this.anim.load(data.anim);
        }

        if (_Utils.Utils.hasData(data.random)) {
          this.random = data.random;
        }

        if (_Utils.Utils.hasData(data.value)) {
          this.value = data.value;
        }
      }
    }
  }]);
  return ParticlesSize;
}();

exports.ParticlesSize = ParticlesSize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1BhcnRpY2xlc1NpemUudHMiXSwibmFtZXMiOlsiUGFydGljbGVzU2l6ZSIsIk1lc3NhZ2VzIiwiZGVwcmVjYXRlZCIsImFuaW1hdGlvbiIsInZhbHVlIiwicmFuZG9tIiwiUGFydGljbGVzU2l6ZUFuaW1hdGlvbiIsImRhdGEiLCJVdGlscyIsImhhc0RhdGEiLCJsb2FkIiwiYW5pbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBOztBQUNBOztJQUVhQSxhOzs7O0FBQ1Q7Ozs7d0JBSWtDO0FBQzlCQyx5QkFBU0MsVUFBVCxDQUFvQixxQkFBcEIsRUFBMkMsMEJBQTNDOztBQUVBLGFBQU8sS0FBS0MsU0FBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLZ0JDLEssRUFBdUI7QUFDbkNILHlCQUFTQyxVQUFULENBQW9CLHFCQUFwQixFQUEyQywwQkFBM0M7O0FBRUEsV0FBS0MsU0FBTCxHQUFpQkMsS0FBakI7QUFDSDs7O0FBTUQsMkJBQWM7QUFBQTtBQUFBLFNBSlBELFNBSU87QUFBQSxTQUhQRSxNQUdPO0FBQUEsU0FGUEQsS0FFTztBQUNWLFNBQUtELFNBQUwsR0FBaUIsSUFBSUcsOENBQUosRUFBakI7QUFDQSxTQUFLRCxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtELEtBQUwsR0FBYSxFQUFiO0FBQ0g7Ozs7eUJBRVdHLEksRUFBbUI7QUFDM0IsVUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFkLENBQUosRUFBeUI7QUFDckIsWUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNKLFNBQW5CLENBQUosRUFBbUM7QUFDL0IsZUFBS0EsU0FBTCxDQUFlTyxJQUFmLENBQW9CSCxJQUFJLENBQUNKLFNBQXpCO0FBQ0g7O0FBRUQsWUFBSUssYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNJLElBQW5CLENBQUosRUFBOEI7QUFDMUIsZUFBS0EsSUFBTCxDQUFVRCxJQUFWLENBQWVILElBQUksQ0FBQ0ksSUFBcEI7QUFDSDs7QUFFRCxZQUFJSCxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0YsTUFBbkIsQ0FBSixFQUFnQztBQUM1QixlQUFLQSxNQUFMLEdBQWNFLElBQUksQ0FBQ0YsTUFBbkI7QUFDSDs7QUFFRCxZQUFJRyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0gsS0FBbkIsQ0FBSixFQUErQjtBQUMzQixlQUFLQSxLQUFMLEdBQWFHLElBQUksQ0FBQ0gsS0FBbEI7QUFDSDtBQUNKO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lTaXplfSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JU2l6ZVwiO1xuaW1wb3J0IHtQYXJ0aWNsZXNTaXplQW5pbWF0aW9ufSBmcm9tIFwiLi9QYXJ0aWNsZXNTaXplQW5pbWF0aW9uXCI7XG5pbXBvcnQge0lTaXplQW5pbWF0aW9ufSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JU2l6ZUFuaW1hdGlvblwiO1xuaW1wb3J0IHtNZXNzYWdlc30gZnJvbSBcIi4uLy4uL1V0aWxzL01lc3NhZ2VzXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vLi4vVXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFBhcnRpY2xlc1NpemUgaW1wbGVtZW50cyBJU2l6ZSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgYW5pbWF0aW9uXG4gICAgICovXG4gICAgcHVibGljIGdldCBhbmltKCk6IElTaXplQW5pbWF0aW9uIHtcbiAgICAgICAgTWVzc2FnZXMuZGVwcmVjYXRlZChcInBhcnRpY2xlcy5zaXplLmFuaW1cIiwgXCJwYXJ0aWNsZXMuc2l6ZS5hbmltYXRpb25cIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IGFuaW1hdGlvblxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgYW5pbSh2YWx1ZTogSVNpemVBbmltYXRpb24pIHtcbiAgICAgICAgTWVzc2FnZXMuZGVwcmVjYXRlZChcInBhcnRpY2xlcy5zaXplLmFuaW1cIiwgXCJwYXJ0aWNsZXMuc2l6ZS5hbmltYXRpb25cIik7XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYW5pbWF0aW9uOiBJU2l6ZUFuaW1hdGlvbjtcbiAgICBwdWJsaWMgcmFuZG9tOiBib29sZWFuO1xuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gbmV3IFBhcnRpY2xlc1NpemVBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5yYW5kb20gPSBmYWxzZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IDIwO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKGRhdGE6IElTaXplKTogdm9pZCB7XG4gICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEpKSB7XG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLmFuaW1hdGlvbikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5sb2FkKGRhdGEuYW5pbWF0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5hbmltKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5sb2FkKGRhdGEuYW5pbSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEucmFuZG9tKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmFuZG9tID0gZGF0YS5yYW5kb207XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGRhdGEudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=