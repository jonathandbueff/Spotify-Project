webpackHotUpdate("static/development/pages/friendProfile.js",{

/***/ "./comps/sideBar.js":
/*!**************************!*\
  !*** ./comps/sideBar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _comps_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/search */ "./comps/search.js");
/* harmony import */ var _comps_userLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/userLink */ "./comps/userLink.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/sideBar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var SideBar = function SideBar(props) {
  return __jsx("div", {
    className: "jsx-767442624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-767442624" + " " + "sideBarBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-767442624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Search"), __jsx(_comps_search__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "seachBarMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-767442624",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Other Users"), __jsx("ul", {
    className: "jsx-767442624" + " " + "otherUsersList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.data.allUsers.map(function (p) {
    return __jsx("li", {
      key: p.username,
      className: "jsx-767442624" + " " + "userListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx(_comps_userLink__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, p, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    })));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "767442624",
    __self: this
  }, ".otherUsersList.jsx-767442624{list-style-type:none;margin:0;}.searchBarMain.jsx-767442624{position:fixed;}.sideBarBox.jsx-767442624{padding:0;margin:0;height:100vh;color:#1DB954;background:black;position:fixed;width:25vw;padding-left:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvc2lkZUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjZ0IsQUFHMkIsQUFJTixBQUdOLFVBQ0QsS0FIVCxJQUlhLEVBUkgsU0FDVixFQVFjLGNBQ0csaUJBQ0YsZUFDSixXQUNNLGlCQUVuQiIsImZpbGUiOiIvaG9tZS9qb2UvcHVibGljX2h0bWwvY3JlYXRpdmVwcm9qZWN0LTdqb2Utam9uL2NvbXBzL3NpZGVCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VhcmNoIGZyb20gJy4uL2NvbXBzL3NlYXJjaCc7XHJcbmltcG9ydCBVc2VyTGluayBmcm9tICcuLi9jb21wcy91c2VyTGluayc7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuY29uc3QgU2lkZUJhciA9IHByb3BzID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlQmFyQm94XCI+XHJcbiAgICAgICAgPGgzPlNlYXJjaDwvaDM+XHJcbiAgICAgICAgPFNlYXJjaCBjbGFzc05hbWU9XCJzZWFjaEJhck1haW5cIi8+XHJcbiAgICAgICAgPGgzPk90aGVyIFVzZXJzPC9oMz5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwib3RoZXJVc2Vyc0xpc3RcIj5cclxuICAgICAgICB7cHJvcHMuZGF0YS5hbGxVc2Vycy5tYXAocCA9PiAoPGxpIGNsYXNzTmFtZSA9XCJ1c2VyTGlzdEl0ZW1cIiBrZXk9e3AudXNlcm5hbWV9PjxVc2VyTGluayB7Li4ucH0vPjwvbGk+KSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIC5vdGhlclVzZXJzTGlzdHtcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbiAgICAgIG1hcmdpbjowO1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaEJhck1haW57XHJcbiAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgfVxyXG4gICAgLnNpZGVCYXJCb3h7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGNvbG9yOiAjMURCOTU0O1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMjV2dztcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG5cclxuICB9XHJcbiAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7Il19 */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/sideBar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ })

})
//# sourceMappingURL=friendProfile.js.620c845a70dc76b6f8f4.hot-update.js.map