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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseQueryString: () => (/* binding */ parseQueryString)\n/* harmony export */ });\nfunction parseQueryString(querystring) {\n    const query = {};\n    querystring = querystring.replace(/^\\?/, \"\");\n    if (querystring) {\n        for (const pair of querystring.split(\"&\")) {\n            let [key, value = null] = pair.split(\"=\");\n            key = decodeURIComponent(key);\n            if (value) {\n                value = decodeURIComponent(value);\n            }\n            if (!(key in query)) {\n                query[key] = value;\n            }\n            else if (Array.isArray(query[key])) {\n                query[key].push(value);\n            }\n            else {\n                query[key] = [query[key], value];\n            }\n        }\n    }\n    return query;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeStxdWVyeXN0cmluZy1wYXJzZXJAMy4wLjEwL25vZGVfbW9kdWxlcy9Ac21pdGh5L3F1ZXJ5c3RyaW5nLXBhcnNlci9kaXN0LWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMva2FyZWxsZS92c2Nwcm9qZWN0cy90ZWNoLWZsZWV0L3RhaW5vLWxhbmd1YWdlLWFwcC9sZXNzb24tYXV0aG9yaW5nL25vZGVfbW9kdWxlcy8ucG5wbS9Ac21pdGh5K3F1ZXJ5c3RyaW5nLXBhcnNlckAzLjAuMTAvbm9kZV9tb2R1bGVzL0BzbWl0aHkvcXVlcnlzdHJpbmctcGFyc2VyL2Rpc3QtZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmcocXVlcnlzdHJpbmcpIHtcbiAgICBjb25zdCBxdWVyeSA9IHt9O1xuICAgIHF1ZXJ5c3RyaW5nID0gcXVlcnlzdHJpbmcucmVwbGFjZSgvXlxcPy8sIFwiXCIpO1xuICAgIGlmIChxdWVyeXN0cmluZykge1xuICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcXVlcnlzdHJpbmcuc3BsaXQoXCImXCIpKSB7XG4gICAgICAgICAgICBsZXQgW2tleSwgdmFsdWUgPSBudWxsXSA9IHBhaXIuc3BsaXQoXCI9XCIpO1xuICAgICAgICAgICAga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGtleSk7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShrZXkgaW4gcXVlcnkpKSB7XG4gICAgICAgICAgICAgICAgcXVlcnlba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0sIHZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcXVlcnk7XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+querystring-parser@3.0.10/node_modules/@smithy/querystring-parser/dist-es/index.js\n");

/***/ })

};
;