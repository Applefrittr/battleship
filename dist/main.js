/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! MachineStd.otf */ "./src/MachineStd.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n@font-face {\n    font-family: Machine;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@keyframes shake {\n    0%      {transform: translateX(5px);}\n    33%     {transform: translateX(-10px);}\n    66%     {transform: translateX(10px);}\n    100%    {transform: translateX(-5px);}\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    position: relative;\n}\n\n#battleship {\n    width: 100%;\n    height: 150px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 9rem;\n    font-family: Machine, san-serif;\n    background: linear-gradient(rgba(225,225,225), rgb(78, 78, 78), rgba(225,225,225));\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    position: absolute;\n    top: 45%;\n    transition: top ease-in-out 1s;\n}\n\n#mp3 {\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 1rem;\n}\n\n#new-game {\n    position: absolute;\n    top: 65%;\n    border: 1px limegreen solid;\n    background-color: black;\n    color: limegreen;\n    padding: 8px 16px;\n}\n\n#new-game:hover {\n    background-color: rgba(0, 255, 10, .25)\n}\n\n#new-game:active {\n    transform: scale(95%);\n}\n\n.screen-display {\n    width: 100%;\n    background-color: black;\n    margin: 160px 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    transition: opacity ease-in 1s;\n}\n\n.msg-banner {\n    margin-top: 2rem;\n    margin-bottom: -3rem;\n    font-size: 2rem;\n    width: 55%;\n    padding: 1rem;\n    background-color: black;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.msg-output {\n    color: limegreen;\n}\n\n.placeholder {\n    height: 2rem;\n    width: 16px;\n    background-color: limegreen;\n}\n\n.black {\n    background-color: black;\n}\n\n.grid-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.grid-square {\n    width: 40px;\n    height: 40px;\n    background-color: black;\n    border:solid limegreen 1px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.grid-square:hover {\n    background-color: rgba(0, 255, 10, .25)\n}\n\n.peg {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    border: solid 1px black;\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: repeat(10, 40px);\n    grid-template-rows: repeat(10, 1fr);\n    padding: 5rem;\n    position: relative;\n}\n\n.grid-name {\n    position: absolute;\n    color: limegreen;\n    font-size: 2rem;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%)\n}\n\n.ships1-display {\n    height: 400px;\n    width: 200px;\n    position: absolute;\n    left: -150px;\n    top:80px;\n    display: flex;\n    flex-direction: column;\n}\n\n.ships2-display {\n    height: 400px;\n    width: 200px;\n    position: absolute;\n    right: -130px;\n    top:80px;\n    display: flex;\n    flex-direction: column;\n}\n\n.ship-icons {\n    width: 225px;\n    height: 75px;\n    transition: ease-out opacity 2s;\n}\n\n.shake {\n    animation: shake .50s;\n}\n\n.sink {\n    opacity: 0;\n}\n\n.modal {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .45);\n    display: flex;\n    align-items: center;\n}\n\n.modal-container {\n    background-color: white;\n    width: 100%;\n    height: 150px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter {\n    color: limegreen;\n    position: absolute;\n    bottom: 16px;\n    margin: auto;\n    font-size: 1.25rem;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\na>img {\n    width: 24px;\n    height: auto;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,oBAAoB;IACpB,4CAAwB;AAC5B;;AAEA;IACI,SAAS,0BAA0B,CAAC;IACpC,SAAS,4BAA4B,CAAC;IACtC,SAAS,2BAA2B,CAAC;IACrC,SAAS,2BAA2B,CAAC;AACzC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,+BAA+B;IAC/B,kFAAkF;IAClF,qBAAqB;IACrB,oCAAoC;IACpC,kBAAkB;IAClB,QAAQ;IACR,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,2BAA2B;IAC3B,uBAAuB;IACvB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI;AACJ;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,uBAAuB;IACvB,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,eAAe;IACf,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,0BAA0B;IAC1B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,mCAAmC;IACnC,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,SAAS;IACT,SAAS;IACT;AACJ;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,QAAQ;IACR,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,QAAQ;IACR,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n@font-face {\n    font-family: Machine;\n    src: url(MachineStd.otf);\n}\n\n@keyframes shake {\n    0%      {transform: translateX(5px);}\n    33%     {transform: translateX(-10px);}\n    66%     {transform: translateX(10px);}\n    100%    {transform: translateX(-5px);}\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    position: relative;\n}\n\n#battleship {\n    width: 100%;\n    height: 150px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 9rem;\n    font-family: Machine, san-serif;\n    background: linear-gradient(rgba(225,225,225), rgb(78, 78, 78), rgba(225,225,225));\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    position: absolute;\n    top: 45%;\n    transition: top ease-in-out 1s;\n}\n\n#mp3 {\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 1rem;\n}\n\n#new-game {\n    position: absolute;\n    top: 65%;\n    border: 1px limegreen solid;\n    background-color: black;\n    color: limegreen;\n    padding: 8px 16px;\n}\n\n#new-game:hover {\n    background-color: rgba(0, 255, 10, .25)\n}\n\n#new-game:active {\n    transform: scale(95%);\n}\n\n.screen-display {\n    width: 100%;\n    background-color: black;\n    margin: 160px 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    transition: opacity ease-in 1s;\n}\n\n.msg-banner {\n    margin-top: 2rem;\n    margin-bottom: -3rem;\n    font-size: 2rem;\n    width: 55%;\n    padding: 1rem;\n    background-color: black;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.msg-output {\n    color: limegreen;\n}\n\n.placeholder {\n    height: 2rem;\n    width: 16px;\n    background-color: limegreen;\n}\n\n.black {\n    background-color: black;\n}\n\n.grid-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.grid-square {\n    width: 40px;\n    height: 40px;\n    background-color: black;\n    border:solid limegreen 1px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.grid-square:hover {\n    background-color: rgba(0, 255, 10, .25)\n}\n\n.peg {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    border: solid 1px black;\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: repeat(10, 40px);\n    grid-template-rows: repeat(10, 1fr);\n    padding: 5rem;\n    position: relative;\n}\n\n.grid-name {\n    position: absolute;\n    color: limegreen;\n    font-size: 2rem;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%)\n}\n\n.ships1-display {\n    height: 400px;\n    width: 200px;\n    position: absolute;\n    left: -150px;\n    top:80px;\n    display: flex;\n    flex-direction: column;\n}\n\n.ships2-display {\n    height: 400px;\n    width: 200px;\n    position: absolute;\n    right: -130px;\n    top:80px;\n    display: flex;\n    flex-direction: column;\n}\n\n.ship-icons {\n    width: 225px;\n    height: 75px;\n    transition: ease-out opacity 2s;\n}\n\n.shake {\n    animation: shake .50s;\n}\n\n.sink {\n    opacity: 0;\n}\n\n.modal {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .45);\n    display: flex;\n    align-items: center;\n}\n\n.modal-container {\n    background-color: white;\n    width: 100%;\n    height: 150px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter {\n    color: limegreen;\n    position: absolute;\n    bottom: 16px;\n    margin: auto;\n    font-size: 1.25rem;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\na>img {\n    width: 24px;\n    height: auto;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMainDisplay": () => (/* binding */ createMainDisplay)
/* harmony export */ });
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _assets_battleship1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/battleship1.png */ "./src/assets/battleship1.png");
/* harmony import */ var _assets_carrier_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/carrier.png */ "./src/assets/carrier.png");
/* harmony import */ var _assets_destroyer_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/destroyer.png */ "./src/assets/destroyer.png");
/* harmony import */ var _assets_submarine_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/submarine.png */ "./src/assets/submarine.png");
/* harmony import */ var _assets_patrolboat_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/patrolboat.png */ "./src/assets/patrolboat.png");







const body = document.querySelector("body");

