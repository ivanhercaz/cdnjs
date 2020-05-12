"use strict";
/* -----------------------------------------------
/* Author : Matteo Bruni - www.matteobruni.it
/* MIT license: https://opensource.org/licenses/MIT
/* Demo / Generator : https://tsparticles.matteobruni.it/demo
/* GitHub : https://www.github.com/matteobruni/tsparticles
/* How to use? : Check the GitHub README
/* v1.8.0
/* ----------------------------------------------- */

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

require("reflect-metadata");

var _Loader = require("./Classes/Loader");

var _support = require("./support");

var _tsyringe = require("tsyringe");

var _Options = require("./Classes/Options/Options");

var _dec, _class;

/* ---------- global functions - vendors ------------ */
window.customRequestAnimationFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
  };
}();

window.customCancelRequestAnimationFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}();
/* ---------- tsParticles functions - start ------------ */

/**
 * Main class for creating the singleton on window.
 * It's a proxy to the static [[Loader]] class
 */


var Main = (_dec = (0, _tsyringe.singleton)(), _dec(_class = /*#__PURE__*/function () {
  function Main() {
    (0, _classCallCheck2["default"])(this, Main);
  }

  (0, _createClass2["default"])(Main, [{
    key: "loadFromArray",

    /**
     * Loads an options object from the provided array to create a [[Container]] object.
     * @param tagId the particles container element id
     * @param params the options array to get the item from
     * @param index if provided gets the corresponding item from the array
     */
    value: function loadFromArray(tagId, params, index) {
      return _Loader.Loader.loadFromArray(tagId, params, index);
    }
    /**
     * Loads the provided options to create a [[Container]] object.
     * @param tagId the particles container element id
     * @param params the options object to initialize the [[Container]]
     */

  }, {
    key: "load",
    value: function load(tagId, params) {
      return _Loader.Loader.load(tagId, params);
    }
    /**
     * Loads the provided json with a GET request. The content will be used to create a [[Container]] object.
     * This method is async, so if you need a callback refer to JavaScript function `fetch`
     * @param tagId the particles container element id
     * @param pathConfigJson the json path to use in the GET request
     */

  }, {
    key: "loadJSON",
    value: function loadJSON(tagId, pathConfigJson) {
      return _Loader.Loader.loadJSON(tagId, pathConfigJson);
    }
    /**
     * Adds an additional click handler to all the loaded [[Container]] objects.
     * @param callback the function called after the click event is fired
     */

  }, {
    key: "setOnClickHandler",
    value: function setOnClickHandler(callback) {
      _Loader.Loader.setOnClickHandler(callback);
    }
    /**
     * All the [[Container]] objects loaded
     */

  }, {
    key: "dom",
    value: function dom() {
      return _Loader.Loader.dom();
    }
    /**
     * Retrieves a [[Container]] from all the objects loaded
     * @param index the object index
     */

  }, {
    key: "domItem",
    value: function domItem(index) {
      return _Loader.Loader.domItem(index);
    }
  }]);
  return Main;
}()) || _class);

_tsyringe.container.register("IOptions", {
  useClass: _Options.Options
});
/**
 * The new singleton, replacing the old particlesJS
 */


window.tsParticles = _tsyringe.container.resolve(Main);
Object.freeze(window.tsParticles);
/* particles.js compatibility */

/**
 * Loads the provided options to create a [[Container]] object.
 * @deprecated this method is obsolete, please use the new tsParticles.load
 * @param tagId the particles container element id
 * @param params the options object to initialize the [[Container]]
 */

window.particlesJS = function (tagId, params) {
  return _support.ParticlesJS.load(tagId, params);
};
/**
 * Loads the provided json with a GET request. The content will be used to create a [[Container]] object.
 * @deprecated this method is obsolete, please use the new tsParticles.loadJSON
 * @param tagId the particles container element id
 * @param pathConfigJson the json path to use in the GET request
 * @param callback the function called after the [[Container]] object is loaded that will be passed as a parameter
 */


window.particlesJS.load = function (tagId, pathConfigJson, callback) {
  return _support.ParticlesJS.loadJson(tagId, pathConfigJson, callback);
};
/**
 * Adds an additional click handler to all the loaded [[Container]] objects.
 * @deprecated this method is obsolete, please use the new tsParticles.setOnClickHandler
 * @param callback the function called after the click event is fired
 */


