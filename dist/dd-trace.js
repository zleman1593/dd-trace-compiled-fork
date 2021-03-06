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
/******/ 	return __webpack_require__(__webpack_require__.s = "./browser.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./browser.js":
/*!********************!*\
  !*** ./browser.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./packages/dd-trace/browser */ "./packages/dd-trace/browser.js");

/***/ }),

/***/ "./ext/exporters.js":
/*!**************************!*\
  !*** ./ext/exporters.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  LOG: 'log',
  BROWSER: 'browser',
  AGENT: 'agent'
};

/***/ }),

/***/ "./ext/formats.js":
/*!************************!*\
  !*** ./ext/formats.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var opentracing = __webpack_require__(/*! opentracing */ "./node_modules/opentracing/lib/index.js");

module.exports = {
  TEXT_MAP: opentracing.FORMAT_TEXT_MAP,
  HTTP_HEADERS: opentracing.FORMAT_HTTP_HEADERS,
  BINARY: opentracing.FORMAT_BINARY,
  LOG: 'log'
};

/***/ }),

/***/ "./ext/index.js":
/*!**********************!*\
  !*** ./ext/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__(/*! ./formats */ "./ext/formats.js");

var kinds = __webpack_require__(/*! ./kinds */ "./ext/kinds.js");

var priority = __webpack_require__(/*! ./priority */ "./ext/priority.js");

var tags = __webpack_require__(/*! ./tags */ "./ext/tags.js");

var types = __webpack_require__(/*! ./types */ "./ext/types.js");

var exporters = __webpack_require__(/*! ./exporters */ "./ext/exporters.js");

module.exports = {
  formats: formats,
  kinds: kinds,
  priority: priority,
  tags: tags,
  types: types,
  exporters: exporters
};

/***/ }),

/***/ "./ext/kinds.js":
/*!**********************!*\
  !*** ./ext/kinds.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  SERVER: 'server',
  CLIENT: 'client',
  PRODUCER: 'producer',
  CONSUMER: 'consumer'
};

/***/ }),

/***/ "./ext/priority.js":
/*!*************************!*\
  !*** ./ext/priority.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  USER_REJECT: -1,
  AUTO_REJECT: 0,
  AUTO_KEEP: 1,
  USER_KEEP: 2
};

/***/ }),

/***/ "./ext/scopes.js":
/*!***********************!*\
  !*** ./ext/scopes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  ASYNC_HOOKS: 'async_hooks',
  NOOP: 'noop'
};

/***/ }),

/***/ "./ext/tags.js":
/*!*********************!*\
  !*** ./ext/tags.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tags = {
  // Common
  SERVICE_NAME: 'service.name',
  RESOURCE_NAME: 'resource.name',
  SPAN_TYPE: 'span.type',
  SPAN_KIND: 'span.kind',
  SAMPLING_PRIORITY: 'sampling.priority',
  ANALYTICS: '_dd1.sr.eausr',
  ERROR: 'error',
  MANUAL_KEEP: 'manual.keep',
  MANUAL_DROP: 'manual.drop',
  // HTTP
  HTTP_URL: 'http.url',
  HTTP_METHOD: 'http.method',
  HTTP_STATUS_CODE: 'http.status_code',
  HTTP_ROUTE: 'http.route',
  HTTP_REQUEST_HEADERS: 'http.request.headers',
  HTTP_RESPONSE_HEADERS: 'http.response.headers'
}; // Deprecated

tags.ANALYTICS_SAMPLE_RATE = tags.ANALYTICS;
module.exports = tags;

/***/ }),

/***/ "./ext/types.js":
/*!**********************!*\
  !*** ./ext/types.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  HTTP: 'http',
  WEB: 'web'
};

/***/ }),

/***/ "./node_modules/core-js/es/map/index.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/es/map/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.map */ "./node_modules/core-js/modules/es.map.js");

__webpack_require__(/*! ../../modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path.Map;

/***/ }),

/***/ "./node_modules/core-js/es/object/assign.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/es/object/assign.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");

var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path.Object.assign;

/***/ }),

/***/ "./node_modules/core-js/es/set/index.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/es/set/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.set */ "./node_modules/core-js/modules/es.set.js");

__webpack_require__(/*! ../../modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path.Set;

/***/ }),

/***/ "./node_modules/core-js/es/typed-array/index.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/es/typed-array/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.typed-array.int8-array */ "./node_modules/core-js/modules/es.typed-array.int8-array.js");

__webpack_require__(/*! ../../modules/es.typed-array.uint8-array */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");

__webpack_require__(/*! ../../modules/es.typed-array.uint8-clamped-array */ "./node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js");

__webpack_require__(/*! ../../modules/es.typed-array.int16-array */ "./node_modules/core-js/modules/es.typed-array.int16-array.js");

__webpack_require__(/*! ../../modules/es.typed-array.uint16-array */ "./node_modules/core-js/modules/es.typed-array.uint16-array.js");

__webpack_require__(/*! ../../modules/es.typed-array.int32-array */ "./node_modules/core-js/modules/es.typed-array.int32-array.js");

__webpack_require__(/*! ../../modules/es.typed-array.uint32-array */ "./node_modules/core-js/modules/es.typed-array.uint32-array.js");

__webpack_require__(/*! ../../modules/es.typed-array.float32-array */ "./node_modules/core-js/modules/es.typed-array.float32-array.js");

__webpack_require__(/*! ../../modules/es.typed-array.float64-array */ "./node_modules/core-js/modules/es.typed-array.float64-array.js");

__webpack_require__(/*! ./methods */ "./node_modules/core-js/es/typed-array/methods.js");

module.exports = __webpack_require__(/*! ../../internals/global */ "./node_modules/core-js/internals/global.js");

/***/ }),

/***/ "./node_modules/core-js/es/typed-array/methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/es/typed-array/methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.typed-array.from */ "./node_modules/core-js/modules/es.typed-array.from.js");

__webpack_require__(/*! ../../modules/es.typed-array.of */ "./node_modules/core-js/modules/es.typed-array.of.js");

__webpack_require__(/*! ../../modules/es.typed-array.copy-within */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");

__webpack_require__(/*! ../../modules/es.typed-array.every */ "./node_modules/core-js/modules/es.typed-array.every.js");

__webpack_require__(/*! ../../modules/es.typed-array.fill */ "./node_modules/core-js/modules/es.typed-array.fill.js");

__webpack_require__(/*! ../../modules/es.typed-array.filter */ "./node_modules/core-js/modules/es.typed-array.filter.js");

__webpack_require__(/*! ../../modules/es.typed-array.find */ "./node_modules/core-js/modules/es.typed-array.find.js");

__webpack_require__(/*! ../../modules/es.typed-array.find-index */ "./node_modules/core-js/modules/es.typed-array.find-index.js");

__webpack_require__(/*! ../../modules/es.typed-array.for-each */ "./node_modules/core-js/modules/es.typed-array.for-each.js");

__webpack_require__(/*! ../../modules/es.typed-array.includes */ "./node_modules/core-js/modules/es.typed-array.includes.js");

__webpack_require__(/*! ../../modules/es.typed-array.index-of */ "./node_modules/core-js/modules/es.typed-array.index-of.js");

__webpack_require__(/*! ../../modules/es.typed-array.join */ "./node_modules/core-js/modules/es.typed-array.join.js");

__webpack_require__(/*! ../../modules/es.typed-array.last-index-of */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");

__webpack_require__(/*! ../../modules/es.typed-array.map */ "./node_modules/core-js/modules/es.typed-array.map.js");

__webpack_require__(/*! ../../modules/es.typed-array.reduce */ "./node_modules/core-js/modules/es.typed-array.reduce.js");

__webpack_require__(/*! ../../modules/es.typed-array.reduce-right */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");

__webpack_require__(/*! ../../modules/es.typed-array.reverse */ "./node_modules/core-js/modules/es.typed-array.reverse.js");

__webpack_require__(/*! ../../modules/es.typed-array.set */ "./node_modules/core-js/modules/es.typed-array.set.js");

__webpack_require__(/*! ../../modules/es.typed-array.slice */ "./node_modules/core-js/modules/es.typed-array.slice.js");

__webpack_require__(/*! ../../modules/es.typed-array.some */ "./node_modules/core-js/modules/es.typed-array.some.js");

__webpack_require__(/*! ../../modules/es.typed-array.sort */ "./node_modules/core-js/modules/es.typed-array.sort.js");

__webpack_require__(/*! ../../modules/es.typed-array.subarray */ "./node_modules/core-js/modules/es.typed-array.subarray.js");

__webpack_require__(/*! ../../modules/es.typed-array.to-locale-string */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");

__webpack_require__(/*! ../../modules/es.typed-array.to-string */ "./node_modules/core-js/modules/es.typed-array.to-string.js");

__webpack_require__(/*! ../../modules/es.typed-array.iterator */ "./node_modules/core-js/modules/es.typed-array.iterator.js");

__webpack_require__(/*! ../../modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  }

  return it;
};

/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  }

  return it;
};

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
} // add a key to Array.prototype[@@unscopables]


module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ "./node_modules/core-js/internals/an-instance.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  }

  return it;
};

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  }

  return it;
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-native.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-native.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer-view-core.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-view-core.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-native */ "./node_modules/core-js/internals/array-buffer-native.js");

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");

var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var Int8Array = global.Int8Array;
var Int8ArrayPrototype = Int8Array && Int8Array.prototype;
var Uint8ClampedArray = global.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array && getPrototypeOf(Int8Array);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var isPrototypeOf = ObjectPrototype.isPrototypeOf;
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG'); // Fixing native typed arrays in Opera Presto crashes the browser, see #595

var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf && classof(global.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQIRED = false;
var NAME;
var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var isView = function isView(it) {
  var klass = classof(it);
  return klass === 'DataView' || has(TypedArrayConstructorsList, klass);
};

var isTypedArray = function (it) {
  return isObject(it) && has(TypedArrayConstructorsList, classof(it));
};

var aTypedArray = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (setPrototypeOf) {
    if (isPrototypeOf.call(TypedArray, C)) return C;
  } else for (var ARRAY in TypedArrayConstructorsList) if (has(TypedArrayConstructorsList, NAME)) {
    var TypedArrayConstructor = global[ARRAY];

    if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
      return C;
    }
  }

  throw TypeError('Target is not a typed array constructor');
};

var exportTypedArrayMethod = function (KEY, property, forced) {
  if (!DESCRIPTORS) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global[ARRAY];

    if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
      delete TypedArrayConstructor.prototype[KEY];
    }
  }

  if (!TypedArrayPrototype[KEY] || forced) {
    redefine(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS) return;

  if (setPrototypeOf) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global[ARRAY];

      if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
        delete TypedArrayConstructor[KEY];
      }
    }

    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array[KEY] || property);
      } catch (error) {
        /* empty */
      }
    } else return;
  }

  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global[ARRAY];

    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      redefine(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  if (!global[NAME]) NATIVE_ARRAY_BUFFER_VIEWS = false;
} // WebKit bug - typed arrays constructors prototype is Object.prototype


if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow
  TypedArray = function TypedArray() {
    throw TypeError('Incorrect invocation');
  };

  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global[NAME]) setPrototypeOf(global[NAME].prototype, TypedArrayPrototype);
  }
} // WebKit bug - one more object in Uint8ClampedArray prototype chain


if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS && !has(TypedArrayPrototype, TO_STRING_TAG)) {
  TYPED_ARRAY_TAG_REQIRED = true;
  defineProperty(TypedArrayPrototype, TO_STRING_TAG, {
    get: function () {
      return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
    }
  });

  for (NAME in TypedArrayConstructorsList) if (global[NAME]) {
    createNonEnumerableProperty(global[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

module.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-buffer.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var NATIVE_ARRAY_BUFFER = __webpack_require__(/*! ../internals/array-buffer-native */ "./node_modules/core-js/internals/array-buffer-native.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var toIndex = __webpack_require__(/*! ../internals/to-index */ "./node_modules/core-js/internals/to-index.js");

var IEEE754 = __webpack_require__(/*! ../internals/ieee754 */ "./node_modules/core-js/internals/ieee754.js");

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");

var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var arrayFill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length';
var WRONG_INDEX = 'Wrong index';
var NativeArrayBuffer = global[ARRAY_BUFFER];
var $ArrayBuffer = NativeArrayBuffer;
var $DataView = global[DATA_VIEW];
var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
var ObjectPrototype = Object.prototype;
var RangeError = global.RangeError;
var packIEEE754 = IEEE754.pack;
var unpackIEEE754 = IEEE754.unpack;

var packInt8 = function (number) {
  return [number & 0xFF];
};

var packInt16 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF];
};

var packInt32 = function (number) {
  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
};

var unpackInt32 = function (buffer) {
  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
};

var packFloat32 = function (number) {
  return packIEEE754(number, 23, 4);
};

var packFloat64 = function (number) {
  return packIEEE754(number, 52, 8);
};

var addGetter = function (Constructor, key) {
  defineProperty(Constructor[PROTOTYPE], key, {
    get: function () {
      return getInternalState(this)[key];
    }
  });
};

var get = function (view, count, index, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = bytes.slice(start, start + count);
  return isLittleEndian ? pack : pack.reverse();
};

var set = function (view, count, index, conversion, value, isLittleEndian) {
  var intIndex = toIndex(index);
  var store = getInternalState(view);
  if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
  var bytes = getInternalState(store.buffer).bytes;
  var start = intIndex + store.byteOffset;
  var pack = conversion(+value);

  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
};

if (!NATIVE_ARRAY_BUFFER) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    setInternalState(this, {
      bytes: arrayFill.call(new Array(byteLength), 0),
      byteLength: byteLength
    });
    if (!DESCRIPTORS) this.byteLength = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = getInternalState(buffer).byteLength;
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    setInternalState(this, {
      buffer: buffer,
      byteLength: byteLength,
      byteOffset: offset
    });

    if (!DESCRIPTORS) {
      this.buffer = buffer;
      this.byteLength = byteLength;
      this.byteOffset = offset;
    }
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, 'byteLength');
    addGetter($DataView, 'buffer');
    addGetter($DataView, 'byteLength');
    addGetter($DataView, 'byteOffset');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset
    /* , littleEndian */
    ) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
    },
    getUint32: function getUint32(byteOffset
    /* , littleEndian */
    ) {
      return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
    },
    getFloat64: function getFloat64(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packInt8, value);
    },
    setInt16: function setInt16(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint16: function setUint16(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setInt32: function setInt32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setUint32: function setUint32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat32: function setFloat32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
    },
    setFloat64: function setFloat64(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
    }
  });
} else {
  if (!fails(function () {
    NativeArrayBuffer(1);
  }) || !fails(function () {
    new NativeArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new NativeArrayBuffer(); // eslint-disable-line no-new

    new NativeArrayBuffer(1.5); // eslint-disable-line no-new

    new NativeArrayBuffer(NaN); // eslint-disable-line no-new

    return NativeArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new NativeArrayBuffer(toIndex(length));
    };

    var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];

    for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) {
        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
      }
    }

    ArrayBufferPrototype.constructor = $ArrayBuffer;
  } // WebKit bug - the same parent prototype for typed arrays and data view


  if (setPrototypeOf && getPrototypeOf($DataViewPrototype) !== ObjectPrototype) {
    setPrototypeOf($DataViewPrototype, ObjectPrototype);
  } // iOS Safari 7.x bug


  var testView = new $DataView(new $ArrayBuffer(2));
  var nativeSetInt8 = $DataViewPrototype.setInt8;
  testView.setInt8(0, 2147483648);
  testView.setInt8(1, 2147483649);
  if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
    setInt8: function setInt8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, {
    unsafe: true
  });
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
module.exports = {
  ArrayBuffer: $ArrayBuffer,
  DataView: $DataView
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-copy-within.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/array-copy-within.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var min = Math.min; // `Array.prototype.copyWithin` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.copywithin

module.exports = [].copyWithin || function copyWithin(target
/* = 0 */
, start
/* = 0, end = @length */
) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;

  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }

  while (count-- > 0) {
    if (from in O) O[to] = O[from];else delete O[to];
    to += inc;
    from += inc;
  }

  return O;
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-fill.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-fill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js"); // `Array.prototype.fill` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.fill


module.exports = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject(this);
  var length = toLength(O.length);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

  while (endPos > index) O[index++] = value;

  return O;
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js"); // `Array.prototype.{ indexOf, includes }` methods implementation


var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");

var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation

var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;

    for (; length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);

      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
            case 3:
              return true;
            // some

            case 5:
              return value;
            // find

            case 6:
              return index;
            // findIndex

            case 2:
              push.call(target, value);
            // filter
          } else if (IS_EVERY) return false; // every
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-last-index-of.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/array-last-index-of.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var min = Math.min;
var nativeLastIndexOf = [].lastIndexOf;
var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('lastIndexOf'); // For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', {
  ACCESSORS: true,
  1: 0
});
var FORCED = NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH; // `Array.prototype.lastIndexOf` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof

module.exports = FORCED ? function lastIndexOf(searchElement
/* , fromIndex = @[*-1] */
) {
  // convert -0 to +0
  if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
  var O = toIndexedObject(this);
  var length = toLength(O.length);
  var index = length - 1;
  if (arguments.length > 1) index = min(index, toInteger(arguments[1]));
  if (index < 0) index = length + index;

  for (; index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;

  return -1;
} : nativeLastIndexOf;

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () {
      throw 1;
    }, 1);
  });
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) {
  throw it;
};

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;
  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = {
      length: -1
    };
    if (ACCESSORS) defineProperty(O, 1, {
      enumerable: true,
      get: thrower
    });else O[1] = 1;
    method.call(O, argument0, argument1);
  });
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js"); // `Array.prototype.{ reduce, reduceRight }` methods implementation


var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }

      index += i;

      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }

    for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }

    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};

/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate

module.exports = function (originalArray, length) {
  var C;

  if (isArray(originalArray)) {
    C = originalArray.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"); // call something on iterator step with safe closing on error


module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return {
        done: !!called++
      };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };

  iteratorWithReturn[ITERATOR] = function () {
    return this;
  }; // eslint-disable-next-line no-throw-literal


  Array.from(iteratorWithReturn, function () {
    throw 2;
  });
} catch (error) {
  /* empty */
}

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;

  try {
    var object = {};

    object[ITERATOR] = function () {
      return {
        next: function () {
          return {
            done: ITERATION_SUPPORT = true
          };
        }
      };
    };

    exec(object);
  } catch (error) {
    /* empty */
  }

  return ITERATION_SUPPORT;
};

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag'); // ES3 wrong here

var CORRECT_ARGUMENTS = classofRaw(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) {
    /* empty */
  }
}; // getting tag from ES6+ `Object.prototype.toString`


module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag // builtinTag case
  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

/***/ }),

/***/ "./node_modules/core-js/internals/collection-strong.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/collection-strong.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");

var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");

var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");

var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");

var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var fastKey = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").fastKey;

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });
    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index; // change existing entry

      if (entry) {
        entry.value = value; // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;else that.size++; // add to index

        if (index !== 'F') state.index[index] = entry;
      }

      return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that); // fast case

      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index]; // frozen object case

      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;

        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }

        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);

        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;else that.size--;
        }

        return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn
      /* , that = undefined */
      ) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;

        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this); // revert to the last existing entry

          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });
    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME); // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11

    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last; // revert to the last existing entry

      while (entry && entry.removed) entry = entry.previous; // get next entry


      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return {
          value: undefined,
          done: true
        };
      } // return step by kind


      if (kind == 'keys') return {
        value: entry.key,
        done: false
      };
      if (kind == 'values') return {
        value: entry.value,
        done: false
      };
      return {
        value: [entry.key, entry.value],
        done: false
      };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

    setSpecies(CONSTRUCTOR_NAME);
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/collection.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/collection.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js");

var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");

var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY, KEY == 'add' ? function add(value) {
      nativeMethod.call(this, value === 0 ? 0 : value);
      return this;
    } : KEY == 'delete' ? function (key) {
      return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
    } : KEY == 'get' ? function get(key) {
      return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
    } : KEY == 'has' ? function has(key) {
      return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
    } : function set(key, value) {
      nativeMethod.call(this, key === 0 ? 0 : key, value);
      return this;
    });
  }; // eslint-disable-next-line max-len


  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor(); // early implementations not supports chaining

    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false

    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    }); // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new

    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
      new NativeConstructor(iterable);
    }); // for early implementations -0 and +0 not the same

    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;

      while (index--) $instance[ADDER](index, index);

      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({
    global: true,
    forced: Constructor != NativeConstructor
  }, exported);
  setToStringTag(Constructor, CONSTRUCTOR_NAME);
  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
  return Constructor;
};

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");

var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() {
    /* empty */
  }

  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;

var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () {
  return this;
};

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, {
    next: createPropertyDescriptor(1, next)
  });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};

/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");

var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () {
  return this;
};

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

    switch (KIND) {
      case KEYS:
        return function keys() {
          return new IteratorConstructor(this, KIND);
        };

      case VALUES:
        return function values() {
          return new IteratorConstructor(this, KIND);
        };

      case ENTRIES:
        return function entries() {
          return new IteratorConstructor(this, KIND);
        };
    }

    return function () {
      return new IteratorConstructor(this);
    };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY; // fix native

  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));

    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      } // Set @@toStringTag to native iterators


      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;

    defaultIterator = function values() {
      return nativeIterator.call(this);
    };
  } // define iterator


  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }

  Iterators[NAME] = defaultIterator; // export additional methods

  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({
      target: NAME,
      proto: true,
      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
    }, methods);
  }

  return methods;
};

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js"); // Thank's IE8 for his funny defineProperty


module.exports = !fails(function () {
  return Object.defineProperty({}, 1, {
    get: function () {
      return 7;
    }
  })[1] != 7;
});

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document; // typeof document.createElement is 'object' in old IE

var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/


module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }

  if (target) for (key in source) {
    sourceProperty = source[key];

    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];

    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    } // add a flag to not completely full polyfills


    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    } // extend global


    redefine(target, key, sourceProperty, options);
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/freezing.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js"); // optional / simple context binding


module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 0:
      return function () {
        return fn.call(that);
      };

    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};

/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var check = function (it) {
  return it && it.Math == Math && it;
}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


module.exports = // eslint-disable-next-line no-undef
check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof global == 'object' && global) || // eslint-disable-next-line no-new-func
Function('return this')();

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js"); // Thank's IE8 for his funny defineProperty


module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/internals/ieee754.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/ieee754.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IEEE754 conversions based on https://github.com/feross/ieee754
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = 1 / 0;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;

var pack = function (number, mantissaLength, bytes) {
  var buffer = new Array(bytes);
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
  var index = 0;
  var exponent, mantissa, c;
  number = abs(number); // eslint-disable-next-line no-self-compare

  if (number != number || number === Infinity) {
    // eslint-disable-next-line no-self-compare
    mantissa = number != number ? 1 : 0;
    exponent = eMax;
  } else {
    exponent = floor(log(number) / LN2);

    if (number * (c = pow(2, -exponent)) < 1) {
      exponent--;
      c *= 2;
    }

    if (exponent + eBias >= 1) {
      number += rt / c;
    } else {
      number += rt * pow(2, 1 - eBias);
    }

    if (number * c >= 2) {
      exponent++;
      c /= 2;
    }

    if (exponent + eBias >= eMax) {
      mantissa = 0;
      exponent = eMax;
    } else if (exponent + eBias >= 1) {
      mantissa = (number * c - 1) * pow(2, mantissaLength);
      exponent = exponent + eBias;
    } else {
      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
      exponent = 0;
    }
  }

  for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);

  exponent = exponent << mantissaLength | mantissa;
  exponentLength += mantissaLength;

  for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);

  buffer[--index] |= sign * 128;
  return buffer;
};

var unpack = function (buffer, mantissaLength) {
  var bytes = buffer.length;
  var exponentLength = bytes * 8 - mantissaLength - 1;
  var eMax = (1 << exponentLength) - 1;
  var eBias = eMax >> 1;
  var nBits = exponentLength - 7;
  var index = bytes - 1;
  var sign = buffer[index--];
  var exponent = sign & 127;
  var mantissa;
  sign >>= 7;

  for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);

  mantissa = exponent & (1 << -nBits) - 1;
  exponent >>= -nBits;
  nBits += mantissaLength;

  for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);

  if (exponent === 0) {
    exponent = 1 - eBias;
  } else if (exponent === eMax) {
    return mantissa ? NaN : sign ? -Infinity : Infinity;
  } else {
    mantissa = mantissa + pow(2, mantissaLength);
    exponent = exponent - eBias;
  }

  return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
};

module.exports = {
  pack: pack,
  unpack: unpack
};

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js"); // makes subclassing work correct for wrapped built-ins


module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if ( // it can work only with native `setPrototypeOf`
  setPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};

/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;

/***/ }),

/***/ "./node_modules/core-js/internals/internal-metadata.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/internal-metadata.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, {
    value: {
      objectID: 'O' + ++id,
      // object ID
      weakData: {} // weak collections IDs

    }
  });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMetadata(it); // return object ID
  }

  return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMetadata(it); // return the store of weak collections IDs
  }

  return it[METADATA].weakData;
}; // add metadata on freeze-family methods calling


var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};
hiddenKeys[METADATA] = true;

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;

    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    }

    return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;

  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };

  get = function (it) {
    return wmget.call(store, it) || {};
  };

  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;

  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };

  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };

  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype; // check on default Array iterator

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js"); // `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray


module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
module.exports = isForced;

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),

/***/ "./node_modules/core-js/internals/iterate.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");

var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES ? boundFunction(anObject(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      }

      return new Result(false);
    }

    iterator = iterFn.call(iterable);
  }

  next = iterator.next;

  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  }

  return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};

