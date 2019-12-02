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
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/index.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_14__);



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
    className: "jsx-1661529131",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_comps_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "homeHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("ul", {
    className: "jsx-1661529131" + " " + "mainProfileBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("img", {
    src: props.data.image,
    alt: "profileimage",
    className: "jsx-1661529131" + " " + "profileImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("img", {
    src: props.data.topArtistUrl,
    alt: "profileimage",
    className: "jsx-1661529131" + " " + "artistImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("li", {
    className: "jsx-1661529131" + " " + "homeProfile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_comps_profile__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))), __jsx("li", {
    className: "jsx-1661529131" + " " + "sideBarProfile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_comps_sideBar__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })))), __jsx(_comps_footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "homeFooter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1661529131",
    __self: this
  }, ".profileImage.jsx-1661529131{position:absolute;top:50px;left:0px;max-width:calc( 75vw /2 );max-height:35vh;}.artistImage.jsx-1661529131{position:absolute;top:50px;right:25vw;max-width:calc( 75vw /2 );max-height:35vh;}.mainProfileBox.jsx-1661529131{margin:0;list-style-type:none;}.homeHeader.jsx-1661529131{margin:0;position:fixed;}.homeProfile.jsx-1661529131{margin:0;display:inline-block;}.sideBarProfile.jsx-1661529131{display:inline-block;width:25vw;position:fixed;right:0;top:51px;}.homefooter.jsx-1661529131{position:fixed;left:0px;bottom:0px;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2MsQUFHdUIsQUFPQSxBQU9WLEFBSUEsQUFJQSxBQUlhLEFBT04sU0FsQk0sQUFJUCxBQUlPLE1BV1osR0FqQ0EsQUFPQSxHQW1CRSxHQVBiLEFBZWEsR0FqQ0YsQUFPRSxHQU9iLEFBUUEsRUFJZ0IsR0FRSCxDQWpDZSxFQU9BLFNBbUJsQixBQVFWLFFBUFcsT0ExQk8sRUFPQSxBQW9CbEIsY0ExQkEsRUFPQSIsImZpbGUiOiIvaG9tZS9qb2UvcHVibGljX2h0bWwvY3JlYXRpdmVwcm9qZWN0LTdqb2Utam9uL3BhZ2VzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcHMvTGF5b3V0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGFic29sdXRlVXJsIGZyb20gXCJuZXh0LWFic29sdXRlLXVybFwiO1xuaW1wb3J0IHVybCBmcm9tIFwidXJsXCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuLi9jb21wcy9wcm9maWxlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcHMvaGVhZGVyJztcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4uL2NvbXBzL3NpZGVCYXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wcy9mb290ZXInO1xuaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJztcblxuXG5cbi8vIGxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTE5MS0xMS00OS51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tJzsgLy9Kb25cbmxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTIzNC0xMDktMjM4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tJzsgLy9Kb2VcblxuY29uc3QgaG9tZVN0eWxlID17XG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gIGJhY2tncm91bmQ6IFwidXJsKCcvMTIucG5nJykgbm8tcmVwZWF0IGNlbnRlciBmaXhlZFwiLFxuICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICBsZWZ0OiBcIjBcIixcbiAgdG9wOiBcIjBcIixcbiAgcmlnaHQ6IFwiMFwiLFxuICBoZWlnaHQ6IFwiMTAwJVwiLFxuICB3aWR0aDogXCIxMDAlXCJcbn1cblxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4gKFxuICA8ZGl2IHN0eWxlPXtob21lU3R5bGV9PlxuXHQ8SGVhZGVyIGNsYXNzTmFtZT1cImhvbWVIZWFkZXJcIi8+XG4gIDx1bCBjbGFzc05hbWUgPVwibWFpblByb2ZpbGVCb3hcIj5cbiAgPGltZyBjbGFzc05hbWU9XCJwcm9maWxlSW1hZ2VcIiBzcmM9e3Byb3BzLmRhdGEuaW1hZ2V9IGFsdD1cInByb2ZpbGVpbWFnZVwiLz5cbiAgPGltZyBjbGFzc05hbWU9XCJhcnRpc3RJbWFnZVwiIHNyYz17cHJvcHMuZGF0YS50b3BBcnRpc3RVcmx9IGFsdD1cInByb2ZpbGVpbWFnZVwiLz5cbiAgPGxpIGNsYXNzTmFtZT1cImhvbWVQcm9maWxlXCIgPjxQcm9maWxlIHsuLi5wcm9wc30gLz48L2xpPlxuICA8bGkgY2xhc3NOYW1lID0gXCJzaWRlQmFyUHJvZmlsZVwiID48U2lkZUJhciB7Li4ucHJvcHN9PjwvU2lkZUJhcj48L2xpPlxuICA8L3VsPlxuICA8Rm9vdGVyIGNsYXNzTmFtZT1cImhvbWVGb290ZXJcIi8+XG4gIDxzdHlsZSBqc3g+e2BcbiAgLnByb2ZpbGVJbWFnZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBtYXgtd2lkdGg6IGNhbGMoIDc1dncgLzIgKTtcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xuICB9XG4gIC5hcnRpc3RJbWFnZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MHB4O1xuICAgIHJpZ2h0OiAyNXZ3O1xuICAgIG1heC13aWR0aDogY2FsYyggNzV2dyAvMiApO1xuICAgIG1heC1oZWlnaHQ6IDM1dmg7XG4gIH1cbiAgLm1haW5Qcm9maWxlQm94e1xuICAgIG1hcmdpbjowO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuICAuaG9tZUhlYWRlcntcbiAgICBtYXJnaW46MDtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgfVxuICAuaG9tZVByb2ZpbGV7XG4gICAgbWFyZ2luOjA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5zaWRlQmFyUHJvZmlsZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDI1dnc7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MXB4O1xuICB9XG4gIC5ob21lZm9vdGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgd2lkdGg6MTAwdnc7XG4gIH1cbiAgYH1cbiAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xubGV0IGNvdW50ID0gMDtcbmxldCBhY2Nlc3NUb2tlbjtcbmxldCB1c2VybmFtZTtcbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24ocmVxKXtcbiAgbGV0IGNvZGUgPSByZXEucXVlcnkuY29kZTtcbiAgbGV0IGltYWdlO1xuICBsZXQgdG9wVHJhY2tzO1xuICBsZXQgdG9wQXJ0aXN0O1xuICBsZXQgdG9wQXJ0aXN0SW1hZ2U7XG4gIGNvbnNvbGUubG9nKGNvdW50KTtcbiAgaWYgKGNvdW50ID09IDApe1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhd3NpbnN0YW5jZSsnOjM0NTYvZ2V0Q29kZT9jb2RlPScrY29kZSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICBhY2Nlc3NUb2tlbj1kYXRhLmFjY2Vzc1Rva2VuOyBcbiAgdXNlcm5hbWUgPSBkYXRhLnVzZXJuYW1lO1xufVxuICAvLyBjb25zb2xlLmxvZyh1c2VybmFtZSk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGF3c2luc3RhbmNlKyc6MzQ1Ni9nZXREYXRhP3Rva2VuPScrYWNjZXNzVG9rZW4rJyZ1c2VybmFtZT0nK3VzZXJuYW1lKTtcbiAgY29uc3QgZGF0YUFsbCA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG4gIHJldHVybntkYXRhOiB7XG4gICAgaW1hZ2U6IGRhdGFBbGxbMF0uaW1hZ2UsXG4gICAgdG9wQXJ0aXN0VXJsOiBkYXRhQWxsWzBdLnRvcEFydGlzdFVybCxcbiAgICB0b3BUcmFja3M6IEpTT04ucGFyc2UoZGF0YUFsbFswXS50b3BUcmFja3MpLml0ZW1zXG4gIH19O1xufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuIl19 */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/pages/home.js */"));
};

var count = 0;
var accessToken;
var username;

Home.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req) {
    var code, image, topTracks, topArtist, topArtistImage, res, data, result, dataAll;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            code = req.query.code;
            console.log(count);

            if (!(count == 0)) {
              _context.next = 11;
              break;
            }

            _context.next = 5;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(awsinstance + ':3456/getCode?code=' + code);

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            data = _context.sent;
            accessToken = data.accessToken;
            username = data.username;

          case 11:
            _context.next = 13;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(awsinstance + ':3456/getData?token=' + accessToken + '&username=' + username);

          case 13:
            result = _context.sent;
            _context.next = 16;
            return result.json();

          case 16:
            dataAll = _context.sent;
            return _context.abrupt("return", {
              data: {
                image: dataAll[0].image,
                topArtistUrl: dataAll[0].topArtistUrl,
                topTracks: JSON.parse(dataAll[0].topTracks).items
              }
            });

          case 18:
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
//# sourceMappingURL=home.js.ffc579023aff1248f19f.hot-update.js.map