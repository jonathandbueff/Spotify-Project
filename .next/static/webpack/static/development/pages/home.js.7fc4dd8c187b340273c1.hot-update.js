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
    className: "jsx-3207533689",
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
    className: "jsx-3207533689" + " " + "mainProfileBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-3207533689" + " " + "homeProfile",
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
    className: "jsx-3207533689" + " " + "sideBarProfile",
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
    className: "homeFooter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3207533689",
    __self: this
  }, ".mainProfileBox.jsx-3207533689{margin:0;list-style-type:none;}.homeHeader.jsx-3207533689{margin:0;position:fixed;}.homeProfile.jsx-3207533689{margin:0;display:inline-block;}.sideBarProfile.jsx-3207533689{display:inline-block;width:25vw;position:fixed;right:0;top:51px;}.homefooter.jsx-3207533689{margin:0;padding:0;position:fixed;left:0px;bottom:0px;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmMsQUFHYSxBQUlBLEFBSUEsQUFJYSxBQU9iLFNBbEJhLEFBSVAsQUFJTyxBQVdaLFVBQ00sRUFSSixHQVBiLE1BSkEsQUFRQSxFQUlnQixFQVFMLFNBQ0UsSUFSSCxPQVNHLENBUkYsU0FDWCxFQVFBIiwiZmlsZSI6Ii9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wcy9MYXlvdXQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYWJzb2x1dGVVcmwgZnJvbSBcIm5leHQtYWJzb2x1dGUtdXJsXCI7XG5pbXBvcnQgdXJsIGZyb20gXCJ1cmxcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gJy4uL2NvbXBzL3Byb2ZpbGUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wcy9oZWFkZXInO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vY29tcHMvc2lkZUJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBzL2Zvb3Rlcic7XG4vLyBsZXQgYXdzaW5zdGFuY2UgPSAnaHR0cDovL2VjMi0xOC0xOTEtMTEtNDkudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbSc7IC8vSm9uXG5sZXQgYXdzaW5zdGFuY2UgPSAnaHR0cDovL2VjMi0xOC0yMzQtMTA5LTIzOC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbSc7IC8vSm9lXG5jb25zdCBob21lU3R5bGUgPXtcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgYmFja2dyb3VuZDogXCJ1cmwoJy8xMi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGZpeGVkXCIsXG4gIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gIGxlZnQ6IFwiMFwiLFxuICB0b3A6IFwiMFwiLFxuICByaWdodDogXCIwXCIsXG4gIGhlaWdodDogXCIxMDAlXCIsXG4gIHdpZHRoOiBcIjEwMCVcIlxufVxuXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgc3R5bGU9e2hvbWVTdHlsZX0+XG5cdDxIZWFkZXIgY2xhc3NOYW1lPVwiaG9tZUhlYWRlclwiLz5cdFxuICA8dWwgY2xhc3NOYW1lID1cIm1haW5Qcm9maWxlQm94XCI+XG4gIDxsaSBjbGFzc05hbWU9XCJob21lUHJvZmlsZVwiID48UHJvZmlsZSB7Li4ucHJvcHN9IC8+PC9saT5cbiAgPGxpIGNsYXNzTmFtZSA9IFwic2lkZUJhclByb2ZpbGVcIiA+PFNpZGVCYXIgPjwvU2lkZUJhcj48L2xpPlxuICA8L3VsPlxuICA8Rm9vdGVyIGNsYXNzTmFtZT1cImhvbWVGb290ZXJcIi8+XG4gIDxzdHlsZSBqc3g+e2BcbiAgLm1haW5Qcm9maWxlQm94e1xuICAgIG1hcmdpbjowO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuICAuaG9tZUhlYWRlcntcbiAgICBtYXJnaW46MDtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgfVxuICAuaG9tZVByb2ZpbGV7XG4gICAgbWFyZ2luOjA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5zaWRlQmFyUHJvZmlsZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDI1dnc7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MXB4O1xuICB9XG4gIC5ob21lZm9vdGVye1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHdpZHRoOjEwMHZ3O1xuICB9XG4gIGB9XG4gIDwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuXG4vLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9lYzItMTgtMjM0LTEwOS0yMzguY29tcHV0ZS0xLmFtYXpvbmF3cy5jb206MzQ1Ni9nZXRDb2RlJyxcbi8vICAge1xuLy8gICAgIG1vZGU6IFwibm8tY29yc1wiXG4vLyAgIH0pO1xuLy8gICBjb25zdCBib2R5ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICBpZihyZXNwb25zZSAuc3RhdHVzIT09IDIwMCl7XG4vLyAgICAgdGhyb3cgRXJyb3IoYm9keS5tZXNzYWdlKVxuLy8gICB9XG4vLyAgIHJldHVybiBib2R5O1xuLy8gfTtcblxuXG5cblxuLy8gUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIHNlbmRDb2RlVG9CYWNrZW5kKCkudGhlbihyZXM9PiBjb25zb2xlLmxvZyhcInJlc1wiKSkuY2F0Y2goZXJyPT5jb25zb2xlLmxvZyhlcnIpKSk7XG4vLyAudGhlbihyZXM9PiBhbGVydChcIkhJXCIpKS5jYXRjaChlcnIgPT5jb25zb2xlLmxvZyhlcnIpKVxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihyZXEpe1xuICBsZXQgY29kZSA9IHJlcS5xdWVyeS5jb2RlO1xuICBsZXQgdXNlcm5hbWU7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGF3c2luc3RhbmNlKyc6MzQ1Ni9nZXRDb2RlP2NvZGU9Jytjb2RlKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCkudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICB1c2VybmFtZT0gZGF0YS51c2VybmFtZTtcbiAgfSk7XG4gIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhKSk7XG4gIFxuICAvLyB0aGlzLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcm5hbWVIZXJlXCIpLnRleHRDb250ZW50PXVzZXJuYW1lO1xuICByZXR1cm57XG4gICAgZGF0YToge1xuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lXG4gICAgfVxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/pages/home.js */"));
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
//# sourceMappingURL=home.js.7fc4dd8c187b340273c1.hot-update.js.map