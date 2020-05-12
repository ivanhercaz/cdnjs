"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClickEvent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ClickMode = require("../../../../Enums/Modes/ClickMode");

var _Utils = require("../../../Utils/Utils");

var ClickEvent = /*#__PURE__*/function () {
  function ClickEvent() {
    (0, _classCallCheck2["default"])(this, ClickEvent);
    this.enable = void 0;
    this.mode = void 0;
    this.enable = true;
    this.mode = _ClickMode.ClickMode.push;
  }

  (0, _createClass2["default"])(ClickEvent, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.mode)) {
          this.mode = data.mode;
        }
      }
    }
  }]);
  return ClickEvent;
}();

exports.ClickEvent = ClickEvent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9FdmVudHMvQ2xpY2tFdmVudC50cyJdLCJuYW1lcyI6WyJDbGlja0V2ZW50IiwiZW5hYmxlIiwibW9kZSIsIkNsaWNrTW9kZSIsInB1c2giLCJkYXRhIiwiVXRpbHMiLCJoYXNEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0lBRWFBLFU7QUFJVCx3QkFBYztBQUFBO0FBQUEsU0FIUEMsTUFHTztBQUFBLFNBRlBDLElBRU87QUFDVixTQUFLRCxNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUtDLElBQUwsR0FBWUMscUJBQVVDLElBQXRCO0FBQ0g7Ozs7eUJBRVdDLEksRUFBeUI7QUFDakMsVUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFkLENBQUosRUFBeUI7QUFDckIsWUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNKLE1BQW5CLENBQUosRUFBZ0M7QUFDNUIsZUFBS0EsTUFBTCxHQUFjSSxJQUFJLENBQUNKLE1BQW5CO0FBQ0g7O0FBRUQsWUFBSUssYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNILElBQW5CLENBQUosRUFBOEI7QUFDMUIsZUFBS0EsSUFBTCxHQUFZRyxJQUFJLENBQUNILElBQWpCO0FBQ0g7QUFDSjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJQ2xpY2tFdmVudH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L0V2ZW50cy9JQ2xpY2tFdmVudFwiO1xuaW1wb3J0IHtDbGlja01vZGV9IGZyb20gXCIuLi8uLi8uLi8uLi9FbnVtcy9Nb2Rlcy9DbGlja01vZGVcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi8uLi8uLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgQ2xpY2tFdmVudCBpbXBsZW1lbnRzIElDbGlja0V2ZW50IHtcbiAgICBwdWJsaWMgZW5hYmxlOiBib29sZWFuO1xuICAgIHB1YmxpYyBtb2RlOiBDbGlja01vZGUgfCBDbGlja01vZGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMubW9kZSA9IENsaWNrTW9kZS5wdXNoO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKGRhdGE6IElDbGlja0V2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEpKSB7XG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLmVuYWJsZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZSA9IGRhdGEuZW5hYmxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLm1vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlID0gZGF0YS5tb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19