/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () {
  return this;
}; // `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object


var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;
module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");

var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty; // `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign

module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({
    b: 1
  }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), {
    b: 2
  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) {
    B[chr] = chr;
  });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;

  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  }

  return T;
} : nativeAssign;

/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");

var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");

var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () {
  /* empty */
};

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak

  return temp;
}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
}; // Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug


var activeXDocument;

var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) {
    /* ignore */
  }

  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;

  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];

  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true; // `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = NullProtoObject();

  return Properties === undefined ? result : defineProperties(result, Properties);
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js"); // `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties


module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;

  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);

  return O;
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty

exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) {
    /* empty */
  }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof

module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectPrototype : null;
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");

var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key); // Don't enum bug & hidden keys


  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js"); // `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys


module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
  1: 2
}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js"); // `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */


module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;

  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) {
    /* empty */
  }

  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
    return O;
  };
}() : undefined);

/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js"); // `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring


module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");

var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js"); // all object keys, includes non-enumerable and symbols


module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;

/***/ }),

/***/ "./node_modules/core-js/internals/redefine-all.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/redefine-all.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);

  return target;
};

/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');
(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;

  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }

  if (O === global) {
    if (simple) O[key] = value;else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }

  if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  }

  return value;
};

/***/ }),

/***/ "./node_modules/core-js/internals/set-species.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, {
      configurable: true,
      value: TAG
    });
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});
module.exports = store;

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor

module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};

/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"); // `String.prototype.{ codePointAt, at }` methods implementation


var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min; // Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-index.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/to-index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js"); // `ToIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-toindex


module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length or index');
  return length;
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor; // `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger

module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min; // `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength

module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js"); // `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject


module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-offset.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-offset.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPositiveInteger = __webpack_require__(/*! ../internals/to-positive-integer */ "./node_modules/core-js/internals/to-positive-integer.js");

module.exports = function (it, BYTES) {
  var offset = toPositiveInteger(it);
  if (offset % BYTES) throw RangeError('Wrong offset');
  return offset;
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-positive-integer.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/to-positive-integer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

module.exports = function (it) {
  var result = toInteger(it);
  if (result < 0) throw RangeError("The argument can't be less than 0");
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js"); // `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
module.exports = String(test) === '[object z]';

/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-constructor.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-constructor.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(/*! ../internals/typed-array-constructors-require-wrappers */ "./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js");

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var ArrayBufferModule = __webpack_require__(/*! ../internals/array-buffer */ "./node_modules/core-js/internals/array-buffer.js");

var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");

var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var toIndex = __webpack_require__(/*! ../internals/to-index */ "./node_modules/core-js/internals/to-index.js");

var toOffset = __webpack_require__(/*! ../internals/to-offset */ "./node_modules/core-js/internals/to-offset.js");

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");

var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;

var typedArrayFrom = __webpack_require__(/*! ../internals/typed-array-from */ "./node_modules/core-js/internals/typed-array-from.js");

var forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");

var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");

var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var round = Math.round;
var RangeError = global.RangeError;
var ArrayBuffer = ArrayBufferModule.ArrayBuffer;
var DataView = ArrayBufferModule.DataView;
var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
var TYPED_ARRAY_TAG = ArrayBufferViewCore.TYPED_ARRAY_TAG;
var TypedArray = ArrayBufferViewCore.TypedArray;
var TypedArrayPrototype = ArrayBufferViewCore.TypedArrayPrototype;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var isTypedArray = ArrayBufferViewCore.isTypedArray;
var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
var WRONG_LENGTH = 'Wrong length';

var fromList = function (C, list) {
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);

  while (length > index) result[index] = list[index++];

  return result;
};

var addGetter = function (it, key) {
  nativeDefineProperty(it, key, {
    get: function () {
      return getInternalState(this)[key];
    }
  });
};

var isArrayBuffer = function (it) {
  var klass;
  return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
};

var isTypedArrayIndex = function (target, key) {
  return isTypedArray(target) && typeof key != 'symbol' && key in target && String(+key) == String(key);
};

var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
  return isTypedArrayIndex(target, key = toPrimitive(key, true)) ? createPropertyDescriptor(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
};

var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
  if (isTypedArrayIndex(target, key = toPrimitive(key, true)) && isObject(descriptor) && has(descriptor, 'value') && !has(descriptor, 'get') && !has(descriptor, 'set') // TODO: add validation descriptor w/o calling accessors
  && !descriptor.configurable && (!has(descriptor, 'writable') || descriptor.writable) && (!has(descriptor, 'enumerable') || descriptor.enumerable)) {
    target[key] = descriptor.value;
    return target;
  }

  return nativeDefineProperty(target, key, descriptor);
};

if (DESCRIPTORS) {
  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
    getOwnPropertyDescriptorModule.f = wrappedGetOwnPropertyDescriptor;
    definePropertyModule.f = wrappedDefineProperty;
    addGetter(TypedArrayPrototype, 'buffer');
    addGetter(TypedArrayPrototype, 'byteOffset');
    addGetter(TypedArrayPrototype, 'byteLength');
    addGetter(TypedArrayPrototype, 'length');
  }

  $({
    target: 'Object',
    stat: true,
    forced: !NATIVE_ARRAY_BUFFER_VIEWS
  }, {
    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
    defineProperty: wrappedDefineProperty
  });

  module.exports = function (TYPE, wrapper, CLAMPED) {
    var BYTES = TYPE.match(/\d+$/)[0] / 8;
    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + TYPE;
    var SETTER = 'set' + TYPE;
    var NativeTypedArrayConstructor = global[CONSTRUCTOR_NAME];
    var TypedArrayConstructor = NativeTypedArrayConstructor;
    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
    var exported = {};

    var getter = function (that, index) {
      var data = getInternalState(that);
      return data.view[GETTER](index * BYTES + data.byteOffset, true);
    };

    var setter = function (that, index, value) {
      var data = getInternalState(that);
      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
    };

    var addElement = function (that, index) {
      nativeDefineProperty(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
        anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
        var index = 0;
        var byteOffset = 0;
        var buffer, byteLength, length;

        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new ArrayBuffer(byteLength);
        } else if (isArrayBuffer(data)) {
          buffer = data;
          byteOffset = toOffset(offset, BYTES);
          var $len = data.byteLength;

          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - byteOffset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
          }

          length = byteLength / BYTES;
        } else if (isTypedArray(data)) {
          return fromList(TypedArrayConstructor, data);
        } else {
          return typedArrayFrom.call(TypedArrayConstructor, data);
        }

        setInternalState(that, {
          buffer: buffer,
          byteOffset: byteOffset,
          byteLength: byteLength,
          length: length,
          view: new DataView(buffer)
        });

        while (index < length) addElement(that, index++);
      });
      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create(TypedArrayPrototype);
    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS) {
      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
        anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
        return inheritIfRequired(function () {
          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
          if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
          return typedArrayFrom.call(TypedArrayConstructor, data);
        }(), dummy, TypedArrayConstructor);
      });
      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
        if (!(key in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
        }
      });
      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
    }

    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
    }

    if (TYPED_ARRAY_TAG) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
    }

    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
    $({
      global: true,
      forced: TypedArrayConstructor != NativeTypedArrayConstructor,
      sham: !NATIVE_ARRAY_BUFFER_VIEWS
    }, exported);

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
    }

    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
    }

    setSpecies(CONSTRUCTOR_NAME);
  };
} else module.exports = function () {
  /* empty */
};

/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-new */
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var NATIVE_ARRAY_BUFFER_VIEWS = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").NATIVE_ARRAY_BUFFER_VIEWS;

var ArrayBuffer = global.ArrayBuffer;
var Int8Array = global.Int8Array;
module.exports = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
  Int8Array(1);
}) || !fails(function () {
  new Int8Array(-1);
}) || !checkCorrectnessOfIteration(function (iterable) {
  new Int8Array();
  new Int8Array(null);
  new Int8Array(1.5);
  new Int8Array(iterable);
}, true) || fails(function () {
  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
  return new Int8Array(new ArrayBuffer(2), 1, undefined).length !== 1;
});

/***/ }),

/***/ "./node_modules/core-js/internals/typed-array-from.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/typed-array-from.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");

var aTypedArrayConstructor = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").aTypedArrayConstructor;

module.exports = function from(source
/* , mapfn, thisArg */
) {
  var O = toObject(source);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var i, length, result, step, iterator, next;

  if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    O = [];

    while (!(step = next.call(iterator)).done) {
      O.push(step.value);
    }
  }

  if (mapping && argumentsLength > 2) {
    mapfn = bind(mapfn, arguments[2], 2);
  }

  length = toLength(O.length);
  result = new (aTypedArrayConstructor(this))(length);

  for (i = 0; length > i; i++) {
    result[i] = mapping ? mapfn(O[i], i) : O[i];
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL // eslint-disable-next-line no-undef
&& !Symbol.sham // eslint-disable-next-line no-undef
&& typeof Symbol.iterator == 'symbol';

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");

var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  }

  return WellKnownSymbolsStore[name];
};

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");

var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator

module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated),
    // target
    index: 0,
    // next index
    kind: kind // kind

  }); // `%ArrayIteratorPrototype%.next` method
  // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;

  if (!target || index >= target.length) {
    state.target = undefined;
    return {
      value: undefined,
      done: true
    };
  }

  if (kind == 'keys') return {
    value: index,
    done: false
  };
  if (kind == 'values') return {
    value: target[index],
    done: false
  };
  return {
    value: [index, target[index]],
    done: false
  };
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject

Iterators.Arguments = Iterators.Array; // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "./node_modules/core-js/modules/es.map.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.map.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");

var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "./node_modules/core-js/internals/collection-strong.js"); // `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects


module.exports = collection('Map', function (init) {
  return function Map() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
}, collectionStrong);

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");

var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js"); // `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign


$({
  target: 'Object',
  stat: true,
  forced: Object.assign !== assign
}, {
  assign: assign
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");

var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js"); // `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring


if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, {
    unsafe: true
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es.set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");

var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "./node_modules/core-js/internals/collection-strong.js"); // `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects


module.exports = collection('Set', function (init) {
  return function Set() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
}, collectionStrong);

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator

defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  }); // `%StringIteratorPrototype%.next` method
  // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return {
    value: undefined,
    done: true
  };
  point = charAt(string, index);
  state.index += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.copy-within.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.copy-within.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var $copyWithin = __webpack_require__(/*! ../internals/array-copy-within */ "./node_modules/core-js/internals/array-copy-within.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.copyWithin` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.copywithin

exportTypedArrayMethod('copyWithin', function copyWithin(target, start
/* , end */
) {
  return $copyWithin.call(aTypedArray(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.every.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.every.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var $every = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").every;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.every` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.every

exportTypedArrayMethod('every', function every(callbackfn
/* , thisArg */
) {
  return $every(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.fill.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.fill.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var $fill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.fill` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
// eslint-disable-next-line no-unused-vars

exportTypedArrayMethod('fill', function fill(value
/* , start, end */
) {
  return $fill.apply(aTypedArray(this), arguments);
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.filter.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.filter.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;

var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.filter

exportTypedArrayMethod('filter', function filter(callbackfn
/* , thisArg */
) {
  var list = $filter(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);

  while (length > index) result[index] = list[index++];

  return result;
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find-index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find-index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var $findIndex = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").findIndex;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.findindex

exportTypedArrayMethod('findIndex', function findIndex(predicate
/* , thisArg */
) {
  return $findIndex(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.find.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.find.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.find` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.find

exportTypedArrayMethod('find', function find(predicate
/* , thisArg */
) {
  return $find(aTypedArray(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.float32-array.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.float32-array.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js"); // `Float32Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects


createTypedArrayConstructor('Float32', function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.float64-array.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.float64-array.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js"); // `Float64Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects


createTypedArrayConstructor('Float64', function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.for-each.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.for-each.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.foreach

exportTypedArrayMethod('forEach', function forEach(callbackfn
/* , thisArg */
) {
  $forEach(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.from.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.from.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(/*! ../internals/typed-array-constructors-require-wrappers */ "./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js");

var exportTypedArrayStaticMethod = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").exportTypedArrayStaticMethod;

var typedArrayFrom = __webpack_require__(/*! ../internals/typed-array-from */ "./node_modules/core-js/internals/typed-array-from.js"); // `%TypedArray%.from` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.from


exportTypedArrayStaticMethod('from', typedArrayFrom, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.includes

exportTypedArrayMethod('includes', function includes(searchElement
/* , fromIndex */
) {
  return $includes(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.indexof

exportTypedArrayMethod('indexOf', function indexOf(searchElement
/* , fromIndex */
) {
  return $indexOf(aTypedArray(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.int16-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.int16-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js"); // `Int16Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects


createTypedArrayConstructor('Int16', function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.int32-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.int32-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js"); // `Int32Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects


createTypedArrayConstructor('Int32', function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.int8-array.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.int8-array.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js"); // `Int8Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects


createTypedArrayConstructor('Int8', function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.iterator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var ArrayIterators = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var Uint8Array = global.Uint8Array;
var arrayValues = ArrayIterators.values;
var arrayKeys = ArrayIterators.keys;
var arrayEntries = ArrayIterators.entries;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var nativeTypedArrayIterator = Uint8Array && Uint8Array.prototype[ITERATOR];
var CORRECT_ITER_NAME = !!nativeTypedArrayIterator && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

var typedArrayValues = function values() {
  return arrayValues.call(aTypedArray(this));
}; // `%TypedArray%.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.entries


exportTypedArrayMethod('entries', function entries() {
  return arrayEntries.call(aTypedArray(this));
}); // `%TypedArray%.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.keys

exportTypedArrayMethod('keys', function keys() {
  return arrayKeys.call(aTypedArray(this));
}); // `%TypedArray%.prototype.values` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.values

exportTypedArrayMethod('values', typedArrayValues, !CORRECT_ITER_NAME); // `%TypedArray%.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype-@@iterator

exportTypedArrayMethod(ITERATOR, typedArrayValues, !CORRECT_ITER_NAME);

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.join.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.join.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $join = [].join; // `%TypedArray%.prototype.join` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
// eslint-disable-next-line no-unused-vars

exportTypedArrayMethod('join', function join(separator) {
  return $join.apply(aTypedArray(this), arguments);
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.last-index-of.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.last-index-of.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var $lastIndexOf = __webpack_require__(/*! ../internals/array-last-index-of */ "./node_modules/core-js/internals/array-last-index-of.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.lastIndexOf` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.lastindexof
// eslint-disable-next-line no-unused-vars

exportTypedArrayMethod('lastIndexOf', function lastIndexOf(searchElement
/* , fromIndex */
) {
  return $lastIndexOf.apply(aTypedArray(this), arguments);
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.map.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;

var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.map` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.map

exportTypedArrayMethod('map', function map(mapfn
/* , thisArg */
) {
  return $map(aTypedArray(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
    return new (aTypedArrayConstructor(speciesConstructor(O, O.constructor)))(length);
  });
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = __webpack_require__(/*! ../internals/typed-array-constructors-require-wrappers */ "./node_modules/core-js/internals/typed-array-constructors-require-wrappers.js");

var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayStaticMethod = ArrayBufferViewCore.exportTypedArrayStaticMethod; // `%TypedArray%.of` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.of

exportTypedArrayStaticMethod('of', function of()
/* ...items */
{
  var index = 0;
  var length = arguments.length;
  var result = new (aTypedArrayConstructor(this))(length);

  while (length > index) result[index] = arguments[index++];

  return result;
}, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reduce-right.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reduce-right.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var $reduceRight = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").right;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.reduceRicht` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduceright

exportTypedArrayMethod('reduceRight', function reduceRight(callbackfn
/* , initialValue */
) {
  return $reduceRight(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reduce.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reduce.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var $reduce = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduce

exportTypedArrayMethod('reduce', function reduce(callbackfn
/* , initialValue */
) {
  return $reduce(aTypedArray(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.reverse.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.reverse.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var floor = Math.floor; // `%TypedArray%.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reverse

exportTypedArrayMethod('reverse', function reverse() {
  var that = this;
  var length = aTypedArray(that).length;
  var middle = floor(length / 2);
  var index = 0;
  var value;

  while (index < middle) {
    value = that[index];
    that[index++] = that[--length];
    that[length] = value;
  }

  return that;
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.set.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var toOffset = __webpack_require__(/*! ../internals/to-offset */ "./node_modules/core-js/internals/to-offset.js");

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).set({});
}); // `%TypedArray%.prototype.set` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.set

exportTypedArrayMethod('set', function set(arrayLike
/* , offset */
) {
  aTypedArray(this);
  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
  var length = this.length;
  var src = toObject(arrayLike);
  var len = toLength(src.length);
  var index = 0;
  if (len + offset > length) throw RangeError('Wrong length');

  while (index < len) this[offset + index] = src[index++];
}, FORCED);

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.slice.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.slice.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var aTypedArrayConstructor = ArrayBufferViewCore.aTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $slice = [].slice;
var FORCED = fails(function () {
  // eslint-disable-next-line no-undef
  new Int8Array(1).slice();
}); // `%TypedArray%.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice

exportTypedArrayMethod('slice', function slice(start, end) {
  var list = $slice.call(aTypedArray(this), start, end);
  var C = speciesConstructor(this, this.constructor);
  var index = 0;
  var length = list.length;
  var result = new (aTypedArrayConstructor(C))(length);

  while (length > index) result[index] = list[index++];

  return result;
}, FORCED);

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.some.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.some.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var $some = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").some;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.some` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some

exportTypedArrayMethod('some', function some(callbackfn
/* , thisArg */
) {
  return $some(aTypedArray(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.sort.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.sort.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $sort = [].sort; // `%TypedArray%.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.sort

exportTypedArrayMethod('sort', function sort(comparefn) {
  return $sort.call(aTypedArray(this), comparefn);
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.subarray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.subarray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.subarray` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.subarray

exportTypedArrayMethod('subarray', function subarray(begin, end) {
  var O = aTypedArray(this);
  var length = O.length;
  var beginIndex = toAbsoluteIndex(begin, length);
  return new (speciesConstructor(O, O.constructor))(O.buffer, O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex));
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-locale-string.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var ArrayBufferViewCore = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js");

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var Int8Array = global.Int8Array;
var aTypedArray = ArrayBufferViewCore.aTypedArray;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var $toLocaleString = [].toLocaleString;
var $slice = [].slice; // iOS Safari 6.x fails here

var TO_LOCALE_STRING_BUG = !!Int8Array && fails(function () {
  $toLocaleString.call(new Int8Array(1));
});
var FORCED = fails(function () {
  return [1, 2].toLocaleString() != new Int8Array([1, 2]).toLocaleString();
}) || !fails(function () {
  Int8Array.prototype.toLocaleString.call([1, 2]);
}); // `%TypedArray%.prototype.toLocaleString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tolocalestring

exportTypedArrayMethod('toLocaleString', function toLocaleString() {
  return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
}, FORCED);

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.to-string.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.to-string.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var exportTypedArrayMethod = __webpack_require__(/*! ../internals/array-buffer-view-core */ "./node_modules/core-js/internals/array-buffer-view-core.js").exportTypedArrayMethod;

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var Uint8Array = global.Uint8Array;
var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
var arrayToString = [].toString;
var arrayJoin = [].join;

if (fails(function () {
  arrayToString.call({});
})) {
  arrayToString = function toString() {
    return arrayJoin.call(this);
  };
}

var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString; // `%TypedArray%.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tostring

exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.uint16-array.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint16-array.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js"); // `Uint16Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects


createTypedArrayConstructor('Uint16', function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.uint32-array.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint32-array.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js"); // `Uint32Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects


createTypedArrayConstructor('Uint32', function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.uint8-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint8-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js"); // `Uint8Array` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects


createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createTypedArrayConstructor = __webpack_require__(/*! ../internals/typed-array-constructor */ "./node_modules/core-js/internals/typed-array-constructor.js"); // `Uint8ClampedArray` constructor
// https://tc39.github.io/ecma262/#sec-typedarray-objects


createTypedArrayConstructor('Uint8', function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");

var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;

  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }

    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }

    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}

/***/ }),

/***/ "./node_modules/core-js/stable/map/index.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/stable/map/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/map */ "./node_modules/core-js/es/map/index.js");

module.exports = parent;

/***/ }),

/***/ "./node_modules/core-js/stable/object/assign.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/stable/object/assign.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/object/assign */ "./node_modules/core-js/es/object/assign.js");

module.exports = parent;

/***/ }),

/***/ "./node_modules/core-js/stable/set/index.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/stable/set/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/set */ "./node_modules/core-js/es/set/index.js");

module.exports = parent;

/***/ }),

/***/ "./node_modules/core-js/stable/typed-array/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/stable/typed-array/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/typed-array */ "./node_modules/core-js/es/typed-array/index.js");

module.exports = parent;

/***/ }),

/***/ "./node_modules/koalas/index.js":
/*!**************************************!*\
  !*** ./node_modules/koalas/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Coalesce function to find the first valid value.
 * A valid value is one that is not undefined, not null and not NaN (not a number).
 * If no values are valid, then the last argument is returned.
 *
 * ```js
 * console.log(koalas(undefined, null, NaN, 'a', 'b'));
 * //=> 'a'
 *
 * console.log(koalas(undefined, null, NaN, {a: 'b'}, 'b'));
 * //=> {a: 'b'}
 *
 * console.log(koalas(undefined, null, NaN, ['a', 'b', 'c'], {a: 'b'}, 'b'));
 * //=> ['a', 'b', 'c']
 *
 * console.log(koalas(undefined, NaN, null));
 * //=> null
 * ```
 * @name koalas
 * @param {Mixed} `arguments` Pass in any amount of arguments.
 * @return {Mixed} First valid value.
 * @api public
 */

function koalas() {
  var len = arguments.length;
  var arg;

  for (var i = 0; i < len; i++) {
    arg = arguments[i];

    if (hasValue(arg)) {
      return arg;
    }
  }

  return arg;
}
/**
 * Check to see if a value actually has a valid value:
 *  - not undefined
 *  - not null
 *  - not NaN (not a number)
 *
 * @param  {*} `val` value to check
 * @return {Boolean} returns `true` if the `val` has a valid value
 */


function hasValue(val) {
  // eslint-disable-next-line no-self-compare
  return val != null && val === val;
}
/**
 * Expose koalas
 */


module.exports = koalas;

/***/ }),

/***/ "./node_modules/limiter/index.js":
/*!***************************************!*\
  !*** ./node_modules/limiter/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.RateLimiter = __webpack_require__(/*! ./lib/rateLimiter */ "./node_modules/limiter/lib/rateLimiter.js");
exports.TokenBucket = __webpack_require__(/*! ./lib/tokenBucket */ "./node_modules/limiter/lib/tokenBucket.js");

/***/ }),

/***/ "./node_modules/limiter/lib/clock.js":
/*!*******************************************!*\
  !*** ./node_modules/limiter/lib/clock.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var getMilliseconds = function () {
  if (typeof process !== 'undefined' && process.hrtime) {
    var hrtime = process.hrtime();
    var seconds = hrtime[0];
    var nanoseconds = hrtime[1];
    return seconds * 1e3 + Math.floor(nanoseconds / 1e6);
  }

  return new Date().getTime();
};

module.exports = getMilliseconds;

/***/ }),

/***/ "./node_modules/limiter/lib/rateLimiter.js":
/*!*************************************************!*\
  !*** ./node_modules/limiter/lib/rateLimiter.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TokenBucket = __webpack_require__(/*! ./tokenBucket */ "./node_modules/limiter/lib/tokenBucket.js");

var getMilliseconds = __webpack_require__(/*! ./clock */ "./node_modules/limiter/lib/clock.js");
/**
 * A generic rate limiter. Underneath the hood, this uses a token bucket plus
 * an additional check to limit how many tokens we can remove each interval.
 * @author John Hurliman <jhurliman@jhurliman.org>
 *
 * @param {Number} tokensPerInterval Maximum number of tokens that can be
 *  removed at any given moment and over the course of one interval.
 * @param {String|Number} interval The interval length in milliseconds, or as
 *  one of the following strings: 'second', 'minute', 'hour', day'.
 * @param {Boolean} fireImmediately Optional. Whether or not the callback
 *  will fire immediately when rate limiting is in effect (default is false).
 */


var RateLimiter = function (tokensPerInterval, interval, fireImmediately) {
  this.tokenBucket = new TokenBucket(tokensPerInterval, tokensPerInterval, interval, null); // Fill the token bucket to start

  this.tokenBucket.content = tokensPerInterval;
  this.curIntervalStart = getMilliseconds();
  this.tokensThisInterval = 0;
  this.fireImmediately = fireImmediately;
};

RateLimiter.prototype = {
  tokenBucket: null,
  curIntervalStart: 0,
  tokensThisInterval: 0,
  fireImmediately: false,

  /**
   * Remove the requested number of tokens and fire the given callback. If the
   * rate limiter contains enough tokens and we haven't spent too many tokens
   * in this interval already, this will happen immediately. Otherwise, the
   * removal and callback will happen when enough tokens become available.
   * @param {Number} count The number of tokens to remove.
   * @param {Function} callback(err, remainingTokens)
   * @returns {Boolean} True if the callback was fired immediately, otherwise
   *  false.
   */
  removeTokens: function (count, callback) {
    // Make sure the request isn't for more than we can handle
    if (count > this.tokenBucket.bucketSize) {
      process.nextTick(callback.bind(null, 'Requested tokens ' + count + ' exceeds maximum tokens per interval ' + this.tokenBucket.bucketSize, null));
      return false;
    }

    var self = this;
    var now = getMilliseconds(); // Advance the current interval and reset the current interval token count
    // if needed

    if (now < this.curIntervalStart || now - this.curIntervalStart >= this.tokenBucket.interval) {
      this.curIntervalStart = now;
      this.tokensThisInterval = 0;
    } // If we don't have enough tokens left in this interval, wait until the
    // next interval


    if (count > this.tokenBucket.tokensPerInterval - this.tokensThisInterval) {
      if (this.fireImmediately) {
        process.nextTick(callback.bind(null, null, -1));
      } else {
        var waitInterval = Math.ceil(this.curIntervalStart + this.tokenBucket.interval - now);
        setTimeout(function () {
          self.tokenBucket.removeTokens(count, afterTokensRemoved);
        }, waitInterval);
      }

      return false;
    } // Remove the requested number of tokens from the token bucket


    return this.tokenBucket.removeTokens(count, afterTokensRemoved);

    function afterTokensRemoved(err, tokensRemaining) {
      if (err) return callback(err, null);
      self.tokensThisInterval += count;
      callback(null, tokensRemaining);
    }
  },

  /**
   * Attempt to remove the requested number of tokens and return immediately.
   * If the bucket (and any parent buckets) contains enough tokens and we
   * haven't spent too many tokens in this interval already, this will return
   * true. Otherwise, false is returned.
   * @param {Number} count The number of tokens to remove.
   * @param {Boolean} True if the tokens were successfully removed, otherwise
   *  false.
   */
  tryRemoveTokens: function (count) {
    // Make sure the request isn't for more than we can handle
    if (count > this.tokenBucket.bucketSize) return false;
    var now = getMilliseconds(); // Advance the current interval and reset the current interval token count
    // if needed

    if (now < this.curIntervalStart || now - this.curIntervalStart >= this.tokenBucket.interval) {
      this.curIntervalStart = now;
      this.tokensThisInterval = 0;
    } // If we don't have enough tokens left in this interval, return false


    if (count > this.tokenBucket.tokensPerInterval - this.tokensThisInterval) return false; // Try to remove the requested number of tokens from the token bucket

    var removed = this.tokenBucket.tryRemoveTokens(count);

    if (removed) {
      this.tokensThisInterval += count;
    }

    return removed;
  },

  /**
   * Returns the number of tokens remaining in the TokenBucket.
   * @returns {Number} The number of tokens remaining.
   */
  getTokensRemaining: function () {
    this.tokenBucket.drip();
    return this.tokenBucket.content;
  }
};
module.exports = RateLimiter;

/***/ }),

/***/ "./node_modules/limiter/lib/tokenBucket.js":
/*!*************************************************!*\
  !*** ./node_modules/limiter/lib/tokenBucket.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A hierarchical token bucket for rate limiting. See
 * http://en.wikipedia.org/wiki/Token_bucket for more information.
 * @author John Hurliman <jhurliman@cull.tv>
 *
 * @param {Number} bucketSize Maximum number of tokens to hold in the bucket.
 *  Also known as the burst rate.
 * @param {Number} tokensPerInterval Number of tokens to drip into the bucket
 *  over the course of one interval.
 * @param {String|Number} interval The interval length in milliseconds, or as
 *  one of the following strings: 'second', 'minute', 'hour', day'.
 * @param {TokenBucket} parentBucket Optional. A token bucket that will act as
 *  the parent of this bucket.
 */
var TokenBucket = function (bucketSize, tokensPerInterval, interval, parentBucket) {
  this.bucketSize = bucketSize;
  this.tokensPerInterval = tokensPerInterval;

  if (typeof interval === 'string') {
    switch (interval) {
      case 'sec':
      case 'second':
        this.interval = 1000;
        break;

      case 'min':
      case 'minute':
        this.interval = 1000 * 60;
        break;

      case 'hr':
      case 'hour':
        this.interval = 1000 * 60 * 60;
        break;

      case 'day':
        this.interval = 1000 * 60 * 60 * 24;
        break;

      default:
        throw new Error('Invaid interval ' + interval);
    }
  } else {
    this.interval = interval;
  }

  this.parentBucket = parentBucket;
  this.content = 0;
  this.lastDrip = +new Date();
};

TokenBucket.prototype = {
  bucketSize: 1,
  tokensPerInterval: 1,
  interval: 1000,
  parentBucket: null,
  content: 0,
  lastDrip: 0,

  /**
   * Remove the requested number of tokens and fire the given callback. If the
   * bucket (and any parent buckets) contains enough tokens this will happen
   * immediately. Otherwise, the removal and callback will happen when enough
   * tokens become available.
   * @param {Number} count The number of tokens to remove.
   * @param {Function} callback(err, remainingTokens)
   * @returns {Boolean} True if the callback was fired immediately, otherwise
   *  false.
   */
  removeTokens: function (count, callback) {
    var self = this; // Is this an infinite size bucket?

    if (!this.bucketSize) {
      process.nextTick(callback.bind(null, null, count, Number.POSITIVE_INFINITY));
      return true;
    } // Make sure the bucket can hold the requested number of tokens


    if (count > this.bucketSize) {
      process.nextTick(callback.bind(null, 'Requested tokens ' + count + ' exceeds bucket size ' + this.bucketSize, null));
      return false;
    } // Drip new tokens into this bucket


    this.drip(); // If we don't have enough tokens in this bucket, come back later

    if (count > this.content) return comeBackLater();

    if (this.parentBucket) {
      // Remove the requested from the parent bucket first
      return this.parentBucket.removeTokens(count, function (err, remainingTokens) {
        if (err) return callback(err, null); // Check that we still have enough tokens in this bucket

        if (count > self.content) return comeBackLater(); // Tokens were removed from the parent bucket, now remove them from
        // this bucket and fire the callback. Note that we look at the current
        // bucket and parent bucket's remaining tokens and return the smaller
        // of the two values

        self.content -= count;
        callback(null, Math.min(remainingTokens, self.content));
      });
    } else {
      // Remove the requested tokens from this bucket and fire the callback
      this.content -= count;
      process.nextTick(callback.bind(null, null, this.content));
      return true;
    }

    function comeBackLater() {
      // How long do we need to wait to make up the difference in tokens?
      var waitInterval = Math.ceil((count - self.content) * (self.interval / self.tokensPerInterval));
      setTimeout(function () {
        self.removeTokens(count, callback);
      }, waitInterval);
      return false;
    }
  },

  /**
   * Attempt to remove the requested number of tokens and return immediately.
   * If the bucket (and any parent buckets) contains enough tokens this will
   * return true, otherwise false is returned.
   * @param {Number} count The number of tokens to remove.
   * @param {Boolean} True if the tokens were successfully removed, otherwise
   *  false.
   */
  tryRemoveTokens: function (count) {
    // Is this an infinite size bucket?
    if (!this.bucketSize) return true; // Make sure the bucket can hold the requested number of tokens

    if (count > this.bucketSize) return false; // Drip new tokens into this bucket

    this.drip(); // If we don't have enough tokens in this bucket, return false

    if (count > this.content) return false; // Try to remove the requested tokens from the parent bucket

    if (this.parentBucket && !this.parentBucket.tryRemoveTokens(count)) return false; // Remove the requested tokens from this bucket and return

    this.content -= count;
    return true;
  },

  /**
   * Add any new tokens to the bucket since the last drip.
   * @returns {Boolean} True if new tokens were added, otherwise false.
   */
  drip: function () {
    if (!this.tokensPerInterval) {
      this.content = this.bucketSize;
      return;
    }

    var now = +new Date();
    var deltaMS = Math.max(now - this.lastDrip, 0);
    this.lastDrip = now;
    var dripAmount = deltaMS * (this.tokensPerInterval / this.interval);
    this.content = Math.min(this.content + dripAmount, this.bucketSize);
  }
};
module.exports = TokenBucket;

/***/ }),

/***/ "./node_modules/lodash.pick/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.pick/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';
/** Detect free variable `global` from Node.js. */

var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */

function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */


function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */


function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/** Built-in value references. */

var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax = Math.max;
/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */

function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];

    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }

  return result;
}
/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick.
 * @returns {Object} Returns the new object.
 */


function basePick(object, props) {
  object = Object(object);
  return basePickBy(object, props, function (value, key) {
    return key in object;
  });
}
/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick from.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */


function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index],
        value = object[key];

    if (predicate(value, key)) {
      result[key] = value;
    }
  }

  return result;
}
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */


function baseRest(func, start) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */


function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */


function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */


function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */


var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */


function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */


function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */


function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [props] The property identifiers to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */


var pick = baseRest(function (object, props) {
  return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
});
module.exports = pick;

/***/ }),

/***/ "./node_modules/opentracing/lib/binary_carrier.js":
/*!********************************************************!*\
  !*** ./node_modules/opentracing/lib/binary_carrier.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Convenience class to use as a binary carrier.
 *
 * Any valid Object with a field named `buffer` may be used as a binary carrier;
 * this class is only one such type of object that can be used.
 */

var BinaryCarrier =
/** @class */
function () {
  function BinaryCarrier(buffer) {
    this.buffer = buffer;
  }

  return BinaryCarrier;
}();

exports.default = BinaryCarrier;

/***/ }),

/***/ "./node_modules/opentracing/lib/constants.js":
/*!***************************************************!*\
  !*** ./node_modules/opentracing/lib/constants.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The FORMAT_BINARY format represents SpanContexts in an opaque binary
 * carrier.
 *
 * Tracer.inject() will set the buffer field to an Array-like (Array,
 * ArrayBuffer, or TypedBuffer) object containing the injected binary data.
 * Any valid Object can be used as long as the buffer field of the object
 * can be set.
 *
 * Tracer.extract() will look for `carrier.buffer`, and that field is
 * expected to be an Array-like object (Array, ArrayBuffer, or
 * TypedBuffer).
 */

exports.FORMAT_BINARY = 'binary';
/**
 * The FORMAT_TEXT_MAP format represents SpanContexts using a
 * string->string map (backed by a Javascript Object) as a carrier.
 *
 * NOTE: Unlike FORMAT_HTTP_HEADERS, FORMAT_TEXT_MAP places no restrictions
 * on the characters used in either the keys or the values of the map
 * entries.
 *
 * The FORMAT_TEXT_MAP carrier map may contain unrelated data (e.g.,
 * arbitrary gRPC metadata); as such, the Tracer implementation should use
 * a prefix or other convention to distinguish Tracer-specific key:value
 * pairs.
 */

exports.FORMAT_TEXT_MAP = 'text_map';
/**
 * The FORMAT_HTTP_HEADERS format represents SpanContexts using a
 * character-restricted string->string map (backed by a Javascript Object)
 * as a carrier.
 *
 * Keys and values in the FORMAT_HTTP_HEADERS carrier must be suitable for
 * use as HTTP headers (without modification or further escaping). That is,
 * the keys have a greatly restricted character set, casing for the keys
 * may not be preserved by various intermediaries, and the values should be
 * URL-escaped.
 *
 * The FORMAT_HTTP_HEADERS carrier map may contain unrelated data (e.g.,
 * arbitrary HTTP headers); as such, the Tracer implementation should use a
 * prefix or other convention to distinguish Tracer-specific key:value
 * pairs.
 */

exports.FORMAT_HTTP_HEADERS = 'http_headers';
/**
 * A Span may be the "child of" a parent Span. In a “child of” reference,
 * the parent Span depends on the child Span in some capacity.
 *
 * See more about reference types at https://github.com/opentracing/specification
 */

exports.REFERENCE_CHILD_OF = 'child_of';
/**
 * Some parent Spans do not depend in any way on the result of their child
 * Spans. In these cases, we say merely that the child Span “follows from”
 * the parent Span in a causal sense.
 *
 * See more about reference types at https://github.com/opentracing/specification
 */

exports.REFERENCE_FOLLOWS_FROM = 'follows_from';

/***/ }),

/***/ "./node_modules/opentracing/lib/ext/tags.js":
/*!**************************************************!*\
  !*** ./node_modules/opentracing/lib/ext/tags.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** SPAN_KIND hints at relationship between spans, e.g. client/server */

exports.SPAN_KIND = 'span.kind';
/** Marks a span representing the client-side of an RPC or other remote call */

exports.SPAN_KIND_RPC_CLIENT = 'client';
/** Marks a span representing the server-side of an RPC or other remote call */

exports.SPAN_KIND_RPC_SERVER = 'server';
/** Marks a span representing the producing-side within a messaging system or other remote call */

exports.SPAN_KIND_MESSAGING_PRODUCER = 'producer';
/** Marks a span representing the consuming-side within a messaging system or other remote call */

exports.SPAN_KIND_MESSAGING_CONSUMER = 'consumer';
/**
 * ERROR (boolean) true if and only if the application considers the operation
 * represented by the Span to have failed
 */

exports.ERROR = 'error';
/**
 * COMPONENT (string) ia s low-cardinality identifier of the module, library,
 * or package that is generating a span.
 */

exports.COMPONENT = 'component';
/**
 * SAMPLING_PRIORITY (number) determines the priority of sampling this Span.
 * If greater than 0, a hint to the Tracer to do its best to capture the trace.
 * If 0, a hint to the trace to not-capture the trace. If absent, the Tracer
 * should use its default sampling mechanism.
 */

exports.SAMPLING_PRIORITY = 'sampling.priority'; // ---------------------------------------------------------------------------
// PEER_* tags can be emitted by either client-side of server-side to describe
// the other side/service in a peer-to-peer communications, like an RPC call.
// ---------------------------------------------------------------------------

/**
 * PEER_SERVICE (string) Remote service name (for some unspecified
 * definition of "service"). E.g., "elasticsearch", "a_custom_microservice", "memcache"
 */

exports.PEER_SERVICE = 'peer.service';
/** PEER_HOSTNAME (string) Remote hostname. E.g., "opentracing.io", "internal.dns.name" */

exports.PEER_HOSTNAME = 'peer.hostname';
/**
 * PEER_ADDRESS (string) Remote "address", suitable for use in a
 * networking client library. This may be a "ip:port", a bare
 * "hostname", a FQDN, or even a JDBC substring like "mysql://prod-db:3306"
 */

exports.PEER_ADDRESS = 'peer.address';
/**
 * PEER_HOST_IPV4 (number) Remote IPv4 address as a .-separated tuple.
 * E.g., "127.0.0.1"
 */

exports.PEER_HOST_IPV4 = 'peer.ipv4'; // PEER_HOST_IPV6 (string) Remote IPv6 address as a string of
// colon-separated 4-char hex tuples. E.g., "2001:0db8:85a3:0000:0000:8a2e:0370:7334"

exports.PEER_HOST_IPV6 = 'peer.ipv6'; // PEER_PORT (number) Remote port. E.g., 80

exports.PEER_PORT = 'peer.port'; // ---------------------------------------------------------------------------
// HTTP tags
// ---------------------------------------------------------------------------

/**
 * HTTP_URL (string) URL of the request being handled in this segment of the
 * trace, in standard URI format. E.g., "https://domain.net/path/to?resource=here"
 */

exports.HTTP_URL = 'http.url';
/**
 * HTTP_METHOD (string) HTTP method of the request for the associated Span. E.g.,
 * "GET", "POST"
 */

exports.HTTP_METHOD = 'http.method';
/**
 * HTTP_STATUS_CODE (number) HTTP response status code for the associated Span.
 * E.g., 200, 503, 404
 */

exports.HTTP_STATUS_CODE = 'http.status_code'; // -------------------------------------------------------------------------
// Messaging tags
// -------------------------------------------------------------------------

/**
 * MESSAGE_BUS_DESTINATION (string) An address at which messages can be exchanged.
 * E.g. A Kafka record has an associated "topic name" that can be extracted
 * by the instrumented producer or consumer and stored using this tag.
 */

exports.MESSAGE_BUS_DESTINATION = 'message_bus.destination'; // --------------------------------------------------------------------------
// Database tags
// --------------------------------------------------------------------------

/**
 * DB_INSTANCE (string) Database instance name. E.g., In java, if the
 * jdbc.url="jdbc:mysql://127.0.0.1:3306/customers", the instance name is "customers".
 */

exports.DB_INSTANCE = 'db.instance';
/**
 * DB_STATEMENT (string) A database statement for the given database type.
 * E.g., for db.type="SQL", "SELECT * FROM wuser_table";
 * for db.type="redis", "SET mykey 'WuValue'".
 */

exports.DB_STATEMENT = 'db.statement';
/**
 * DB_TYPE (string) Database type. For any SQL database, "sql". For others,
 * the lower-case database category, e.g. "cassandra", "hbase", or "redis".
 */

exports.DB_TYPE = 'db.type';
/**
 * DB_USER (string) Username for accessing database. E.g., "readonly_user"
 * or "reporting_user"
 */

exports.DB_USER = 'db.user';

/***/ }),

/***/ "./node_modules/opentracing/lib/functions.js":
/*!***************************************************!*\
  !*** ./node_modules/opentracing/lib/functions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Constants = __webpack_require__(/*! ./constants */ "./node_modules/opentracing/lib/constants.js");

var reference_1 = __webpack_require__(/*! ./reference */ "./node_modules/opentracing/lib/reference.js");

var span_1 = __webpack_require__(/*! ./span */ "./node_modules/opentracing/lib/span.js");
/**
 * Return a new REFERENCE_CHILD_OF reference.
 *
 * @param {SpanContext} spanContext - the parent SpanContext instance to
 *        reference.
 * @return a REFERENCE_CHILD_OF reference pointing to `spanContext`
 */


function childOf(spanContext) {
  // Allow the user to pass a Span instead of a SpanContext
  if (spanContext instanceof span_1.default) {
    spanContext = spanContext.context();
  }

  return new reference_1.default(Constants.REFERENCE_CHILD_OF, spanContext);
}

exports.childOf = childOf;
/**
 * Return a new REFERENCE_FOLLOWS_FROM reference.
 *
 * @param {SpanContext} spanContext - the parent SpanContext instance to
 *        reference.
 * @return a REFERENCE_FOLLOWS_FROM reference pointing to `spanContext`
 */

function followsFrom(spanContext) {
  // Allow the user to pass a Span instead of a SpanContext
  if (spanContext instanceof span_1.default) {
    spanContext = spanContext.context();
  }

  return new reference_1.default(Constants.REFERENCE_FOLLOWS_FROM, spanContext);
}

exports.followsFrom = followsFrom;

/***/ }),

/***/ "./node_modules/opentracing/lib/global_tracer.js":
/*!*******************************************************!*\
  !*** ./node_modules/opentracing/lib/global_tracer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tracer_1 = __webpack_require__(/*! ./tracer */ "./node_modules/opentracing/lib/tracer.js");

var noopTracer = new tracer_1.default();
var _globalTracer = null; // Allows direct importing/requiring of the global tracer:
//
// let globalTracer = require('opentracing/global');
//      OR
// import globalTracer from 'opentracing/global';
//
// Acts a bridge to the global tracer that can be safely called before the
// global tracer is initialized. The purpose of the delegation is to avoid the
// sometimes nearly intractible initialization order problems that can arise in
// applications with a complex set of dependencies, while also avoiding the
// case where

var GlobalTracerDelegate =
/** @class */
function (_super) {
  __extends(GlobalTracerDelegate, _super);

  function GlobalTracerDelegate() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  GlobalTracerDelegate.prototype.startSpan = function () {
    var tracer = _globalTracer || noopTracer;
    return tracer.startSpan.apply(tracer, arguments);
  };

  GlobalTracerDelegate.prototype.inject = function () {
    var tracer = _globalTracer || noopTracer;
    return tracer.inject.apply(tracer, arguments);
  };

  GlobalTracerDelegate.prototype.extract = function () {
    var tracer = _globalTracer || noopTracer;
    return tracer.extract.apply(tracer, arguments);
  };

  return GlobalTracerDelegate;
}(tracer_1.default);

var globalTracerDelegate = new GlobalTracerDelegate();
/**
 * Set the global Tracer.
 *
 * The behavior is undefined if this function is called more than once.
 *
 * @param {Tracer} tracer - the Tracer implementation
 */

function initGlobalTracer(tracer) {
  _globalTracer = tracer;
}

exports.initGlobalTracer = initGlobalTracer;
/**
 * Returns the global tracer.
 */

function globalTracer() {
  // Return the delegate.  Since the global tracer is largely a convenience
  // (the user can always create their own tracers), the delegate is used to
  // give the added convenience of not needing to worry about initialization
  // order.
  return globalTracerDelegate;
}

exports.globalTracer = globalTracer;

/***/ }),

/***/ "./node_modules/opentracing/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/opentracing/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var binary_carrier_1 = __webpack_require__(/*! ./binary_carrier */ "./node_modules/opentracing/lib/binary_carrier.js");

exports.BinaryCarrier = binary_carrier_1.default;

var Tags = __webpack_require__(/*! ./ext/tags */ "./node_modules/opentracing/lib/ext/tags.js");

exports.Tags = Tags;

var Noop = __webpack_require__(/*! ./noop */ "./node_modules/opentracing/lib/noop.js");

var reference_1 = __webpack_require__(/*! ./reference */ "./node_modules/opentracing/lib/reference.js");

exports.Reference = reference_1.default;

var span_1 = __webpack_require__(/*! ./span */ "./node_modules/opentracing/lib/span.js");

exports.Span = span_1.default;

var span_context_1 = __webpack_require__(/*! ./span_context */ "./node_modules/opentracing/lib/span_context.js");

exports.SpanContext = span_context_1.default;

var tracer_1 = __webpack_require__(/*! ./tracer */ "./node_modules/opentracing/lib/tracer.js");

exports.Tracer = tracer_1.Tracer;

var mock_tracer_1 = __webpack_require__(/*! ./mock_tracer */ "./node_modules/opentracing/lib/mock_tracer/index.js");

exports.MockTracer = mock_tracer_1.MockTracer;

__export(__webpack_require__(/*! ./global_tracer */ "./node_modules/opentracing/lib/global_tracer.js"));

__export(__webpack_require__(/*! ./constants */ "./node_modules/opentracing/lib/constants.js"));

__export(__webpack_require__(/*! ./functions */ "./node_modules/opentracing/lib/functions.js")); // Initialize the noops last to avoid a dependecy cycle between the classes.


Noop.initialize();

/***/ }),

/***/ "./node_modules/opentracing/lib/mock_tracer/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/opentracing/lib/mock_tracer/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var mock_context_1 = __webpack_require__(/*! ./mock_context */ "./node_modules/opentracing/lib/mock_tracer/mock_context.js");

exports.MockContext = mock_context_1.default;

var mock_span_1 = __webpack_require__(/*! ./mock_span */ "./node_modules/opentracing/lib/mock_tracer/mock_span.js");

exports.MockSpan = mock_span_1.default;

var mock_tracer_1 = __webpack_require__(/*! ./mock_tracer */ "./node_modules/opentracing/lib/mock_tracer/mock_tracer.js");

exports.MockTracer = mock_tracer_1.default;

/***/ }),

/***/ "./node_modules/opentracing/lib/mock_tracer/mock_context.js":
/*!******************************************************************!*\
  !*** ./node_modules/opentracing/lib/mock_tracer/mock_context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var opentracing = __webpack_require__(/*! ../index */ "./node_modules/opentracing/lib/index.js");
/**
 * OpenTracing Context implementation designed for use in
 * unit tests.
 */


var MockContext =
/** @class */
function (_super) {
  __extends(MockContext, _super);

  function MockContext(span) {
    var _this = _super.call(this) || this; // Store a reference to the span itself since this is a mock tracer
    // intended to make debugging and unit testing easier.


    _this._span = span;
    return _this;
  }

  MockContext.prototype.span = function () {
    return this._span;
  };

  return MockContext;
}(opentracing.SpanContext);

exports.MockContext = MockContext;
exports.default = MockContext;

/***/ }),

/***/ "./node_modules/opentracing/lib/mock_tracer/mock_report.js":
/*!*****************************************************************!*\
  !*** ./node_modules/opentracing/lib/mock_tracer/mock_report.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Index a collection of reported MockSpans in a way that's easy to run unit
 * test assertions against.
 */

var MockReport =
/** @class */
function () {
  function MockReport(spans) {
    var _this = this;

    this.spans = spans;
    this.spansByUUID = {};
    this.spansByTag = {};
    this.debugSpans = [];
    this.unfinishedSpans = [];
    spans.forEach(function (span) {
      if (span._finishMs === 0) {
        _this.unfinishedSpans.push(span);
      }

      _this.spansByUUID[span.uuid()] = span;

      _this.debugSpans.push(span.debug());

      var tags = span.tags();
      Object.keys(tags).forEach(function (key) {
        var val = tags[key];
        _this.spansByTag[key] = _this.spansByTag[key] || {};
        _this.spansByTag[key][val] = _this.spansByTag[key][val] || [];

        _this.spansByTag[key][val].push(span);
      });
    });
  }

  MockReport.prototype.firstSpanWithTagValue = function (key, val) {
    var m = this.spansByTag[key];

    if (!m) {
      return null;
    }

    var n = m[val];

    if (!n) {
      return null;
    }

    return n[0];
  };

  return MockReport;
}();

exports.MockReport = MockReport;
exports.default = MockReport;

/***/ }),

/***/ "./node_modules/opentracing/lib/mock_tracer/mock_span.js":
/*!***************************************************************!*\
  !*** ./node_modules/opentracing/lib/mock_tracer/mock_span.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-extraneous-dependencies */

var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var opentracing = __webpack_require__(/*! ../index */ "./node_modules/opentracing/lib/index.js");

var mock_context_1 = __webpack_require__(/*! ./mock_context */ "./node_modules/opentracing/lib/mock_tracer/mock_context.js");
/**
 * OpenTracing Span implementation designed for use in unit tests.
 */


