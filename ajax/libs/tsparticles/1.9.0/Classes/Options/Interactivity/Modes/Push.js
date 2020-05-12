"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Push = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Messages = require("../../../Utils/Messages");

var _Utils = require("../../../Utils/Utils");

var Push = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Push, [{
    key: "particles_nb",

    /**
     *
     * @deprecated this property is obsolete, please use the new quantity
     */
    get: function get() {
      _Messages.Messages.deprecated("interactivity.modes.push.particles_nb", "interactivity.modes.push.quantity");

      return this.quantity;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new quantity
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("interactivity.modes.push.particles_nb", "interactivity.modes.push.quantity");

      this.quantity = value;
    }
  }]);

  function Push() {
    (0, _classCallCheck2["default"])(this, Push);
    this.quantity = void 0;
    this.quantity = 4;
  }

  (0, _createClass2["default"])(Push, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.quantity)) {
          this.quantity = data.quantity;
        }

        if (_Utils.Utils.hasData(data.particles_nb)) {
          this.particles_nb = data.particles_nb;
        }
      }
    }
  }]);
  return Push;
}();

exports.Push = Push;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9QdXNoLnRzIl0sIm5hbWVzIjpbIlB1c2giLCJNZXNzYWdlcyIsImRlcHJlY2F0ZWQiLCJxdWFudGl0eSIsInZhbHVlIiwiZGF0YSIsIlV0aWxzIiwiaGFzRGF0YSIsInBhcnRpY2xlc19uYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztJQUVhQSxJOzs7O0FBQ1Q7Ozs7d0JBSWtDO0FBQzlCQyx5QkFBU0MsVUFBVCxDQUFvQix1Q0FBcEIsRUFBNkQsbUNBQTdEOztBQUVBLGFBQU8sS0FBS0MsUUFBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLd0JDLEssRUFBZTtBQUNuQ0gseUJBQVNDLFVBQVQsQ0FBb0IsdUNBQXBCLEVBQTZELG1DQUE3RDs7QUFFQSxXQUFLQyxRQUFMLEdBQWdCQyxLQUFoQjtBQUNIOzs7QUFJRCxrQkFBYztBQUFBO0FBQUEsU0FGUEQsUUFFTztBQUNWLFNBQUtBLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDSDs7Ozt5QkFFV0UsSSxFQUFtQjtBQUMzQixVQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF5QjtBQUNyQixZQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0YsUUFBbkIsQ0FBSixFQUFrQztBQUM5QixlQUFLQSxRQUFMLEdBQWdCRSxJQUFJLENBQUNGLFFBQXJCO0FBQ0g7O0FBRUQsWUFBSUcsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNHLFlBQW5CLENBQUosRUFBc0M7QUFDbEMsZUFBS0EsWUFBTCxHQUFvQkgsSUFBSSxDQUFDRyxZQUF6QjtBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVB1c2h9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9JUHVzaFwiO1xuaW1wb3J0IHtNZXNzYWdlc30gZnJvbSBcIi4uLy4uLy4uL1V0aWxzL01lc3NhZ2VzXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vLi4vLi4vVXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFB1c2ggaW1wbGVtZW50cyBJUHVzaCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgcXVhbnRpdHlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHBhcnRpY2xlc19uYigpOiBudW1iZXIge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwiaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYlwiLCBcImludGVyYWN0aXZpdHkubW9kZXMucHVzaC5xdWFudGl0eVwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5xdWFudGl0eTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBxdWFudGl0eVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgcGFydGljbGVzX25iKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgTWVzc2FnZXMuZGVwcmVjYXRlZChcImludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmJcIiwgXCJpbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucXVhbnRpdHlcIik7XG5cbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBxdWFudGl0eTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSA0O1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKGRhdGE6IElQdXNoKTogdm9pZCB7XG4gICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEpKSB7XG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLnF1YW50aXR5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMucXVhbnRpdHkgPSBkYXRhLnF1YW50aXR5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLnBhcnRpY2xlc19uYikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnRpY2xlc19uYiA9IGRhdGEucGFydGljbGVzX25iO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19