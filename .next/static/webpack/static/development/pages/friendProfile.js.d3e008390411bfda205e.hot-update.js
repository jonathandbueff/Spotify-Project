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
    className: "jsx-3447818530",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3447818530" + " " + "profileHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3447818530" + " " + "profileHeadText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h3", {
    id: "usernameHere",
    className: "jsx-3447818530",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.data.username), __jsx("p", {
    id: "playlistLikesHere",
    className: "jsx-3447818530",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Playlist likes"), __jsx("input", {
    type: "button",
    value: "Create Playlist",
    className: "jsx-3447818530" + " " + "createBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-3447818530" + " " + "recentlyMostPlayed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3447818530" + " " + "recentlyMostPlayedHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Recently Most Played"), __jsx("ol", {
    className: "jsx-3447818530" + " " + "songList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.data.topTracks.map(function (p) {
    return __jsx("li", {
      key: p.name,
      className: "jsx-3447818530" + " " + "songListItem",
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
    className: "jsx-3447818530" + " " + "playlistContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-3447818530" + " " + "playlistListTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Playlists"), __jsx("ol", {
    className: "jsx-3447818530" + " " + "playlist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, props.data.allPlaylists.map(function (p) {
    return __jsx("li", {
      key: p.title + "PlaylistItem",
      className: "jsx-3447818530" + " " + "playlistListItem",
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
    id: "3447818530",
    __self: this
  }, ".playlistListTitle.jsx-3447818530{margin:0;padding-bottom:5px;padding-top:5px;text-align:center;color:#1DB954;}.playlistContainer.jsx-3447818530{font-family:console,monospace;margin:0px;background:black;width:75vw;left:0;position:absolute;top:calc(35vh + 230.4px);}.playlistListItem.jsx-3447818530{margin:0px;padding-bottom:10px;color:#FFF;}.profileHead.jsx-3447818530{max-width:70vw;height:35vh;position:absolute;left:0;top:50px;font-family:console,monospace;}.recentlyMostPlayed.jsx-3447818530{background:black;color:#1DB954;width:70vw;position:absolute;top:calc(35vh + 50px);left:0;font-family:console,monospace;}.recentlyMostPlayedHead.jsx-3447818530{margin:0;padding-top:5px;padding-bottom:5px;text-align:center;}.createBtn.jsx-3447818530{position:absolute;font-family:console,monospace;left:calc( 37.5vw - 211.46px / 2);background:#1DB954;color:#FFF;font-size:14px;border:none;border-radius:500px;padding:16px 48px 18px;-webkit-transition:background 0.4s;-webkit-transition-duration:background 0.4s;transition-duration:background 0.4s;}.profileHeadText.jsx-3447818530{margin:0px;padding:0px;text-align:center;position:relative;color:white;top:calc( 35vh - 155px);text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;}.songList.jsx-3447818530{margin:0px;padding-bottom:10px;}.songListItem.jsx-3447818530{margin:0px;padding-bottom:10px;color:white;}.createBtn.jsx-3447818530:hover{background:black;color:#1DB954;}.playlist.jsx-3447818530{margin:0px;padding-bottom:10px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmtCLEFBR2lCLEFBT3FCLEFBU3JCLEFBS0ssQUFVRSxBQVVSLEFBTVcsQUFjVCxBQVNBLEFBS0QsQUFPTyxBQUlQLFNBckZXLEFBeUNMLEVBekJJLEFBNkNSLEFBVVEsQUFJQSxBQVdBLElBakVSLEVBVUUsQUFtREEsQ0FuQ21CLEtBZWYsRUFwQkMsRUFuQkQsQ0F0QkEsRUFNUCxDQVVELEFBZUEsQUF3Q1osQUFLYyxBQU1kLEFBS2MsVUFoRkssQUF1REMsQ0E3Q3BCLEFBZW9CLENBOENwQixBQVdBLENBeEZxQixBQXlDRixDQW5CWCxHQXdCOEIsSUF2QjNCLE1BaEJFLENBdURDLENBOUJVLENBUlMsQ0F2QmYsQUF5Q2xCLE9BbENTLEVBdURpQixLQTdEeEIsQUFPaUIsTUF3QlgsQUFlYyxPQWRXLEVBUmpDLEdBaEIyQixDQXNEd0MsTUFmcEQsV0FDSSxPQXZDbkIsQUF5QkEsUUFlZ0IsWUFDUSxrQkFheEIsRUFaMkIsdUJBQ1ksbUNBQ0QsZ0ZBQ3RDIiwiZmlsZSI6Ii9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcHJvZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFNvbmcgZnJvbSAnLi9zb25nJztcclxuaW1wb3J0IFBsYXlsaXN0IGZyb20gJy4vcGxheWxpc3QnO1xyXG4vLyBsZXQgYXdzaW5zdGFuY2UgPSAnaHR0cDovL2VjMi0xOC0xOTEtMTEtNDkudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbSc7IC8vSm9uXHJcbmxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTIzNC0xMDktMjM4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tJzsgLy9Kb2VcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAocHJvcHMpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVIZWFkXCI+XHJcbiAgICAgIHsvKiA8aW1nIGlkPVwicHJvZmlsZUltYWdlSGVyZVwiPjwvaW1nPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlSGVhZFRleHRcIj5cclxuICAgICAgPGgzIGlkPVwidXNlcm5hbWVIZXJlXCI+e3Byb3BzLmRhdGEudXNlcm5hbWV9PC9oMz5cclxuICAgICAgPHAgaWQ9XCJwbGF5bGlzdExpa2VzSGVyZVwiPlBsYXlsaXN0IGxpa2VzPC9wPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNyZWF0ZUJ0blwiIHZhbHVlPVwiQ3JlYXRlIFBsYXlsaXN0XCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2VudGx5TW9zdFBsYXllZFwiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJyZWNlbnRseU1vc3RQbGF5ZWRIZWFkXCI+UmVjZW50bHkgTW9zdCBQbGF5ZWQ8L2g0PlxyXG4gICAgICA8b2wgY2xhc3NOYW1lID0gXCJzb25nTGlzdFwiPlxyXG4gICAgICAgIHtwcm9wcy5kYXRhLnRvcFRyYWNrcy5tYXAocCA9PiAoPGxpIGNsYXNzTmFtZSA9XCJzb25nTGlzdEl0ZW1cIiBrZXk9e3AubmFtZX0+PFNvbmcgey4uLnB9Lz48L2xpPikpfVxyXG4gICAgICA8L29sPlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWxpc3RDb250YWluZXJcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwicGxheWxpc3RMaXN0VGl0bGVcIj5QbGF5bGlzdHM8L2g0PlxyXG4gICAgICAgIDxvbCBjbGFzc05hbWU9XCJwbGF5bGlzdFwiPlxyXG4gICAgICAgICAge3Byb3BzLmRhdGEuYWxsUGxheWxpc3RzLm1hcChwID0+ICg8bGkgY2xhc3NOYW1lID1cInBsYXlsaXN0TGlzdEl0ZW1cIiBrZXk9e3AudGl0bGUrXCJQbGF5bGlzdEl0ZW1cIn0+PFBsYXlsaXN0IGNsYXNzTmFtZT17cC50aXRsZX0gey4uLnB9Lz48L2xpPikpfVxyXG4gICAgICAgIDwvb2w+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5wbGF5bGlzdExpc3RUaXRsZXtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMxREI5NTQ7XHJcbiAgICAgIH1cclxuICAgIC5wbGF5bGlzdENvbnRhaW5lcntcclxuICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICB3aWR0aDogNzV2dztcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIHRvcDogY2FsYygzNXZoICsgMjMwLjRweCk7XHJcbiAgICB9XHJcbiAgICAucGxheWxpc3RMaXN0SXRlbXtcclxuICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIGNvbG9yOiNGRkY7XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZUhlYWR7XHJcbiAgICAgIG1heC13aWR0aDogNzB2dztcclxuICAgICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDowO1xyXG4gICAgICB0b3A6IDUwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBjb25zb2xlLCBtb25vc3BhY2U7XHJcblxyXG4gICAgfVxyXG4gICAgLnJlY2VudGx5TW9zdFBsYXllZHtcclxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgIGNvbG9yOiAjMURCOTU0O1xyXG4gICAgICB3aWR0aDo3MHZ3O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogY2FsYygzNXZoICsgNTBweCk7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuXHJcbiAgICB9XHJcbiAgICAucmVjZW50bHlNb3N0UGxheWVkSGVhZHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jcmVhdGVCdG57XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBjb25zb2xlLCBtb25vc3BhY2U7XHJcbiAgICAgICAgbGVmdDogY2FsYyggMzcuNXZ3IC0gMjExLjQ2cHggLyAyKTtcclxuICAgICAgICAvLyB0b3A6IGNhbGMoIDM1dmggLSA1NXB4KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiMxREI5NTQ7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDQ4cHggMThweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC40cztcclxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogYmFja2dyb3VuZCAwLjRzO1xyXG4gICAgfVxyXG4gICAgLnByb2ZpbGVIZWFkVGV4dHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdG9wOiBjYWxjKCAzNXZoIC0gMTU1cHgpO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogLTFweCAwIGJsYWNrLCAwIDFweCBibGFjaywgMXB4IDAgYmxhY2ssIDAgLTFweCBibGFjaztcclxuICAgIH1cclxuICAgIC5zb25nTGlzdHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5zb25nTGlzdEl0ZW17XHJcbiAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAvLyBwYWRkaW5nOiA4cHggMHB4IDhweCAgMTBweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgfVxyXG4gICAgLmNyZWF0ZUJ0bjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICBjb2xvcjogIzFEQjk1NDsgICAgIFxyXG4gICAgfVxyXG4gICAgLnBsYXlsaXN0e1xyXG4gICAgICBtYXJnaW46MHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgLy8gcGFkZGluZzogOHB4IDBweCA4cHggIDEwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIH1cclxuICBgfVxyXG4gIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gICAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXX0= */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/profile.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=friendProfile.js.d3e008390411bfda205e.hot-update.js.map