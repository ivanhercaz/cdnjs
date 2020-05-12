"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grab = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _GrabLineLinked = require("./GrabLineLinked");

var _Messages = require("../../../Utils/Messages");

var Grab = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Grab, [{
    key: "line_linked",

    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     */
    get: function get() {
      _Messages.Messages.deprecated("interactivity.modes.grab.line_linked", "interactivity.modes.grab.lineLinked");

      return this.lineLinked;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("interactivity.modes.grab.line_linked", "interactivity.modes.grab.lineLinked");

      this.lineLinked = value;
    }
  }]);

  function Grab() {
    (0, _classCallCheck2["default"])(this, Grab);
    this.distance = void 0;
    this.lineLinked = void 0;
    this.distance = 100;
    this.lineLinked = new _GrabLineLinked.GrabLineLinked();
  }

  return Grab;
}();

exports.Grab = Grab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9HcmFiLnRzIl0sIm5hbWVzIjpbIkdyYWIiLCJNZXNzYWdlcyIsImRlcHJlY2F0ZWQiLCJsaW5lTGlua2VkIiwidmFsdWUiLCJkaXN0YW5jZSIsIkdyYWJMaW5lTGlua2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0lBRWFBLEk7Ozs7QUFDVDs7Ozt3QkFJMEM7QUFDdENDLHlCQUFTQyxVQUFULENBQW9CLHNDQUFwQixFQUE0RCxxQ0FBNUQ7O0FBRUEsYUFBTyxLQUFLQyxVQUFaO0FBQ0g7QUFFRDs7Ozs7O3NCQUt1QkMsSyxFQUF3QjtBQUMzQ0gseUJBQVNDLFVBQVQsQ0FBb0Isc0NBQXBCLEVBQTRELHFDQUE1RDs7QUFFQSxXQUFLQyxVQUFMLEdBQWtCQyxLQUFsQjtBQUNIOzs7QUFLRCxrQkFBYztBQUFBO0FBQUEsU0FIUEMsUUFHTztBQUFBLFNBRlBGLFVBRU87QUFDVixTQUFLRSxRQUFMLEdBQWdCLEdBQWhCO0FBQ0EsU0FBS0YsVUFBTCxHQUFrQixJQUFJRyw4QkFBSixFQUFsQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJR3JhYn0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L01vZGVzL0lHcmFiXCI7XG5pbXBvcnQge0lHcmFiTGluZUxpbmtlZH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L01vZGVzL0lHcmFiTGluZUxpbmtlZFwiO1xuaW1wb3J0IHtHcmFiTGluZUxpbmtlZH0gZnJvbSBcIi4vR3JhYkxpbmVMaW5rZWRcIjtcbmltcG9ydCB7TWVzc2FnZXN9IGZyb20gXCIuLi8uLi8uLi9VdGlscy9NZXNzYWdlc1wiO1xuXG5leHBvcnQgY2xhc3MgR3JhYiBpbXBsZW1lbnRzIElHcmFiIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBsaW5lTGlua2VkXG4gICAgICovXG4gICAgcHVibGljIGdldCBsaW5lX2xpbmtlZCgpOiBJR3JhYkxpbmVMaW5rZWQge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwiaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVfbGlua2VkXCIsIFwiaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVMaW5rZWRcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubGluZUxpbmtlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBsaW5lTGlua2VkXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBsaW5lX2xpbmtlZCh2YWx1ZTogSUdyYWJMaW5lTGlua2VkKSB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJpbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIubGluZV9saW5rZWRcIiwgXCJpbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIubGluZUxpbmtlZFwiKTtcblxuICAgICAgICB0aGlzLmxpbmVMaW5rZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzdGFuY2U6IG51bWJlcjtcbiAgICBwdWJsaWMgbGluZUxpbmtlZDogSUdyYWJMaW5lTGlua2VkO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSAxMDA7XG4gICAgICAgIHRoaXMubGluZUxpbmtlZCA9IG5ldyBHcmFiTGluZUxpbmtlZCgpO1xuICAgIH1cbn1cbiJdfQ==