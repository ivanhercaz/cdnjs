"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClickEvent = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _ClickMode = require("../../../../Enums/Modes/ClickMode");

var ClickEvent = function ClickEvent() {
  (0, _classCallCheck2["default"])(this, ClickEvent);
  this.enable = void 0;
  this.mode = void 0;
  this.enable = true;
  this.mode = _ClickMode.ClickMode.push;
};

exports.ClickEvent = ClickEvent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9FdmVudHMvQ2xpY2tFdmVudC50cyJdLCJuYW1lcyI6WyJDbGlja0V2ZW50IiwiZW5hYmxlIiwibW9kZSIsIkNsaWNrTW9kZSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRWFBLFUsR0FJVCxzQkFBYztBQUFBO0FBQUEsT0FIUEMsTUFHTztBQUFBLE9BRlBDLElBRU87QUFDVixPQUFLRCxNQUFMLEdBQWMsSUFBZDtBQUNBLE9BQUtDLElBQUwsR0FBWUMscUJBQVVDLElBQXRCO0FBQ0gsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUNsaWNrRXZlbnR9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9FdmVudHMvSUNsaWNrRXZlbnRcIjtcbmltcG9ydCB7Q2xpY2tNb2RlfSBmcm9tIFwiLi4vLi4vLi4vLi4vRW51bXMvTW9kZXMvQ2xpY2tNb2RlXCI7XG5cbmV4cG9ydCBjbGFzcyBDbGlja0V2ZW50IGltcGxlbWVudHMgSUNsaWNrRXZlbnQge1xuICAgIHB1YmxpYyBlbmFibGU6IGJvb2xlYW47XG4gICAgcHVibGljIG1vZGU6IENsaWNrTW9kZSB8IENsaWNrTW9kZVtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tb2RlID0gQ2xpY2tNb2RlLnB1c2g7XG4gICAgfVxufVxuIl19