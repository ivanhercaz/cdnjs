"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shape = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ShapeType = require("../../../../Enums/ShapeType");

var _CharacterShape = require("./CharacterShape");

var _ImageShape = require("./ImageShape");

var _PolygonShape = require("./PolygonShape");

var _Stroke = require("./Stroke");

var Shape = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Shape, [{
    key: "images",

    /**
     * @deprecated the property images is deprecated, please use the image property, it works with one and many
     */
    get: function get() {
      if (this.image instanceof Array) {
        return this.image;
      }

      return [];
    }
    /**
     * @deprecated the property images is deprecated, please use the image property, it works with one and many
     */
    ,
    set: function set(value) {
      this.image = value;
    }
  }]);

  function Shape() {
    (0, _classCallCheck2["default"])(this, Shape);
    this.character = void 0;
    this.image = void 0;
    this.polygon = void 0;
    this.stroke = void 0;
    this.type = void 0;
    this.character = new _CharacterShape.CharacterShape();
    this.image = new _ImageShape.ImageShape();
    this.polygon = new _PolygonShape.PolygonShape();
    this.stroke = new _Stroke.Stroke();
    this.type = _ShapeType.ShapeType.circle;
  }

  (0, _createClass2["default"])(Shape, [{
    key: "load",
    value: function load(data) {
      if (data !== undefined) {
        this.character.load(data.character);

        if (data.image !== undefined) {
          if (data.image instanceof Array) {
            this.image = data.image.map(function (s) {
              var tmp = new _ImageShape.ImageShape();
              tmp.load(s);
              return tmp;
            });
          } else {
            this.image = new _ImageShape.ImageShape();
            this.image.load(data.image);
          }
        }

        this.stroke.load(data.stroke);

        if (data.type !== undefined) {
          this.type = data.type;
        }
      }
    }
  }]);
  return Shape;
}();

