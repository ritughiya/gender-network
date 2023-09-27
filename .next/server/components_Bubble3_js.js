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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_Xmark_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/Xmark.svg */ \"./public/Xmark.svg\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ \"sweetalert2\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2-react-content */ \"sweetalert2-react-content\");\n/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sanity */ \"./sanity.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sanity__WEBPACK_IMPORTED_MODULE_9__]);\n_sanity__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/**\n * @jest-environment jsdom\n */ \n\n\n\n\n\n\n\n\n\nfunction getRandom(min, max) {\n    const floatRandom = Math.random();\n    const difference = max - min;\n    // random between 0 and the difference\n    const random = Math.round(difference * floatRandom);\n    const randomWithinRange = random + min;\n    return randomWithinRange;\n}\nfunction Bubble3(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: `${props.indexslug}`,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"bubble\",\n                className: \"bubble bubble3\",\n                style: {\n                    top: `${getRandom(10, 60)}vh`,\n                    right: `${getRandom(25, 35)}vw`\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"label topic\",\n                        children: props.title\n                    }, void 0, false, {\n                        fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble3.js\",\n                        lineNumber: 39,\n                        columnNumber: 3\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"innerimg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: (0,_sanity__WEBPACK_IMPORTED_MODULE_9__.urlFor)(props.image).url(),\n                            layout: \"fill\"\n                        }, void 0, false, {\n                            fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble3.js\",\n                            lineNumber: 41,\n                            columnNumber: 1\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble3.js\",\n                        lineNumber: 40,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble3.js\",\n                lineNumber: 38,\n                columnNumber: 3\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Volumes/LaCie/local/gendernetwork/web/components/Bubble3.js\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bubble3);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1YmJsZTMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztDQUVDLEdBQ0E7QUFBbUQ7QUFFdkI7QUFDVztBQUNUO0FBQ1M7QUFDWDtBQUNFO0FBQzBCO0FBQ1I7QUFLakQsU0FBU1ksVUFBVUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDM0IsTUFBTUMsY0FBY0MsS0FBS0MsTUFBTTtJQUUvQixNQUFNQyxhQUFhSixNQUFNRDtJQUV6QixzQ0FBc0M7SUFDdEMsTUFBTUksU0FBU0QsS0FBS0csS0FBSyxDQUFDRCxhQUFhSDtJQUV2QyxNQUFNSyxvQkFBb0JILFNBQVNKO0lBRW5DLE9BQU9PO0FBQ1Q7QUFJQSxTQUFTQyxRQUFRQyxLQUFLLEVBQUU7SUFDdEIscUJBQ0U7a0JBQ0ksNEVBQUNDO1lBQUVDLE1BQU0sQ0FBQyxFQUFFRixNQUFNRyxTQUFTLENBQUMsQ0FBQztzQkFDbkMsNEVBQUNDO2dCQUFJQyxJQUFHO2dCQUFXQyxXQUFVO2dCQUFpQkMsT0FBTztvQkFBQ0MsS0FBSyxDQUFDLEVBQUVsQixVQUFVLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQUVtQixPQUFPLENBQUMsRUFBRW5CLFVBQVUsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFBQTs7a0NBQ3BILDhEQUFDYzt3QkFBSUUsV0FBVTtrQ0FBZU4sTUFBTVUsS0FBSzs7Ozs7O2tDQUMzQyw4REFBQ047d0JBQUtFLFdBQVU7a0NBQ2hCLDRFQUFDSzs0QkFBSUMsS0FBS3hCLCtDQUFNQSxDQUFDWSxNQUFNYSxLQUFLLEVBQUVDLEdBQUc7NEJBQUlDLFFBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVDO0FBQ0EsaUVBQWVoQixPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdWJibGUzLmpzP2Y5MTgiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIEBqZXN0LWVudmlyb25tZW50IGpzZG9tXG4gKi9cbiBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG4gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuIGltcG9ydCBFeGl0IGZyb20gJy4uL3B1YmxpYy9YbWFyay5zdmcnO1xuIGltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbiBpbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0MidcbiBpbXBvcnQgd2l0aFJlYWN0Q29udGVudCBmcm9tICdzd2VldGFsZXJ0Mi1yZWFjdC1jb250ZW50J1xuIGltcG9ydCB7IHVybEZvciwgc2FuaXR5Q2xpZW50IH0gZnJvbSAnLi4vc2FuaXR5J1xuXG5cblxuICAgIFxuZnVuY3Rpb24gZ2V0UmFuZG9tKG1pbiwgbWF4KSB7XG4gIGNvbnN0IGZsb2F0UmFuZG9tID0gTWF0aC5yYW5kb20oKVxuXG4gIGNvbnN0IGRpZmZlcmVuY2UgPSBtYXggLSBtaW5cblxuICAvLyByYW5kb20gYmV0d2VlbiAwIGFuZCB0aGUgZGlmZmVyZW5jZVxuICBjb25zdCByYW5kb20gPSBNYXRoLnJvdW5kKGRpZmZlcmVuY2UgKiBmbG9hdFJhbmRvbSlcblxuICBjb25zdCByYW5kb21XaXRoaW5SYW5nZSA9IHJhbmRvbSArIG1pblxuXG4gIHJldHVybiByYW5kb21XaXRoaW5SYW5nZVxufVxuXG5cblxuZnVuY3Rpb24gQnViYmxlMyhwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxhIGhyZWY9e2Ake3Byb3BzLmluZGV4c2x1Z31gfT5cbiAgPGRpdiBpZD1cImJ1YmJsZVwiICAgY2xhc3NOYW1lPVwiYnViYmxlIGJ1YmJsZTNcIiBzdHlsZT17e3RvcDogYCR7Z2V0UmFuZG9tKDEwLCA2MCl9dmhgLCByaWdodDogYCR7Z2V0UmFuZG9tKDI1LCAzNSl9dndgfX0gPlxuICA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsIHRvcGljXCI+e3Byb3BzLnRpdGxlfTwvZGl2PlxuPGRpdiAgY2xhc3NOYW1lPVwiaW5uZXJpbWdcIiA+XG48aW1nIHNyYz17dXJsRm9yKHByb3BzLmltYWdlKS51cmwoKX0gbGF5b3V0PVwiZmlsbFwiIC8+XG48L2Rpdj5cbjwvZGl2PlxuPC9hPlxuPC8+XG4pXG59XG5leHBvcnQgZGVmYXVsdCBCdWJibGUzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJFeGl0IiwiSGVhZCIsIlN3YWwiLCJ3aXRoUmVhY3RDb250ZW50IiwidXJsRm9yIiwic2FuaXR5Q2xpZW50IiwiZ2V0UmFuZG9tIiwibWluIiwibWF4IiwiZmxvYXRSYW5kb20iLCJNYXRoIiwicmFuZG9tIiwiZGlmZmVyZW5jZSIsInJvdW5kIiwicmFuZG9tV2l0aGluUmFuZ2UiLCJCdWJibGUzIiwicHJvcHMiLCJhIiwiaHJlZiIsImluZGV4c2x1ZyIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0b3AiLCJyaWdodCIsInRpdGxlIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJ1cmwiLCJsYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Bubble3.js\n");

/***/ })

};
;