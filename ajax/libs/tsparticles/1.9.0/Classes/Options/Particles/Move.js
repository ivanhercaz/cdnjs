"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Move = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Attract = require("./Attract");

var _MoveDirection = require("../../../Enums/MoveDirection");

var _OutMode = require("../../../Enums/OutMode");

var _Messages = require("../../Utils/Messages");

var _Utils = require("../../Utils/Utils");

var Move = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Move, [{
    key: "out_mode",

    /**
     *
     * @deprecated this property is obsolete, please use the new outMode
     */
    get: function get() {
      _Messages.Messages.deprecated("particles.move.out_mode", "particles.move.outMode");

      return this.outMode;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new outMode
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("particles.move.out_mode", "particles.move.outMode");

      this.outMode = value;
    }
  }]);

  function Move() {
    (0, _classCallCheck2["default"])(this, Move);
    this.attract = void 0;
    this.bounce = void 0;
    this.direction = void 0;
    this.enable = void 0;
    this.outMode = void 0;
    this.random = void 0;
    this.speed = void 0;
    this.straight = void 0;
    this.attract = new _Attract.Attract();
    this.bounce = false;
    this.direction = _MoveDirection.MoveDirection.none;
    this.enable = true;
    this.outMode = _OutMode.OutMode.out;
    this.random = false;
    this.speed = 2;
    this.straight = false;
  }

  (0, _createClass2["default"])(Move, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        this.attract.load(data.attract);

        if (_Utils.Utils.hasData(data.bounce)) {
          this.bounce = data.bounce;
        }

        if (_Utils.Utils.hasData(data.direction)) {
          this.direction = data.direction;
        }

        if (_Utils.Utils.hasData(data.enable)) {
          this.enable = data.enable;
        }

        if (_Utils.Utils.hasData(data.outMode)) {
          this.outMode = data.outMode;
        }

        if (_Utils.Utils.hasData(data.out_mode)) {
          this.out_mode = data.out_mode;
        }

        if (_Utils.Utils.hasData(data.random)) {
          this.random = data.random;
        }

        if (_Utils.Utils.hasData(data.speed)) {
          this.speed = data.speed;
        }

        if (_Utils.Utils.hasData(data.straight)) {
          this.straight = data.straight;
        }
      }
    }
  }]);
  return Move;
}();

