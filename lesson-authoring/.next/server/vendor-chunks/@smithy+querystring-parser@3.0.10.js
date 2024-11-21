"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy+querystring-parser@3.0.10";
exports.ids = ["vendor-chunks/@smithy+querystring-parser@3.0.10"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@smithy+querystring-parser@3.0.10/node_modules/@smithy/querystring-parser/dist-es/index.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+querystring-parser@3.0.10/node_modules/@smithy/querystring-parser/dist-es/index.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseQueryString: () => (/* binding */ parseQueryString)\n/* harmony export */ });\nfunction parseQueryString(querystring) {\n    const query = {};\n    querystring = querystring.replace(/^\\?/, \"\");\n    if (querystring) {\n        for (const pair of querystring.split(\"&\")) {\n            let [key, value = null] = pair.split(\"=\");\n            key = decodeURIComponent(key);\n            if (value) {\n                value = decodeURIComponent(value);\n            }\n            if (!(key in query)) {\n                query[key] = value;\n            }\n            else if (Array.isArray(query[key])) {\n                query[key].push(value);\n            }\n            else {\n                query[key] = [query[key], value];\n            }\n        }\n    }\n    return query;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStxdWVyeXN0cmluZy1wYXJzZXJAMy4wLjEwL25vZGVfbW9kdWxlcy9Ac21pdGh5L3F1ZXJ5c3RyaW5nLXBhcnNlci9kaXN0LWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVzc29uLWF1dGhvcmluZy8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3F1ZXJ5c3RyaW5nLXBhcnNlckAzLjAuMTAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvcXVlcnlzdHJpbmctcGFyc2VyL2Rpc3QtZXMvaW5kZXguanM/ZmY5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZyhxdWVyeXN0cmluZykge1xuICAgIGNvbnN0IHF1ZXJ5ID0ge307XG4gICAgcXVlcnlzdHJpbmcgPSBxdWVyeXN0cmluZy5yZXBsYWNlKC9eXFw/LywgXCJcIik7XG4gICAgaWYgKHF1ZXJ5c3RyaW5nKSB7XG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBxdWVyeXN0cmluZy5zcGxpdChcIiZcIikpIHtcbiAgICAgICAgICAgIGxldCBba2V5LCB2YWx1ZSA9IG51bGxdID0gcGFpci5zcGxpdChcIj1cIik7XG4gICAgICAgICAgICBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKGtleSBpbiBxdWVyeSkpIHtcbiAgICAgICAgICAgICAgICBxdWVyeVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgcXVlcnlba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSwgdmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBxdWVyeTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+querystring-parser@3.0.10/node_modules/@smithy/querystring-parser/dist-es/index.js\n");

/***/ })

};
;