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
var response_type = "code"; // let scopes = "user-library-read user-read-private user-read-email";
// let awsinstance = 'http://ec2-18-191-11-49.us-east-2.compute.amazonaws.com'; //JON

var awsinstance = "http://ec2-18-234-109-238.compute-1.amazonaws.com"; //JOE

var redirect_uri = awsinstance + ":3000/home";
var loginLink = "https://accounts.spotify.com/authorize?" + "client_id=" + client_id + "&response_type=" + response_type + "&scope= user-modify-playback-state user-top-read user-library-modify user-follow-modify playlist-read-private playlist-modify-public playlist-modify-private user-read-playback-state user-read-currently-playing user-read-private user-follow-read playlist-read-collaborative user-read-email user-library-read streaming user-read-recently-played" + "&redirect_uri=" + redirect_uri;

var OAuthLogin = function OAuthLogin() {
  return __jsx("div", {
    className: "jsx-1062094813" + " " + "OAuthLogin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("a", {
    href: loginLink,
    className: "jsx-1062094813",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("input", {
    type: "button",
    value: "Login To Spotify",
    className: "jsx-1062094813" + " " + "loginBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1062094813",
    __self: this
  }, ".loginBtn.jsx-1062094813{position:absolute;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;background:#1DB954;font-family:console,monospace;color:#FFF;font-size:14px;border:none;border-radius:500px;padding:16px 48px 18px;-webkit-transition:0.4s;-webkit-transition-duration:0.4s;transition-duration:0.4s;}.loginBtn.jsx-1062094813:hover{background:black;color:#1DB954;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvT0F1dGhMb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmMsQUFHMkIsQUFhSCxpQkFDSCxDQWJNLGFBY3RCLDBEQWJzQixtQkFDYSw4QkFDcEIsV0FDSSxlQUNILFlBQ1Esb0JBQ0csdUJBQ0Msd0JBQ0QsMERBQzNCIiwiZmlsZSI6Ii9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvT0F1dGhMb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBjbGllbnRfaWQgPSBcIjc3Y2YzNDZlOTQwYjQxYWRiNWRkMjZlOGM5ZjA1YTZiXCI7XG5sZXQgcmVzcG9uc2VfdHlwZSA9IFwiY29kZVwiO1xuLy8gbGV0IHNjb3BlcyA9IFwidXNlci1saWJyYXJ5LXJlYWQgdXNlci1yZWFkLXByaXZhdGUgdXNlci1yZWFkLWVtYWlsXCI7XG4vLyBsZXQgYXdzaW5zdGFuY2UgPSAnaHR0cDovL2VjMi0xOC0xOTEtMTEtNDkudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbSc7IC8vSk9OXG5sZXQgYXdzaW5zdGFuY2UgPSBcImh0dHA6Ly9lYzItMTgtMjM0LTEwOS0yMzguY29tcHV0ZS0xLmFtYXpvbmF3cy5jb21cIjsgLy9KT0VcblxubGV0IHJlZGlyZWN0X3VyaSA9IGF3c2luc3RhbmNlICsgXCI6MzAwMC9ob21lXCI7XG5sZXQgbG9naW5MaW5rID1cbiAgXCJodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2F1dGhvcml6ZT9cIiArXG4gIFwiY2xpZW50X2lkPVwiICtcbiAgY2xpZW50X2lkICtcbiAgXCImcmVzcG9uc2VfdHlwZT1cIiArXG4gIHJlc3BvbnNlX3R5cGUgK1xuICBcIiZzY29wZT0gdXNlci1tb2RpZnktcGxheWJhY2stc3RhdGUgdXNlci10b3AtcmVhZCB1c2VyLWxpYnJhcnktbW9kaWZ5IHVzZXItZm9sbG93LW1vZGlmeSBwbGF5bGlzdC1yZWFkLXByaXZhdGUgcGxheWxpc3QtbW9kaWZ5LXB1YmxpYyBwbGF5bGlzdC1tb2RpZnktcHJpdmF0ZSB1c2VyLXJlYWQtcGxheWJhY2stc3RhdGUgdXNlci1yZWFkLWN1cnJlbnRseS1wbGF5aW5nIHVzZXItcmVhZC1wcml2YXRlIHVzZXItZm9sbG93LXJlYWQgcGxheWxpc3QtcmVhZC1jb2xsYWJvcmF0aXZlIHVzZXItcmVhZC1lbWFpbCB1c2VyLWxpYnJhcnktcmVhZCBzdHJlYW1pbmcgdXNlci1yZWFkLXJlY2VudGx5LXBsYXllZFwiICtcbiAgXCImcmVkaXJlY3RfdXJpPVwiICtcbiAgcmVkaXJlY3RfdXJpO1xuXG5jb25zdCBPQXV0aExvZ2luID0gKCkgPT4gKFxuPGRpdiBjbGFzc05hbWU9XCJPQXV0aExvZ2luXCI+XG4gIDxhIGhyZWY9e2xvZ2luTGlua30gPlxuICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibG9naW5CdG5cIiB2YWx1ZT1cIkxvZ2luIFRvIFNwb3RpZnlcIiAvPlxuICA8L2E+XG4gIDxzdHlsZSBqc3g+e2BcbiAgICAubG9naW5CdG57XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiMxREI5NTQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBjb25zb2xlLCBtb25vc3BhY2U7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggNDhweCAxOHB4O1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIH1cbiAgICAubG9naW5CdG46aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICBjb2xvcjogIzFEQjk1NDsgICAgIFxuICAgIH1cbiAgXG4gIGB9XG4gIDwvc3R5bGU+XG48L2Rpdj5cbik7XG5leHBvcnQgZGVmYXVsdCBPQXV0aExvZ2luOyJdfQ== */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/OAuthLogin.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (OAuthLogin);

/***/ })

})
//# sourceMappingURL=index.js.07f18cccccd33fbf46db.hot-update.js.map