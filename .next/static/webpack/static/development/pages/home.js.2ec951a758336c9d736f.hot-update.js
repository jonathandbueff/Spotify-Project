webpackHotUpdate("static/development/pages/home.js",{

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

var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/sideBar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // import Link from "next/link";

var SideBar = function SideBar(props) {
  return __jsx("div", {
    className: "jsx-416171661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-416171661" + " " + "sideBarBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-416171661",
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
    className: "jsx-416171661",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Other Users"), __jsx("ul", {
    className: "jsx-416171661" + " " + "otherUsersList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.data.allUsers.map(function (p) {
    return __jsx("li", {
      key: p.username + "userItem",
      className: "jsx-416171661" + " " + "userListItem",
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
    id: "416171661",
    __self: this
  }, ".otherUsersList.jsx-416171661{list-style-type:none;margin:0;max-width:25vw;}.searchBarMain.jsx-416171661{position:fixed;}.sideBarBox.jsx-416171661{padding:0;margin:0;height:100vh;color:#1DB954;background:black;position:fixed;width:25vw;padding-left:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvc2lkZUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjZ0IsQUFHMkIsQUFLTixBQUdOLFVBQ0QsS0FIVCxJQUlhLEVBVEgsU0FDTyxFQVNILGFBUmQsQ0FTaUIsaUJBQ0YsZUFDSixXQUNNLGlCQUVuQiIsImZpbGUiOiIvaG9tZS9qb2UvcHVibGljX2h0bWwvY3JlYXRpdmVwcm9qZWN0LTdqb2Utam9uL2NvbXBzL3NpZGVCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VhcmNoIGZyb20gJy4uL2NvbXBzL3NlYXJjaCc7XHJcbmltcG9ydCBVc2VyTGluayBmcm9tICcuLi9jb21wcy91c2VyTGluayc7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuY29uc3QgU2lkZUJhciA9IHByb3BzID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlQmFyQm94XCI+XHJcbiAgICAgICAgPGgzPlNlYXJjaDwvaDM+XHJcbiAgICAgICAgPFNlYXJjaCBjbGFzc05hbWU9XCJzZWFjaEJhck1haW5cIi8+XHJcbiAgICAgICAgPGgzPk90aGVyIFVzZXJzPC9oMz5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwib3RoZXJVc2Vyc0xpc3RcIj5cclxuICAgICAgICB7cHJvcHMuZGF0YS5hbGxVc2Vycy5tYXAocCA9PiAoPGxpIGNsYXNzTmFtZSA9XCJ1c2VyTGlzdEl0ZW1cIiBrZXk9e3AudXNlcm5hbWUrXCJ1c2VySXRlbVwifT48VXNlckxpbmsgIHsuLi5wfS8+PC9saT4pKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgLm90aGVyVXNlcnNMaXN0e1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6bm9uZTtcclxuICAgICAgbWFyZ2luOjA7XHJcbiAgICAgIG1heC13aWR0aDogMjV2dztcclxuICAgIH1cclxuICAgIC5zZWFyY2hCYXJNYWlue1xyXG4gICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIH1cclxuICAgIC5zaWRlQmFyQm94e1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBjb2xvcjogIzFEQjk1NDtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDI1dnc7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuXHJcbiAgfVxyXG4gICAgYH1cclxuICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyOyJdfQ== */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/sideBar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ })

})
//# sourceMappingURL=home.js.2ec951a758336c9d736f.hot-update.js.map