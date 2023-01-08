"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_Bubble3_js";
exports.ids = ["components_Bubble3_js"];
exports.modules = {

/***/ "./components/Bubble3.js":
/*!*******************************!*\
  !*** ./components/Bubble3.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_Xmark_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/Xmark.svg */ \"./public/Xmark.svg\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ \"sweetalert2\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2-react-content */ \"sweetalert2-react-content\");\n/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sanity */ \"./sanity.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sanity__WEBPACK_IMPORTED_MODULE_9__]);\n_sanity__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/**\n * @jest-environment jsdom\n */ \n\n\n\n\n\n\n\n\n\nfunction getRandom(min, max) {\n    const floatRandom = Math.random();\n    const difference = max - min;\n    // random between 0 and the difference\n    const random = Math.round(difference * floatRandom);\n    const randomWithinRange = random + min;\n    return randomWithinRange;\n}\nfunction Bubble3(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"bubble\",\n            className: \"bubble bubble3\",\n            style: {\n                top: `${getRandom(10, 60)}vh`,\n                right: `${getRandom(25, 35)}vw`\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"label topic\",\n                    children: props.title\n                }, void 0, false, {\n                    fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble3.js\",\n                    lineNumber: 38,\n                    columnNumber: 3\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"innerimg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: (0,_sanity__WEBPACK_IMPORTED_MODULE_9__.urlFor)(props.image).url(),\n                        layout: \"fill\"\n                    }, void 0, false, {\n                        fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble3.js\",\n                        lineNumber: 40,\n                        columnNumber: 1\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble3.js\",\n                    lineNumber: 39,\n                    columnNumber: 1\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble3.js\",\n            lineNumber: 37,\n            columnNumber: 3\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bubble3);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1YmJsZTMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztDQUVDLEdBQ0E7QUFBbUQ7QUFFdkI7QUFDVztBQUNUO0FBQ1M7QUFDWDtBQUNFO0FBQzBCO0FBQ1I7QUFLakQsU0FBU1ksVUFBVUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDM0IsTUFBTUMsY0FBY0MsS0FBS0MsTUFBTTtJQUUvQixNQUFNQyxhQUFhSixNQUFNRDtJQUV6QixzQ0FBc0M7SUFDdEMsTUFBTUksU0FBU0QsS0FBS0csS0FBSyxDQUFDRCxhQUFhSDtJQUV2QyxNQUFNSyxvQkFBb0JILFNBQVNKO0lBRW5DLE9BQU9PO0FBQ1Q7QUFJQSxTQUFTQyxRQUFRQyxLQUFLLEVBQUU7SUFDdEIscUJBQ0U7a0JBQ0YsNEVBQUNDO1lBQUlDLElBQUc7WUFBV0MsV0FBVTtZQUFpQkMsT0FBTztnQkFBQ0MsS0FBSyxDQUFDLEVBQUVmLFVBQVUsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFBRWdCLE9BQU8sQ0FBQyxFQUFFaEIsVUFBVSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQUE7OzhCQUNwSCw4REFBQ1c7b0JBQUlFLFdBQVU7OEJBQWVILE1BQU1PLEtBQUs7Ozs7Ozs4QkFDM0MsOERBQUNOO29CQUFLRSxXQUFVOzhCQUNoQiw0RUFBQ0s7d0JBQUlDLEtBQUtyQiwrQ0FBTUEsQ0FBQ1ksTUFBTVUsS0FBSyxFQUFFQyxHQUFHO3dCQUFJQyxRQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUM7QUFDQSxpRUFBZWIsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvQnViYmxlMy5qcz9mOTE4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBAamVzdC1lbnZpcm9ubWVudCBqc2RvbVxuICovXG4gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbiBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbiBpbXBvcnQgRXhpdCBmcm9tICcuLi9wdWJsaWMvWG1hcmsuc3ZnJztcbiBpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4gaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInXG4gaW1wb3J0IHdpdGhSZWFjdENvbnRlbnQgZnJvbSAnc3dlZXRhbGVydDItcmVhY3QtY29udGVudCdcbiBpbXBvcnQgeyB1cmxGb3IsIHNhbml0eUNsaWVudCB9IGZyb20gJy4uL3Nhbml0eSdcblxuXG5cbiAgICBcbmZ1bmN0aW9uIGdldFJhbmRvbShtaW4sIG1heCkge1xuICBjb25zdCBmbG9hdFJhbmRvbSA9IE1hdGgucmFuZG9tKClcblxuICBjb25zdCBkaWZmZXJlbmNlID0gbWF4IC0gbWluXG5cbiAgLy8gcmFuZG9tIGJldHdlZW4gMCBhbmQgdGhlIGRpZmZlcmVuY2VcbiAgY29uc3QgcmFuZG9tID0gTWF0aC5yb3VuZChkaWZmZXJlbmNlICogZmxvYXRSYW5kb20pXG5cbiAgY29uc3QgcmFuZG9tV2l0aGluUmFuZ2UgPSByYW5kb20gKyBtaW5cblxuICByZXR1cm4gcmFuZG9tV2l0aGluUmFuZ2Vcbn1cblxuXG5cbmZ1bmN0aW9uIEJ1YmJsZTMocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICA8ZGl2IGlkPVwiYnViYmxlXCIgICBjbGFzc05hbWU9XCJidWJibGUgYnViYmxlM1wiIHN0eWxlPXt7dG9wOiBgJHtnZXRSYW5kb20oMTAsIDYwKX12aGAsIHJpZ2h0OiBgJHtnZXRSYW5kb20oMjUsIDM1KX12d2B9fSA+XG4gIDxkaXYgY2xhc3NOYW1lPVwibGFiZWwgdG9waWNcIj57cHJvcHMudGl0bGV9PC9kaXY+XG48ZGl2ICBjbGFzc05hbWU9XCJpbm5lcmltZ1wiID5cbjxpbWcgc3JjPXt1cmxGb3IocHJvcHMuaW1hZ2UpLnVybCgpfSBsYXlvdXQ9XCJmaWxsXCIgLz5cbjwvZGl2PlxuPC9kaXY+XG48Lz5cbilcbn1cbmV4cG9ydCBkZWZhdWx0IEJ1YmJsZTMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsIkV4aXQiLCJIZWFkIiwiU3dhbCIsIndpdGhSZWFjdENvbnRlbnQiLCJ1cmxGb3IiLCJzYW5pdHlDbGllbnQiLCJnZXRSYW5kb20iLCJtaW4iLCJtYXgiLCJmbG9hdFJhbmRvbSIsIk1hdGgiLCJyYW5kb20iLCJkaWZmZXJlbmNlIiwicm91bmQiLCJyYW5kb21XaXRoaW5SYW5nZSIsIkJ1YmJsZTMiLCJwcm9wcyIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0b3AiLCJyaWdodCIsInRpdGxlIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJ1cmwiLCJsYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Bubble3.js\n");

/***/ })

};
;