webpackHotUpdate("static/development/pages/home.js",{

/***/ "./comps/footer.js":
/*!*************************!*\
  !*** ./comps/footer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Footer = function Footer(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "CSE 330 Creative Project"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, " Created By: Jon Bueff and Joe Frazier")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _comps_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comps/Layout */ "./comps/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-absolute-url */ "./node_modules/next-absolute-url/index.js");
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_absolute_url__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _comps_profile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../comps/profile */ "./comps/profile.js");
/* harmony import */ var _comps_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../comps/header */ "./comps/header.js");
/* harmony import */ var _comps_sideBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../comps/sideBar */ "./comps/sideBar.js");
/* harmony import */ var _comps_footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../comps/footer */ "./comps/footer.js");



var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/pages/home.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;








 // let awsinstance = 'http://ec2-18-191-11-49.us-east-2.compute.amazonaws.com'; //Jon

var awsinstance = 'http://ec2-18-234-109-238.compute-1.amazonaws.com'; //Joe

var homeStyle = {
  position: "absolute",
  background: "url('/12.png') no-repeat center fixed",
  backgroundSize: "cover",
  left: "0",
  top: "0",
  right: "0",
  height: "100%",
  width: "100%"
};

var Home = function Home(props) {
  return __jsx("div", {
    style: homeStyle,
    className: "jsx-3833580322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_comps_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "homeHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("ul", {
    className: "jsx-3833580322" + " " + "mainProfileBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3833580322" + " " + "homeProfile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_comps_profile__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), __jsx("li", {
    className: "jsx-3833580322" + " " + "sideBarProfile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_comps_sideBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), __jsx(_comps_footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "footerMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3833580322",
    __self: this
  }, ".mainProfileBox.jsx-3833580322{margin:0;list-style-type:none;}.homeHeader.jsx-3833580322{margin:0;position:fixed;}.homeProfile.jsx-3833580322{margin:0;display:inline-block;}.sideBarProfile.jsx-3833580322{display:inline-block;width:25vw;position:fixed;right:0;top:51px;}.footerMain.jsx-3833580322{position:fixed;bottom:0;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmMsQUFJYSxBQUlBLEFBSUEsQUFJYSxBQU9OLFNBbEJNLEFBSVAsQUFJTyxNQVdaLE1BUEUsR0FQYixBQWVhLE1BbkJiLEFBUUEsRUFJZ0IsSUFRaEIsV0FQVSxRQUNDLFNBQ1giLCJmaWxlIjoiL2hvbWUvam9lL3B1YmxpY19odG1sL2NyZWF0aXZlcHJvamVjdC03am9lLWpvbi9wYWdlcy9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBhYnNvbHV0ZVVybCBmcm9tIFwibmV4dC1hYnNvbHV0ZS11cmxcIjtcbmltcG9ydCB1cmwgZnJvbSBcInVybFwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vY29tcHMvcHJvZmlsZSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBzL2hlYWRlcic7XG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi9jb21wcy9zaWRlQmFyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcHMvZm9vdGVyJztcbi8vIGxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTE5MS0xMS00OS51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tJzsgLy9Kb25cbmxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTIzNC0xMDktMjM4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tJzsgLy9Kb2VcbmNvbnN0IGhvbWVTdHlsZSA9e1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICBiYWNrZ3JvdW5kOiBcInVybCgnLzEyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgZml4ZWRcIixcbiAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgbGVmdDogXCIwXCIsXG4gIHRvcDogXCIwXCIsXG4gIHJpZ2h0OiBcIjBcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgd2lkdGg6IFwiMTAwJVwiXG59XG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IChcbiAgPGRpdiBzdHlsZT17aG9tZVN0eWxlfT5cblx0PEhlYWRlciBjbGFzc05hbWU9XCJob21lSGVhZGVyXCIvPlx0XG4gIDx1bCBjbGFzc05hbWUgPVwibWFpblByb2ZpbGVCb3hcIj5cbiAgPGxpIGNsYXNzTmFtZT1cImhvbWVQcm9maWxlXCIgPjxQcm9maWxlIHsuLi5wcm9wc30gLz48L2xpPlxuICA8bGkgY2xhc3NOYW1lID0gXCJzaWRlQmFyUHJvZmlsZVwiID48U2lkZUJhciA+PC9TaWRlQmFyPjwvbGk+XG4gIDwvdWw+XG4gIDxGb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyTWFpblwiLz5cbiAgPHN0eWxlIGpzeD57YFxuICBcbiAgLm1haW5Qcm9maWxlQm94e1xuICAgIG1hcmdpbjowO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuICAuaG9tZUhlYWRlcntcbiAgICBtYXJnaW46MDtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgfVxuICAuaG9tZVByb2ZpbGV7XG4gICAgbWFyZ2luOjA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5zaWRlQmFyUHJvZmlsZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDI1dnc7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MXB4O1xuICB9XG4gIC5mb290ZXJNYWlue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6MTAwdnc7XG4gIH1cbiAgYH1cbiAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5cbi8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2VjMi0xOC0yMzQtMTA5LTIzOC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbTozNDU2L2dldENvZGUnLFxuLy8gICB7XG4vLyAgICAgbW9kZTogXCJuby1jb3JzXCJcbi8vICAgfSk7XG4vLyAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgIGlmKHJlc3BvbnNlIC5zdGF0dXMhPT0gMjAwKXtcbi8vICAgICB0aHJvdyBFcnJvcihib2R5Lm1lc3NhZ2UpXG4vLyAgIH1cbi8vICAgcmV0dXJuIGJvZHk7XG4vLyB9O1xuXG5cblxuXG4vLyBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgc2VuZENvZGVUb0JhY2tlbmQoKS50aGVuKHJlcz0+IGNvbnNvbGUubG9nKFwicmVzXCIpKS5jYXRjaChlcnI9PmNvbnNvbGUubG9nKGVycikpKTtcbi8vIC50aGVuKHJlcz0+IGFsZXJ0KFwiSElcIikpLmNhdGNoKGVyciA9PmNvbnNvbGUubG9nKGVycikpXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKHJlcSl7XG4gIGxldCBjb2RlID0gcmVxLnF1ZXJ5LmNvZGU7XG4gIGxldCB1c2VybmFtZTtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXdzaW5zdGFuY2UrJzozNDU2L2dldENvZGU/Y29kZT0nK2NvZGUpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xuICAgIHVzZXJuYW1lPSBkYXRhLnVzZXJuYW1lO1xuICB9KTtcbiAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEpKTtcbiAgXG4gIC8vIHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZUhlcmVcIikudGV4dENvbnRlbnQ9dXNlcm5hbWU7XG4gIHJldHVybntcbiAgICBkYXRhOiB7XG4gICAgICB1c2VybmFtZTogdXNlcm5hbWVcbiAgICB9XG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/pages/home.js */"));
}; //   const response = await fetch('http://ec2-18-234-109-238.compute-1.amazonaws.com:3456/getCode',
//   {
//     mode: "no-cors"
//   });
//   const body = await response.json();
//   if(response .status!== 200){
//     throw Error(body.message)
//   }
//   return body;
// };
// Router.events.on('routeChangeComplete', sendCodeToBackend().then(res=> console.log("res")).catch(err=>console.log(err)));
// .then(res=> alert("HI")).catch(err =>console.log(err))


Home.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req) {
    var code, username, res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            code = req.query.code;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(awsinstance + ':3456/getCode?code=' + code);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json().then(function (data) {
              username = data.username;
            });

          case 6:
            data = _context.sent;
            return _context.abrupt("return", {
              data: {
                username: username
              }
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=home.js.8fe29580344dd1ddf56b.hot-update.js.map