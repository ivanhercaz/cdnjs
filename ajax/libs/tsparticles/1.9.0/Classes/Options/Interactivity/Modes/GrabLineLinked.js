"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrabLineLinked = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../../../Utils/Utils");

var GrabLineLinked = /*#__PURE__*/function () {
  function GrabLineLinked() {
    (0, _classCallCheck2["default"])(this, GrabLineLinked);
    this.opacity = void 0;
    this.opacity = 1;
  }

  (0, _createClass2["default"])(GrabLineLinked, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.opacity)) {
          this.opacity = data.opacity;
        }
      }
    }
  }]);
  return GrabLineLinked;
}();

exports.GrabLineLinked = GrabLineLinked;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9HcmFiTGluZUxpbmtlZC50cyJdLCJuYW1lcyI6WyJHcmFiTGluZUxpbmtlZCIsIm9wYWNpdHkiLCJkYXRhIiwiVXRpbHMiLCJoYXNEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRWFBLGM7QUFHVCw0QkFBYztBQUFBO0FBQUEsU0FGUEMsT0FFTztBQUNWLFNBQUtBLE9BQUwsR0FBZSxDQUFmO0FBQ0g7Ozs7eUJBRVdDLEksRUFBNkI7QUFDckMsVUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFkLENBQUosRUFBeUI7QUFDckIsWUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNELE9BQW5CLENBQUosRUFBaUM7QUFDN0IsZUFBS0EsT0FBTCxHQUFlQyxJQUFJLENBQUNELE9BQXBCO0FBQ0g7QUFDSjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJR3JhYkxpbmVMaW5rZWR9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9JR3JhYkxpbmVMaW5rZWRcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi8uLi8uLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgR3JhYkxpbmVMaW5rZWQgaW1wbGVtZW50cyBJR3JhYkxpbmVMaW5rZWQge1xuICAgIHB1YmxpYyBvcGFjaXR5OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChkYXRhOiBJR3JhYkxpbmVMaW5rZWQpOiB2b2lkIHtcbiAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YSkpIHtcbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEub3BhY2l0eSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSBkYXRhLm9wYWNpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=