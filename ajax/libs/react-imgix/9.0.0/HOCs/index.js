"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shouldComponentUpdateHOC = require("./shouldComponentUpdateHOC");

Object.keys(_shouldComponentUpdateHOC).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _shouldComponentUpdateHOC[key];
    }
  });
});
//# sourceMappingURL=index.js.map