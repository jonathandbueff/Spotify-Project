webpackHotUpdate("static/development/pages/friendProfile.js",{

/***/ "./pages/friendProfile.js":
/*!********************************!*\
  !*** ./pages/friendProfile.js ***!
  \********************************/
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



var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/pages/friendProfile.js";


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

var FriendProfile = function FriendProfile(props) {
  return __jsx("div", {
    style: homeStyle,
    className: "jsx-3806664204",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(_comps_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "homeHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("ul", {
    className: "jsx-3806664204" + " " + "mainProfileBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("img", {
    src: props.data.image,
    alt: "profileimage",
    className: "jsx-3806664204" + " " + "profileImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("img", {
    src: props.data.topArtistUrl,
    alt: "profileimage",
    className: "jsx-3806664204" + " " + "artistImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("li", {
    className: "jsx-3806664204" + " " + "homeProfile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_comps_profile__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))), __jsx("li", {
    className: "jsx-3806664204" + " " + "sideBarProfile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_comps_sideBar__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })))), __jsx(_comps_footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "homeFooter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3806664204",
    __self: this
  }, ".profileImage.jsx-3806664204{position:absolute;top:50px;left:0px;max-width:calc( 75vw /2 );max-height:35vh;}.artistImage.jsx-3806664204{position:absolute;top:50px;right:25vw;max-width:calc( 75vw /2 );max-height:35vh;}.mainProfileBox.jsx-3806664204{margin:0;list-style-type:none;padding:0;}.homeHeader.jsx-3806664204{margin:0;position:fixed;}.homeProfile.jsx-3806664204{margin:0;display:inline-block;}.sideBarProfile.jsx-3806664204{display:inline-block;width:25vw;position:fixed;right:0;top:51px;}.homefooter.jsx-3806664204{position:fixed;left:0px;bottom:0px;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvZnJpZW5kUHJvZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2MsQUFHdUIsQUFPQSxBQU9WLEFBS0EsQUFJQSxBQUlhLEFBT04sU0FuQk0sQUFLUCxBQUlPLE1BV1osR0FsQ0EsQUFPQSxHQW9CRSxHQVBiLEFBZWEsR0FsQ0YsQUFPRSxHQU9GLEFBU1gsRUFJZ0IsR0FRSCxDQWxDZSxFQU9BLEVBTzVCLE9BYVUsQUFRVixRQVBXLE9BM0JPLEVBT0EsQUFxQmxCLGNBM0JBLEVBT0EiLCJmaWxlIjoiL2hvbWUvam9lL3B1YmxpY19odG1sL2NyZWF0aXZlcHJvamVjdC03am9lLWpvbi9wYWdlcy9mcmllbmRQcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcHMvTGF5b3V0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBhYnNvbHV0ZVVybCBmcm9tIFwibmV4dC1hYnNvbHV0ZS11cmxcIjtcclxuaW1wb3J0IHVybCBmcm9tIFwidXJsXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gJy4uL2NvbXBzL3Byb2ZpbGUnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBzL2hlYWRlcic7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4uL2NvbXBzL3NpZGVCYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBzL2Zvb3Rlcic7XHJcblxyXG4vLyBsZXQgYXdzaW5zdGFuY2UgPSAnaHR0cDovL2VjMi0xOC0xOTEtMTEtNDkudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbSc7IC8vSm9uXHJcbmxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTIzNC0xMDktMjM4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tJzsgLy9Kb2VcclxuXHJcbmNvbnN0IGhvbWVTdHlsZSA9e1xyXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgYmFja2dyb3VuZDogXCJ1cmwoJy8xMi5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGZpeGVkXCIsXHJcbiAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICBsZWZ0OiBcIjBcIixcclxuICB0b3A6IFwiMFwiLFxyXG4gIHJpZ2h0OiBcIjBcIixcclxuICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIlxyXG59XHJcblxyXG5jb25zdCBGcmllbmRQcm9maWxlID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBzdHlsZT17aG9tZVN0eWxlfT5cclxuXHQ8SGVhZGVyIGNsYXNzTmFtZT1cImhvbWVIZWFkZXJcIi8+XHJcbiAgPHVsIGNsYXNzTmFtZSA9XCJtYWluUHJvZmlsZUJveFwiPlxyXG4gIDxpbWcgY2xhc3NOYW1lPVwicHJvZmlsZUltYWdlXCIgc3JjPXtwcm9wcy5kYXRhLmltYWdlfSBhbHQ9XCJwcm9maWxlaW1hZ2VcIi8+XHJcbiAgPGltZyBjbGFzc05hbWU9XCJhcnRpc3RJbWFnZVwiIHNyYz17cHJvcHMuZGF0YS50b3BBcnRpc3RVcmx9IGFsdD1cInByb2ZpbGVpbWFnZVwiLz5cclxuICA8bGkgY2xhc3NOYW1lPVwiaG9tZVByb2ZpbGVcIiA+PFByb2ZpbGUgey4uLnByb3BzfSAvPjwvbGk+XHJcbiAgPGxpIGNsYXNzTmFtZSA9IFwic2lkZUJhclByb2ZpbGVcIiA+PFNpZGVCYXIgey4uLnByb3BzfT48L1NpZGVCYXI+PC9saT5cclxuICA8L3VsPlxyXG4gIDxGb290ZXIgY2xhc3NOYW1lPVwiaG9tZUZvb3RlclwiLz5cclxuICA8c3R5bGUganN4PntgXHJcbiAgLnByb2ZpbGVJbWFnZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIG1heC13aWR0aDogY2FsYyggNzV2dyAvMiApO1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICB9XHJcbiAgLmFydGlzdEltYWdle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgcmlnaHQ6IDI1dnc7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoIDc1dncgLzIgKTtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgfVxyXG4gIC5tYWluUHJvZmlsZUJveHtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzowO1xyXG4gIH1cclxuICAuaG9tZUhlYWRlcntcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgfVxyXG4gIC5ob21lUHJvZmlsZXtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAuc2lkZUJhclByb2ZpbGV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjV2dztcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUxcHg7XHJcbiAgfVxyXG4gIC5ob21lZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDoxMDB2dztcclxuICB9XHJcbiAgYH1cclxuICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5sZXQgY291bnQgPSAwO1xyXG5sZXQgYWNjZXNzVG9rZW47XHJcbkZyaWVuZFByb2ZpbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24ocmVxKXtcclxuICBsZXQgZnJpZW5kVXNlcm5hbWUgPSByZXEucXVlcnkudXNlcjtcclxuICBjb25zb2xlLmxvZyhmcmllbmRVc2VybmFtZSk7XHJcbiAgbGV0IGltYWdlO1xyXG4gIGxldCB0b3BUcmFja3M7XHJcbiAgbGV0IHRvcEFydGlzdDtcclxuICBsZXQgdG9wQXJ0aXN0SW1hZ2U7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXdzaW5zdGFuY2UrJzozNDU2L2dldEZyaWVuZERhdGE/ZnJpZW5kVXNlcm5hbWU9JytmcmllbmRVc2VybmFtZSk7XHJcbiAgY29uc3QgZGF0YUFsbCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc3QgcmVzdWx0MiA9IGF3YWl0IGZldGNoKGF3c2luc3RhbmNlKyc6MzQ1Ni9nZXRPdGhlclVzZXJzJyk7XHJcbiAgY29uc3QgYWxsVXNlcnMgPSBhd2FpdCByZXN1bHQyLmpzb24oKTtcclxuLy8gICBjb25zb2xlLmxvZyhmcmllbmREYXRhWzBdLmltYWdlKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoZGF0YUFsbFswXS5wbGF5bGlzdHMpKTtzXHJcblxyXG5cclxuICByZXR1cm57ZGF0YToge1xyXG4gICAgaW1hZ2U6IGRhdGFBbGxbMF0uaW1hZ2UsXHJcbiAgICB0b3BBcnRpc3RVcmw6IGRhdGFBbGxbMF0udG9wQXJ0aXN0VXJsLFxyXG4gICAgdG9wVHJhY2tzOiBKU09OLnBhcnNlKGRhdGFBbGxbMF0udG9wVHJhY2tzKS5pdGVtcyxcclxuICAgIGFsbFVzZXJzOiBhbGxVc2VycyxcclxuICAgIGFsbFBsYXlsaXN0czogSlNPTi5wYXJzZShkYXRhQWxsWzBdLnBsYXlsaXN0cylcclxuICB9fTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGcmllbmRQcm9maWxlOyJdfQ== */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/pages/friendProfile.js */"));
};

var count = 0;
var accessToken;

FriendProfile.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req) {
    var friendUsername, image, topTracks, topArtist, topArtistImage, res, dataAll, result2, allUsers;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            friendUsername = req.query.user;
            console.log(friendUsername);
            _context.next = 4;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(awsinstance + ':3456/getFriendData?friendUsername=' + friendUsername);

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            dataAll = _context.sent;
            _context.next = 10;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(awsinstance + ':3456/getOtherUsers');

          case 10:
            result2 = _context.sent;
            _context.next = 13;
            return result2.json();

          case 13:
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

          case 15:
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

/* harmony default export */ __webpack_exports__["default"] = (FriendProfile);

/***/ })

})
//# sourceMappingURL=friendProfile.js.b62003488d4762413de8.hot-update.js.map