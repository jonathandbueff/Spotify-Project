webpackHotUpdate("static/development/pages/home.js",{

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
    className: "jsx-687727120",
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
    className: "jsx-687727120" + " " + "mainProfileBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-687727120" + " " + "homeProfile",
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
    className: "jsx-687727120" + " " + "sideBarProfile",
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
    id: "687727120",
    __self: this
  }, ".mainProfileBox.jsx-687727120{margin:0;list-style-type:none;}.homeHeader.jsx-687727120{margin:0;position:fixed;}.homeProfile.jsx-687727120{margin:0;display:inline-block;}.sideBarProfile.jsx-687727120{display:inline-block;width:25vw;position:fixed;right:0;top:51px;}.footerMain.jsx-687727120{position:fixed;bottom:0px;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmMsQUFJYSxBQUlBLEFBSUEsQUFJYSxBQU9OLFNBbEJNLEFBSVAsQUFJTyxNQVdWLE1BUEEsR0FQYixFQWVhLElBbkJiLEFBUUEsRUFJZ0IsTUFRaEIsU0FQVSxRQUNDLFNBQ1giLCJmaWxlIjoiL2hvbWUvam9lL3B1YmxpY19odG1sL2NyZWF0aXZlcHJvamVjdC03am9lLWpvbi9wYWdlcy9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBhYnNvbHV0ZVVybCBmcm9tIFwibmV4dC1hYnNvbHV0ZS11cmxcIjtcbmltcG9ydCB1cmwgZnJvbSBcInVybFwiO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vY29tcHMvcHJvZmlsZSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBzL2hlYWRlcic7XG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi9jb21wcy9zaWRlQmFyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcHMvZm9vdGVyJztcbi8vIGxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTE5MS0xMS00OS51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tJzsgLy9Kb25cbmxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTIzNC0xMDktMjM4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tJzsgLy9Kb2VcbmNvbnN0IGhvbWVTdHlsZSA9e1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICBiYWNrZ3JvdW5kOiBcInVybCgnLzEyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgZml4ZWRcIixcbiAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgbGVmdDogXCIwXCIsXG4gIHRvcDogXCIwXCIsXG4gIHJpZ2h0OiBcIjBcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgd2lkdGg6IFwiMTAwJVwiXG59XG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IChcbiAgPGRpdiBzdHlsZT17aG9tZVN0eWxlfT5cblx0PEhlYWRlciBjbGFzc05hbWU9XCJob21lSGVhZGVyXCIvPlx0XG4gIDx1bCBjbGFzc05hbWUgPVwibWFpblByb2ZpbGVCb3hcIj5cbiAgPGxpIGNsYXNzTmFtZT1cImhvbWVQcm9maWxlXCIgPjxQcm9maWxlIHsuLi5wcm9wc30gLz48L2xpPlxuICA8bGkgY2xhc3NOYW1lID0gXCJzaWRlQmFyUHJvZmlsZVwiID48U2lkZUJhciA+PC9TaWRlQmFyPjwvbGk+XG4gIDwvdWw+XG4gIDxGb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyTWFpblwiLz5cbiAgPHN0eWxlIGpzeD57YFxuICBcbiAgLm1haW5Qcm9maWxlQm94e1xuICAgIG1hcmdpbjowO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuICAuaG9tZUhlYWRlcntcbiAgICBtYXJnaW46MDtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgfVxuICAuaG9tZVByb2ZpbGV7XG4gICAgbWFyZ2luOjA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5zaWRlQmFyUHJvZmlsZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDI1dnc7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MXB4O1xuICB9XG4gIC5mb290ZXJNYWlue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDoxMDB2dztcbiAgfVxuICBgfVxuICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cblxuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vZWMyLTE4LTIzNC0xMDktMjM4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tOjM0NTYvZ2V0Q29kZScsXG4vLyAgIHtcbi8vICAgICBtb2RlOiBcIm5vLWNvcnNcIlxuLy8gICB9KTtcbi8vICAgY29uc3QgYm9keSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgaWYocmVzcG9uc2UgLnN0YXR1cyE9PSAyMDApe1xuLy8gICAgIHRocm93IEVycm9yKGJvZHkubWVzc2FnZSlcbi8vICAgfVxuLy8gICByZXR1cm4gYm9keTtcbi8vIH07XG5cblxuXG5cbi8vIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBzZW5kQ29kZVRvQmFja2VuZCgpLnRoZW4ocmVzPT4gY29uc29sZS5sb2coXCJyZXNcIikpLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKSkpO1xuLy8gLnRoZW4ocmVzPT4gYWxlcnQoXCJISVwiKSkuY2F0Y2goZXJyID0+Y29uc29sZS5sb2coZXJyKSlcbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24ocmVxKXtcbiAgbGV0IGNvZGUgPSByZXEucXVlcnkuY29kZTtcbiAgbGV0IHVzZXJuYW1lO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhd3NpbnN0YW5jZSsnOjM0NTYvZ2V0Q29kZT9jb2RlPScrY29kZSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgdXNlcm5hbWU9IGRhdGEudXNlcm5hbWU7XG4gIH0pO1xuICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMuZGF0YSkpO1xuICBcbiAgLy8gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lSGVyZVwiKS50ZXh0Q29udGVudD11c2VybmFtZTtcbiAgcmV0dXJue1xuICAgIGRhdGE6IHtcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZVxuICAgIH1cbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/pages/home.js */"));
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
//# sourceMappingURL=home.js.962de537ed47e77060f1.hot-update.js.map