var MockSpan =
/** @class */
function (_super) {
  __extends(MockSpan, _super); //------------------------------------------------------------------------//
  // MockSpan-specific
  //------------------------------------------------------------------------//


  function MockSpan(tracer) {
    var _this = _super.call(this) || this;

    _this._mockTracer = tracer;
    _this._uuid = _this._generateUUID();
    _this._startMs = Date.now();
    _this._finishMs = 0;
    _this._operationName = '';
    _this._tags = {};
    _this._logs = [];
    return _this;
  } //------------------------------------------------------------------------//
  // OpenTracing implementation
  //------------------------------------------------------------------------//


  MockSpan.prototype._context = function () {
    return new mock_context_1.default(this);
  };

  MockSpan.prototype._setOperationName = function (name) {
    this._operationName = name;
  };

  MockSpan.prototype._addTags = function (set) {
    var keys = Object.keys(set);

    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
      var key = keys_1[_i];
      this._tags[key] = set[key];
    }
  };

  MockSpan.prototype._log = function (fields, timestamp) {
    this._logs.push({
      fields: fields,
      timestamp: timestamp
    });
  };

  MockSpan.prototype._finish = function (finishTime) {
    this._finishMs = finishTime || Date.now();
  };

  MockSpan.prototype.uuid = function () {
    return this._uuid;
  };

  MockSpan.prototype.operationName = function () {
    return this._operationName;
  };

  MockSpan.prototype.durationMs = function () {
    return this._finishMs - this._startMs;
  };

  MockSpan.prototype.tags = function () {
    return this._tags;
  };

  MockSpan.prototype.tracer = function () {
    return this._mockTracer;
  };

  MockSpan.prototype._generateUUID = function () {
    var p0 = ("00000000" + Math.abs(Math.random() * 0xFFFFFFFF | 0).toString(16)).substr(-8);
    var p1 = ("00000000" + Math.abs(Math.random() * 0xFFFFFFFF | 0).toString(16)).substr(-8);
    return "" + p0 + p1;
  };

  MockSpan.prototype.addReference = function (ref) {};
  /**
   * Returns a simplified object better for console.log()'ing.
   */


  MockSpan.prototype.debug = function () {
    var obj = {
      uuid: this._uuid,
      operation: this._operationName,
      millis: [this._finishMs - this._startMs, this._startMs, this._finishMs]
    };

    if (Object.keys(this._tags).length) {
      obj.tags = this._tags;
    }

    return obj;
  };

  return MockSpan;
}(opentracing.Span);

exports.MockSpan = MockSpan;
exports.default = MockSpan;

/***/ }),

/***/ "./node_modules/opentracing/lib/mock_tracer/mock_tracer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/opentracing/lib/mock_tracer/mock_tracer.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
}); // TODO: Move mock-tracer to its own NPM package once it is complete and tested.

var opentracing = __webpack_require__(/*! ../index */ "./node_modules/opentracing/lib/index.js");

var mock_report_1 = __webpack_require__(/*! ./mock_report */ "./node_modules/opentracing/lib/mock_tracer/mock_report.js");

var mock_span_1 = __webpack_require__(/*! ./mock_span */ "./node_modules/opentracing/lib/mock_tracer/mock_span.js");
/**
 * OpenTracing Tracer implementation designed for use in unit tests.
 */


var MockTracer =
/** @class */
function (_super) {
  __extends(MockTracer, _super); //------------------------------------------------------------------------//
  // MockTracer-specific
  //------------------------------------------------------------------------//


  function MockTracer() {
    var _this = _super.call(this) || this;

    _this._spans = [];
    return _this;
  } //------------------------------------------------------------------------//
  // OpenTracing implementation
  //------------------------------------------------------------------------//


  MockTracer.prototype._startSpan = function (name, fields) {
    // _allocSpan is given it's own method so that derived classes can
    // allocate any type of object they want, but not have to duplicate
    // the other common logic in startSpan().
    var span = this._allocSpan();

    span.setOperationName(name);

    this._spans.push(span);

    if (fields.references) {
      for (var _i = 0, _a = fields.references; _i < _a.length; _i++) {
        var ref = _a[_i];
        span.addReference(ref);
      }
    } // Capture the stack at the time the span started


    span._startStack = new Error().stack;
    return span;
  };

  MockTracer.prototype._inject = function (span, format, carrier) {
    throw new Error('NOT YET IMPLEMENTED');
  };

  MockTracer.prototype._extract = function (format, carrier) {
    throw new Error('NOT YET IMPLEMENTED');
  };

  MockTracer.prototype._allocSpan = function () {
    return new mock_span_1.default(this);
  };
  /**
   * Discard any buffered data.
   */


  MockTracer.prototype.clear = function () {
    this._spans = [];
  };
  /**
   * Return the buffered data in a format convenient for making unit test
   * assertions.
   */


  MockTracer.prototype.report = function () {
    return new mock_report_1.default(this._spans);
  };

  return MockTracer;
}(opentracing.Tracer);

exports.MockTracer = MockTracer;
exports.default = MockTracer;

/***/ }),

/***/ "./node_modules/opentracing/lib/noop.js":
/*!**********************************************!*\
  !*** ./node_modules/opentracing/lib/noop.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var span_1 = __webpack_require__(/*! ./span */ "./node_modules/opentracing/lib/span.js");

var span_context_1 = __webpack_require__(/*! ./span_context */ "./node_modules/opentracing/lib/span_context.js");

var tracer_1 = __webpack_require__(/*! ./tracer */ "./node_modules/opentracing/lib/tracer.js");

exports.tracer = null;
exports.spanContext = null;
exports.span = null; // Deferred initialization to avoid a dependency cycle where Tracer depends on
// Span which depends on the noop tracer.

function initialize() {
  exports.tracer = new tracer_1.default();
  exports.span = new span_1.default();
  exports.spanContext = new span_context_1.default();
}

exports.initialize = initialize;

/***/ }),

/***/ "./node_modules/opentracing/lib/reference.js":
/*!***************************************************!*\
  !*** ./node_modules/opentracing/lib/reference.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var span_1 = __webpack_require__(/*! ./span */ "./node_modules/opentracing/lib/span.js");
/**
 * Reference pairs a reference type constant (e.g., REFERENCE_CHILD_OF or
 * REFERENCE_FOLLOWS_FROM) with the SpanContext it points to.
 *
 * See the exported childOf() and followsFrom() functions at the package level.
 */


var Reference =
/** @class */
function () {
  /**
   * Initialize a new Reference instance.
   *
   * @param {string} type - the Reference type constant (e.g.,
   *        REFERENCE_CHILD_OF or REFERENCE_FOLLOWS_FROM).
   * @param {SpanContext} referencedContext - the SpanContext being referred
   *        to. As a convenience, a Span instance may be passed in instead
   *        (in which case its .context() is used here).
   */
  function Reference(type, referencedContext) {
    this._type = type;
    this._referencedContext = referencedContext instanceof span_1.default ? referencedContext.context() : referencedContext;
  }
  /**
   * @return {string} The Reference type (e.g., REFERENCE_CHILD_OF or
   *         REFERENCE_FOLLOWS_FROM).
   */


  Reference.prototype.type = function () {
    return this._type;
  };
  /**
   * @return {SpanContext} The SpanContext being referred to (e.g., the
   *         parent in a REFERENCE_CHILD_OF Reference).
   */


  Reference.prototype.referencedContext = function () {
    return this._referencedContext;
  };

  return Reference;
}();

exports.default = Reference;

/***/ }),

/***/ "./node_modules/opentracing/lib/span.js":
/*!**********************************************!*\
  !*** ./node_modules/opentracing/lib/span.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var noop = __webpack_require__(/*! ./noop */ "./node_modules/opentracing/lib/noop.js");
/**
 * Span represents a logical unit of work as part of a broader Trace. Examples
 * of span might include remote procedure calls or a in-process function calls
 * to sub-components. A Trace has a single, top-level "root" Span that in turn
 * may have zero or more child Spans, which in turn may have children.
 */


var Span =
/** @class */
function () {
  function Span() {} // ---------------------------------------------------------------------- //
  // OpenTracing API methods
  // ---------------------------------------------------------------------- //

  /**
   * Returns the SpanContext object associated with this Span.
   *
   * @return {SpanContext}
   */


  Span.prototype.context = function () {
    return this._context();
  };
  /**
   * Returns the Tracer object used to create this Span.
   *
   * @return {Tracer}
   */


  Span.prototype.tracer = function () {
    return this._tracer();
  };
  /**
   * Sets the string name for the logical operation this span represents.
   *
   * @param {string} name
   */


  Span.prototype.setOperationName = function (name) {
    this._setOperationName(name);

    return this;
  };
  /**
   * Sets a key:value pair on this Span that also propagates to future
   * children of the associated Span.
   *
   * setBaggageItem() enables powerful functionality given a full-stack
   * opentracing integration (e.g., arbitrary application data from a web
   * client can make it, transparently, all the way into the depths of a
   * storage system), and with it some powerful costs: use this feature with
   * care.
   *
   * IMPORTANT NOTE #1: setBaggageItem() will only propagate baggage items to
   * *future* causal descendants of the associated Span.
   *
   * IMPORTANT NOTE #2: Use this thoughtfully and with care. Every key and
   * value is copied into every local *and remote* child of the associated
   * Span, and that can add up to a lot of network and cpu overhead.
   *
   * @param {string} key
   * @param {string} value
   */


  Span.prototype.setBaggageItem = function (key, value) {
    this._setBaggageItem(key, value);

    return this;
  };
  /**
   * Returns the value for a baggage item given its key.
   *
   * @param  {string} key
   *         The key for the given trace attribute.
   * @return {string}
   *         String value for the given key, or undefined if the key does not
   *         correspond to a set trace attribute.
   */


  Span.prototype.getBaggageItem = function (key) {
    return this._getBaggageItem(key);
  };
  /**
   * Adds a single tag to the span.  See `addTags()` for details.
   *
   * @param {string} key
   * @param {any} value
   */


  Span.prototype.setTag = function (key, value) {
    var _a; // NOTE: the call is normalized to a call to _addTags()


    this._addTags((_a = {}, _a[key] = value, _a));

    return this;
  };
  /**
   * Adds the given key value pairs to the set of span tags.
   *
   * Multiple calls to addTags() results in the tags being the superset of
   * all calls.
   *
   * The behavior of setting the same key multiple times on the same span
   * is undefined.
   *
   * The supported type of the values is implementation-dependent.
   * Implementations are expected to safely handle all types of values but
   * may choose to ignore unrecognized / unhandle-able values (e.g. objects
   * with cyclic references, function objects).
   *
   * @return {[type]} [description]
   */


  Span.prototype.addTags = function (keyValueMap) {
    this._addTags(keyValueMap);

    return this;
  };
  /**
   * Add a log record to this Span, optionally at a user-provided timestamp.
   *
   * For example:
   *
   *     span.log({
   *         size: rpc.size(),  // numeric value
   *         URI: rpc.URI(),  // string value
   *         payload: rpc.payload(),  // Object value
   *         "keys can be arbitrary strings": rpc.foo(),
   *     });
   *
   *     span.log({
   *         "error.description": someError.description(),
   *     }, someError.timestampMillis());
   *
   * @param {object} keyValuePairs
   *        An object mapping string keys to arbitrary value types. All
   *        Tracer implementations should support bool, string, and numeric
   *        value types, and some may also support Object values.
   * @param {number} timestamp
   *        An optional parameter specifying the timestamp in milliseconds
   *        since the Unix epoch. Fractional values are allowed so that
   *        timestamps with sub-millisecond accuracy can be represented. If
   *        not specified, the implementation is expected to use its notion
   *        of the current time of the call.
   */


  Span.prototype.log = function (keyValuePairs, timestamp) {
    this._log(keyValuePairs, timestamp);

    return this;
  };
  /**
   * DEPRECATED
   */


  Span.prototype.logEvent = function (eventName, payload) {
    return this._log({
      event: eventName,
      payload: payload
    });
  };
  /**
   * Sets the end timestamp and finalizes Span state.
   *
   * With the exception of calls to Span.context() (which are always allowed),
   * finish() must be the last call made to any span instance, and to do
   * otherwise leads to undefined behavior.
   *
   * @param  {number} finishTime
   *         Optional finish time in milliseconds as a Unix timestamp. Decimal
   *         values are supported for timestamps with sub-millisecond accuracy.
   *         If not specified, the current time (as defined by the
   *         implementation) will be used.
   */


  Span.prototype.finish = function (finishTime) {
    this._finish(finishTime); // Do not return `this`. The Span generally should not be used after it
    // is finished so chaining is not desired in this context.

  }; // ---------------------------------------------------------------------- //
  // Derived classes can choose to implement the below
  // ---------------------------------------------------------------------- //
  // By default returns a no-op SpanContext.


  Span.prototype._context = function () {
    return noop.spanContext;
  }; // By default returns a no-op tracer.
  //
  // The base class could store the tracer that created it, but it does not
  // in order to ensure the no-op span implementation has zero members,
  // which allows V8 to aggressively optimize calls to such objects.


  Span.prototype._tracer = function () {
    return noop.tracer;
  }; // By default does nothing


  Span.prototype._setOperationName = function (name) {}; // By default does nothing


  Span.prototype._setBaggageItem = function (key, value) {}; // By default does nothing


  Span.prototype._getBaggageItem = function (key) {
    return undefined;
  }; // By default does nothing
  //
  // NOTE: both setTag() and addTags() map to this function. keyValuePairs
  // will always be an associative array.


  Span.prototype._addTags = function (keyValuePairs) {}; // By default does nothing


  Span.prototype._log = function (keyValuePairs, timestamp) {}; // By default does nothing
  //
  // finishTime is expected to be either a number or undefined.


  Span.prototype._finish = function (finishTime) {};

  return Span;
}();

exports.Span = Span;
exports.default = Span;

/***/ }),

/***/ "./node_modules/opentracing/lib/span_context.js":
/*!******************************************************!*\
  !*** ./node_modules/opentracing/lib/span_context.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * SpanContext represents Span state that must propagate to descendant Spans
 * and across process boundaries.
 *
 * SpanContext is logically divided into two pieces: the user-level "Baggage"
 * (see setBaggageItem and getBaggageItem) that propagates across Span
 * boundaries and any Tracer-implementation-specific fields that are needed to
 * identify or otherwise contextualize the associated Span instance (e.g., a
 * <trace_id, span_id, sampled> tuple).
 */

var SpanContext =
/** @class */
function () {
  function SpanContext() {} // The SpanContext is entirely implementation dependent

  /**
   * Returns a string representation of the implementation internal trace ID.
   *
   * @returns {string}
   */


  SpanContext.prototype.toTraceId = function () {
    return '';
  };
  /**
   * Returns a string representation of the implementation internal span ID.
   *
   * @returns {string}
   */


  SpanContext.prototype.toSpanId = function () {
    return '';
  };

  return SpanContext;
}();

exports.SpanContext = SpanContext;
exports.default = SpanContext;

/***/ }),

/***/ "./node_modules/opentracing/lib/tracer.js":
/*!************************************************!*\
  !*** ./node_modules/opentracing/lib/tracer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Functions = __webpack_require__(/*! ./functions */ "./node_modules/opentracing/lib/functions.js");

var Noop = __webpack_require__(/*! ./noop */ "./node_modules/opentracing/lib/noop.js");

var span_1 = __webpack_require__(/*! ./span */ "./node_modules/opentracing/lib/span.js");
/**
 * Tracer is the entry-point between the instrumentation API and the tracing
 * implementation.
 *
 * The default object acts as a no-op implementation.
 *
 * Note to implementators: derived classes can choose to directly implement the
 * methods in the "OpenTracing API methods" section, or optionally the subset of
 * underscore-prefixed methods to pick up the argument checking and handling
 * automatically from the base class.
 */


var Tracer =
/** @class */
function () {
  function Tracer() {} // ---------------------------------------------------------------------- //
  // OpenTracing API methods
  // ---------------------------------------------------------------------- //

  /**
   * Starts and returns a new Span representing a logical unit of work.
   *
   * For example:
   *
   *     // Start a new (parentless) root Span:
   *     var parent = Tracer.startSpan('DoWork');
   *
   *     // Start a new (child) Span:
   *     var child = Tracer.startSpan('load-from-db', {
   *         childOf: parent.context(),
   *     });
   *
   *     // Start a new async (FollowsFrom) Span:
   *     var child = Tracer.startSpan('async-cache-write', {
   *         references: [
   *             opentracing.followsFrom(parent.context())
   *         ],
   *     });
   *
   * @param {string} name - the name of the operation (REQUIRED).
   * @param {SpanOptions} [options] - options for the newly created span.
   * @return {Span} - a new Span object.
   */


  Tracer.prototype.startSpan = function (name, options) {
    if (options === void 0) {
      options = {};
    } // Convert options.childOf to fields.references as needed.


    if (options.childOf) {
      // Convert from a Span or a SpanContext into a Reference.
      var childOf = Functions.childOf(options.childOf);

      if (options.references) {
        options.references.push(childOf);
      } else {
        options.references = [childOf];
      }

      delete options.childOf;
    }

    return this._startSpan(name, options);
  };
  /**
   * Injects the given SpanContext instance for cross-process propagation
   * within `carrier`. The expected type of `carrier` depends on the value of
   * `format.
   *
   * OpenTracing defines a common set of `format` values (see
   * FORMAT_TEXT_MAP, FORMAT_HTTP_HEADERS, and FORMAT_BINARY), and each has
   * an expected carrier type.
   *
   * Consider this pseudocode example:
   *
   *     var clientSpan = ...;
   *     ...
   *     // Inject clientSpan into a text carrier.
   *     var headersCarrier = {};
   *     Tracer.inject(clientSpan.context(), Tracer.FORMAT_HTTP_HEADERS, headersCarrier);
   *     // Incorporate the textCarrier into the outbound HTTP request header
   *     // map.
   *     Object.assign(outboundHTTPReq.headers, headersCarrier);
   *     // ... send the httpReq
   *
   * @param  {SpanContext} spanContext - the SpanContext to inject into the
   *         carrier object. As a convenience, a Span instance may be passed
   *         in instead (in which case its .context() is used for the
   *         inject()).
   * @param  {string} format - the format of the carrier.
   * @param  {any} carrier - see the documentation for the chosen `format`
   *         for a description of the carrier object.
   */


  Tracer.prototype.inject = function (spanContext, format, carrier) {
    // Allow the user to pass a Span instead of a SpanContext
    if (spanContext instanceof span_1.default) {
      spanContext = spanContext.context();
    }

    return this._inject(spanContext, format, carrier);
  };
  /**
   * Returns a SpanContext instance extracted from `carrier` in the given
   * `format`.
   *
   * OpenTracing defines a common set of `format` values (see
   * FORMAT_TEXT_MAP, FORMAT_HTTP_HEADERS, and FORMAT_BINARY), and each has
   * an expected carrier type.
   *
   * Consider this pseudocode example:
   *
   *     // Use the inbound HTTP request's headers as a text map carrier.
   *     var headersCarrier = inboundHTTPReq.headers;
   *     var wireCtx = Tracer.extract(Tracer.FORMAT_HTTP_HEADERS, headersCarrier);
   *     var serverSpan = Tracer.startSpan('...', { childOf : wireCtx });
   *
   * @param  {string} format - the format of the carrier.
   * @param  {any} carrier - the type of the carrier object is determined by
   *         the format.
   * @return {SpanContext}
   *         The extracted SpanContext, or null if no such SpanContext could
   *         be found in `carrier`
   */


  Tracer.prototype.extract = function (format, carrier) {
    return this._extract(format, carrier);
  }; // ---------------------------------------------------------------------- //
  // Derived classes can choose to implement the below
  // ---------------------------------------------------------------------- //
  // NOTE: the input to this method is *always* an associative array. The
  // public-facing startSpan() method normalizes the arguments so that
  // all N implementations do not need to worry about variations in the call
  // signature.
  //
  // The default behavior returns a no-op span.


  Tracer.prototype._startSpan = function (name, fields) {
    return Noop.span;
  }; // The default behavior is a no-op.


  Tracer.prototype._inject = function (spanContext, format, carrier) {}; // The default behavior is to return a no-op SpanContext.


  Tracer.prototype._extract = function (format, carrier) {
    return Noop.spanContext;
  };

  return Tracer;
}();

exports.Tracer = Tracer;
exports.default = Tracer;

/***/ }),

/***/ "./node_modules/querystringify/index.js":
/*!**********************************************!*\
  !*** ./node_modules/querystringify/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty,
    undef;
/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */

function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}
/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */


function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}
/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */


function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g,
      result = {},
      part;

  while (part = parser.exec(query)) {
    var key = decode(part[1]),
        value = decode(part[2]); //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //

    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}
/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */


function querystringify(obj, prefix) {
  prefix = prefix || '';
  var pairs = [],
      value,
      key; //
  // Optionally prefix with a '?' if needed
  //

  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key]; //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //

      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encodeURIComponent(key);
      value = encodeURIComponent(value); //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //

      if (key === null || value === null) continue;
      pairs.push(key + '=' + value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
} //
// Expose the module.
//


exports.stringify = querystringify;
exports.parse = querystring;

/***/ }),

/***/ "./node_modules/requires-port/index.js":
/*!*********************************************!*\
  !*** ./node_modules/requires-port/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;
  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

/***/ }),

/***/ "./node_modules/shimmer/index.js":
/*!***************************************!*\
  !*** ./node_modules/shimmer/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isFunction(funktion) {
  return typeof funktion === 'function';
} // Default to complaining loudly when things don't go according to plan.


var logger = console.error.bind(console); // Sets a property on an object, preserving its enumerability.
// This function assumes that the property is already writable.

function defineProperty(obj, name, value) {
  var enumerable = !!obj[name] && obj.propertyIsEnumerable(name);
  Object.defineProperty(obj, name, {
    configurable: true,
    enumerable: enumerable,
    writable: true,
    value: value
  });
} // Keep initialization idempotent.


function shimmer(options) {
  if (options && options.logger) {
    if (!isFunction(options.logger)) logger("new logger isn't a function, not replacing");else logger = options.logger;
  }
}

function wrap(nodule, name, wrapper) {
  if (!nodule || !nodule[name]) {
    logger('no original function ' + name + ' to wrap');
    return;
  }

  if (!wrapper) {
    logger('no wrapper function');
    logger(new Error().stack);
    return;
  }

  if (!isFunction(nodule[name]) || !isFunction(wrapper)) {
    logger('original object and wrapper must be functions');
    return;
  }

  var original = nodule[name];
  var wrapped = wrapper(original, name);
  defineProperty(wrapped, '__original', original);
  defineProperty(wrapped, '__unwrap', function () {
    if (nodule[name] === wrapped) defineProperty(nodule, name, original);
  });
  defineProperty(wrapped, '__wrapped', true);
  defineProperty(nodule, name, wrapped);
  return wrapped;
}

function massWrap(nodules, names, wrapper) {
  if (!nodules) {
    logger('must provide one or more modules to patch');
    logger(new Error().stack);
    return;
  } else if (!Array.isArray(nodules)) {
    nodules = [nodules];
  }

  if (!(names && Array.isArray(names))) {
    logger('must provide one or more functions to wrap on modules');
    return;
  }

  nodules.forEach(function (nodule) {
    names.forEach(function (name) {
      wrap(nodule, name, wrapper);
    });
  });
}

function unwrap(nodule, name) {
  if (!nodule || !nodule[name]) {
    logger('no function to unwrap.');
    logger(new Error().stack);
    return;
  }

  if (!nodule[name].__unwrap) {
    logger('no original to unwrap to -- has ' + name + ' already been unwrapped?');
  } else {
    return nodule[name].__unwrap();
  }
}

function massUnwrap(nodules, names) {
  if (!nodules) {
    logger('must provide one or more modules to patch');
    logger(new Error().stack);
    return;
  } else if (!Array.isArray(nodules)) {
    nodules = [nodules];
  }

  if (!(names && Array.isArray(names))) {
    logger('must provide one or more functions to unwrap on modules');
    return;
  }

  nodules.forEach(function (nodule) {
    names.forEach(function (name) {
      unwrap(nodule, name);
    });
  });
}

shimmer.wrap = wrap;
shimmer.massWrap = massWrap;
shimmer.unwrap = unwrap;
shimmer.massUnwrap = massUnwrap;
module.exports = shimmer;

/***/ }),

/***/ "./node_modules/url-parse/index.js":
/*!*****************************************!*\
  !*** ./node_modules/url-parse/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var required = __webpack_require__(/*! requires-port */ "./node_modules/requires-port/index.js"),
    qs = __webpack_require__(/*! querystringify */ "./node_modules/querystringify/index.js"),
    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
    whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]',
    left = new RegExp('^' + whitespace + '+');
/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */


function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}
/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */


var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
function sanitize(address) {
  // Sanitize what is left of the address
  return address.replace('\\', '/');
}, ['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];
/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */

var ignore = {
  hash: 1,
  query: 1
};
/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */

function lolcation(loc) {
  var globalVar;
  if (typeof window !== 'undefined') globalVar = window;else if (typeof global !== 'undefined') globalVar = global;else if (typeof self !== 'undefined') globalVar = self;else globalVar = {};
  var location = globalVar.location || {};
  loc = loc || location;
  var finaldestination = {},
      type = typeof loc,
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});

    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}
/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */


function extractProtocol(address) {
  address = trimLeft(address);
  var match = protocolre.exec(address);
  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}
/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */


function resolve(relative, base) {
  if (relative === '') return base;
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');
  return path.join('/');
}
/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */


