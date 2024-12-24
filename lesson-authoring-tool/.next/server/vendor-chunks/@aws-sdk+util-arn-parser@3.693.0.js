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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   build: () => (/* binding */ build),\n/* harmony export */   parse: () => (/* binding */ parse),\n/* harmony export */   validate: () => (/* binding */ validate)\n/* harmony export */ });\nconst validate = (str) => typeof str === \"string\" && str.indexOf(\"arn:\") === 0 && str.split(\":\").length >= 6;\nconst parse = (arn) => {\n    const segments = arn.split(\":\");\n    if (segments.length < 6 || segments[0] !== \"arn\")\n        throw new Error(\"Malformed ARN\");\n    const [, partition, service, region, accountId, ...resource] = segments;\n    return {\n        partition,\n        service,\n        region,\n        accountId,\n        resource: resource.join(\":\"),\n    };\n};\nconst build = (arnObject) => {\n    const { partition = \"aws\", service, region, accountId, resource } = arnObject;\n    if ([service, region, accountId, resource].some((segment) => typeof segment !== \"string\")) {\n        throw new Error(\"Input ARN object is invalid\");\n    }\n    return `arn:${partition}:${service}:${region}:${accountId}:${resource}`;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrdXRpbC1hcm4tcGFyc2VyQDMuNjkzLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtYXJuLXBhcnNlci9kaXN0LWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLFlBQVksMERBQTBEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixVQUFVLEdBQUcsUUFBUSxHQUFHLE9BQU8sR0FBRyxVQUFVLEdBQUcsU0FBUztBQUMxRSIsInNvdXJjZXMiOlsiL1VzZXJzL2thcmVsbGUvdnNjcHJvamVjdHMvdGVjaC1mbGVldC90YWluby1sYW5ndWFnZS1hcHAvbGVzc29uLWF1dGhvcmluZy9ub2RlX21vZHVsZXMvLnBucG0vQGF3cy1zZGsrdXRpbC1hcm4tcGFyc2VyQDMuNjkzLjAvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtYXJuLXBhcnNlci9kaXN0LWVzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB2YWxpZGF0ZSA9IChzdHIpID0+IHR5cGVvZiBzdHIgPT09IFwic3RyaW5nXCIgJiYgc3RyLmluZGV4T2YoXCJhcm46XCIpID09PSAwICYmIHN0ci5zcGxpdChcIjpcIikubGVuZ3RoID49IDY7XG5leHBvcnQgY29uc3QgcGFyc2UgPSAoYXJuKSA9PiB7XG4gICAgY29uc3Qgc2VnbWVudHMgPSBhcm4uc3BsaXQoXCI6XCIpO1xuICAgIGlmIChzZWdtZW50cy5sZW5ndGggPCA2IHx8IHNlZ21lbnRzWzBdICE9PSBcImFyblwiKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNYWxmb3JtZWQgQVJOXCIpO1xuICAgIGNvbnN0IFssIHBhcnRpdGlvbiwgc2VydmljZSwgcmVnaW9uLCBhY2NvdW50SWQsIC4uLnJlc291cmNlXSA9IHNlZ21lbnRzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHBhcnRpdGlvbixcbiAgICAgICAgc2VydmljZSxcbiAgICAgICAgcmVnaW9uLFxuICAgICAgICBhY2NvdW50SWQsXG4gICAgICAgIHJlc291cmNlOiByZXNvdXJjZS5qb2luKFwiOlwiKSxcbiAgICB9O1xufTtcbmV4cG9ydCBjb25zdCBidWlsZCA9IChhcm5PYmplY3QpID0+IHtcbiAgICBjb25zdCB7IHBhcnRpdGlvbiA9IFwiYXdzXCIsIHNlcnZpY2UsIHJlZ2lvbiwgYWNjb3VudElkLCByZXNvdXJjZSB9ID0gYXJuT2JqZWN0O1xuICAgIGlmIChbc2VydmljZSwgcmVnaW9uLCBhY2NvdW50SWQsIHJlc291cmNlXS5zb21lKChzZWdtZW50KSA9PiB0eXBlb2Ygc2VnbWVudCAhPT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5wdXQgQVJOIG9iamVjdCBpcyBpbnZhbGlkXCIpO1xuICAgIH1cbiAgICByZXR1cm4gYGFybjoke3BhcnRpdGlvbn06JHtzZXJ2aWNlfToke3JlZ2lvbn06JHthY2NvdW50SWR9OiR7cmVzb3VyY2V9YDtcbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@aws-sdk+util-arn-parser@3.693.0/node_modules/@aws-sdk/util-arn-parser/dist-es/index.js\n");

/***/ })

};
;