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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_IdentityService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _ui_component_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _ui_component_SelectBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _ui_component_SubmitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _ui_ui_TermsCheckBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _model_IdentityModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _ui_component_GuideMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19);










const app = () => {

  const identityService = new _service_IdentityService__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const identityModel = new _model_IdentityModel__WEBPACK_IMPORTED_MODULE_6__["default"]();
  const div = document.querySelector('.container');

  const carrierCode = new _ui_component_SelectBox__WEBPACK_IMPORTED_MODULE_3__["default"]('carrierCode', identityService, 'phoneNumber');
  const phoneNumber = new _ui_component_Input__WEBPACK_IMPORTED_MODULE_2__["default"]('phoneNumber', identityService, 13, 'registerNumber');
  const registerNumber = new _ui_component_Input__WEBPACK_IMPORTED_MODULE_2__["default"]('registerNumber', identityService, 10, 'name');
  const nameInput = new _ui_component_Input__WEBPACK_IMPORTED_MODULE_2__["default"]('name', identityService, 10);
  const sendSmsButton = new _ui_component_SubmitButton__WEBPACK_IMPORTED_MODULE_4__["default"](identityService, identityModel);
  const guideMessage = new _ui_component_GuideMessage__WEBPACK_IMPORTED_MODULE_7__["default"]();

  const checkBoxTerm = new _ui_ui_TermsCheckBox__WEBPACK_IMPORTED_MODULE_5__["default"](identityService);


  /** render */
  div.appendChild(carrierCode);
  div.appendChild(phoneNumber);
  div.appendChild(registerNumber);
  div.appendChild(nameInput);
  div.appendChild(guideMessage);
  div.appendChild(checkBoxTerm);

  div.appendChild(sendSmsButton);
  document.getElementById('phoneNumber').focus();


};

app();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(3);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".title { font-size: 20px; font-weight: bold; margin: 30px 0px 5px 0px; color: black }\n.sub-title { color: #2ca3ac; margin: 5px 0px; }\ndiv.container { color: #777777 ;width: 300px; margin: 0px auto; font-size: 14px; }\ndiv.box-div { margin: 20px auto; }\ndiv.input-div { border-bottom: 1px solid #777777 ; display: inline-block; width: 100%; margin:5px 0px; }\ndiv.invalid { border-bottom: 1px solid red ; }\ninput, select { border: 0px; width: 100%; font-size: 20px; }\ninput:focus { outline: none }\ninput.send-btn { color: white; background: black; width: 100%; height: 50px; border-radius: 7px; font-size: 15px; }\ndiv.terms-div { margin: 7px 0px; }\ninput.checkbox-div {width: 20px; margin-right: 10px;}\nlabel.checkbox-label {}\n.check-all { color:#000000; font-size: 17px; padding: 10px 0px; }\n.check-all .checkbox-label { color:#000000; font-size: 17px; }\np.guide { margin: 35px 0px 40px 0px; }\nhr { border: 0px; border-top: #d9d9d9 1px solid; margin-bottom: 25px; }\n\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/* Firefox */\ninput[type=number] {\n    -moz-appearance: textfield;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_IdentityModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);


class IdentityService {
  //
  constructor(identity) {
    //
    this.identity = new _model_IdentityModel__WEBPACK_IMPORTED_MODULE_0__["default"](identity);
  }

  setIdentityTerms(key) {
    //
    if (!this.identity) {
      this.setIdentityProps('termsCode', [key]);

    } else if (this.identity.termsCode.includes(key)) {
      const terms = this.identity.termsCode.filter(terms => terms !== key);
      this.setIdentityProps('termsCode', [...terms]);

    } else {
      this.setIdentityProps('termsCode', [
        ...this.identity.termsCode,
        key,
      ])
    }
  }

  setIdentityProps(key, value) {
    //
    if (typeof value === 'string') {
      value = value.replace(/ /g,"").replace(/-/g,"");

    }
    this.identity = {
      ...this.identity,
      [key]: value,
    }
  }

  getIdentity() {
    //
    return this.identity;
  }

}