function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = typeof location,
      url = this,
      i = 0; //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //

  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;
  location = lolcation(location); //
  // Extract protocol information before running the instructions.
  //

  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest; //
  // When the authority component is absent the URL starts with a path
  // component.
  //

  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : ''); //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //

    if (instruction[4]) url[key] = url[key].toLowerCase();
  } //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //


  if (parser) url.query = parser(url.query); //
  // If the URL is relative, resolve the pathname against the base URL.
  //

  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  } //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //


  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  } //
  // Parse down the `auth` for the username and password.
  //


  url.username = url.password = '';

  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null'; //
  // The href is just the compiled result.
  //

  url.href = url.toString();
}
/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */


function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;
      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }

      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];
    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';
  url.href = url.toString();
  return url;
}
/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */


function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;
  var query,
      url = this,
      protocol = url.protocol;
  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;
  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;
  if (url.hash) result += url.hash;
  return result;
}

Url.prototype = {
  set: set,
  toString: toString
}; //
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//

Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;
module.exports = Url;

/***/ }),

/***/ "./packages/datadog-plugin-fetch/src/index.js":
/*!****************************************************!*\
  !*** ./packages/datadog-plugin-fetch/src/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var URL = __webpack_require__(/*! url-parse */ "./node_modules/url-parse/index.js");

var _require = __webpack_require__(/*! opentracing */ "./node_modules/opentracing/lib/index.js"),
    Reference = _require.Reference,
    REFERENCE_CHILD_OF = _require.REFERENCE_CHILD_OF;

var _require2 = __webpack_require__(/*! ../../dd-trace/src/constants */ "./packages/dd-trace/src/constants.js"),
    REFERENCE_NOOP = _require2.REFERENCE_NOOP;

var tx = __webpack_require__(/*! ../../dd-trace/src/plugins/util/http */ "./packages/dd-trace/src/plugins/util/http.js");

function createWrapFetch(tracer, config) {
  return function wrapFetch(fetch) {
    var fetchWithTrace = function fetchWithTrace() {
      return fetch._datadog_wrapper.apply(this, arguments);
    };

    fetch._datadog_wrapper = function (resource, init) {
      var service = config.service || "".concat(tracer._service, "-http-client");
      var method = getMethod(resource, init);
      var url = getUrl(resource);
      var scope = tracer.scope();
      var childOf = scope.active();
      var type = isFlush(tracer._url.href, url) ? REFERENCE_NOOP : REFERENCE_CHILD_OF;
      var span = tracer.startSpan('browser.request', {
        references: [new Reference(type, childOf)],
        tags: {
          'span.kind': 'client',
          'service.name': service,
          'resource.name': method,
          'span.type': 'http',
          'http.method': method,
          'http.url': url.href
        }
      }); // HACK: move to backend

      span.setTag('_top_level', 1);

      if (type === REFERENCE_CHILD_OF) {
        init = inject(init, tracer, span, url.origin);
      }

      var promise = tracer.scope().bind(fetch, span).call(this, resource, init);
      promise.then(function (res) {
        span.setTag('http.status_code', res.status);
      });
      tx.wrap(span, promise);
      return promise;
    };

    return fetchWithTrace;
  };
}

function unwrapFetch(fetch) {
  fetch._datadog_wrapper = fetch;
}

function getMethod(resource, init) {
  if (init && init.method) return init.method;
  if (resource && resource.method) return resource.method;
  return 'GET';
}

function getUrl(resource) {
  var url = _typeof(resource) === 'object' ? resource.url : resource;
  return new URL(url, window.location.origin);
}

function inject(init, tracer, span, origin) {
  var format = window.ddtrace.ext.formats.HTTP_HEADERS;
  var peers = tracer._peers;

  if (origin !== window.location.origin && !tx.isPeer(origin, peers)) {
    return init;
  }

  init = init || {};
  init.headers = init.headers || {};

  if (typeof init.headers.set === 'function') {
    var headers = {};
    tracer.inject(span, format, headers);

    for (var name in headers) {
      init.headers.set(name, headers[name]);
    }
  } else {
    tracer.inject(span, format, init.headers);
  }

  return init;
} // TODO: support staging and other environments


function isFlush(href, url) {
  return new RegExp("^".concat(href, "/v1/input/[a-z0-9]+$"), 'i').test(url.href) || url.href.startsWith('https://rum-http-intake.logs.datadoghq.com') || url.href.startsWith('https://browser-http-intake.logs.datadoghq.com');
}

module.exports = {
  name: 'fetch',
  patch: function patch(fetch, tracer, config) {
    return createWrapFetch(tracer, config)(fetch);
  },
  unpatch: function unpatch(fetch) {
    unwrapFetch(fetch);
  }
};

/***/ }),

/***/ "./packages/datadog-plugin-xmlhttprequest/src/index.js":
/*!*************************************************************!*\
  !*** ./packages/datadog-plugin-xmlhttprequest/src/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var URL = __webpack_require__(/*! url-parse */ "./node_modules/url-parse/index.js");

var _require = __webpack_require__(/*! opentracing */ "./node_modules/opentracing/lib/index.js"),
    Reference = _require.Reference,
    REFERENCE_CHILD_OF = _require.REFERENCE_CHILD_OF;

var _require2 = __webpack_require__(/*! ../../dd-trace/src/constants */ "./packages/dd-trace/src/constants.js"),
    REFERENCE_NOOP = _require2.REFERENCE_NOOP;

var tx = __webpack_require__(/*! ../../dd-trace/src/plugins/util/http */ "./packages/dd-trace/src/plugins/util/http.js");

function createWrapOpen(tracer) {
  return function wrapOpen(open) {
    return function openWithTrace(method, url) {
      this._datadog_method = method;
      this._datadog_url = new URL(url, window.location.origin);
      return open.apply(this, arguments);
    };
  };
}

function createWrapSend(tracer, config) {
  return function wrapSend(send) {
    return function sendWithTrace(body) {
      var _this = this;

      var service = config.service || "".concat(tracer._service, "-http-client");
      var method = this._datadog_method;
      var url = this._datadog_url;
      var scope = tracer.scope();
      var childOf = scope.active();
      var type = isFlush(tracer._url.href, url) ? REFERENCE_NOOP : REFERENCE_CHILD_OF;
      var span = tracer.startSpan('browser.request', {
        references: [new Reference(type, childOf)],
        tags: {
          'span.kind': 'client',
          'service.name': service,
          'resource.name': method,
          'span.type': 'http',
          'http.method': method,
          'http.url': url.href
        }
      }); // HACK: move to backend

      span.setTag('_top_level', 1);

      if (type === REFERENCE_CHILD_OF) {
        inject(this, tracer, span);
      }

      this.addEventListener('error', function (e) {
        return span.setTag('error', e);
      });
      this.addEventListener('load', function () {
        return span.setTag('http.status', _this.status);
      });
      this.addEventListener('loadend', function () {
        return span.finish();
      });

      try {
        return tracer.scope().bind(send, span).apply(this, arguments);
      } catch (e) {
        span.setTag('error', e);
        span.finish();
        throw e;
      }
    };
  };
}

function inject(xhr, tracer, span) {
  var format = window.ddtrace.ext.formats.HTTP_HEADERS;
  var headers = {};
  var origin = xhr._datadog_url.origin;
  var peers = tracer._peers;
  if (origin !== window.location.origin && !tx.isPeer(origin, peers)) return;
  tracer.inject(span, format, headers);

  for (var name in headers) {
    xhr.setRequestHeader(name, headers[name]);
  }
} // TODO: support staging and other environments


function isFlush(href, url) {
  return new RegExp("^".concat(href, "/v1/input/[a-z0-9]+$"), 'i').test(url.href) || url.href.startsWith('https://rum-http-intake.logs.datadoghq.com') || url.href.startsWith('https://browser-http-intake.logs.datadoghq.com');
}

module.exports = {
  name: 'XMLHttpRequest',
  patch: function patch(XMLHttpRequest, tracer, config) {
    this.wrap(XMLHttpRequest.prototype, 'open', createWrapOpen(tracer, config));
    this.wrap(XMLHttpRequest.prototype, 'send', createWrapSend(tracer, config));
  },
  unpatch: function unpatch(XMLHttpRequest) {
    this.unwrap(XMLHttpRequest.prototype, 'open');
    this.unwrap(XMLHttpRequest.prototype, 'send');
  }
};

/***/ }),

/***/ "./packages/dd-trace/browser.js":
/*!**************************************!*\
  !*** ./packages/dd-trace/browser.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/stable/object/assign */ "./node_modules/core-js/stable/object/assign.js"); // TODO: remove dependency


__webpack_require__(/*! core-js/stable/set */ "./node_modules/core-js/stable/set/index.js"); // TODO: remove dependency


__webpack_require__(/*! core-js/stable/map */ "./node_modules/core-js/stable/map/index.js"); // TODO: remove dependency


__webpack_require__(/*! core-js/stable/typed-array */ "./node_modules/core-js/stable/typed-array/index.js"); // TODO: remove dependency


var platform = __webpack_require__(/*! ./src/platform */ "./packages/dd-trace/src/platform/index.js");

var browser = __webpack_require__(/*! ./src/platform/browser */ "./packages/dd-trace/src/platform/browser/index.js");

var ext = __webpack_require__(/*! ../../ext */ "./ext/index.js");

platform.use(browser);

var TracerProxy = __webpack_require__(/*! ./src/proxy */ "./packages/dd-trace/src/proxy.js");

var tracer = new TracerProxy();
module.exports = tracer;
module.exports.default = module.exports;
module.exports.tracer = module.exports;
window.ddtrace = {
  tracer: tracer,
  ext: ext
};

/***/ }),

/***/ "./packages/dd-trace/src/analytics_sampler.js":
/*!****************************************************!*\
  !*** ./packages/dd-trace/src/analytics_sampler.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ANALYTICS = __webpack_require__(/*! ../../../ext/tags */ "./ext/tags.js").ANALYTICS;

var enabled = false;
module.exports = {
  enable: function enable() {
    enabled = true;
  },
  disable: function disable() {
    enabled = false;
  },
  sample: function sample(span, rate, inherit) {
    if (_typeof(rate) === 'object') {
      this.sample(span, rate[span.context()._name], inherit);
    } else if (rate !== undefined) {
      span.setTag(ANALYTICS, rate);
    } else if (inherit && enabled) {
      span.setTag(ANALYTICS, 1);
    }
  }
};

/***/ }),

/***/ "./packages/dd-trace/src/config.js":
/*!*****************************************!*\
  !*** ./packages/dd-trace/src/config.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var URL = __webpack_require__(/*! url-parse */ "./node_modules/url-parse/index.js");

var platform = __webpack_require__(/*! ./platform */ "./packages/dd-trace/src/platform/index.js");

var coalesce = __webpack_require__(/*! koalas */ "./node_modules/koalas/index.js");

var scopes = __webpack_require__(/*! ../../../ext/scopes */ "./ext/scopes.js");

var tagger = __webpack_require__(/*! ./tagger */ "./packages/dd-trace/src/tagger.js");

var id = __webpack_require__(/*! ./id */ "./packages/dd-trace/src/id.js");

var runtimeId = "".concat(id().toString()).concat(id().toString());

var Config = function Config(service, options) {
  _classCallCheck(this, Config);

  options = options || {};
  var enabled = coalesce(options.enabled, platform.env('DD_TRACE_ENABLED'), true);
  var debug = coalesce(options.debug, platform.env('DD_TRACE_DEBUG'), false);
  var logInjection = coalesce(options.logInjection, platform.env('DD_LOGS_INJECTION'), false);
  var env = coalesce(options.env, platform.env('DD_ENV'));
  var url = coalesce(options.url, platform.env('DD_TRACE_AGENT_URL'), platform.env('DD_TRACE_URL'), null);
  var site = coalesce(options.site, platform.env('DD_SITE'), 'datadoghq.com');
  var hostname = coalesce(options.hostname, platform.env('DD_AGENT_HOST'), platform.env('DD_TRACE_AGENT_HOSTNAME'));
  var port = coalesce(options.port, platform.env('DD_TRACE_AGENT_PORT'), 8126);
  var sampleRate = coalesce(Math.min(Math.max(options.sampleRate, 0), 1), 1);
  var flushInterval = coalesce(parseInt(options.flushInterval, 10), 2000);
  var plugins = coalesce(options.plugins, true);
  var dogstatsd = options.dogstatsd || {};
  var runtimeMetrics = coalesce(options.runtimeMetrics, platform.env('DD_RUNTIME_METRICS_ENABLED'), false);
  var analytics = coalesce(options.analytics, platform.env('DD_TRACE_ANALYTICS_ENABLED'), platform.env('DD_TRACE_ANALYTICS'));
  var reportHostname = coalesce(options.reportHostname, platform.env('DD_TRACE_REPORT_HOSTNAME'), false);
  var scope = coalesce(options.scope, platform.env('DD_TRACE_SCOPE'));
  var clientToken = coalesce(options.clientToken, platform.env('DD_CLIENT_TOKEN'));
  var tags = {};
  tagger.add(tags, platform.env('DD_TAGS'));
  tagger.add(tags, platform.env('DD_TRACE_TAGS'));
  tagger.add(tags, platform.env('DD_TRACE_GLOBAL_TAGS'));
  tagger.add(tags, options.tags);
  var sampler = options.experimental && options.experimental.sampler || {};
  Object.assign(sampler, {
    sampleRate: coalesce(sampler.sampleRate, platform.env('DD_TRACE_SAMPLE_RATE')),
    rateLimit: coalesce(sampler.rateLimit, platform.env('DD_TRACE_RATE_LIMIT'))
  });
  this.enabled = String(enabled) === 'true';
  this.debug = String(debug) === 'true';
  this.logInjection = String(logInjection) === 'true';
  this.env = env;
  this.url = url && new URL(url);
  this.site = site;
  this.hostname = hostname || this.url && this.url.hostname;
  this.port = String(port || this.url && this.url.port);
  this.flushInterval = flushInterval;
  this.sampleRate = sampleRate;
  this.logger = options.logger;
  this.plugins = !!plugins;
  this.service = coalesce(options.service, platform.env('DD_SERVICE_NAME'), service, 'node');
  this.analytics = String(analytics) === 'true';
  this.tags = tags;
  this.dogstatsd = {
    port: String(coalesce(dogstatsd.port, platform.env('DD_DOGSTATSD_PORT'), 8125))
  };
  this.runtimeMetrics = String(runtimeMetrics) === 'true';
  this.trackAsyncScope = options.trackAsyncScope !== false;
  this.experimental = {
    b3: !(!options.experimental || !options.experimental.b3),
    runtimeId: !(!options.experimental || !options.experimental.runtimeId),
    exporter: options.experimental && options.experimental.exporter,
    peers: options.experimental && options.experimental.distributedTracingOriginWhitelist || [],
    sampler: sampler
  };
  this.reportHostname = String(reportHostname) === 'true';
  this.scope = platform.env('DD_CONTEXT_PROPAGATION') === 'false' ? scopes.NOOP : scope;
  this.clientToken = clientToken;
  this.logLevel = coalesce(options.logLevel, platform.env('DD_TRACE_LOG_LEVEL'), 'debug');

  if (this.experimental.runtimeId) {
    tagger.add(tags, {
      'runtime-id': runtimeId
    });
  }
};

module.exports = Config;

/***/ }),

/***/ "./packages/dd-trace/src/constants.js":
/*!********************************************!*\
  !*** ./packages/dd-trace/src/constants.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  SAMPLE_RATE_METRIC_KEY: '_sample_rate',
  SAMPLING_PRIORITY_KEY: '_sampling_priority_v1',
  ANALYTICS_KEY: '_dd1.sr.eausr',
  ORIGIN_KEY: '_dd.origin',
  HOSTNAME_KEY: '_dd.hostname',
  REFERENCE_NOOP: 'noop',
  SAMPLING_RULE_DECISION: '_dd.rule_psr',
  SAMPLING_LIMIT_DECISION: '_dd.limit_psr',
  SAMPLING_AGENT_DECISION: '_dd.agent_psr'
};

/***/ }),

/***/ "./packages/dd-trace/src/exporters/browser/index.js":
/*!**********************************************************!*\
  !*** ./packages/dd-trace/src/exporters/browser/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var URL = __webpack_require__(/*! url-parse */ "./node_modules/url-parse/index.js");

var MAX_SIZE = 64 * 1024; // 64kb

var DELIMITER = '\r\n'; // TODO: rename and refactor to support Node
// TODO: flush more often

var BrowserExporter =
/*#__PURE__*/
function () {
  function BrowserExporter(_ref) {
    var _this = this;

    var clientToken = _ref.clientToken,
        url = _ref.url,
        site = _ref.site,
        env = _ref.env;

    _classCallCheck(this, BrowserExporter);

    this._queue = [];
    this._flushing = false;
    this._clientToken = clientToken;
    this._env = env;
    this._url = url || new URL("https://public-trace-http-intake.logs.".concat(site));
    this._size = 0;
    window.addEventListener('beforeunload', function () {
      return _this._flush();
    });
    window.addEventListener('visibilitychange', function () {
      return _this._flush();
    });
  }

  _createClass(BrowserExporter, [{
    key: "export",
    value: function _export(spans) {
      var meta = this._traceMeta();

      var json = JSON.stringify({
        spans: spans,
        meta: meta
      });
      var size = json.length + (this._queue.length > 0 ? DELIMITER.length : 0);

      if (this._size + size > MAX_SIZE) {
        if (this._flushing) return; // drop trace to avoid multiple connections

        if (size > MAX_SIZE) return; // drop trace because too large

        this._flush();
      }

      this._size += size;

      this._queue.push(json);
    }
  }, {
    key: "_flush",
    value: function _flush() {
      var _this2 = this;

      if (this._queue.length === 0) return;
      this._flushing = true;
      var url = "".concat(this._url.href, "/v1/input/").concat(this._clientToken);

      var body = this._queue.join(DELIMITER);

      this._queue = [];
      this._size = 0;
      send(url, body, function () {
        _this2._flushing = false;
      });
    }
  }, {
    key: "_traceMeta",
    value: function _traceMeta() {
      var meta = {
        '_dd.source': 'browser'
      };
      addTag(meta, 'env', this._env);
      return meta;
    }
  }]);

  return BrowserExporter;
}();

function send(url, body, callback) {
  if (window.navigator && window.navigator.sendBeacon) {
    window.navigator.sendBeacon(url, body);
  } else if (window.fetch) {
    window.fetch(url, {
      body: body,
      method: 'POST',
      keepalive: true,
      mode: 'no-cors'
    }).then(callback, callback);
  } else {
    var req = new XMLHttpRequest();
    req.open('POST', url, true);
    req.addEventListener('loadend', callback);
    req.send(body);
  }
}

function addTag(meta, key, value) {
  if (!value) return;
  meta[key] = value;
}

module.exports = BrowserExporter;

/***/ }),

/***/ "./packages/dd-trace/src/format.js":
/*!*****************************************!*\
  !*** ./packages/dd-trace/src/format.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var constants = __webpack_require__(/*! ./constants */ "./packages/dd-trace/src/constants.js");

var tags = __webpack_require__(/*! ../../../ext/tags */ "./ext/tags.js");

var log = __webpack_require__(/*! ./log */ "./packages/dd-trace/src/log.js");

var id = __webpack_require__(/*! ./id */ "./packages/dd-trace/src/id.js");

var SAMPLING_PRIORITY_KEY = constants.SAMPLING_PRIORITY_KEY;
var ANALYTICS_KEY = constants.ANALYTICS_KEY;
var ANALYTICS = tags.ANALYTICS;
var ORIGIN_KEY = constants.ORIGIN_KEY;
var HOSTNAME_KEY = constants.HOSTNAME_KEY;
var map = {
  'service.name': 'service',
  'span.type': 'type',
  'resource.name': 'resource'
};

function format(span) {
  var formatted = formatSpan(span);
  extractError(formatted, span);
  extractTags(formatted, span);
  extractAnalytics(formatted, span);
  return formatted;
}

function formatSpan(span) {
  var spanContext = span.context();
  return {
    trace_id: spanContext._traceId,
    span_id: spanContext._spanId,
    parent_id: spanContext._parentId || id('0'),
    name: serialize(spanContext._name),
    resource: serialize(spanContext._name),
    error: 0,
    meta: {},
    metrics: {},
    start: Math.round(span._startTime * 1e6),
    duration: Math.round(span._duration * 1e6)
  };
}

function extractTags(trace, span) {
  var context = span.context();
  var origin = context._trace.origin;
  var tags = context._tags;
  var hostname = context._hostname;
  var priority = context._sampling.priority;

  for (var tag in tags) {
    switch (tag) {
      case 'service.name':
      case 'span.type':
      case 'resource.name':
        addTag(trace, {}, map[tag], tags[tag]);
        break;
      // HACK: remove when Datadog supports numeric status code

      case 'http.status_code':
        addTag(trace.meta, {}, tag, tags[tag] && String(tags[tag]));
        break;

      case HOSTNAME_KEY:
      case ANALYTICS:
        break;

      case 'error':
        if (tags[tag]) {
          trace.error = 1;
        }

        break;

      case 'error.type':
      case 'error.msg':
      case 'error.stack':
        trace.error = 1;

      default:
        // eslint-disable-line no-fallthrough
        addTag(trace.meta, trace.metrics, tag, tags[tag]);
    }
  }

  if (span.tracer()._service === tags['service.name']) {
    addTag(trace.meta, trace.metrics, 'language', 'javascript');
  }

  addTag(trace.meta, trace.metrics, SAMPLING_PRIORITY_KEY, priority);
  addTag(trace.meta, trace.metrics, ORIGIN_KEY, origin);
  addTag(trace.meta, trace.metrics, HOSTNAME_KEY, hostname);
}

function extractError(trace, span) {
  var error = span.context()._tags['error'];

  if (error instanceof Error) {
    trace.meta['error.msg'] = error.message;
    trace.meta['error.type'] = error.name;
    trace.meta['error.stack'] = error.stack;
  }
}

function extractAnalytics(trace, span) {
  var analytics = span.context()._tags[ANALYTICS];

  if (analytics === true) {
    analytics = 1;
  } else {
    analytics = parseFloat(analytics);
  }

  if (!isNaN(analytics)) {
    trace.metrics[ANALYTICS_KEY] = Math.max(Math.min(analytics, 1), 0);
  }
}

function addTag(meta, metrics, key, value, seen) {
  switch (_typeof(value)) {
    case 'string':
      meta[key] = value;
      break;

    case 'number':
      if (isNaN(value)) break;
      metrics[key] = value;
      break;

    case 'undefined':
      break;

    case 'object':
      if (value === null) break; // Special case for Node.js Buffer and URL

      if (isNodeBuffer(value) || isUrl(value)) {
        metrics[key] = value.toString();
        break;
      }

      if (!Array.isArray(value)) {
        addObjectTag(meta, metrics, key, value, seen);
        break;
      }

    default:
      // eslint-disable-line no-fallthrough
      addTag(meta, metrics, key, serialize(value));
  }
}

function addObjectTag(meta, metrics, key, value, seen) {
  seen = seen || [];

  if (~seen.indexOf(value)) {
    meta[key] = '[Circular]';
    return;
  }

  seen.push(value);

  for (var prop in value) {
    addTag(meta, metrics, "".concat(key, ".").concat(prop), value[prop], seen);
  }

  seen.pop();
}

function serialize(obj) {
  try {
    return obj && typeof obj.toString !== 'function' ? JSON.stringify(obj) : String(obj);
  } catch (e) {
    log.error(e);
  }
}

function isNodeBuffer(obj) {
  return obj.constructor && obj.constructor.name === 'Buffer' && typeof obj.readInt8 === 'function' && typeof obj.toString === 'function';
}

function isUrl(obj) {
  return obj.constructor && obj.constructor.name === 'URL' && typeof obj.href === 'string' && typeof obj.toString === 'function';
}

module.exports = format;

/***/ }),

/***/ "./packages/dd-trace/src/id.js":
/*!*************************************!*\
  !*** ./packages/dd-trace/src/id.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var platform = __webpack_require__(/*! ./platform */ "./packages/dd-trace/src/platform/index.js");

var UINT_MAX = 4294967296;
var zeroId = new Uint8Array(8); // Cryptographically secure local seeds to mitigate Math.random() seed reuse.

var seed = new Uint32Array(2);

if (platform.crypto) {
  platform.crypto.getRandomValues(seed);
}

var map = Array.prototype.map;

var pad = function pad(byte) {
  return "".concat(byte < 16 ? '0' : '').concat(byte.toString(16));
}; // Internal representation of a trace or span ID.


