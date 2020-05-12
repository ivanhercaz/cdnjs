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

var _Utils = require("../../../Utils/Utils");

var Shape = /*#__PURE__*/function () {
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
      if (_Utils.Utils.hasData(data)) {
        this.character.load(data.character);

        if (_Utils.Utils.hasData(data.image)) {
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

        if (_Utils.Utils.hasData(data.type)) {
          this.type = data.type;
        }
      }
    }
  }]);
  return Shape;
}();

exports.Shape = Shape;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1NoYXBlL1NoYXBlLnRzIl0sIm5hbWVzIjpbIlNoYXBlIiwiY2hhcmFjdGVyIiwiaW1hZ2UiLCJwb2x5Z29uIiwic3Ryb2tlIiwidHlwZSIsIkNoYXJhY3RlclNoYXBlIiwiSW1hZ2VTaGFwZSIsIlBvbHlnb25TaGFwZSIsIlN0cm9rZSIsIlNoYXBlVHlwZSIsImNpcmNsZSIsImRhdGEiLCJVdGlscyIsImhhc0RhdGEiLCJsb2FkIiwiQXJyYXkiLCJtYXAiLCJzIiwidG1wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBS0E7O0lBRWFBLEs7QUFPVCxtQkFBYztBQUFBO0FBQUEsU0FOUEMsU0FNTztBQUFBLFNBTFBDLEtBS087QUFBQSxTQUpQQyxPQUlPO0FBQUEsU0FIUEMsTUFHTztBQUFBLFNBRlBDLElBRU87QUFDVixTQUFLSixTQUFMLEdBQWlCLElBQUlLLDhCQUFKLEVBQWpCO0FBQ0EsU0FBS0osS0FBTCxHQUFhLElBQUlLLHNCQUFKLEVBQWI7QUFDQSxTQUFLSixPQUFMLEdBQWUsSUFBSUssMEJBQUosRUFBZjtBQUNBLFNBQUtKLE1BQUwsR0FBYyxJQUFJSyxjQUFKLEVBQWQ7QUFDQSxTQUFLSixJQUFMLEdBQVlLLHFCQUFVQyxNQUF0QjtBQUNIOzs7O3lCQUVXQyxJLEVBQW9CO0FBQzVCLFVBQUlDLGFBQU1DLE9BQU4sQ0FBY0YsSUFBZCxDQUFKLEVBQXlCO0FBQ3JCLGFBQUtYLFNBQUwsQ0FBZWMsSUFBZixDQUFvQkgsSUFBSSxDQUFDWCxTQUF6Qjs7QUFFQSxZQUFJWSxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ1YsS0FBbkIsQ0FBSixFQUErQjtBQUMzQixjQUFJVSxJQUFJLENBQUNWLEtBQUwsWUFBc0JjLEtBQTFCLEVBQWlDO0FBQzdCLGlCQUFLZCxLQUFMLEdBQWFVLElBQUksQ0FBQ1YsS0FBTCxDQUFXZSxHQUFYLENBQWUsVUFBQ0MsQ0FBRCxFQUFPO0FBQy9CLGtCQUFNQyxHQUFHLEdBQUcsSUFBSVosc0JBQUosRUFBWjtBQUVBWSxjQUFBQSxHQUFHLENBQUNKLElBQUosQ0FBU0csQ0FBVDtBQUVBLHFCQUFPQyxHQUFQO0FBQ0gsYUFOWSxDQUFiO0FBT0gsV0FSRCxNQVFPO0FBQ0gsaUJBQUtqQixLQUFMLEdBQWEsSUFBSUssc0JBQUosRUFBYjtBQUNBLGlCQUFLTCxLQUFMLENBQVdhLElBQVgsQ0FBZ0JILElBQUksQ0FBQ1YsS0FBckI7QUFDSDtBQUNKOztBQUVELGFBQUtFLE1BQUwsQ0FBWVcsSUFBWixDQUFpQkgsSUFBSSxDQUFDUixNQUF0Qjs7QUFFQSxZQUFJUyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ1AsSUFBbkIsQ0FBSixFQUE4QjtBQUMxQixlQUFLQSxJQUFMLEdBQVlPLElBQUksQ0FBQ1AsSUFBakI7QUFDSDtBQUNKO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lTaGFwZX0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9QYXJ0aWNsZXMvU2hhcGUvSVNoYXBlXCI7XG5pbXBvcnQge1NoYXBlVHlwZX0gZnJvbSBcIi4uLy4uLy4uLy4uL0VudW1zL1NoYXBlVHlwZVwiO1xuaW1wb3J0IHtDaGFyYWN0ZXJTaGFwZX0gZnJvbSBcIi4vQ2hhcmFjdGVyU2hhcGVcIjtcbmltcG9ydCB7SW1hZ2VTaGFwZX0gZnJvbSBcIi4vSW1hZ2VTaGFwZVwiO1xuaW1wb3J0IHtQb2x5Z29uU2hhcGV9IGZyb20gXCIuL1BvbHlnb25TaGFwZVwiO1xuaW1wb3J0IHtTdHJva2V9IGZyb20gXCIuL1N0cm9rZVwiO1xuaW1wb3J0IHtJSW1hZ2VTaGFwZX0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9QYXJ0aWNsZXMvU2hhcGUvSUltYWdlU2hhcGVcIjtcbmltcG9ydCB7SUNoYXJhY3RlclNoYXBlfSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9TaGFwZS9JQ2hhcmFjdGVyU2hhcGVcIjtcbmltcG9ydCB7SVBvbHlnb25TaGFwZX0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9QYXJ0aWNsZXMvU2hhcGUvSVBvbHlnb25TaGFwZVwiO1xuaW1wb3J0IHtJU3Ryb2tlfSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9TaGFwZS9JU3Ryb2tlXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vLi4vLi4vVXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFNoYXBlIGltcGxlbWVudHMgSVNoYXBlIHtcbiAgICBwdWJsaWMgY2hhcmFjdGVyOiBJQ2hhcmFjdGVyU2hhcGU7XG4gICAgcHVibGljIGltYWdlOiBJSW1hZ2VTaGFwZSB8IElJbWFnZVNoYXBlW107XG4gICAgcHVibGljIHBvbHlnb246IElQb2x5Z29uU2hhcGU7XG4gICAgcHVibGljIHN0cm9rZTogSVN0cm9rZTtcbiAgICBwdWJsaWMgdHlwZTogU2hhcGVUeXBlIHwgU2hhcGVUeXBlW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBuZXcgQ2hhcmFjdGVyU2hhcGUoKTtcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZVNoYXBlKCk7XG4gICAgICAgIHRoaXMucG9seWdvbiA9IG5ldyBQb2x5Z29uU2hhcGUoKTtcbiAgICAgICAgdGhpcy5zdHJva2UgPSBuZXcgU3Ryb2tlKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFNoYXBlVHlwZS5jaXJjbGU7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQoZGF0YTogSVNoYXBlKTogdm9pZCB7XG4gICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEpKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJhY3Rlci5sb2FkKGRhdGEuY2hhcmFjdGVyKTtcblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5pbWFnZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pbWFnZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBkYXRhLmltYWdlLm1hcCgocykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG1wID0gbmV3IEltYWdlU2hhcGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wLmxvYWQocyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0bXA7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2VTaGFwZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlLmxvYWQoZGF0YS5pbWFnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN0cm9rZS5sb2FkKGRhdGEuc3Ryb2tlKTtcblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS50eXBlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9IGRhdGEudHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19