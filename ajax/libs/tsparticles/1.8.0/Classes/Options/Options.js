"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Options = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Interactivity = require("./Interactivity/Interactivity");

var _Particles = require("./Particles/Particles");

var _PolygonMask = require("./PolygonMask/PolygonMask");

var Options = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Options, [{
    key: "fps_limit",

    /**
     *
     * @deprecated this property is obsolete, please use the new fpsLimit
     */
    get: function get() {
      return this.fpsLimit;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new fpsLimit
     * @param value
     */
    ,
    set: function set(value) {
      this.fpsLimit = value;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new retinaDetect
     */

  }, {
    key: "retina_detect",
    get: function get() {
      return this.detectRetina;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new retinaDetect
     * @param value
     */
    ,
    set: function set(value) {
      this.detectRetina = value;
    }
  }]);

  function Options() {
    (0, _classCallCheck2["default"])(this, Options);
    this.detectRetina = void 0;
    this.fpsLimit = void 0;
    this.interactivity = void 0;
    this.particles = void 0;
    this.polygon = void 0;
    this.detectRetina = false;
    this.fpsLimit = 60;
    this.interactivity = new _Interactivity.Interactivity();
    this.particles = new _Particles.Particles();
    this.polygon = new _PolygonMask.PolygonMask();
  }

  return Options;
}();

exports.Options = Options;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvT3B0aW9ucy50cyJdLCJuYW1lcyI6WyJPcHRpb25zIiwiZnBzTGltaXQiLCJ2YWx1ZSIsImRldGVjdFJldGluYSIsImludGVyYWN0aXZpdHkiLCJwYXJ0aWNsZXMiLCJwb2x5Z29uIiwiSW50ZXJhY3Rpdml0eSIsIlBhcnRpY2xlcyIsIlBvbHlnb25NYXNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0lBS2FBLE87Ozs7QUFDVDs7Ozt3QkFJK0I7QUFDM0IsYUFBTyxLQUFLQyxRQUFaO0FBQ0g7QUFFRDs7Ozs7O3NCQUtxQkMsSyxFQUFlO0FBQ2hDLFdBQUtELFFBQUwsR0FBZ0JDLEtBQWhCO0FBQ0g7QUFFRDs7Ozs7Ozt3QkFJb0M7QUFDaEMsYUFBTyxLQUFLQyxZQUFaO0FBQ0g7QUFFRDs7Ozs7O3NCQUt5QkQsSyxFQUFnQjtBQUNyQyxXQUFLQyxZQUFMLEdBQW9CRCxLQUFwQjtBQUNIOzs7QUFRRCxxQkFBYztBQUFBO0FBQUEsU0FOUEMsWUFNTztBQUFBLFNBTFBGLFFBS087QUFBQSxTQUpQRyxhQUlPO0FBQUEsU0FIUEMsU0FHTztBQUFBLFNBRlBDLE9BRU87QUFDVixTQUFLSCxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsU0FBS0YsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtHLGFBQUwsR0FBcUIsSUFBSUcsNEJBQUosRUFBckI7QUFDQSxTQUFLRixTQUFMLEdBQWlCLElBQUlHLG9CQUFKLEVBQWpCO0FBQ0EsU0FBS0YsT0FBTCxHQUFlLElBQUlHLHdCQUFKLEVBQWY7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SU9wdGlvbnN9IGZyb20gXCIuLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvSU9wdGlvbnNcIjtcbmltcG9ydCB7SW50ZXJhY3Rpdml0eX0gZnJvbSBcIi4vSW50ZXJhY3Rpdml0eS9JbnRlcmFjdGl2aXR5XCI7XG5pbXBvcnQge1BhcnRpY2xlc30gZnJvbSBcIi4vUGFydGljbGVzL1BhcnRpY2xlc1wiO1xuaW1wb3J0IHtQb2x5Z29uTWFza30gZnJvbSBcIi4vUG9seWdvbk1hc2svUG9seWdvbk1hc2tcIjtcbmltcG9ydCB7SUludGVyYWN0aXZpdHl9IGZyb20gXCIuLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9JSW50ZXJhY3Rpdml0eVwiO1xuaW1wb3J0IHtJUGFydGljbGVzfSBmcm9tIFwiLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BhcnRpY2xlcy9JUGFydGljbGVzXCI7XG5pbXBvcnQge0lQb2x5Z29uTWFza30gZnJvbSBcIi4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9Qb2x5Z29uTWFzay9JUG9seWdvbk1hc2tcIjtcblxuZXhwb3J0IGNsYXNzIE9wdGlvbnMgaW1wbGVtZW50cyBJT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgZnBzTGltaXRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGZwc19saW1pdCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5mcHNMaW1pdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBmcHNMaW1pdFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgZnBzX2xpbWl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5mcHNMaW1pdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IHJldGluYURldGVjdFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgcmV0aW5hX2RldGVjdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGV0ZWN0UmV0aW5hO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IHJldGluYURldGVjdFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgcmV0aW5hX2RldGVjdCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmRldGVjdFJldGluYSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXRlY3RSZXRpbmE6IGJvb2xlYW47XG4gICAgcHVibGljIGZwc0xpbWl0OiBudW1iZXI7XG4gICAgcHVibGljIGludGVyYWN0aXZpdHk6IElJbnRlcmFjdGl2aXR5O1xuICAgIHB1YmxpYyBwYXJ0aWNsZXM6IElQYXJ0aWNsZXM7XG4gICAgcHVibGljIHBvbHlnb246IElQb2x5Z29uTWFzaztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRldGVjdFJldGluYSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZwc0xpbWl0ID0gNjA7XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpdml0eSA9IG5ldyBJbnRlcmFjdGl2aXR5KCk7XG4gICAgICAgIHRoaXMucGFydGljbGVzID0gbmV3IFBhcnRpY2xlcygpO1xuICAgICAgICB0aGlzLnBvbHlnb24gPSBuZXcgUG9seWdvbk1hc2soKTtcbiAgICB9XG59XG4iXX0=