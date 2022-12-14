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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    margin: 0;\n}\n@font-face {\n    font-family: Machine;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    position: relative;\n}\n\n#battleship {\n    width: 100%;\n    height: 150px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 9rem;\n    font-family: Machine, san-serif;\n    background: linear-gradient(rgba(225,225,225), rgb(78, 78, 78), rgba(225,225,225));\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    position: absolute;\n    top: 45%;\n    transition: top ease-in-out 1s;\n}\n\n#mp3 {\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 1rem;\n}\n\n#new-game {\n    position: absolute;\n    top: 60%;\n}\n\n.screen-display {\n    width: 100%;\n    background-color: antiquewhite;\n    margin: 160px 0;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.grid-square {\n    width: 50px;\n    height: 50px;\n    background-color: white;\n    border:solid black 1px;\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 1fr);\n    padding: 5rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,oBAAoB;IACpB,4CAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,+BAA+B;IAC/B,kFAAkF;IAClF,qBAAqB;IACrB,oCAAoC;IACpC,kBAAkB;IAClB,QAAQ;IACR,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,8BAA8B;IAC9B,eAAe;IACf,aAAa;IACb,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,mCAAmC;IACnC,aAAa;AACjB","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n}\n@font-face {\n    font-family: Machine;\n    src: url(MachineStd.otf);\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    position: relative;\n}\n\n#battleship {\n    width: 100%;\n    height: 150px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 9rem;\n    font-family: Machine, san-serif;\n    background: linear-gradient(rgba(225,225,225), rgb(78, 78, 78), rgba(225,225,225));\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    position: absolute;\n    top: 45%;\n    transition: top ease-in-out 1s;\n}\n\n#mp3 {\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 1rem;\n}\n\n#new-game {\n    position: absolute;\n    top: 60%;\n}\n\n.screen-display {\n    width: 100%;\n    background-color: antiquewhite;\n    margin: 160px 0;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.grid-square {\n    width: 50px;\n    height: 50px;\n    background-color: white;\n    border:solid black 1px;\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 1fr);\n    padding: 5rem;\n}"],"sourceRoot":""}]);
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


const body = document.querySelector("body");

