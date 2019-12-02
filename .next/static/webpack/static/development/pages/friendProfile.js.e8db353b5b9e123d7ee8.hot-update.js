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
    className: "jsx-1661529131",
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
    className: "jsx-1661529131" + " " + "mainProfileBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("img", {
    src: props.data.image,
    alt: "profileimage",
    className: "jsx-1661529131" + " " + "profileImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("img", {
    src: props.data.topArtistUrl,
    alt: "profileimage",
    className: "jsx-1661529131" + " " + "artistImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("li", {
    className: "jsx-1661529131" + " " + "homeProfile",
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
    className: "jsx-1661529131" + " " + "sideBarProfile",
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
    id: "1661529131",
    __self: this
  }, ".profileImage.jsx-1661529131{position:absolute;top:50px;left:0px;max-width:calc( 75vw /2 );max-height:35vh;}.artistImage.jsx-1661529131{position:absolute;top:50px;right:25vw;max-width:calc( 75vw /2 );max-height:35vh;}.mainProfileBox.jsx-1661529131{margin:0;list-style-type:none;}.homeHeader.jsx-1661529131{margin:0;position:fixed;}.homeProfile.jsx-1661529131{margin:0;display:inline-block;}.sideBarProfile.jsx-1661529131{display:inline-block;width:25vw;position:fixed;right:0;top:51px;}.homefooter.jsx-1661529131{position:fixed;left:0px;bottom:0px;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvZnJpZW5kUHJvZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2MsQUFHdUIsQUFPQSxBQU9WLEFBSUEsQUFJQSxBQUlhLEFBT04sU0FsQk0sQUFJUCxBQUlPLE1BV1osR0FqQ0EsQUFPQSxHQW1CRSxHQVBiLEFBZWEsR0FqQ0YsQUFPRSxHQU9iLEFBUUEsRUFJZ0IsR0FRSCxDQWpDZSxFQU9BLFNBbUJsQixBQVFWLFFBUFcsT0ExQk8sRUFPQSxBQW9CbEIsY0ExQkEsRUFPQSIsImZpbGUiOiIvaG9tZS9qb2UvcHVibGljX2h0bWwvY3JlYXRpdmVwcm9qZWN0LTdqb2Utam9uL3BhZ2VzL2ZyaWVuZFByb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wcy9MYXlvdXQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGFic29sdXRlVXJsIGZyb20gXCJuZXh0LWFic29sdXRlLXVybFwiO1xyXG5pbXBvcnQgdXJsIGZyb20gXCJ1cmxcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vY29tcHMvcHJvZmlsZSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcHMvaGVhZGVyJztcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vY29tcHMvc2lkZUJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcHMvZm9vdGVyJztcclxuXHJcbi8vIGxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTE5MS0xMS00OS51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tJzsgLy9Kb25cclxubGV0IGF3c2luc3RhbmNlID0gJ2h0dHA6Ly9lYzItMTgtMjM0LTEwOS0yMzguY29tcHV0ZS0xLmFtYXpvbmF3cy5jb20nOyAvL0pvZVxyXG5cclxuY29uc3QgaG9tZVN0eWxlID17XHJcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICBiYWNrZ3JvdW5kOiBcInVybCgnLzEyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgZml4ZWRcIixcclxuICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gIGxlZnQ6IFwiMFwiLFxyXG4gIHRvcDogXCIwXCIsXHJcbiAgcmlnaHQ6IFwiMFwiLFxyXG4gIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgd2lkdGg6IFwiMTAwJVwiXHJcbn1cclxuXHJcbmNvbnN0IEZyaWVuZFByb2ZpbGUgPSAocHJvcHMpID0+IChcclxuICA8ZGl2IHN0eWxlPXtob21lU3R5bGV9PlxyXG5cdDxIZWFkZXIgY2xhc3NOYW1lPVwiaG9tZUhlYWRlclwiLz5cclxuICA8dWwgY2xhc3NOYW1lID1cIm1haW5Qcm9maWxlQm94XCI+XHJcbiAgPGltZyBjbGFzc05hbWU9XCJwcm9maWxlSW1hZ2VcIiBzcmM9e3Byb3BzLmRhdGEuaW1hZ2V9IGFsdD1cInByb2ZpbGVpbWFnZVwiLz5cclxuICA8aW1nIGNsYXNzTmFtZT1cImFydGlzdEltYWdlXCIgc3JjPXtwcm9wcy5kYXRhLnRvcEFydGlzdFVybH0gYWx0PVwicHJvZmlsZWltYWdlXCIvPlxyXG4gIDxsaSBjbGFzc05hbWU9XCJob21lUHJvZmlsZVwiID48UHJvZmlsZSB7Li4ucHJvcHN9IC8+PC9saT5cclxuICA8bGkgY2xhc3NOYW1lID0gXCJzaWRlQmFyUHJvZmlsZVwiID48U2lkZUJhciB7Li4ucHJvcHN9PjwvU2lkZUJhcj48L2xpPlxyXG4gIDwvdWw+XHJcbiAgPEZvb3RlciBjbGFzc05hbWU9XCJob21lRm9vdGVyXCIvPlxyXG4gIDxzdHlsZSBqc3g+e2BcclxuICAucHJvZmlsZUltYWdle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgbWF4LXdpZHRoOiBjYWxjKCA3NXZ3IC8yICk7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIH1cclxuICAuYXJ0aXN0SW1hZ2V7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICByaWdodDogMjV2dztcclxuICAgIG1heC13aWR0aDogY2FsYyggNzV2dyAvMiApO1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICB9XHJcbiAgLm1haW5Qcm9maWxlQm94e1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG4gIC5ob21lSGVhZGVye1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICB9XHJcbiAgLmhvbWVQcm9maWxle1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIC5zaWRlQmFyUHJvZmlsZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTFweDtcclxuICB9XHJcbiAgLmhvbWVmb290ZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHdpZHRoOjEwMHZ3O1xyXG4gIH1cclxuICBgfVxyXG4gIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcbmxldCBjb3VudCA9IDA7XHJcbmxldCBhY2Nlc3NUb2tlbjtcclxuRnJpZW5kUHJvZmlsZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihyZXEpe1xyXG4gIGxldCBmcmllbmRVc2VybmFtZSA9IHJlcS5xdWVyeS51c2VyO1xyXG4gIGNvbnNvbGUubG9nKGZyaWVuZFVzZXJuYW1lKTtcclxuICBsZXQgaW1hZ2U7XHJcbiAgbGV0IHRvcFRyYWNrcztcclxuICBsZXQgdG9wQXJ0aXN0O1xyXG4gIGxldCB0b3BBcnRpc3RJbWFnZTtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhd3NpbnN0YW5jZSsnOjM0NTYvZ2V0RnJpZW5kRGF0YT9mcmllbmRVc2VybmFtZT0nK2ZyaWVuZFVzZXJuYW1lKTtcclxuICBjb25zdCBkYXRhQWxsID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zdCByZXN1bHQyID0gYXdhaXQgZmV0Y2goYXdzaW5zdGFuY2UrJzozNDU2L2dldE90aGVyVXNlcnMnKTtcclxuICBjb25zdCBhbGxVc2VycyA9IGF3YWl0IHJlc3VsdDIuanNvbigpO1xyXG4vLyAgIGNvbnNvbGUubG9nKGZyaWVuZERhdGFbMF0uaW1hZ2UpO1xyXG5cclxuLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShkYXRhQWxsWzBdLnBsYXlsaXN0cykpO3NcclxuXHJcblxyXG4gIHJldHVybntkYXRhOiB7XHJcbiAgICBpbWFnZTogZGF0YUFsbFswXS5pbWFnZSxcclxuICAgIHRvcEFydGlzdFVybDogZGF0YUFsbFswXS50b3BBcnRpc3RVcmwsXHJcbiAgICB0b3BUcmFja3M6IEpTT04ucGFyc2UoZGF0YUFsbFswXS50b3BUcmFja3MpLml0ZW1zLFxyXG4gICAgYWxsVXNlcnM6IGFsbFVzZXJzLFxyXG4gICAgYWxsUGxheWxpc3RzOiBKU09OLnBhcnNlKGRhdGFBbGxbMF0ucGxheWxpc3RzKVxyXG4gIH19O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZyaWVuZFByb2ZpbGU7Il19 */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/pages/friendProfile.js */"));
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
//# sourceMappingURL=friendProfile.js.e8db353b5b9e123d7ee8.hot-update.js.map