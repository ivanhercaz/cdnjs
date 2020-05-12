"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modes = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Bubble = require("./Bubble");

var _Connect = require("./Connect");

var _Grab = require("./Grab");

var _Remove = require("./Remove");

var _Push = require("./Push");

var _Repulse = require("./Repulse");

var _Slow = require("./Slow");

var _Utils = require("../../../Utils/Utils");

var Modes = /*#__PURE__*/function () {
  function Modes() {
    (0, _classCallCheck2["default"])(this, Modes);
    this.bubble = void 0;
    this.connect = void 0;
    this.grab = void 0;
    this.push = void 0;
    this.remove = void 0;
    this.repulse = void 0;
    this.slow = void 0;
    this.bubble = new _Bubble.Bubble();
    this.connect = new _Connect.Connect();
    this.grab = new _Grab.Grab();
    this.push = new _Push.Push();
    this.remove = new _Remove.Remove();
    this.repulse = new _Repulse.Repulse();
    this.slow = new _Slow.Slow();
  }

  (0, _createClass2["default"])(Modes, [{
    key: "load",
    value: function load(data) {
      if (_Utils.Utils.hasData(data)) {
        this.bubble.load(data.bubble);
        this.connect.load(data.connect);
        this.grab.load(data.grab);
        this.push.load(data.push);
        this.remove.load(data.remove);
        this.repulse.load(data.repulse);
        this.slow.load(data.slow);
      }
    }
  }]);
  return Modes;
}();

