"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundMask = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../../Utils/Utils");

var BackgroundMask = /*#__PURE__*/function () {
  function BackgroundMask() {
    (0, _classCallCheck2["default"])(this, BackgroundMask);
    this.cover = void 0;
    this.enable = void 0;
    this.enable = false;
  }

  (0, _createClass2["default"])(BackgroundMask, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.cover)) {
          this.cover = data.cover;
        }

        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }
      }
    }
  }]);
  return BackgroundMask;
}();

exports.BackgroundMask = BackgroundMask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvQmFja2dyb3VuZE1hc2svQmFja2dyb3VuZE1hc2sudHMiXSwibmFtZXMiOlsiQmFja2dyb3VuZE1hc2siLCJjb3ZlciIsImVuYWJsZSIsImRhdGEiLCJVdGlscyIsImhhc0RhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7SUFHYUEsYztBQUlULDRCQUFjO0FBQUE7QUFBQSxTQUhQQyxLQUdPO0FBQUEsU0FGUEMsTUFFTztBQUNWLFNBQUtBLE1BQUwsR0FBYyxLQUFkO0FBQ0g7Ozs7eUJBRVdDLEksRUFBNkI7QUFDckMsVUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFkLENBQUosRUFBeUI7QUFDckIsWUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNGLEtBQW5CLENBQUosRUFBK0I7QUFDM0IsZUFBS0EsS0FBTCxHQUFhRSxJQUFJLENBQUNGLEtBQWxCO0FBQ0g7O0FBRUQsWUFBSUcsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNELE1BQW5CLENBQUosRUFBZ0M7QUFDNUIsZUFBS0EsTUFBTCxHQUFjQyxJQUFJLENBQUNELE1BQW5CO0FBQ0g7QUFDSjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJQmFja2dyb3VuZE1hc2t9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvQmFja2dyb3VuZE1hc2svSUJhY2tncm91bmRNYXNrXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vLi4vVXRpbHMvVXRpbHNcIjtcbmltcG9ydCB7SVBhcnRpY2xlc0NvbG9yfSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JUGFydGljbGVzQ29sb3JcIjtcblxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmRNYXNrIGltcGxlbWVudHMgSUJhY2tncm91bmRNYXNrIHtcbiAgICBwdWJsaWMgY292ZXI/OiBJUGFydGljbGVzQ29sb3I7XG4gICAgcHVibGljIGVuYWJsZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVuYWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKGRhdGE6IElCYWNrZ3JvdW5kTWFzayk6IHZvaWQge1xuICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhKSkge1xuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5jb3ZlcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdmVyID0gZGF0YS5jb3ZlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5lbmFibGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGUgPSBkYXRhLmVuYWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==