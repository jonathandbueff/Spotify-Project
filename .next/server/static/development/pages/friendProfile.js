module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./comps/Layout.js":
/*!*************************!*\
  !*** ./comps/Layout.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./comps/header.js");
var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const body = {
  position: 'fixed',
  top: '50px'
};

const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), __jsx("div", {
  style: body,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, props.children));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./comps/footer.js":
/*!*************************!*\
  !*** ./comps/footer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Footer = props => __jsx("div", {
  className: "jsx-3939533362",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3939533362" + " " + "footerBox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-3939533362" + " " + "footerTitle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "CSE 330 Creative Project"), __jsx("p", {
  className: "jsx-3939533362" + " " + "footerBody",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, " Created By: Jon Bueff and Joe Frazier")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3939533362",
  __self: undefined
}, ".footerBox.jsx-3939533362{background:black;position:fixed;bottom:0;width:75%;text-align:center;}.footerTitle.jsx-3939533362{font-size:12px;padding:0;margin:0;color:grey;}.footerBody.jsx-3939533362{font-size:12px;padding:0;margin:0;color:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9jLEFBRzBCLEFBT0gsQUFNQSxlQUxKLEFBTUEsRUFiSyxRQVFOLEFBTUEsT0FiQSxFQVFFLEFBTUEsT0FiRCxJQVFkLEFBTUEsTUFic0Isa0JBQ3RCIiwiZmlsZSI6Ii9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9vdGVyID0gcHJvcHMgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlckJveFwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJUaXRsZVwiPkNTRSAzMzAgQ3JlYXRpdmUgUHJvamVjdDwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyQm9keVwiPiBDcmVhdGVkIEJ5OiBKb24gQnVlZmYgYW5kIEpvZSBGcmF6aWVyPC9wPlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gIDxzdHlsZSBqc3g+e2BcclxuICAgIC5mb290ZXJCb3h7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7ICBcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiA3NSU7ICAgIFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gICAgfVxyXG4gICAgLmZvb3RlclRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgfVxyXG4gICAgLmZvb3RlckJvZHl7XHJcbiAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICB9XHJcbiAgYH1cclxuICA8L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il19 */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/footer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./comps/header.js":
/*!*************************!*\
  !*** ./comps/header.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Header = () => __jsx("div", {
  className: "jsx-790232704" + " " + "headerStyle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-790232704" + " " + "headerContainer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-790232704" + " " + "linkStyle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Spotify Analytics")), __jsx("div", {
  className: "jsx-790232704" + " " + "dropdown",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-790232704" + " " + "spanBarBox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-790232704" + " " + "spanBar one",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("span", {
  className: "jsx-790232704" + " " + "spanBar two",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("span", {
  className: "jsx-790232704" + " " + "spanBar three",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-790232704" + " " + "dropdownContent",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-790232704" + " " + "dropdownItem itemOne",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Login")), __jsx("p", {
  className: "jsx-790232704" + " " + "dropdownItem",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
})))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "790232704",
  __self: undefined
}, ".headerStyle.jsx-790232704{font-family:console,monospace;position:fixed;background:black;height:50px;top:-1px;left:-1px;right:-1px;border:1px solid #DDD;z-index:100;}.headerContainer.jsx-790232704{display:inline-block;border:1px solid black;padding:10px;margin-top:5px;text-align:center;}.linkStyle.jsx-790232704{color:white;-webkit-text-decoration:none;text-decoration:none;font-family:console,monospace;-webkit-transition:color 0.4s;transition:color 0.4s;}.dropdown.jsx-790232704{position:absolute;right:0;top:0;margin-top:15px;margin-right:10px;color:white;height:38px;}.dropdownContent.jsx-790232704{display:none;position:relative;top:15px;right:-15px;width:180px;background-color:black;color:#FFF;text-align:left;}.spanBar.jsx-790232704{display:block;box-sizing:border-box;background-color:white;width:19px;height:3px;margin-bottom:3px;margin-top:3px;border-radius:3px;-webkit-transition:-webkit-transform 1s;-webkit-transition:transform 1s;transition:transform 1s;}.spanBarBox.jsx-790232704{float:right;}.linkStyle.jsx-790232704:hover{color:#1DB954;}.dropdown.jsx-790232704:hover .one.jsx-790232704{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg);}.dropdown.jsx-790232704:hover .two.jsx-790232704{-webkit-transform:rotate(-180deg);-ms-transform:rotate(-180deg);transform:rotate(-180deg);}.dropdown.jsx-790232704:hover .three.jsx-790232704{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg);}.dropdown.jsx-790232704:hover .spanBar.jsx-790232704{background-color:#1DB954;-webkit-transition:0.1s;-webkit-transition-duration:0.1s;transition-duration:0.1s;}.dropdown.jsx-790232704:hover .dropdownContent.jsx-790232704{display:block;}.itemOne.jsx-790232704{padding-top:10px;}.dropdownItem.jsx-790232704{padding-left:10px;padding-bottom:10px;}.dropdownItem.jsx-790232704:hover{color:#1DB954;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCTyxBQUd3QyxBQVdWLEFBT1QsQUFNTSxBQVNOLEFBVUUsQUFZSCxBQUdFLEFBR1ksQUFJQyxBQUlELEFBSUEsQUFLWCxBQUdHLEFBR0MsQUFJTCxZQXJFUSxBQXFDdkIsQ0F0Qm9CLENBVUksQUFleEIsQUFvQkEsQUFVQSxHQVBBLENBekRVLEFBNERZLEdBekVHLElBOERDLENBaERsQixJQXpCUyxDQWtDUCxDQVJRLElBa0JPLEVBeUN6QixFQWxEYyxJQXZCQyxDQVhJLEdBMEJDLENBK0NPLEdBdENiLEtBdkJHLEVBZ0NKLEdBM0NDLEFBaUJtQixFQWtCUixFQVRYLElBa0JELEVBaENPLEVBWFQsSUEwQkcsR0FrQk0sRUEzQ1IsSUFrQ0MsQUF3QmIsQUFRQSxHQXZEQSxBQWVBLEFBb0NBLEVBOUN3QixDQWZYLEtBa0NLLENBU0QsS0ExQ08sR0FxRXhCLE9BbkNBLEFBU29CLFlBMUNQLE1BNENhLE1BM0MxQixNQWFBLG9GQStCQSIsImZpbGUiOiIvaG9tZS9qb2UvcHVibGljX2h0bWwvY3JlYXRpdmVwcm9qZWN0LTdqb2Utam9uL2NvbXBzL2hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclN0eWxlXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJDb250YWluZXJcIj5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtTdHlsZVwiPlNwb3RpZnkgQW5hbHl0aWNzPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYW5CYXJCb3hcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhbkJhciBvbmVcIj48L3NwYW4+IFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuQmFyIHR3b1wiPjwvc3Bhbj4gXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYW5CYXIgdGhyZWVcIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PiBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bkNvbnRlbnRcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRyb3Bkb3duSXRlbSBpdGVtT25lXCI+TG9naW48L3A+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRyb3Bkb3duSXRlbVwiPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICAgIC5oZWFkZXJTdHlsZXtcbiAgICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB0b3A6IC0xcHg7XG4gICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgIHJpZ2h0OiAtMXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjREREO1xuICAgICAgICB6LWluZGV4OjEwMDtcbiAgICAgIH1cbiAgICAgIC5oZWFkZXJDb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmxpbmtTdHlsZXtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBjb25zb2xlLCBtb25vc3BhY2U7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNHM7XG4gICAgICB9XG4gICAgICAuZHJvcGRvd257XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgIH1cbiAgICAgIC5kcm9wZG93bkNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOjE1cHg7XG4gICAgICAgIHJpZ2h0OiAtMTVweDtcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG4gICAgICAuc3BhbkJhcntcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMTlweDtcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIC8vIHotaW5kZXg6MTAwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgICAgfVxuICAgICAgLnNwYW5CYXJCb3h7XG4gICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgfVxuICAgICAgLmxpbmtTdHlsZTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiMxREI5NTQ7XG4gICAgICB9XG4gICAgICAuZHJvcGRvd246aG92ZXIgLm9uZXtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgICAuZHJvcGRvd246aG92ZXIgLnR3b3tcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgLmRyb3Bkb3duOmhvdmVyIC50aHJlZXtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgICAuZHJvcGRvd246aG92ZXIgLnNwYW5CYXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4xcztcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xcztcbiAgICAgIH1cbiAgICAgIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd25Db250ZW50IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgICAuaXRlbU9uZXtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgICAuZHJvcGRvd25JdGVte1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4OyAgICAgICAgXG4gICAgICB9XG4gICAgICAuZHJvcGRvd25JdGVtOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IzFEQjk1NDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/header.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./comps/playlist.js":
/*!***************************!*\
  !*** ./comps/playlist.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/playlist.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // async function

const Playlist = props => __jsx("div", {
  className: "jsx-4049096105" + " " + "playlistMain",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/playlistDisplay?playlist=" + props.playlist.title + "&creator=" + props.playlist.creator,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-4049096105" + " " + "container playlistBox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-4049096105" + " " + "titleHere",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, props.playlist.title), __jsx("p", {
  className: "jsx-4049096105" + " " + "creatorHere",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, props.playlist.creator), __jsx("p", {
  className: "jsx-4049096105" + " " + "ratingHere",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Likes: ", props.rating))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4049096105",
  __self: undefined
}, ".titleHere.jsx-4049096105{display:inline-block;}.creatorHere.jsx-4049096105{font-size:14px;margin:0;padding:0;display:inline-block;padding-left:15px;color:#1DB954;}.ratingHere.jsx-4049096105{margin:0;padding:0;float:right;padding-right:10px;}.container.jsx-4049096105{padding:0;margin:0;border-radius:10px;padding-left:2px;}.titleHere.jsx-4049096105{padding:0;margin:0;}.container.jsx-4049096105:hover{background-color:#1DB954;}.container.jsx-4049096105:hover .titleHere.jsx-4049096105{color:black;}.container.jsx-4049096105:hover .creatorHere.jsx-4049096105{color:white;}.container.jsx-4049096105:hover .ratingHere.jsx-4049096105{color:black;}.playlistBox.jsx-4049096105{font-family:console,monospace;padding-bottom:5px;}.like.jsx-4049096105{font-family:console,monospace;float:right;margin-right:5px;background:#1DB954;color:#FFF;border:none;border-radius:500px;margin-top:2px;-webkit-transition:background 0.4s;-webkit-transition-duration:background 0.4s;transition-duration:background 0.4s;}.like.jsx-4049096105:hover{background:black;color:#1DB954;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcGxheWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBRzRCLEFBR04sQUFRUCxBQU1DLEFBTUMsQUFJZSxBQUdiLEFBR0EsQUFJQSxBQUdxQixBQUtBLEFBY2hCLFNBL0NSLENBTUQsQUFNQyxFQU9YLEFBSUEsQUFHQSxHQWxDVSxFQXdETSxFQS9DSCxBQU1RLEFBTXJCLEVBeEJBLEdBSVcsQ0F1QlgsS0FhdUIsQUFLUCxDQWhDSyxBQStDckIsR0F2RHVCLElBY0osSUEyQkUsT0FMckIsQ0EzQkEsS0FSb0IsQUFjcEIsSUEyQnNCLGNBeENOLEtBeUNELFNBeENmLEVBMENnQixZQUNRLG9CQUNMLGVBQ29CLG1DQUNDLGdGQUV4QyIsImZpbGUiOiIvaG9tZS9qb2UvcHVibGljX2h0bWwvY3JlYXRpdmVwcm9qZWN0LTdqb2Utam9uL2NvbXBzL3BsYXlsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBhc3luYyBmdW5jdGlvblxyXG5cclxuY29uc3QgUGxheWxpc3QgPSBwcm9wcyA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0TWFpblwiPlxyXG4gICAgPExpbmsgaHJlZj17XCIvcGxheWxpc3REaXNwbGF5P3BsYXlsaXN0PVwiK3Byb3BzLnBsYXlsaXN0LnRpdGxlK1wiJmNyZWF0b3I9XCIrcHJvcHMucGxheWxpc3QuY3JlYXRvcn0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwbGF5bGlzdEJveFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlSGVyZVwiPntwcm9wcy5wbGF5bGlzdC50aXRsZX08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3JlYXRvckhlcmVcIj57cHJvcHMucGxheWxpc3QuY3JlYXRvcn08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicmF0aW5nSGVyZVwiPkxpa2VzOiB7cHJvcHMucmF0aW5nfTwvcD5cclxuICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXt9IGNsYXNzTmFtZT1cImxpa2VcIj5MaWtlPC9idXR0b24+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8L0xpbms+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAudGl0bGVIZXJle1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuY3JlYXRvckhlcmV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbWFyZ2luOjA7XHJcbiAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiAjMURCOTU0O1xyXG4gICAgfVxyXG4gICAgLnJhdGluZ0hlcmV7XHJcbiAgICAgIG1hcmdpbjowO1xyXG4gICAgICBwYWRkaW5nOjA7XHJcbiAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgcGFkZGluZzowO1xyXG4gICAgICBtYXJnaW46MDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICB9XHJcbiAgICAudGl0bGVIZXJle1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURCOTU0O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcjpob3ZlciAudGl0bGVIZXJle1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyOmhvdmVyIC5jcmVhdG9ySGVyZXtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5jb250YWluZXI6aG92ZXIgLnJhdGluZ0hlcmV7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIC5wbGF5bGlzdEJveHtcclxuICAgICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgICAubGlrZXtcclxuICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBjb25zb2xlLCBtb25vc3BhY2U7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzFEQjk1NDtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAvLyBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC40cztcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBiYWNrZ3JvdW5kIDAuNHM7XHJcblxyXG4gICAgfVxyXG4gICAgLmxpa2U6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgY29sb3I6ICMxREI5NTQ7ICBcclxuICAgIH1cclxuICAgIGB9XHJcbiAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICApO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFBsYXlsaXN0OyJdfQ== */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/playlist.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Playlist);