exports.Shape = Shape;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1NoYXBlL1NoYXBlLnRzIl0sIm5hbWVzIjpbIlNoYXBlIiwiaW1hZ2UiLCJBcnJheSIsInZhbHVlIiwiY2hhcmFjdGVyIiwicG9seWdvbiIsInN0cm9rZSIsInR5cGUiLCJDaGFyYWN0ZXJTaGFwZSIsIkltYWdlU2hhcGUiLCJQb2x5Z29uU2hhcGUiLCJTdHJva2UiLCJTaGFwZVR5cGUiLCJjaXJjbGUiLCJkYXRhIiwidW5kZWZpbmVkIiwibG9hZCIsIm1hcCIsInMiLCJ0bXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFPYUEsSzs7OztBQUNUOzs7d0JBRzRCO0FBQ3hCLFVBQUksS0FBS0MsS0FBTCxZQUFzQkMsS0FBMUIsRUFBaUM7QUFDN0IsZUFBTyxLQUFLRCxLQUFaO0FBQ0g7O0FBRUQsYUFBTyxFQUFQO0FBQ0g7QUFFRDs7OztzQkFHV0UsSyxFQUFzQjtBQUM3QixXQUFLRixLQUFMLEdBQWFFLEtBQWI7QUFDSDs7O0FBUUQsbUJBQWM7QUFBQTtBQUFBLFNBTlBDLFNBTU87QUFBQSxTQUxQSCxLQUtPO0FBQUEsU0FKUEksT0FJTztBQUFBLFNBSFBDLE1BR087QUFBQSxTQUZQQyxJQUVPO0FBQ1YsU0FBS0gsU0FBTCxHQUFpQixJQUFJSSw4QkFBSixFQUFqQjtBQUNBLFNBQUtQLEtBQUwsR0FBYSxJQUFJUSxzQkFBSixFQUFiO0FBQ0EsU0FBS0osT0FBTCxHQUFlLElBQUlLLDBCQUFKLEVBQWY7QUFDQSxTQUFLSixNQUFMLEdBQWMsSUFBSUssY0FBSixFQUFkO0FBQ0EsU0FBS0osSUFBTCxHQUFZSyxxQkFBVUMsTUFBdEI7QUFDSDs7Ozt5QkFFV0MsSSxFQUF1QztBQUMvQyxVQUFJQSxJQUFJLEtBQUtDLFNBQWIsRUFBd0I7QUFDcEIsYUFBS1gsU0FBTCxDQUFlWSxJQUFmLENBQW9CRixJQUFJLENBQUNWLFNBQXpCOztBQUVBLFlBQUlVLElBQUksQ0FBQ2IsS0FBTCxLQUFlYyxTQUFuQixFQUE4QjtBQUMxQixjQUFJRCxJQUFJLENBQUNiLEtBQUwsWUFBc0JDLEtBQTFCLEVBQWlDO0FBQzdCLGlCQUFLRCxLQUFMLEdBQWFhLElBQUksQ0FBQ2IsS0FBTCxDQUFXZ0IsR0FBWCxDQUFlLFVBQUNDLENBQUQsRUFBTztBQUMvQixrQkFBTUMsR0FBRyxHQUFHLElBQUlWLHNCQUFKLEVBQVo7QUFFQVUsY0FBQUEsR0FBRyxDQUFDSCxJQUFKLENBQVNFLENBQVQ7QUFFQSxxQkFBT0MsR0FBUDtBQUNILGFBTlksQ0FBYjtBQU9ILFdBUkQsTUFRTztBQUNILGlCQUFLbEIsS0FBTCxHQUFhLElBQUlRLHNCQUFKLEVBQWI7QUFDQSxpQkFBS1IsS0FBTCxDQUFXZSxJQUFYLENBQWdCRixJQUFJLENBQUNiLEtBQXJCO0FBQ0g7QUFDSjs7QUFFRCxhQUFLSyxNQUFMLENBQVlVLElBQVosQ0FBaUJGLElBQUksQ0FBQ1IsTUFBdEI7O0FBRUEsWUFBSVEsSUFBSSxDQUFDUCxJQUFMLEtBQWNRLFNBQWxCLEVBQTZCO0FBQ3pCLGVBQUtSLElBQUwsR0FBWU8sSUFBSSxDQUFDUCxJQUFqQjtBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVNoYXBlfSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9TaGFwZS9JU2hhcGVcIjtcbmltcG9ydCB7U2hhcGVUeXBlfSBmcm9tIFwiLi4vLi4vLi4vLi4vRW51bXMvU2hhcGVUeXBlXCI7XG5pbXBvcnQge0NoYXJhY3RlclNoYXBlfSBmcm9tIFwiLi9DaGFyYWN0ZXJTaGFwZVwiO1xuaW1wb3J0IHtJbWFnZVNoYXBlfSBmcm9tIFwiLi9JbWFnZVNoYXBlXCI7XG5pbXBvcnQge1BvbHlnb25TaGFwZX0gZnJvbSBcIi4vUG9seWdvblNoYXBlXCI7XG5pbXBvcnQge1N0cm9rZX0gZnJvbSBcIi4vU3Ryb2tlXCI7XG5pbXBvcnQge0lJbWFnZVNoYXBlfSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9TaGFwZS9JSW1hZ2VTaGFwZVwiO1xuaW1wb3J0IHtJQ2hhcmFjdGVyU2hhcGV9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL1NoYXBlL0lDaGFyYWN0ZXJTaGFwZVwiO1xuaW1wb3J0IHtJUG9seWdvblNoYXBlfSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9TaGFwZS9JUG9seWdvblNoYXBlXCI7XG5pbXBvcnQge0lTdHJva2V9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL1NoYXBlL0lTdHJva2VcIjtcbmltcG9ydCB7UmVjdXJzaXZlUGFydGlhbH0gZnJvbSBcIi4uLy4uLy4uLy4uL1R5cGVzL1JlY3Vyc2l2ZVBhcnRpYWxcIjtcblxuZXhwb3J0IGNsYXNzIFNoYXBlIGltcGxlbWVudHMgSVNoYXBlIHtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGUgcHJvcGVydHkgaW1hZ2VzIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgdGhlIGltYWdlIHByb3BlcnR5LCBpdCB3b3JrcyB3aXRoIG9uZSBhbmQgbWFueVxuICAgICAqL1xuICAgIGdldCBpbWFnZXMoKTogSUltYWdlU2hhcGVbXSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHRoZSBwcm9wZXJ0eSBpbWFnZXMgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSB0aGUgaW1hZ2UgcHJvcGVydHksIGl0IHdvcmtzIHdpdGggb25lIGFuZCBtYW55XG4gICAgICovXG4gICAgc2V0IGltYWdlcyh2YWx1ZTogSUltYWdlU2hhcGVbXSkge1xuICAgICAgICB0aGlzLmltYWdlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGNoYXJhY3RlcjogSUNoYXJhY3RlclNoYXBlO1xuICAgIHB1YmxpYyBpbWFnZTogSUltYWdlU2hhcGUgfCBJSW1hZ2VTaGFwZVtdO1xuICAgIHB1YmxpYyBwb2x5Z29uOiBJUG9seWdvblNoYXBlO1xuICAgIHB1YmxpYyBzdHJva2U6IElTdHJva2U7XG4gICAgcHVibGljIHR5cGU6IFNoYXBlVHlwZSB8IFNoYXBlVHlwZVtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gbmV3IENoYXJhY3RlclNoYXBlKCk7XG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2VTaGFwZSgpO1xuICAgICAgICB0aGlzLnBvbHlnb24gPSBuZXcgUG9seWdvblNoYXBlKCk7XG4gICAgICAgIHRoaXMuc3Ryb2tlID0gbmV3IFN0cm9rZSgpO1xuICAgICAgICB0aGlzLnR5cGUgPSBTaGFwZVR5cGUuY2lyY2xlO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKGRhdGE/OiBSZWN1cnNpdmVQYXJ0aWFsPElTaGFwZT4pOiB2b2lkIHtcbiAgICAgICAgaWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIubG9hZChkYXRhLmNoYXJhY3Rlcik7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmltYWdlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pbWFnZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBkYXRhLmltYWdlLm1hcCgocykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG1wID0gbmV3IEltYWdlU2hhcGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wLmxvYWQocyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0bXA7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2VTaGFwZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlLmxvYWQoZGF0YS5pbWFnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN0cm9rZS5sb2FkKGRhdGEuc3Ryb2tlKTtcblxuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID0gZGF0YS50eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0=