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
  }, console.log(props.data.tracks))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2951719786",
    __self: this
  }, ".playlistListTitle.jsx-2951719786{margin:0;padding-bottom:5px;padding-top:5px;text-align:center;color:#1DB954;}.playlistContainer.jsx-2951719786{font-family:console,monospace;margin:0px;background:black;width:75%;left:0;position:absolute;top:calc(35vh + 230.4px);}.playlistListItem.jsx-2951719786{margin:0px;padding-bottom:10px;color:#FFF;}.playlistHead.jsx-2951719786{width:75vw;height:35vh;position:absolute;left:0;top:50px;font-family:console,monospace;}.recentlyMostPlayed.jsx-2951719786{background:black;color:#1DB954;width:75%;position:absolute;top:calc(35vh + 50px);left:0;font-family:console,monospace;}.recentlyMostPlayedHead.jsx-2951719786{margin:0;padding-top:5px;padding-bottom:5px;text-align:center;}.createBtn.jsx-2951719786{position:absolute;font-family:console,monospace;left:calc( 37.5vw - 211.46px / 2);background:#1DB954;color:#FFF;font-size:14px;border:none;border-radius:500px;padding:16px 48px 18px;-webkit-transition:background 0.4s;-webkit-transition-duration:background 0.4s;transition-duration:background 0.4s;}.playlistHeadText.jsx-2951719786{margin:0px;padding:0px;text-align:center;position:relative;color:white;top:calc( 35vh - 155px);text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;}.songList.jsx-2951719786{margin:0px;padding-bottom:10px;}.songListItem.jsx-2951719786{margin:0px;padding-bottom:10px;color:white;}.createBtn.jsx-2951719786:hover{background:black;color:#1DB954;}.playlist.jsx-2951719786{margin:0px;padding-bottom:10px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcGxheWxpc3RQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCa0IsQUFHaUIsQUFPcUIsQUFTckIsQUFLQyxBQVVNLEFBV1IsQUFNVyxBQWNULEFBU0EsQUFLRCxBQU9PLEFBSVAsU0F0RlcsQUEwQ0wsRUExQkksQUFLUixBQXlDQSxBQVVRLEFBSUEsQUFXQSxNQXhETixBQW9EQSxDQW5DbUIsS0F6QmYsQUF3Q0EsRUFwQkMsR0ExQ0QsRUFNUCxDQVVELEFBZ0JBLEFBd0NaLEFBS2MsQUFNZCxBQUtjLFVBakZLLEFBZ0JYLEFBVVksQUE4QkEsQ0E5Q3BCLENBOERBLEFBV0EsQ0F6RnFCLEFBMENGLElBbkJSLEFBd0IyQixTQXZCTCxDQWpCckIsQ0EwQlksQUE4QlYsR0E5REksQUEwQ2xCLE1BbkNTLEdBd0RpQixJQXZEUCxDQVBqQixLQWdDTSxDQWVjLEtBdkJ0QixDQVNpQyxLQXpCTixFQXVEd0MsTUFmcEQsV0FDSSxNQXhDbkIsQUEwQkEsU0FlZ0IsWUFDUSxrQkFheEIsRUFaMkIsdUJBQ1ksbUNBQ0QsZ0ZBQ3RDIiwiZmlsZSI6Ii9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcGxheWxpc3RQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgU29uZyBmcm9tICcuL3NvbmcnO1xyXG5pbXBvcnQgUGxheWxpc3QgZnJvbSAnLi9wbGF5bGlzdCc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gnO1xyXG5cclxuY29uc3QgUGxheWxpc3RQYWdlID0gKHByb3BzKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdEhlYWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdEhlYWRUZXh0XCI+XHJcbiAgICAgIDxoMyBpZD1cInBsYXlsaXN0SGVyZVwiPntwcm9wcy5kYXRhLnBsYXlsaXN0fTwvaDM+XHJcbiAgICAgIDxwIGlkPVwicGxheWxpc3RDcmVhdG9yXCI+e3Byb3BzLmRhdGEuY3JlYXRvcn08L3A+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY3JlYXRlQnRuXCI+Rm9sbG93PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWNlbnRseU1vc3RQbGF5ZWRcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwicmVjZW50bHlNb3N0UGxheWVkSGVhZFwiPlRyYWNrczwvaDQ+XHJcbiAgICAgIDxvbCBjbGFzc05hbWUgPSBcInNvbmdMaXN0XCI+XHJcbiAgICAgICAgICB7Y29uc29sZS5sb2coKHByb3BzLmRhdGEudHJhY2tzKSl9XHJcbiAgICAgICAgey8qIHtwcm9wcy5kYXRhLnRyYWNrcy5tYXAocCA9PiAoPGxpIGNsYXNzTmFtZSA9XCJzb25nTGlzdEl0ZW1cIiBrZXk9e3AubmFtZX0+PFNvbmcgey4uLnB9Lz48L2xpPikpfSAqL31cclxuICAgICAgPC9vbD5cclxuICAgICAgPC9kaXY+IFxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdENvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJwbGF5bGlzdExpc3RUaXRsZVwiPlBsYXlsaXN0czwvaDQ+ICovfVxyXG4gICAgICAgIHsvKiA8YSBocmVmID0ge3JlZGlyZWN0X3VyaX0gPiAqL31cclxuICAgICAgICB7LyogPG9sIGNsYXNzTmFtZT1cInBsYXlsaXN0XCI+XHJcbiAgICAgICAgICB7cHJvcHMuZGF0YS5hbGxQbGF5bGlzdHMubWFwKHAgPT4gKDxsaSBjbGFzc05hbWUgPVwicGxheWxpc3RMaXN0SXRlbVwiIGtleT17cC50aXRsZStcIlBsYXlsaXN0SXRlbVwifT4gPFBsYXlsaXN0IGNsYXNzTmFtZT17cC50aXRsZX0gey4uLnB9Lz48L2xpPikpfVxyXG4gICAgICAgIDwvb2w+ICovfVxyXG4gICAgICAgIHsvKiA8L2E+ICovfVxyXG4gICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5wbGF5bGlzdExpc3RUaXRsZXtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMxREI5NTQ7XHJcbiAgICAgIH1cclxuICAgIC5wbGF5bGlzdENvbnRhaW5lcntcclxuICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICB3aWR0aDogNzUlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgdG9wOiBjYWxjKDM1dmggKyAyMzAuNHB4KTtcclxuICAgIH1cclxuICAgIC5wbGF5bGlzdExpc3RJdGVte1xyXG4gICAgICBtYXJnaW46MHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgY29sb3I6I0ZGRjtcclxuICAgIH1cclxuICAgIC5wbGF5bGlzdEhlYWR7XHJcbiAgICAgIHdpZHRoOiA3NXZ3O1xyXG4gICAgICBoZWlnaHQ6IDM1dmg7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OjA7XHJcbiAgICAgIHRvcDogNTBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuXHJcbiAgICB9XHJcbiAgICAucmVjZW50bHlNb3N0UGxheWVke1xyXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgY29sb3I6ICMxREI5NTQ7XHJcbiAgICAgIC8vIG1pbi13aWR0aDo3NXY7XHJcbiAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiBjYWxjKDM1dmggKyA1MHB4KTtcclxuICAgICAgbGVmdDowO1xyXG4gICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xyXG5cclxuICAgIH1cclxuICAgIC5yZWNlbnRseU1vc3RQbGF5ZWRIZWFke1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNyZWF0ZUJ0bntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuICAgICAgICBsZWZ0OiBjYWxjKCAzNy41dncgLSAyMTEuNDZweCAvIDIpO1xyXG4gICAgICAgIC8vIHRvcDogY2FsYyggMzV2aCAtIDU1cHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzFEQjk1NDtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggNDhweCAxOHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzO1xyXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBiYWNrZ3JvdW5kIDAuNHM7XHJcbiAgICB9XHJcbiAgICAucGxheWxpc3RIZWFkVGV4dHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdG9wOiBjYWxjKCAzNXZoIC0gMTU1cHgpO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogLTFweCAwIGJsYWNrLCAwIDFweCBibGFjaywgMXB4IDAgYmxhY2ssIDAgLTFweCBibGFjaztcclxuICAgIH1cclxuICAgIC5zb25nTGlzdHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5zb25nTGlzdEl0ZW17XHJcbiAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAvLyBwYWRkaW5nOiA4cHggMHB4IDhweCAgMTBweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgfVxyXG4gICAgLmNyZWF0ZUJ0bjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICBjb2xvcjogIzFEQjk1NDsgICAgIFxyXG4gICAgfVxyXG4gICAgLnBsYXlsaXN0e1xyXG4gICAgICBtYXJnaW46MHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgLy8gcGFkZGluZzogOHB4IDBweCA4cHggIDEwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIH1cclxuICBgfVxyXG4gIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gICAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgUGxheWxpc3RQYWdlOyJdfQ== */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/playlistPage.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (PlaylistPage);

/***/ })

})
//# sourceMappingURL=playlistDisplay.js.9f9990b7aa6244d0d49c.hot-update.js.map