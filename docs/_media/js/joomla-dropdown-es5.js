(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
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

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
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
  var JoomlaDropdownElement =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(JoomlaDropdownElement, _HTMLElement);

    function JoomlaDropdownElement() {
      _classCallCheck(this, JoomlaDropdownElement);

      return _possibleConstructorReturn(this, _getPrototypeOf(JoomlaDropdownElement).apply(this, arguments));
    }

    _createClass(JoomlaDropdownElement, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this = this;

        this.setAttribute('aria-labelledby', this.for.substring(1));
        var button = document.querySelector(this.for);
        var innerLinks = this.querySelectorAll('a');

        if (!button.id) {
          return;
        } // var children = [].slice.call( menu[getElementsByTagName]('*'));
        // this.classList.add('dropdown');


        button.setAttribute('aria-haspopup', true);
        button.setAttribute('aria-expanded', false);
        button.addEventListener('click', function (event) {
          if (_this.hasAttribute('expanded')) {
            _this.removeAttribute('expanded');

            event.target.setAttribute('aria-expanded', false);
          } else {
            _this.setAttribute('expanded', '');

            event.target.setAttribute('aria-expanded', true);
          }

          document.addEventListener('click', function (evt) {
            if (evt.target !== button) {
              if (!_this.findAncestor(evt.target, 'joomla-dropdown')) {
                _this.close();
              }
            }
          });
          innerLinks.forEach(function (innerLink) {
            innerLink.addEventListener('click', function () {
              _this.close();
            });
          });
        });
      }
      /*eslint-disable */

      /* Method to dispatch events */

    }, {
      key: "dispatchCustomEvent",
      value: function dispatchCustomEvent(eventName) {
        var OriginalCustomEvent = new CustomEvent(eventName);
        OriginalCustomEvent.relatedTarget = this;
        this.dispatchEvent(OriginalCustomEvent);
        this.removeEventListener(eventName, this);
      }
    }, {
      key: "adoptedCallback",
      value: function adoptedCallback(oldDocument, newDocument) {}
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr) {}
      }
      /* eslint-enable */

    }, {
      key: "close",
      value: function close() {
        var button = document.querySelector("#".concat(this.getAttribute('aria-labelledby')));
        this.removeAttribute('expanded');
        button.setAttribute('aria-expanded', false);
      }
      /* eslint-disable */

    }, {
      key: "findAncestor",
      value: function findAncestor(el, tagName) {
        while ((el = el.parentElement) && el.nodeName.toLowerCase() !== tagName) {
          ;
        }

        return el;
      }
      /* eslint-enable */

    }, {
      key: "for",
      get: function get() {
        return this.getAttribute('for');
      },
      set: function set(value) {
        return this.setAttribute('for', value);
      }
    }], [{
      key: "observedAttributes",

      /* Attributes to monitor */
      get: function get() {
        return ['for'];
      }
    }]);

    return JoomlaDropdownElement;
  }(_wrapNativeSuper(HTMLElement));

  customElements.define('joomla-dropdown', JoomlaDropdownElement);
})();

},{}]},{},[1]);
