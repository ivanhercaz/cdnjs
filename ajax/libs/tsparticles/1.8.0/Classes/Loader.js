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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL0xvYWRlci50cyJdLCJuYW1lcyI6WyJ0c1BhcnRpY2xlc0RvbSIsIkxvYWRlciIsImluZGV4IiwiZG9tIiwidGFnSWQiLCJwYXJhbXMiLCJpZHgiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsb2FkIiwidGFnIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImV4aXN0Q2FudmFzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIkNvbnN0YW50cyIsImNhbnZhc0NsYXNzIiwicmVtb3ZlQ2hpbGQiLCJjYW52YXNFbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2FudmFzIiwiYXBwZW5kQ2hpbGQiLCJuZXdJdGVtIiwiQ29udGFpbmVyIiwiZmluZEluZGV4IiwidiIsInNwbGljZSIsInB1c2giLCJqc29uVXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwianNvbiIsIkFycmF5IiwibG9hZEZyb21BcnJheSIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyIsImNhbGxiYWNrIiwiRXJyb3IiLCJkb21JdGVtIiwiZWwiLCJpbnRlcmFjdGl2aXR5IiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUlBLElBQUlBLGNBQTJCLEdBQUcsRUFBbEM7QUFFQTs7OztJQUdhQyxNOzs7Ozs7OztBQUNUOzs7MEJBR2lDO0FBQzdCLFVBQUksQ0FBQ0QsY0FBTCxFQUFxQjtBQUNqQkEsUUFBQUEsY0FBYyxHQUFHLEVBQWpCO0FBQ0g7O0FBRUQsYUFBT0EsY0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7NEJBSXNCRSxLLEVBQTBCO0FBQzVDLGFBQU9ELE1BQU0sQ0FBQ0UsR0FBUCxHQUFhRCxLQUFiLENBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7a0NBTTRCRSxLLEVB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Uiw2Q0FBbUROLFFBQVEsQ0FBQ08sTUFBNUQ7QUFDQUYsZ0JBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLDJDQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVI7Ozs7c0NBSWdDRSxRLEVBQW9EO0FBQ2hGLFVBQU0xQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0UsR0FBUCxFQUFaOztBQUVBLFVBQUlBLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLENBQW5CLEVBQXNCO0FBQ2xCLGNBQU0sSUFBSXNDLEtBQUosQ0FBVSx3RkFBVixDQUFOO0FBQ0g7O0FBTCtFO0FBQUE7QUFBQTs7QUFBQTtBQU9oRiw2QkFBc0IzQyxHQUF0Qiw4SEFBMkI7QUFBQSxjQUFoQjRDLE9BQWdCO0FBQ3ZCLGNBQU1DLEVBQUUsR0FBR0QsT0FBTyxDQUFDRSxhQUFSLENBQXNCQyxPQUFqQzs7QUFFQSxjQUFJRixFQUFKLEVBQVE7QUFDSkEsWUFBQUEsRUFBRSxDQUFDRyxnQkFBSCxDQUFvQixPQUFwQixFQUE2Qk4sUUFBN0I7QUFDSDtBQUNKO0FBYitFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjbkYiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gXCIuL1V0aWxzL0NvbnN0YW50c1wiO1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IHtPcHRpb25zfSBmcm9tIFwiLi9PcHRpb25zL09wdGlvbnNcIjtcbmltcG9ydCB7SU9wdGlvbnN9IGZyb20gXCIuLi9JbnRlcmZhY2VzL09wdGlvbnMvSU9wdGlvbnNcIjtcblxubGV0IHRzUGFydGljbGVzRG9tOiBDb250YWluZXJbXSA9IFtdO1xuXG4vKipcbiAqIE1haW4gY2xhc3MgZm9yIGNyZWF0aW5nIHRoZSBbW0NvbnRhaW5lcl1dIG9iamVjdHNcbiAqL1xuZXhwb3J0IGNsYXNzIExvYWRlciB7XG4gICAgLyoqXG4gICAgICogQWxsIHRoZSBbW0NvbnRhaW5lcl1dIG9iamVjdHMgbG9hZGVkXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBkb20oKTogQ29udGFpbmVyW10ge1xuICAgICAgICBpZiAoIXRzUGFydGljbGVzRG9tKSB7XG4gICAgICAgICAgICB0c1BhcnRpY2xlc0RvbSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRzUGFydGljbGVzRG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhIFtbQ29udGFpbmVyXV0gZnJvbSBhbGwgdGhlIG9iamVjdHMgbG9hZGVkXG4gICAgICogQHBhcmFtIGluZGV4IHRoZSBvYmplY3QgaW5kZXhcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGRvbUl0ZW0oaW5kZXg6IG51bWJlcik6IENvbnRhaW5lciB7XG4gICAgICAgIHJldHVybiBMb2FkZXIuZG9tKClbaW5kZXhdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWRzIGFuIG9wdGlvbnMgb2JqZWN0IGZyb20gdGhlIHByb3ZpZGVkIGFycmF5IHRvIGNyZWF0ZSBhIFtbQ29udGFpbmVyXV0gb2JqZWN0LlxuICAgICAqIEBwYXJhbSB0YWdJZCB0aGUgcGFydGljbGVzIGNvbnRhaW5lciBlbGVtZW50IGlkXG4gICAgICogQHBhcmFtIHBhcmFtcyB0aGUgb3B0aW9ucyBhcnJheSB0byBnZXQgdGhlIGl0ZW0gZnJvbVxuICAgICAqIEBwYXJhbSBpbmRleCBpZiBwcm92aWRlZCBnZXRzIHRoZSBjb3JyZXNwb25kaW5nIGl0ZW0gZnJvbSB0aGUgYXJyYXlcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRGcm9tQXJyYXkodGFnSWQ6IHN0cmluZywgcGFyYW1zOiBJT3B0aW9uc1tdLCBpbmRleD86IG51bWJlcik6IENvbnRhaW5lciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGxldCBpZHg6IG51bWJlcjtcblxuICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCB8fCBpbmRleCA8IDAgfHwgaW5kZXggPj0gcGFyYW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGFyYW1zLmxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZHggPSBpbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBMb2FkZXIubG9hZCh0YWdJZCwgcGFyYW1zW2lkeF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWRzIHRoZSBwcm92aWRlZCBvcHRpb25zIHRvIGNyZWF0ZSBhIFtbQ29udGFpbmVyXV0gb2JqZWN0LlxuICAgICAqIEBwYXJhbSB0YWdJZCB0aGUgcGFydGljbGVzIGNvbnRhaW5lciBlbGVtZW50IGlkXG4gICAgICogQHBhcmFtIHBhcmFtcyB0aGUgb3B0aW9ucyBvYmplY3QgdG8gaW5pdGlhbGl6ZSB0aGUgW1tDb250YWluZXJdXVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9hZCh0YWdJZDogc3RyaW5nLCBwYXJhbXM6IElPcHRpb25zKTogQ29udGFpbmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgLyogZWxlbWVudHMgKi9cbiAgICAgICAgY29uc3QgdGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnSWQpO1xuXG4gICAgICAgIGlmICghdGFnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleGlzdENhbnZhcyA9IHRhZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKENvbnN0YW50cy5jYW52YXNDbGFzcyk7XG5cbiAgICAgICAgLyogcmVtb3ZlIGNhbnZhcyBpZiBleGlzdHMgaW50byB0aGUgY29udGFpbmVyIHRhcmdldCB0YWcgKi9cbiAgICAgICAgaWYgKGV4aXN0Q2FudmFzLmxlbmd0aCkge1xuICAgICAgICAgICAgd2hpbGUgKGV4aXN0Q2FudmFzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0YWcucmVtb3ZlQ2hpbGQoZXhpc3RDYW52YXNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogY3JlYXRlIGNhbnZhcyBlbGVtZW50ICovXG4gICAgICAgIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblxuICAgICAgICBjYW52YXNFbC5jbGFzc05hbWUgPSBDb25zdGFudHMuY2FudmFzQ2xhc3M7XG5cbiAgICAgICAgLyogc2V0IHNpemUgY2FudmFzICovXG4gICAgICAgIGNhbnZhc0VsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIGNhbnZhc0VsLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuXG4gICAgICAgIC8qIGFwcGVuZCBjYW52YXMgKi9cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnSWQpPy5hcHBlbmRDaGlsZChjYW52YXNFbCk7XG5cbiAgICAgICAgLyogbGF1bmNoIHRzcGFydGljbGUgKi9cbiAgICAgICAgaWYgKCFjYW52YXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgQ29udGFpbmVyKHRhZ0lkLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBkb20gPSBMb2FkZXIuZG9tKCk7XG4gICAgICAgIGNvbnN0IGlkeCA9IGRvbS5maW5kSW5kZXgoKHYpID0+IHYuY2FudmFzLnRhZ0lkID09PSB0YWdJZCk7XG5cbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICBkb20uc3BsaWNlKGlkeCwgMSwgbmV3SXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb20ucHVzaChuZXdJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdJdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWRzIHRoZSBwcm92aWRlZCBqc29uIHdpdGggYSBHRVQgcmVxdWVzdC4gVGhlIGNvbnRlbnQgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSBhIFtbQ29udGFpbmVyXV0gb2JqZWN0LlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGFzeW5jLCBzbyBpZiB5b3UgbmVlZCBhIGNhbGxiYWNrIHJlZmVyIHRvIEphdmFTY3JpcHQgZnVuY3Rpb24gYGZldGNoYFxuICAgICAqIEBwYXJhbSB0YWdJZCB0aGUgcGFydGljbGVzIGNvbnRhaW5lciBlbGVtZW50IGlkXG4gICAgICogQHBhcmFtIGpzb25VcmwgdGhlIGpzb24gcGF0aCB0byB1c2UgaW4gdGhlIEdFVCByZXF1ZXN0XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkSlNPTih0YWdJZDogc3RyaW5nLCBqc29uVXJsOiBzdHJpbmcpOiBQcm9taXNlPENvbnRhaW5lciB8IHVuZGVmaW5lZD4ge1xuICAgICAgICAvKiBsb2FkIGpzb24gY29uZmlnICovXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goanNvblVybCk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJhbXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBMb2FkZXIubG9hZEZyb21BcnJheSh0YWdJZCwgcGFyYW1zKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIExvYWRlci5sb2FkKHRhZ0lkLCBwYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgdHNQYXJ0aWNsZXMgLSBmZXRjaCBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHRzUGFydGljbGVzIC0gRmlsZSBjb25maWcgbm90IGZvdW5kXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gYWRkaXRpb25hbCBjbGljayBoYW5kbGVyIHRvIGFsbCB0aGUgbG9hZGVkIFtbQ29udGFpbmVyXV0gb2JqZWN0cy5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGZ1bmN0aW9uIGNhbGxlZCBhZnRlciB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHNldE9uQ2xpY2tIYW5kbGVyKGNhbGxiYWNrOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRvbSA9IExvYWRlci5kb20oKTtcblxuICAgICAgICBpZiAoZG9tLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG9ubHkgc2V0IGNsaWNrIGhhbmRsZXJzIGFmdGVyIGNhbGxpbmcgdHNQYXJ0aWNsZXMubG9hZCgpIG9yIHRzUGFydGljbGVzLmxvYWRKU09OKClcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGRvbUl0ZW0gb2YgZG9tKSB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvbUl0ZW0uaW50ZXJhY3Rpdml0eS5lbGVtZW50O1xuXG4gICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19