// CreateMainDisplay is called when a new game is started.  Creates DOM elements that represent the player boards (grids) and assigns listener events to each of the grids squares, depending on the player.
const createMainDisplay = (player1, player2, board1, board2) => {
  let timeout = [];

  const display = document.createElement("div");
  body.appendChild(display);
  display.classList.add("screen-display");
  setTimeout(() => {
    display.style.opacity = "1";
  }, 500);

  const msgbanner = document.createElement("div");
  //typeWriter("Commander, select target and fire!", msgoutput);
  msgbanner.classList.add("msg-banner");
  display.appendChild(msgbanner);

  const msgoutput = document.createElement("p");
  msgoutput.textContent =
    "Commander, enemy fleet in range. Select coordinates, fire!";
  msgoutput.classList.add("msg-output");
  msgbanner.appendChild(msgoutput);

  const placeholder = document.createElement("div");
  placeholder.classList.add("placeholder");
  msgbanner.appendChild(placeholder);
  setInterval(() => {
    placeholder.classList.toggle("black");
  }, 500);

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  display.appendChild(gridContainer);

  // Grid 1 / player 1.  Grid created will highlight squares where the ships are located
  const DOMgrid1 = document.createElement("div");
  DOMgrid1.classList.add("grid");
  gridContainer.appendChild(DOMgrid1);

  for (let row = 0; row < board1.grid.length; row++) {
    for (let col = 0; col < board1.grid[row].length; col++) {
      let square = document.createElement("div");
      square.classList.add("grid-square");
      square.id = `${row}by${col}`; // IMPORTANT - ID is used to target squares that the AI attacked.  Square color will be updated depending on attack outcome
      DOMgrid1.appendChild(square);
      if (board1.grid[row][col].ship) {
        square.style.backgroundColor = "green";
      }
      square.addEventListener("click", () => {
        // This Event listener will be used once custom ship placement is implemented
      });
    }
  }

  const grid1name = document.createElement("div");
  grid1name.textContent = "Allied Fleet";
  grid1name.classList.add("grid-name");
  DOMgrid1.appendChild(grid1name);

  // Create ship icons for Allied fleet
  const ships1 = document.createElement("div");
  ships1.classList.add("ships1-display");
  DOMgrid1.appendChild(ships1);

  const battleship1 = document.createElement("img");
  battleship1.classList.add("ship-icons");
  battleship1.src = _assets_battleship1_png__WEBPACK_IMPORTED_MODULE_1__;
  battleship1.id = "Battleship1";

  const carrier1 = document.createElement("img");
  carrier1.classList.add("ship-icons");
  carrier1.src = _assets_carrier_png__WEBPACK_IMPORTED_MODULE_2__;
  carrier1.id = "Carrier1";

  const destroyer1 = document.createElement("img");
  destroyer1.classList.add("ship-icons");
  destroyer1.src = _assets_destroyer_png__WEBPACK_IMPORTED_MODULE_3__;
  destroyer1.id = "Destroyer1";

  const submarine1 = document.createElement("img");
  submarine1.classList.add("ship-icons");
  submarine1.src = _assets_submarine_png__WEBPACK_IMPORTED_MODULE_4__;
  submarine1.id = "Submarine1";

  const patrolboat1 = document.createElement("img");
  patrolboat1.classList.add("ship-icons");
  patrolboat1.src = _assets_patrolboat_png__WEBPACK_IMPORTED_MODULE_5__;
  patrolboat1.id = "Patrol Boat1";

  ships1.appendChild(carrier1);
  ships1.appendChild(battleship1);
  ships1.appendChild(destroyer1);
  ships1.appendChild(submarine1);
  ships1.appendChild(patrolboat1);

  // Grid 2 / Player 2 (AI player).  Grid created will have squares that contain listener events to recieve attacks from player 1.  Ships will NOT be revealed and squares will have color indicators to indicate hits or misses.
  const DOMgrid2 = document.createElement("div");
  DOMgrid2.classList.add("grid");
  gridContainer.appendChild(DOMgrid2);

  for (let row = 0; row < board2.grid.length; row++) {
    for (let col = 0; col < board2.grid[row].length; col++) {
      let square = document.createElement("div");
      square.classList.add("grid-square");
      DOMgrid2.appendChild(square);

      // This particular event listener fucntions as the game loop, once the player selects a target square to attack, the AI then attacks in turn (AIAttackTurn method called from game.js)
      square.addEventListener("click", () => {
        msgoutput.textContent = "";
        timeout.forEach((time) => clearTimeout(time)); // Clears the event queue of prior typeWriter outputs
        //console.log(timeout);

        let msg = player1.attack(player2, row, col);
        if (msg === "Target Miss...") {
          setTimeout(() => {
            addPeg(square, 1);
          }, 250);
          msgoutput.textContent = "";
          timeout = typeWriter(`Cannon Battery Fire - ${msg}`, msgoutput);
        } else if (
          msg === "Target already been fired on, select new target..."
        ) {
          msgoutput.textContent = "";
          timeout = typeWriter(msg, msgoutput);
          return;
        } else {
          addPeg(square, 2);
          shipSunk(msg, 2);
          msgoutput.textContent = "";
          timeout = typeWriter(`Cannon Battery Fire - ${msg}`, msgoutput);
          if (board2.allSunk()) {
            gameOver(1);
            return;
          }
        }

        setTimeout(() => {
          timeout.forEach((time) => clearTimeout(time));
          // AI attack turn.  Once the attack completes, player grid UI will update to represent the AI's attack target
          let attack = (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.AIAttackTurn)(player1, player2);
          // targets the square in the player's grid with the coordinate ID, then color is updated accordining to attack outcome
          let target = document.getElementById(`${attack.row}by${attack.col}`);
          if (player1.grid[attack.row][attack.col].ship) {
            addPeg(target, 2);
            shipSunk(attack.msg, 1);
            msgoutput.textContent = "";
            timeout = [
              ...timeout,
              typeWriter(`Enemy Incoming Fire - ${attack.msg}`, msgoutput),
            ];
            if (board1.allSunk()) {
              gameOver(2);
            }
          } else {
            msgoutput.textContent = "";
            timeout = [
              ...timeout,
              typeWriter(`Enemy Incoming Fire - ${attack.msg}`, msgoutput),
            ];
            addPeg(target, 1);
          }
        }, 2000);
      });
    }
  }
  const grid2name = document.createElement("div");
  grid2name.textContent = "Enemy Fleet";
  grid2name.classList.add("grid-name");
  DOMgrid2.appendChild(grid2name);

  // Create ship icons for Enemy fleet
  const ships2 = document.createElement("div");
  ships2.classList.add("ships2-display");
  DOMgrid2.appendChild(ships2);

  const battleship2 = document.createElement("img");
  battleship2.classList.add("ship-icons");
  battleship2.src = _assets_battleship1_png__WEBPACK_IMPORTED_MODULE_1__;
  battleship2.id = "Battleship2";

  const carrier2 = document.createElement("img");
  carrier2.classList.add("ship-icons");
  carrier2.src = _assets_carrier_png__WEBPACK_IMPORTED_MODULE_2__;
  carrier2.id = "Carrier2";

  const destroyer2 = document.createElement("img");
  destroyer2.classList.add("ship-icons");
  destroyer2.src = _assets_destroyer_png__WEBPACK_IMPORTED_MODULE_3__;
  destroyer2.id = "Destroyer2";

  const submarine2 = document.createElement("img");
  submarine2.classList.add("ship-icons");
  submarine2.src = _assets_submarine_png__WEBPACK_IMPORTED_MODULE_4__;
  submarine2.id = "Submarine2";

  const patrolboat2 = document.createElement("img");
  patrolboat2.classList.add("ship-icons");
  patrolboat2.src = _assets_patrolboat_png__WEBPACK_IMPORTED_MODULE_5__;
  patrolboat2.id = "Patrol Boat2";

  ships2.appendChild(carrier2);
  ships2.appendChild(battleship2);
  ships2.appendChild(destroyer2);
  ships2.appendChild(submarine2);
  ships2.appendChild(patrolboat2);
};

// Game Over function.  Creates a modal overlay displaying the game outcome and a button for a new game.  Input parameter is the player number, which is used to determine if player wins or loses
const gameOver = (player) => {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  body.appendChild(modal);

  const container = document.createElement("div");
  container.classList.add("modal-container");
  modal.appendChild(container);

  // Game outcome message
  const msg = document.createElement("p");
  container.appendChild(msg);
  if (player === 1) {
    msg.textContent = "Enemy Fleet Destroyed, Mission Accomplished!";
  } else {
    msg.textContent = "Fleet Destroyed, You Lose!";
  }

  // New Game button
  const nextMission = document.createElement("button");
  nextMission.textContent = "Next Mission";
  container.appendChild(nextMission);

  nextMission.addEventListener("click", () => {
    body.removeChild(body.lastChild); // remove modal
    body.removeChild(body.lastChild); // remove current game display
    (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.newGame)(); // create a new game
  });
};

// Typewriter effect for UI displayed messages to the player.  Returns an array of timeout IDs to be targeted in the event queue
const typeWriter = (text, element, index = 0, timeoutArray = []) => {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    timeoutArray.push(
      setTimeout(() => {
        typeWriter(text, element, index, timeoutArray);
      }, 20)
    );
  }
  return timeoutArray;
};

// Adds a new element to the grid squares when it's attacked, representative of the pegs in battleship boardgame
// msg === 1 indicates a white peg/miss, msg === 2 indicates a red peg/hit
const addPeg = (gridSquare, msg) => {
  const peg = document.createElement("div");
  peg.classList.add("peg");
  gridSquare.appendChild(peg);
  if (msg === 1) peg.style.backgroundColor = "white";
  else peg.style.backgroundColor = "red";
};

// Ship icon sunk function.  Will change the color of the ship icons for either player to indicate ship status.  Params will be message output from player attack function and the player that is targetted.
// player == 1 is human, player == 2 is AI
const shipSunk = (msg, player) => {
  let ships = [
    "Carrier",
    "Destroyer",
    "Battleship",
    "Submarine",
    "Patrol Boat",
  ];
  for (let i = 0; i < ships.length; i++) {
    if (msg.includes(ships[i])) {
      let targetShip = ships[i];
      let targetIcon = document.getElementById(targetShip + player); // Type coercion to add the ship name and player number to get ID of specific ship icon
      targetIcon.classList.add("shake");
      setTimeout(() => {
        targetIcon.classList.add("sink")
      }, 750)
      break;
    }
  }
};


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AIAttackTurn": () => (/* binding */ AIAttackTurn),
/* harmony export */   "createFleet": () => (/* binding */ createFleet),
/* harmony export */   "newGame": () => (/* binding */ newGame)
/* harmony export */ });
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects.js */ "./src/objects.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");



// createFleet will create a fleet of ships and place them randomly on the passed gameboard parameter.  The logic ensures that the ships do not overlap and also randomizes whether the ships are placed
// horizontally or vertically
const createFleet = (board) => {
  // fleet array.  Standard Battleship game has 5 ships with the following boat.hps values: 2, 3, 3, 4, 5.
  const fleet = [
    { hps: 2, name: "Patrol Boat" },
    { hps: 3, name: "Submarine" },
    { hps: 3, name: "Destroyer" },
    { hps: 4, name: "Battleship" },
    { hps: 5, name: "Carrier" },
  ]; 
  fleet.forEach((boat) => {
    let dir = Math.random() * 100; // Random number generator to determine whether the ship is placed vertically or horizontally
    if (dir >= 50) {
      // <--- horizontal
      let row = Math.round(Math.random() * 9);
      let col = Math.round(Math.random() * (10 - boat.hps));
      // Place ship horizontally, switch statement will detect if a new ship placement overlaps an already placed ship
      switch (boat.hps) {
        case 2:
          while (board.grid[row][col].ship || board.grid[row][col + 1].ship) {
            row = Math.round(Math.random() * 9);
            col = Math.round(Math.random() * (10 - boat.hps));
          }
          break;
        case 3:
          while (
            board.grid[row][col].ship ||
            board.grid[row][col + 1].ship ||
            board.grid[row][col + 2].ship
          ) {
            row = Math.round(Math.random() * 9);
            col = Math.round(Math.random() * (10 - boat.hps));
          }
          break;
        case 4:
          while (
            board.grid[row][col].ship ||
            board.grid[row][col + 1].ship ||
            board.grid[row][col + 2].ship ||
            board.grid[row][col + 3].ship
          ) {
            row = Math.round(Math.random() * 9);
            col = Math.round(Math.random() * (10 - boat.hps));
          }
          break;
        case 5:
          while (
            board.grid[row][col].ship ||
            board.grid[row][col + 1].ship ||
            board.grid[row][col + 2].ship ||
            board.grid[row][col + 3].ship ||
            board.grid[row][col + 4].ship
          ) {
            row = Math.round(Math.random() * 9);
            col = Math.round(Math.random() * (10 - boat.hps));
          }
          break;
      }
      board.newShip(row, col, boat.hps, boat.name, "x");
    } else {
      // <-- vertical
      let row = Math.round(Math.random() * (10 - boat.hps));
      let col = Math.round(Math.random() * 9);
      // Place ship vertically, switch statement will detect if a new ship placement overlaps an already placed ship
      switch (boat.hps) {
        case 2:
          while (board.grid[row][col].ship || board.grid[row + 1][col].ship) {
            row = Math.round(Math.random() * (10 - boat.hps));
            col = Math.round(Math.random() * 9);
          }
          break;
        case 3:
          while (
            board.grid[row][col].ship ||
            board.grid[row + 1][col].ship ||
            board.grid[row + 2][col].ship
          ) {
            row = Math.round(Math.random() * (10 - boat.hps));
            col = Math.round(Math.random() * 9);
          }
          break;
        case 4:
          while (
            board.grid[row][col].ship ||
            board.grid[row + 1][col].ship ||
            board.grid[row + 2][col].ship ||
            board.grid[row + 3][col].ship
          ) {
            row = Math.round(Math.random() * (10 - boat.hps));
            col = Math.round(Math.random() * 9);
          }
          break;
        case 5:
          while (
            board.grid[row][col].ship ||
            board.grid[row + 1][col].ship ||
            board.grid[row + 2][col].ship ||
            board.grid[row + 3][col].ship ||
            board.grid[row + 4][col].ship
          ) {
            row = Math.round(Math.random() * (10 - boat.hps));
            col = Math.round(Math.random() * 9);
          }
          break;
      }
      board.newShip(row, col, boat.hps, boat.name, "y");
    }
  });
};

