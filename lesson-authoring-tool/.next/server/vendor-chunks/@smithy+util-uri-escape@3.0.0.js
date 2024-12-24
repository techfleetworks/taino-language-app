"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy+util-uri-escape@3.0.0";
exports.ids = ["vendor-chunks/@smithy+util-uri-escape@3.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   escapeUriPath: () => (/* binding */ escapeUriPath)\n/* harmony export */ });\n/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ \"(rsc)/./node_modules/.pnpm/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js\");\n\nconst escapeUriPath = (uri) => uri.split(\"/\").map(_escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri).join(\"/\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLXVyaS1lc2NhcGVAMy4wLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC11cmktZXNjYXBlL2Rpc3QtZXMvZXNjYXBlLXVyaS1wYXRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXlDO0FBQ2xDLGtEQUFrRCxrREFBUyIsInNvdXJjZXMiOlsiL1VzZXJzL2thcmVsbGUvdnNjcHJvamVjdHMvdGVjaC1mbGVldC90YWluby1sYW5ndWFnZS1hcHAvbGVzc29uLWF1dGhvcmluZy9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLXVyaS1lc2NhcGVAMy4wLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC11cmktZXNjYXBlL2Rpc3QtZXMvZXNjYXBlLXVyaS1wYXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVzY2FwZVVyaSB9IGZyb20gXCIuL2VzY2FwZS11cmlcIjtcbmV4cG9ydCBjb25zdCBlc2NhcGVVcmlQYXRoID0gKHVyaSkgPT4gdXJpLnNwbGl0KFwiL1wiKS5tYXAoZXNjYXBlVXJpKS5qb2luKFwiL1wiKTtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   escapeUri: () => (/* binding */ escapeUri)\n/* harmony export */ });\nconst escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);\nconst hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLXVyaS1lc2NhcGVAMy4wLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC11cmktZXNjYXBlL2Rpc3QtZXMvZXNjYXBlLXVyaS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUCw2QkFBNkIsMkNBQTJDIiwic291cmNlcyI6WyIvVXNlcnMva2FyZWxsZS92c2Nwcm9qZWN0cy90ZWNoLWZsZWV0L3RhaW5vLWxhbmd1YWdlLWFwcC9sZXNzb24tYXV0aG9yaW5nL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtdXJpLWVzY2FwZUAzLjAuMC9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXVyaS1lc2NhcGUvZGlzdC1lcy9lc2NhcGUtdXJpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBlc2NhcGVVcmkgPSAodXJpKSA9PiBlbmNvZGVVUklDb21wb25lbnQodXJpKS5yZXBsYWNlKC9bIScoKSpdL2csIGhleEVuY29kZSk7XG5jb25zdCBoZXhFbmNvZGUgPSAoYykgPT4gYCUke2MuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKX1gO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-es/index.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-es/index.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   escapeUri: () => (/* reexport safe */ _escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri),\n/* harmony export */   escapeUriPath: () => (/* reexport safe */ _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__.escapeUriPath)\n/* harmony export */ });\n/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ \"(rsc)/./node_modules/.pnpm/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js\");\n/* harmony import */ var _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escape-uri-path */ \"(rsc)/./node_modules/.pnpm/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLXVyaS1lc2NhcGVAMy4wLjAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC11cmktZXNjYXBlL2Rpc3QtZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2QjtBQUNLIiwic291cmNlcyI6WyIvVXNlcnMva2FyZWxsZS92c2Nwcm9qZWN0cy90ZWNoLWZsZWV0L3RhaW5vLWxhbmd1YWdlLWFwcC9sZXNzb24tYXV0aG9yaW5nL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3V0aWwtdXJpLWVzY2FwZUAzLjAuMC9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXVyaS1lc2NhcGUvZGlzdC1lcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9lc2NhcGUtdXJpXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9lc2NhcGUtdXJpLXBhdGhcIjtcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-es/index.js\n");

/***/ })

};
;