"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CharacterShape = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var CharacterShape = /*#__PURE__*/function () {
  function CharacterShape() {
    (0, _classCallCheck2["default"])(this, CharacterShape);
    this.fill = void 0;
    this.font = void 0;
    this.style = void 0;
    this.value = void 0;
    this.weight = void 0;
    this.fill = false;
    this.font = "Verdana";
    this.style = "";
    this.value = "*";
    this.weight = "400";
  }

  (0, _createClass2["default"])(CharacterShape, [{
    key: "load",
    value: function load(data) {
      if (data !== undefined) {
        if (data.fill !== undefined) {
          this.fill = data.fill;
        }

        if (data.font !== undefined) {
          this.font = data.font;
        }

        if (data.style !== undefined) {
          this.style = data.style;
        }

        if (data.value !== undefined) {
          this.value = data.value;
        }

        if (data.weight !== undefined) {
          this.weight = data.weight;
        }
      }
    }
  }]);
  return CharacterShape;
}();

exports.CharacterShape = CharacterShape;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1NoYXBlL0NoYXJhY3RlclNoYXBlLnRzIl0sIm5hbWVzIjpbIkNoYXJhY3RlclNoYXBlIiwiZmlsbCIsImZvbnQiLCJzdHlsZSIsInZhbHVlIiwid2VpZ2h0IiwiZGF0YSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUdhQSxjO0FBT1QsNEJBQWM7QUFBQTtBQUFBLFNBTlBDLElBTU87QUFBQSxTQUxQQyxJQUtPO0FBQUEsU0FKUEMsS0FJTztBQUFBLFNBSFBDLEtBR087QUFBQSxTQUZQQyxNQUVPO0FBQ1YsU0FBS0osSUFBTCxHQUFZLEtBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVksU0FBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEdBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNIOzs7O3lCQUVXQyxJLEVBQWdEO0FBQ3hELFVBQUlBLElBQUksS0FBS0MsU0FBYixFQUF3QjtBQUNwQixZQUFJRCxJQUFJLENBQUNMLElBQUwsS0FBY00sU0FBbEIsRUFBNkI7QUFDekIsZUFBS04sSUFBTCxHQUFZSyxJQUFJLENBQUNMLElBQWpCO0FBQ0g7O0FBRUQsWUFBSUssSUFBSSxDQUFDSixJQUFMLEtBQWNLLFNBQWxCLEVBQTZCO0FBQ3pCLGVBQUtMLElBQUwsR0FBWUksSUFBSSxDQUFDSixJQUFqQjtBQUNIOztBQUVELFlBQUlJLElBQUksQ0FBQ0gsS0FBTCxLQUFlSSxTQUFuQixFQUE4QjtBQUMxQixlQUFLSixLQUFMLEdBQWFHLElBQUksQ0FBQ0gsS0FBbEI7QUFDSDs7QUFFRCxZQUFJRyxJQUFJLENBQUNGLEtBQUwsS0FBZUcsU0FBbkIsRUFBOEI7QUFDMUIsZUFBS0gsS0FBTCxHQUFhRSxJQUFJLENBQUNGLEtBQWxCO0FBQ0g7O0FBRUQsWUFBSUUsSUFBSSxDQUFDRCxNQUFMLEtBQWdCRSxTQUFwQixFQUErQjtBQUMzQixlQUFLRixNQUFMLEdBQWNDLElBQUksQ0FBQ0QsTUFBbkI7QUFDSDtBQUNKO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lDaGFyYWN0ZXJTaGFwZX0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9QYXJ0aWNsZXMvU2hhcGUvSUNoYXJhY3RlclNoYXBlXCI7XG5pbXBvcnQge1JlY3Vyc2l2ZVBhcnRpYWx9IGZyb20gXCIuLi8uLi8uLi8uLi9UeXBlcy9SZWN1cnNpdmVQYXJ0aWFsXCI7XG5cbmV4cG9ydCBjbGFzcyBDaGFyYWN0ZXJTaGFwZSBpbXBsZW1lbnRzIElDaGFyYWN0ZXJTaGFwZSB7XG4gICAgcHVibGljIGZpbGw6IGJvb2xlYW47XG4gICAgcHVibGljIGZvbnQ6IHN0cmluZztcbiAgICBwdWJsaWMgc3R5bGU6IHN0cmluZztcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIHB1YmxpYyB3ZWlnaHQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpbGwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb250ID0gXCJWZXJkYW5hXCI7XG4gICAgICAgIHRoaXMuc3R5bGUgPSBcIlwiO1xuICAgICAgICB0aGlzLnZhbHVlID0gXCIqXCI7XG4gICAgICAgIHRoaXMud2VpZ2h0ID0gXCI0MDBcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChkYXRhPzogUmVjdXJzaXZlUGFydGlhbDxJQ2hhcmFjdGVyU2hhcGU+KTogdm9pZCB7XG4gICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsbCA9IGRhdGEuZmlsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGEuZm9udCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb250ID0gZGF0YS5mb250O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YS5zdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZSA9IGRhdGEuc3R5bGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXRhLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGEud2VpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndlaWdodCA9IGRhdGEud2VpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19