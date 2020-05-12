"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bouncer = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Utils = require("../Utils/Utils");

var Bouncer = /*#__PURE__*/function () {
  function Bouncer(container, particle) {
    (0, _classCallCheck2["default"])(this, Bouncer);
    this.container = void 0;
    this.particle = void 0;
    this.container = container;
    this.particle = particle;
  }

  (0, _createClass2["default"])(Bouncer, [{
    key: "bounce",
    value: function bounce(p2) {
      var p1 = this.particle;

      if (p1 === p2) {
        return;
      }

      var dist = _Utils.Utils.getDistanceBetweenCoordinates(p1.position, p2.position);

      var distP = (p1.bubbler.radius || p1.radius) + (p2.bubbler.radius || p2.radius);

      if (dist <= distP) {
        p1.resetVelocity();
        p2.resetVelocity();
      }
    }
  }]);
  return Bouncer;
}();

exports.Bouncer = Bouncer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DbGFzc2VzL1BhcnRpY2xlL0JvdW5jZXIudHMiXSwibmFtZXMiOlsiQm91bmNlciIsImNvbnRhaW5lciIsInBhcnRpY2xlIiwicDIiLCJwMSIsImRpc3QiLCJVdGlscyIsImdldERpc3RhbmNlQmV0d2VlbkNvb3JkaW5hdGVzIiwicG9zaXRpb24iLCJkaXN0UCIsImJ1YmJsZXIiLCJyYWRpdXMiLCJyZXNldFZlbG9jaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRWFBLE87QUFJVCxtQkFBWUMsU0FBWixFQUFrQ0MsUUFBbEMsRUFBc0Q7QUFBQTtBQUFBLFNBSHJDRCxTQUdxQztBQUFBLFNBRnJDQyxRQUVxQztBQUNsRCxTQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0g7Ozs7MkJBRWFDLEUsRUFBb0I7QUFDOUIsVUFBTUMsRUFBRSxHQUFHLEtBQUtGLFFBQWhCOztBQUVBLFVBQUlFLEVBQUUsS0FBS0QsRUFBWCxFQUFlO0FBQ1g7QUFDSDs7QUFFRCxVQUFNRSxJQUFJLEdBQUdDLGFBQU1DLDZCQUFOLENBQW9DSCxFQUFFLENBQUNJLFFBQXZDLEVBQWlETCxFQUFFLENBQUNLLFFBQXBELENBQWI7O0FBQ0EsVUFBTUMsS0FBSyxHQUFHLENBQUNMLEVBQUUsQ0FBQ00sT0FBSCxDQUFXQyxNQUFYLElBQXFCUCxFQUFFLENBQUNPLE1BQXpCLEtBQW9DUixFQUFFLENBQUNPLE9BQUgsQ0FBV0MsTUFBWCxJQUFxQlIsRUFBRSxDQUFDUSxNQUE1RCxDQUFkOztBQUVBLFVBQUlOLElBQUksSUFBSUksS0FBWixFQUFtQjtBQUNmTCxRQUFBQSxFQUFFLENBQUNRLGFBQUg7QUFDQVQsUUFBQUEsRUFBRSxDQUFDUyxhQUFIO0FBQ0g7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiLi4vQ29udGFpbmVyXCI7XG5pbXBvcnQge1BhcnRpY2xlfSBmcm9tIFwiLi4vUGFydGljbGVcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgQm91bmNlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IENvbnRhaW5lcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhcnRpY2xlOiBQYXJ0aWNsZTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogQ29udGFpbmVyLCBwYXJ0aWNsZTogUGFydGljbGUpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMucGFydGljbGUgPSBwYXJ0aWNsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYm91bmNlKHAyOiBQYXJ0aWNsZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBwMSA9IHRoaXMucGFydGljbGU7XG5cbiAgICAgICAgaWYgKHAxID09PSBwMikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGlzdCA9IFV0aWxzLmdldERpc3RhbmNlQmV0d2VlbkNvb3JkaW5hdGVzKHAxLnBvc2l0aW9uLCBwMi5wb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IGRpc3RQID0gKHAxLmJ1YmJsZXIucmFkaXVzIHx8IHAxLnJhZGl1cykgKyAocDIuYnViYmxlci5yYWRpdXMgfHwgcDIucmFkaXVzKTtcblxuICAgICAgICBpZiAoZGlzdCA8PSBkaXN0UCkge1xuICAgICAgICAgICAgcDEucmVzZXRWZWxvY2l0eSgpO1xuICAgICAgICAgICAgcDIucmVzZXRWZWxvY2l0eSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19