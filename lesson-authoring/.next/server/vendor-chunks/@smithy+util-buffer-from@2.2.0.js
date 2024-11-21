"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy+util-buffer-from@2.2.0";
exports.ids = ["vendor-chunks/@smithy+util-buffer-from@2.2.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@smithy+util-buffer-from@2.2.0/node_modules/@smithy/util-buffer-from/dist-es/index.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+util-buffer-from@2.2.0/node_modules/@smithy/util-buffer-from/dist-es/index.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromArrayBuffer: () => (/* binding */ fromArrayBuffer),\n/* harmony export */   fromString: () => (/* binding */ fromString)\n/* harmony export */ });\n/* harmony import */ var _smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/is-array-buffer */ \"(rsc)/./node_modules/.pnpm/@smithy+is-array-buffer@2.2.0/node_modules/@smithy/is-array-buffer/dist-es/index.js\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buffer */ \"buffer\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {\n    if (!(0,_smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__.isArrayBuffer)(input)) {\n        throw new TypeError(`The \"input\" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);\n    }\n    return buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input, offset, length);\n};\nconst fromString = (input, encoding) => {\n    if (typeof input !== \"string\") {\n        throw new TypeError(`The \"input\" argument must be of type string. Received type ${typeof input} (${input})`);\n    }\n    return encoding ? buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input, encoding) : buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLWJ1ZmZlci1mcm9tQDIuMi4wL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtYnVmZmVyLWZyb20vZGlzdC1lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RDtBQUN4QjtBQUN6QjtBQUNQLFNBQVMsc0VBQWE7QUFDdEIsdUZBQXVGLGNBQWMsR0FBRyxNQUFNO0FBQzlHO0FBQ0EsV0FBVywwQ0FBTTtBQUNqQjtBQUNPO0FBQ1A7QUFDQSwwRkFBMEYsY0FBYyxHQUFHLE1BQU07QUFDakg7QUFDQSxzQkFBc0IsMENBQU0seUJBQXlCLDBDQUFNO0FBQzNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVzc29uLWF1dGhvcmluZy8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtYnVmZmVyLWZyb21AMi4yLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1idWZmZXItZnJvbS9kaXN0LWVzL2luZGV4LmpzP2ZjMTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNBcnJheUJ1ZmZlciB9IGZyb20gXCJAc21pdGh5L2lzLWFycmF5LWJ1ZmZlclwiO1xuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSBcImJ1ZmZlclwiO1xuZXhwb3J0IGNvbnN0IGZyb21BcnJheUJ1ZmZlciA9IChpbnB1dCwgb2Zmc2V0ID0gMCwgbGVuZ3RoID0gaW5wdXQuYnl0ZUxlbmd0aCAtIG9mZnNldCkgPT4ge1xuICAgIGlmICghaXNBcnJheUJ1ZmZlcihpbnB1dCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFwiaW5wdXRcIiBhcmd1bWVudCBtdXN0IGJlIEFycmF5QnVmZmVyLiBSZWNlaXZlZCB0eXBlICR7dHlwZW9mIGlucHV0fSAoJHtpbnB1dH0pYCk7XG4gICAgfVxuICAgIHJldHVybiBCdWZmZXIuZnJvbShpbnB1dCwgb2Zmc2V0LCBsZW5ndGgpO1xufTtcbmV4cG9ydCBjb25zdCBmcm9tU3RyaW5nID0gKGlucHV0LCBlbmNvZGluZykgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFwiaW5wdXRcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgc3RyaW5nLiBSZWNlaXZlZCB0eXBlICR7dHlwZW9mIGlucHV0fSAoJHtpbnB1dH0pYCk7XG4gICAgfVxuICAgIHJldHVybiBlbmNvZGluZyA/IEJ1ZmZlci5mcm9tKGlucHV0LCBlbmNvZGluZykgOiBCdWZmZXIuZnJvbShpbnB1dCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+util-buffer-from@2.2.0/node_modules/@smithy/util-buffer-from/dist-es/index.js\n");

/***/ })

};
;