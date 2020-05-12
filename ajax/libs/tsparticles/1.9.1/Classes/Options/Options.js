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

var _Utils = require("../Utils/Utils");

var _BackgroundMask = require("./BackgroundMask/BackgroundMask");

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
    this.backgroundMask = void 0;
    this.detectRetina = false;
    this.fpsLimit = 60;
    this.interactivity = new _Interactivity.Interactivity();
    this.particles = new _Particles.Particles();
    this.polygon = new _PolygonMask.PolygonMask();
    this.backgroundMask = new _BackgroundMask.BackgroundMask();
  }

  (0, _createClass2["default"])(Options, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.detectRetina)) {
          this.detectRetina = data.detectRetina;
        }

        if (_Utils.Utils.hasData(data.retina_detect)) {
          this.retina_detect = data.retina_detect;
        }

        if (_Utils.Utils.hasData(data.fpsLimit)) {
          this.fpsLimit = data.fpsLimit;
        }

        if (_Utils.Utils.hasData(data.fps_limit)) {
          this.fps_limit = data.fps_limit;
        }

        this.interactivity.load(data.interactivity);
        this.particles.load(data.particles);
        this.polygon.load(data.polygon);
        this.backgroundMask.load(data.backgroundMask);
      }
    }
  }]);
  return Options;
}();