// New Game Method.  Initalizes all game UI and logic by calling methods from DOM.js and main game objects from the factories in Object.js.
const newGame = () => {
  const board1 = _objects_js__WEBPACK_IMPORTED_MODULE_0__.gameboard(10);
  const board2 = _objects_js__WEBPACK_IMPORTED_MODULE_0__.gameboard(10);

  const player1 = _objects_js__WEBPACK_IMPORTED_MODULE_0__.player(board1);
  const player2 = _objects_js__WEBPACK_IMPORTED_MODULE_0__.player(board2);

  createFleet(board1);
  createFleet(board2);

  _DOM_js__WEBPACK_IMPORTED_MODULE_1__.createMainDisplay(player1, player2, board1, board2);
};

// AI attack function.  Calls attack method from the player object, returns the row and col values targeted in an array
const AIAttackTurn = (player, ai) => {
  let row = Math.round(Math.random() * 9);
  let col = Math.round(Math.random() * 9);

  while (player.grid[row][col].attacked) {
    row = Math.round(Math.random() * 9);
    col = Math.round(Math.random() * 9);
  }
  let msg = ai.attack(player, row, col);
  return {
    row: row,
    col: col,
    msg: msg,
  };
};


/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboard": () => (/* binding */ gameboard),
/* harmony export */   "player": () => (/* binding */ player),
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });

// ship factory function, will be used to create ship objects to be used on the gameboard.  2 public methods to be used by gameboard
const ship = (input, name) => {
    let hps = input,
        dmg = 0

    return {
        hps,
        name,
        hit() {
            dmg++
            return this
        },
        isSunk() {
            return hps <= dmg ? true : false
        }

    }
}

// gameboard factory function, will create a square grid of objects based on parameter dim.  Each square object of the grid will initailly have no properties but properties will be added depending
// on gamestate.  Example, if a ship is placed in the square, "ship" will be added.  Or if a square is hit, "hit" property will be added
const gameboard = (dim) => {
    
    // build gameboard grid
    const grid = []
    for (let a = 0; a < dim; a++) {
        let row = []
        grid.push(row)
        for (let b = 0; b < dim; b++) {
            row.push({})
        }
    }

    // variables to record number of hits and misses as well as keep track of total ship hitpoints on gameboard
    let misses = 0,
        hits = 0,
        totalhps = 0

    return {
        grid,
        misses,
        hits,
        totalhps,
        // places a new ship() object on the grid using the provided row and col parameters as the start postion.  hps determines the type of ship placed and defaults
        // the palcement along the x-axis
        newShip(row, col, hps, name, axis = 'x') {
            const ship1 = ship(hps, name)
            this.totalhps += hps

            if (axis === 'x') {
                for (let a = 0; a < ship1.hps; a++) {
                    let square = this.grid[row][col + a]
                    square.ship = ship1
                }
            } else {
                for (let a = 0; a < ship1.hps; a++) {
                    let square = this.grid[row + a][col]
                    square.ship = ship1
                }
            }
            return ship1
        },
        // attack method, called when a square on the grid is chosen for an attack.  If no ship occupies the space, returns a "missed" string while also alos assigning an attacked
        // property to that square object.  If a ship is found, call the hit() on that ship as well as assigned an attacked property to that square while returning a "hit" string
        recieveAttack(row, col) {
            const square = this.grid[row][col]
            if (square.attacked) return "Target already been fired on, select new target..."
            else if (square.ship) {
                square.attacked = true
                square.ship.hit()
                this.hits++
                if (square.ship.isSunk()) return `Direct Hit - ${square.ship.name} Destroyed!`
                else return "Direct Hit!"
            }
            else {
                square.attacked = true
                this.misses++
                return "Target Miss..."
            }
        },
        // method to determine if all ships on grid have been sunk, resulting in a game end
        allSunk() {
            return this.totalhps === this.hits ? true : false
        }
    }
}

// player factory function that accepts a gameboard object as a parameter.  This effectively asigns the gamebaord to the player and enables methods within the player object to effect the gameboard
const player = (board) => {
    const grid = board.grid
    return {
        grid,
        board,
        attack(player, row, col) {
            return player.board.recieveAttack(row, col)
        },
    }
}

/***/ }),

/***/ "./src/MachineStd.otf":
/*!****************************!*\
  !*** ./src/MachineStd.otf ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d6b0bf90f6be9cfb515.otf";

/***/ }),

/***/ "./src/assets/battleship1.png":
/*!************************************!*\
  !*** ./src/assets/battleship1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48743c2bd2bdb3673e44.png";

/***/ }),

/***/ "./src/assets/carrier.png":
/*!********************************!*\
  !*** ./src/assets/carrier.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b765a2b9d6ce380b51e.png";

/***/ }),

/***/ "./src/assets/destroyer.png":
/*!**********************************!*\
  !*** ./src/assets/destroyer.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ab768f28bf8fb8031b9.png";

/***/ }),

/***/ "./src/assets/patrolboat.png":
/*!***********************************!*\
  !*** ./src/assets/patrolboat.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d4c8f1ff77ef37e12597.png";

/***/ }),

