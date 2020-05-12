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

  return Connect;
}();

exports.Connect = Connect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9Db25uZWN0LnRzIl0sIm5hbWVzIjpbIkNvbm5lY3QiLCJNZXNzYWdlcyIsImRlcHJlY2F0ZWQiLCJsaW5lTGlua2VkIiwidmFsdWUiLCJkaXN0YW5jZSIsInJhZGl1cyIsIkNvbm5lY3RMaW5lTGlua2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUE7O0lBRWFBLE87Ozs7QUFDVDs7Ozt3QkFJNkM7QUFDekNDLHlCQUFTQyxVQUFULENBQW9CLHlDQUFwQixFQUErRCx3Q0FBL0Q7O0FBRUEsYUFBTyxLQUFLQyxVQUFaO0FBQ0g7QUFFRDs7Ozs7O3NCQUt1QkMsSyxFQUEyQjtBQUM5Q0gseUJBQVNDLFVBQVQsQ0FBb0IseUNBQXBCLEVBQStELHdDQUEvRDs7QUFFQSxXQUFLQyxVQUFMLEdBQWtCQyxLQUFsQjtBQUNIOzs7QUFNRCxxQkFBYztBQUFBO0FBQUEsU0FKUEMsUUFJTztBQUFBLFNBSFBGLFVBR087QUFBQSxTQUZQRyxNQUVPO0FBQ1YsU0FBS0QsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtGLFVBQUwsR0FBa0IsSUFBSUksb0NBQUosRUFBbEI7QUFDQSxTQUFLRCxNQUFMLEdBQWMsRUFBZDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJQ29ubmVjdH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L01vZGVzL0lDb25uZWN0XCI7XG5pbXBvcnQge0Nvbm5lY3RMaW5lTGlua2VkfSBmcm9tIFwiLi9Db25uZWN0TGluZUxpbmtlZFwiO1xuaW1wb3J0IHtJQ29ubmVjdExpbmVMaW5rZWR9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9JQ29ubmVjdExpbmVMaW5rZWRcIjtcbmltcG9ydCB7TWVzc2FnZXN9IGZyb20gXCIuLi8uLi8uLi9VdGlscy9NZXNzYWdlc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29ubmVjdCBpbXBsZW1lbnRzIElDb25uZWN0IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBsaW5lTGlua2VkXG4gICAgICovXG4gICAgcHVibGljIGdldCBsaW5lX2xpbmtlZCgpOiBJQ29ubmVjdExpbmVMaW5rZWQge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwiaW50ZXJhY3Rpdml0eS5tb2Rlcy5jb25uZWN0LmxpbmVfbGlua2VkXCIsIFwiaW50ZXJhY3Rpdml0eS5tb2Rlcy5jb25uZWN0LmxpbmVMaW5rZWRcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubGluZUxpbmtlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBsaW5lTGlua2VkXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBsaW5lX2xpbmtlZCh2YWx1ZTogSUNvbm5lY3RMaW5lTGlua2VkKSB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJpbnRlcmFjdGl2aXR5Lm1vZGVzLmNvbm5lY3QubGluZV9saW5rZWRcIiwgXCJpbnRlcmFjdGl2aXR5Lm1vZGVzLmNvbm5lY3QubGluZUxpbmtlZFwiKTtcblxuICAgICAgICB0aGlzLmxpbmVMaW5rZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzdGFuY2U6IG51bWJlcjtcbiAgICBwdWJsaWMgbGluZUxpbmtlZDogSUNvbm5lY3RMaW5lTGlua2VkO1xuICAgIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRpc3RhbmNlID0gODA7XG4gICAgICAgIHRoaXMubGluZUxpbmtlZCA9IG5ldyBDb25uZWN0TGluZUxpbmtlZCgpO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IDYwO1xuICAgIH1cbn1cbiJdfQ==