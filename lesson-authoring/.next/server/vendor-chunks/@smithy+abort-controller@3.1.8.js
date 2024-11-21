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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AbortController: () => (/* binding */ AbortController)\n/* harmony export */ });\n/* harmony import */ var _AbortSignal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbortSignal */ \"(rsc)/./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/AbortSignal.js\");\n\nclass AbortController {\n    constructor() {\n        this.signal = new _AbortSignal__WEBPACK_IMPORTED_MODULE_0__.AbortSignal();\n    }\n    abort() {\n        this.signal.abort();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSthYm9ydC1jb250cm9sbGVyQDMuMS44L25vZGVfbW9kdWxlcy9Ac21pdGh5L2Fib3J0LWNvbnRyb2xsZXIvZGlzdC1lcy9BYm9ydENvbnRyb2xsZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEM7QUFDckM7QUFDUDtBQUNBLDBCQUEwQixxREFBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVzc29uLWF1dGhvcmluZy8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2Fib3J0LWNvbnRyb2xsZXJAMy4xLjgvbm9kZV9tb2R1bGVzL0BzbWl0aHkvYWJvcnQtY29udHJvbGxlci9kaXN0LWVzL0Fib3J0Q29udHJvbGxlci5qcz9mNTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFib3J0U2lnbmFsIH0gZnJvbSBcIi4vQWJvcnRTaWduYWxcIjtcbmV4cG9ydCBjbGFzcyBBYm9ydENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNpZ25hbCA9IG5ldyBBYm9ydFNpZ25hbCgpO1xuICAgIH1cbiAgICBhYm9ydCgpIHtcbiAgICAgICAgdGhpcy5zaWduYWwuYWJvcnQoKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/AbortController.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/AbortSignal.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/AbortSignal.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AbortSignal: () => (/* binding */ AbortSignal)\n/* harmony export */ });\nclass AbortSignal {\n    constructor() {\n        this.onabort = null;\n        this._aborted = false;\n        Object.defineProperty(this, \"_aborted\", {\n            value: false,\n            writable: true,\n        });\n    }\n    get aborted() {\n        return this._aborted;\n    }\n    abort() {\n        this._aborted = true;\n        if (this.onabort) {\n            this.onabort(this);\n            this.onabort = null;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSthYm9ydC1jb250cm9sbGVyQDMuMS44L25vZGVfbW9kdWxlcy9Ac21pdGh5L2Fib3J0LWNvbnRyb2xsZXIvZGlzdC1lcy9BYm9ydFNpZ25hbC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVzc29uLWF1dGhvcmluZy8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K2Fib3J0LWNvbnRyb2xsZXJAMy4xLjgvbm9kZV9tb2R1bGVzL0BzbWl0aHkvYWJvcnQtY29udHJvbGxlci9kaXN0LWVzL0Fib3J0U2lnbmFsLmpzPzExOGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFib3J0U2lnbmFsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vbmFib3J0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fYWJvcnRlZCA9IGZhbHNlO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgXCJfYWJvcnRlZFwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBhYm9ydGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWJvcnRlZDtcbiAgICB9XG4gICAgYWJvcnQoKSB7XG4gICAgICAgIHRoaXMuX2Fib3J0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5vbmFib3J0KSB7XG4gICAgICAgICAgICB0aGlzLm9uYWJvcnQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLm9uYWJvcnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/AbortSignal.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/index.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/index.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AbortController: () => (/* reexport safe */ _AbortController__WEBPACK_IMPORTED_MODULE_0__.AbortController),\n/* harmony export */   AbortSignal: () => (/* reexport safe */ _AbortSignal__WEBPACK_IMPORTED_MODULE_1__.AbortSignal)\n/* harmony export */ });\n/* harmony import */ var _AbortController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbortController */ \"(rsc)/./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/AbortController.js\");\n/* harmony import */ var _AbortSignal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbortSignal */ \"(rsc)/./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/AbortSignal.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSthYm9ydC1jb250cm9sbGVyQDMuMS44L25vZGVfbW9kdWxlcy9Ac21pdGh5L2Fib3J0LWNvbnRyb2xsZXIvZGlzdC1lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtDO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXNzb24tYXV0aG9yaW5nLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrYWJvcnQtY29udHJvbGxlckAzLjEuOC9ub2RlX21vZHVsZXMvQHNtaXRoeS9hYm9ydC1jb250cm9sbGVyL2Rpc3QtZXMvaW5kZXguanM/ZWNlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9BYm9ydENvbnRyb2xsZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL0Fib3J0U2lnbmFsXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+abort-controller@3.1.8/node_modules/@smithy/abort-controller/dist-es/index.js\n");

/***/ })

};
;