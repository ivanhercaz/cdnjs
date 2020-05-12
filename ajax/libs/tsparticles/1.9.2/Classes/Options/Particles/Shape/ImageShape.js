"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageShape = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Messages = require("../../../Utils/Messages");

var _Utils = require("../../../Utils/Utils");

var ImageShape = /*#__PURE__*/function () {
  (0, _createClass2["default"])(ImageShape, [{
    key: "replace_color",

    /**
     *
     * @deprecated this property is obsolete, please use the new replaceColor
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.shape.image.replace_color", "particles.shape.image.replaceColor");

      return this.replaceColor;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new replaceColor
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.shape.image.replace_color", "particles.shape.image.replaceColor");

      this.replaceColor = value;
    }
  }]);

  function ImageShape() {
    (0, _classCallCheck2["default"])(this, ImageShape);
    this.height = void 0;
    this.replaceColor = void 0;
    this.src = void 0;
    this.width = void 0;
    this.height = 100;
    this.replaceColor = true;
    this.src = "";
    this.width = 100;
  }

  (0, _createClass2["default"])(ImageShape, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.height)) {
          this.height = data.height;
        }

        if (_Utils.Utils.hasData(data.replaceColor)) {
          this.replaceColor = data.replaceColor;
        }

        if (_Utils.Utils.hasData(data.replace_color)) {
          this.replace_color = data.replace_color;
        }

        if (_Utils.Utils.hasData(data.src)) {
          this.src = data.src;
        }

        if (_Utils.Utils.hasData(data.width)) {
          this.width = data.width;
        }
      }
    }
  }]);
  return ImageShape;
}();

exports.ImageShape = ImageShape;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1NoYXBlL0ltYWdlU2hhcGUudHMiXSwibmFtZXMiOlsiSW1hZ2VTaGFwZSIsIk1lc3NhZ2VzIiwiZGVwcmVjYXRlZCIsInJlcGxhY2VDb2xvciIsInZhbHVlIiwiaGVpZ2h0Iiwic3JjIiwid2lkdGgiLCJkYXRhIiwiVXRpbHMiLCJoYXNEYXRhIiwicmVwbGFjZV9jb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztJQUVhQSxVOzs7O0FBQ1Q7Ozs7d0JBSW9DO0FBQ2hDQyx5QkFBU0MsVUFBVCxDQUFvQixxQ0FBcEIsRUFBMkQsb0NBQTNEOztBQUVBLGFBQU8sS0FBS0MsWUFBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLeUJDLEssRUFBZ0I7QUFDckNILHlCQUFTQyxVQUFULENBQW9CLHFDQUFwQixFQUEyRCxvQ0FBM0Q7O0FBRUEsV0FBS0MsWUFBTCxHQUFvQkMsS0FBcEI7QUFDSDs7O0FBT0Qsd0JBQWM7QUFBQTtBQUFBLFNBTFBDLE1BS087QUFBQSxTQUpQRixZQUlPO0FBQUEsU0FIUEcsR0FHTztBQUFBLFNBRlBDLEtBRU87QUFDVixTQUFLRixNQUFMLEdBQWMsR0FBZDtBQUNBLFNBQUtGLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxTQUFLRyxHQUFMLEdBQVcsRUFBWDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxHQUFiO0FBQ0g7Ozs7eUJBRVdDLEksRUFBeUI7QUFDakMsVUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFkLENBQUosRUFBeUI7QUFDckIsWUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNILE1BQW5CLENBQUosRUFBZ0M7QUFDNUIsZUFBS0EsTUFBTCxHQUFjRyxJQUFJLENBQUNILE1BQW5CO0FBQ0g7O0FBRUQsWUFBSUksYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNMLFlBQW5CLENBQUosRUFBc0M7QUFDbEMsZUFBS0EsWUFBTCxHQUFvQkssSUFBSSxDQUFDTCxZQUF6QjtBQUNIOztBQUVELFlBQUlNLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDRyxhQUFuQixDQUFKLEVBQXVDO0FBQ25DLGVBQUtBLGFBQUwsR0FBcUJILElBQUksQ0FBQ0csYUFBMUI7QUFDSDs7QUFFRCxZQUFJRixhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0YsR0FBbkIsQ0FBSixFQUE2QjtBQUN6QixlQUFLQSxHQUFMLEdBQVdFLElBQUksQ0FBQ0YsR0FBaEI7QUFDSDs7QUFFRCxZQUFJRyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0QsS0FBbkIsQ0FBSixFQUErQjtBQUMzQixlQUFLQSxLQUFMLEdBQWFDLElBQUksQ0FBQ0QsS0FBbEI7QUFDSDtBQUNKO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lJbWFnZVNoYXBlfSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9TaGFwZS9JSW1hZ2VTaGFwZVwiO1xuaW1wb3J0IHtNZXNzYWdlc30gZnJvbSBcIi4uLy4uLy4uL1V0aWxzL01lc3NhZ2VzXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vLi4vLi4vVXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEltYWdlU2hhcGUgaW1wbGVtZW50cyBJSW1hZ2VTaGFwZSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgcmVwbGFjZUNvbG9yXG4gICAgICovXG4gICAgcHVibGljIGdldCByZXBsYWNlX2NvbG9yKCk6IGJvb2xlYW4ge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwicGFydGljbGVzLnNoYXBlLmltYWdlLnJlcGxhY2VfY29sb3JcIiwgXCJwYXJ0aWNsZXMuc2hhcGUuaW1hZ2UucmVwbGFjZUNvbG9yXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2VDb2xvcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyByZXBsYWNlQ29sb3JcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHJlcGxhY2VfY29sb3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgTWVzc2FnZXMuZGVwcmVjYXRlZChcInBhcnRpY2xlcy5zaGFwZS5pbWFnZS5yZXBsYWNlX2NvbG9yXCIsIFwicGFydGljbGVzLnNoYXBlLmltYWdlLnJlcGxhY2VDb2xvclwiKTtcblxuICAgICAgICB0aGlzLnJlcGxhY2VDb2xvciA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcbiAgICBwdWJsaWMgcmVwbGFjZUNvbG9yOiBib29sZWFuO1xuICAgIHB1YmxpYyBzcmM6IHN0cmluZztcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlaWdodCA9IDEwMDtcbiAgICAgICAgdGhpcy5yZXBsYWNlQ29sb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLnNyYyA9IFwiXCI7XG4gICAgICAgIHRoaXMud2lkdGggPSAxMDA7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQoZGF0YTogSUltYWdlU2hhcGUpOiB2b2lkIHtcbiAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YSkpIHtcbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuaGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEucmVwbGFjZUNvbG9yKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZUNvbG9yID0gZGF0YS5yZXBsYWNlQ29sb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEucmVwbGFjZV9jb2xvcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcGxhY2VfY29sb3IgPSBkYXRhLnJlcGxhY2VfY29sb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuc3JjKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3JjID0gZGF0YS5zcmM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEud2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IGRhdGEud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=