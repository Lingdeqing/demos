System.register(["./dep.js"], function (_export, _context) {
  "use strict";

  var dep;
  return {
    setters: [function (_depJs) {
      dep = _depJs;
    }],
    execute: function () {
      dep.hello();
    }
  };
});