"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Attract = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Messages = require("../../Utils/Messages");

var _Utils = require("../../Utils/Utils");

var Attract = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Attract, [{
    key: "rotateX",

    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.x
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.move.attract.rotateX", "particles.move.attract.rotate.x");

      return this.rotate.x;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.x
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.move.attract.rotateX", "particles.move.attract.rotate.x");

      this.rotate.x = value;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.y
     */

  }, {
    key: "rotateY",
    get: function get() {
      _Messages.Messages.deprecated("particles.move.attract.rotateY", "particles.move.attract.rotate.y");

      return this.rotate.y;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new rotate.y
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.move.attract.rotateY", "particles.move.attract.rotate.y");

      this.rotate.y = value;
    }
  }]);

  function Attract() {
    (0, _classCallCheck2["default"])(this, Attract);
    this.enable = void 0;
    this.rotate = void 0;
    this.enable = false;
    this.rotate = {
      x: 3000,
      y: 3000
    };
  }

  (0, _createClass2["default"])(Attract, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        var _data$rotate, _data$rotate2;

        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData((_data$rotate = data.rotate) === null || _data$rotate === void 0 ? void 0 : _data$rotate.x)) {
          this.rotate.x = data.rotate.x;
        }

        if (_Utils.Utils.hasData((_data$rotate2 = data.rotate) === null || _data$rotate2 === void 0 ? void 0 : _data$rotate2.y)) {
          this.rotate.y = data.rotate.y;
        }

        if (_Utils.Utils.hasData(data.rotateX)) {
          this.rotateX = data.rotateX;
        }

        if (_Utils.Utils.hasData(data.rotateY)) {
          this.rotateY = data.rotateY;
        }
      }
    }
  }]);
  return Attract;
}();

