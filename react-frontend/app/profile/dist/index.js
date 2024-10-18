"use strict";
exports.__esModule = true;
exports.Page = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_2 = require("react-native");
exports.Page = function () {
    return react_1["default"].createElement(react_native_1.Text, null, "This is profile page");
};
var styles = react_native_2.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