exports.Options = Options;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvT3B0aW9ucy50cyJdLCJuYW1lcyI6WyJPcHRpb25zIiwiTWVzc2FnZXMiLCJkZXByZWNhdGVkIiwiZnBzTGltaXQiLCJ2YWx1ZSIsImRldGVjdFJldGluYSIsImludGVyYWN0aXZpdHkiLCJwYXJ0aWNsZXMiLCJwb2x5Z29uIiwiYmFja2dyb3VuZE1hc2siLCJJbnRlcmFjdGl2aXR5IiwiUGFydGljbGVzIiwiUG9seWdvbk1hc2siLCJCYWNrZ3JvdW5kTWFzayIsImRhdGEiLCJVdGlscyIsImhhc0RhdGEiLCJyZXRpbmFfZGV0ZWN0IiwiZnBzX2xpbWl0IiwibG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUlBOztBQUNBOztBQUVBOztJQUVhQSxPOzs7O0FBQ1Q7Ozs7d0JBSStCO0FBQzNCQyx5QkFBU0MsVUFBVCxDQUFvQixXQUFwQixFQUFpQyxVQUFqQzs7QUFFQSxhQUFPLEtBQUtDLFFBQVo7QUFDSDtBQUVEOzs7Ozs7c0JBS3FCQyxLLEVBQWU7QUFDaENILHlCQUFTQyxVQUFULENBQW9CLFdBQXBCLEVBQWlDLFVBQWpDOztBQUVBLFdBQUtDLFFBQUwsR0FBZ0JDLEtBQWhCO0FBQ0g7QUFFRDs7Ozs7Ozt3QkFJb0M7QUFDaENILHlCQUFTQyxVQUFULENBQW9CLGVBQXBCLEVBQXFDLGVBQXJDOztBQUVBLGFBQU8sS0FBS0csWUFBWjtBQUNIO0FBRUQ7Ozs7OztzQkFLeUJELEssRUFBZ0I7QUFDckNILHlCQUFTQyxVQUFULENBQW9CLGVBQXBCLEVBQXFDLGVBQXJDOztBQUVBLFdBQUtHLFlBQUwsR0FBb0JELEtBQXBCO0FBQ0g7OztBQVNELHFCQUFjO0FBQUE7QUFBQSxTQVBQQyxZQU9PO0FBQUEsU0FOUEYsUUFNTztBQUFBLFNBTFBHLGFBS087QUFBQSxTQUpQQyxTQUlPO0FBQUEsU0FIUEMsT0FHTztBQUFBLFNBRlBDLGNBRU87QUFDVixTQUFLSixZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsU0FBS0YsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtHLGFBQUwsR0FBcUIsSUFBSUksNEJBQUosRUFBckI7QUFDQSxTQUFLSCxTQUFMLEdBQWlCLElBQUlJLG9CQUFKLEVBQWpCO0FBQ0EsU0FBS0gsT0FBTCxHQUFlLElBQUlJLHdCQUFKLEVBQWY7QUFDQSxTQUFLSCxjQUFMLEdBQXNCLElBQUlJLDhCQUFKLEVBQXRCO0FBQ0g7Ozs7eUJBRVdDLEksRUFBc0I7QUFDOUIsVUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFkLENBQUosRUFBeUI7QUFDckIsWUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNULFlBQW5CLENBQUosRUFBc0M7QUFDbEMsZUFBS0EsWUFBTCxHQUFvQlMsSUFBSSxDQUFDVCxZQUF6QjtBQUNIOztBQUVELFlBQUlVLGFBQU1DLE9BQU4sQ0FBY0YsSUFBSSxDQUFDRyxhQUFuQixDQUFKLEVBQXVDO0FBQ25DLGVBQUtBLGFBQUwsR0FBcUJILElBQUksQ0FBQ0csYUFBMUI7QUFDSDs7QUFFRCxZQUFJRixhQUFNQyxPQUFOLENBQWNGLElBQUksQ0FBQ1gsUUFBbkIsQ0FBSixFQUFrQztBQUM5QixlQUFLQSxRQUFMLEdBQWdCVyxJQUFJLENBQUNYLFFBQXJCO0FBQ0g7O0FBRUQsWUFBSVksYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNJLFNBQW5CLENBQUosRUFBbUM7QUFDL0IsZUFBS0EsU0FBTCxHQUFpQkosSUFBSSxDQUFDSSxTQUF0QjtBQUNIOztBQUVELGFBQUtaLGFBQUwsQ0FBbUJhLElBQW5CLENBQXdCTCxJQUFJLENBQUNSLGFBQTdCO0FBQ0EsYUFBS0MsU0FBTCxDQUFlWSxJQUFmLENBQW9CTCxJQUFJLENBQUNQLFNBQXpCO0FBQ0EsYUFBS0MsT0FBTCxDQUFhVyxJQUFiLENBQWtCTCxJQUFJLENBQUNOLE9BQXZCO0FBQ0EsYUFBS0MsY0FBTCxDQUFvQlUsSUFBcEIsQ0FBeUJMLElBQUksQ0FBQ0wsY0FBOUI7QUFDSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJT3B0aW9uc30gZnJvbSBcIi4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JT3B0aW9uc1wiO1xuaW1wb3J0IHtJbnRlcmFjdGl2aXR5fSBmcm9tIFwiLi9JbnRlcmFjdGl2aXR5L0ludGVyYWN0aXZpdHlcIjtcbmltcG9ydCB7UGFydGljbGVzfSBmcm9tIFwiLi9QYXJ0aWNsZXMvUGFydGljbGVzXCI7XG5pbXBvcnQge1BvbHlnb25NYXNrfSBmcm9tIFwiLi9Qb2x5Z29uTWFzay9Qb2x5Z29uTWFza1wiO1xuaW1wb3J0IHtJSW50ZXJhY3Rpdml0eX0gZnJvbSBcIi4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L0lJbnRlcmFjdGl2aXR5XCI7XG5pbXBvcnQge0lQYXJ0aWNsZXN9IGZyb20gXCIuLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvUGFydGljbGVzL0lQYXJ0aWNsZXNcIjtcbmltcG9ydCB7SVBvbHlnb25NYXNrfSBmcm9tIFwiLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL1BvbHlnb25NYXNrL0lQb2x5Z29uTWFza1wiO1xuaW1wb3J0IHtNZXNzYWdlc30gZnJvbSBcIi4uL1V0aWxzL01lc3NhZ2VzXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vVXRpbHMvVXRpbHNcIjtcbmltcG9ydCB7SUJhY2tncm91bmRNYXNrfSBmcm9tIFwiLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL0JhY2tncm91bmRNYXNrL0lCYWNrZ3JvdW5kTWFza1wiO1xuaW1wb3J0IHtCYWNrZ3JvdW5kTWFza30gZnJvbSBcIi4vQmFja2dyb3VuZE1hc2svQmFja2dyb3VuZE1hc2tcIjtcblxuZXhwb3J0IGNsYXNzIE9wdGlvbnMgaW1wbGVtZW50cyBJT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgZnBzTGltaXRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGZwc19saW1pdCgpOiBudW1iZXIge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwiZnBzX2xpbWl0XCIsIFwiZnBzTGltaXRcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZnBzTGltaXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgZnBzTGltaXRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGZwc19saW1pdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIE1lc3NhZ2VzLmRlcHJlY2F0ZWQoXCJmcHNfbGltaXRcIiwgXCJmcHNMaW1pdFwiKTtcblxuICAgICAgICB0aGlzLmZwc0xpbWl0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgcmV0aW5hRGV0ZWN0XG4gICAgICovXG4gICAgcHVibGljIGdldCByZXRpbmFfZGV0ZWN0KCk6IGJvb2xlYW4ge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwicmV0aW5hX2RldGVjdFwiLCBcImRldGVjdHNSZXRpbmFcIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGV0ZWN0UmV0aW5hO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgdGhpcyBwcm9wZXJ0eSBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IHJldGluYURldGVjdFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgcmV0aW5hX2RldGVjdCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICBNZXNzYWdlcy5kZXByZWNhdGVkKFwicmV0aW5hX2RldGVjdFwiLCBcImRldGVjdHNSZXRpbmFcIik7XG5cbiAgICAgICAgdGhpcy5kZXRlY3RSZXRpbmEgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGV0ZWN0UmV0aW5hOiBib29sZWFuO1xuICAgIHB1YmxpYyBmcHNMaW1pdDogbnVtYmVyO1xuICAgIHB1YmxpYyBpbnRlcmFjdGl2aXR5OiBJSW50ZXJhY3Rpdml0eTtcbiAgICBwdWJsaWMgcGFydGljbGVzOiBJUGFydGljbGVzO1xuICAgIHB1YmxpYyBwb2x5Z29uOiBJUG9seWdvbk1hc2s7XG4gICAgcHVibGljIGJhY2tncm91bmRNYXNrOiBJQmFja2dyb3VuZE1hc2s7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kZXRlY3RSZXRpbmEgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mcHNMaW1pdCA9IDYwO1xuICAgICAgICB0aGlzLmludGVyYWN0aXZpdHkgPSBuZXcgSW50ZXJhY3Rpdml0eSgpO1xuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IG5ldyBQYXJ0aWNsZXMoKTtcbiAgICAgICAgdGhpcy5wb2x5Z29uID0gbmV3IFBvbHlnb25NYXNrKCk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZE1hc2sgPSBuZXcgQmFja2dyb3VuZE1hc2soKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChkYXRhOiBJT3B0aW9ucyk6IHZvaWQge1xuICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhKSkge1xuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5kZXRlY3RSZXRpbmEpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3RSZXRpbmEgPSBkYXRhLmRldGVjdFJldGluYTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5yZXRpbmFfZGV0ZWN0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmV0aW5hX2RldGVjdCA9IGRhdGEucmV0aW5hX2RldGVjdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5mcHNMaW1pdCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZwc0xpbWl0ID0gZGF0YS5mcHNMaW1pdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YS5mcHNfbGltaXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcHNfbGltaXQgPSBkYXRhLmZwc19saW1pdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGl2aXR5LmxvYWQoZGF0YS5pbnRlcmFjdGl2aXR5KTtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzLmxvYWQoZGF0YS5wYXJ0aWNsZXMpO1xuICAgICAgICAgICAgdGhpcy5wb2x5Z29uLmxvYWQoZGF0YS5wb2x5Z29uKTtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZE1hc2subG9hZChkYXRhLmJhY2tncm91bmRNYXNrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==