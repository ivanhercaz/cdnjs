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

var _RotateDirection = require("../Enums/RotateDirection");

/**
 * The single particle object
 */
var Particle = /*#__PURE__*/function () {
  /* --------- tsParticles functions - particles ----------- */
  function Particle(container, position) {
    (0, _classCallCheck2["default"])(this, Particle);
    this.angle = void 0;
    this.rotateDirection = void 0;
    this.radius = void 0;
    this.text = void 0;
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
    /* size */

    this.size = {};
    this.angle = options.particles.rotate.random ? Math.random() * 360 : options.particles.rotate.value;

    if (options.particles.rotate.direction == _RotateDirection.RotateDirection.random) {
      var index = Math.floor(Math.random() * 2);

      if (index > 0) {
        this.rotateDirection = _RotateDirection.RotateDirection.counterClockwise;
      } else {
        this.rotateDirection = _RotateDirection.RotateDirection.clockwise;
      }
    } else {
      this.rotateDirection = options.particles.rotate.direction;
    }

    this.radius = (options.particles.size.random ? Math.random() : 1) * container.retina.sizeValue;

    if (options.particles.size.animation.enable) {
      this.size.status = false;
      this.size.velocity = container.retina.sizeAnimationSpeed / 100;

      if (!options.particles.size.animation.sync) {
        this.size.velocity = this.size.velocity * Math.random();
      }
    }

    if (options.particles.rotate.animation.enable) {
      if (!options.particles.rotate.animation.sync) {
        this.angle = Math.random() * 360;
      }
    }
    /* position */


    this.position = this.calcPosition(this.container, position);

    if (options.polygon.type === _PolygonMaskType.PolygonMaskType.inline) {
      this.initialPosition = {
        x: this.position.x,
        y: this.position.y
      };
    }
    /* parallax */


    this.offset = {
      x: 0,
      y: 0
    };
    /* check position - avoid overlap */

    if (options.particles.move.collisions) {
      this.checkOverlap(position);
    }
    /* color */


    this.color = _Utils.Utils.getParticleColor(color);
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

      var _index = Math.floor(Math.random() * container.images.length);

      var image = container.images[_index];
      var optionsImage = shape.image instanceof Array ? shape.image[_index] : shape.image;
      this.image = {
        data: image,
        ratio: optionsImage.width / optionsImage.height,
        replaceColor: optionsImage.replaceColor,
        src: optionsImage.src
      };

      if (!this.image.ratio) {
        this.image.ratio = 1;
      }
    }

    if (this.shape === _ShapeType.ShapeType["char"] || this.shape === _ShapeType.ShapeType.character) {
      var value = options.particles.shape.character.value;

      if (typeof value === "string") {
        this.text = value;
      } else {
        this.text = value[Math.floor(Math.random() * value.length)];
      }
    }

    this.updater = new _Updater.Updater(this.container, this);
    this.bubbler = new _Bubbler.Bubbler(this.container, this);
    this.repulser = new _Repulser.Repulser(this.container, this);
    this.drawer = new _Drawer.Drawer(this.container, this);
    this.grabber = new _Grabber.Grabber(this.container, this);
    this.connecter = new _Connecter.Connecter(this.container, this);
    this.interactionManager = new _InteractionManager.InteractionManager(this.container, this);
  }

  (0, _createClass2["default"])(Particle, [{
    key: "resetVelocity",
    value: function resetVelocity() {
      var container = this.container;
      var options = container.options;
      var velocity = Particle.calculateVelocity(options);
      this.velocity.horizontal = velocity.horizontal;
      this.velocity.vertical = velocity.vertical;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL1BhcnRpY2xlLnRzIl0sIm5hbWVzIjpbIlBhcnRpY2xlIiwiY29udGFpbmVyIiwicG9zaXRpb24iLCJhbmdsZSIsInJvdGF0ZURpcmVjdGlvbiIsInJhZGl1cyIsInRleHQiLCJzaXplIiwiaW5pdGlhbFBvc2l0aW9uIiwib2Zmc2V0IiwiY29sb3IiLCJvcGFjaXR5IiwidmVsb2NpdHkiLCJzaGFwZSIsImltYWdlIiwiaW5pdGlhbFZlbG9jaXR5IiwidXBkYXRlciIsImJ1YmJsZXIiLCJyZXB1bHNlciIsImNvbm5lY3RlciIsImRyYXdlciIsImdyYWJiZXIiLCJpbnRlcmFjdGlvbk1hbmFnZXIiLCJvcHRpb25zIiwicGFydGljbGVzIiwicm90YXRlIiwicmFuZG9tIiwiTWF0aCIsInZhbHVlIiwiZGlyZWN0aW9uIiwiUm90YXRlRGlyZWN0aW9uIiwiaW5kZXgiLCJmbG9vciIsImNvdW50ZXJDbG9ja3dpc2UiLCJjbG9ja3dpc2UiLCJyZXRpbmEiLCJzaXplVmFsdWUiLCJhbmltYXRpb24iLCJlbmFibGUiLCJzdGF0dXMiLCJzaXplQW5pbWF0aW9uU3BlZWQiLCJzeW5jIiwiY2FsY1Bvc2l0aW9uIiwicG9seWdvbiIsInR5cGUiLCJQb2x5Z29uTWFza1R5cGUiLCJpbmxpbmUiLCJ4IiwieSIsIm1vdmUiLCJjb2xsaXNpb25zIiwiY2hlY2tPdmVybGFwIiwiVXRpbHMiLCJnZXRQYXJ0aWNsZUNvbG9yIiwic3BlZWQiLCJjYWxjdWxhdGVWZWxvY2l0eSIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsInNoYXBlVHlwZSIsIkFycmF5IiwibGVuZ3RoIiwiU2hhcGVUeXBlIiwiaW1hZ2VzIiwib3B0aW9uc0ltYWdlIiwiZGF0YSIsInJhdGlvIiwid2lkdGgiLCJoZWlnaHQiLCJyZXBsYWNlQ29sb3IiLCJzcmMiLCJjaGFyYWN0ZXIiLCJVcGRhdGVyIiwiQnViYmxlciIsIlJlcHVsc2VyIiwiRHJhd2VyIiwiR3JhYmJlciIsIkNvbm5lY3RlciIsIkludGVyYWN0aW9uTWFuYWdlciIsImRlbHRhIiwidXBkYXRlIiwiaG92ZXJNb2RlIiwiaW50ZXJhY3Rpdml0eSIsImV2ZW50cyIsIm9uSG92ZXIiLCJtb2RlIiwiY2xpY2tNb2RlIiwib25DbGljayIsImlzSW5BcnJheSIsIkhvdmVyTW9kZSIsImdyYWIiLCJjb25uZWN0IiwiaiIsImFycmF5IiwicDIiLCJidWJibGUiLCJDbGlja01vZGUiLCJyZXB1bHNlIiwiaW50ZXJhY3QiLCJkcmF3IiwicCIsImNvbGxpc2lvbkZvdW5kIiwiaXRlcmF0aW9ucyIsImZpbHRlciIsInQiLCJkaXN0IiwiZ2V0RGlzdGFuY2VCZXR3ZWVuQ29vcmRpbmF0ZXMiLCJvdmVybGFwUmVzdWx0IiwiaXNPdmVybGFwcGluZyIsImlkeCIsImluZGV4T2YiLCJzcGxpY2UiLCJjYW52YXMiLCJkaW1lbnNpb24iLCJwb3MiLCJyYXciLCJyYW5kb21Qb2ludCIsInJhbmRvbVBvaW50SW5Qb2x5Z29uIiwiYmFzZVZlbG9jaXR5IiwiZ2V0UGFydGljbGVCYXNlVmVsb2NpdHkiLCJyZXMiLCJzdHJhaWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7O0lBR2FBLFE7QUF5QlQ7QUFDQSxvQkFBWUMsU0FBWixFQUFrQ0MsUUFBbEMsRUFBMkQ7QUFBQTtBQUFBLFNBekJwREMsS0F5Qm9EO0FBQUEsU0F4QnBEQyxlQXdCb0Q7QUFBQSxTQXZCcERDLE1BdUJvRDtBQUFBLFNBdEJwREMsSUFzQm9EO0FBQUEsU0FyQjNDQyxJQXFCMkM7QUFBQSxTQXBCM0NDLGVBb0IyQztBQUFBLFNBbkIzQ04sUUFtQjJDO0FBQUEsU0FsQjNDTyxNQWtCMkM7QUFBQSxTQWpCM0NDLEtBaUIyQztBQUFBLFNBaEIzQ0MsT0FnQjJDO0FBQUEsU0FmM0NDLFFBZTJDO0FBQUEsU0FkM0NDLEtB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QUNBOzs7QUFFQSxhQUFPNkYsR0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7QnViYmxlcn0gZnJvbSBcIi4vUGFydGljbGUvQnViYmxlclwiO1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IHtEcmF3ZXJ9IGZyb20gXCIuL1BhcnRpY2xlL0RyYXdlclwiO1xuaW1wb3J0IHtHcmFiYmVyfSBmcm9tIFwiLi9QYXJ0aWNsZS9HcmFiYmVyXCI7XG5pbXBvcnQge0lWZWxvY2l0eX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVZlbG9jaXR5XCI7XG5pbXBvcnQge0lTaXplfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JU2l6ZVwiO1xuaW1wb3J0IHtJT3BhY2l0eX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSU9wYWNpdHlcIjtcbmltcG9ydCB7SUNvb3JkaW5hdGVzfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JQ29vcmRpbmF0ZXNcIjtcbmltcG9ydCB7SVBhcnRpY2xlSW1hZ2V9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lQYXJ0aWNsZUltYWdlXCI7XG5pbXBvcnQge1JlcHVsc2VyfSBmcm9tIFwiLi9QYXJ0aWNsZS9SZXB1bHNlclwiO1xuaW1wb3J0IHtTaGFwZVR5cGV9IGZyb20gXCIuLi9FbnVtcy9TaGFwZVR5cGVcIjtcbmltcG9ydCB7VXBkYXRlcn0gZnJvbSBcIi4vUGFydGljbGUvVXBkYXRlclwiO1xuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4vVXRpbHMvVXRpbHNcIjtcbmltcG9ydCB7UG9seWdvbk1hc2tUeXBlfSBmcm9tIFwiLi4vRW51bXMvUG9seWdvbk1hc2tUeXBlXCI7XG5pbXBvcnQge0Nvbm5lY3Rlcn0gZnJvbSBcIi4vUGFydGljbGUvQ29ubmVjdGVyXCI7XG5pbXBvcnQge0lSZ2J9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lSZ2JcIjtcbmltcG9ydCB7SU9wdGlvbnN9IGZyb20gXCIuLi9JbnRlcmZhY2VzL09wdGlvbnMvSU9wdGlvbnNcIjtcbmltcG9ydCB7SW50ZXJhY3Rpb25NYW5hZ2VyfSBmcm9tIFwiLi9QYXJ0aWNsZS9JbnRlcmFjdGlvbk1hbmFnZXJcIjtcbmltcG9ydCB7SG92ZXJNb2RlfSBmcm9tIFwiLi4vRW51bXMvTW9kZXMvSG92ZXJNb2RlXCI7XG5pbXBvcnQge0NsaWNrTW9kZX0gZnJvbSBcIi4uL0VudW1zL01vZGVzL0NsaWNrTW9kZVwiO1xuaW1wb3J0IHtSb3RhdGVEaXJlY3Rpb259IGZyb20gXCIuLi9FbnVtcy9Sb3RhdGVEaXJlY3Rpb25cIjtcblxuLyoqXG4gKiBUaGUgc2luZ2xlIHBhcnRpY2xlIG9iamVjdFxuICovXG5leHBvcnQgY2xhc3MgUGFydGljbGUge1xuICAgIHB1YmxpYyBhbmdsZTogbnVtYmVyO1xuICAgIHB1YmxpYyByb3RhdGVEaXJlY3Rpb246IFJvdGF0ZURpcmVjdGlvbjtcbiAgICBwdWJsaWMgcmFkaXVzOiBudW1iZXI7XG4gICAgcHVibGljIHRleHQ/OiBzdHJpbmc7XG4gICAgcHVibGljIHJlYWRvbmx5IHNpemU6IElTaXplO1xuICAgIHB1YmxpYyByZWFkb25seSBpbml0aWFsUG9zaXRpb24/OiBJQ29vcmRpbmF0ZXM7XG4gICAgcHVibGljIHJlYWRvbmx5IHBvc2l0aW9uOiBJQ29vcmRpbmF0ZXM7XG4gICAgcHVibGljIHJlYWRvbmx5IG9mZnNldDogSUNvb3JkaW5hdGVzO1xuICAgIHB1YmxpYyByZWFkb25seSBjb2xvcjogSVJnYiB8IHVuZGVmaW5lZDtcbiAgICBwdWJsaWMgcmVhZG9ubHkgb3BhY2l0eTogSU9wYWNpdHk7XG4gICAgcHVibGljIHJlYWRvbmx5IHZlbG9jaXR5OiBJVmVsb2NpdHk7XG4gICAgcHVibGljIHJlYWRvbmx5IHNoYXBlPzogU2hhcGVUeXBlO1xuICAgIHB1YmxpYyByZWFkb25seSBpbWFnZT86IElQYXJ0aWNsZUltYWdlO1xuICAgIHB1YmxpYyByZWFkb25seSBpbml0aWFsVmVsb2NpdHk6IElWZWxvY2l0eTtcblxuICAgIHB1YmxpYyByZWFkb25seSB1cGRhdGVyOiBVcGRhdGVyO1xuICAgIHB1YmxpYyByZWFkb25seSBidWJibGVyOiBCdWJibGVyO1xuICAgIHB1YmxpYyByZWFkb25seSByZXB1bHNlcjogUmVwdWxzZXI7XG4gICAgcHVibGljIHJlYWRvbmx5IGNvbm5lY3RlcjogQ29ubmVjdGVyO1xuICAgIHB1YmxpYyByZWFkb25seSBkcmF3ZXI6IERyYXdlcjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ3JhYmJlcjogR3JhYmJlcjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW50ZXJhY3Rpb25NYW5hZ2VyOiBJbnRlcmFjdGlvbk1hbmFnZXI7XG4gICAgcHVibGljIHJlYWRvbmx5IGNvbnRhaW5lcjogQ29udGFpbmVyO1xuXG4gICAgLyogLS0tLS0tLS0tIHRzUGFydGljbGVzIGZ1bmN0aW9ucyAtIHBhcnRpY2xlcyAtLS0tLS0tLS0tLSAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogQ29udGFpbmVyLCBwb3NpdGlvbj86IElDb29yZGluYXRlcykge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuICAgICAgICBjb25zdCBjb2xvciA9IG9wdGlvbnMucGFydGljbGVzLmNvbG9yO1xuXG4gICAgICAgIC8qIHNpemUgKi9cbiAgICAgICAgdGhpcy5zaXplID0ge307XG4gICAgICAgIHRoaXMuYW5nbGUgPSBvcHRpb25zLnBhcnRpY2xlcy5yb3RhdGUucmFuZG9tID8gTWF0aC5yYW5kb20oKSAqIDM2MCA6IG9wdGlvbnMucGFydGljbGVzLnJvdGF0ZS52YWx1ZTtcblxuICAgICAgICBpZiAob3B0aW9ucy5wYXJ0aWNsZXMucm90YXRlLmRpcmVjdGlvbiA9PSBSb3RhdGVEaXJlY3Rpb24ucmFuZG9tKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVEaXJlY3Rpb24gPSBSb3RhdGVEaXJlY3Rpb24uY291bnRlckNsb2Nrd2lzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGVEaXJlY3Rpb24gPSBSb3RhdGVEaXJlY3Rpb24uY2xvY2t3aXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVEaXJlY3Rpb24gPSBvcHRpb25zLnBhcnRpY2xlcy5yb3RhdGUuZGlyZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yYWRpdXMgPSAob3B0aW9ucy5wYXJ0aWNsZXMuc2l6ZS5yYW5kb20gPyBNYXRoLnJhbmRvbSgpIDogMSkgKiBjb250YWluZXIucmV0aW5hLnNpemVWYWx1ZTtcblxuICAgICAgICBpZiAob3B0aW9ucy5wYXJ0aWNsZXMuc2l6ZS5hbmltYXRpb24uZW5hYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnNpemUuc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNpemUudmVsb2NpdHkgPSBjb250YWluZXIucmV0aW5hLnNpemVBbmltYXRpb25TcGVlZCAvIDEwMDtcblxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnBhcnRpY2xlcy5zaXplLmFuaW1hdGlvbi5zeW5jKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaXplLnZlbG9jaXR5ID0gdGhpcy5zaXplLnZlbG9jaXR5ICogTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnBhcnRpY2xlcy5yb3RhdGUuYW5pbWF0aW9uLmVuYWJsZSkge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnBhcnRpY2xlcy5yb3RhdGUuYW5pbWF0aW9uLnN5bmMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIHBvc2l0aW9uICovXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLmNhbGNQb3NpdGlvbih0aGlzLmNvbnRhaW5lciwgcG9zaXRpb24pO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnBvbHlnb24udHlwZSA9PT0gUG9seWdvbk1hc2tUeXBlLmlubGluZSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvKiBwYXJhbGxheCAqL1xuICAgICAgICB0aGlzLm9mZnNldCA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8qIGNoZWNrIHBvc2l0aW9uIC0gYXZvaWQgb3ZlcmxhcCAqL1xuICAgICAgICBpZiAob3B0aW9ucy5wYXJ0aWNsZXMubW92ZS5jb2xsaXNpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrT3ZlcmxhcChwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBjb2xvciAqL1xuICAgICAgICB0aGlzLmNvbG9yID0gVXRpbHMuZ2V0UGFydGljbGVDb2xvcihjb2xvcik7XG5cbiAgICAgICAgLyogb3BhY2l0eSAqL1xuICAgICAgICB0aGlzLm9wYWNpdHkgPSB7XG4gICAgICAgICAgICB2YWx1ZTogKG9wdGlvbnMucGFydGljbGVzLm9wYWNpdHkucmFuZG9tID8gTWF0aC5yYW5kb20oKSA6IDEpICogb3B0aW9ucy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAob3B0aW9ucy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltYXRpb24uZW5hYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm9wYWNpdHkuc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm9wYWNpdHkudmVsb2NpdHkgPSBvcHRpb25zLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW1hdGlvbi5zcGVlZCAvIDEwMDtcblxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW1hdGlvbi5zeW5jKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5LnZlbG9jaXR5ICo9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBhbmltYXRpb24gLSB2ZWxvY2l0eSBmb3Igc3BlZWQgKi9cbiAgICAgICAgdGhpcy5pbml0aWFsVmVsb2NpdHkgPSBQYXJ0aWNsZS5jYWxjdWxhdGVWZWxvY2l0eShvcHRpb25zKTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IHRoaXMuaW5pdGlhbFZlbG9jaXR5Lmhvcml6b250YWwsXG4gICAgICAgICAgICB2ZXJ0aWNhbDogdGhpcy5pbml0aWFsVmVsb2NpdHkudmVydGljYWwsXG4gICAgICAgIH07XG5cbiAgICAgICAgLyogaWYgc2hhcGUgaXMgaW1hZ2UgKi9cbiAgICAgICAgY29uc3Qgc2hhcGVUeXBlID0gb3B0aW9ucy5wYXJ0aWNsZXMuc2hhcGUudHlwZTtcblxuICAgICAgICBpZiAoc2hhcGVUeXBlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZVR5cGVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2hhcGVUeXBlLmxlbmd0aCldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlVHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNoYXBlID09PSBTaGFwZVR5cGUuaW1hZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gb3B0aW9ucy5wYXJ0aWNsZXMuc2hhcGU7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbnRhaW5lci5pbWFnZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gY29udGFpbmVyLmltYWdlc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zSW1hZ2UgPSBzaGFwZS5pbWFnZSBpbnN0YW5jZW9mIEFycmF5ID8gc2hhcGUuaW1hZ2VbaW5kZXhdIDogc2hhcGUuaW1hZ2U7XG4gICAgICAgICAgICB0aGlzLmltYWdlID0ge1xuICAgICAgICAgICAgICAgIGRhdGE6IGltYWdlLFxuICAgICAgICAgICAgICAgIHJhdGlvOiBvcHRpb25zSW1hZ2Uud2lkdGggLyBvcHRpb25zSW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHJlcGxhY2VDb2xvcjogb3B0aW9uc0ltYWdlLnJlcGxhY2VDb2xvcixcbiAgICAgICAgICAgICAgICBzcmM6IG9wdGlvbnNJbWFnZS5zcmMsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaW1hZ2UucmF0aW8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlLnJhdGlvID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNoYXBlID09PSBTaGFwZVR5cGUuY2hhciB8fCB0aGlzLnNoYXBlID09PSBTaGFwZVR5cGUuY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbnMucGFydGljbGVzLnNoYXBlLmNoYXJhY3Rlci52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dCA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQgPSB2YWx1ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWx1ZS5sZW5ndGgpXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVyID0gbmV3IFVwZGF0ZXIodGhpcy5jb250YWluZXIsIHRoaXMpO1xuICAgICAgICB0aGlzLmJ1YmJsZXIgPSBuZXcgQnViYmxlcih0aGlzLmNvbnRhaW5lciwgdGhpcyk7XG4gICAgICAgIHRoaXMucmVwdWxzZXIgPSBuZXcgUmVwdWxzZXIodGhpcy5jb250YWluZXIsIHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdlciA9IG5ldyBEcmF3ZXIodGhpcy5jb250YWluZXIsIHRoaXMpO1xuICAgICAgICB0aGlzLmdyYWJiZXIgPSBuZXcgR3JhYmJlcih0aGlzLmNvbnRhaW5lciwgdGhpcyk7XG4gICAgICAgIHRoaXMuY29ubmVjdGVyID0gbmV3IENvbm5lY3Rlcih0aGlzLmNvbnRhaW5lciwgdGhpcyk7XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25NYW5hZ2VyID0gbmV3IEludGVyYWN0aW9uTWFuYWdlcih0aGlzLmNvbnRhaW5lciwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2FsY3VsYXRlVmVsb2NpdHkob3B0aW9uczogSU9wdGlvbnMpOiBJVmVsb2NpdHkge1xuICAgICAgICBjb25zdCBiYXNlVmVsb2NpdHkgPSBVdGlscy5nZXRQYXJ0aWNsZUJhc2VWZWxvY2l0eShvcHRpb25zKTtcbiAgICAgICAgY29uc3QgcmVzID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogMCxcbiAgICAgICAgICAgIHZlcnRpY2FsOiAwLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLnBhcnRpY2xlcy5tb3ZlLnN0cmFpZ2h0KSB7XG4gICAgICAgICAgICByZXMuaG9yaXpvbnRhbCA9IGJhc2VWZWxvY2l0eS54O1xuICAgICAgICAgICAgcmVzLnZlcnRpY2FsID0gYmFzZVZlbG9jaXR5Lnk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnBhcnRpY2xlcy5tb3ZlLnJhbmRvbSkge1xuICAgICAgICAgICAgICAgIHJlcy5ob3Jpem9udGFsICo9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgcmVzLnZlcnRpY2FsICo9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMuaG9yaXpvbnRhbCA9IGJhc2VWZWxvY2l0eS54ICsgTWF0aC5yYW5kb20oKSAtIDAuNTtcbiAgICAgICAgICAgIHJlcy52ZXJ0aWNhbCA9IGJhc2VWZWxvY2l0eS55ICsgTWF0aC5yYW5kb20oKSAtIDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnN0IHRoZXRhID0gMi4wICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCk7XG5cbiAgICAgICAgLy8gcmVzLnggPSBNYXRoLmNvcyh0aGV0YSk7XG4gICAgICAgIC8vIHJlcy55ID0gTWF0aC5zaW4odGhldGEpO1xuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0VmVsb2NpdHkoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHZlbG9jaXR5ID0gUGFydGljbGUuY2FsY3VsYXRlVmVsb2NpdHkob3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy52ZWxvY2l0eS5ob3Jpem9udGFsID0gdmVsb2NpdHkuaG9yaXpvbnRhbDtcbiAgICAgICAgdGhpcy52ZWxvY2l0eS52ZXJ0aWNhbCA9IHZlbG9jaXR5LnZlcnRpY2FsO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoaW5kZXg6IG51bWJlciwgZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnRhaW5lci5vcHRpb25zO1xuXG4gICAgICAgIHRoaXMudXBkYXRlci51cGRhdGUoZGVsdGEpO1xuXG4gICAgICAgIGNvbnN0IGhvdmVyTW9kZSA9IG9wdGlvbnMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25Ib3Zlci5tb2RlO1xuICAgICAgICBjb25zdCBjbGlja01vZGUgPSBvcHRpb25zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uQ2xpY2subW9kZTtcblxuICAgICAgICAvKiBldmVudHMgKi9cbiAgICAgICAgaWYgKFV0aWxzLmlzSW5BcnJheShIb3Zlck1vZGUuZ3JhYiwgaG92ZXJNb2RlKSkge1xuICAgICAgICAgICAgdGhpcy5ncmFiYmVyLmdyYWIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBOZXcgaW50ZXJhY3Rpdml0eSBgY29ubmVjdGAgd2hpY2ggd291bGQganVzdCBjb25uZWN0IHRoZSBwYXJ0aWNsZXMgb24gaG92ZXJcblxuICAgICAgICBpZiAoVXRpbHMuaXNJbkFycmF5KEhvdmVyTW9kZS5jb25uZWN0LCBvcHRpb25zLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uSG92ZXIubW9kZSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpbmRleCArIDE7IGogPCBjb250YWluZXIucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcDIgPSBjb250YWluZXIucGFydGljbGVzLmFycmF5W2pdO1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGVyLmNvbm5lY3QocDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFV0aWxzLmlzSW5BcnJheShIb3Zlck1vZGUuYnViYmxlLCBob3Zlck1vZGUpIHx8IFV0aWxzLmlzSW5BcnJheShDbGlja01vZGUuYnViYmxlLCBjbGlja01vZGUpKSB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZXIuYnViYmxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbHMuaXNJbkFycmF5KEhvdmVyTW9kZS5yZXB1bHNlLCBob3Zlck1vZGUpIHx8IFV0aWxzLmlzSW5BcnJheShDbGlja01vZGUucmVwdWxzZSwgY2xpY2tNb2RlKSkge1xuICAgICAgICAgICAgdGhpcy5yZXB1bHNlci5yZXB1bHNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaW50ZXJhY3QocDI6IFBhcnRpY2xlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25NYW5hZ2VyLmludGVyYWN0KHAyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZHJhdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuZHJhdygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc092ZXJsYXBwaW5nKCk6IHsgY29sbGlzaW9uRm91bmQ6IGJvb2xlYW4sIGl0ZXJhdGlvbnM6IG51bWJlciB9IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnN0IHAgPSB0aGlzO1xuICAgICAgICBsZXQgY29sbGlzaW9uRm91bmQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGl0ZXJhdGlvbnMgPSAwO1xuXG4gICAgICAgIGZvciAoY29uc3QgcDIgb2YgY29udGFpbmVyLnBhcnRpY2xlcy5hcnJheS5maWx0ZXIoKHQpID0+IHQgIT0gcCkpIHtcbiAgICAgICAgICAgIGl0ZXJhdGlvbnMrKztcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBVdGlscy5nZXREaXN0YW5jZUJldHdlZW5Db29yZGluYXRlcyhwLnBvc2l0aW9uLCBwMi5wb3NpdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChkaXN0IDw9IHAucmFkaXVzICsgcDIucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgY29sbGlzaW9uRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbGxpc2lvbkZvdW5kOiBjb2xsaXNpb25Gb3VuZCxcbiAgICAgICAgICAgIGl0ZXJhdGlvbnM6IGl0ZXJhdGlvbnMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrT3ZlcmxhcChwb3NpdGlvbj86IElDb29yZGluYXRlcyk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgcCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG92ZXJsYXBSZXN1bHQgPSBwLmlzT3ZlcmxhcHBpbmcoKTtcblxuICAgICAgICBpZiAob3ZlcmxhcFJlc3VsdC5pdGVyYXRpb25zID49IGNvbnRhaW5lci5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBpZHggPSBjb250YWluZXIucGFydGljbGVzLmFycmF5LmluZGV4T2YodGhpcyk7XG5cbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgICAgIC8vIHRvbyBtYW55IHBhcnRpY2xlcywgcmVtb3ZpbmcgZnJvbSB0aGUgY3VycmVudFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJ0aWNsZXMuYXJyYXkuc3BsaWNlKGlkeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3ZlcmxhcFJlc3VsdC5jb2xsaXNpb25Gb3VuZCkge1xuICAgICAgICAgICAgcC5wb3NpdGlvbi54ID0gcG9zaXRpb24gPyBwb3NpdGlvbi54IDogTWF0aC5yYW5kb20oKSAqIGNvbnRhaW5lci5jYW52YXMuZGltZW5zaW9uLndpZHRoO1xuICAgICAgICAgICAgcC5wb3NpdGlvbi55ID0gcG9zaXRpb24gPyBwb3NpdGlvbi55IDogTWF0aC5yYW5kb20oKSAqIGNvbnRhaW5lci5jYW52YXMuZGltZW5zaW9uLmhlaWdodDtcblxuICAgICAgICAgICAgcC5jaGVja092ZXJsYXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY1Bvc2l0aW9uKGNvbnRhaW5lcjogQ29udGFpbmVyLCBwb3NpdGlvbj86IElDb29yZGluYXRlcyk6IElDb29yZGluYXRlcyB7XG4gICAgICAgIGNvbnN0IHBvcyA9IHt4OiAwLCB5OiAwfTtcblxuICAgICAgICBpZiAoY29udGFpbmVyLnBvbHlnb24ucmF3ICYmIGNvbnRhaW5lci5wb2x5Z29uLnJhdy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgICAgICAgcG9zLnkgPSBwb3NpdGlvbi55O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb21Qb2ludCA9IGNvbnRhaW5lci5wb2x5Z29uLnJhbmRvbVBvaW50SW5Qb2x5Z29uKCk7XG5cbiAgICAgICAgICAgICAgICBwb3MueCA9IHJhbmRvbVBvaW50Lng7XG4gICAgICAgICAgICAgICAgcG9zLnkgPSByYW5kb21Qb2ludC55O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zLnggPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnggOiBNYXRoLnJhbmRvbSgpICogY29udGFpbmVyLmNhbnZhcy5kaW1lbnNpb24ud2lkdGg7XG4gICAgICAgICAgICBwb3MueSA9IHBvc2l0aW9uID8gcG9zaXRpb24ueSA6IE1hdGgucmFuZG9tKCkgKiBjb250YWluZXIuY2FudmFzLmRpbWVuc2lvbi5oZWlnaHQ7XG5cbiAgICAgICAgICAgIC8qIGNoZWNrIHBvc2l0aW9uICAtIGludG8gdGhlIGNhbnZhcyAqL1xuICAgICAgICAgICAgaWYgKHBvcy54ID4gY29udGFpbmVyLmNhbnZhcy5kaW1lbnNpb24ud2lkdGggLSB0aGlzLnJhZGl1cyAqIDIpIHtcbiAgICAgICAgICAgICAgICBwb3MueCAtPSB0aGlzLnJhZGl1cztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zLnggPCB0aGlzLnJhZGl1cyAqIDIpIHtcbiAgICAgICAgICAgICAgICBwb3MueCArPSB0aGlzLnJhZGl1cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBvcy55ID4gY29udGFpbmVyLmNhbnZhcy5kaW1lbnNpb24uaGVpZ2h0IC0gdGhpcy5yYWRpdXMgKiAyKSB7XG4gICAgICAgICAgICAgICAgcG9zLnkgLT0gdGhpcy5yYWRpdXM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvcy55IDwgdGhpcy5yYWRpdXMgKiAyKSB7XG4gICAgICAgICAgICAgICAgcG9zLnkgKz0gdGhpcy5yYWRpdXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcG9zO1xuICAgIH1cbn1cbiJdfQ==