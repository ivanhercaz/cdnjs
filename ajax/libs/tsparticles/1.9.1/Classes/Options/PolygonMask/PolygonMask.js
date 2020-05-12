"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PolygonMask = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _PolygonMaskType = require("../../../Enums/PolygonMaskType");

var _Draw = require("./Draw");

var _Move = require("./Move");

var _PolygonMaskInlineArrangement = require("../../../Enums/PolygonMaskInlineArrangement");

var _Utils = require("../../Utils/Utils");

var PolygonMask = /*#__PURE__*/function () {
  function PolygonMask() {
    (0, _classCallCheck2["default"])(this, PolygonMask);
    this.draw = void 0;
    this.inlineArrangement = void 0;
    this.move = void 0;
    this.scale = void 0;
    this.type = void 0;
    this.url = void 0;
    this.draw = new _Draw.Draw();
    this.inlineArrangement = _PolygonMaskInlineArrangement.PolygonMaskInlineArrangement.onePerPoint;
    this.move = new _Move.Move();
    this.scale = 1;
    this.type = _PolygonMaskType.PolygonMaskType.none;
    this.url = "";
  }

  (0, _createClass2["default"])(PolygonMask, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        this.draw.load(data.draw);

        if (_Utils.Utils.hasData(data.inlineArrangement)) {
          this.inlineArrangement = data.inlineArrangement;
        }

        this.move.load(data.move);

        if (_Utils.Utils.hasData(data.scale)) {
          this.scale = data.scale;
        }

        if (_Utils.Utils.hasData(data.type)) {
          this.type = data.type;
        }

        if (_Utils.Utils.hasData(data.url)) {
          this.url = data.url;
        }
      }
    }
  }]);
  return PolygonMask;
}();

