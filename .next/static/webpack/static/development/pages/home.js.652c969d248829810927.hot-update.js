webpackHotUpdate("static/development/pages/home.js",{

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
    className: "jsx-3626638409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3626638409" + " " + "profileHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3626638409" + " " + "profileHeadText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h3", {
    id: "usernameHere",
    className: "jsx-3626638409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.data.username), __jsx("p", {
    id: "playlistLikesHere",
    className: "jsx-3626638409",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Playlist likes"), __jsx("input", {
    type: "button",
    value: "Create Playlist",
    className: "jsx-3626638409" + " " + "createBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-3626638409" + " " + "recentlyMostPlayed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3626638409" + " " + "recentlyMostPlayedHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Recently Most Played"), __jsx("ol", {
    className: "jsx-3626638409" + " " + "songList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.data.topTracks.map(function (p) {
    return __jsx("li", {
      key: p.name,
      className: "jsx-3626638409" + " " + "songListItem",
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
    className: "jsx-3626638409" + " " + "playlistContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3626638409" + " " + "playlistListTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Playlists"), __jsx("ol", {
    className: "jsx-3626638409" + " " + "playlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, props.data.allPlaylists.map(function (p) {
    return __jsx("li", {
      key: p.title + "PlaylistItem",
      className: "jsx-3626638409" + " " + "playlistListItem",
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
    id: "3626638409",
    __self: this
  }, ".playlistListTitle.jsx-3626638409{margin:0;padding-bottom:5px;padding-top:5px;text-align:center;color:#1DB954;}.playlistContainer.jsx-3626638409{font-family:console,monospace;margin:0px;background:black;width:70vw;left:0;position:absolute;top:calc(35vh + 230.4px);}.playlistListItem.jsx-3626638409{margin:0px;padding-bottom:10px;color:#FFF;}.profileHead.jsx-3626638409{width:75vw;height:35vh;position:absolute;left:0;top:50px;font-family:console,monospace;}.recentlyMostPlayed.jsx-3626638409{background:black;color:#1DB954;width:75vw;position:absolute;top:calc(35vh + 50px);left:0;font-family:console,monospace;}.recentlyMostPlayedHead.jsx-3626638409{margin:0;padding-top:5px;padding-bottom:5px;text-align:center;}.createBtn.jsx-3626638409{position:absolute;font-family:console,monospace;left:calc( 37.5vw - 211.46px / 2);background:#1DB954;color:#FFF;font-size:14px;border:none;border-radius:500px;padding:16px 48px 18px;-webkit-transition:background 0.4s;-webkit-transition-duration:background 0.4s;transition-duration:background 0.4s;}.profileHeadText.jsx-3626638409{margin:0px;padding:0px;text-align:center;position:relative;color:white;top:calc( 35vh - 155px);text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;}.songList.jsx-3626638409{margin:0px;padding-bottom:10px;}.songListItem.jsx-3626638409{margin:0px;padding-bottom:10px;color:white;}.createBtn.jsx-3626638409:hover{background:black;color:#1DB954;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmtCLEFBR2lCLEFBT3FCLEFBU3JCLEFBS0MsQUFVTSxBQVVSLEFBTVcsQUFjVCxBQVNBLEFBS0QsQUFPTyxTQWpGSSxBQXlDTCxFQXpCSSxBQUtSLEFBd0NBLEFBVVEsQUFJQSxNQTVDTixBQW1EQSxDQW5DbUIsS0F4QmYsQUF1Q0EsRUFwQkMsR0F6Q0QsRUFNUCxDQVVELEFBZUEsQUF3Q1osQUFLYyxBQU1kLFVBM0VtQixBQWdCWCxBQXVDWSxDQTdDcEIsQUFlb0IsQ0E4Q3BCLENBN0VxQixBQXlDRixJQWxCUixBQXVCMkIsU0F0QkwsQ0FqQnBCLENBdURDLENBOUJVLEVBL0JOLEFBeUNsQixPQWxDUyxFQXVEaUIsS0E3RHhCLEFBT2lCLE1Bd0JYLEFBZWMsS0F0QnRCLEVBUWlDLEtBeEJOLENBc0R3QyxNQWZwRCxXQUNJLE9BdkNuQixBQXlCQSxRQWVnQixZQUNRLGtCQWF4QixFQVoyQix1QkFDWSxtQ0FDRCxnRkFDdEMiLCJmaWxlIjoiL2hvbWUvam9lL3B1YmxpY19odG1sL2NyZWF0aXZlcHJvamVjdC03am9lLWpvbi9jb21wcy9wcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgU29uZyBmcm9tICcuL3NvbmcnO1xyXG5pbXBvcnQgUGxheWxpc3QgZnJvbSAnLi9wbGF5bGlzdCc7XHJcbi8vIGxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTE5MS0xMS00OS51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tJzsgLy9Kb25cclxubGV0IGF3c2luc3RhbmNlID0gJ2h0dHA6Ly9lYzItMTgtMjM0LTEwOS0yMzguY29tcHV0ZS0xLmFtYXpvbmF3cy5jb20nOyAvL0pvZVxyXG5cclxuY29uc3QgUHJvZmlsZSA9IChwcm9wcykgPT4gKFxyXG4gICAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZUhlYWRcIj5cclxuICAgICAgey8qIDxpbWcgaWQ9XCJwcm9maWxlSW1hZ2VIZXJlXCI+PC9pbWc+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVIZWFkVGV4dFwiPlxyXG4gICAgICA8aDMgaWQ9XCJ1c2VybmFtZUhlcmVcIj57cHJvcHMuZGF0YS51c2VybmFtZX08L2gzPlxyXG4gICAgICA8cCBpZD1cInBsYXlsaXN0TGlrZXNIZXJlXCI+UGxheWxpc3QgbGlrZXM8L3A+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY3JlYXRlQnRuXCIgdmFsdWU9XCJDcmVhdGUgUGxheWxpc3RcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjZW50bHlNb3N0UGxheWVkXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInJlY2VudGx5TW9zdFBsYXllZEhlYWRcIj5SZWNlbnRseSBNb3N0IFBsYXllZDwvaDQ+XHJcbiAgICAgIDxvbCBjbGFzc05hbWUgPSBcInNvbmdMaXN0XCI+XHJcbiAgICAgICAge3Byb3BzLmRhdGEudG9wVHJhY2tzLm1hcChwID0+ICg8bGkgY2xhc3NOYW1lID1cInNvbmdMaXN0SXRlbVwiIGtleT17cC5uYW1lfT48U29uZyB7Li4ucH0vPjwvbGk+KSl9XHJcbiAgICAgIDwvb2w+XHJcbiAgICAgIDwvZGl2PiBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdENvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJwbGF5bGlzdExpc3RUaXRsZVwiPlBsYXlsaXN0czwvaDQ+XHJcbiAgICAgICAgPG9sIGNsYXNzTmFtZT1cInBsYXlsaXN0XCI+XHJcbiAgICAgICAgICB7cHJvcHMuZGF0YS5hbGxQbGF5bGlzdHMubWFwKHAgPT4gKDxsaSBjbGFzc05hbWUgPVwicGxheWxpc3RMaXN0SXRlbVwiIGtleT17cC50aXRsZStcIlBsYXlsaXN0SXRlbVwifT48UGxheWxpc3QgY2xhc3NOYW1lPXtwLnRpdGxlfSB7Li4ucH0vPjwvbGk+KSl9XHJcbiAgICAgICAgPC9vbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnBsYXlsaXN0TGlzdFRpdGxle1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzFEQjk1NDtcclxuICAgICAgfVxyXG4gICAgLnBsYXlsaXN0Q29udGFpbmVye1xyXG4gICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgdG9wOiBjYWxjKDM1dmggKyAyMzAuNHB4KTtcclxuICAgIH1cclxuICAgIC5wbGF5bGlzdExpc3RJdGVte1xyXG4gICAgICBtYXJnaW46MHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgY29sb3I6I0ZGRjtcclxuICAgIH1cclxuICAgIC5wcm9maWxlSGVhZHtcclxuICAgICAgd2lkdGg6IDc1dnc7XHJcbiAgICAgIGhlaWdodDogMzV2aDtcclxuICAgICAgLy8gYmFja2dyb3VuZDogbGlnaHRncmV5O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xyXG5cclxuICAgIH1cclxuICAgIC5yZWNlbnRseU1vc3RQbGF5ZWR7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICBjb2xvcjogIzFEQjk1NDtcclxuICAgICAgd2lkdGg6NzV2dztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IGNhbGMoMzV2aCArIDUwcHgpO1xyXG4gICAgICBsZWZ0OjA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBjb25zb2xlLCBtb25vc3BhY2U7XHJcblxyXG4gICAgfVxyXG4gICAgLnJlY2VudGx5TW9zdFBsYXllZEhlYWR7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY3JlYXRlQnRue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoIDM3LjV2dyAtIDIxMS40NnB4IC8gMik7XHJcbiAgICAgICAgLy8gdG9wOiBjYWxjKCAzNXZoIC0gNTVweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDojMURCOTU0O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCA0OHB4IDE4cHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHM7XHJcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IGJhY2tncm91bmQgMC40cztcclxuICAgIH1cclxuICAgIC5wcm9maWxlSGVhZFRleHR7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHRvcDogY2FsYyggMzV2aCAtIDE1NXB4KTtcclxuICAgICAgdGV4dC1zaGFkb3c6IC0xcHggMCBibGFjaywgMCAxcHggYmxhY2ssIDFweCAwIGJsYWNrLCAwIC0xcHggYmxhY2s7XHJcbiAgICB9XHJcbiAgICAuc29uZ0xpc3R7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuc29uZ0xpc3RJdGVte1xyXG4gICAgICBtYXJnaW46MHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgLy8gcGFkZGluZzogOHB4IDBweCA4cHggIDEwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIH1cclxuICAgIC5jcmVhdGVCdG46aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgY29sb3I6ICMxREI5NTQ7ICAgICBcclxuICAgIH1cclxuICBgfVxyXG4gIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gICAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXX0= */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/profile.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=home.js.652c969d248829810927.hot-update.js.map