exports.Move = Move;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvUGFydGljbGVzL01vdmUudHMiXSwibmFtZXMiOlsiTW92ZSIsIk1lc3NhZ2VzIiwiZGVwcmVjYXRlZCIsIm91dE1vZGUiLCJ2YWx1ZSIsImF0dHJhY3QiLCJib3VuY2UiLCJkaXJlY3Rpb24iLCJlbmFibGUiLCJyYW5kb20iLCJzcGVlZCIsInN0cmFpZ2h0IiwiQXR0cmFjdCIsIk1vdmVEaXJlY3Rpb24iLCJub25lIiwiT3V0TW9kZSIsIm91dCIsImRhdGEiLCJVdGlscyIsImhhc0RhdGEiLCJsb2FkIiwib3V0X21vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7SUFFYUEsSTs7OztBQUNUOzs7O3dCQUkrQjtBQUMzQkMseUJBQVNDLFVBQVQsQ0FBb0IseUJBQXBCLEVBQStDLHdCQUEvQzs7QUFFQSxhQUFPLEtBQUtDLE9BQVo7QUFDSDtBQUVEOzs7Ozs7c0JBS29CQyxLLEVBQWdCO0FBQ2hDSCx5QkFBU0MsVUFBVCxDQUFvQix5QkFBcEIsRUFBK0Msd0JBQS9DOztBQUVBLFdBQUtDLE9BQUwsR0FBZUMsS0FBZjtBQUNIOzs7QUFXRCxrQkFBYztBQUFBO0FBQUEsU0FUUEMsT0FTTztBQUFBLFNBUlBDLE1BUU87QUFBQSxTQVBQQyxTQU9PO0FBQUEsU0FOUEMsTUFNTztBQUFBLFNBTFBMLE9BS087QUFBQSxTQUpQTSxNQUlPO0FBQUEsU0FIUEMsS0FHTztBQUFBLFNBRlBDLFFBRU87QUFDVixTQUFLTixPQUFMLEdBQWUsSUFBSU8sZ0JBQUosRUFBZjtBQUNBLFNBQUtOLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQk0sNkJBQWNDLElBQS9CO0FBQ0EsU0FBS04sTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLTCxPQUFMLEdBQWVZLGlCQUFRQyxHQUF2QjtBQUNBLFNBQUtQLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0g7Ozs7eUJBRVdNLEksRUFBbUI7QUFDM0IsVUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFkLENBQUosRUFBeUI7QUFDckIsYUFBS1osT0FBTCxDQUFhZSxJQUFiLENBQWtCSCxJQUFJLENBQUNaLE9BQXZCOztBQUVBLFlBQUlhLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDWCxNQUFuQixDQUFKLEVBQWdDO0FBQzVCLGVBQUtBLE1BQUwsR0FBY1csSUFBSSxDQUFDWCxNQUFuQjtBQUNIOztBQUVELFlBQUlZLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDVixTQUFuQixDQUFKLEVBQW1DO0FBQy9CLGVBQUtBLFNBQUwsR0FBaUJVLElBQUksQ0FBQ1YsU0FBdEI7QUFDSDs7QUFFRCxZQUFJVyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ1QsTUFBbkIsQ0FBSixFQUFnQztBQUM1QixlQUFLQSxNQUFMLEdBQWNTLElBQUksQ0FBQ1QsTUFBbkI7QUFDSDs7QUFFRCxZQUFJVSxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ2QsT0FBbkIsQ0FBSixFQUFpQztBQUM3QixlQUFLQSxPQUFMLEdBQWVjLElBQUksQ0FBQ2QsT0FBcEI7QUFDSDs7QUFFRCxZQUFJZSxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ0ksUUFBbkIsQ0FBSixFQUFrQztBQUM5QixlQUFLQSxRQUFMLEdBQWdCSixJQUFJLENBQUNJLFFBQXJCO0FBQ0g7O0FBRUQsWUFBSUgsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNSLE1BQW5CLENBQUosRUFBZ0M7QUFDNUIsZUFBS0EsTUFBTCxHQUFjUSxJQUFJLENBQUNSLE1BQW5CO0FBQ0g7O0FBRUQsWUFBSVMsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNQLEtBQW5CLENBQUosRUFBK0I7QUFDM0IsZUFBS0EsS0FBTCxHQUFhTyxJQUFJLENBQUNQLEtBQWxCO0FBQ0g7O0FBRUQsWUFBSVEsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNOLFFBQW5CLENBQUosRUFBa0M7QUFDOUIsZUFBS0EsUUFBTCxHQUFnQk0sSUFBSSxDQUFDTixRQUFyQjtBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SU1vdmV9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lNb3ZlXCI7XG5pbXBvcnQge0F0dHJhY3R9IGZyb20gXCIuL0F0dHJhY3RcIjtcbmltcG9ydCB7TW92ZURpcmVjdGlvbn0gZnJvbSBcIi4uLy4uLy4uL0VudW1zL01vdmVEaXJlY3Rpb25cIjtcbmltcG9ydCB7T3V0TW9kZX0gZnJvbSBcIi4uLy4uLy4uL0VudW1zL091dE1vZGVcIjtcbmltcG9ydCB7SUF0dHJhY3R9IGZyb20gXCIuLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lBdHRyYWN0XCI7XG5pbXBvcnQge01lc3NhZ2VzfSBmcm9tIFwiLi4vLi4vVXRpbHMvTWVzc2FnZXNcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi8uLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgTW92ZSBpbXBsZW1lbnRzIElNb3ZlIHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBvdXRNb2RlXG4gICAgICovXG4gICAgcHVibGljIGdldCBvdXRfbW9kZSgpOiBPdXRNb2RlIHtcbiAgICAgICAgTWVzc2FnZXMuZGVwcmVjYXRlZChcInBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlXCIsIFwicGFydGljbGVzLm1vdmUub3V0TW9kZVwiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5vdXRNb2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IG91dE1vZGVcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IG91dF9tb2RlKHZhbHVlOiBPdXRNb2RlKSB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJwYXJ0aWNsZXMubW92ZS5vdXRfbW9kZVwiLCBcInBhcnRpY2xlcy5tb3ZlLm91dE1vZGVcIik7XG5cbiAgICAgICAgdGhpcy5vdXRNb2RlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGF0dHJhY3Q6IElBdHRyYWN0O1xuICAgIHB1YmxpYyBib3VuY2U6IGJvb2xlYW47XG4gICAgcHVibGljIGRpcmVjdGlvbjogTW92ZURpcmVjdGlvbjtcbiAgICBwdWJsaWMgZW5hYmxlOiBib29sZWFuO1xuICAgIHB1YmxpYyBvdXRNb2RlOiBPdXRNb2RlO1xuICAgIHB1YmxpYyByYW5kb206IGJvb2xlYW47XG4gICAgcHVibGljIHNwZWVkOiBudW1iZXI7XG4gICAgcHVibGljIHN0cmFpZ2h0OiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXR0cmFjdCA9IG5ldyBBdHRyYWN0KCk7XG4gICAgICAgIHRoaXMuYm91bmNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gTW92ZURpcmVjdGlvbi5ub25lO1xuICAgICAgICB0aGlzLmVuYWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMub3V0TW9kZSA9IE91dE1vZGUub3V0O1xuICAgICAgICB0aGlzLnJhbmRvbSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwZWVkID0gMjtcbiAgICAgICAgdGhpcy5zdHJhaWdodCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKGRhdGE6IElNb3ZlKTogdm9pZCB7XG4gICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEpKSB7XG4gICAgICAgICAgICB0aGlzLmF0dHJhY3QubG9hZChkYXRhLmF0dHJhY3QpO1xuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLmJvdW5jZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdW5jZSA9IGRhdGEuYm91bmNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLmRpcmVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRhdGEuZGlyZWN0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLmVuYWJsZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZSA9IGRhdGEuZW5hYmxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLm91dE1vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRNb2RlID0gZGF0YS5vdXRNb2RlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLm91dF9tb2RlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3V0X21vZGUgPSBkYXRhLm91dF9tb2RlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLnJhbmRvbSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmRvbSA9IGRhdGEucmFuZG9tO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLnNwZWVkKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSBkYXRhLnNwZWVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLnN0cmFpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RyYWlnaHQgPSBkYXRhLnN0cmFpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19