var Identifier =
/*#__PURE__*/
function () {
  function Identifier(value, radix) {
    _classCallCheck(this, Identifier);

    this._buffer = typeof radix === 'number' ? fromString(value, radix) : createBuffer(value);
  }

  _createClass(Identifier, [{
    key: "toString",
    value: function toString(radix) {
      return typeof radix === 'number' ? toNumberString(this._buffer, radix) : toHexString(this._buffer);
    }
  }, {
    key: "toBuffer",
    value: function toBuffer() {
      return this._buffer;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
  }]);

  return Identifier;
}(); // Create a buffer, using an optional hexadecimal value if provided.


function createBuffer(value) {
  if (value === '0') return zeroId;
  if (!value) return pseudoRandom();
  var size = Math.ceil(value.length / 2);
  var buffer = new Uint8Array(size);

  for (var i = 0; i < size; i++) {
    buffer[i] = parseInt(value.substring(i * 2, i * 2 + 2), 16);
  }

  return buffer;
} // Convert a numerical string to a buffer using the specified radix.


function fromString(str, raddix) {
  var buffer = new Uint8Array(8);
  var len = str.length;
  var pos = 0;
  var high = 0;
  var low = 0;
  if (str[0] === '-') pos++;
  var sign = pos;

  while (pos < len) {
    var chr = parseInt(str[pos++], raddix);
    if (!(chr >= 0)) break; // NaN

    low = low * raddix + chr;
    high = high * raddix + Math.floor(low / UINT_MAX);
    low %= UINT_MAX;
  }

  if (sign) {
    high = ~high;

    if (low) {
      low = UINT_MAX - low;
    } else {
      high++;
    }
  }

  writeUInt32BE(buffer, high, 0);
  writeUInt32BE(buffer, low, 4);
  return buffer;
} // Convert a buffer to a numerical string.


function toNumberString(buffer, radix) {
  var high = readInt32(buffer, 0);
  var low = readInt32(buffer, 4);
  var str = '';
  radix = radix || 10;

  while (1) {
    var mod = high % radix * UINT_MAX + low;
    high = Math.floor(high / radix);
    low = Math.floor(mod / radix);
    str = (mod % radix).toString(radix) + str;
    if (!high && !low) break;
  }

  return str;
} // Convert a buffer to a hexadecimal string.


function toHexString(buffer) {
  return map.call(buffer, pad).join('');
} // Simple pseudo-random 64-bit ID generator.


function pseudoRandom() {
  var buffer = new Uint8Array(8);
  var hi = randomUInt32(seed[0]) & 0x7FFFFFFF; // only positive int64

  var lo = randomUInt32(seed[1]);
  writeUInt32BE(buffer, hi, 0);
  writeUInt32BE(buffer, lo, 4);
  return buffer;
} // Generate a random unsigned 32-bit integer.


function randomUInt32(seed) {
  return seed ^ Math.floor(Math.random() * (0xFFFFFFFF + 1));
} // Read a buffer to unsigned integer bytes.


function readInt32(buffer, offset) {
  return buffer[offset + 0] * 16777216 + (buffer[offset + 1] << 16) + (buffer[offset + 2] << 8) + buffer[offset + 3];
} // Write unsigned integer bytes to a buffer.


function writeUInt32BE(buffer, value, offset) {
  buffer[3 + offset] = value & 255;
  value = value >> 8;
  buffer[2 + offset] = value & 255;
  value = value >> 8;
  buffer[1 + offset] = value & 255;
  value = value >> 8;
  buffer[0 + offset] = value & 255;
}

module.exports = function (value, radix) {
  return new Identifier(value, radix);
};

/***/ }),

/***/ "./packages/dd-trace/src/instrumenter.js":
/*!***********************************************!*\
  !*** ./packages/dd-trace/src/instrumenter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var shimmer = __webpack_require__(/*! shimmer */ "./node_modules/shimmer/index.js");

var log = __webpack_require__(/*! ./log */ "./packages/dd-trace/src/log.js");

var platform = __webpack_require__(/*! ./platform */ "./packages/dd-trace/src/platform/index.js");

shimmer({
  logger: function logger() {}
});
var plugins = platform.plugins;
var disabldPlugins = platform.env('DD_TRACE_DISABLED_PLUGINS');

var collectDisabledPlugins = function collectDisabledPlugins() {
  return new Set(disabldPlugins && disabldPlugins.split(',').map(function (plugin) {
    return plugin.trim();
  }));
};

var Instrumenter =
/*#__PURE__*/
function () {
  function Instrumenter(tracer) {
    _classCallCheck(this, Instrumenter);

    this._tracer = tracer;
    this._loader = new platform.Loader(this);
    this._enabled = false;
    this._names = new Set();
    this._plugins = new Map();
    this._instrumented = new Map();
    this._disabledPlugins = collectDisabledPlugins();
  }

  _createClass(Instrumenter, [{
    key: "use",
    value: function use(name, config) {
      if (typeof config === 'boolean') {
        config = {
          enabled: config
        };
      }

      config = config || {};

      try {
        this._set(plugins[name.toLowerCase()], {
          name: name,
          config: config
        });
      } catch (e) {
        log.debug("Could not find a plugin named \"".concat(name, "\"."));
      }

      if (this._enabled) {
        this._loader.reload(this._plugins);
      }
    }
  }, {
    key: "enable",
    value: function enable(config) {
      var _this = this;

      config = config || {};
      this._enabled = true;

      if (config.plugins !== false) {
        Object.keys(plugins).filter(function (name) {
          return !_this._plugins.has(plugins[name]);
        }).forEach(function (name) {
          _this._set(plugins[name], {
            name: name,
            config: {}
          });
        });
      }

      this._loader.reload(this._plugins);
    }
  }, {
    key: "disable",
    value: function disable() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._instrumented.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var instrumentation = _step.value;
          this.unpatch(instrumentation);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this._plugins.clear();

      this._enabled = false;

      this._loader.reload(this._plugins);
    }
  }, {
    key: "wrap",
    value: function wrap(nodules, names, wrapper) {
      nodules = [].concat(nodules);
      names = [].concat(names);
      nodules.forEach(function (nodule) {
        names.forEach(function (name) {
          if (typeof nodule[name] !== 'function') {
            throw new Error("Expected object ".concat(nodule, " to contain method ").concat(name, "."));
          }

          Object.defineProperty(nodule[name], '_datadog_patched', {
            value: true,
            configurable: true
          });
        });
      });
      shimmer.massWrap.call(this, nodules, names, wrapper);
    }
  }, {
    key: "unwrap",
    value: function unwrap(nodules, names, wrapper) {
      nodules = [].concat(nodules);
      names = [].concat(names);
      shimmer.massUnwrap.call(this, nodules, names, wrapper);
      nodules.forEach(function (nodule) {
        names.forEach(function (name) {
          nodule[name] && delete nodule[name]._datadog_patched;
        });
      });
    }
  }, {
    key: "load",
    value: function load(plugin, meta) {
      var _this2 = this;

      if (!this._enabled) return;
      var instrumentations = [].concat(plugin);
      var enabled = meta.config.enabled !== false;
      platform.metrics().boolean("datadog.tracer.node.plugin.enabled.by.name", enabled, "name:".concat(meta.name));

      try {
        instrumentations.forEach(function (instrumentation) {
          _this2._loader.load(instrumentation, meta.config);
        });
      } catch (e) {
        log.error(e);
        this.unload(plugin);
        log.debug("Error while trying to patch ".concat(meta.name, ". The plugin has been disabled."));
        platform.metrics().increment("datadog.tracer.node.plugin.errors", true);
      }
    }
  }, {
    key: "unload",
    value: function unload(plugin) {
      var _this3 = this;

      [].concat(plugin).forEach(function (instrumentation) {
        _this3.unpatch(instrumentation);

        _this3._instrumented.delete(instrumentation);
      });

      var meta = this._plugins.get(plugin);

      if (meta) {
        this._plugins.delete(plugin);

        platform.metrics().boolean("datadog.tracer.node.plugin.enabled.by.name", false, "name:".concat(meta.name));
      }
    }
  }, {
    key: "patch",
    value: function patch(instrumentation, moduleExports, config) {
      var instrumented = this._instrumented.get(instrumentation);

      if (!instrumented) {
        this._instrumented.set(instrumentation, instrumented = new Set());
      }

      if (!instrumented.has(moduleExports)) {
        instrumented.add(moduleExports);
        return instrumentation.patch.call(this, moduleExports, this._tracer._tracer, config);
      }
    }
  }, {
    key: "unpatch",
    value: function unpatch(instrumentation) {
      var _this4 = this;

      var instrumented = this._instrumented.get(instrumentation);

      if (instrumented) {
        instrumented.forEach(function (moduleExports) {
          try {
            instrumentation.unpatch.call(_this4, moduleExports, _this4._tracer);
          } catch (e) {
            log.error(e);
          }
        });
      }
    }
  }, {
    key: "_set",
    value: function _set(plugin, meta) {
      if (this._disabledPlugins.has(meta.name)) {
        log.debug("Plugin \"".concat(meta.name, "\" was disabled via configuration option."));
      } else {
        this._plugins.set(plugin, meta);

        this.load(plugin, meta);
      }
    }
  }]);

  return Instrumenter;
}();

module.exports = Instrumenter;

/***/ }),

/***/ "./packages/dd-trace/src/log.js":
/*!**************************************!*\
  !*** ./packages/dd-trace/src/log.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = {
  debug: function debug(message) {
    return console.log(message);
  },

  /* eslint-disable-line no-console */
  error: function error(err) {
    return console.error(err);
  }
  /* eslint-disable-line no-console */

}; // based on: https://github.com/trentm/node-bunyan#levels

var _logLevels = {
  'debug': 20,
  'error': 50
};
var _defaultLogLevel = 'debug';

var _logger;

var _enabled;

var _deprecate;

var _logLevel;

var _isLogLevelEnabled = function _isLogLevelEnabled(level) {
  return _logLevels[level] >= _logLevel;
};

var _checkLogLevel = function _checkLogLevel(logLevel) {
  if (logLevel && typeof logLevel === 'string') {
    return _logLevels[logLevel.toLowerCase().trim()] || _logLevels[_defaultLogLevel];
  }

  return _logLevels[_defaultLogLevel];
};

var memoize = function memoize(func) {
  var cache = {};

  var memoized = function memoized(key) {
    if (!cache[key]) {
      cache[key] = func.apply(this, arguments);
    }

    return cache[key];
  };

  return memoized;
};

var log = {
  use: function use(logger) {
    if (logger && logger.debug instanceof Function && logger.error instanceof Function) {
      _logger = logger;
    }

    return this;
  },
  toggle: function toggle(enabled, logLevel) {
    _enabled = enabled;
    _logLevel = _checkLogLevel(logLevel);
    return this;
  },
  reset: function reset() {
    var _this = this;

    _logger = _default;
    _enabled = false;
    _deprecate = memoize(function (code, message) {
      _logger.error(message);

      return _this;
    });
    _logLevel = _checkLogLevel();
    return this;
  },
  debug: function debug(message) {
    if (_enabled && _isLogLevelEnabled('debug')) {
      _logger.debug(message instanceof Function ? message() : message);
    }

    return this;
  },
  error: function error(err) {
    if (_enabled && _isLogLevelEnabled('error')) {
      if (err instanceof Function) {
        err = err();
      }

      if (_typeof(err) !== 'object' || !err) {
        err = String(err);
      } else if (!err.stack) {
        err = String(err.message || err);
      }

      if (typeof err === 'string') {
        err = new Error(err);
      }

      _logger.error(err);
    }

    return this;
  },
  deprecate: function deprecate(code, message) {
    return _deprecate(code, message);
  }
};
log.reset();
module.exports = log;

/***/ }),

/***/ "./packages/dd-trace/src/noop/span.js":
/*!********************************************!*\
  !*** ./packages/dd-trace/src/noop/span.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Span = __webpack_require__(/*! opentracing */ "./node_modules/opentracing/lib/index.js").Span;

var NoopSpanContext = __webpack_require__(/*! ../noop/span_context */ "./packages/dd-trace/src/noop/span_context.js");

var id = __webpack_require__(/*! ../id */ "./packages/dd-trace/src/id.js");

var NoopSpan =
/*#__PURE__*/
function (_Span) {
  _inherits(NoopSpan, _Span);

  function NoopSpan(tracer, parent) {
    var _this;

    _classCallCheck(this, NoopSpan);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NoopSpan).call(this)); // Avoid circular dependency

    Object.defineProperties(_assertThisInitialized(_this), {
      _noopTracer: {
        value: tracer
      },
      _noopContext: {
        value: _this._createContext(parent)
      }
    });
    return _this;
  }

  _createClass(NoopSpan, [{
    key: "_context",
    value: function _context() {
      return this._noopContext;
    }
  }, {
    key: "_tracer",
    value: function _tracer() {
      return this._noopTracer;
    }
  }, {
    key: "_createContext",
    value: function _createContext(parent) {
      var spanId = id();

      if (parent) {
        return new NoopSpanContext({
          noop: this,
          traceId: parent._traceId,
          spanId: spanId,
          parentId: parent._spanId,
          baggageItems: parent._baggageItems
        });
      } else {
        return new NoopSpanContext({
          noop: this,
          traceId: spanId,
          spanId: spanId
        });
      }
    }
  }]);

  return NoopSpan;
}(Span);

module.exports = NoopSpan;

/***/ }),

/***/ "./packages/dd-trace/src/noop/span_context.js":
/*!****************************************************!*\
  !*** ./packages/dd-trace/src/noop/span_context.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DatadogSpanContext = __webpack_require__(/*! ../opentracing/span_context */ "./packages/dd-trace/src/opentracing/span_context.js");

var priority = __webpack_require__(/*! ../../../../ext/priority */ "./ext/priority.js");

var USER_REJECT = priority.USER_REJECT;

var NoopSpanContext =
/*#__PURE__*/
function (_DatadogSpanContext) {
  _inherits(NoopSpanContext, _DatadogSpanContext);

  function NoopSpanContext(props) {
    var _this;

    _classCallCheck(this, NoopSpanContext);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NoopSpanContext).call(this, props));
    _this._traceFlags.sampled = false;
    _this._sampling.priority = USER_REJECT;
    return _this;
  }

  return NoopSpanContext;
}(DatadogSpanContext);

module.exports = NoopSpanContext;

/***/ }),

/***/ "./packages/dd-trace/src/noop/tracer.js":
/*!**********************************************!*\
  !*** ./packages/dd-trace/src/noop/tracer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Tracer = __webpack_require__(/*! opentracing */ "./node_modules/opentracing/lib/index.js").Tracer;

var Scope = __webpack_require__(/*! ../scope/base */ "./packages/dd-trace/src/scope/base.js");

var Span = __webpack_require__(/*! ./span */ "./packages/dd-trace/src/noop/span.js");

var platform = __webpack_require__(/*! ../platform */ "./packages/dd-trace/src/platform/index.js");

var NoopTracer =
/*#__PURE__*/
function (_Tracer) {
  _inherits(NoopTracer, _Tracer);

  function NoopTracer(config) {
    var _this;

    _classCallCheck(this, NoopTracer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NoopTracer).call(this, config));
    var ScopeManager;

    if (platform.env('DD_CONTEXT_PROPAGATION') === 'false') {
      ScopeManager = __webpack_require__(/*! ../scope/noop/scope_manager */ "./packages/dd-trace/src/scope/noop/scope_manager.js");
    } else {
      ScopeManager = __webpack_require__(/*! ../scope/scope_manager */ "./packages/dd-trace/src/scope/scope_manager.js");
    }

    _this._scopeManager = new ScopeManager();
    _this._scope = new Scope(config);
    _this._span = new Span(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NoopTracer, [{
    key: "trace",
    value: function trace(name, options, fn) {
      return fn(this._span, function () {});
    }
  }, {
    key: "wrap",
    value: function wrap(name, options, fn) {
      return fn;
    }
  }, {
    key: "scopeManager",
    value: function scopeManager() {
      return this._scopeManager;
    }
  }, {
    key: "scope",
    value: function scope() {
      return this._scope;
    }
  }, {
    key: "currentSpan",
    value: function currentSpan() {
      return null;
    }
  }, {
    key: "_startSpan",
    value: function _startSpan(name, options) {
      return this._span;
    }
  }]);

  return NoopTracer;
}(Tracer);

module.exports = NoopTracer;

/***/ }),

/***/ "./packages/dd-trace/src/opentracing/propagation/binary.js":
/*!*****************************************************************!*\
  !*** ./packages/dd-trace/src/opentracing/propagation/binary.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BinaryPropagator =
/*#__PURE__*/
function () {
  function BinaryPropagator() {
    _classCallCheck(this, BinaryPropagator);
  }

  _createClass(BinaryPropagator, [{
    key: "inject",
    value: function inject(spanContext, carrier) {}
  }, {
    key: "extract",
    value: function extract(carrier) {
      return null;
    }
  }]);

  return BinaryPropagator;
}();

module.exports = BinaryPropagator;

/***/ }),

/***/ "./packages/dd-trace/src/opentracing/propagation/http.js":
/*!***************************************************************!*\
  !*** ./packages/dd-trace/src/opentracing/propagation/http.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TextMapPropagator = __webpack_require__(/*! ./text_map */ "./packages/dd-trace/src/opentracing/propagation/text_map.js");

var HttpPropagator =
/*#__PURE__*/
function (_TextMapPropagator) {
  _inherits(HttpPropagator, _TextMapPropagator);

  function HttpPropagator() {
    _classCallCheck(this, HttpPropagator);

    return _possibleConstructorReturn(this, _getPrototypeOf(HttpPropagator).apply(this, arguments));
  }

  return HttpPropagator;
}(TextMapPropagator);

module.exports = HttpPropagator;

/***/ }),

/***/ "./packages/dd-trace/src/opentracing/propagation/log.js":
/*!**************************************************************!*\
  !*** ./packages/dd-trace/src/opentracing/propagation/log.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var id = __webpack_require__(/*! ../../id */ "./packages/dd-trace/src/id.js");

var DatadogSpanContext = __webpack_require__(/*! ../span_context */ "./packages/dd-trace/src/opentracing/span_context.js");

var LogPropagator =
/*#__PURE__*/
function () {
  function LogPropagator() {
    _classCallCheck(this, LogPropagator);
  }

  _createClass(LogPropagator, [{
    key: "inject",
    value: function inject(spanContext, carrier) {
      if (!carrier) return;
      carrier.dd = {
        trace_id: spanContext.toTraceId(),
        span_id: spanContext.toSpanId()
      };
    }
  }, {
    key: "extract",
    value: function extract(carrier) {
      if (!carrier || !carrier.dd || !carrier.dd.trace_id || !carrier.dd.span_id) {
        return null;
      }

      var spanContext = new DatadogSpanContext({
        traceId: id(carrier.dd.trace_id, 10),
        spanId: id(carrier.dd.span_id, 10)
      });
      return spanContext;
    }
  }]);

  return LogPropagator;
}();

module.exports = LogPropagator;

/***/ }),

/***/ "./packages/dd-trace/src/opentracing/propagation/text_map.js":
/*!*******************************************************************!*\
  !*** ./packages/dd-trace/src/opentracing/propagation/text_map.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var pick = __webpack_require__(/*! lodash.pick */ "./node_modules/lodash.pick/index.js");

var id = __webpack_require__(/*! ../../id */ "./packages/dd-trace/src/id.js");

var DatadogSpanContext = __webpack_require__(/*! ../span_context */ "./packages/dd-trace/src/opentracing/span_context.js");

var NoopSpanContext = __webpack_require__(/*! ../../noop/span_context */ "./packages/dd-trace/src/noop/span_context.js");

var log = __webpack_require__(/*! ../../log */ "./packages/dd-trace/src/log.js");

var traceKey = 'x-datadog-trace-id';
var spanKey = 'x-datadog-parent-id';
var originKey = 'x-datadog-origin';
var samplingKey = 'x-datadog-sampling-priority';
var sampleKey = 'x-datadog-sampled';
var baggagePrefix = 'ot-baggage-';
var b3TraceKey = 'x-b3-traceid';
var b3TraceExpr = /^([0-9a-f]{16}){1,2}$/i;
var b3SpanKey = 'x-b3-spanid';
var b3SpanExpr = /^[0-9a-f]{16}$/i;
var b3ParentKey = 'x-b3-parentspanid';
var b3SampledKey = 'x-b3-sampled';
var b3FlagsKey = 'x-b3-flags';
var b3HeaderKey = 'b3';
var b3HeaderExpr = /^(([0-9a-f]{16}){1,2}-[0-9a-f]{16}(-[01d](-[0-9a-f]{16})?)?|[01d])$/i;
var baggageExpr = new RegExp("^".concat(baggagePrefix, "(.+)$"));
var ddKeys = [traceKey, spanKey, samplingKey, originKey];
var b3Keys = [b3TraceKey, b3SpanKey, b3ParentKey, b3SampledKey, b3FlagsKey, b3HeaderKey];
var logKeys = ddKeys.concat(b3Keys);

var TextMapPropagator =
/*#__PURE__*/
function () {
  function TextMapPropagator(config) {
    _classCallCheck(this, TextMapPropagator);

    this._config = config;
  }

  _createClass(TextMapPropagator, [{
    key: "inject",
    value: function inject(spanContext, carrier) {
      carrier[traceKey] = spanContext.toTraceId();
      carrier[spanKey] = spanContext.toSpanId();
      carrier[sampleKey] = spanContext._traceFlags.sampled ? '1' : '0';

      this._injectOrigin(spanContext, carrier);

      this._injectSamplingPriority(spanContext, carrier);

      this._injectBaggageItems(spanContext, carrier);

      this._injectB3(spanContext, carrier);

      log.debug(function () {
        return "Inject into carrier: ".concat(JSON.stringify(pick(carrier, logKeys)), ".");
      });
    }
  }, {
    key: "extract",
    value: function extract(carrier) {
      var spanContext = this._extractSpanContext(carrier);

      if (!spanContext) return spanContext;

      this._extractOrigin(carrier, spanContext);

      this._extractBaggageItems(carrier, spanContext);

      this._extractSamplingPriority(carrier, spanContext);

      log.debug(function () {
        return "Extract from carrier: ".concat(JSON.stringify(pick(carrier, logKeys)), ".");
      });
      return spanContext;
    }
  }, {
    key: "_injectOrigin",
    value: function _injectOrigin(spanContext, carrier) {
      var origin = spanContext._trace.origin;

      if (origin) {
        carrier[originKey] = origin;
      }
    }
  }, {
    key: "_injectSamplingPriority",
    value: function _injectSamplingPriority(spanContext, carrier) {
      var priority = spanContext._sampling.priority;

      if (Number.isInteger(priority)) {
        carrier[samplingKey] = priority.toString();
      }
    }
  }, {
    key: "_injectBaggageItems",
    value: function _injectBaggageItems(spanContext, carrier) {
      spanContext._baggageItems && Object.keys(spanContext._baggageItems).forEach(function (key) {
        carrier[baggagePrefix + key] = String(spanContext._baggageItems[key]);
      });
    }
  }, {
    key: "_injectB3",
    value: function _injectB3(spanContext, carrier) {
      if (!this._config.experimental.b3) return;
      carrier[b3TraceKey] = spanContext._traceId.toString('hex');
      carrier[b3SpanKey] = spanContext._spanId.toString('hex');
      carrier[b3SampledKey] = spanContext._traceFlags.sampled ? '1' : '0';

      if (spanContext._traceFlags.debug) {
        carrier[b3FlagsKey] = '1';
      }

      if (spanContext._parentId) {
        carrier[b3ParentKey] = spanContext._parentId.toString('hex');
      }
    }
  }, {
    key: "_extractSpanContext",
    value: function _extractSpanContext(carrier) {
      var context = this._extractContext(carrier);

      if (!context) return null;

      if (context.traceFlags.sampled !== false) {
        return new DatadogSpanContext(context);
      } else {
        return new NoopSpanContext(context);
      }
    }
  }, {
    key: "_extractContext",
    value: function _extractContext(carrier) {
      return this._extractDatadogContext(carrier) || this._extractB3Context(carrier);
    }
  }, {
    key: "_extractDatadogContext",
    value: function _extractDatadogContext(carrier) {
      var sampled = this._isSampled(carrier[sampleKey]);

      return this._extractGenericContext(carrier, traceKey, spanKey, {
        sampled: sampled
      }, 10);
    }
  }, {
    key: "_extractB3Context",
    value: function _extractB3Context(carrier) {
      if (!this._config.experimental.b3) return null;

      var b3 = this._extractB3Headers(carrier);

      var debug = b3[b3FlagsKey] === '1';

      var sampled = this._isSampled(b3[b3SampledKey], debug);

      return this._extractGenericContext(b3, b3TraceKey, b3SpanKey, {
        sampled: sampled,
        debug: debug
      });
    }
  }, {
    key: "_extractGenericContext",
    value: function _extractGenericContext(carrier, traceKey, spanKey, traceFlags, radix) {
      if (carrier[traceKey] && carrier[spanKey]) {
        return {
          traceId: id(carrier[traceKey], radix),
          spanId: id(carrier[spanKey], radix),
          traceFlags: traceFlags
        };
      } else if (typeof traceFlags.sampled === 'boolean') {
        return {
          traceId: id(),
          spanId: null,
          traceFlags: traceFlags
        };
      }

      return null;
    }
  }, {
    key: "_extractB3Headers",
    value: function _extractB3Headers(carrier) {
      if (b3HeaderExpr.test(carrier[b3HeaderKey])) {
        return this._extractB3SingleHeader(carrier);
      } else {
        return this._extractB3MultipleHeaders(carrier);
      }
    }
  }, {
    key: "_extractB3MultipleHeaders",
    value: function _extractB3MultipleHeaders(carrier) {
      var b3 = {};

      if (b3TraceExpr.test(carrier[b3TraceKey]) && b3SpanExpr.test(carrier[b3SpanKey])) {
        b3[b3TraceKey] = carrier[b3TraceKey];
        b3[b3SpanKey] = carrier[b3SpanKey];
      }

      if (carrier[b3SampledKey]) {
        b3[b3SampledKey] = carrier[b3SampledKey];
      }

      if (carrier[b3FlagsKey]) {
        b3[b3FlagsKey] = carrier[b3FlagsKey];
      }

      return b3;
    }
  }, {
    key: "_extractB3SingleHeader",
    value: function _extractB3SingleHeader(carrier) {
      var parts = carrier[b3HeaderKey].split('-');

      if (parts[0] === 'd') {
        var _ref;

        return _ref = {}, _defineProperty(_ref, b3SampledKey, '1'), _defineProperty(_ref, b3FlagsKey, '1'), _ref;
      } else if (parts.length === 1) {
        return _defineProperty({}, b3SampledKey, parts[0]);
      } else {
        var _b;

        var b3 = (_b = {}, _defineProperty(_b, b3TraceKey, parts[0]), _defineProperty(_b, b3SpanKey, parts[1]), _defineProperty(_b, b3SampledKey, parts[2] !== '0' ? '1' : '0'), _b);

        if (parts[2] === 'd') {
          b3[b3FlagsKey] = '1';
        }

        return b3;
      }
    }
  }, {
    key: "_extractOrigin",
    value: function _extractOrigin(carrier, spanContext) {
      var origin = carrier[originKey];

      if (typeof carrier[originKey] === 'string') {
        spanContext._trace.origin = origin;
      }
    }
  }, {
    key: "_extractBaggageItems",
    value: function _extractBaggageItems(carrier, spanContext) {
      Object.keys(carrier).forEach(function (key) {
        var match = key.match(baggageExpr);

        if (match) {
          spanContext._baggageItems[match[1]] = carrier[key];
        }
      });
    }
  }, {
    key: "_extractSamplingPriority",
    value: function _extractSamplingPriority(carrier, spanContext) {
      var priority = parseInt(carrier[samplingKey], 10);

      if (Number.isInteger(priority)) {
        spanContext._sampling.priority = parseInt(carrier[samplingKey], 10);
      }
    }
  }, {
    key: "_isSampled",
    value: function _isSampled(sampled, debug) {
      if (debug || sampled === '1') {
        return true;
      } else if (sampled === '0') {
        return false;
      }

      return null;
    }
  }]);

  return TextMapPropagator;
}();