window.particlesJS.setOnClickHandler = function (callback) {
  return _support.ParticlesJS.setOnClickHandler(callback);
};
/**
 * All the [[Container]] objects loaded
 * @deprecated this method is obsolete, please use the new tsParticles.dom
 */


window.pJSDom = function () {
  if (console) {
    console.warn("this method is obsolete, please use the new tsParticles.dom");
  }

  return window.tsParticles.dom();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9NYWluLnRzIl0sIm5hbWVzIjpbIndpbmRvdyIsImN1c3RvbVJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImN1c3RvbUNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwid2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwiTWFpbiIsInRhZ0lkIiwicGFyYW1zIiwiaW5kZXgiLCJMb2FkZXIiLCJsb2FkRnJvbUFycmF5IiwibG9hZCIsInBhdGhDb25maWdKc29uIiwibG9hZEpTT04iLCJzZXRPbkNsaWNrSGFuZGxlciIsImRvbSIsImRvbUl0ZW0iLCJjb250YWluZXIiLCJyZWdpc3RlciIsInVzZUNsYXNzIiwiT3B0aW9ucyIsInRzUGFydGljbGVzIiwicmVzb2x2ZSIsIk9iamVjdCIsImZyZWV6ZSIsInBhcnRpY2xlc0pTIiwiUGFydGljbGVzSlMiLCJsb2FkSnNvbiIsInBKU0RvbSIsImNvbnNvbGUiLCJ3YXJuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFRQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7OztBQW1CQTtBQUVBQSxNQUFNLENBQUNDLDJCQUFQLEdBQXNDLFlBQU07QUFDeEMsU0FBT0QsTUFBTSxDQUFDRSxxQkFBUCxJQUNIRixNQUFNLENBQUNHLDJCQURKLElBRUhILE1BQU0sQ0FBQ0ksd0JBRkosSUFHSEosTUFBTSxDQUFDSyxzQkFISixJQUlITCxNQUFNLENBQUNNLHVCQUpKLElBS0YsVUFBQ0MsUUFBRDtBQUFBLFdBQWNQLE1BQU0sQ0FBQ1EsVUFBUCxDQUFrQkQsUUFBbEIsRUFBNEIsT0FBTyxFQUFuQyxDQUFkO0FBQUEsR0FMTDtBQU1ILENBUG9DLEVBQXJDOztBQVNBUCxNQUFNLENBQUNTLGlDQUFQLEdBQTRDLFlBQU07QUFDOUMsU0FBT1QsTUFBTSxDQUFDVSxvQkFBUCxJQUNIVixNQUFNLENBQUNXLGlDQURKLElBRUhYLE1BQU0sQ0FBQ1ksOEJBRkosSUFHSFosTUFBTSxDQUFDYSw0QkFISixJQUlIYixNQUFNLENBQUNjLDZCQUpKLElBS0hDLFlBTEo7QUFNSCxDQVAwQyxFQUEzQztBQVNBOztBQUVBOzs7Ozs7SUFLTUMsSSxXQURMLDBCOzs7Ozs7OztBQUVHOzs7Ozs7a0NBTXFCQyxLLEVBQWVDLE0sRUFBb0JDLEssRUFBdUM7QUFDM0YsYUFBT0MsZUFBT0MsYUFBUCxDQUFxQkosS0FBckIsRUFBNEJDLE1BQTVCLEVBQW9DQyxLQUFwQyxDQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7eUJBS1lGLEssRUFBZUMsTSxFQUF5QztBQUNoRSxhQUFPRSxlQUFPRSxJQUFQLENBQVlMLEtBQVosRUFBbUJDLE1BQW5CLENBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7NkJBTWdCRCxLLEVBQWVNLGMsRUFBd0Q7QUFDbkYsYUFBT0gsZUFBT0ksUUFBUCxDQUFnQlAsS0FBaEIsRUFBdUJNLGNBQXZCLENBQVA7QUFDSDtBQUVEOzs7Ozs7O3NDQUl5QmhCLFEsRUFBb0Q7QUFDekVhLHFCQUFPSyxpQkFBUCxDQUF5QmxCLFFBQXpCO0FBQ0g7QUFFRDs7Ozs7OzBCQUcwQjtBQUN0QixhQUFPYSxlQUFPTSxHQUFQLEVBQVA7QUFDSDtBQUVEOzs7Ozs7OzRCQUllUCxLLEVBQTBCO0FBQ3JDLGFBQU9DLGVBQU9PLE9BQVAsQ0FBZVIsS0FBZixDQUFQO0FBQ0g7Ozs7O0FBR0xTLG9CQUFVQyxRQUFWLENBQTZCLFVBQTdCLEVBQXlDO0FBQ3JDQyxFQUFBQSxRQUFRLEVBQUVDO0FBRDJCLENBQXpDO0FBSUE7Ozs7O0FBR0EvQixNQUFNLENBQUNnQyxXQUFQLEdBQXFCSixvQkFBVUssT0FBVixDQUFrQmpCLElBQWxCLENBQXJCO0FBRUFrQixNQUFNLENBQUNDLE1BQVAsQ0FBY25DLE1BQU0sQ0FBQ2dDLFdBQXJCO0FBRUE7O0FBRUE7Ozs7Ozs7QUFNQWhDLE1BQU0sQ0FBQ29DLFdBQVAsR0FBcUIsVUFBQ25CLEtBQUQsRUFBZ0JDLE1BQWhCO0FBQUEsU0FBcUNtQixxQkFBWWYsSUFBWixDQUFpQkwsS0FBakIsRUFBd0JDLE1BQXhCLENBQXJDO0FBQUEsQ0FBckI7QUFFQTs7Ozs7Ozs7O0FBT0FsQixNQUFNLENBQUNvQyxXQUFQLENBQW1CZCxJQUFuQixHQUEwQixVQUFDTCxLQUFELEVBQWdCTSxjQUFoQixFQUF3Q2hCLFFBQXhDO0FBQUEsU0FDdEI4QixxQkFBWUMsUUFBWixDQUFxQnJCLEtBQXJCLEVBQTRCTSxjQUE1QixFQUE0Q2hCLFFBQTVDLENBRHNCO0FBQUEsQ0FBMUI7QUFHQTs7Ozs7OztBQUtBUCxNQUFNLENBQUNvQyxXQUFQLENBQW1CWCxpQkFBbkIsR0FBdUMsVUFBQ2xCLFFBQUQ7QUFBQSxTQUNuQzhCLHFCQUFZWixpQkFBWixDQUE4QmxCLFFBQTlCLENBRG1DO0FBQUEsQ0FBdkM7QUFHQTs7Ozs7O0FBSUFQLE1BQU0sQ0FBQ3VDLE1BQVAsR0FBZ0IsWUFBTTtBQUNsQixNQUFJQyxPQUFKLEVBQWE7QUFDVEEsSUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsNkRBQWI7QUFDSDs7QUFFRCxTQUFPekMsTUFBTSxDQUFDZ0MsV0FBUCxDQUFtQk4sR0FBbkIsRUFBUDtBQUNILENBTkQiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qIEF1dGhvciA6IE1hdHRlbyBCcnVuaSAtIHd3dy5tYXR0ZW9icnVuaS5pdFxuLyogTUlUIGxpY2Vuc2U6IGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vKiBEZW1vIC8gR2VuZXJhdG9yIDogaHR0cHM6Ly90c3BhcnRpY2xlcy5tYXR0ZW9icnVuaS5pdC9kZW1vXG4vKiBHaXRIdWIgOiBodHRwczovL3d3dy5naXRodWIuY29tL21hdHRlb2JydW5pL3RzcGFydGljbGVzXG4vKiBIb3cgdG8gdXNlPyA6IENoZWNrIHRoZSBHaXRIdWIgUkVBRE1FXG4vKiB2MS44LjBcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5pbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcIi4vQ2xhc3Nlcy9Db250YWluZXJcIjtcbmltcG9ydCB7TG9hZGVyfSBmcm9tIFwiLi9DbGFzc2VzL0xvYWRlclwiO1xuaW1wb3J0IHtJUGFydGljbGVzSnN9IGZyb20gXCIuL0ludGVyZmFjZXMvSVBhcnRpY2xlc0pzXCI7XG5pbXBvcnQge1BhcnRpY2xlc0pTfSBmcm9tIFwiLi9zdXBwb3J0XCI7XG5pbXBvcnQge0lPcHRpb25zfSBmcm9tIFwiLi9JbnRlcmZhY2VzL09wdGlvbnMvSU9wdGlvbnNcIjtcbmltcG9ydCB7Y29udGFpbmVyLCBzaW5nbGV0b259IGZyb20gXCJ0c3lyaW5nZVwiO1xuaW1wb3J0IHtPcHRpb25zfSBmcm9tIFwiLi9DbGFzc2VzL09wdGlvbnMvT3B0aW9uc1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgICAgIGN1c3RvbVJlcXVlc3RBbmltYXRpb25GcmFtZTogKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjaykgPT4gbnVtYmVyO1xuICAgICAgICBtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IChjYWxsYmFjazogRnJhbWVSZXF1ZXN0Q2FsbGJhY2spID0+IG51bWJlcjtcbiAgICAgICAgb1JlcXVlc3RBbmltYXRpb25GcmFtZTogKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjaykgPT4gbnVtYmVyO1xuICAgICAgICBtc1JlcXVlc3RBbmltYXRpb25GcmFtZTogKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjaykgPT4gbnVtYmVyO1xuICAgICAgICBjdXN0b21DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IChoYW5kbGU6IG51bWJlcikgPT4gdm9pZDtcbiAgICAgICAgd2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiAoaGFuZGxlOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgICAgIG1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZTogKGhhbmRsZTogbnVtYmVyKSA9PiB2b2lkO1xuICAgICAgICBvQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiAoaGFuZGxlOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgICAgIG1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiAoaGFuZGxlOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgICAgIHBhcnRpY2xlc0pTOiBJUGFydGljbGVzSnM7XG4gICAgICAgIHRzUGFydGljbGVzOiBNYWluO1xuICAgICAgICBwSlNEb206ICgpID0+IENvbnRhaW5lcltdO1xuICAgIH1cbn1cblxuLyogLS0tLS0tLS0tLSBnbG9iYWwgZnVuY3Rpb25zIC0gdmVuZG9ycyAtLS0tLS0tLS0tLS0gKi9cblxud2luZG93LmN1c3RvbVJlcXVlc3RBbmltYXRpb25GcmFtZSA9ICgoKSA9PiB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAoKGNhbGxiYWNrKSA9PiB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKSk7XG59KSgpO1xuXG53aW5kb3cuY3VzdG9tQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKCgpID0+IHtcbiAgICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIHdpbmRvdy53ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICB3aW5kb3cub0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICB3aW5kb3cubXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgY2xlYXJUaW1lb3V0XG59KSgpO1xuXG4vKiAtLS0tLS0tLS0tIHRzUGFydGljbGVzIGZ1bmN0aW9ucyAtIHN0YXJ0IC0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIE1haW4gY2xhc3MgZm9yIGNyZWF0aW5nIHRoZSBzaW5nbGV0b24gb24gd2luZG93LlxuICogSXQncyBhIHByb3h5IHRvIHRoZSBzdGF0aWMgW1tMb2FkZXJdXSBjbGFzc1xuICovXG5Ac2luZ2xldG9uKClcbmNsYXNzIE1haW4ge1xuICAgIC8qKlxuICAgICAqIExvYWRzIGFuIG9wdGlvbnMgb2JqZWN0IGZyb20gdGhlIHByb3ZpZGVkIGFycmF5IHRvIGNyZWF0ZSBhIFtbQ29udGFpbmVyXV0gb2JqZWN0LlxuICAgICAqIEBwYXJhbSB0YWdJZCB0aGUgcGFydGljbGVzIGNvbnRhaW5lciBlbGVtZW50IGlkXG4gICAgICogQHBhcmFtIHBhcmFtcyB0aGUgb3B0aW9ucyBhcnJheSB0byBnZXQgdGhlIGl0ZW0gZnJvbVxuICAgICAqIEBwYXJhbSBpbmRleCBpZiBwcm92aWRlZCBnZXRzIHRoZSBjb3JyZXNwb25kaW5nIGl0ZW0gZnJvbSB0aGUgYXJyYXlcbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZEZyb21BcnJheSh0YWdJZDogc3RyaW5nLCBwYXJhbXM6IElPcHRpb25zW10sIGluZGV4PzogbnVtYmVyKTogQ29udGFpbmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIExvYWRlci5sb2FkRnJvbUFycmF5KHRhZ0lkLCBwYXJhbXMsIGluZGV4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkcyB0aGUgcHJvdmlkZWQgb3B0aW9ucyB0byBjcmVhdGUgYSBbW0NvbnRhaW5lcl1dIG9iamVjdC5cbiAgICAgKiBAcGFyYW0gdGFnSWQgdGhlIHBhcnRpY2xlcyBjb250YWluZXIgZWxlbWVudCBpZFxuICAgICAqIEBwYXJhbSBwYXJhbXMgdGhlIG9wdGlvbnMgb2JqZWN0IHRvIGluaXRpYWxpemUgdGhlIFtbQ29udGFpbmVyXV1cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9hZCh0YWdJZDogc3RyaW5nLCBwYXJhbXM6IElPcHRpb25zKTogQ29udGFpbmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIExvYWRlci5sb2FkKHRhZ0lkLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWRzIHRoZSBwcm92aWRlZCBqc29uIHdpdGggYSBHRVQgcmVxdWVzdC4gVGhlIGNvbnRlbnQgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSBhIFtbQ29udGFpbmVyXV0gb2JqZWN0LlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGFzeW5jLCBzbyBpZiB5b3UgbmVlZCBhIGNhbGxiYWNrIHJlZmVyIHRvIEphdmFTY3JpcHQgZnVuY3Rpb24gYGZldGNoYFxuICAgICAqIEBwYXJhbSB0YWdJZCB0aGUgcGFydGljbGVzIGNvbnRhaW5lciBlbGVtZW50IGlkXG4gICAgICogQHBhcmFtIHBhdGhDb25maWdKc29uIHRoZSBqc29uIHBhdGggdG8gdXNlIGluIHRoZSBHRVQgcmVxdWVzdFxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkSlNPTih0YWdJZDogc3RyaW5nLCBwYXRoQ29uZmlnSnNvbjogc3RyaW5nKTogUHJvbWlzZTxDb250YWluZXIgfCB1bmRlZmluZWQ+IHtcbiAgICAgICAgcmV0dXJuIExvYWRlci5sb2FkSlNPTih0YWdJZCwgcGF0aENvbmZpZ0pzb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gYWRkaXRpb25hbCBjbGljayBoYW5kbGVyIHRvIGFsbCB0aGUgbG9hZGVkIFtbQ29udGFpbmVyXV0gb2JqZWN0cy5cbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgdGhlIGZ1bmN0aW9uIGNhbGxlZCBhZnRlciB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0T25DbGlja0hhbmRsZXIoY2FsbGJhY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QpOiB2b2lkIHtcbiAgICAgICAgTG9hZGVyLnNldE9uQ2xpY2tIYW5kbGVyKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGwgdGhlIFtbQ29udGFpbmVyXV0gb2JqZWN0cyBsb2FkZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgZG9tKCk6IENvbnRhaW5lcltdIHtcbiAgICAgICAgcmV0dXJuIExvYWRlci5kb20oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgYSBbW0NvbnRhaW5lcl1dIGZyb20gYWxsIHRoZSBvYmplY3RzIGxvYWRlZFxuICAgICAqIEBwYXJhbSBpbmRleCB0aGUgb2JqZWN0IGluZGV4XG4gICAgICovXG4gICAgcHVibGljIGRvbUl0ZW0oaW5kZXg6IG51bWJlcik6IENvbnRhaW5lciB7XG4gICAgICAgIHJldHVybiBMb2FkZXIuZG9tSXRlbShpbmRleCk7XG4gICAgfVxufVxuXG5jb250YWluZXIucmVnaXN0ZXI8SU9wdGlvbnM+KFwiSU9wdGlvbnNcIiwge1xuICAgIHVzZUNsYXNzOiBPcHRpb25zLFxufSk7XG5cbi8qKlxuICogVGhlIG5ldyBzaW5nbGV0b24sIHJlcGxhY2luZyB0aGUgb2xkIHBhcnRpY2xlc0pTXG4gKi9cbndpbmRvdy50c1BhcnRpY2xlcyA9IGNvbnRhaW5lci5yZXNvbHZlKE1haW4pO1xuXG5PYmplY3QuZnJlZXplKHdpbmRvdy50c1BhcnRpY2xlcyk7XG5cbi8qIHBhcnRpY2xlcy5qcyBjb21wYXRpYmlsaXR5ICovXG5cbi8qKlxuICogTG9hZHMgdGhlIHByb3ZpZGVkIG9wdGlvbnMgdG8gY3JlYXRlIGEgW1tDb250YWluZXJdXSBvYmplY3QuXG4gKiBAZGVwcmVjYXRlZCB0aGlzIG1ldGhvZCBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IHRzUGFydGljbGVzLmxvYWRcbiAqIEBwYXJhbSB0YWdJZCB0aGUgcGFydGljbGVzIGNvbnRhaW5lciBlbGVtZW50IGlkXG4gKiBAcGFyYW0gcGFyYW1zIHRoZSBvcHRpb25zIG9iamVjdCB0byBpbml0aWFsaXplIHRoZSBbW0NvbnRhaW5lcl1dXG4gKi9cbndpbmRvdy5wYXJ0aWNsZXNKUyA9ICh0YWdJZDogc3RyaW5nLCBwYXJhbXM6IElPcHRpb25zKSA9PiBQYXJ0aWNsZXNKUy5sb2FkKHRhZ0lkLCBwYXJhbXMpO1xuXG4vKipcbiAqIExvYWRzIHRoZSBwcm92aWRlZCBqc29uIHdpdGggYSBHRVQgcmVxdWVzdC4gVGhlIGNvbnRlbnQgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSBhIFtbQ29udGFpbmVyXV0gb2JqZWN0LlxuICogQGRlcHJlY2F0ZWQgdGhpcyBtZXRob2QgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyB0c1BhcnRpY2xlcy5sb2FkSlNPTlxuICogQHBhcmFtIHRhZ0lkIHRoZSBwYXJ0aWNsZXMgY29udGFpbmVyIGVsZW1lbnQgaWRcbiAqIEBwYXJhbSBwYXRoQ29uZmlnSnNvbiB0aGUganNvbiBwYXRoIHRvIHVzZSBpbiB0aGUgR0VUIHJlcXVlc3RcbiAqIEBwYXJhbSBjYWxsYmFjayB0aGUgZnVuY3Rpb24gY2FsbGVkIGFmdGVyIHRoZSBbW0NvbnRhaW5lcl1dIG9iamVjdCBpcyBsb2FkZWQgdGhhdCB3aWxsIGJlIHBhc3NlZCBhcyBhIHBhcmFtZXRlclxuICovXG53aW5kb3cucGFydGljbGVzSlMubG9hZCA9ICh0YWdJZDogc3RyaW5nLCBwYXRoQ29uZmlnSnNvbjogc3RyaW5nLCBjYWxsYmFjazogKGNvbnRhaW5lcjogQ29udGFpbmVyKSA9PiB2b2lkKSA9PlxuICAgIFBhcnRpY2xlc0pTLmxvYWRKc29uKHRhZ0lkLCBwYXRoQ29uZmlnSnNvbiwgY2FsbGJhY2spO1xuXG4vKipcbiAqIEFkZHMgYW4gYWRkaXRpb25hbCBjbGljayBoYW5kbGVyIHRvIGFsbCB0aGUgbG9hZGVkIFtbQ29udGFpbmVyXV0gb2JqZWN0cy5cbiAqIEBkZXByZWNhdGVkIHRoaXMgbWV0aG9kIGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgdHNQYXJ0aWNsZXMuc2V0T25DbGlja0hhbmRsZXJcbiAqIEBwYXJhbSBjYWxsYmFjayB0aGUgZnVuY3Rpb24gY2FsbGVkIGFmdGVyIHRoZSBjbGljayBldmVudCBpcyBmaXJlZFxuICovXG53aW5kb3cucGFydGljbGVzSlMuc2V0T25DbGlja0hhbmRsZXIgPSAoY2FsbGJhY2s6IEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QpID0+XG4gICAgUGFydGljbGVzSlMuc2V0T25DbGlja0hhbmRsZXIoY2FsbGJhY2spO1xuXG4vKipcbiAqIEFsbCB0aGUgW1tDb250YWluZXJdXSBvYmplY3RzIGxvYWRlZFxuICogQGRlcHJlY2F0ZWQgdGhpcyBtZXRob2QgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyB0c1BhcnRpY2xlcy5kb21cbiAqL1xud2luZG93LnBKU0RvbSA9ICgpID0+IHtcbiAgICBpZiAoY29uc29sZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJ0aGlzIG1ldGhvZCBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IHRzUGFydGljbGVzLmRvbVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd2luZG93LnRzUGFydGljbGVzLmRvbSgpO1xufTtcbiJdfQ==