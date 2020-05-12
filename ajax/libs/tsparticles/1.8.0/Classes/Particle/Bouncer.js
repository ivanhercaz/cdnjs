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
      var particle = this.particle;

      var dist = _Utils.Utils.getDistanceBetweenCoordinates(particle.position, p2.position);

      var distP = particle.radius + p2.radius;

      if (dist <= distP) {
        particle.velocity.horizontal = -particle.velocity.horizontal;
        particle.velocity.vertical = -particle.velocity.vertical;
        p2.velocity.horizontal = -p2.velocity.horizontal;
        p2.velocity.vertical = -p2.velocity.vertical;
      }
    }
  }]);
  return Bouncer;
}();

exports.Bouncer = Bouncer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9DbGFzc2VzL1BhcnRpY2xlL0JvdW5jZXIudHMiXSwibmFtZXMiOlsiQm91bmNlciIsImNvbnRhaW5lciIsInBhcnRpY2xlIiwicDIiLCJkaXN0IiwiVXRpbHMiLCJnZXREaXN0YW5jZUJldHdlZW5Db29yZGluYXRlcyIsInBvc2l0aW9uIiwiZGlzdFAiLCJyYWRpdXMiLCJ2ZWxvY2l0eSIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBOztJQUVhQSxPO0FBSVQsbUJBQVlDLFNBQVosRUFBa0NDLFFBQWxDLEVBQXNEO0FBQUE7QUFBQSxTQUhyQ0QsU0FHcUM7QUFBQSxTQUZyQ0MsUUFFcUM7QUFDbEQsU0FBS0QsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNIOzs7OzJCQUVhQyxFLEVBQW9CO0FBQzlCLFVBQU1ELFFBQVEsR0FBRyxLQUFLQSxRQUF0Qjs7QUFDQSxVQUFNRSxJQUFJLEdBQUdDLGFBQU1DLDZCQUFOLENBQW9DSixRQUFRLENBQUNLLFFBQTdDLEVBQXVESixFQUFFLENBQUNJLFFBQTFELENBQWI7O0FBQ0EsVUFBTUMsS0FBSyxHQUFHTixRQUFRLENBQUNPLE1BQVQsR0FBa0JOLEVBQUUsQ0FBQ00sTUFBbkM7O0FBRUEsVUFBSUwsSUFBSSxJQUFJSSxLQUFaLEVBQW1CO0FBQ2ZOLFFBQUFBLFFBQVEsQ0FBQ1EsUUFBVCxDQUFrQkMsVUFBbEIsR0FBK0IsQ0FBQ1QsUUFBUSxDQUFDUSxRQUFULENBQWtCQyxVQUFsRDtBQUNBVCxRQUFBQSxRQUFRLENBQUNRLFFBQVQsQ0FBa0JFLFFBQWxCLEdBQTZCLENBQUNWLFFBQVEsQ0FBQ1EsUUFBVCxDQUFrQkUsUUFBaEQ7QUFDQVQsUUFBQUEsRUFBRSxDQUFDTyxRQUFILENBQVlDLFVBQVosR0FBeUIsQ0FBQ1IsRUFBRSxDQUFDTyxRQUFILENBQVlDLFVBQXRDO0FBQ0FSLFFBQUFBLEVBQUUsQ0FBQ08sUUFBSCxDQUFZRSxRQUFaLEdBQXVCLENBQUNULEVBQUUsQ0FBQ08sUUFBSCxDQUFZRSxRQUFwQztBQUNIO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4uL0NvbnRhaW5lclwiO1xuaW1wb3J0IHtQYXJ0aWNsZX0gZnJvbSBcIi4uL1BhcnRpY2xlXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuLi9VdGlscy9VdGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgQm91bmNlciB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250YWluZXI6IENvbnRhaW5lcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhcnRpY2xlOiBQYXJ0aWNsZTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogQ29udGFpbmVyLCBwYXJ0aWNsZTogUGFydGljbGUpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMucGFydGljbGUgPSBwYXJ0aWNsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYm91bmNlKHAyOiBQYXJ0aWNsZSk6IHZvaWQge1xuICAgICAgICBjb25zdCBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGU7XG4gICAgICAgIGNvbnN0IGRpc3QgPSBVdGlscy5nZXREaXN0YW5jZUJldHdlZW5Db29yZGluYXRlcyhwYXJ0aWNsZS5wb3NpdGlvbiwgcDIucG9zaXRpb24pO1xuICAgICAgICBjb25zdCBkaXN0UCA9IHBhcnRpY2xlLnJhZGl1cyArIHAyLnJhZGl1cztcblxuICAgICAgICBpZiAoZGlzdCA8PSBkaXN0UCkge1xuICAgICAgICAgICAgcGFydGljbGUudmVsb2NpdHkuaG9yaXpvbnRhbCA9IC1wYXJ0aWNsZS52ZWxvY2l0eS5ob3Jpem9udGFsO1xuICAgICAgICAgICAgcGFydGljbGUudmVsb2NpdHkudmVydGljYWwgPSAtcGFydGljbGUudmVsb2NpdHkudmVydGljYWw7XG4gICAgICAgICAgICBwMi52ZWxvY2l0eS5ob3Jpem9udGFsID0gLXAyLnZlbG9jaXR5Lmhvcml6b250YWw7XG4gICAgICAgICAgICBwMi52ZWxvY2l0eS52ZXJ0aWNhbCA9IC1wMi52ZWxvY2l0eS52ZXJ0aWNhbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==