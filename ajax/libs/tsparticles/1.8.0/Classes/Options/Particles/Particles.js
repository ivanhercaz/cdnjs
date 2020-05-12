"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Particles = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Color = require("./Color");

var _LineLinked = require("./LineLinked");

var _Move = require("./Move");

var _ParticlesNumber = require("./ParticlesNumber");

var _Opacity = require("./Opacity");

var _Shape = require("./Shape/Shape");

var _ParticlesSize = require("./ParticlesSize");

var Particles = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Particles, [{
    key: "line_linked",

    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     */
    get: function get() {
      return this.lineLinked;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     * @param value
     */
    ,
    set: function set(value) {
      this.lineLinked = value;
    }
  }]);

  // public shadow: IShadow;
  function Particles() {
    (0, _classCallCheck2["default"])(this, Particles);
    this.color = void 0;
    this.lineLinked = void 0;
    this.move = void 0;
    this.number = void 0;
    this.opacity = void 0;
    this.shape = void 0;
    this.size = void 0;
    this.color = new _Color.Color();
    this.lineLinked = new _LineLinked.LineLinked();
    this.move = new _Move.Move();
    this.number = new _ParticlesNumber.ParticlesNumber();
    this.opacity = new _Opacity.Opacity();
    this.shape = new _Shape.Shape();
    this.size = new _ParticlesSize.ParticlesSize(); //this.shadow = new Shadow();
  }

  return Particles;
}();

