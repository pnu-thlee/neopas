"use strict";(self.webpackChunkpas_client=self.webpackChunkpas_client||[]).push([[929],{794:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2619);\n/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6182);\n/* harmony import */ var gravatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gravatar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6245);\n\n\n\n\n\n// interface Props {\n//   user: IUser;\n// }\nconst Header = () => {\n  const token = localStorage.getItem(\'user\');\n  const currentUserId = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(token).userId;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__/* .HeaderWrapper */ .Pz, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Wrapper */ .im, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "logo"\n  }, "NeoPAS (Programming Assistant System)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "right"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__/* .ProfileImg */ .rE, {\n    src: gravatar__WEBPACK_IMPORTED_MODULE_2___default().url(currentUserId, {\n      size: \'28px\',\n      default: \'retro\'\n    })\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__/* .Spacer */ .LZ, null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://pas-client/./components/Header/index.tsx?')},2619:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "Pz": () => (/* binding */ HeaderWrapper),\n  "rE": () => (/* binding */ ProfileImg),\n  "LZ": () => (/* binding */ Spacer),\n  "im": () => (/* binding */ Wrapper)\n});\n\n// UNUSED EXPORTS: UserInfo\n\n// EXTERNAL MODULE: ./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules\nvar emotion_styled_base_browser_esm = __webpack_require__(5366);\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(7294);\n;// CONCATENATED MODULE: ./components/Responsive/index.tsx\n\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }\n\n\n\nconst ResponsiveWrapper = (0,emotion_styled_base_browser_esm/* default */.Z)("div",  true ? {\n  target: "e1spaocj0"\n} : 0)( true ? {\n  name: "3gs3lv",\n  styles: "padding-left:1rem;padding-right:1rem;margin:0 auto;@media (max-width: 1024px){min-width:768px;}@media (max-width: 768px){width:100%;}"\n} : 0);\n\nconst Responsive = ({\n  children,\n  ...rest\n}) => {\n  return /*#__PURE__*/react.createElement(ResponsiveWrapper, rest, children);\n};\n\n/* harmony default export */ const components_Responsive = (Responsive);\n;// CONCATENATED MODULE: ./components/Header/styles.tsx\n\n\nfunction styles_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }\n\n\nconst HeaderWrapper = (0,emotion_styled_base_browser_esm/* default */.Z)("header",  true ? {\n  target: "e1necq0t4"\n} : 0)( true ? {\n  name: "cekj0j",\n  styles: "position:fixed;width:100vw;box-shadow:0px 2px 4px rgba(0, 0, 0, 0.08);border-bottom:1px rgb(68, 76, 86) solid;z-index:628"\n} : 0);\nconst Wrapper = /*#__PURE__*/(0,emotion_styled_base_browser_esm/* default */.Z)(components_Responsive,  true ? {\n  target: "e1necq0t3"\n} : 0)( true ? {\n  name: "19ai3tf",\n  styles: "width:inherit;height:4rem;display:flex;background:#292F36;align-items:center;justify-content:space-between;.logo{color:white;font-size:1.5rem;letter-spacing:0.5px;}.right{display:flex;align-items:center;}"\n} : 0);\nconst Spacer = (0,emotion_styled_base_browser_esm/* default */.Z)("div",  true ? {\n  target: "e1necq0t2"\n} : 0)( true ? {\n  name: "p13mol",\n  styles: "height:4rem"\n} : 0);\nconst UserInfo = (0,emotion_styled_base_browser_esm/* default */.Z)("div",  true ? {\n  target: "e1necq0t1"\n} : 0)( true ? {\n  name: "wqzysi",\n  styles: "font-weight:800;margin-right:1rem"\n} : 0);\nconst ProfileImg = (0,emotion_styled_base_browser_esm/* default */.Z)("img",  true ? {\n  target: "e1necq0t0"\n} : 0)( true ? {\n  name: "1nux1s3",\n  styles: "display:block;margin:0 auto;width:2.5rem;height:2.5rem;border-radius:50%!important;box-shadow:0 1px 3px rgba(0, 0, 0, 0.12),0 1px 2px rgba(0, 0, 0, 0.24);transition:all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);&:hover{box-shadow:0 14px 28px rgba(0, 0, 0, 0.25),0 10px 10px rgba(0, 0, 0, 0.22);}"\n} : 0);\n\n//# sourceURL=webpack://pas-client/./components/Header/styles.tsx_+_1_modules?')},3929:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": () => (/* binding */ layouts_Lobby)\n});\n\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(7294);\n// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js\nvar react_router_dom = __webpack_require__(3727);\n// EXTERNAL MODULE: ./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js + 1 modules\nvar emotion_styled_base_browser_esm = __webpack_require__(5366);\n;// CONCATENATED MODULE: ./components/Url/styles.tsx\n\n\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }\n\nconst Wrap = (0,emotion_styled_base_browser_esm/* default */.Z)("div",  true ? {\n  target: "e1evbxxq3"\n} : 0)( true ? {\n  name: "y1f223",\n  styles: "margin:auto"\n} : 0);\nconst TextInputField = (0,emotion_styled_base_browser_esm/* default */.Z)("div",  true ? {\n  target: "e1evbxxq2"\n} : 0)( true ? {\n  name: "3hn0zo",\n  styles: "height:3rem;line-height:3rem;border-radius:7px;font-size:20px;background:rgb(30, 34, 40)"\n} : 0);\nconst EnterRoomBtn = (0,emotion_styled_base_browser_esm/* default */.Z)("div",  true ? {\n  target: "e1evbxxq1"\n} : 0)( true ? {\n  name: "aiiijn",\n  styles: "width:300;margin-left:auto;margin-right:auto;margin-top:20px;padding:24px 12px;font-size:20px;background:#ffff;font-weight:600;text-align:center;border-radius:7px"\n} : 0);\nconst Text = (0,emotion_styled_base_browser_esm/* default */.Z)("p",  true ? {\n  target: "e1evbxxq0"\n} : 0)( true ? {\n  name: "l1ld0o",\n  styles: "text-align:center;color:#ddd"\n} : 0);\n;// CONCATENATED MODULE: ./components/Url/index.tsx\n\n\n\n\nconst Url = () => {\n  const [roomID, setRoomID] = (0,react.useState)(\'\');\n  const handleRoomNameChange = (0,react.useCallback)(e => {\n    setRoomID(e.currentTarget.value);\n  }, [roomID]);\n  return /*#__PURE__*/react.createElement("div", {\n    style: {\n      display: \'flex\',\n      flexDirection: \'column\',\n      flex: \'1\',\n      height: \'calc(100vh - 4rem)\'\n    }\n  }, /*#__PURE__*/react.createElement(Wrap, null, /*#__PURE__*/react.createElement(EnterRoomBtn, null, /*#__PURE__*/react.createElement("input", {\n    type: "text",\n    placeholder: "Playground \\uC774\\uB984 \\uC124\\uC815",\n    value: roomID,\n    onChange: handleRoomNameChange\n  })), /*#__PURE__*/react.createElement(TextInputField, null, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {\n    to: `/${roomID}`,\n    style: {\n      textDecoration: \'none\'\n    }\n  }, /*#__PURE__*/react.createElement(Text, null, "Playground \\uCC38\\uAC00")))));\n};\n\n/* harmony default export */ const components_Url = (Url);\n// EXTERNAL MODULE: ./components/Header/index.tsx\nvar Header = __webpack_require__(794);\n// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules\nvar react_router = __webpack_require__(5977);\n;// CONCATENATED MODULE: ./layouts/Lobby/index.tsx\n\n\n\n\n\nconst Lobby = () => {\n  // JWT 토큰이 있는지 확인하고\n  if (!localStorage.getItem(\'user\')) {\n    return /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {\n      to: "/login"\n    });\n  }\n\n  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Header/* default */.Z, null), /*#__PURE__*/react.createElement("div", {\n    style: {\n      display: \'flex\',\n      background: \'#292F36\'\n    }\n  }, /*#__PURE__*/react.createElement(components_Url, null)));\n};\n\n/* harmony default export */ const layouts_Lobby = (Lobby);\n\n//# sourceURL=webpack://pas-client/./layouts/Lobby/index.tsx_+_2_modules?')}}]);