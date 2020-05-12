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

var _Utils = require("../../Utils/Utils");

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

  (0, _createClass2["default"])(Opacity, [{
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
  return Opacity;
}();

exports.Opacity = Opacity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL09wYWNpdHkudHMiXSwibmFtZXMiOlsiT3BhY2l0eSIsIk1lc3NhZ2VzIiwiZGVwcmVjYXRlZCIsImFuaW1hdGlvbiIsInZhbHVlIiwicmFuZG9tIiwiT3BhY2l0eUFuaW1hdGlvbiIsImRhdGEiLCJVdGlscyIsImhhc0RhdGEiLCJsb2FkIiwiYW5pbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBOztBQUNBOztJQUVhQSxPOzs7O0FBQ1Q7Ozs7d0JBSXFDO0FBQ2pDQyx5QkFBU0MsVUFBVCxDQUFvQix3QkFBcEIsRUFBOEMsNkJBQTlDOztBQUVBLGFBQU8sS0FBS0MsU0FBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLZ0JDLEssRUFBMEI7QUFDdENILHlCQUFTQyxVQUFULENBQW9CLHdCQUFwQixFQUE4Qyw2QkFBOUM7O0FBRUEsV0FBS0MsU0FBTCxHQUFpQkMsS0FBakI7QUFDSDs7O0FBTUQscUJBQWM7QUFBQTtBQUFBLFNBSlBELFNBSU87QUFBQSxTQUhQRSxNQUdPO0FBQUEsU0FGUEQsS0FFTztBQUNWLFNBQUtELFNBQUwsR0FBaUIsSUFBSUcsa0NBQUosRUFBakI7QUFDQSxTQUFLRCxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtELEtBQUwsR0FBYSxDQUFiO0FBQ0g7Ozs7eUJBRVdHLEksRUFBc0I7QUFDOUIsVUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFkLENBQUosRUFBeUI7QUFDckIsWUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNKLFNBQW5CLENBQUosRUFBbUM7QUFDL0IsZUFBS0EsU0FBTCxDQUFlTyxJQUFmLENBQW9CSCxJQUFJLENBQUNKLFNBQXpCO0FBQ0g7O0FBRUQsWUFBSUssYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNJLElBQW5CLENBQUosRUFBOEI7QUFDMUIsZUFBS0EsSUFBTCxDQUFVRCxJQUFWLENBQWVILElBQUksQ0FBQ0ksSUFBcEI7QUFDSDs7QUFFRCxZQUFJSCxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0YsTUFBbkIsQ0FBSixFQUFnQztBQUM1QixlQUFLQSxNQUFMLEdBQWNFLElBQUksQ0FBQ0YsTUFBbkI7QUFDSDs7QUFFRCxZQUFJRyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0gsS0FBbkIsQ0FBSixFQUErQjtBQUMzQixlQUFLQSxLQUFMLEdBQWFHLElBQUksQ0FBQ0gsS0FBbEI7QUFDSDtBQUNKO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lPcGFjaXR5fSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JT3BhY2l0eVwiO1xuaW1wb3J0IHtPcGFjaXR5QW5pbWF0aW9ufSBmcm9tIFwiLi9PcGFjaXR5QW5pbWF0aW9uXCI7XG5pbXBvcnQge0lPcGFjaXR5QW5pbWF0aW9ufSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JT3BhY2l0eUFuaW1hdGlvblwiO1xuaW1wb3J0IHtNZXNzYWdlc30gZnJvbSBcIi4uLy4uL1V0aWxzL01lc3NhZ2VzXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vLi4vVXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIE9wYWNpdHkgaW1wbGVtZW50cyBJT3BhY2l0eSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgYW5pbWF0aW9uXG4gICAgICovXG4gICAgcHVibGljIGdldCBhbmltKCk6IElPcGFjaXR5QW5pbWF0aW9uIHtcbiAgICAgICAgTWVzc2FnZXMuZGVwcmVjYXRlZChcInBhcnRpY2xlcy5vcGFjaXR5LmFuaW1cIiwgXCJwYXJ0aWNsZXMub3BhY2l0eS5hbmltYXRpb25cIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IGFuaW1hdGlvblxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgYW5pbSh2YWx1ZTogSU9wYWNpdHlBbmltYXRpb24pIHtcbiAgICAgICAgTWVzc2FnZXMuZGVwcmVjYXRlZChcInBhcnRpY2xlcy5vcGFjaXR5LmFuaW1cIiwgXCJwYXJ0aWNsZXMub3BhY2l0eS5hbmltYXRpb25cIik7XG5cbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYW5pbWF0aW9uOiBJT3BhY2l0eUFuaW1hdGlvbjtcbiAgICBwdWJsaWMgcmFuZG9tOiBib29sZWFuO1xuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gbmV3IE9wYWNpdHlBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5yYW5kb20gPSBmYWxzZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IDE7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQoZGF0YTogSU9wYWNpdHkpOiB2b2lkIHtcbiAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YSkpIHtcbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuYW5pbWF0aW9uKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLmxvYWQoZGF0YS5hbmltYXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLmFuaW0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLmxvYWQoZGF0YS5hbmltKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5yYW5kb20pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yYW5kb20gPSBkYXRhLnJhbmRvbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==