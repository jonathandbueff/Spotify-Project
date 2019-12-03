webpackHotUpdate("static/development/pages/playlistDisplay.js",{

/***/ "./pages/playlistDisplay.js":
/*!**********************************!*\
  !*** ./pages/playlistDisplay.js ***!
  \**********************************/
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
/* harmony import */ var _comps_playlistPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../comps/playlistPage */ "./comps/playlistPage.js");



var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/pages/playlistDisplay.js";


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

var PlaylistDisplay = function PlaylistDisplay(props) {
  return __jsx("div", {
    style: homeStyle,
    className: "jsx-985434114",
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
    className: "jsx-985434114" + " " + "mainPlaylistBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("img", {
    src: props.data.image,
    alt: "playlistimage",
    className: "jsx-985434114" + " " + "playlistImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("li", {
    className: "jsx-985434114" + " " + "playlistPage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_comps_playlistPage__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), __jsx("li", {
    className: "jsx-985434114" + " " + "sideBarProfile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_comps_sideBar__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })))), __jsx(_comps_footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "homeFooter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "985434114",
    __self: this
  }, ".playlistImage.jsx-985434114{position:absolute;top:50px;left:0px;max-width:calc( 75vw /2 );max-height:35vh;}.artistImage.jsx-985434114{position:absolute;top:50px;right:25%;max-width:calc( 75vw /2 );max-height:35vh;}.mainPlaylistBox.jsx-985434114{max-width:75%;margin:0;list-style-type:none;}.homeHeader.jsx-985434114{margin:0;position:fixed;}.playlistPage.jsx-985434114{margin:0;display:inline-block;}.sideBarProfile.jsx-985434114{display:inline-block;width:25%;position:fixed;right:0;top:51px;padding:0;}.homefooter.jsx-985434114{position:fixed;left:0px;bottom:0px;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvcGxheWxpc3REaXNwbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDYyxBQUd1QixBQU9BLEFBT0osQUFLTixBQUlBLEFBSWEsQUFRTixTQWZELEFBSU8sS0FUYixDQXFCQyxHQW5DQSxBQU9BLEdBb0JDLEVBWlcsQ0FLdkIsQUFnQmEsR0FuQ0YsQUFPQyxHQWdCWixDQUlnQixJQVNILENBbkNlLENBT0EsT0FPNUIsRUFhVSxDQVNWLE9BUlcsUUEzQk8sQ0FPQSxBQXFCUCxVQUNYLEtBNUJBLENBT0EiLCJmaWxlIjoiL2hvbWUvam9lL3B1YmxpY19odG1sL2NyZWF0aXZlcHJvamVjdC03am9lLWpvbi9wYWdlcy9wbGF5bGlzdERpc3BsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wcy9MYXlvdXQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGFic29sdXRlVXJsIGZyb20gXCJuZXh0LWFic29sdXRlLXVybFwiO1xyXG5pbXBvcnQgdXJsIGZyb20gXCJ1cmxcIjtcclxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vY29tcHMvcHJvZmlsZSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcHMvaGVhZGVyJztcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vY29tcHMvc2lkZUJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcHMvZm9vdGVyJztcclxuaW1wb3J0IFBsYXlsaXN0UGFnZSBmcm9tICcuLi9jb21wcy9wbGF5bGlzdFBhZ2UnO1xyXG4vLyBsZXQgYXdzaW5zdGFuY2UgPSAnaHR0cDovL2VjMi0xOC0xOTEtMTEtNDkudXMtZWFzdC0yLmNvbXB1dGUuYW1hem9uYXdzLmNvbSc7IC8vSm9uXHJcbmxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTIzNC0xMDktMjM4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tJzsgLy9Kb2VcclxuY29uc3QgaG9tZVN0eWxlID17XHJcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICBiYWNrZ3JvdW5kOiBcInVybCgnLzEyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgZml4ZWRcIixcclxuICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxyXG4gIGxlZnQ6IFwiMFwiLFxyXG4gIHRvcDogXCIwXCIsXHJcbiAgcmlnaHQ6IFwiMFwiLFxyXG4gIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgd2lkdGg6IFwiMTAwJVwiXHJcbn1cclxuY29uc3QgUGxheWxpc3REaXNwbGF5ID0gcHJvcHMgPT4gKFxyXG4gIDxkaXYgc3R5bGU9e2hvbWVTdHlsZX0+XHJcblx0PEhlYWRlciBjbGFzc05hbWU9XCJob21lSGVhZGVyXCIvPlxyXG4gIDx1bCBjbGFzc05hbWUgPVwibWFpblBsYXlsaXN0Qm94XCI+XHJcbiAgPGltZyBjbGFzc05hbWU9XCJwbGF5bGlzdEltYWdlXCIgc3JjPXtwcm9wcy5kYXRhLmltYWdlfSBhbHQ9XCJwbGF5bGlzdGltYWdlXCIvPlxyXG4gIHsvKiA8aW1nIGNsYXNzTmFtZT1cImFydGlzdEltYWdlXCIgc3JjPXtwcm9wcy5kYXRhLnRvcEFydGlzdFVybH0gYWx0PVwicHJvZmlsZWltYWdlXCIvPiAqL31cclxuICA8bGkgY2xhc3NOYW1lPVwicGxheWxpc3RQYWdlXCIgPjxQbGF5bGlzdFBhZ2Ugey4uLnByb3BzfSAvPjwvbGk+XHJcbiAgPGxpIGNsYXNzTmFtZSA9IFwic2lkZUJhclByb2ZpbGVcIiA+PFNpZGVCYXIgey4uLnByb3BzfT48L1NpZGVCYXI+PC9saT5cclxuICA8L3VsPlxyXG4gIDxGb290ZXIgY2xhc3NOYW1lPVwiaG9tZUZvb3RlclwiLz5cclxuICA8c3R5bGUganN4PntgXHJcbiAgLnBsYXlsaXN0SW1hZ2V7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoIDc1dncgLzIgKTtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgfVxyXG4gIC5hcnRpc3RJbWFnZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTBweDtcclxuICAgIHJpZ2h0OiAyNSU7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoIDc1dncgLzIgKTtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgfVxyXG4gIC5tYWluUGxheWxpc3RCb3h7XHJcbiAgICBtYXgtd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIH1cclxuICAuaG9tZUhlYWRlcntcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgfVxyXG4gIC5wbGF5bGlzdFBhZ2V7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLnNpZGVCYXJQcm9maWxle1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUxcHg7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgfVxyXG4gIC5ob21lZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDoxMDB2dztcclxuICB9XHJcbiAgYH1cclxuICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4gICk7XHJcbiAgUGxheWxpc3REaXNwbGF5LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKHJlcSl7XHJcbiAgICBsZXQgcGxheWxpc3QgPSByZXEucXVlcnkucGxheWxpc3Q7XHJcbiAgICBsZXQgY3JlYXRvciA9cmVxLnF1ZXJ5LmNyZWF0b3I7XHJcbiAgICBsZXQgdXNlcm5hbWUgPSBjcmVhdG9yO1xyXG4gICAgbGV0IGFjY2Vzc1Rva2VuPVwibm9uZVwiO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYXdzaW5zdGFuY2UrJzozNDU2L2dldFBsYXlsaXN0RGF0YT91c2VybmFtZT0nK3VzZXJuYW1lKycmdGl0bGU9JytwbGF5bGlzdCk7XHJcbiAgICBjb25zdCBkYXRhQWxsID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuICAgIGNvbnN0IHJlc3VsdDIgPSBhd2FpdCBmZXRjaChhd3NpbnN0YW5jZSsnOjM0NTYvZ2V0T3RoZXJVc2Vycz90b2tlbj0nK2FjY2Vzc1Rva2VuKycmdXNlcm5hbWU9Jyt1c2VybmFtZSk7XHJcbiAgICBjb25zdCBhbGxVc2VycyA9IGF3YWl0IHJlc3VsdDIuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2codHlwZW9mIGRhdGFBbGwubWV0cmljcyk7XHJcbiAgICAvLyBsZXQgbWV0cmljc0FycmF5ID0gSlNPTi5wYXJzZShkYXRhQWxsLm1ldHJpY3MpO1xyXG4gICAgLy8gY29uc29sZS5sb2cobWV0cmljc0FycmF5KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGFBbGwudHJhY2tzKTtcclxuICAgIHJldHVybiB7ZGF0YTp7XHJcbiAgICBpbWFnZTogZGF0YUFsbC5pbWFnZSxcclxuICAgIGFsbFVzZXJzOiBhbGxVc2VycyxcclxuICAgIHBsYXlsaXN0OiBkYXRhQWxsLnBsYXlsaXN0LFxyXG4gICAgY3JlYXRvcjogZGF0YUFsbC5jcmVhdG9yLFxyXG4gICAgLy8gdHJhY2tzOiBKU09OLnBhcnNlKGRhdGFBbGwudHJhY2tzKVxyXG4gICAgfX07XHJcbiAgICAvLyByZXR1cm4gZGF0YSBcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgUGxheWxpc3REaXNwbGF5OyJdfQ== */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/pages/playlistDisplay.js */"));
};

