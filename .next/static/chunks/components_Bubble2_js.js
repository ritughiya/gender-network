"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_Bubble2_js"],{

/***/ "./components/Bubble2.js":
/*!*******************************!*\
  !*** ./components/Bubble2.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_Xmark_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/Xmark.svg */ \"./public/Xmark.svg\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2-react-content */ \"./node_modules/sweetalert2-react-content/dist/sweetalert2-react-content.umd.js\");\n/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sanity */ \"./sanity.js\");\n//Connect.js\n/**\n * @jest-environment jsdom\n */ \n\n\n\n\n\n\n\n\n\nfunction getRandom(min, max) {\n    const floatRandom = Math.random();\n    const difference = max - min;\n    // random between 0 and the difference\n    const random = Math.round(difference * floatRandom);\n    const randomWithinRange = random + min;\n    return randomWithinRange;\n}\nfunction Bubble2(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"\".concat(props.indexslug),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"bubble\",\n                className: \"bubble bubble2\",\n                style: {\n                    bottom: \"\".concat(getRandom(10, 60), \"vh\"),\n                    left: \"\".concat(getRandom(25, 30), \"vw\")\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"label time\",\n                        children: props.title\n                    }, void 0, false, {\n                        fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble2.js\",\n                        lineNumber: 41,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"innerimg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: (0,_sanity__WEBPACK_IMPORTED_MODULE_9__.urlFor)(props.image).url(),\n                            layout: \"fill\"\n                        }, void 0, false, {\n                            fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble2.js\",\n                            lineNumber: 43,\n                            columnNumber: 1\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble2.js\",\n                        lineNumber: 42,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble2.js\",\n                lineNumber: 40,\n                columnNumber: 3\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble2.js\",\n            lineNumber: 38,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_c = Bubble2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bubble2);\nvar _c;\n$RefreshReg$(_c, \"Bubble2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1YmJsZTIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVk7QUFFWjs7Q0FFQyxHQUNBO0FBQW1EO0FBRXZCO0FBQ1c7QUFDVDtBQUNTO0FBQ1g7QUFDRTtBQUMwQjtBQUNSO0FBS2pELFNBQVNZLFVBQVVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzNCLE1BQU1DLGNBQWNDLEtBQUtDLE1BQU07SUFFL0IsTUFBTUMsYUFBYUosTUFBTUQ7SUFFekIsc0NBQXNDO0lBQ3RDLE1BQU1JLFNBQVNELEtBQUtHLEtBQUssQ0FBQ0QsYUFBYUg7SUFFdkMsTUFBTUssb0JBQW9CSCxTQUFTSjtJQUVuQyxPQUFPTztBQUNUO0FBSUEsU0FBU0MsUUFBUUMsS0FBSyxFQUFFO0lBQ3RCLHFCQUNFO2tCQUNBLDRFQUFDQztZQUFFQyxNQUFNLEdBQW1CLE9BQWhCRixNQUFNRyxTQUFTO3NCQUU3Qiw0RUFBQ0M7Z0JBQUlDLElBQUc7Z0JBQVdDLFdBQVU7Z0JBQWlCQyxPQUFPO29CQUFDQyxRQUFRLEdBQXFCLE9BQWxCbEIsVUFBVSxJQUFJLEtBQUk7b0JBQUttQixNQUFNLEdBQXFCLE9BQWxCbkIsVUFBVSxJQUFJLEtBQUk7Z0JBQUc7O2tDQUN0SCw4REFBQ2M7d0JBQUlFLFdBQVU7a0NBQWNOLE1BQU1VLEtBQUs7Ozs7OztrQ0FDMUMsOERBQUNOO3dCQUFLRSxXQUFVO2tDQUNoQiw0RUFBQ0s7NEJBQUlDLEtBQUt4QiwrQ0FBTUEsQ0FBQ1ksTUFBTWEsS0FBSyxFQUFFQyxHQUFHOzRCQUFJQyxRQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QztLQWRTaEI7QUFlVCwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0J1YmJsZTIuanM/YWVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0Nvbm5lY3QuanNcblxuLyoqXG4gKiBAamVzdC1lbnZpcm9ubWVudCBqc2RvbVxuICovXG4gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbiBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbiBpbXBvcnQgRXhpdCBmcm9tICcuLi9wdWJsaWMvWG1hcmsuc3ZnJztcbiBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4gaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG4gaW1wb3J0IHdpdGhSZWFjdENvbnRlbnQgZnJvbSAnc3dlZXRhbGVydDItcmVhY3QtY29udGVudCdcbiBpbXBvcnQgeyB1cmxGb3IsIHNhbml0eUNsaWVudCB9IGZyb20gJy4uL3Nhbml0eSdcblxuXG5cbiAgICBcbmZ1bmN0aW9uIGdldFJhbmRvbShtaW4sIG1heCkge1xuICBjb25zdCBmbG9hdFJhbmRvbSA9IE1hdGgucmFuZG9tKClcblxuICBjb25zdCBkaWZmZXJlbmNlID0gbWF4IC0gbWluXG5cbiAgLy8gcmFuZG9tIGJldHdlZW4gMCBhbmQgdGhlIGRpZmZlcmVuY2VcbiAgY29uc3QgcmFuZG9tID0gTWF0aC5yb3VuZChkaWZmZXJlbmNlICogZmxvYXRSYW5kb20pXG5cbiAgY29uc3QgcmFuZG9tV2l0aGluUmFuZ2UgPSByYW5kb20gKyBtaW5cblxuICByZXR1cm4gcmFuZG9tV2l0aGluUmFuZ2Vcbn1cblxuXG5cbmZ1bmN0aW9uIEJ1YmJsZTIocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxhIGhyZWY9e2Ake3Byb3BzLmluZGV4c2x1Z31gfT5cbiAgICAgICAgey8qIDxhIGhyZWY9e2AvJHtwcm9wcy5pbmRleHNsdWd9YH0+ICovfVxuICA8ZGl2IGlkPVwiYnViYmxlXCIgICBjbGFzc05hbWU9XCJidWJibGUgYnViYmxlMlwiIHN0eWxlPXt7Ym90dG9tOiBgJHtnZXRSYW5kb20oMTAsIDYwKX12aGAsIGxlZnQ6IGAke2dldFJhbmRvbSgyNSwgMzApfXZ3YH19ID5cbiAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbCB0aW1lXCI+e3Byb3BzLnRpdGxlfTwvZGl2PlxuPGRpdiAgY2xhc3NOYW1lPVwiaW5uZXJpbWdcIiA+XG48aW1nIHNyYz17dXJsRm9yKHByb3BzLmltYWdlKS51cmwoKX0gbGF5b3V0PVwiZmlsbFwiIC8+XG48L2Rpdj5cbjwvZGl2PlxuPC9hPlxuPC8+XG4pXG59XG5leHBvcnQgZGVmYXVsdCBCdWJibGUyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJFeGl0IiwiSGVhZCIsIlN3YWwiLCJ3aXRoUmVhY3RDb250ZW50IiwidXJsRm9yIiwic2FuaXR5Q2xpZW50IiwiZ2V0UmFuZG9tIiwibWluIiwibWF4IiwiZmxvYXRSYW5kb20iLCJNYXRoIiwicmFuZG9tIiwiZGlmZmVyZW5jZSIsInJvdW5kIiwicmFuZG9tV2l0aGluUmFuZ2UiLCJCdWJibGUyIiwicHJvcHMiLCJhIiwiaHJlZiIsImluZGV4c2x1ZyIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJib3R0b20iLCJsZWZ0IiwidGl0bGUiLCJpbWciLCJzcmMiLCJpbWFnZSIsInVybCIsImxheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Bubble2.js\n"));

/***/ })

}]);