exports.PolygonMask = PolygonMask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUG9seWdvbk1hc2svUG9seWdvbk1hc2sudHMiXSwibmFtZXMiOlsiUG9seWdvbk1hc2siLCJkcmF3IiwiaW5saW5lQXJyYW5nZW1lbnQiLCJtb3ZlIiwic2NhbGUiLCJ0eXBlIiwidXJsIiwiRHJhdyIsIlBvbHlnb25NYXNrSW5saW5lQXJyYW5nZW1lbnQiLCJvbmVQZXJQb2ludCIsIk1vdmUiLCJQb2x5Z29uTWFza1R5cGUiLCJub25lIiwiZGF0YSIsIlV0aWxzIiwiaGFzRGF0YSIsImxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7SUFFYUEsVztBQVFULHlCQUFjO0FBQUE7QUFBQSxTQVBQQyxJQU9PO0FBQUEsU0FOUEMsaUJBTU87QUFBQSxTQUxQQyxJQUtPO0FBQUEsU0FKUEMsS0FJTztBQUFBLFNBSFBDLElBR087QUFBQSxTQUZQQyxHQUVPO0FBQ1YsU0FBS0wsSUFBTCxHQUFZLElBQUlNLFVBQUosRUFBWjtBQUNBLFNBQUtMLGlCQUFMLEdBQXlCTSwyREFBNkJDLFdBQXREO0FBQ0EsU0FBS04sSUFBTCxHQUFZLElBQUlPLFVBQUosRUFBWjtBQUNBLFNBQUtOLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsSUFBTCxHQUFZTSxpQ0FBZ0JDLElBQTVCO0FBQ0EsU0FBS04sR0FBTCxHQUFXLEVBQVg7QUFDSDs7Ozt5QkFFV08sSSxFQUEwQjtBQUNsQyxVQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF5QjtBQUNyQixhQUFLWixJQUFMLENBQVVlLElBQVYsQ0FBZUgsSUFBSSxDQUFDWixJQUFwQjs7QUFFQSxZQUFJYSxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ1gsaUJBQW5CLENBQUosRUFBMkM7QUFDdkMsZUFBS0EsaUJBQUwsR0FBeUJXLElBQUksQ0FBQ1gsaUJBQTlCO0FBQ0g7O0FBRUQsYUFBS0MsSUFBTCxDQUFVYSxJQUFWLENBQWVILElBQUksQ0FBQ1YsSUFBcEI7O0FBRUEsWUFBSVcsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNULEtBQW5CLENBQUosRUFBK0I7QUFDM0IsZUFBS0EsS0FBTCxHQUFhUyxJQUFJLENBQUNULEtBQWxCO0FBQ0g7O0FBRUQsWUFBSVUsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNSLElBQW5CLENBQUosRUFBOEI7QUFDMUIsZUFBS0EsSUFBTCxHQUFZUSxJQUFJLENBQUNSLElBQWpCO0FBQ0g7O0FBRUQsWUFBSVMsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNQLEdBQW5CLENBQUosRUFBNkI7QUFDekIsZUFBS0EsR0FBTCxHQUFXTyxJQUFJLENBQUNQLEdBQWhCO0FBQ0g7QUFDSjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUG9seWdvbk1hc2t9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUG9seWdvbk1hc2svSVBvbHlnb25NYXNrXCI7XG5pbXBvcnQge1BvbHlnb25NYXNrVHlwZX0gZnJvbSBcIi4uLy4uLy4uL0VudW1zL1BvbHlnb25NYXNrVHlwZVwiO1xuaW1wb3J0IHtEcmF3fSBmcm9tIFwiLi9EcmF3XCI7XG5pbXBvcnQge01vdmV9IGZyb20gXCIuL01vdmVcIjtcbmltcG9ydCB7SVBvbHlnb25NYXNrRHJhd30gZnJvbSBcIi4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9Qb2x5Z29uTWFzay9JUG9seWdvbk1hc2tEcmF3XCI7XG5pbXBvcnQge0lQb2x5Z29uTWFza01vdmV9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUG9seWdvbk1hc2svSVBvbHlnb25NYXNrTW92ZVwiO1xuaW1wb3J0IHtQb2x5Z29uTWFza0lubGluZUFycmFuZ2VtZW50fSBmcm9tIFwiLi4vLi4vLi4vRW51bXMvUG9seWdvbk1hc2tJbmxpbmVBcnJhbmdlbWVudFwiO1xuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4uLy4uL1V0aWxzL1V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBQb2x5Z29uTWFzayBpbXBsZW1lbnRzIElQb2x5Z29uTWFzayB7XG4gICAgcHVibGljIGRyYXc6IElQb2x5Z29uTWFza0RyYXc7XG4gICAgcHVibGljIGlubGluZUFycmFuZ2VtZW50OiBQb2x5Z29uTWFza0lubGluZUFycmFuZ2VtZW50O1xuICAgIHB1YmxpYyBtb3ZlOiBJUG9seWdvbk1hc2tNb3ZlO1xuICAgIHB1YmxpYyBzY2FsZTogbnVtYmVyO1xuICAgIHB1YmxpYyB0eXBlOiBQb2x5Z29uTWFza1R5cGU7XG4gICAgcHVibGljIHVybDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZHJhdyA9IG5ldyBEcmF3KCk7XG4gICAgICAgIHRoaXMuaW5saW5lQXJyYW5nZW1lbnQgPSBQb2x5Z29uTWFza0lubGluZUFycmFuZ2VtZW50Lm9uZVBlclBvaW50O1xuICAgICAgICB0aGlzLm1vdmUgPSBuZXcgTW92ZSgpO1xuICAgICAgICB0aGlzLnNjYWxlID0gMTtcbiAgICAgICAgdGhpcy50eXBlID0gUG9seWdvbk1hc2tUeXBlLm5vbmU7XG4gICAgICAgIHRoaXMudXJsID0gXCJcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChkYXRhOiBJUG9seWdvbk1hc2spOiB2b2lkIHtcbiAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YSkpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhdy5sb2FkKGRhdGEuZHJhdyk7XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuaW5saW5lQXJyYW5nZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmxpbmVBcnJhbmdlbWVudCA9IGRhdGEuaW5saW5lQXJyYW5nZW1lbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubW92ZS5sb2FkKGRhdGEubW92ZSk7XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEuc2NhbGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZSA9IGRhdGEuc2NhbGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEudHlwZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSBkYXRhLnR5cGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEudXJsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudXJsID0gZGF0YS51cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=