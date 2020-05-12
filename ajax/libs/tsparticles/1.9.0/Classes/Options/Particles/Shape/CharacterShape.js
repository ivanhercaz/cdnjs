"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CharacterShape = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../../../Utils/Utils");

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
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.fill)) {
          this.fill = data.fill;
        }

        if (_Utils.Utils.hasData(data.font)) {
          this.font = data.font;
        }

        if (_Utils.Utils.hasData(data.style)) {
          this.style = data.style;
        }

        if (_Utils.Utils.hasData(data.value)) {
          this.value = data.value;
        }

        if (_Utils.Utils.hasData(data.weight)) {
          this.weight = data.weight;
        }
      }
    }
  }]);
  return CharacterShape;
}();

exports.CharacterShape = CharacterShape;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1NoYXBlL0NoYXJhY3RlclNoYXBlLnRzIl0sIm5hbWVzIjpbIkNoYXJhY3RlclNoYXBlIiwiZmlsbCIsImZvbnQiLCJzdHlsZSIsInZhbHVlIiwid2VpZ2h0IiwiZGF0YSIsIlV0aWxzIiwiaGFzRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztJQUVhQSxjO0FBT1QsNEJBQWM7QUFBQTtBQUFBLFNBTlBDLElBTU87QUFBQSxTQUxQQyxJQUtPO0FBQUEsU0FKUEMsS0FJTztBQUFBLFNBSFBDLEtBR087QUFBQSxTQUZQQyxNQUVPO0FBQ1YsU0FBS0osSUFBTCxHQUFZLEtBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVksU0FBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEdBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNIOzs7O3lCQUVXQyxJLEVBQTZCO0FBQ3JDLFVBQUlDLGFBQU1DLE9BQU4sQ0FBY0YsSUFBZCxDQUFKLEVBQXlCO0FBQ3JCLFlBQUlDLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDTCxJQUFuQixDQUFKLEVBQThCO0FBQzFCLGVBQUtBLElBQUwsR0FBWUssSUFBSSxDQUFDTCxJQUFqQjtBQUNIOztBQUVELFlBQUlNLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDSixJQUFuQixDQUFKLEVBQThCO0FBQzFCLGVBQUtBLElBQUwsR0FBWUksSUFBSSxDQUFDSixJQUFqQjtBQUNIOztBQUVELFlBQUlLLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDSCxLQUFuQixDQUFKLEVBQStCO0FBQzNCLGVBQUtBLEtBQUwsR0FBYUcsSUFBSSxDQUFDSCxLQUFsQjtBQUNIOztBQUVELFlBQUlJLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDRixLQUFuQixDQUFKLEVBQStCO0FBQzNCLGVBQUtBLEtBQUwsR0FBYUUsSUFBSSxDQUFDRixLQUFsQjtBQUNIOztBQUVELFlBQUlHLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDRCxNQUFuQixDQUFKLEVBQWdDO0FBQzVCLGVBQUtBLE1BQUwsR0FBY0MsSUFBSSxDQUFDRCxNQUFuQjtBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUNoYXJhY3RlclNoYXBlfSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9TaGFwZS9JQ2hhcmFjdGVyU2hhcGVcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi8uLi8uLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyU2hhcGUgaW1wbGVtZW50cyBJQ2hhcmFjdGVyU2hhcGUge1xuICAgIHB1YmxpYyBmaWxsOiBib29sZWFuO1xuICAgIHB1YmxpYyBmb250OiBzdHJpbmc7XG4gICAgcHVibGljIHN0eWxlOiBzdHJpbmc7XG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICBwdWJsaWMgd2VpZ2h0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5maWxsID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9udCA9IFwiVmVyZGFuYVwiO1xuICAgICAgICB0aGlzLnN0eWxlID0gXCJcIjtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFwiKlwiO1xuICAgICAgICB0aGlzLndlaWdodCA9IFwiNDAwXCI7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQoZGF0YTogSUNoYXJhY3RlclNoYXBlKTogdm9pZCB7XG4gICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEpKSB7XG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLmZpbGwpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxsID0gZGF0YS5maWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLmZvbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb250ID0gZGF0YS5mb250O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLnN0eWxlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3R5bGUgPSBkYXRhLnN0eWxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLndlaWdodCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndlaWdodCA9IGRhdGEud2VpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19