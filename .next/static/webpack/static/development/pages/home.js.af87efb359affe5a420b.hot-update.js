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

var awsinstance = 'http://ec2-18-234-109-238.compute-1.amazonaws.com'; //Joes

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
    className: "jsx-431734989",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("head", {
    className: "jsx-431734989",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(_comps_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "homeHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("ul", {
    className: "jsx-431734989" + " " + "mainProfileBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("img", {
    src: props.data.image,
    alt: "profileimage",
    className: "jsx-431734989" + " " + "profileImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("img", {
    src: props.data.topArtistUrl,
    alt: "profileimage",
    className: "jsx-431734989" + " " + "artistImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("li", {
    className: "jsx-431734989" + " " + "homeProfile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_comps_profile__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))), __jsx("li", {
    className: "jsx-431734989" + " " + "sideBarProfile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_comps_sideBar__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })))), __jsx(_comps_footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "homeFooter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "431734989",
    __self: this
  }, ".profileImage.jsx-431734989{position:absolute;top:50px;left:0px;max-width:calc( 75vw /2 );max-height:35vh;}.artistImage.jsx-431734989{position:absolute;top:50px;right:25%;max-width:calc( 75vw /2 );max-height:35vh;}.mainProfileBox.jsx-431734989{max-width:75%;margin:0;list-style-type:none;}.homeHeader.jsx-431734989{margin:0;position:fixed;}.homeProfile.jsx-431734989{margin:0;display:inline-block;}.sideBarProfile.jsx-431734989{display:inline-block;width:25%;position:fixed;right:0;top:51px;padding:0;}.homefooter.jsx-431734989{position:fixed;left:0px;bottom:0px;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ2MsQUFHdUIsQUFPQSxBQU9KLEFBS04sQUFJQSxBQUlhLEFBUU4sU0FmRCxBQUlPLEtBVGIsQ0FxQkMsR0FuQ0EsQUFPQSxHQW9CQyxFQVpXLENBS3ZCLEFBZ0JhLEdBbkNGLEFBT0MsR0FnQlosQ0FJZ0IsSUFTSCxDQW5DZSxDQU9BLE9BTzVCLEVBYVUsQ0FTVixPQVJXLFFBM0JPLENBT0EsQUFxQlAsVUFDWCxLQTVCQSxDQU9BIiwiZmlsZSI6Ii9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wcy9MYXlvdXQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYWJzb2x1dGVVcmwgZnJvbSBcIm5leHQtYWJzb2x1dGUtdXJsXCI7XG5pbXBvcnQgdXJsIGZyb20gXCJ1cmxcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gJy4uL2NvbXBzL3Byb2ZpbGUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wcy9oZWFkZXInO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vY29tcHMvc2lkZUJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBzL2Zvb3Rlcic7XG5cblxuXG5cbi8vIGxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTE5MS0xMS00OS51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tJzsgLy9Kb25cbmxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTIzNC0xMDktMjM4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tJzsgLy9Kb2VzXG5cbmNvbnN0IGhvbWVTdHlsZSA9e1xuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICBiYWNrZ3JvdW5kOiBcInVybCgnLzEyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgZml4ZWRcIixcbiAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgbGVmdDogXCIwXCIsXG4gIHRvcDogXCIwXCIsXG4gIHJpZ2h0OiBcIjBcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgd2lkdGg6IFwiMTAwJVwiXG59XG5cbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IChcbiAgPGRpdiBzdHlsZT17aG9tZVN0eWxlfT5cbiAgICA8aGVhZD48L2hlYWQ+XG5cdDxIZWFkZXIgY2xhc3NOYW1lPVwiaG9tZUhlYWRlclwiLz5cbiAgPHVsIGNsYXNzTmFtZSA9XCJtYWluUHJvZmlsZUJveFwiPlxuICA8aW1nIGNsYXNzTmFtZT1cInByb2ZpbGVJbWFnZVwiIHNyYz17cHJvcHMuZGF0YS5pbWFnZX0gYWx0PVwicHJvZmlsZWltYWdlXCIvPlxuICA8aW1nIGNsYXNzTmFtZT1cImFydGlzdEltYWdlXCIgc3JjPXtwcm9wcy5kYXRhLnRvcEFydGlzdFVybH0gYWx0PVwicHJvZmlsZWltYWdlXCIvPlxuICA8bGkgY2xhc3NOYW1lPVwiaG9tZVByb2ZpbGVcIiA+PFByb2ZpbGUgey4uLnByb3BzfSAvPjwvbGk+XG4gIDxsaSBjbGFzc05hbWUgPSBcInNpZGVCYXJQcm9maWxlXCIgPjxTaWRlQmFyIHsuLi5wcm9wc30+PC9TaWRlQmFyPjwvbGk+XG4gIDwvdWw+XG4gIDxGb290ZXIgY2xhc3NOYW1lPVwiaG9tZUZvb3RlclwiLz5cbiAgPHN0eWxlIGpzeD57YFxuICAucHJvZmlsZUltYWdle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIG1heC13aWR0aDogY2FsYyggNzV2dyAvMiApO1xuICAgIG1heC1oZWlnaHQ6IDM1dmg7XG4gIH1cbiAgLmFydGlzdEltYWdle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwcHg7XG4gICAgcmlnaHQ6IDI1JTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoIDc1dncgLzIgKTtcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xuICB9XG4gIC5tYWluUHJvZmlsZUJveHtcbiAgICBtYXgtd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46MDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIH1cbiAgLmhvbWVIZWFkZXJ7XG4gICAgbWFyZ2luOjA7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gIH1cbiAgLmhvbWVQcm9maWxle1xuICAgIG1hcmdpbjowO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuc2lkZUJhclByb2ZpbGV7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MXB4O1xuICAgIHBhZGRpbmc6MDtcbiAgfVxuICAuaG9tZWZvb3RlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHdpZHRoOjEwMHZ3O1xuICB9XG4gIGB9XG4gIDwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcbmxldCBjb3VudCA9IDA7XG5sZXQgYWNjZXNzVG9rZW47XG5sZXQgdXNlcm5hbWU7XG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKHJlcSl7XG4gIGxldCBjb2RlID0gcmVxLnF1ZXJ5LmNvZGU7XG4gIGxldCBpbWFnZTtcbiAgbGV0IHRvcFRyYWNrcztcbiAgbGV0IHRvcEFydGlzdDtcbiAgbGV0IHRvcEFydGlzdEltYWdlO1xuICBsZXQgYWxsUGxheWxpc3RzO1xuICBpZiAoY291bnQgPT0gMCl7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGF3c2luc3RhbmNlKyc6MzQ1Ni9nZXRDb2RlP2NvZGU9Jytjb2RlKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGFjY2Vzc1Rva2VuPWRhdGEuYWNjZXNzVG9rZW47IFxuICB1c2VybmFtZSA9IGRhdGEudXNlcm5hbWU7XG59XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYXdzaW5zdGFuY2UrJzozNDU2L2dldERhdGE/dG9rZW49JythY2Nlc3NUb2tlbisnJnVzZXJuYW1lPScrdXNlcm5hbWUpO1xuICBjb25zdCBkYXRhQWxsID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgY29uc3QgcmVzdWx0MiA9IGF3YWl0IGZldGNoKGF3c2luc3RhbmNlKyc6MzQ1Ni9nZXRPdGhlclVzZXJzP3Rva2VuPScrYWNjZXNzVG9rZW4rJyZ1c2VybmFtZT0nK3VzZXJuYW1lKTtcbiAgY29uc3QgYWxsVXNlcnMgPSBhd2FpdCByZXN1bHQyLmpzb24oKTtcbiAgLy8gY29uc3QgcmF0aW5nc0RhdGEgPSBhd2FpdCBmZXRjaChhd3NpbnN0YW5jZSsnOjM0NTYvZ2V0UmF0aW5ncz90b2tlbj0nK2FjY2Vzc1Rva2VuKycmdXNlcm5hbWU9Jyt1c2VybmFtZSk7XG4gIC8vIGNvbnN0IHJhdGluZ3MgPSBhd2FpdCByYXRpbmdzRGF0YS5qc29uKCk7XG4gIGxldCBzdW09MDtcblxuICBsZXQgcGxheWxpc3RPYmplY3Q9W107XG4gIEpTT04ucGFyc2UoZGF0YUFsbFswXS5wbGF5bGlzdHMpLmZvckVhY2goKHBsYXlsaXN0LGluZGV4KT0+e1xuICAgIC8vIGNvbnNvbGUubG9nKHBsYXlsaXN0KTtcbiAgICAvLyBzdW0gPSBzdW0gK3JhdGluZ3NbaW5kZXhdLnJhdGluZztcbiAgICAvLyBwbGF5bGlzdE9iamVjdC5wdXNoKHtwbGF5bGlzdDogcGxheWxpc3QsIHJhdGluZzogcmF0aW5nc1tpbmRleF0ucmF0aW5nfSk7XG4gICAgcGxheWxpc3RPYmplY3QucHVzaCh7cGxheWxpc3Q6IHBsYXlsaXN0LCBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW59KTtcbiAgfSk7XG5cblxuXG4gIHJldHVybntkYXRhOiB7XG4gICAgaW1hZ2U6IGRhdGFBbGxbMF0uaW1hZ2UsXG4gICAgdG9wQXJ0aXN0VXJsOiBkYXRhQWxsWzBdLnRvcEFydGlzdFVybCxcbiAgICB0b3BUcmFja3M6IEpTT04ucGFyc2UoZGF0YUFsbFswXS50b3BUcmFja3MpLml0ZW1zLFxuICAgIGFsbFVzZXJzOiBhbGxVc2VycyxcbiAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4sXG4gICAgLy8gYWxsUGxheWxpc3RzOiBKU09OLnBhcnNlKGRhdGFBbGxbMF0ucGxheWxpc3RzKSxcbiAgICBhbGxQbGF5bGlzdHM6IHBsYXlsaXN0T2JqZWN0LFxuICAgIHVzZXI6IHVzZXJuYW1lLFxuICAgIHRvdGFsTGlrZXM6IHN1bVxuICB9fTtcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il19 */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/pages/home.js */"));
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
    var code, image, topTracks, topArtist, topArtistImage, allPlaylists, res, data, result, dataAll, result2, allUsers, sum, playlistObject;
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
            // const ratingsData = await fetch(awsinstance+':3456/getRatings?token='+accessToken+'&username='+username);
            // const ratings = await ratingsData.json();
            sum = 0;
            playlistObject = [];
            JSON.parse(dataAll[0].playlists).forEach(function (playlist, index) {
              // console.log(playlist);
              // sum = sum +ratings[index].rating;
              // playlistObject.push({playlist: playlist, rating: ratings[index].rating});
              playlistObject.push({
                playlist: playlist,
                accessToken: accessToken
              });
            });
            return _context.abrupt("return", {
              data: {
                image: dataAll[0].image,
                topArtistUrl: dataAll[0].topArtistUrl,
                topTracks: JSON.parse(dataAll[0].topTracks).items,
                allUsers: allUsers,
                accessToken: accessToken,
                // allPlaylists: JSON.parse(dataAll[0].playlists),
                allPlaylists: playlistObject,
                user: username,
                totalLikes: sum
              }
            });

          case 26:
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
//# sourceMappingURL=home.js.af87efb359affe5a420b.hot-update.js.map