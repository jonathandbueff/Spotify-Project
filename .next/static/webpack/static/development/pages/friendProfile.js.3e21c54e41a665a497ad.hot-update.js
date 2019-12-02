webpackHotUpdate("static/development/pages/friendProfile.js",{

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

var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/profile.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



 // let awsinstance = 'http://ec2-18-191-11-49.us-east-2.compute.amazonaws.com'; //Jon

var awsinstance = 'http://ec2-18-234-109-238.compute-1.amazonaws.com'; //Joe

var Profile = function Profile(props) {
  return __jsx("div", {
    className: "jsx-2712717257",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2712717257" + " " + "profileHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2712717257" + " " + "profileHeadText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h3", {
    id: "usernameHere",
    className: "jsx-2712717257",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.data.username), __jsx("p", {
    id: "playlistLikesHere",
    className: "jsx-2712717257",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Playlist likes"), __jsx("input", {
    type: "button",
    value: "Create Playlist",
    className: "jsx-2712717257" + " " + "createBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-2712717257" + " " + "recentlyMostPlayed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-2712717257" + " " + "recentlyMostPlayedHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Recently Most Played"), __jsx("ol", {
    className: "jsx-2712717257" + " " + "songList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.data.topTracks.map(function (p) {
    return __jsx("li", {
      key: p.name,
      className: "jsx-2712717257" + " " + "songListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx(_song__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, p, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })));
  }))), __jsx("div", {
    className: "jsx-2712717257" + " " + "playlistContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-2712717257" + " " + "playlistListTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Playlists"), __jsx("ol", {
    className: "jsx-2712717257" + " " + "playlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, props.data.allPlaylists.map(function (p) {
    return __jsx("li", {
      key: p.title + "PlaylistItem",
      className: "jsx-2712717257" + " " + "playlistListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(_playlist__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: p.title
    }, p, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2712717257",
    __self: this
  }, ".playlistListTitle.jsx-2712717257{margin:0;padding-bottom:5px;padding-top:5px;text-align:center;color:#1DB954;}.playlistContainer.jsx-2712717257{font-family:console,monospace;margin:0px;background:black;width:75vw;left:0;position:absolute;top:calc(35vh + 230.4px);}.playlistListItem.jsx-2712717257{margin:0px;padding-bottom:10px;color:#FFF;}.profileHead.jsx-2712717257{width:70%;height:35vh;position:absolute;left:0;top:50px;font-family:console,monospace;}.recentlyMostPlayed.jsx-2712717257{background:black;color:#1DB954;width:75vw;position:absolute;top:calc(35vh + 50px);left:0;font-family:console,monospace;}.recentlyMostPlayedHead.jsx-2712717257{margin:0;padding-top:5px;padding-bottom:5px;text-align:center;}.createBtn.jsx-2712717257{position:absolute;font-family:console,monospace;left:calc( 37.5vw - 211.46px / 2);background:#1DB954;color:#FFF;font-size:14px;border:none;border-radius:500px;padding:16px 48px 18px;-webkit-transition:background 0.4s;-webkit-transition-duration:background 0.4s;transition-duration:background 0.4s;}.profileHeadText.jsx-2712717257{margin:0px;padding:0px;text-align:center;position:relative;color:white;top:calc( 35vh - 155px);text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;}.songList.jsx-2712717257{margin:0px;padding-bottom:10px;}.songListItem.jsx-2712717257{margin:0px;padding-bottom:10px;color:white;}.createBtn.jsx-2712717257:hover{background:black;color:#1DB954;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmtCLEFBR2lCLEFBT3FCLEFBU3JCLEFBS0EsQUFVTyxBQVVSLEFBTVcsQUFjVCxBQVNBLEFBS0QsQUFPTyxTQWpGSSxBQXlDTCxDQXBCSixDQUxRLEFBNkNSLEFBVVEsQUFJQSxNQTVDTixBQW1EQSxDQW5DbUIsSUF4QmYsQ0F1Q0EsRUFwQkMsR0F6Q0QsRUFNUCxDQVVELEFBZUEsQUF3Q1osQUFLYyxBQU1kLFNBM0RRLENBaEJXLEFBdURDLENBN0NwQixBQWVvQixDQThDcEIsQ0E3RXFCLEFBeUNGLEdBbEJSLENBdUIyQixRQXRCTCxFQWpCcEIsQ0F1REMsQ0E5QlUsRUEvQk4sQUF5Q2xCLE9BbENTLEVBdURpQixLQTdEeEIsQUFPaUIsTUF3QlgsQUFlYyxJQXRCdEIsR0FRaUMsS0F4Qk4sQ0FzRHdDLE1BZnBELFdBQ0ksT0F2Q25CLEFBeUJBLFFBZWdCLFlBQ1Esa0JBYXhCLEVBWjJCLHVCQUNZLG1DQUNELGdGQUN0QyIsImZpbGUiOiIvaG9tZS9qb2UvcHVibGljX2h0bWwvY3JlYXRpdmVwcm9qZWN0LTdqb2Utam9uL2NvbXBzL3Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBTb25nIGZyb20gJy4vc29uZyc7XHJcbmltcG9ydCBQbGF5bGlzdCBmcm9tICcuL3BsYXlsaXN0JztcclxuLy8gbGV0IGF3c2luc3RhbmNlID0gJ2h0dHA6Ly9lYzItMTgtMTkxLTExLTQ5LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb20nOyAvL0pvblxyXG5sZXQgYXdzaW5zdGFuY2UgPSAnaHR0cDovL2VjMi0xOC0yMzQtMTA5LTIzOC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbSc7IC8vSm9lXHJcblxyXG5jb25zdCBQcm9maWxlID0gKHByb3BzKSA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlSGVhZFwiPlxyXG4gICAgICB7LyogPGltZyBpZD1cInByb2ZpbGVJbWFnZUhlcmVcIj48L2ltZz4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUhlYWRUZXh0XCI+XHJcbiAgICAgIDxoMyBpZD1cInVzZXJuYW1lSGVyZVwiPntwcm9wcy5kYXRhLnVzZXJuYW1lfTwvaDM+XHJcbiAgICAgIDxwIGlkPVwicGxheWxpc3RMaWtlc0hlcmVcIj5QbGF5bGlzdCBsaWtlczwvcD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjcmVhdGVCdG5cIiB2YWx1ZT1cIkNyZWF0ZSBQbGF5bGlzdFwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWNlbnRseU1vc3RQbGF5ZWRcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwicmVjZW50bHlNb3N0UGxheWVkSGVhZFwiPlJlY2VudGx5IE1vc3QgUGxheWVkPC9oND5cclxuICAgICAgPG9sIGNsYXNzTmFtZSA9IFwic29uZ0xpc3RcIj5cclxuICAgICAgICB7cHJvcHMuZGF0YS50b3BUcmFja3MubWFwKHAgPT4gKDxsaSBjbGFzc05hbWUgPVwic29uZ0xpc3RJdGVtXCIga2V5PXtwLm5hbWV9PjxTb25nIHsuLi5wfS8+PC9saT4pKX1cclxuICAgICAgPC9vbD5cclxuICAgICAgPC9kaXY+IFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInBsYXlsaXN0TGlzdFRpdGxlXCI+UGxheWxpc3RzPC9oND5cclxuICAgICAgICA8b2wgY2xhc3NOYW1lPVwicGxheWxpc3RcIj5cclxuICAgICAgICAgIHtwcm9wcy5kYXRhLmFsbFBsYXlsaXN0cy5tYXAocCA9PiAoPGxpIGNsYXNzTmFtZSA9XCJwbGF5bGlzdExpc3RJdGVtXCIga2V5PXtwLnRpdGxlK1wiUGxheWxpc3RJdGVtXCJ9PjxQbGF5bGlzdCBjbGFzc05hbWU9e3AudGl0bGV9IHsuLi5wfS8+PC9saT4pKX1cclxuICAgICAgICA8L29sPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAucGxheWxpc3RMaXN0VGl0bGV7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMURCOTU0O1xyXG4gICAgICB9XHJcbiAgICAucGxheWxpc3RDb250YWluZXJ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBjb25zb2xlLCBtb25vc3BhY2U7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgd2lkdGg6IDc1dnc7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICB0b3A6IGNhbGMoMzV2aCArIDIzMC40cHgpO1xyXG4gICAgfVxyXG4gICAgLnBsYXlsaXN0TGlzdEl0ZW17XHJcbiAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICBjb2xvcjojRkZGO1xyXG4gICAgfVxyXG4gICAgLnByb2ZpbGVIZWFke1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBoZWlnaHQ6IDM1dmg7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OjA7XHJcbiAgICAgIHRvcDogNTBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuXHJcbiAgICB9XHJcbiAgICAucmVjZW50bHlNb3N0UGxheWVke1xyXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgY29sb3I6ICMxREI5NTQ7XHJcbiAgICAgIHdpZHRoOjc1dnc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiBjYWxjKDM1dmggKyA1MHB4KTtcclxuICAgICAgbGVmdDowO1xyXG4gICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xyXG5cclxuICAgIH1cclxuICAgIC5yZWNlbnRseU1vc3RQbGF5ZWRIZWFke1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNyZWF0ZUJ0bntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuICAgICAgICBsZWZ0OiBjYWxjKCAzNy41dncgLSAyMTEuNDZweCAvIDIpO1xyXG4gICAgICAgIC8vIHRvcDogY2FsYyggMzV2aCAtIDU1cHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzFEQjk1NDtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggNDhweCAxOHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzO1xyXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBiYWNrZ3JvdW5kIDAuNHM7XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZUhlYWRUZXh0e1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB0b3A6IGNhbGMoIDM1dmggLSAxNTVweCk7XHJcbiAgICAgIHRleHQtc2hhZG93OiAtMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLnNvbmdMaXN0e1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgLy8gYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnNvbmdMaXN0SXRlbXtcclxuICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDhweCAwcHggOHB4ICAxMHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICB9XHJcbiAgICAuY3JlYXRlQnRuOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgIGNvbG9yOiAjMURCOTU0OyAgICAgXHJcbiAgICB9XHJcbiAgYH1cclxuICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICAgIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7Il19 */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/profile.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=friendProfile.js.3e21c54e41a665a497ad.hot-update.js.map