/***/ }),

/***/ "./comps/profile.js":
/*!**************************!*\
  !*** ./comps/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _song__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./song */ "./comps/song.js");
/* harmony import */ var _playlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playlist */ "./comps/playlist.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search */ "./comps/search.js");

var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/profile.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





let awsinstance = 'http://ec2-18-191-11-49.us-east-2.compute.amazonaws.com'; //Jon
// let awsinstance = 'http://ec2-18-234-109-238.compute-1.amazonaws.com'; //Joe

const Profile = props => __jsx("div", {
  className: "jsx-1606326946",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1606326946" + " " + "profileHead",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1606326946" + " " + "profileHeadText",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("h3", {
  id: "usernameHere",
  className: "jsx-1606326946",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, props.data.user), __jsx("p", {
  id: "playlistLikesHere",
  className: "jsx-1606326946",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "Total Playlist Likes: " + props.data.totalLikes))), __jsx("div", {
  className: "jsx-1606326946" + " " + "recentlyMostPlayed",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("h4", {
  className: "jsx-1606326946" + " " + "recentlyMostPlayedHead",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Recently Most Played"), __jsx("ol", {
  className: "jsx-1606326946" + " " + "songList",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, props.data.topTracks.map(p => __jsx("li", {
  key: p.name,
  className: "jsx-1606326946" + " " + "songListItem",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx(_song__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, p, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
})))))), __jsx("div", {
  className: "jsx-1606326946" + " " + "playlistContainer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("h4", {
  className: "jsx-1606326946" + " " + "playlistListTitle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "Playlists"), __jsx("ol", {
  className: "jsx-1606326946" + " " + "playlist",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, " ", console.log(props.data.allPlaylists[0].playlist), props.data.allPlaylists.map((p, index) => __jsx("li", {
  key: p.playlist.title + "PlaylistItem" + index,
  className: "jsx-1606326946" + " " + "playlistListItem",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, " ", __jsx(_playlist__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  className: p.playlist.title + index
}, p, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
})))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
  id: "1606326946",
  __self: undefined
}, ".playlistListTitle.jsx-1606326946{margin:0;padding-bottom:5px;padding-top:5px;text-align:center;color:#1DB954;}.playlistContainer.jsx-1606326946{font-family:console,monospace;margin:0px;background:black;width:75%;left:0;position:absolute;top:calc(35vh + 230.4px);}.playlistListItem.jsx-1606326946{margin:0px;padding-bottom:10px;color:#FFF;}.profileHead.jsx-1606326946{width:75%;height:35vh;position:absolute;left:0;top:50px;font-family:console,monospace;}.recentlyMostPlayed.jsx-1606326946{background:black;color:#1DB954;width:75%;position:absolute;top:calc(35vh + 50px);left:0;font-family:console,monospace;}.recentlyMostPlayedHead.jsx-1606326946{margin:0;padding-top:5px;padding-bottom:5px;text-align:center;}.createBtn.jsx-1606326946{position:absolute;font-family:console,monospace;left:calc( 37.5vw - 211.46px / 2);background:#1DB954;color:#FFF;font-size:14px;border:none;border-radius:500px;padding:16px 48px 18px;-webkit-transition:background 0.4s;-webkit-transition-duration:background 0.4s;transition-duration:background 0.4s;}.profileHeadText.jsx-1606326946{margin:0px;padding:0px;text-align:center;position:relative;color:white;top:calc( 35vh - 155px);text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;}.songList.jsx-1606326946{margin:0px;padding-bottom:10px;}.songListItem.jsx-1606326946{margin:0px;padding-bottom:10px;color:white;}.createBtn.jsx-1606326946:hover{background:black;color:#1DB954;}.playlist.jsx-1606326946{margin:0px;padding-bottom:10px;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2tCLEFBR2lCLEFBT3FCLEFBU3JCLEFBS0EsQUFVTyxBQVdSLEFBTVcsQUFjVCxBQVNBLEFBS0QsQUFPTyxBQUlQLFNBdEZXLEFBMENMLENBckJKLENBTFEsQUE4Q1IsQUFVUSxBQUlBLEFBV0EsTUF4RE4sQUFvREEsQ0FuQ21CLElBekJmLENBd0NBLEVBcEJDLEdBMUNELEVBTVAsQ0FVRCxBQWdCQSxBQXdDWixBQUtjLEFBTWQsQUFLYyxTQWpFTixDQWhCVyxBQTBCQyxBQThCQSxDQTlDcEIsQ0E4REEsQUFXQSxDQXpGcUIsQUEwQ0YsR0FuQlIsQ0F3QjJCLFFBdkJMLEVBakJyQixDQTBCWSxBQThCVixHQTlESSxBQTBDbEIsTUFuQ1MsR0F3RGlCLElBdkRQLENBUGpCLEtBZ0NNLENBZWMsSUF2QnRCLEVBU2lDLEtBekJOLEVBdUR3QyxNQWZwRCxXQUNJLE1BeENuQixBQTBCQSxTQWVnQixZQUNRLGtCQWF4QixFQVoyQix1QkFDWSxtQ0FDRCxnRkFDdEMiLCJmaWxlIjoiL2hvbWUvam9lL3B1YmxpY19odG1sL2NyZWF0aXZlcHJvamVjdC03am9lLWpvbi9jb21wcy9wcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgU29uZyBmcm9tICcuL3NvbmcnO1xyXG5pbXBvcnQgUGxheWxpc3QgZnJvbSAnLi9wbGF5bGlzdCc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gnO1xyXG5cclxubGV0IGF3c2luc3RhbmNlID0gJ2h0dHA6Ly9lYzItMTgtMTkxLTExLTQ5LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb20nOyAvL0pvblxyXG4vLyBsZXQgYXdzaW5zdGFuY2UgPSAnaHR0cDovL2VjMi0xOC0yMzQtMTA5LTIzOC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbSc7IC8vSm9lXHJcblxyXG5cclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAocHJvcHMpID0+IChcclxuICAgIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVIZWFkXCI+XHJcbiAgICAgIHsvKiA8aW1nIGlkPVwicHJvZmlsZUltYWdlSGVyZVwiPjwvaW1nPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlSGVhZFRleHRcIj5cclxuICAgICAgPGgzIGlkPVwidXNlcm5hbWVIZXJlXCI+e3Byb3BzLmRhdGEudXNlcn08L2gzPlxyXG4gICAgICA8cCBpZD1cInBsYXlsaXN0TGlrZXNIZXJlXCI+e1wiVG90YWwgUGxheWxpc3QgTGlrZXM6IFwiICtwcm9wcy5kYXRhLnRvdGFsTGlrZXMgfTwvcD5cclxuICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiY3JlYXRlQnRuXCI+Q3JlYXRlIFBsYXlsaXN0PC9idXR0b24+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjZW50bHlNb3N0UGxheWVkXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cInJlY2VudGx5TW9zdFBsYXllZEhlYWRcIj5SZWNlbnRseSBNb3N0IFBsYXllZDwvaDQ+XHJcbiAgICAgIDxvbCBjbGFzc05hbWUgPSBcInNvbmdMaXN0XCI+XHJcbiAgICAgICAge3Byb3BzLmRhdGEudG9wVHJhY2tzLm1hcChwID0+ICg8bGkgY2xhc3NOYW1lID1cInNvbmdMaXN0SXRlbVwiIGtleT17cC5uYW1lfT48U29uZyB7Li4ucH0vPjwvbGk+KSl9XHJcbiAgICAgIDwvb2w+XHJcbiAgICAgIDwvZGl2PiBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5bGlzdENvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJwbGF5bGlzdExpc3RUaXRsZVwiPlBsYXlsaXN0czwvaDQ+XHJcbiAgICAgICAgey8qIDxhIGhyZWYgPSB7cmVkaXJlY3RfdXJpfSA+ICovfVxyXG4gICAgICAgIDxvbCBjbGFzc05hbWU9XCJwbGF5bGlzdFwiPiB7Y29uc29sZS5sb2cocHJvcHMuZGF0YS5hbGxQbGF5bGlzdHNbMF0ucGxheWxpc3QpfVxyXG4gICAgICAgICAge3Byb3BzLmRhdGEuYWxsUGxheWxpc3RzLm1hcCgocCxpbmRleCkgPT4gKDxsaSBjbGFzc05hbWUgPVwicGxheWxpc3RMaXN0SXRlbVwiIGtleT17cC5wbGF5bGlzdC50aXRsZStcIlBsYXlsaXN0SXRlbVwiK2luZGV4fT4gPFBsYXlsaXN0IGNsYXNzTmFtZT17cC5wbGF5bGlzdC50aXRsZSArIGluZGV4fSB7Li4ucH0vPjwvbGk+KSl9XHJcbiAgICAgICAgPC9vbD5cclxuICAgICAgICB7LyogPC9hPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnBsYXlsaXN0TGlzdFRpdGxle1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzFEQjk1NDtcclxuICAgICAgfVxyXG4gICAgLnBsYXlsaXN0Q29udGFpbmVye1xyXG4gICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICB0b3A6IGNhbGMoMzV2aCArIDIzMC40cHgpO1xyXG4gICAgfVxyXG4gICAgLnBsYXlsaXN0TGlzdEl0ZW17XHJcbiAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICBjb2xvcjojRkZGO1xyXG4gICAgfVxyXG4gICAgLnByb2ZpbGVIZWFke1xyXG4gICAgICB3aWR0aDogNzUlO1xyXG4gICAgICBoZWlnaHQ6IDM1dmg7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OjA7XHJcbiAgICAgIHRvcDogNTBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuXHJcbiAgICB9XHJcbiAgICAucmVjZW50bHlNb3N0UGxheWVke1xyXG4gICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgY29sb3I6ICMxREI5NTQ7XHJcbiAgICAgIC8vIG1pbi13aWR0aDo3NXY7XHJcbiAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiBjYWxjKDM1dmggKyA1MHB4KTtcclxuICAgICAgbGVmdDowO1xyXG4gICAgICBmb250LWZhbWlseTogY29uc29sZSwgbW9ub3NwYWNlO1xyXG5cclxuICAgIH1cclxuICAgIC5yZWNlbnRseU1vc3RQbGF5ZWRIZWFke1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNyZWF0ZUJ0bntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGNvbnNvbGUsIG1vbm9zcGFjZTtcclxuICAgICAgICBsZWZ0OiBjYWxjKCAzNy41dncgLSAyMTEuNDZweCAvIDIpO1xyXG4gICAgICAgIC8vIHRvcDogY2FsYyggMzV2aCAtIDU1cHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzFEQjk1NDtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggNDhweCAxOHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzO1xyXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBiYWNrZ3JvdW5kIDAuNHM7XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZUhlYWRUZXh0e1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB0b3A6IGNhbGMoIDM1dmggLSAxNTVweCk7XHJcbiAgICAgIHRleHQtc2hhZG93OiAtMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLnNvbmdMaXN0e1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgLy8gYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnNvbmdMaXN0SXRlbXtcclxuICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDhweCAwcHggOHB4ICAxMHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICB9XHJcbiAgICAuY3JlYXRlQnRuOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgIGNvbG9yOiAjMURCOTU0OyAgICAgXHJcbiAgICB9XHJcbiAgICAucGxheWxpc3R7XHJcbiAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAvLyBwYWRkaW5nOiA4cHggMHB4IDhweCAgMTBweDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gICAgfVxyXG4gIGB9XHJcbiAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4pO1xyXG4gICAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXX0= */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/profile.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./comps/search.js":
/*!*************************!*\
  !*** ./comps/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/search.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Search = props => __jsx("div", {
  className: "jsx-3718532173",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3718532173" + " " + "searchBox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("input", {
  type: "text",
  placeholder: "Search",
  className: "jsx-3718532173" + " " + "searchBar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}), __jsx("input", {
  type: "button",
  value: "Search",
  className: "jsx-3718532173" + " " + "searchBarBtn",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3718532173",
  __self: undefined
}, ".searchBox.jsx-3718532173{max-width:25vw;}.searchBarBtn.jsx-3718532173{position:relative;font-family:console,monospace;left:calc(50% / 2 );background:#1DB954;color:#FFF;font-size:14px;border:none;border-radius:500px;-webkit-transition:background 0.4s;-webkit-transition-duration:background 0.4s;transition-duration:background 0.4s;}.searchBarBtn.jsx-3718532173:hover{background:black;color:#1DB954;}.searchBar.jsx-3718532173{background-color:grey;height:20px;padding-left:5px;width:calc(100% - 22px);border-radius:100px;border:none;color:white;}.jsx-3718532173::-webkit-input-placeholder{color:white;}.jsx-3718532173::-moz-placeholder{color:white;}.jsx-3718532173:-ms-input-placeholder{color:white;}.jsx-3718532173::placeholder{color:white;}.searchBar.jsx-3718532173:hover{background:white;color:black;}.jsx-3718532173:hover::-webkit-input-placeholder{color:black;}.jsx-3718532173:hover::-moz-placeholder{color:black;}.jsx-3718532173:hover:-ms-input-placeholder{color:black;}.jsx-3718532173:hover::placeholder{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1rQixBQUd3QixBQUlHLEFBYUQsQUFJTyxBQVNWLEFBR0ssQUFJTixZQU5iLEFBT0EsR0FwQ0YsRUFnQmdCLEFBZ0JBLENBN0JpQixJQWlCakIsT0FhZCxFQWhCRixHQUlxQixjQWpCQyxHQWtCTSxpQkFqQlIsT0FrQkksWUFqQlgsUUFrQkcsR0FqQkMsU0FrQkQsTUFqQkYsTUFrQlosTUFqQm9CLG9CQUVlLG1DQUNDLGdGQUN0QyIsImZpbGUiOiIvaG9tZS9qb2UvcHVibGljX2h0bWwvY3JlYXRpdmVwcm9qZWN0LTdqb2Utam9uL2NvbXBzL3NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNlYXJjaCA9IHByb3BzID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hCb3hcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJzZWFyY2hCYXJcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJzZWFyY2hCYXJCdG5cIiB2YWx1ZT1cIlNlYXJjaFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnNlYXJjaEJveHtcclxuICAgICAgICBtYXgtd2lkdGg6IDI1dnc7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIC5zZWFyY2hCYXJCdG57XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBjb25zb2xlLCBtb25vc3BhY2U7XHJcbiAgICAgICAgbGVmdDogY2FsYyg1MCUgLyAyICk7XHJcbiAgICAgICAgYmFja2dyb3VuZDojMURCOTU0O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XHJcbiAgICAgICAgLy8gcGFkZGluZzogMTZweCA0OHB4IDE4cHg7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHM7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogYmFja2dyb3VuZCAwLjRzO1xyXG4gICAgICB9XHJcbiAgICAgIC5zZWFyY2hCYXJCdG46aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIGNvbG9yOiAjMURCOTU0OyAgICAgXHJcbiAgICAgIH1cclxuICAgICAgICAuc2VhcmNoQmFye1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIycHgpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2hCYXI6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDpob3Zlcjo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgICBjb2xvcjpibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFNlYXJjaDsiXX0= */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/search.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./comps/sideBar.js":
/*!**************************!*\
  !*** ./comps/sideBar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _comps_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/search */ "./comps/search.js");
/* harmony import */ var _comps_userLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/userLink */ "./comps/userLink.js");

var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/sideBar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // import Link from "next/link";

const SideBar = props => __jsx("div", {
  className: "jsx-2391911462",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2391911462" + " " + "sideBarBox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-2391911462",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Other Users"), __jsx("ul", {
  className: "jsx-2391911462" + " " + "otherUsersList",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, props.data.allUsers.map(p => __jsx("li", {
  key: p.username + "userItem",
  className: "jsx-2391911462" + " " + "userListItem",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(_comps_userLink__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  key: p.username
}, p, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
  id: "2391911462",
  __self: undefined
}, ".userListItem.jsx-2391911462{max-width:25vw;position:relative;left:0;}.otherUsersList.jsx-2391911462{list-style-type:none;margin:0;width:25vw;padding:0;}.searchBarMain.jsx-2391911462{position:fixed;}.sideBarBox.jsx-2391911462{padding:0;margin:0;height:100vh;color:#1DB954;background:black;position:fixed;width:25vw;padding-left:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvc2lkZUJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlZ0IsQUFHcUIsQUFLTSxBQU1OLEFBR04sVUFDRCxLQWRXLEFBV3BCLElBSWEsRUFWSCxTQUNHLEVBVUMsQ0FmTixPQUNSLENBS1csS0FVTSxLQVRqQixZQVVlLGVBQ0osV0FDTSxpQkFFbkIiLCJmaWxlIjoiL2hvbWUvam9lL3B1YmxpY19odG1sL2NyZWF0aXZlcHJvamVjdC03am9lLWpvbi9jb21wcy9zaWRlQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlYXJjaCBmcm9tICcuLi9jb21wcy9zZWFyY2gnO1xyXG5pbXBvcnQgVXNlckxpbmsgZnJvbSAnLi4vY29tcHMvdXNlckxpbmsnO1xyXG5cclxuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5jb25zdCBTaWRlQmFyID0gcHJvcHMgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVCYXJCb3hcIj5cclxuICAgICAgICB7LyogPGgzPlNlYXJjaDwvaDM+ICovfVxyXG4gICAgICAgIHsvKiA8U2VhcmNoIGNsYXNzTmFtZT1cInNlYWNoQmFyTWFpblwiLz4gKi99XHJcbiAgICAgICAgPGgzPk90aGVyIFVzZXJzPC9oMz5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwib3RoZXJVc2Vyc0xpc3RcIj5cclxuICAgICAgICB7cHJvcHMuZGF0YS5hbGxVc2Vycy5tYXAocCA9PiAoPGxpIGNsYXNzTmFtZSA9XCJ1c2VyTGlzdEl0ZW1cIiBrZXk9e3AudXNlcm5hbWUrXCJ1c2VySXRlbVwifT48VXNlckxpbmsga2V5PXtwLnVzZXJuYW1lfSB7Li4ucH0vPjwvbGk+KSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIC51c2VyTGlzdEl0ZW17XHJcbiAgICAgIG1heC13aWR0aDoyNXZ3O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgIH1cclxuICAgIC5vdGhlclVzZXJzTGlzdHtcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbiAgICAgIG1hcmdpbjowO1xyXG4gICAgICB3aWR0aDogMjV2dztcclxuICAgICAgcGFkZGluZzowO1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaEJhck1haW57XHJcbiAgICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgfVxyXG4gICAgLnNpZGVCYXJCb3h7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGNvbG9yOiAjMURCOTU0O1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMjV2dztcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG5cclxuICB9XHJcbiAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7Il19 */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/sideBar.js */"));

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./comps/song.js":
/*!***********************!*\
  !*** ./comps/song.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/song.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Song = props => __jsx("div", {
  className: "jsx-3444617512" + " " + "songMain",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3444617512" + " " + "container songBoxTop",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-3444617512" + " " + "titleHere",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, props.name), __jsx("p", {
  className: "jsx-3444617512" + " " + "artistHere",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, props.artists[0].name), __jsx("p", {
  className: "jsx-3444617512" + " " + "popularityHere",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, props.popularity)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3444617512",
  __self: undefined
}, ".titleHere.jsx-3444617512{display:inline-block;font-size:16px;}.artistHere.jsx-3444617512{font-size:14px;margin:0;padding:0;display:inline-block;padding-left:15px;color:#1DB954;}.popularityHere.jsx-3444617512{margin:0;padding:0;float:right;padding-right:10px;}.container.jsx-3444617512{padding:0;margin:0;border-radius:10px;padding-left:2px;}.container.jsx-3444617512:hover{background-color:#1DB954;}.container.jsx-3444617512:hover .titleHere.jsx-3444617512{color:black;}.container.jsx-3444617512:hover .artistHere.jsx-3444617512{color:white;}.container.jsx-3444617512:hover .popularityHere.jsx-3444617512{color:black;}.titleHere.jsx-3444617512{padding:0;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvc29uZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPZ0IsQUFHNEIsQUFJTixBQVFQLEFBTUMsQUFNZ0IsQUFHYixBQUdBLEFBSUEsQUFHRixTQXhCRCxDQU1ELEFBbUJDLEVBVlgsQUFJQSxBQUdBLEdBOUJVLElBU0csQUFNUSxBQW1CckIsRUF0Q2lCLEdBS04sQ0FtQlgsTUFWcUIsR0FSRSxFQUx2QixFQW1CbUIsWUFMbkIsS0FSb0IsQUFjcEIsa0JBYmdCLGNBQ2hCIiwiZmlsZSI6Ii9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvc29uZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNvbmcgPSAocHJvcHMpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic29uZ01haW5cIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNvbmdCb3hUb3BcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZUhlcmVcIj57cHJvcHMubmFtZX08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aXN0SGVyZVwiPntwcm9wcy5hcnRpc3RzWzBdLm5hbWV9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBvcHVsYXJpdHlIZXJlXCI+e3Byb3BzLnBvcHVsYXJpdHl9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAudGl0bGVIZXJle1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5hcnRpc3RIZXJle1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIG1hcmdpbjowO1xyXG4gICAgICBwYWRkaW5nOjA7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICBjb2xvcjogIzFEQjk1NDtcclxuICAgIH1cclxuICAgIC5wb3B1bGFyaXR5SGVyZXtcclxuICAgICAgbWFyZ2luOjA7XHJcbiAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICBwYWRkaW5nOjA7XHJcbiAgICAgIG1hcmdpbjowO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXI6aG92ZXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxREI5NTQ7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyOmhvdmVyIC50aXRsZUhlcmV7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIC5jb250YWluZXI6aG92ZXIgLmFydGlzdEhlcmV7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyOmhvdmVyIC5wb3B1bGFyaXR5SGVyZXtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLnRpdGxlSGVyZXtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgKTtcclxuICBleHBvcnQgZGVmYXVsdCBTb25nOyJdfQ== */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/song.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Song);

/***/ }),

/***/ "./comps/userLink.js":
/*!***************************!*\
  !*** ./comps/userLink.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/comps/userLink.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const UserLink = props => __jsx("div", {
  className: "jsx-1274545313",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1274545313" + " " + "linkBox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/friendProfile?user=" + props.username,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-1274545313" + " " + "userLinkBox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("img", {
  src: props.image,
  className: "jsx-1274545313" + " " + "profilePic",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-1274545313" + " " + "userInfo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-1274545313" + " " + "userLinkusername",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, props.username))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1274545313",
  __self: undefined
}, ".profilePic.jsx-1274545313{display:inline-block;width:50px;float:left;padding-top:1px;}.userLinkusername.jsx-1274545313{display:inline-block;}.userInfo.jsx-1274545313{display:inline-block;}.userLinkBox.jsx-1274545313{font-family:console,monospace;padding-left:2px;padding-top:1px;padding-bottom:2px;margin-bottom:2px;color:white;width:calc(100% - 28px);text-align:center;border:1px solid #1DB954;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vY29tcHMvdXNlckxpbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBSThCLEFBT0EsQUFHQSxBQUdVLHFCQVpwQixBQU9mLEFBR0EsU0FHcUIsRUFaTixXQUNLLElBWUEsWUFWcEIsSUFXdUIsbUJBQ0Qsa0JBQ04sWUFDWSx3QkFDTixrQkFDTyx5QkFDN0IiLCJmaWxlIjoiL2hvbWUvam9lL3B1YmxpY19odG1sL2NyZWF0aXZlcHJvamVjdC03am9lLWpvbi9jb21wcy91c2VyTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuY29uc3QgVXNlckxpbmsgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua0JveFwiPlxyXG4gICAgPExpbmsgaHJlZiA9IHtcIi9mcmllbmRQcm9maWxlP3VzZXI9XCIrIHByb3BzLnVzZXJuYW1lfSA+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJMaW5rQm94XCI+XHJcbiAgICA8aW1nIGNsYXNzTmFtZT1cInByb2ZpbGVQaWNcIiBzcmM9e3Byb3BzLmltYWdlfT48L2ltZz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlckluZm9cIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ1c2VyTGlua3VzZXJuYW1lXCI+e3Byb3BzLnVzZXJuYW1lfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIFxyXG4gICAgLnByb2ZpbGVQaWN7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAudXNlckxpbmt1c2VybmFtZXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAudXNlckluZm97XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnVzZXJMaW5rQm94e1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBjb25zb2xlLCBtb25vc3BhY2U7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI4cHgpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMURCOTU0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJMaW5rOyJdfQ== */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/comps/userLink.js */"));

/* harmony default export */ __webpack_exports__["default"] = (UserLink);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/friendProfile.js":
/*!********************************!*\
  !*** ./pages/friendProfile.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _comps_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/Layout */ "./comps/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-absolute-url */ "next-absolute-url");
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_absolute_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _comps_profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../comps/profile */ "./comps/profile.js");
/* harmony import */ var _comps_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../comps/header */ "./comps/header.js");
/* harmony import */ var _comps_sideBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../comps/sideBar */ "./comps/sideBar.js");
/* harmony import */ var _comps_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../comps/footer */ "./comps/footer.js");

