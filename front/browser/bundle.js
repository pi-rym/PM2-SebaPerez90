/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const transformDataToElement = __webpack_require__(/*! ./renderCards */ \"./scripts/renderCards.js\");\r\nconst tempData = __webpack_require__(/*! ./tempData */ \"./scripts/tempData.js\");\r\n\r\n// console.log(tempData);\r\n\r\n\r\n$.get(\"https://students-api.2.us-1.fl0.io/movies\", (data) => {\r\n  transformDataToElement(data);\r\n});\r\n\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderCards.js":
/*!********************************!*\
  !*** ./scripts/renderCards.js ***!
  \********************************/
/***/ ((module) => {

eval("const main_cont = document.querySelector(\".main-section-container\");\r\n\r\nfunction transformDataToElement(dataFetched) {\r\n  dataFetched.map((item) => {\r\n    const card_info_container = document.createElement(\"section\");\r\n\r\n    card_info_container.classList.add(\"movie-card\");\r\n\r\n    card_info_container.innerHTML = `\r\n      <div class=image-container>\r\n          <img class='poster' src=${item.poster} alt=${item.title} />\r\n      </div>\r\n      <div class=\"data-container\">\r\n          <h1>${item.title}</h1>\r\n          <span class='rate'><strong>⭐</strong> ${item.rate}</span>\r\n          <div class='more-details'>\r\n              <span>director: ${item.director}</span>\r\n              <span>año: ${item.year}</span>\r\n          </div>\r\n          <span class='genre'>${item.genre[0]} | ${item.genre[1]}</span>\r\n      </div>\r\n      `;\r\n\r\n    main_cont.appendChild(card_info_container);\r\n  });\r\n}\r\n\r\nmodule.exports = transformDataToElement;\r\n\n\n//# sourceURL=webpack://front/./scripts/renderCards.js?");

/***/ }),

/***/ "./scripts/tempData.js":
/*!*****************************!*\
  !*** ./scripts/tempData.js ***!
  \*****************************/
/***/ ((module) => {

eval("const tempData = [\r\n  {\r\n    title: \"Guardians of the Galaxy Vol. 2\",\r\n    year: 2017,\r\n    director: \"James Gunn\",\r\n    duration: \"2h 16min\",\r\n    genre: [\"Action\", \"Adventure\", \"Comedy\"],\r\n    rate: 7.7,\r\n    poster:\r\n      \"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg\",\r\n  },\r\n  {\r\n    title: \"Star Wars: Episode IV - A New Hope\",\r\n    year: 1977,\r\n    director: \"George Lucas\",\r\n    duration: \"2h 1min\",\r\n    genre: [\"Action\", \"Adventure\", \"Fantasy\", \"Sci-Fi\"],\r\n    rate: 8.7,\r\n    poster:\r\n      \"https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg\",\r\n  },\r\n  {\r\n    title: \"The Lord of the Rings: The Fellowship of the Ring\",\r\n    year: 2001,\r\n    director: \"Peter Jackson\",\r\n    duration: \"2h 58min\",\r\n    genre: [\"Action\", \"Adventure\", \"Drama\", \"Fantasy\"],\r\n    rate: 8.8,\r\n    poster:\r\n      \"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg\",\r\n  },\r\n];\r\n\r\nmodule.exports = tempData;\r\n\n\n//# sourceURL=webpack://front/./scripts/tempData.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;