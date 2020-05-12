"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slow = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../../../Utils/Utils");

var Slow = /*#__PURE__*/function () {
  function Slow() {
    (0, _classCallCheck2["default"])(this, Slow);
    this.active = void 0;
    this.factor = void 0;
    this.radius = void 0;
    this.active = false;
    this.factor = 1;
    this.radius = 0;
  }

  (0, _createClass2["default"])(Slow, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        if (_Utils.Utils.hasData(data.active)) {
          this.active = data.active;
        }

        if (_Utils.Utils.hasData(data.factor)) {
          this.factor = data.factor;
        }

        if (_Utils.Utils.hasData(data.radius)) {
          this.radius = data.radius;
        }
      }
    }
  }]);
  return Slow;
}();

exports.Slow = Slow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9TbG93LnRzIl0sIm5hbWVzIjpbIlNsb3ciLCJhY3RpdmUiLCJmYWN0b3IiLCJyYWRpdXMiLCJkYXRhIiwiVXRpbHMiLCJoYXNEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRWFBLEk7QUFLVCxrQkFBYztBQUFBO0FBQUEsU0FKUEMsTUFJTztBQUFBLFNBSFBDLE1BR087QUFBQSxTQUZQQyxNQUVPO0FBQ1YsU0FBS0YsTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0g7Ozs7eUJBRVdDLEksRUFBbUI7QUFDM0IsVUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFkLENBQUosRUFBeUI7QUFDckIsWUFBSUMsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNILE1BQW5CLENBQUosRUFBZ0M7QUFDNUIsZUFBS0EsTUFBTCxHQUFjRyxJQUFJLENBQUNILE1BQW5CO0FBQ0g7O0FBRUQsWUFBSUksYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNGLE1BQW5CLENBQUosRUFBZ0M7QUFDNUIsZUFBS0EsTUFBTCxHQUFjRSxJQUFJLENBQUNGLE1BQW5CO0FBQ0g7O0FBRUQsWUFBSUcsYUFBTUMsT0FBTixDQUFjRixJQUFJLENBQUNELE1BQW5CLENBQUosRUFBZ0M7QUFDNUIsZUFBS0EsTUFBTCxHQUFjQyxJQUFJLENBQUNELE1BQW5CO0FBQ0g7QUFDSjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJU2xvd30gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L01vZGVzL0lTbG93XCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vLi4vLi4vVXRpbHMvVXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFNsb3cgaW1wbGVtZW50cyBJU2xvdyB7XG4gICAgcHVibGljIGFjdGl2ZTogYm9vbGVhbjtcbiAgICBwdWJsaWMgZmFjdG9yOiBudW1iZXI7XG4gICAgcHVibGljIHJhZGl1czogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmFjdG9yID0gMTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAwO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKGRhdGE6IElTbG93KTogdm9pZCB7XG4gICAgICAgIGlmIChVdGlscy5oYXNEYXRhKGRhdGEpKSB7XG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLmFjdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGRhdGEuYWN0aXZlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLmZhY3RvcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZhY3RvciA9IGRhdGEuZmFjdG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbHMuaGFzRGF0YShkYXRhLnJhZGl1cykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJhZGl1cyA9IGRhdGEucmFkaXVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19