webpackHotUpdate("static/development/pages/playlistDisplay.js",{

/***/ "./comps/playlistPage.js":
/*!*******************************!*\
  !*** ./comps/playlistPage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _song__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./song */ "./comps/song.js");
/* harmony import */ var _playlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playlist */ "./comps/playlist.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search */ "./comps/search.js");

var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/playlistPage.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var PlaylistPage = function PlaylistPage(props) {
  return __jsx("div", {
    className: "jsx-1829963916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1829963916" + " " + "playlistHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1829963916" + " " + "playlistHeadText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h3", {
    id: "playlistHere",
    className: "jsx-1829963916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.data.playlist), __jsx("p", {
    id: "playlistCreator",
    className: "jsx-1829963916",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.data.creator), __jsx("button", {
    className: "jsx-1829963916" + " " + "createBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Follow"))), __jsx("div", {
    className: "jsx-1829963916" + " " + "recentlyMostPlayed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-1829963916" + " " + "recentlyMostPlayedHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Tracks"), __jsx("ol", {
    className: "jsx-1829963916" + " " + "songList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.data.tracks.map(function (p, i) {
    return __jsx("li", {
      key: p.track.name + i,
      className: "jsx-1829963916" + " " + "songListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx(_song__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, p, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1829963916",
    __self: this
  }, ".playlistListTitle.jsx-1829963916{margin:0;padding-bottom:5px;padding-top:5px;text-align:center;color:#1DB954;}.playlistContainer.jsx-1829963916{font-family:console,monospace;margin:0px;background:black;width:75%;left:0;position:absolute;top:calc(35vh + 230.4px);}.playlistListItem.jsx-1829963916{margin:0px;padding-bottom:10px;color:#FFF;}.playlistHead.jsx-1829963916{width:75vw;height:35vh;position:absolute;left:0;top:50px;font-family:console,monospace;}.recentlyMostPlayed.jsx-1829963916{background:black;color:#1DB954;width:75%;position:absolute;top:calc(35vh + 50px);left:0;font-family:console,monospace;}.recentlyMostPlayedHead.jsx-1829963916{margin:0;padding-top:5px;padding-bottom:5px;text-align:center;}.createBtn.jsx-1829963916{position:absolute;font-family:console,monospace;left:calc( 37.5vw - 211.46px / 2);background:#1DB954;color:#FFF;font-size:14px;border:none;border-radius:500px;padding:16px 48px 18px;-webkit-transition:background 0.4s;-webkit-transition-duration:background 0.4s;transition-duration:background 0.4s;}.playlistHeadText.jsx-1829963916{margin:0px;padding:0px;text-align:center;position:relative;color:white;top:calc( 35vh - 155px);text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;}.songList.jsx-1829963916{margin:0px;padding-bottom:28px;}.songListItem.jsx-1829963916{margin:0px;padding-bottom:10px;color:white;}.createBtn.jsx-1829963916:hover{background:black;color:#1DB954;}.playlist.jsx-1829963916{margin:0px;padding-bottom:10px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcGxheWxpc3RQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCa0IsQUFHaUIsQUFPcUIsQUFTckIsQUFLQyxBQVVNLEFBV1IsQUFNVyxBQWNULEFBU0EsQUFLRCxBQU9PLEFBSVAsU0F0RlcsQUEwQ0wsRUExQkksQUFLUixBQXlDQSxBQVVRLEFBSUEsQUFXQSxNQXhETixBQW9EQSxDQW5DbUIsS0F6QmYsQUF3Q0EsRUFwQkMsR0ExQ0QsRUFNUCxDQVVELEFBZ0JBLEFBd0NaLEFBS2MsQUFNZCxBQUtjLFVBakZLLEFBZ0JYLEFBVVksQUE4QkEsQ0E5Q3BCLENBOERBLEFBV0EsQ0F6RnFCLEFBMENGLElBbkJSLEFBd0IyQixTQXZCTCxDQWpCckIsQ0EwQlksQUE4QlYsR0E5REksQUEwQ2xCLE1BbkNTLEdBd0RpQixJQXZEUCxDQVBqQixLQWdDTSxDQWVjLEtBdkJ0QixDQVNpQyxLQXpCTixFQXVEd0MsTUFmcEQsV0FDSSxNQXhDbkIsQUEwQkEsU0FlZ0IsWUFDUSxrQkFheEIsRUFaMkIsdUJBQ1ksbUNBQ0QsZ0ZBQ3RDIiwiZmlsZSI6Ii9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcGxheWxpc3RQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgU29uZyBmcm9tICcuL3NvbmcnO1xyXG5pbXBvcnQgUGxheWxpc3QgZnJvbSAnLi9wbGF5bGlzdCc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gnO1xyXG5cclxuY29uc3QgUGxheWxpc3RQYWdlID0gKHByb3BzKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdEhlYWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdEhlYWRUZXh0XCI+XHJcbiAgICAgIDxoMyBpZD1cInBsYXlsaXN0SGVyZVwiPntwcm9wcy5kYXRhLnBsYXlsaXN0fTwvaDM+XHJcbiAgICAgIDxwIGlkPVwicGxheWxpc3RDcmVhdG9yXCI+e3Byb3BzLmRhdGEuY3JlYXRvcn08L3A+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY3JlYXRlQnRuXCI+Rm9sbG93PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWNlbnRseU1vc3RQbGF5ZWRcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwicmVjZW50bHlNb3N0UGxheWVkSGVhZFwiPlRyYWNrczwvaDQ+XHJcbiAgICAgIDxvbCBjbGFzc05hbWUgPSBcInNvbmdMaXN0XCI+XHJcbiAgICAgICAge3Byb3BzLmRhdGEudHJhY2tzLm1hcCgocCwgaSk9PiAoPGxpIGNsYXNzTmFtZSA9XCJzb25nTGlzdEl0ZW1cIiBrZXk9e3AudHJhY2submFtZSArIGl9PjxTb25nIHsuLi5wfS8+PC9saT4pKX1cclxuICAgICAgPC9vbD5cclxuICAgICAgPC9kaXY+IFxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdENvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJwbGF5bGlzdExpc3RUaXRsZVwiPlBsYXlsaXN0czwvaDQ+ICovfVxyXG4gICAgICAgIHsvKiA8YSBocmVmID0ge3JlZGlyZWN0X3VyaX0gPiAqL31cclxuICAgICAgICB7LyogPG9sIGNsYXNzTmFtZT1cInBsYXlsaXN0XCI+XHJcbiAgICAgICAgICB7cHJvcHMuZGF0YS5hbGxQbGF5bGlzdHMubWFwKHAgPT4gKDxsaSBjbGFzc05hbWUgPVwicGxheWxpc3RMaXN0SXRlbVwiIGtleT17cC50aXRsZStcIlBsYXlsaXN0SXRlbVwifT4gPFBsYXlsaXN0IGNsYXNzTmFtZT17cC50aXRsZX0gey4uLnB9Lz48L2xpPikpfVxyXG4gICAgICAgIDwvb2w+ICovfVxyXG4gICAgICAgIHsvKiA8L2E+ICovfVxyXG4gICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5wbGF5bGlzdExpc3RUaXRsZXtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMxREI5NTQ7XHJcbiAgICAgIH1cclxuICAgIC5wbGF5bGlzdENvbnRhaW5lcntcclxuICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICB3aWR0aDogNzUlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgdG9wOiBjYWxjKDM1dmggKyAyMzAuNHB4KTtcclxuICAgIH1cclxuICAgIC5wbGF5bGlzdExpc3RJdGVte1xyXG4gICAgICBtYXJnaW46MHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgY29sb3I6I0ZGRjtcclxuICAgIH1cclxuICAgIC5wbGF5bGlzdEhlYWR7XHJcbiAgICAgIHdpZHRoOiA3NXZ3O1xyXG4gICAgICBoZWlnaHQ6IDM1dmg7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OjA7XHJcbiAgICAgIHRvcDogNTBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuXHJcbiAgICB9XHJcbiAgICAucmVjZW50bHlNb3N0UGxheWVke1xyXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgY29sb3I6ICMxREI5NTQ7XHJcbiAgICAgIC8vIG1pbi13aWR0aDo3NXY7XHJcbiAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiBjYWxjKDM1dmggKyA1MHB4KTtcclxuICAgICAgbGVmdDowO1xyXG4gICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xyXG5cclxuICAgIH1cclxuICAgIC5yZWNlbnRseU1vc3RQbGF5ZWRIZWFke1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNyZWF0ZUJ0bntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuICAgICAgICBsZWZ0OiBjYWxjKCAzNy41dncgLSAyMTEuNDZweCAvIDIpO1xyXG4gICAgICAgIC8vIHRvcDogY2FsYyggMzV2aCAtIDU1cHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzFEQjk1NDtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggNDhweCAxOHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzO1xyXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBiYWNrZ3JvdW5kIDAuNHM7XHJcbiAgICB9XHJcbiAgICAucGxheWxpc3RIZWFkVGV4dHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdG9wOiBjYWxjKCAzNXZoIC0gMTU1cHgpO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogLTFweCAwIGJsYWNrLCAwIDFweCBibGFjaywgMXB4IDAgYmxhY2ssIDAgLTFweCBibGFjaztcclxuICAgIH1cclxuICAgIC5zb25nTGlzdHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxuICAgIH1cclxuICAgIC5zb25nTGlzdEl0ZW17XHJcbiAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAvLyBwYWRkaW5nOiA4cHggMHB4IDhweCAgMTBweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgfVxyXG4gICAgLmNyZWF0ZUJ0bjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICBjb2xvcjogIzFEQjk1NDsgICAgIFxyXG4gICAgfVxyXG4gICAgLnBsYXlsaXN0e1xyXG4gICAgICBtYXJnaW46MHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgLy8gcGFkZGluZzogOHB4IDBweCA4cHggIDEwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIH1cclxuICBgfVxyXG4gIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gICAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgUGxheWxpc3RQYWdlOyJdfQ== */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/playlistPage.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (PlaylistPage);

/***/ }),

/***/ "./comps/profile.js":
/*!**************************!*\
  !*** ./comps/profile.js ***!
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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _song__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./song */ "./comps/song.js");
/* harmony import */ var _playlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playlist */ "./comps/playlist.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search */ "./comps/search.js");

var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/profile.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var awsinstance = 'http://ec2-18-191-11-49.us-east-2.compute.amazonaws.com'; //Jon
// let awsinstance = 'http://ec2-18-234-109-238.compute-1.amazonaws.com'; //Joe

var Profile = function Profile(props) {
  return __jsx("div", {
    className: "jsx-765435266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-765435266" + " " + "profileHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-765435266" + " " + "profileHeadText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h3", {
    id: "usernameHere",
    className: "jsx-765435266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.data.username), __jsx("p", {
    id: "playlistLikesHere",
    className: "jsx-765435266",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Playlist likes"), __jsx("button", {
    className: "jsx-765435266" + " " + "createBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Create Playlist"))), __jsx("div", {
    className: "jsx-765435266" + " " + "recentlyMostPlayed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-765435266" + " " + "recentlyMostPlayedHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Recently Most Played"), __jsx("ol", {
    className: "jsx-765435266" + " " + "songList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, props.data.topTracks.map(function (p) {
    return __jsx("li", {
      key: p.name,
      className: "jsx-765435266" + " " + "songListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(_song__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, p, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })));
  }))), __jsx("div", {
    className: "jsx-765435266" + " " + "playlistContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-765435266" + " " + "playlistListTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Playlists"), __jsx("ol", {
    className: "jsx-765435266" + " " + "playlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, props.data.allPlaylists.map(function (p) {
    return __jsx("li", {
      key: p.title + "PlaylistItem",
      className: "jsx-765435266" + " " + "playlistListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, " ", __jsx(_playlist__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: p.title
    }, p, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "765435266",
    __self: this
  }, ".playlistListTitle.jsx-765435266{margin:0;padding-bottom:5px;padding-top:5px;text-align:center;color:#1DB954;}.playlistContainer.jsx-765435266{font-family:console,monospace;margin:0px;background:black;width:75%;left:0;position:absolute;top:calc(35vh + 230.4px);}.playlistListItem.jsx-765435266{margin:0px;padding-bottom:10px;color:#FFF;}.profileHead.jsx-765435266{width:75vw;height:35vh;position:absolute;left:0;top:50px;font-family:console,monospace;}.recentlyMostPlayed.jsx-765435266{background:black;color:#1DB954;width:75%;position:absolute;top:calc(35vh + 50px);left:0;font-family:console,monospace;}.recentlyMostPlayedHead.jsx-765435266{margin:0;padding-top:5px;padding-bottom:5px;text-align:center;}.createBtn.jsx-765435266{position:absolute;font-family:console,monospace;left:calc( 37.5vw - 211.46px / 2);background:#1DB954;color:#FFF;font-size:14px;border:none;border-radius:500px;padding:16px 48px 18px;-webkit-transition:background 0.4s;-webkit-transition-duration:background 0.4s;transition-duration:background 0.4s;}.profileHeadText.jsx-765435266{margin:0px;padding:0px;text-align:center;position:relative;color:white;top:calc( 35vh - 155px);text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;}.songList.jsx-765435266{margin:0px;padding-bottom:10px;}.songListItem.jsx-765435266{margin:0px;padding-bottom:10px;color:white;}.createBtn.jsx-765435266:hover{background:black;color:#1DB954;}.playlist.jsx-765435266{margin:0px;padding-bottom:10px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2tCLEFBR2lCLEFBT3FCLEFBU3JCLEFBS0MsQUFVTSxBQVdSLEFBTVcsQUFjVCxBQVNBLEFBS0QsQUFPTyxBQUlQLFNBdEZXLEFBMENMLEVBMUJJLEFBS1IsQUF5Q0EsQUFVUSxBQUlBLEFBV0EsTUF4RE4sQUFvREEsQ0FuQ21CLEtBekJmLEFBd0NBLEVBcEJDLEdBMUNELEVBTVAsQ0FVRCxBQWdCQSxBQXdDWixBQUtjLEFBTWQsQUFLYyxVQWpGSyxBQWdCWCxBQVVZLEFBOEJBLENBOUNwQixDQThEQSxBQVdBLENBekZxQixBQTBDRixJQW5CUixBQXdCMkIsU0F2QkwsQ0FqQnJCLENBMEJZLEFBOEJWLEdBOURJLEFBMENsQixNQW5DUyxHQXdEaUIsSUF2RFAsQ0FQakIsS0FnQ00sQ0FlYyxLQXZCdEIsQ0FTaUMsS0F6Qk4sRUF1RHdDLE1BZnBELFdBQ0ksTUF4Q25CLEFBMEJBLFNBZWdCLFlBQ1Esa0JBYXhCLEVBWjJCLHVCQUNZLG1DQUNELGdGQUN0QyIsImZpbGUiOiIvaG9tZS9qb2UvcHVibGljX2h0bWwvY3JlYXRpdmVwcm9qZWN0LTdqb2Utam9uL2NvbXBzL3Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBTb25nIGZyb20gJy4vc29uZyc7XHJcbmltcG9ydCBQbGF5bGlzdCBmcm9tICcuL3BsYXlsaXN0JztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaCc7XHJcblxyXG5sZXQgYXdzaW5zdGFuY2UgPSAnaHR0cDovL2VjMi0xOC0xOTEtMTEtNDkudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbSc7IC8vSm9uXHJcbi8vIGxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTIzNC0xMDktMjM4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tJzsgLy9Kb2VcclxuXHJcblxyXG5cclxuY29uc3QgUHJvZmlsZSA9IChwcm9wcykgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUhlYWRcIj5cclxuICAgICAgey8qIDxpbWcgaWQ9XCJwcm9maWxlSW1hZ2VIZXJlXCI+PC9pbWc+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVIZWFkVGV4dFwiPlxyXG4gICAgICA8aDMgaWQ9XCJ1c2VybmFtZUhlcmVcIj57cHJvcHMuZGF0YS51c2VybmFtZX08L2gzPlxyXG4gICAgICA8cCBpZD1cInBsYXlsaXN0TGlrZXNIZXJlXCI+UGxheWxpc3QgbGlrZXM8L3A+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY3JlYXRlQnRuXCI+Q3JlYXRlIFBsYXlsaXN0PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWNlbnRseU1vc3RQbGF5ZWRcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwicmVjZW50bHlNb3N0UGxheWVkSGVhZFwiPlJlY2VudGx5IE1vc3QgUGxheWVkPC9oND5cclxuICAgICAgPG9sIGNsYXNzTmFtZSA9IFwic29uZ0xpc3RcIj5cclxuICAgICAgICB7cHJvcHMuZGF0YS50b3BUcmFja3MubWFwKHAgPT4gKDxsaSBjbGFzc05hbWUgPVwic29uZ0xpc3RJdGVtXCIga2V5PXtwLm5hbWV9PjxTb25nIHsuLi5wfS8+PC9saT4pKX1cclxuICAgICAgPC9vbD5cclxuICAgICAgPC9kaXY+IFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInBsYXlsaXN0TGlzdFRpdGxlXCI+UGxheWxpc3RzPC9oND5cclxuICAgICAgICB7LyogPGEgaHJlZiA9IHtyZWRpcmVjdF91cml9ID4gKi99XHJcbiAgICAgICAgPG9sIGNsYXNzTmFtZT1cInBsYXlsaXN0XCI+XHJcbiAgICAgICAgICB7cHJvcHMuZGF0YS5hbGxQbGF5bGlzdHMubWFwKHAgPT4gKDxsaSBjbGFzc05hbWUgPVwicGxheWxpc3RMaXN0SXRlbVwiIGtleT17cC50aXRsZStcIlBsYXlsaXN0SXRlbVwifT4gPFBsYXlsaXN0IGNsYXNzTmFtZT17cC50aXRsZX0gey4uLnB9Lz48L2xpPikpfVxyXG4gICAgICAgIDwvb2w+XHJcbiAgICAgICAgey8qIDwvYT4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5wbGF5bGlzdExpc3RUaXRsZXtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMxREI5NTQ7XHJcbiAgICAgIH1cclxuICAgIC5wbGF5bGlzdENvbnRhaW5lcntcclxuICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICB3aWR0aDogNzUlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgdG9wOiBjYWxjKDM1dmggKyAyMzAuNHB4KTtcclxuICAgIH1cclxuICAgIC5wbGF5bGlzdExpc3RJdGVte1xyXG4gICAgICBtYXJnaW46MHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgY29sb3I6I0ZGRjtcclxuICAgIH1cclxuICAgIC5wcm9maWxlSGVhZHtcclxuICAgICAgd2lkdGg6IDc1dnc7XHJcbiAgICAgIGhlaWdodDogMzV2aDtcclxuICAgICAgLy8gYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xyXG5cclxuICAgIH1cclxuICAgIC5yZWNlbnRseU1vc3RQbGF5ZWR7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICBjb2xvcjogIzFEQjk1NDtcclxuICAgICAgLy8gbWluLXdpZHRoOjc1djtcclxuICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IGNhbGMoMzV2aCArIDUwcHgpO1xyXG4gICAgICBsZWZ0OjA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBjb25zb2xlLCBtb25vc3BhY2U7XHJcblxyXG4gICAgfVxyXG4gICAgLnJlY2VudGx5TW9zdFBsYXllZEhlYWR7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY3JlYXRlQnRue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoIDM3LjV2dyAtIDIxMS40NnB4IC8gMik7XHJcbiAgICAgICAgLy8gdG9wOiBjYWxjKCAzNXZoIC0gNTVweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDojMURCOTU0O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCA0OHB4IDE4cHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHM7XHJcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IGJhY2tncm91bmQgMC40cztcclxuICAgIH1cclxuICAgIC5wcm9maWxlSGVhZFRleHR7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHRvcDogY2FsYyggMzV2aCAtIDE1NXB4KTtcclxuICAgICAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XHJcbiAgICB9XHJcbiAgICAuc29uZ0xpc3R7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuc29uZ0xpc3RJdGVte1xyXG4gICAgICBtYXJnaW46MHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgLy8gcGFkZGluZzogOHB4IDBweCA4cHggIDEwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIH1cclxuICAgIC5jcmVhdGVCdG46aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgY29sb3I6ICMxREI5NTQ7ICAgICBcclxuICAgIH1cclxuICAgIC5wbGF5bGlzdHtcclxuICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDhweCAwcHggOHB4ICAxMHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICB9XHJcbiAgYH1cclxuICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICAgIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7Il19 */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/profile.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./comps/song.js":
/*!***********************!*\
  !*** ./comps/song.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/song.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Song = function Song(props) {
  return __jsx("div", {
    className: "jsx-2615142487" + " " + "songMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2615142487" + " " + "container songBoxTop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2615142487" + " " + "titleHere",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.track.name), __jsx("p", {
    className: "jsx-2615142487" + " " + "artistHere",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.track.artists[0].name), __jsx("p", {
    className: "jsx-2615142487" + " " + "popularityHere",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, console.log(props.track.popularity))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2615142487",
    __self: this
  }, ".titleHere.jsx-2615142487{display:inline-block;font-size:16px;}.artistHere.jsx-2615142487{font-size:14px;margin:0;padding:0;display:inline-block;padding-left:15px;color:#1DB954;}.popularityHere.jsx-2615142487{margin:0;padding:0;float:right;padding-right:10px;}.container.jsx-2615142487{padding:0;margin:0;}.titleHere.jsx-2615142487{padding:0;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvc29uZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPZ0IsQUFHNEIsQUFJTixBQVFQLEFBTUMsQUFJQyxTQVRELENBTUQsQUFJQyxLQWxCRCxJQVNHLEFBTWIsQUFJQSxFQXZCaUIsR0FLTixPQVNVLEdBUkUsRUFMdkIsY0FjQSxLQVJvQixrQkFDSixjQUNoQiIsImZpbGUiOiIvaG9tZS9qb2UvcHVibGljX2h0bWwvY3JlYXRpdmVwcm9qZWN0LTdqb2Utam9uL2NvbXBzL3NvbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTb25nID0gKHByb3BzKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbmdNYWluXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzb25nQm94VG9wXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVIZXJlXCI+e3Byb3BzLnRyYWNrLm5hbWV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGlzdEhlcmVcIj57cHJvcHMudHJhY2suYXJ0aXN0c1swXS5uYW1lfTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3B1bGFyaXR5SGVyZVwiPntjb25zb2xlLmxvZyhwcm9wcy50cmFjay5wb3B1bGFyaXR5KX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIC50aXRsZUhlcmV7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmFydGlzdEhlcmV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbWFyZ2luOjA7XHJcbiAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiAjMURCOTU0O1xyXG4gICAgfVxyXG4gICAgLnBvcHVsYXJpdHlIZXJle1xyXG4gICAgICBtYXJnaW46MDtcclxuICAgICAgcGFkZGluZzowO1xyXG4gICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgbWFyZ2luOjA7XHJcbiAgICB9XHJcbiAgICAudGl0bGVIZXJle1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICApO1xyXG4gIGV4cG9ydCBkZWZhdWx0IFNvbmc7Il19 */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/song.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Song);

/***/ })

})
//# sourceMappingURL=playlistDisplay.js.96cc44ebfa739f656bb1.hot-update.js.map