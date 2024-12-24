"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy+abort-controller@3.1.8";
exports.ids = ["vendor-chunks/@smithy+abort-controller@3.1.8"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/AbortController.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/AbortController.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AbortController: () => (/* binding */ AbortController)\n/* harmony export */ });\n/* harmony import */ var _AbortSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbortSignal */ \"(rsc)/./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/AbortSignal.js\");\n\nclass AbortController {\n    constructor() {\n        this.signal = new _AbortSignal__WEBPACK_IMPORTED_MODULE_0__.AbortSignal();\n    }\n    abort() {\n        this.signal.abort();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSthYm9ydC1jb250cm9sbGVyQDMuMS44L25vZGVfbW9kdWxlcy9Ac21pdGh5L2Fib3J0LWNvbnRyb2xsZXIvZGlzdC1lcy9BYm9ydENvbnRyb2xsZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEM7QUFDckM7QUFDUDtBQUNBLDBCQUEwQixxREFBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMva2FyZWxsZS92c2Nwcm9qZWN0cy90ZWNoLWZsZWV0L3RhaW5vLWxhbmd1YWdlLWFwcC9sZXNzb24tYXV0aG9yaW5nL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2Fib3J0LWNvbnRyb2xsZXJAMy4xLjgvbm9kZV9tb2R1bGVzL0BzbWl0aHkvYWJvcnQtY29udHJvbGxlci9kaXN0LWVzL0Fib3J0Q29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYm9ydFNpZ25hbCB9IGZyb20gXCIuL0Fib3J0U2lnbmFsXCI7XG5leHBvcnQgY2xhc3MgQWJvcnRDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zaWduYWwgPSBuZXcgQWJvcnRTaWduYWwoKTtcbiAgICB9XG4gICAgYWJvcnQoKSB7XG4gICAgICAgIHRoaXMuc2lnbmFsLmFib3J0KCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/AbortController.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/AbortSignal.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/AbortSignal.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AbortSignal: () => (/* binding */ AbortSignal)\n/* harmony export */ });\nclass AbortSignal {\n    constructor() {\n        this.onabort = null;\n        this._aborted = false;\n        Object.defineProperty(this, \"_aborted\", {\n            value: false,\n            writable: true,\n        });\n    }\n    get aborted() {\n        return this._aborted;\n    }\n    abort() {\n        this._aborted = true;\n        if (this.onabort) {\n            this.onabort(this);\n            this.onabort = null;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSthYm9ydC1jb250cm9sbGVyQDMuMS44L25vZGVfbW9kdWxlcy9Ac21pdGh5L2Fib3J0LWNvbnRyb2xsZXIvZGlzdC1lcy9BYm9ydFNpZ25hbC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMva2FyZWxsZS92c2Nwcm9qZWN0cy90ZWNoLWZsZWV0L3RhaW5vLWxhbmd1YWdlLWFwcC9sZXNzb24tYXV0aG9yaW5nL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2Fib3J0LWNvbnRyb2xsZXJAMy4xLjgvbm9kZV9tb2R1bGVzL0BzbWl0aHkvYWJvcnQtY29udHJvbGxlci9kaXN0LWVzL0Fib3J0U2lnbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBYm9ydFNpZ25hbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMub25hYm9ydCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2Fib3J0ZWQgPSBmYWxzZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiX2Fib3J0ZWRcIiwge1xuICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgYWJvcnRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fib3J0ZWQ7XG4gICAgfVxuICAgIGFib3J0KCkge1xuICAgICAgICB0aGlzLl9hYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMub25hYm9ydCkge1xuICAgICAgICAgICAgdGhpcy5vbmFib3J0KHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5vbmFib3J0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/AbortSignal.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/index.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/index.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AbortController: () => (/* reexport safe */ _AbortController__WEBPACK_IMPORTED_MODULE_0__.AbortController),\n/* harmony export */   AbortSignal: () => (/* reexport safe */ _AbortSignal__WEBPACK_IMPORTED_MODULE_1__.AbortSignal)\n/* harmony export */ });\n/* harmony import */ var _AbortController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbortController */ \"(rsc)/./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/AbortController.js\");\n/* harmony import */ var _AbortSignal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbortSignal */ \"(rsc)/./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/AbortSignal.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSthYm9ydC1jb250cm9sbGVyQDMuMS44L25vZGVfbW9kdWxlcy9Ac21pdGh5L2Fib3J0LWNvbnRyb2xsZXIvZGlzdC1lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtDO0FBQ0oiLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYXJlbGxlL3ZzY3Byb2plY3RzL3RlY2gtZmxlZXQvdGFpbm8tbGFuZ3VhZ2UtYXBwL2xlc3Nvbi1hdXRob3Jpbmcvbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrYWJvcnQtY29udHJvbGxlckAzLjEuOC9ub2RlX21vZHVsZXMvQHNtaXRoeS9hYm9ydC1jb250cm9sbGVyL2Rpc3QtZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vQWJvcnRDb250cm9sbGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9BYm9ydFNpZ25hbFwiO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/index.js\n");

/***/ })

};
;