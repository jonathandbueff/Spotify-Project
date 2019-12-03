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
    className: "jsx-1847730252",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_comps_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "homeHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("ul", {
    className: "jsx-1847730252" + " " + "mainProfileBox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("img", {
    src: props.data.image,
    alt: "profileimage",
    className: "jsx-1847730252" + " " + "profileImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("h3", {
    className: "jsx-1847730252" + " " + "playlistTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, props.data.thisPlaylist.title), __jsx("li", {
    className: "jsx-1847730252" + " " + "sideBarProfile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_comps_sideBar__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })))), __jsx(_comps_footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "homeFooter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1847730252",
    __self: this
  }, ".playlistTitle.jsx-1847730252{text-align:center;}.profileImage.jsx-1847730252{position:absolute;top:50px;left:0px;max-width:calc( 75vw /2 );max-height:35vh;}.artistImage.jsx-1847730252{position:absolute;top:50px;right:25%;max-width:calc( 75vw /2 );max-height:35vh;}.mainProfileBox.jsx-1847730252{max-width:75%;margin:0;list-style-type:none;}.homeHeader.jsx-1847730252{margin:0;position:fixed;}.homeProfile.jsx-1847730252{margin:0;display:inline-block;}.sideBarProfile.jsx-1847730252{display:inline-block;width:25%;position:fixed;right:0;top:51px;padding:0;}.homefooter.jsx-1847730252{position:fixed;left:0px;bottom:0px;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvcGxheWxpc3REaXNwbGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDYyxBQUd1QixBQUdBLEFBT0EsQUFPSixBQUtOLEFBSUEsQUFJYSxBQVFOLFNBZkQsQUFJTyxLQVRiLENBcUJDLEdBdENYLEFBR1csQUFPQSxHQW9CQyxFQVpXLENBS3ZCLEFBZ0JhLEdBbkNGLEFBT0MsR0FnQlosQ0FJZ0IsSUFTSCxDQW5DZSxDQU9BLE9BTzVCLEVBYVUsQ0FTVixPQVJXLFFBM0JPLENBT0EsQUFxQlAsVUFDWCxLQTVCQSxDQU9BIiwiZmlsZSI6Ii9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvcGxheWxpc3REaXNwbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcHMvTGF5b3V0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBhYnNvbHV0ZVVybCBmcm9tIFwibmV4dC1hYnNvbHV0ZS11cmxcIjtcclxuaW1wb3J0IHVybCBmcm9tIFwidXJsXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gJy4uL2NvbXBzL3Byb2ZpbGUnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBzL2hlYWRlcic7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4uL2NvbXBzL3NpZGVCYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBzL2Zvb3Rlcic7XHJcbi8vIGxldCBhd3NpbnN0YW5jZSA9ICdodHRwOi8vZWMyLTE4LTE5MS0xMS00OS51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tJzsgLy9Kb25cclxubGV0IGF3c2luc3RhbmNlID0gJ2h0dHA6Ly9lYzItMTgtMjM0LTEwOS0yMzguY29tcHV0ZS0xLmFtYXpvbmF3cy5jb20nOyAvL0pvZVxyXG5jb25zdCBob21lU3R5bGUgPXtcclxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gIGJhY2tncm91bmQ6IFwidXJsKCcvMTIucG5nJykgbm8tcmVwZWF0IGNlbnRlciBmaXhlZFwiLFxyXG4gIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgbGVmdDogXCIwXCIsXHJcbiAgdG9wOiBcIjBcIixcclxuICByaWdodDogXCIwXCIsXHJcbiAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICB3aWR0aDogXCIxMDAlXCJcclxufVxyXG5jb25zdCBQbGF5bGlzdERpc3BsYXkgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdiBzdHlsZT17aG9tZVN0eWxlfT5cclxuXHQ8SGVhZGVyIGNsYXNzTmFtZT1cImhvbWVIZWFkZXJcIi8+XHJcbiAgPHVsIGNsYXNzTmFtZSA9XCJtYWluUHJvZmlsZUJveFwiPlxyXG4gIDxpbWcgY2xhc3NOYW1lPVwicHJvZmlsZUltYWdlXCIgc3JjPXtwcm9wcy5kYXRhLmltYWdlfSBhbHQ9XCJwcm9maWxlaW1hZ2VcIi8+XHJcbiAgey8qIDxpbWcgY2xhc3NOYW1lPVwiYXJ0aXN0SW1hZ2VcIiBzcmM9e3Byb3BzLmRhdGEudG9wQXJ0aXN0VXJsfSBhbHQ9XCJwcm9maWxlaW1hZ2VcIi8+ICovfVxyXG4gIHsvKiA8bGkgY2xhc3NOYW1lPVwiaG9tZVByb2ZpbGVcIiA+PFBsYXlsaXN0Lz48L2xpPiAqL31cclxuICB7LyogPGgzPntwcm9wcy59PC9oMz4gKi99XHJcbiAgPGgzIGNsYXNzTmFtZT1cInBsYXlsaXN0VGl0bGVcIj57cHJvcHMuZGF0YS50aGlzUGxheWxpc3QudGl0bGV9PC9oMz5cclxuICA8bGkgY2xhc3NOYW1lID0gXCJzaWRlQmFyUHJvZmlsZVwiID48U2lkZUJhciB7Li4ucHJvcHN9PjwvU2lkZUJhcj48L2xpPlxyXG4gIDwvdWw+XHJcbiAgPEZvb3RlciBjbGFzc05hbWU9XCJob21lRm9vdGVyXCIvPlxyXG4gIDxzdHlsZSBqc3g+e2BcclxuICAucGxheWxpc3RUaXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnByb2ZpbGVJbWFnZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIG1heC13aWR0aDogY2FsYyggNzV2dyAvMiApO1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICB9XHJcbiAgLmFydGlzdEltYWdle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgcmlnaHQ6IDI1JTtcclxuICAgIG1heC13aWR0aDogY2FsYyggNzV2dyAvMiApO1xyXG4gICAgbWF4LWhlaWdodDogMzV2aDtcclxuICB9XHJcbiAgLm1haW5Qcm9maWxlQm94e1xyXG4gICAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9XHJcbiAgLmhvbWVIZWFkZXJ7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gIH1cclxuICAuaG9tZVByb2ZpbGV7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLnNpZGVCYXJQcm9maWxle1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUxcHg7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgfVxyXG4gIC5ob21lZm9vdGVye1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDoxMDB2dztcclxuICB9XHJcbiAgYH1cclxuICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4gICk7XHJcbiAgUGxheWxpc3REaXNwbGF5LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKHJlcSl7XHJcbiAgICBsZXQgcGxheWxpc3QgPSByZXEucXVlcnkucGxheWxpc3Q7XHJcbiAgICBsZXQgY3JlYXRvciA9cmVxLnF1ZXJ5LmNyZWF0b3I7XHJcbiAgICBsZXQgdXNlcm5hbWUgPSBjcmVhdG9yO1xyXG4gICAgbGV0IGFjY2Vzc1Rva2VuPVwibm9uZVwiO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYXdzaW5zdGFuY2UrJzozNDU2L2dldFBsYXlsaXN0RGF0YT91c2VybmFtZT0nK3VzZXJuYW1lKycmdGl0bGU9JytwbGF5bGlzdCk7XHJcbiAgICBjb25zdCBkYXRhQWxsID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGFBbGwucGxheWxpc3QudGl0bGUpO1xyXG4gICAgY29uc3QgcmVzdWx0MiA9IGF3YWl0IGZldGNoKGF3c2luc3RhbmNlKyc6MzQ1Ni9nZXRPdGhlclVzZXJzP3Rva2VuPScrYWNjZXNzVG9rZW4rJyZ1c2VybmFtZT0nK3VzZXJuYW1lKTtcclxuICAgIGNvbnN0IGFsbFVzZXJzID0gYXdhaXQgcmVzdWx0Mi5qc29uKCk7XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4ge2RhdGE6e1xyXG4gICAgaW1hZ2U6IGRhdGFBbGwuaW1hZ2UsXHJcbiAgICBhbGxVc2VyczogYWxsVXNlcnMsXHJcbiAgICB0aXRsZTogZGF0YUFsbC5wbGF5bGlzdC50aXRsZSxcclxuICAgIHVzZXI6IHVzZXJuYW1lXHJcbiAgICB9fTtcclxuICAgIC8vIHJldHVybiBkYXRhIFxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBQbGF5bGlzdERpc3BsYXk7Il19 */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/pages/playlistDisplay.js */"));
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
            console.log(dataAll.playlist.title);
            _context.next = 13;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()(awsinstance + ':3456/getOtherUsers?token=' + accessToken + '&username=' + username);

          case 13:
            result2 = _context.sent;
            _context.next = 16;
            return result2.json();

          case 16:
            allUsers = _context.sent;
            return _context.abrupt("return", {
              data: {
                image: dataAll.image,
                allUsers: allUsers,
                title: dataAll.playlist.title,
                user: username
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
//# sourceMappingURL=playlistDisplay.js.12c73b0cb851b53cab12.hot-update.js.map