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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
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
  var JoomlaAccordionElement =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(JoomlaAccordionElement, _HTMLElement);

    _createClass(JoomlaAccordionElement, [{
      key: "toggle",
      get: function get() {
        return this.getAttribute('toggle');
      }
      /* Lifecycle, element created */

    }], [{
      key: "observedAttributes",

      /* Attributes to monitor */
      get: function get() {
        return ['toggle'];
      }
    }]);

    function JoomlaAccordionElement() {
      var _this;

      _classCallCheck(this, JoomlaAccordionElement);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(JoomlaAccordionElement).call(this));
      _this.hasActive = false;
      _this.currentActive = '';
      _this.hasNested = false;
      _this.isNested = false;
      return _this;
    }
    /* Lifecycle, element appended to the DOM */


    _createClass(JoomlaAccordionElement, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.sections = _toConsumableArray(this.querySelectorAll('section'));
        this.generateNavigation(this.sections);
      }
    }, {
      key: "generateNavigation",
      value: function generateNavigation(sections) {
        var _this2 = this;

        sections.forEach(function (section, index) {
          var accordionTitle = document.createElement('h3');
          accordionTitle.setAttribute('area-expanded', 'false');
          accordionTitle.innerHTML = '<span aria-hidden="true">&gt;</span>';
          accordionTitle.setAttribute('target', section.id);

          if (section.classList.contains('show')) {
            accordionTitle.classList.add('active');
          }

          var title = section.getAttribute('name') || "Accordion ".concat(index);
          var navTitle = document.createTextNode(title);
          accordionTitle.appendChild(navTitle);

          _this2.insertBefore(accordionTitle, section);

          accordionTitle.addEventListener('click', _this2.activateAccordionFromButton.bind(_this2, accordionTitle));
        });
      }
    }, {
      key: "activateAccordionFromButton",
      value: function activateAccordionFromButton(accordionTitle, e) {
        var target = accordionTitle;
        var section = target.nextSibling;
        var toggle = this.getAttribute('toggle');

        if (toggle === 'false') {
          target.classList.toggle('active');

          if (section.classList.contains('show')) {
            section.classList.remove('show');
            target.setAttribute('area-expanded', 'false');
          } else {
            section.classList.add('show');
            target.setAttribute('area-expanded', 'true');
          }
        } else {
          // eslint-disable-next-line no-lonely-if
          if (target.classList.contains('active')) {
            target.classList.remove('active');
            section.classList.remove('show');
            target.setAttribute('area-expanded', 'false');
          } else {
            this.sections.forEach(function (s) {
              if (s.previousSibling.classList.contains('active')) {
                s.previousSibling.classList.remove('active');
              }

              s.classList.remove('show');
            });
            target.classList.add('active');
            section.classList.add('show');
            target.setAttribute('area-expanded', 'true');
          }
        }
      }
    }]);

    return JoomlaAccordionElement;
  }(_wrapNativeSuper(HTMLElement));

  customElements.define('joomla-accordion', JoomlaAccordionElement);
})();

},{}]},{},[1]);
