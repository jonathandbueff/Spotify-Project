webpackHotUpdate("static/development/pages/index.js",{

/***/ "./comps/OAuthLogin.js":
/*!*****************************!*\
  !*** ./comps/OAuthLogin.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/OAuthLogin.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
var client_id = "77cf346e940b41adb5dd26e8c9f05a6b";
var response_type = "code"; // let awsinstance = 'http://ec2-18-191-11-49.us-east-2.compute.amazonaws.com'; //JON

var awsinstance = "http://ec2-18-234-109-238.compute-1.amazonaws.com"; //JOE

var redirect_uri = awsinstance + ":3000/home";
var loginLink = "https://accounts.spotify.com/authorize?" + "client_id=" + client_id + "&response_type=" + response_type + "&scope= user-modify-playback-state user-top-read user-library-modify user-follow-modify playlist-read-private playlist-modify-public playlist-modify-private user-read-playback-state user-read-currently-playing user-read-private user-follow-read playlist-read-collaborative user-read-email user-library-read streaming user-read-recently-played" + "&redirect_uri=" + redirect_uri;

var OAuthLogin = function OAuthLogin() {
  return __jsx("div", {
    className: "jsx-1062094813" + " " + "OAuthLogin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    href: loginLink,
    className: "jsx-1062094813",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("input", {
    type: "button",
    value: "Login To Spotify",
    className: "jsx-1062094813" + " " + "loginBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1062094813",
    __self: this
  }, ".loginBtn.jsx-1062094813{position:absolute;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;background:#1DB954;font-family:console,monospace;color:#FFF;font-size:14px;border:none;border-radius:500px;padding:16px 48px 18px;-webkit-transition:0.4s;-webkit-transition-duration:0.4s;transition-duration:0.4s;}.loginBtn.jsx-1062094813:hover{background:black;color:#1DB954;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvT0F1dGhMb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmMsQUFHMkIsQUFhSCxpQkFDSCxDQWJNLGFBY3RCLDBEQWJzQixtQkFDYSw4QkFDcEIsV0FDSSxlQUNILFlBQ1Esb0JBQ0csdUJBQ0Msd0JBQ0QsMERBQzNCIiwiZmlsZSI6Ii9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvT0F1dGhMb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBjbGllbnRfaWQgPSBcIjc3Y2YzNDZlOTQwYjQxYWRiNWRkMjZlOGM5ZjA1YTZiXCI7XG5sZXQgcmVzcG9uc2VfdHlwZSA9IFwiY29kZVwiO1xuLy8gbGV0IGF3c2luc3RhbmNlID0gJ2h0dHA6Ly9lYzItMTgtMTkxLTExLTQ5LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb20nOyAvL0pPTlxubGV0IGF3c2luc3RhbmNlID0gXCJodHRwOi8vZWMyLTE4LTIzNC0xMDktMjM4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tXCI7IC8vSk9FXG5cbmxldCByZWRpcmVjdF91cmkgPSBhd3NpbnN0YW5jZSArIFwiOjMwMDAvaG9tZVwiO1xubGV0IGxvZ2luTGluayA9XG4gIFwiaHR0cHM6Ly9hY2NvdW50cy5zcG90aWZ5LmNvbS9hdXRob3JpemU/XCIgK1xuICBcImNsaWVudF9pZD1cIiArXG4gIGNsaWVudF9pZCArXG4gIFwiJnJlc3BvbnNlX3R5cGU9XCIgK1xuICByZXNwb25zZV90eXBlICtcbiAgXCImc2NvcGU9IHVzZXItbW9kaWZ5LXBsYXliYWNrLXN0YXRlIHVzZXItdG9wLXJlYWQgdXNlci1saWJyYXJ5LW1vZGlmeSB1c2VyLWZvbGxvdy1tb2RpZnkgcGxheWxpc3QtcmVhZC1wcml2YXRlIHBsYXlsaXN0LW1vZGlmeS1wdWJsaWMgcGxheWxpc3QtbW9kaWZ5LXByaXZhdGUgdXNlci1yZWFkLXBsYXliYWNrLXN0YXRlIHVzZXItcmVhZC1jdXJyZW50bHktcGxheWluZyB1c2VyLXJlYWQtcHJpdmF0ZSB1c2VyLWZvbGxvdy1yZWFkIHBsYXlsaXN0LXJlYWQtY29sbGFib3JhdGl2ZSB1c2VyLXJlYWQtZW1haWwgdXNlci1saWJyYXJ5LXJlYWQgc3RyZWFtaW5nIHVzZXItcmVhZC1yZWNlbnRseS1wbGF5ZWRcIiArXG4gIFwiJnJlZGlyZWN0X3VyaT1cIiArXG4gIHJlZGlyZWN0X3VyaTtcbmNvbnN0IE9BdXRoTG9naW4gPSAoKSA9PiAoXG48ZGl2IGNsYXNzTmFtZT1cIk9BdXRoTG9naW5cIj5cbiAgPGEgaHJlZj17bG9naW5MaW5rfT5cbiAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImxvZ2luQnRuXCIgdmFsdWU9XCJMb2dpbiBUbyBTcG90aWZ5XCIgLz5cbiAgPC9hPlxuICA8c3R5bGUganN4PntgXG4gICAgLmxvZ2luQnRue1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDojMURCOTU0O1xuICAgICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDQ4cHggMThweDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICB9XG4gICAgLmxvZ2luQnRuOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgY29sb3I6ICMxREI5NTQ7ICAgICBcbiAgICB9XG4gIFxuICBgfVxuICA8L3N0eWxlPlxuPC9kaXY+XG4pO1xuZXhwb3J0IGRlZmF1bHQgT0F1dGhMb2dpbjsiXX0= */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/OAuthLogin.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (OAuthLogin);

/***/ })

})
//# sourceMappingURL=index.js.2e57b2fd0381b29d7c6b.hot-update.js.map