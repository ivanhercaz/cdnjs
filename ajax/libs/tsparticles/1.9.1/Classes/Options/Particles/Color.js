"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Color = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../../Utils/Utils");

var Color = /*#__PURE__*/function () {
  function Color() {
    (0, _classCallCheck2["default"])(this, Color);
    this.value = void 0;
    this.value = "#fff";
  }

  (0, _createClass2["default"])(Color, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.value)) {
          this.value = data.value;
        }
      }
    }
  }]);
  return Color;
}();

exports.Color = Color;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL0NvbG9yLnRzIl0sIm5hbWVzIjpbIkNvbG9yIiwidmFsdWUiLCJkYXRhIiwiVXRpbHMiLCJoYXNEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRWFBLEs7QUFHVCxtQkFBYztBQUFBO0FBQUEsU0FGUEMsS0FFTztBQUNWLFNBQUtBLEtBQUwsR0FBYSxNQUFiO0FBQ0g7Ozs7eUJBRVdDLEksRUFBNkI7QUFDckMsVUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFkLENBQUosRUFBeUI7QUFDckIsWUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNELEtBQW5CLENBQUosRUFBK0I7QUFDM0IsZUFBS0EsS0FBTCxHQUFhQyxJQUFJLENBQUNELEtBQWxCO0FBQ0g7QUFDSjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUGFydGljbGVzQ29sb3J9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lQYXJ0aWNsZXNDb2xvclwiO1xuaW1wb3J0IHtJQ29sb3J9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL0lDb2xvclwiO1xuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4uLy4uL1V0aWxzL1V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBDb2xvciBpbXBsZW1lbnRzIElQYXJ0aWNsZXNDb2xvciB7XG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmcgfCBJQ29sb3IgfCBzdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gXCIjZmZmXCI7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQoZGF0YTogSVBhcnRpY2xlc0NvbG9yKTogdm9pZCB7XG4gICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEpKSB7XG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19