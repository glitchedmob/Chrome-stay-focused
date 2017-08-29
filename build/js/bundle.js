/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(5);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = __webpack_require__(2);
const view_1 = __webpack_require__(3);
const controller_1 = __webpack_require__(4);
const store = new store_1.default();
const view = new view_1.default();
const controller = new controller_1.default(store, view);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Store {
    constructor() {
        this.sites = [
            "youtube",
            "facebook",
            "twitter",
            "reddit",
            "quora",
            "news.ycombinator",
            "instagram",
            "linkedin",
            "netflix",
            "plex",
            "learnandgrow",
            "twitch"
        ];
    }
}
exports.default = Store;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class View {
    constructor() {
        this.appTemplate = `
	<div class="app-container">
		<div class="app">
			<h1>Blocked!</h1>
			<p>This website has been blocked.<br>Perhaps you should try doing something productive.</p>
		</div>
	</div>
	`;
        this.rootEl = document.querySelector('html');
    }
    /**
     * Completly empties the DOM and sets the background to white
     */
    emptyDOM() {
        this.rootEl.innerHTML = '';
        this.rootEl.setAttribute('style', 'background-color: #FFF');
    }
    /**
     * Injects our app into the DOM
     */
    addApp() {
        this.emptyDOM();
        const title = document.createElement('title');
        title.textContent = 'Blocked!';
        document.head.appendChild(title);
        document.body.innerHTML = this.appTemplate;
    }
}
exports.default = View;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    constructor(store, view) {
        this.store = store;
        this.view = view;
        this.blockSites();
    }
    blockSites() {
        for (let site of this.store.sites) {
            if (window.location.href.includes(site)) {
                this.view.addApp();
                return;
            }
        }
    }
}
exports.default = Controller;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../css/app.css";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map