module.exports = TextMapPropagator;

/***/ }),

/***/ "./packages/dd-trace/src/opentracing/span.js":
/*!***************************************************!*\
  !*** ./packages/dd-trace/src/opentracing/span.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var opentracing = __webpack_require__(/*! opentracing */ "./node_modules/opentracing/lib/index.js");

var Span = opentracing.Span;

var SpanContext = __webpack_require__(/*! ./span_context */ "./packages/dd-trace/src/opentracing/span_context.js");

var platform = __webpack_require__(/*! ../platform */ "./packages/dd-trace/src/platform/index.js");

var constants = __webpack_require__(/*! ../constants */ "./packages/dd-trace/src/constants.js");

var id = __webpack_require__(/*! ../id */ "./packages/dd-trace/src/id.js");

var tagger = __webpack_require__(/*! ../tagger */ "./packages/dd-trace/src/tagger.js");

var SAMPLE_RATE_METRIC_KEY = constants.SAMPLE_RATE_METRIC_KEY;

var DatadogSpan =
/*#__PURE__*/
function (_Span) {
  _inherits(DatadogSpan, _Span);

  function DatadogSpan(tracer, processor, sampler, prioritySampler, fields) {
    var _this;

    _classCallCheck(this, DatadogSpan);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatadogSpan).call(this));
    var startTime = fields.startTime || platform.now();
    var operationName = fields.operationName;
    var parent = fields.parent || null;
    var tags = Object.assign(_defineProperty({}, SAMPLE_RATE_METRIC_KEY, sampler.rate()), fields.tags);
    var hostname = fields.hostname;
    _this._parentTracer = tracer;
    _this._sampler = sampler;
    _this._processor = processor;
    _this._prioritySampler = prioritySampler;
    _this._startTime = startTime;
    _this._spanContext = _this._createContext(parent);
    _this._spanContext._name = operationName;
    _this._spanContext._tags = tags;
    _this._spanContext._hostname = hostname;
    _this._handle = platform.metrics().track(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DatadogSpan, [{
    key: "toString",
    value: function toString() {
      var spanContext = this.context();
      var resourceName = spanContext._tags['resource.name'];
      var resource = resourceName.length > 100 ? "".concat(resourceName.substring(0, 97), "...") : resourceName;
      var json = JSON.stringify({
        traceId: spanContext._traceId,
        spanId: spanContext._spanId,
        parentId: spanContext._parentId,
        service: spanContext._tags['service.name'],
        name: spanContext._name,
        resource: resource
      });
      return "Span".concat(json);
    }
  }, {
    key: "_createContext",
    value: function _createContext(parent) {
      var spanContext;

      if (parent) {
        spanContext = new SpanContext({
          traceId: parent._traceId,
          spanId: id(),
          parentId: parent._spanId,
          sampling: parent._sampling,
          baggageItems: parent._baggageItems,
          trace: parent._trace
        });
      } else {
        var spanId = id();
        spanContext = new SpanContext({
          traceId: spanId,
          spanId: spanId
        });
      }

      spanContext._trace.started.push(this);

      return spanContext;
    }
  }, {
    key: "_context",
    value: function _context() {
      return this._spanContext;
    }
  }, {
    key: "_tracer",
    value: function _tracer() {
      return this._parentTracer;
    }
  }, {
    key: "_setOperationName",
    value: function _setOperationName(name) {
      this._spanContext._name = name;
    }
  }, {
    key: "_setBaggageItem",
    value: function _setBaggageItem(key, value) {
      this._spanContext._baggageItems[key] = value;
    }
  }, {
    key: "_getBaggageItem",
    value: function _getBaggageItem(key) {
      return this._spanContext._baggageItems[key];
    }
  }, {
    key: "_addTags",
    value: function _addTags(keyValuePairs) {
      tagger.add(this._spanContext._tags, keyValuePairs);
    }
  }, {
    key: "_finish",
    value: function _finish(finishTime) {
      if (this._duration !== undefined) {
        return;
      }

      finishTime = parseFloat(finishTime) || platform.now();
      this._duration = finishTime - this._startTime;

      this._spanContext._trace.finished.push(this);

      this._spanContext._isFinished = true;

      this._handle.finish();

      this._processor.process(this);
    }
  }]);

  return DatadogSpan;
}(Span);

module.exports = DatadogSpan;

/***/ }),

/***/ "./packages/dd-trace/src/opentracing/span_context.js":
/*!***********************************************************!*\
  !*** ./packages/dd-trace/src/opentracing/span_context.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SpanContext = __webpack_require__(/*! opentracing */ "./node_modules/opentracing/lib/index.js").SpanContext;

var DatadogSpanContext =
/*#__PURE__*/
function (_SpanContext) {
  _inherits(DatadogSpanContext, _SpanContext);

  function DatadogSpanContext(props) {
    var _this;

    _classCallCheck(this, DatadogSpanContext);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatadogSpanContext).call(this));
    props = props || {};
    _this._traceId = props.traceId;
    _this._spanId = props.spanId;
    _this._parentId = props.parentId || null;
    _this._name = props.name;
    _this._isFinished = props.isFinished || false;
    _this._tags = props.tags || {};
    _this._sampling = props.sampling || {};
    _this._baggageItems = props.baggageItems || {};
    _this._traceFlags = props.traceFlags || {};
    _this._traceFlags.sampled = _this._traceFlags.sampled !== false;
    _this._traceFlags.debug = _this._traceFlags.debug === true;
    _this._noop = props.noop || null;
    _this._trace = props.trace || {
      started: [],
      finished: []
    };
    return _this;
  }

  _createClass(DatadogSpanContext, [{
    key: "toTraceId",
    value: function toTraceId() {
      return this._traceId.toString(10);
    }
  }, {
    key: "toSpanId",
    value: function toSpanId() {
      return this._spanId.toString(10);
    }
  }]);

  return DatadogSpanContext;
}(SpanContext);

module.exports = DatadogSpanContext;

/***/ }),

/***/ "./packages/dd-trace/src/opentracing/tracer.js":
/*!*****************************************************!*\
  !*** ./packages/dd-trace/src/opentracing/tracer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var opentracing = __webpack_require__(/*! opentracing */ "./node_modules/opentracing/lib/index.js");

var Tracer = opentracing.Tracer;
var Reference = opentracing.Reference;

var Span = __webpack_require__(/*! ./span */ "./packages/dd-trace/src/opentracing/span.js");

var SpanContext = __webpack_require__(/*! ./span_context */ "./packages/dd-trace/src/opentracing/span_context.js");

var SpanProcessor = __webpack_require__(/*! ../span_processor */ "./packages/dd-trace/src/span_processor.js");

var Sampler = __webpack_require__(/*! ../sampler */ "./packages/dd-trace/src/sampler.js");

var PrioritySampler = __webpack_require__(/*! ../priority_sampler */ "./packages/dd-trace/src/priority_sampler.js");

var TextMapPropagator = __webpack_require__(/*! ./propagation/text_map */ "./packages/dd-trace/src/opentracing/propagation/text_map.js");

var HttpPropagator = __webpack_require__(/*! ./propagation/http */ "./packages/dd-trace/src/opentracing/propagation/http.js");

var BinaryPropagator = __webpack_require__(/*! ./propagation/binary */ "./packages/dd-trace/src/opentracing/propagation/binary.js");

var LogPropagator = __webpack_require__(/*! ./propagation/log */ "./packages/dd-trace/src/opentracing/propagation/log.js");

var NoopSpan = __webpack_require__(/*! ../noop/span */ "./packages/dd-trace/src/noop/span.js");

var formats = __webpack_require__(/*! ../../../../ext/formats */ "./ext/formats.js");

var log = __webpack_require__(/*! ../log */ "./packages/dd-trace/src/log.js");

var constants = __webpack_require__(/*! ../constants */ "./packages/dd-trace/src/constants.js");

var platform = __webpack_require__(/*! ../platform */ "./packages/dd-trace/src/platform/index.js");

var REFERENCE_NOOP = constants.REFERENCE_NOOP;
var REFERENCE_CHILD_OF = opentracing.REFERENCE_CHILD_OF;
var REFERENCE_FOLLOWS_FROM = opentracing.REFERENCE_FOLLOWS_FROM;

var DatadogTracer =
/*#__PURE__*/
function (_Tracer) {
  _inherits(DatadogTracer, _Tracer);

  function DatadogTracer(config) {
    var _this$_propagators;

    var _this;

    _classCallCheck(this, DatadogTracer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatadogTracer).call(this));
    log.use(config.logger);
    log.toggle(config.debug, config.logLevel);
    var Exporter = platform.exporter(config.experimental.exporter);
    _this._service = config.service;
    _this._env = config.env;
    _this._tags = config.tags;
    _this._logInjection = config.logInjection;
    _this._analytics = config.analytics;
    _this._prioritySampler = new PrioritySampler(config.env, config.experimental.sampler);
    _this._exporter = new Exporter(config, _this._prioritySampler);
    _this._processor = new SpanProcessor(_this._exporter, _this._prioritySampler);
    _this._url = _this._exporter._url;
    _this._sampler = new Sampler(config.sampleRate);
    _this._peers = config.experimental.peers;
    _this._propagators = (_this$_propagators = {}, _defineProperty(_this$_propagators, formats.TEXT_MAP, new TextMapPropagator(config)), _defineProperty(_this$_propagators, formats.HTTP_HEADERS, new HttpPropagator(config)), _defineProperty(_this$_propagators, formats.BINARY, new BinaryPropagator()), _defineProperty(_this$_propagators, formats.LOG, new LogPropagator()), _this$_propagators);

    if (config.reportHostname) {
      _this._hostname = platform.hostname();
    }

    return _this;
  }

  _createClass(DatadogTracer, [{
    key: "_startSpan",
    value: function _startSpan(name, fields) {
      var references = getReferences(fields.references);
      var reference = getParent(references);
      var type = reference && reference.type();
      var parent = reference && reference.referencedContext();
      if (parent && parent._noop) return parent._noop;
      if (!isSampled(this._sampler, parent, type)) return new NoopSpan(this, parent);
      var tags = {
        'service.name': this._service
      };

      if (this._env) {
        tags.env = this._env;
      }

      var span = new Span(this, this._processor, this._sampler, this._prioritySampler, {
        operationName: fields.operationName || name,
        parent: parent,
        tags: tags,
        startTime: fields.startTime,
        hostname: this._hostname
      });
      span.addTags(this._tags);
      span.addTags(fields.tags);
      span.addTags(platform.tags());
      return span;
    }
  }, {
    key: "_inject",
    value: function _inject(spanContext, format, carrier) {
      try {
        this._prioritySampler.sample(spanContext);

        this._propagators[format].inject(spanContext, carrier);
      } catch (e) {
        log.error(e);
        platform.metrics().increment('datadog.tracer.node.inject.errors', true);
      }

      return this;
    }
  }, {
    key: "_extract",
    value: function _extract(format, carrier) {
      try {
        return this._propagators[format].extract(carrier);
      } catch (e) {
        log.error(e);
        platform.metrics().increment('datadog.tracer.node.extract.errors', true);
        return null;
      }
    }
  }]);

  return DatadogTracer;
}(Tracer);

function getReferences(references) {
  if (!references) return [];
  return references.filter(function (ref) {
    if (!(ref instanceof Reference)) {
      log.error(function () {
        return "Expected ".concat(ref, " to be an instance of opentracing.Reference");
      });
      return false;
    }

    var spanContext = ref.referencedContext();

    if (ref.type() !== REFERENCE_NOOP && spanContext && !(spanContext instanceof SpanContext)) {
      log.error(function () {
        return "Expected ".concat(spanContext, " to be an instance of SpanContext");
      });
      return false;
    }

    return true;
  });
}

function getParent(references) {
  var parent = null;

  for (var i = 0; i < references.length; i++) {
    var ref = references[i];
    var type = ref.type();

    if (type === REFERENCE_CHILD_OF || type === REFERENCE_NOOP) {
      parent = ref;
      break;
    } else if (type === REFERENCE_FOLLOWS_FROM) {
      if (!parent) {
        parent = ref;
      }
    }
  }

  return parent;
}

function isSampled(sampler, parent, type) {
  if (type === REFERENCE_NOOP) return false;
  if (parent && !parent._traceFlags.sampled) return false;
  if (!parent && !sampler.isSampled()) return false;
  return true;
}

module.exports = DatadogTracer;

/***/ }),

/***/ "./packages/dd-trace/src/platform/browser/crypto.js":
/*!**********************************************************!*\
  !*** ./packages/dd-trace/src/platform/browser/crypto.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = window.crypto || window.msCrypto;

/***/ }),

/***/ "./packages/dd-trace/src/platform/browser/env.js":
/*!*******************************************************!*\
  !*** ./packages/dd-trace/src/platform/browser/env.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (name) {
  return window[name];
};

/***/ }),

/***/ "./packages/dd-trace/src/platform/browser/exporter.js":
/*!************************************************************!*\
  !*** ./packages/dd-trace/src/platform/browser/exporter.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BrowserExporter = __webpack_require__(/*! ../../exporters/browser */ "./packages/dd-trace/src/exporters/browser/index.js");

module.exports = function () {
  return BrowserExporter;
};

/***/ }),

/***/ "./packages/dd-trace/src/platform/browser/index.js":
/*!*********************************************************!*\
  !*** ./packages/dd-trace/src/platform/browser/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = __webpack_require__(/*! ./crypto */ "./packages/dd-trace/src/platform/browser/crypto.js");

var now = __webpack_require__(/*! ./now */ "./packages/dd-trace/src/platform/browser/now.js");

var env = __webpack_require__(/*! ./env */ "./packages/dd-trace/src/platform/browser/env.js");

var tags = __webpack_require__(/*! ./tags */ "./packages/dd-trace/src/platform/browser/tags.js");

var validate = __webpack_require__(/*! ./validate */ "./packages/dd-trace/src/platform/browser/validate.js");

var service = __webpack_require__(/*! ./service */ "./packages/dd-trace/src/platform/browser/service.js");

var metrics = __webpack_require__(/*! ./metrics */ "./packages/dd-trace/src/platform/browser/metrics.js");

var plugins = __webpack_require__(/*! ../../plugins/browser */ "./packages/dd-trace/src/plugins/browser.js");

var exporter = __webpack_require__(/*! ./exporter */ "./packages/dd-trace/src/platform/browser/exporter.js");

var Loader = __webpack_require__(/*! ./loader */ "./packages/dd-trace/src/platform/browser/loader.js");

var Scope = __webpack_require__(/*! ../../scope/zone */ "./packages/dd-trace/src/scope/zone.js");

var platform = {
  _config: {},
  // TODO: determine what should be the name/version/engine
  name: function name() {},
  version: function version() {},
  engine: function engine() {},
  crypto: crypto,
  now: now,
  env: env,
  tags: tags,
  validate: validate,
  service: service,
  metrics: metrics,
  plugins: plugins,
  hostname: function hostname() {},
  // TODO: add hostname
  on: function on() {},
  // TODO: add event listener
  off: function off() {},
  // TODO: add event listener
  Loader: Loader,
  Scope: Scope,
  exporter: exporter
};
module.exports = platform;

/***/ }),

/***/ "./packages/dd-trace/src/platform/browser/loader.js":
/*!**********************************************************!*\
  !*** ./packages/dd-trace/src/platform/browser/loader.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Loader =
/*#__PURE__*/
function () {
  function Loader(instrumenter) {
    _classCallCheck(this, Loader);

    this._instrumenter = instrumenter;
  }

  _createClass(Loader, [{
    key: "reload",
    value: function reload(plugins) {
      var _this = this;

      plugins.forEach(function (meta, plugin) {
        _this._instrumenter.unload(plugin);

        _this._instrumenter.load(plugin, meta);
      });
    }
  }, {
    key: "load",
    value: function load(instrumentation, config) {
      var nodule = window[instrumentation.name];

      var override = this._instrumenter.patch(instrumentation, nodule, config);

      window[instrumentation.name] = override || nodule;
    }
  }]);

  return Loader;
}();

module.exports = Loader;

/***/ }),

/***/ "./packages/dd-trace/src/platform/browser/metrics.js":
/*!***********************************************************!*\
  !*** ./packages/dd-trace/src/platform/browser/metrics.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // TODO: consider implementing browser metrics

var metrics = null;

module.exports = function () {
  return metrics || (metrics = {
    // cache the metrics instance
    start: function start() {},
    stop: function stop() {},
    track: function track() {
      return {
        finish: function finish() {}
      };
    },
    boolean: function boolean() {},
    histogram: function histogram() {},
    count: function count() {},
    gauge: function gauge() {},
    increment: function increment() {},
    decrement: function decrement() {}
  });
};

/***/ }),

/***/ "./packages/dd-trace/src/platform/browser/now.js":
/*!*******************************************************!*\
  !*** ./packages/dd-trace/src/platform/browser/now.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var now = function now() {
  return window.performance.now();
};

var loadNs = now();
var loadMs = Date.now();

module.exports = function () {
  return loadMs + now() - loadNs;
};

/***/ }),

/***/ "./packages/dd-trace/src/platform/browser/service.js":
/*!***********************************************************!*\
  !*** ./packages/dd-trace/src/platform/browser/service.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // TODO: consider using the hostname

function service() {
  return 'browser';
}

module.exports = service;

/***/ }),

/***/ "./packages/dd-trace/src/platform/browser/tags.js":
/*!********************************************************!*\
  !*** ./packages/dd-trace/src/platform/browser/tags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = function () {
  var rum = window.DD_RUM;
  var context = rum && rum.getInternalContext && rum.getInternalContext();
  return _objectSpread({}, context);
};

/***/ }),

/***/ "./packages/dd-trace/src/platform/browser/validate.js":
/*!************************************************************!*\
  !*** ./packages/dd-trace/src/platform/browser/validate.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // TODO: validate user agent

function validate() {}

module.exports = validate;

/***/ }),

/***/ "./packages/dd-trace/src/platform/index.js":
/*!*************************************************!*\
  !*** ./packages/dd-trace/src/platform/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  use: function use(impl) {
    Object.assign(this, impl);
  },
  configure: function configure(config) {
    this._config = config;
  }
};

/***/ }),

/***/ "./packages/dd-trace/src/plugins/browser.js":
/*!**************************************************!*\
  !*** ./packages/dd-trace/src/plugins/browser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  'fetch': __webpack_require__(/*! ../../../datadog-plugin-fetch/src */ "./packages/datadog-plugin-fetch/src/index.js"),
  'xmlhttprequest': __webpack_require__(/*! ../../../datadog-plugin-xmlhttprequest/src */ "./packages/datadog-plugin-xmlhttprequest/src/index.js")
};

/***/ }),

/***/ "./packages/dd-trace/src/plugins/util/http.js":
/*!****************************************************!*\
  !*** ./packages/dd-trace/src/plugins/util/http.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tx = __webpack_require__(/*! ./tx */ "./packages/dd-trace/src/plugins/util/tx.js");

var http = {
  isPeer: function isPeer(origin, peers) {
    if (!origin) return false;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = peers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var peer = _step.value;
        if (origin === peer) return true;
        if (peer instanceof RegExp && peer.test(origin)) return true;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return false;
  }
};
module.exports = Object.assign({}, tx, http);

/***/ }),

/***/ "./packages/dd-trace/src/plugins/util/tx.js":
/*!**************************************************!*\
  !*** ./packages/dd-trace/src/plugins/util/tx.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var tx = {
  // Set the outgoing host.
  setHost: function setHost(span, hostname, port) {
    hostname && span.setTag('out.host', hostname);
    port && span.setTag('out.port', port);
  },
  // Wrap a promise or a callback to also finish the span.
  wrap: function wrap(span, done) {
    if (typeof done === 'function' || !done) {
      return wrapCallback(span, done);
    } else if (isPromise(done)) {
      return wrapPromise(span, done);
    }
  }
};

function wrapCallback(span, callback) {
  var scope = span.tracer().scope();
  var previous = scope.active();
  return function (err) {
    var _arguments = arguments,
        _this = this;

    finish(span, err);

    if (callback) {
      return scope.activate(previous, function () {
        return callback.apply(_this, _arguments);
      });
    }
  };
}

function wrapPromise(span, promise) {
  promise.then(function () {
    return finish(span);
  }, function (err) {
    return finish(span, err);
  });
  return promise;
}

function finish(span, error) {
  if (error) {
    span.addTags({
      'error.type': error.name,
      'error.msg': error.message,
      'error.stack': error.stack
    });
  }

  span.finish();
}

function isPromise(obj) {
  return isObject(obj) && typeof obj.then === 'function';
}

function isObject(obj) {
  return _typeof(obj) === 'object' && obj !== null;
}

module.exports = tx;

/***/ }),

/***/ "./packages/dd-trace/src/priority_sampler.js":
/*!***************************************************!*\
  !*** ./packages/dd-trace/src/priority_sampler.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RateLimiter = __webpack_require__(/*! ./rate_limiter */ "./packages/dd-trace/src/rate_limiter.js");

var Sampler = __webpack_require__(/*! ./sampler */ "./packages/dd-trace/src/sampler.js");

var ext = __webpack_require__(/*! ../../../ext */ "./ext/index.js");

var _require = __webpack_require__(/*! ./constants */ "./packages/dd-trace/src/constants.js"),
    SAMPLING_RULE_DECISION = _require.SAMPLING_RULE_DECISION,
    SAMPLING_LIMIT_DECISION = _require.SAMPLING_LIMIT_DECISION,
    SAMPLING_AGENT_DECISION = _require.SAMPLING_AGENT_DECISION;

var SERVICE_NAME = ext.tags.SERVICE_NAME;
var SAMPLING_PRIORITY = ext.tags.SAMPLING_PRIORITY;
var MANUAL_KEEP = ext.tags.MANUAL_KEEP;
var MANUAL_DROP = ext.tags.MANUAL_DROP;
var USER_REJECT = ext.priority.USER_REJECT;
var AUTO_REJECT = ext.priority.AUTO_REJECT;
var AUTO_KEEP = ext.priority.AUTO_KEEP;
var USER_KEEP = ext.priority.USER_KEEP;
var DEFAULT_KEY = 'service:,env:';

