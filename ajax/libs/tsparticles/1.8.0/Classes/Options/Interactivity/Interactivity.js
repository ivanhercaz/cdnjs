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

var Interactivity = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Interactivity, [{
    key: "detect_on",

    /**
     *
     * @deprecated this property is obsolete, please use the new detectsOn
     */
    get: function get() {
      return this.detectsOn;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new detectsOn
     * @param value
     */
    ,
    set: function set(value) {
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

  return Interactivity;
}();

exports.Interactivity = Interactivity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9JbnRlcmFjdGl2aXR5LnRzIl0sIm5hbWVzIjpbIkludGVyYWN0aXZpdHkiLCJkZXRlY3RzT24iLCJ2YWx1ZSIsImV2ZW50cyIsIm1vZGVzIiwiSW50ZXJhY3Rpdml0eURldGVjdCIsImNhbnZhcyIsIkV2ZW50cyIsIk1vZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBRWFBLGE7Ozs7QUFDVDs7Ozt3QkFJNEM7QUFDeEMsYUFBTyxLQUFLQyxTQUFaO0FBQ0g7QUFFRDs7Ozs7O3NCQUtxQkMsSyxFQUE0QjtBQUM3QyxXQUFLRCxTQUFMLEdBQWlCQyxLQUFqQjtBQUNIOzs7QUFNRCwyQkFBYztBQUFBO0FBQUEsU0FKUEQsU0FJTztBQUFBLFNBSFBFLE1BR087QUFBQSxTQUZQQyxLQUVPO0FBQ1YsU0FBS0gsU0FBTCxHQUFpQkkseUNBQW9CQyxNQUFyQztBQUNBLFNBQUtILE1BQUwsR0FBYyxJQUFJSSxjQUFKLEVBQWQ7QUFDQSxTQUFLSCxLQUFMLEdBQWEsSUFBSUksWUFBSixFQUFiO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lJbnRlcmFjdGl2aXR5fSBmcm9tIFwiLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL0ludGVyYWN0aXZpdHkvSUludGVyYWN0aXZpdHlcIjtcbmltcG9ydCB7SW50ZXJhY3Rpdml0eURldGVjdH0gZnJvbSBcIi4uLy4uLy4uL0VudW1zL0ludGVyYWN0aXZpdHlEZXRlY3RcIjtcbmltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9FdmVudHMvRXZlbnRzXCI7XG5pbXBvcnQge01vZGVzfSBmcm9tIFwiLi9Nb2Rlcy9Nb2Rlc1wiO1xuXG5leHBvcnQgY2xhc3MgSW50ZXJhY3Rpdml0eSBpbXBsZW1lbnRzIElJbnRlcmFjdGl2aXR5IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBkZXRlY3RzT25cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGRldGVjdF9vbigpOiBJbnRlcmFjdGl2aXR5RGV0ZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGV0ZWN0c09uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IGRldGVjdHNPblxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgZGV0ZWN0X29uKHZhbHVlOiBJbnRlcmFjdGl2aXR5RGV0ZWN0KSB7XG4gICAgICAgIHRoaXMuZGV0ZWN0c09uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGRldGVjdHNPbjogSW50ZXJhY3Rpdml0eURldGVjdDtcbiAgICBwdWJsaWMgZXZlbnRzOiBFdmVudHM7XG4gICAgcHVibGljIG1vZGVzOiBNb2RlcztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRldGVjdHNPbiA9IEludGVyYWN0aXZpdHlEZXRlY3QuY2FudmFzO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICAgICAgdGhpcy5tb2RlcyA9IG5ldyBNb2RlcygpO1xuICAgIH1cbn1cbiJdfQ==