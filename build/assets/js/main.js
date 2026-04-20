/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/addToWishlist.js":
/*!****************************************!*\
  !*** ./js/components/addToWishlist.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\nconst addToWishlist = () => {\n  const wishListButtons = document.querySelectorAll(\".btn-wishlist\");\n  if (wishListButtons.length > 0) {\n    [...wishListButtons].forEach(button => {\n      button.addEventListener(\"click\", () => {\n        button.classList.toggle(\"btn-wishlist--added\");\n      });\n    });\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (addToWishlist);\n\n//# sourceURL=webpack://main-gulp-template/./js/components/addToWishlist.js?\n}");

/***/ }),

/***/ "./js/components/toggleNav.js":
/*!************************************!*\
  !*** ./js/components/toggleNav.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\nconst toggleNav = () => {\n  const menuToggler = document.querySelector(\".menu-toggler\");\n  const navMobile = document.querySelector(\".nav-mobile\");\n  if (menuToggler && navMobile) {\n    menuToggler.addEventListener(\"click\", () => {\n      menuToggler.classList.toggle(\"menu-toggler--active\");\n      navMobile.classList.toggle(\"nav-mobile--active\");\n    });\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (toggleNav);\n\n//# sourceURL=webpack://main-gulp-template/./js/components/toggleNav.js?\n}");

/***/ }),

/***/ "./js/components/toggleNavLinks.js":
/*!*****************************************!*\
  !*** ./js/components/toggleNavLinks.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\nconst toggleNavLinks = () => {\n  const navWrappers = document.querySelectorAll(\".nav-mobile__wrapper.nav-mobile__wrapper--hasdropdown\");\n  if (navWrappers.length > 0) {\n    [...navWrappers].forEach(wrapper => {\n      const link = wrapper.querySelector(\".nav-mobile__link\");\n      if (link) {\n        link.addEventListener(\"click\", e => {\n          e.preventDefault(); // just in case\n\n          wrapper.classList.toggle(\"nav-mobile__wrapper--active\");\n        });\n      }\n    });\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (toggleNavLinks);\n\n//# sourceURL=webpack://main-gulp-template/./js/components/toggleNavLinks.js?\n}");

/***/ }),

/***/ "./js/config/config.js":
/*!*****************************!*\
  !*** ./js/config/config.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n//\n// ------------------------- Main configuration object\n//\nconst configCommon = {\n  name: \"Vasyl\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (configCommon);\n\n//# sourceURL=webpack://main-gulp-template/./js/config/config.js?\n}");

/***/ }),

/***/ "./js/functions/documentReady.js":
/*!***************************************!*\
  !*** ./js/functions/documentReady.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n//\n// ------------------------- Document ready function\n//\nconst documentReady = fn => {\n  if (document.readyState === \"loading\") {\n    document.addEventListener(\"DOMContentLoaded\", fn);\n  } else {\n    fn();\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (documentReady);\n\n//# sourceURL=webpack://main-gulp-template/./js/functions/documentReady.js?\n}");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config */ \"./js/config/config.js\");\n/* harmony import */ var _functions_documentReady__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/documentReady */ \"./js/functions/documentReady.js\");\n/* harmony import */ var _components_addToWishlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/addToWishlist */ \"./js/components/addToWishlist.js\");\n/* harmony import */ var _components_toggleNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/toggleNav */ \"./js/components/toggleNav.js\");\n/* harmony import */ var _components_toggleNavLinks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/toggleNavLinks */ \"./js/components/toggleNavLinks.js\");\n//\n// ------------------------- Config\n//\n\n\n//\n// ------------------------- Auxiliary functions\n//\n\n\n//\n// ------------------------- Components\n//\n\n\n\n(0,_components_addToWishlist__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_components_toggleNav__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_components_toggleNavLinks__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://main-gulp-template/./js/main.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;