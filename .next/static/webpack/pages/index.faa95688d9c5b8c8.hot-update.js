"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sanity */ \"./sanity.js\");\n/* harmony import */ var _components_HomeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HomeHeader */ \"./components/HomeHeader.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Connect */ \"./components/Connect.js\");\n/* harmony import */ var _components_Connect2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Connect2 */ \"./components/Connect2.js\");\n/* harmony import */ var _components_Bubble4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Bubble4 */ \"./components/Bubble4.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @sanity/block-content-to-react */ \"./node_modules/@sanity/block-content-to-react/lib/BlockContent.js\");\n/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_11__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n// const BubbleRegion = dynamic(() => import(\"../components/Bubble1\"), {\n//   ssr: false,\n// });\n// const BubbleTime = dynamic(() => import(\"../components/Bubble2\"), {\n//   ssr: false,\n// });\n// const BubbleTopic = dynamic(() => import(\"../components/Bubble3\"), {\n//   ssr: false,\n// });\nconst BubbleType = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(_c = ()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../components/Bubble4 */ \"./components/Bubble4.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"index.js -> \" + \"../components/Bubble4\"\n        ]\n    },\n    ssr: false\n});\n_c1 = BubbleType;\nconst Cloudbg = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(()=>__webpack_require__.e(/*! import() */ \"components_Cloudbg_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Cloudbg */ \"./components/Cloudbg.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"index.js -> \" + \"../components/Cloudbg\"\n        ]\n    },\n    ssr: false\n});\n_c2 = Cloudbg;\n\nconst HomePage = (param)=>{\n    let { properties , infoproperties , globalproperties , locationproperties , decadeproperties , topicproperties , typesproperties  } = param;\n    _s();\n    const [typesrecord, settypesrecord] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var typerandomnumber = Math.floor(Math.random() * typesproperties.length);\n        const random = typesproperties[typerandomnumber];\n        settypesrecord([\n            random\n        ]);\n    }, []);\n    var randomHex = [\n        \"#E3E36A\",\n        \"#058ED9\",\n        \"#AEC9F1\",\n        \"#EBE2B3\",\n        \"#DD4781\",\n        \"#F5BB89\"\n    ];\n    //bg color\n    var randomcolor = Math.floor(Math.random() * randomHex.length);\n    // location\n    // var locationrandomnumber = Math.floor(Math.random() * locationproperties.length);\n    // var locationrandomnumber2 = Math.floor(Math.random() * locationproperties.length);\n    // // time\n    // var decaderandomnumber = Math.floor(Math.random() * decadeproperties.length);\n    // var decaderandomnumber2 = Math.floor(Math.random() * decadeproperties.length);\n    //   // topic\n    //   var topicrandomnumber = Math.floor(Math.random() * topicproperties.length);\n    //   var topicrandomnumber2 = Math.floor(Math.random() * topicproperties.length);  \n    // // type\n    // var typerandomnumber = Math.floor(Math.random() * typesproperties.length);\n    // var typerandomnumber2 = Math.floor(Math.random() * typesproperties.length);\n    // const locationrecord = locationproperties[locationrandomnumber];\n    // const locationrecord2 = locationproperties[locationrandomnumber2];\n    // const decaderecord = decadeproperties[decaderandomnumber];\n    // const decaderecord2 = decadeproperties[decaderandomnumber2];\n    // const topicrecord = topicproperties[topicrandomnumber];\n    // const topicrecord2 = topicproperties[topicrandomnumber2];\n    // const typesrecord = typesproperties[typerandomnumber];\n    // const typesrecord2 = typesproperties[typerandomnumber2];\n    console.log(typesrecord);\n    const serializers = {\n        types: {\n            code: (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                    \"data-language\": props.node.language,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                        children: props.node.code\n                    }, void 0, false, {\n                        fileName: \"/Volumes/LaCie/local/gendernetwork/web/pages/index.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Volumes/LaCie/local/gendernetwork/web/pages/index.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, undefined)\n        },\n        marks: {\n            link: (param)=>{\n                let { mark , children  } = param;\n                const { blank , href  } = mark;\n                return blank ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: href,\n                    target: \"_blank\",\n                    rel: \"noreferrer\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Volumes/LaCie/local/gendernetwork/web/pages/index.js\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: href,\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Volumes/LaCie/local/gendernetwork/web/pages/index.js\",\n                    lineNumber: 94,\n                    columnNumber: 11\n                }, undefined);\n            }\n        }\n    };\n    const buttonColor = \"#\" + infoproperties[0].leftbgbutton;\n    const buttontextColor = \"#\" + infoproperties[0].lefttextbutton;\n    const mystyle = {\n        color: buttontextColor\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"homePage\",\n                children: [\n                    globalproperties && globalproperties.map((param, index)=>/*#__PURE__*/ {\n                        let { _id , emaillink =\"\" , facebooklink =\"\" , iglink =\"\"  } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                emaillink: emaillink && emaillink,\n                                facebooklink: facebooklink && facebooklink,\n                                iglink: iglink\n                            }, void 0, false, {\n                                fileName: \"/Volumes/LaCie/local/gendernetwork/web/pages/index.js\",\n                                lineNumber: 122,\n                                columnNumber: 15\n                            }, undefined)\n                        }, _id, false, {\n                            fileName: \"/Volumes/LaCie/local/gendernetwork/web/pages/index.js\",\n                            lineNumber: 121,\n                            columnNumber: 13\n                        }, undefined);\n                    }),\n                    infoproperties && infoproperties.map((param, index)=>/*#__PURE__*/ {\n                        let { _id , homepagefeedback =\"\" , leftbgbutton =\"\" , lefttextbutton =\"\" , homepagesayhi =\"\"  } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ovalsticker hvr-pulse\",\n                                        style: buttonColor && {\n                                            backgroundColor: buttonColor\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                            blocks: homepagefeedback && homepagefeedback,\n                                            serializers: serializers,\n                                            style: mystyle\n                                        }, void 0, false, {\n                                            fileName: \"/Volumes/LaCie/local/gendernetwork/web/pages/index.js\",\n                                            lineNumber: 145,\n                                            columnNumber: 14\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Volumes/LaCie/local/gendernetwork/web/pages/index.js\",\n                                        lineNumber: 144,\n                                        columnNumber: 14\n                                    }, undefined)\n                                }, _id, false, {\n                                    fileName: \"/Volumes/LaCie/local/gendernetwork/web/pages/index.js\",\n                                    lineNumber: 143,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"sayhi hvr-bob\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                        href: homepagesayhi && homepagesayhi,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_11___default()), {\n                                            src: \"/Sayhi.png\",\n                                            width: \"250\",\n                                            height: \"125\"\n                                        }, void 0, false, {\n                                            fileName: \"/Volumes/LaCie/local/gendernetwork/web/pages/index.js\",\n                                            lineNumber: 151,\n                                            columnNumber: 14\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Volumes/LaCie/local/gendernetwork/web/pages/index.js\",\n                                        lineNumber: 150,\n                                        columnNumber: 11\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/LaCie/local/gendernetwork/web/pages/index.js\",\n                                    lineNumber: 149,\n                                    columnNumber: 14\n                                }, undefined)\n                            ]\n                        }, void 0, true);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"homepagebg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cloudbg, {\n                                color: randomHex[randomcolor]\n                            }, void 0, false, {\n                                fileName: \"/Volumes/LaCie/local/gendernetwork/web/pages/index.js\",\n                                lineNumber: 163,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bubbles\",\n                                suppressHydrationWarning: true,\n                                children: typesrecord.title\n                            }, void 0, false, {\n                                fileName: \"/Volumes/LaCie/local/gendernetwork/web/pages/index.js\",\n                                lineNumber: 166,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/LaCie/local/gendernetwork/web/pages/index.js\",\n                        lineNumber: 161,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/LaCie/local/gendernetwork/web/pages/index.js\",\n                lineNumber: 110,\n                columnNumber: 8\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"YOUuy5JJQNuPr/7dI99HEq0be1w=\");\n_c3 = HomePage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"BubbleType$dynamic\");\n$RefreshReg$(_c1, \"BubbleType\");\n$RefreshReg$(_c2, \"Cloudbg\");\n$RefreshReg$(_c3, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQ1Y7K0JBR0QsOERBQUNQO3NDQUNDLDRFQUFDckQsMERBQU1BO2dDQUNMMEQsV0FBV0EsYUFBYUE7Z0NBQ3hCQyxjQUFjQSxnQkFBZ0JBO2dDQUM5QkMsUUFBUUE7Ozs7OzsyQkFKRkg7Ozs7O29CQU1MO29CQUlSNUMsa0JBQWtCQSxlQUFlMEMsR0FBRyxDQUNuQyxRQVFFQyxzQkFFQTs0QkFUQSxFQUNFQyxJQUFHLEVBQ0hJLGtCQUFtQixHQUFFLEVBQ3JCYixjQUFlLEdBQUUsRUFDakJFLGdCQUFpQixHQUFFLEVBQ25CWSxlQUFlLEdBQUUsRUFDbEI7K0JBR0Q7OzhDQUNBLDhEQUFDVDs4Q0FDQSw0RUFBQ0E7d0NBQUlDLFdBQVU7d0NBQXdCUyxPQUFPaEIsZUFBZTs0Q0FBRWlCLGlCQUFpQmpCO3dDQUFXO2tEQUMzRiw0RUFBQ3pDLHdFQUFZQTs0Q0FBQzJELFFBQVFKLG9CQUFvQkE7NENBQWtCL0IsYUFBYUE7NENBQWFpQyxPQUFPWjs7Ozs7Ozs7Ozs7bUNBRnBGTTs7Ozs7OENBTVQsOERBQUNKO29DQUFJQyxXQUFVOzhDQUNsQiw0RUFBQ2pELGtEQUFJQTt3Q0FBQ3NDLE1BQU1tQixpQkFBaUJBO2tEQUMxQiw0RUFBQ3BELG9EQUFLQTs0Q0FBQ3dELEtBQUk7NENBQWFDLE9BQU07NENBQU1DLFFBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFJMUM7a0NBTU4sOERBQUNmO3dCQUFJQyxXQUFVOzswQ0FFYiw4REFBQzdDO2dDQUFRMkMsT0FBTzFCLFNBQVMsQ0FBQ0MsWUFBWTs7Ozs7OzBDQUdwQyw4REFBQzBCO2dDQUFJQyxXQUFVO2dDQUFVZSx3QkFBd0I7MENBcUIvQ2xELFlBQVltRCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DL0I7R0F6TE0zRDtNQUFBQTs7QUFpT04sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1cmxGb3IsIHNhbml0eUNsaWVudCB9IGZyb20gXCIuLi9zYW5pdHlcIjtcblxuaW1wb3J0IEhvbWVIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZUhlYWRlclwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBDb25uZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0Nvbm5lY3RcIjtcbmltcG9ydCBDb25uZWN0MiBmcm9tIFwiLi4vY29tcG9uZW50cy9Db25uZWN0MlwiO1xuXG5pbXBvcnQgQnViYmxlNCBmcm9tIFwiLi4vY29tcG9uZW50cy9CdWJibGU0XCI7XG5cbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBQb3J0YWJsZVRleHQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xuXG4vLyBjb25zdCBCdWJibGVSZWdpb24gPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvQnViYmxlMVwiKSwge1xuLy8gICBzc3I6IGZhbHNlLFxuLy8gfSk7XG4vLyBjb25zdCBCdWJibGVUaW1lID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL0J1YmJsZTJcIiksIHtcbi8vICAgc3NyOiBmYWxzZSxcbi8vIH0pO1xuLy8gY29uc3QgQnViYmxlVG9waWMgPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvQnViYmxlM1wiKSwge1xuLy8gICBzc3I6IGZhbHNlLFxuLy8gfSk7XG5jb25zdCBCdWJibGVUeXBlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL0J1YmJsZTRcIiksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBDbG91ZGJnID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL0Nsb3VkYmdcIiksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuXG5cblxuY29uc3QgSG9tZVBhZ2UgPSAoeyBwcm9wZXJ0aWVzLCBpbmZvcHJvcGVydGllcywgZ2xvYmFscHJvcGVydGllcywgbG9jYXRpb25wcm9wZXJ0aWVzLCBkZWNhZGVwcm9wZXJ0aWVzLCB0b3BpY3Byb3BlcnRpZXMsIHR5cGVzcHJvcGVydGllcyB9KSA9PiB7XG5cbiAgY29uc3QgW3R5cGVzcmVjb3JkLCBzZXR0eXBlc3JlY29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgdHlwZXJhbmRvbW51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHR5cGVzcHJvcGVydGllcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJhbmRvbSA9IHR5cGVzcHJvcGVydGllc1t0eXBlcmFuZG9tbnVtYmVyXTtcbiAgICBzZXR0eXBlc3JlY29yZChbcmFuZG9tXSk7XG5cbiAgfSwgW10pO1xuXG4gIHZhciByYW5kb21IZXggPSBbXCIjRTNFMzZBXCIsIFwiIzA1OEVEOVwiLCBcIiNBRUM5RjFcIiwgXCIjRUJFMkIzXCIsIFwiI0RENDc4MVwiLCBcIiNGNUJCODlcIl07XG5cblxuICAvL2JnIGNvbG9yXG4gIHZhciByYW5kb21jb2xvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmRvbUhleC5sZW5ndGgpO1xuICAvLyBsb2NhdGlvblxuICAvLyB2YXIgbG9jYXRpb25yYW5kb21udW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsb2NhdGlvbnByb3BlcnRpZXMubGVuZ3RoKTtcbiAgLy8gdmFyIGxvY2F0aW9ucmFuZG9tbnVtYmVyMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxvY2F0aW9ucHJvcGVydGllcy5sZW5ndGgpO1xuICAvLyAvLyB0aW1lXG4gIC8vIHZhciBkZWNhZGVyYW5kb21udW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkZWNhZGVwcm9wZXJ0aWVzLmxlbmd0aCk7XG4gIC8vIHZhciBkZWNhZGVyYW5kb21udW1iZXIyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGVjYWRlcHJvcGVydGllcy5sZW5ndGgpO1xuICAvLyAgIC8vIHRvcGljXG4gIC8vICAgdmFyIHRvcGljcmFuZG9tbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdG9waWNwcm9wZXJ0aWVzLmxlbmd0aCk7XG4gIC8vICAgdmFyIHRvcGljcmFuZG9tbnVtYmVyMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRvcGljcHJvcGVydGllcy5sZW5ndGgpOyAgXG4gIC8vIC8vIHR5cGVcbiAgLy8gdmFyIHR5cGVyYW5kb21udW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0eXBlc3Byb3BlcnRpZXMubGVuZ3RoKTtcbiAgLy8gdmFyIHR5cGVyYW5kb21udW1iZXIyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdHlwZXNwcm9wZXJ0aWVzLmxlbmd0aCk7XG5cbiAgLy8gY29uc3QgbG9jYXRpb25yZWNvcmQgPSBsb2NhdGlvbnByb3BlcnRpZXNbbG9jYXRpb25yYW5kb21udW1iZXJdO1xuICAvLyBjb25zdCBsb2NhdGlvbnJlY29yZDIgPSBsb2NhdGlvbnByb3BlcnRpZXNbbG9jYXRpb25yYW5kb21udW1iZXIyXTtcbiAgLy8gY29uc3QgZGVjYWRlcmVjb3JkID0gZGVjYWRlcHJvcGVydGllc1tkZWNhZGVyYW5kb21udW1iZXJdO1xuICAvLyBjb25zdCBkZWNhZGVyZWNvcmQyID0gZGVjYWRlcHJvcGVydGllc1tkZWNhZGVyYW5kb21udW1iZXIyXTtcbiAgLy8gY29uc3QgdG9waWNyZWNvcmQgPSB0b3BpY3Byb3BlcnRpZXNbdG9waWNyYW5kb21udW1iZXJdO1xuICAvLyBjb25zdCB0b3BpY3JlY29yZDIgPSB0b3BpY3Byb3BlcnRpZXNbdG9waWNyYW5kb21udW1iZXIyXTtcbiAgLy8gY29uc3QgdHlwZXNyZWNvcmQgPSB0eXBlc3Byb3BlcnRpZXNbdHlwZXJhbmRvbW51bWJlcl07XG4gIC8vIGNvbnN0IHR5cGVzcmVjb3JkMiA9IHR5cGVzcHJvcGVydGllc1t0eXBlcmFuZG9tbnVtYmVyMl07XG5cblxuICBjb25zb2xlLmxvZyh0eXBlc3JlY29yZClcblxuICBjb25zdCBzZXJpYWxpemVycyA9IHtcbiAgICB0eXBlczoge1xuICAgICAgY29kZTogKHByb3BzKSA9PiAoXG4gICAgICAgIDxwcmUgZGF0YS1sYW5ndWFnZT17cHJvcHMubm9kZS5sYW5ndWFnZX0+XG4gICAgICAgICAgPGNvZGU+e3Byb3BzLm5vZGUuY29kZX08L2NvZGU+XG4gICAgICAgIDwvcHJlPlxuICAgICAgKSxcbiAgICB9LFxuICAgIG1hcmtzOiB7XG4gICAgICBsaW5rOiAoeyBtYXJrLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYmxhbmssIGhyZWYgfSA9IG1hcms7XG4gICAgICAgIHJldHVybiBibGFuayA/IChcbiAgICAgICAgICA8YSBocmVmPXtocmVmfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9hPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9PntjaGlsZHJlbn08L2E+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgYnV0dG9uQ29sb3IgPSBcIiNcIiArIGluZm9wcm9wZXJ0aWVzWzBdLmxlZnRiZ2J1dHRvbjtcbiAgY29uc3QgYnV0dG9udGV4dENvbG9yID0gXCIjXCIgKyBpbmZvcHJvcGVydGllc1swXS5sZWZ0dGV4dGJ1dHRvbjtcblxuXG4gIGNvbnN0IG15c3R5bGUgPSB7XG4gICAgY29sb3I6IGJ1dHRvbnRleHRDb2xvcixcbiAgfTtcblxuXG4gIHJldHVybiAoXG4gICAgPD4gPGRpdiBjbGFzc05hbWU9XCJob21lUGFnZVwiPlxuICAgICAge2dsb2JhbHByb3BlcnRpZXMgJiYgZ2xvYmFscHJvcGVydGllcy5tYXAoXG4gICAgICAgICAgKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfaWQsXG4gICAgICAgICAgICAgIGVtYWlsbGluayA9IFwiXCIsXG4gICAgICAgICAgICAgIGZhY2Vib29rbGluayA9IFwiXCIsXG4gICAgICAgICAgICAgIGlnbGluaz1cIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICApID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtfaWR9PlxuICAgICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgICAgZW1haWxsaW5rPXtlbWFpbGxpbmsgJiYgZW1haWxsaW5rfVxuICAgICAgICAgICAgICAgIGZhY2Vib29rbGluaz17ZmFjZWJvb2tsaW5rICYmIGZhY2Vib29rbGlua31cbiAgICAgICAgICAgICAgICBpZ2xpbms9e2lnbGlua31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgKX1cblxuICAgICAgICB7aW5mb3Byb3BlcnRpZXMgJiYgaW5mb3Byb3BlcnRpZXMubWFwKFxuICAgICAgICAgIChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX2lkLFxuICAgICAgICAgICAgICBob21lcGFnZWZlZWRiYWNrID0gXCJcIixcbiAgICAgICAgICAgICAgbGVmdGJnYnV0dG9uID0gXCJcIixcbiAgICAgICAgICAgICAgbGVmdHRleHRidXR0b24gPSBcIlwiLFxuICAgICAgICAgICAgICBob21lcGFnZXNheWhpID1cIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICApID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGtleT17X2lkfT5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92YWxzdGlja2VyIGh2ci1wdWxzZVwiIHN0eWxlPXtidXR0b25Db2xvciAmJiB7IGJhY2tncm91bmRDb2xvcjogYnV0dG9uQ29sb3J9fT5cbiAgICAgICAgICAgICA8UG9ydGFibGVUZXh0IGJsb2Nrcz17aG9tZXBhZ2VmZWVkYmFjayAmJiBob21lcGFnZWZlZWRiYWNrfSBzZXJpYWxpemVycz17c2VyaWFsaXplcnN9IHN0eWxlPXtteXN0eWxlfS8+XG4gICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYXloaSBodnItYm9iXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17aG9tZXBhZ2VzYXloaSAmJiBob21lcGFnZXNheWhpfT5cbiAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL1NheWhpLnBuZ1wiIHdpZHRoPVwiMjUwXCIgaGVpZ2h0PVwiMTI1XCIgLz5cbiAgICAgICAgICAgPC9MaW5rPlxuICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8Lz5cblxuICAgICAgICAgIClcbiAgICAgICAgKX0gXG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVwYWdlYmdcIj5cblxuICAgICAgICAgIDxDbG91ZGJnIGNvbG9yPXtyYW5kb21IZXhbcmFuZG9tY29sb3JdfVxuXG4gICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnViYmxlc1wiIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZz5cbiAgICAgICAgICAgICAgIHsvKiA8QnViYmxlUmVnaW9uXG4gICAgICAgICAgICAgICAgdGl0bGU9e2xvY2F0aW9ucmVjb3JkLnRpdGxlICYmIGxvY2F0aW9ucmVjb3JkLnRpdGxlfVxuICAgICAgICAgICAgICAgIGltYWdlPXtsb2NhdGlvbnJlY29yZC5pbWFnZSAmJiBsb2NhdGlvbnJlY29yZC5pbWFnZX1cbiAgICAgICAgICAgICAgICBpbmRleHNsdWc9e2AvZnVsbGluZGV4P2xvY2F0aW9uPSR7bG9jYXRpb25yZWNvcmQuX2lkfSZsb2NhdGlvbnRpdGxlPSR7bG9jYXRpb25yZWNvcmQudGl0bGV9YH0gICAgICAgIFxuICAgICAgICAgICAgICAvPiBcbiAgICAgICAgICAgICAgIDxCdWJibGVUaW1lXG4gICAgICAgICAgICAgICAgdGl0bGU9e2RlY2FkZXJlY29yZC50aXRsZSAmJiBkZWNhZGVyZWNvcmQudGl0bGV9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e2RlY2FkZXJlY29yZC5pbWFnZSAmJiBkZWNhZGVyZWNvcmQuaW1hZ2V9XG4gICAgICAgICAgICAgICAgaW5kZXhzbHVnPXtkZWNhZGVyZWNvcmQuX2lkICYmIGAvZnVsbGluZGV4P2RlY2FkZT0ke2RlY2FkZXJlY29yZC5faWR9JmRlY2FkZXRpdGxlPSR7ZGVjYWRlcmVjb3JkLnRpdGxlfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICA8QnViYmxlVG9waWNcbiAgICAgICAgICAgICAgICB0aXRsZT17dG9waWNyZWNvcmQudGl0bGUgJiYgdG9waWNyZWNvcmQudGl0bGV9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e3RvcGljcmVjb3JkLmltYWdlICYmIHRvcGljcmVjb3JkLmltYWdlfVxuICAgICAgICAgICAgICAgIGluZGV4c2x1Zz17dG9waWNyZWNvcmQuX2lkICYmIGAvZnVsbGluZGV4P3RvcGljPSR7dG9waWNyZWNvcmQuX2lkfSZ0b3BpY3RpdGxlPSR7dG9waWNyZWNvcmQudGl0bGV9YH1cbiAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgIHsvKiB7dHlwZXNyZWNvcmQubWFwKFxuICAgICAgICAgICAgICAgICh7IF9pZCwgdGl0bGUsIGltYWdlIH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxCdWJibGU0IHRpdGxlPXt0aXRsZSAmJiB0aXRsZX0gaW1hZ2U9e2ltYWdlICYmIGltYWdlfSBpbmRleHNsdWc9e19pZCAmJiBgL2Z1bGxpbmRleD90eXBlPSR7dHlwZXNyZWNvcmQuX2lkfSZ0eXBldGl0bGU9JHt0eXBlc3JlY29yZC50aXRsZX1gfSAvPlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICkpfSAgKi99XG4gICAgICAgICAgICAge3R5cGVzcmVjb3JkLnRpdGxlfVxuXG4gICAgICAgICAgICAgIHsvKiA8QnViYmxlNCBcbiAgICAgICAgICAgICAgICB0aXRsZT17dHlwZXNyZWNvcmQudGl0bGUgJiYgdHlwZXNyZWNvcmQudGl0bGV9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e3R5cGVzcmVjb3JkLmltYWdlICYmIHR5cGVzcmVjb3JkLmltYWdlfVxuICAgICAgICAgICAgICAgIGluZGV4c2x1Zz17dHlwZXNyZWNvcmQuX2lkICYmIGAvZnVsbGluZGV4P3R5cGU9JHt0eXBlc3JlY29yZC5faWR9JnR5cGV0aXRsZT0ke3R5cGVzcmVjb3JkLnRpdGxlfWB9XG4gICAgICAgICAgICAgIC8+ICAgKi99XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRhZy1nclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN0cmFpbnR0YWdzXCIgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnIHJlZ2lvblwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZyBocmVmPXtgL2Z1bGxpbmRleD9sb2NhdGlvbj0ke2xvY2F0aW9ucmVjb3JkMi5faWR9JmxvY2F0aW9udGl0bGU9JHtsb2NhdGlvbnJlY29yZDIudGl0bGV9YH0+XG4gICAgICAgICAgICAgICAgICB7bG9jYXRpb25yZWNvcmQyLnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWcgdGltZVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nIGhyZWY9e2AvZnVsbGluZGV4P2RlY2FkZT0ke2RlY2FkZXJlY29yZDIuX2lkfSZkZWNhZGV0aXRsZT0ke2RlY2FkZXJlY29yZDIudGl0bGV9YH0+XG4gICAgICAgICAgICAgICAgICB7ZGVjYWRlcmVjb3JkMi50aXRsZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnIHRvcGljXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcgaHJlZj17YC9mdWxsaW5kZXg/dG9waWM9JHt0b3BpY3JlY29yZDIuX2lkfSZ0b3BpY3RpdGxlPSR7dG9waWNyZWNvcmQyLnRpdGxlfWB9PlxuICAgICAgICAgICAgICAgICAge3RvcGljcmVjb3JkMi50aXRsZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFnIHR5cGVcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZyBocmVmPXtgL2Z1bGxpbmRleD90eXBlPSR7dHlwZXNyZWNvcmQyLl9pZH0mdHlwZXRpdGxlPSR7dHlwZXNyZWNvcmQyLnRpdGxlfWB9PlxuICAgICAgICAgICAgICAgICAge3R5cGVzcmVjb3JkMi50aXRsZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdcIj48TGluayBocmVmPVwiaHR0cHM6Ly9nZW5kZXIubmV0d29yay9mdWxsaW5kZXhcIj4uLi48L0xpbms+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gXG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbnF1ZXJ5ID0gYCpbX3R5cGUgPT0gXCJsb2NhdGlvblwiICYmIChkZWZpbmVkKGltYWdlKSkgXXtfaWQsIHRpdGxlLCBpbWFnZX0gfCBvcmRlcih0aXRsZSBhc2MpIGA7XG4gIGNvbnN0IGxvY2F0aW9ucHJvcGVydGllcyA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChsb2NhdGlvbnF1ZXJ5KTtcblxuICBjb25zdCBkZWNhZGVxdWVyeSA9IGAqW190eXBlID09IFwiZGVjYWRlXCIgJiYgKGRlZmluZWQoaW1hZ2UpKSBde19pZCwgdGl0bGUsIGltYWdlfSB8IG9yZGVyKHRpdGxlIGFzYykgYDtcbiAgY29uc3QgZGVjYWRlcHJvcGVydGllcyA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChkZWNhZGVxdWVyeSk7XG5cbiAgY29uc3QgdG9waWNxdWVyeSA9IGAqW190eXBlID09IFwidG9waWNcIiAmJiAoZGVmaW5lZChpbWFnZSkpIF17X2lkLCB0aXRsZSwgaW1hZ2V9IHwgb3JkZXIodGl0bGUgYXNjKSBgO1xuICBjb25zdCB0b3BpY3Byb3BlcnRpZXMgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2godG9waWNxdWVyeSk7XG5cbiAgY29uc3QgdHlwZXNxdWVyeSA9IGAqW190eXBlID09IFwidHlwZXNcIiAmJiAoZGVmaW5lZChpbWFnZSkpIF17X2lkLCB0aXRsZSwgaW1hZ2V9IHwgb3JkZXIodGl0bGUgYXNjKSBgO1xuICBjb25zdCB0eXBlc3Byb3BlcnRpZXMgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2godHlwZXNxdWVyeSk7XG5cbiAgY29uc3QgaW5mb3F1ZXJ5ID0gYCpbX3R5cGU9PVwiaG9tZWluZm9cIl1gO1xuICBjb25zdCBpbmZvcHJvcGVydGllcyA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChpbmZvcXVlcnkpO1xuXG4gIGNvbnN0IGdsb2JhbHF1ZXJ5ID0gYCpbX3R5cGU9PVwiZ2xvYmFsXCJdYDtcbiAgY29uc3QgZ2xvYmFscHJvcGVydGllcyA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChnbG9iYWxxdWVyeSk7XG5cbiAgaWYgKCFpbmZvcHJvcGVydGllcykge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczogbnVsbCxcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGluZm9wcm9wZXJ0aWVzLFxuICAgICAgICBnbG9iYWxwcm9wZXJ0aWVzLFxuICAgICAgICBsb2NhdGlvbnByb3BlcnRpZXMsXG4gICAgICAgIGRlY2FkZXByb3BlcnRpZXMsXG4gICAgICAgIHRvcGljcHJvcGVydGllcyxcbiAgICAgICAgdHlwZXNwcm9wZXJ0aWVzXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1cmxGb3IiLCJIb21lSGVhZGVyIiwiSGVhZGVyIiwiQ29ubmVjdCIsIkNvbm5lY3QyIiwiQnViYmxlNCIsImR5bmFtaWMiLCJMaW5rIiwiUG9ydGFibGVUZXh0IiwiQnViYmxlVHlwZSIsInNzciIsIkNsb3VkYmciLCJJbWFnZSIsIkhvbWVQYWdlIiwicHJvcGVydGllcyIsImluZm9wcm9wZXJ0aWVzIiwiZ2xvYmFscHJvcGVydGllcyIsImxvY2F0aW9ucHJvcGVydGllcyIsImRlY2FkZXByb3BlcnRpZXMiLCJ0b3BpY3Byb3BlcnRpZXMiLCJ0eXBlc3Byb3BlcnRpZXMiLCJ0eXBlc3JlY29yZCIsInNldHR5cGVzcmVjb3JkIiwidHlwZXJhbmRvbW51bWJlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInJhbmRvbUhleCIsInJhbmRvbWNvbG9yIiwiY29uc29sZSIsImxvZyIsInNlcmlhbGl6ZXJzIiwidHlwZXMiLCJjb2RlIiwicHJvcHMiLCJwcmUiLCJkYXRhLWxhbmd1YWdlIiwibm9kZSIsImxhbmd1YWdlIiwibWFya3MiLCJsaW5rIiwibWFyayIsImNoaWxkcmVuIiwiYmxhbmsiLCJocmVmIiwiYSIsInRhcmdldCIsInJlbCIsImJ1dHRvbkNvbG9yIiwibGVmdGJnYnV0dG9uIiwiYnV0dG9udGV4dENvbG9yIiwibGVmdHRleHRidXR0b24iLCJteXN0eWxlIiwiY29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsIl9pZCIsImVtYWlsbGluayIsImZhY2Vib29rbGluayIsImlnbGluayIsImhvbWVwYWdlZmVlZGJhY2siLCJob21lcGFnZXNheWhpIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJibG9ja3MiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInN1cHByZXNzSHlkcmF0aW9uV2FybmluZyIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});