exports.Modes = Modes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9Nb2Rlcy50cyJdLCJuYW1lcyI6WyJNb2RlcyIsImJ1YmJsZSIsImNvbm5lY3QiLCJncmFiIiwicHVzaCIsInJlbW92ZSIsInJlcHVsc2UiLCJzbG93IiwiQnViYmxlIiwiQ29ubmVjdCIsIkdyYWIiLCJQdXNoIiwiUmVtb3ZlIiwiUmVwdWxzZSIsIlNsb3ciLCJkYXRhIiwiVXRpbHMiLCJoYXNEYXRhIiwibG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQVNBOztJQUVhQSxLO0FBU1QsbUJBQWM7QUFBQTtBQUFBLFNBUlBDLE1BUU87QUFBQSxTQVBQQyxPQU9PO0FBQUEsU0FOUEMsSUFNTztBQUFBLFNBTFBDLElBS087QUFBQSxTQUpQQyxNQUlPO0FBQUEsU0FIUEMsT0FHTztBQUFBLFNBRlBDLElBRU87QUFDVixTQUFLTixNQUFMLEdBQWMsSUFBSU8sY0FBSixFQUFkO0FBQ0EsU0FBS04sT0FBTCxHQUFlLElBQUlPLGdCQUFKLEVBQWY7QUFDQSxTQUFLTixJQUFMLEdBQVksSUFBSU8sVUFBSixFQUFaO0FBQ0EsU0FBS04sSUFBTCxHQUFZLElBQUlPLFVBQUosRUFBWjtBQUNBLFNBQUtOLE1BQUwsR0FBYyxJQUFJTyxjQUFKLEVBQWQ7QUFDQSxTQUFLTixPQUFMLEdBQWUsSUFBSU8sZ0JBQUosRUFBZjtBQUNBLFNBQUtOLElBQUwsR0FBWSxJQUFJTyxVQUFKLEVBQVo7QUFDSDs7Ozt5QkFFV0MsSSxFQUFvQjtBQUM1QixVQUFJQyxhQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF5QjtBQUNyQixhQUFLZCxNQUFMLENBQVlpQixJQUFaLENBQWlCSCxJQUFJLENBQUNkLE1BQXRCO0FBQ0EsYUFBS0MsT0FBTCxDQUFhZ0IsSUFBYixDQUFrQkgsSUFBSSxDQUFDYixPQUF2QjtBQUNBLGFBQUtDLElBQUwsQ0FBVWUsSUFBVixDQUFlSCxJQUFJLENBQUNaLElBQXBCO0FBQ0EsYUFBS0MsSUFBTCxDQUFVYyxJQUFWLENBQWVILElBQUksQ0FBQ1gsSUFBcEI7QUFDQSxhQUFLQyxNQUFMLENBQVlhLElBQVosQ0FBaUJILElBQUksQ0FBQ1YsTUFBdEI7QUFDQSxhQUFLQyxPQUFMLENBQWFZLElBQWIsQ0FBa0JILElBQUksQ0FBQ1QsT0FBdkI7QUFDQSxhQUFLQyxJQUFMLENBQVVXLElBQVYsQ0FBZUgsSUFBSSxDQUFDUixJQUFwQjtBQUNIO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lNb2Rlc30gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L01vZGVzL0lNb2Rlc1wiO1xuaW1wb3J0IHtCdWJibGV9IGZyb20gXCIuL0J1YmJsZVwiO1xuaW1wb3J0IHtDb25uZWN0fSBmcm9tIFwiLi9Db25uZWN0XCI7XG5pbXBvcnQge0dyYWJ9IGZyb20gXCIuL0dyYWJcIjtcbmltcG9ydCB7UmVtb3ZlfSBmcm9tIFwiLi9SZW1vdmVcIjtcbmltcG9ydCB7UHVzaH0gZnJvbSBcIi4vUHVzaFwiO1xuaW1wb3J0IHtSZXB1bHNlfSBmcm9tIFwiLi9SZXB1bHNlXCI7XG5pbXBvcnQge1Nsb3d9IGZyb20gXCIuL1Nsb3dcIjtcblxuaW1wb3J0IHtJQnViYmxlfSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL0ludGVyYWN0aXZpdHkvTW9kZXMvSUJ1YmJsZVwiO1xuaW1wb3J0IHtJQ29ubmVjdH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L01vZGVzL0lDb25uZWN0XCI7XG5pbXBvcnQge0lHcmFifSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL0ludGVyYWN0aXZpdHkvTW9kZXMvSUdyYWJcIjtcbmltcG9ydCB7SVB1c2h9IGZyb20gXCIuLi8uLi8uLi8uLi9JbnRlcmZhY2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9JUHVzaFwiO1xuaW1wb3J0IHtJUmVtb3ZlfSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL0ludGVyYWN0aXZpdHkvTW9kZXMvSVJlbW92ZVwiO1xuaW1wb3J0IHtJUmVwdWxzZX0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L01vZGVzL0lSZXB1bHNlXCI7XG5pbXBvcnQge0lTbG93fSBmcm9tIFwiLi4vLi4vLi4vLi4vSW50ZXJmYWNlcy9PcHRpb25zL0ludGVyYWN0aXZpdHkvTW9kZXMvSVNsb3dcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi8uLi8uLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgTW9kZXMgaW1wbGVtZW50cyBJTW9kZXMge1xuICAgIHB1YmxpYyBidWJibGU6IElCdWJibGU7XG4gICAgcHVibGljIGNvbm5lY3Q6IElDb25uZWN0O1xuICAgIHB1YmxpYyBncmFiOiBJR3JhYjtcbiAgICBwdWJsaWMgcHVzaDogSVB1c2g7XG4gICAgcHVibGljIHJlbW92ZTogSVJlbW92ZTtcbiAgICBwdWJsaWMgcmVwdWxzZTogSVJlcHVsc2U7XG4gICAgcHVibGljIHNsb3c6IElTbG93O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYnViYmxlID0gbmV3IEJ1YmJsZSgpO1xuICAgICAgICB0aGlzLmNvbm5lY3QgPSBuZXcgQ29ubmVjdCgpO1xuICAgICAgICB0aGlzLmdyYWIgPSBuZXcgR3JhYigpO1xuICAgICAgICB0aGlzLnB1c2ggPSBuZXcgUHVzaCgpO1xuICAgICAgICB0aGlzLnJlbW92ZSA9IG5ldyBSZW1vdmUoKTtcbiAgICAgICAgdGhpcy5yZXB1bHNlID0gbmV3IFJlcHVsc2UoKTtcbiAgICAgICAgdGhpcy5zbG93ID0gbmV3IFNsb3coKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChkYXRhOiBJTW9kZXMpOiB2b2lkIHtcbiAgICAgICAgaWYgKFV0aWxzLmhhc0RhdGEoZGF0YSkpIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlLmxvYWQoZGF0YS5idWJibGUpO1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0LmxvYWQoZGF0YS5jb25uZWN0KTtcbiAgICAgICAgICAgIHRoaXMuZ3JhYi5sb2FkKGRhdGEuZ3JhYik7XG4gICAgICAgICAgICB0aGlzLnB1c2gubG9hZChkYXRhLnB1c2gpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUubG9hZChkYXRhLnJlbW92ZSk7XG4gICAgICAgICAgICB0aGlzLnJlcHVsc2UubG9hZChkYXRhLnJlcHVsc2UpO1xuICAgICAgICAgICAgdGhpcy5zbG93LmxvYWQoZGF0YS5zbG93KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==