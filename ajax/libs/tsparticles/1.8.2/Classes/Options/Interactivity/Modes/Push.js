"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Push = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Messages = require("../../../Utils/Messages");

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

  return Push;
}();

exports.Push = Push;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9QdXNoLnRzIl0sIm5hbWVzIjpbIlB1c2giLCJNZXNzYWdlcyIsImRlcHJlY2F0ZWQiLCJxdWFudGl0eSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRWFBLEk7Ozs7QUFDVDs7Ozt3QkFJa0M7QUFDOUJDLHlCQUFTQyxVQUFULENBQW9CLHVDQUFwQixFQUE2RCxtQ0FBN0Q7O0FBRUEsYUFBTyxLQUFLQyxRQUFaO0FBQ0g7QUFFRDs7Ozs7O3NCQUt3QkMsSyxFQUFlO0FBQ25DSCx5QkFBU0MsVUFBVCxDQUFvQix1Q0FBcEIsRUFBNkQsbUNBQTdEOztBQUVBLFdBQUtDLFFBQUwsR0FBZ0JDLEtBQWhCO0FBQ0g7OztBQUlELGtCQUFjO0FBQUE7QUFBQSxTQUZQRCxRQUVPO0FBQ1YsU0FBS0EsUUFBTCxHQUFnQixDQUFoQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUHVzaH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L01vZGVzL0lQdXNoXCI7XG5pbXBvcnQge01lc3NhZ2VzfSBmcm9tIFwiLi4vLi4vLi4vVXRpbHMvTWVzc2FnZXNcIjtcblxuZXhwb3J0IGNsYXNzIFB1c2ggaW1wbGVtZW50cyBJUHVzaCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgcXVhbnRpdHlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHBhcnRpY2xlc19uYigpOiBudW1iZXIge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwiaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYlwiLCBcImludGVyYWN0aXZpdHkubW9kZXMucHVzaC5xdWFudGl0eVwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5xdWFudGl0eTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBxdWFudGl0eVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgcGFydGljbGVzX25iKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgTWVzc2FnZXMuZGVwcmVjYXRlZChcImludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmJcIiwgXCJpbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucXVhbnRpdHlcIik7XG5cbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBxdWFudGl0eTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSA0O1xuICAgIH1cbn1cbiJdfQ==