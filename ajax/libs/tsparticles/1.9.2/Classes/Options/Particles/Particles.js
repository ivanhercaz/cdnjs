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

var _Messages = require("../../Utils/Messages");

var _Utils = require("../../Utils/Utils");

var _Rotate = require("./Rotate");

var Particles = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Particles, [{
    key: "line_linked",

    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.line_linked", "particles.lineLinked");

      return this.lineLinked;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.line_linked", "particles.lineLinked");

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
    this.rotate = void 0;
    this.shape = void 0;
    this.size = void 0;
    this.color = new _Color.Color();
    this.lineLinked = new _LineLinked.LineLinked();
    this.move = new _Move.Move();
    this.number = new _ParticlesNumber.ParticlesNumber();
    this.opacity = new _Opacity.Opacity();
    this.rotate = new _Rotate.Rotate();
    this.shape = new _Shape.Shape();
    this.size = new _ParticlesSize.ParticlesSize(); //this.shadow = new Shadow();
  }

  (0, _createClass2["default"])(Particles, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        this.color.load(data.color);

        if (_Utils.Utils.hasData(data.lineLinked)) {
          this.lineLinked.load(data.lineLinked);
        }

        if (_Utils.Utils.hasData(data.line_linked)) {
          this.line_linked.load(data.line_linked);
        }

        this.move.load(data.move);
        this.number.load(data.number);
        this.opacity.load(data.opacity);
        this.rotate.load(data.rotate);
        this.shape.load(data.shape);
        this.size.load(data.size);
      }
    }
  }]);
  return Particles;
}();

