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
/* eslint-disable no-cond-assign */


(function () {
  var JoomlaDropdownElement =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(JoomlaDropdownElement, _HTMLElement);

    function JoomlaDropdownElement() {
      var _this;

      _classCallCheck(this, JoomlaDropdownElement);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(JoomlaDropdownElement).call(this));
      _this.position = 'right';
      _this.checkSubmenu = _this.checkSubmenu.bind(_assertThisInitialized(_this));
      _this.clickOutside = _this.clickOutside.bind(_assertThisInitialized(_this));
      _this.toggleMenu = _this.toggleMenu.bind(_assertThisInitialized(_this));
      return _this;
    }
    /* Attributes to monitor */


    _createClass(JoomlaDropdownElement, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        this.setAttribute('aria-labelledby', this["for"].substring(1));
        this.button = document.querySelector("[data-target=".concat(this["for"], "]"));
        var innerLinks = this.querySelectorAll('a');

        if (!this.button.hasAttribute('data-target')) {
          return;
        }

        this.position = this.getAttribute('position') ? this.getAttribute('position') : this.position; // set the position for submenu items

        innerLinks.forEach(function (link) {
          if (link.parentElement.classList.contains('has-submenu')) {
            link.parentElement.classList.add(_this2.position);
          }
        });
        this.button.setAttribute('aria-haspopup', true);
        this.button.setAttribute('aria-expanded', false);
        this.button.addEventListener('click', this.toggleMenu, true);
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.button.removeEventListener('click', this.toggleMenu, true);
      }
      /**
       * Hide or Show menu when click on target element
       * @param {Object} event
       */

    }, {
      key: "toggleMenu",
      value: function toggleMenu(event) {
        var _this3 = this;

        if (event.target.tagName === 'A') {
          event.preventDefault();
        }

        if (this.hasAttribute('expanded')) {
          this.removeAttribute('expanded');
          event.target.setAttribute('aria-expanded', false);
        } else {
          this.setAttribute('expanded', '');
          event.target.setAttribute('aria-expanded', true);
        }

        this.setPosition();
        document.addEventListener('click', this.clickOutside, true);
        var innerLinks = this.querySelectorAll('a');
        innerLinks.forEach(function (innerLink) {
          innerLink.addEventListener('click', _this3.checkSubmenu, true);
        }); // toggle dropdown onhover

        var lists = this.querySelectorAll('li.has-submenu');
        lists.forEach(function (list) {
          if (list.getAttribute('data-action') !== 'click' && document.body.getBoundingClientRect().width > 1024) {
            list.addEventListener('mouseenter', _this3.showSubmenu, true);
            list.addEventListener('mouseleave', _this3.hideSubmenu, true);
          }
        });
      }
      /**
       * Show sub-menu when trigger on parent link
       * @param {Object} event
       */

    }, {
      key: "showSubmenu",
      value: function showSubmenu(event) {
        event.preventDefault();

        if (document.body.getBoundingClientRect().width > 1024) {
          if (event.target.classList.contains('has-submenu')) {
            event.target.toggleAttribute('open');
          }
        }
      }
      /**
       * Hide sub-menu
       * @param {Obejct} event
       */

    }, {
      key: "hideSubmenu",
      value: function hideSubmenu(event) {
        event.preventDefault();

        if (document.body.getBoundingClientRect().width > 1024) {
          if (event.target.classList.contains('has-submenu') && event.target.hasAttribute('open')) {
            event.target.toggleAttribute('open');
          }
        }
      }
      /**
       * Check if click outside of dropdown
       * If click outside then close dropdown
       * @param {Object} event
       */

    }, {
      key: "clickOutside",
      value: function clickOutside(event) {
        if (this.button.contains(event.target) === false && event.target !== this.button) {
          if (!this.findAncestor(event.target, 'joomla-dropdown')) {
            this.close();
          }
        }
      }
      /**
       * Check if dropdown has sub-menu
       * @param {Object} event
       */

    }, {
      key: "checkSubmenu",
      value: function checkSubmenu(event) {
        // check for drop-down items
        var hasSubmenu = event.target.parentElement.classList.contains('has-submenu');
        var clickable = event.target.parentElement.getAttribute('data-action') === 'click';

        if (hasSubmenu && (clickable || document.body.getBoundingClientRect().width <= 1024)) {
          var allDropdowns = this.querySelectorAll('.has-submenu');
          allDropdowns.forEach(function (dropdown) {
            if (dropdown.hasAttribute('open') && dropdown !== event.target.parentElement) {
              dropdown.toggleAttribute('open');
            }
          });
          event.target.parentElement.toggleAttribute('open');
        } else {
          this.close();
        }
      }
      /**
       * Check if the attribute changed
       * If position change then update the position
       * @param {String} attr
       * @param {String} oldValue
       * @param {String} newValue
       */

    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr) {
          case 'position':
            if (!newValue || newValue === '') {
              this.position = newValue;
              this.setPosition();
            }

            break;

          default:
            break;
        }
      }
      /**
       * Check dropdown position only for left and right
       * If current position not satisfied then move it to oposite
       */

    }, {
      key: "setPosition",
      value: function setPosition() {
        var dropdownRect = this.getBoundingClientRect();
        var button = document.querySelector("[data-target=".concat(this["for"], "]"));
        var buttonRect = button.getBoundingClientRect();

        if (this.position === 'left' && dropdownRect.width + buttonRect.width > dropdownRect.right) {
          this.setAttribute('position', 'left');
        } else if (this.position === 'right' && buttonRect.right + dropdownRect.width > window.innerWidth) {
          this.setAttribute('position', 'right');
        }
      }
      /* Method to dispatch events */

    }, {
      key: "dispatchCustomEvent",
      value: function dispatchCustomEvent(eventName) {
        var OriginalCustomEvent = new CustomEvent(eventName);
        OriginalCustomEvent.relatedTarget = this;
        this.dispatchEvent(OriginalCustomEvent);
        this.removeEventListener(eventName, this);
      }
      /**
       * Close the dropdown
       */

    }, {
      key: "close",
      value: function close() {
        // removing 'open' attribute of dropdown items
        var dropdownItems = document.querySelectorAll('.has-submenu');
        dropdownItems.forEach(function (item) {
          if (item.hasAttribute('open')) {
            item.toggleAttribute('open');
          }
        });
        var button = document.querySelector("[data-target=".concat(this.getAttribute('aria-labelledby'), "]"));
        this.removeAttribute('expanded');
        if (button) button.setAttribute('aria-expanded', false); // remove unnecessary events when dropdown closed

        window.removeEventListener('click', this.checkSubmenu, true);
        document.removeEventListener('click', this.clickOutside, true);
      }
    }, {
      key: "findAncestor",
      value: function findAncestor(el, tagName) {
        // eslint-disable-next-line no-param-reassign
        while ((el = el.parentElement) && el.nodeName.toLowerCase() !== tagName) {
          ;
        }

        return el;
      }
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
      get: function get() {
        return ['for', 'position'];
      }
    }]);

    return JoomlaDropdownElement;
  }(_wrapNativeSuper(HTMLElement));

  customElements.define('joomla-dropdown', JoomlaDropdownElement);
})();

},{}]},{},[1]);
