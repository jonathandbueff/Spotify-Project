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
    className: "jsx-1312227818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_comps_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "homeHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("ul", {
    className: "jsx-1312227818" + " " + "mainProfileBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1312227818" + " " + "homeProfile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_comps_profile__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), __jsx("li", {
    className: "jsx-1312227818" + " " + "sideBarProfile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_comps_sideBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), __jsx(_comps_footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "homeFooter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1312227818",
    __self: this
  }, ".mainProfileBox.jsx-1312227818{margin:0;list-style-type:none;}.homeHeader.jsx-1312227818{margin:0;position:fixed;}.homeProfile.jsx-1312227818{margin:0;display:inline-block;}.sideBarProfile.jsx-1312227818{display:inline-block;width:25vw;position:fixed;right:0;top:51px;}.homefooter.jsx-1312227818{position:fixed;left:0px;bottom:0px;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQmMsQUFHYSxBQUlBLEFBSUEsQUFJYSxBQU9OLFNBbEJNLEFBSVAsQUFJTyxNQVdaLE1BUEUsR0FQYixBQWVhLE1BbkJiLEFBUUEsRUFJZ0IsR0FRSCxZQVBILEFBUVYsUUFQVyxTQUNYIiwiZmlsZSI6Ii9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wcy9MYXlvdXQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYWJzb2x1dGVVcmwgZnJvbSBcIm5leHQtYWJzb2x1dGUtdXJsXCI7XG5pbXBvcnQgdXJsIGZyb20gXCJ1cmxcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gJy4uL2NvbXBzL3Byb2ZpbGUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wcy9oZWFkZXInO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vY29tcHMvc2lkZUJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBzL2Zvb3Rlcic7XG4vLyBsZXQgYXdzaW5zdGFuY2UgPSAnaHR0cDovL2VjMi0xOC0xOTEtMTEtNDkudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbSc7IC8vSm9uXG5sZXQgYXdzaW5zdGFuY2UgPSAnaHR0cDovL2VjMi0xOC0yMzQtMTA5LTIzOC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbSc7IC8vSm9lXG5cbmNvbnN0IGhvbWVTdHlsZSA9e1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICBiYWNrZ3JvdW5kOiBcInVybCgnLzEyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgZml4ZWRcIixcbiAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgbGVmdDogXCIwXCIsXG4gIHRvcDogXCIwXCIsXG4gIHJpZ2h0OiBcIjBcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgd2lkdGg6IFwiMTAwJVwiXG59XG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IChcbiAgPGRpdiBzdHlsZT17aG9tZVN0eWxlfT5cblx0PEhlYWRlciBjbGFzc05hbWU9XCJob21lSGVhZGVyXCIvPlx0XG4gIDx1bCBjbGFzc05hbWUgPVwibWFpblByb2ZpbGVCb3hcIj5cbiAgPGxpIGNsYXNzTmFtZT1cImhvbWVQcm9maWxlXCIgPjxQcm9maWxlIHsuLi5wcm9wc30gLz48L2xpPlxuICA8bGkgY2xhc3NOYW1lID0gXCJzaWRlQmFyUHJvZmlsZVwiID48U2lkZUJhciA+PC9TaWRlQmFyPjwvbGk+XG4gIDwvdWw+XG4gIDxGb290ZXIgY2xhc3NOYW1lPVwiaG9tZUZvb3RlclwiLz5cbiAgPHN0eWxlIGpzeD57YFxuICAubWFpblByb2ZpbGVCb3h7XG4gICAgbWFyZ2luOjA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG4gIC5ob21lSGVhZGVye1xuICAgIG1hcmdpbjowO1xuICAgIHBvc2l0aW9uOmZpeGVkO1xuICB9XG4gIC5ob21lUHJvZmlsZXtcbiAgICBtYXJnaW46MDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnNpZGVCYXJQcm9maWxle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMjV2dztcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUxcHg7XG4gIH1cbiAgLmhvbWVmb290ZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDoxMDB2dztcbiAgfVxuICBgfVxuICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cblxuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vZWMyLTE4LTIzNC0xMDktMjM4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tOjM0NTYvZ2V0Q29kZScsXG4vLyAgIHtcbi8vICAgICBtb2RlOiBcIm5vLWNvcnNcIlxuLy8gICB9KTtcbi8vICAgY29uc3QgYm9keSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgaWYocmVzcG9uc2UgLnN0YXR1cyE9PSAyMDApe1xuLy8gICAgIHRocm93IEVycm9yKGJvZHkubWVzc2FnZSlcbi8vICAgfVxuLy8gICByZXR1cm4gYm9keTtcbi8vIH07XG5cblxuXG5cbi8vIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBzZW5kQ29kZVRvQmFja2VuZCgpLnRoZW4ocmVzPT4gY29uc29sZS5sb2coXCJyZXNcIikpLmNhdGNoKGVycj0+Y29uc29sZS5sb2coZXJyKSkpO1xuLy8gLnRoZW4ocmVzPT4gYWxlcnQoXCJISVwiKSkuY2F0Y2goZXJyID0+Y29uc29sZS5sb2coZXJyKSlcbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24ocmVxKXtcbiAgbGV0IGNvZGUgPSByZXEucXVlcnkuY29kZTtcbiAgbGV0IHVzZXJuYW1lO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhd3NpbnN0YW5jZSsnOjM0NTYvZ2V0Q29kZT9jb2RlPScrY29kZSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4gICAgdXNlcm5hbWU9IGRhdGEudXNlcm5hbWU7XG4gICAgaW1hZ2UgPSBkYXRhLmltYWdlO1xuICB9KTtcbiAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEpKTtcbiAgXG4gIC8vIHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZUhlcmVcIikudGV4dENvbnRlbnQ9dXNlcm5hbWU7XG4gIHJldHVybntcbiAgICBkYXRhOiB7XG4gICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICBpbWFnZTogaW1hZ2VcbiAgICB9XG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/pages/home.js */"));
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
              image = data.image;
            });

          case 6:
            data = _context.sent;
            return _context.abrupt("return", {
              data: {
                username: username,
                image: image
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
//# sourceMappingURL=home.js.aa7f3f6c5012b400131f.hot-update.js.map