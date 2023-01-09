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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n@font-face {\n    font-family: Machine;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    position: relative;\n}\n\n#battleship {\n    width: 100%;\n    height: 150px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 9rem;\n    font-family: Machine, san-serif;\n    background: linear-gradient(rgba(225,225,225), rgb(78, 78, 78), rgba(225,225,225));\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    position: absolute;\n    top: 45%;\n    transition: top ease-in-out 1s;\n}\n\n#mp3 {\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 1rem;\n}\n\n#new-game {\n    position: absolute;\n    top: 60%;\n}\n\n.screen-display {\n    width: 100%;\n    /* background: linear-gradient(rgba(225,225,225), rgb(78, 78, 78), rgba(225,225,225)); */\n    background-color: black;\n    margin: 160px 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    transition: opacity ease-in 1s;\n}\n\n.msg-banner {\n    margin-top: 2rem;\n    margin-bottom: -3rem;\n    font-size: 2rem;\n    width: 55%;\n    padding: 1rem;\n    background-color: black;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.msg-output {\n    color: limegreen;\n}\n\n.placeholder {\n    height: 2rem;\n    width: 16px;\n    background-color: limegreen;\n}\n\n.black {\n    background-color: black;\n}\n\n.grid-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.grid-square {\n    width: 50px;\n    height: 50px;\n    background-color: black;\n    border:solid limegreen 1px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.grid-square:hover {\n    background-color: rgba(0, 255, 10, .25)\n}\n\n.peg {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    border: solid 1px black;\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 1fr);\n    padding: 5rem;\n    position: relative;\n}\n\n.grid-name {\n    position: absolute;\n    color: limegreen;\n    font-size: 2rem;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%)\n}\n\n.ship-icons {\n    width: 225px;\n    height: 75px;\n}\n\n.modal {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .45);\n    display: flex;\n    align-items: center;\n}\n\n.modal-container {\n    background-color: white;\n    width: 100%;\n    height: 150px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,oBAAoB;IACpB,4CAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,+BAA+B;IAC/B,kFAAkF;IAClF,qBAAqB;IACrB,oCAAoC;IACpC,kBAAkB;IAClB,QAAQ;IACR,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,wFAAwF;IACxF,uBAAuB;IACvB,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,oBAAoB;IACpB,eAAe;IACf,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,0BAA0B;IAC1B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,mCAAmC;IACnC,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,SAAS;IACT,SAAS;IACT;AACJ;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n@font-face {\n    font-family: Machine;\n    src: url(MachineStd.otf);\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    position: relative;\n}\n\n#battleship {\n    width: 100%;\n    height: 150px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 9rem;\n    font-family: Machine, san-serif;\n    background: linear-gradient(rgba(225,225,225), rgb(78, 78, 78), rgba(225,225,225));\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    position: absolute;\n    top: 45%;\n    transition: top ease-in-out 1s;\n}\n\n#mp3 {\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 1rem;\n}\n\n#new-game {\n    position: absolute;\n    top: 60%;\n}\n\n.screen-display {\n    width: 100%;\n    /* background: linear-gradient(rgba(225,225,225), rgb(78, 78, 78), rgba(225,225,225)); */\n    background-color: black;\n    margin: 160px 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    transition: opacity ease-in 1s;\n}\n\n.msg-banner {\n    margin-top: 2rem;\n    margin-bottom: -3rem;\n    font-size: 2rem;\n    width: 55%;\n    padding: 1rem;\n    background-color: black;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.msg-output {\n    color: limegreen;\n}\n\n.placeholder {\n    height: 2rem;\n    width: 16px;\n    background-color: limegreen;\n}\n\n.black {\n    background-color: black;\n}\n\n.grid-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.grid-square {\n    width: 50px;\n    height: 50px;\n    background-color: black;\n    border:solid limegreen 1px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.grid-square:hover {\n    background-color: rgba(0, 255, 10, .25)\n}\n\n.peg {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    border: solid 1px black;\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 1fr);\n    padding: 5rem;\n    position: relative;\n}\n\n.grid-name {\n    position: absolute;\n    color: limegreen;\n    font-size: 2rem;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%)\n}\n\n.ship-icons {\n    width: 225px;\n    height: 75px;\n}\n\n.modal {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .45);\n    display: flex;\n    align-items: center;\n}\n\n.modal-container {\n    background-color: white;\n    width: 100%;\n    height: 150px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}"],"sourceRoot":""}]);
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
  msgoutput.textContent = "Commander, enemy fleet in range. Select coordinates, fire!";
  msgoutput.classList.add("msg-output");
  msgbanner.appendChild(msgoutput);

  const placeholder = document.createElement("div");
  placeholder.classList.add("placeholder");
  msgbanner.appendChild(placeholder);
  setInterval(() => {
    placeholder.classList.toggle("black")
  }, 500)

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

  const grid1name = document.createElement('div')
  grid1name.textContent = "Allied Fleet"
  grid1name.classList.add("grid-name")
  DOMgrid1.appendChild(grid1name)

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
        } else if (msg === "Target already been fired on, select new target...") {
          msgoutput.textContent = "";
          timeout = typeWriter(msg, msgoutput);
           return;
        } else {
          addPeg(square, 2);
          msgoutput.textContent = "";
          timeout = typeWriter(`Cannon Battery Fire - ${msg}`, msgoutput);
          if (board2.allSunk()) {
            gameOver(1);
            return;
          }
        }

        
        setTimeout(() => {
          timeout.forEach((time) => clearTimeout(time))
          // AI attack turn.  Once the attack completes, player grid UI will update to represent the AI's attack target
          let attack = (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.AIAttackTurn)(player1, player2);
          // targets the square in the player's grid with the coordinate ID, then color is updated accordining to attack outcome
          let target = document.getElementById(
            `${attack.row}by${attack.col}`
          );
          if (player1.grid[attack.row][attack.col].ship) {
            addPeg(target, 2);
            msgoutput.textContent = "";
            timeout = [...timeout, typeWriter(`Enemy Incoming Fire - ${attack.msg}`, msgoutput)];
            if (board1.allSunk()) {
              gameOver(2);
            }
          } else {
            msgoutput.textContent = "";
            timeout = [...timeout, typeWriter(`Enemy Incoming Fire - ${attack.msg}`, msgoutput)];
            addPeg(target, 1);
          }
        }, 2000);
      });


    }
  }
  const grid2name = document.createElement('div')
  grid2name.textContent = "Enemy Fleet"
  grid2name.classList.add("grid-name")
  DOMgrid2.appendChild(grid2name)

  ////////////////
  const ships = document.createElement("div")
  body.appendChild(ships)

  const battleship1 = document.createElement("img")
  battleship1.classList.add("ship-icons")
  battleship1.src = _assets_battleship1_png__WEBPACK_IMPORTED_MODULE_1__

  const carrier1 = document.createElement("img")
  carrier1.classList.add("ship-icons")
  carrier1.src = _assets_carrier_png__WEBPACK_IMPORTED_MODULE_2__

  const destroyer1 = document.createElement("img")
  destroyer1.classList.add("ship-icons")
  destroyer1.src = _assets_destroyer_png__WEBPACK_IMPORTED_MODULE_3__

  const submarine1 = document.createElement("img")
  submarine1.classList.add("ship-icons")
  submarine1.src = _assets_submarine_png__WEBPACK_IMPORTED_MODULE_4__

  const patrolboat1 = document.createElement("img")
  patrolboat1.classList.add("ship-icons")
  patrolboat1.src = _assets_patrolboat_png__WEBPACK_IMPORTED_MODULE_5__

  ships.appendChild(battleship1)
  ships.appendChild(carrier1)
  ships.appendChild(destroyer1)
  ships.appendChild(submarine1)
  ships.appendChild(patrolboat1)
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
const addPeg = (gridSquare, msg) => {
  const peg = document.createElement("div");
  peg.classList.add("peg");
  gridSquare.appendChild(peg);
  if (msg === 1) peg.style.backgroundColor = "white";
  else peg.style.backgroundColor = "red";
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
/* harmony export */   "gameOver": () => (/* binding */ gameOver),
/* harmony export */   "newGame": () => (/* binding */ newGame)
/* harmony export */ });
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects.js */ "./src/objects.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");



