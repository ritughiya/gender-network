"use strict";
exports.id = 979;
exports.ids = [979];
exports.modules = {

/***/ 5511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/Xmark.svg
var Xmark = __webpack_require__(9394);
// EXTERNAL MODULE: external "react-typing-animation"
var external_react_typing_animation_ = __webpack_require__(1863);
var external_react_typing_animation_default = /*#__PURE__*/__webpack_require__.n(external_react_typing_animation_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/ScrollTop.svg
/* harmony default export */ const ScrollTop = ({"src":"/_next/static/media/ScrollTop.2c8c04e3.svg","height":132,"width":114});
;// CONCATENATED MODULE: ./components/ScrollToTop.js




const ScrollToTop = ()=>{
    const [showTopBtn, setShowTopBtn] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "top-to-btm",
        children: [
            " ",
            showTopBtn && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: goToTop,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/ScrollTop.svg",
                    width: "100",
                    height: "100"
                })
            }),
            " "
        ]
    });
};
/* harmony default export */ const components_ScrollToTop = (ScrollToTop);

// EXTERNAL MODULE: external "@sanity/block-content-to-react"
var block_content_to_react_ = __webpack_require__(4836);
var block_content_to_react_default = /*#__PURE__*/__webpack_require__.n(block_content_to_react_);
;// CONCATENATED MODULE: ./components/Footer.js
//Footer.js
/**
 * @jest-environment jsdom
 */ 







const serializers = {
    types: {
        code: (props)=>/*#__PURE__*/ jsx_runtime_.jsx("pre", {
                "data-language": props.node.language,
                children: /*#__PURE__*/ jsx_runtime_.jsx("code", {
                    children: props.node.code
                })
            })
    },
    marks: {
        link: ({ mark , children  })=>{
            // Read https://css-tricks.com/use-target_blank/
            const { blank , href  } = mark;
            return blank ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: href,
                target: "_blank",
                rel: "noreferrer",
                children: children
            }) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: href,
                children: children
            });
        }
    }
};
function Footer(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "footertitle",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_typing_animation_default()), {
                            startDelay: 1000,
                            children: props.footertitle
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_ScrollToTop, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "left",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footerheader",
                                children: "Menu"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "menulinks",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((block_content_to_react_default()), {
                                    blocks: props.footermenu,
                                    serializers: serializers
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "right",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footerheader",
                                children: "Contact"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "contactlinks",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: props.emaillink,
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/Email.png",
                                                    height: 74,
                                                    width: 120
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: props.facebooklink,
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/Fb.png",
                                                    height: 74,
                                                    width: 200
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: props.iglink,
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/Instagram.png",
                                                    height: 74,
                                                    width: 220
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;