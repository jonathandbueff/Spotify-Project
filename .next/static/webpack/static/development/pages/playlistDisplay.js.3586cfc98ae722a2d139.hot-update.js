webpackHotUpdate("static/development/pages/playlistDisplay.js",{

/***/ "./comps/playlist.js":
/*!***************************!*\
  !*** ./comps/playlist.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/playlist.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // async function

var Playlist = function Playlist(props) {
  return __jsx("div", {
    className: "jsx-4049096105" + " " + "playlistMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/playlistDisplay?playlist=" + props.playlist.title + "&creator=" + props.playlist.creator,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4049096105" + " " + "container playlistBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-4049096105" + " " + "titleHere",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.playlist.title), __jsx("p", {
    className: "jsx-4049096105" + " " + "creatorHere",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.playlist.creator), __jsx("p", {
    className: "jsx-4049096105" + " " + "ratingHere",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Likes: ", props.rating))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4049096105",
    __self: this
  }, ".titleHere.jsx-4049096105{display:inline-block;}.creatorHere.jsx-4049096105{font-size:14px;margin:0;padding:0;display:inline-block;padding-left:15px;color:#1DB954;}.ratingHere.jsx-4049096105{margin:0;padding:0;float:right;padding-right:10px;}.container.jsx-4049096105{padding:0;margin:0;border-radius:10px;padding-left:2px;}.titleHere.jsx-4049096105{padding:0;margin:0;}.container.jsx-4049096105:hover{background-color:#1DB954;}.container.jsx-4049096105:hover .titleHere.jsx-4049096105{color:black;}.container.jsx-4049096105:hover .creatorHere.jsx-4049096105{color:white;}.container.jsx-4049096105:hover .ratingHere.jsx-4049096105{color:black;}.playlistBox.jsx-4049096105{font-family:console,monospace;padding-bottom:5px;}.like.jsx-4049096105{font-family:console,monospace;float:right;margin-right:5px;background:#1DB954;color:#FFF;border:none;border-radius:500px;margin-top:2px;-webkit-transition:background 0.4s;-webkit-transition-duration:background 0.4s;transition-duration:background 0.4s;}.like.jsx-4049096105:hover{background:black;color:#1DB954;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcGxheWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBRzRCLEFBR04sQUFRUCxBQU1DLEFBTUMsQUFJZSxBQUdiLEFBR0EsQUFJQSxBQUdxQixBQUtBLEFBY2hCLFNBL0NSLENBTUQsQUFNQyxFQU9YLEFBSUEsQUFHQSxHQWxDVSxFQXdETSxFQS9DSCxBQU1RLEFBTXJCLEVBeEJBLEdBSVcsQ0F1QlgsS0FhdUIsQUFLUCxDQWhDSyxBQStDckIsR0F2RHVCLElBY0osSUEyQkUsT0FMckIsQ0EzQkEsS0FSb0IsQUFjcEIsSUEyQnNCLGNBeENOLEtBeUNELFNBeENmLEVBMENnQixZQUNRLG9CQUNMLGVBQ29CLG1DQUNDLGdGQUV4QyIsImZpbGUiOiIvaG9tZS9qb2UvcHVibGljX2h0bWwvY3JlYXRpdmVwcm9qZWN0LTdqb2Utam9uL2NvbXBzL3BsYXlsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBhc3luYyBmdW5jdGlvblxyXG5cclxuY29uc3QgUGxheWxpc3QgPSBwcm9wcyA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0TWFpblwiPlxyXG4gICAgPExpbmsgaHJlZj17XCIvcGxheWxpc3REaXNwbGF5P3BsYXlsaXN0PVwiK3Byb3BzLnBsYXlsaXN0LnRpdGxlK1wiJmNyZWF0b3I9XCIrcHJvcHMucGxheWxpc3QuY3JlYXRvcn0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwbGF5bGlzdEJveFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlSGVyZVwiPntwcm9wcy5wbGF5bGlzdC50aXRsZX08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3JlYXRvckhlcmVcIj57cHJvcHMucGxheWxpc3QuY3JlYXRvcn08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicmF0aW5nSGVyZVwiPkxpa2VzOiB7cHJvcHMucmF0aW5nfTwvcD5cclxuICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXt9IGNsYXNzTmFtZT1cImxpa2VcIj5MaWtlPC9idXR0b24+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8L0xpbms+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAudGl0bGVIZXJle1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuY3JlYXRvckhlcmV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbWFyZ2luOjA7XHJcbiAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiAjMURCOTU0O1xyXG4gICAgfVxyXG4gICAgLnJhdGluZ0hlcmV7XHJcbiAgICAgIG1hcmdpbjowO1xyXG4gICAgICBwYWRkaW5nOjA7XHJcbiAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgcGFkZGluZzowO1xyXG4gICAgICBtYXJnaW46MDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICB9XHJcbiAgICAudGl0bGVIZXJle1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcjpob3ZlciAudGl0bGVIZXJle1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyOmhvdmVyIC5jcmVhdG9ySGVyZXtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5jb250YWluZXI6aG92ZXIgLnJhdGluZ0hlcmV7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIC5wbGF5bGlzdEJveHtcclxuICAgICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgICAubGlrZXtcclxuICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBjb25zb2xlLCBtb25vc3BhY2U7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzFEQjk1NDtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAvLyBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC40cztcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBiYWNrZ3JvdW5kIDAuNHM7XHJcblxyXG4gICAgfVxyXG4gICAgLmxpa2U6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgY29sb3I6ICMxREI5NTQ7ICBcclxuICAgIH1cclxuICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICApO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFBsYXlsaXN0OyJdfQ== */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/playlist.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Playlist);

/***/ })

})
//# sourceMappingURL=playlistDisplay.js.3586cfc98ae722a2d139.hot-update.js.map