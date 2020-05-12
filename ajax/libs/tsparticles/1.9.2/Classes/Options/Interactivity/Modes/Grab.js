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

var _Utils = require("../../../Utils/Utils");

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

  (0, _createClass2["default"])(Grab, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.distance)) {
          this.distance = data.distance;
        }

        if (_Utils.Utils.hasData(data.lineLinked)) {
          this.lineLinked.load(data.lineLinked);
        }

        if (_Utils.Utils.hasData(data.line_linked)) {
          this.line_linked.load(data.line_linked);
        }
      }
    }
  }]);
  return Grab;
}();

exports.Grab = Grab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9HcmFiLnRzIl0sIm5hbWVzIjpbIkdyYWIiLCJNZXNzYWdlcyIsImRlcHJlY2F0ZWQiLCJsaW5lTGlua2VkIiwidmFsdWUiLCJkaXN0YW5jZSIsIkdyYWJMaW5lTGlua2VkIiwiZGF0YSIsIlV0aWxzIiwiaGFzRGF0YSIsImxvYWQiLCJsaW5lX2xpbmtlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztJQUVhQSxJOzs7O0FBQ1Q7Ozs7d0JBSTBDO0FBQ3RDQyx5QkFBU0MsVUFBVCxDQUFvQixzQ0FBcEIsRUFBNEQscUNBQTVEOztBQUVBLGFBQU8sS0FBS0MsVUFBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLdUJDLEssRUFBd0I7QUFDM0NILHlCQUFTQyxVQUFULENBQW9CLHNDQUFwQixFQUE0RCxxQ0FBNUQ7O0FBRUEsV0FBS0MsVUFBTCxHQUFrQkMsS0FBbEI7QUFDSDs7O0FBS0Qsa0JBQWM7QUFBQTtBQUFBLFNBSFBDLFFBR087QUFBQSxTQUZQRixVQUVPO0FBQ1YsU0FBS0UsUUFBTCxHQUFnQixHQUFoQjtBQUNBLFNBQUtGLFVBQUwsR0FBa0IsSUFBSUcsOEJBQUosRUFBbEI7QUFDSDs7Ozt5QkFFV0MsSSxFQUFtQjtBQUMzQixVQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF5QjtBQUNyQixZQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0YsUUFBbkIsQ0FBSixFQUFrQztBQUM5QixlQUFLQSxRQUFMLEdBQWdCRSxJQUFJLENBQUNGLFFBQXJCO0FBQ0g7O0FBRUQsWUFBSUcsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNKLFVBQW5CLENBQUosRUFBb0M7QUFDaEMsZUFBS0EsVUFBTCxDQUFnQk8sSUFBaEIsQ0FBcUJILElBQUksQ0FBQ0osVUFBMUI7QUFDSDs7QUFFRCxZQUFJSyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0ksV0FBbkIsQ0FBSixFQUFxQztBQUNqQyxlQUFLQSxXQUFMLENBQWlCRCxJQUFqQixDQUFzQkgsSUFBSSxDQUFDSSxXQUEzQjtBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUdyYWJ9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9JR3JhYlwiO1xuaW1wb3J0IHtJR3JhYkxpbmVMaW5rZWR9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9JR3JhYkxpbmVMaW5rZWRcIjtcbmltcG9ydCB7R3JhYkxpbmVMaW5rZWR9IGZyb20gXCIuL0dyYWJMaW5lTGlua2VkXCI7XG5pbXBvcnQge01lc3NhZ2VzfSBmcm9tIFwiLi4vLi4vLi4vVXRpbHMvTWVzc2FnZXNcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi8uLi8uLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgR3JhYiBpbXBsZW1lbnRzIElHcmFiIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBsaW5lTGlua2VkXG4gICAgICovXG4gICAgcHVibGljIGdldCBsaW5lX2xpbmtlZCgpOiBJR3JhYkxpbmVMaW5rZWQge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwiaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVfbGlua2VkXCIsIFwiaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVMaW5rZWRcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubGluZUxpbmtlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBsaW5lTGlua2VkXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBsaW5lX2xpbmtlZCh2YWx1ZTogSUdyYWJMaW5lTGlua2VkKSB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJpbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIubGluZV9saW5rZWRcIiwgXCJpbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIubGluZUxpbmtlZFwiKTtcblxuICAgICAgICB0aGlzLmxpbmVMaW5rZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzdGFuY2U6IG51bWJlcjtcbiAgICBwdWJsaWMgbGluZUxpbmtlZDogSUdyYWJMaW5lTGlua2VkO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSAxMDA7XG4gICAgICAgIHRoaXMubGluZUxpbmtlZCA9IG5ldyBHcmFiTGluZUxpbmtlZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKGRhdGE6IElHcmFiKTogdm9pZCB7XG4gICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEpKSB7XG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLmRpc3RhbmNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSBkYXRhLmRpc3RhbmNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLmxpbmVMaW5rZWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saW5lTGlua2VkLmxvYWQoZGF0YS5saW5lTGlua2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5saW5lX2xpbmtlZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVfbGlua2VkLmxvYWQoZGF0YS5saW5lX2xpbmtlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=