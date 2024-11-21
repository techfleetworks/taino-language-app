"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@aws-sdk+util-arn-parser@3.693.0";
exports.ids = ["vendor-chunks/@aws-sdk+util-arn-parser@3.693.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@aws-sdk+util-arn-parser@3.693.0/node_modules/@aws-sdk/util-arn-parser/dist-es/index.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@aws-sdk+util-arn-parser@3.693.0/node_modules/@aws-sdk/util-arn-parser/dist-es/index.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   build: () => (/* binding */ build),\n/* harmony export */   parse: () => (/* binding */ parse),\n/* harmony export */   validate: () => (/* binding */ validate)\n/* harmony export */ });\nconst validate = (str) => typeof str === \"string\" && str.indexOf(\"arn:\") === 0 && str.split(\":\").length >= 6;\nconst parse = (arn) => {\n    const segments = arn.split(\":\");\n    if (segments.length < 6 || segments[0] !== \"arn\")\n        throw new Error(\"Malformed ARN\");\n    const [, partition, service, region, accountId, ...resource] = segments;\n    return {\n        partition,\n        service,\n        region,\n        accountId,\n        resource: resource.join(\":\"),\n    };\n};\nconst build = (arnObject) => {\n    const { partition = \"aws\", service, region, accountId, resource } = arnObject;\n    if ([service, region, accountId, resource].some((segment) => typeof segment !== \"string\")) {\n        throw new Error(\"Input ARN object is invalid\");\n    }\n    return `arn:${partition}:${service}:${region}:${accountId}:${resource}`;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrdXRpbC1hcm4tcGFyc2VyQDMuNjkzLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtYXJuLXBhcnNlci9kaXN0LWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLFlBQVksMERBQTBEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixVQUFVLEdBQUcsUUFBUSxHQUFHLE9BQU8sR0FBRyxVQUFVLEdBQUcsU0FBUztBQUMxRSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlc3Nvbi1hdXRob3JpbmcvLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrdXRpbC1hcm4tcGFyc2VyQDMuNjkzLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtYXJuLXBhcnNlci9kaXN0LWVzL2luZGV4LmpzPzdkZjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHZhbGlkYXRlID0gKHN0cikgPT4gdHlwZW9mIHN0ciA9PT0gXCJzdHJpbmdcIiAmJiBzdHIuaW5kZXhPZihcImFybjpcIikgPT09IDAgJiYgc3RyLnNwbGl0KFwiOlwiKS5sZW5ndGggPj0gNjtcbmV4cG9ydCBjb25zdCBwYXJzZSA9IChhcm4pID0+IHtcbiAgICBjb25zdCBzZWdtZW50cyA9IGFybi5zcGxpdChcIjpcIik7XG4gICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA8IDYgfHwgc2VnbWVudHNbMF0gIT09IFwiYXJuXCIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1hbGZvcm1lZCBBUk5cIik7XG4gICAgY29uc3QgWywgcGFydGl0aW9uLCBzZXJ2aWNlLCByZWdpb24sIGFjY291bnRJZCwgLi4ucmVzb3VyY2VdID0gc2VnbWVudHM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGFydGl0aW9uLFxuICAgICAgICBzZXJ2aWNlLFxuICAgICAgICByZWdpb24sXG4gICAgICAgIGFjY291bnRJZCxcbiAgICAgICAgcmVzb3VyY2U6IHJlc291cmNlLmpvaW4oXCI6XCIpLFxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IGJ1aWxkID0gKGFybk9iamVjdCkgPT4ge1xuICAgIGNvbnN0IHsgcGFydGl0aW9uID0gXCJhd3NcIiwgc2VydmljZSwgcmVnaW9uLCBhY2NvdW50SWQsIHJlc291cmNlIH0gPSBhcm5PYmplY3Q7XG4gICAgaWYgKFtzZXJ2aWNlLCByZWdpb24sIGFjY291bnRJZCwgcmVzb3VyY2VdLnNvbWUoKHNlZ21lbnQpID0+IHR5cGVvZiBzZWdtZW50ICE9PSBcInN0cmluZ1wiKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnB1dCBBUk4gb2JqZWN0IGlzIGludmFsaWRcIik7XG4gICAgfVxuICAgIHJldHVybiBgYXJuOiR7cGFydGl0aW9ufToke3NlcnZpY2V9OiR7cmVnaW9ufToke2FjY291bnRJZH06JHtyZXNvdXJjZX1gO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@aws-sdk+util-arn-parser@3.693.0/node_modules/@aws-sdk/util-arn-parser/dist-es/index.js\n");

/***/ })

};
;