Object.defineProperty(IdentityService, 'instance', {
  value: new IdentityService(),
  writable: false,
  configurable: false,
});

/* harmony default export */ __webpack_exports__["default"] = (IdentityService);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _termsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _util_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);



class IdentityModel {
  //
  constructor(identity) {
    //
    this.name = null;
    this.registerNumber = null;
    this.carrierCode = null;
    this.phoneNumber = null;
    this.termsCode = [];

    if(identity) {
      if (identity.name) this.name = identity.name;
      if (identity.registerNumber) this.registerNumber = identity.registerNumber;
      if (identity.carrierCode) this.carrierCode = identity.carrierCode;
      if (identity.phoneNumber) this.phoneNumber = identity.phoneNumber;
      if (identity.termsCode) this.termsCode = identity.termsCode;
    }
  }

  isBlank(identity) {
    //
    if (!identity.carrierCode) return 'carrierCode';
    if (!identity.phoneNumber) return 'phoneNumber';
    if (!identity.registerNumber) return 'registerNumber';
    if (!identity.name) return 'name';

    const requilredList = _termsList__WEBPACK_IMPORTED_MODULE_0__["termsList"].filter(terms => terms.required);
    const count = requilredList.filter(required => identity.termsCode.includes(required.termsId) );
    if(requilredList.length !== count.length) return 'termsCode';
  }

  isIncorrect(identity) {
    //
    const inCorrectList = [];

    const { name, registerNumber, carrierCode, phoneNumber, termsCode } = identity;

    if (name) {
      if (name.length < 2 || name.length > 10 || _util_validation__WEBPACK_IMPORTED_MODULE_1__["validation"].nameCheck(name)) {
        inCorrectList.push('name');
        
      }
    } else {
      inCorrectList.push('name');
    }

    if (registerNumber) {
      if (registerNumber.length < 7 || _util_validation__WEBPACK_IMPORTED_MODULE_1__["validation"].numCheck(registerNumber)) {
        inCorrectList.push('registerNumber');
        
      }
    } else {
      inCorrectList.push('registerNumber');
    }
    
    if (!carrierCode) {
      inCorrectList.push('inCorrectList');
      
    }

    if (phoneNumber) {
      if (![10, 11].includes(phoneNumber.length) || _util_validation__WEBPACK_IMPORTED_MODULE_1__["validation"].phoneCheck(phoneNumber)) {
        inCorrectList.push('phoneNumber');
      }
    } else {
      inCorrectList.push('phoneNumber');
    }

    if (termsCode) {
      const requilredList = _termsList__WEBPACK_IMPORTED_MODULE_0__["termsList"].filter(terms => terms.required);
      const count = requilredList.filter(required => termsCode.includes(required.termsId) );
      if(requilredList.length !== count.length) {
        inCorrectList.push('termsCode');
      };
    } else {
      inCorrectList.push('termsCode');
    }

    return inCorrectList;

  }
}

/* harmony default export */ __webpack_exports__["default"] = (IdentityModel);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "termsList", function() { return termsList; });
const termsList = Object.freeze([
  { "termsId": "1", "title": "본인확인 이용동의", "required": true },
  { "termsId": "2", "title": "개인 정보 수집/이용/취급 위탁동의", "required": true },
  { "termsId": "3", "title": "고유식별번호 처리 동의", "required": true },
  { "termsId": "4", "title": "(선택) 카카오 플러스 친구 추가 동의", "required": false }
]);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validation", function() { return validation; });
const validation = {
  //
  nameCheck: (value) => {
    //
    const regexp = /([^가-힣\x20])/i;
    if (value.length < 2 || value.length > 10) {
      return true;
    }
    return regexp.test(value);
  },
  numCheck: (value) => {
    //
    value = value.replace(/ /g,"").replace(/-/g,"");

    if (value.length === 0 ) {
      return

    } else if (value.length < 7) {
      return true;

    } else if (value.slice(6,7) > 4) {
      return true;

    }
    const regexp = /^[0-9]*$/;

    return !regexp.test(value);
  },
  phoneCheck: (value) => {
    //
    value = value.replace(/ /g,"");

    if (value.length === 0 ) {
      return

    } else if (value.length < 10) {
      return true;

    } else if (value.slice(0, 2) !== '01') {
      return true;

    }
    const regexp = /^[0-9]*$/;

    return !regexp.test(value.trim().replace(/-/, ''));
  },
};


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _model_identityKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _util_formatToPhone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _util_formatToRegister__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);





