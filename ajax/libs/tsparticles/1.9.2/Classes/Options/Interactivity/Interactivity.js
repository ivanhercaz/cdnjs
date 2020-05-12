"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interactivity = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _InteractivityDetect = require("../../../Enums/InteractivityDetect");

var _Events = require("./Events/Events");

var _Modes = require("./Modes/Modes");

var _Messages = require("../../Utils/Messages");

var _Utils = require("../../Utils/Utils");

var Interactivity = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Interactivity, [{
    key: "detect_on",

    /**
     *
     * @deprecated this property is obsolete, please use the new detectsOn
     */
    get: function get() {
      _Messages.Messages.deprecated("interactivity.detect_on", "interactivity.detectsOn");

      return this.detectsOn;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new detectsOn
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("interactivity.detect_on", "interactivity.detectsOn");

      this.detectsOn = value;
    }
  }]);

  function Interactivity() {
    (0, _classCallCheck2["default"])(this, Interactivity);
    this.detectsOn = void 0;
    this.events = void 0;
    this.modes = void 0;
    this.detectsOn = _InteractivityDetect.InteractivityDetect.canvas;
    this.events = new _Events.Events();
    this.modes = new _Modes.Modes();
  }

  (0, _createClass2["default"])(Interactivity, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.detectsOn)) {
          this.detectsOn = data.detectsOn;
        }

        if (_Utils.Utils.hasData(data.detect_on)) {
          this.detect_on = data.detect_on;
        }

        this.events.load(data.events);
        this.modes.load(data.modes);
      }
    }
  }]);
  return Interactivity;
}();

exports.Interactivity = Interactivity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9JbnRlcmFjdGl2aXR5LnRzIl0sIm5hbWVzIjpbIkludGVyYWN0aXZpdHkiLCJNZXNzYWdlcyIsImRlcHJlY2F0ZWQiLCJkZXRlY3RzT24iLCJ2YWx1ZSIsImV2ZW50cyIsIm1vZGVzIiwiSW50ZXJhY3Rpdml0eURldGVjdCIsImNhbnZhcyIsIkV2ZW50cyIsIk1vZGVzIiwiZGF0YSIsIlV0aWxzIiwiaGFzRGF0YSIsImRldGVjdF9vbiIsImxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7SUFFYUEsYTs7OztBQUNUOzs7O3dCQUk0QztBQUN4Q0MseUJBQVNDLFVBQVQsQ0FBb0IseUJBQXBCLEVBQStDLHlCQUEvQzs7QUFFQSxhQUFPLEtBQUtDLFNBQVo7QUFDSDtBQUVEOzs7Ozs7c0JBS3FCQyxLLEVBQTRCO0FBQzdDSCx5QkFBU0MsVUFBVCxDQUFvQix5QkFBcEIsRUFBK0MseUJBQS9DOztBQUVBLFdBQUtDLFNBQUwsR0FBaUJDLEtBQWpCO0FBQ0g7OztBQU1ELDJCQUFjO0FBQUE7QUFBQSxTQUpQRCxTQUlPO0FBQUEsU0FIUEUsTUFHTztBQUFBLFNBRlBDLEtBRU87QUFDVixTQUFLSCxTQUFMLEdBQWlCSSx5Q0FBb0JDLE1BQXJDO0FBQ0EsU0FBS0gsTUFBTCxHQUFjLElBQUlJLGNBQUosRUFBZDtBQUNBLFNBQUtILEtBQUwsR0FBYSxJQUFJSSxZQUFKLEVBQWI7QUFDSDs7Ozt5QkFFV0MsSSxFQUE0QjtBQUNwQyxVQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF5QjtBQUNyQixZQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ1IsU0FBbkIsQ0FBSixFQUFtQztBQUMvQixlQUFLQSxTQUFMLEdBQWlCUSxJQUFJLENBQUNSLFNBQXRCO0FBQ0g7O0FBRUQsWUFBSVMsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNHLFNBQW5CLENBQUosRUFBbUM7QUFDL0IsZUFBS0EsU0FBTCxHQUFpQkgsSUFBSSxDQUFDRyxTQUF0QjtBQUNIOztBQUVELGFBQUtULE1BQUwsQ0FBWVUsSUFBWixDQUFpQkosSUFBSSxDQUFDTixNQUF0QjtBQUNBLGFBQUtDLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQkosSUFBSSxDQUFDTCxLQUFyQjtBQUNIO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lJbnRlcmFjdGl2aXR5fSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL0ludGVyYWN0aXZpdHkvSUludGVyYWN0aXZpdHlcIjtcbmltcG9ydCB7SW50ZXJhY3Rpdml0eURldGVjdH0gZnJvbSBcIi4uLy4uLy4uL0VudW1zL0ludGVyYWN0aXZpdHlEZXRlY3RcIjtcbmltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHMvRXZlbnRzXCI7XG5pbXBvcnQge01vZGVzfSBmcm9tIFwiLi9Nb2Rlcy9Nb2Rlc1wiO1xuaW1wb3J0IHtNZXNzYWdlc30gZnJvbSBcIi4uLy4uL1V0aWxzL01lc3NhZ2VzXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vLi4vVXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEludGVyYWN0aXZpdHkgaW1wbGVtZW50cyBJSW50ZXJhY3Rpdml0eSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgZGV0ZWN0c09uXG4gICAgICovXG4gICAgcHVibGljIGdldCBkZXRlY3Rfb24oKTogSW50ZXJhY3Rpdml0eURldGVjdCB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJpbnRlcmFjdGl2aXR5LmRldGVjdF9vblwiLCBcImludGVyYWN0aXZpdHkuZGV0ZWN0c09uXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmRldGVjdHNPbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBkZXRlY3RzT25cbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGRldGVjdF9vbih2YWx1ZTogSW50ZXJhY3Rpdml0eURldGVjdCkge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwiaW50ZXJhY3Rpdml0eS5kZXRlY3Rfb25cIiwgXCJpbnRlcmFjdGl2aXR5LmRldGVjdHNPblwiKTtcblxuICAgICAgICB0aGlzLmRldGVjdHNPbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXRlY3RzT246IEludGVyYWN0aXZpdHlEZXRlY3Q7XG4gICAgcHVibGljIGV2ZW50czogRXZlbnRzO1xuICAgIHB1YmxpYyBtb2RlczogTW9kZXM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZXRlY3RzT24gPSBJbnRlcmFjdGl2aXR5RGV0ZWN0LmNhbnZhcztcbiAgICAgICAgdGhpcy5ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgICAgIHRoaXMubW9kZXMgPSBuZXcgTW9kZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChkYXRhOiBJSW50ZXJhY3Rpdml0eSk6IHZvaWQge1xuICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhKSkge1xuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5kZXRlY3RzT24pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3RzT24gPSBkYXRhLmRldGVjdHNPbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5kZXRlY3Rfb24pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3Rfb24gPSBkYXRhLmRldGVjdF9vbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5ldmVudHMubG9hZChkYXRhLmV2ZW50cyk7XG4gICAgICAgICAgICB0aGlzLm1vZGVzLmxvYWQoZGF0YS5tb2Rlcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=