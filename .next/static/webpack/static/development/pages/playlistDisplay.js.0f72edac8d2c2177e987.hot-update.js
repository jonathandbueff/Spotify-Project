webpackHotUpdate("static/development/pages/playlistDisplay.js",{

/***/ "./comps/playlistPage.js":
/*!*******************************!*\
  !*** ./comps/playlistPage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlaylistPage; });
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




 // let awsinstance = 'http://ec2-18-191-11-49.us-east-2.compute.amazonaws.com'; //Jon

var awsinstance = 'http://ec2-18-234-109-238.compute-1.amazonaws.com'; //Joe

function PlaylistPage(props) {
  // const followPlaylist = async () =>{
  //   // console.log(props.data.id);
  //   // console.log(props.data.accessToken);
  //   const result = await fetch(encodeURI(awsinstance+':3456/followPlaylist?playlistID='+props.data.id+'&accessToken='+props.data.accessToken));
  //   const success = await result.json();
  // }
  return __jsx("div", {
    className: "jsx-4189764825",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4189764825" + " " + "playlistHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4189764825" + " " + "playlistHeadText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("h3", {
    id: "playlistHere",
    className: "jsx-4189764825",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, props.data.playlist), __jsx("p", {
    id: "playlistCreator",
    className: "jsx-4189764825",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, props.data.creator))), __jsx("div", {
    className: "jsx-4189764825" + " " + "recentlyMostPlayed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("h4", {
    className: "jsx-4189764825" + " " + "recentlyMostPlayedHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Tracks"), __jsx("ol", {
    className: "jsx-4189764825" + " " + "songList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, props.data.tracks.map(function (p, i) {
    return __jsx("li", {
      key: p.track.name + i,
      className: "jsx-4189764825" + " " + "songListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, " ", __jsx(_song__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, p.track, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-4189764825" + " " + "hiddenMetrics",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Danceability: ", props.data.metrics[i].danceability, "   Energy: ", props.data.metrics[i].energy, "   Loudness: ", props.data.metrics[i].loudness, "   Speechiness: ", props.data.metrics[i].speechiness, "   Acousticness: ", props.data.metrics[i].acousticness));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4189764825",
    __self: this
  }, ".hiddenMetrics.jsx-4189764825{color:black;display:block;}.hiddenMetrics.jsx-4189764825:hover{color:#1DB954;}.songListItem.jsx-4189764825:hover .hiddenMetrics.jsx-4189764825{color:#1DB954;}.playlistListTitle.jsx-4189764825{margin:0;padding-bottom:5px;padding-top:5px;text-align:center;color:#1DB954;}.playlistContainer.jsx-4189764825{font-family:console,monospace;margin:0px;background:black;width:75%;left:0;position:absolute;top:calc(35vh + 230.4px);}.playlistListItem.jsx-4189764825{margin:0px;padding-bottom:10px;color:#FFF;}.playlistHead.jsx-4189764825{width:75vw;height:35vh;position:absolute;left:0;top:0px;font-family:console,monospace;}.recentlyMostPlayed.jsx-4189764825{background:black;color:#1DB954;width:100%;position:absolute;top:calc(35vh);left:0;font-family:console,monospace;}.recentlyMostPlayedHead.jsx-4189764825{margin:0;padding-top:5px;padding-bottom:5px;text-align:center;}.createBtn.jsx-4189764825{position:absolute;font-family:console,monospace;left:calc( 37.5vw - 142.19px / 2);background:#1DB954;color:#FFF;font-size:14px;border:none;border-radius:500px;padding:16px 48px 18px;-webkit-transition:background 0.4s;-webkit-transition-duration:background 0.4s;transition-duration:background 0.4s;}.playlistHeadText.jsx-4189764825{margin:0px;padding:0px;text-align:center;position:relative;color:white;top:calc( 35vh - 155px);text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;}.songList.jsx-4189764825{margin:0px;padding-bottom:28px;}.songListItem.jsx-4189764825{margin:0px;padding-bottom:10px;color:white;}.createBtn.jsx-4189764825:hover{background:black;color:#1DB954;}.playlist.jsx-4189764825{margin:0px;padding-bottom:10px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcGxheWxpc3RQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDa0IsQUFHcUIsQUFLRSxBQUdBLEFBSU4sQUFPcUIsQUFTckIsQUFLQyxBQVNNLEFBVVIsQUFNVyxBQWNULEFBU0EsQUFLRCxBQU9PLEFBSVAsU0FwRlcsQUF3Q0wsRUF4QkksQUFLUixBQXVDQSxBQVVRLEFBSUEsQUFXQSxDQWpHSixFQUtoQixBQUdBLEdBa0NjLEFBbURBLENBbkNtQixLQXZCZixBQXNDQSxFQXBCQyxDQXBEbkIsRUFZa0IsRUFNUCxDQVVELEFBZUMsQUF1Q2IsQUFLYyxBQU1kLEFBS2MsVUEvRUssQUFnQlgsQUFzQ1ksQ0E1Q3BCLEFBZW9CLENBNkNwQixBQVdBLENBdkZxQixBQXdDRixJQWpCVCxBQXNCNEIsUUFyQkwsRUFqQnJCLENBc0RFLENBN0JHLEVBL0JDLEFBd0NsQixNQWpDUyxHQXNEaUIsSUFyRFAsQUF3QlgsQ0EvQk4sTUFnQytCLEFBYVgsSUF0QnRCLE9BZjJCLEVBcUR3QyxNQWZwRCxXQWJmLEFBY21CLE1BdENuQixTQXVDZ0IsWUFDUSxrQkFheEIsRUFaMkIsdUJBQ1ksbUNBQ0QsZ0ZBQ3RDIiwiZmlsZSI6Ii9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcGxheWxpc3RQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgU29uZyBmcm9tICcuL3NvbmcnO1xyXG5pbXBvcnQgUGxheWxpc3QgZnJvbSAnLi9wbGF5bGlzdCc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gnO1xyXG4vLyBsZXQgYXdzaW5zdGFuY2UgPSAnaHR0cDovL2VjMi0xOC0xOTEtMTEtNDkudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbSc7IC8vSm9uXHJcbmxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTIzNC0xMDktMjM4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tJzsgLy9Kb2VcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXlsaXN0UGFnZSAocHJvcHMpICB7XHJcbiAgXHJcbiAgLy8gY29uc3QgZm9sbG93UGxheWxpc3QgPSBhc3luYyAoKSA9PntcclxuICAvLyAgIC8vIGNvbnNvbGUubG9nKHByb3BzLmRhdGEuaWQpO1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2cocHJvcHMuZGF0YS5hY2Nlc3NUb2tlbik7XHJcbiAgLy8gICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChlbmNvZGVVUkkoYXdzaW5zdGFuY2UrJzozNDU2L2ZvbGxvd1BsYXlsaXN0P3BsYXlsaXN0SUQ9Jytwcm9wcy5kYXRhLmlkKycmYWNjZXNzVG9rZW49Jytwcm9wcy5kYXRhLmFjY2Vzc1Rva2VuKSk7XHJcbiAgLy8gICBjb25zdCBzdWNjZXNzID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuICAvLyB9XHJcblxyXG4gcmV0dXJuICggXHJcbiAgICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdEhlYWRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdEhlYWRUZXh0XCI+XHJcbiAgICAgIDxoMyBpZD1cInBsYXlsaXN0SGVyZVwiPntwcm9wcy5kYXRhLnBsYXlsaXN0fTwvaDM+XHJcbiAgICAgIDxwIGlkPVwicGxheWxpc3RDcmVhdG9yXCI+e3Byb3BzLmRhdGEuY3JlYXRvcn08L3A+XHJcbiB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJjcmVhdGVCdG5cIj5Gb2xsb3c8L2J1dHRvbj4gKi99XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWNlbnRseU1vc3RQbGF5ZWRcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwicmVjZW50bHlNb3N0UGxheWVkSGVhZFwiPlRyYWNrczwvaDQ+XHJcbiAgICAgIDxvbCBjbGFzc05hbWUgPSBcInNvbmdMaXN0XCI+XHJcbiAgICAgICAge3Byb3BzLmRhdGEudHJhY2tzLm1hcCgocCwgaSk9PiAoPGxpIGNsYXNzTmFtZSA9XCJzb25nTGlzdEl0ZW1cIiBrZXk9e3AudHJhY2submFtZSArIGl9PiA8U29uZyB7Li4ucC50cmFja30vPiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJoaWRkZW5NZXRyaWNzXCI+XHJcbiAgICAgICAgRGFuY2VhYmlsaXR5OiB7cHJvcHMuZGF0YS5tZXRyaWNzW2ldLmRhbmNlYWJpbGl0eX0gICBFbmVyZ3k6IHtwcm9wcy5kYXRhLm1ldHJpY3NbaV0uZW5lcmd5fSAgIExvdWRuZXNzOiB7cHJvcHMuZGF0YS5tZXRyaWNzW2ldLmxvdWRuZXNzfSAgIFNwZWVjaGluZXNzOiB7cHJvcHMuZGF0YS5tZXRyaWNzW2ldLnNwZWVjaGluZXNzfSAgIEFjb3VzdGljbmVzczoge3Byb3BzLmRhdGEubWV0cmljc1tpXS5hY291c3RpY25lc3N9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT4pKX1cclxuICAgICAgPC9vbD5cclxuICAgICAgPC9kaXY+IFxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdENvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJwbGF5bGlzdExpc3RUaXRsZVwiPlBsYXlsaXN0czwvaDQ+ICovfVxyXG4gICAgICAgIHsvKiA8YSBocmVmID0ge3JlZGlyZWN0X3VyaX0gPiAqL31cclxuICAgICAgICB7LyogPG9sIGNsYXNzTmFtZT1cInBsYXlsaXN0XCI+XHJcbiAgICAgICAgICB7cHJvcHMuZGF0YS5hbGxQbGF5bGlzdHMubWFwKHAgPT4gKDxsaSBjbGFzc05hbWUgPVwicGxheWxpc3RMaXN0SXRlbVwiIGtleT17cC50aXRsZStcIlBsYXlsaXN0SXRlbVwifT4gPFBsYXlsaXN0IGNsYXNzTmFtZT17cC50aXRsZX0gey4uLnB9Lz48L2xpPikpfVxyXG4gICAgICAgIDwvb2w+ICovfVxyXG4gICAgICAgIHsvKiA8L2E+ICovfVxyXG4gICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5oaWRkZW5NZXRyaWNze1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmhpZGRlbk1ldHJpY3M6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMURCOTU0O1xyXG4gICAgICB9XHJcbiAgICAgIC5zb25nTGlzdEl0ZW06aG92ZXIgLmhpZGRlbk1ldHJpY3N7XHJcbiAgICAgICAgY29sb3I6ICMxREI5NTQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wbGF5bGlzdExpc3RUaXRsZXtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMxREI5NTQ7XHJcbiAgICAgIH1cclxuICAgIC5wbGF5bGlzdENvbnRhaW5lcntcclxuICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICB3aWR0aDogNzUlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgdG9wOiBjYWxjKDM1dmggKyAyMzAuNHB4KTtcclxuICAgIH1cclxuICAgIC5wbGF5bGlzdExpc3RJdGVte1xyXG4gICAgICBtYXJnaW46MHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgY29sb3I6I0ZGRjtcclxuICAgIH1cclxuICAgIC5wbGF5bGlzdEhlYWR7XHJcbiAgICAgIHdpZHRoOiA3NXZ3O1xyXG4gICAgICBoZWlnaHQ6IDM1dmg7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OjA7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xyXG4gICAgfVxyXG4gICAgLnJlY2VudGx5TW9zdFBsYXllZHtcclxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgIGNvbG9yOiAjMURCOTU0O1xyXG4gICAgICAvLyBtaW4td2lkdGg6NzV2O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IGNhbGMoMzV2aCk7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuICAgIH1cclxuICAgIC5yZWNlbnRseU1vc3RQbGF5ZWRIZWFke1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNyZWF0ZUJ0bntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuICAgICAgICBsZWZ0OiBjYWxjKCAzNy41dncgLSAxNDIuMTlweCAvIDIpO1xyXG4gICAgICAgIC8vIHRvcDogY2FsYyggMzV2aCAtIDU1cHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzFEQjk1NDtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggNDhweCAxOHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzO1xyXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBiYWNrZ3JvdW5kIDAuNHM7XHJcbiAgICB9XHJcbiAgICAucGxheWxpc3RIZWFkVGV4dHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgdG9wOiBjYWxjKCAzNXZoIC0gMTU1cHgpO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogLTFweCAwIGJsYWNrLCAwIDFweCBibGFjaywgMXB4IDAgYmxhY2ssIDAgLTFweCBibGFjaztcclxuICAgIH1cclxuICAgIC5zb25nTGlzdHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxuICAgIH1cclxuICAgIC5zb25nTGlzdEl0ZW17XHJcbiAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAvLyBwYWRkaW5nOiA4cHggMHB4IDhweCAgMTBweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgfVxyXG4gICAgLmNyZWF0ZUJ0bjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICBjb2xvcjogIzFEQjk1NDsgICAgIFxyXG4gICAgfVxyXG4gICAgLnBsYXlsaXN0e1xyXG4gICAgICBtYXJnaW46MHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgLy8gcGFkZGluZzogOHB4IDBweCA4cHggIDEwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgIH1cclxuICBgfVxyXG4gIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuIClcclxuICB9XHJcbiAgLy8gKTtcclxuICAvLyBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic29uZ0xpc3RJdGVtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKXtcclxuICAvLyAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJoaWRkZW5NZXRyaWNzXCIpLnN0eWxlLmRpc3BsYXk9J2Jsb2NrJztcclxuICAvLyB9KTtcclxuXHJcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNvbmdMaXN0SXRlbVwiKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKXtcclxuICAvLyAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJoaWRkZW5NZXRyaWNzXCIpLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xyXG4gIC8vIH0pO1xyXG5cclxuXHJcblxyXG4gIC8vIGV4cG9ydCBkZWZhdWx0IFBsYXlsaXN0UGFnZTsiXX0= */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/playlistPage.js */"));
} // );
// document.getElementsByClassName("songListItem").addEventListener("mouseover", function(){
//   document.getElementsByClassName("hiddenMetrics").style.display='block';
// });
// document.getElementsByClassName("songListItem").addEventListener("mouseout", function(){
//   document.getElementsByClassName("hiddenMetrics").style.display='none';
// });
// export default PlaylistPage;

/***/ })

})
//# sourceMappingURL=playlistDisplay.js.0f72edac8d2c2177e987.hot-update.js.map