PlaylistDisplay.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req) {
    var playlist, creator, username, accessToken, result, dataAll, result2, allUsers;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            playlist = req.query.playlist;
            creator = req.query.creator;
            username = creator;
            accessToken = "none";
            _context.next = 6;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(awsinstance + ':3456/getPlaylistData?username=' + username + '&title=' + playlist);

          case 6:
            result = _context.sent;
            _context.next = 9;
            return result.json();

          case 9:
            dataAll = _context.sent;
            _context.next = 12;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(awsinstance + ':3456/getOtherUsers?token=' + accessToken + '&username=' + username);

          case 12:
            result2 = _context.sent;
            _context.next = 15;
            return result2.json();

          case 15:
            allUsers = _context.sent;
            console.log(typeof dataAll.metrics); // let metricsArray = JSON.parse(dataAll.metrics);
            // console.log(metricsArray);
            // console.log(dataAll.tracks);

            return _context.abrupt("return", {
              data: {
                image: dataAll.image,
                allUsers: allUsers,
                playlist: dataAll.playlist,
                creator: dataAll.creator // tracks: JSON.parse(dataAll.tracks)

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

/* harmony default export */ __webpack_exports__["default"] = (PlaylistDisplay);

/***/ })

})
//# sourceMappingURL=playlistDisplay.js.6260291cf6a49c87a0b2.hot-update.js.map