// createFleet will create a fleet of ships and place them randomly on the passed gameboard parameter.  The logic ensures that the ships do not overlap and also randomizes whether the ships are placed
// horizontally or vertically
const createFleet = (board) => {
  const fleet = [{"hps": 2, "name": "Patrol Boat"}, {"hps": 3, "name": "Submarine"}, {"hps": 3, "name": "Destroyer"}, {"hps": 4, "name": "Battleship"}, {"hps": 5, "name": "Carrier"}]; // fleet array.  Standard Battleship game has 5 ships with the following boat.hps values: 2, 3, 3, 4, 5.
  fleet.forEach((boat) => {
    let dir = Math.random() * 100; // Random number generator to determine whether the ship is placed vertically or horizontally
    if (dir >= 50) { // <--- horizontal
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
      console.log(row, col, dir);
      board.newShip(row, col, boat.hps, boat.name, "x");
    } else {   // <-- vertical
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
      console.log(row, col, dir);
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

    _DOM_js__WEBPACK_IMPORTED_MODULE_1__.createMainDisplay(player1, player2, board1, board2)

}

// AI attack function.  Calls attack method from the player object, returns the row and col values targeted in an array
const AIAttackTurn = (player, ai) => {
    let row = Math.round(Math.random() * 9)
    let col = Math.round(Math.random() * 9)

    while(player.grid[row][col].attacked) {
        row = Math.round(Math.random() * 9)
        col = Math.round(Math.random() * 9)
    }
    let msg = ai.attack(player, row, col)
    console.log("ai", msg)
    return {
      "row": row,
      "col": col,
      "msg": msg
    }
}

// Game over function.  Detects if the game is over by calling the allSunk method from the gameboard objects.  Input paramenter is a gameboard object
const gameOver = () => {

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
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects.js */ "./src/objects.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");




const volume = document.querySelector("#mp3");
const newGame = document.querySelector("#new-game");
const title = document.querySelector("#battleship");
const body = document.querySelector("body");

let audio = new Audio("Battlefield 1942.mp3");
//audio.play();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ21CO0FBQ0Y7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMENBQW1CO0FBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL29iamVjdHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJNYWNoaW5lU3RkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogTWFjaGluZTtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jYmF0dGxlc2hpcCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA5cmVtO1xcbiAgICBmb250LWZhbWlseTogTWFjaGluZSwgc2FuLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyMjUsMjI1LDIyNSksIHJnYig3OCwgNzgsIDc4KSwgcmdiYSgyMjUsMjI1LDIyNSkpO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDQ1JTtcXG4gICAgdHJhbnNpdGlvbjogdG9wIGVhc2UtaW4tb3V0IDFzO1xcbn1cXG5cXG4jbXAzIHtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW46IDFyZW07XFxufVxcblxcbiNuZXctZ2FtZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2MCU7XFxufVxcblxcbi5zY3JlZW4tZGlzcGxheSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyMjUsMjI1LDIyNSksIHJnYig3OCwgNzgsIDc4KSwgcmdiYSgyMjUsMjI1LDIyNSkpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luOiAxNjBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluIDFzO1xcbn1cXG5cXG4ubXNnLWJhbm5lciB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC0zcmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5tc2ctb3V0cHV0IHtcXG4gICAgY29sb3I6IGxpbWVncmVlbjtcXG59XFxuXFxuLnBsYWNlaG9sZGVyIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xcbn1cXG5cXG4uYmxhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdyaWQtc3F1YXJlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjpzb2xpZCBsaW1lZ3JlZW4gMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdyaWQtc3F1YXJlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDEwLCAuMjUpXFxufVxcblxcbi5wZWcge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIHBhZGRpbmc6IDVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdyaWQtbmFtZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6IGxpbWVncmVlbjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpXFxufVxcblxcbi5zaGlwLWljb25zIHtcXG4gICAgd2lkdGg6IDIyNXB4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxufVxcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNDUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsNENBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGtGQUFrRjtJQUNsRixxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx3RkFBd0Y7SUFDeEYsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsU0FBUztJQUNULFNBQVM7SUFDVDtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IE1hY2hpbmU7XFxuICAgIHNyYzogdXJsKE1hY2hpbmVTdGQub3RmKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2JhdHRsZXNoaXAge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogOXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IE1hY2hpbmUsIHNhbi1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjI1LDIyNSwyMjUpLCByZ2IoNzgsIDc4LCA3OCksIHJnYmEoMjI1LDIyNSwyMjUpKTtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0NSU7XFxuICAgIHRyYW5zaXRpb246IHRvcCBlYXNlLWluLW91dCAxcztcXG59XFxuXFxuI21wMyB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4jbmV3LWdhbWUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNjAlO1xcbn1cXG5cXG4uc2NyZWVuLWRpc3BsYXkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjI1LDIyNSwyMjUpLCByZ2IoNzgsIDc4LCA3OCksIHJnYmEoMjI1LDIyNSwyMjUpKTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbjogMTYwcHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbiAxcztcXG59XFxuXFxuLm1zZy1iYW5uZXIge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtM3JlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubXNnLW91dHB1dCB7XFxuICAgIGNvbG9yOiBsaW1lZ3JlZW47XFxufVxcblxcbi5wbGFjZWhvbGRlciB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcXG59XFxuXFxuLmJsYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ncmlkLXNxdWFyZSB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6c29saWQgbGltZWdyZWVuIDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ncmlkLXNxdWFyZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAxMCwgLjI1KVxcbn1cXG5cXG4ucGVnIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLmdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBwYWRkaW5nOiA1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ncmlkLW5hbWUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiBsaW1lZ3JlZW47XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKVxcbn1cXG5cXG4uc2hpcC1pY29ucyB7XFxuICAgIHdpZHRoOiAyMjVweDtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQ1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBBSUF0dGFja1R1cm4sIG5ld0dhbWUgfSBmcm9tIFwiLi9nYW1lLmpzXCI7XG5pbXBvcnQgQkFUVExFU0hJUCBmcm9tIFwiLi9hc3NldHMvYmF0dGxlc2hpcDEucG5nXCJcbmltcG9ydCBDQVJSSUVSIGZyb20gXCIuL2Fzc2V0cy9jYXJyaWVyLnBuZ1wiXG5pbXBvcnQgREVTVFJPWUVSIGZyb20gXCIuL2Fzc2V0cy9kZXN0cm95ZXIucG5nXCJcbmltcG9ydCBTVUJNQVJJTkUgZnJvbSBcIi4vYXNzZXRzL3N1Ym1hcmluZS5wbmdcIlxuaW1wb3J0IFBBVFJPTEJPQVQgZnJvbSBcIi4vYXNzZXRzL3BhdHJvbGJvYXQucG5nXCJcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4vLyBDcmVhdGVNYWluRGlzcGxheSBpcyBjYWxsZWQgd2hlbiBhIG5ldyBnYW1lIGlzIHN0YXJ0ZWQuICBDcmVhdGVzIERPTSBlbGVtZW50cyB0aGF0IHJlcHJlc2VudCB0aGUgcGxheWVyIGJvYXJkcyAoZ3JpZHMpIGFuZCBhc3NpZ25zIGxpc3RlbmVyIGV2ZW50cyB0byBlYWNoIG9mIHRoZSBncmlkcyBzcXVhcmVzLCBkZXBlbmRpbmcgb24gdGhlIHBsYXllci5cbmV4cG9ydCBjb25zdCBjcmVhdGVNYWluRGlzcGxheSA9IChwbGF5ZXIxLCBwbGF5ZXIyLCBib2FyZDEsIGJvYXJkMikgPT4ge1xuICBsZXQgdGltZW91dCA9IFtdO1xuXG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGRpc3BsYXkpO1xuICBkaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJzY3JlZW4tZGlzcGxheVwiKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZGlzcGxheS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gIH0sIDUwMCk7XG5cbiAgY29uc3QgbXNnYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy90eXBlV3JpdGVyKFwiQ29tbWFuZGVyLCBzZWxlY3QgdGFyZ2V0IGFuZCBmaXJlIVwiLCBtc2dvdXRwdXQpO1xuICBtc2diYW5uZXIuY2xhc3NMaXN0LmFkZChcIm1zZy1iYW5uZXJcIik7XG4gIGRpc3BsYXkuYXBwZW5kQ2hpbGQobXNnYmFubmVyKTtcblxuICBjb25zdCBtc2dvdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbXNnb3V0cHV0LnRleHRDb250ZW50ID0gXCJDb21tYW5kZXIsIGVuZW15IGZsZWV0IGluIHJhbmdlLiBTZWxlY3QgY29vcmRpbmF0ZXMsIGZpcmUhXCI7XG4gIG1zZ291dHB1dC5jbGFzc0xpc3QuYWRkKFwibXNnLW91dHB1dFwiKTtcbiAgbXNnYmFubmVyLmFwcGVuZENoaWxkKG1zZ291dHB1dCk7XG5cbiAgY29uc3QgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGFjZWhvbGRlci5jbGFzc0xpc3QuYWRkKFwicGxhY2Vob2xkZXJcIik7XG4gIG1zZ2Jhbm5lci5hcHBlbmRDaGlsZChwbGFjZWhvbGRlcik7XG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBwbGFjZWhvbGRlci5jbGFzc0xpc3QudG9nZ2xlKFwiYmxhY2tcIilcbiAgfSwgNTAwKVxuXG4gIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncmlkLWNvbnRhaW5lclwiKTtcbiAgZGlzcGxheS5hcHBlbmRDaGlsZChncmlkQ29udGFpbmVyKTtcblxuICAvLyBHcmlkIDEgLyBwbGF5ZXIgMS4gIEdyaWQgY3JlYXRlZCB3aWxsIGhpZ2hsaWdodCBzcXVhcmVzIHdoZXJlIHRoZSBzaGlwcyBhcmUgbG9jYXRlZFxuICBjb25zdCBET01ncmlkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIERPTWdyaWQxLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKERPTWdyaWQxKTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBib2FyZDEuZ3JpZC5sZW5ndGg7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgYm9hcmQxLmdyaWRbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1zcXVhcmVcIik7XG4gICAgICBzcXVhcmUuaWQgPSBgJHtyb3d9Ynkke2NvbH1gOyAvLyBJTVBPUlRBTlQgLSBJRCBpcyB1c2VkIHRvIHRhcmdldCBzcXVhcmVzIHRoYXQgdGhlIEFJIGF0dGFja2VkLiAgU3F1YXJlIGNvbG9yIHdpbGwgYmUgdXBkYXRlZCBkZXBlbmRpbmcgb24gYXR0YWNrIG91dGNvbWVcbiAgICAgIERPTWdyaWQxLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICBpZiAoYm9hcmQxLmdyaWRbcm93XVtjb2xdLnNoaXApIHtcbiAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgIH1cbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAvLyBUaGlzIEV2ZW50IGxpc3RlbmVyIHdpbGwgYmUgdXNlZCBvbmNlIGN1c3RvbSBzaGlwIHBsYWNlbWVudCBpcyBpbXBsZW1lbnRlZFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ3JpZDFuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZ3JpZDFuYW1lLnRleHRDb250ZW50ID0gXCJBbGxpZWQgRmxlZXRcIlxuICBncmlkMW5hbWUuY2xhc3NMaXN0LmFkZChcImdyaWQtbmFtZVwiKVxuICBET01ncmlkMS5hcHBlbmRDaGlsZChncmlkMW5hbWUpXG5cbiAgLy8gR3JpZCAyIC8gUGxheWVyIDIgKEFJIHBsYXllcikuICBHcmlkIGNyZWF0ZWQgd2lsbCBoYXZlIHNxdWFyZXMgdGhhdCBjb250YWluIGxpc3RlbmVyIGV2ZW50cyB0byByZWNpZXZlIGF0dGFja3MgZnJvbSBwbGF5ZXIgMS4gIFNoaXBzIHdpbGwgTk9UIGJlIHJldmVhbGVkIGFuZCBzcXVhcmVzIHdpbGwgaGF2ZSBjb2xvciBpbmRpY2F0b3JzIHRvIGluZGljYXRlIGhpdHMgb3IgbWlzc2VzLlxuICBjb25zdCBET01ncmlkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIERPTWdyaWQyLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKERPTWdyaWQyKTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBib2FyZDIuZ3JpZC5sZW5ndGg7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgYm9hcmQyLmdyaWRbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1zcXVhcmVcIik7XG4gICAgICBET01ncmlkMi5hcHBlbmRDaGlsZChzcXVhcmUpO1xuXG4gICAgICAvLyBUaGlzIHBhcnRpY3VsYXIgZXZlbnQgbGlzdGVuZXIgZnVjbnRpb25zIGFzIHRoZSBnYW1lIGxvb3AsIG9uY2UgdGhlIHBsYXllciBzZWxlY3RzIGEgdGFyZ2V0IHNxdWFyZSB0byBhdHRhY2ssIHRoZSBBSSB0aGVuIGF0dGFja3MgaW4gdHVybiAoQUlBdHRhY2tUdXJuIG1ldGhvZCBjYWxsZWQgZnJvbSBnYW1lLmpzKVxuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIG1zZ291dHB1dC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIHRpbWVvdXQuZm9yRWFjaCgodGltZSkgPT4gY2xlYXJUaW1lb3V0KHRpbWUpKTsgLy8gQ2xlYXJzIHRoZSBldmVudCBxdWV1ZSBvZiBwcmlvciB0eXBlV3JpdGVyIG91dHB1dHNcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aW1lb3V0KTtcblxuICAgICAgICBsZXQgbXNnID0gcGxheWVyMS5hdHRhY2socGxheWVyMiwgcm93LCBjb2wpO1xuICAgICAgICBpZiAobXNnID09PSBcIlRhcmdldCBNaXNzLi4uXCIpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGFkZFBlZyhzcXVhcmUsIDEpO1xuICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgICAgbXNnb3V0cHV0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICB0aW1lb3V0ID0gdHlwZVdyaXRlcihgQ2Fubm9uIEJhdHRlcnkgRmlyZSAtICR7bXNnfWAsIG1zZ291dHB1dCk7XG4gICAgICAgIH0gZWxzZSBpZiAobXNnID09PSBcIlRhcmdldCBhbHJlYWR5IGJlZW4gZmlyZWQgb24sIHNlbGVjdCBuZXcgdGFyZ2V0Li4uXCIpIHtcbiAgICAgICAgICBtc2dvdXRwdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgIHRpbWVvdXQgPSB0eXBlV3JpdGVyKG1zZywgbXNnb3V0cHV0KTtcbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZFBlZyhzcXVhcmUsIDIpO1xuICAgICAgICAgIG1zZ291dHB1dC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgdGltZW91dCA9IHR5cGVXcml0ZXIoYENhbm5vbiBCYXR0ZXJ5IEZpcmUgLSAke21zZ31gLCBtc2dvdXRwdXQpO1xuICAgICAgICAgIGlmIChib2FyZDIuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICBnYW1lT3ZlcigxKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGltZW91dC5mb3JFYWNoKCh0aW1lKSA9PiBjbGVhclRpbWVvdXQodGltZSkpXG4gICAgICAgICAgLy8gQUkgYXR0YWNrIHR1cm4uICBPbmNlIHRoZSBhdHRhY2sgY29tcGxldGVzLCBwbGF5ZXIgZ3JpZCBVSSB3aWxsIHVwZGF0ZSB0byByZXByZXNlbnQgdGhlIEFJJ3MgYXR0YWNrIHRhcmdldFxuICAgICAgICAgIGxldCBhdHRhY2sgPSBBSUF0dGFja1R1cm4ocGxheWVyMSwgcGxheWVyMik7XG4gICAgICAgICAgLy8gdGFyZ2V0cyB0aGUgc3F1YXJlIGluIHRoZSBwbGF5ZXIncyBncmlkIHdpdGggdGhlIGNvb3JkaW5hdGUgSUQsIHRoZW4gY29sb3IgaXMgdXBkYXRlZCBhY2NvcmRpbmluZyB0byBhdHRhY2sgb3V0Y29tZVxuICAgICAgICAgIGxldCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgICAgIGAke2F0dGFjay5yb3d9Ynkke2F0dGFjay5jb2x9YFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKHBsYXllcjEuZ3JpZFthdHRhY2sucm93XVthdHRhY2suY29sXS5zaGlwKSB7XG4gICAgICAgICAgICBhZGRQZWcodGFyZ2V0LCAyKTtcbiAgICAgICAgICAgIG1zZ291dHB1dC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB0aW1lb3V0ID0gWy4uLnRpbWVvdXQsIHR5cGVXcml0ZXIoYEVuZW15IEluY29taW5nIEZpcmUgLSAke2F0dGFjay5tc2d9YCwgbXNnb3V0cHV0KV07XG4gICAgICAgICAgICBpZiAoYm9hcmQxLmFsbFN1bmsoKSkge1xuICAgICAgICAgICAgICBnYW1lT3ZlcigyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbXNnb3V0cHV0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBbLi4udGltZW91dCwgdHlwZVdyaXRlcihgRW5lbXkgSW5jb21pbmcgRmlyZSAtICR7YXR0YWNrLm1zZ31gLCBtc2dvdXRwdXQpXTtcbiAgICAgICAgICAgIGFkZFBlZyh0YXJnZXQsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9KTtcblxuXG4gICAgfVxuICB9XG4gIGNvbnN0IGdyaWQybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGdyaWQybmFtZS50ZXh0Q29udGVudCA9IFwiRW5lbXkgRmxlZXRcIlxuICBncmlkMm5hbWUuY2xhc3NMaXN0LmFkZChcImdyaWQtbmFtZVwiKVxuICBET01ncmlkMi5hcHBlbmRDaGlsZChncmlkMm5hbWUpXG5cbiAgLy8vLy8vLy8vLy8vLy8vL1xuICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgYm9keS5hcHBlbmRDaGlsZChzaGlwcylcblxuICBjb25zdCBiYXR0bGVzaGlwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgYmF0dGxlc2hpcDEuY2xhc3NMaXN0LmFkZChcInNoaXAtaWNvbnNcIilcbiAgYmF0dGxlc2hpcDEuc3JjID0gQkFUVExFU0hJUFxuXG4gIGNvbnN0IGNhcnJpZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICBjYXJyaWVyMS5jbGFzc0xpc3QuYWRkKFwic2hpcC1pY29uc1wiKVxuICBjYXJyaWVyMS5zcmMgPSBDQVJSSUVSXG5cbiAgY29uc3QgZGVzdHJveWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgZGVzdHJveWVyMS5jbGFzc0xpc3QuYWRkKFwic2hpcC1pY29uc1wiKVxuICBkZXN0cm95ZXIxLnNyYyA9IERFU1RST1lFUlxuXG4gIGNvbnN0IHN1Ym1hcmluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gIHN1Ym1hcmluZTEuY2xhc3NMaXN0LmFkZChcInNoaXAtaWNvbnNcIilcbiAgc3VibWFyaW5lMS5zcmMgPSBTVUJNQVJJTkVcblxuICBjb25zdCBwYXRyb2xib2F0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgcGF0cm9sYm9hdDEuY2xhc3NMaXN0LmFkZChcInNoaXAtaWNvbnNcIilcbiAgcGF0cm9sYm9hdDEuc3JjID0gUEFUUk9MQk9BVFxuXG4gIHNoaXBzLmFwcGVuZENoaWxkKGJhdHRsZXNoaXAxKVxuICBzaGlwcy5hcHBlbmRDaGlsZChjYXJyaWVyMSlcbiAgc2hpcHMuYXBwZW5kQ2hpbGQoZGVzdHJveWVyMSlcbiAgc2hpcHMuYXBwZW5kQ2hpbGQoc3VibWFyaW5lMSlcbiAgc2hpcHMuYXBwZW5kQ2hpbGQocGF0cm9sYm9hdDEpXG59O1xuXG4vLyBHYW1lIE92ZXIgZnVuY3Rpb24uICBDcmVhdGVzIGEgbW9kYWwgb3ZlcmxheSBkaXNwbGF5aW5nIHRoZSBnYW1lIG91dGNvbWUgYW5kIGEgYnV0dG9uIGZvciBhIG5ldyBnYW1lLiAgSW5wdXQgcGFyYW1ldGVyIGlzIHRoZSBwbGF5ZXIgbnVtYmVyLCB3aGljaCBpcyB1c2VkIHRvIGRldGVybWluZSBpZiBwbGF5ZXIgd2lucyBvciBsb3Nlc1xuY29uc3QgZ2FtZU92ZXIgPSAocGxheWVyKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAvLyBHYW1lIG91dGNvbWUgbWVzc2FnZVxuICBjb25zdCBtc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1zZyk7XG4gIGlmIChwbGF5ZXIgPT09IDEpIHtcbiAgICBtc2cudGV4dENvbnRlbnQgPSBcIkVuZW15IEZsZWV0IERlc3Ryb3llZCwgTWlzc2lvbiBBY2NvbXBsaXNoZWQhXCI7XG4gIH0gZWxzZSB7XG4gICAgbXNnLnRleHRDb250ZW50ID0gXCJGbGVldCBEZXN0cm95ZWQsIFlvdSBMb3NlIVwiO1xuICB9XG5cbiAgLy8gTmV3IEdhbWUgYnV0dG9uXG4gIGNvbnN0IG5leHRNaXNzaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV4dE1pc3Npb24udGV4dENvbnRlbnQgPSBcIk5leHQgTWlzc2lvblwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV4dE1pc3Npb24pO1xuXG4gIG5leHRNaXNzaW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgYm9keS5yZW1vdmVDaGlsZChib2R5Lmxhc3RDaGlsZCk7IC8vIHJlbW92ZSBtb2RhbFxuICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5sYXN0Q2hpbGQpOyAvLyByZW1vdmUgY3VycmVudCBnYW1lIGRpc3BsYXlcbiAgICBuZXdHYW1lKCk7IC8vIGNyZWF0ZSBhIG5ldyBnYW1lXG4gIH0pO1xufTtcblxuLy8gVHlwZXdyaXRlciBlZmZlY3QgZm9yIFVJIGRpc3BsYXllZCBtZXNzYWdlcyB0byB0aGUgcGxheWVyLiAgUmV0dXJucyBhbiBhcnJheSBvZiB0aW1lb3V0IElEcyB0byBiZSB0YXJnZXRlZCBpbiB0aGUgZXZlbnQgcXVldWVcbmNvbnN0IHR5cGVXcml0ZXIgPSAodGV4dCwgZWxlbWVudCwgaW5kZXggPSAwLCB0aW1lb3V0QXJyYXkgPSBbXSkgPT4ge1xuICBpZiAoaW5kZXggPCB0ZXh0Lmxlbmd0aCkge1xuICAgIGVsZW1lbnQudGV4dENvbnRlbnQgKz0gdGV4dC5jaGFyQXQoaW5kZXgpO1xuICAgIGluZGV4Kys7XG4gICAgdGltZW91dEFycmF5LnB1c2goXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdHlwZVdyaXRlcih0ZXh0LCBlbGVtZW50LCBpbmRleCwgdGltZW91dEFycmF5KTtcbiAgICAgIH0sIDIwKVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHRpbWVvdXRBcnJheTtcbn07XG5cbi8vIEFkZHMgYSBuZXcgZWxlbWVudCB0byB0aGUgZ3JpZCBzcXVhcmVzIHdoZW4gaXQncyBhdHRhY2tlZCwgcmVwcmVzZW50YXRpdmUgb2YgdGhlIHBlZ3MgaW4gYmF0dGxlc2hpcCBib2FyZGdhbWVcbmNvbnN0IGFkZFBlZyA9IChncmlkU3F1YXJlLCBtc2cpID0+IHtcbiAgY29uc3QgcGVnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGVnLmNsYXNzTGlzdC5hZGQoXCJwZWdcIik7XG4gIGdyaWRTcXVhcmUuYXBwZW5kQ2hpbGQocGVnKTtcbiAgaWYgKG1zZyA9PT0gMSkgcGVnLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgZWxzZSBwZWcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbn07XG4iLCJpbXBvcnQgKiBhcyBvYmplY3RzIGZyb20gXCIuL29iamVjdHMuanNcIjtcbmltcG9ydCAqIGFzIERPTSBmcm9tIFwiLi9ET00uanNcIlxuXG4vLyBjcmVhdGVGbGVldCB3aWxsIGNyZWF0ZSBhIGZsZWV0IG9mIHNoaXBzIGFuZCBwbGFjZSB0aGVtIHJhbmRvbWx5IG9uIHRoZSBwYXNzZWQgZ2FtZWJvYXJkIHBhcmFtZXRlci4gIFRoZSBsb2dpYyBlbnN1cmVzIHRoYXQgdGhlIHNoaXBzIGRvIG5vdCBvdmVybGFwIGFuZCBhbHNvIHJhbmRvbWl6ZXMgd2hldGhlciB0aGUgc2hpcHMgYXJlIHBsYWNlZFxuLy8gaG9yaXpvbnRhbGx5IG9yIHZlcnRpY2FsbHlcbmV4cG9ydCBjb25zdCBjcmVhdGVGbGVldCA9IChib2FyZCkgPT4ge1xuICBjb25zdCBmbGVldCA9IFt7XCJocHNcIjogMiwgXCJuYW1lXCI6IFwiUGF0cm9sIEJvYXRcIn0sIHtcImhwc1wiOiAzLCBcIm5hbWVcIjogXCJTdWJtYXJpbmVcIn0sIHtcImhwc1wiOiAzLCBcIm5hbWVcIjogXCJEZXN0cm95ZXJcIn0sIHtcImhwc1wiOiA0LCBcIm5hbWVcIjogXCJCYXR0bGVzaGlwXCJ9LCB7XCJocHNcIjogNSwgXCJuYW1lXCI6IFwiQ2FycmllclwifV07IC8vIGZsZWV0IGFycmF5LiAgU3RhbmRhcmQgQmF0dGxlc2hpcCBnYW1lIGhhcyA1IHNoaXBzIHdpdGggdGhlIGZvbGxvd2luZyBib2F0LmhwcyB2YWx1ZXM6IDIsIDMsIDMsIDQsIDUuXG4gIGZsZWV0LmZvckVhY2goKGJvYXQpID0+IHtcbiAgICBsZXQgZGlyID0gTWF0aC5yYW5kb20oKSAqIDEwMDsgLy8gUmFuZG9tIG51bWJlciBnZW5lcmF0b3IgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHNoaXAgaXMgcGxhY2VkIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5XG4gICAgaWYgKGRpciA+PSA1MCkgeyAvLyA8LS0tIGhvcml6b250YWxcbiAgICAgIGxldCByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgIGxldCBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBib2F0LmhwcykpO1xuICAgICAgLy8gUGxhY2Ugc2hpcCBob3Jpem9udGFsbHksIHN3aXRjaCBzdGF0ZW1lbnQgd2lsbCBkZXRlY3QgaWYgYSBuZXcgc2hpcCBwbGFjZW1lbnQgb3ZlcmxhcHMgYW4gYWxyZWFkeSBwbGFjZWQgc2hpcFxuICAgICAgc3dpdGNoIChib2F0Lmhwcykge1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgd2hpbGUgKGJvYXJkLmdyaWRbcm93XVtjb2xdLnNoaXAgfHwgYm9hcmQuZ3JpZFtyb3ddW2NvbCArIDFdLnNoaXApIHtcbiAgICAgICAgICAgIHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICAgICAgY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDEwIC0gYm9hdC5ocHMpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sICsgMV0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbCArIDJdLnNoaXBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICAgICAgY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDEwIC0gYm9hdC5ocHMpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sICsgMV0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbCArIDJdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2wgKyAzXS5zaGlwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICAgIGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgxMCAtIGJvYXQuaHBzKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbF0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbCArIDFdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2wgKyAyXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sICsgM10uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbCArIDRdLnNoaXBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICAgICAgY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDEwIC0gYm9hdC5ocHMpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhyb3csIGNvbCwgZGlyKTtcbiAgICAgIGJvYXJkLm5ld1NoaXAocm93LCBjb2wsIGJvYXQuaHBzLCBib2F0Lm5hbWUsIFwieFwiKTtcbiAgICB9IGVsc2UgeyAgIC8vIDwtLSB2ZXJ0aWNhbFxuICAgICAgbGV0IHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgxMCAtIGJvYXQuaHBzKSk7XG4gICAgICBsZXQgY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAvLyBQbGFjZSBzaGlwIHZlcnRpY2FsbHksIHN3aXRjaCBzdGF0ZW1lbnQgd2lsbCBkZXRlY3QgaWYgYSBuZXcgc2hpcCBwbGFjZW1lbnQgb3ZlcmxhcHMgYW4gYWxyZWFkeSBwbGFjZWQgc2hpcFxuICAgICAgc3dpdGNoIChib2F0Lmhwcykge1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgd2hpbGUgKGJvYXJkLmdyaWRbcm93XVtjb2xdLnNoaXAgfHwgYm9hcmQuZ3JpZFtyb3cgKyAxXVtjb2xdLnNoaXApIHtcbiAgICAgICAgICAgIHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgxMCAtIGJvYXQuaHBzKSk7XG4gICAgICAgICAgICBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3JvdyArIDFdW2NvbF0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3cgKyAyXVtjb2xdLnNoaXBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgxMCAtIGJvYXQuaHBzKSk7XG4gICAgICAgICAgICBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3JvdyArIDFdW2NvbF0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3cgKyAyXVtjb2xdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93ICsgM11bY29sXS5zaGlwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBib2F0LmhwcykpO1xuICAgICAgICAgICAgY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbF0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3cgKyAxXVtjb2xdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93ICsgMl1bY29sXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3JvdyArIDNdW2NvbF0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3cgKyA0XVtjb2xdLnNoaXBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgxMCAtIGJvYXQuaHBzKSk7XG4gICAgICAgICAgICBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhyb3csIGNvbCwgZGlyKTtcbiAgICAgIGJvYXJkLm5ld1NoaXAocm93LCBjb2wsIGJvYXQuaHBzLCBib2F0Lm5hbWUsIFwieVwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gTmV3IEdhbWUgTWV0aG9kLiAgSW5pdGFsaXplcyBhbGwgZ2FtZSBVSSBhbmQgbG9naWMgYnkgY2FsbGluZyBtZXRob2RzIGZyb20gRE9NLmpzIGFuZCBtYWluIGdhbWUgb2JqZWN0cyBmcm9tIHRoZSBmYWN0b3JpZXMgaW4gT2JqZWN0LmpzLlxuZXhwb3J0IGNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQxID0gb2JqZWN0cy5nYW1lYm9hcmQoMTApO1xuICAgIGNvbnN0IGJvYXJkMiA9IG9iamVjdHMuZ2FtZWJvYXJkKDEwKTtcbiAgXG4gICAgY29uc3QgcGxheWVyMSA9IG9iamVjdHMucGxheWVyKGJvYXJkMSk7XG4gICAgY29uc3QgcGxheWVyMiA9IG9iamVjdHMucGxheWVyKGJvYXJkMik7XG4gIFxuICAgIGNyZWF0ZUZsZWV0KGJvYXJkMSk7XG4gICAgY3JlYXRlRmxlZXQoYm9hcmQyKTtcblxuICAgIERPTS5jcmVhdGVNYWluRGlzcGxheShwbGF5ZXIxLCBwbGF5ZXIyLCBib2FyZDEsIGJvYXJkMilcblxufVxuXG4vLyBBSSBhdHRhY2sgZnVuY3Rpb24uICBDYWxscyBhdHRhY2sgbWV0aG9kIGZyb20gdGhlIHBsYXllciBvYmplY3QsIHJldHVybnMgdGhlIHJvdyBhbmQgY29sIHZhbHVlcyB0YXJnZXRlZCBpbiBhbiBhcnJheVxuZXhwb3J0IGNvbnN0IEFJQXR0YWNrVHVybiA9IChwbGF5ZXIsIGFpKSA9PiB7XG4gICAgbGV0IHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpXG4gICAgbGV0IGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpXG5cbiAgICB3aGlsZShwbGF5ZXIuZ3JpZFtyb3ddW2NvbF0uYXR0YWNrZWQpIHtcbiAgICAgICAgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSlcbiAgICAgICAgY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSlcbiAgICB9XG4gICAgbGV0IG1zZyA9IGFpLmF0dGFjayhwbGF5ZXIsIHJvdywgY29sKVxuICAgIGNvbnNvbGUubG9nKFwiYWlcIiwgbXNnKVxuICAgIHJldHVybiB7XG4gICAgICBcInJvd1wiOiByb3csXG4gICAgICBcImNvbFwiOiBjb2wsXG4gICAgICBcIm1zZ1wiOiBtc2dcbiAgICB9XG59XG5cbi8vIEdhbWUgb3ZlciBmdW5jdGlvbi4gIERldGVjdHMgaWYgdGhlIGdhbWUgaXMgb3ZlciBieSBjYWxsaW5nIHRoZSBhbGxTdW5rIG1ldGhvZCBmcm9tIHRoZSBnYW1lYm9hcmQgb2JqZWN0cy4gIElucHV0IHBhcmFtZW50ZXIgaXMgYSBnYW1lYm9hcmQgb2JqZWN0XG5leHBvcnQgY29uc3QgZ2FtZU92ZXIgPSAoKSA9PiB7XG5cbn0iLCJcbi8vIHNoaXAgZmFjdG9yeSBmdW5jdGlvbiwgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSBzaGlwIG9iamVjdHMgdG8gYmUgdXNlZCBvbiB0aGUgZ2FtZWJvYXJkLiAgMiBwdWJsaWMgbWV0aG9kcyB0byBiZSB1c2VkIGJ5IGdhbWVib2FyZFxuZXhwb3J0IGNvbnN0IHNoaXAgPSAoaW5wdXQsIG5hbWUpID0+IHtcbiAgICBsZXQgaHBzID0gaW5wdXQsXG4gICAgICAgIGRtZyA9IDBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhwcyxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgaGl0KCkge1xuICAgICAgICAgICAgZG1nKytcbiAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgIH0sXG4gICAgICAgIGlzU3VuaygpIHtcbiAgICAgICAgICAgIHJldHVybiBocHMgPD0gZG1nID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuLy8gZ2FtZWJvYXJkIGZhY3RvcnkgZnVuY3Rpb24sIHdpbGwgY3JlYXRlIGEgc3F1YXJlIGdyaWQgb2Ygb2JqZWN0cyBiYXNlZCBvbiBwYXJhbWV0ZXIgZGltLiAgRWFjaCBzcXVhcmUgb2JqZWN0IG9mIHRoZSBncmlkIHdpbGwgaW5pdGFpbGx5IGhhdmUgbm8gcHJvcGVydGllcyBidXQgcHJvcGVydGllcyB3aWxsIGJlIGFkZGVkIGRlcGVuZGluZ1xuLy8gb24gZ2FtZXN0YXRlLiAgRXhhbXBsZSwgaWYgYSBzaGlwIGlzIHBsYWNlZCBpbiB0aGUgc3F1YXJlLCBcInNoaXBcIiB3aWxsIGJlIGFkZGVkLiAgT3IgaWYgYSBzcXVhcmUgaXMgaGl0LCBcImhpdFwiIHByb3BlcnR5IHdpbGwgYmUgYWRkZWRcbmV4cG9ydCBjb25zdCBnYW1lYm9hcmQgPSAoZGltKSA9PiB7XG4gICAgXG4gICAgLy8gYnVpbGQgZ2FtZWJvYXJkIGdyaWRcbiAgICBjb25zdCBncmlkID0gW11cbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IGRpbTsgYSsrKSB7XG4gICAgICAgIGxldCByb3cgPSBbXVxuICAgICAgICBncmlkLnB1c2gocm93KVxuICAgICAgICBmb3IgKGxldCBiID0gMDsgYiA8IGRpbTsgYisrKSB7XG4gICAgICAgICAgICByb3cucHVzaCh7fSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHZhcmlhYmxlcyB0byByZWNvcmQgbnVtYmVyIG9mIGhpdHMgYW5kIG1pc3NlcyBhcyB3ZWxsIGFzIGtlZXAgdHJhY2sgb2YgdG90YWwgc2hpcCBoaXRwb2ludHMgb24gZ2FtZWJvYXJkXG4gICAgbGV0IG1pc3NlcyA9IDAsXG4gICAgICAgIGhpdHMgPSAwLFxuICAgICAgICB0b3RhbGhwcyA9IDBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdyaWQsXG4gICAgICAgIG1pc3NlcyxcbiAgICAgICAgaGl0cyxcbiAgICAgICAgdG90YWxocHMsXG4gICAgICAgIC8vIHBsYWNlcyBhIG5ldyBzaGlwKCkgb2JqZWN0IG9uIHRoZSBncmlkIHVzaW5nIHRoZSBwcm92aWRlZCByb3cgYW5kIGNvbCBwYXJhbWV0ZXJzIGFzIHRoZSBzdGFydCBwb3N0aW9uLiAgaHBzIGRldGVybWluZXMgdGhlIHR5cGUgb2Ygc2hpcCBwbGFjZWQgYW5kIGRlZmF1bHRzXG4gICAgICAgIC8vIHRoZSBwYWxjZW1lbnQgYWxvbmcgdGhlIHgtYXhpc1xuICAgICAgICBuZXdTaGlwKHJvdywgY29sLCBocHMsIG5hbWUsIGF4aXMgPSAneCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAxID0gc2hpcChocHMsIG5hbWUpXG4gICAgICAgICAgICB0aGlzLnRvdGFsaHBzICs9IGhwc1xuXG4gICAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBzaGlwMS5ocHM7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5ncmlkW3Jvd11bY29sICsgYV1cbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBzaGlwMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBzaGlwMS5ocHM7IGErKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5ncmlkW3JvdyArIGFdW2NvbF1cbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBzaGlwMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzaGlwMVxuICAgICAgICB9LFxuICAgICAgICAvLyBhdHRhY2sgbWV0aG9kLCBjYWxsZWQgd2hlbiBhIHNxdWFyZSBvbiB0aGUgZ3JpZCBpcyBjaG9zZW4gZm9yIGFuIGF0dGFjay4gIElmIG5vIHNoaXAgb2NjdXBpZXMgdGhlIHNwYWNlLCByZXR1cm5zIGEgXCJtaXNzZWRcIiBzdHJpbmcgd2hpbGUgYWxzbyBhbG9zIGFzc2lnbmluZyBhbiBhdHRhY2tlZFxuICAgICAgICAvLyBwcm9wZXJ0eSB0byB0aGF0IHNxdWFyZSBvYmplY3QuICBJZiBhIHNoaXAgaXMgZm91bmQsIGNhbGwgdGhlIGhpdCgpIG9uIHRoYXQgc2hpcCBhcyB3ZWxsIGFzIGFzc2lnbmVkIGFuIGF0dGFja2VkIHByb3BlcnR5IHRvIHRoYXQgc3F1YXJlIHdoaWxlIHJldHVybmluZyBhIFwiaGl0XCIgc3RyaW5nXG4gICAgICAgIHJlY2lldmVBdHRhY2socm93LCBjb2wpIHtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuZ3JpZFtyb3ddW2NvbF1cbiAgICAgICAgICAgIGlmIChzcXVhcmUuYXR0YWNrZWQpIHJldHVybiBcIlRhcmdldCBhbHJlYWR5IGJlZW4gZmlyZWQgb24sIHNlbGVjdCBuZXcgdGFyZ2V0Li4uXCJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNxdWFyZS5zaGlwKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmF0dGFja2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwLmhpdCgpXG4gICAgICAgICAgICAgICAgdGhpcy5oaXRzKytcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlLnNoaXAuaXNTdW5rKCkpIHJldHVybiBgRGlyZWN0IEhpdCAtICR7c3F1YXJlLnNoaXAubmFtZX0gRGVzdHJveWVkIWBcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBcIkRpcmVjdCBIaXQhXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5hdHRhY2tlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLm1pc3NlcysrXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVGFyZ2V0IE1pc3MuLi5cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyBtZXRob2QgdG8gZGV0ZXJtaW5lIGlmIGFsbCBzaGlwcyBvbiBncmlkIGhhdmUgYmVlbiBzdW5rLCByZXN1bHRpbmcgaW4gYSBnYW1lIGVuZFxuICAgICAgICBhbGxTdW5rKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG90YWxocHMgPT09IHRoaXMuaGl0cyA/IHRydWUgOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBwbGF5ZXIgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSBnYW1lYm9hcmQgb2JqZWN0IGFzIGEgcGFyYW1ldGVyLiAgVGhpcyBlZmZlY3RpdmVseSBhc2lnbnMgdGhlIGdhbWViYW9yZCB0byB0aGUgcGxheWVyIGFuZCBlbmFibGVzIG1ldGhvZHMgd2l0aGluIHRoZSBwbGF5ZXIgb2JqZWN0IHRvIGVmZmVjdCB0aGUgZ2FtZWJvYXJkXG5leHBvcnQgY29uc3QgcGxheWVyID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgZ3JpZCA9IGJvYXJkLmdyaWRcbiAgICByZXR1cm4ge1xuICAgICAgICBncmlkLFxuICAgICAgICBib2FyZCxcbiAgICAgICAgYXR0YWNrKHBsYXllciwgcm93LCBjb2wpIHtcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXIuYm9hcmQucmVjaWV2ZUF0dGFjayhyb3csIGNvbClcbiAgICAgICAgfSxcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgKiBhcyBvYmplY3RzIGZyb20gXCIuL29iamVjdHMuanNcIjtcbmltcG9ydCAqIGFzIGdhbWVNZXRob2RzIGZyb20gXCIuL2dhbWVcIjtcblxuY29uc3Qgdm9sdW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtcDNcIik7XG5jb25zdCBuZXdHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctZ2FtZVwiKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXR0bGVzaGlwXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5sZXQgYXVkaW8gPSBuZXcgQXVkaW8oXCJCYXR0bGVmaWVsZCAxOTQyLm1wM1wiKTtcbi8vYXVkaW8ucGxheSgpO1xuYXVkaW8ubG9vcCA9IHRydWU7XG5cbnZvbHVtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoYXVkaW8ubXV0ZWQgPT09IGZhbHNlKSB7XG4gICAgYXVkaW8ubXV0ZWQgPSB0cnVlO1xuICAgIHZvbHVtZS5zcmMgPSBcIm11dGUucG5nXCI7XG4gIH0gZWxzZSB7XG4gICAgYXVkaW8ubXV0ZWQgPSBmYWxzZTtcbiAgICB2b2x1bWUuc3JjID0gXCJ2b2x1bWUucG5nXCI7XG4gIH1cbn0pO1xuXG5uZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5ld0dhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB0aXRsZS5zdHlsZS50b3AgPSBcIjIlXCI7XG4gIGdhbWVNZXRob2RzLm5ld0dhbWUoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9