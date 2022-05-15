"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/Passwords.js":
/*!*********************************!*\
  !*** ./components/Passwords.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _passwordPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passwordPreview */ \"./components/passwordPreview.js\");\n/* harmony import */ var _passwordEncryptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../passwordEncryptor */ \"./passwordEncryptor.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\n// The password compoennt is responsible \n// for showing the view of the passwords table on the dashboard manager page\n// It also includes the preview component which will be called (popup) if any password column is clicked on for preview\nvar Password = function(param) {\n    var id = param.id, accountName = param.accountName, accountUrl = param.accountUrl, email = param.email, password = param.password, avatar = param.avatar, handleDelete = param.handleDelete, handleEdit = param.handleEdit;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openEdit = ref[0], setOpenEdit = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), openPreview = ref1[0], setOpenPreview = ref1[1];\n    var previewPassword = function() {\n        setOpenPreview(true);\n    };\n    var editPassword = function(payload) {\n        handleEdit(payload);\n        setOpenEdit(false);\n        notification(editNotify);\n    };\n    var delNotify = 'Password successfully deleted!';\n    var editNotify = 'Password edited successfully!';\n    var notification = function(message) {\n        (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)(message, {\n            position: 'top-center',\n            autoClose: 150,\n            hideProgressBar: false,\n            closeOnClick: true,\n            pauseOnHover: true,\n            draggable: true,\n            progress: undefined\n        });\n    };\n    var deletePassword = function() {\n        handleDelete(id);\n        notification(delNotify);\n    };\n    // In the rendering of the password table and the preview component, \n    // the icon for the column is updated dynamically according to the account that is added \n    // (using its URL) (The Avatar icon for the password accountrs)\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n        sm: \"12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                style: {\n                    backgroundColor: 'white',\n                    color: 'black',\n                    margin: '5px 0px',\n                    width: '100%'\n                },\n                onClick: previewPassword,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                            sm: 1,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: \"avatar\",\n                                loader: myLoader,\n                                src: \"https://www.google.com/s2/favicons?sz=64&domain_url=\".concat(accountUrl),\n                                width: \"35\",\n                                height: \"35\",\n                                className: \"rounded-circle\"\n                            }, void 0, false, {\n                                fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n                                lineNumber: 58,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                            className: \"text-left mt-1\",\n                            children: [\n                                \"Social/Business/Personal Account : \",\n                                accountName\n                            ]\n                        }, void 0, true, {\n                            fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                            className: \"text-left mt-1\",\n                            children: [\n                                \"Associated email : \",\n                                email\n                            ]\n                        }, void 0, true, {\n                            fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                position: \"top-center\",\n                autoClose: 150,\n                hideProgressBar: false,\n                newestOnTop: false,\n                closeOnClick: true,\n                rtl: false,\n                pauseOnFocusLoss: true,\n                draggable: true,\n                pauseOnHover: true\n            }, void 0, false, {\n                fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_passwordPreview__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: id,\n                show: openPreview,\n                edit: openEdit,\n                onHideEdit: function() {\n                    setOpenEdit(false);\n                },\n                onEdit: function() {\n                    setOpenEdit(true);\n                },\n                onDelete: function() {\n                    deletePassword();\n                    setOpenPreview(false);\n                },\n                accountName: accountName,\n                accountUrl: accountUrl,\n                email: email,\n                password: password,\n                editPassword: editPassword,\n                title: \"Have a peek at the password for \" + accountName,\n                onHide: function() {\n                    setOpenPreview(false);\n                }\n            }, void 0, false, {\n                fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, _this));\n};\n_s(Password, \"HnGarLJhUC1Ra6niu0LfaSDT4EA=\");\n_c = Password;\nvar PasswordsDisplayComp = function(param) {\n    var passwords = param.passwords, handleEdit = param.handleEdit, handleDelete = param.handleDelete;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        className: \"p-3 my-5 bordered\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                    className: \"p-2 text-white\",\n                    style: {\n                        backgroundColor: \"dodgerblue\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                        xs: 12,\n                        sm: 7,\n                        className: \"pt-2\",\n                        children: [\n                            passwords ? passwords.length : 0,\n                            \" passwords present and \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"face verified\"\n                            }, void 0, false, {\n                                fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n                                lineNumber: 84,\n                                columnNumber: 71\n                            }, _this),\n                            \", List of your passwords and accounts are as follows:\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n                    lineNumber: 87,\n                    columnNumber: 14\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                    children: passwords.length > 0 ? passwords.map(function(ele) {\n                        var password = (0,_passwordEncryptor__WEBPACK_IMPORTED_MODULE_3__.decryptString)(ele.encryptedPassword);\n                        var passwordData = _objectSpread({}, ele, {\n                            password: password\n                        });\n                        return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Password, _objectSpread({}, passwordData, {\n                            key: ele.id,\n                            handleEdit: handleEdit,\n                            handleDelete: handleDelete,\n                            __source: {\n                                fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n                                lineNumber: 93,\n                                columnNumber: 28\n                            },\n                            __self: _this1\n                        })));\n                    }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"my-5 py-5 h2 display-5 w-100\",\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: \"You do not have any passwords added!\"\n                    }, void 0, false, {\n                        fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n                        lineNumber: 96,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"S:\\\\CyberVault\\\\cybervaultnext\\\\components\\\\Passwords.js\",\n        lineNumber: 80,\n        columnNumber: 9\n    }, _this));\n};\n_c1 = PasswordsDisplayComp;\nvar myLoader = function(param) {\n    var src = param.src;\n    return src;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PasswordsDisplayComp);\nvar _c, _c1;\n$RefreshReg$(_c, \"Password\");\n$RefreshReg$(_c1, \"PasswordsDisplayComp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0gsQ0FBQztNQXhCS1osb0JBQW9CO0FBMEIxQixHQUFLLENBQUNkLFFBQVEsR0FBQyxRQUFRLFFBQUMsQ0FBQztRQUFSQyxHQUFHLFNBQUhBLEdBQUc7SUFDaEIsTUFBTSxDQUFDQSxHQUFHO0FBQ2QsQ0FBQztBQUVELCtEQUFlYSxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXNzd29yZHMuanM/OTEwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFBhc3N3b3JkUHJldmlld0NvbXAgZnJvbSAnLi9wYXNzd29yZFByZXZpZXcnXHJcbmltcG9ydCB7IGRlY3J5cHRTdHJpbmcgfSBmcm9tICcuLi9wYXNzd29yZEVuY3J5cHRvcidcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcbmltcG9ydCB7IENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuaW1wb3J0IHt0b2FzdCwgVG9hc3RDb250YWluZXJ9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnXHJcblxyXG4vLyBUaGUgcGFzc3dvcmQgY29tcG9lbm50IGlzIHJlc3BvbnNpYmxlIFxyXG4vLyBmb3Igc2hvd2luZyB0aGUgdmlldyBvZiB0aGUgcGFzc3dvcmRzIHRhYmxlIG9uIHRoZSBkYXNoYm9hcmQgbWFuYWdlciBwYWdlXHJcbi8vIEl0IGFsc28gaW5jbHVkZXMgdGhlIHByZXZpZXcgY29tcG9uZW50IHdoaWNoIHdpbGwgYmUgY2FsbGVkIChwb3B1cCkgaWYgYW55IHBhc3N3b3JkIGNvbHVtbiBpcyBjbGlja2VkIG9uIGZvciBwcmV2aWV3XHJcblxyXG5jb25zdCBQYXNzd29yZCA9ICh7aWQsIGFjY291bnROYW1lLCBhY2NvdW50VXJsLCBlbWFpbCwgcGFzc3dvcmQsIGF2YXRhciwgaGFuZGxlRGVsZXRlLCBoYW5kbGVFZGl0fSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtvcGVuRWRpdCwgc2V0T3BlbkVkaXRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbb3BlblByZXZpZXcsIHNldE9wZW5QcmV2aWV3XT11c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBwcmV2aWV3UGFzc3dvcmQ9KCk9PntcclxuICAgICAgICBzZXRPcGVuUHJldmlldyh0cnVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZWRpdFBhc3N3b3JkID0gKHBheWxvYWQpID0+IHtcclxuICAgICAgICBoYW5kbGVFZGl0KHBheWxvYWQpXHJcbiAgICAgICAgc2V0T3BlbkVkaXQoZmFsc2UpXHJcbiAgICAgICAgbm90aWZpY2F0aW9uKGVkaXROb3RpZnkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsTm90aWZ5PSdQYXNzd29yZCBzdWNjZXNzZnVsbHkgZGVsZXRlZCEnXHJcbiAgICBjb25zdCBlZGl0Tm90aWZ5PSdQYXNzd29yZCBlZGl0ZWQgc3VjY2Vzc2Z1bGx5ISdcclxuXHJcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSAobWVzc2FnZSk9PntcclxuICAgICAgICB0b2FzdChtZXNzYWdlLCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOid0b3AtY2VudGVyJyxcclxuICAgICAgICAgICAgYXV0b0Nsb3NlOjE1MCxcclxuICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOmZhbHNlLFxyXG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s6dHJ1ZSxcclxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOnRydWUsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTp0cnVlLFxyXG4gICAgICAgICAgICBwcm9ncmVzczp1bmRlZmluZWQsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVQYXNzd29yZCA9ICgpID0+IHtcclxuICAgICAgICBoYW5kbGVEZWxldGUoaWQpXHJcbiAgICAgICAgbm90aWZpY2F0aW9uKGRlbE5vdGlmeSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbiB0aGUgcmVuZGVyaW5nIG9mIHRoZSBwYXNzd29yZCB0YWJsZSBhbmQgdGhlIHByZXZpZXcgY29tcG9uZW50LCBcclxuICAgIC8vIHRoZSBpY29uIGZvciB0aGUgY29sdW1uIGlzIHVwZGF0ZWQgZHluYW1pY2FsbHkgYWNjb3JkaW5nIHRvIHRoZSBhY2NvdW50IHRoYXQgaXMgYWRkZWQgXHJcbiAgICAvLyAodXNpbmcgaXRzIFVSTCkgKFRoZSBBdmF0YXIgaWNvbiBmb3IgdGhlIHBhc3N3b3JkIGFjY291bnRycylcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbCBzbT1cIjEyXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3doaXRlJywgY29sb3I6J2JsYWNrJywgbWFyZ2luOic1cHggMHB4Jywgd2lkdGg6JzEwMCUnfX0gb25DbGljaz17cHJldmlld1Bhc3N3b3JkfT5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiYXZhdGFyXCIgbG9hZGVyPXtteUxvYWRlcn0gc3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zMi9mYXZpY29ucz9zej02NCZkb21haW5fdXJsPSR7YWNjb3VudFVybH1gfSB3aWR0aD1cIjM1XCIgaGVpZ2h0PVwiMzVcIiBjbGFzc05hbWU9XCJyb3VuZGVkLWNpcmNsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgbXQtMVwiPlNvY2lhbC9CdXNpbmVzcy9QZXJzb25hbCBBY2NvdW50IDoge2FjY291bnROYW1lfTwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IG10LTFcIj5Bc3NvY2lhdGVkIGVtYWlsIDoge2VtYWlsfTwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgcG9zaXRpb249J3RvcC1jZW50ZXInIGF1dG9DbG9zZT17MTUwfSBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfSBuZXdlc3RPblRvcD17ZmFsc2V9IGNsb3NlT25DbGljayBydGw9e2ZhbHNlfSBwYXVzZU9uRm9jdXNMb3NzIGRyYWdnYWJsZSBwYXVzZU9uSG92ZXIvPlxyXG4gICAgICAgICAgICA8UGFzc3dvcmRQcmV2aWV3Q29tcCBpZD17aWR9IHNob3c9e29wZW5QcmV2aWV3fSBlZGl0PXtvcGVuRWRpdH0gb25IaWRlRWRpdD17KCk9PntzZXRPcGVuRWRpdChmYWxzZSl9fSBvbkVkaXQ9eygpPT57c2V0T3BlbkVkaXQodHJ1ZSl9fSBvbkRlbGV0ZT17KCk9PntkZWxldGVQYXNzd29yZCgpO3NldE9wZW5QcmV2aWV3KGZhbHNlKX19XHJcbiAgICAgICAgICAgIGFjY291bnROYW1lPXthY2NvdW50TmFtZX1cclxuICAgICAgICAgICAgYWNjb3VudFVybD17YWNjb3VudFVybH1cclxuICAgICAgICAgICAgZW1haWw9e2VtYWlsfVxyXG4gICAgICAgICAgICBwYXNzd29yZD17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIGVkaXRQYXNzd29yZD17ZWRpdFBhc3N3b3JkfVxyXG4gICAgICAgICAgICB0aXRsZT17XCJIYXZlIGEgcGVlayBhdCB0aGUgcGFzc3dvcmQgZm9yIFwiK2FjY291bnROYW1lfVxyXG4gICAgICAgICAgICBvbkhpZGU9eygpPT57c2V0T3BlblByZXZpZXcoZmFsc2UpfX0vPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgUGFzc3dvcmRzRGlzcGxheUNvbXAgPSAoe3Bhc3N3b3JkcywgaGFuZGxlRWRpdCwgaGFuZGxlRGVsZXRlfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInAtMyBteS01IGJvcmRlcmVkXCI+IFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwicC0yIHRleHQtd2hpdGVcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvciA6IFwiZG9kZ2VyYmx1ZVwifX0+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17N30gY2xhc3NOYW1lPVwicHQtMlwiPlxyXG4gICAgICAgICAgICAgIHtwYXNzd29yZHMgPyBwYXNzd29yZHMubGVuZ3RoOiAwfSBwYXNzd29yZHMgcHJlc2VudCBhbmQgPHN0cm9uZz5mYWNlIHZlcmlmaWVkPC9zdHJvbmc+LCBMaXN0IG9mIHlvdXIgcGFzc3dvcmRzIGFuZCBhY2NvdW50cyBhcmUgYXMgZm9sbG93czpcclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+IFxyXG4gICAgICAgIDxici8+PGJyLz5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICB7cGFzc3dvcmRzLmxlbmd0aCA+IDA/IFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRzLm1hcChlbGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkID0gZGVjcnlwdFN0cmluZyhlbGUuZW5jcnlwdGVkUGFzc3dvcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFzc3dvcmREYXRhPXsuLi5lbGUsIHBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8UGFzc3dvcmQgey4uLnBhc3N3b3JkRGF0YX0ga2V5PXtlbGUuaWR9IGhhbmRsZUVkaXQ9e2hhbmRsZUVkaXR9IGhhbmRsZURlbGV0ZT17aGFuZGxlRGVsZXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTUgcHktNSBoMiBkaXNwbGF5LTUgdy0xMDBcIiBzdHlsZT17e3RleHRBbGlnbiA6IFwiY2VudGVyXCJ9fT5Zb3UgZG8gbm90IGhhdmUgYW55IHBhc3N3b3JkcyBhZGRlZCE8L3A+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC8+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgbXlMb2FkZXI9KHtzcmN9KT0+e1xyXG4gICAgcmV0dXJuIHNyY1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZHNEaXNwbGF5Q29tcCJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsInVzZVN0YXRlIiwiUGFzc3dvcmRQcmV2aWV3Q29tcCIsImRlY3J5cHRTdHJpbmciLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJ0b2FzdCIsIlRvYXN0Q29udGFpbmVyIiwiUGFzc3dvcmQiLCJpZCIsImFjY291bnROYW1lIiwiYWNjb3VudFVybCIsImVtYWlsIiwicGFzc3dvcmQiLCJhdmF0YXIiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVFZGl0Iiwib3BlbkVkaXQiLCJzZXRPcGVuRWRpdCIsIm9wZW5QcmV2aWV3Iiwic2V0T3BlblByZXZpZXciLCJwcmV2aWV3UGFzc3dvcmQiLCJlZGl0UGFzc3dvcmQiLCJwYXlsb2FkIiwibm90aWZpY2F0aW9uIiwiZWRpdE5vdGlmeSIsImRlbE5vdGlmeSIsIm1lc3NhZ2UiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2dyZXNzIiwidW5kZWZpbmVkIiwiZGVsZXRlUGFzc3dvcmQiLCJzbSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJtYXJnaW4iLCJ3aWR0aCIsIm9uQ2xpY2siLCJpbWciLCJhbHQiLCJsb2FkZXIiLCJteUxvYWRlciIsInNyYyIsImhlaWdodCIsImNsYXNzTmFtZSIsIm5ld2VzdE9uVG9wIiwicnRsIiwicGF1c2VPbkZvY3VzTG9zcyIsInNob3ciLCJlZGl0Iiwib25IaWRlRWRpdCIsIm9uRWRpdCIsIm9uRGVsZXRlIiwidGl0bGUiLCJvbkhpZGUiLCJQYXNzd29yZHNEaXNwbGF5Q29tcCIsInBhc3N3b3JkcyIsInhzIiwibGVuZ3RoIiwic3Ryb25nIiwiYnIiLCJtYXAiLCJlbGUiLCJlbmNyeXB0ZWRQYXNzd29yZCIsInBhc3N3b3JkRGF0YSIsImtleSIsInAiLCJ0ZXh0QWxpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Passwords.js\n");

/***/ })

});