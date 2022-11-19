/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("//  Burger Toggle menu\r\n\r\nconst burger = document.querySelector('.burger');\r\nconst navBarNav = document.querySelector('.nav_list');\r\nconst navLink = document.querySelectorAll('.nav_link');\r\nconst body = document.querySelector('body');\r\n\r\n\r\nburger.addEventListener('click', ()=> {\r\n  \r\n    burger.classList.toggle('active');\r\n    navBarNav.classList.toggle('active');\r\n    body.classList.toggle('locked')\r\n   \r\n   \r\n})\r\nnavLink.forEach((item)=> {\r\n    item.addEventListener('click', ()=> {\r\n      console.log(item.innerHTML);\r\n        burger.classList.remove('active');\r\n        navBarNav.classList.remove('active');\r\n        body.classList.remove('locked')\r\n       \r\n    })\r\n\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function() {

eval("\r\n    let modal = document.querySelector('.modal')\r\n    let send = document.querySelector('#send-mail')\r\n    let close = document.querySelector('.modal__close')\r\n\r\n    send.addEventListener('click', function() {\r\n        modal.classList.toggle('hide');\r\n        document.body.classList.toggle('no-scroll')\r\n    })\r\n\r\n    \r\n    close.addEventListener('click', function() {\r\n        modal.classList.toggle('hide');\r\n        document.body.classList.remove('no-scroll')\r\n    })\r\n    \r\n//share-modal\r\n    let shareModal = document.querySelector('.modal--share')\r\n    let share = document.querySelector('#share')\r\n    let closeShare = document.querySelector('.modal__close--share')\r\n\r\n    share.addEventListener('click', function() {\r\n        shareModal.classList.toggle('hide');\r\n        document.body.classList.toggle('no-scroll')\r\n    })\r\n    \r\n    closeShare.addEventListener('click', function() {\r\n        shareModal.classList.toggle('hide');\r\n        document.body.classList.remove('no-scroll')\r\n    })\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/nav.js":
/*!******************************!*\
  !*** ./src/assets/js/nav.js ***!
  \******************************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/nav.js"]();
/******/ 	
/******/ })()
;