"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Remove = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Messages = require("../../../Utils/Messages");

var _Utils = require("../../../Utils/Utils");

var Remove = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Remove, [{
    key: "particles_nb",

    /**
     *
     * @deprecated this property is obsolete, please use the new quantity
     */
    get: function get() {
      _Messages.Messages.deprecated("interactivity.modes.remove.particles_nb", "interactivity.modes.remove.quantity");

      return this.quantity;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new quantity
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("interactivity.modes.remove.particles_nb", "interactivity.modes.remove.quantity");

      this.quantity = value;
    }
  }]);

  function Remove() {
    (0, _classCallCheck2["default"])(this, Remove);
    this.quantity = void 0;
    this.quantity = 2;
  }

  (0, _createClass2["default"])(Remove, [{
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
  return Remove;
}();

exports.Remove = Remove;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9SZW1vdmUudHMiXSwibmFtZXMiOlsiUmVtb3ZlIiwiTWVzc2FnZXMiLCJkZXByZWNhdGVkIiwicXVhbnRpdHkiLCJ2YWx1ZSIsImRhdGEiLCJVdGlscyIsImhhc0RhdGEiLCJwYXJ0aWNsZXNfbmIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7SUFFYUEsTTs7OztBQUNUOzs7O3dCQUlrQztBQUM5QkMseUJBQVNDLFVBQVQsQ0FBb0IseUNBQXBCLEVBQStELHFDQUEvRDs7QUFFQSxhQUFPLEtBQUtDLFFBQVo7QUFDSDtBQUVEOzs7Ozs7c0JBS3dCQyxLLEVBQWU7QUFDbkNILHlCQUFTQyxVQUFULENBQW9CLHlDQUFwQixFQUErRCxxQ0FBL0Q7O0FBRUEsV0FBS0MsUUFBTCxHQUFnQkMsS0FBaEI7QUFDSDs7O0FBSUQsb0JBQWM7QUFBQTtBQUFBLFNBRlBELFFBRU87QUFDVixTQUFLQSxRQUFMLEdBQWdCLENBQWhCO0FBQ0g7Ozs7eUJBRVdFLEksRUFBcUI7QUFDN0IsVUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFkLENBQUosRUFBeUI7QUFDckIsWUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNGLFFBQW5CLENBQUosRUFBa0M7QUFDOUIsZUFBS0EsUUFBTCxHQUFnQkUsSUFBSSxDQUFDRixRQUFyQjtBQUNIOztBQUVELFlBQUlHLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDRyxZQUFuQixDQUFKLEVBQXNDO0FBQ2xDLGVBQUtBLFlBQUwsR0FBb0JILElBQUksQ0FBQ0csWUFBekI7QUFDSDtBQUNKO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lSZW1vdmV9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9JUmVtb3ZlXCI7XG5pbXBvcnQge01lc3NhZ2VzfSBmcm9tIFwiLi4vLi4vLi4vVXRpbHMvTWVzc2FnZXNcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi8uLi8uLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgUmVtb3ZlIGltcGxlbWVudHMgSVJlbW92ZSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgcXVhbnRpdHlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHBhcnRpY2xlc19uYigpOiBudW1iZXIge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwiaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZW1vdmUucGFydGljbGVzX25iXCIsIFwiaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZW1vdmUucXVhbnRpdHlcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucXVhbnRpdHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgcXVhbnRpdHlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHBhcnRpY2xlc19uYih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJpbnRlcmFjdGl2aXR5Lm1vZGVzLnJlbW92ZS5wYXJ0aWNsZXNfbmJcIiwgXCJpbnRlcmFjdGl2aXR5Lm1vZGVzLnJlbW92ZS5xdWFudGl0eVwiKTtcblxuICAgICAgICB0aGlzLnF1YW50aXR5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHF1YW50aXR5OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IDI7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQoZGF0YTogSVJlbW92ZSk6IHZvaWQge1xuICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhKSkge1xuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5xdWFudGl0eSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1YW50aXR5ID0gZGF0YS5xdWFudGl0eTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5wYXJ0aWNsZXNfbmIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXNfbmIgPSBkYXRhLnBhcnRpY2xlc19uYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==