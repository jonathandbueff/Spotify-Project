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
    className: "jsx-2236054082",
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
    className: "jsx-2236054082" + " " + "mainProfileBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("img", {
    src: props.data.image,
    alt: "profileimage",
    className: "jsx-2236054082" + " " + "profileImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("img", {
    src: props.data.topArtistUrl,
    alt: "profileimage",
    className: "jsx-2236054082" + " " + "artistImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("li", {
    className: "jsx-2236054082" + " " + "homeProfile",
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
    className: "jsx-2236054082" + " " + "sideBarProfile",
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
    id: "2236054082",
    __self: this
  }, ".profileImage.jsx-2236054082{position:absolute;top:50px;left:0px;max-width:calc( 75vw /2 );max-height:35vh;}.artistImage.jsx-2236054082{position:absolute;top:50px;right:25vw;max-width:calc( 75vw /2 );max-height:35vh;}.mainProfileBox.jsx-2236054082{max-width:75vw;margin:0;list-style-type:none;}.homeHeader.jsx-2236054082{margin:0;position:fixed;}.homeProfile.jsx-2236054082{margin:0;display:inline-block;}.sideBarProfile.jsx-2236054082{display:inline-block;width:25vw;position:fixed;right:0;top:51px;}.homefooter.jsx-2236054082{position:fixed;left:0px;bottom:0px;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2MsQUFHdUIsQUFPQSxBQU9ILEFBS1AsQUFJQSxBQUlhLEFBT04sU0FkRCxBQUlPLE1BVGIsQUFvQkMsR0FsQ0EsQUFPQSxHQW9CRSxHQVpVLEFBS3ZCLEFBZWEsR0FsQ0YsQUFPRSxHQWdCYixFQUlnQixHQVFILENBbENlLEVBT0EsT0FPNUIsRUFhVSxBQVFWLFFBUFcsT0EzQk8sRUFPQSxBQXFCbEIsY0EzQkEsRUFPQSIsImZpbGUiOiIvaG9tZS9qb2UvcHVibGljX2h0bWwvY3JlYXRpdmVwcm9qZWN0LTdqb2Utam9uL3BhZ2VzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcHMvTGF5b3V0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGFic29sdXRlVXJsIGZyb20gXCJuZXh0LWFic29sdXRlLXVybFwiO1xuaW1wb3J0IHVybCBmcm9tIFwidXJsXCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuLi9jb21wcy9wcm9maWxlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcHMvaGVhZGVyJztcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4uL2NvbXBzL3NpZGVCYXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wcy9mb290ZXInO1xuXG5cblxuXG4vLyBsZXQgYXdzaW5zdGFuY2UgPSAnaHR0cDovL2VjMi0xOC0xOTEtMTEtNDkudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbSc7IC8vSm9uXG5sZXQgYXdzaW5zdGFuY2UgPSAnaHR0cDovL2VjMi0xOC0yMzQtMTA5LTIzOC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbSc7IC8vSm9lXG5cbmNvbnN0IGhvbWVTdHlsZSA9e1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICBiYWNrZ3JvdW5kOiBcInVybCgnLzEyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgZml4ZWRcIixcbiAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgbGVmdDogXCIwXCIsXG4gIHRvcDogXCIwXCIsXG4gIHJpZ2h0OiBcIjBcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgd2lkdGg6IFwiMTAwJVwiXG59XG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IChcbiAgPGRpdiBzdHlsZT17aG9tZVN0eWxlfT5cblx0PEhlYWRlciBjbGFzc05hbWU9XCJob21lSGVhZGVyXCIvPlxuICA8dWwgY2xhc3NOYW1lID1cIm1haW5Qcm9maWxlQm94XCI+XG4gIDxpbWcgY2xhc3NOYW1lPVwicHJvZmlsZUltYWdlXCIgc3JjPXtwcm9wcy5kYXRhLmltYWdlfSBhbHQ9XCJwcm9maWxlaW1hZ2VcIi8+XG4gIDxpbWcgY2xhc3NOYW1lPVwiYXJ0aXN0SW1hZ2VcIiBzcmM9e3Byb3BzLmRhdGEudG9wQXJ0aXN0VXJsfSBhbHQ9XCJwcm9maWxlaW1hZ2VcIi8+XG4gIDxsaSBjbGFzc05hbWU9XCJob21lUHJvZmlsZVwiID48UHJvZmlsZSB7Li4ucHJvcHN9IC8+PC9saT5cbiAgPGxpIGNsYXNzTmFtZSA9IFwic2lkZUJhclByb2ZpbGVcIiA+PFNpZGVCYXIgey4uLnByb3BzfT48L1NpZGVCYXI+PC9saT5cbiAgPC91bD5cbiAgPEZvb3RlciBjbGFzc05hbWU9XCJob21lRm9vdGVyXCIvPlxuICA8c3R5bGUganN4PntgXG4gIC5wcm9maWxlSW1hZ2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgbWF4LXdpZHRoOiBjYWxjKCA3NXZ3IC8yICk7XG4gICAgbWF4LWhlaWdodDogMzV2aDtcbiAgfVxuICAuYXJ0aXN0SW1hZ2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTBweDtcbiAgICByaWdodDogMjV2dztcbiAgICBtYXgtd2lkdGg6IGNhbGMoIDc1dncgLzIgKTtcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xuICB9XG4gIC5tYWluUHJvZmlsZUJveHtcbiAgICBtYXgtd2lkdGg6IDc1dnc7XG4gICAgbWFyZ2luOjA7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG4gIC5ob21lSGVhZGVye1xuICAgIG1hcmdpbjowO1xuICAgIHBvc2l0aW9uOmZpeGVkO1xuICB9XG4gIC5ob21lUHJvZmlsZXtcbiAgICBtYXJnaW46MDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnNpZGVCYXJQcm9maWxle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMjV2dztcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUxcHg7XG4gIH1cbiAgLmhvbWVmb290ZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3R0b206IDBweDtcbiAgICB3aWR0aDoxMDB2dztcbiAgfVxuICBgfVxuICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5sZXQgY291bnQgPSAwO1xubGV0IGFjY2Vzc1Rva2VuO1xubGV0IHVzZXJuYW1lO1xuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihyZXEpe1xuICBsZXQgY29kZSA9IHJlcS5xdWVyeS5jb2RlO1xuICBsZXQgaW1hZ2U7XG4gIGxldCB0b3BUcmFja3M7XG4gIGxldCB0b3BBcnRpc3Q7XG4gIGxldCB0b3BBcnRpc3RJbWFnZTtcbiAgbGV0IGFsbFBsYXlsaXN0cztcbiAgaWYgKGNvdW50ID09IDApe1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhd3NpbnN0YW5jZSsnOjM0NTYvZ2V0Q29kZT9jb2RlPScrY29kZSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICBhY2Nlc3NUb2tlbj1kYXRhLmFjY2Vzc1Rva2VuOyBcbiAgdXNlcm5hbWUgPSBkYXRhLnVzZXJuYW1lO1xufVxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChhd3NpbnN0YW5jZSsnOjM0NTYvZ2V0RGF0YT90b2tlbj0nK2FjY2Vzc1Rva2VuKycmdXNlcm5hbWU9Jyt1c2VybmFtZSk7XG4gIGNvbnN0IGRhdGFBbGwgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuICBjb25zdCByZXN1bHQyID0gYXdhaXQgZmV0Y2goYXdzaW5zdGFuY2UrJzozNDU2L2dldE90aGVyVXNlcnM/dG9rZW49JythY2Nlc3NUb2tlbisnJnVzZXJuYW1lPScrdXNlcm5hbWUpO1xuICBjb25zdCBhbGxVc2VycyA9IGF3YWl0IHJlc3VsdDIuanNvbigpO1xuICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGRhdGFBbGxbMF0ucGxheWxpc3RzKSk7XG4gIC8vIGNvbnNvbGUubG9nKGFsbFVzZXJzKTtcblxuXG4gIHJldHVybntkYXRhOiB7XG4gICAgaW1hZ2U6IGRhdGFBbGxbMF0uaW1hZ2UsXG4gICAgdG9wQXJ0aXN0VXJsOiBkYXRhQWxsWzBdLnRvcEFydGlzdFVybCxcbiAgICB0b3BUcmFja3M6IEpTT04ucGFyc2UoZGF0YUFsbFswXS50b3BUcmFja3MpLml0ZW1zLFxuICAgIGFsbFVzZXJzOiBhbGxVc2VycyxcbiAgICBhbGxQbGF5bGlzdHM6IEpTT04ucGFyc2UoZGF0YUFsbFswXS5wbGF5bGlzdHMpXG4gIH19O1xufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuIl19 */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/pages/home.js */"));
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
    var code, image, topTracks, topArtist, topArtistImage, allPlaylists, res, data, result, dataAll, result2, allUsers;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            code = req.query.code;

            if (!(count == 0)) {
              _context.next = 10;
              break;
            }

            _context.next = 4;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(awsinstance + ':3456/getCode?code=' + code);

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            data = _context.sent;
            accessToken = data.accessToken;
            username = data.username;

          case 10:
            _context.next = 12;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(awsinstance + ':3456/getData?token=' + accessToken + '&username=' + username);

          case 12:
            result = _context.sent;
            _context.next = 15;
            return result.json();

          case 15:
            dataAll = _context.sent;
            _context.next = 18;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(awsinstance + ':3456/getOtherUsers?token=' + accessToken + '&username=' + username);

          case 18:
            result2 = _context.sent;
            _context.next = 21;
            return result2.json();

          case 21:
            allUsers = _context.sent;
            return _context.abrupt("return", {
              data: {
                image: dataAll[0].image,
                topArtistUrl: dataAll[0].topArtistUrl,
                topTracks: JSON.parse(dataAll[0].topTracks).items,
                allUsers: allUsers,
                allPlaylists: JSON.parse(dataAll[0].playlists)
              }
            });

          case 23:
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
//# sourceMappingURL=home.js.dd811175505b22666f36.hot-update.js.map