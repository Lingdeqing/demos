(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/dep1.js":
/*!*********************!*\
  !*** ./src/dep1.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return depMod1; });\nfunction depMod1(){\n    return \"depMod1\"\n}\n\n//# sourceURL=webpack:///./src/dep1.js?");

/***/ }),

/***/ "./src/page2.js":
/*!**********************!*\
  !*** ./src/page2.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ \"../node_modules/ramda/es/index.js\");\n/* harmony import */ var _dep1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dep1 */ \"./src/dep1.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(){\n    ramda__WEBPACK_IMPORTED_MODULE_0__[\"omit\"](['a'], {a:1})\n    Object(_dep1__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    return 'pageModule'\n});\n\n//# sourceURL=webpack:///./src/page2.js?");

/***/ })

}]);