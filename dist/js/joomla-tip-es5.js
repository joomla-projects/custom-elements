(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

(function () {
  customElements.define('joomla-tip', /*#__PURE__*/function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    var _super = _createSuper(_class);

    function _class() {
      _classCallCheck(this, _class);

      return _super.apply(this, arguments);
    }

    _createClass(_class, [{
      key: "type",
      get: function get() {
        return this.getAttribute('type');
      },
      set: function set(value) {
        return this.setAttribute('type', value);
      }
    }, {
      key: "label",
      get: function get() {
        return this.getAttribute('label');
      },
      set: function set(value) {
        return this.setAttribute('label', value);
      }
    }, {
      key: "tip",
      get: function get() {
        return this.getAttribute('tip');
      },
      set: function set(value) {
        return this.setAttribute('tip', value);
      }
    }, {
      key: "position",
      get: function get() {
        return this.getAttribute('position');
      },
      set: function set(value) {
        return this.setAttribute('position', value);
      }
    }, {
      key: "text",
      get: function get() {
        return this.getAttribute('text');
      },
      set: function set(value) {
        return this.getAttribute('text', value);
      }
      /* Lifecycle, element appended to the DOM */

    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        if (!this.position || this.position && ['top', 'bottom', 'left', 'right'].indexOf(this.position) === -1) {
          this.position = 'top';
        } // create the html


        this.btnElement = document.createElement('button');
        this.spanElement = document.createElement('span');
        this.btnElement.setAttribute('aria-label', this.label ? this.label : 'more info');
        this.btnElement.innerHTML = this.text ? this.text : '';
        this.spanElement.setAttribute('role', 'status'); // On click

        this.btnElement.addEventListener('click', this.showTip.bind(this));
        this.append(this.btnElement);
        this.append(this.spanElement);
      }
      /* Lifecycle, element removed from the DOM */

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.querySelector('button').removeEventListener('click', this.showTip, true);
      }
    }, {
      key: "showTip",
      value: function showTip() {
        var _this = this;

        var self = this; // Close on outside click

        document.addEventListener('click', function (e) {
          if (_this.btnElement !== e.target) {
            _this.spanElement.innerHTML = '';
            self.removeEventListener('keydown', _this);
          }
        }); // Remove toggletip on ESC

        document.addEventListener('keydown', function (e) {
          if ((e.keyCode || e.which) === 9) {
            _this.spanElement.innerHTML = '';
            self.removeEventListener('keydown', _this);
          }
        });
        this.spanElement.innerHTML = '';
        this.spanElement.innerHTML = "<span class=\"toggletip-bubble ".concat(this.position, "\">").concat(this.tip, "</span>");
      }
      /* Method to dispatch events */

    }, {
      key: "dispatchCustomEvent",
      value: function dispatchCustomEvent(eventName) {
        var OriginalCustomEvent = new CustomEvent(eventName, {
          bubbles: true,
          cancelable: true
        });
        OriginalCustomEvent.relatedTarget = this;
        this.dispatchEvent(OriginalCustomEvent);
        this.removeEventListener(eventName, this);
      }
    }], [{
      key: "observedAttributes",
      get:
      /* Attributes to monitor */
      function get() {
        return ['type', 'label', 'tip', 'text', 'position'];
      }
    }]);

    return _class;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
})();

},{}]},{},[1]);