var PrioritySampler =
/*#__PURE__*/
function () {
  function PrioritySampler(env) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        sampleRate = _ref.sampleRate,
        _ref$rateLimit = _ref.rateLimit,
        rateLimit = _ref$rateLimit === void 0 ? 100 : _ref$rateLimit,
        _ref$rules = _ref.rules,
        rules = _ref$rules === void 0 ? [] : _ref$rules;

    _classCallCheck(this, PrioritySampler);

    this._env = env;
    this._rules = this._normalizeRules(rules, sampleRate);
    this._limiter = new RateLimiter(rateLimit);
    this.update({});
  }

  _createClass(PrioritySampler, [{
    key: "isSampled",
    value: function isSampled(span) {
      var context = this._getContext(span);

      var rule = this._findRule(context);

      return rule ? this._isSampledByRule(context, rule) && this._isSampledByRateLimit(context) : this._isSampledByAgent(context);
    }
  }, {
    key: "sample",
    value: function sample(span) {
      var context = this._getContext(span);

      if (context._sampling.priority !== undefined) return;

      var tag = this._getPriority(context._tags);

      if (this.validate(tag)) {
        context._sampling.priority = tag;
        return;
      }

      context._sampling.priority = this.isSampled(span) ? AUTO_KEEP : AUTO_REJECT;
    }
  }, {
    key: "update",
    value: function update(rates) {
      var samplers = {};

      for (var key in rates) {
        var rate = rates[key];
        var sampler = new Sampler(rate);
        samplers[key] = sampler;
      }

      samplers[DEFAULT_KEY] = samplers[DEFAULT_KEY] || new Sampler(AUTO_KEEP);
      this._samplers = samplers;
    }
  }, {
    key: "validate",
    value: function validate(samplingPriority) {
      switch (samplingPriority) {
        case USER_REJECT:
        case USER_KEEP:
        case AUTO_REJECT:
        case AUTO_KEEP:
          return true;

        default:
          return false;
      }
    }
  }, {
    key: "_getContext",
    value: function _getContext(span) {
      return typeof span.context === 'function' ? span.context() : span;
    }
  }, {
    key: "_getPriority",
    value: function _getPriority(tags) {
      if (tags.hasOwnProperty(MANUAL_KEEP) && tags[MANUAL_KEEP] !== false) {
        return USER_KEEP;
      } else if (tags.hasOwnProperty(MANUAL_DROP) && tags[MANUAL_DROP] !== false) {
        return USER_REJECT;
      } else {
        var priority = parseInt(tags[SAMPLING_PRIORITY], 10);

        if (priority === 1 || priority === 2) {
          return USER_KEEP;
        } else if (priority === 0 || priority === -1) {
          return USER_REJECT;
        }
      }
    }
  }, {
    key: "_isSampledByRule",
    value: function _isSampledByRule(context, rule) {
      context._tags[SAMPLING_RULE_DECISION] = rule.sampleRate;
      return rule.sampler.isSampled(context);
    }
  }, {
    key: "_isSampledByRateLimit",
    value: function _isSampledByRateLimit(context) {
      var allowed = this._limiter.isAllowed();

      context._tags[SAMPLING_LIMIT_DECISION] = this._limiter.effectiveRate();
      return allowed;
    }
  }, {
    key: "_isSampledByAgent",
    value: function _isSampledByAgent(context) {
      var key = "service:".concat(context._tags[SERVICE_NAME], ",env:").concat(this._env);
      var sampler = this._samplers[key] || this._samplers[DEFAULT_KEY];
      context._tags[SAMPLING_AGENT_DECISION] = sampler.rate();
      return sampler.isSampled(context);
    }
  }, {
    key: "_normalizeRules",
    value: function _normalizeRules(rules, sampleRate) {
      return rules.concat({
        sampleRate: sampleRate
      }).map(function (rule) {
        return _objectSpread({}, rule, {
          sampleRate: parseFloat(rule.sampleRate)
        });
      }).filter(function (rule) {
        return !isNaN(rule.sampleRate);
      }).map(function (rule) {
        return _objectSpread({}, rule, {
          sampler: new Sampler(rule.sampleRate)
        });
      });
    }
  }, {
    key: "_findRule",
    value: function _findRule(context) {
      for (var i = 0, l = this._rules.length; i < l; i++) {
        if (this._matchRule(context, this._rules[i])) return this._rules[i];
      }
    }
  }, {
    key: "_matchRule",
    value: function _matchRule(context, rule) {
      var name = context._name;
      var service = context._tags['service.name'];
      if (rule.name instanceof RegExp && !rule.name.test(name)) return false;
      if (rule.name && rule.name !== name) return false;
      if (rule.service instanceof RegExp && !rule.service.test(service)) return false;
      if (rule.service && rule.service !== service) return false;
      return true;
    }
  }]);

  return PrioritySampler;
}();

module.exports = PrioritySampler;

/***/ }),

/***/ "./packages/dd-trace/src/proxy.js":
/*!****************************************!*\
  !*** ./packages/dd-trace/src/proxy.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var BaseTracer = __webpack_require__(/*! opentracing */ "./node_modules/opentracing/lib/index.js").Tracer;

var NoopTracer = __webpack_require__(/*! ./noop/tracer */ "./packages/dd-trace/src/noop/tracer.js");

var DatadogTracer = __webpack_require__(/*! ./tracer */ "./packages/dd-trace/src/tracer.js");

var Config = __webpack_require__(/*! ./config */ "./packages/dd-trace/src/config.js");

var Instrumenter = __webpack_require__(/*! ./instrumenter */ "./packages/dd-trace/src/instrumenter.js");

var platform = __webpack_require__(/*! ./platform */ "./packages/dd-trace/src/platform/index.js");

var log = __webpack_require__(/*! ./log */ "./packages/dd-trace/src/log.js");

var analyticsSampler = __webpack_require__(/*! ./analytics_sampler */ "./packages/dd-trace/src/analytics_sampler.js");

var noop = new NoopTracer();

var Tracer =
/*#__PURE__*/
function (_BaseTracer) {
  _inherits(Tracer, _BaseTracer);

  function Tracer() {
    var _this;

    _classCallCheck(this, Tracer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tracer).call(this));
    _this._tracer = noop;
    _this._instrumenter = new Instrumenter(_assertThisInitialized(_this));

    _this._deprecate = function (method) {
      return log.deprecate("tracer.".concat(method), ["tracer.".concat(method, "() is deprecated."), 'Please use tracer.startSpan() and tracer.scope() instead.', 'See: https://datadog.github.io/dd-trace-js/#manual-instrumentation.'].join(' '));
    };

    return _this;
  }

  _createClass(Tracer, [{
    key: "init",
    value: function init(options) {
      if (this._tracer === noop) {
        try {
          var service = platform.service();
          var config = new Config(service, options);

          if (config.enabled) {
            platform.validate();
            platform.configure(config);

            if (config.runtimeMetrics) {
              platform.metrics().start();
            }

            if (config.analytics) {
              analyticsSampler.enable();
            }

            this._tracer = new DatadogTracer(config);

            this._instrumenter.enable(config);
          }
        } catch (e) {
          log.error(e);
        }
      }

      return this;
    }
  }, {
    key: "use",
    value: function use() {
      this._instrumenter.use.apply(this._instrumenter, arguments);

      return this;
    }
  }, {
    key: "trace",
    value: function trace(name, options, fn) {
      if (!fn) {
        fn = options;
        options = {};
      }

      if (typeof fn !== 'function') return;
      options = options || {};
      return this._tracer.trace(name, options, fn);
    }
  }, {
    key: "wrap",
    value: function wrap(name, options, fn) {
      if (!fn) {
        fn = options;
        options = {};
      }

      if (typeof fn !== 'function') return fn;
      options = options || {};
      return this._tracer.wrap(name, options, fn);
    }
  }, {
    key: "startSpan",
    value: function startSpan() {
      return this._tracer.startSpan.apply(this._tracer, arguments);
    }
  }, {
    key: "inject",
    value: function inject() {
      return this._tracer.inject.apply(this._tracer, arguments);
    }
  }, {
    key: "extract",
    value: function extract() {
      return this._tracer.extract.apply(this._tracer, arguments);
    }
  }, {
    key: "scopeManager",
    value: function scopeManager() {
      this._deprecate('scopeManager');

      return this._tracer.scopeManager.apply(this._tracer, arguments);
    }
  }, {
    key: "scope",
    value: function scope() {
      return this._tracer.scope.apply(this._tracer, arguments);
    }
  }, {
    key: "currentSpan",
    value: function currentSpan() {
      this._deprecate('currentSpan');

      return this._tracer.currentSpan.apply(this._tracer, arguments);
    }
  }, {
    key: "bind",
    value: function bind(callback) {
      this._deprecate('bind');

      return callback;
    }
  }, {
    key: "bindEmitter",
    value: function bindEmitter() {
      this._deprecate('bindEmitter');
    }
  }]);

  return Tracer;
}(BaseTracer);

module.exports = Tracer;

/***/ }),

/***/ "./packages/dd-trace/src/rate_limiter.js":
/*!***********************************************!*\
  !*** ./packages/dd-trace/src/rate_limiter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var limiter = __webpack_require__(/*! limiter */ "./node_modules/limiter/index.js");

var RateLimiter =
/*#__PURE__*/
function () {
  function RateLimiter(rateLimit) {
    _classCallCheck(this, RateLimiter);

    this._rateLimit = parseInt(rateLimit);
    this._limiter = new limiter.RateLimiter(this._rateLimit, 'second');
    this._tokensRequested = 0;
    this._prevWindowRate = null;
  }

  _createClass(RateLimiter, [{
    key: "isAllowed",
    value: function isAllowed() {
      var curIntervalStart = this._limiter.curIntervalStart;

      var allowed = this._isAllowed();

      if (curIntervalStart !== this._limiter.curIntervalStart) {
        this._prevWindowRate = this._currentWindowRate();
        this._tokensRequested = 0;
      }

      this._tokensRequested++;
      return allowed;
    }
  }, {
    key: "effectiveRate",
    value: function effectiveRate() {
      var currentWindowRate = this._currentWindowRate();

      if (this._prevWindowRate === null) return currentWindowRate;
      return (currentWindowRate + this._prevWindowRate) / 2;
    }
  }, {
    key: "_isAllowed",
    value: function _isAllowed() {
      if (this._rateLimit < 0) return true;
      if (this._rateLimit === 0) return false;
      return this._limiter.tryRemoveTokens(1);
    }
  }, {
    key: "_currentWindowRate",
    value: function _currentWindowRate() {
      if (this._rateLimit < 0) return 1;
      if (this._rateLimit === 0) return 0;
      if (this._tokensRequested === 0) return 1;
      return this._limiter.tokensThisInterval / this._tokensRequested;
    }
  }]);

  return RateLimiter;
}();

module.exports = RateLimiter;

/***/ }),

/***/ "./packages/dd-trace/src/sampler.js":
/*!******************************************!*\
  !*** ./packages/dd-trace/src/sampler.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sampler =
/*#__PURE__*/
function () {
  function Sampler(rate) {
    _classCallCheck(this, Sampler);

    this._rate = rate;
  }

  _createClass(Sampler, [{
    key: "rate",
    value: function rate() {
      return this._rate;
    }
  }, {
    key: "isSampled",
    value: function isSampled() {
      return this._rate === 1 || Math.random() < this._rate;
    }
  }]);

  return Sampler;
}();

module.exports = Sampler;

/***/ }),

/***/ "./packages/dd-trace/src/scope/base.js":
/*!*********************************************!*\
  !*** ./packages/dd-trace/src/scope/base.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scope =
/*#__PURE__*/
function () {
  function Scope() {
    _classCallCheck(this, Scope);
  }

  _createClass(Scope, [{
    key: "active",
    value: function active() {
      return this._active() || null;
    }
  }, {
    key: "activate",
    value: function activate(span, callback) {
      if (typeof callback !== 'function') return callback;

      try {
        return this._activate(span, callback);
      } catch (e) {
        if (span && typeof span.setTag === 'function') {
          span.setTag('error', e);
        }

        throw e;
      }
    }
  }, {
    key: "bind",
    value: function bind(target, span) {
      target = this._bindEmitter(target, span);
      target = this._bindPromise(target, span);
      target = this._bindFn(target, span);
      return target;
    }
  }, {
    key: "unbind",
    value: function unbind(target) {
      target = this._unbindFn(target);
      target = this._unbindPromise(target);
      target = this._unbindEmitter(target);
      return target;
    }
  }, {
    key: "_active",
    value: function _active() {
      return null;
    }
  }, {
    key: "_activate",
    value: function _activate(span, callback) {
      return callback();
    }
  }, {
    key: "_bindFn",
    value: function _bindFn(fn, span) {
      if (typeof fn !== 'function') return fn;
      var scope = this;

      var spanOrActive = this._spanOrActive(span);

      var bound = function bound() {
        var _arguments = arguments,
            _this = this;

        return scope.activate(spanOrActive, function () {
          return fn.apply(_this, _arguments);
        });
      };

      bound._datadog_unbound = fn;
      return bound;
    }
  }, {
    key: "_unbindFn",
    value: function _unbindFn(fn) {
      if (typeof fn !== 'function') return fn;
      return fn._datadog_unbound || fn;
    }
  }, {
    key: "_bindEmitter",
    value: function _bindEmitter(emitter, span) {
      if (!this._isEmitter(emitter)) return emitter;
      wrapMethod(emitter, 'addListener', wrapAddListener, this, span);
      wrapMethod(emitter, 'prependListener', wrapAddListener, this, span);
      wrapMethod(emitter, 'on', wrapAddListener, this, span);
      wrapMethod(emitter, 'once', wrapAddListener, this, span);
      wrapMethod(emitter, 'prependOnceListener', wrapAddListener, this, span);
      wrapMethod(emitter, 'removeListener', wrapRemoveListener);
      wrapMethod(emitter, 'off', wrapRemoveListener);
      wrapMethod(emitter, 'removeAllListeners', wrapRemoveAllListeners);
      return emitter;
    }
  }, {
    key: "_unbindEmitter",
    value: function _unbindEmitter(emitter) {
      if (!this._isEmitter(emitter)) return emitter;
      unwrapMethod(emitter, 'addListener');
      unwrapMethod(emitter, 'prependListener');
      unwrapMethod(emitter, 'on');
      unwrapMethod(emitter, 'once');
      unwrapMethod(emitter, 'prependOnceListener');
      return emitter;
    }
  }, {
    key: "_bindPromise",
    value: function _bindPromise(promise, span) {
      if (!this._isPromise(promise)) return promise;
      wrapMethod(promise, 'then', wrapThen, this, span);
      return promise;
    }
  }, {
    key: "_unbindPromise",
    value: function _unbindPromise(promise) {
      if (!this._isPromise(promise)) return promise;
      promise.then = promise.then._datadog_unbound || promise.then;
      return promise;
    }
  }, {
    key: "_spanOrActive",
    value: function _spanOrActive(span) {
      return span !== undefined ? span : this.active();
    }
  }, {
    key: "_isEmitter",
    value: function _isEmitter(emitter) {
      return emitter && typeof emitter.emit === 'function' && typeof emitter.on === 'function' && typeof emitter.addListener === 'function' && typeof emitter.removeListener === 'function';
    }
  }, {
    key: "_isPromise",
    value: function _isPromise(promise) {
      return promise && typeof promise.then === 'function';
    }
  }]);

  return Scope;
}();

function wrapThen(then, scope, span) {
  return function thenWithTrace(onFulfilled, onRejected) {
    var args = new Array(arguments.length);

    for (var i = 0, l = args.length; i < l; i++) {
      args[i] = scope.bind(arguments[i], span);
    }

    return then.apply(this, args);
  };
}

function wrapAddListener(addListener, scope, span) {
  return function addListenerWithTrace(eventName, listener) {
    if (!listener || listener._datadog_unbound || listener.listener) {
      return addListener.apply(this, arguments);
    }

    var bound = scope.bind(listener, scope._spanOrActive(span));
    this._datadog_events = this._datadog_events || {};

    if (!this._datadog_events[eventName]) {
      this._datadog_events[eventName] = new WeakMap();
    }

    var events = this._datadog_events[eventName];

    if (!events.has(listener)) {
      events.set(listener, []);
    }

    events.get(listener).push(bound);
    return addListener.call(this, eventName, bound);
  };
}

function wrapRemoveListener(removeListener) {
  return function removeListenerWithTrace(eventName, listener) {
    var listeners = this._datadog_events && this._datadog_events[eventName];

    if (!listener || !listeners || !listeners.has(listener)) {
      return removeListener.apply(this, arguments);
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = listeners.get(listener)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var bound = _step.value;
        removeListener.call(this, eventName, bound);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    listeners.delete(listener);
    return removeListener.call(this, eventName, listener);
  };
}

function wrapRemoveAllListeners(removeAllListeners) {
  return function removeAllListenersWithTrace(eventName) {
    if (this._datadog_events) {
      if (eventName) {
        delete this._datadog_events[eventName];
      } else {
        delete this._datadog_events;
      }
    }

    return removeAllListeners.call(this, eventName);
  };
}

function wrapMethod(target, name, wrapper) {
  if (!target[name] || target[name]._datadog_unbound) return;
  var original = target[name];

  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  target[name] = wrapper.apply(void 0, [target[name]].concat(args));
  target[name]._datadog_unbound = original;
}

function unwrapMethod(target, name) {
  if (!target[name] || !target[name]._datadog_unbound) return;
  target[name] = target[name]._datadog_unbound;
}

module.exports = Scope;

/***/ }),

/***/ "./packages/dd-trace/src/scope/noop/scope.js":
/*!***************************************************!*\
  !*** ./packages/dd-trace/src/scope/noop/scope.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scope =
/*#__PURE__*/
function () {
  function Scope(span, finishSpanOnClose) {
    _classCallCheck(this, Scope);

    this._span = span;
    this._finishSpanOnClose = finishSpanOnClose;
    this.close();
  }

  _createClass(Scope, [{
    key: "span",
    value: function span() {
      return this._span;
    }
  }, {
    key: "close",
    value: function close() {
      if (this._finishSpanOnClose) {
        this._span.finish();
      }
    }
  }]);

  return Scope;
}();

module.exports = Scope;

/***/ }),

/***/ "./packages/dd-trace/src/scope/noop/scope_manager.js":
/*!***********************************************************!*\
  !*** ./packages/dd-trace/src/scope/noop/scope_manager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Span = __webpack_require__(/*! opentracing */ "./node_modules/opentracing/lib/index.js").Span;

var Scope = __webpack_require__(/*! ./scope */ "./packages/dd-trace/src/scope/noop/scope.js");

var singleton = null;
var span = new Span();

var ScopeManager =
/*#__PURE__*/
function () {
  function ScopeManager() {
    _classCallCheck(this, ScopeManager);

    if (!singleton) {
      singleton = this;
    }

    return singleton;
  }

  _createClass(ScopeManager, [{
    key: "active",
    value: function active() {
      return new Scope(span);
    }
  }, {
    key: "activate",
    value: function activate(span, finishSpanOnClose) {
      return new Scope(span, finishSpanOnClose);
    }
  }]);

  return ScopeManager;
}();

module.exports = ScopeManager;

/***/ }),

/***/ "./packages/dd-trace/src/scope/scope_manager.js":
/*!******************************************************!*\
  !*** ./packages/dd-trace/src/scope/scope_manager.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ScopeManager = __webpack_require__(/*! ./noop/scope_manager */ "./packages/dd-trace/src/scope/noop/scope_manager.js");

module.exports = ScopeManager;

/***/ }),

/***/ "./packages/dd-trace/src/scope/zone.js":
/*!*********************************************!*\
  !*** ./packages/dd-trace/src/scope/zone.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // TODO: Zone metrics

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Base = __webpack_require__(/*! ./base */ "./packages/dd-trace/src/scope/base.js");

var Zone = window.Zone;
var singleton = null;

var Scope =
/*#__PURE__*/
function (_Base) {
  _inherits(Scope, _Base);

  function Scope() {
    var _this;

    _classCallCheck(this, Scope);

    if (singleton) return _possibleConstructorReturn(_this, singleton);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scope).call(this));
    singleton = _assertThisInitialized(_this);
    return _this;
  }

  _createClass(Scope, [{
    key: "_active",
    value: function _active() {
      if (!Zone) return null;
      return Zone.current.get('_datadog_span');
    }
  }, {
    key: "_activate",
    value: function _activate(span, callback) {
      if (!Zone) return callback();
      var spec = {
        properties: {
          _datadog_span: span
        }
      };
      return Zone.current.fork(spec).run(function () {
        return callback();
      });
    }
  }]);

  return Scope;
}(Base);

module.exports = Scope;

/***/ }),

/***/ "./packages/dd-trace/src/span_processor.js":
/*!*************************************************!*\
  !*** ./packages/dd-trace/src/span_processor.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var log = __webpack_require__(/*! ./log */ "./packages/dd-trace/src/log.js");

var format = __webpack_require__(/*! ./format */ "./packages/dd-trace/src/format.js");

var SpanProcessor =
/*#__PURE__*/
function () {
  function SpanProcessor(exporter, prioritySampler) {
    _classCallCheck(this, SpanProcessor);

    this._exporter = exporter;
    this._prioritySampler = prioritySampler;
  }

  _createClass(SpanProcessor, [{
    key: "process",
    value: function process(span) {
      var spanContext = span.context();
      var trace = spanContext._trace;

      if (trace.started.length === trace.finished.length) {
        this._prioritySampler.sample(spanContext);

        if (spanContext._traceFlags.sampled === false) {
          log.debug(function () {
            return "Dropping trace due to user configured filtering: ".concat(trace);
          });

          this._erase(trace);

          return;
        }

        var formattedSpans = trace.finished.map(format);

        this._exporter.export(formattedSpans);

        this._erase(trace);
      }
    }
  }, {
    key: "_erase",
    value: function _erase(trace) {
      trace.finished.forEach(function (span) {
        span.context()._tags = {};
      });
      trace.started = [];
      trace.finished = [];
    }
  }]);

  return SpanProcessor;
}();

module.exports = SpanProcessor;

/***/ }),

/***/ "./packages/dd-trace/src/tagger.js":
/*!*****************************************!*\
  !*** ./packages/dd-trace/src/tagger.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var log = __webpack_require__(/*! ./log */ "./packages/dd-trace/src/log.js");

function add(carrier, keyValuePairs) {
  if (!carrier || !keyValuePairs) return;

  if (typeof keyValuePairs === 'string') {
    return add(carrier, keyValuePairs.split(',').filter(function (tag) {
      return tag.indexOf(':') !== -1;
    }).reduce(function (prev, next) {
      var tag = next.split(':');
      var key = tag[0];
      var value = tag.slice(1).join(':');
      prev[key] = value;
      return prev;
    }, {}));
  }

  if (Array.isArray(keyValuePairs)) {
    return keyValuePairs.forEach(function (tags) {
      return add(carrier, tags);
    });
  }

  try {
    Object.keys(keyValuePairs).forEach(function (key) {
      carrier[key] = keyValuePairs[key];
    });
  } catch (e) {
    log.error(e);
  }
}

module.exports = {
  add: add
};

/***/ }),

/***/ "./packages/dd-trace/src/tracer.js":
/*!*****************************************!*\
  !*** ./packages/dd-trace/src/tracer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Tracer = __webpack_require__(/*! ./opentracing/tracer */ "./packages/dd-trace/src/opentracing/tracer.js");

var tags = __webpack_require__(/*! ../../../ext/tags */ "./ext/tags.js");

var scopes = __webpack_require__(/*! ../../../ext/scopes */ "./ext/scopes.js");

var platform = __webpack_require__(/*! ./platform */ "./packages/dd-trace/src/platform/index.js");

var SPAN_TYPE = tags.SPAN_TYPE;
var RESOURCE_NAME = tags.RESOURCE_NAME;
var SERVICE_NAME = tags.SERVICE_NAME;
var ANALYTICS = tags.ANALYTICS;
var NOOP = scopes.NOOP;

var DatadogTracer =
/*#__PURE__*/
function (_Tracer) {
  _inherits(DatadogTracer, _Tracer);

  function DatadogTracer(config) {
    var _this;

    _classCallCheck(this, DatadogTracer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatadogTracer).call(this, config));
    _this._scopeManager = getScopeManager(config);
    _this._scope = getScope(config);
    return _this;
  }

  _createClass(DatadogTracer, [{
    key: "trace",
    value: function trace(name, options, fn) {
      options = Object.assign({}, {
        childOf: this.scope().active()
      }, options);

      if (!options.childOf && options.orphanable === false) {
        return fn(null, function () {});
      }

      var span = this.startSpan(name, options);
      addTags(span, options);

      try {
        if (fn.length > 1) {
          return this.scope().activate(span, function () {
            return fn(span, function (err) {
              addError(span, err);
              span.finish();
            });
          });
        }

        var result = this.scope().activate(span, function () {
          return fn(span);
        });

        if (result && typeof result.then === 'function') {
          result.then(function () {
            return span.finish();
          }, function (err) {
            addError(span, err);
            span.finish();
          });
        } else {
          span.finish();
        }

        return result;
      } catch (e) {
        addError(span, e);
        span.finish();
        throw e;
      }
    }
  }, {
    key: "wrap",
    value: function wrap(name, options, fn) {
      var tracer = this;
      return function () {
        var _arguments = arguments,
            _this2 = this;

        if (typeof options === 'function' && typeof fn === 'function') {
          options = options.apply(this, arguments);
        }

        if (options.orphanable === false && !tracer.scope().active()) {
          return fn.apply(this, arguments);
        }

        var lastArgId = arguments.length - 1;
        var cb = arguments[lastArgId];

        if (typeof cb === 'function') {
          var scopeBoundCb = tracer.scope().bind(cb);
          return tracer.trace(name, options, function (span, done) {
            _arguments[lastArgId] = function (err) {
              done(err);
              return scopeBoundCb.apply(this, arguments);
            };

            return fn.apply(_this2, _arguments);
          });
        } else {
          return tracer.trace(name, options, function () {
            return fn.apply(_this2, _arguments);
          });
        }
      };
    }
  }, {
    key: "scopeManager",
    value: function scopeManager() {
      return this._scopeManager;
    }
  }, {
    key: "scope",
    value: function scope() {
      return this._scope;
    }
  }, {
    key: "currentSpan",
    value: function currentSpan() {
      return this.scope().active();
    }
  }]);

  return DatadogTracer;
}(Tracer);

function addError(span, error) {
  if (error && error instanceof Error) {
    span.addTags({
      'error.type': error.name,
      'error.msg': error.message,
      'error.stack': error.stack
    });
  }
}

function addTags(span, options) {
  var tags = {};
  if (options.type) tags[SPAN_TYPE] = options.type;
  if (options.service) tags[SERVICE_NAME] = options.service;
  if (options.resource) tags[RESOURCE_NAME] = options.resource;
  tags[ANALYTICS] = options.analytics;
  span.addTags(tags);
}

function getScopeManager(config) {
  var ScopeManager;

  if (config.scope === NOOP) {
    ScopeManager = __webpack_require__(/*! ./scope/noop/scope_manager */ "./packages/dd-trace/src/scope/noop/scope_manager.js");
  } else {
    ScopeManager = __webpack_require__(/*! ./scope/scope_manager */ "./packages/dd-trace/src/scope/scope_manager.js");
  }

  return new ScopeManager();
}

function getScope(config) {
  var Scope;

  if (config.scope === NOOP) {
    Scope = __webpack_require__(/*! ./scope/base */ "./packages/dd-trace/src/scope/base.js");
  } else {
    Scope = platform.Scope;
  }

  return new Scope(config);
}

module.exports = DatadogTracer;

/***/ })

/******/ });
//# sourceMappingURL=dd-trace.js.map