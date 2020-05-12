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

var _Messages = require("../Utils/Messages");

var Options = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Options, [{
    key: "fps_limit",

    /**
     *
     * @deprecated this property is obsolete, please use the new fpsLimit
     */
    get: function get() {
      _Messages.Messages.deprecated("fps_limit", "fpsLimit");

      return this.fpsLimit;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new fpsLimit
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("fps_limit", "fpsLimit");

      this.fpsLimit = value;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new retinaDetect
     */

  }, {
    key: "retina_detect",
    get: function get() {
      _Messages.Messages.deprecated("retina_detect", "detectsRetina");

      return this.detectRetina;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new retinaDetect
     * @param value
     */
    ,
    set: function set(value) {
      _Messages.Messages.deprecated("retina_detect", "detectsRetina");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvT3B0aW9ucy50cyJdLCJuYW1lcyI6WyJPcHRpb25zIiwiTWVzc2FnZXMiLCJkZXByZWNhdGVkIiwiZnBzTGltaXQiLCJ2YWx1ZSIsImRldGVjdFJldGluYSIsImludGVyYWN0aXZpdHkiLCJwYXJ0aWNsZXMiLCJwb2x5Z29uIiwiSW50ZXJhY3Rpdml0eSIsIlBhcnRpY2xlcyIsIlBvbHlnb25NYXNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBSUE7O0lBRWFBLE87Ozs7QUFDVDs7Ozt3QkFJK0I7QUFDM0JDLHlCQUFTQyxVQUFULENBQW9CLFdBQXBCLEVBQWlDLFVBQWpDOztBQUVBLGFBQU8sS0FBS0MsUUFBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLcUJDLEssRUFBZTtBQUNoQ0gseUJBQVNDLFVBQVQsQ0FBb0IsV0FBcEIsRUFBaUMsVUFBakM7O0FBRUEsV0FBS0MsUUFBTCxHQUFnQkMsS0FBaEI7QUFDSDtBQUVEOzs7Ozs7O3dCQUlvQztBQUNoQ0gseUJBQVNDLFVBQVQsQ0FBb0IsZUFBcEIsRUFBcUMsZUFBckM7O0FBRUEsYUFBTyxLQUFLRyxZQUFaO0FBQ0g7QUFFRDs7Ozs7O3NCQUt5QkQsSyxFQUFnQjtBQUNyQ0gseUJBQVNDLFVBQVQsQ0FBb0IsZUFBcEIsRUFBcUMsZUFBckM7O0FBRUEsV0FBS0csWUFBTCxHQUFvQkQsS0FBcEI7QUFDSDs7O0FBUUQscUJBQWM7QUFBQTtBQUFBLFNBTlBDLFlBTU87QUFBQSxTQUxQRixRQUtPO0FBQUEsU0FKUEcsYUFJTztBQUFBLFNBSFBDLFNBR087QUFBQSxTQUZQQyxPQUVPO0FBQ1YsU0FBS0gsWUFBTCxHQUFvQixLQUFwQjtBQUNBLFNBQUtGLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLRyxhQUFMLEdBQXFCLElBQUlHLDRCQUFKLEVBQXJCO0FBQ0EsU0FBS0YsU0FBTCxHQUFpQixJQUFJRyxvQkFBSixFQUFqQjtBQUNBLFNBQUtGLE9BQUwsR0FBZSxJQUFJRyx3QkFBSixFQUFmO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lPcHRpb25zfSBmcm9tIFwiLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL0lPcHRpb25zXCI7XG5pbXBvcnQge0ludGVyYWN0aXZpdHl9IGZyb20gXCIuL0ludGVyYWN0aXZpdHkvSW50ZXJhY3Rpdml0eVwiO1xuaW1wb3J0IHtQYXJ0aWNsZXN9IGZyb20gXCIuL1BhcnRpY2xlcy9QYXJ0aWNsZXNcIjtcbmltcG9ydCB7UG9seWdvbk1hc2t9IGZyb20gXCIuL1BvbHlnb25NYXNrL1BvbHlnb25NYXNrXCI7XG5pbXBvcnQge0lJbnRlcmFjdGl2aXR5fSBmcm9tIFwiLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL0ludGVyYWN0aXZpdHkvSUludGVyYWN0aXZpdHlcIjtcbmltcG9ydCB7SVBhcnRpY2xlc30gZnJvbSBcIi4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9QYXJ0aWNsZXMvSVBhcnRpY2xlc1wiO1xuaW1wb3J0IHtJUG9seWdvbk1hc2t9IGZyb20gXCIuLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUG9seWdvbk1hc2svSVBvbHlnb25NYXNrXCI7XG5pbXBvcnQge01lc3NhZ2VzfSBmcm9tIFwiLi4vVXRpbHMvTWVzc2FnZXNcIjtcblxuZXhwb3J0IGNsYXNzIE9wdGlvbnMgaW1wbGVtZW50cyBJT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgZnBzTGltaXRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGZwc19saW1pdCgpOiBudW1iZXIge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwiZnBzX2xpbWl0XCIsIFwiZnBzTGltaXRcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZnBzTGltaXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgZnBzTGltaXRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGZwc19saW1pdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJmcHNfbGltaXRcIiwgXCJmcHNMaW1pdFwiKTtcblxuICAgICAgICB0aGlzLmZwc0xpbWl0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgcmV0aW5hRGV0ZWN0XG4gICAgICovXG4gICAgcHVibGljIGdldCByZXRpbmFfZGV0ZWN0KCk6IGJvb2xlYW4ge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwicmV0aW5hX2RldGVjdFwiLCBcImRldGVjdHNSZXRpbmFcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGV0ZWN0UmV0aW5hO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IHJldGluYURldGVjdFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgcmV0aW5hX2RldGVjdCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwicmV0aW5hX2RldGVjdFwiLCBcImRldGVjdHNSZXRpbmFcIik7XG5cbiAgICAgICAgdGhpcy5kZXRlY3RSZXRpbmEgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGV0ZWN0UmV0aW5hOiBib29sZWFuO1xuICAgIHB1YmxpYyBmcHNMaW1pdDogbnVtYmVyO1xuICAgIHB1YmxpYyBpbnRlcmFjdGl2aXR5OiBJSW50ZXJhY3Rpdml0eTtcbiAgICBwdWJsaWMgcGFydGljbGVzOiBJUGFydGljbGVzO1xuICAgIHB1YmxpYyBwb2x5Z29uOiBJUG9seWdvbk1hc2s7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZXRlY3RSZXRpbmEgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mcHNMaW1pdCA9IDYwO1xuICAgICAgICB0aGlzLmludGVyYWN0aXZpdHkgPSBuZXcgSW50ZXJhY3Rpdml0eSgpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZXMoKTtcbiAgICAgICAgdGhpcy5wb2x5Z29uID0gbmV3IFBvbHlnb25NYXNrKCk7XG4gICAgfVxufVxuIl19