"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/InactivityTimer.js":
/*!***************************************!*\
  !*** ./components/InactivityTimer.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ \"./node_modules/@auth0/nextjs-auth0/dist/index.browser.js\");\n/* harmony import */ var react_idle_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-idle-timer */ \"./node_modules/react-idle-timer/dist/index.es.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar InactivityTimerComponent = function() {\n    _s();\n    var user = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__.useUser)().user;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), modalOpen = ref[0], setModalOpen = ref[1];\n    var inActiveTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var sessTimeOutRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    //Opens the idle timer modal after 3 minutes of inactivity\n    var onIdle = function() {\n        setModalOpen(true);\n        sessTimeOutRef.current = setTimeout(logout, 180 * 1000);\n    };\n    var handleClose = function() {\n        clearTimeout(sessTimeOutRef.current);\n        setModalOpen(false);\n    };\n    var active = function() {\n        clearTimeout(sessTimeOutRef.current);\n        setModalOpen(false);\n    };\n    var logout = function() {\n        clearTimeout(sessTimeOutRef.current);\n        window.location = \"api/auth/logout\";\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                    show: modalOpen,\n                    onHide: handleClose,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal.Header, {\n                            closeButton: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal.Title, {\n                                children: \"You Have Been Idle!\"\n                            }, void 0, false, {\n                                fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\InactivityTimer.js\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\InactivityTimer.js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal.Body, {\n                            children: \"Due to prolonged in-activity you are going to be logged-out, Do you want to stay?\"\n                        }, void 0, false, {\n                            fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\InactivityTimer.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal.Footer, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    variant: \"danger\",\n                                    onClick: logout,\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\InactivityTimer.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    variant: \"primary\",\n                                    onClick: active,\n                                    children: \"Stay\"\n                                }, void 0, false, {\n                                    fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\InactivityTimer.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\InactivityTimer.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\InactivityTimer.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_idle_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    ref: inActiveTimerRef,\n                    timeout: 180 * 1000,\n                    onIdle: onIdle\n                }, void 0, false, {\n                    fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\InactivityTimer.js\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\InactivityTimer.js\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\InactivityTimer.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, _this));\n};\n_s(InactivityTimerComponent, \"6g1FgBnkLLSsPGGSB6GSrAjpSYA=\", false, function() {\n    return [\n        _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_2__.useUser\n    ];\n});\n_c = InactivityTimerComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InactivityTimerComponent);\nvar _c;\n$RefreshReg$(_c, \"InactivityTimerComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0luYWN0aXZpdHlUaW1lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBQ0E7QUFDTDtBQUNPOzs7QUFHL0MsR0FBSyxDQUFDTyx3QkFBd0IsR0FBRyxRQUFRLEdBQUYsQ0FBQzs7SUFDcEMsR0FBSyxDQUFFQyxJQUFJLEdBQUlMLDREQUFPLEdBQWZLLElBQUk7SUFDWCxHQUFLLENBQTJCTixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUF2Q08sU0FBUyxHQUFnQlAsR0FBZSxLQUE3QlEsWUFBWSxHQUFFUixHQUFlO0lBQy9DLEdBQUssQ0FBQ1MsZ0JBQWdCLEdBQUNWLDZDQUFNLENBQUMsSUFBSTtJQUNsQyxHQUFLLENBQUNXLGNBQWMsR0FBQ1gsNkNBQU0sQ0FBQyxJQUFJO0lBRWhDLEVBQTBEO0lBQzFELEdBQUssQ0FBQ1ksTUFBTSxHQUFDLFFBQ2hCLEdBRG9CLENBQUM7UUFDZEgsWUFBWSxDQUFDLElBQUk7UUFDakJFLGNBQWMsQ0FBQ0UsT0FBTyxHQUFDQyxVQUFVLENBQUNDLE1BQU0sRUFBQyxHQUFHLEdBQUMsSUFBSTtJQUNyRCxDQUFDO0lBQ0QsR0FBSyxDQUFDQyxXQUFXLEdBQUUsUUFBUSxHQUFGLENBQUM7UUFDdEJDLFlBQVksQ0FBQ04sY0FBYyxDQUFDRSxPQUFPO1FBQ25DSixZQUFZLENBQUMsS0FBSztJQUN0QixDQUFDO0lBQ0QsR0FBSyxDQUFDUyxNQUFNLEdBQUMsUUFDaEIsR0FEb0IsQ0FBQztRQUNkRCxZQUFZLENBQUNOLGNBQWMsQ0FBQ0UsT0FBTztRQUNuQ0osWUFBWSxDQUFDLEtBQUs7SUFDdEIsQ0FBQztJQUNELEdBQUssQ0FBQ00sTUFBTSxHQUFDLFFBQ2hCLEdBRG9CLENBQUM7UUFDZEUsWUFBWSxDQUFDTixjQUFjLENBQUNFLE9BQU87UUFDbkNNLE1BQU0sQ0FBQ0MsUUFBUSxHQUFDLENBQWlCO0lBQ3JDLENBQUM7SUFDRCxNQUFNLDZFQUNEQyxDQUFHO2tCQUNDZCxJQUFJLGdGQUNKYyxDQUFHOzs0RkFDQ2hCLGtEQUFLO29CQUFDaUIsSUFBSSxFQUFFZCxTQUFTO29CQUFFZSxNQUFNLEVBQUVQLFdBQVc7O29HQUN0Q1gseURBQVk7NEJBQUNvQixXQUFXO2tIQUNwQnBCLHdEQUFXOzBDQUFDLENBQW1COzs7Ozs7Ozs7OztvR0FFbkNBLHVEQUFVO3NDQUFDLENBQWlGOzs7Ozs7b0dBQzVGQSx5REFBWTs7NEdBQ1JELG1EQUFNO29DQUFDeUIsT0FBTyxFQUFDLENBQVE7b0NBQUNDLE9BQU8sRUFBRWYsTUFBTTs4Q0FBRSxDQUFNOzs7Ozs7NEdBQy9DWCxtREFBTTtvQ0FBQ3lCLE9BQU8sRUFBQyxDQUFTO29DQUFDQyxPQUFPLEVBQUVaLE1BQU07OENBQUUsQ0FFM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFHUGYsd0RBQVM7b0JBQUM0QixHQUFHLEVBQUVyQixnQkFBZ0I7b0JBQUVzQixPQUFPLEVBQUUsR0FBRyxHQUFDLElBQUk7b0JBQUVwQixNQUFNLEVBQUVBLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25GLENBQUM7R0E1Q0tOLHdCQUF3Qjs7UUFDWEosd0RBQU87OztLQURwQkksd0JBQXdCO0FBOEM5QiwrREFBZUEsd0JBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW5hY3Rpdml0eVRpbWVyLmpzPzZmN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICdAYXV0aDAvbmV4dGpzLWF1dGgwJ1xyXG5pbXBvcnQgSWRsZVRpbWVyIGZyb20gJ3JlYWN0LWlkbGUtdGltZXInXHJcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcblxyXG5cclxuY29uc3QgSW5hY3Rpdml0eVRpbWVyQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlVXNlcigpXHJcbiAgICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dPXVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgaW5BY3RpdmVUaW1lclJlZj11c2VSZWYobnVsbClcclxuICAgIGNvbnN0IHNlc3NUaW1lT3V0UmVmPXVzZVJlZihudWxsKVxyXG5cclxuICAgIC8vT3BlbnMgdGhlIGlkbGUgdGltZXIgbW9kYWwgYWZ0ZXIgMyBtaW51dGVzIG9mIGluYWN0aXZpdHlcclxuICAgIGNvbnN0IG9uSWRsZT0oKT0+e1xyXG4gICAgICAgIHNldE1vZGFsT3Blbih0cnVlKVxyXG4gICAgICAgIHNlc3NUaW1lT3V0UmVmLmN1cnJlbnQ9c2V0VGltZW91dChsb2dvdXQsMTgwKjEwMDApXHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9KCkgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChzZXNzVGltZU91dFJlZi5jdXJyZW50KVxyXG4gICAgICAgIHNldE1vZGFsT3BlbihmYWxzZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFjdGl2ZT0oKT0+e1xyXG4gICAgICAgIGNsZWFyVGltZW91dChzZXNzVGltZU91dFJlZi5jdXJyZW50KVxyXG4gICAgICAgIHNldE1vZGFsT3BlbihmYWxzZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGxvZ291dD0oKT0+e1xyXG4gICAgICAgIGNsZWFyVGltZW91dChzZXNzVGltZU91dFJlZi5jdXJyZW50KVxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbj1cImFwaS9hdXRoL2xvZ291dFwiXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3VzZXIgJiYoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgc2hvdz17bW9kYWxPcGVufSBvbkhpZGU9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWwuVGl0bGU+WW91IEhhdmUgQmVlbiBJZGxlITwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+RHVlIHRvIHByb2xvbmdlZCBpbi1hY3Rpdml0eSB5b3UgYXJlIGdvaW5nIHRvIGJlIGxvZ2dlZC1vdXQsIERvIHlvdSB3YW50IHRvIHN0YXk/PC9Nb2RhbC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0nZGFuZ2VyJyBvbkNsaWNrPXtsb2dvdXR9PkxvZ291dDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YWN0aXZlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgPElkbGVUaW1lciByZWY9e2luQWN0aXZlVGltZXJSZWZ9IHRpbWVvdXQ9ezE4MCoxMDAwfSBvbklkbGU9e29uSWRsZX0+PC9JZGxlVGltZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmFjdGl2aXR5VGltZXJDb21wb25lbnQiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVVzZXIiLCJJZGxlVGltZXIiLCJCdXR0b24iLCJNb2RhbCIsIkluYWN0aXZpdHlUaW1lckNvbXBvbmVudCIsInVzZXIiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJpbkFjdGl2ZVRpbWVyUmVmIiwic2Vzc1RpbWVPdXRSZWYiLCJvbklkbGUiLCJjdXJyZW50Iiwic2V0VGltZW91dCIsImxvZ291dCIsImhhbmRsZUNsb3NlIiwiY2xlYXJUaW1lb3V0IiwiYWN0aXZlIiwid2luZG93IiwibG9jYXRpb24iLCJkaXYiLCJzaG93Iiwib25IaWRlIiwiSGVhZGVyIiwiY2xvc2VCdXR0b24iLCJUaXRsZSIsIkJvZHkiLCJGb290ZXIiLCJ2YXJpYW50Iiwib25DbGljayIsInJlZiIsInRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/InactivityTimer.js\n");

/***/ })

});