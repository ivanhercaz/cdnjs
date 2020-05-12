(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('util'), require('react'), require('@popperjs/core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'util', 'react', '@popperjs/core'], factory) :
  (global = global || self, factory(global.ReactPopper = {}, global.util, global.React, global.Popper));
}(this, (function (exports, util, React, core) { 'use strict';

  util = util && Object.prototype.hasOwnProperty.call(util, 'default') ? util['default'] : util;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var toStr = Object.prototype.toString;

  var isArguments = function isArguments(value) {
  	var str = toStr.call(value);
  	var isArgs = str === '[object Arguments]';
  	if (!isArgs) {
  		isArgs = str !== '[object Array]' &&
  			value !== null &&
  			typeof value === 'object' &&
  			typeof value.length === 'number' &&
  			value.length >= 0 &&
  			toStr.call(value.callee) === '[object Function]';
  	}
  	return isArgs;
  };

  var keysShim;
  if (!Object.keys) {
  	// modified from https://github.com/es-shims/es5-shim
  	var has = Object.prototype.hasOwnProperty;
  	var toStr$1 = Object.prototype.toString;
  	var isArgs = isArguments; // eslint-disable-line global-require
  	var isEnumerable = Object.prototype.propertyIsEnumerable;
  	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
  	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
  	var dontEnums = [
  		'toString',
  		'toLocaleString',
  		'valueOf',
  		'hasOwnProperty',
  		'isPrototypeOf',
  		'propertyIsEnumerable',
  		'constructor'
  	];
  	var equalsConstructorPrototype = function (o) {
  		var ctor = o.constructor;
  		return ctor && ctor.prototype === o;
  	};
  	var excludedKeys = {
  		$applicationCache: true,
  		$console: true,
  		$external: true,
  		$frame: true,
  		$frameElement: true,
  		$frames: true,
  		$innerHeight: true,
  		$innerWidth: true,
  		$onmozfullscreenchange: true,
  		$onmozfullscreenerror: true,
  		$outerHeight: true,
  		$outerWidth: true,
  		$pageXOffset: true,
  		$pageYOffset: true,
  		$parent: true,
  		$scrollLeft: true,
  		$scrollTop: true,
  		$scrollX: true,
  		$scrollY: true,
  		$self: true,
  		$webkitIndexedDB: true,
  		$webkitStorageInfo: true,
  		$window: true
  	};
  	var hasAutomationEqualityBug = (function () {
  		/* global window */
  		if (typeof window === 'undefined') { return false; }
  		for (var k in window) {
  			try {
  				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
  					try {
  						equalsConstructorPrototype(window[k]);
  					} catch (e) {
  						return true;
  					}
  				}
  			} catch (e) {
  				return true;
  			}
  		}
  		return false;
  	}());
  	var equalsConstructorPrototypeIfNotBuggy = function (o) {
  		/* global window */
  		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
  			return equalsConstructorPrototype(o);
  		}
  		try {
  			return equalsConstructorPrototype(o);
  		} catch (e) {
  			return false;
  		}
  	};

  	keysShim = function keys(object) {
  		var isObject = object !== null && typeof object === 'object';
  		var isFunction = toStr$1.call(object) === '[object Function]';
  		var isArguments = isArgs(object);
  		var isString = isObject && toStr$1.call(object) === '[object String]';
  		var theKeys = [];

  		if (!isObject && !isFunction && !isArguments) {
  			throw new TypeError('Object.keys called on a non-object');
  		}

  		var skipProto = hasProtoEnumBug && isFunction;
  		if (isString && object.length > 0 && !has.call(object, 0)) {
  			for (var i = 0; i < object.length; ++i) {
  				theKeys.push(String(i));
  			}
  		}

  		if (isArguments && object.length > 0) {
  			for (var j = 0; j < object.length; ++j) {
  				theKeys.push(String(j));
  			}
  		} else {
  			for (var name in object) {
  				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
  					theKeys.push(String(name));
  				}
  			}
  		}

  		if (hasDontEnumBug) {
  			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

  			for (var k = 0; k < dontEnums.length; ++k) {
  				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
  					theKeys.push(dontEnums[k]);
  				}
  			}
  		}
  		return theKeys;
  	};
  }
  var implementation = keysShim;

  var slice = Array.prototype.slice;


  var origKeys = Object.keys;
  var keysShim$1 = origKeys ? function keys(o) { return origKeys(o); } : implementation;

  var originalKeys = Object.keys;

  keysShim$1.shim = function shimObjectKeys() {
  	if (Object.keys) {
  		var keysWorksWithArguments = (function () {
  			// Safari 5.0 bug
  			var args = Object.keys(arguments);
  			return args && args.length === arguments.length;
  		}(1, 2));
  		if (!keysWorksWithArguments) {
  			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
  				if (isArguments(object)) {
  					return originalKeys(slice.call(object));
  				}
  				return originalKeys(object);
  			};
  		}
  	} else {
  		Object.keys = keysShim$1;
  	}
  	return Object.keys || keysShim$1;
  };

  var objectKeys = keysShim$1;

  var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
  var toStr$2 = Object.prototype.toString;

  var isStandardArguments = function isArguments(value) {
  	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
  		return false;
  	}
  	return toStr$2.call(value) === '[object Arguments]';
  };

  var isLegacyArguments = function isArguments(value) {
  	if (isStandardArguments(value)) {
  		return true;
  	}
  	return value !== null &&
  		typeof value === 'object' &&
  		typeof value.length === 'number' &&
  		value.length >= 0 &&
  		toStr$2.call(value) !== '[object Array]' &&
  		toStr$2.call(value.callee) === '[object Function]';
  };

  var supportsStandardArguments = (function () {
  	return isStandardArguments(arguments);
  }());

  isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

  var isArguments$1 = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

  // http://www.ecma-international.org/ecma-262/6.0/#sec-object.is

  var numberIsNaN = function (value) {
  	return value !== value;
  };

  var objectIs = function is(a, b) {
  	if (a === 0 && b === 0) {
  		return 1 / a === 1 / b;
  	}
  	if (a === b) {
  		return true;
  	}
  	if (numberIsNaN(a) && numberIsNaN(b)) {
  		return true;
  	}
  	return false;
  };

  /* eslint no-invalid-this: 1 */

  var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
  var slice$1 = Array.prototype.slice;
  var toStr$3 = Object.prototype.toString;
  var funcType = '[object Function]';

  var implementation$1 = function bind(that) {
      var target = this;
      if (typeof target !== 'function' || toStr$3.call(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice$1.call(arguments, 1);

      var bound;
      var binder = function () {
          if (this instanceof bound) {
              var result = target.apply(
                  this,
                  args.concat(slice$1.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return this;
          } else {
              return target.apply(
                  that,
                  args.concat(slice$1.call(arguments))
              );
          }
      };

      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
          boundArgs.push('$' + i);
      }

      bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

      if (target.prototype) {
          var Empty = function Empty() {};
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
      }

      return bound;
  };

  var functionBind = Function.prototype.bind || implementation$1;

  var src = functionBind.call(Function.call, Object.prototype.hasOwnProperty);

  var regexExec = RegExp.prototype.exec;
  var gOPD = Object.getOwnPropertyDescriptor;

  var tryRegexExecCall = function tryRegexExec(value) {
  	try {
  		var lastIndex = value.lastIndex;
  		value.lastIndex = 0; // eslint-disable-line no-param-reassign

  		regexExec.call(value);
  		return true;
  	} catch (e) {
  		return false;
  	} finally {
  		value.lastIndex = lastIndex; // eslint-disable-line no-param-reassign
  	}
  };
  var toStr$4 = Object.prototype.toString;
  var regexClass = '[object RegExp]';
  var hasToStringTag$1 = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

  var isRegex = function isRegex(value) {
  	if (!value || typeof value !== 'object') {
  		return false;
  	}
  	if (!hasToStringTag$1) {
  		return toStr$4.call(value) === regexClass;
  	}

  	var descriptor = gOPD(value, 'lastIndex');
  	var hasLastIndexDataProperty = descriptor && src(descriptor, 'value');
  	if (!hasLastIndexDataProperty) {
  		return false;
  	}

  	return tryRegexExecCall(value);
  };

  var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

  var toStr$5 = Object.prototype.toString;
  var concat = Array.prototype.concat;
  var origDefineProperty = Object.defineProperty;

  var isFunction = function (fn) {
  	return typeof fn === 'function' && toStr$5.call(fn) === '[object Function]';
  };

  var arePropertyDescriptorsSupported = function () {
  	var obj = {};
  	try {
  		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
  		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
  		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
  			return false;
  		}
  		return obj.x === obj;
  	} catch (e) { /* this is IE 8. */
  		return false;
  	}
  };
  var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

  var defineProperty = function (object, name, value, predicate) {
  	if (name in object && (!isFunction(predicate) || !predicate())) {
  		return;
  	}
  	if (supportsDescriptors) {
  		origDefineProperty(object, name, {
  			configurable: true,
  			enumerable: false,
  			value: value,
  			writable: true
  		});
  	} else {
  		object[name] = value;
  	}
  };

  var defineProperties = function (object, map) {
  	var predicates = arguments.length > 2 ? arguments[2] : {};
  	var props = objectKeys(map);
  	if (hasSymbols) {
  		props = concat.call(props, Object.getOwnPropertySymbols(map));
  	}
  	for (var i = 0; i < props.length; i += 1) {
  		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
  	}
  };

  defineProperties.supportsDescriptors = !!supportsDescriptors;

  var defineProperties_1 = defineProperties;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /* eslint complexity: [2, 18], max-statements: [2, 33] */
  var shams = function hasSymbols() {
  	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
  	if (typeof Symbol.iterator === 'symbol') { return true; }

  	var obj = {};
  	var sym = Symbol('test');
  	var symObj = Object(sym);
  	if (typeof sym === 'string') { return false; }

  	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
  	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

  	// temp disabled per https://github.com/ljharb/object.assign/issues/17
  	// if (sym instanceof Symbol) { return false; }
  	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
  	// if (!(symObj instanceof Symbol)) { return false; }

  	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
  	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

  	var symVal = 42;
  	obj[sym] = symVal;
  	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
  	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

  	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

  	var syms = Object.getOwnPropertySymbols(obj);
  	if (syms.length !== 1 || syms[0] !== sym) { return false; }

  	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

  	if (typeof Object.getOwnPropertyDescriptor === 'function') {
  		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
  		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
  	}

  	return true;
  };

  var origSymbol = commonjsGlobal.Symbol;


  var hasSymbols$1 = function hasNativeSymbols() {
  	if (typeof origSymbol !== 'function') { return false; }
  	if (typeof Symbol !== 'function') { return false; }
  	if (typeof origSymbol('foo') !== 'symbol') { return false; }
  	if (typeof Symbol('bar') !== 'symbol') { return false; }

  	return shams();
  };

  /* globals
  	Atomics,
  	SharedArrayBuffer,
  */

  var undefined$1;

  var $TypeError = TypeError;

  var $gOPD = Object.getOwnPropertyDescriptor;
  if ($gOPD) {
  	try {
  		$gOPD({}, '');
  	} catch (e) {
  		$gOPD = null; // this is IE 8, which has a broken gOPD
  	}
  }

  var throwTypeError = function () { throw new $TypeError(); };
  var ThrowTypeError = $gOPD
  	? (function () {
  		try {
  			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
  			arguments.callee; // IE 8 does not throw here
  			return throwTypeError;
  		} catch (calleeThrows) {
  			try {
  				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
  				return $gOPD(arguments, 'callee').get;
  			} catch (gOPDthrows) {
  				return throwTypeError;
  			}
  		}
  	}())
  	: throwTypeError;

  var hasSymbols$2 = hasSymbols$1();

  var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto
  var generatorFunction =  undefined$1;
  var asyncFunction =  undefined$1;
  var asyncGenFunction =  undefined$1;

  var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto(Uint8Array);

  var INTRINSICS = {
  	'%Array%': Array,
  	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
  	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer.prototype,
  	'%ArrayIteratorPrototype%': hasSymbols$2 ? getProto([][Symbol.iterator]()) : undefined$1,
  	'%ArrayPrototype%': Array.prototype,
  	'%ArrayProto_entries%': Array.prototype.entries,
  	'%ArrayProto_forEach%': Array.prototype.forEach,
  	'%ArrayProto_keys%': Array.prototype.keys,
  	'%ArrayProto_values%': Array.prototype.values,
  	'%AsyncFromSyncIteratorPrototype%': undefined$1,
  	'%AsyncFunction%': asyncFunction,
  	'%AsyncFunctionPrototype%':  undefined$1,
  	'%AsyncGenerator%':  undefined$1,
  	'%AsyncGeneratorFunction%': asyncGenFunction,
  	'%AsyncGeneratorPrototype%':  undefined$1,
  	'%AsyncIteratorPrototype%':  undefined$1,
  	'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
  	'%Boolean%': Boolean,
  	'%BooleanPrototype%': Boolean.prototype,
  	'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
  	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined$1 : DataView.prototype,
  	'%Date%': Date,
  	'%DatePrototype%': Date.prototype,
  	'%decodeURI%': decodeURI,
  	'%decodeURIComponent%': decodeURIComponent,
  	'%encodeURI%': encodeURI,
  	'%encodeURIComponent%': encodeURIComponent,
  	'%Error%': Error,
  	'%ErrorPrototype%': Error.prototype,
  	'%eval%': eval, // eslint-disable-line no-eval
  	'%EvalError%': EvalError,
  	'%EvalErrorPrototype%': EvalError.prototype,
  	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
  	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array.prototype,
  	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
  	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array.prototype,
  	'%Function%': Function,
  	'%FunctionPrototype%': Function.prototype,
  	'%Generator%':  undefined$1,
  	'%GeneratorFunction%': generatorFunction,
  	'%GeneratorPrototype%':  undefined$1,
  	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
  	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array.prototype,
  	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
  	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined$1 : Int8Array.prototype,
  	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
  	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array.prototype,
  	'%isFinite%': isFinite,
  	'%isNaN%': isNaN,
  	'%IteratorPrototype%': hasSymbols$2 ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
  	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
  	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined$1,
  	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
  	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$2 ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
  	'%MapPrototype%': typeof Map === 'undefined' ? undefined$1 : Map.prototype,
  	'%Math%': Math,
  	'%Number%': Number,
  	'%NumberPrototype%': Number.prototype,
  	'%Object%': Object,
  	'%ObjectPrototype%': Object.prototype,
  	'%ObjProto_toString%': Object.prototype.toString,
  	'%ObjProto_valueOf%': Object.prototype.valueOf,
  	'%parseFloat%': parseFloat,
  	'%parseInt%': parseInt,
  	'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
  	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined$1 : Promise.prototype,
  	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined$1 : Promise.prototype.then,
  	'%Promise_all%': typeof Promise === 'undefined' ? undefined$1 : Promise.all,
  	'%Promise_reject%': typeof Promise === 'undefined' ? undefined$1 : Promise.reject,
  	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined$1 : Promise.resolve,
  	'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
  	'%RangeError%': RangeError,
  	'%RangeErrorPrototype%': RangeError.prototype,
  	'%ReferenceError%': ReferenceError,
  	'%ReferenceErrorPrototype%': ReferenceError.prototype,
  	'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
  	'%RegExp%': RegExp,
  	'%RegExpPrototype%': RegExp.prototype,
  	'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
  	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols$2 ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
  	'%SetPrototype%': typeof Set === 'undefined' ? undefined$1 : Set.prototype,
  	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
  	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer.prototype,
  	'%String%': String,
  	'%StringIteratorPrototype%': hasSymbols$2 ? getProto(''[Symbol.iterator]()) : undefined$1,
  	'%StringPrototype%': String.prototype,
  	'%Symbol%': hasSymbols$2 ? Symbol : undefined$1,
  	'%SymbolPrototype%': hasSymbols$2 ? Symbol.prototype : undefined$1,
  	'%SyntaxError%': SyntaxError,
  	'%SyntaxErrorPrototype%': SyntaxError.prototype,
  	'%ThrowTypeError%': ThrowTypeError,
  	'%TypedArray%': TypedArray,
  	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined$1,
  	'%TypeError%': $TypeError,
  	'%TypeErrorPrototype%': $TypeError.prototype,
  	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
  	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array.prototype,
  	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
  	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray.prototype,
  	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
  	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array.prototype,
  	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
  	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array.prototype,
  	'%URIError%': URIError,
  	'%URIErrorPrototype%': URIError.prototype,
  	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
  	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap.prototype,
  	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet,
  	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet.prototype
  };


  var $replace = functionBind.call(Function.call, String.prototype.replace);

  /* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
  var stringToPath = function stringToPath(string) {
  	var result = [];
  	$replace(string, rePropName, function (match, number, quote, subString) {
  		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
  	});
  	return result;
  };
  /* end adaptation */

  var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
  	if (!(name in INTRINSICS)) {
  		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
  	}

  	// istanbul ignore if // hopefully this is impossible to test :-)
  	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
  		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
  	}

  	return INTRINSICS[name];
  };

  var GetIntrinsic = function GetIntrinsic(name, allowMissing) {
  	if (typeof name !== 'string' || name.length === 0) {
  		throw new TypeError('intrinsic name must be a non-empty string');
  	}
  	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
  		throw new TypeError('"allowMissing" argument must be a boolean');
  	}

  	var parts = stringToPath(name);

  	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
  	for (var i = 1; i < parts.length; i += 1) {
  		if (value != null) {
  			if ($gOPD && (i + 1) >= parts.length) {
  				var desc = $gOPD(value, parts[i]);
  				if (!allowMissing && !(parts[i] in value)) {
  					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
  				}
  				value = desc ? (desc.get || desc.value) : value[parts[i]];
  			} else {
  				value = value[parts[i]];
  			}
  		}
  	}
  	return value;
  };

  var $Function = GetIntrinsic('%Function%');
  var $apply = $Function.apply;
  var $call = $Function.call;

  var callBind = function callBind() {
  	return functionBind.apply($call, arguments);
  };

  var apply = function applyBind() {
  	return functionBind.apply($apply, arguments);
  };
  callBind.apply = apply;

  var $Object = Object;
  var $TypeError$1 = TypeError;

  var implementation$2 = function flags() {
  	if (this != null && this !== $Object(this)) {
  		throw new $TypeError$1('RegExp.prototype.flags getter called on non-object');
  	}
  	var result = '';
  	if (this.global) {
  		result += 'g';
  	}
  	if (this.ignoreCase) {
  		result += 'i';
  	}
  	if (this.multiline) {
  		result += 'm';
  	}
  	if (this.dotAll) {
  		result += 's';
  	}
  	if (this.unicode) {
  		result += 'u';
  	}
  	if (this.sticky) {
  		result += 'y';
  	}
  	return result;
  };

  var supportsDescriptors$1 = defineProperties_1.supportsDescriptors;
  var $gOPD$1 = Object.getOwnPropertyDescriptor;
  var $TypeError$2 = TypeError;

  var polyfill = function getPolyfill() {
  	if (!supportsDescriptors$1) {
  		throw new $TypeError$2('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
  	}
  	if ((/a/mig).flags === 'gim') {
  		var descriptor = $gOPD$1(RegExp.prototype, 'flags');
  		if (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {
  			return descriptor.get;
  		}
  	}
  	return implementation$2;
  };

  var supportsDescriptors$2 = defineProperties_1.supportsDescriptors;

  var gOPD$1 = Object.getOwnPropertyDescriptor;
  var defineProperty$1 = Object.defineProperty;
  var TypeErr = TypeError;
  var getProto$1 = Object.getPrototypeOf;
  var regex = /a/;

  var shim = function shimFlags() {
  	if (!supportsDescriptors$2 || !getProto$1) {
  		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
  	}
  	var polyfill$1 = polyfill();
  	var proto = getProto$1(regex);
  	var descriptor = gOPD$1(proto, 'flags');
  	if (!descriptor || descriptor.get !== polyfill$1) {
  		defineProperty$1(proto, 'flags', {
  			configurable: true,
  			enumerable: false,
  			get: polyfill$1
  		});
  	}
  	return polyfill$1;
  };

  var flagsBound = callBind(implementation$2);

  defineProperties_1(flagsBound, {
  	getPolyfill: polyfill,
  	implementation: implementation$2,
  	shim: shim
  });

  var regexp_prototype_flags = flagsBound;

  var toString = {}.toString;

  var isarray = Array.isArray || function (arr) {
    return toString.call(arr) == '[object Array]';
  };

  var getDay = Date.prototype.getDay;
  var tryDateObject = function tryDateGetDayCall(value) {
  	try {
  		getDay.call(value);
  		return true;
  	} catch (e) {
  		return false;
  	}
  };

  var toStr$6 = Object.prototype.toString;
  var dateClass = '[object Date]';
  var hasToStringTag$2 = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

  var isDateObject = function isDateObject(value) {
  	if (typeof value !== 'object' || value === null) {
  		return false;
  	}
  	return hasToStringTag$2 ? tryDateObject(value) : toStr$6.call(value) === dateClass;
  };

  var strValue = String.prototype.valueOf;
  var tryStringObject = function tryStringObject(value) {
  	try {
  		strValue.call(value);
  		return true;
  	} catch (e) {
  		return false;
  	}
  };
  var toStr$7 = Object.prototype.toString;
  var strClass = '[object String]';
  var hasToStringTag$3 = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

  var isString = function isString(value) {
  	if (typeof value === 'string') {
  		return true;
  	}
  	if (typeof value !== 'object') {
  		return false;
  	}
  	return hasToStringTag$3 ? tryStringObject(value) : toStr$7.call(value) === strClass;
  };

  var numToStr = Number.prototype.toString;
  var tryNumberObject = function tryNumberObject(value) {
  	try {
  		numToStr.call(value);
  		return true;
  	} catch (e) {
  		return false;
  	}
  };
  var toStr$8 = Object.prototype.toString;
  var numClass = '[object Number]';
  var hasToStringTag$4 = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

  var isNumberObject = function isNumberObject(value) {
  	if (typeof value === 'number') {
  		return true;
  	}
  	if (typeof value !== 'object') {
  		return false;
  	}
  	return hasToStringTag$4 ? tryNumberObject(value) : toStr$8.call(value) === numClass;
  };

  var boolToStr = Boolean.prototype.toString;

  var tryBooleanObject = function booleanBrandCheck(value) {
  	try {
  		boolToStr.call(value);
  		return true;
  	} catch (e) {
  		return false;
  	}
  };
  var toStr$9 = Object.prototype.toString;
  var boolClass = '[object Boolean]';
  var hasToStringTag$5 = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

  var isBooleanObject = function isBoolean(value) {
  	if (typeof value === 'boolean') {
  		return true;
  	}
  	if (value === null || typeof value !== 'object') {
  		return false;
  	}
  	return hasToStringTag$5 && Symbol.toStringTag in value ? tryBooleanObject(value) : toStr$9.call(value) === boolClass;
  };

  var isSymbol = createCommonjsModule(function (module) {

  var toStr = Object.prototype.toString;
  var hasSymbols = hasSymbols$1();

  if (hasSymbols) {
  	var symToStr = Symbol.prototype.toString;
  	var symStringRegex = /^Symbol\(.*\)$/;
  	var isSymbolObject = function isRealSymbolObject(value) {
  		if (typeof value.valueOf() !== 'symbol') {
  			return false;
  		}
  		return symStringRegex.test(symToStr.call(value));
  	};

  	module.exports = function isSymbol(value) {
  		if (typeof value === 'symbol') {
  			return true;
  		}
  		if (toStr.call(value) !== '[object Symbol]') {
  			return false;
  		}
  		try {
  			return isSymbolObject(value);
  		} catch (e) {
  			return false;
  		}
  	};
  } else {

  	module.exports = function isSymbol(value) {
  		// this environment does not support Symbols.
  		return false ;
  	};
  }
  });

  var isBigint = createCommonjsModule(function (module) {

  if (typeof BigInt === 'function') {
  	var bigIntValueOf = BigInt.prototype.valueOf;
  	var tryBigInt = function tryBigIntObject(value) {
  		try {
  			bigIntValueOf.call(value);
  			return true;
  		} catch (e) {
  		}
  		return false;
  	};

  	module.exports = function isBigInt(value) {
  		if (
  			value === null
  			|| typeof value === 'undefined'
  			|| typeof value === 'boolean'
  			|| typeof value === 'string'
  			|| typeof value === 'number'
  			|| typeof value === 'symbol'
  			|| typeof value === 'function'
  		) {
  			return false;
  		}
  		if (typeof value === 'bigint') { // eslint-disable-line valid-typeof
  			return true;
  		}

  		return tryBigInt(value);
  	};
  } else {
  	module.exports = function isBigInt(value) {
  		return false ;
  	};
  }
  });

  // eslint-disable-next-line consistent-return
  var whichBoxedPrimitive = function whichBoxedPrimitive(value) {
  	// eslint-disable-next-line eqeqeq
  	if (value == null || (typeof value !== 'object' && typeof value !== 'function')) {
  		return null;
  	}
  	if (isString(value)) {
  		return 'String';
  	}
  	if (isNumberObject(value)) {
  		return 'Number';
  	}
  	if (isBooleanObject(value)) {
  		return 'Boolean';
  	}
  	if (isSymbol(value)) {
  		return 'Symbol';
  	}
  	if (isBigint(value)) {
  		return 'BigInt';
  	}
  };

  var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

  var callBound = function callBoundIntrinsic(name, allowMissing) {
  	var intrinsic = GetIntrinsic(name, !!allowMissing);
  	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
  		return callBind(intrinsic);
  	}
  	return intrinsic;
  };

  var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
  var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

  var exported;

  if (!$Map) {
  	// eslint-disable-next-line no-unused-vars
  	exported = function isMap(x) {
  		// `Map` is not present in this environment.
  		return false;
  	};
  }

  var $mapHas = $Map ? Map.prototype.has : null;
  var $setHas = $Set ? Set.prototype.has : null;
  if (!exported && !$mapHas) {
  	// eslint-disable-next-line no-unused-vars
  	exported = function isMap(x) {
  		// `Map` does not have a `has` method
  		return false;
  	};
  }

  var isMap = exported || function isMap(x) {
  	if (!x || typeof x !== 'object') {
  		return false;
  	}
  	try {
  		$mapHas.call(x);
  		if ($setHas) {
  			try {
  				$setHas.call(x);
  			} catch (e) {
  				return true;
  			}
  		}
  		return x instanceof $Map; // core-js workaround, pre-v2.5.0
  	} catch (e) {}
  	return false;
  };

  var $Map$1 = typeof Map === 'function' && Map.prototype ? Map : null;
  var $Set$1 = typeof Set === 'function' && Set.prototype ? Set : null;

  var exported$1;

  if (!$Set$1) {
  	// eslint-disable-next-line no-unused-vars
  	exported$1 = function isSet(x) {
  		// `Set` is not present in this environment.
  		return false;
  	};
  }

  var $mapHas$1 = $Map$1 ? Map.prototype.has : null;
  var $setHas$1 = $Set$1 ? Set.prototype.has : null;
  if (!exported$1 && !$setHas$1) {
  	// eslint-disable-next-line no-unused-vars
  	exported$1 = function isSet(x) {
  		// `Set` does not have a `has` method
  		return false;
  	};
  }

  var isSet = exported$1 || function isSet(x) {
  	if (!x || typeof x !== 'object') {
  		return false;
  	}
  	try {
  		$setHas$1.call(x);
  		if ($mapHas$1) {
  			try {
  				$mapHas$1.call(x);
  			} catch (e) {
  				return true;
  			}
  		}
  		return x instanceof $Set$1; // core-js workaround, pre-v2.5.0
  	} catch (e) {}
  	return false;
  };

  var $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;
  var $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;

  var exported$2;

  if (!$WeakMap) {
  	// eslint-disable-next-line no-unused-vars
  	exported$2 = function isWeakMap(x) {
  		// `WeakMap` is not present in this environment.
  		return false;
  	};
  }

  var $mapHas$2 = $WeakMap ? $WeakMap.prototype.has : null;
  var $setHas$2 = $WeakSet ? $WeakSet.prototype.has : null;
  if (!exported$2 && !$mapHas$2) {
  	// eslint-disable-next-line no-unused-vars
  	exported$2 = function isWeakMap(x) {
  		// `WeakMap` does not have a `has` method
  		return false;
  	};
  }

  var isWeakmap = exported$2 || function isWeakMap(x) {
  	if (!x || typeof x !== 'object') {
  		return false;
  	}
  	try {
  		$mapHas$2.call(x, $mapHas$2);
  		if ($setHas$2) {
  			try {
  				$setHas$2.call(x, $setHas$2);
  			} catch (e) {
  				return true;
  			}
  		}
  		return x instanceof $WeakMap; // core-js workaround, pre-v3
  	} catch (e) {}
  	return false;
  };

  var isWeakset = createCommonjsModule(function (module) {

  var $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;
  var $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;

  var exported;

  if (!$WeakMap) {
  	// eslint-disable-next-line no-unused-vars
  	exported = function isWeakSet(x) {
  		// `WeakSet` is not present in this environment.
  		return false;
  	};
  }

  var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
  var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
  if (!exported && !$setHas) {
  	// eslint-disable-next-line no-unused-vars
  	module.exports = function isWeakSet(x) {
  		// `WeakSet` does not have a `has` method
  		return false;
  	};
  }

  module.exports = exported || function isWeakSet(x) {
  	if (!x || typeof x !== 'object') {
  		return false;
  	}
  	try {
  		$setHas.call(x, $setHas);
  		if ($mapHas) {
  			try {
  				$mapHas.call(x, $mapHas);
  			} catch (e) {
  				return true;
  			}
  		}
  		return x instanceof $WeakSet; // core-js workaround, pre-v3
  	} catch (e) {}
  	return false;
  };
  });

  var whichCollection = function whichCollection(value) {
  	if (value && typeof value === 'object') {
  		if (isMap(value)) {
  			return 'Map';
  		}
  		if (isSet(value)) {
  			return 'Set';
  		}
  		if (isWeakmap(value)) {
  			return 'WeakMap';
  		}
  		if (isWeakset(value)) {
  			return 'WeakSet';
  		}
  	}
  	return false;
  };

  var toString$1 = {}.toString;

  var isarray$1 = Array.isArray || function (arr) {
    return toString$1.call(arr) == '[object Array]';
  };

  var esGetIterator = createCommonjsModule(function (module) {

  /* eslint global-require: 0 */
  // the code is structured this way so that bundlers can
  // alias out `has-symbols` to `() => true` or `() => false` if your target
  // environments' Symbol capabilities are known, and then use
  // dead code elimination on the rest of this module.
  //
  // Similarly, `isarray` can be aliased to `Array.isArray` if
  // available in all target environments.



  if (hasSymbols$1() || shams()) {
  	var $iterator = Symbol.iterator;
  	// Symbol is available natively or shammed
  	// natively:
  	//  - Chrome >= 38
  	//  - Edge 12-14?, Edge >= 15 for sure
  	//  - FF >= 36
  	//  - Safari >= 9
  	//  - node >= 0.12
  	module.exports = function getIterator(iterable) {
  		// alternatively, `iterable[$iterator]?.()`
  		if (iterable != null && typeof iterable[$iterator] !== 'undefined') {
  			return iterable[$iterator]();
  		}
  		if (isArguments$1(iterable)) {
  			// arguments objects lack Symbol.iterator
  			// - node 0.12
  			return Array.prototype[$iterator].call(iterable);
  		}
  	};
  } else {
  	// Symbol is not available, native or shammed
  	var isArray = isarray$1;
  	var isString$1 = isString;
  	var GetIntrinsic$1 = GetIntrinsic;
  	var $Map = GetIntrinsic$1('%Map%', true);
  	var $Set = GetIntrinsic$1('%Set%', true);
  	var callBound$1 = callBound;
  	var $arrayPush = callBound$1('Array.prototype.push');
  	var $charCodeAt = callBound$1('String.prototype.charCodeAt');
  	var $stringSlice = callBound$1('String.prototype.slice');

  	var advanceStringIndex = function advanceStringIndex(S, index) {
  		var length = S.length;
  		if ((index + 1) >= length) {
  			return index + 1;
  		}

  		var first = $charCodeAt(S, index);
  		if (first < 0xD800 || first > 0xDBFF) {
  			return index + 1;
  		}

  		var second = $charCodeAt(S, index + 1);
  		if (second < 0xDC00 || second > 0xDFFF) {
  			return index + 1;
  		}

  		return index + 2;
  	};

  	var getArrayIterator = function getArrayIterator(arraylike) {
  		var i = 0;
  		return {
  			next: function next() {
  				var done = i >= arraylike.length;
  				var value;
  				if (!done) {
  					value = arraylike[i];
  					i += 1;
  				}
  				return {
  					done: done,
  					value: value
  				};
  			}
  		};
  	};

  	var getNonCollectionIterator = function getNonCollectionIterator(iterable) {
  		if (isArray(iterable) || isArguments$1(iterable)) {
  			return getArrayIterator(iterable);
  		}
  		if (isString$1(iterable)) {
  			var i = 0;
  			return {
  				next: function next() {
  					var nextIndex = advanceStringIndex(iterable, i);
  					var value = $stringSlice(iterable, i, nextIndex);
  					i = nextIndex;
  					return {
  						done: nextIndex > iterable.length,
  						value: value
  					};
  				}
  			};
  		}
  	};

  	if (!$Map && !$Set) {
  		// the only language iterables are Array, String, arguments
  		// - Safari <= 6.0
  		// - Chrome < 38
  		// - node < 0.12
  		// - FF < 13
  		// - IE < 11
  		// - Edge < 11

  		module.exports = getNonCollectionIterator;
  	} else {
  		// either Map or Set are available, but Symbol is not
  		// - es6-shim on an ES5 browser
  		// - Safari 6.2 (maybe 6.1?)
  		// - FF v[13, 36)
  		// - IE 11
  		// - Edge 11
  		// - Safari v[6, 9)

  		var isMap$1 = isMap;
  		var isSet$1 = isSet;

  		// Firefox >= 27, IE 11, Safari 6.2 - 9, Edge 11, es6-shim in older envs, all have forEach
  		var $mapForEach = callBound$1('Map.prototype.forEach', true);
  		var $setForEach = callBound$1('Set.prototype.forEach', true);
  		if (typeof process === 'undefined' || !process.versions || !process.versions.node) { // "if is not node"

  			// Firefox 17 - 26 has `.iterator()`, whose iterator `.next()` either
  			// returns a value, or throws a StopIteration object. These browsers
  			// do not have any other mechanism for iteration.
  			var $mapIterator = callBound$1('Map.prototype.iterator', true);
  			var $setIterator = callBound$1('Set.prototype.iterator', true);
  			var getStopIterationIterator = function (iterator) {
  				var done = false;
  				return {
  					next: function next() {
  						try {
  							return {
  								done: done,
  								value: done ? undefined : iterator.next()
  							};
  						} catch (e) {
  							done = true;
  							return {
  								done: true,
  								value: undefined
  							};
  						}
  					}
  				};
  			};
  		}
  		// Firefox 27-35, and some older es6-shim versions, use a string "@@iterator" property
  		// this returns a proper iterator object, so we should use it instead of forEach.
  		// newer es6-shim versions use a string "_es6-shim iterator_" property.
  		var $mapAtAtIterator = callBound$1('Map.prototype.@@iterator', true) || callBound$1('Map.prototype._es6-shim iterator_', true);
  		var $setAtAtIterator = callBound$1('Set.prototype.@@iterator', true) || callBound$1('Set.prototype._es6-shim iterator_', true);

  		var getCollectionIterator = function getCollectionIterator(iterable) {
  			if (isMap$1(iterable)) {
  				if ($mapIterator) {
  					return getStopIterationIterator($mapIterator(iterable));
  				}
  				if ($mapAtAtIterator) {
  					return $mapAtAtIterator(iterable);
  				}
  				if ($mapForEach) {
  					var entries = [];
  					$mapForEach(iterable, function (v, k) {
  						$arrayPush(entries, [k, v]);
  					});
  					return getArrayIterator(entries);
  				}
  			}
  			if (isSet$1(iterable)) {
  				if ($setIterator) {
  					return getStopIterationIterator($setIterator(iterable));
  				}
  				if ($setAtAtIterator) {
  					return $setAtAtIterator(iterable);
  				}
  				if ($setForEach) {
  					var values = [];
  					$setForEach(iterable, function (v) {
  						$arrayPush(values, v);
  					});
  					return getArrayIterator(values);
  				}
  			}
  		};

  		module.exports = function getIterator(iterable) {
  			return getCollectionIterator(iterable) || getNonCollectionIterator(iterable);
  		};
  	}
  }
  });

  var util_inspect = util.inspect;

  var hasMap = typeof Map === 'function' && Map.prototype;
  var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
  var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
  var mapForEach = hasMap && Map.prototype.forEach;
  var hasSet = typeof Set === 'function' && Set.prototype;
  var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
  var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
  var setForEach = hasSet && Set.prototype.forEach;
  var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
  var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
  var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
  var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
  var booleanValueOf = Boolean.prototype.valueOf;
  var objectToString = Object.prototype.toString;
  var match = String.prototype.match;
  var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;

  var inspectCustom = util_inspect.custom;
  var inspectSymbol = inspectCustom && isSymbol$1(inspectCustom) ? inspectCustom : null;

  var objectInspect = function inspect_(obj, options, depth, seen) {
      var opts = options || {};

      if (has$1(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
          throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }

      if (typeof obj === 'undefined') {
          return 'undefined';
      }
      if (obj === null) {
          return 'null';
      }
      if (typeof obj === 'boolean') {
          return obj ? 'true' : 'false';
      }

      if (typeof obj === 'string') {
          return inspectString(obj, opts);
      }
      if (typeof obj === 'number') {
          if (obj === 0) {
              return Infinity / obj > 0 ? '0' : '-0';
          }
          return String(obj);
      }
      if (typeof obj === 'bigint') { // eslint-disable-line valid-typeof
          return String(obj) + 'n';
      }

      var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
      if (typeof depth === 'undefined') { depth = 0; }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
          return '[Object]';
      }

      if (typeof seen === 'undefined') {
          seen = [];
      } else if (indexOf(seen, obj) >= 0) {
          return '[Circular]';
      }

      function inspect(value, from) {
          if (from) {
              seen = seen.slice();
              seen.push(from);
          }
          return inspect_(value, opts, depth + 1, seen);
      }

      if (typeof obj === 'function') {
          var name = nameOf(obj);
          return '[Function' + (name ? ': ' + name : '') + ']';
      }
      if (isSymbol$1(obj)) {
          var symString = Symbol.prototype.toString.call(obj);
          return typeof obj === 'object' ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
          var s = '<' + String(obj.nodeName).toLowerCase();
          var attrs = obj.attributes || [];
          for (var i = 0; i < attrs.length; i++) {
              s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
          }
          s += '>';
          if (obj.childNodes && obj.childNodes.length) { s += '...'; }
          s += '</' + String(obj.nodeName).toLowerCase() + '>';
          return s;
      }
      if (isArray(obj)) {
          if (obj.length === 0) { return '[]'; }
          return '[ ' + arrObjKeys(obj, inspect).join(', ') + ' ]';
      }
      if (isError(obj)) {
          var parts = arrObjKeys(obj, inspect);
          if (parts.length === 0) { return '[' + String(obj) + ']'; }
          return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
      }
      if (typeof obj === 'object') {
          if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
              return obj[inspectSymbol]();
          } else if (typeof obj.inspect === 'function') {
              return obj.inspect();
          }
      }
      if (isMap$1(obj)) {
          var mapParts = [];
          mapForEach.call(obj, function (value, key) {
              mapParts.push(inspect(key, obj) + ' => ' + inspect(value, obj));
          });
          return collectionOf('Map', mapSize.call(obj), mapParts);
      }
      if (isSet$1(obj)) {
          var setParts = [];
          setForEach.call(obj, function (value) {
              setParts.push(inspect(value, obj));
          });
          return collectionOf('Set', setSize.call(obj), setParts);
      }
      if (isWeakMap(obj)) {
          return weakCollectionOf('WeakMap');
      }
      if (isWeakSet(obj)) {
          return weakCollectionOf('WeakSet');
      }
      if (isNumber(obj)) {
          return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
          return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
          return markBoxed(booleanValueOf.call(obj));
      }
      if (isString$1(obj)) {
          return markBoxed(inspect(String(obj)));
      }
      if (!isDate(obj) && !isRegExp(obj)) {
          var xs = arrObjKeys(obj, inspect);
          if (xs.length === 0) { return '{}'; }
          return '{ ' + xs.join(', ') + ' }';
      }
      return String(obj);
  };

  function wrapQuotes(s, defaultStyle, opts) {
      var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
      return quoteChar + s + quoteChar;
  }

  function quote(s) {
      return String(s).replace(/"/g, '&quot;');
  }

  function isArray(obj) { return toStr$a(obj) === '[object Array]'; }
  function isDate(obj) { return toStr$a(obj) === '[object Date]'; }
  function isRegExp(obj) { return toStr$a(obj) === '[object RegExp]'; }
  function isError(obj) { return toStr$a(obj) === '[object Error]'; }
  function isSymbol$1(obj) { return toStr$a(obj) === '[object Symbol]'; }
  function isString$1(obj) { return toStr$a(obj) === '[object String]'; }
  function isNumber(obj) { return toStr$a(obj) === '[object Number]'; }
  function isBigInt(obj) { return toStr$a(obj) === '[object BigInt]'; }
  function isBoolean(obj) { return toStr$a(obj) === '[object Boolean]'; }

  var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
  function has$1(obj, key) {
      return hasOwn.call(obj, key);
  }

  function toStr$a(obj) {
      return objectToString.call(obj);
  }

  function nameOf(f) {
      if (f.name) { return f.name; }
      var m = match.call(f, /^function\s*([\w$]+)/);
      if (m) { return m[1]; }
      return null;
  }

  function indexOf(xs, x) {
      if (xs.indexOf) { return xs.indexOf(x); }
      for (var i = 0, l = xs.length; i < l; i++) {
          if (xs[i] === x) { return i; }
      }
      return -1;
  }

  function isMap$1(x) {
      if (!mapSize || !x || typeof x !== 'object') {
          return false;
      }
      try {
          mapSize.call(x);
          try {
              setSize.call(x);
          } catch (s) {
              return true;
          }
          return x instanceof Map; // core-js workaround, pre-v2.5.0
      } catch (e) {}
      return false;
  }

  function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== 'object') {
          return false;
      }
      try {
          weakMapHas.call(x, weakMapHas);
          try {
              weakSetHas.call(x, weakSetHas);
          } catch (s) {
              return true;
          }
          return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
      } catch (e) {}
      return false;
  }

  function isSet$1(x) {
      if (!setSize || !x || typeof x !== 'object') {
          return false;
      }
      try {
          setSize.call(x);
          try {
              mapSize.call(x);
          } catch (m) {
              return true;
          }
          return x instanceof Set; // core-js workaround, pre-v2.5.0
      } catch (e) {}
      return false;
  }

  function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== 'object') {
          return false;
      }
      try {
          weakSetHas.call(x, weakSetHas);
          try {
              weakMapHas.call(x, weakMapHas);
          } catch (s) {
              return true;
          }
          return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
      } catch (e) {}
      return false;
  }

  function isElement(x) {
      if (!x || typeof x !== 'object') { return false; }
      if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
          return true;
      }
      return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
  }

  function inspectString(str, opts) {
      // eslint-disable-next-line no-control-regex
      var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, 'single', opts);
  }

  function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
          8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r'
      }[n];
      if (x) { return '\\' + x; }
      return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16);
  }

  function markBoxed(str) {
      return 'Object(' + str + ')';
  }

  function weakCollectionOf(type) {
      return type + ' { ? }';
  }

  function collectionOf(type, size, entries) {
      return type + ' (' + size + ') {' + entries.join(', ') + '}';
  }

  function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
          xs.length = obj.length;
          for (var i = 0; i < obj.length; i++) {
              xs[i] = has$1(obj, i) ? inspect(obj[i], obj) : '';
          }
      }
      for (var key in obj) { // eslint-disable-line no-restricted-syntax
          if (!has$1(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
          if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
          if ((/[^\w$]/).test(key)) {
              xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
          } else {
              xs.push(key + ': ' + inspect(obj[key], obj));
          }
      }
      return xs;
  }

  var $TypeError$3 = GetIntrinsic('%TypeError%');
  var $WeakMap$1 = GetIntrinsic('%WeakMap%', true);
  var $Map$2 = GetIntrinsic('%Map%', true);
  var $push = callBound('Array.prototype.push');

  var $weakMapGet = callBound('WeakMap.prototype.get', true);
  var $weakMapSet = callBound('WeakMap.prototype.set', true);
  var $weakMapHas = callBound('WeakMap.prototype.has', true);
  var $mapGet = callBound('Map.prototype.get', true);
  var $mapSet = callBound('Map.prototype.set', true);
  var $mapHas$3 = callBound('Map.prototype.has', true);
  var objectGet = function (objects, key) { // eslint-disable-line consistent-return
  	for (var i = 0; i < objects.length; i += 1) {
  		if (objects[i].key === key) {
  			return objects[i].value;
  		}
  	}
  };
  var objectSet = function (objects, key, value) {
  	for (var i = 0; i < objects.length; i += 1) {
  		if (objects[i].key === key) {
  			objects[i].value = value; // eslint-disable-line no-param-reassign
  			return;
  		}
  	}
  	$push(objects, {
  		key: key,
  		value: value
  	});
  };
  var objectHas = function (objects, key) {
  	for (var i = 0; i < objects.length; i += 1) {
  		if (objects[i].key === key) {
  			return true;
  		}
  	}
  	return false;
  };

  var sideChannel = function getSideChannel() {
  	var $wm;
  	var $m;
  	var $o;
  	var channel = {
  		assert: function (key) {
  			if (!channel.has(key)) {
  				throw new $TypeError$3('Side channel does not contain ' + objectInspect(key));
  			}
  		},
  		get: function (key) { // eslint-disable-line consistent-return
  			if ($WeakMap$1 && key && (typeof key === 'object' || typeof key === 'function')) {
  				if ($wm) {
  					return $weakMapGet($wm, key);
  				}
  			} else if ($Map$2) {
  				if ($m) {
  					return $mapGet($m, key);
  				}
  			} else {
  				if ($o) { // eslint-disable-line no-lonely-if
  					return objectGet($o, key);
  				}
  			}
  		},
  		has: function (key) {
  			if ($WeakMap$1 && key && (typeof key === 'object' || typeof key === 'function')) {
  				if ($wm) {
  					return $weakMapHas($wm, key);
  				}
  			} else if ($Map$2) {
  				if ($m) {
  					return $mapHas$3($m, key);
  				}
  			} else {
  				if ($o) { // eslint-disable-line no-lonely-if
  					return objectHas($o, key);
  				}
  			}
  			return false;
  		},
  		set: function (key, value) {
  			if ($WeakMap$1 && key && (typeof key === 'object' || typeof key === 'function')) {
  				if (!$wm) {
  					$wm = new $WeakMap$1();
  				}
  				$weakMapSet($wm, key, value);
  			} else if ($Map$2) {
  				if (!$m) {
  					$m = new $Map$2();
  				}
  				$mapSet($m, key, value);
  			} else {
  				if (!$o) {
  					$o = [];
  				}
  				objectSet($o, key, value);
  			}
  		}
  	};
  	return channel;
  };

  var $getTime = callBound('Date.prototype.getTime');
  var gPO = Object.getPrototypeOf;
  var $objToString = callBound('Object.prototype.toString');

  var $Set$2 = GetIntrinsic('%Set%', true);
  var $mapHas$4 = callBound('Map.prototype.has', true);
  var $mapGet$1 = callBound('Map.prototype.get', true);
  var $mapSize = callBound('Map.prototype.size', true);
  var $setAdd = callBound('Set.prototype.add', true);
  var $setDelete = callBound('Set.prototype.delete', true);
  var $setHas$3 = callBound('Set.prototype.has', true);
  var $setSize = callBound('Set.prototype.size', true);

  // taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L401-L414
  function setHasEqualElement(set, val1, strict, channel) {
    var i = esGetIterator(set);
    var result;
    while ((result = i.next()) && !result.done) {
      if (internalDeepEqual(val1, result.value, strict, channel)) { // eslint-disable-line no-use-before-define
        // Remove the matching element to make sure we do not check that again.
        $setDelete(set, result.value);
        return true;
      }
    }

    return false;
  }

  // taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L416-L439
  function findLooseMatchingPrimitives(prim) {
    if (typeof prim === 'undefined') {
      return null;
    }
    if (typeof prim === 'object') { // Only pass in null as object!
      return void 0;
    }
    if (typeof prim === 'symbol') {
      return false;
    }
    if (typeof prim === 'string' || typeof prim === 'number') {
      // Loose equal entries exist only if the string is possible to convert to a regular number and not NaN.
      return +prim === +prim; // eslint-disable-line no-implicit-coercion
    }
    return true;
  }

  // taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L449-L460
  function mapMightHaveLoosePrim(a, b, prim, item, channel) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) {
      return altValue;
    }
    var curB = $mapGet$1(b, altValue);
    // eslint-disable-next-line no-use-before-define
    if ((typeof curB === 'undefined' && !$mapHas$4(b, altValue)) || !internalDeepEqual(item, curB, false, channel)) {
      return false;
    }
    // eslint-disable-next-line no-use-before-define
    return !$mapHas$4(a, altValue) && internalDeepEqual(item, curB, false, channel);
  }

  // taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L441-L447
  function setMightHaveLoosePrim(a, b, prim) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) {
      return altValue;
    }

    return $setHas$3(b, altValue) && !$setHas$3(a, altValue);
  }

  // taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L518-L533
  function mapHasEqualEntry(set, map, key1, item1, strict, channel) {
    var i = esGetIterator(set);
    var result;
    var key2;
    while ((result = i.next()) && !result.done) {
      key2 = result.value;
      if (
        // eslint-disable-next-line no-use-before-define
        internalDeepEqual(key1, key2, strict, channel)
        // eslint-disable-next-line no-use-before-define
        && internalDeepEqual(item1, $mapGet$1(map, key2), strict, channel)
      ) {
        $setDelete(set, key2);
        return true;
      }
    }

    return false;
  }

  function internalDeepEqual(actual, expected, options, channel) {
    var opts = options || {};

    // 7.1. All identical values are equivalent, as determined by ===.
    if (opts.strict ? objectIs(actual, expected) : actual === expected) {
      return true;
    }

    var actualBoxed = whichBoxedPrimitive(actual);
    var expectedBoxed = whichBoxedPrimitive(expected);
    if (actualBoxed !== expectedBoxed) {
      return false;
    }

    // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
    if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
      if ((actual === false && expected) || (actual && expected === false)) { return false; }
      return opts.strict ? objectIs(actual, expected) : actual == expected; // eslint-disable-line eqeqeq
    }

    /*
     * 7.4. For all other Object pairs, including Array objects, equivalence is
     * determined by having the same number of owned properties (as verified
     * with Object.prototype.hasOwnProperty.call), the same set of keys
     * (although not necessarily the same order), equivalent values for every
     * corresponding key, and an identical 'prototype' property. Note: this
     * accounts for both named and indexed properties on Arrays.
     */
    // see https://github.com/nodejs/node/commit/d3aafd02efd3a403d646a3044adcf14e63a88d32 for memos/channel inspiration

    var hasActual = channel.has(actual);
    var hasExpected = channel.has(expected);
    var sentinel;
    if (hasActual && hasExpected) {
      if (channel.get(actual) === channel.get(expected)) {
        return true;
      }
    } else {
      sentinel = {};
    }
    if (!hasActual) { channel.set(actual, sentinel); }
    if (!hasExpected) { channel.set(expected, sentinel); }

    // eslint-disable-next-line no-use-before-define
    return objEquiv(actual, expected, opts, channel);
  }

  function isBuffer(x) {
    if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
      return false;
    }
    if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
      return false;
    }
    if (x.length > 0 && typeof x[0] !== 'number') {
      return false;
    }
    return true;
  }

  function setEquiv(a, b, opts, channel) {
    if ($setSize(a) !== $setSize(b)) {
      return false;
    }
    var iA = esGetIterator(a);
    var iB = esGetIterator(b);
    var resultA;
    var resultB;
    var set;
    while ((resultA = iA.next()) && !resultA.done) {
      if (resultA.value && typeof resultA.value === 'object') {
        if (!set) { set = new $Set$2(); }
        $setAdd(set, resultA.value);
      } else if (!$setHas$3(b, resultA.value)) {
        if (opts.strict) { return false; }
        if (!setMightHaveLoosePrim(a, b, resultA.value)) {
          return false;
        }
        if (!set) { set = new $Set$2(); }
        $setAdd(set, resultA.value);
      }
    }
    if (set) {
      while ((resultB = iB.next()) && !resultB.done) {
        // We have to check if a primitive value is already matching and only if it's not, go hunting for it.
        if (resultB.value && typeof resultB.value === 'object') {
          if (!setHasEqualElement(set, resultB.value, opts.strict, channel)) {
            return false;
          }
        } else if (
          !opts.strict
          && !$setHas$3(a, resultB.value)
          && !setHasEqualElement(set, resultB.value, opts.strict, channel)
        ) {
          return false;
        }
      }
      return $setSize(set) === 0;
    }
    return true;
  }

  function mapEquiv(a, b, opts, channel) {
    if ($mapSize(a) !== $mapSize(b)) {
      return false;
    }
    var iA = esGetIterator(a);
    var iB = esGetIterator(b);
    var resultA;
    var resultB;
    var set;
    var key;
    var item1;
    var item2;
    while ((resultA = iA.next()) && !resultA.done) {
      key = resultA.value[0];
      item1 = resultA.value[1];
      if (key && typeof key === 'object') {
        if (!set) { set = new $Set$2(); }
        $setAdd(set, key);
      } else {
        item2 = $mapGet$1(b, key);
        // if (typeof curB === 'undefined' && !$mapHas(b, altValue) || !internalDeepEqual(item, curB, false, channel)) {
        if ((typeof item2 === 'undefined' && !$mapHas$4(b, key)) || !internalDeepEqual(item1, item2, opts.strict, channel)) {
          if (opts.strict) {
            return false;
          }
          if (!mapMightHaveLoosePrim(a, b, key, item1, channel)) {
            return false;
          }
          if (!set) { set = new $Set$2(); }
          $setAdd(set, key);
        }
      }
    }

    if (set) {
      while ((resultB = iB.next()) && !resultB.done) {
        key = resultB.value[0];
        item1 = resultB.value[1];
        if (key && typeof key === 'object') {
          if (!mapHasEqualEntry(set, a, key, item1, opts.strict, channel)) {
            return false;
          }
        } else if (
          !opts.strict
          && (!a.has(key) || !internalDeepEqual($mapGet$1(a, key), item1, false, channel))
          && !mapHasEqualEntry(set, a, key, item1, false, channel)
        ) {
          return false;
        }
      }
      return $setSize(set) === 0;
    }
    return true;
  }

  function objEquiv(a, b, opts, channel) {
    /* eslint max-statements: [2, 100], max-lines-per-function: [2, 120], max-depth: [2, 5] */
    var i, key;

    if (typeof a !== typeof b) { return false; }
    if (a == null || b == null) { return false; }

    // an identical 'prototype' property.
    if (a.prototype !== b.prototype) { return false; }

    if ($objToString(a) !== $objToString(b)) { return false; }

    if (isArguments$1(a) !== isArguments$1(b)) { return false; }

    var aIsArray = isarray(a);
    var bIsArray = isarray(b);
    if (aIsArray !== bIsArray) { return false; }

    // TODO: replace when a cross-realm brand check is available
    var aIsError = a instanceof Error;
    var bIsError = b instanceof Error;
    if (aIsError !== bIsError) { return false; }
    if (aIsError || bIsError) {
      if (a.name !== b.name || a.message !== b.message) { return false; }
    }

    var aIsRegex = isRegex(a);
    var bIsRegex = isRegex(b);
    if (aIsRegex !== bIsRegex) { return false; }
    if ((aIsRegex || bIsRegex) && (a.source !== b.source || regexp_prototype_flags(a) !== regexp_prototype_flags(b))) {
      return false;
    }

    var aIsDate = isDateObject(a);
    var bIsDate = isDateObject(b);
    if (aIsDate !== bIsDate) { return false; }
    if (aIsDate || bIsDate) { // && would work too, because both are true or both false here
      if ($getTime(a) !== $getTime(b)) { return false; }
    }
    if (opts.strict && gPO && gPO(a) !== gPO(b)) { return false; }

    var aIsBuffer = isBuffer(a);
    var bIsBuffer = isBuffer(b);
    if (aIsBuffer !== bIsBuffer) { return false; }
    if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
      if (a.length !== b.length) { return false; }
      for (i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) { return false; }
      }
      return true;
    }

    if (typeof a !== typeof b) { return false; }

    try {
      var ka = objectKeys(a);
      var kb = objectKeys(b);
    } catch (e) { // happens when one is a string literal and the other isn't
      return false;
    }
    // having the same number of owned properties (keys incorporates hasOwnProperty)
    if (ka.length !== kb.length) { return false; }

    // the same set of keys (although not necessarily the same order),
    ka.sort();
    kb.sort();
    // ~~~cheap key test
    for (i = ka.length - 1; i >= 0; i--) {
      if (ka[i] != kb[i]) { return false; } // eslint-disable-line eqeqeq
    }

    // equivalent values for every corresponding key, and ~~~possibly expensive deep test
    for (i = ka.length - 1; i >= 0; i--) {
      key = ka[i];
      if (!internalDeepEqual(a[key], b[key], opts, channel)) { return false; }
    }

    var aCollection = whichCollection(a);
    var bCollection = whichCollection(b);
    if (aCollection !== bCollection) {
      return false;
    }
    if (aCollection === 'Set' || bCollection === 'Set') { // aCollection === bCollection
      return setEquiv(a, b, opts, channel);
    }
    if (aCollection === 'Map') { // aCollection === bCollection
      return mapEquiv(a, b, opts, channel);
    }

    return true;
  }

  var deepEqual = function deepEqual(a, b, opts) {
    return internalDeepEqual(a, b, opts, sideChannel());
  };

  var ManagerReferenceNodeContext = React.createContext();
  var ManagerReferenceNodeSetterContext = React.createContext();

  var Manager = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(Manager, _React$Component);

    function Manager() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "referenceNode", void 0);

      _defineProperty(_assertThisInitialized(_this), "setReferenceNode", function (newReferenceNode) {
        if (newReferenceNode && _this.referenceNode !== newReferenceNode) {
          _this.referenceNode = newReferenceNode;

          _this.forceUpdate();
        }
      });

      return _this;
    }

    var _proto = Manager.prototype;

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.referenceNode = null;
    };

    _proto.render = function render() {
      return /*#__PURE__*/React.createElement(ManagerReferenceNodeContext.Provider, {
        value: this.referenceNode
      }, /*#__PURE__*/React.createElement(ManagerReferenceNodeSetterContext.Provider, {
        value: this.setReferenceNode
      }, this.props.children));
    };

    return Manager;
  }(React.Component);

  /**
   * Takes an argument and if it's an array, returns the first item in the array,
   * otherwise returns the argument. Used for Preact compatibility.
   */
  var unwrapArray = function unwrapArray(arg) {
    return Array.isArray(arg) ? arg[0] : arg;
  };
  /**
   * Takes a maybe-undefined function and arbitrary args and invokes the function
   * only if it is defined.
   */

  var safeInvoke = function safeInvoke(fn) {
    if (typeof fn === "function") {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return fn.apply(void 0, args);
    }
  };
  /**
   * Does a shallow equality check of two objects by comparing the reference
   * equality of each value.
   */

  var shallowEqual = function shallowEqual(objA, objB) {
    if (objA.length !== objB.length) {
      return false;
    }

    for (var i = 0; i < objB.length; i++) {
      if (objA[i] !== objB[i]) {
        return false;
      }
    }

    return true;
  };
  /**
   * Sets a ref using either a ref callback or a ref object
   */

  var setRef = function setRef(ref, node) {
    // if its a function call it
    if (typeof ref === "function") {
      return safeInvoke(ref, node);
    } // otherwise we should treat it as a ref object
    else if (ref != null) {
        ref.current = node;
      }
  };

  var initialPopperStyle = {
    top: 0,
    left: 0,
    opacity: 0,
    pointerEvents: 'none'
  };
  var initialArrowStyle = {};
  var InnerPopper = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(InnerPopper, _React$Component);

    function InnerPopper() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "state", {
        placement: undefined,
        styles: undefined,
        isReferenceHidden: undefined,
        hasPopperEscaped: undefined
      });

      _defineProperty(_assertThisInitialized(_this), "popperInstance", void 0);

      _defineProperty(_assertThisInitialized(_this), "popperNode", null);

      _defineProperty(_assertThisInitialized(_this), "arrowNode", null);

      _defineProperty(_assertThisInitialized(_this), "setPopperNode", function (popperNode) {
        if (!popperNode || _this.popperNode === popperNode) return;
        setRef(_this.props.innerRef, popperNode);
        _this.popperNode = popperNode;

        _this.updatePopperInstance();
      });

      _defineProperty(_assertThisInitialized(_this), "setArrowNode", function (arrowNode) {
        _this.arrowNode = arrowNode;
      });

      _defineProperty(_assertThisInitialized(_this), "updateStateModifier", {
        name: 'reactPopperState',
        enabled: true,
        phase: 'write',
        fn: function fn(_ref) {
          var state = _ref.state;
          var placement = state.placement,
              styles = state.styles,
              modifiersData = state.modifiersData;
          var isReferenceHidden;
          var hasPopperEscaped;

          if (modifiersData.hide) {
            isReferenceHidden = modifiersData.hide.isReferenceHidden;
            hasPopperEscaped = modifiersData.hide.hasPopperEscaped;
          }

          _this.setState({
            placement: placement,
            styles: styles,
            isReferenceHidden: isReferenceHidden,
            hasPopperEscaped: hasPopperEscaped
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "getOptions", function () {
        var _this$props$modifiers = _this.props.modifiers,
            modifiers = _this$props$modifiers === void 0 ? [] : _this$props$modifiers;
        var arrowModifier = modifiers.find(function (modifier) {
          return modifier.name === 'arrow';
        });
        return {
          placement: _this.props.placement,
          strategy: _this.props.strategy,
          modifiers: [].concat(modifiers.filter(function (modifier) {
            return modifier.name !== 'arrow';
          }), [{
            name: 'arrow',
            enabled: !!_this.arrowNode,
            options: _extends({}, arrowModifier && arrowModifier.options, {
              element: _this.arrowNode
            })
          }, {
            name: 'applyStyles',
            enabled: false
          }, _this.updateStateModifier]),
          onFirstUpdate: _this.props.onFirstUpdate
        };
      });

      _defineProperty(_assertThisInitialized(_this), "getPopperStyle", function () {
        var computedInitialStyle = _extends({}, initialPopperStyle, {
          position: _this.props.strategy === 'fixed' ? 'fixed' : 'absolute'
        });

        return !_this.popperNode || !_this.state.styles ? computedInitialStyle : _this.state.styles.popper;
      });

      _defineProperty(_assertThisInitialized(_this), "getArrowStyle", function () {
        return !_this.arrowNode || !_this.state.styles ? initialArrowStyle : _this.state.styles.arrow;
      });

      _defineProperty(_assertThisInitialized(_this), "destroyPopperInstance", function () {
        if (!_this.popperInstance) return;

        _this.popperInstance.destroy();

        _this.popperInstance = null;
      });

      _defineProperty(_assertThisInitialized(_this), "updatePopperInstance", function () {
        _this.destroyPopperInstance();

        var _assertThisInitialize = _assertThisInitialized(_this),
            popperNode = _assertThisInitialize.popperNode;

        var referenceElement = _this.props.referenceElement;
        if (!referenceElement || !popperNode) return;
        _this.popperInstance = core.createPopper(referenceElement, popperNode, _this.getOptions());
      });

      _defineProperty(_assertThisInitialized(_this), "update", function () {
        if (_this.popperInstance) {
          return _this.popperInstance.update();
        } else {
          return Promise.resolve(null);
        }
      });

      return _this;
    }

    var _proto = InnerPopper.prototype;

    _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      // If the Popper.js reference element has changed, update the instance (destroy + create)
      if (this.props.referenceElement !== prevProps.referenceElement) {
        this.updatePopperInstance();
      } // If the Popper.js options have changed, set options


      if (this.props.placement !== prevProps.placement || this.props.strategy !== prevProps.strategy || !deepEqual(this.props.modifiers, prevProps.modifiers, {
        strict: true
      })) {
        // develop only check that modifiers isn't being updated needlessly
        {
          if (this.props.modifiers !== prevProps.modifiers && this.props.modifiers != null && prevProps.modifiers != null && shallowEqual(this.props.modifiers, prevProps.modifiers)) {
            console.warn("'modifiers' prop reference updated even though all values appear the same.\nConsider memoizing the 'modifiers' object to avoid needless rendering.");
          }
        }

        if (this.popperInstance) {
          this.popperInstance.setOptions(this.getOptions());
        }
      } // A placement difference in state means popper determined a new placement
      // apart from the props value. By the time the popper element is rendered with
      // the new position Popper has already measured it, if the place change triggers
      // a size change it will result in a misaligned popper. So we schedule an update to be sure.


      if (prevState.placement !== this.state.placement) {
        this.update();
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      setRef(this.props.innerRef, null);
      this.destroyPopperInstance();
    };

    _proto.render = function render() {
      var _this$state = this.state,
          placement = _this$state.placement,
          isReferenceHidden = _this$state.isReferenceHidden,
          hasPopperEscaped = _this$state.hasPopperEscaped;
      return unwrapArray(this.props.children)({
        ref: this.setPopperNode,
        style: this.getPopperStyle(),
        placement: placement,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped,
        update: this.update,
        arrowProps: {
          ref: this.setArrowNode,
          style: this.getArrowStyle()
        }
      });
    };

    return InnerPopper;
  }(React.Component);

  _defineProperty(InnerPopper, "defaultProps", {
    placement: 'bottom',
    strategy: 'absolute',
    modifiers: [],
    referenceElement: undefined
  });

  function Popper(_ref2) {
    var referenceElement = _ref2.referenceElement,
        props = _objectWithoutPropertiesLoose(_ref2, ["referenceElement"]);

    return /*#__PURE__*/React.createElement(ManagerReferenceNodeContext.Consumer, null, function (referenceNode) {
      return /*#__PURE__*/React.createElement(InnerPopper, {
        referenceElement: referenceElement !== undefined ? referenceElement : referenceNode,
        children: props.children,
        innerRef: props.innerRef,
        modifiers: props.modifiers,
        placement: props.placement,
        strategy: props.strategy,
        onFirstUpdate: props.onFirstUpdate
      });
    });
  }

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var warning = function() {};

  {
    var printWarning = function printWarning(format, args) {
      var len = arguments.length;
      args = new Array(len > 1 ? len - 1 : 0);
      for (var key = 1; key < len; key++) {
        args[key - 1] = arguments[key];
      }
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function(condition, format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }
      if (format === undefined) {
        throw new Error(
            '`warning(condition, format, ...args)` requires a warning ' +
            'message argument'
        );
      }
      if (!condition) {
        printWarning.apply(null, [format].concat(args));
      }
    };
  }

  var warning_1 = warning;

  var InnerReference = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(InnerReference, _React$Component);

    function InnerReference() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_this), "refHandler", function (node) {
        setRef(_this.props.innerRef, node);
        safeInvoke(_this.props.setReferenceNode, node);
      });

      return _this;
    }

    var _proto = InnerReference.prototype;

    _proto.componentWillUnmount = function componentWillUnmount() {
      setRef(this.props.innerRef, null);
    };

    _proto.render = function render() {
      warning_1(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
      return unwrapArray(this.props.children)({
        ref: this.refHandler
      });
    };

    return InnerReference;
  }(React.Component);

  function Reference(props) {
    return /*#__PURE__*/React.createElement(ManagerReferenceNodeSetterContext.Consumer, null, function (setReferenceNode) {
      return /*#__PURE__*/React.createElement(InnerReference, {
        setReferenceNode: setReferenceNode,
        innerRef: props.innerRef,
        children: props.children
      });
    });
  }

  exports.Manager = Manager;
  exports.Popper = Popper;
  exports.Reference = Reference;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
