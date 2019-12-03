webpackHotUpdate("static/development/pages/playlistDisplay.js",{

/***/ "./comps/playlistPage.js":
/*!*******************************!*\
  !*** ./comps/playlistPage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _song__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./song */ "./comps/song.js");
/* harmony import */ var _playlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playlist */ "./comps/playlist.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search */ "./comps/search.js");
var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/playlistPage.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var PlaylistPage = function PlaylistPage(props) {
  return __jsx("div", {
    className: "jsx-2951719786",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2951719786" + " " + "playlistHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2951719786" + " " + "playlistHeadText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h3", {
    id: "playlistHere",
    className: "jsx-2951719786",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.data.playlist), __jsx("p", {
    id: "playlistCreator",
    className: "jsx-2951719786",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.data.creator), __jsx("button", {
    className: "jsx-2951719786" + " " + "createBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Follow"))), __jsx("div", {
    className: "jsx-2951719786" + " " + "recentlyMostPlayed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-2951719786" + " " + "recentlyMostPlayedHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Tracks"), __jsx("ol", {
    className: "jsx-2951719786" + " " + "songList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, console.log(props.data.tracks.name))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2951719786",
    __self: this
  }, ".playlistListTitle.jsx-2951719786{margin:0;padding-bottom:5px;padding-top:5px;text-align:center;color:#1DB954;}.playlistContainer.jsx-2951719786{font-family:console,monospace;margin:0px;background:black;width:75%;left:0;position:absolute;top:calc(35vh + 230.4px);}.playlistListItem.jsx-2951719786{margin:0px;padding-bottom:10px;color:#FFF;}.playlistHead.jsx-2951719786{width:75vw;height:35vh;position:absolute;left:0;top:50px;font-family:console,monospace;}.recentlyMostPlayed.jsx-2951719786{background:black;color:#1DB954;width:75%;position:absolute;top:calc(35vh + 50px);left:0;font-family:console,monospace;}.recentlyMostPlayedHead.jsx-2951719786{margin:0;padding-top:5px;padding-bottom:5px;text-align:center;}.createBtn.jsx-2951719786{position:absolute;font-family:console,monospace;left:calc( 37.5vw - 211.46px / 2);background:#1DB954;color:#FFF;font-size:14px;border:none;border-radius:500px;padding:16px 48px 18px;-webkit-transition:background 0.4s;-webkit-transition-duration:background 0.4s;transition-duration:background 0.4s;}.playlistHeadText.jsx-2951719786{margin:0px;padding:0px;text-align:center;position:relative;color:white;top:calc( 35vh - 155px);text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;}.songList.jsx-2951719786{margin:0px;padding-bottom:10px;}.songListItem.jsx-2951719786{margin:0px;padding-bottom:10px;color:white;}.createBtn.jsx-2951719786:hover{background:black;color:#1DB954;}.playlist.jsx-2951719786{margin:0px;padding-bottom:10px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcGxheWxpc3RQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCa0IsQUFHaUIsQUFPcUIsQUFTckIsQUFLQyxBQVVNLEFBV1IsQUFNVyxBQWNULEFBU0EsQUFLRCxBQU9PLEFBSVAsU0F0RlcsQUEwQ0wsRUExQkksQUFLUixBQXlDQSxBQVVRLEFBSUEsQUFXQSxNQXhETixBQW9EQSxDQW5DbUIsS0F6QmYsQUF3Q0EsRUFwQkMsR0ExQ0QsRUFNUCxDQVVELEFBZ0JBLEFBd0NaLEFBS2MsQUFNZCxBQUtjLFVBakZLLEFBZ0JYLEFBVVksQUE4QkEsQ0E5Q3BCLENBOERBLEFBV0EsQ0F6RnFCLEFBMENGLElBbkJSLEFBd0IyQixTQXZCTCxDQWpCckIsQ0EwQlksQUE4QlYsR0E5REksQUEwQ2xCLE1BbkNTLEdBd0RpQixJQXZEUCxDQVBqQixLQWdDTSxDQWVjLEtBdkJ0QixDQVNpQyxLQXpCTixFQXVEd0MsTUFmcEQsV0FDSSxNQXhDbkIsQUEwQkEsU0FlZ0IsWUFDUSxrQkFheEIsRUFaMkIsdUJBQ1ksbUNBQ0QsZ0ZBQ3RDIiwiZmlsZSI6Ii9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcGxheWxpc3RQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgU29uZyBmcm9tICcuL3NvbmcnO1xyXG5pbXBvcnQgUGxheWxpc3QgZnJvbSAnLi9wbGF5bGlzdCc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gnO1xyXG5cclxuY29uc3QgUGxheWxpc3RQYWdlID0gKHByb3BzKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdEhlYWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdEhlYWRUZXh0XCI+XHJcbiAgICAgIDxoMyBpZD1cInBsYXlsaXN0SGVyZVwiPntwcm9wcy5kYXRhLnBsYXlsaXN0fTwvaDM+XHJcbiAgICAgIDxwIGlkPVwicGxheWxpc3RDcmVhdG9yXCI+e3Byb3BzLmRhdGEuY3JlYXRvcn08L3A+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY3JlYXRlQnRuXCI+Rm9sbG93PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWNlbnRseU1vc3RQbGF5ZWRcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwicmVjZW50bHlNb3N0UGxheWVkSGVhZFwiPlRyYWNrczwvaDQ+XHJcbiAgICAgIDxvbCBjbGFzc05hbWUgPSBcInNvbmdMaXN0XCI+XHJcbiAgICAgICAgICB7Y29uc29sZS5sb2coKHByb3BzLmRhdGEudHJhY2tzLm5hbWUpKX1cclxuICAgICAgICB7Lyoge3Byb3BzLmRhdGEudHJhY2tzLm1hcChwID0+ICg8bGkgY2xhc3NOYW1lID1cInNvbmdMaXN0SXRlbVwiIGtleT17cC5uYW1lfT48U29uZyB7Li4ucH0vPjwvbGk+KSl9ICovfVxyXG4gICAgICA8L29sPlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInBsYXlsaXN0TGlzdFRpdGxlXCI+UGxheWxpc3RzPC9oND4gKi99XHJcbiAgICAgICAgey8qIDxhIGhyZWYgPSB7cmVkaXJlY3RfdXJpfSA+ICovfVxyXG4gICAgICAgIHsvKiA8b2wgY2xhc3NOYW1lPVwicGxheWxpc3RcIj5cclxuICAgICAgICAgIHtwcm9wcy5kYXRhLmFsbFBsYXlsaXN0cy5tYXAocCA9PiAoPGxpIGNsYXNzTmFtZSA9XCJwbGF5bGlzdExpc3RJdGVtXCIga2V5PXtwLnRpdGxlK1wiUGxheWxpc3RJdGVtXCJ9PiA8UGxheWxpc3QgY2xhc3NOYW1lPXtwLnRpdGxlfSB7Li4ucH0vPjwvbGk+KSl9XHJcbiAgICAgICAgPC9vbD4gKi99XHJcbiAgICAgICAgey8qIDwvYT4gKi99XHJcbiAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnBsYXlsaXN0TGlzdFRpdGxle1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzFEQjk1NDtcclxuICAgICAgfVxyXG4gICAgLnBsYXlsaXN0Q29udGFpbmVye1xyXG4gICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICB0b3A6IGNhbGMoMzV2aCArIDIzMC40cHgpO1xyXG4gICAgfVxyXG4gICAgLnBsYXlsaXN0TGlzdEl0ZW17XHJcbiAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICBjb2xvcjojRkZGO1xyXG4gICAgfVxyXG4gICAgLnBsYXlsaXN0SGVhZHtcclxuICAgICAgd2lkdGg6IDc1dnc7XHJcbiAgICAgIGhlaWdodDogMzV2aDtcclxuICAgICAgLy8gYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xyXG5cclxuICAgIH1cclxuICAgIC5yZWNlbnRseU1vc3RQbGF5ZWR7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICBjb2xvcjogIzFEQjk1NDtcclxuICAgICAgLy8gbWluLXdpZHRoOjc1djtcclxuICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IGNhbGMoMzV2aCArIDUwcHgpO1xyXG4gICAgICBsZWZ0OjA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBjb25zb2xlLCBtb25vc3BhY2U7XHJcblxyXG4gICAgfVxyXG4gICAgLnJlY2VudGx5TW9zdFBsYXllZEhlYWR7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY3JlYXRlQnRue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoIDM3LjV2dyAtIDIxMS40NnB4IC8gMik7XHJcbiAgICAgICAgLy8gdG9wOiBjYWxjKCAzNXZoIC0gNTVweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDojMURCOTU0O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCA0OHB4IDE4cHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHM7XHJcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IGJhY2tncm91bmQgMC40cztcclxuICAgIH1cclxuICAgIC5wbGF5bGlzdEhlYWRUZXh0e1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB0b3A6IGNhbGMoIDM1dmggLSAxNTVweCk7XHJcbiAgICAgIHRleHQtc2hhZG93OiAtMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLnNvbmdMaXN0e1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgLy8gYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnNvbmdMaXN0SXRlbXtcclxuICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDhweCAwcHggOHB4ICAxMHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICB9XHJcbiAgICAuY3JlYXRlQnRuOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgIGNvbG9yOiAjMURCOTU0OyAgICAgXHJcbiAgICB9XHJcbiAgICAucGxheWxpc3R7XHJcbiAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAvLyBwYWRkaW5nOiA4cHggMHB4IDhweCAgMTBweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgfVxyXG4gIGB9XHJcbiAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgICBcclxuICBleHBvcnQgZGVmYXVsdCBQbGF5bGlzdFBhZ2U7Il19 */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/playlistPage.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (PlaylistPage);

/***/ })

})
//# sourceMappingURL=playlistDisplay.js.815114da94549789df00.hot-update.js.map