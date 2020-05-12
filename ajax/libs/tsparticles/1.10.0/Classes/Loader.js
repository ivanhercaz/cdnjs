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
      /* elements */
      var domContainer = document.getElementById(tagId);

      if (!domContainer) {
        return;
      }
      /* launch tsparticle */


      var dom = Loader.dom();
      var idx = dom.findIndex(function (v) {
        return v.id === tagId;
      });

      if (idx >= 0) {
        var old = this.domItem(idx);
        old.destroy();
      }

      var newItem = new _Container.Container(tagId, params);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DbGFzc2VzL0xvYWRlci50cyJdLCJuYW1lcyI6WyJ0c1BhcnRpY2xlc0RvbSIsIkxvYWRlciIsImluZGV4IiwiZG9tIiwidGFnSWQiLCJwYXJhbXMiLCJpZHgiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsb2FkIiwiZG9tQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZpbmRJbmRleCIsInYiLCJpZCIsIm9sZCIsImRvbUl0ZW0iLCJkZXN0cm95IiwibmV3SXRlbSIsIkNvbnRhaW5lciIsInNwbGljZSIsInB1c2giLCJqc29uVXJsIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwianNvbiIsIkFycmF5IiwibG9hZEZyb21BcnJheSIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyIsImNhbGxiYWNrIiwiRXJyb3IiLCJlbCIsImludGVyYWN0aXZpdHkiLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBSUEsSUFBSUEsY0FBMkIsR0FBRyxFQUFsQztBQUVBOzs7O0lBR2FDLE07Ozs7Ozs7O0FBQ1Q7OzswQkFHaUM7QUFDN0IsVUFBSSxDQUFDRCxjQUFMLEVBQXFCO0FBQ2pCQSxRQUFBQSxjQUFjLEdBQUcsRUFBakI7QUFDSDs7QUFFRCxhQUFPQSxjQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs0QkFJc0JFLEssRUFBMEI7QUFDNUMsYUFBT0QsTUFBTSxDQUFDRSxHQUFQLEdBQWFELEtBQWIsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7OztrQ0FNNEJFLEssRUFDQUMsTSxFQUNBSCxLLEVBQXVDO0FBQy9ELFVBQUlJLEdBQUo7O0FBRUEsVUFBSUosS0FBSyxLQUFLSyxTQUFWLElBQXVCTCxLQUFLLEdBQUcsQ0FBL0IsSUFBb0NBLEtBQUssSUFBSUcsTUFBTSxDQUFDRyxNQUF4RCxFQUFnRTtBQUM1REYsUUFBQUEsR0FBRyxHQUFHRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCTixNQUFNLENBQUNHLE1BQWxDLENBQU47QUFDSCxPQUZELE1BRU87QUFDSEYsUUFBQUEsR0FBRyxHQUFHSixLQUFOO0FBQ0g7O0FBRUQsYUFBT0QsTUFBTSxDQUFDVyxJQUFQLENBQVlSLEtBQVosRUFBbUJDLE1BQU0sQ0FBQ0MsR0FBRCxDQUF6QixDQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7eUJBS21CRixLLEVBQWVDLE0sRUFBNEQ7QUFDMUY7QUFDQSxVQUFNUSxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QlgsS0FBeEIsQ0FBckI7O0FBRUEsVUFBSSxDQUFDUyxZQUFMLEVBQW1CO0FBQ2Y7QUFDSDtBQUVEOzs7QUFDQSxVQUFNVixHQUFHLEdBQUdGLE1BQU0sQ0FBQ0UsR0FBUCxFQUFaO0FBQ0EsVUFBTUcsR0FBRyxHQUFHSCxHQUFHLENBQUNhLFNBQUosQ0FBYyxVQUFDQyxDQUFEO0FBQUEsZUFBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNkLEtBQWhCO0FBQUEsT0FBZCxDQUFaOztBQUVBLFVBQUlFLEdBQUcsSUFBSSxDQUFYLEVBQWM7QUFDVixZQUFNYSxHQUFHLEdBQUcsS0FBS0MsT0FBTCxDQUFhZCxHQUFiLENBQVo7QUFFQWEsUUFBQUEsR0FBRyxDQUFDRSxPQUFKO0FBQ0g7O0FBRUQsVUFBTUMsT0FBTyxHQUFHLElBQUlDLG9CQUFKLENBQWNuQixLQUFkLEVBQXFCQyxNQUFyQixDQUFoQjs7QUFFQSxVQUFJQyxHQUFHLElBQUksQ0FBWCxFQUFjO0FBQ1ZILFFBQUFBLEdBQUcsQ0FBQ3FCLE1BQUosQ0FBV2xCLEdBQVgsRUFBZ0IsQ0FBaEIsRUFBbUJnQixPQUFuQjtBQUNILE9BRkQsTUFFTztBQUNIbkIsUUFBQUEsR0FBRyxDQUFDc0IsSUFBSixDQUFTSCxPQUFUO0FBQ0g7O0FBRUQsYUFBT0EsT0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7cUhBTTZCbEIsSyxFQUFlc0IsTzs7Ozs7Ozt1QkFFakJDLEtBQUssQ0FBQ0QsT0FBRCxDOzs7QUFBdEJFLGdCQUFBQSxROztxQkFFRkEsUUFBUSxDQUFDQyxFOzs7Ozs7dUJBQ1lELFFBQVEsQ0FBQ0UsSUFBVCxFOzs7QUFBZnpCLGdCQUFBQSxNOztzQkFFRkEsTUFBTSxZQUFZMEIsSzs7Ozs7aURBQ1g5QixNQUFNLENBQUMrQixhQUFQLENBQXFCNUIsS0FBckIsRUFBNEJDLE1BQTVCLEM7OztpREFFQUosTUFBTSxDQUFDVyxJQUFQLENBQVlSLEtBQVosRUFBbUJDLE1BQW5CLEM7Ozs7Ozs7QUFHWDRCLGdCQUFBQSxPQUFPLENBQUNDLEtBQVIsNkNBQW1ETixRQUFRLENBQUNPLE1BQTVEO0FBQ0FGLGdCQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYywyQ0FBZDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlSOzs7O3NDQUlnQ0UsUSxFQUFvRDtBQUNoRixVQUFNakMsR0FBRyxHQUFHRixNQUFNLENBQUNFLEdBQVAsRUFBWjs7QUFFQSxVQUFJQSxHQUFHLENBQUNLLE1BQUosS0FBZSxDQUFuQixFQUFzQjtBQUNsQixjQUFNLElBQUk2QixLQUFKLENBQVUsd0ZBQVYsQ0FBTjtBQUNIOztBQUwrRTtBQUFBO0FBQUE7O0FBQUE7QUFPaEYsNkJBQXNCbEMsR0FBdEIsOEhBQTJCO0FBQUEsY0FBaEJpQixPQUFnQjtBQUN2QixjQUFNa0IsRUFBRSxHQUFHbEIsT0FBTyxDQUFDbUIsYUFBUixDQUFzQkMsT0FBakM7O0FBRUEsY0FBSUYsRUFBSixFQUFRO0FBQ0pBLFlBQUFBLEVBQUUsQ0FBQ0csZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkJMLFFBQTdCO0FBQ0g7QUFDSjtBQWIrRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY25GIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCB7SU9wdGlvbnN9IGZyb20gXCIuLi9JbnRlcmZhY2VzL09wdGlvbnMvSU9wdGlvbnNcIjtcbmltcG9ydCB7UmVjdXJzaXZlUGFydGlhbH0gZnJvbSBcIi4uL1R5cGVzL1JlY3Vyc2l2ZVBhcnRpYWxcIjtcblxubGV0IHRzUGFydGljbGVzRG9tOiBDb250YWluZXJbXSA9IFtdO1xuXG4vKipcbiAqIE1haW4gY2xhc3MgZm9yIGNyZWF0aW5nIHRoZSBbW0NvbnRhaW5lcl1dIG9iamVjdHNcbiAqL1xuZXhwb3J0IGNsYXNzIExvYWRlciB7XG4gICAgLyoqXG4gICAgICogQWxsIHRoZSBbW0NvbnRhaW5lcl1dIG9iamVjdHMgbG9hZGVkXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBkb20oKTogQ29udGFpbmVyW10ge1xuICAgICAgICBpZiAoIXRzUGFydGljbGVzRG9tKSB7XG4gICAgICAgICAgICB0c1BhcnRpY2xlc0RvbSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRzUGFydGljbGVzRG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhIFtbQ29udGFpbmVyXV0gZnJvbSBhbGwgdGhlIG9iamVjdHMgbG9hZGVkXG4gICAgICogQHBhcmFtIGluZGV4IHRoZSBvYmplY3QgaW5kZXhcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGRvbUl0ZW0oaW5kZXg6IG51bWJlcik6IENvbnRhaW5lciB7XG4gICAgICAgIHJldHVybiBMb2FkZXIuZG9tKClbaW5kZXhdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWRzIGFuIG9wdGlvbnMgb2JqZWN0IGZyb20gdGhlIHByb3ZpZGVkIGFycmF5IHRvIGNyZWF0ZSBhIFtbQ29udGFpbmVyXV0gb2JqZWN0LlxuICAgICAqIEBwYXJhbSB0YWdJZCB0aGUgcGFydGljbGVzIGNvbnRhaW5lciBlbGVtZW50IGlkXG4gICAgICogQHBhcmFtIHBhcmFtcyB0aGUgb3B0aW9ucyBhcnJheSB0byBnZXQgdGhlIGl0ZW0gZnJvbVxuICAgICAqIEBwYXJhbSBpbmRleCBpZiBwcm92aWRlZCBnZXRzIHRoZSBjb3JyZXNwb25kaW5nIGl0ZW0gZnJvbSB0aGUgYXJyYXlcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGxvYWRGcm9tQXJyYXkodGFnSWQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBSZWN1cnNpdmVQYXJ0aWFsPElPcHRpb25zPltdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD86IG51bWJlcik6IENvbnRhaW5lciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGxldCBpZHg6IG51bWJlcjtcblxuICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCB8fCBpbmRleCA8IDAgfHwgaW5kZXggPj0gcGFyYW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcGFyYW1zLmxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZHggPSBpbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBMb2FkZXIubG9hZCh0YWdJZCwgcGFyYW1zW2lkeF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWRzIHRoZSBwcm92aWRlZCBvcHRpb25zIHRvIGNyZWF0ZSBhIFtbQ29udGFpbmVyXV0gb2JqZWN0LlxuICAgICAqIEBwYXJhbSB0YWdJZCB0aGUgcGFydGljbGVzIGNvbnRhaW5lciBlbGVtZW50IGlkXG4gICAgICogQHBhcmFtIHBhcmFtcyB0aGUgb3B0aW9ucyBvYmplY3QgdG8gaW5pdGlhbGl6ZSB0aGUgW1tDb250YWluZXJdXVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbG9hZCh0YWdJZDogc3RyaW5nLCBwYXJhbXM/OiBSZWN1cnNpdmVQYXJ0aWFsPElPcHRpb25zPik6IENvbnRhaW5lciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIC8qIGVsZW1lbnRzICovXG4gICAgICAgIGNvbnN0IGRvbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ0lkKTtcblxuICAgICAgICBpZiAoIWRvbUNvbnRhaW5lcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogbGF1bmNoIHRzcGFydGljbGUgKi9cbiAgICAgICAgY29uc3QgZG9tID0gTG9hZGVyLmRvbSgpO1xuICAgICAgICBjb25zdCBpZHggPSBkb20uZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSB0YWdJZCk7XG5cbiAgICAgICAgaWYgKGlkeCA+PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBvbGQgPSB0aGlzLmRvbUl0ZW0oaWR4KTtcblxuICAgICAgICAgICAgb2xkLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBuZXcgQ29udGFpbmVyKHRhZ0lkLCBwYXJhbXMpO1xuXG4gICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgZG9tLnNwbGljZShpZHgsIDEsIG5ld0l0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9tLnB1c2gobmV3SXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3SXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkcyB0aGUgcHJvdmlkZWQganNvbiB3aXRoIGEgR0VUIHJlcXVlc3QuIFRoZSBjb250ZW50IHdpbGwgYmUgdXNlZCB0byBjcmVhdGUgYSBbW0NvbnRhaW5lcl1dIG9iamVjdC5cbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBhc3luYywgc28gaWYgeW91IG5lZWQgYSBjYWxsYmFjayByZWZlciB0byBKYXZhU2NyaXB0IGZ1bmN0aW9uIGBmZXRjaGBcbiAgICAgKiBAcGFyYW0gdGFnSWQgdGhlIHBhcnRpY2xlcyBjb250YWluZXIgZWxlbWVudCBpZFxuICAgICAqIEBwYXJhbSBqc29uVXJsIHRoZSBqc29uIHBhdGggdG8gdXNlIGluIHRoZSBHRVQgcmVxdWVzdFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbG9hZEpTT04odGFnSWQ6IHN0cmluZywganNvblVybDogc3RyaW5nKTogUHJvbWlzZTxDb250YWluZXIgfCB1bmRlZmluZWQ+IHtcbiAgICAgICAgLyogbG9hZCBqc29uIGNvbmZpZyAqL1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGpzb25VcmwpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICBpZiAocGFyYW1zIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTG9hZGVyLmxvYWRGcm9tQXJyYXkodGFnSWQsIHBhcmFtcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBMb2FkZXIubG9hZCh0YWdJZCwgcGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHRzUGFydGljbGVzIC0gZmV0Y2ggc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB0c1BhcnRpY2xlcyAtIEZpbGUgY29uZmlnIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGFkZGl0aW9uYWwgY2xpY2sgaGFuZGxlciB0byBhbGwgdGhlIGxvYWRlZCBbW0NvbnRhaW5lcl1dIG9iamVjdHMuXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHRoZSBmdW5jdGlvbiBjYWxsZWQgYWZ0ZXIgdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBzZXRPbkNsaWNrSGFuZGxlcihjYWxsYmFjazogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCk6IHZvaWQge1xuICAgICAgICBjb25zdCBkb20gPSBMb2FkZXIuZG9tKCk7XG5cbiAgICAgICAgaWYgKGRvbS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbiBvbmx5IHNldCBjbGljayBoYW5kbGVycyBhZnRlciBjYWxsaW5nIHRzUGFydGljbGVzLmxvYWQoKSBvciB0c1BhcnRpY2xlcy5sb2FkSlNPTigpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBkb21JdGVtIG9mIGRvbSkge1xuICAgICAgICAgICAgY29uc3QgZWwgPSBkb21JdGVtLmludGVyYWN0aXZpdHkuZWxlbWVudDtcblxuICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==