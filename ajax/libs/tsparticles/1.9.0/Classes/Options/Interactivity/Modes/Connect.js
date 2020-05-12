"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Connect = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ConnectLineLinked = require("./ConnectLineLinked");

var _Messages = require("../../../Utils/Messages");

var _Utils = require("../../../Utils/Utils");

var Connect = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Connect, [{
    key: "line_linked",

    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     */
    get: function get() {
      _Messages.Messages.deprecated("interactivity.modes.connect.line_linked", "interactivity.modes.connect.lineLinked");

      return this.lineLinked;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("interactivity.modes.connect.line_linked", "interactivity.modes.connect.lineLinked");

      this.lineLinked = value;
    }
  }]);

  function Connect() {
    (0, _classCallCheck2["default"])(this, Connect);
    this.distance = void 0;
    this.lineLinked = void 0;
    this.radius = void 0;
    this.distance = 80;
    this.lineLinked = new _ConnectLineLinked.ConnectLineLinked();
    this.radius = 60;
  }

  (0, _createClass2["default"])(Connect, [{
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

        if (_Utils.Utils.hasData(data.radius)) {
          this.radius = data.radius;
        }
      }
    }
  }]);
  return Connect;
}();

exports.Connect = Connect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9Db25uZWN0LnRzIl0sIm5hbWVzIjpbIkNvbm5lY3QiLCJNZXNzYWdlcyIsImRlcHJlY2F0ZWQiLCJsaW5lTGlua2VkIiwidmFsdWUiLCJkaXN0YW5jZSIsInJhZGl1cyIsIkNvbm5lY3RMaW5lTGlua2VkIiwiZGF0YSIsIlV0aWxzIiwiaGFzRGF0YSIsImxvYWQiLCJsaW5lX2xpbmtlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBOztBQUNBOztJQUVhQSxPOzs7O0FBQ1Q7Ozs7d0JBSTZDO0FBQ3pDQyx5QkFBU0MsVUFBVCxDQUFvQix5Q0FBcEIsRUFBK0Qsd0NBQS9EOztBQUVBLGFBQU8sS0FBS0MsVUFBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLdUJDLEssRUFBMkI7QUFDOUNILHlCQUFTQyxVQUFULENBQW9CLHlDQUFwQixFQUErRCx3Q0FBL0Q7O0FBRUEsV0FBS0MsVUFBTCxHQUFrQkMsS0FBbEI7QUFDSDs7O0FBTUQscUJBQWM7QUFBQTtBQUFBLFNBSlBDLFFBSU87QUFBQSxTQUhQRixVQUdPO0FBQUEsU0FGUEcsTUFFTztBQUNWLFNBQUtELFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLRixVQUFMLEdBQWtCLElBQUlJLG9DQUFKLEVBQWxCO0FBQ0EsU0FBS0QsTUFBTCxHQUFjLEVBQWQ7QUFDSDs7Ozt5QkFFV0UsSSxFQUFzQjtBQUM5QixVQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF5QjtBQUNyQixZQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0gsUUFBbkIsQ0FBSixFQUFrQztBQUM5QixlQUFLQSxRQUFMLEdBQWdCRyxJQUFJLENBQUNILFFBQXJCO0FBQ0g7O0FBRUQsWUFBSUksYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNMLFVBQW5CLENBQUosRUFBb0M7QUFDaEMsZUFBS0EsVUFBTCxDQUFnQlEsSUFBaEIsQ0FBcUJILElBQUksQ0FBQ0wsVUFBMUI7QUFDSDs7QUFFRCxZQUFJTSxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0ksV0FBbkIsQ0FBSixFQUFxQztBQUNqQyxlQUFLQSxXQUFMLENBQWlCRCxJQUFqQixDQUFzQkgsSUFBSSxDQUFDSSxXQUEzQjtBQUNIOztBQUVELFlBQUlILGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDRixNQUFuQixDQUFKLEVBQWdDO0FBQzVCLGVBQUtBLE1BQUwsR0FBY0UsSUFBSSxDQUFDRixNQUFuQjtBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUNvbm5lY3R9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9JQ29ubmVjdFwiO1xuaW1wb3J0IHtDb25uZWN0TGluZUxpbmtlZH0gZnJvbSBcIi4vQ29ubmVjdExpbmVMaW5rZWRcIjtcbmltcG9ydCB7SUNvbm5lY3RMaW5lTGlua2VkfSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL0ludGVyYWN0aXZpdHkvTW9kZXMvSUNvbm5lY3RMaW5lTGlua2VkXCI7XG5pbXBvcnQge01lc3NhZ2VzfSBmcm9tIFwiLi4vLi4vLi4vVXRpbHMvTWVzc2FnZXNcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi8uLi8uLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29ubmVjdCBpbXBsZW1lbnRzIElDb25uZWN0IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBsaW5lTGlua2VkXG4gICAgICovXG4gICAgcHVibGljIGdldCBsaW5lX2xpbmtlZCgpOiBJQ29ubmVjdExpbmVMaW5rZWQge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwiaW50ZXJhY3Rpdml0eS5tb2Rlcy5jb25uZWN0LmxpbmVfbGlua2VkXCIsIFwiaW50ZXJhY3Rpdml0eS5tb2Rlcy5jb25uZWN0LmxpbmVMaW5rZWRcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubGluZUxpbmtlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBsaW5lTGlua2VkXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBsaW5lX2xpbmtlZCh2YWx1ZTogSUNvbm5lY3RMaW5lTGlua2VkKSB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJpbnRlcmFjdGl2aXR5Lm1vZGVzLmNvbm5lY3QubGluZV9saW5rZWRcIiwgXCJpbnRlcmFjdGl2aXR5Lm1vZGVzLmNvbm5lY3QubGluZUxpbmtlZFwiKTtcblxuICAgICAgICB0aGlzLmxpbmVMaW5rZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzdGFuY2U6IG51bWJlcjtcbiAgICBwdWJsaWMgbGluZUxpbmtlZDogSUNvbm5lY3RMaW5lTGlua2VkO1xuICAgIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRpc3RhbmNlID0gODA7XG4gICAgICAgIHRoaXMubGluZUxpbmtlZCA9IG5ldyBDb25uZWN0TGluZUxpbmtlZCgpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IDYwO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKGRhdGE6IElDb25uZWN0KTogdm9pZCB7XG4gICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEpKSB7XG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLmRpc3RhbmNlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSBkYXRhLmRpc3RhbmNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLmxpbmVMaW5rZWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saW5lTGlua2VkLmxvYWQoZGF0YS5saW5lTGlua2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5saW5lX2xpbmtlZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVfbGlua2VkLmxvYWQoZGF0YS5saW5lX2xpbmtlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEucmFkaXVzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmFkaXVzID0gZGF0YS5yYWRpdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=