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
  }, ".profileImage.jsx-1661529131{position:absolute;top:50px;left:0px;max-width:calc( 75vw /2 );max-height:35vh;}.artistImage.jsx-1661529131{position:absolute;top:50px;right:25vw;max-width:calc( 75vw /2 );max-height:35vh;}.mainProfileBox.jsx-1661529131{margin:0;list-style-type:none;}.homeHeader.jsx-1661529131{margin:0;position:fixed;}.homeProfile.jsx-1661529131{margin:0;display:inline-block;}.sideBarProfile.jsx-1661529131{display:inline-block;width:25vw;position:fixed;right:0;top:51px;}.homefooter.jsx-1661529131{position:fixed;left:0px;bottom:0px;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2MsQUFHdUIsQUFPQSxBQU9WLEFBSUEsQUFJQSxBQUlhLEFBT04sU0FsQk0sQUFJUCxBQUlPLE1BV1osR0FqQ0EsQUFPQSxHQW1CRSxHQVBiLEFBZWEsR0FqQ0YsQUFPRSxHQU9iLEFBUUEsRUFJZ0IsR0FRSCxDQWpDZSxFQU9BLFNBbUJsQixBQVFWLFFBUFcsT0ExQk8sRUFPQSxBQW9CbEIsY0ExQkEsRUFPQSIsImZpbGUiOiIvaG9tZS9qb2UvcHVibGljX2h0bWwvY3JlYXRpdmVwcm9qZWN0LTdqb2Utam9uL3BhZ2VzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcHMvTGF5b3V0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGFic29sdXRlVXJsIGZyb20gXCJuZXh0LWFic29sdXRlLXVybFwiO1xuaW1wb3J0IHVybCBmcm9tIFwidXJsXCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuLi9jb21wcy9wcm9maWxlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcHMvaGVhZGVyJztcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4uL2NvbXBzL3NpZGVCYXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wcy9mb290ZXInO1xuXG5cblxuXG4vLyBsZXQgYXdzaW5zdGFuY2UgPSAnaHR0cDovL2VjMi0xOC0xOTEtMTEtNDkudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbSc7IC8vSm9uXG5sZXQgYXdzaW5zdGFuY2UgPSAnaHR0cDovL2VjMi0xOC0yMzQtMTA5LTIzOC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbSc7IC8vSm9lXG5cbmNvbnN0IGhvbWVTdHlsZSA9e1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICBiYWNrZ3JvdW5kOiBcInVybCgnLzEyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgZml4ZWRcIixcbiAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgbGVmdDogXCIwXCIsXG4gIHRvcDogXCIwXCIsXG4gIHJpZ2h0OiBcIjBcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgd2lkdGg6IFwiMTAwJVwiXG59XG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IChcbiAgPGRpdiBzdHlsZT17aG9tZVN0eWxlfT5cblx0PEhlYWRlciBjbGFzc05hbWU9XCJob21lSGVhZGVyXCIvPlxuICA8dWwgY2xhc3NOYW1lID1cIm1haW5Qcm9maWxlQm94XCI+XG4gIDxpbWcgY2xhc3NOYW1lPVwicHJvZmlsZUltYWdlXCIgc3JjPXtwcm9wcy5kYXRhLmltYWdlfSBhbHQ9XCJwcm9maWxlaW1hZ2VcIi8+XG4gIDxpbWcgY2xhc3NOYW1lPVwiYXJ0aXN0SW1hZ2VcIiBzcmM9e3Byb3BzLmRhdGEudG9wQXJ0aXN0VXJsfSBhbHQ9XCJwcm9maWxlaW1hZ2VcIi8+XG4gIHsvKiA8bGkgY2xhc3NOYW1lPVwiaG9tZVByb2ZpbGVcIiA+PFByb2ZpbGUgey4uLnByb3BzfSAvPjwvbGk+ICovfVxuICA8bGkgY2xhc3NOYW1lID0gXCJzaWRlQmFyUHJvZmlsZVwiID48U2lkZUJhciB7Li4ucHJvcHN9PjwvU2lkZUJhcj48L2xpPlxuICA8L3VsPlxuICA8Rm9vdGVyIGNsYXNzTmFtZT1cImhvbWVGb290ZXJcIi8+XG4gIDxzdHlsZSBqc3g+e2BcbiAgLnByb2ZpbGVJbWFnZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBtYXgtd2lkdGg6IGNhbGMoIDc1dncgLzIgKTtcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xuICB9XG4gIC5hcnRpc3RJbWFnZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MHB4O1xuICAgIHJpZ2h0OiAyNXZ3O1xuICAgIG1heC13aWR0aDogY2FsYyggNzV2dyAvMiApO1xuICAgIG1heC1oZWlnaHQ6IDM1dmg7XG4gIH1cbiAgLm1haW5Qcm9maWxlQm94e1xuICAgIG1hcmdpbjowO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgfVxuICAuaG9tZUhlYWRlcntcbiAgICBtYXJnaW46MDtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgfVxuICAuaG9tZVByb2ZpbGV7XG4gICAgbWFyZ2luOjA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5zaWRlQmFyUHJvZmlsZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDI1dnc7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MXB4O1xuICB9XG4gIC5ob21lZm9vdGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgd2lkdGg6MTAwdnc7XG4gIH1cbiAgYH1cbiAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xubGV0IGNvdW50ID0gMDtcbmxldCBhY2Nlc3NUb2tlbjtcbmxldCB1c2VybmFtZTtcbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24ocmVxKXtcbiAgbGV0IGNvZGUgPSByZXEucXVlcnkuY29kZTtcbiAgbGV0IGltYWdlO1xuICBsZXQgdG9wVHJhY2tzO1xuICBsZXQgdG9wQXJ0aXN0O1xuICBsZXQgdG9wQXJ0aXN0SW1hZ2U7XG4gIGxldCBhbGxQbGF5bGlzdHM7XG4gIGlmIChjb3VudCA9PSAwKXtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXdzaW5zdGFuY2UrJzozNDU2L2dldENvZGU/Y29kZT0nK2NvZGUpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgYWNjZXNzVG9rZW49ZGF0YS5hY2Nlc3NUb2tlbjsgXG4gIHVzZXJuYW1lID0gZGF0YS51c2VybmFtZTtcbn1cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYXdzaW5zdGFuY2UrJzozNDU2L2dldERhdGE/dG9rZW49JythY2Nlc3NUb2tlbisnJnVzZXJuYW1lPScrdXNlcm5hbWUpO1xuICBjb25zdCBkYXRhQWxsID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgY29uc3QgcmVzdWx0MiA9IGF3YWl0IGZldGNoKGF3c2luc3RhbmNlKyc6MzQ1Ni9nZXRPdGhlclVzZXJzP3Rva2VuPScrYWNjZXNzVG9rZW4rJyZ1c2VybmFtZT0nK3VzZXJuYW1lKTtcbiAgY29uc3QgYWxsVXNlcnMgPSBhd2FpdCByZXN1bHQyLmpzb24oKTtcbiAgY29uc29sZS5sb2coZGF0YUFsbFswXS5wbGF5bGlzdHNbMF0pO1xuICAvLyBjb25zb2xlLmxvZyhhbGxVc2Vycyk7XG5cblxuICByZXR1cm57ZGF0YToge1xuICAgIGltYWdlOiBkYXRhQWxsWzBdLmltYWdlLFxuICAgIHRvcEFydGlzdFVybDogZGF0YUFsbFswXS50b3BBcnRpc3RVcmwsXG4gICAgdG9wVHJhY2tzOiBKU09OLnBhcnNlKGRhdGFBbGxbMF0udG9wVHJhY2tzKS5pdGVtcyxcbiAgICBhbGxVc2VyczogYWxsVXNlcnMsXG4gICAgYWxsUGxheWxpc3RzOiBKU09OLnBhcnNlKGRhdGFBbGxbMF0ucGxheWxpc3RzKVxuICB9fTtcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbiJdfQ== */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/pages/home.js */"));
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
            console.log(dataAll[0].playlists[0]); // console.log(allUsers);

            return _context.abrupt("return", {
              data: {
                image: dataAll[0].image,
                topArtistUrl: dataAll[0].topArtistUrl,
                topTracks: JSON.parse(dataAll[0].topTracks).items,
                allUsers: allUsers,
                allPlaylists: JSON.parse(dataAll[0].playlists)
              }
            });

          case 24:
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
//# sourceMappingURL=home.js.bad6ab61df32cb999c1a.hot-update.js.map