// CreateMainDisplay is called when a new game is started.  Creates DOM elements that represent the player boards (grids) and assigns listener events to each of the grids squares, depending on the player.
const createMainDisplay = (player1, player2, board1, board2) => {
  const display = document.createElement("div");
  body.appendChild(display);
  display.classList.add("screen-display");

  // Grid 1 / player 1.  Grid created will highlight squares where the ships are located
  const DOMgrid1 = document.createElement("div");
  DOMgrid1.classList.add("grid");
  display.appendChild(DOMgrid1);

  for (let row = 0; row < board1.grid.length; row++) {
    for (let col = 0; col < board1.grid[row].length; col++) {
      let square = document.createElement("div");
      square.classList.add("grid-square");
      square.id = `${row}by${col}`  // IMPORTANT - ID is used to target squares that the AI attacked.  Square color will be updated depending on attack outcome
      DOMgrid1.appendChild(square);
      if (board1.grid[row][col].ship) {
        square.style.backgroundColor = "orange";
      }
      square.addEventListener("click", () => {  // This Event listener will be used once custom ship placement is implemented
        console.log(board1.grid[row][col]);
      });
    }
  }

  // Grid 2 / Player 2.  Grid created will have squares that contain listener events to recieve attacks from player 1.  Ships will NOT be revealed and squares will have color indicators to indicate hits or misses.
  const DOMgrid2 = document.createElement("div");
  DOMgrid2.classList.add("grid");
  display.appendChild(DOMgrid2);

  for (let row = 0; row < board2.grid.length; row++) {
    for (let col = 0; col < board2.grid[row].length; col++) {
      let square = document.createElement("div");
      square.classList.add("grid-square");
      DOMgrid2.appendChild(square);

      // This particular event listener fucntions as the game loop, once the player selects a target square to attack, the AI then attacks in turn (AIAttackTurn method called from game.js)
      square.addEventListener("click", () => {
        console.log(row, col);
        let x = player1.attack(player2, row, col)
        if (x === "Torpedo miss...") {
          square.style.backgroundColor = "cyan";
          console.log("player", x)
        } else {
          square.style.backgroundColor = "red";
          console.log("player", x)
        }
        // AI attack turn.  Once the attack completes, player grid UI will update to represent the AI's attack target
        let attackCoor = (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.AIAttackTurn)(player1, player2);
        let target = document.getElementById(`${attackCoor[0]}by${attackCoor[1]}`)
        if (player1.grid[attackCoor[0]][attackCoor[1]].ship) {
          target.style.backgroundColor = "red"
        } else {
          target.style.backgroundColor = "cyan"
        }      
      });
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
  const fleetHps = [2, 3, 3, 4, 5]; // fleet array.  Standard Battleship game has 5 ships with the following hps values: 2, 3, 3, 4, 5.
  fleetHps.forEach((hps) => {
    let dir = Math.random() * 100; // Random number generator to determine whether the ship is placed vertically or horizontally
    if (dir >= 50) {
      let row = Math.round(Math.random() * 9);
      let col = Math.round(Math.random() * (10 - hps));
      switch (hps) {
        case 2:
          while (board.grid[row][col].ship || board.grid[row][col + 1].ship) {
            row = Math.round(Math.random() * 9);
            col = Math.round(Math.random() * (10 - hps));
          }
          break;
        case 3:
          while (
            board.grid[row][col].ship ||
            board.grid[row][col + 1].ship ||
            board.grid[row][col + 2].ship
          ) {
            row = Math.round(Math.random() * 9);
            col = Math.round(Math.random() * (10 - hps));
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
            col = Math.round(Math.random() * (10 - hps));
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
            col = Math.round(Math.random() * (10 - hps));
          }
          break;
      }
      console.log(row, col, dir);
      board.newShip(row, col, hps, "x");
    } else {
      let row = Math.round(Math.random() * (10 - hps));
      let col = Math.round(Math.random() * 9);
      switch (hps) {
        case 2:
          while (board.grid[row][col].ship || board.grid[row + 1][col].ship) {
            row = Math.round(Math.random() * (10 - hps));
            col = Math.round(Math.random() * 9);
          }
          break;
        case 3:
          while (
            board.grid[row][col].ship ||
            board.grid[row + 1][col].ship ||
            board.grid[row + 2][col].ship
          ) {
            row = Math.round(Math.random() * (10 - hps));
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
            row = Math.round(Math.random() * (10 - hps));
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
            row = Math.round(Math.random() * (10 - hps));
            col = Math.round(Math.random() * 9);
          }
          break;
      }
      console.log(row, col, dir);
      board.newShip(row, col, hps, "y");
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

    _DOM_js__WEBPACK_IMPORTED_MODULE_1__.createMainDisplay(player1, player2, board1, board2)

}

const AIAttackTurn = (player, ai) => {
    let row = Math.round(Math.random() * 9)
    let col = Math.round(Math.random() * 9)

    while(player.grid[row][col].attacked) {
        row = Math.round(Math.random() * 9)
        col = Math.round(Math.random() * 9)
    }
    let x = ai.attack(player, row, col)
    console.log("ai", x)
    return [row,col]
}

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
const ship = (input) => {
    let hps = input,
        dmg = 0

    return {
        hps,
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
        newShip(row, col, hps, axis = 'x') {
            const ship1 = ship(hps)
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
            if (square.attacked) return "Location has already been attacked..."
            else if (square.ship) {
                square.attacked = true
                square.ship.hit()
                this.hits++
                return "Direct hit!"
            }
            else {
                square.attacked = true
                this.misses++
                return "Torpedo miss..."
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
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects.js */ "./src/objects.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");




const volume = document.querySelector("#mp3");
const newGame = document.querySelector("#new-game");
const title = document.querySelector("#battleship");
const body = document.querySelector("body");

let audio = new Audio("Battlefield 1942.mp3");
audio.play();
audio.loop = true;

volume.addEventListener("click", () => {
  if (audio.muted === false) {
    audio.muted = true;
    volume.src = "mute.png";
  } else {
    audio.muted = false;
    volume.src = "volume.png";
  }
});

newGame.addEventListener("click", () => {
  newGame.style.display = "none";
  title.style.top = "2%";
  _game__WEBPACK_IMPORTED_MODULE_2__.newGame();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvb2JqZWN0cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIk1hY2hpbmVTdGQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBNYWNoaW5lO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNiYXR0bGVzaGlwIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDlyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBNYWNoaW5lLCBzYW4tc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDIyNSwyMjUsMjI1KSwgcmdiKDc4LCA3OCwgNzgpLCByZ2JhKDIyNSwyMjUsMjI1KSk7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDUlO1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgZWFzZS1pbi1vdXQgMXM7XFxufVxcblxcbiNtcDMge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuI25ldy1nYW1lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDYwJTtcXG59XFxuXFxuLnNjcmVlbi1kaXNwbGF5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgbWFyZ2luOiAxNjBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ3JpZC1zcXVhcmUge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOnNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuLmdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBwYWRkaW5nOiA1cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLCtCQUErQjtJQUMvQixrRkFBa0Y7SUFDbEYscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsbUNBQW1DO0lBQ25DLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBNYWNoaW5lO1xcbiAgICBzcmM6IHVybChNYWNoaW5lU3RkLm90Zik7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNiYXR0bGVzaGlwIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDlyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBNYWNoaW5lLCBzYW4tc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDIyNSwyMjUsMjI1KSwgcmdiKDc4LCA3OCwgNzgpLCByZ2JhKDIyNSwyMjUsMjI1KSk7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDUlO1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgZWFzZS1pbi1vdXQgMXM7XFxufVxcblxcbiNtcDMge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuI25ldy1nYW1lIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDYwJTtcXG59XFxuXFxuLnNjcmVlbi1kaXNwbGF5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgbWFyZ2luOiAxNjBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZ3JpZC1zcXVhcmUge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOnNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuLmdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBwYWRkaW5nOiA1cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQUlBdHRhY2tUdXJuIH0gZnJvbSBcIi4vZ2FtZS5qc1wiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbi8vIENyZWF0ZU1haW5EaXNwbGF5IGlzIGNhbGxlZCB3aGVuIGEgbmV3IGdhbWUgaXMgc3RhcnRlZC4gIENyZWF0ZXMgRE9NIGVsZW1lbnRzIHRoYXQgcmVwcmVzZW50IHRoZSBwbGF5ZXIgYm9hcmRzIChncmlkcykgYW5kIGFzc2lnbnMgbGlzdGVuZXIgZXZlbnRzIHRvIGVhY2ggb2YgdGhlIGdyaWRzIHNxdWFyZXMsIGRlcGVuZGluZyBvbiB0aGUgcGxheWVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1haW5EaXNwbGF5ID0gKHBsYXllcjEsIHBsYXllcjIsIGJvYXJkMSwgYm9hcmQyKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGRpc3BsYXkpO1xuICBkaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJzY3JlZW4tZGlzcGxheVwiKTtcblxuICAvLyBHcmlkIDEgLyBwbGF5ZXIgMS4gIEdyaWQgY3JlYXRlZCB3aWxsIGhpZ2hsaWdodCBzcXVhcmVzIHdoZXJlIHRoZSBzaGlwcyBhcmUgbG9jYXRlZFxuICBjb25zdCBET01ncmlkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIERPTWdyaWQxLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICBkaXNwbGF5LmFwcGVuZENoaWxkKERPTWdyaWQxKTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBib2FyZDEuZ3JpZC5sZW5ndGg7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgYm9hcmQxLmdyaWRbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1zcXVhcmVcIik7XG4gICAgICBzcXVhcmUuaWQgPSBgJHtyb3d9Ynkke2NvbH1gICAvLyBJTVBPUlRBTlQgLSBJRCBpcyB1c2VkIHRvIHRhcmdldCBzcXVhcmVzIHRoYXQgdGhlIEFJIGF0dGFja2VkLiAgU3F1YXJlIGNvbG9yIHdpbGwgYmUgdXBkYXRlZCBkZXBlbmRpbmcgb24gYXR0YWNrIG91dGNvbWVcbiAgICAgIERPTWdyaWQxLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICBpZiAoYm9hcmQxLmdyaWRbcm93XVtjb2xdLnNoaXApIHtcbiAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICB9XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgIC8vIFRoaXMgRXZlbnQgbGlzdGVuZXIgd2lsbCBiZSB1c2VkIG9uY2UgY3VzdG9tIHNoaXAgcGxhY2VtZW50IGlzIGltcGxlbWVudGVkXG4gICAgICAgIGNvbnNvbGUubG9nKGJvYXJkMS5ncmlkW3Jvd11bY29sXSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBHcmlkIDIgLyBQbGF5ZXIgMi4gIEdyaWQgY3JlYXRlZCB3aWxsIGhhdmUgc3F1YXJlcyB0aGF0IGNvbnRhaW4gbGlzdGVuZXIgZXZlbnRzIHRvIHJlY2lldmUgYXR0YWNrcyBmcm9tIHBsYXllciAxLiAgU2hpcHMgd2lsbCBOT1QgYmUgcmV2ZWFsZWQgYW5kIHNxdWFyZXMgd2lsbCBoYXZlIGNvbG9yIGluZGljYXRvcnMgdG8gaW5kaWNhdGUgaGl0cyBvciBtaXNzZXMuXG4gIGNvbnN0IERPTWdyaWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgRE9NZ3JpZDIuY2xhc3NMaXN0LmFkZChcImdyaWRcIik7XG4gIGRpc3BsYXkuYXBwZW5kQ2hpbGQoRE9NZ3JpZDIpO1xuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkMi5ncmlkLmxlbmd0aDsgcm93KyspIHtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBib2FyZDIuZ3JpZFtyb3ddLmxlbmd0aDsgY29sKyspIHtcbiAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJncmlkLXNxdWFyZVwiKTtcbiAgICAgIERPTWdyaWQyLmFwcGVuZENoaWxkKHNxdWFyZSk7XG5cbiAgICAgIC8vIFRoaXMgcGFydGljdWxhciBldmVudCBsaXN0ZW5lciBmdWNudGlvbnMgYXMgdGhlIGdhbWUgbG9vcCwgb25jZSB0aGUgcGxheWVyIHNlbGVjdHMgYSB0YXJnZXQgc3F1YXJlIHRvIGF0dGFjaywgdGhlIEFJIHRoZW4gYXR0YWNrcyBpbiB0dXJuIChBSUF0dGFja1R1cm4gbWV0aG9kIGNhbGxlZCBmcm9tIGdhbWUuanMpXG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocm93LCBjb2wpO1xuICAgICAgICBsZXQgeCA9IHBsYXllcjEuYXR0YWNrKHBsYXllcjIsIHJvdywgY29sKVxuICAgICAgICBpZiAoeCA9PT0gXCJUb3JwZWRvIG1pc3MuLi5cIikge1xuICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImN5YW5cIjtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllclwiLCB4KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyXCIsIHgpXG4gICAgICAgIH1cbiAgICAgICAgLy8gQUkgYXR0YWNrIHR1cm4uICBPbmNlIHRoZSBhdHRhY2sgY29tcGxldGVzLCBwbGF5ZXIgZ3JpZCBVSSB3aWxsIHVwZGF0ZSB0byByZXByZXNlbnQgdGhlIEFJJ3MgYXR0YWNrIHRhcmdldFxuICAgICAgICBsZXQgYXR0YWNrQ29vciA9IEFJQXR0YWNrVHVybihwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgICAgICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2F0dGFja0Nvb3JbMF19Ynkke2F0dGFja0Nvb3JbMV19YClcbiAgICAgICAgaWYgKHBsYXllcjEuZ3JpZFthdHRhY2tDb29yWzBdXVthdHRhY2tDb29yWzFdXS5zaGlwKSB7XG4gICAgICAgICAgdGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjeWFuXCJcbiAgICAgICAgfSAgICAgIFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0ICogYXMgb2JqZWN0cyBmcm9tIFwiLi9vYmplY3RzLmpzXCI7XG5pbXBvcnQgKiBhcyBET00gZnJvbSBcIi4vRE9NLmpzXCJcblxuLy8gY3JlYXRlRmxlZXQgd2lsbCBjcmVhdGUgYSBmbGVldCBvZiBzaGlwcyBhbmQgcGxhY2UgdGhlbSByYW5kb21seSBvbiB0aGUgcGFzc2VkIGdhbWVib2FyZCBwYXJhbWV0ZXIuICBUaGUgbG9naWMgZW5zdXJlcyB0aGF0IHRoZSBzaGlwcyBkbyBub3Qgb3ZlcmxhcCBhbmQgYWxzbyByYW5kb21pemVzIHdoZXRoZXIgdGhlIHNoaXBzIGFyZSBwbGFjZWRcbi8vIGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5XG5leHBvcnQgY29uc3QgY3JlYXRlRmxlZXQgPSAoYm9hcmQpID0+IHtcbiAgY29uc3QgZmxlZXRIcHMgPSBbMiwgMywgMywgNCwgNV07IC8vIGZsZWV0IGFycmF5LiAgU3RhbmRhcmQgQmF0dGxlc2hpcCBnYW1lIGhhcyA1IHNoaXBzIHdpdGggdGhlIGZvbGxvd2luZyBocHMgdmFsdWVzOiAyLCAzLCAzLCA0LCA1LlxuICBmbGVldEhwcy5mb3JFYWNoKChocHMpID0+IHtcbiAgICBsZXQgZGlyID0gTWF0aC5yYW5kb20oKSAqIDEwMDsgLy8gUmFuZG9tIG51bWJlciBnZW5lcmF0b3IgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHNoaXAgaXMgcGxhY2VkIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5XG4gICAgaWYgKGRpciA+PSA1MCkge1xuICAgICAgbGV0IHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgbGV0IGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgxMCAtIGhwcykpO1xuICAgICAgc3dpdGNoIChocHMpIHtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHdoaWxlIChib2FyZC5ncmlkW3Jvd11bY29sXS5zaGlwIHx8IGJvYXJkLmdyaWRbcm93XVtjb2wgKyAxXS5zaGlwKSB7XG4gICAgICAgICAgICByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICAgIGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgxMCAtIGhwcykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2xdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2wgKyAxXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sICsgMl0uc2hpcFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgICBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBocHMpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sICsgMV0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbCArIDJdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2wgKyAzXS5zaGlwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICAgIGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgxMCAtIGhwcykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2xdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2wgKyAxXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sICsgMl0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbCArIDNdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2wgKyA0XS5zaGlwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICAgIGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgxMCAtIGhwcykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHJvdywgY29sLCBkaXIpO1xuICAgICAgYm9hcmQubmV3U2hpcChyb3csIGNvbCwgaHBzLCBcInhcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBocHMpKTtcbiAgICAgIGxldCBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgIHN3aXRjaCAoaHBzKSB7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB3aGlsZSAoYm9hcmQuZ3JpZFtyb3ddW2NvbF0uc2hpcCB8fCBib2FyZC5ncmlkW3JvdyArIDFdW2NvbF0uc2hpcCkge1xuICAgICAgICAgICAgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDEwIC0gaHBzKSk7XG4gICAgICAgICAgICBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3JvdyArIDFdW2NvbF0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3cgKyAyXVtjb2xdLnNoaXBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgxMCAtIGhwcykpO1xuICAgICAgICAgICAgY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbF0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3cgKyAxXVtjb2xdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93ICsgMl1bY29sXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3JvdyArIDNdW2NvbF0uc2hpcFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDEwIC0gaHBzKSk7XG4gICAgICAgICAgICBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3JvdyArIDFdW2NvbF0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3cgKyAyXVtjb2xdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93ICsgM11bY29sXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3JvdyArIDRdW2NvbF0uc2hpcFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDEwIC0gaHBzKSk7XG4gICAgICAgICAgICBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhyb3csIGNvbCwgZGlyKTtcbiAgICAgIGJvYXJkLm5ld1NoaXAocm93LCBjb2wsIGhwcywgXCJ5XCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBOZXcgR2FtZSBNZXRob2QuICBJbml0YWxpemVzIGFsbCBnYW1lIFVJIGFuZCBsb2dpYyBieSBjYWxsaW5nIG1ldGhvZHMgZnJvbSBET00uanMgYW5kIG1haW4gZ2FtZSBvYmplY3RzIGZyb20gdGhlIGZhY3RvcmllcyBpbiBPYmplY3QuanMuXG5leHBvcnQgY29uc3QgbmV3R2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZDEgPSBvYmplY3RzLmdhbWVib2FyZCgxMCk7XG4gICAgY29uc3QgYm9hcmQyID0gb2JqZWN0cy5nYW1lYm9hcmQoMTApO1xuICBcbiAgICBjb25zdCBwbGF5ZXIxID0gb2JqZWN0cy5wbGF5ZXIoYm9hcmQxKTtcbiAgICBjb25zdCBwbGF5ZXIyID0gb2JqZWN0cy5wbGF5ZXIoYm9hcmQyKTtcbiAgXG4gICAgY3JlYXRlRmxlZXQoYm9hcmQxKTtcbiAgICBjcmVhdGVGbGVldChib2FyZDIpO1xuXG4gICAgRE9NLmNyZWF0ZU1haW5EaXNwbGF5KHBsYXllcjEsIHBsYXllcjIsIGJvYXJkMSwgYm9hcmQyKVxuXG59XG5cbmV4cG9ydCBjb25zdCBBSUF0dGFja1R1cm4gPSAocGxheWVyLCBhaSkgPT4ge1xuICAgIGxldCByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KVxuICAgIGxldCBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KVxuXG4gICAgd2hpbGUocGxheWVyLmdyaWRbcm93XVtjb2xdLmF0dGFja2VkKSB7XG4gICAgICAgIHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpXG4gICAgICAgIGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpXG4gICAgfVxuICAgIGxldCB4ID0gYWkuYXR0YWNrKHBsYXllciwgcm93LCBjb2wpXG4gICAgY29uc29sZS5sb2coXCJhaVwiLCB4KVxuICAgIHJldHVybiBbcm93LGNvbF1cbn0iLCJcbi8vIHNoaXAgZmFjdG9yeSBmdW5jdGlvbiwgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSBzaGlwIG9iamVjdHMgdG8gYmUgdXNlZCBvbiB0aGUgZ2FtZWJvYXJkLiAgMiBwdWJsaWMgbWV0aG9kcyB0byBiZSB1c2VkIGJ5IGdhbWVib2FyZFxuZXhwb3J0IGNvbnN0IHNoaXAgPSAoaW5wdXQpID0+IHtcbiAgICBsZXQgaHBzID0gaW5wdXQsXG4gICAgICAgIGRtZyA9IDBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhwcyxcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgZG1nKytcbiAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIHJldHVybiBocHMgPD0gZG1nID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuLy8gZ2FtZWJvYXJkIGZhY3RvcnkgZnVuY3Rpb24sIHdpbGwgY3JlYXRlIGEgc3F1YXJlIGdyaWQgb2Ygb2JqZWN0cyBiYXNlZCBvbiBwYXJhbWV0ZXIgZGltLiAgRWFjaCBzcXVhcmUgb2JqZWN0IG9mIHRoZSBncmlkIHdpbGwgaW5pdGFpbGx5IGhhdmUgbm8gcHJvcGVydGllcyBidXQgcHJvcGVydGllcyB3aWxsIGJlIGFkZGVkIGRlcGVuZGluZ1xuLy8gb24gZ2FtZXN0YXRlLiAgRXhhbXBsZSwgaWYgYSBzaGlwIGlzIHBsYWNlZCBpbiB0aGUgc3F1YXJlLCBcInNoaXBcIiB3aWxsIGJlIGFkZGVkLiAgT3IgaWYgYSBzcXVhcmUgaXMgaGl0LCBcImhpdFwiIHByb3BlcnR5IHdpbGwgYmUgYWRkZWRcbmV4cG9ydCBjb25zdCBnYW1lYm9hcmQgPSAoZGltKSA9PiB7XG4gICAgXG4gICAgLy8gYnVpbGQgZ2FtZWJvYXJkIGdyaWRcbiAgICBjb25zdCBncmlkID0gW11cbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IGRpbTsgYSsrKSB7XG4gICAgICAgIGxldCByb3cgPSBbXVxuICAgICAgICBncmlkLnB1c2gocm93KVxuICAgICAgICBmb3IgKGxldCBiID0gMDsgYiA8IGRpbTsgYisrKSB7XG4gICAgICAgICAgICByb3cucHVzaCh7fSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHZhcmlhYmxlcyB0byByZWNvcmQgbnVtYmVyIG9mIGhpdHMgYW5kIG1pc3NlcyBhcyB3ZWxsIGFzIGtlZXAgdHJhY2sgb2YgdG90YWwgc2hpcCBoaXRwb2ludHMgb24gZ2FtZWJvYXJkXG4gICAgbGV0IG1pc3NlcyA9IDAsXG4gICAgICAgIGhpdHMgPSAwLFxuICAgICAgICB0b3RhbGhwcyA9IDBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdyaWQsXG4gICAgICAgIG1pc3NlcyxcbiAgICAgICAgaGl0cyxcbiAgICAgICAgdG90YWxocHMsXG4gICAgICAgIC8vIHBsYWNlcyBhIG5ldyBzaGlwKCkgb2JqZWN0IG9uIHRoZSBncmlkIHVzaW5nIHRoZSBwcm92aWRlZCByb3cgYW5kIGNvbCBwYXJhbWV0ZXJzIGFzIHRoZSBzdGFydCBwb3N0aW9uLiAgaHBzIGRldGVybWluZXMgdGhlIHR5cGUgb2Ygc2hpcCBwbGFjZWQgYW5kIGRlZmF1bHRzXG4gICAgICAgIC8vIHRoZSBwYWxjZW1lbnQgYWxvbmcgdGhlIHgtYXhpc1xuICAgICAgICBuZXdTaGlwKHJvdywgY29sLCBocHMsIGF4aXMgPSAneCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAxID0gc2hpcChocHMpXG4gICAgICAgICAgICB0aGlzLnRvdGFsaHBzICs9IGhwc1xuXG4gICAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBzaGlwMS5ocHM7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5ncmlkW3Jvd11bY29sICsgYV1cbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBzaGlwMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBzaGlwMS5ocHM7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5ncmlkW3JvdyArIGFdW2NvbF1cbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBzaGlwMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzaGlwMVxuICAgICAgICB9LFxuICAgICAgICAvLyBhdHRhY2sgbWV0aG9kLCBjYWxsZWQgd2hlbiBhIHNxdWFyZSBvbiB0aGUgZ3JpZCBpcyBjaG9zZW4gZm9yIGFuIGF0dGFjay4gIElmIG5vIHNoaXAgb2NjdXBpZXMgdGhlIHNwYWNlLCByZXR1cm5zIGEgXCJtaXNzZWRcIiBzdHJpbmcgd2hpbGUgYWxzbyBhbG9zIGFzc2lnbmluZyBhbiBhdHRhY2tlZFxuICAgICAgICAvLyBwcm9wZXJ0eSB0byB0aGF0IHNxdWFyZSBvYmplY3QuICBJZiBhIHNoaXAgaXMgZm91bmQsIGNhbGwgdGhlIGhpdCgpIG9uIHRoYXQgc2hpcCBhcyB3ZWxsIGFzIGFzc2lnbmVkIGFuIGF0dGFja2VkIHByb3BlcnR5IHRvIHRoYXQgc3F1YXJlIHdoaWxlIHJldHVybmluZyBhIFwiaGl0XCIgc3RyaW5nXG4gICAgICAgIHJlY2lldmVBdHRhY2socm93LCBjb2wpIHtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuZ3JpZFtyb3ddW2NvbF1cbiAgICAgICAgICAgIGlmIChzcXVhcmUuYXR0YWNrZWQpIHJldHVybiBcIkxvY2F0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWQuLi5cIlxuICAgICAgICAgICAgZWxzZSBpZiAoc3F1YXJlLnNoaXApIHtcbiAgICAgICAgICAgICAgICBzcXVhcmUuYXR0YWNrZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAuaGl0KClcbiAgICAgICAgICAgICAgICB0aGlzLmhpdHMrK1xuICAgICAgICAgICAgICAgIHJldHVybiBcIkRpcmVjdCBoaXQhXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5hdHRhY2tlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLm1pc3NlcysrXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVG9ycGVkbyBtaXNzLi4uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gbWV0aG9kIHRvIGRldGVybWluZSBpZiBhbGwgc2hpcHMgb24gZ3JpZCBoYXZlIGJlZW4gc3VuaywgcmVzdWx0aW5nIGluIGEgZ2FtZSBlbmRcbiAgICAgICAgYWxsU3VuaygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvdGFsaHBzID09PSB0aGlzLmhpdHMgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gcGxheWVyIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgZ2FtZWJvYXJkIG9iamVjdCBhcyBhIHBhcmFtZXRlci4gIFRoaXMgZWZmZWN0aXZlbHkgYXNpZ25zIHRoZSBnYW1lYmFvcmQgdG8gdGhlIHBsYXllciBhbmQgZW5hYmxlcyBtZXRob2RzIHdpdGhpbiB0aGUgcGxheWVyIG9iamVjdCB0byBlZmZlY3QgdGhlIGdhbWVib2FyZFxuZXhwb3J0IGNvbnN0IHBsYXllciA9IChib2FyZCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBib2FyZC5ncmlkXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ3JpZCxcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIGF0dGFjayhwbGF5ZXIsIHJvdywgY29sKSB7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyLmJvYXJkLnJlY2lldmVBdHRhY2socm93LCBjb2wpXG4gICAgICAgIH0sXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0ICogYXMgb2JqZWN0cyBmcm9tIFwiLi9vYmplY3RzLmpzXCI7XG5pbXBvcnQgKiBhcyBnYW1lTWV0aG9kcyBmcm9tIFwiLi9nYW1lXCI7XG5cbmNvbnN0IHZvbHVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXAzXCIpO1xuY29uc3QgbmV3R2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWdhbWVcIik7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmF0dGxlc2hpcFwiKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxubGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiQmF0dGxlZmllbGQgMTk0Mi5tcDNcIik7XG5hdWRpby5wbGF5KCk7XG5hdWRpby5sb29wID0gdHJ1ZTtcblxudm9sdW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChhdWRpby5tdXRlZCA9PT0gZmFsc2UpIHtcbiAgICBhdWRpby5tdXRlZCA9IHRydWU7XG4gICAgdm9sdW1lLnNyYyA9IFwibXV0ZS5wbmdcIjtcbiAgfSBlbHNlIHtcbiAgICBhdWRpby5tdXRlZCA9IGZhbHNlO1xuICAgIHZvbHVtZS5zcmMgPSBcInZvbHVtZS5wbmdcIjtcbiAgfVxufSk7XG5cbm5ld0dhbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbmV3R2FtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHRpdGxlLnN0eWxlLnRvcCA9IFwiMiVcIjtcbiAgZ2FtZU1ldGhvZHMubmV3R2FtZSgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=