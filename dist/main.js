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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n@font-face {\n    font-family: Machine;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@keyframes shake {\n    0%      {transform: translateX(5px);}\n    33%     {transform: translateX(-10px);}\n    66%     {transform: translateX(10px);}\n    100%    {transform: translateX(-5px);}\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    position: relative;\n}\n\n#battleship {\n    width: 100%;\n    height: 150px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 9rem;\n    font-family: Machine, san-serif;\n    background: linear-gradient(rgba(225,225,225), rgb(78, 78, 78), rgba(225,225,225));\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    position: absolute;\n    top: 45%;\n    transition: top ease-in-out 1s;\n}\n\n#mp3 {\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 1rem;\n}\n\nbutton {\n    border: 1px limegreen solid;\n    background-color: black;\n    color: limegreen;\n    padding: 8px 16px;\n}\n\nbutton:hover {\n    background-color: rgba(0, 255, 10, .25)\n}\n\nbutton:active {\n    transform: scale(95%);\n}\n\n#new-game {\n    position: absolute;\n    top: 65%;\n}\n\n.screen-display {\n    width: 100%;\n    background-color: black;\n    margin: 160px 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    transition: opacity ease-in 1s;\n}\n\n.msg-banner {\n    margin-top: 2rem;\n    margin-bottom: -3rem;\n    font-size: 2rem;\n    width: 55%;\n    padding: 1rem;\n    background-color: black;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.msg-output {\n    color: limegreen;\n    display: flex;\n}\n\n.placeholder {\n    height: 2rem;\n    width: 16px;\n    background-color: limegreen;\n}\n\n.black {\n    background-color: black;\n}\n\n.grid-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.grid-square {\n    width: 40px;\n    height: 40px;\n    background-color: black;\n    border:solid limegreen 1px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.grid-square:hover {\n    background-color: rgba(0, 255, 10, .25);\n    cursor: pointer;\n}\n\n.peg {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    border: solid 1px black;\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: repeat(10, 40px);\n    grid-template-rows: repeat(10, 1fr);\n    padding: 5rem;\n    position: relative;\n}\n\n.grid-name {\n    position: absolute;\n    color: limegreen;\n    font-size: 2rem;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%)\n}\n\n.ships1-display {\n    height: 400px;\n    width: 200px;\n    position: absolute;\n    left: -150px;\n    top:80px;\n    display: flex;\n    flex-direction: column;\n}\n\n.ships2-display {\n    height: 400px;\n    width: 200px;\n    position: absolute;\n    right: -130px;\n    top:80px;\n    display: flex;\n    flex-direction: column;\n}\n\n.ship-icons {\n    width: 225px;\n    height: 75px;\n    transition: ease-out opacity 2s;\n}\n\n.shake {\n    animation: shake .50s;\n}\n\n.sink {\n    opacity: 0;\n}\n\n.modal {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    /* background-color: rgba(0, 0, 0, .45); */\n    display: flex;\n    align-items: center;\n}\n\n.modal-container {\n    background-color: black;\n    color: limegreen;\n    width: 100%;\n    height: 150px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: 2rem;\n    opacity: 0;\n    transition: opacity ease-in 1s;\n    gap: 2rem;\n}\n\n.next-mission {\n    opacity: 0;\n    transition: opacity ease-in 1s;\n}\n\n.fade-in {\n    opacity: 1;\n}\n\nfooter {\n    color: limegreen;\n    position: absolute;\n    bottom: 16px;\n    margin: auto;\n    font-size: 1.25rem;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\na>img {\n    width: 24px;\n    height: auto;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n}\n\n@font-face {\n    font-family: Machine;\n    src: url(MachineStd.otf);\n}\n\n@keyframes shake {\n    0%      {transform: translateX(5px);}\n    33%     {transform: translateX(-10px);}\n    66%     {transform: translateX(10px);}\n    100%    {transform: translateX(-5px);}\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    align-items: center;\n    justify-content: center;\n    background-color: black;\n    position: relative;\n}\n\n#battleship {\n    width: 100%;\n    height: 150px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 9rem;\n    font-family: Machine, san-serif;\n    background: linear-gradient(rgba(225,225,225), rgb(78, 78, 78), rgba(225,225,225));\n    background-clip: text;\n    -webkit-text-fill-color: transparent;\n    position: absolute;\n    top: 45%;\n    transition: top ease-in-out 1s;\n}\n\n#mp3 {\n    width: 24px;\n    height: 24px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 1rem;\n}\n\nbutton {\n    border: 1px limegreen solid;\n    background-color: black;\n    color: limegreen;\n    padding: 8px 16px;\n}\n\nbutton:hover {\n    background-color: rgba(0, 255, 10, .25)\n}\n\nbutton:active {\n    transform: scale(95%);\n}\n\n#new-game {\n    position: absolute;\n    top: 65%;\n}\n\n.screen-display {\n    width: 100%;\n    background-color: black;\n    margin: 160px 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    transition: opacity ease-in 1s;\n}\n\n.msg-banner {\n    margin-top: 2rem;\n    margin-bottom: -3rem;\n    font-size: 2rem;\n    width: 55%;\n    padding: 1rem;\n    background-color: black;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.msg-output {\n    color: limegreen;\n    display: flex;\n}\n\n.placeholder {\n    height: 2rem;\n    width: 16px;\n    background-color: limegreen;\n}\n\n.black {\n    background-color: black;\n}\n\n.grid-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.grid-square {\n    width: 40px;\n    height: 40px;\n    background-color: black;\n    border:solid limegreen 1px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.grid-square:hover {\n    background-color: rgba(0, 255, 10, .25);\n    cursor: pointer;\n}\n\n.peg {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    border: solid 1px black;\n}\n\n.grid {\n    display: grid;\n    grid-template-columns: repeat(10, 40px);\n    grid-template-rows: repeat(10, 1fr);\n    padding: 5rem;\n    position: relative;\n}\n\n.grid-name {\n    position: absolute;\n    color: limegreen;\n    font-size: 2rem;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%)\n}\n\n.ships1-display {\n    height: 400px;\n    width: 200px;\n    position: absolute;\n    left: -150px;\n    top:80px;\n    display: flex;\n    flex-direction: column;\n}\n\n.ships2-display {\n    height: 400px;\n    width: 200px;\n    position: absolute;\n    right: -130px;\n    top:80px;\n    display: flex;\n    flex-direction: column;\n}\n\n.ship-icons {\n    width: 225px;\n    height: 75px;\n    transition: ease-out opacity 2s;\n}\n\n.shake {\n    animation: shake .50s;\n}\n\n.sink {\n    opacity: 0;\n}\n\n.modal {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    /* background-color: rgba(0, 0, 0, .45); */\n    display: flex;\n    align-items: center;\n}\n\n.modal-container {\n    background-color: black;\n    color: limegreen;\n    width: 100%;\n    height: 150px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: 2rem;\n    opacity: 0;\n    transition: opacity ease-in 1s;\n    gap: 2rem;\n}\n\n.next-mission {\n    opacity: 0;\n    transition: opacity ease-in 1s;\n}\n\n.fade-in {\n    opacity: 1;\n}\n\nfooter {\n    color: limegreen;\n    position: absolute;\n    bottom: 16px;\n    margin: auto;\n    font-size: 1.25rem;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\na>img {\n    width: 24px;\n    height: auto;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "createMainDisplay": () => (/* binding */ createMainDisplay),
/* harmony export */   "gameOver": () => (/* binding */ gameOver)
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
  let timeout = []; // initialize timeout array to hold timeout IDs, works in conjunction with typeWriter()

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

  // Blinking cursor/placeholder element and effect used to tail the messages
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

  // Grid 2 / Player 2 (AI player).  Grid created will have squares that contain listener events to to fire the turnLoop function.  Ships will NOT be revealed and squares will have color indicators to indicate hits or misses.
  const DOMgrid2 = document.createElement("div");
  DOMgrid2.classList.add("grid");
  gridContainer.appendChild(DOMgrid2);

  for (let row = 0; row < board2.grid.length; row++) {
    for (let col = 0; col < board2.grid[row].length; col++) {
      let square = document.createElement("div");
      square.classList.add("grid-square");
      DOMgrid2.appendChild(square);

      // This particular event listener fucntions as the game loop, calls turnLoop() and disables cursor events for 3 seconds to set game tempo
      square.addEventListener("click", () => {
        DOMgrid2.style.pointerEvents = "none";
        turnLoop(square, player1, player2, board1, board2, row, col);
        setTimeout(() => {
          DOMgrid2.style.pointerEvents = "auto";
        }, 3000);
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
  const display = document.querySelector(".screen-display");
  display.style.opacity = "0";

  const modal = document.createElement("div");
  modal.classList.add("modal");
  body.appendChild(modal);

  const container = document.createElement("div");
  container.classList.add("modal-container");
  modal.appendChild(container);
  setTimeout(() => {
    container.classList.add("fade-in");
  }, 500);

  const msgContainer = document.createElement("div");
  msgContainer.classList.add("msg-output");
  container.appendChild(msgContainer);

  // Game outcome message
  const msg = document.createElement("p");
  msgContainer.appendChild(msg);

  //Blinking curosor/placeholder
  const placeholder = document.createElement("div");
  placeholder.classList.add("placeholder");
  msgContainer.appendChild(placeholder);
  setInterval(() => {
    placeholder.classList.toggle("black");
  }, 500);

  setTimeout(() => {
    if (player === 1) {
      typeWriter(
        "Enemy Fleet Destroyed, Mission Accomplished!",
        msg,
        0,
        [],
        100
      );
    } else {
      typeWriter("Fleet Destroyed, You Lose!", msg, 0, [], 100);
    }
  }, 1500);

  // New Game button
  setTimeout(() => {
    const nextMission = document.createElement("button");
    nextMission.textContent = "Next Mission";
    nextMission.classList.add("next-mission");
    container.appendChild(nextMission);
    setTimeout(() => {
      nextMission.classList.add("fade-in");
    }, 0);
    nextMission.addEventListener("click", () => {
      body.removeChild(body.lastChild); // remove modal
      body.removeChild(body.lastChild); // remove current game display
      (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.newGame)(); // create a new game
    });
  }, 8000);
};

// Typewriter effect for UI displayed messages to the player.  Returns an array of timeout IDs to be targeted in the event queue
const typeWriter = (
  text,
  element,
  index = 0,
  timeoutArray = [],
  interval = 20
) => {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    timeoutArray.push(
      setTimeout(() => {
        typeWriter(text, element, index, timeoutArray, interval);
      }, interval)
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
        targetIcon.classList.add("sink");
      }, 750);
      break;
    }
  }
};

// turnLoop function.  Processes the player's attack then fires an attack for the AI.  Each square in the AI grid will have an onclick event that fires this function.  Paramaters passed
// are the specific square element and it's row and col coordinates.
const turnLoop = (square, player1, player2, board1, board2, row, col) => {
  const msgoutput = document.querySelector(".msg-output");

  msgoutput.textContent = "";
  let msg = player1.attack(player2, row, col);
  if (msg === "Target Miss...") {
    setTimeout(() => {
      addPeg(square, 1);
    }, 250);
    msgoutput.textContent = "";
    typeWriter(`Cannon Battery Fire - ${msg}`, msgoutput);
  } else if (msg === "Target already been fired on, select new target...") {
    msgoutput.textContent = "";
    typeWriter(msg, msgoutput);
    return;
  } else {
    addPeg(square, 2);
    shipSunk(msg, 2);
    msgoutput.textContent = "";
    typeWriter(`Cannon Battery Fire - ${msg}`, msgoutput);
    if (board2.allSunk()) {
      setTimeout(() => {
        gameOver(1);
      }, 2000);
      return;
    }
  }

  // AI attack turn.  Once the attack completes, player grid UI will update to represent the AI's attack target
  setTimeout(() => {
    let attack = (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.AIAttackTurn)(player1, player2);
    // targets the square in the player's grid with the coordinate ID, then color is updated accordining to attack outcome
    let target = document.getElementById(`${attack.row}by${attack.col}`);
    if (player1.grid[attack.row][attack.col].ship) {
      addPeg(target, 2);
      shipSunk(attack.msg, 1);
      msgoutput.textContent = "";
      typeWriter(`Enemy Incoming Fire - ${attack.msg}`, msgoutput)
      if (board1.allSunk()) {
        setTimeout(() => {
          gameOver(2);
        }, 2000);
      }
    } else {
      msgoutput.textContent = "";
      typeWriter(`Enemy Incoming Fire - ${attack.msg}`, msgoutput);
      addPeg(target, 1);
    }
  }, 2000);
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
    dmg = 0;

  return {
    hps,
    name,
    hit() {
      dmg++;
      return this;
    },
    isSunk() {
      return hps <= dmg ? true : false;
    },
  };
};

// gameboard factory function, will create a square grid of objects based on parameter dim.  Each square object of the grid will initailly have no properties but properties will be added depending
// on gamestate.  Example, if a ship is placed in the square, "ship" will be added.  Or if a square is hit, "hit" property will be added
const gameboard = (dim) => {
  // build gameboard grid
  const grid = [];
  for (let a = 0; a < dim; a++) {
    let row = [];
    grid.push(row);
    for (let b = 0; b < dim; b++) {
      row.push({});
    }
  }

  // variables to record number of hits and misses as well as keep track of total ship hitpoints on gameboard
  let misses = 0,
    hits = 0,
    totalhps = 0;

  return {
    grid,
    misses,
    hits,
    totalhps,
    // places a new ship() object on the grid using the provided row and col parameters as the start postion.  hps determines the type of ship placed and defaults
    // the palcement along the x-axis
    newShip(row, col, hps, name, axis = "x") {
      const ship1 = ship(hps, name);
      this.totalhps += hps;

      if (axis === "x") {
        for (let a = 0; a < ship1.hps; a++) {
          let square = this.grid[row][col + a];
          square.ship = ship1;
        }
      } else {
        for (let a = 0; a < ship1.hps; a++) {
          let square = this.grid[row + a][col];
          square.ship = ship1;
        }
      }
      return ship1;
    },
    // attack method, called when a square on the grid is chosen for an attack.  If no ship occupies the space, returns a "missed" string while also alos assigning an attacked
    // property to that square object.  If a ship is found, call the hit() on that ship as well as assigned an attacked property to that square while returning a "hit" string
    recieveAttack(row, col) {
      const square = this.grid[row][col];
      if (square.attacked)
        return "Target already been fired on, select new target...";
      else if (square.ship) {
        square.attacked = true;
        square.ship.hit();
        this.hits++;
        if (square.ship.isSunk())
          return `Direct Hit - ${square.ship.name} Destroyed!`;
        else return "Direct Hit!";
      } else {
        square.attacked = true;
        this.misses++;
        return "Target Miss...";
      }
    },
    // method to determine if all ships on grid have been sunk, resulting in a game end
    allSunk() {
      return this.totalhps === this.hits ? true : false;
    },
  };
};

// player factory function that accepts a gameboard object as a parameter.  This effectively asigns the gamebaord to the player and enables methods within the player object to effect the gameboard
const player = (board) => {
  const grid = board.grid;
  return {
    grid,
    board,
    attack(player, row, col) {
      return player.board.recieveAttack(row, col);
    },
  };
};


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
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");




const volume = document.querySelector("#mp3");
const newGame = document.querySelector("#new-game");
const title = document.querySelector("#battleship");
const body = document.querySelector("body");

let audio = new Audio("Battlefield 1942.mp3"); // EA's Battlefield 1942 Main Theme.  Downloaded from archive.org
// audio.play();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDaUI7QUFDRjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDBDQUFtQjtBQUNyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9vYmplY3RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiTWFjaGluZVN0ZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IE1hY2hpbmU7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAgIDAlICAgICAge3RyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO31cXG4gICAgMzMlICAgICB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTt9XFxuICAgIDY2JSAgICAge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTt9XFxuICAgIDEwMCUgICAge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTt9XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNiYXR0bGVzaGlwIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDlyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBNYWNoaW5lLCBzYW4tc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDIyNSwyMjUsMjI1KSwgcmdiKDc4LCA3OCwgNzgpLCByZ2JhKDIyNSwyMjUsMjI1KSk7XFxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNDUlO1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgZWFzZS1pbi1vdXQgMXM7XFxufVxcblxcbiNtcDMge1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAxcHggbGltZWdyZWVuIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IGxpbWVncmVlbjtcXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAxMCwgLjI1KVxcbn1cXG5cXG5idXR0b246YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg5NSUpO1xcbn1cXG5cXG4jbmV3LWdhbWUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNjUlO1xcbn1cXG5cXG4uc2NyZWVuLWRpc3BsYXkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG1hcmdpbjogMTYwcHggMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbiAxcztcXG59XFxuXFxuLm1zZy1iYW5uZXIge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtM3JlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4ubXNnLW91dHB1dCB7XFxuICAgIGNvbG9yOiBsaW1lZ3JlZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5wbGFjZWhvbGRlciB7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWVncmVlbjtcXG59XFxuXFxuLmJsYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ncmlkLXNxdWFyZSB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6c29saWQgbGltZWdyZWVuIDFweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ncmlkLXNxdWFyZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAxMCwgLjI1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGVnIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuLmdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNDBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBwYWRkaW5nOiA1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ncmlkLW5hbWUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiBsaW1lZ3JlZW47XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKVxcbn1cXG5cXG4uc2hpcHMxLWRpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTE1MHB4O1xcbiAgICB0b3A6ODBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNoaXBzMi1kaXNwbGF5IHtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAtMTMwcHg7XFxuICAgIHRvcDo4MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hpcC1pY29ucyB7XFxuICAgIHdpZHRoOiAyMjVweDtcXG4gICAgaGVpZ2h0OiA3NXB4O1xcbiAgICB0cmFuc2l0aW9uOiBlYXNlLW91dCBvcGFjaXR5IDJzO1xcbn1cXG5cXG4uc2hha2Uge1xcbiAgICBhbmltYXRpb246IHNoYWtlIC41MHM7XFxufVxcblxcbi5zaW5rIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40NSk7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IGxpbWVncmVlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UtaW4gMXM7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLm5leHQtbWlzc2lvbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbiAxcztcXG59XFxuXFxuLmZhZGUtaW4ge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBjb2xvcjogbGltZWdyZWVuO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTZweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG5hPmltZyB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFNBQVMsMEJBQTBCLENBQUM7SUFDcEMsU0FBUyw0QkFBNEIsQ0FBQztJQUN0QyxTQUFTLDJCQUEyQixDQUFDO0lBQ3JDLFNBQVMsMkJBQTJCLENBQUM7QUFDekM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0Isa0ZBQWtGO0lBQ2xGLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixTQUFTO0lBQ1QsU0FBUztJQUNUO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osUUFBUTtJQUNSLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsVUFBVTtJQUNWLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogTWFjaGluZTtcXG4gICAgc3JjOiB1cmwoTWFjaGluZVN0ZC5vdGYpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gICAgMCUgICAgICB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7fVxcbiAgICAzMyUgICAgIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO31cXG4gICAgNjYlICAgICB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO31cXG4gICAgMTAwJSAgICB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO31cXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI2JhdHRsZXNoaXAge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogOXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IE1hY2hpbmUsIHNhbi1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjI1LDIyNSwyMjUpLCByZ2IoNzgsIDc4LCA3OCksIHJnYmEoMjI1LDIyNSwyMjUpKTtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA0NSU7XFxuICAgIHRyYW5zaXRpb246IHRvcCBlYXNlLWluLW91dCAxcztcXG59XFxuXFxuI21wMyB7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IDFweCBsaW1lZ3JlZW4gc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogbGltZWdyZWVuO1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDEwLCAuMjUpXFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDk1JSk7XFxufVxcblxcbiNuZXctZ2FtZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA2NSU7XFxufVxcblxcbi5zY3JlZW4tZGlzcGxheSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luOiAxNjBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluIDFzO1xcbn1cXG5cXG4ubXNnLWJhbm5lciB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IC0zcmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5tc2ctb3V0cHV0IHtcXG4gICAgY29sb3I6IGxpbWVncmVlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnBsYWNlaG9sZGVyIHtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xcbn1cXG5cXG4uYmxhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdyaWQtc3F1YXJlIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjpzb2xpZCBsaW1lZ3JlZW4gMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdyaWQtc3F1YXJlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDEwLCAuMjUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wZWcge1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA0MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIHBhZGRpbmc6IDVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmdyaWQtbmFtZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6IGxpbWVncmVlbjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpXFxufVxcblxcbi5zaGlwczEtZGlzcGxheSB7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMTUwcHg7XFxuICAgIHRvcDo4MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hpcHMyLWRpc3BsYXkge1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IC0xMzBweDtcXG4gICAgdG9wOjgwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaGlwLWljb25zIHtcXG4gICAgd2lkdGg6IDIyNXB4O1xcbiAgICBoZWlnaHQ6IDc1cHg7XFxuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IG9wYWNpdHkgMnM7XFxufVxcblxcbi5zaGFrZSB7XFxuICAgIGFuaW1hdGlvbjogc2hha2UgLjUwcztcXG59XFxuXFxuLnNpbmsge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQ1KTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogbGltZWdyZWVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbiAxcztcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4ubmV4dC1taXNzaW9uIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSBlYXNlLWluIDFzO1xcbn1cXG5cXG4uZmFkZS1pbiB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGNvbG9yOiBsaW1lZ3JlZW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxNnB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbmE+aW1nIHtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogYXV0bztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEFJQXR0YWNrVHVybiwgbmV3R2FtZSB9IGZyb20gXCIuL2dhbWUuanNcIjtcbmltcG9ydCBCQVRUTEVTSElQIGZyb20gXCIuL2Fzc2V0cy9iYXR0bGVzaGlwMS5wbmdcIjtcbmltcG9ydCBDQVJSSUVSIGZyb20gXCIuL2Fzc2V0cy9jYXJyaWVyLnBuZ1wiO1xuaW1wb3J0IERFU1RST1lFUiBmcm9tIFwiLi9hc3NldHMvZGVzdHJveWVyLnBuZ1wiO1xuaW1wb3J0IFNVQk1BUklORSBmcm9tIFwiLi9hc3NldHMvc3VibWFyaW5lLnBuZ1wiO1xuaW1wb3J0IFBBVFJPTEJPQVQgZnJvbSBcIi4vYXNzZXRzL3BhdHJvbGJvYXQucG5nXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuLy8gQ3JlYXRlTWFpbkRpc3BsYXkgaXMgY2FsbGVkIHdoZW4gYSBuZXcgZ2FtZSBpcyBzdGFydGVkLiAgQ3JlYXRlcyBET00gZWxlbWVudHMgdGhhdCByZXByZXNlbnQgdGhlIHBsYXllciBib2FyZHMgKGdyaWRzKSBhbmQgYXNzaWducyBsaXN0ZW5lciBldmVudHMgdG8gZWFjaCBvZiB0aGUgZ3JpZHMgc3F1YXJlcywgZGVwZW5kaW5nIG9uIHRoZSBwbGF5ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlTWFpbkRpc3BsYXkgPSAocGxheWVyMSwgcGxheWVyMiwgYm9hcmQxLCBib2FyZDIpID0+IHtcbiAgbGV0IHRpbWVvdXQgPSBbXTsgLy8gaW5pdGlhbGl6ZSB0aW1lb3V0IGFycmF5IHRvIGhvbGQgdGltZW91dCBJRHMsIHdvcmtzIGluIGNvbmp1bmN0aW9uIHdpdGggdHlwZVdyaXRlcigpXG5cbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XG4gIGRpc3BsYXkuY2xhc3NMaXN0LmFkZChcInNjcmVlbi1kaXNwbGF5XCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkaXNwbGF5LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgfSwgNTAwKTtcblxuICBjb25zdCBtc2diYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAvL3R5cGVXcml0ZXIoXCJDb21tYW5kZXIsIHNlbGVjdCB0YXJnZXQgYW5kIGZpcmUhXCIsIG1zZ291dHB1dCk7XG4gIG1zZ2Jhbm5lci5jbGFzc0xpc3QuYWRkKFwibXNnLWJhbm5lclwiKTtcbiAgZGlzcGxheS5hcHBlbmRDaGlsZChtc2diYW5uZXIpO1xuXG4gIGNvbnN0IG1zZ291dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBtc2dvdXRwdXQudGV4dENvbnRlbnQgPVxuICAgIFwiQ29tbWFuZGVyLCBlbmVteSBmbGVldCBpbiByYW5nZS4gU2VsZWN0IGNvb3JkaW5hdGVzLCBmaXJlIVwiO1xuICBtc2dvdXRwdXQuY2xhc3NMaXN0LmFkZChcIm1zZy1vdXRwdXRcIik7XG4gIG1zZ2Jhbm5lci5hcHBlbmRDaGlsZChtc2dvdXRwdXQpO1xuXG4gIC8vIEJsaW5raW5nIGN1cnNvci9wbGFjZWhvbGRlciBlbGVtZW50IGFuZCBlZmZlY3QgdXNlZCB0byB0YWlsIHRoZSBtZXNzYWdlc1xuICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJwbGFjZWhvbGRlclwiKTtcbiAgbXNnYmFubmVyLmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJibGFja1wiKTtcbiAgfSwgNTAwKTtcblxuICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1jb250YWluZXJcIik7XG4gIGRpc3BsYXkuYXBwZW5kQ2hpbGQoZ3JpZENvbnRhaW5lcik7XG5cbiAgLy8gR3JpZCAxIC8gcGxheWVyIDEuICBHcmlkIGNyZWF0ZWQgd2lsbCBoaWdobGlnaHQgc3F1YXJlcyB3aGVyZSB0aGUgc2hpcHMgYXJlIGxvY2F0ZWRcbiAgY29uc3QgRE9NZ3JpZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBET01ncmlkMS5jbGFzc0xpc3QuYWRkKFwiZ3JpZFwiKTtcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChET01ncmlkMSk7XG5cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmQxLmdyaWQubGVuZ3RoOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGJvYXJkMS5ncmlkW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImdyaWQtc3F1YXJlXCIpO1xuICAgICAgc3F1YXJlLmlkID0gYCR7cm93fWJ5JHtjb2x9YDsgLy8gSU1QT1JUQU5UIC0gSUQgaXMgdXNlZCB0byB0YXJnZXQgc3F1YXJlcyB0aGF0IHRoZSBBSSBhdHRhY2tlZC4gIFNxdWFyZSBjb2xvciB3aWxsIGJlIHVwZGF0ZWQgZGVwZW5kaW5nIG9uIGF0dGFjayBvdXRjb21lXG4gICAgICBET01ncmlkMS5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgaWYgKGJvYXJkMS5ncmlkW3Jvd11bY29sXS5zaGlwKSB7XG4gICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICB9XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgLy8gVGhpcyBFdmVudCBsaXN0ZW5lciB3aWxsIGJlIHVzZWQgb25jZSBjdXN0b20gc2hpcCBwbGFjZW1lbnQgaXMgaW1wbGVtZW50ZWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGdyaWQxbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdyaWQxbmFtZS50ZXh0Q29udGVudCA9IFwiQWxsaWVkIEZsZWV0XCI7XG4gIGdyaWQxbmFtZS5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1uYW1lXCIpO1xuICBET01ncmlkMS5hcHBlbmRDaGlsZChncmlkMW5hbWUpO1xuXG4gIC8vIENyZWF0ZSBzaGlwIGljb25zIGZvciBBbGxpZWQgZmxlZXRcbiAgY29uc3Qgc2hpcHMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2hpcHMxLmNsYXNzTGlzdC5hZGQoXCJzaGlwczEtZGlzcGxheVwiKTtcbiAgRE9NZ3JpZDEuYXBwZW5kQ2hpbGQoc2hpcHMxKTtcblxuICBjb25zdCBiYXR0bGVzaGlwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGJhdHRsZXNoaXAxLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWljb25zXCIpO1xuICBiYXR0bGVzaGlwMS5zcmMgPSBCQVRUTEVTSElQO1xuICBiYXR0bGVzaGlwMS5pZCA9IFwiQmF0dGxlc2hpcDFcIjtcblxuICBjb25zdCBjYXJyaWVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNhcnJpZXIxLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWljb25zXCIpO1xuICBjYXJyaWVyMS5zcmMgPSBDQVJSSUVSO1xuICBjYXJyaWVyMS5pZCA9IFwiQ2FycmllcjFcIjtcblxuICBjb25zdCBkZXN0cm95ZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgZGVzdHJveWVyMS5jbGFzc0xpc3QuYWRkKFwic2hpcC1pY29uc1wiKTtcbiAgZGVzdHJveWVyMS5zcmMgPSBERVNUUk9ZRVI7XG4gIGRlc3Ryb3llcjEuaWQgPSBcIkRlc3Ryb3llcjFcIjtcblxuICBjb25zdCBzdWJtYXJpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgc3VibWFyaW5lMS5jbGFzc0xpc3QuYWRkKFwic2hpcC1pY29uc1wiKTtcbiAgc3VibWFyaW5lMS5zcmMgPSBTVUJNQVJJTkU7XG4gIHN1Ym1hcmluZTEuaWQgPSBcIlN1Ym1hcmluZTFcIjtcblxuICBjb25zdCBwYXRyb2xib2F0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHBhdHJvbGJvYXQxLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWljb25zXCIpO1xuICBwYXRyb2xib2F0MS5zcmMgPSBQQVRST0xCT0FUO1xuICBwYXRyb2xib2F0MS5pZCA9IFwiUGF0cm9sIEJvYXQxXCI7XG5cbiAgc2hpcHMxLmFwcGVuZENoaWxkKGNhcnJpZXIxKTtcbiAgc2hpcHMxLmFwcGVuZENoaWxkKGJhdHRsZXNoaXAxKTtcbiAgc2hpcHMxLmFwcGVuZENoaWxkKGRlc3Ryb3llcjEpO1xuICBzaGlwczEuYXBwZW5kQ2hpbGQoc3VibWFyaW5lMSk7XG4gIHNoaXBzMS5hcHBlbmRDaGlsZChwYXRyb2xib2F0MSk7XG5cbiAgLy8gR3JpZCAyIC8gUGxheWVyIDIgKEFJIHBsYXllcikuICBHcmlkIGNyZWF0ZWQgd2lsbCBoYXZlIHNxdWFyZXMgdGhhdCBjb250YWluIGxpc3RlbmVyIGV2ZW50cyB0byB0byBmaXJlIHRoZSB0dXJuTG9vcCBmdW5jdGlvbi4gIFNoaXBzIHdpbGwgTk9UIGJlIHJldmVhbGVkIGFuZCBzcXVhcmVzIHdpbGwgaGF2ZSBjb2xvciBpbmRpY2F0b3JzIHRvIGluZGljYXRlIGhpdHMgb3IgbWlzc2VzLlxuICBjb25zdCBET01ncmlkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIERPTWdyaWQyLmNsYXNzTGlzdC5hZGQoXCJncmlkXCIpO1xuICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKERPTWdyaWQyKTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBib2FyZDIuZ3JpZC5sZW5ndGg7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgYm9hcmQyLmdyaWRbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1zcXVhcmVcIik7XG4gICAgICBET01ncmlkMi5hcHBlbmRDaGlsZChzcXVhcmUpO1xuXG4gICAgICAvLyBUaGlzIHBhcnRpY3VsYXIgZXZlbnQgbGlzdGVuZXIgZnVjbnRpb25zIGFzIHRoZSBnYW1lIGxvb3AsIGNhbGxzIHR1cm5Mb29wKCkgYW5kIGRpc2FibGVzIGN1cnNvciBldmVudHMgZm9yIDMgc2Vjb25kcyB0byBzZXQgZ2FtZSB0ZW1wb1xuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIERPTWdyaWQyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgdHVybkxvb3Aoc3F1YXJlLCBwbGF5ZXIxLCBwbGF5ZXIyLCBib2FyZDEsIGJvYXJkMiwgcm93LCBjb2wpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBET01ncmlkMi5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCI7XG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGdyaWQybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdyaWQybmFtZS50ZXh0Q29udGVudCA9IFwiRW5lbXkgRmxlZXRcIjtcbiAgZ3JpZDJuYW1lLmNsYXNzTGlzdC5hZGQoXCJncmlkLW5hbWVcIik7XG4gIERPTWdyaWQyLmFwcGVuZENoaWxkKGdyaWQybmFtZSk7XG5cbiAgLy8gQ3JlYXRlIHNoaXAgaWNvbnMgZm9yIEVuZW15IGZsZWV0XG4gIGNvbnN0IHNoaXBzMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNoaXBzMi5jbGFzc0xpc3QuYWRkKFwic2hpcHMyLWRpc3BsYXlcIik7XG4gIERPTWdyaWQyLmFwcGVuZENoaWxkKHNoaXBzMik7XG5cbiAgY29uc3QgYmF0dGxlc2hpcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBiYXR0bGVzaGlwMi5jbGFzc0xpc3QuYWRkKFwic2hpcC1pY29uc1wiKTtcbiAgYmF0dGxlc2hpcDIuc3JjID0gQkFUVExFU0hJUDtcbiAgYmF0dGxlc2hpcDIuaWQgPSBcIkJhdHRsZXNoaXAyXCI7XG5cbiAgY29uc3QgY2FycmllcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjYXJyaWVyMi5jbGFzc0xpc3QuYWRkKFwic2hpcC1pY29uc1wiKTtcbiAgY2FycmllcjIuc3JjID0gQ0FSUklFUjtcbiAgY2FycmllcjIuaWQgPSBcIkNhcnJpZXIyXCI7XG5cbiAgY29uc3QgZGVzdHJveWVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGRlc3Ryb3llcjIuY2xhc3NMaXN0LmFkZChcInNoaXAtaWNvbnNcIik7XG4gIGRlc3Ryb3llcjIuc3JjID0gREVTVFJPWUVSO1xuICBkZXN0cm95ZXIyLmlkID0gXCJEZXN0cm95ZXIyXCI7XG5cbiAgY29uc3Qgc3VibWFyaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHN1Ym1hcmluZTIuY2xhc3NMaXN0LmFkZChcInNoaXAtaWNvbnNcIik7XG4gIHN1Ym1hcmluZTIuc3JjID0gU1VCTUFSSU5FO1xuICBzdWJtYXJpbmUyLmlkID0gXCJTdWJtYXJpbmUyXCI7XG5cbiAgY29uc3QgcGF0cm9sYm9hdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBwYXRyb2xib2F0Mi5jbGFzc0xpc3QuYWRkKFwic2hpcC1pY29uc1wiKTtcbiAgcGF0cm9sYm9hdDIuc3JjID0gUEFUUk9MQk9BVDtcbiAgcGF0cm9sYm9hdDIuaWQgPSBcIlBhdHJvbCBCb2F0MlwiO1xuXG4gIHNoaXBzMi5hcHBlbmRDaGlsZChjYXJyaWVyMik7XG4gIHNoaXBzMi5hcHBlbmRDaGlsZChiYXR0bGVzaGlwMik7XG4gIHNoaXBzMi5hcHBlbmRDaGlsZChkZXN0cm95ZXIyKTtcbiAgc2hpcHMyLmFwcGVuZENoaWxkKHN1Ym1hcmluZTIpO1xuICBzaGlwczIuYXBwZW5kQ2hpbGQocGF0cm9sYm9hdDIpO1xufTtcblxuLy8gR2FtZSBPdmVyIGZ1bmN0aW9uLiAgQ3JlYXRlcyBhIG1vZGFsIG92ZXJsYXkgZGlzcGxheWluZyB0aGUgZ2FtZSBvdXRjb21lIGFuZCBhIGJ1dHRvbiBmb3IgYSBuZXcgZ2FtZS4gIElucHV0IHBhcmFtZXRlciBpcyB0aGUgcGxheWVyIG51bWJlciwgd2hpY2ggaXMgdXNlZCB0byBkZXRlcm1pbmUgaWYgcGxheWVyIHdpbnMgb3IgbG9zZXNcbmV4cG9ydCBjb25zdCBnYW1lT3ZlciA9IChwbGF5ZXIpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2NyZWVuLWRpc3BsYXlcIik7XG4gIGRpc3BsYXkuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmYWRlLWluXCIpO1xuICB9LCA1MDApO1xuXG4gIGNvbnN0IG1zZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1zZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibXNnLW91dHB1dFwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1zZ0NvbnRhaW5lcik7XG5cbiAgLy8gR2FtZSBvdXRjb21lIG1lc3NhZ2VcbiAgY29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG1zZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChtc2cpO1xuXG4gIC8vQmxpbmtpbmcgY3Vyb3Nvci9wbGFjZWhvbGRlclxuICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJwbGFjZWhvbGRlclwiKTtcbiAgbXNnQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJibGFja1wiKTtcbiAgfSwgNTAwKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAocGxheWVyID09PSAxKSB7XG4gICAgICB0eXBlV3JpdGVyKFxuICAgICAgICBcIkVuZW15IEZsZWV0IERlc3Ryb3llZCwgTWlzc2lvbiBBY2NvbXBsaXNoZWQhXCIsXG4gICAgICAgIG1zZyxcbiAgICAgICAgMCxcbiAgICAgICAgW10sXG4gICAgICAgIDEwMFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVdyaXRlcihcIkZsZWV0IERlc3Ryb3llZCwgWW91IExvc2UhXCIsIG1zZywgMCwgW10sIDEwMCk7XG4gICAgfVxuICB9LCAxNTAwKTtcblxuICAvLyBOZXcgR2FtZSBidXR0b25cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY29uc3QgbmV4dE1pc3Npb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5leHRNaXNzaW9uLnRleHRDb250ZW50ID0gXCJOZXh0IE1pc3Npb25cIjtcbiAgICBuZXh0TWlzc2lvbi5jbGFzc0xpc3QuYWRkKFwibmV4dC1taXNzaW9uXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXh0TWlzc2lvbik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBuZXh0TWlzc2lvbi5jbGFzc0xpc3QuYWRkKFwiZmFkZS1pblwiKTtcbiAgICB9LCAwKTtcbiAgICBuZXh0TWlzc2lvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5Lmxhc3RDaGlsZCk7IC8vIHJlbW92ZSBtb2RhbFxuICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5Lmxhc3RDaGlsZCk7IC8vIHJlbW92ZSBjdXJyZW50IGdhbWUgZGlzcGxheVxuICAgICAgbmV3R2FtZSgpOyAvLyBjcmVhdGUgYSBuZXcgZ2FtZVxuICAgIH0pO1xuICB9LCA4MDAwKTtcbn07XG5cbi8vIFR5cGV3cml0ZXIgZWZmZWN0IGZvciBVSSBkaXNwbGF5ZWQgbWVzc2FnZXMgdG8gdGhlIHBsYXllci4gIFJldHVybnMgYW4gYXJyYXkgb2YgdGltZW91dCBJRHMgdG8gYmUgdGFyZ2V0ZWQgaW4gdGhlIGV2ZW50IHF1ZXVlXG5jb25zdCB0eXBlV3JpdGVyID0gKFxuICB0ZXh0LFxuICBlbGVtZW50LFxuICBpbmRleCA9IDAsXG4gIHRpbWVvdXRBcnJheSA9IFtdLFxuICBpbnRlcnZhbCA9IDIwXG4pID0+IHtcbiAgaWYgKGluZGV4IDwgdGV4dC5sZW5ndGgpIHtcbiAgICBlbGVtZW50LnRleHRDb250ZW50ICs9IHRleHQuY2hhckF0KGluZGV4KTtcbiAgICBpbmRleCsrO1xuICAgIHRpbWVvdXRBcnJheS5wdXNoKFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHR5cGVXcml0ZXIodGV4dCwgZWxlbWVudCwgaW5kZXgsIHRpbWVvdXRBcnJheSwgaW50ZXJ2YWwpO1xuICAgICAgfSwgaW50ZXJ2YWwpXG4gICAgKTtcbiAgfVxuICByZXR1cm4gdGltZW91dEFycmF5O1xufTtcblxuLy8gQWRkcyBhIG5ldyBlbGVtZW50IHRvIHRoZSBncmlkIHNxdWFyZXMgd2hlbiBpdCdzIGF0dGFja2VkLCByZXByZXNlbnRhdGl2ZSBvZiB0aGUgcGVncyBpbiBiYXR0bGVzaGlwIGJvYXJkZ2FtZVxuLy8gbXNnID09PSAxIGluZGljYXRlcyBhIHdoaXRlIHBlZy9taXNzLCBtc2cgPT09IDIgaW5kaWNhdGVzIGEgcmVkIHBlZy9oaXRcbmNvbnN0IGFkZFBlZyA9IChncmlkU3F1YXJlLCBtc2cpID0+IHtcbiAgY29uc3QgcGVnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGVnLmNsYXNzTGlzdC5hZGQoXCJwZWdcIik7XG4gIGdyaWRTcXVhcmUuYXBwZW5kQ2hpbGQocGVnKTtcbiAgaWYgKG1zZyA9PT0gMSkgcGVnLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgZWxzZSBwZWcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbn07XG5cbi8vIFNoaXAgaWNvbiBzdW5rIGZ1bmN0aW9uLiAgV2lsbCBjaGFuZ2UgdGhlIGNvbG9yIG9mIHRoZSBzaGlwIGljb25zIGZvciBlaXRoZXIgcGxheWVyIHRvIGluZGljYXRlIHNoaXAgc3RhdHVzLiAgUGFyYW1zIHdpbGwgYmUgbWVzc2FnZSBvdXRwdXQgZnJvbSBwbGF5ZXIgYXR0YWNrIGZ1bmN0aW9uIGFuZCB0aGUgcGxheWVyIHRoYXQgaXMgdGFyZ2V0dGVkLlxuLy8gcGxheWVyID09IDEgaXMgaHVtYW4sIHBsYXllciA9PSAyIGlzIEFJXG5jb25zdCBzaGlwU3VuayA9IChtc2csIHBsYXllcikgPT4ge1xuICBsZXQgc2hpcHMgPSBbXG4gICAgXCJDYXJyaWVyXCIsXG4gICAgXCJEZXN0cm95ZXJcIixcbiAgICBcIkJhdHRsZXNoaXBcIixcbiAgICBcIlN1Ym1hcmluZVwiLFxuICAgIFwiUGF0cm9sIEJvYXRcIixcbiAgXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChtc2cuaW5jbHVkZXMoc2hpcHNbaV0pKSB7XG4gICAgICBsZXQgdGFyZ2V0U2hpcCA9IHNoaXBzW2ldO1xuICAgICAgbGV0IHRhcmdldEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRTaGlwICsgcGxheWVyKTsgLy8gVHlwZSBjb2VyY2lvbiB0byBhZGQgdGhlIHNoaXAgbmFtZSBhbmQgcGxheWVyIG51bWJlciB0byBnZXQgSUQgb2Ygc3BlY2lmaWMgc2hpcCBpY29uXG4gICAgICB0YXJnZXRJY29uLmNsYXNzTGlzdC5hZGQoXCJzaGFrZVwiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0YXJnZXRJY29uLmNsYXNzTGlzdC5hZGQoXCJzaW5rXCIpO1xuICAgICAgfSwgNzUwKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcblxuLy8gdHVybkxvb3AgZnVuY3Rpb24uICBQcm9jZXNzZXMgdGhlIHBsYXllcidzIGF0dGFjayB0aGVuIGZpcmVzIGFuIGF0dGFjayBmb3IgdGhlIEFJLiAgRWFjaCBzcXVhcmUgaW4gdGhlIEFJIGdyaWQgd2lsbCBoYXZlIGFuIG9uY2xpY2sgZXZlbnQgdGhhdCBmaXJlcyB0aGlzIGZ1bmN0aW9uLiAgUGFyYW1hdGVycyBwYXNzZWRcbi8vIGFyZSB0aGUgc3BlY2lmaWMgc3F1YXJlIGVsZW1lbnQgYW5kIGl0J3Mgcm93IGFuZCBjb2wgY29vcmRpbmF0ZXMuXG5jb25zdCB0dXJuTG9vcCA9IChzcXVhcmUsIHBsYXllcjEsIHBsYXllcjIsIGJvYXJkMSwgYm9hcmQyLCByb3csIGNvbCkgPT4ge1xuICBjb25zdCBtc2dvdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1zZy1vdXRwdXRcIik7XG5cbiAgbXNnb3V0cHV0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgbGV0IG1zZyA9IHBsYXllcjEuYXR0YWNrKHBsYXllcjIsIHJvdywgY29sKTtcbiAgaWYgKG1zZyA9PT0gXCJUYXJnZXQgTWlzcy4uLlwiKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhZGRQZWcoc3F1YXJlLCAxKTtcbiAgICB9LCAyNTApO1xuICAgIG1zZ291dHB1dC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgdHlwZVdyaXRlcihgQ2Fubm9uIEJhdHRlcnkgRmlyZSAtICR7bXNnfWAsIG1zZ291dHB1dCk7XG4gIH0gZWxzZSBpZiAobXNnID09PSBcIlRhcmdldCBhbHJlYWR5IGJlZW4gZmlyZWQgb24sIHNlbGVjdCBuZXcgdGFyZ2V0Li4uXCIpIHtcbiAgICBtc2dvdXRwdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHR5cGVXcml0ZXIobXNnLCBtc2dvdXRwdXQpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBhZGRQZWcoc3F1YXJlLCAyKTtcbiAgICBzaGlwU3Vuayhtc2csIDIpO1xuICAgIG1zZ291dHB1dC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgdHlwZVdyaXRlcihgQ2Fubm9uIEJhdHRlcnkgRmlyZSAtICR7bXNnfWAsIG1zZ291dHB1dCk7XG4gICAgaWYgKGJvYXJkMi5hbGxTdW5rKCkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBnYW1lT3ZlcigxKTtcbiAgICAgIH0sIDIwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFJIGF0dGFjayB0dXJuLiAgT25jZSB0aGUgYXR0YWNrIGNvbXBsZXRlcywgcGxheWVyIGdyaWQgVUkgd2lsbCB1cGRhdGUgdG8gcmVwcmVzZW50IHRoZSBBSSdzIGF0dGFjayB0YXJnZXRcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbGV0IGF0dGFjayA9IEFJQXR0YWNrVHVybihwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgICAvLyB0YXJnZXRzIHRoZSBzcXVhcmUgaW4gdGhlIHBsYXllcidzIGdyaWQgd2l0aCB0aGUgY29vcmRpbmF0ZSBJRCwgdGhlbiBjb2xvciBpcyB1cGRhdGVkIGFjY29yZGluaW5nIHRvIGF0dGFjayBvdXRjb21lXG4gICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2F0dGFjay5yb3d9Ynkke2F0dGFjay5jb2x9YCk7XG4gICAgaWYgKHBsYXllcjEuZ3JpZFthdHRhY2sucm93XVthdHRhY2suY29sXS5zaGlwKSB7XG4gICAgICBhZGRQZWcodGFyZ2V0LCAyKTtcbiAgICAgIHNoaXBTdW5rKGF0dGFjay5tc2csIDEpO1xuICAgICAgbXNnb3V0cHV0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIHR5cGVXcml0ZXIoYEVuZW15IEluY29taW5nIEZpcmUgLSAke2F0dGFjay5tc2d9YCwgbXNnb3V0cHV0KVxuICAgICAgaWYgKGJvYXJkMS5hbGxTdW5rKCkpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZ2FtZU92ZXIoMik7XG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtc2dvdXRwdXQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgdHlwZVdyaXRlcihgRW5lbXkgSW5jb21pbmcgRmlyZSAtICR7YXR0YWNrLm1zZ31gLCBtc2dvdXRwdXQpO1xuICAgICAgYWRkUGVnKHRhcmdldCwgMSk7XG4gICAgfVxuICB9LCAyMDAwKTtcbn07XG4iLCJpbXBvcnQgKiBhcyBvYmplY3RzIGZyb20gXCIuL29iamVjdHMuanNcIjtcbmltcG9ydCAqIGFzIERPTSBmcm9tIFwiLi9ET00uanNcIjtcblxuLy8gY3JlYXRlRmxlZXQgd2lsbCBjcmVhdGUgYSBmbGVldCBvZiBzaGlwcyBhbmQgcGxhY2UgdGhlbSByYW5kb21seSBvbiB0aGUgcGFzc2VkIGdhbWVib2FyZCBwYXJhbWV0ZXIuICBUaGUgbG9naWMgZW5zdXJlcyB0aGF0IHRoZSBzaGlwcyBkbyBub3Qgb3ZlcmxhcCBhbmQgYWxzbyByYW5kb21pemVzIHdoZXRoZXIgdGhlIHNoaXBzIGFyZSBwbGFjZWRcbi8vIGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5XG5leHBvcnQgY29uc3QgY3JlYXRlRmxlZXQgPSAoYm9hcmQpID0+IHtcbiAgLy8gZmxlZXQgYXJyYXkuICBTdGFuZGFyZCBCYXR0bGVzaGlwIGdhbWUgaGFzIDUgc2hpcHMgd2l0aCB0aGUgZm9sbG93aW5nIGJvYXQuaHBzIHZhbHVlczogMiwgMywgMywgNCwgNS5cbiAgY29uc3QgZmxlZXQgPSBbXG4gICAgeyBocHM6IDIsIG5hbWU6IFwiUGF0cm9sIEJvYXRcIiB9LFxuICAgIHsgaHBzOiAzLCBuYW1lOiBcIlN1Ym1hcmluZVwiIH0sXG4gICAgeyBocHM6IDMsIG5hbWU6IFwiRGVzdHJveWVyXCIgfSxcbiAgICB7IGhwczogNCwgbmFtZTogXCJCYXR0bGVzaGlwXCIgfSxcbiAgICB7IGhwczogNSwgbmFtZTogXCJDYXJyaWVyXCIgfSxcbiAgXTsgXG4gIGZsZWV0LmZvckVhY2goKGJvYXQpID0+IHtcbiAgICBsZXQgZGlyID0gTWF0aC5yYW5kb20oKSAqIDEwMDsgLy8gUmFuZG9tIG51bWJlciBnZW5lcmF0b3IgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHNoaXAgaXMgcGxhY2VkIHZlcnRpY2FsbHkgb3IgaG9yaXpvbnRhbGx5XG4gICAgaWYgKGRpciA+PSA1MCkge1xuICAgICAgLy8gPC0tLSBob3Jpem9udGFsXG4gICAgICBsZXQgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICBsZXQgY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDEwIC0gYm9hdC5ocHMpKTtcbiAgICAgIC8vIFBsYWNlIHNoaXAgaG9yaXpvbnRhbGx5LCBzd2l0Y2ggc3RhdGVtZW50IHdpbGwgZGV0ZWN0IGlmIGEgbmV3IHNoaXAgcGxhY2VtZW50IG92ZXJsYXBzIGFuIGFscmVhZHkgcGxhY2VkIHNoaXBcbiAgICAgIHN3aXRjaCAoYm9hdC5ocHMpIHtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHdoaWxlIChib2FyZC5ncmlkW3Jvd11bY29sXS5zaGlwIHx8IGJvYXJkLmdyaWRbcm93XVtjb2wgKyAxXS5zaGlwKSB7XG4gICAgICAgICAgICByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICAgIGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgxMCAtIGJvYXQuaHBzKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbF0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbCArIDFdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2wgKyAyXS5zaGlwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICAgIGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgxMCAtIGJvYXQuaHBzKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbF0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbCArIDFdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2wgKyAyXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sICsgM10uc2hpcFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgICBjb2wgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBib2F0LmhwcykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2xdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2wgKyAxXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3Jvd11bY29sICsgMl0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbCArIDNdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2wgKyA0XS5zaGlwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICAgIGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqICgxMCAtIGJvYXQuaHBzKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgYm9hcmQubmV3U2hpcChyb3csIGNvbCwgYm9hdC5ocHMsIGJvYXQubmFtZSwgXCJ4XCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyA8LS0gdmVydGljYWxcbiAgICAgIGxldCByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBib2F0LmhwcykpO1xuICAgICAgbGV0IGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgLy8gUGxhY2Ugc2hpcCB2ZXJ0aWNhbGx5LCBzd2l0Y2ggc3RhdGVtZW50IHdpbGwgZGV0ZWN0IGlmIGEgbmV3IHNoaXAgcGxhY2VtZW50IG92ZXJsYXBzIGFuIGFscmVhZHkgcGxhY2VkIHNoaXBcbiAgICAgIHN3aXRjaCAoYm9hdC5ocHMpIHtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHdoaWxlIChib2FyZC5ncmlkW3Jvd11bY29sXS5zaGlwIHx8IGJvYXJkLmdyaWRbcm93ICsgMV1bY29sXS5zaGlwKSB7XG4gICAgICAgICAgICByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBib2F0LmhwcykpO1xuICAgICAgICAgICAgY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbF0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3cgKyAxXVtjb2xdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93ICsgMl1bY29sXS5zaGlwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBib2F0LmhwcykpO1xuICAgICAgICAgICAgY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3ddW2NvbF0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3cgKyAxXVtjb2xdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93ICsgMl1bY29sXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3JvdyArIDNdW2NvbF0uc2hpcFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcm93ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKDEwIC0gYm9hdC5ocHMpKTtcbiAgICAgICAgICAgIGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHdoaWxlIChcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93XVtjb2xdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93ICsgMV1bY29sXS5zaGlwIHx8XG4gICAgICAgICAgICBib2FyZC5ncmlkW3JvdyArIDJdW2NvbF0uc2hpcCB8fFxuICAgICAgICAgICAgYm9hcmQuZ3JpZFtyb3cgKyAzXVtjb2xdLnNoaXAgfHxcbiAgICAgICAgICAgIGJvYXJkLmdyaWRbcm93ICsgNF1bY29sXS5zaGlwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByb3cgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBib2F0LmhwcykpO1xuICAgICAgICAgICAgY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgYm9hcmQubmV3U2hpcChyb3csIGNvbCwgYm9hdC5ocHMsIGJvYXQubmFtZSwgXCJ5XCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBOZXcgR2FtZSBNZXRob2QuICBJbml0YWxpemVzIGFsbCBnYW1lIFVJIGFuZCBsb2dpYyBieSBjYWxsaW5nIG1ldGhvZHMgZnJvbSBET00uanMgYW5kIG1haW4gZ2FtZSBvYmplY3RzIGZyb20gdGhlIGZhY3RvcmllcyBpbiBPYmplY3QuanMuXG5leHBvcnQgY29uc3QgbmV3R2FtZSA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQxID0gb2JqZWN0cy5nYW1lYm9hcmQoMTApO1xuICBjb25zdCBib2FyZDIgPSBvYmplY3RzLmdhbWVib2FyZCgxMCk7XG5cbiAgY29uc3QgcGxheWVyMSA9IG9iamVjdHMucGxheWVyKGJvYXJkMSk7XG4gIGNvbnN0IHBsYXllcjIgPSBvYmplY3RzLnBsYXllcihib2FyZDIpO1xuXG4gIGNyZWF0ZUZsZWV0KGJvYXJkMSk7XG4gIGNyZWF0ZUZsZWV0KGJvYXJkMik7XG5cbiAgRE9NLmNyZWF0ZU1haW5EaXNwbGF5KHBsYXllcjEsIHBsYXllcjIsIGJvYXJkMSwgYm9hcmQyKTtcbn07XG5cbi8vIEFJIGF0dGFjayBmdW5jdGlvbi4gIENhbGxzIGF0dGFjayBtZXRob2QgZnJvbSB0aGUgcGxheWVyIG9iamVjdCwgcmV0dXJucyB0aGUgcm93IGFuZCBjb2wgdmFsdWVzIHRhcmdldGVkIGluIGFuIGFycmF5XG5leHBvcnQgY29uc3QgQUlBdHRhY2tUdXJuID0gKHBsYXllciwgYWkpID0+IHtcbiAgbGV0IHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICBsZXQgY29sID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSk7XG5cbiAgd2hpbGUgKHBsYXllci5ncmlkW3Jvd11bY29sXS5hdHRhY2tlZCkge1xuICAgIHJvdyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIGNvbCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDkpO1xuICB9XG4gIGxldCBtc2cgPSBhaS5hdHRhY2socGxheWVyLCByb3csIGNvbCk7XG4gIHJldHVybiB7XG4gICAgcm93OiByb3csXG4gICAgY29sOiBjb2wsXG4gICAgbXNnOiBtc2csXG4gIH07XG59O1xuIiwiLy8gc2hpcCBmYWN0b3J5IGZ1bmN0aW9uLCB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIHNoaXAgb2JqZWN0cyB0byBiZSB1c2VkIG9uIHRoZSBnYW1lYm9hcmQuICAyIHB1YmxpYyBtZXRob2RzIHRvIGJlIHVzZWQgYnkgZ2FtZWJvYXJkXG5leHBvcnQgY29uc3Qgc2hpcCA9IChpbnB1dCwgbmFtZSkgPT4ge1xuICBsZXQgaHBzID0gaW5wdXQsXG4gICAgZG1nID0gMDtcblxuICByZXR1cm4ge1xuICAgIGhwcyxcbiAgICBuYW1lLFxuICAgIGhpdCgpIHtcbiAgICAgIGRtZysrO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBpc1N1bmsoKSB7XG4gICAgICByZXR1cm4gaHBzIDw9IGRtZyA/IHRydWUgOiBmYWxzZTtcbiAgICB9LFxuICB9O1xufTtcblxuLy8gZ2FtZWJvYXJkIGZhY3RvcnkgZnVuY3Rpb24sIHdpbGwgY3JlYXRlIGEgc3F1YXJlIGdyaWQgb2Ygb2JqZWN0cyBiYXNlZCBvbiBwYXJhbWV0ZXIgZGltLiAgRWFjaCBzcXVhcmUgb2JqZWN0IG9mIHRoZSBncmlkIHdpbGwgaW5pdGFpbGx5IGhhdmUgbm8gcHJvcGVydGllcyBidXQgcHJvcGVydGllcyB3aWxsIGJlIGFkZGVkIGRlcGVuZGluZ1xuLy8gb24gZ2FtZXN0YXRlLiAgRXhhbXBsZSwgaWYgYSBzaGlwIGlzIHBsYWNlZCBpbiB0aGUgc3F1YXJlLCBcInNoaXBcIiB3aWxsIGJlIGFkZGVkLiAgT3IgaWYgYSBzcXVhcmUgaXMgaGl0LCBcImhpdFwiIHByb3BlcnR5IHdpbGwgYmUgYWRkZWRcbmV4cG9ydCBjb25zdCBnYW1lYm9hcmQgPSAoZGltKSA9PiB7XG4gIC8vIGJ1aWxkIGdhbWVib2FyZCBncmlkXG4gIGNvbnN0IGdyaWQgPSBbXTtcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBkaW07IGErKykge1xuICAgIGxldCByb3cgPSBbXTtcbiAgICBncmlkLnB1c2gocm93KTtcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IGRpbTsgYisrKSB7XG4gICAgICByb3cucHVzaCh7fSk7XG4gICAgfVxuICB9XG5cbiAgLy8gdmFyaWFibGVzIHRvIHJlY29yZCBudW1iZXIgb2YgaGl0cyBhbmQgbWlzc2VzIGFzIHdlbGwgYXMga2VlcCB0cmFjayBvZiB0b3RhbCBzaGlwIGhpdHBvaW50cyBvbiBnYW1lYm9hcmRcbiAgbGV0IG1pc3NlcyA9IDAsXG4gICAgaGl0cyA9IDAsXG4gICAgdG90YWxocHMgPSAwO1xuXG4gIHJldHVybiB7XG4gICAgZ3JpZCxcbiAgICBtaXNzZXMsXG4gICAgaGl0cyxcbiAgICB0b3RhbGhwcyxcbiAgICAvLyBwbGFjZXMgYSBuZXcgc2hpcCgpIG9iamVjdCBvbiB0aGUgZ3JpZCB1c2luZyB0aGUgcHJvdmlkZWQgcm93IGFuZCBjb2wgcGFyYW1ldGVycyBhcyB0aGUgc3RhcnQgcG9zdGlvbi4gIGhwcyBkZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHNoaXAgcGxhY2VkIGFuZCBkZWZhdWx0c1xuICAgIC8vIHRoZSBwYWxjZW1lbnQgYWxvbmcgdGhlIHgtYXhpc1xuICAgIG5ld1NoaXAocm93LCBjb2wsIGhwcywgbmFtZSwgYXhpcyA9IFwieFwiKSB7XG4gICAgICBjb25zdCBzaGlwMSA9IHNoaXAoaHBzLCBuYW1lKTtcbiAgICAgIHRoaXMudG90YWxocHMgKz0gaHBzO1xuXG4gICAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBzaGlwMS5ocHM7IGErKykge1xuICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmdyaWRbcm93XVtjb2wgKyBhXTtcbiAgICAgICAgICBzcXVhcmUuc2hpcCA9IHNoaXAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHNoaXAxLmhwczsgYSsrKSB7XG4gICAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuZ3JpZFtyb3cgKyBhXVtjb2xdO1xuICAgICAgICAgIHNxdWFyZS5zaGlwID0gc2hpcDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzaGlwMTtcbiAgICB9LFxuICAgIC8vIGF0dGFjayBtZXRob2QsIGNhbGxlZCB3aGVuIGEgc3F1YXJlIG9uIHRoZSBncmlkIGlzIGNob3NlbiBmb3IgYW4gYXR0YWNrLiAgSWYgbm8gc2hpcCBvY2N1cGllcyB0aGUgc3BhY2UsIHJldHVybnMgYSBcIm1pc3NlZFwiIHN0cmluZyB3aGlsZSBhbHNvIGFsb3MgYXNzaWduaW5nIGFuIGF0dGFja2VkXG4gICAgLy8gcHJvcGVydHkgdG8gdGhhdCBzcXVhcmUgb2JqZWN0LiAgSWYgYSBzaGlwIGlzIGZvdW5kLCBjYWxsIHRoZSBoaXQoKSBvbiB0aGF0IHNoaXAgYXMgd2VsbCBhcyBhc3NpZ25lZCBhbiBhdHRhY2tlZCBwcm9wZXJ0eSB0byB0aGF0IHNxdWFyZSB3aGlsZSByZXR1cm5pbmcgYSBcImhpdFwiIHN0cmluZ1xuICAgIHJlY2lldmVBdHRhY2socm93LCBjb2wpIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuZ3JpZFtyb3ddW2NvbF07XG4gICAgICBpZiAoc3F1YXJlLmF0dGFja2VkKVxuICAgICAgICByZXR1cm4gXCJUYXJnZXQgYWxyZWFkeSBiZWVuIGZpcmVkIG9uLCBzZWxlY3QgbmV3IHRhcmdldC4uLlwiO1xuICAgICAgZWxzZSBpZiAoc3F1YXJlLnNoaXApIHtcbiAgICAgICAgc3F1YXJlLmF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgc3F1YXJlLnNoaXAuaGl0KCk7XG4gICAgICAgIHRoaXMuaGl0cysrO1xuICAgICAgICBpZiAoc3F1YXJlLnNoaXAuaXNTdW5rKCkpXG4gICAgICAgICAgcmV0dXJuIGBEaXJlY3QgSGl0IC0gJHtzcXVhcmUuc2hpcC5uYW1lfSBEZXN0cm95ZWQhYDtcbiAgICAgICAgZWxzZSByZXR1cm4gXCJEaXJlY3QgSGl0IVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3F1YXJlLmF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5taXNzZXMrKztcbiAgICAgICAgcmV0dXJuIFwiVGFyZ2V0IE1pc3MuLi5cIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIG1ldGhvZCB0byBkZXRlcm1pbmUgaWYgYWxsIHNoaXBzIG9uIGdyaWQgaGF2ZSBiZWVuIHN1bmssIHJlc3VsdGluZyBpbiBhIGdhbWUgZW5kXG4gICAgYWxsU3VuaygpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvdGFsaHBzID09PSB0aGlzLmhpdHMgPyB0cnVlIDogZmFsc2U7XG4gICAgfSxcbiAgfTtcbn07XG5cbi8vIHBsYXllciBmYWN0b3J5IGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIGdhbWVib2FyZCBvYmplY3QgYXMgYSBwYXJhbWV0ZXIuICBUaGlzIGVmZmVjdGl2ZWx5IGFzaWducyB0aGUgZ2FtZWJhb3JkIHRvIHRoZSBwbGF5ZXIgYW5kIGVuYWJsZXMgbWV0aG9kcyB3aXRoaW4gdGhlIHBsYXllciBvYmplY3QgdG8gZWZmZWN0IHRoZSBnYW1lYm9hcmRcbmV4cG9ydCBjb25zdCBwbGF5ZXIgPSAoYm9hcmQpID0+IHtcbiAgY29uc3QgZ3JpZCA9IGJvYXJkLmdyaWQ7XG4gIHJldHVybiB7XG4gICAgZ3JpZCxcbiAgICBib2FyZCxcbiAgICBhdHRhY2socGxheWVyLCByb3csIGNvbCkge1xuICAgICAgcmV0dXJuIHBsYXllci5ib2FyZC5yZWNpZXZlQXR0YWNrKHJvdywgY29sKTtcbiAgICB9LFxuICB9O1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0ICogYXMgZ2FtZU1ldGhvZHMgZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IHsgZ2FtZU92ZXIgfSBmcm9tIFwiLi9ET00uanNcIjtcblxuY29uc3Qgdm9sdW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtcDNcIik7XG5jb25zdCBuZXdHYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctZ2FtZVwiKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYXR0bGVzaGlwXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5sZXQgYXVkaW8gPSBuZXcgQXVkaW8oXCJCYXR0bGVmaWVsZCAxOTQyLm1wM1wiKTsgLy8gRUEncyBCYXR0bGVmaWVsZCAxOTQyIE1haW4gVGhlbWUuICBEb3dubG9hZGVkIGZyb20gYXJjaGl2ZS5vcmdcbi8vIGF1ZGlvLnBsYXkoKTtcbmF1ZGlvLmxvb3AgPSB0cnVlO1xuXG52b2x1bWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKGF1ZGlvLm11dGVkID09PSBmYWxzZSkge1xuICAgIGF1ZGlvLm11dGVkID0gdHJ1ZTtcbiAgICB2b2x1bWUuc3JjID0gXCJpbWFnZXMvbXV0ZS5wbmdcIjtcbiAgfSBlbHNlIHtcbiAgICBhdWRpby5tdXRlZCA9IGZhbHNlO1xuICAgIHZvbHVtZS5zcmMgPSBcImltYWdlcy92b2x1bWUucG5nXCI7XG4gIH1cbn0pO1xuXG5uZXdHYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5ld0dhbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB0aXRsZS5zdHlsZS50b3AgPSBcIjIlXCI7XG4gIGdhbWVNZXRob2RzLm5ld0dhbWUoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9