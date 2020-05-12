"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Particle = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Bubbler = require("./Particle/Bubbler");

var _Drawer = require("./Particle/Drawer");

var _Grabber = require("./Particle/Grabber");

var _Repulser = require("./Particle/Repulser");

var _ShapeType = require("../Enums/ShapeType");

var _Updater = require("./Particle/Updater");

var _Utils = require("./Utils/Utils");

var _PolygonMaskType = require("../Enums/PolygonMaskType");

var _Connecter = require("./Particle/Connecter");

var _InteractionManager = require("./Particle/InteractionManager");

var _HoverMode = require("../Enums/Modes/HoverMode");

var _ClickMode = require("../Enums/Modes/ClickMode");

/**
 * The single particle object
 */
var Particle = /*#__PURE__*/function () {
  /* --------- tsParticles functions - particles ----------- */
  function Particle(container, position) {
    (0, _classCallCheck2["default"])(this, Particle);
    this.radius = void 0;
    this.size = void 0;
    this.initialPosition = void 0;
    this.position = void 0;
    this.offset = void 0;
    this.color = void 0;
    this.opacity = void 0;
    this.velocity = void 0;
    this.shape = void 0;
    this.image = void 0;
    this.initialVelocity = void 0;
    this.updater = void 0;
    this.bubbler = void 0;
    this.repulser = void 0;
    this.connecter = void 0;
    this.drawer = void 0;
    this.grabber = void 0;
    this.interactionManager = void 0;
    this.container = void 0;
    this.container = container;
    var options = container.options;
    var color = options.particles.color;

    if (options.polygon.type === _PolygonMaskType.PolygonMaskType.inline) {
      this.initialPosition = position;
    }
    /* size */


    this.size = {};
    this.radius = (options.particles.size.random ? Math.random() : 1) * container.retina.sizeValue;

    if (options.particles.size.animation.enable) {
      this.size.status = false;
      this.size.velocity = container.retina.sizeAnimationSpeed / 100;

      if (!options.particles.size.animation.sync) {
        this.size.velocity = this.size.velocity * Math.random();
      }
    }
    /* position */


    this.position = this.calcPosition(this.container, position);
    /* parallax */

    this.offset = {
      x: 0,
      y: 0
    };
    /* check position - avoid overlap */

    if (options.particles.move.bounce) {
      this.checkOverlap(position);
    }
    /* color */


    this.color = _Utils.Utils.getParticleColor(options, color);
    /* opacity */

    this.opacity = {
      value: (options.particles.opacity.random ? Math.random() : 1) * options.particles.opacity.value
    };

    if (options.particles.opacity.animation.enable) {
      this.opacity.status = false;
      this.opacity.velocity = options.particles.opacity.animation.speed / 100;

      if (!options.particles.opacity.animation.sync) {
        this.opacity.velocity *= Math.random();
      }
    }
    /* animation - velocity for speed */


    this.initialVelocity = Particle.calculateVelocity(options);
    this.velocity = {
      horizontal: this.initialVelocity.horizontal,
      vertical: this.initialVelocity.vertical
    };
    /* if shape is image */

    var shapeType = options.particles.shape.type;

    if (shapeType instanceof Array) {
      this.shape = shapeType[Math.floor(Math.random() * shapeType.length)];
    } else {
      this.shape = shapeType;
    }

    if (this.shape === _ShapeType.ShapeType.image) {
      var shape = options.particles.shape;
      var index = Math.floor(Math.random() * container.images.length);
      var image = container.images[index];
      var optionsImage = shape.image instanceof Array ? shape.image[index] : shape.image;
      this.image = {
        data: image,
        ratio: optionsImage.width / optionsImage.height,
        replaceColor: optionsImage.replace_color,
        src: optionsImage.src
      };

      if (!this.image.ratio) {
        this.image.ratio = 1;
      }
    }

    this.updater = new _Updater.Updater(this.container, this);
    this.bubbler = new _Bubbler.Bubbler(this.container, this);
    this.repulser = new _Repulser.Repulser(this.container, this);
    this.drawer = new _Drawer.Drawer(this.container, this, this.bubbler);
    this.grabber = new _Grabber.Grabber(this.container, this);
    this.connecter = new _Connecter.Connecter(this.container, this);
    this.interactionManager = new _InteractionManager.InteractionManager(this.container, this);
  }

  (0, _createClass2["default"])(Particle, [{
    key: "resetVelocity",
    value: function resetVelocity() {
      var container = this.container;
      var options = container.options;
      this.velocity = Particle.calculateVelocity(options);
    }
  }, {
    key: "update",
    value: function update(index, delta) {
      var container = this.container;
      var options = container.options;
      this.updater.update(delta);
      var hoverMode = options.interactivity.events.onHover.mode;
      var clickMode = options.interactivity.events.onClick.mode;
      /* events */

      if (_Utils.Utils.isInArray(_HoverMode.HoverMode.grab, hoverMode)) {
        this.grabber.grab();
      } //  New interactivity `connect` which would just connect the particles on hover


      if (_Utils.Utils.isInArray(_HoverMode.HoverMode.connect, options.interactivity.events.onHover.mode)) {
        for (var j = index + 1; j < container.particles.array.length; j++) {
          var p2 = container.particles.array[j];
          this.connecter.connect(p2);
        }
      }

      if (_Utils.Utils.isInArray(_HoverMode.HoverMode.bubble, hoverMode) || _Utils.Utils.isInArray(_ClickMode.ClickMode.bubble, clickMode)) {
        this.bubbler.bubble();
      }

      if (_Utils.Utils.isInArray(_HoverMode.HoverMode.repulse, hoverMode) || _Utils.Utils.isInArray(_ClickMode.ClickMode.repulse, clickMode)) {
        this.repulser.repulse();
      }
    }
  }, {
    key: "interact",
    value: function interact(p2) {
      this.interactionManager.interact(p2);
    }
  }, {
    key: "draw",
    value: function draw() {
      this.drawer.draw();
    }
  }, {
    key: "isOverlapping",
    value: function isOverlapping() {
      var container = this.container;
      var p = this;
      var collisionFound = false;
      var iterations = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = container.particles.array.filter(function (t) {
          return t != p;
        })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var p2 = _step.value;
          iterations++;

          var dist = _Utils.Utils.getDistanceBetweenCoordinates(p.position, p2.position);

          if (dist <= p.radius + p2.radius) {
            collisionFound = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return {
        collisionFound: collisionFound,
        iterations: iterations
      };
    }
  }, {
    key: "checkOverlap",
    value: function checkOverlap(position) {
      var container = this.container;
      var p = this;
      var overlapResult = p.isOverlapping();

      if (overlapResult.iterations >= container.particles.array.length) {
        var idx = container.particles.array.indexOf(this);

        if (idx >= 0) {
          // too many particles, removing from the current
          container.particles.array.splice(idx);
        }
      }

      if (overlapResult.collisionFound) {
        p.position.x = position ? position.x : Math.random() * container.canvas.dimension.width;
        p.position.y = position ? position.y : Math.random() * container.canvas.dimension.height;
        p.checkOverlap();
      }
    }
  }, {
    key: "calcPosition",
    value: function calcPosition(container, position) {
      var pos = {
        x: 0,
        y: 0
      };

      if (container.polygon.raw && container.polygon.raw.length > 0) {
        if (position) {
          pos.x = position.x;
          pos.y = position.y;
        } else {
          var randomPoint = container.polygon.randomPointInPolygon();
          pos.x = randomPoint.x;
          pos.y = randomPoint.y;
        }
      } else {
        pos.x = position ? position.x : Math.random() * container.canvas.dimension.width;
        pos.y = position ? position.y : Math.random() * container.canvas.dimension.height;
        /* check position  - into the canvas */

        if (pos.x > container.canvas.dimension.width - this.radius * 2) {
          pos.x -= this.radius;
        } else if (pos.x < this.radius * 2) {
          pos.x += this.radius;
        }

        if (pos.y > container.canvas.dimension.height - this.radius * 2) {
          pos.y -= this.radius;
        } else if (pos.y < this.radius * 2) {
          pos.y += this.radius;
        }
      }

      return pos;
    }
  }], [{
    key: "calculateVelocity",
    value: function calculateVelocity(options) {
      var baseVelocity = _Utils.Utils.getParticleBaseVelocity(options);

      var res = {
        horizontal: 0,
        vertical: 0
      };

      if (options.particles.move.straight) {
        res.horizontal = baseVelocity.x;
        res.vertical = baseVelocity.y;

        if (options.particles.move.random) {
          res.horizontal *= Math.random();
          res.vertical *= Math.random();
        }
      } else {
        res.horizontal = baseVelocity.x + Math.random() - 0.5;
        res.vertical = baseVelocity.y + Math.random() - 0.5;
      } // const theta = 2.0 * Math.PI * Math.random();
      // res.x = Math.cos(theta);
      // res.y = Math.sin(theta);


      return res;
    }
  }]);
  return Particle;
}();

exports.Particle = Particle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL1BhcnRpY2xlLnRzIl0sIm5hbWVzIjpbIlBhcnRpY2xlIiwiY29udGFpbmVyIiwicG9zaXRpb24iLCJyYWRpdXMiLCJzaXplIiwiaW5pdGlhbFBvc2l0aW9uIiwib2Zmc2V0IiwiY29sb3IiLCJvcGFjaXR5IiwidmVsb2NpdHkiLCJzaGFwZSIsImltYWdlIiwiaW5pdGlhbFZlbG9jaXR5IiwidXBkYXRlciIsImJ1YmJsZXIiLCJyZXB1bHNlciIsImNvbm5lY3RlciIsImRyYXdlciIsImdyYWJiZXIiLCJpbnRlcmFjdGlvbk1hbmFnZXIiLCJvcHRpb25zIiwicGFydGljbGVzIiwicG9seWdvbiIsInR5cGUiLCJQb2x5Z29uTWFza1R5cGUiLCJpbmxpbmUiLCJyYW5kb20iLCJNYXRoIiwicmV0aW5hIiwic2l6ZVZhbHVlIiwiYW5pbWF0aW9uIiwiZW5hYmxlIiwic3RhdHVzIiwic2l6ZUFuaW1hdGlvblNwZWVkIiwic3luYyIsImNhbGNQb3NpdGlvbiIsIngiLCJ5IiwibW92ZSIsImJvdW5jZSIsImNoZWNrT3ZlcmxhcCIsIlV0aWxzIiwiZ2V0UGFydGljbGVDb2xvciIsInZhbHVlIiwic3BlZWQiLCJjYWxjdWxhdGVWZWxvY2l0eSIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsInNoYXBlVHlwZSIsIkFycmF5IiwiZmxvb3IiLCJsZW5ndGgiLCJTaGFwZVR5cGUiLCJpbmRleCIsImltYWdlcyIsIm9wdGlvbnNJbWFnZSIsImRhdGEiLCJyYXRpbyIsIndpZHRoIiwiaGVpZ2h0IiwicmVwbGFjZUNvbG9yIiwicmVwbGFjZV9jb2xvciIsInNyYyIsIlVwZGF0ZXIiLCJCdWJibGVyIiwiUmVwdWxzZXIiLCJEcmF3ZXIiLCJHcmFiYmVyIiwiQ29ubmVjdGVyIiwiSW50ZXJhY3Rpb25NYW5hZ2VyIiwiZGVsdGEiLCJ1cGRhdGUiLCJob3Zlck1vZGUiLCJpbnRlcmFjdGl2aXR5IiwiZXZlbnRzIiwib25Ib3ZlciIsIm1vZGUiLCJjbGlja01vZGUiLCJvbkNsaWNrIiwiaXNJbkFycmF5IiwiSG92ZXJNb2RlIiwiZ3JhYiIsImNvbm5lY3QiLCJqIiwiYXJyYXkiLCJwMiIsImJ1YmJsZSIsIkNsaWNrTW9kZSIsInJlcHVsc2UiLCJpbnRlcmFjdCIsImRyYXciLCJwIiwiY29sbGlzaW9uRm91bmQiLCJpdGVyYXRpb25zIiwiZmlsdGVyIiwidCIsImRpc3QiLCJnZXREaXN0YW5jZUJldHdlZW5Db29yZGluYXRlcyIsIm92ZXJsYXBSZXN1bHQiLCJpc092ZXJsYXBwaW5nIiwiaWR4IiwiaW5kZXhPZiIsInNwbGljZSIsImNhbnZhcyIsImRpbWVuc2lvbiIsInBvcyIsInJhdyIsInJhbmRvbVBvaW50IiwicmFuZG9tUG9pbnRJblBvbHlnb24iLCJiYXNlVmVsb2NpdHkiLCJnZXRQYXJ0aWNsZUJhc2VWZWxvY2l0eSIsInJlcyIsInN0cmFpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUVBOzs7SUFHYUEsUTtBQXNCVDtBQUNBLG9CQUFZQyxTQUFaLEVBQWtDQyxRQUFsQyxFQUEyRDtBQUFBO0FBQUEsU0F0QnBEQyxNQXNCb0Q7QUFBQSxTQXJCcERDLElBcUJvRDtBQUFBLFNBcEJwREMsZUFvQm9EO0FBQUEsU0FuQnBESCxRQW1Cb0Q7QUFBQSxTQWxCcERJLE1Ba0JvRDtBQUFBLFNBakJwREMsS0FpQm9EO0FBQUEsU0FoQnBEQyxPQWdCb0Q7QUFBQSxTQWZwREMsUUFlb0Q7QUFBQSxTQWRwREMsS0Fjb0Q7QUFBQSxTQWJwREMsS0Fhb0Q7QUFBQSxTQVozQ0MsZUFZMkM7QUFBQSxTQVYzQ0MsT0FVMkM7QUFBQSxTQVQzQ0MsT0FTMkM7QUFBQSxTQVIzQ0MsUUFRMkM7QUFBQSxTQVAzQ0MsU0FPMkM7QUFBQSxTQU4zQ0MsTUFNMkM7QUFBQSxTQUwzQ0MsT0FLMkM7QUFBQSxTQUozQ0Msa0JBSTJDO0FB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R0FBRyxDQUFDakUsVUFBSixJQUFrQm5CLElBQUksQ0FBQ0QsTUFBTCxFQUFsQjtBQUNBcUYsVUFBQUEsR0FBRyxDQUFDaEUsUUFBSixJQUFnQnBCLElBQUksQ0FBQ0QsTUFBTCxFQUFoQjtBQUNIO0FBQ0osT0FSRCxNQVFPO0FBQ0hxRixRQUFBQSxHQUFHLENBQUNqRSxVQUFKLEdBQWlCK0QsWUFBWSxDQUFDekUsQ0FBYixHQUFpQlQsSUFBSSxDQUFDRCxNQUFMLEVBQWpCLEdBQWlDLEdBQWxEO0FBQ0FxRixRQUFBQSxHQUFHLENBQUNoRSxRQUFKLEdBQWU4RCxZQUFZLENBQUN4RSxDQUFiLEdBQWlCVixJQUFJLENBQUNELE1BQUwsRUFBakIsR0FBaUMsR0FBaEQ7QUFDSCxPQWxCMEQsQ0FvQjNEO0FBRUE7QUFDQTs7O0FBRUEsYUFBT3FGLEdBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQge0J1YmJsZXJ9IGZyb20gXCIuL1BhcnRpY2xlL0J1YmJsZXJcIjtcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCB7RHJhd2VyfSBmcm9tIFwiLi9QYXJ0aWNsZS9EcmF3ZXJcIjtcbmltcG9ydCB7R3JhYmJlcn0gZnJvbSBcIi4vUGFydGljbGUvR3JhYmJlclwiO1xuaW1wb3J0IHtJVmVsb2NpdHl9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lWZWxvY2l0eVwiO1xuaW1wb3J0IHtJU2l6ZX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVNpemVcIjtcbmltcG9ydCB7SU9wYWNpdHl9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lPcGFjaXR5XCI7XG5pbXBvcnQge0lDb29yZGluYXRlc30gZnJvbSBcIi4uL0ludGVyZmFjZXMvSUNvb3JkaW5hdGVzXCI7XG5pbXBvcnQge0lQYXJ0aWNsZUltYWdlfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JUGFydGljbGVJbWFnZVwiO1xuaW1wb3J0IHtSZXB1bHNlcn0gZnJvbSBcIi4vUGFydGljbGUvUmVwdWxzZXJcIjtcbmltcG9ydCB7U2hhcGVUeXBlfSBmcm9tIFwiLi4vRW51bXMvU2hhcGVUeXBlXCI7XG5pbXBvcnQge1VwZGF0ZXJ9IGZyb20gXCIuL1BhcnRpY2xlL1VwZGF0ZXJcIjtcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuL1V0aWxzL1V0aWxzXCI7XG5pbXBvcnQge1BvbHlnb25NYXNrVHlwZX0gZnJvbSBcIi4uL0VudW1zL1BvbHlnb25NYXNrVHlwZVwiO1xuaW1wb3J0IHtDb25uZWN0ZXJ9IGZyb20gXCIuL1BhcnRpY2xlL0Nvbm5lY3RlclwiO1xuaW1wb3J0IHtJUmdifSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JUmdiXCI7XG5pbXBvcnQge0lPcHRpb25zfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9PcHRpb25zL0lPcHRpb25zXCI7XG5pbXBvcnQge0ludGVyYWN0aW9uTWFuYWdlcn0gZnJvbSBcIi4vUGFydGljbGUvSW50ZXJhY3Rpb25NYW5hZ2VyXCI7XG5pbXBvcnQge0hvdmVyTW9kZX0gZnJvbSBcIi4uL0VudW1zL01vZGVzL0hvdmVyTW9kZVwiO1xuaW1wb3J0IHtDbGlja01vZGV9IGZyb20gXCIuLi9FbnVtcy9Nb2Rlcy9DbGlja01vZGVcIjtcblxuLyoqXG4gKiBUaGUgc2luZ2xlIHBhcnRpY2xlIG9iamVjdFxuICovXG5leHBvcnQgY2xhc3MgUGFydGljbGUge1xuICAgIHB1YmxpYyByYWRpdXM6IG51bWJlcjtcbiAgICBwdWJsaWMgc2l6ZTogSVNpemU7XG4gICAgcHVibGljIGluaXRpYWxQb3NpdGlvbj86IElDb29yZGluYXRlcztcbiAgICBwdWJsaWMgcG9zaXRpb246IElDb29yZGluYXRlcztcbiAgICBwdWJsaWMgb2Zmc2V0OiBJQ29vcmRpbmF0ZXM7XG4gICAgcHVibGljIGNvbG9yOiBJUmdiIHwgbnVsbDtcbiAgICBwdWJsaWMgb3BhY2l0eTogSU9wYWNpdHk7XG4gICAgcHVibGljIHZlbG9jaXR5OiBJVmVsb2NpdHk7XG4gICAgcHVibGljIHNoYXBlPzogU2hhcGVUeXBlO1xuICAgIHB1YmxpYyBpbWFnZT86IElQYXJ0aWNsZUltYWdlO1xuICAgIHB1YmxpYyByZWFkb25seSBpbml0aWFsVmVsb2NpdHk6IElWZWxvY2l0eTtcblxuICAgIHB1YmxpYyByZWFkb25seSB1cGRhdGVyOiBVcGRhdGVyO1xuICAgIHB1YmxpYyByZWFkb25seSBidWJibGVyOiBCdWJibGVyO1xuICAgIHB1YmxpYyByZWFkb25seSByZXB1bHNlcjogUmVwdWxzZXI7XG4gICAgcHVibGljIHJlYWRvbmx5IGNvbm5lY3RlcjogQ29ubmVjdGVyO1xuICAgIHB1YmxpYyByZWFkb25seSBkcmF3ZXI6IERyYXdlcjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ3JhYmJlcjogR3JhYmJlcjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW50ZXJhY3Rpb25NYW5hZ2VyOiBJbnRlcmFjdGlvbk1hbmFnZXI7XG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnRhaW5lcjogQ29udGFpbmVyO1xuXG4gICAgLyogLS0tLS0tLS0tIHRzUGFydGljbGVzIGZ1bmN0aW9ucyAtIHBhcnRpY2xlcyAtLS0tLS0tLS0tLSAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogQ29udGFpbmVyLCBwb3NpdGlvbj86IElDb29yZGluYXRlcykge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuICAgICAgICBjb25zdCBjb2xvciA9IG9wdGlvbnMucGFydGljbGVzLmNvbG9yO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnBvbHlnb24udHlwZSA9PT0gUG9seWdvbk1hc2tUeXBlLmlubGluZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIHNpemUgKi9cbiAgICAgICAgdGhpcy5zaXplID0ge307XG4gICAgICAgIHRoaXMucmFkaXVzID0gKG9wdGlvbnMucGFydGljbGVzLnNpemUucmFuZG9tID8gTWF0aC5yYW5kb20oKSA6IDEpICogY29udGFpbmVyLnJldGluYS5zaXplVmFsdWU7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucGFydGljbGVzLnNpemUuYW5pbWF0aW9uLmVuYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5zaXplLnN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaXplLnZlbG9jaXR5ID0gY29udGFpbmVyLnJldGluYS5zaXplQW5pbWF0aW9uU3BlZWQgLyAxMDA7XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5wYXJ0aWNsZXMuc2l6ZS5hbmltYXRpb24uc3luYykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZS52ZWxvY2l0eSA9IHRoaXMuc2l6ZS52ZWxvY2l0eSAqIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBwb3NpdGlvbiAqL1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5jYWxjUG9zaXRpb24odGhpcy5jb250YWluZXIsIHBvc2l0aW9uKTtcblxuICAgICAgICAvKiBwYXJhbGxheCAqL1xuICAgICAgICB0aGlzLm9mZnNldCA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8qIGNoZWNrIHBvc2l0aW9uIC0gYXZvaWQgb3ZlcmxhcCAqL1xuICAgICAgICBpZiAob3B0aW9ucy5wYXJ0aWNsZXMubW92ZS5ib3VuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tPdmVybGFwKHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGNvbG9yICovXG4gICAgICAgIHRoaXMuY29sb3IgPSBVdGlscy5nZXRQYXJ0aWNsZUNvbG9yKG9wdGlvbnMsIGNvbG9yKTtcblxuICAgICAgICAvKiBvcGFjaXR5ICovXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiAob3B0aW9ucy5wYXJ0aWNsZXMub3BhY2l0eS5yYW5kb20gPyBNYXRoLnJhbmRvbSgpIDogMSkgKiBvcHRpb25zLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW1hdGlvbi5lbmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eS5zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMub3BhY2l0eS52ZWxvY2l0eSA9IG9wdGlvbnMucGFydGljbGVzLm9wYWNpdHkuYW5pbWF0aW9uLnNwZWVkIC8gMTAwO1xuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMucGFydGljbGVzLm9wYWNpdHkuYW5pbWF0aW9uLnN5bmMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wYWNpdHkudmVsb2NpdHkgKj0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGFuaW1hdGlvbiAtIHZlbG9jaXR5IGZvciBzcGVlZCAqL1xuICAgICAgICB0aGlzLmluaXRpYWxWZWxvY2l0eSA9IFBhcnRpY2xlLmNhbGN1bGF0ZVZlbG9jaXR5KG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogdGhpcy5pbml0aWFsVmVsb2NpdHkuaG9yaXpvbnRhbCxcbiAgICAgICAgICAgIHZlcnRpY2FsOiB0aGlzLmluaXRpYWxWZWxvY2l0eS52ZXJ0aWNhbCxcbiAgICAgICAgfTtcblxuICAgICAgICAvKiBpZiBzaGFwZSBpcyBpbWFnZSAqL1xuICAgICAgICBjb25zdCBzaGFwZVR5cGUgPSBvcHRpb25zLnBhcnRpY2xlcy5zaGFwZS50eXBlO1xuXG4gICAgICAgIGlmIChzaGFwZVR5cGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlVHlwZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaGFwZVR5cGUubGVuZ3RoKV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGVUeXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2hhcGUgPT09IFNoYXBlVHlwZS5pbWFnZSkge1xuICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBvcHRpb25zLnBhcnRpY2xlcy5zaGFwZTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29udGFpbmVyLmltYWdlcy5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBjb250YWluZXIuaW1hZ2VzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNJbWFnZSA9IHNoYXBlLmltYWdlIGluc3RhbmNlb2YgQXJyYXkgPyBzaGFwZS5pbWFnZVtpbmRleF0gOiBzaGFwZS5pbWFnZTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogaW1hZ2UsXG4gICAgICAgICAgICAgICAgcmF0aW86IG9wdGlvbnNJbWFnZS53aWR0aCAvIG9wdGlvbnNJbWFnZS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgcmVwbGFjZUNvbG9yOiBvcHRpb25zSW1hZ2UucmVwbGFjZV9jb2xvcixcbiAgICAgICAgICAgICAgICBzcmM6IG9wdGlvbnNJbWFnZS5zcmMsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaW1hZ2UucmF0aW8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlLnJhdGlvID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlciA9IG5ldyBVcGRhdGVyKHRoaXMuY29udGFpbmVyLCB0aGlzKTtcbiAgICAgICAgdGhpcy5idWJibGVyID0gbmV3IEJ1YmJsZXIodGhpcy5jb250YWluZXIsIHRoaXMpO1xuICAgICAgICB0aGlzLnJlcHVsc2VyID0gbmV3IFJlcHVsc2VyKHRoaXMuY29udGFpbmVyLCB0aGlzKTtcbiAgICAgICAgdGhpcy5kcmF3ZXIgPSBuZXcgRHJhd2VyKHRoaXMuY29udGFpbmVyLCB0aGlzLCB0aGlzLmJ1YmJsZXIpO1xuICAgICAgICB0aGlzLmdyYWJiZXIgPSBuZXcgR3JhYmJlcih0aGlzLmNvbnRhaW5lciwgdGhpcyk7XG4gICAgICAgIHRoaXMuY29ubmVjdGVyID0gbmV3IENvbm5lY3Rlcih0aGlzLmNvbnRhaW5lciwgdGhpcyk7XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25NYW5hZ2VyID0gbmV3IEludGVyYWN0aW9uTWFuYWdlcih0aGlzLmNvbnRhaW5lciwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2FsY3VsYXRlVmVsb2NpdHkob3B0aW9uczogSU9wdGlvbnMpOiBJVmVsb2NpdHkge1xuICAgICAgICBjb25zdCBiYXNlVmVsb2NpdHkgPSBVdGlscy5nZXRQYXJ0aWNsZUJhc2VWZWxvY2l0eShvcHRpb25zKTtcbiAgICAgICAgY29uc3QgcmVzID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogMCxcbiAgICAgICAgICAgIHZlcnRpY2FsOiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLnBhcnRpY2xlcy5tb3ZlLnN0cmFpZ2h0KSB7XG4gICAgICAgICAgICByZXMuaG9yaXpvbnRhbCA9IGJhc2VWZWxvY2l0eS54O1xuICAgICAgICAgICAgcmVzLnZlcnRpY2FsID0gYmFzZVZlbG9jaXR5Lnk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBhcnRpY2xlcy5tb3ZlLnJhbmRvbSkge1xuICAgICAgICAgICAgICAgIHJlcy5ob3Jpem9udGFsICo9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgcmVzLnZlcnRpY2FsICo9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMuaG9yaXpvbnRhbCA9IGJhc2VWZWxvY2l0eS54ICsgTWF0aC5yYW5kb20oKSAtIDAuNTtcbiAgICAgICAgICAgIHJlcy52ZXJ0aWNhbCA9IGJhc2VWZWxvY2l0eS55ICsgTWF0aC5yYW5kb20oKSAtIDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnN0IHRoZXRhID0gMi4wICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCk7XG5cbiAgICAgICAgLy8gcmVzLnggPSBNYXRoLmNvcyh0aGV0YSk7XG4gICAgICAgIC8vIHJlcy55ID0gTWF0aC5zaW4odGhldGEpO1xuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0VmVsb2NpdHkoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IFBhcnRpY2xlLmNhbGN1bGF0ZVZlbG9jaXR5KG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoaW5kZXg6IG51bWJlciwgZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuXG4gICAgICAgIHRoaXMudXBkYXRlci51cGRhdGUoZGVsdGEpO1xuXG4gICAgICAgIGNvbnN0IGhvdmVyTW9kZSA9IG9wdGlvbnMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25Ib3Zlci5tb2RlO1xuICAgICAgICBjb25zdCBjbGlja01vZGUgPSBvcHRpb25zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uQ2xpY2subW9kZTtcblxuICAgICAgICAvKiBldmVudHMgKi9cbiAgICAgICAgaWYgKFV0aWxzLmlzSW5BcnJheShIb3Zlck1vZGUuZ3JhYiwgaG92ZXJNb2RlKSkge1xuICAgICAgICAgICAgdGhpcy5ncmFiYmVyLmdyYWIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBOZXcgaW50ZXJhY3Rpdml0eSBgY29ubmVjdGAgd2hpY2ggd291bGQganVzdCBjb25uZWN0IHRoZSBwYXJ0aWNsZXMgb24gaG92ZXJcblxuICAgICAgICBpZiAoVXRpbHMuaXNJbkFycmF5KEhvdmVyTW9kZS5jb25uZWN0LCBvcHRpb25zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uSG92ZXIubW9kZSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpbmRleCArIDE7IGogPCBjb250YWluZXIucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcDIgPSBjb250YWluZXIucGFydGljbGVzLmFycmF5W2pdO1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGVyLmNvbm5lY3QocDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFV0aWxzLmlzSW5BcnJheShIb3Zlck1vZGUuYnViYmxlLCBob3Zlck1vZGUpIHx8IFV0aWxzLmlzSW5BcnJheShDbGlja01vZGUuYnViYmxlLCBjbGlja01vZGUpKSB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZXIuYnViYmxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbHMuaXNJbkFycmF5KEhvdmVyTW9kZS5yZXB1bHNlLCBob3Zlck1vZGUpIHx8IFV0aWxzLmlzSW5BcnJheShDbGlja01vZGUucmVwdWxzZSwgY2xpY2tNb2RlKSkge1xuICAgICAgICAgICAgdGhpcy5yZXB1bHNlci5yZXB1bHNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaW50ZXJhY3QocDI6IFBhcnRpY2xlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25NYW5hZ2VyLmludGVyYWN0KHAyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZHJhdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuZHJhdygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc092ZXJsYXBwaW5nKCk6IHsgY29sbGlzaW9uRm91bmQ6IGJvb2xlYW4sIGl0ZXJhdGlvbnM6IG51bWJlciB9IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnN0IHAgPSB0aGlzO1xuICAgICAgICBsZXQgY29sbGlzaW9uRm91bmQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGl0ZXJhdGlvbnMgPSAwO1xuXG4gICAgICAgIGZvciAoY29uc3QgcDIgb2YgY29udGFpbmVyLnBhcnRpY2xlcy5hcnJheS5maWx0ZXIoKHQpID0+IHQgIT0gcCkpIHtcbiAgICAgICAgICAgIGl0ZXJhdGlvbnMrKztcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBVdGlscy5nZXREaXN0YW5jZUJldHdlZW5Db29yZGluYXRlcyhwLnBvc2l0aW9uLCBwMi5wb3NpdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChkaXN0IDw9IHAucmFkaXVzICsgcDIucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbGxpc2lvbkZvdW5kOiBjb2xsaXNpb25Gb3VuZCxcbiAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrT3ZlcmxhcChwb3NpdGlvbj86IElDb29yZGluYXRlcyk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgcCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG92ZXJsYXBSZXN1bHQgPSBwLmlzT3ZlcmxhcHBpbmcoKTtcblxuICAgICAgICBpZiAob3ZlcmxhcFJlc3VsdC5pdGVyYXRpb25zID49IGNvbnRhaW5lci5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBpZHggPSBjb250YWluZXIucGFydGljbGVzLmFycmF5LmluZGV4T2YodGhpcyk7XG5cbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgICAgIC8vIHRvbyBtYW55IHBhcnRpY2xlcywgcmVtb3ZpbmcgZnJvbSB0aGUgY3VycmVudFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJ0aWNsZXMuYXJyYXkuc3BsaWNlKGlkeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3ZlcmxhcFJlc3VsdC5jb2xsaXNpb25Gb3VuZCkge1xuICAgICAgICAgICAgcC5wb3NpdGlvbi54ID0gcG9zaXRpb24gPyBwb3NpdGlvbi54IDogTWF0aC5yYW5kb20oKSAqIGNvbnRhaW5lci5jYW52YXMuZGltZW5zaW9uLndpZHRoO1xuICAgICAgICAgICAgcC5wb3NpdGlvbi55ID0gcG9zaXRpb24gPyBwb3NpdGlvbi55IDogTWF0aC5yYW5kb20oKSAqIGNvbnRhaW5lci5jYW52YXMuZGltZW5zaW9uLmhlaWdodDtcblxuICAgICAgICAgICAgcC5jaGVja092ZXJsYXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY1Bvc2l0aW9uKGNvbnRhaW5lcjogQ29udGFpbmVyLCBwb3NpdGlvbj86IElDb29yZGluYXRlcyk6IElDb29yZGluYXRlcyB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHt4OiAwLCB5OiAwfTtcblxuICAgICAgICBpZiAoY29udGFpbmVyLnBvbHlnb24ucmF3ICYmIGNvbnRhaW5lci5wb2x5Z29uLnJhdy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgICAgICAgcG9zLnkgPSBwb3NpdGlvbi55O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb21Qb2ludCA9IGNvbnRhaW5lci5wb2x5Z29uLnJhbmRvbVBvaW50SW5Qb2x5Z29uKCk7XG5cbiAgICAgICAgICAgICAgICBwb3MueCA9IHJhbmRvbVBvaW50Lng7XG4gICAgICAgICAgICAgICAgcG9zLnkgPSByYW5kb21Qb2ludC55O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zLnggPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnggOiBNYXRoLnJhbmRvbSgpICogY29udGFpbmVyLmNhbnZhcy5kaW1lbnNpb24ud2lkdGg7XG4gICAgICAgICAgICBwb3MueSA9IHBvc2l0aW9uID8gcG9zaXRpb24ueSA6IE1hdGgucmFuZG9tKCkgKiBjb250YWluZXIuY2FudmFzLmRpbWVuc2lvbi5oZWlnaHQ7XG5cbiAgICAgICAgICAgIC8qIGNoZWNrIHBvc2l0aW9uICAtIGludG8gdGhlIGNhbnZhcyAqL1xuICAgICAgICAgICAgaWYgKHBvcy54ID4gY29udGFpbmVyLmNhbnZhcy5kaW1lbnNpb24ud2lkdGggLSB0aGlzLnJhZGl1cyAqIDIpIHtcbiAgICAgICAgICAgICAgICBwb3MueCAtPSB0aGlzLnJhZGl1cztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zLnggPCB0aGlzLnJhZGl1cyAqIDIpIHtcbiAgICAgICAgICAgICAgICBwb3MueCArPSB0aGlzLnJhZGl1cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBvcy55ID4gY29udGFpbmVyLmNhbnZhcy5kaW1lbnNpb24uaGVpZ2h0IC0gdGhpcy5yYWRpdXMgKiAyKSB7XG4gICAgICAgICAgICAgICAgcG9zLnkgLT0gdGhpcy5yYWRpdXM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvcy55IDwgdGhpcy5yYWRpdXMgKiAyKSB7XG4gICAgICAgICAgICAgICAgcG9zLnkgKz0gdGhpcy5yYWRpdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9zO1xuICAgIH1cbn1cbiJdfQ==