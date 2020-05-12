"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Connect = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ConnectLineLinked = require("./ConnectLineLinked");

var Connect = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Connect, [{
    key: "line_linked",

    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     */
    get: function get() {
      return this.lineLinked;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     * @param value
     */
    ,
    set: function set(value) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9Db25uZWN0LnRzIl0sIm5hbWVzIjpbIkNvbm5lY3QiLCJsaW5lTGlua2VkIiwidmFsdWUiLCJkaXN0YW5jZSIsInJhZGl1cyIsIkNvbm5lY3RMaW5lTGlua2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBR2FBLE87Ozs7QUFDVDs7Ozt3QkFJNkM7QUFDekMsYUFBTyxLQUFLQyxVQUFaO0FBQ0g7QUFFRDs7Ozs7O3NCQUt1QkMsSyxFQUEyQjtBQUM5QyxXQUFLRCxVQUFMLEdBQWtCQyxLQUFsQjtBQUNIOzs7QUFNRCxxQkFBYztBQUFBO0FBQUEsU0FKUEMsUUFJTztBQUFBLFNBSFBGLFVBR087QUFBQSxTQUZQRyxNQUVPO0FBQ1YsU0FBS0QsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtGLFVBQUwsR0FBa0IsSUFBSUksb0NBQUosRUFBbEI7QUFDQSxTQUFLRCxNQUFMLEdBQWMsRUFBZDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJQ29ubmVjdH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L01vZGVzL0lDb25uZWN0XCI7XG5pbXBvcnQge0Nvbm5lY3RMaW5lTGlua2VkfSBmcm9tIFwiLi9Db25uZWN0TGluZUxpbmtlZFwiO1xuaW1wb3J0IHtJQ29ubmVjdExpbmVMaW5rZWR9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9JQ29ubmVjdExpbmVMaW5rZWRcIjtcblxuZXhwb3J0IGNsYXNzIENvbm5lY3QgaW1wbGVtZW50cyBJQ29ubmVjdCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgbGluZUxpbmtlZFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgbGluZV9saW5rZWQoKTogSUNvbm5lY3RMaW5lTGlua2VkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGluZUxpbmtlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBsaW5lTGlua2VkXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBsaW5lX2xpbmtlZCh2YWx1ZTogSUNvbm5lY3RMaW5lTGlua2VkKSB7XG4gICAgICAgIHRoaXMubGluZUxpbmtlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXN0YW5jZTogbnVtYmVyO1xuICAgIHB1YmxpYyBsaW5lTGlua2VkOiBJQ29ubmVjdExpbmVMaW5rZWQ7XG4gICAgcHVibGljIHJhZGl1czogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSA4MDtcbiAgICAgICAgdGhpcy5saW5lTGlua2VkID0gbmV3IENvbm5lY3RMaW5lTGlua2VkKCk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gNjA7XG4gICAgfVxufVxuIl19