exports.Particles = Particles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1BhcnRpY2xlcy50cyJdLCJuYW1lcyI6WyJQYXJ0aWNsZXMiLCJsaW5lTGlua2VkIiwidmFsdWUiLCJjb2xvciIsIm1vdmUiLCJudW1iZXIiLCJvcGFjaXR5Iiwic2hhcGUiLCJzaXplIiwiQ29sb3IiLCJMaW5lTGlua2VkIiwiTW92ZSIsIlBhcnRpY2xlc051bWJlciIsIk9wYWNpdHkiLCJTaGFwZSIsIlBhcnRpY2xlc1NpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFTYUEsUzs7OztBQUNUOzs7O3dCQUlxQztBQUNqQyxhQUFPLEtBQUtDLFVBQVo7QUFDSDtBQUVEOzs7Ozs7c0JBS3VCQyxLLEVBQW1CO0FBQ3RDLFdBQUtELFVBQUwsR0FBa0JDLEtBQWxCO0FBQ0g7OztBQVNEO0FBRUEsdUJBQWM7QUFBQTtBQUFBLFNBVFBDLEtBU087QUFBQSxTQVJQRixVQVFPO0FBQUEsU0FQUEcsSUFPTztBQUFBLFNBTlBDLE1BTU87QUFBQSxTQUxQQyxPQUtPO0FBQUEsU0FKUEMsS0FJTztBQUFBLFNBSFBDLElBR087QUFDVixTQUFLTCxLQUFMLEdBQWEsSUFBSU0sWUFBSixFQUFiO0FBQ0EsU0FBS1IsVUFBTCxHQUFrQixJQUFJUyxzQkFBSixFQUFsQjtBQUNBLFNBQUtOLElBQUwsR0FBWSxJQUFJTyxVQUFKLEVBQVo7QUFDQSxTQUFLTixNQUFMLEdBQWMsSUFBSU8sZ0NBQUosRUFBZDtBQUNBLFNBQUtOLE9BQUwsR0FBZSxJQUFJTyxnQkFBSixFQUFmO0FBQ0EsU0FBS04sS0FBTCxHQUFhLElBQUlPLFlBQUosRUFBYjtBQUNBLFNBQUtOLElBQUwsR0FBWSxJQUFJTyw0QkFBSixFQUFaLENBUFUsQ0FRVjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUGFydGljbGVzfSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JUGFydGljbGVzXCI7XG5pbXBvcnQge0NvbG9yfSBmcm9tIFwiLi9Db2xvclwiO1xuaW1wb3J0IHtMaW5lTGlua2VkfSBmcm9tIFwiLi9MaW5lTGlua2VkXCI7XG5pbXBvcnQge01vdmV9IGZyb20gXCIuL01vdmVcIjtcbmltcG9ydCB7UGFydGljbGVzTnVtYmVyfSBmcm9tIFwiLi9QYXJ0aWNsZXNOdW1iZXJcIjtcbmltcG9ydCB7T3BhY2l0eX0gZnJvbSBcIi4vT3BhY2l0eVwiO1xuaW1wb3J0IHtTaGFwZX0gZnJvbSBcIi4vU2hhcGUvU2hhcGVcIjtcbmltcG9ydCB7UGFydGljbGVzU2l6ZX0gZnJvbSBcIi4vUGFydGljbGVzU2l6ZVwiO1xuaW1wb3J0IHtJUGFydGljbGVzQ29sb3J9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lQYXJ0aWNsZXNDb2xvclwiO1xuaW1wb3J0IHtJTGluZUxpbmtlZH0gZnJvbSBcIi4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9QYXJ0aWNsZXMvSUxpbmVMaW5rZWRcIjtcbmltcG9ydCB7SU1vdmV9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lNb3ZlXCI7XG5pbXBvcnQge0lQYXJ0aWNsZXNOdW1iZXJ9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lQYXJ0aWNsZXNOdW1iZXJcIjtcbmltcG9ydCB7SU9wYWNpdHl9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lPcGFjaXR5XCI7XG5pbXBvcnQge0lTaGFwZX0gZnJvbSBcIi4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9TaGFwZS9JU2hhcGVcIjtcbmltcG9ydCB7SVNpemV9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lTaXplXCI7XG5cbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZXMgaW1wbGVtZW50cyBJUGFydGljbGVzIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBsaW5lTGlua2VkXG4gICAgICovXG4gICAgcHVibGljIGdldCBsaW5lX2xpbmtlZCgpOiBMaW5lTGlua2VkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGluZUxpbmtlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBsaW5lTGlua2VkXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBsaW5lX2xpbmtlZCh2YWx1ZTogTGluZUxpbmtlZCkge1xuICAgICAgICB0aGlzLmxpbmVMaW5rZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29sb3I6IElQYXJ0aWNsZXNDb2xvcjtcbiAgICBwdWJsaWMgbGluZUxpbmtlZDogSUxpbmVMaW5rZWQ7XG4gICAgcHVibGljIG1vdmU6IElNb3ZlO1xuICAgIHB1YmxpYyBudW1iZXI6IElQYXJ0aWNsZXNOdW1iZXI7XG4gICAgcHVibGljIG9wYWNpdHk6IElPcGFjaXR5O1xuICAgIHB1YmxpYyBzaGFwZTogSVNoYXBlO1xuICAgIHB1YmxpYyBzaXplOiBJU2l6ZTtcbiAgICAvLyBwdWJsaWMgc2hhZG93OiBJU2hhZG93O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBuZXcgQ29sb3IoKTtcbiAgICAgICAgdGhpcy5saW5lTGlua2VkID0gbmV3IExpbmVMaW5rZWQoKTtcbiAgICAgICAgdGhpcy5tb3ZlID0gbmV3IE1vdmUoKTtcbiAgICAgICAgdGhpcy5udW1iZXIgPSBuZXcgUGFydGljbGVzTnVtYmVyKCk7XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IG5ldyBPcGFjaXR5KCk7XG4gICAgICAgIHRoaXMuc2hhcGUgPSBuZXcgU2hhcGUoKTtcbiAgICAgICAgdGhpcy5zaXplID0gbmV3IFBhcnRpY2xlc1NpemUoKTtcbiAgICAgICAgLy90aGlzLnNoYWRvdyA9IG5ldyBTaGFkb3coKTtcbiAgICB9XG59XG5cbiJdfQ==