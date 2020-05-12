"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Remove = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Messages = require("../../../Utils/Messages");

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

  return Remove;
}();

exports.Remove = Remove;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9SZW1vdmUudHMiXSwibmFtZXMiOlsiUmVtb3ZlIiwiTWVzc2FnZXMiLCJkZXByZWNhdGVkIiwicXVhbnRpdHkiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztJQUVhQSxNOzs7O0FBQ1Q7Ozs7d0JBSWtDO0FBQzlCQyx5QkFBU0MsVUFBVCxDQUFvQix5Q0FBcEIsRUFBK0QscUNBQS9EOztBQUVBLGFBQU8sS0FBS0MsUUFBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLd0JDLEssRUFBZTtBQUNuQ0gseUJBQVNDLFVBQVQsQ0FBb0IseUNBQXBCLEVBQStELHFDQUEvRDs7QUFFQSxXQUFLQyxRQUFMLEdBQWdCQyxLQUFoQjtBQUNIOzs7QUFJRCxvQkFBYztBQUFBO0FBQUEsU0FGUEQsUUFFTztBQUNWLFNBQUtBLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVJlbW92ZX0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L01vZGVzL0lSZW1vdmVcIjtcbmltcG9ydCB7TWVzc2FnZXN9IGZyb20gXCIuLi8uLi8uLi9VdGlscy9NZXNzYWdlc1wiO1xuXG5leHBvcnQgY2xhc3MgUmVtb3ZlIGltcGxlbWVudHMgSVJlbW92ZSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgcXVhbnRpdHlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHBhcnRpY2xlc19uYigpOiBudW1iZXIge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwiaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZW1vdmUucGFydGljbGVzX25iXCIsIFwiaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZW1vdmUucXVhbnRpdHlcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucXVhbnRpdHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgcXVhbnRpdHlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHBhcnRpY2xlc19uYih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJpbnRlcmFjdGl2aXR5Lm1vZGVzLnJlbW92ZS5wYXJ0aWNsZXNfbmJcIiwgXCJpbnRlcmFjdGl2aXR5Lm1vZGVzLnJlbW92ZS5xdWFudGl0eVwiKTtcblxuICAgICAgICB0aGlzLnF1YW50aXR5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIHF1YW50aXR5OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IDI7XG4gICAgfVxufVxuIl19