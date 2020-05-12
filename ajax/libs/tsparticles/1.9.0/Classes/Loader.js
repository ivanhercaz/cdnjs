"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _Constants = require("./Utils/Constants");

var _Container = require("./Container");

var tsParticlesDom = [];
/**
 * Main class for creating the [[Container]] objects
 */

var Loader = /*#__PURE__*/function () {
  function Loader() {
    (0, _classCallCheck2["default"])(this, Loader);
  }

  (0, _createClass2["default"])(Loader, null, [{
    key: "dom",

    /**
     * All the [[Container]] objects loaded
     */
    value: function dom() {
      if (!tsParticlesDom) {
        tsParticlesDom = [];
      }

      return tsParticlesDom;
    }
    /**
     * Retrieves a [[Container]] from all the objects loaded
     * @param index the object index
     */

  }, {
    key: "domItem",
    value: function domItem(index) {
      return Loader.dom()[index];
    }
    /**
     * Loads an options object from the provided array to create a [[Container]] object.
     * @param tagId the particles container element id
     * @param params the options array to get the item from
     * @param index if provided gets the corresponding item from the array
     */

  }, {
    key: "loadFromArray",
    value: function loadFromArray(tagId, params, index) {
      var idx;

      if (index === undefined || index < 0 || index >= params.length) {
        idx = Math.floor(Math.random() * params.length);
      } else {
        idx = index;
      }

      return Loader.load(tagId, params[idx]);
    }
    /**
     * Loads the provided options to create a [[Container]] object.
     * @param tagId the particles container element id
     * @param params the options object to initialize the [[Container]]
     */

  }, {
    key: "load",
    value: function load(tagId, params) {
      var _document$getElementB;

      /* elements */
      var tag = document.getElementById(tagId);

      if (!tag) {
        return;
      }

      var existCanvas = tag.getElementsByClassName(_Constants.Constants.canvasClass);
      /* remove canvas if exists into the container target tag */

      if (existCanvas.length) {
        while (existCanvas.length > 0) {
          tag.removeChild(existCanvas[0]);
        }
      }
      /* create canvas element */


      var canvasEl = document.createElement("canvas");
      canvasEl.className = _Constants.Constants.canvasClass;
      /* set size canvas */

      canvasEl.style.width = "100%";
      canvasEl.style.height = "100%";
      /* append canvas */

      var canvas = (_document$getElementB = document.getElementById(tagId)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.appendChild(canvasEl);
      /* launch tsparticle */

      if (!canvas) {
        return;
      }

      var newItem = new _Container.Container(tagId, params);
      var dom = Loader.dom();
      var idx = dom.findIndex(function (v) {
        return v.canvas.tagId === tagId;
      });

      if (idx >= 0) {
        dom.splice(idx, 1, newItem);
      } else {
        dom.push(newItem);
      }

      return newItem;
    }
    /**
     * Loads the provided json with a GET request. The content will be used to create a [[Container]] object.
     * This method is async, so if you need a callback refer to JavaScript function `fetch`
     * @param tagId the particles container element id
     * @param jsonUrl the json path to use in the GET request
     */

  }, {
    key: "loadJSON",
    value: function () {
      var _loadJSON = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(tagId, jsonUrl) {
        var response, params;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(jsonUrl);

              case 2:
                response = _context.sent;

                if (!response.ok) {
                  _context.next = 14;
                  break;
                }

                _context.next = 6;
                return response.json();

              case 6:
                params = _context.sent;

                if (!(params instanceof Array)) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", Loader.loadFromArray(tagId, params));

              case 11:
                return _context.abrupt("return", Loader.load(tagId, params));

              case 12:
                _context.next = 16;
                break;

              case 14:
                console.error("Error tsParticles - fetch status: ".concat(response.status));
                console.error("Error tsParticles - File config not found");

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function loadJSON(_x, _x2) {
        return _loadJSON.apply(this, arguments);
      }

      return loadJSON;
    }()
  }, {
    key: "setOnClickHandler",

    /**
     * Adds an additional click handler to all the loaded [[Container]] objects.
     * @param callback the function called after the click event is fired
     */
    value: function setOnClickHandler(callback) {
      var dom = Loader.dom();

      if (dom.length === 0) {
        throw new Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = dom[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var domItem = _step.value;
          var el = domItem.interactivity.element;

          if (el) {
            el.addEventListener("click", callback);
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
    }
  }]);
  return Loader;
}();

exports.Loader = Loader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL0xvYWRlci50cyJdLCJuYW1lcyI6WyJ0c1BhcnRpY2xlc0RvbSIsIkxvYWRlciIsImluZGV4IiwiZG9tIiwidGFnSWQiLCJwYXJhbXMiLCJpZHgiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsb2FkIiwidGFnIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImV4aXN0Q2FudmFzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIkNvbnN0YW50cyIsImNhbnZhc0NsYXNzIiwicmVtb3ZlQ2hpbGQiLCJjYW52YXNFbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2FudmFzIiwiYXBwZW5kQ2hpbGQiLCJuZXdJdGVtIiwiQ29udGFpbmVyIiwiZmluZEluZGV4IiwidiIsInNwbGljZSIsInB1c2giLCJqc29uVXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwianNvbiIsIkFycmF5IiwibG9hZEZyb21BcnJheSIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyIsImNhbGxiYWNrIiwiRXJyb3IiLCJkb21JdGVtIiwiZWwiLCJpbnRlcmFjdGl2aXR5IiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUdBLElBQUlBLGNBQTJCLEdBQUcsRUFBbEM7QUFFQTs7OztJQUdhQyxNOzs7Ozs7OztBQUNUOzs7MEJBR2lDO0FBQzdCLFVBQUksQ0FBQ0QsY0FBTCxFQUFxQjtBQUNqQkEsUUFBQUEsY0FBYyxHQUFHLEVBQWpCO0FBQ0g7O0FBRUQsYUFBT0EsY0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7NEJBSXNCRSxLLEVBQTBCO0FBQzVDLGFBQU9ELE1BQU0sQ0FBQ0UsR0FBUCxHQUFhRCxLQUFiLENBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7a0NBTTRCRSxLLEVB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Uiw2Q0FBbUROLFFBQVEsQ0FBQ08sTUFBNUQ7QUFDQUYsZ0JBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLDJDQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVI7Ozs7c0NBSWdDRSxRLEVBQW9EO0FBQ2hGLFVBQU0xQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0UsR0FBUCxFQUFaOztBQUVBLFVBQUlBLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLENBQW5CLEVBQXNCO0FBQ2xCLGNBQU0sSUFBSXNDLEtBQUosQ0FBVSx3RkFBVixDQUFOO0FBQ0g7O0FBTCtFO0FBQUE7QUFBQTs7QUFBQTtBQU9oRiw2QkFBc0IzQyxHQUF0Qiw4SEFBMkI7QUFBQSxjQUFoQjRDLE9BQWdCO0FBQ3ZCLGNBQU1DLEVBQUUsR0FBR0QsT0FBTyxDQUFDRSxhQUFSLENBQXNCQyxPQUFqQzs7QUFFQSxjQUFJRixFQUFKLEVBQVE7QUFDSkEsWUFBQUEsRUFBRSxDQUFDRyxnQkFBSCxDQUFvQixPQUFwQixFQUE2Qk4sUUFBN0I7QUFDSDtBQUNKO0FBYitFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjbkYiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gXCIuL1V0aWxzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IHtJT3B0aW9uc30gZnJvbSBcIi4uL0ludGVyZmFjZXMvT3B0aW9ucy9JT3B0aW9uc1wiO1xuXG5sZXQgdHNQYXJ0aWNsZXNEb206IENvbnRhaW5lcltdID0gW107XG5cbi8qKlxuICogTWFpbiBjbGFzcyBmb3IgY3JlYXRpbmcgdGhlIFtbQ29udGFpbmVyXV0gb2JqZWN0c1xuICovXG5leHBvcnQgY2xhc3MgTG9hZGVyIHtcbiAgICAvKipcbiAgICAgKiBBbGwgdGhlIFtbQ29udGFpbmVyXV0gb2JqZWN0cyBsb2FkZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGRvbSgpOiBDb250YWluZXJbXSB7XG4gICAgICAgIGlmICghdHNQYXJ0aWNsZXNEb20pIHtcbiAgICAgICAgICAgIHRzUGFydGljbGVzRG9tID0gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHNQYXJ0aWNsZXNEb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIGEgW1tDb250YWluZXJdXSBmcm9tIGFsbCB0aGUgb2JqZWN0cyBsb2FkZWRcbiAgICAgKiBAcGFyYW0gaW5kZXggdGhlIG9iamVjdCBpbmRleFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZG9tSXRlbShpbmRleDogbnVtYmVyKTogQ29udGFpbmVyIHtcbiAgICAgICAgcmV0dXJuIExvYWRlci5kb20oKVtpbmRleF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZHMgYW4gb3B0aW9ucyBvYmplY3QgZnJvbSB0aGUgcHJvdmlkZWQgYXJyYXkgdG8gY3JlYXRlIGEgW1tDb250YWluZXJdXSBvYmplY3QuXG4gICAgICogQHBhcmFtIHRhZ0lkIHRoZSBwYXJ0aWNsZXMgY29udGFpbmVyIGVsZW1lbnQgaWRcbiAgICAgKiBAcGFyYW0gcGFyYW1zIHRoZSBvcHRpb25zIGFycmF5IHRvIGdldCB0aGUgaXRlbSBmcm9tXG4gICAgICogQHBhcmFtIGluZGV4IGlmIHByb3ZpZGVkIGdldHMgdGhlIGNvcnJlc3BvbmRpbmcgaXRlbSBmcm9tIHRoZSBhcnJheVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEZyb21BcnJheSh0YWdJZDogc3RyaW5nLCBwYXJhbXM6IElPcHRpb25zW10sIGluZGV4PzogbnVtYmVyKTogQ29udGFpbmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgbGV0IGlkeDogbnVtYmVyO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+PSBwYXJhbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwYXJhbXMubGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlkeCA9IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIExvYWRlci5sb2FkKHRhZ0lkLCBwYXJhbXNbaWR4XSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZHMgdGhlIHByb3ZpZGVkIG9wdGlvbnMgdG8gY3JlYXRlIGEgW1tDb250YWluZXJdXSBvYmplY3QuXG4gICAgICogQHBhcmFtIHRhZ0lkIHRoZSBwYXJ0aWNsZXMgY29udGFpbmVyIGVsZW1lbnQgaWRcbiAgICAgKiBAcGFyYW0gcGFyYW1zIHRoZSBvcHRpb25zIG9iamVjdCB0byBpbml0aWFsaXplIHRoZSBbW0NvbnRhaW5lcl1dXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBsb2FkKHRhZ0lkOiBzdHJpbmcsIHBhcmFtczogSU9wdGlvbnMpOiBDb250YWluZXIgfCB1bmRlZmluZWQge1xuICAgICAgICAvKiBlbGVtZW50cyAqL1xuICAgICAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWdJZCk7XG5cbiAgICAgICAgaWYgKCF0YWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0Q2FudmFzID0gdGFnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoQ29uc3RhbnRzLmNhbnZhc0NsYXNzKTtcblxuICAgICAgICAvKiByZW1vdmUgY2FudmFzIGlmIGV4aXN0cyBpbnRvIHRoZSBjb250YWluZXIgdGFyZ2V0IHRhZyAqL1xuICAgICAgICBpZiAoZXhpc3RDYW52YXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB3aGlsZSAoZXhpc3RDYW52YXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRhZy5yZW1vdmVDaGlsZChleGlzdENhbnZhc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBjcmVhdGUgY2FudmFzIGVsZW1lbnQgKi9cbiAgICAgICAgY29uc3QgY2FudmFzRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXG4gICAgICAgIGNhbnZhc0VsLmNsYXNzTmFtZSA9IENvbnN0YW50cy5jYW52YXNDbGFzcztcblxuICAgICAgICAvKiBzZXQgc2l6ZSBjYW52YXMgKi9cbiAgICAgICAgY2FudmFzRWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgY2FudmFzRWwuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG5cbiAgICAgICAgLyogYXBwZW5kIGNhbnZhcyAqL1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWdJZCk/LmFwcGVuZENoaWxkKGNhbnZhc0VsKTtcblxuICAgICAgICAvKiBsYXVuY2ggdHNwYXJ0aWNsZSAqL1xuICAgICAgICBpZiAoIWNhbnZhcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IG5ldyBDb250YWluZXIodGFnSWQsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IGRvbSA9IExvYWRlci5kb20oKTtcbiAgICAgICAgY29uc3QgaWR4ID0gZG9tLmZpbmRJbmRleCgodikgPT4gdi5jYW52YXMudGFnSWQgPT09IHRhZ0lkKTtcblxuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIGRvbS5zcGxpY2UoaWR4LCAxLCBuZXdJdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvbS5wdXNoKG5ld0l0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld0l0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZHMgdGhlIHByb3ZpZGVkIGpzb24gd2l0aCBhIEdFVCByZXF1ZXN0LiBUaGUgY29udGVudCB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIGEgW1tDb250YWluZXJdXSBvYmplY3QuXG4gICAgICogVGhpcyBtZXRob2QgaXMgYXN5bmMsIHNvIGlmIHlvdSBuZWVkIGEgY2FsbGJhY2sgcmVmZXIgdG8gSmF2YVNjcmlwdCBmdW5jdGlvbiBgZmV0Y2hgXG4gICAgICogQHBhcmFtIHRhZ0lkIHRoZSBwYXJ0aWNsZXMgY29udGFpbmVyIGVsZW1lbnQgaWRcbiAgICAgKiBAcGFyYW0ganNvblVybCB0aGUganNvbiBwYXRoIHRvIHVzZSBpbiB0aGUgR0VUIHJlcXVlc3RcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxvYWRKU09OKHRhZ0lkOiBzdHJpbmcsIGpzb25Vcmw6IHN0cmluZyk6IFByb21pc2U8Q29udGFpbmVyIHwgdW5kZWZpbmVkPiB7XG4gICAgICAgIC8qIGxvYWQganNvbiBjb25maWcgKi9cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChqc29uVXJsKTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgaWYgKHBhcmFtcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIExvYWRlci5sb2FkRnJvbUFycmF5KHRhZ0lkLCBwYXJhbXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTG9hZGVyLmxvYWQodGFnSWQsIHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB0c1BhcnRpY2xlcyAtIGZldGNoIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdHNQYXJ0aWNsZXMgLSBGaWxlIGNvbmZpZyBub3QgZm91bmRcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBhZGRpdGlvbmFsIGNsaWNrIGhhbmRsZXIgdG8gYWxsIHRoZSBsb2FkZWQgW1tDb250YWluZXJdXSBvYmplY3RzLlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB0aGUgZnVuY3Rpb24gY2FsbGVkIGFmdGVyIHRoZSBjbGljayBldmVudCBpcyBmaXJlZFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc2V0T25DbGlja0hhbmRsZXIoY2FsbGJhY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZG9tID0gTG9hZGVyLmRvbSgpO1xuXG4gICAgICAgIGlmIChkb20ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gb25seSBzZXQgY2xpY2sgaGFuZGxlcnMgYWZ0ZXIgY2FsbGluZyB0c1BhcnRpY2xlcy5sb2FkKCkgb3IgdHNQYXJ0aWNsZXMubG9hZEpTT04oKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgZG9tSXRlbSBvZiBkb20pIHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gZG9tSXRlbS5pbnRlcmFjdGl2aXR5LmVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=