/***/ "./src/assets/submarine.png":
/*!**********************************!*\
  !*** ./src/assets/submarine.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ceae12e91864ff80799.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");



const volume = document.querySelector("#mp3");
const newGame = document.querySelector("#new-game");
const title = document.querySelector("#battleship");
const body = document.querySelector("body");

let audio = new Audio("Battlefield 1942.mp3");  // EA's Battlefield 1942 Main Theme.  Downloaded from archive.org
audio.play();
audio.loop = true;

volume.addEventListener("click", () => {
  if (audio.muted === false) {
    audio.muted = true;
    volume.src = "images/mute.png";
  } else {
    audio.muted = false;
    volume.src = "images/volume.png";
  }
});

newGame.addEventListener("click", () => {
  newGame.style.display = "none";
  title.style.top = "2%";
  _game__WEBPACK_IMPORTED_MODULE_1__.newGame();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJHQUFpQztBQUM3RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSw2Q0FBNkMsNkJBQTZCLGdCQUFnQixHQUFHLGdCQUFnQiwyQkFBMkIsMkRBQTJELEdBQUcsc0JBQXNCLGVBQWUsNEJBQTRCLGVBQWUsOEJBQThCLGVBQWUsNkJBQTZCLGVBQWUsNkJBQTZCLEdBQUcsVUFBVSxvQkFBb0IsNkJBQTZCLHdCQUF3QiwwQkFBMEIsOEJBQThCLDhCQUE4Qix5QkFBeUIsR0FBRyxpQkFBaUIsa0JBQWtCLG9CQUFvQixvQkFBb0IsMEJBQTBCLDhCQUE4QixzQkFBc0Isc0NBQXNDLHlGQUF5Riw0QkFBNEIsMkNBQTJDLHlCQUF5QixlQUFlLHFDQUFxQyxHQUFHLFVBQVUsa0JBQWtCLG1CQUFtQix5QkFBeUIsYUFBYSxlQUFlLG1CQUFtQixHQUFHLGVBQWUseUJBQXlCLGVBQWUsa0NBQWtDLDhCQUE4Qix1QkFBdUIsd0JBQXdCLEdBQUcscUJBQXFCLGdEQUFnRCxzQkFBc0IsNEJBQTRCLEdBQUcscUJBQXFCLGtCQUFrQiw4QkFBOEIsc0JBQXNCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixpQkFBaUIscUNBQXFDLEdBQUcsaUJBQWlCLHVCQUF1QiwyQkFBMkIsc0JBQXNCLGlCQUFpQixvQkFBb0IsOEJBQThCLG9CQUFvQixzQkFBc0IsR0FBRyxpQkFBaUIsdUJBQXVCLEdBQUcsa0JBQWtCLG1CQUFtQixrQkFBa0Isa0NBQWtDLEdBQUcsWUFBWSw4QkFBOEIsR0FBRyxxQkFBcUIsb0JBQW9CLHNCQUFzQiw4QkFBOEIsR0FBRyxrQkFBa0Isa0JBQWtCLG1CQUFtQiw4QkFBOEIsaUNBQWlDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsd0JBQXdCLGdEQUFnRCxVQUFVLGtCQUFrQixtQkFBbUIseUJBQXlCLDhCQUE4QixHQUFHLFdBQVcsb0JBQW9CLDhDQUE4QywwQ0FBMEMsb0JBQW9CLHlCQUF5QixHQUFHLGdCQUFnQix5QkFBeUIsdUJBQXVCLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLG9DQUFvQyxxQkFBcUIsb0JBQW9CLG1CQUFtQix5QkFBeUIsbUJBQW1CLGVBQWUsb0JBQW9CLDZCQUE2QixHQUFHLHFCQUFxQixvQkFBb0IsbUJBQW1CLHlCQUF5QixvQkFBb0IsZUFBZSxvQkFBb0IsNkJBQTZCLEdBQUcsaUJBQWlCLG1CQUFtQixtQkFBbUIsc0NBQXNDLEdBQUcsWUFBWSw0QkFBNEIsR0FBRyxXQUFXLGlCQUFpQixHQUFHLFlBQVkseUJBQXlCLGtCQUFrQixtQkFBbUIsMkNBQTJDLG9CQUFvQiwwQkFBMEIsR0FBRyxzQkFBc0IsOEJBQThCLGtCQUFrQixvQkFBb0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEdBQUcsWUFBWSx1QkFBdUIseUJBQXlCLG1CQUFtQixtQkFBbUIseUJBQXlCLG9CQUFvQiwwQkFBMEIsZUFBZSxHQUFHLFdBQVcsa0JBQWtCLG1CQUFtQixHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1Qix1QkFBdUIsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLDZCQUE2Qiw2QkFBNkIsZ0JBQWdCLEdBQUcsZ0JBQWdCLDJCQUEyQiwrQkFBK0IsR0FBRyxzQkFBc0IsZUFBZSw0QkFBNEIsZUFBZSw4QkFBOEIsZUFBZSw2QkFBNkIsZUFBZSw2QkFBNkIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsd0JBQXdCLDBCQUEwQiw4QkFBOEIsOEJBQThCLHlCQUF5QixHQUFHLGlCQUFpQixrQkFBa0Isb0JBQW9CLG9CQUFvQiwwQkFBMEIsOEJBQThCLHNCQUFzQixzQ0FBc0MseUZBQXlGLDRCQUE0QiwyQ0FBMkMseUJBQXlCLGVBQWUscUNBQXFDLEdBQUcsVUFBVSxrQkFBa0IsbUJBQW1CLHlCQUF5QixhQUFhLGVBQWUsbUJBQW1CLEdBQUcsZUFBZSx5QkFBeUIsZUFBZSxrQ0FBa0MsOEJBQThCLHVCQUF1Qix3QkFBd0IsR0FBRyxxQkFBcUIsZ0RBQWdELHNCQUFzQiw0QkFBNEIsR0FBRyxxQkFBcUIsa0JBQWtCLDhCQUE4QixzQkFBc0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGlCQUFpQixxQ0FBcUMsR0FBRyxpQkFBaUIsdUJBQXVCLDJCQUEyQixzQkFBc0IsaUJBQWlCLG9CQUFvQiw4QkFBOEIsb0JBQW9CLHNCQUFzQixHQUFHLGlCQUFpQix1QkFBdUIsR0FBRyxrQkFBa0IsbUJBQW1CLGtCQUFrQixrQ0FBa0MsR0FBRyxZQUFZLDhCQUE4QixHQUFHLHFCQUFxQixvQkFBb0Isc0JBQXNCLDhCQUE4QixHQUFHLGtCQUFrQixrQkFBa0IsbUJBQW1CLDhCQUE4QixpQ0FBaUMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyx3QkFBd0IsZ0RBQWdELFVBQVUsa0JBQWtCLG1CQUFtQix5QkFBeUIsOEJBQThCLEdBQUcsV0FBVyxvQkFBb0IsOENBQThDLDBDQUEwQyxvQkFBb0IseUJBQXlCLEdBQUcsZ0JBQWdCLHlCQUF5Qix1QkFBdUIsc0JBQXNCLGdCQUFnQixnQkFBZ0Isb0NBQW9DLHFCQUFxQixvQkFBb0IsbUJBQW1CLHlCQUF5QixtQkFBbUIsZUFBZSxvQkFBb0IsNkJBQTZCLEdBQUcscUJBQXFCLG9CQUFvQixtQkFBbUIseUJBQXlCLG9CQUFvQixlQUFlLG9CQUFvQiw2QkFBNkIsR0FBRyxpQkFBaUIsbUJBQW1CLG1CQUFtQixzQ0FBc0MsR0FBRyxZQUFZLDRCQUE0QixHQUFHLFdBQVcsaUJBQWlCLEdBQUcsWUFBWSx5QkFBeUIsa0JBQWtCLG1CQUFtQiwyQ0FBMkMsb0JBQW9CLDBCQUEwQixHQUFHLHNCQUFzQiw4QkFBOEIsa0JBQWtCLG9CQUFvQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsR0FBRyxZQUFZLHVCQUF1Qix5QkFBeUIsbUJBQW1CLG1CQUFtQix5QkFBeUIsb0JBQW9CLDBCQUEwQixlQUFlLEdBQUcsV0FBVyxrQkFBa0IsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQ3pwVDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNma0Q7QUFDQTtBQUNQO0FBQ0k7QUFDQTtBQUNFOztBQUVqRDs7QUFFQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDBCQUEwQjtBQUM5QyxzQkFBc0IsK0JBQStCO0FBQ3JEO0FBQ0E7QUFDQSxxQkFBcUIsSUFBSSxJQUFJLElBQUksR0FBRztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFVO0FBQzlCOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0RBQU87QUFDeEI7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixrREFBUztBQUM1Qjs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGtEQUFTO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsbURBQVU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsMEJBQTBCO0FBQzlDLHNCQUFzQiwrQkFBK0I7QUFDckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLHdEQUF3RCxJQUFJO0FBQzVELFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxJQUFJO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNEQUFZO0FBQ25DO0FBQ0Esa0RBQWtELFdBQVcsSUFBSSxXQUFXO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxXQUFXO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxXQUFXO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isb0RBQVU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixnREFBTztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGtEQUFTO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsa0RBQVM7QUFDNUI7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixtREFBVTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxJQUFJLGlEQUFPLElBQUk7QUFDZixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblN3QztBQUNSOztBQUVoQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsTUFBTSw2QkFBNkI7QUFDbkMsTUFBTSwyQkFBMkI7QUFDakMsTUFBTSwyQkFBMkI7QUFDakMsTUFBTSw0QkFBNEI7QUFDbEMsTUFBTSx5QkFBeUI7QUFDL0I7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDTztBQUNQLGlCQUFpQixrREFBaUI7QUFDbEMsaUJBQWlCLGtEQUFpQjs7QUFFbEMsa0JBQWtCLCtDQUFjO0FBQ2hDLGtCQUFrQiwrQ0FBYzs7QUFFaEM7QUFDQTs7QUFFQSxFQUFFLHNEQUFxQjtBQUN2Qjs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SUE7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUztBQUNqQyx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxlQUFlO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxrQkFBa0I7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNpQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdEO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBDQUFtQjtBQUNyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9vYmplY3RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiTWFjaGluZVN0ZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IE1hY2hpbmU7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAgIDAlICAgICAge3RyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO31cXG4gICAgMzMlICAgICB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTt9XFxuICAgIDY2JSAgICAge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTt9XFxuICAgIDEwMCUgICAge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTt9XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNiYXR0bGVzaGlwIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDlyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBNYWNoaW5lLCBzYW4tc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDIyNSwyMjUsMjI1KSwgcmdiKDc4LCA3OCwgNzgpLCByZ2JhKDIyNSwyMjUsMjI1KSk7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDUlO1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgZWFzZS1pbi1vdXQgMXM7XFxufVxcblxcbiNtcDMge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuI25ldy1nYW1lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDY1JTtcXG4gICAgYm9yZGVyOiAxcHggbGltZWdyZWVuIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IGxpbWVncmVlbjtcXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XFxufVxcblxcbiNuZXctZ2FtZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAxMCwgLjI1KVxcbn1cXG5cXG4jbmV3LWdhbWU6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg5NSUpO1xcbn1cXG5cXG4uc2NyZWVuLWRpc3BsYXkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbjogMTYwcHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbiAxcztcXG59XFxuXFxuLm1zZy1iYW5uZXIge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtM3JlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubXNnLW91dHB1dCB7XFxuICAgIGNvbG9yOiBsaW1lZ3JlZW47XFxufVxcblxcbi5wbGFjZWhvbGRlciB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcXG59XFxuXFxuLmJsYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ncmlkLXNxdWFyZSB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6c29saWQgbGltZWdyZWVuIDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ncmlkLXNxdWFyZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAxMCwgLjI1KVxcbn1cXG5cXG4ucGVnIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLmdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNDBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBwYWRkaW5nOiA1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ncmlkLW5hbWUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiBsaW1lZ3JlZW47XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKVxcbn1cXG5cXG4uc2hpcHMxLWRpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTE1MHB4O1xcbiAgICB0b3A6ODBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXBzMi1kaXNwbGF5IHtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtMTMwcHg7XFxuICAgIHRvcDo4MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hpcC1pY29ucyB7XFxuICAgIHdpZHRoOiAyMjVweDtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCBvcGFjaXR5IDJzO1xcbn1cXG5cXG4uc2hha2Uge1xcbiAgICBhbmltYXRpb246IHNoYWtlIC41MHM7XFxufVxcblxcbi5zaW5rIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBjb2xvcjogbGltZWdyZWVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTZweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5hPmltZyB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFNBQVMsMEJBQTBCLENBQUM7SUFDcEMsU0FBUyw0QkFBNEIsQ0FBQztJQUN0QyxTQUFTLDJCQUEyQixDQUFDO0lBQ3JDLFNBQVMsMkJBQTJCLENBQUM7QUFDekM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0Isa0ZBQWtGO0lBQ2xGLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsU0FBUztJQUNULFNBQVM7SUFDVDtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFFBQVE7SUFDUixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7SUFDUixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IE1hY2hpbmU7XFxuICAgIHNyYzogdXJsKE1hY2hpbmVTdGQub3RmKTtcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAgIDAlICAgICAge3RyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO31cXG4gICAgMzMlICAgICB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTt9XFxuICAgIDY2JSAgICAge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTt9XFxuICAgIDEwMCUgICAge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTt9XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNiYXR0bGVzaGlwIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDlyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBNYWNoaW5lLCBzYW4tc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDIyNSwyMjUsMjI1KSwgcmdiKDc4LCA3OCwgNzgpLCByZ2JhKDIyNSwyMjUsMjI1KSk7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDUlO1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgZWFzZS1pbi1vdXQgMXM7XFxufVxcblxcbiNtcDMge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuI25ldy1nYW1lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDY1JTtcXG4gICAgYm9yZGVyOiAxcHggbGltZWdyZWVuIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IGxpbWVncmVlbjtcXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XFxufVxcblxcbiNuZXctZ2FtZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAxMCwgLjI1KVxcbn1cXG5cXG4jbmV3LWdhbWU6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg5NSUpO1xcbn1cXG5cXG4uc2NyZWVuLWRpc3BsYXkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbjogMTYwcHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbiAxcztcXG59XFxuXFxuLm1zZy1iYW5uZXIge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtM3JlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubXNnLW91dHB1dCB7XFxuICAgIGNvbG9yOiBsaW1lZ3JlZW47XFxufVxcblxcbi5wbGFjZWhvbGRlciB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcXG59XFxuXFxuLmJsYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ncmlkLXNxdWFyZSB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6c29saWQgbGltZWdyZWVuIDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ncmlkLXNxdWFyZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAxMCwgLjI1KVxcbn1cXG5cXG4ucGVnIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLmdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNDBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBwYWRkaW5nOiA1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ncmlkLW5hbWUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiBsaW1lZ3JlZW47XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKVxcbn1cXG5cXG4uc2hpcHMxLWRpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTE1MHB4O1xcbiAgICB0b3A6ODBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXBzMi1kaXNwbGF5IHtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtMTMwcHg7XFxuICAgIHRvcDo4MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hpcC1pY29ucyB7XFxuICAgIHdpZHRoOiAyMjVweDtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCBvcGFjaXR5IDJzO1xcbn1cXG5cXG4uc2hha2Uge1xcbiAgICBhbmltYXRpb246IHNoYWtlIC41MHM7XFxufVxcblxcbi5zaW5rIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBjb2xvcjogbGltZWdyZWVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTZweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5hPmltZyB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBBSUF0dGFja1R1cm4sIG5ld0dhbWUgfSBmcm9tIFwiLi9nYW1lLmpzXCI7XG5pbXBvcnQgQkFUVExFU0hJUCBmcm9tIFwiLi9hc3NldHMvYmF0dGxlc2hpcDEucG5nXCI7XG5pbXBvcnQgQ0FSUklFUiBmcm9tIFwiLi9hc3NldHMvY2Fycmllci5wbmdcIjtcbmltcG9ydCBERVNUUk9ZRVIgZnJvbSBcIi4vYXNzZXRzL2Rlc3Ryb3llci5wbmdcIjtcbmltcG9ydCBTVUJNQVJJTkUgZnJvbSBcIi4vYXNzZXRzL3N1Ym1hcmluZS5wbmdcIjtcbmltcG9ydCBQQVRST0xCT0FUIGZyb20gXCIuL2Fzc2V0cy9wYXRyb2xib2F0LnBuZ1wiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbi8vIENyZWF0ZU1haW5EaXNwbGF5IGlzIGNhbGxlZCB3aGVuIGEgbmV3IGdhbWUgaXMgc3RhcnRlZC4gIENyZWF0ZXMgRE9NIGVsZW1lbnRzIHRoYXQgcmVwcmVzZW50IHRoZSBwbGF5ZXIgYm9hcmRzIChncmlkcykgYW5kIGFzc2lnbnMgbGlzdGVuZXIgZXZlbnRzIHRvIGVhY2ggb2YgdGhlIGdyaWRzIHNxdWFyZXMsIGRlcGVuZGluZyBvbiB0aGUgcGxheWVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1haW5EaXNwbGF5ID0gKHBsYXllcjEsIHBsYXllcjIsIGJvYXJkMSwgYm9hcmQyKSA9PiB7XG4gIGxldCB0aW1lb3V0ID0gW107XG5cbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XG4gIGRpc3BsYXkuY2xhc3NMaXN0LmFkZChcInNjcmVlbi1kaXNwbGF5XCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkaXNwbGF5LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgfSwgNTAwKTtcblxuICBjb25zdCBtc2diYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvL3R5cGVXcml0ZXIoXCJDb21tYW5kZXIsIHNlbGVjdCB0YXJnZXQgYW5kIGZpcmUhXCIsIG1zZ291dHB1dCk7XG4gIG1zZ2Jhbm5lci5jbGFzc0xpc3QuYWRkKFwibXNnLWJhbm5lclwiKTtcbiAgZGlzcGxheS5hcHBlbmRDaGlsZChtc2diYW5uZXIpO1xuXG4gIGNvbnN0IG1zZ291dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBtc2dvdXRwdXQudGV4dENvbnRlbnQgPVxuICAgIFwiQ29tbWFuZGVyLCBlbmVteSBmbGVldCBpbiByYW5nZS4gU2VsZWN0IGNvb3JkaW5hdGVzLCBmaXJlIVwiO1xuICBtc2dvdXRwdXQuY2xhc3NMaXN0LmFkZChcIm1zZy1vdXRwdXRcIik7XG4gIG1zZ2Jhbm5lci5hcHBlbmRDaGlsZChtc2dvdXRwdXQpO1xuXG4gIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZChcInBsYWNlaG9sZGVyXCIpO1xuICBtc2diYW5uZXIuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJsYWNrXCIpO1xuICB9LCA1MDApO1xuXG4gIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncmlkLWNvbnRhaW5lclwiKTtcbiAgZGlzcGxheS5hcHBlbmRDaGlsZChncmlkQ29udGFpbmVyKTtcblxuICAvLyBHcmlkIDEgLyBwbGF5ZXIgMS4gIEdyaWQgY3JlYXRlZCB3aWxsIGhpZ2hsaWdodCBzcXVhcmVzIHdoZXJlIHRoZSBzaGlwcyBhcmUgbG9jYXRlZFxuICBjb25zdCBET01ncmlkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIERPTWdyaWQxLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKERPTWdyaWQxKTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBib2FyZDEuZ3JpZC5sZW5ndGg7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgYm9hcmQxLmdyaWRbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1zcXVhcmVcIik7XG4gICAgICBzcXVhcmUuaWQgPSBgJHtyb3d9Ynkke2NvbH1gOyAvLyBJTVBPUlRBTlQgLSBJRCBpcyB1c2VkIHRvIHRhcmdldCBzcXVhcmVzIHRoYXQgdGhlIEFJIGF0dGFja2VkLiAgU3F1YXJlIGNvbG9yIHdpbGwgYmUgdXBkYXRlZCBkZXBlbmRpbmcgb24gYXR0YWNrIG91dGNvbWVcbiAgICAgIERPTWdyaWQxLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICBpZiAoYm9hcmQxLmdyaWRbcm93XVtjb2xdLnNoaXApIHtcbiAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgIH1cbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAvLyBUaGlzIEV2ZW50IGxpc3RlbmVyIHdpbGwgYmUgdXNlZCBvbmNlIGN1c3RvbSBzaGlwIHBsYWNlbWVudCBpcyBpbXBsZW1lbnRlZFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ3JpZDFuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ3JpZDFuYW1lLnRleHRDb250ZW50ID0gXCJBbGxpZWQgRmxlZXRcIjtcbiAgZ3JpZDFuYW1lLmNsYXNzTGlzdC5hZGQoXCJncmlkLW5hbWVcIik7XG4gIERPTWdyaWQxLmFwcGVuZENoaWxkKGdyaWQxbmFtZSk7XG5cbiAgLy8gQ3JlYXRlIHNoaXAgaWNvbnMgZm9yIEFsbGllZCBmbGVldFxuICBjb25zdCBzaGlwczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaGlwczEuY2xhc3NMaXN0LmFkZChcInNoaXBzMS1kaXNwbGF5XCIpO1xuICBET01ncmlkMS5hcHBlbmRDaGlsZChzaGlwczEpO1xuXG4gIGNvbnN0IGJhdHRsZXNoaXAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgYmF0dGxlc2hpcDEuY2xhc3NMaXN0LmFkZChcInNoaXAtaWNvbnNcIik7XG4gIGJhdHRsZXNoaXAxLnNyYyA9IEJBVFRMRVNISVA7XG4gIGJhdHRsZXNoaXAxLmlkID0gXCJCYXR0bGVzaGlwMVwiO1xuXG4gIGNvbnN0IGNhcnJpZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY2FycmllcjEuY2xhc3NMaXN0LmFkZChcInNoaXAtaWNvbnNcIik7XG4gIGNhcnJpZXIxLnNyYyA9IENBUlJJRVI7XG4gIGNhcnJpZXIxLmlkID0gXCJDYXJyaWVyMVwiO1xuXG4gIGNvbnN0IGRlc3Ryb3llcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBkZXN0cm95ZXIxLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWljb25zXCIpO1xuICBkZXN0cm95ZXIxLnNyYyA9IERFU1RST1lFUjtcbiAgZGVzdHJveWVyMS5pZCA9IFwiRGVzdHJveWVyMVwiO1xuXG4gIGNvbnN0IHN1Ym1hcmluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBzdWJtYXJpbmUxLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWljb25zXCIpO1xuICBzdWJtYXJpbmUxLnNyYyA9IFNVQk1BUklORTtcbiAgc3VibWFyaW5lMS5pZCA9IFwiU3VibWFyaW5lMVwiO1xuXG4gIGNvbnN0IHBhdHJvbGJvYXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgcGF0cm9sYm9hdDEuY2xhc3NMaXN0LmFkZChcInNoaXAtaWNvbnNcIik7XG4gIHBhdHJvbGJvYXQxLnNyYyA9IFBBVFJPTEJPQVQ7XG4gIHBhdHJvbGJvYXQxLmlkID0gXCJQYXRyb2wgQm9hdDFcIjtcblxuICBzaGlwczEuYXBwZW5kQ2hpbGQoY2FycmllcjEpO1xuICBzaGlwczEuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcDEpO1xuICBzaGlwczEuYXBwZW5kQ2hpbGQoZGVzdHJveWVyMSk7XG4gIHNoaXBzMS5hcHBlbmRDaGlsZChzdWJtYXJpbmUxKTtcbiAgc2hpcHMxLmFwcGVuZENoaWxkKHBhdHJvbGJvYXQxKTtcblxuICAvLyBHcmlkIDIgLyBQbGF5ZXIgMiAoQUkgcGxheWVyKS4gIEdyaWQgY3JlYXRlZCB3aWxsIGhhdmUgc3F1YXJlcyB0aGF0IGNvbnRhaW4gbGlzdGVuZXIgZXZlbnRzIHRvIHJlY2lldmUgYXR0YWNrcyBmcm9tIHBsYXllciAxLiAgU2hpcHMgd2lsbCBOT1QgYmUgcmV2ZWFsZWQgYW5kIHNxdWFyZXMgd2lsbCBoYXZlIGNvbG9yIGluZGljYXRvcnMgdG8gaW5kaWNhdGUgaGl0cyBvciBtaXNzZXMuXG4gIGNvbnN0IERPTWdyaWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgRE9NZ3JpZDIuY2xhc3NMaXN0LmFkZChcImdyaWRcIik7XG4gIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoRE9NZ3JpZDIpO1xuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkMi5ncmlkLmxlbmd0aDsgcm93KyspIHtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBib2FyZDIuZ3JpZFtyb3ddLmxlbmd0aDsgY29sKyspIHtcbiAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJncmlkLXNxdWFyZVwiKTtcbiAgICAgIERPTWdyaWQyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG5cbiAgICAgIC8vIFRoaXMgcGFydGljdWxhciBldmVudCBsaXN0ZW5lciBmdWNudGlvbnMgYXMgdGhlIGdhbWUgbG9vcCwgb25jZSB0aGUgcGxheWVyIHNlbGVjdHMgYSB0YXJnZXQgc3F1YXJlIHRvIGF0dGFjaywgdGhlIEFJIHRoZW4gYXR0YWNrcyBpbiB0dXJuIChBSUF0dGFja1R1cm4gbWV0aG9kIGNhbGxlZCBmcm9tIGdhbWUuanMpXG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbXNnb3V0cHV0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgdGltZW91dC5mb3JFYWNoKCh0aW1lKSA9PiBjbGVhclRpbWVvdXQodGltZSkpOyAvLyBDbGVhcnMgdGhlIGV2ZW50IHF1ZXVlIG9mIHByaW9yIHR5cGVXcml0ZXIgb3V0cHV0c1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRpbWVvdXQpO1xuXG4gICAgICAgIGxldCBtc2cgPSBwbGF5ZXIxLmF0dGFjayhwbGF5ZXIyLCByb3csIGNvbCk7XG4gICAgICAgIGlmIChtc2cgPT09IFwiVGFyZ2V0IE1pc3MuLi5cIikge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgYWRkUGVnKHNxdWFyZSwgMSk7XG4gICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgICBtc2dvdXRwdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgIHRpbWVvdXQgPSB0eXBlV3JpdGVyKGBDYW5ub24gQmF0dGVyeSBGaXJlIC0gJHttc2d9YCwgbXNnb3V0cHV0KTtcbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICBtc2cgPT09IFwiVGFyZ2V0IGFscmVhZHkgYmVlbiBmaXJlZCBvbiwgc2VsZWN0IG5ldyB0YXJnZXQuLi5cIlxuICAgICAgICApIHtcbiAgICAgICAgICBtc2dvdXRwdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgIHRpbWVvdXQgPSB0eXBlV3JpdGVyKG1zZywgbXNnb3V0cHV0KTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkUGVnKHNxdWFyZSwgMik7XG4gICAgICAgICAgc2hpcFN1bmsobXNnLCAyKTtcbiAgICAgICAgICBtc2dvdXRwdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgIHRpbWVvdXQgPSB0eXBlV3JpdGVyKGBDYW5ub24gQmF0dGVyeSBGaXJlIC0gJHttc2d9YCwgbXNnb3V0cHV0KTtcbiAgICAgICAgICBpZiAoYm9hcmQyLmFsbFN1bmsoKSkge1xuICAgICAgICAgICAgZ2FtZU92ZXIoMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGltZW91dC5mb3JFYWNoKCh0aW1lKSA9PiBjbGVhclRpbWVvdXQodGltZSkpO1xuICAgICAgICAgIC8vIEFJIGF0dGFjayB0dXJuLiAgT25jZSB0aGUgYXR0YWNrIGNvbXBsZXRlcywgcGxheWVyIGdyaWQgVUkgd2lsbCB1cGRhdGUgdG8gcmVwcmVzZW50IHRoZSBBSSdzIGF0dGFjayB0YXJnZXRcbiAgICAgICAgICBsZXQgYXR0YWNrID0gQUlBdHRhY2tUdXJuKHBsYXllcjEsIHBsYXllcjIpO1xuICAgICAgICAgIC8vIHRhcmdldHMgdGhlIHNxdWFyZSBpbiB0aGUgcGxheWVyJ3MgZ3JpZCB3aXRoIHRoZSBjb29yZGluYXRlIElELCB0aGVuIGNvbG9yIGlzIHVwZGF0ZWQgYWNjb3JkaW5pbmcgdG8gYXR0YWNrIG91dGNvbWVcbiAgICAgICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7YXR0YWNrLnJvd31ieSR7YXR0YWNrLmNvbH1gKTtcbiAgICAgICAgICBpZiAocGxheWVyMS5ncmlkW2F0dGFjay5yb3ddW2F0dGFjay5jb2xdLnNoaXApIHtcbiAgICAgICAgICAgIGFkZFBlZyh0YXJnZXQsIDIpO1xuICAgICAgICAgICAgc2hpcFN1bmsoYXR0YWNrLm1zZywgMSk7XG4gICAgICAgICAgICBtc2dvdXRwdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgdGltZW91dCA9IFtcbiAgICAgICAgICAgICAgLi4udGltZW91dCxcbiAgICAgICAgICAgICAgdHlwZVdyaXRlcihgRW5lbXkgSW5jb21pbmcgRmlyZSAtICR7YXR0YWNrLm1zZ31gLCBtc2dvdXRwdXQpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGlmIChib2FyZDEuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAgIGdhbWVPdmVyKDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtc2dvdXRwdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgdGltZW91dCA9IFtcbiAgICAgICAgICAgICAgLi4udGltZW91dCxcbiAgICAgICAgICAgICAgdHlwZVdyaXRlcihgRW5lbXkgSW5jb21pbmcgRmlyZSAtICR7YXR0YWNrLm1zZ31gLCBtc2dvdXRwdXQpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGFkZFBlZyh0YXJnZXQsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZ3JpZDJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ3JpZDJuYW1lLnRleHRDb250ZW50ID0gXCJFbmVteSBGbGVldFwiO1xuICBncmlkMm5hbWUuY2xhc3NMaXN0LmFkZChcImdyaWQtbmFtZVwiKTtcbiAgRE9NZ3JpZDIuYXBwZW5kQ2hpbGQoZ3JpZDJuYW1lKTtcblxuICAvLyBDcmVhdGUgc2hpcCBpY29ucyBmb3IgRW5lbXkgZmxlZXRcbiAgY29uc3Qgc2hpcHMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2hpcHMyLmNsYXNzTGlzdC5hZGQoXCJzaGlwczItZGlzcGxheVwiKTtcbiAgRE9NZ3JpZDIuYXBwZW5kQ2hpbGQoc2hpcHMyKTtcblxuICBjb25zdCBiYXR0bGVzaGlwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGJhdHRsZXNoaXAyLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWljb25zXCIpO1xuICBiYXR0bGVzaGlwMi5zcmMgPSBCQVRUTEVTSElQO1xuICBiYXR0bGVzaGlwMi5pZCA9IFwiQmF0dGxlc2hpcDJcIjtcblxuICBjb25zdCBjYXJyaWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNhcnJpZXIyLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWljb25zXCIpO1xuICBjYXJyaWVyMi5zcmMgPSBDQVJSSUVSO1xuICBjYXJyaWVyMi5pZCA9IFwiQ2FycmllcjJcIjtcblxuICBjb25zdCBkZXN0cm95ZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZGVzdHJveWVyMi5jbGFzc0xpc3QuYWRkKFwic2hpcC1pY29uc1wiKTtcbiAgZGVzdHJveWVyMi5zcmMgPSBERVNUUk9ZRVI7XG4gIGRlc3Ryb3llcjIuaWQgPSBcIkRlc3Ryb3llcjJcIjtcblxuICBjb25zdCBzdWJtYXJpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgc3VibWFyaW5lMi5jbGFzc0xpc3QuYWRkKFwic2hpcC1pY29uc1wiKTtcbiAgc3VibWFyaW5lMi5zcmMgPSBTVUJNQVJJTkU7XG4gIHN1Ym1hcmluZTIuaWQgPSBcIlN1Ym1hcmluZTJcIjtcblxuICBjb25zdCBwYXRyb2xib2F0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHBhdHJvbGJvYXQyLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWljb25zXCIpO1xuICBwYXRyb2xib2F0Mi5zcmMgPSBQQVRST0xCT0FUO1xuICBwYXRyb2xib2F0Mi5pZCA9IFwiUGF0cm9sIEJvYXQyXCI7XG5cbiAgc2hpcHMyLmFwcGVuZENoaWxkKGNhcnJpZXIyKTtcbiAgc2hpcHMyLmFwcGVuZENoaWxkKGJhdHRsZXNoaXAyKTtcbiAgc2hpcHMyLmFwcGVuZENoaWxkKGRlc3Ryb3llcjIpO1xuICBzaGlwczIuYXBwZW5kQ2hpbGQoc3VibWFyaW5lMik7XG4gIHNoaXBzMi5hcHBlbmRDaGlsZChwYXRyb2xib2F0Mik7XG59O1xuXG4vLyBHYW1lIE92ZXIgZnVuY3Rpb24uICBDcmVhdGVzIGEgbW9kYWwgb3ZlcmxheSBkaXNwbGF5aW5nIHRoZSBnYW1lIG91dGNvbWUgYW5kIGEgYnV0dG9uIGZvciBhIG5ldyBnYW1lLiAgSW5wdXQgcGFyYW1ldGVyIGlzIHRoZSBwbGF5ZXIgbnVtYmVyLCB3aGljaCBpcyB1c2VkIHRvIGRldGVybWluZSBpZiBwbGF5ZXIgd2lucyBvciBsb3Nlc1xuY29uc3QgZ2FtZU92ZXIgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAvLyBHYW1lIG91dGNvbWUgbWVzc2FnZVxuICBjb25zdCBtc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1zZyk7XG4gIGlmIChwbGF5ZXIgPT09IDEpIHtcbiAgICBtc2cudGV4dENvbnRlbnQgPSBcIkVuZW15IEZsZWV0IERlc3Ryb3llZCwgTWlzc2lvbiBBY2NvbXBsaXNoZWQhXCI7XG4gIH0gZWxzZSB7XG4gICAgbXNnLnRleHRDb250ZW50ID0gXCJGbGVldCBEZXN0cm95ZWQsIFlvdSBMb3NlIVwiO1xuICB9XG5cbiAgLy8gTmV3IEdhbWUgYnV0dG9uXG4gIGNvbnN0IG5leHRNaXNzaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV4dE1pc3Npb24udGV4dENvbnRlbnQgPSBcIk5leHQgTWlzc2lvblwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV4dE1pc3Npb24pO1xuXG4gIG5leHRNaXNzaW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYm9keS5yZW1vdmVDaGlsZChib2R5Lmxhc3RDaGlsZCk7IC8vIHJlbW92ZSBtb2RhbFxuICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5sYXN0Q2hpbGQpOyAvLyByZW1vdmUgY3VycmVudCBnYW1lIGRpc3BsYXlcbiAgICBuZXdHYW1lKCk7IC8vIGNyZWF0ZSBhIG5ldyBnYW1lXG4gIH0pO1xufTtcblxuLy8gVHlwZXdyaXRlciBlZmZlY3QgZm9yIFVJIGRpc3BsYXllZCBtZXNzYWdlcyB0byB0aGUgcGxheWVyLiAgUmV0dXJucyBhbiBhcnJheSBvZiB0aW1lb3V0IElEcyB0byBiZSB0YXJnZXRlZCBpbiB0aGUgZXZlbnQgcXVldWVcbmNvbnN0IHR5cGVXcml0ZXIgPSAodGV4dCwgZWxlbWVudCwgaW5kZXggPSAwLCB0aW1lb3V0QXJyYXkgPSBbXSkgPT4ge1xuICBpZiAoaW5kZXggPCB0ZXh0Lmxlbmd0aCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgKz0gdGV4dC5jaGFyQXQoaW5kZXgpO1xuICAgIGluZGV4Kys7XG4gICAgdGltZW91dEFycmF5LnB1c2goXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdHlwZVdyaXRlcih0ZXh0LCBlbGVtZW50LCBpbmRleCwgdGltZW91dEFycmF5KTtcbiAgICAgIH0sIDIwKVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHRpbWVvdXRBcnJheTtcbn07XG5cbi8vIEFkZHMgYSBuZXcgZWxlbWVudCB0byB0aGUgZ3JpZCBzcXVhcmVzIHdoZW4gaXQncyBhdHRhY2tlZCwgcmVwcmVzZW50YXRpdmUgb2YgdGhlIHBlZ3MgaW4gYmF0dGxlc2hpcCBib2FyZGdhbWVcbi8vIG1zZyA9PT0gMSBpbmRpY2F0ZXMgYSB3aGl0ZSBwZWcvbWlzcywgbXNnID09PSAyIGluZGljYXRlcyBhIHJlZCBwZWcvaGl0XG5jb25zdCBhZGRQZWcgPSAoZ3JpZFNxdWFyZSwgbXNnKSA9PiB7XG4gIGNvbnN0IHBlZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBlZy5jbGFzc0xpc3QuYWRkKFwicGVnXCIpO1xuICBncmlkU3F1YXJlLmFwcGVuZENoaWxkKHBlZyk7XG4gIGlmIChtc2cgPT09IDEpIHBlZy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gIGVsc2UgcGVnLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG59O1xuXG4vLyBTaGlwIGljb24gc3VuayBmdW5jdGlvbi4gIFdpbGwgY2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgc2hpcCBpY29ucyBmb3IgZWl0aGVyIHBsYXllciB0byBpbmRpY2F0ZSBzaGlwIHN0YXR1cy4gIFBhcmFtcyB3aWxsIGJlIG1lc3NhZ2Ugb3V0cHV0IGZyb20gcGxheWVyIGF0dGFjayBmdW5jdGlvbiBhbmQgdGhlIHBsYXllciB0aGF0IGlzIHRhcmdldHRlZC5cbi8vIHBsYXllciA9PSAxIGlzIGh1bWFuLCBwbGF5ZXIgPT0gMiBpcyBBSVxuY29uc3Qgc2hpcFN1bmsgPSAobXNnLCBwbGF5ZXIpID0+IHtcbiAgbGV0IHNoaXBzID0gW1xuICAgIFwiQ2FycmllclwiLFxuICAgIFwiRGVzdHJveWVyXCIsXG4gICAgXCJCYXR0bGVzaGlwXCIsXG4gICAgXCJTdWJtYXJpbmVcIixcbiAgICBcIlBhdHJvbCBCb2F0XCIsXG4gIF07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobXNnLmluY2x1ZGVzKHNoaXBzW2ldKSkge1xuICAgICAgbGV0IHRhcmdldFNoaXAgPSBzaGlwc1tpXTtcbiAgICAgIGxldCB0YXJnZXRJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0U2hpcCArIHBsYXllcik7IC8vIFR5cGUgY29lcmNpb24gdG8gYWRkIHRoZSBzaGlwIG5hbWUgYW5kIHBsYXllciBudW1iZXIgdG8gZ2V0IElEIG9mIHNwZWNpZmljIHNoaXAgaWNvblxuICAgICAgdGFyZ2V0SWNvbi5jbGFzc0xpc3QuYWRkKFwic2hha2VcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGFyZ2V0SWNvbi5jbGFzc0xpc3QuYWRkKFwic2lua1wiKVxuICAgICAgfSwgNzUwKVxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0ICogYXMgb2JqZWN0cyBmcm9tIFwiLi9vYmplY3RzLmpzXCI7XG5pbXBvcnQgKiBhcyBET00gZnJvbSBcIi4vRE9NLmpzXCI7XG5cbi8vIGNyZWF0ZUZsZWV0IHdpbGwgY3JlYXRlIGEgZmxlZXQgb2Ygc2hpcHMgYW5kIHBsYWNlIHRoZW0gcmFuZG9tbHkgb24gdGhlIHBhc3NlZCBnYW1lYm9hcmQgcGFyYW1ldGVyLiAgVGhlIGxvZ2ljIGVuc3VyZXMgdGhhdCB0aGUgc2hpcHMgZG8gbm90IG92ZXJsYXAgYW5kIGFsc28gcmFuZG9taXplcyB3aGV0aGVyIHRoZSBzaGlwcyBhcmUgcGxhY2VkXG4vLyBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseVxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZsZWV0ID0gKGJvYXJkKSA9PiB7XG4gIC8vIGZsZWV0IGFycmF5LiAgU3RhbmRhcmQgQmF0dGxlc2hpcCBnYW1lIGhhcyA1IHNoaXBzIHdpdGggdGhlIGZvbGxvd2luZyBib2F0LmhwcyB2YWx1ZXM6IDIsIDMsIDMsIDQsIDUuXG4gIGNvbnN0IGZsZWV0ID0gW1xuICAgIHsgaHBzOiAyLCBuYW1lOiBcIlBhdHJvbCBCb2F0XCIgfSxcbiAgICB7IGhwczogMywgbmFtZTogXCJTdWJtYXJpbmVcIiB9LFxuICAgIHsgaHBzOiAzLCBuYW1lOiBcIkRlc3Ryb3llclwiIH0sXG4gICAgeyBocHM6IDQsIG5hbWU6IFwiQmF0dGxlc2hpcFwiIH0sXG4gICAgeyBocHM6IDUsIG5hbWU6IFwiQ2FycmllclwiIH0sXG4gIF07IFxuICBmbGVldC5mb3JFYWNoKChib2F0KSA9PiB7XG4gICAgbGV0IGRpciA9IE1hdGgucmFuZG9tKCkgKiAxMDA7IC8vIFJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBzaGlwIGlzIHBsYWNlZCB2ZXJ0aWNhbGx5IG9yIGhvcml6b250YWxseVxuICAgIGlmIChkaXIgPj0gNTApIHtcbiAgICAgIC8vIDwtLS0gaG9yaXpvbnRhbFxuICAgICAgbGV0IHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgbGV0IGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgxMCAtIGJvYXQuaHBzKSk7XG4gICAgICAvLyBQbGFjZSBzaGlwIGhvcml6b250YWxseSwgc3dpdGNoIHN0YXRlbWVudCB3aWxsIGRldGVjdCBpZiBhIG5ldyBzaGlwIHBsYWNlbWVudCBvdmVybGFwcyBhbiBhbHJlYWR5IHBsYWNlZCBzaGlwXG4gICAgICBzd2l0Y2ggKGJvYXQuaHBzKSB7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB3aGlsZSAoYm9hcmQuZ3JpZFtyb3ddW2NvbF0uc2hpcCB8fCBib2FyZC5ncmlkW3Jvd11bY29sICsgMV0uc2hpcCkge1xuICAgICAgICAgICAgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgICBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBib2F0LmhwcykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2xdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2wgKyAxXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sICsgMl0uc2hpcFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgICBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBib2F0LmhwcykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2xdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2wgKyAxXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sICsgMl0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbCArIDNdLnNoaXBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICAgICAgY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDEwIC0gYm9hdC5ocHMpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sICsgMV0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbCArIDJdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2wgKyAzXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sICsgNF0uc2hpcFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgICBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBib2F0LmhwcykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGJvYXJkLm5ld1NoaXAocm93LCBjb2wsIGJvYXQuaHBzLCBib2F0Lm5hbWUsIFwieFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gPC0tIHZlcnRpY2FsXG4gICAgICBsZXQgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDEwIC0gYm9hdC5ocHMpKTtcbiAgICAgIGxldCBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgIC8vIFBsYWNlIHNoaXAgdmVydGljYWxseSwgc3dpdGNoIHN0YXRlbWVudCB3aWxsIGRldGVjdCBpZiBhIG5ldyBzaGlwIHBsYWNlbWVudCBvdmVybGFwcyBhbiBhbHJlYWR5IHBsYWNlZCBzaGlwXG4gICAgICBzd2l0Y2ggKGJvYXQuaHBzKSB7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB3aGlsZSAoYm9hcmQuZ3JpZFtyb3ddW2NvbF0uc2hpcCB8fCBib2FyZC5ncmlkW3JvdyArIDFdW2NvbF0uc2hpcCkge1xuICAgICAgICAgICAgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDEwIC0gYm9hdC5ocHMpKTtcbiAgICAgICAgICAgIGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2xdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93ICsgMV1bY29sXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3JvdyArIDJdW2NvbF0uc2hpcFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDEwIC0gYm9hdC5ocHMpKTtcbiAgICAgICAgICAgIGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2xdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93ICsgMV1bY29sXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3JvdyArIDJdW2NvbF0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3cgKyAzXVtjb2xdLnNoaXBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgxMCAtIGJvYXQuaHBzKSk7XG4gICAgICAgICAgICBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3JvdyArIDFdW2NvbF0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3cgKyAyXVtjb2xdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93ICsgM11bY29sXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3JvdyArIDRdW2NvbF0uc2hpcFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDEwIC0gYm9hdC5ocHMpKTtcbiAgICAgICAgICAgIGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGJvYXJkLm5ld1NoaXAocm93LCBjb2wsIGJvYXQuaHBzLCBib2F0Lm5hbWUsIFwieVwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gTmV3IEdhbWUgTWV0aG9kLiAgSW5pdGFsaXplcyBhbGwgZ2FtZSBVSSBhbmQgbG9naWMgYnkgY2FsbGluZyBtZXRob2RzIGZyb20gRE9NLmpzIGFuZCBtYWluIGdhbWUgb2JqZWN0cyBmcm9tIHRoZSBmYWN0b3JpZXMgaW4gT2JqZWN0LmpzLlxuZXhwb3J0IGNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkMSA9IG9iamVjdHMuZ2FtZWJvYXJkKDEwKTtcbiAgY29uc3QgYm9hcmQyID0gb2JqZWN0cy5nYW1lYm9hcmQoMTApO1xuXG4gIGNvbnN0IHBsYXllcjEgPSBvYmplY3RzLnBsYXllcihib2FyZDEpO1xuICBjb25zdCBwbGF5ZXIyID0gb2JqZWN0cy5wbGF5ZXIoYm9hcmQyKTtcblxuICBjcmVhdGVGbGVldChib2FyZDEpO1xuICBjcmVhdGVGbGVldChib2FyZDIpO1xuXG4gIERPTS5jcmVhdGVNYWluRGlzcGxheShwbGF5ZXIxLCBwbGF5ZXIyLCBib2FyZDEsIGJvYXJkMik7XG59O1xuXG4vLyBBSSBhdHRhY2sgZnVuY3Rpb24uICBDYWxscyBhdHRhY2sgbWV0aG9kIGZyb20gdGhlIHBsYXllciBvYmplY3QsIHJldHVybnMgdGhlIHJvdyBhbmQgY29sIHZhbHVlcyB0YXJnZXRlZCBpbiBhbiBhcnJheVxuZXhwb3J0IGNvbnN0IEFJQXR0YWNrVHVybiA9IChwbGF5ZXIsIGFpKSA9PiB7XG4gIGxldCByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgbGV0IGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuXG4gIHdoaWxlIChwbGF5ZXIuZ3JpZFtyb3ddW2NvbF0uYXR0YWNrZWQpIHtcbiAgICByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgfVxuICBsZXQgbXNnID0gYWkuYXR0YWNrKHBsYXllciwgcm93LCBjb2wpO1xuICByZXR1cm4ge1xuICAgIHJvdzogcm93LFxuICAgIGNvbDogY29sLFxuICAgIG1zZzogbXNnLFxuICB9O1xufTtcbiIsIlxuLy8gc2hpcCBmYWN0b3J5IGZ1bmN0aW9uLCB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIHNoaXAgb2JqZWN0cyB0byBiZSB1c2VkIG9uIHRoZSBnYW1lYm9hcmQuICAyIHB1YmxpYyBtZXRob2RzIHRvIGJlIHVzZWQgYnkgZ2FtZWJvYXJkXG5leHBvcnQgY29uc3Qgc2hpcCA9IChpbnB1dCwgbmFtZSkgPT4ge1xuICAgIGxldCBocHMgPSBpbnB1dCxcbiAgICAgICAgZG1nID0gMFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaHBzLFxuICAgICAgICBuYW1lLFxuICAgICAgICBoaXQoKSB7XG4gICAgICAgICAgICBkbWcrK1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhwcyA8PSBkbWcgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG4vLyBnYW1lYm9hcmQgZmFjdG9yeSBmdW5jdGlvbiwgd2lsbCBjcmVhdGUgYSBzcXVhcmUgZ3JpZCBvZiBvYmplY3RzIGJhc2VkIG9uIHBhcmFtZXRlciBkaW0uICBFYWNoIHNxdWFyZSBvYmplY3Qgb2YgdGhlIGdyaWQgd2lsbCBpbml0YWlsbHkgaGF2ZSBubyBwcm9wZXJ0aWVzIGJ1dCBwcm9wZXJ0aWVzIHdpbGwgYmUgYWRkZWQgZGVwZW5kaW5nXG4vLyBvbiBnYW1lc3RhdGUuICBFeGFtcGxlLCBpZiBhIHNoaXAgaXMgcGxhY2VkIGluIHRoZSBzcXVhcmUsIFwic2hpcFwiIHdpbGwgYmUgYWRkZWQuICBPciBpZiBhIHNxdWFyZSBpcyBoaXQsIFwiaGl0XCIgcHJvcGVydHkgd2lsbCBiZSBhZGRlZFxuZXhwb3J0IGNvbnN0IGdhbWVib2FyZCA9IChkaW0pID0+IHtcbiAgICBcbiAgICAvLyBidWlsZCBnYW1lYm9hcmQgZ3JpZFxuICAgIGNvbnN0IGdyaWQgPSBbXVxuICAgIGZvciAobGV0IGEgPSAwOyBhIDwgZGltOyBhKyspIHtcbiAgICAgICAgbGV0IHJvdyA9IFtdXG4gICAgICAgIGdyaWQucHVzaChyb3cpXG4gICAgICAgIGZvciAobGV0IGIgPSAwOyBiIDwgZGltOyBiKyspIHtcbiAgICAgICAgICAgIHJvdy5wdXNoKHt9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdmFyaWFibGVzIHRvIHJlY29yZCBudW1iZXIgb2YgaGl0cyBhbmQgbWlzc2VzIGFzIHdlbGwgYXMga2VlcCB0cmFjayBvZiB0b3RhbCBzaGlwIGhpdHBvaW50cyBvbiBnYW1lYm9hcmRcbiAgICBsZXQgbWlzc2VzID0gMCxcbiAgICAgICAgaGl0cyA9IDAsXG4gICAgICAgIHRvdGFsaHBzID0gMFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ3JpZCxcbiAgICAgICAgbWlzc2VzLFxuICAgICAgICBoaXRzLFxuICAgICAgICB0b3RhbGhwcyxcbiAgICAgICAgLy8gcGxhY2VzIGEgbmV3IHNoaXAoKSBvYmplY3Qgb24gdGhlIGdyaWQgdXNpbmcgdGhlIHByb3ZpZGVkIHJvdyBhbmQgY29sIHBhcmFtZXRlcnMgYXMgdGhlIHN0YXJ0IHBvc3Rpb24uICBocHMgZGV0ZXJtaW5lcyB0aGUgdHlwZSBvZiBzaGlwIHBsYWNlZCBhbmQgZGVmYXVsdHNcbiAgICAgICAgLy8gdGhlIHBhbGNlbWVudCBhbG9uZyB0aGUgeC1heGlzXG4gICAgICAgIG5ld1NoaXAocm93LCBjb2wsIGhwcywgbmFtZSwgYXhpcyA9ICd4Jykge1xuICAgICAgICAgICAgY29uc3Qgc2hpcDEgPSBzaGlwKGhwcywgbmFtZSlcbiAgICAgICAgICAgIHRoaXMudG90YWxocHMgKz0gaHBzXG5cbiAgICAgICAgICAgIGlmIChheGlzID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHNoaXAxLmhwczsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWRbcm93XVtjb2wgKyBhXVxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IHNoaXAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHNoaXAxLmhwczsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWRbcm93ICsgYV1bY29sXVxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IHNoaXAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNoaXAxXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGF0dGFjayBtZXRob2QsIGNhbGxlZCB3aGVuIGEgc3F1YXJlIG9uIHRoZSBncmlkIGlzIGNob3NlbiBmb3IgYW4gYXR0YWNrLiAgSWYgbm8gc2hpcCBvY2N1cGllcyB0aGUgc3BhY2UsIHJldHVybnMgYSBcIm1pc3NlZFwiIHN0cmluZyB3aGlsZSBhbHNvIGFsb3MgYXNzaWduaW5nIGFuIGF0dGFja2VkXG4gICAgICAgIC8vIHByb3BlcnR5IHRvIHRoYXQgc3F1YXJlIG9iamVjdC4gIElmIGEgc2hpcCBpcyBmb3VuZCwgY2FsbCB0aGUgaGl0KCkgb24gdGhhdCBzaGlwIGFzIHdlbGwgYXMgYXNzaWduZWQgYW4gYXR0YWNrZWQgcHJvcGVydHkgdG8gdGhhdCBzcXVhcmUgd2hpbGUgcmV0dXJuaW5nIGEgXCJoaXRcIiBzdHJpbmdcbiAgICAgICAgcmVjaWV2ZUF0dGFjayhyb3csIGNvbCkge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gdGhpcy5ncmlkW3Jvd11bY29sXVxuICAgICAgICAgICAgaWYgKHNxdWFyZS5hdHRhY2tlZCkgcmV0dXJuIFwiVGFyZ2V0IGFscmVhZHkgYmVlbiBmaXJlZCBvbiwgc2VsZWN0IG5ldyB0YXJnZXQuLi5cIlxuICAgICAgICAgICAgZWxzZSBpZiAoc3F1YXJlLnNoaXApIHtcbiAgICAgICAgICAgICAgICBzcXVhcmUuYXR0YWNrZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAuaGl0KClcbiAgICAgICAgICAgICAgICB0aGlzLmhpdHMrK1xuICAgICAgICAgICAgICAgIGlmIChzcXVhcmUuc2hpcC5pc1N1bmsoKSkgcmV0dXJuIGBEaXJlY3QgSGl0IC0gJHtzcXVhcmUuc2hpcC5uYW1lfSBEZXN0cm95ZWQhYFxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIFwiRGlyZWN0IEhpdCFcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmF0dGFja2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMubWlzc2VzKytcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJUYXJnZXQgTWlzcy4uLlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIG1ldGhvZCB0byBkZXRlcm1pbmUgaWYgYWxsIHNoaXBzIG9uIGdyaWQgaGF2ZSBiZWVuIHN1bmssIHJlc3VsdGluZyBpbiBhIGdhbWUgZW5kXG4gICAgICAgIGFsbFN1bmsoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b3RhbGhwcyA9PT0gdGhpcy5oaXRzID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHBsYXllciBmYWN0b3J5IGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIGdhbWVib2FyZCBvYmplY3QgYXMgYSBwYXJhbWV0ZXIuICBUaGlzIGVmZmVjdGl2ZWx5IGFzaWducyB0aGUgZ2FtZWJhb3JkIHRvIHRoZSBwbGF5ZXIgYW5kIGVuYWJsZXMgbWV0aG9kcyB3aXRoaW4gdGhlIHBsYXllciBvYmplY3QgdG8gZWZmZWN0IHRoZSBnYW1lYm9hcmRcbmV4cG9ydCBjb25zdCBwbGF5ZXIgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBncmlkID0gYm9hcmQuZ3JpZFxuICAgIHJldHVybiB7XG4gICAgICAgIGdyaWQsXG4gICAgICAgIGJvYXJkLFxuICAgICAgICBhdHRhY2socGxheWVyLCByb3csIGNvbCkge1xuICAgICAgICAgICAgcmV0dXJuIHBsYXllci5ib2FyZC5yZWNpZXZlQXR0YWNrKHJvdywgY29sKVxuICAgICAgICB9LFxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCAqIGFzIGdhbWVNZXRob2RzIGZyb20gXCIuL2dhbWVcIjtcblxuY29uc3Qgdm9sdW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtcDNcIik7XG5jb25zdCBuZXdHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctZ2FtZVwiKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXR0bGVzaGlwXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5sZXQgYXVkaW8gPSBuZXcgQXVkaW8oXCJCYXR0bGVmaWVsZCAxOTQyLm1wM1wiKTsgIC8vIEVBJ3MgQmF0dGxlZmllbGQgMTk0MiBNYWluIFRoZW1lLiAgRG93bmxvYWRlZCBmcm9tIGFyY2hpdmUub3JnXG5hdWRpby5wbGF5KCk7XG5hdWRpby5sb29wID0gdHJ1ZTtcblxudm9sdW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChhdWRpby5tdXRlZCA9PT0gZmFsc2UpIHtcbiAgICBhdWRpby5tdXRlZCA9IHRydWU7XG4gICAgdm9sdW1lLnNyYyA9IFwiaW1hZ2VzL211dGUucG5nXCI7XG4gIH0gZWxzZSB7XG4gICAgYXVkaW8ubXV0ZWQgPSBmYWxzZTtcbiAgICB2b2x1bWUuc3JjID0gXCJpbWFnZXMvdm9sdW1lLnBuZ1wiO1xuICB9XG59KTtcblxubmV3R2FtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBuZXdHYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgdGl0bGUuc3R5bGUudG9wID0gXCIyJVwiO1xuICBnYW1lTWV0aG9kcy5uZXdHYW1lKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==