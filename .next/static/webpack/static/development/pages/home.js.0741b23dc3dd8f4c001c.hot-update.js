webpackHotUpdate("static/development/pages/home.js",{

/***/ "./comps/profile.js":
/*!**************************!*\
  !*** ./comps/profile.js ***!
  \**************************/
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
var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/profile.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // let awsinstance = 'http://ec2-18-191-11-49.us-east-2.compute.amazonaws.com'; //Jon

var awsinstance = 'http://ec2-18-234-109-238.compute-1.amazonaws.com'; //Joe

var Profile = function Profile(props) {
  return __jsx("div", {
    className: "jsx-1936574731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1936574731" + " " + "profileHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1936574731" + " " + "profileHeadText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h3", {
    id: "usernameHere",
    className: "jsx-1936574731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.data.username), __jsx("p", {
    id: "playlistLikesHere",
    className: "jsx-1936574731",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Playlist likes"), __jsx("input", {
    type: "button",
    value: "Create Playlist",
    className: "jsx-1936574731" + " " + "createBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-1936574731" + " " + "recentlyMostPlayed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-1936574731" + " " + "recentlyMostPlayedHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Recently Most Played"), __jsx("ol", {
    className: "jsx-1936574731" + " " + "songList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1936574731" + " " + "songListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_song__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx("li", {
    className: "jsx-1936574731" + " " + "songListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_song__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("li", {
    className: "jsx-1936574731" + " " + "songListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_song__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), __jsx("li", {
    className: "jsx-1936574731" + " " + "songListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_song__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx("li", {
    className: "jsx-1936574731" + " " + "songListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_song__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-1936574731" + " " + "playlistContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-1936574731" + " " + "playlistListTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Playlists"), __jsx("ol", {
    className: "jsx-1936574731" + " " + "playlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1936574731" + " " + "playlistListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_playlist__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx("li", {
    className: "jsx-1936574731" + " " + "playlistListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_playlist__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx("li", {
    className: "jsx-1936574731" + " " + "playlistListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_playlist__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx("li", {
    className: "jsx-1936574731" + " " + "playlistListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_playlist__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx("li", {
    className: "jsx-1936574731" + " " + "playlistListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_playlist__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1936574731",
    __self: this
  }, ".playlistListTitle.jsx-1936574731{margin:0;padding-bottom:5px;padding-top:5px;text-align:center;color:#1DB954;}.playlistContainer.jsx-1936574731{font-family:console,monospace;margin:0px;background:black;width:75vw;left:0;position:absolute;top:calc(35vh + 230.4px);}.playlistListItem.jsx-1936574731{margin:0px;padding-bottom:10px;color:#FFF;}.profileHead.jsx-1936574731{width:75vw;height:35vh;background:lightgrey;position:absolute;left:0;top:50px;font-family:console,monospace;}.recentlyMostPlayed.jsx-1936574731{background:black;color:#1DB954;width:75vw;position:absolute;top:calc(35vh + 50px);left:0;font-family:console,monospace;}.recentlyMostPlayedHead.jsx-1936574731{margin:0;padding-top:5px;padding-bottom:5px;text-align:center;}.createBtn.jsx-1936574731{position:absolute;font-family:console,monospace;left:calc( 37.5vw - 211.46px / 2);background:#1DB954;color:#FFF;font-size:14px;border:none;border-radius:500px;padding:16px 48px 18px;-webkit-transition:background 0.4s;-webkit-transition-duration:background 0.4s;transition-duration:background 0.4s;}.profileHeadText.jsx-1936574731{margin:0px;padding:0px;text-align:center;position:relative;top:calc( 35vh - 155px);}.songList.jsx-1936574731{margin:0px;padding-bottom:10px;}.songListItem.jsx-1936574731{margin:0px;padding-bottom:10px;color:white;}.createBtn.jsx-1936574731:hover{background:black;color:#1DB954;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2tCLEFBR2lCLEFBT3FCLEFBU3JCLEFBS0MsQUFVTSxBQVVSLEFBTVcsQUFjVCxBQU9BLEFBS0QsQUFPTyxTQS9FSSxBQXlDTCxFQXpCSSxBQUtSLEFBd0NBLEFBUVEsQUFJQSxNQTFDTixBQWlEQSxDQWpDbUIsS0F6QlosQUF3Q0gsRUFwQkMsR0F6Q0QsRUFNUCxDQVVELEFBZUEsQUFzQ1osQUFLYyxBQU1kLFVBekVtQixBQXVEQyxDQTdDcEIsQUFlb0IsQ0E0Q3BCLENBM0VxQixBQXFCRCxBQW9CRCxJQUttQixVQXZDekIsQ0F1RGEsQ0E5QkYsRUEvQk4sQUFxQlYsQUFvQlIsT0FsQ1MsQUFlRSxPQXJCVCxBQU9pQixFQWVjLElBU3pCLEFBZWMsQ0FldEIsTUE3QmlDLEtBeEJOLE9BdUNaLE9BdkJmLElBd0JtQixPQXZDbkIsQUF5QkEsUUFlZ0IsWUFDUSxvQkFDRyx1QkFDWSxtQ0FDRCxnRkFDdEMiLCJmaWxlIjoiL2hvbWUvam9lL3B1YmxpY19odG1sL2NyZWF0aXZlcHJvamVjdC03am9lLWpvbi9jb21wcy9wcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgU29uZyBmcm9tICcuL3NvbmcnO1xyXG5pbXBvcnQgUGxheWxpc3QgZnJvbSAnLi9wbGF5bGlzdCc7XHJcbi8vIGxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTE5MS0xMS00OS51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tJzsgLy9Kb25cclxubGV0IGF3c2luc3RhbmNlID0gJ2h0dHA6Ly9lYzItMTgtMjM0LTEwOS0yMzguY29tcHV0ZS0xLmFtYXpvbmF3cy5jb20nOyAvL0pvZVxyXG5cclxuY29uc3QgUHJvZmlsZSA9IChwcm9wcykgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUhlYWRcIj5cclxuICAgICAgey8qIDxpbWcgaWQ9XCJwcm9maWxlSW1hZ2VIZXJlXCI+UFJPRklMRSBJTUFHRTwvaW1nPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlSGVhZFRleHRcIj5cclxuICAgICAgPGgzIGlkPVwidXNlcm5hbWVIZXJlXCI+e3Byb3BzLmRhdGEudXNlcm5hbWV9PC9oMz5cclxuICAgICAgPHAgaWQ9XCJwbGF5bGlzdExpa2VzSGVyZVwiPlBsYXlsaXN0IGxpa2VzPC9wPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNyZWF0ZUJ0blwiIHZhbHVlPVwiQ3JlYXRlIFBsYXlsaXN0XCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VudGx5TW9zdFBsYXllZFwiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJyZWNlbnRseU1vc3RQbGF5ZWRIZWFkXCI+UmVjZW50bHkgTW9zdCBQbGF5ZWQ8L2g0PlxyXG4gICAgICA8b2wgY2xhc3NOYW1lID0gXCJzb25nTGlzdFwiPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWUgPSBcInNvbmdMaXN0SXRlbVwiPjxTb25nPjwvU29uZz48L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWUgPSBcInNvbmdMaXN0SXRlbVwiPjxTb25nPjwvU29uZz48L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWUgPSBcInNvbmdMaXN0SXRlbVwiPjxTb25nPjwvU29uZz48L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWUgPSBcInNvbmdMaXN0SXRlbVwiPjxTb25nPjwvU29uZz48L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWUgPSBcInNvbmdMaXN0SXRlbVwiPjxTb25nPjwvU29uZz48L2xpPlxyXG4gICAgICA8L29sPlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWxpc3RDb250YWluZXJcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwicGxheWxpc3RMaXN0VGl0bGVcIj5QbGF5bGlzdHM8L2g0PlxyXG4gICAgICAgIDxvbCBjbGFzc05hbWU9XCJwbGF5bGlzdFwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZSA9IFwicGxheWxpc3RMaXN0SXRlbVwiPjxQbGF5bGlzdD48L1BsYXlsaXN0PjwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lID0gXCJwbGF5bGlzdExpc3RJdGVtXCI+PFBsYXlsaXN0PjwvUGxheWxpc3Q+PC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWUgPSBcInBsYXlsaXN0TGlzdEl0ZW1cIj48UGxheWxpc3Q+PC9QbGF5bGlzdD48L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZSA9IFwicGxheWxpc3RMaXN0SXRlbVwiPjxQbGF5bGlzdD48L1BsYXlsaXN0PjwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lID0gXCJwbGF5bGlzdExpc3RJdGVtXCI+PFBsYXlsaXN0PjwvUGxheWxpc3Q+PC9saT5cclxuICAgICAgICA8L29sPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAucGxheWxpc3RMaXN0VGl0bGV7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMURCOTU0O1xyXG4gICAgICB9XHJcbiAgICAucGxheWxpc3RDb250YWluZXJ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBjb25zb2xlLCBtb25vc3BhY2U7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgd2lkdGg6IDc1dnc7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICB0b3A6IGNhbGMoMzV2aCArIDIzMC40cHgpO1xyXG4gICAgfVxyXG4gICAgLnBsYXlsaXN0TGlzdEl0ZW17XHJcbiAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICBjb2xvcjojRkZGO1xyXG4gICAgfVxyXG4gICAgLnByb2ZpbGVIZWFke1xyXG4gICAgICB3aWR0aDogNzV2dztcclxuICAgICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDowO1xyXG4gICAgICB0b3A6IDUwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBjb25zb2xlLCBtb25vc3BhY2U7XHJcblxyXG4gICAgfVxyXG4gICAgLnJlY2VudGx5TW9zdFBsYXllZHtcclxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgIGNvbG9yOiAjMURCOTU0O1xyXG4gICAgICB3aWR0aDo3NXZ3O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogY2FsYygzNXZoICsgNTBweCk7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuXHJcbiAgICB9XHJcbiAgICAucmVjZW50bHlNb3N0UGxheWVkSGVhZHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jcmVhdGVCdG57XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBjb25zb2xlLCBtb25vc3BhY2U7XHJcbiAgICAgICAgbGVmdDogY2FsYyggMzcuNXZ3IC0gMjExLjQ2cHggLyAyKTtcclxuICAgICAgICAvLyB0b3A6IGNhbGMoIDM1dmggLSA1NXB4KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiMxREI5NTQ7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDQ4cHggMThweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC40cztcclxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogYmFja2dyb3VuZCAwLjRzO1xyXG4gICAgfVxyXG4gICAgLnByb2ZpbGVIZWFkVGV4dHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogY2FsYyggMzV2aCAtIDE1NXB4KTtcclxuICAgIH1cclxuICAgIC5zb25nTGlzdHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5zb25nTGlzdEl0ZW17XHJcbiAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAvLyBwYWRkaW5nOiA4cHggMHB4IDhweCAgMTBweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgfVxyXG4gICAgLmNyZWF0ZUJ0bjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICBjb2xvcjogIzFEQjk1NDsgICAgIFxyXG4gICAgfVxyXG4gIGB9XHJcbiAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7Il19 */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/profile.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=home.js.0741b23dc3dd8f4c001c.hot-update.js.map