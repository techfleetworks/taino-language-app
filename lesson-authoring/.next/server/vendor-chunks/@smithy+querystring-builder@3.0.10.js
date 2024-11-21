"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy+querystring-builder@3.0.10";
exports.ids = ["vendor-chunks/@smithy+querystring-builder@3.0.10"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@smithy+querystring-builder@3.0.10/node_modules/@smithy/querystring-builder/dist-es/index.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+querystring-builder@3.0.10/node_modules/@smithy/querystring-builder/dist-es/index.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildQueryString: () => (/* binding */ buildQueryString)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-uri-escape */ \"(rsc)/./node_modules/.pnpm/@smithy+util-uri-escape@3.0.0/node_modules/@smithy/util-uri-escape/dist-es/index.js\");\n\nfunction buildQueryString(query) {\n    const parts = [];\n    for (let key of Object.keys(query).sort()) {\n        const value = query[key];\n        key = (0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(key);\n        if (Array.isArray(value)) {\n            for (let i = 0, iLen = value.length; i < iLen; i++) {\n                parts.push(`${key}=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value[i])}`);\n            }\n        }\n        else {\n            let qsEntry = key;\n            if (value || typeof value === \"string\") {\n                qsEntry += `=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value)}`;\n            }\n            parts.push(qsEntry);\n        }\n    }\n    return parts.join(\"&\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStxdWVyeXN0cmluZy1idWlsZGVyQDMuMC4xMC9ub2RlX21vZHVsZXMvQHNtaXRoeS9xdWVyeXN0cmluZy1idWlsZGVyL2Rpc3QtZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0Q7QUFDN0M7QUFDUDtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0EsaURBQWlELFVBQVU7QUFDM0QsOEJBQThCLElBQUksR0FBRyxrRUFBUyxXQUFXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0VBQVMsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXNzb24tYXV0aG9yaW5nLy4vbm9kZV9tb2R1bGVzLy5wbnBtL0BzbWl0aHkrcXVlcnlzdHJpbmctYnVpbGRlckAzLjAuMTAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvcXVlcnlzdHJpbmctYnVpbGRlci9kaXN0LWVzL2luZGV4LmpzP2UzNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXNjYXBlVXJpIH0gZnJvbSBcIkBzbWl0aHkvdXRpbC11cmktZXNjYXBlXCI7XG5leHBvcnQgZnVuY3Rpb24gYnVpbGRRdWVyeVN0cmluZyhxdWVyeSkge1xuICAgIGNvbnN0IHBhcnRzID0gW107XG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHF1ZXJ5KS5zb3J0KCkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVtrZXldO1xuICAgICAgICBrZXkgPSBlc2NhcGVVcmkoa2V5KTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaUxlbiA9IHZhbHVlLmxlbmd0aDsgaSA8IGlMZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goYCR7a2V5fT0ke2VzY2FwZVVyaSh2YWx1ZVtpXSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgcXNFbnRyeSA9IGtleTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBxc0VudHJ5ICs9IGA9JHtlc2NhcGVVcmkodmFsdWUpfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJ0cy5wdXNoKHFzRW50cnkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXJ0cy5qb2luKFwiJlwiKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+querystring-builder@3.0.10/node_modules/@smithy/querystring-builder/dist-es/index.js\n");

/***/ })

};
;