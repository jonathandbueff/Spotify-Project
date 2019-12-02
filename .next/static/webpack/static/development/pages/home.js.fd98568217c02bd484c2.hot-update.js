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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/sideBar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var SideBar = function SideBar(props) {
  return __jsx("div", {
    className: "jsx-2851883919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2851883919" + " " + "sideBarBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2851883919",
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
    className: "jsx-2851883919",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Other Users"), __jsx("ul", {
    className: "jsx-2851883919" + " " + "otherUsersList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.data.allUsers.map(function (p) {
    return __jsx("li", {
      key: p.username,
      className: "jsx-2851883919" + " " + "userListItem",
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
    id: "2851883919",
    __self: this
  }, ".otherUsersList.jsx-2851883919{width:25%;}.searchBarMain.jsx-2851883919{position:fixed;}.sideBarBox.jsx-2851883919{padding:0;margin:0;height:100vh;color:#1DB954;background:black;position:fixed;width:25%;padding-left:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvc2lkZUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjZ0IsQUFHZ0IsQUFHSyxBQUdOLFVBTFYsQUFNUyxLQUhULElBSWEsYUFDQyxjQUNHLGlCQUNGLGVBQ0wsVUFDTyxpQkFFbkIiLCJmaWxlIjoiL2hvbWUvam9lL3B1YmxpY19odG1sL2NyZWF0aXZlcHJvamVjdC03am9lLWpvbi9jb21wcy9zaWRlQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlYXJjaCBmcm9tICcuLi9jb21wcy9zZWFyY2gnO1xyXG5pbXBvcnQgVXNlckxpbmsgZnJvbSAnLi4vY29tcHMvdXNlckxpbmsnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmNvbnN0IFNpZGVCYXIgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZUJhckJveFwiPlxyXG4gICAgICAgIDxoMz5TZWFyY2g8L2gzPlxyXG4gICAgICAgIDxTZWFyY2ggY2xhc3NOYW1lPVwic2VhY2hCYXJNYWluXCIvPlxyXG4gICAgICAgIDxoMz5PdGhlciBVc2VyczwvaDM+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm90aGVyVXNlcnNMaXN0XCI+XHJcbiAgICAgICAge3Byb3BzLmRhdGEuYWxsVXNlcnMubWFwKHAgPT4gKDxsaSBjbGFzc05hbWUgPVwidXNlckxpc3RJdGVtXCIga2V5PXtwLnVzZXJuYW1lfT48VXNlckxpbmsgey4uLnB9Lz48L2xpPikpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAub3RoZXJVc2Vyc0xpc3R7XHJcbiAgICAgIHdpZHRoOjI1JTtcclxuICAgIH1cclxuICAgIC5zZWFyY2hCYXJNYWlue1xyXG4gICAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIH1cclxuICAgIC5zaWRlQmFyQm94e1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBjb2xvcjogIzFEQjk1NDtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG5cclxuICB9XHJcbiAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7Il19 */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/sideBar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ })

})
//# sourceMappingURL=home.js.fd98568217c02bd484c2.hot-update.js.map