function Input(key, identityService, maxLength, nextFocusTarget) {
  //
  const div = document.createElement('div');
  const spanDiv = document.createElement('div');
  const span = document.createElement('span');
  const input = document.createElement('input');
  const inputDiv = document.createElement('div');

  div.className = 'box-div';
  inputDiv.className = 'input-div';
  input.maxLength = maxLength;
  input.id = key;

  input.addEventListener('keydown', (e) => {
    //

  });

  if (key === 'phoneNumber') {
    input.addEventListener('keydown', _util_formatToPhone__WEBPACK_IMPORTED_MODULE_2__["default"]);

  } else if (key === 'registerNumber') {
    input.addEventListener('keydown', _util_formatToRegister__WEBPACK_IMPORTED_MODULE_3__["default"]);

  }

  input.addEventListener('focusout', (e) => {
    //
    let result;

    if (key === 'name') {
      result = _util_validation__WEBPACK_IMPORTED_MODULE_0__["validation"].nameCheck(e.target.value);

    } else if (key === 'registerNumber') {
      result = _util_validation__WEBPACK_IMPORTED_MODULE_0__["validation"].numCheck(e.target.value);

    } else if (key === 'phoneNumber') {
      result = _util_validation__WEBPACK_IMPORTED_MODULE_0__["validation"].phoneCheck(e.target.value);

    }

    if (result) {
      inputDiv.className = `input-div ${key} invalid`;

    } else {
      inputDiv.className = `input-div ${key}`;

    }
  });

  input.addEventListener('keyup', e => {
    //
    identityService.setIdentityProps(key, e.target.value);
    const length = e.target.value.replace(/ /g,"").replace(/-/g,"").length;

    if (e.key === 'Tab' || e.key === 'Shift' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      return;
    }

    if (key === 'phoneNumber') {
      const { value } = e.target;
      input.value = value.slice(0, value.length-1) + value.slice(-1).replace(/[^0-9]/g,"");

      if (length === 11) {
        const result = _util_validation__WEBPACK_IMPORTED_MODULE_0__["validation"].phoneCheck(e.target.value);

        if (!result) {
          document.getElementById(nextFocusTarget).focus();

        } else {
          inputDiv.className = `input-div ${key} invalid`;

        }
      } else if (e.key == 'Backspace' && e.target.value.slice(-1) === ' ') {
        input.value = e.target.value.slice(0, e.target.value.length-1);
      }

    } else if (key === 'registerNumber') {
      const { value } = e.target;
      input.value = value.slice(0, value.length-1) + value.slice(-1).replace(/[^0-9]/g,"");

      if (length === 7) {
        document.getElementById(nextFocusTarget).focus();

      } else if (e.key == 'Backspace' ) {
        input.value = e.target.value.replace(/[^0-9]/g,"");
      }
    }
  });

  /** render */
  span.innerHTML = _model_identityKey__WEBPACK_IMPORTED_MODULE_1__["identityKey"][key];
  spanDiv.appendChild(span);
  inputDiv.appendChild(input);
  div.appendChild(spanDiv);
  div.appendChild(inputDiv);

  return div;
}

