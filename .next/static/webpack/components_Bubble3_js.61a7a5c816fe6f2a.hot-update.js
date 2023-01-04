"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("components_Bubble3_js",{

/***/ "./components/Bubble3.js":
/*!*******************************!*\
  !*** ./components/Bubble3.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_Xmark_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/Xmark.svg */ \"./public/Xmark.svg\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2-react-content */ \"./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js\");\n/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sanity */ \"./sanity.js\");\n/**\n * @jest-environment jsdom\n */ \n\n\n\n\n\n\n\n\n\nfunction getRandom(min, max) {\n    const floatRandom = Math.random();\n    const difference = max - min;\n    // random between 0 and the difference\n    const random = Math.round(difference * floatRandom);\n    const randomWithinRange = random + min;\n    return randomWithinRange;\n}\nfunction Bubble3(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bubble bubble3\",\n            style: {\n                bottom: \"\".concat(getRandom(10, 60), \"vh\"),\n                right: \"\".concat(getRandom(25, 35), \"vw\")\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"label topic\",\n                    children: props.title\n                }, void 0, false, {\n                    fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble3.js\",\n                    lineNumber: 38,\n                    columnNumber: 3\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"innerimg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: (0,_sanity__WEBPACK_IMPORTED_MODULE_9__.urlFor)(props.image).url(),\n                        layout: \"fill\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble3.js\",\n                        lineNumber: 40,\n                        columnNumber: 1\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble3.js\",\n                    lineNumber: 39,\n                    columnNumber: 1\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble3.js\",\n            lineNumber: 37,\n            columnNumber: 3\n        }, this)\n    }, void 0, false);\n}\n_c = Bubble3;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bubble3);\nvar _c;\n$RefreshReg$(_c, \"Bubble3\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1YmJsZTMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztDQUVDLEdBQ0E7QUFBbUQ7QUFFdkI7QUFDVztBQUNUO0FBQ1M7QUFDWDtBQUNFO0FBQzBCO0FBQ1I7QUFLakQsU0FBU1ksVUFBVUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDM0IsTUFBTUMsY0FBY0MsS0FBS0MsTUFBTTtJQUUvQixNQUFNQyxhQUFhSixNQUFNRDtJQUV6QixzQ0FBc0M7SUFDdEMsTUFBTUksU0FBU0QsS0FBS0csS0FBSyxDQUFDRCxhQUFhSDtJQUV2QyxNQUFNSyxvQkFBb0JILFNBQVNKO0lBRW5DLE9BQU9PO0FBQ1Q7QUFJQSxTQUFTQyxRQUFRQyxLQUFLLEVBQUU7SUFDdEIscUJBQ0U7a0JBQ0YsNEVBQUNDO1lBQUtDLFdBQVU7WUFBaUJDLE9BQU87Z0JBQUNDLFFBQVEsR0FBcUIsT0FBbEJkLFVBQVUsSUFBSSxLQUFJO2dCQUFLZSxPQUFPLEdBQXFCLE9BQWxCZixVQUFVLElBQUksS0FBSTtZQUFHOzs4QkFDMUcsOERBQUNXO29CQUFJQyxXQUFVOzhCQUFlRixNQUFNTSxLQUFLOzs7Ozs7OEJBQzNDLDhEQUFDTDtvQkFBS0MsV0FBVTs4QkFDaEIsNEVBQUNLO3dCQUFJQyxLQUFLcEIsK0NBQU1BLENBQUNZLE1BQU1TLEtBQUssRUFBRUMsR0FBRzt3QkFBSUMsUUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVDO0tBWFNaO0FBWVQsK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdWJibGUzLmpzP2Y5MTgiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEBqZXN0LWVudmlyb25tZW50IGpzZG9tXG4gKi9cbiBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG4gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuIGltcG9ydCBFeGl0IGZyb20gJy4uL3B1YmxpYy9YbWFyay5zdmcnO1xuIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbiBpbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcbiBpbXBvcnQgd2l0aFJlYWN0Q29udGVudCBmcm9tICdzd2VldGFsZXJ0Mi1yZWFjdC1jb250ZW50J1xuIGltcG9ydCB7IHVybEZvciwgc2FuaXR5Q2xpZW50IH0gZnJvbSAnLi4vc2FuaXR5J1xuXG5cblxuICAgIFxuZnVuY3Rpb24gZ2V0UmFuZG9tKG1pbiwgbWF4KSB7XG4gIGNvbnN0IGZsb2F0UmFuZG9tID0gTWF0aC5yYW5kb20oKVxuXG4gIGNvbnN0IGRpZmZlcmVuY2UgPSBtYXggLSBtaW5cblxuICAvLyByYW5kb20gYmV0d2VlbiAwIGFuZCB0aGUgZGlmZmVyZW5jZVxuICBjb25zdCByYW5kb20gPSBNYXRoLnJvdW5kKGRpZmZlcmVuY2UgKiBmbG9hdFJhbmRvbSlcblxuICBjb25zdCByYW5kb21XaXRoaW5SYW5nZSA9IHJhbmRvbSArIG1pblxuXG4gIHJldHVybiByYW5kb21XaXRoaW5SYW5nZVxufVxuXG5cblxuZnVuY3Rpb24gQnViYmxlMyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gIDxkaXYgIGNsYXNzTmFtZT1cImJ1YmJsZSBidWJibGUzXCIgc3R5bGU9e3tib3R0b206IGAke2dldFJhbmRvbSgxMCwgNjApfXZoYCwgcmlnaHQ6IGAke2dldFJhbmRvbSgyNSwgMzUpfXZ3YH19ID5cbiAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbCB0b3BpY1wiPntwcm9wcy50aXRsZX08L2Rpdj5cbjxkaXYgIGNsYXNzTmFtZT1cImlubmVyaW1nXCIgPlxuPGltZyBzcmM9e3VybEZvcihwcm9wcy5pbWFnZSkudXJsKCl9IGxheW91dD1cImZpbGxcIiAvPlxuPC9kaXY+XG48L2Rpdj5cbjwvPlxuKVxufVxuZXhwb3J0IGRlZmF1bHQgQnViYmxlMyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsInVzZVJvdXRlciIsIkltYWdlIiwiRXhpdCIsIkhlYWQiLCJTd2FsIiwid2l0aFJlYWN0Q29udGVudCIsInVybEZvciIsInNhbml0eUNsaWVudCIsImdldFJhbmRvbSIsIm1pbiIsIm1heCIsImZsb2F0UmFuZG9tIiwiTWF0aCIsInJhbmRvbSIsImRpZmZlcmVuY2UiLCJyb3VuZCIsInJhbmRvbVdpdGhpblJhbmdlIiwiQnViYmxlMyIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3R0b20iLCJyaWdodCIsInRpdGxlIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJ1cmwiLCJsYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Bubble3.js\n"));

/***/ })

});