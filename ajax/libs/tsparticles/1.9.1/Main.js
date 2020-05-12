"use strict";
/* -----------------------------------------------
/* Author : Matteo Bruni - https://www.matteobruni.it
/* MIT license: https://opensource.org/licenses/MIT
/* Demo / Generator : https://particles.matteobruni.it/
/* GitHub : https://www.github.com/matteobruni/tsparticles
/* How to use? : Check the GitHub README
/* v1.9.1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9NYWluLnRzIl0sIm5hbWVzIjpbIndpbmRvdyIsImN1c3RvbVJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImN1c3RvbUNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwid2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwiTWFpbiIsInRhZ0lkIiwicGFyYW1zIiwiaW5kZXgiLCJMb2FkZXIiLCJsb2FkRnJvbUFycmF5IiwibG9hZCIsInBhdGhDb25maWdKc29uIiwibG9hZEpTT04iLCJzZXRPbkNsaWNrSGFuZGxlciIsImRvbSIsImRvbUl0ZW0iLCJjb250YWluZXIiLCJyZWdpc3RlciIsInVzZUNsYXNzIiwiT3B0aW9ucyIsInRzUGFydGljbGVzIiwicmVzb2x2ZSIsIk9iamVjdCIsImZyZWV6ZSIsInBhcnRpY2xlc0pTIiwiUGFydGljbGVzSlMiLCJsb2FkSnNvbiIsInBKU0RvbSIsImNvbnNvbGUiLCJ3YXJuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFRQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7OztBQW1CQTtBQUVBQSxNQUFNLENBQUNDLDJCQUFQLEdBQXNDLFlBQU07QUFDeEMsU0FBT0QsTUFBTSxDQUFDRSxxQkFBUCxJQUNIRixNQUFNLENBQUNHLDJCQURKLElBRUhILE1BQU0sQ0FBQ0ksd0JBRkosSUFHSEosTUFBTSxDQUFDSyxzQkFISixJQUlITCxNQUFNLENBQUNNLHVCQUpKLElBS0YsVUFBQ0MsUUFBRDtBQUFBLFdBQWNQLE1BQU0sQ0FBQ1EsVUFBUCxDQUFrQkQsUUFBbEIsRUFBNEIsT0FBTyxFQUFuQyxDQUFkO0FBQUEsR0FMTDtBQU1ILENBUG9DLEVBQXJDOztBQVNBUCxNQUFNLENBQUNTLGlDQUFQLEdBQTRDLFlBQU07QUFDOUMsU0FBT1QsTUFBTSxDQUFDVSxvQkFBUCxJQUNIVixNQUFNLENBQUNXLGlDQURKLElBRUhYLE1BQU0sQ0FBQ1ksOEJBRkosSUFHSFosTUFBTSxDQUFDYSw0QkFISixJQUlIYixNQUFNLENBQUNjLDZCQUpKLElBS0hDLFlBTEo7QUFNSCxDQVAwQyxFQUEzQztBQVNBOztBQUVBOzs7Ozs7SUFLTUMsSSxXQURMLDBCOzs7Ozs7OztBQUVHOzs7Ozs7a0NBTXFCQyxLLEVBQWVDLE0sRUFBb0JDLEssRUFBdUM7QUFDM0YsYUFBT0MsZUFBT0MsYUFBUCxDQUFxQkosS0FBckIsRUFBNEJDLE1BQTVCLEVBQW9DQyxLQUFwQyxDQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7eUJBS1lGLEssRUFBZUMsTSxFQUF5QztBQUNoRSxhQUFPRSxlQUFPRSxJQUFQLENBQVlMLEtBQVosRUFBbUJDLE1BQW5CLENBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7NkJBTWdCRCxLLEVBQWVNLGMsRUFBd0Q7QUFDbkYsYUFBT0gsZUFBT0ksUUFBUCxDQUFnQlAsS0FBaEIsRUFBdUJNLGNBQXZCLENBQVA7QUFDSDtBQUVEOzs7Ozs7O3NDQUl5QmhCLFEsRUFBb0Q7QUFDekVhLHFCQUFPSyxpQkFBUCxDQUF5QmxCLFFBQXpCO0FBQ0g7QUFFRDs7Ozs7OzBCQUcwQjtBQUN0QixhQUFPYSxlQUFPTSxHQUFQLEVBQVA7QUFDSDtBQUVEOzs7Ozs7OzRCQUllUCxLLEVBQTBCO0FBQ3JDLGFBQU9DLGVBQU9PLE9BQVAsQ0FBZVIsS0FBZixDQUFQO0FBQ0g7Ozs7O0FBR0xTLG9CQUFVQyxRQUFWLENBQTZCLFVBQTdCLEVBQXlDO0FBQ3JDQyxFQUFBQSxRQUFRLEVBQUVDO0FBRDJCLENBQXpDO0FBSUE7Ozs7O0FBR0EvQixNQUFNLENBQUNnQyxXQUFQLEdBQXFCSixvQkFBVUssT0FBVixDQUFrQmpCLElBQWxCLENBQXJCO0FBRUFrQixNQUFNLENBQUNDLE1BQVAsQ0FBY25DLE1BQU0sQ0FBQ2dDLFdBQXJCO0FBRUE7O0FBRUE7Ozs7Ozs7QUFNQWhDLE1BQU0sQ0FBQ29DLFdBQVAsR0FBcUIsVUFBQ25CLEtBQUQsRUFBZ0JDLE1BQWhCO0FBQUEsU0FBcUNtQixxQkFBWWYsSUFBWixDQUFpQkwsS0FBakIsRUFBd0JDLE1BQXhCLENBQXJDO0FBQUEsQ0FBckI7QUFFQTs7Ozs7Ozs7O0FBT0FsQixNQUFNLENBQUNvQyxXQUFQLENBQW1CZCxJQUFuQixHQUEwQixVQUFDTCxLQUFELEVBQWdCTSxjQUFoQixFQUF3Q2hCLFFBQXhDO0FBQUEsU0FDdEI4QixxQkFBWUMsUUFBWixDQUFxQnJCLEtBQXJCLEVBQTRCTSxjQUE1QixFQUE0Q2hCLFFBQTVDLENBRHNCO0FBQUEsQ0FBMUI7QUFHQTs7Ozs7OztBQUtBUCxNQUFNLENBQUNvQyxXQUFQLENBQW1CWCxpQkFBbkIsR0FBdUMsVUFBQ2xCLFFBQUQ7QUFBQSxTQUNuQzhCLHFCQUFZWixpQkFBWixDQUE4QmxCLFFBQTlCLENBRG1DO0FBQUEsQ0FBdkM7QUFHQTs7Ozs7O0FBSUFQLE1BQU0sQ0FBQ3VDLE1BQVAsR0FBZ0IsWUFBTTtBQUNsQixNQUFJQyxPQUFKLEVBQWE7QUFDVEEsSUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsNkRBQWI7QUFDSDs7QUFFRCxTQUFPekMsTUFBTSxDQUFDZ0MsV0FBUCxDQUFtQk4sR0FBbkIsRUFBUDtBQUNILENBTkQiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qIEF1dGhvciA6IE1hdHRlbyBCcnVuaSAtIGh0dHBzOi8vd3d3Lm1hdHRlb2JydW5pLml0XG4vKiBNSVQgbGljZW5zZTogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8qIERlbW8gLyBHZW5lcmF0b3IgOiBodHRwczovL3BhcnRpY2xlcy5tYXR0ZW9icnVuaS5pdC9cbi8qIEdpdEh1YiA6IGh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vbWF0dGVvYnJ1bmkvdHNwYXJ0aWNsZXNcbi8qIEhvdyB0byB1c2U/IDogQ2hlY2sgdGhlIEdpdEh1YiBSRUFETUVcbi8qIHYxLjkuMVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbmltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tIFwiLi9DbGFzc2VzL0NvbnRhaW5lclwiO1xuaW1wb3J0IHtMb2FkZXJ9IGZyb20gXCIuL0NsYXNzZXMvTG9hZGVyXCI7XG5pbXBvcnQge0lQYXJ0aWNsZXNKc30gZnJvbSBcIi4vSW50ZXJmYWNlcy9JUGFydGljbGVzSnNcIjtcbmltcG9ydCB7UGFydGljbGVzSlN9IGZyb20gXCIuL3N1cHBvcnRcIjtcbmltcG9ydCB7SU9wdGlvbnN9IGZyb20gXCIuL0ludGVyZmFjZXMvT3B0aW9ucy9JT3B0aW9uc1wiO1xuaW1wb3J0IHtjb250YWluZXIsIHNpbmdsZXRvbn0gZnJvbSBcInRzeXJpbmdlXCI7XG5pbXBvcnQge09wdGlvbnN9IGZyb20gXCIuL0NsYXNzZXMvT3B0aW9ucy9PcHRpb25zXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAgICAgY3VzdG9tUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiAoY2FsbGJhY2s6IEZyYW1lUmVxdWVzdENhbGxiYWNrKSA9PiBudW1iZXI7XG4gICAgICAgIG1velJlcXVlc3RBbmltYXRpb25GcmFtZTogKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjaykgPT4gbnVtYmVyO1xuICAgICAgICBvUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiAoY2FsbGJhY2s6IEZyYW1lUmVxdWVzdENhbGxiYWNrKSA9PiBudW1iZXI7XG4gICAgICAgIG1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiAoY2FsbGJhY2s6IEZyYW1lUmVxdWVzdENhbGxiYWNrKSA9PiBudW1iZXI7XG4gICAgICAgIGN1c3RvbUNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZTogKGhhbmRsZTogbnVtYmVyKSA9PiB2b2lkO1xuICAgICAgICB3ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IChoYW5kbGU6IG51bWJlcikgPT4gdm9pZDtcbiAgICAgICAgbW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lOiAoaGFuZGxlOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgICAgIG9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IChoYW5kbGU6IG51bWJlcikgPT4gdm9pZDtcbiAgICAgICAgbXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IChoYW5kbGU6IG51bWJlcikgPT4gdm9pZDtcbiAgICAgICAgcGFydGljbGVzSlM6IElQYXJ0aWNsZXNKcztcbiAgICAgICAgdHNQYXJ0aWNsZXM6IE1haW47XG4gICAgICAgIHBKU0RvbTogKCkgPT4gQ29udGFpbmVyW107XG4gICAgfVxufVxuXG4vKiAtLS0tLS0tLS0tIGdsb2JhbCBmdW5jdGlvbnMgLSB2ZW5kb3JzIC0tLS0tLS0tLS0tLSAqL1xuXG53aW5kb3cuY3VzdG9tUmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKCgpID0+IHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICgoY2FsbGJhY2spID0+IHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApKTtcbn0pKCk7XG5cbndpbmRvdy5jdXN0b21DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoKCkgPT4ge1xuICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgd2luZG93LndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICB3aW5kb3cubW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIHdpbmRvdy5vQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgIHdpbmRvdy5tc0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICBjbGVhclRpbWVvdXRcbn0pKCk7XG5cbi8qIC0tLS0tLS0tLS0gdHNQYXJ0aWNsZXMgZnVuY3Rpb25zIC0gc3RhcnQgLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogTWFpbiBjbGFzcyBmb3IgY3JlYXRpbmcgdGhlIHNpbmdsZXRvbiBvbiB3aW5kb3cuXG4gKiBJdCdzIGEgcHJveHkgdG8gdGhlIHN0YXRpYyBbW0xvYWRlcl1dIGNsYXNzXG4gKi9cbkBzaW5nbGV0b24oKVxuY2xhc3MgTWFpbiB7XG4gICAgLyoqXG4gICAgICogTG9hZHMgYW4gb3B0aW9ucyBvYmplY3QgZnJvbSB0aGUgcHJvdmlkZWQgYXJyYXkgdG8gY3JlYXRlIGEgW1tDb250YWluZXJdXSBvYmplY3QuXG4gICAgICogQHBhcmFtIHRhZ0lkIHRoZSBwYXJ0aWNsZXMgY29udGFpbmVyIGVsZW1lbnQgaWRcbiAgICAgKiBAcGFyYW0gcGFyYW1zIHRoZSBvcHRpb25zIGFycmF5IHRvIGdldCB0aGUgaXRlbSBmcm9tXG4gICAgICogQHBhcmFtIGluZGV4IGlmIHByb3ZpZGVkIGdldHMgdGhlIGNvcnJlc3BvbmRpbmcgaXRlbSBmcm9tIHRoZSBhcnJheVxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkRnJvbUFycmF5KHRhZ0lkOiBzdHJpbmcsIHBhcmFtczogSU9wdGlvbnNbXSwgaW5kZXg/OiBudW1iZXIpOiBDb250YWluZXIgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gTG9hZGVyLmxvYWRGcm9tQXJyYXkodGFnSWQsIHBhcmFtcywgaW5kZXgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWRzIHRoZSBwcm92aWRlZCBvcHRpb25zIHRvIGNyZWF0ZSBhIFtbQ29udGFpbmVyXV0gb2JqZWN0LlxuICAgICAqIEBwYXJhbSB0YWdJZCB0aGUgcGFydGljbGVzIGNvbnRhaW5lciBlbGVtZW50IGlkXG4gICAgICogQHBhcmFtIHBhcmFtcyB0aGUgb3B0aW9ucyBvYmplY3QgdG8gaW5pdGlhbGl6ZSB0aGUgW1tDb250YWluZXJdXVxuICAgICAqL1xuICAgIHB1YmxpYyBsb2FkKHRhZ0lkOiBzdHJpbmcsIHBhcmFtczogSU9wdGlvbnMpOiBDb250YWluZXIgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gTG9hZGVyLmxvYWQodGFnSWQsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZHMgdGhlIHByb3ZpZGVkIGpzb24gd2l0aCBhIEdFVCByZXF1ZXN0LiBUaGUgY29udGVudCB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIGEgW1tDb250YWluZXJdXSBvYmplY3QuXG4gICAgICogVGhpcyBtZXRob2QgaXMgYXN5bmMsIHNvIGlmIHlvdSBuZWVkIGEgY2FsbGJhY2sgcmVmZXIgdG8gSmF2YVNjcmlwdCBmdW5jdGlvbiBgZmV0Y2hgXG4gICAgICogQHBhcmFtIHRhZ0lkIHRoZSBwYXJ0aWNsZXMgY29udGFpbmVyIGVsZW1lbnQgaWRcbiAgICAgKiBAcGFyYW0gcGF0aENvbmZpZ0pzb24gdGhlIGpzb24gcGF0aCB0byB1c2UgaW4gdGhlIEdFVCByZXF1ZXN0XG4gICAgICovXG4gICAgcHVibGljIGxvYWRKU09OKHRhZ0lkOiBzdHJpbmcsIHBhdGhDb25maWdKc29uOiBzdHJpbmcpOiBQcm9taXNlPENvbnRhaW5lciB8IHVuZGVmaW5lZD4ge1xuICAgICAgICByZXR1cm4gTG9hZGVyLmxvYWRKU09OKHRhZ0lkLCBwYXRoQ29uZmlnSnNvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBhZGRpdGlvbmFsIGNsaWNrIGhhbmRsZXIgdG8gYWxsIHRoZSBsb2FkZWQgW1tDb250YWluZXJdXSBvYmplY3RzLlxuICAgICAqIEBwYXJhbSBjYWxsYmFjayB0aGUgZnVuY3Rpb24gY2FsbGVkIGFmdGVyIHRoZSBjbGljayBldmVudCBpcyBmaXJlZFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRPbkNsaWNrSGFuZGxlcihjYWxsYmFjazogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCk6IHZvaWQge1xuICAgICAgICBMb2FkZXIuc2V0T25DbGlja0hhbmRsZXIoY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbCB0aGUgW1tDb250YWluZXJdXSBvYmplY3RzIGxvYWRlZFxuICAgICAqL1xuICAgIHB1YmxpYyBkb20oKTogQ29udGFpbmVyW10ge1xuICAgICAgICByZXR1cm4gTG9hZGVyLmRvbSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyBhIFtbQ29udGFpbmVyXV0gZnJvbSBhbGwgdGhlIG9iamVjdHMgbG9hZGVkXG4gICAgICogQHBhcmFtIGluZGV4IHRoZSBvYmplY3QgaW5kZXhcbiAgICAgKi9cbiAgICBwdWJsaWMgZG9tSXRlbShpbmRleDogbnVtYmVyKTogQ29udGFpbmVyIHtcbiAgICAgICAgcmV0dXJuIExvYWRlci5kb21JdGVtKGluZGV4KTtcbiAgICB9XG59XG5cbmNvbnRhaW5lci5yZWdpc3RlcjxJT3B0aW9ucz4oXCJJT3B0aW9uc1wiLCB7XG4gICAgdXNlQ2xhc3M6IE9wdGlvbnMsXG59KTtcblxuLyoqXG4gKiBUaGUgbmV3IHNpbmdsZXRvbiwgcmVwbGFjaW5nIHRoZSBvbGQgcGFydGljbGVzSlNcbiAqL1xud2luZG93LnRzUGFydGljbGVzID0gY29udGFpbmVyLnJlc29sdmUoTWFpbik7XG5cbk9iamVjdC5mcmVlemUod2luZG93LnRzUGFydGljbGVzKTtcblxuLyogcGFydGljbGVzLmpzIGNvbXBhdGliaWxpdHkgKi9cblxuLyoqXG4gKiBMb2FkcyB0aGUgcHJvdmlkZWQgb3B0aW9ucyB0byBjcmVhdGUgYSBbW0NvbnRhaW5lcl1dIG9iamVjdC5cbiAqIEBkZXByZWNhdGVkIHRoaXMgbWV0aG9kIGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgdHNQYXJ0aWNsZXMubG9hZFxuICogQHBhcmFtIHRhZ0lkIHRoZSBwYXJ0aWNsZXMgY29udGFpbmVyIGVsZW1lbnQgaWRcbiAqIEBwYXJhbSBwYXJhbXMgdGhlIG9wdGlvbnMgb2JqZWN0IHRvIGluaXRpYWxpemUgdGhlIFtbQ29udGFpbmVyXV1cbiAqL1xud2luZG93LnBhcnRpY2xlc0pTID0gKHRhZ0lkOiBzdHJpbmcsIHBhcmFtczogSU9wdGlvbnMpID0+IFBhcnRpY2xlc0pTLmxvYWQodGFnSWQsIHBhcmFtcyk7XG5cbi8qKlxuICogTG9hZHMgdGhlIHByb3ZpZGVkIGpzb24gd2l0aCBhIEdFVCByZXF1ZXN0LiBUaGUgY29udGVudCB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIGEgW1tDb250YWluZXJdXSBvYmplY3QuXG4gKiBAZGVwcmVjYXRlZCB0aGlzIG1ldGhvZCBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IHRzUGFydGljbGVzLmxvYWRKU09OXG4gKiBAcGFyYW0gdGFnSWQgdGhlIHBhcnRpY2xlcyBjb250YWluZXIgZWxlbWVudCBpZFxuICogQHBhcmFtIHBhdGhDb25maWdKc29uIHRoZSBqc29uIHBhdGggdG8gdXNlIGluIHRoZSBHRVQgcmVxdWVzdFxuICogQHBhcmFtIGNhbGxiYWNrIHRoZSBmdW5jdGlvbiBjYWxsZWQgYWZ0ZXIgdGhlIFtbQ29udGFpbmVyXV0gb2JqZWN0IGlzIGxvYWRlZCB0aGF0IHdpbGwgYmUgcGFzc2VkIGFzIGEgcGFyYW1ldGVyXG4gKi9cbndpbmRvdy5wYXJ0aWNsZXNKUy5sb2FkID0gKHRhZ0lkOiBzdHJpbmcsIHBhdGhDb25maWdKc29uOiBzdHJpbmcsIGNhbGxiYWNrOiAoY29udGFpbmVyOiBDb250YWluZXIpID0+IHZvaWQpID0+XG4gICAgUGFydGljbGVzSlMubG9hZEpzb24odGFnSWQsIHBhdGhDb25maWdKc29uLCBjYWxsYmFjayk7XG5cbi8qKlxuICogQWRkcyBhbiBhZGRpdGlvbmFsIGNsaWNrIGhhbmRsZXIgdG8gYWxsIHRoZSBsb2FkZWQgW1tDb250YWluZXJdXSBvYmplY3RzLlxuICogQGRlcHJlY2F0ZWQgdGhpcyBtZXRob2QgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyB0c1BhcnRpY2xlcy5zZXRPbkNsaWNrSGFuZGxlclxuICogQHBhcmFtIGNhbGxiYWNrIHRoZSBmdW5jdGlvbiBjYWxsZWQgYWZ0ZXIgdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkXG4gKi9cbndpbmRvdy5wYXJ0aWNsZXNKUy5zZXRPbkNsaWNrSGFuZGxlciA9IChjYWxsYmFjazogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCkgPT5cbiAgICBQYXJ0aWNsZXNKUy5zZXRPbkNsaWNrSGFuZGxlcihjYWxsYmFjayk7XG5cbi8qKlxuICogQWxsIHRoZSBbW0NvbnRhaW5lcl1dIG9iamVjdHMgbG9hZGVkXG4gKiBAZGVwcmVjYXRlZCB0aGlzIG1ldGhvZCBpcyBvYnNvbGV0ZSwgcGxlYXNlIHVzZSB0aGUgbmV3IHRzUGFydGljbGVzLmRvbVxuICovXG53aW5kb3cucEpTRG9tID0gKCkgPT4ge1xuICAgIGlmIChjb25zb2xlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcInRoaXMgbWV0aG9kIGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgdHNQYXJ0aWNsZXMuZG9tXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB3aW5kb3cudHNQYXJ0aWNsZXMuZG9tKCk7XG59O1xuIl19