/* harmony default export */ __webpack_exports__["default"] = (Input);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identityKey", function() { return identityKey; });
const identityKey = Object.freeze({
  name: '이름',
  registerNumber: '주민등록번호',
  carrierCode: '통신사',
  phoneNumber: '휴대폰 번호',
  termsCode: [
    '본인확인 이용동의',
    '개인정보 수집/이용/취급 위탁동의',
    '고유식별번호 처리 동의',
    '(선택) 카카오 플러스 친구 추가 동의',
  ],
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isModifierKey = e => {
  //
  const key = e.keyCode;
  return (e.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
    (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
    (key > 36 && key < 41) || // Allow left, up, right, down
    (
      // Allow Ctrl/Command + A,C,V,X,Z
      (e.ctrlKey === true || e.metaKey === true) &&
      (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
    )
};

const formatToPhone = e => {
  if(isModifierKey(e)) { return; }

  const target = e.target;
  const input = target.value.replace(/\D/g,'');
  const zip = input.substring(0,3);
  const middle = input.substring(3,6);
  const last = input.substring(6,10);

  const middle2 = input.substring(3,7);
  const last2 = input.substring(7,11);

  if(input.length > 9){target.value = `${zip} ${middle2} ${last2}`;}
  else if(input.length > 5){target.value = `${zip} ${middle} ${last}`;}
  else if(input.length > 3){target.value = `${zip} ${middle}`;}
  else if(input.length > 0){target.value = `${zip}`;}
};

/* harmony default export */ __webpack_exports__["default"] = (formatToPhone);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isNumericInput = e => {
  //
  const key = e.keyCode;
  return ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) // Allow number line || Allow number pad
  );
};

const isModifierKey = e => {
  //
  const key = e.keyCode;
  return (e.shiftKey === true || key === 35 || key === 36) ||
    (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
    (key > 36 && key < 41) || // Allow left, up, right, down
    (
      // Allow Ctrl/Command + A,C,V,X,Z
      (e.ctrlKey === true || e.metaKey === true) &&
      (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
    )
};

const formatToRegister = e => {
  //
  if(isModifierKey(e)) {
    return;
  }

  const target = e.target;
  const input = target.value.replace(/\D/g,'');
  const birthday = input.substring(0,6);
  const sex = input.substring(6,7);

  if(input.length > 5){target.value = `${birthday} - ${sex}`;}
  else if(input.length > 0){target.value = `${birthday}`;}
};

/* harmony default export */ __webpack_exports__["default"] = (formatToRegister);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_identityKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _model_carrierList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);



function SelectBox(key, identityService, nextFocusTarget) {
  //
  const div = document.createElement('div');
  const spanDiv = document.createElement('div');
  const span = document.createElement('span');
  const selectBoxDiv = document.createElement('div');
  const selectBox = document.createElement('select');

  div.className = 'box-div';
  selectBoxDiv.className = 'input-div';

  _model_carrierList__WEBPACK_IMPORTED_MODULE_1__["carrierList"].map(carrier => {
    //
    const option = document.createElement('option');
    option.value = carrier.code;
    option.text = carrier.description;
    selectBox.appendChild(option);
  });

  identityService.setIdentityProps('carrierCode', _model_carrierList__WEBPACK_IMPORTED_MODULE_1__["carrierList"][0].code);

  selectBox.onchange = e => {
    //
    identityService.setIdentityProps('carrierCode', e.target.value);
    document.getElementById(nextFocusTarget).focus();
  };

  span.innerHTML = _model_identityKey__WEBPACK_IMPORTED_MODULE_0__["identityKey"][key];

  /** render */
  spanDiv.appendChild(span);
  selectBoxDiv.appendChild(selectBox);
  div.appendChild(spanDiv);
  div.appendChild(selectBoxDiv);
  return div;

}

/* harmony default export */ __webpack_exports__["default"] = (SelectBox);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carrierList", function() { return carrierList; });
const carrierList = Object.freeze([
  { "code": "SKT", "description": "SKT" },
  { "code": "KT", "description": "KT" },
  { "code": "LGT", "description": "LG U+" },
  { "code": "SKTMVNO", "description": "SKT 알뜰폰" },
  { "code": "KTMVNO", "description": "KT 알뜰폰" },
  { "code": "LGTMVNO", "description": "LG U+ 알뜰폰" }
]);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function SubmitButton(identityService, identityModel) {
  //
  const input = document.createElement('input');

  input.type = 'button';
  input.className = `send-btn`;
  input.value = '인증번호 요청';
  input.onclick = e => {

    const blankValue = identityModel.isBlank(identityService.getIdentity());
    const result = identityModel.isIncorrect(identityService.getIdentity());
    // console.log('부적한 값들: ', result);

    if (blankValue) {
      // alert(identityKey[blankValue] + ' 은(는) 필수값입니다.');

    } else if (result.length === 0) {
      console.log(identityService.getIdentity());

    }
  };

  return input;
}

/* harmony default export */ __webpack_exports__["default"] = (SubmitButton);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_CheckBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _model_termsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _component_CheckBoxAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);




function TermsCheckBox(identityService) {
  //
  const termsDiv = document.createElement('div');
  const checkboxList = [];
  const checkBoxAll = new _component_CheckBoxAll__WEBPACK_IMPORTED_MODULE_2__["default"](identityService, checkboxList);

  _model_termsList__WEBPACK_IMPORTED_MODULE_1__["termsList"].map(term => {
    //
    const checkBox = new _component_CheckBox__WEBPACK_IMPORTED_MODULE_0__["default"](identityService, term, checkBoxAll);
    checkboxList.push(checkBox);
    termsDiv.appendChild(checkBox);
  });

  termsDiv.appendChild(checkBoxAll);
  return termsDiv;
}

/* harmony default export */ __webpack_exports__["default"] = (TermsCheckBox);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function CheckBox(identityService, term, checkBoxAll) {
  //
  const checkDiv = document.createElement('div');
  const input = document.createElement('input');
  const label = document.createElement('label');

  input.id = 'term_'+term.termsId;
  input.type = 'checkbox';
  input.checked = identityService.getIdentity().termsCode[term.termsId];
  input.value = term.termsId;

  checkDiv.className = 'terms-div';
  input.className = 'checkbox-div';
  label.className = 'checkbox-label';

  label.htmlFor = 'term_'+term.termsId;
  label.innerText = term.title;

  input.onclick = e => {
    //
    identityService.setIdentityTerms(term.termsId);
    const input = checkBoxAll.querySelector('input');

    if (identityService.getIdentity().termsCode.length === 4) {
      input.checked = true;

    } else {
      input.checked = false;

    }
  };

  /** render */
  checkDiv.appendChild(input);
  checkDiv.appendChild(label);

  return checkDiv;
}

/* harmony default export */ __webpack_exports__["default"] = (CheckBox);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_termsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);


function CheckboxAll(identityService, checkboxList) {
  //
  const checkDiv = document.createElement('div');
  const input = document.createElement('input');
  const label = document.createElement('label');

  input.id = 'term_all';
  input.type = 'checkbox';

  label.htmlFor = 'term_all';
  label.innerText = '전체 동의하기';

  checkDiv.className = 'terms-div check-all';
  input.className = 'checkbox-div';
  label.className = 'checkbox-label';

  input.onclick = e => {
    //
    const { identity } = identityService;

    if (identity && identity.termsCode.length === _model_termsList__WEBPACK_IMPORTED_MODULE_0__["termsList"].length) {
      identityService.setIdentityProps('termsCode', []);
      checkboxList.map(div => {
        const checkbox = div.querySelector('input');
        checkbox.checked = false;
        input.checked = false;
      })

    } else {
      identityService.setIdentityProps('termsCode', checkboxList.map(div => {
        const checkBox = div.querySelector('input');
        return checkBox.value;
      }));

      checkboxList.map(div => {
        const checkbox = div.querySelector('input');
        checkbox.checked = true;
        input.checked = true;
      })

    }
  };

  /** render */
  checkDiv.appendChild(input);
  checkDiv.appendChild(label);

  return checkDiv;
}

/* harmony default export */ __webpack_exports__["default"] = (CheckboxAll);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function GuideMessage () {
  //
  const div = document.createElement('div');
  const pTag = document.createElement('p');
  const hr = document.createElement('hr');
  pTag.innerText = '❔ 모든 정보가 올바르게 입력되었음에도 인증번호 요청이 되지 않는 경우 가입하신 통신사에 문의해주세요';
  pTag.className = 'guide';

  div.appendChild(pTag);
  div.appendChild(hr);

  return div;
}

/* harmony default export */ __webpack_exports__["default"] = (GuideMessage);

/***/ })
/******/ ]);