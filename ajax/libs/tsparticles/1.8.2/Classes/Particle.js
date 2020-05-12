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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL1BhcnRpY2xlLnRzIl0sIm5hbWVzIjpbIlBhcnRpY2xlIiwiY29udGFpbmVyIiwicG9zaXRpb24iLCJyYWRpdXMiLCJzaXplIiwiaW5pdGlhbFBvc2l0aW9uIiwib2Zmc2V0IiwiY29sb3IiLCJvcGFjaXR5IiwidmVsb2NpdHkiLCJzaGFwZSIsImltYWdlIiwiaW5pdGlhbFZlbG9jaXR5IiwidXBkYXRlciIsImJ1YmJsZXIiLCJyZXB1bHNlciIsImNvbm5lY3RlciIsImRyYXdlciIsImdyYWJiZXIiLCJpbnRlcmFjdGlvbk1hbmFnZXIiLCJvcHRpb25zIiwicGFydGljbGVzIiwicmFuZG9tIiwiTWF0aCIsInJldGluYSIsInNpemVWYWx1ZSIsImFuaW1hdGlvbiIsImVuYWJsZSIsInN0YXR1cyIsInNpemVBbmltYXRpb25TcGVlZCIsInN5bmMiLCJjYWxjUG9zaXRpb24iLCJwb2x5Z29uIiwidHlwZSIsIlBvbHlnb25NYXNrVHlwZSIsImlubGluZSIsIngiLCJ5IiwibW92ZSIsImJvdW5jZSIsImNoZWNrT3ZlcmxhcCIsIlV0aWxzIiwiZ2V0UGFydGljbGVDb2xvciIsInZhbHVlIiwic3BlZWQiLCJjYWxjdWxhdGVWZWxvY2l0eSIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsInNoYXBlVHlwZSIsIkFycmF5IiwiZmxvb3IiLCJsZW5ndGgiLCJTaGFwZVR5cGUiLCJpbmRleCIsImltYWdlcyIsIm9wdGlvbnNJbWFnZSIsImRhdGEiLCJyYXRpbyIsIndpZHRoIiwiaGVpZ2h0IiwicmVwbGFjZUNvbG9yIiwicmVwbGFjZV9jb2xvciIsInNyYyIsIlVwZGF0ZXIiLCJCdWJibGVyIiwiUmVwdWxzZXIiLCJEcmF3ZXIiLCJHcmFiYmVyIiwiQ29ubmVjdGVyIiwiSW50ZXJhY3Rpb25NYW5hZ2VyIiwiZGVsdGEiLCJ1cGRhdGUiLCJob3Zlck1vZGUiLCJpbnRlcmFjdGl2aXR5IiwiZXZlbnRzIiwib25Ib3ZlciIsIm1vZGUiLCJjbGlja01vZGUiLCJvbkNsaWNrIiwiaXNJbkFycmF5IiwiSG92ZXJNb2RlIiwiZ3JhYiIsImNvbm5lY3QiLCJqIiwiYXJyYXkiLCJwMiIsImJ1YmJsZSIsIkNsaWNrTW9kZSIsInJlcHVsc2UiLCJpbnRlcmFjdCIsImRyYXciLCJwIiwiY29sbGlzaW9uRm91bmQiLCJpdGVyYXRpb25zIiwiZmlsdGVyIiwidCIsImRpc3QiLCJnZXREaXN0YW5jZUJldHdlZW5Db29yZGluYXRlcyIsIm92ZXJsYXBSZXN1bHQiLCJpc092ZXJsYXBwaW5nIiwiaWR4IiwiaW5kZXhPZiIsInNwbGljZSIsImNhbnZhcyIsImRpbWVuc2lvbiIsInBvcyIsInJhdyIsInJhbmRvbVBvaW50IiwicmFuZG9tUG9pbnRJblBvbHlnb24iLCJiYXNlVmVsb2NpdHkiLCJnZXRQYXJ0aWNsZUJhc2VWZWxvY2l0eSIsInJlcyIsInN0cmFpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUVBOzs7SUFHYUEsUTtBQXNCVDtBQUNBLG9CQUFZQyxTQUFaLEVBQWtDQyxRQUFsQyxFQUEyRDtBQUFBO0FBQUEsU0F0QnBEQyxNQXNCb0Q7QUFBQSxTQXJCM0NDLElBcUIyQztBQUFBLFNBcEIzQ0MsZUFvQjJDO0FBQUEsU0FuQjNDSCxRQW1CMkM7QUFBQSxTQWxCM0NJLE1Ba0IyQztBQUFBLFNBakIzQ0MsS0FpQjJDO0FBQUEsU0FoQjNDQyxPQWdCMkM7QUFBQSxTQWYzQ0MsUUFlMkM7QUFBQSxTQWQzQ0MsS0FjMkM7QUFBQSxTQWIzQ0MsS0FhMkM7QUFBQSxTQVozQ0MsZUFZMkM7QUFBQSxTQVYzQ0MsT0FVMkM7QUFBQSxTQVQzQ0MsT0FTMkM7QUFBQSxTQVIzQ0MsUUFRMkM7QUFBQSxTQVAzQ0MsU0FPMkM7QUFBQSxTQU4zQ0MsTUFNMkM7QUFBQSxTQUwzQ0MsT0FLMkM7QUFBQSxTQUozQ0Msa0JBSTJDO0FB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RSxRQUEzQixFQUFxQztBQUNqQ0QsUUFBQUEsR0FBRyxDQUFDakUsVUFBSixHQUFpQitELFlBQVksQ0FBQ3pFLENBQTlCO0FBQ0EyRSxRQUFBQSxHQUFHLENBQUNoRSxRQUFKLEdBQWU4RCxZQUFZLENBQUN4RSxDQUE1Qjs7QUFFQSxZQUFJakIsT0FBTyxDQUFDQyxTQUFSLENBQWtCaUIsSUFBbEIsQ0FBdUJoQixNQUEzQixFQUFtQztBQUMvQnlGLFVBQUFBLEdBQUcsQ0FBQ2pFLFVBQUosSUFBa0J2QixJQUFJLENBQUNELE1BQUwsRUFBbEI7QUFDQXlGLFVBQUFBLEdBQUcsQ0FBQ2hFLFFBQUosSUFBZ0J4QixJQUFJLENBQUNELE1BQUwsRUFBaEI7QUFDSDtBQUNKLE9BUkQsTUFRTztBQUNIeUYsUUFBQUEsR0FBRyxDQUFDakUsVUFBSixHQUFpQitELFlBQVksQ0FBQ3pFLENBQWIsR0FBaUJiLElBQUksQ0FBQ0QsTUFBTCxFQUFqQixHQUFpQyxHQUFsRDtBQUNBeUYsUUFBQUEsR0FBRyxDQUFDaEUsUUFBSixHQUFlOEQsWUFBWSxDQUFDeEUsQ0FBYixHQUFpQmQsSUFBSSxDQUFDRCxNQUFMLEVBQWpCLEdBQWlDLEdBQWhEO0FBQ0gsT0FsQjBELENBb0IzRDtBQUVBO0FBQ0E7OztBQUVBLGFBQU95RixHQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHtCdWJibGVyfSBmcm9tIFwiLi9QYXJ0aWNsZS9CdWJibGVyXCI7XG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQge0RyYXdlcn0gZnJvbSBcIi4vUGFydGljbGUvRHJhd2VyXCI7XG5pbXBvcnQge0dyYWJiZXJ9IGZyb20gXCIuL1BhcnRpY2xlL0dyYWJiZXJcIjtcbmltcG9ydCB7SVZlbG9jaXR5fSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JVmVsb2NpdHlcIjtcbmltcG9ydCB7SVNpemV9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lTaXplXCI7XG5pbXBvcnQge0lPcGFjaXR5fSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JT3BhY2l0eVwiO1xuaW1wb3J0IHtJQ29vcmRpbmF0ZXN9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lDb29yZGluYXRlc1wiO1xuaW1wb3J0IHtJUGFydGljbGVJbWFnZX0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVBhcnRpY2xlSW1hZ2VcIjtcbmltcG9ydCB7UmVwdWxzZXJ9IGZyb20gXCIuL1BhcnRpY2xlL1JlcHVsc2VyXCI7XG5pbXBvcnQge1NoYXBlVHlwZX0gZnJvbSBcIi4uL0VudW1zL1NoYXBlVHlwZVwiO1xuaW1wb3J0IHtVcGRhdGVyfSBmcm9tIFwiLi9QYXJ0aWNsZS9VcGRhdGVyXCI7XG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi9VdGlscy9VdGlsc1wiO1xuaW1wb3J0IHtQb2x5Z29uTWFza1R5cGV9IGZyb20gXCIuLi9FbnVtcy9Qb2x5Z29uTWFza1R5cGVcIjtcbmltcG9ydCB7Q29ubmVjdGVyfSBmcm9tIFwiLi9QYXJ0aWNsZS9Db25uZWN0ZXJcIjtcbmltcG9ydCB7SVJnYn0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVJnYlwiO1xuaW1wb3J0IHtJT3B0aW9uc30gZnJvbSBcIi4uL0ludGVyZmFjZXMvT3B0aW9ucy9JT3B0aW9uc1wiO1xuaW1wb3J0IHtJbnRlcmFjdGlvbk1hbmFnZXJ9IGZyb20gXCIuL1BhcnRpY2xlL0ludGVyYWN0aW9uTWFuYWdlclwiO1xuaW1wb3J0IHtIb3Zlck1vZGV9IGZyb20gXCIuLi9FbnVtcy9Nb2Rlcy9Ib3Zlck1vZGVcIjtcbmltcG9ydCB7Q2xpY2tNb2RlfSBmcm9tIFwiLi4vRW51bXMvTW9kZXMvQ2xpY2tNb2RlXCI7XG5cbi8qKlxuICogVGhlIHNpbmdsZSBwYXJ0aWNsZSBvYmplY3RcbiAqL1xuZXhwb3J0IGNsYXNzIFBhcnRpY2xlIHtcbiAgICBwdWJsaWMgcmFkaXVzOiBudW1iZXI7XG4gICAgcHVibGljIHJlYWRvbmx5IHNpemU6IElTaXplO1xuICAgIHB1YmxpYyByZWFkb25seSBpbml0aWFsUG9zaXRpb24/OiBJQ29vcmRpbmF0ZXM7XG4gICAgcHVibGljIHJlYWRvbmx5IHBvc2l0aW9uOiBJQ29vcmRpbmF0ZXM7XG4gICAgcHVibGljIHJlYWRvbmx5IG9mZnNldDogSUNvb3JkaW5hdGVzO1xuICAgIHB1YmxpYyByZWFkb25seSBjb2xvcjogSVJnYiB8IG51bGw7XG4gICAgcHVibGljIHJlYWRvbmx5IG9wYWNpdHk6IElPcGFjaXR5O1xuICAgIHB1YmxpYyByZWFkb25seSB2ZWxvY2l0eTogSVZlbG9jaXR5O1xuICAgIHB1YmxpYyByZWFkb25seSBzaGFwZT86IFNoYXBlVHlwZTtcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW1hZ2U/OiBJUGFydGljbGVJbWFnZTtcbiAgICBwdWJsaWMgcmVhZG9ubHkgaW5pdGlhbFZlbG9jaXR5OiBJVmVsb2NpdHk7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgdXBkYXRlcjogVXBkYXRlcjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgYnViYmxlcjogQnViYmxlcjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgcmVwdWxzZXI6IFJlcHVsc2VyO1xuICAgIHB1YmxpYyByZWFkb25seSBjb25uZWN0ZXI6IENvbm5lY3RlcjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgZHJhd2VyOiBEcmF3ZXI7XG4gICAgcHVibGljIHJlYWRvbmx5IGdyYWJiZXI6IEdyYWJiZXI7XG4gICAgcHVibGljIHJlYWRvbmx5IGludGVyYWN0aW9uTWFuYWdlcjogSW50ZXJhY3Rpb25NYW5hZ2VyO1xuICAgIHB1YmxpYyByZWFkb25seSBjb250YWluZXI6IENvbnRhaW5lcjtcblxuICAgIC8qIC0tLS0tLS0tLSB0c1BhcnRpY2xlcyBmdW5jdGlvbnMgLSBwYXJ0aWNsZXMgLS0tLS0tLS0tLS0gKi9cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IENvbnRhaW5lciwgcG9zaXRpb24/OiBJQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb250YWluZXIub3B0aW9ucztcbiAgICAgICAgY29uc3QgY29sb3IgPSBvcHRpb25zLnBhcnRpY2xlcy5jb2xvcjtcblxuICAgICAgICAvKiBzaXplICovXG4gICAgICAgIHRoaXMuc2l6ZSA9IHt9O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IChvcHRpb25zLnBhcnRpY2xlcy5zaXplLnJhbmRvbSA/IE1hdGgucmFuZG9tKCkgOiAxKSAqIGNvbnRhaW5lci5yZXRpbmEuc2l6ZVZhbHVlO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnBhcnRpY2xlcy5zaXplLmFuaW1hdGlvbi5lbmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2l6ZS5zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2l6ZS52ZWxvY2l0eSA9IGNvbnRhaW5lci5yZXRpbmEuc2l6ZUFuaW1hdGlvblNwZWVkIC8gMTAwO1xuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMucGFydGljbGVzLnNpemUuYW5pbWF0aW9uLnN5bmMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpemUudmVsb2NpdHkgPSB0aGlzLnNpemUudmVsb2NpdHkgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogcG9zaXRpb24gKi9cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuY2FsY1Bvc2l0aW9uKHRoaXMuY29udGFpbmVyLCBwb3NpdGlvbik7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucG9seWdvbi50eXBlID09PSBQb2x5Z29uTWFza1R5cGUuaW5saW5lKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIHBhcmFsbGF4ICovXG4gICAgICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgLyogY2hlY2sgcG9zaXRpb24gLSBhdm9pZCBvdmVybGFwICovXG4gICAgICAgIGlmIChvcHRpb25zLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZSkge1xuICAgICAgICAgICAgdGhpcy5jaGVja092ZXJsYXAocG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogY29sb3IgKi9cbiAgICAgICAgdGhpcy5jb2xvciA9IFV0aWxzLmdldFBhcnRpY2xlQ29sb3Iob3B0aW9ucywgY29sb3IpO1xuXG4gICAgICAgIC8qIG9wYWNpdHkgKi9cbiAgICAgICAgdGhpcy5vcGFjaXR5ID0ge1xuICAgICAgICAgICAgdmFsdWU6IChvcHRpb25zLnBhcnRpY2xlcy5vcGFjaXR5LnJhbmRvbSA/IE1hdGgucmFuZG9tKCkgOiAxKSAqIG9wdGlvbnMucGFydGljbGVzLm9wYWNpdHkudmFsdWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucGFydGljbGVzLm9wYWNpdHkuYW5pbWF0aW9uLmVuYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5vcGFjaXR5LnN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5vcGFjaXR5LnZlbG9jaXR5ID0gb3B0aW9ucy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltYXRpb24uc3BlZWQgLyAxMDA7XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltYXRpb24uc3luYykge1xuICAgICAgICAgICAgICAgIHRoaXMub3BhY2l0eS52ZWxvY2l0eSAqPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogYW5pbWF0aW9uIC0gdmVsb2NpdHkgZm9yIHNwZWVkICovXG4gICAgICAgIHRoaXMuaW5pdGlhbFZlbG9jaXR5ID0gUGFydGljbGUuY2FsY3VsYXRlVmVsb2NpdHkob3B0aW9ucyk7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7XG4gICAgICAgICAgICBob3Jpem9udGFsOiB0aGlzLmluaXRpYWxWZWxvY2l0eS5ob3Jpem9udGFsLFxuICAgICAgICAgICAgdmVydGljYWw6IHRoaXMuaW5pdGlhbFZlbG9jaXR5LnZlcnRpY2FsLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8qIGlmIHNoYXBlIGlzIGltYWdlICovXG4gICAgICAgIGNvbnN0IHNoYXBlVHlwZSA9IG9wdGlvbnMucGFydGljbGVzLnNoYXBlLnR5cGU7XG5cbiAgICAgICAgaWYgKHNoYXBlVHlwZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGVUeXBlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNoYXBlVHlwZS5sZW5ndGgpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZVR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zaGFwZSA9PT0gU2hhcGVUeXBlLmltYWdlKSB7XG4gICAgICAgICAgICBjb25zdCBzaGFwZSA9IG9wdGlvbnMucGFydGljbGVzLnNoYXBlO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb250YWluZXIuaW1hZ2VzLmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IGNvbnRhaW5lci5pbWFnZXNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uc0ltYWdlID0gc2hhcGUuaW1hZ2UgaW5zdGFuY2VvZiBBcnJheSA/IHNoYXBlLmltYWdlW2luZGV4XSA6IHNoYXBlLmltYWdlO1xuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBpbWFnZSxcbiAgICAgICAgICAgICAgICByYXRpbzogb3B0aW9uc0ltYWdlLndpZHRoIC8gb3B0aW9uc0ltYWdlLmhlaWdodCxcbiAgICAgICAgICAgICAgICByZXBsYWNlQ29sb3I6IG9wdGlvbnNJbWFnZS5yZXBsYWNlX2NvbG9yLFxuICAgICAgICAgICAgICAgIHNyYzogb3B0aW9uc0ltYWdlLnNyYyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5pbWFnZS5yYXRpbykge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UucmF0aW8gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVyID0gbmV3IFVwZGF0ZXIodGhpcy5jb250YWluZXIsIHRoaXMpO1xuICAgICAgICB0aGlzLmJ1YmJsZXIgPSBuZXcgQnViYmxlcih0aGlzLmNvbnRhaW5lciwgdGhpcyk7XG4gICAgICAgIHRoaXMucmVwdWxzZXIgPSBuZXcgUmVwdWxzZXIodGhpcy5jb250YWluZXIsIHRoaXMpO1xuICAgICAgICB0aGlzLmRyYXdlciA9IG5ldyBEcmF3ZXIodGhpcy5jb250YWluZXIsIHRoaXMsIHRoaXMuYnViYmxlcik7XG4gICAgICAgIHRoaXMuZ3JhYmJlciA9IG5ldyBHcmFiYmVyKHRoaXMuY29udGFpbmVyLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jb25uZWN0ZXIgPSBuZXcgQ29ubmVjdGVyKHRoaXMuY29udGFpbmVyLCB0aGlzKTtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvbk1hbmFnZXIgPSBuZXcgSW50ZXJhY3Rpb25NYW5hZ2VyKHRoaXMuY29udGFpbmVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjYWxjdWxhdGVWZWxvY2l0eShvcHRpb25zOiBJT3B0aW9ucyk6IElWZWxvY2l0eSB7XG4gICAgICAgIGNvbnN0IGJhc2VWZWxvY2l0eSA9IFV0aWxzLmdldFBhcnRpY2xlQmFzZVZlbG9jaXR5KG9wdGlvbnMpO1xuICAgICAgICBjb25zdCByZXMgPSB7XG4gICAgICAgICAgICBob3Jpem9udGFsOiAwLFxuICAgICAgICAgICAgdmVydGljYWw6IDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucGFydGljbGVzLm1vdmUuc3RyYWlnaHQpIHtcbiAgICAgICAgICAgIHJlcy5ob3Jpem9udGFsID0gYmFzZVZlbG9jaXR5Lng7XG4gICAgICAgICAgICByZXMudmVydGljYWwgPSBiYXNlVmVsb2NpdHkueTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMucGFydGljbGVzLm1vdmUucmFuZG9tKSB7XG4gICAgICAgICAgICAgICAgcmVzLmhvcml6b250YWwgKj0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICByZXMudmVydGljYWwgKj0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcy5ob3Jpem9udGFsID0gYmFzZVZlbG9jaXR5LnggKyBNYXRoLnJhbmRvbSgpIC0gMC41O1xuICAgICAgICAgICAgcmVzLnZlcnRpY2FsID0gYmFzZVZlbG9jaXR5LnkgKyBNYXRoLnJhbmRvbSgpIC0gMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc3QgdGhldGEgPSAyLjAgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcblxuICAgICAgICAvLyByZXMueCA9IE1hdGguY29zKHRoZXRhKTtcbiAgICAgICAgLy8gcmVzLnkgPSBNYXRoLnNpbih0aGV0YSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRWZWxvY2l0eSgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb250YWluZXIub3B0aW9ucztcbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSBQYXJ0aWNsZS5jYWxjdWxhdGVWZWxvY2l0eShvcHRpb25zKTtcblxuICAgICAgICB0aGlzLnZlbG9jaXR5Lmhvcml6b250YWwgPSB2ZWxvY2l0eS5ob3Jpem9udGFsO1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnZlcnRpY2FsID0gdmVsb2NpdHkudmVydGljYWw7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShpbmRleDogbnVtYmVyLCBkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gY29udGFpbmVyLm9wdGlvbnM7XG5cbiAgICAgICAgdGhpcy51cGRhdGVyLnVwZGF0ZShkZWx0YSk7XG5cbiAgICAgICAgY29uc3QgaG92ZXJNb2RlID0gb3B0aW9ucy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbkhvdmVyLm1vZGU7XG4gICAgICAgIGNvbnN0IGNsaWNrTW9kZSA9IG9wdGlvbnMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25DbGljay5tb2RlO1xuXG4gICAgICAgIC8qIGV2ZW50cyAqL1xuICAgICAgICBpZiAoVXRpbHMuaXNJbkFycmF5KEhvdmVyTW9kZS5ncmFiLCBob3Zlck1vZGUpKSB7XG4gICAgICAgICAgICB0aGlzLmdyYWJiZXIuZ3JhYigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIE5ldyBpbnRlcmFjdGl2aXR5IGBjb25uZWN0YCB3aGljaCB3b3VsZCBqdXN0IGNvbm5lY3QgdGhlIHBhcnRpY2xlcyBvbiBob3ZlclxuXG4gICAgICAgIGlmIChVdGlscy5pc0luQXJyYXkoSG92ZXJNb2RlLmNvbm5lY3QsIG9wdGlvbnMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25Ib3Zlci5tb2RlKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGluZGV4ICsgMTsgaiA8IGNvbnRhaW5lci5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwMiA9IGNvbnRhaW5lci5wYXJ0aWNsZXMuYXJyYXlbal07XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0ZXIuY29ubmVjdChwMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbHMuaXNJbkFycmF5KEhvdmVyTW9kZS5idWJibGUsIGhvdmVyTW9kZSkgfHwgVXRpbHMuaXNJbkFycmF5KENsaWNrTW9kZS5idWJibGUsIGNsaWNrTW9kZSkpIHtcbiAgICAgICAgICAgIHRoaXMuYnViYmxlci5idWJibGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlscy5pc0luQXJyYXkoSG92ZXJNb2RlLnJlcHVsc2UsIGhvdmVyTW9kZSkgfHwgVXRpbHMuaXNJbkFycmF5KENsaWNrTW9kZS5yZXB1bHNlLCBjbGlja01vZGUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlcHVsc2VyLnJlcHVsc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBpbnRlcmFjdChwMjogUGFydGljbGUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvbk1hbmFnZXIuaW50ZXJhY3QocDIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkcmF3KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyYXdlci5kcmF3KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzT3ZlcmxhcHBpbmcoKTogeyBjb2xsaXNpb25Gb3VuZDogYm9vbGVhbiwgaXRlcmF0aW9uczogbnVtYmVyIH0ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgcCA9IHRoaXM7XG4gICAgICAgIGxldCBjb2xsaXNpb25Gb3VuZCA9IGZhbHNlO1xuICAgICAgICBsZXQgaXRlcmF0aW9ucyA9IDA7XG5cbiAgICAgICAgZm9yIChjb25zdCBwMiBvZiBjb250YWluZXIucGFydGljbGVzLmFycmF5LmZpbHRlcigodCkgPT4gdCAhPSBwKSkge1xuICAgICAgICAgICAgaXRlcmF0aW9ucysrO1xuICAgICAgICAgICAgY29uc3QgZGlzdCA9IFV0aWxzLmdldERpc3RhbmNlQmV0d2VlbkNvb3JkaW5hdGVzKHAucG9zaXRpb24sIHAyLnBvc2l0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGRpc3QgPD0gcC5yYWRpdXMgKyBwMi5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICBjb2xsaXNpb25Gb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sbGlzaW9uRm91bmQ6IGNvbGxpc2lvbkZvdW5kLFxuICAgICAgICAgICAgaXRlcmF0aW9uczogaXRlcmF0aW9ucyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tPdmVybGFwKHBvc2l0aW9uPzogSUNvb3JkaW5hdGVzKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICBjb25zdCBwID0gdGhpcztcbiAgICAgICAgY29uc3Qgb3ZlcmxhcFJlc3VsdCA9IHAuaXNPdmVybGFwcGluZygpO1xuXG4gICAgICAgIGlmIChvdmVybGFwUmVzdWx0Lml0ZXJhdGlvbnMgPj0gY29udGFpbmVyLnBhcnRpY2xlcy5hcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IGNvbnRhaW5lci5wYXJ0aWNsZXMuYXJyYXkuaW5kZXhPZih0aGlzKTtcblxuICAgICAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gdG9vIG1hbnkgcGFydGljbGVzLCByZW1vdmluZyBmcm9tIHRoZSBjdXJyZW50XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcnRpY2xlcy5hcnJheS5zcGxpY2UoaWR4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdmVybGFwUmVzdWx0LmNvbGxpc2lvbkZvdW5kKSB7XG4gICAgICAgICAgICBwLnBvc2l0aW9uLnggPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnggOiBNYXRoLnJhbmRvbSgpICogY29udGFpbmVyLmNhbnZhcy5kaW1lbnNpb24ud2lkdGg7XG4gICAgICAgICAgICBwLnBvc2l0aW9uLnkgPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnkgOiBNYXRoLnJhbmRvbSgpICogY29udGFpbmVyLmNhbnZhcy5kaW1lbnNpb24uaGVpZ2h0O1xuXG4gICAgICAgICAgICBwLmNoZWNrT3ZlcmxhcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjUG9zaXRpb24oY29udGFpbmVyOiBDb250YWluZXIsIHBvc2l0aW9uPzogSUNvb3JkaW5hdGVzKTogSUNvb3JkaW5hdGVzIHtcbiAgICAgICAgY29uc3QgcG9zID0ge3g6IDAsIHk6IDB9O1xuXG4gICAgICAgIGlmIChjb250YWluZXIucG9seWdvbi5yYXcgJiYgY29udGFpbmVyLnBvbHlnb24ucmF3Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gcG9zaXRpb24ueDtcbiAgICAgICAgICAgICAgICBwb3MueSA9IHBvc2l0aW9uLnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbVBvaW50ID0gY29udGFpbmVyLnBvbHlnb24ucmFuZG9tUG9pbnRJblBvbHlnb24oKTtcblxuICAgICAgICAgICAgICAgIHBvcy54ID0gcmFuZG9tUG9pbnQueDtcbiAgICAgICAgICAgICAgICBwb3MueSA9IHJhbmRvbVBvaW50Lnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3MueCA9IHBvc2l0aW9uID8gcG9zaXRpb24ueCA6IE1hdGgucmFuZG9tKCkgKiBjb250YWluZXIuY2FudmFzLmRpbWVuc2lvbi53aWR0aDtcbiAgICAgICAgICAgIHBvcy55ID0gcG9zaXRpb24gPyBwb3NpdGlvbi55IDogTWF0aC5yYW5kb20oKSAqIGNvbnRhaW5lci5jYW52YXMuZGltZW5zaW9uLmhlaWdodDtcblxuICAgICAgICAgICAgLyogY2hlY2sgcG9zaXRpb24gIC0gaW50byB0aGUgY2FudmFzICovXG4gICAgICAgICAgICBpZiAocG9zLnggPiBjb250YWluZXIuY2FudmFzLmRpbWVuc2lvbi53aWR0aCAtIHRoaXMucmFkaXVzICogMikge1xuICAgICAgICAgICAgICAgIHBvcy54IC09IHRoaXMucmFkaXVzO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwb3MueCA8IHRoaXMucmFkaXVzICogMikge1xuICAgICAgICAgICAgICAgIHBvcy54ICs9IHRoaXMucmFkaXVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocG9zLnkgPiBjb250YWluZXIuY2FudmFzLmRpbWVuc2lvbi5oZWlnaHQgLSB0aGlzLnJhZGl1cyAqIDIpIHtcbiAgICAgICAgICAgICAgICBwb3MueSAtPSB0aGlzLnJhZGl1cztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocG9zLnkgPCB0aGlzLnJhZGl1cyAqIDIpIHtcbiAgICAgICAgICAgICAgICBwb3MueSArPSB0aGlzLnJhZGl1cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwb3M7XG4gICAgfVxufVxuIl19