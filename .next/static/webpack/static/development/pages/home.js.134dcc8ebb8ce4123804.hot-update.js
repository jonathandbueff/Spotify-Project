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
    className: "jsx-811307291",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-811307291" + " " + "profileHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-811307291" + " " + "profileHeadText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h3", {
    id: "usernameHere",
    className: "jsx-811307291",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.data.username), __jsx("p", {
    id: "playlistLikesHere",
    className: "jsx-811307291",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Playlist likes"), __jsx("input", {
    type: "button",
    value: "Create Playlist",
    className: "jsx-811307291" + " " + "createBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-811307291" + " " + "recentlyMostPlayed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-811307291" + " " + "recentlyMostPlayedHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Recently Most Played"), __jsx("ol", {
    className: "jsx-811307291" + " " + "songList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-811307291" + " " + "songListItem",
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
    className: "jsx-811307291" + " " + "songListItem",
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
    className: "jsx-811307291" + " " + "songListItem",
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
    className: "jsx-811307291" + " " + "songListItem",
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
    className: "jsx-811307291" + " " + "songListItem",
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
    className: "jsx-811307291" + " " + "playlistContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-811307291" + " " + "playlistListTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Playlists"), __jsx("ol", {
    className: "jsx-811307291" + " " + "playlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-811307291" + " " + "playlistListItem",
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
    className: "jsx-811307291" + " " + "playlistListItem",
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
    className: "jsx-811307291" + " " + "playlistListItem",
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
    className: "jsx-811307291" + " " + "playlistListItem",
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
    className: "jsx-811307291" + " " + "playlistListItem",
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
    id: "811307291",
    __self: this
  }, ".playlistListTitle.jsx-811307291{margin:0;padding-bottom:5px;padding-top:5px;text-align:center;color:#1DB954;}.playlistContainer.jsx-811307291{font-family:console,monospace;margin:0px;background:black;width:75vw;left:0;position:absolute;top:calc(35vh + 230.4px);}.playlistListItem.jsx-811307291{margin:0px;padding-bottom:10px;color:#FFF;}.profileHead.jsx-811307291{width:75vw;height:35vh;position:absolute;left:0;top:50px;font-family:console,monospace;}.recentlyMostPlayed.jsx-811307291{background:black;color:#1DB954;width:75vw;position:absolute;top:calc(35vh + 50px);left:0;font-family:console,monospace;}.recentlyMostPlayedHead.jsx-811307291{margin:0;padding-top:5px;padding-bottom:5px;text-align:center;}.createBtn.jsx-811307291{position:absolute;font-family:console,monospace;left:calc( 37.5vw - 211.46px / 2);background:#1DB954;color:#FFF;font-size:14px;border:none;border-radius:500px;padding:16px 48px 18px;-webkit-transition:background 0.4s;-webkit-transition-duration:background 0.4s;transition-duration:background 0.4s;}.profileHeadText.jsx-811307291{margin:0px;padding:0px;text-align:center;position:relative;top:calc( 35vh - 155px);}.songList.jsx-811307291{margin:0px;padding-bottom:10px;}.songListItem.jsx-811307291{margin:0px;padding-bottom:10px;color:white;}.createBtn.jsx-811307291:hover{background:black;color:#1DB954;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2tCLEFBR2lCLEFBT3FCLEFBU3JCLEFBS0MsQUFVTSxBQVVSLEFBTVcsQUFjVCxBQU9BLEFBS0QsQUFPTyxTQS9FSSxBQXlDTCxFQXpCSSxBQUtSLEFBd0NBLEFBUVEsQUFJQSxNQTFDTixBQWlEQSxDQWpDbUIsS0F4QmYsQUF1Q0EsRUFwQkMsR0F6Q0QsRUFNUCxDQVVELEFBZUEsQUFzQ1osQUFLYyxBQU1kLFVBekVtQixBQWdCWCxBQXVDWSxDQTdDcEIsQUFlb0IsQ0E0Q3BCLENBM0VxQixBQXlDRixJQWxCUixBQXVCMkIsU0F0QkwsQ0FqQnBCLENBdURhLENBOUJGLEVBL0JOLEFBeUNsQixPQWxDUyxPQU5QLEFBT2lCLE1Bd0JYLEFBZWMsQ0FldEIsSUFyQ0EsRUFRaUMsS0F4Qk4sT0F1Q1osV0FDSSxPQXZDbkIsQUF5QkEsUUFlZ0IsWUFDUSxvQkFDRyx1QkFDWSxtQ0FDRCxnRkFDdEMiLCJmaWxlIjoiL2hvbWUvam9lL3B1YmxpY19odG1sL2NyZWF0aXZlcHJvamVjdC03am9lLWpvbi9jb21wcy9wcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgU29uZyBmcm9tICcuL3NvbmcnO1xyXG5pbXBvcnQgUGxheWxpc3QgZnJvbSAnLi9wbGF5bGlzdCc7XHJcbi8vIGxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTE5MS0xMS00OS51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tJzsgLy9Kb25cclxubGV0IGF3c2luc3RhbmNlID0gJ2h0dHA6Ly9lYzItMTgtMjM0LTEwOS0yMzguY29tcHV0ZS0xLmFtYXpvbmF3cy5jb20nOyAvL0pvZVxyXG5cclxuY29uc3QgUHJvZmlsZSA9IChwcm9wcykgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUhlYWRcIj5cclxuICAgICAgey8qIDxpbWcgaWQ9XCJwcm9maWxlSW1hZ2VIZXJlXCI+PC9pbWc+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVIZWFkVGV4dFwiPlxyXG4gICAgICA8aDMgaWQ9XCJ1c2VybmFtZUhlcmVcIj57cHJvcHMuZGF0YS51c2VybmFtZX08L2gzPlxyXG4gICAgICA8cCBpZD1cInBsYXlsaXN0TGlrZXNIZXJlXCI+UGxheWxpc3QgbGlrZXM8L3A+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY3JlYXRlQnRuXCIgdmFsdWU9XCJDcmVhdGUgUGxheWxpc3RcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjZW50bHlNb3N0UGxheWVkXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInJlY2VudGx5TW9zdFBsYXllZEhlYWRcIj5SZWNlbnRseSBNb3N0IFBsYXllZDwvaDQ+XHJcbiAgICAgIDxvbCBjbGFzc05hbWUgPSBcInNvbmdMaXN0XCI+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZSA9IFwic29uZ0xpc3RJdGVtXCI+PFNvbmc+PC9Tb25nPjwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZSA9IFwic29uZ0xpc3RJdGVtXCI+PFNvbmc+PC9Tb25nPjwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZSA9IFwic29uZ0xpc3RJdGVtXCI+PFNvbmc+PC9Tb25nPjwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZSA9IFwic29uZ0xpc3RJdGVtXCI+PFNvbmc+PC9Tb25nPjwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZSA9IFwic29uZ0xpc3RJdGVtXCI+PFNvbmc+PC9Tb25nPjwvbGk+XHJcbiAgICAgIDwvb2w+XHJcbiAgICAgIDwvZGl2PiBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdENvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJwbGF5bGlzdExpc3RUaXRsZVwiPlBsYXlsaXN0czwvaDQ+XHJcbiAgICAgICAgPG9sIGNsYXNzTmFtZT1cInBsYXlsaXN0XCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lID0gXCJwbGF5bGlzdExpc3RJdGVtXCI+PFBsYXlsaXN0PjwvUGxheWxpc3Q+PC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWUgPSBcInBsYXlsaXN0TGlzdEl0ZW1cIj48UGxheWxpc3Q+PC9QbGF5bGlzdD48L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZSA9IFwicGxheWxpc3RMaXN0SXRlbVwiPjxQbGF5bGlzdD48L1BsYXlsaXN0PjwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lID0gXCJwbGF5bGlzdExpc3RJdGVtXCI+PFBsYXlsaXN0PjwvUGxheWxpc3Q+PC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWUgPSBcInBsYXlsaXN0TGlzdEl0ZW1cIj48UGxheWxpc3Q+PC9QbGF5bGlzdD48L2xpPlxyXG4gICAgICAgIDwvb2w+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5wbGF5bGlzdExpc3RUaXRsZXtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMxREI5NTQ7XHJcbiAgICAgIH1cclxuICAgIC5wbGF5bGlzdENvbnRhaW5lcntcclxuICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICB3aWR0aDogNzV2dztcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIHRvcDogY2FsYygzNXZoICsgMjMwLjRweCk7XHJcbiAgICB9XHJcbiAgICAucGxheWxpc3RMaXN0SXRlbXtcclxuICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIGNvbG9yOiNGRkY7XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZUhlYWR7XHJcbiAgICAgIHdpZHRoOiA3NXZ3O1xyXG4gICAgICBoZWlnaHQ6IDM1dmg7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OjA7XHJcbiAgICAgIHRvcDogNTBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuXHJcbiAgICB9XHJcbiAgICAucmVjZW50bHlNb3N0UGxheWVke1xyXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgY29sb3I6ICMxREI5NTQ7XHJcbiAgICAgIHdpZHRoOjc1dnc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiBjYWxjKDM1dmggKyA1MHB4KTtcclxuICAgICAgbGVmdDowO1xyXG4gICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xyXG5cclxuICAgIH1cclxuICAgIC5yZWNlbnRseU1vc3RQbGF5ZWRIZWFke1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNyZWF0ZUJ0bntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuICAgICAgICBsZWZ0OiBjYWxjKCAzNy41dncgLSAyMTEuNDZweCAvIDIpO1xyXG4gICAgICAgIC8vIHRvcDogY2FsYyggMzV2aCAtIDU1cHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzFEQjk1NDtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggNDhweCAxOHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzO1xyXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBiYWNrZ3JvdW5kIDAuNHM7XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZUhlYWRUZXh0e1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiBjYWxjKCAzNXZoIC0gMTU1cHgpO1xyXG4gICAgfVxyXG4gICAgLnNvbmdMaXN0e1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgLy8gYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnNvbmdMaXN0SXRlbXtcclxuICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDhweCAwcHggOHB4ICAxMHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICB9XHJcbiAgICAuY3JlYXRlQnRuOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgIGNvbG9yOiAjMURCOTU0OyAgICAgXHJcbiAgICB9XHJcbiAgYH1cclxuICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXX0= */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/profile.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=home.js.134dcc8ebb8ce4123804.hot-update.js.map