var _jsxFileName = "/home/joe/public_html/creativeproject-7joe-jon/pages/friendProfile.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








 // let awsinstance = 'http://ec2-18-191-11-49.us-east-2.compute.amazonaws.com'; //Jon

let awsinstance = 'http://ec2-18-234-109-238.compute-1.amazonaws.com'; //Joe

const homeStyle = {
  position: "absolute",
  background: "url('/12.png') no-repeat center fixed",
  backgroundSize: "cover",
  left: "0",
  top: "0",
  right: "0",
  height: "100%",
  width: "100%"
};

const FriendProfile = props => __jsx("div", {
  style: homeStyle,
  className: "jsx-126413025",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx(_comps_header__WEBPACK_IMPORTED_MODULE_9__["default"], {
  className: "homeHeader",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx("ul", {
  className: "jsx-126413025" + " " + "mainProfileBox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("img", {
  src: props.data.image,
  alt: "profileimage",
  className: "jsx-126413025" + " " + "profileImage",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("img", {
  src: props.data.topArtistUrl,
  alt: "profileimage",
  className: "jsx-126413025" + " " + "artistImage",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx("li", {
  className: "jsx-126413025" + " " + "homeProfile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx(_comps_profile__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}))), __jsx("li", {
  className: "jsx-126413025" + " " + "sideBarProfile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx(_comps_sideBar__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
})))), __jsx(_comps_footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
  className: "homeFooter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
  id: "126413025",
  __self: undefined
}, ".profileImage.jsx-126413025{position:absolute;top:50px;left:0px;max-width:calc( 75vw /2 );max-height:35vh;}.artistImage.jsx-126413025{position:absolute;top:50px;right:25%;max-width:calc( 75vw /2 );max-height:35vh;}.mainProfileBox.jsx-126413025{max-width:75%;margin:0;list-style-type:none;}.homeHeader.jsx-126413025{margin:0;position:fixed;}.homeProfile.jsx-126413025{margin:0;display:inline-block;}.sideBarProfile.jsx-126413025{display:inline-block;width:25%;position:fixed;right:0;top:51px;padding:0;}.homefooter.jsx-126413025{position:fixed;left:0px;bottom:0px;width:100vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvZnJpZW5kUHJvZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2MsQUFHdUIsQUFPQSxBQU9KLEFBS04sQUFJQSxBQUlhLEFBUU4sU0FmRCxBQUlPLEtBVGIsQ0FxQkMsR0FuQ0EsQUFPQSxHQW9CQyxFQVpXLENBS3ZCLEFBZ0JhLEdBbkNGLEFBT0MsR0FnQlosQ0FJZ0IsSUFTSCxDQW5DZSxDQU9BLE9BTzVCLEVBYVUsQ0FTVixPQVJXLFFBM0JPLENBT0EsQUFxQk4sVUFDWixLQTVCQSxDQU9BIiwiZmlsZSI6Ii9ob21lL2pvZS9wdWJsaWNfaHRtbC9jcmVhdGl2ZXByb2plY3QtN2pvZS1qb24vcGFnZXMvZnJpZW5kUHJvZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL0xheW91dCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgYWJzb2x1dGVVcmwgZnJvbSBcIm5leHQtYWJzb2x1dGUtdXJsXCI7XHJcbmltcG9ydCB1cmwgZnJvbSBcInVybFwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuLi9jb21wcy9wcm9maWxlJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wcy9oZWFkZXInO1xyXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi9jb21wcy9zaWRlQmFyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wcy9mb290ZXInO1xyXG5cclxuLy8gbGV0IGF3c2luc3RhbmNlID0gJ2h0dHA6Ly9lYzItMTgtMTkxLTExLTQ5LnVzLWVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb20nOyAvL0pvblxyXG5sZXQgYXdzaW5zdGFuY2UgPSAnaHR0cDovL2VjMi0xOC0yMzQtMTA5LTIzOC5jb21wdXRlLTEuYW1hem9uYXdzLmNvbSc7IC8vSm9lXHJcblxyXG5jb25zdCBob21lU3R5bGUgPXtcclxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gIGJhY2tncm91bmQ6IFwidXJsKCcvMTIucG5nJykgbm8tcmVwZWF0IGNlbnRlciBmaXhlZFwiLFxyXG4gIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgbGVmdDogXCIwXCIsXHJcbiAgdG9wOiBcIjBcIixcclxuICByaWdodDogXCIwXCIsXHJcbiAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICB3aWR0aDogXCIxMDAlXCJcclxufVxyXG5cclxuY29uc3QgRnJpZW5kUHJvZmlsZSA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXYgc3R5bGU9e2hvbWVTdHlsZX0+XHJcblx0PEhlYWRlciBjbGFzc05hbWU9XCJob21lSGVhZGVyXCIvPlxyXG4gIDx1bCBjbGFzc05hbWUgPVwibWFpblByb2ZpbGVCb3hcIj5cclxuICA8aW1nIGNsYXNzTmFtZT1cInByb2ZpbGVJbWFnZVwiIHNyYz17cHJvcHMuZGF0YS5pbWFnZX0gYWx0PVwicHJvZmlsZWltYWdlXCIvPlxyXG4gIDxpbWcgY2xhc3NOYW1lPVwiYXJ0aXN0SW1hZ2VcIiBzcmM9e3Byb3BzLmRhdGEudG9wQXJ0aXN0VXJsfSBhbHQ9XCJwcm9maWxlaW1hZ2VcIi8+XHJcbiAgPGxpIGNsYXNzTmFtZT1cImhvbWVQcm9maWxlXCIgPjxQcm9maWxlIHsuLi5wcm9wc30gLz48L2xpPlxyXG4gIDxsaSBjbGFzc05hbWUgPSBcInNpZGVCYXJQcm9maWxlXCIgPjxTaWRlQmFyIHsuLi5wcm9wc30+PC9TaWRlQmFyPjwvbGk+XHJcbiAgPC91bD5cclxuICA8Rm9vdGVyIGNsYXNzTmFtZT1cImhvbWVGb290ZXJcIi8+XHJcbiAgPHN0eWxlIGpzeD57YFxyXG4gIC5wcm9maWxlSW1hZ2V7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoIDc1dncgLzIgKTtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgfVxyXG4gIC5hcnRpc3RJbWFnZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTBweDtcclxuICAgIHJpZ2h0OiAyNSU7XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoIDc1dncgLzIgKTtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgfVxyXG4gIC5tYWluUHJvZmlsZUJveHtcclxuICAgIG1heC13aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG4gIC5ob21lSGVhZGVye1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICB9XHJcbiAgLmhvbWVQcm9maWxle1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIC5zaWRlQmFyUHJvZmlsZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgLmhvbWVmb290ZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHdpZHRoOjEwMHZ3O1xyXG4gIH1cclxuICBgfVxyXG4gIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcbmxldCBjb3VudCA9IDA7XHJcbmxldCBhY2Nlc3NUb2tlbjtcclxuRnJpZW5kUHJvZmlsZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbihyZXEpe1xyXG4gIGxldCBmcmllbmRVc2VybmFtZSA9IHJlcS5xdWVyeS51c2VyO1xyXG4gIGNvbnNvbGUubG9nKGZyaWVuZFVzZXJuYW1lKTtcclxuICBsZXQgaW1hZ2U7XHJcbiAgbGV0IHRvcFRyYWNrcztcclxuICBsZXQgdG9wQXJ0aXN0O1xyXG4gIGxldCB0b3BBcnRpc3RJbWFnZTtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhd3NpbnN0YW5jZSsnOjM0NTYvZ2V0RnJpZW5kRGF0YT9mcmllbmRVc2VybmFtZT0nK2ZyaWVuZFVzZXJuYW1lKTtcclxuICBjb25zdCBkYXRhQWxsID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zdCByZXN1bHQyID0gYXdhaXQgZmV0Y2goYXdzaW5zdGFuY2UrJzozNDU2L2dldE90aGVyVXNlcnMnKTtcclxuICBjb25zdCBhbGxVc2VycyA9IGF3YWl0IHJlc3VsdDIuanNvbigpO1xyXG4gIGNvbnN0IHJhdGluZ3NEYXRhID0gYXdhaXQgZmV0Y2goYXdzaW5zdGFuY2UrJzozNDU2L2dldFJhdGluZ3M/dG9rZW49JythY2Nlc3NUb2tlbisnJnVzZXJuYW1lPScrZnJpZW5kVXNlcm5hbWUpO1xyXG4gIGNvbnN0IHJhdGluZ3MgPSBhd2FpdCByYXRpbmdzRGF0YS5qc29uKCk7XHJcbiAgbGV0IHN1bT0wO1xyXG4vLyAgIGNvbnNvbGUubG9nKGZyaWVuZERhdGFbMF0uaW1hZ2UpO1xyXG5sZXQgcGxheWxpc3RPYmplY3Q9W107XHJcbiAgSlNPTi5wYXJzZShkYXRhQWxsWzBdLnBsYXlsaXN0cykuZm9yRWFjaCgocGxheWxpc3QsaW5kZXgpPT57XHJcbiAgICBzdW0gPSBzdW0gK3JhdGluZ3NbaW5kZXhdLnJhdGluZztcclxuICAgIHBsYXlsaXN0T2JqZWN0LnB1c2goe3BsYXlsaXN0OiBwbGF5bGlzdCwgcmF0aW5nOiByYXRpbmdzW2luZGV4XS5yYXRpbmd9KTtcclxuICB9KTtcclxuLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShkYXRhQWxsWzBdLnBsYXlsaXN0cykpO3NcclxuXHJcblxyXG4gIHJldHVybntkYXRhOiB7XHJcbiAgICB1c2VyOiBmcmllbmRVc2VybmFtZSxcclxuICAgIGltYWdlOiBkYXRhQWxsWzBdLmltYWdlLFxyXG4gICAgdG9wQXJ0aXN0VXJsOiBkYXRhQWxsWzBdLnRvcEFydGlzdFVybCxcclxuICAgIHRvcFRyYWNrczogSlNPTi5wYXJzZShkYXRhQWxsWzBdLnRvcFRyYWNrcykuaXRlbXMsXHJcbiAgICBhbGxVc2VyczogYWxsVXNlcnMsXHJcbiAgICBhbGxQbGF5bGlzdHM6IHBsYXlsaXN0T2JqZWN0LFxyXG4gICAgdG90YWxMaWtlczogc3VtXHJcbiAgfX07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRnJpZW5kUHJvZmlsZTsiXX0= */\n/*@ sourceURL=/home/joe/public_html/creativeproject-7joe-jon/pages/friendProfile.js */"));

let count = 0;
let accessToken;

FriendProfile.getInitialProps = async function (req) {
  let friendUsername = req.query.user;
  console.log(friendUsername);
  let image;
  let topTracks;
  let topArtist;
  let topArtistImage;
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(awsinstance + ':3456/getFriendData?friendUsername=' + friendUsername);
  const dataAll = await res.json();
  const result2 = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(awsinstance + ':3456/getOtherUsers');
  const allUsers = await result2.json();
  const ratingsData = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(awsinstance + ':3456/getRatings?token=' + accessToken + '&username=' + friendUsername);
  const ratings = await ratingsData.json();
  let sum = 0; //   console.log(friendData[0].image);

  let playlistObject = [];
  JSON.parse(dataAll[0].playlists).forEach((playlist, index) => {
    sum = sum + ratings[index].rating;
    playlistObject.push({
      playlist: playlist,
      rating: ratings[index].rating
    });
  }); // console.log(JSON.parse(dataAll[0].playlists));s

  return {
    data: {
      user: friendUsername,
      image: dataAll[0].image,
      topArtistUrl: dataAll[0].topArtistUrl,
      topTracks: JSON.parse(dataAll[0].topTracks).items,
      allUsers: allUsers,
      allPlaylists: playlistObject,
      totalLikes: sum
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (FriendProfile);

/***/ }),

/***/ 6:
/*!**************************************!*\
  !*** multi ./pages/friendProfile.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/joe/public_html/creativeproject-7joe-jon/pages/friendProfile.js */"./pages/friendProfile.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-absolute-url":
/*!************************************!*\
  !*** external "next-absolute-url" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-absolute-url");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=friendProfile.js.map