exports.Particles = Particles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL1BhcnRpY2xlcy50cyJdLCJuYW1lcyI6WyJQYXJ0aWNsZXMiLCJNZXNzYWdlcyIsImRlcHJlY2F0ZWQiLCJsaW5lTGlua2VkIiwidmFsdWUiLCJjb2xvciIsIm1vdmUiLCJudW1iZXIiLCJvcGFjaXR5Iiwicm90YXRlIiwic2hhcGUiLCJzaXplIiwiQ29sb3IiLCJMaW5lTGlua2VkIiwiTW92ZSIsIlBhcnRpY2xlc051bWJlciIsIk9wYWNpdHkiLCJSb3RhdGUiLCJTaGFwZSIsIlBhcnRpY2xlc1NpemUiLCJkYXRhIiwiVXRpbHMiLCJoYXNEYXRhIiwibG9hZCIsImxpbmVfbGlua2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBUUE7O0FBQ0E7O0FBRUE7O0lBRWFBLFM7Ozs7QUFDVDs7Ozt3QkFJc0M7QUFDbENDLHlCQUFTQyxVQUFULENBQW9CLHVCQUFwQixFQUE2QyxzQkFBN0M7O0FBRUEsYUFBTyxLQUFLQyxVQUFaO0FBQ0g7QUFFRDs7Ozs7O3NCQUt1QkMsSyxFQUFvQjtBQUN2Q0gseUJBQVNDLFVBQVQsQ0FBb0IsdUJBQXBCLEVBQTZDLHNCQUE3Qzs7QUFFQSxXQUFLQyxVQUFMLEdBQWtCQyxLQUFsQjtBQUNIOzs7QUFXRDtBQUVBLHVCQUFjO0FBQUE7QUFBQSxTQVhQQyxLQVdPO0FBQUEsU0FWUEYsVUFVTztBQUFBLFNBVFBHLElBU087QUFBQSxTQVJQQyxNQVFPO0FBQUEsU0FQUEMsT0FPTztBQUFBLFNBTlBDLE1BTU87QUFBQSxTQUxQQyxLQUtPO0FBQUEsU0FKUEMsSUFJTztBQUNWLFNBQUtOLEtBQUwsR0FBYSxJQUFJTyxZQUFKLEVBQWI7QUFDQSxTQUFLVCxVQUFMLEdBQWtCLElBQUlVLHNCQUFKLEVBQWxCO0FBQ0EsU0FBS1AsSUFBTCxHQUFZLElBQUlRLFVBQUosRUFBWjtBQUNBLFNBQUtQLE1BQUwsR0FBYyxJQUFJUSxnQ0FBSixFQUFkO0FBQ0EsU0FBS1AsT0FBTCxHQUFlLElBQUlRLGdCQUFKLEVBQWY7QUFDQSxTQUFLUCxNQUFMLEdBQWMsSUFBSVEsY0FBSixFQUFkO0FBQ0EsU0FBS1AsS0FBTCxHQUFhLElBQUlRLFlBQUosRUFBYjtBQUNBLFNBQUtQLElBQUwsR0FBWSxJQUFJUSw0QkFBSixFQUFaLENBUlUsQ0FTVjtBQUNIOzs7O3lCQUVXQyxJLEVBQXdCO0FBQ2hDLFVBQUlDLGFBQU1DLE9BQU4sQ0FBY0YsSUFBZCxDQUFKLEVBQXlCO0FBQ3JCLGFBQUtmLEtBQUwsQ0FBV2tCLElBQVgsQ0FBZ0JILElBQUksQ0FBQ2YsS0FBckI7O0FBRUEsWUFBSWdCLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDakIsVUFBbkIsQ0FBSixFQUFvQztBQUNoQyxlQUFLQSxVQUFMLENBQWdCb0IsSUFBaEIsQ0FBcUJILElBQUksQ0FBQ2pCLFVBQTFCO0FBQ0g7O0FBRUQsWUFBSWtCLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDSSxXQUFuQixDQUFKLEVBQXFDO0FBQ2pDLGVBQUtBLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCSCxJQUFJLENBQUNJLFdBQTNCO0FBQ0g7O0FBRUQsYUFBS2xCLElBQUwsQ0FBVWlCLElBQVYsQ0FBZUgsSUFBSSxDQUFDZCxJQUFwQjtBQUNBLGFBQUtDLE1BQUwsQ0FBWWdCLElBQVosQ0FBaUJILElBQUksQ0FBQ2IsTUFBdEI7QUFDQSxhQUFLQyxPQUFMLENBQWFlLElBQWIsQ0FBa0JILElBQUksQ0FBQ1osT0FBdkI7QUFDQSxhQUFLQyxNQUFMLENBQVljLElBQVosQ0FBaUJILElBQUksQ0FBQ1gsTUFBdEI7QUFDQSxhQUFLQyxLQUFMLENBQVdhLElBQVgsQ0FBZ0JILElBQUksQ0FBQ1YsS0FBckI7QUFDQSxhQUFLQyxJQUFMLENBQVVZLElBQVYsQ0FBZUgsSUFBSSxDQUFDVCxJQUFwQjtBQUNIO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lQYXJ0aWNsZXN9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lQYXJ0aWNsZXNcIjtcbmltcG9ydCB7Q29sb3J9IGZyb20gXCIuL0NvbG9yXCI7XG5pbXBvcnQge0xpbmVMaW5rZWR9IGZyb20gXCIuL0xpbmVMaW5rZWRcIjtcbmltcG9ydCB7TW92ZX0gZnJvbSBcIi4vTW92ZVwiO1xuaW1wb3J0IHtQYXJ0aWNsZXNOdW1iZXJ9IGZyb20gXCIuL1BhcnRpY2xlc051bWJlclwiO1xuaW1wb3J0IHtPcGFjaXR5fSBmcm9tIFwiLi9PcGFjaXR5XCI7XG5pbXBvcnQge1NoYXBlfSBmcm9tIFwiLi9TaGFwZS9TaGFwZVwiO1xuaW1wb3J0IHtQYXJ0aWNsZXNTaXplfSBmcm9tIFwiLi9QYXJ0aWNsZXNTaXplXCI7XG5pbXBvcnQge0lQYXJ0aWNsZXNDb2xvcn0gZnJvbSBcIi4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9QYXJ0aWNsZXMvSVBhcnRpY2xlc0NvbG9yXCI7XG5pbXBvcnQge0lMaW5lTGlua2VkfSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JTGluZUxpbmtlZFwiO1xuaW1wb3J0IHtJTW92ZX0gZnJvbSBcIi4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9QYXJ0aWNsZXMvSU1vdmVcIjtcbmltcG9ydCB7SVBhcnRpY2xlc051bWJlcn0gZnJvbSBcIi4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9QYXJ0aWNsZXMvSVBhcnRpY2xlc051bWJlclwiO1xuaW1wb3J0IHtJT3BhY2l0eX0gZnJvbSBcIi4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9QYXJ0aWNsZXMvSU9wYWNpdHlcIjtcbmltcG9ydCB7SVNoYXBlfSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9TaGFwZS9JU2hhcGVcIjtcbmltcG9ydCB7SVNpemV9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lTaXplXCI7XG5pbXBvcnQge01lc3NhZ2VzfSBmcm9tIFwiLi4vLi4vVXRpbHMvTWVzc2FnZXNcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xuaW1wb3J0IHtJUm90YXRlfSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JUm90YXRlXCI7XG5pbXBvcnQge1JvdGF0ZX0gZnJvbSBcIi4vUm90YXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZXMgaW1wbGVtZW50cyBJUGFydGljbGVzIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBsaW5lTGlua2VkXG4gICAgICovXG4gICAgcHVibGljIGdldCBsaW5lX2xpbmtlZCgpOiBJTGluZUxpbmtlZCB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJwYXJ0aWNsZXMubGluZV9saW5rZWRcIiwgXCJwYXJ0aWNsZXMubGluZUxpbmtlZFwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5saW5lTGlua2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IGxpbmVMaW5rZWRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGxpbmVfbGlua2VkKHZhbHVlOiBJTGluZUxpbmtlZCkge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwicGFydGljbGVzLmxpbmVfbGlua2VkXCIsIFwicGFydGljbGVzLmxpbmVMaW5rZWRcIik7XG5cbiAgICAgICAgdGhpcy5saW5lTGlua2VkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbG9yOiBJUGFydGljbGVzQ29sb3I7XG4gICAgcHVibGljIGxpbmVMaW5rZWQ6IElMaW5lTGlua2VkO1xuICAgIHB1YmxpYyBtb3ZlOiBJTW92ZTtcbiAgICBwdWJsaWMgbnVtYmVyOiBJUGFydGljbGVzTnVtYmVyO1xuICAgIHB1YmxpYyBvcGFjaXR5OiBJT3BhY2l0eTtcbiAgICBwdWJsaWMgcm90YXRlOiBJUm90YXRlO1xuICAgIHB1YmxpYyBzaGFwZTogSVNoYXBlO1xuICAgIHB1YmxpYyBzaXplOiBJU2l6ZTtcblxuICAgIC8vIHB1YmxpYyBzaGFkb3c6IElTaGFkb3c7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IG5ldyBDb2xvcigpO1xuICAgICAgICB0aGlzLmxpbmVMaW5rZWQgPSBuZXcgTGluZUxpbmtlZCgpO1xuICAgICAgICB0aGlzLm1vdmUgPSBuZXcgTW92ZSgpO1xuICAgICAgICB0aGlzLm51bWJlciA9IG5ldyBQYXJ0aWNsZXNOdW1iZXIoKTtcbiAgICAgICAgdGhpcy5vcGFjaXR5ID0gbmV3IE9wYWNpdHkoKTtcbiAgICAgICAgdGhpcy5yb3RhdGUgPSBuZXcgUm90YXRlKCk7XG4gICAgICAgIHRoaXMuc2hhcGUgPSBuZXcgU2hhcGUoKTtcbiAgICAgICAgdGhpcy5zaXplID0gbmV3IFBhcnRpY2xlc1NpemUoKTtcbiAgICAgICAgLy90aGlzLnNoYWRvdyA9IG5ldyBTaGFkb3coKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChkYXRhOiBJUGFydGljbGVzKTogdm9pZCB7XG4gICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbG9yLmxvYWQoZGF0YS5jb2xvcik7XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEubGluZUxpbmtlZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVMaW5rZWQubG9hZChkYXRhLmxpbmVMaW5rZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLmxpbmVfbGlua2VkKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGluZV9saW5rZWQubG9hZChkYXRhLmxpbmVfbGlua2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5tb3ZlLmxvYWQoZGF0YS5tb3ZlKTtcbiAgICAgICAgICAgIHRoaXMubnVtYmVyLmxvYWQoZGF0YS5udW1iZXIpO1xuICAgICAgICAgICAgdGhpcy5vcGFjaXR5LmxvYWQoZGF0YS5vcGFjaXR5KTtcbiAgICAgICAgICAgIHRoaXMucm90YXRlLmxvYWQoZGF0YS5yb3RhdGUpO1xuICAgICAgICAgICAgdGhpcy5zaGFwZS5sb2FkKGRhdGEuc2hhcGUpO1xuICAgICAgICAgICAgdGhpcy5zaXplLmxvYWQoZGF0YS5zaXplKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19