exports.Attract = Attract;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL0F0dHJhY3QudHMiXSwibmFtZXMiOlsiQXR0cmFjdCIsIk1lc3NhZ2VzIiwiZGVwcmVjYXRlZCIsInJvdGF0ZSIsIngiLCJ2YWx1ZSIsInkiLCJlbmFibGUiLCJkYXRhIiwiVXRpbHMiLCJoYXNEYXRhIiwicm90YXRlWCIsInJvdGF0ZVkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7SUFFYUEsTzs7OztBQUNUOzs7O3dCQUk2QjtBQUN6QkMseUJBQVNDLFVBQVQsQ0FBb0IsZ0NBQXBCLEVBQXNELGlDQUF0RDs7QUFFQSxhQUFPLEtBQUtDLE1BQUwsQ0FBWUMsQ0FBbkI7QUFDSDtBQUVEOzs7Ozs7c0JBS21CQyxLLEVBQWU7QUFDOUJKLHlCQUFTQyxVQUFULENBQW9CLGdDQUFwQixFQUFzRCxpQ0FBdEQ7O0FBRUEsV0FBS0MsTUFBTCxDQUFZQyxDQUFaLEdBQWdCQyxLQUFoQjtBQUNIO0FBRUQ7Ozs7Ozs7d0JBSTZCO0FBQ3pCSix5QkFBU0MsVUFBVCxDQUFvQixnQ0FBcEIsRUFBc0QsaUNBQXREOztBQUVBLGFBQU8sS0FBS0MsTUFBTCxDQUFZRyxDQUFuQjtBQUNIO0FBRUQ7Ozs7OztzQkFLbUJELEssRUFBZTtBQUM5QkoseUJBQVNDLFVBQVQsQ0FBb0IsZ0NBQXBCLEVBQXNELGlDQUF0RDs7QUFFQSxXQUFLQyxNQUFMLENBQVlHLENBQVosR0FBZ0JELEtBQWhCO0FBQ0g7OztBQUtELHFCQUFjO0FBQUE7QUFBQSxTQUhQRSxNQUdPO0FBQUEsU0FGUEosTUFFTztBQUNWLFNBQUtJLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0osTUFBTCxHQUFjO0FBQ1ZDLE1BQUFBLENBQUMsRUFBRSxJQURPO0FBRVZFLE1BQUFBLENBQUMsRUFBRTtBQUZPLEtBQWQ7QUFJSDs7Ozt5QkFFV0UsSSxFQUFzQjtBQUM5QixVQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF5QjtBQUFBOztBQUNyQixZQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0QsTUFBbkIsQ0FBSixFQUFnQztBQUM1QixlQUFLQSxNQUFMLEdBQWNDLElBQUksQ0FBQ0QsTUFBbkI7QUFDSDs7QUFFRCxZQUFJRSxhQUFNQyxPQUFOLGlCQUFjRixJQUFJLENBQUNMLE1BQW5CLGlEQUFjLGFBQWFDLENBQTNCLENBQUosRUFBbUM7QUFDL0IsZUFBS0QsTUFBTCxDQUFZQyxDQUFaLEdBQWdCSSxJQUFJLENBQUNMLE1BQUwsQ0FBWUMsQ0FBNUI7QUFDSDs7QUFFRCxZQUFJSyxhQUFNQyxPQUFOLGtCQUFjRixJQUFJLENBQUNMLE1BQW5CLGtEQUFjLGNBQWFHLENBQTNCLENBQUosRUFBbUM7QUFDL0IsZUFBS0gsTUFBTCxDQUFZRyxDQUFaLEdBQWdCRSxJQUFJLENBQUNMLE1BQUwsQ0FBWUcsQ0FBNUI7QUFDSDs7QUFFRCxZQUFJRyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0csT0FBbkIsQ0FBSixFQUFpQztBQUM3QixlQUFLQSxPQUFMLEdBQWVILElBQUksQ0FBQ0csT0FBcEI7QUFDSDs7QUFFRCxZQUFJRixhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0ksT0FBbkIsQ0FBSixFQUFpQztBQUM3QixlQUFLQSxPQUFMLEdBQWVKLElBQUksQ0FBQ0ksT0FBcEI7QUFDSDtBQUNKO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lBdHRyYWN0fSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JQXR0cmFjdFwiO1xuaW1wb3J0IHtJQ29vcmRpbmF0ZXN9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL0lDb29yZGluYXRlc1wiO1xuaW1wb3J0IHtNZXNzYWdlc30gZnJvbSBcIi4uLy4uL1V0aWxzL01lc3NhZ2VzXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vLi4vVXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEF0dHJhY3QgaW1wbGVtZW50cyBJQXR0cmFjdCB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgcm90YXRlLnhcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHJvdGF0ZVgoKTogbnVtYmVyIHtcbiAgICAgICAgTWVzc2FnZXMuZGVwcmVjYXRlZChcInBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWFwiLCBcInBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlLnhcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlLng7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgcm90YXRlLnhcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHJvdGF0ZVgodmFsdWU6IG51bWJlcikge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwicGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGVYXCIsIFwicGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGUueFwiKTtcblxuICAgICAgICB0aGlzLnJvdGF0ZS54ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgcm90YXRlLnlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHJvdGF0ZVkoKTogbnVtYmVyIHtcbiAgICAgICAgTWVzc2FnZXMuZGVwcmVjYXRlZChcInBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWVwiLCBcInBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlLnlcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRlLnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgcm90YXRlLnlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IHJvdGF0ZVkodmFsdWU6IG51bWJlcikge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwicGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGVZXCIsIFwicGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGUueVwiKTtcblxuICAgICAgICB0aGlzLnJvdGF0ZS55ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGVuYWJsZTogYm9vbGVhbjtcbiAgICBwdWJsaWMgcm90YXRlOiBJQ29vcmRpbmF0ZXM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbmFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3RhdGUgPSB7XG4gICAgICAgICAgICB4OiAzMDAwLFxuICAgICAgICAgICAgeTogMzAwMCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChkYXRhOiBJQXR0cmFjdCk6IHZvaWQge1xuICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhKSkge1xuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5lbmFibGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGUgPSBkYXRhLmVuYWJsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5yb3RhdGU/LngpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGUueCA9IGRhdGEucm90YXRlLng7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEucm90YXRlPy55KSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm90YXRlLnkgPSBkYXRhLnJvdGF0ZS55O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLnJvdGF0ZVgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVYID0gZGF0YS5yb3RhdGVYO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLnJvdGF0ZVkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVZID0gZGF0YS5yb3RhdGVZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19