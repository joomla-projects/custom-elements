function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AlertElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(AlertElement, _HTMLElement);

  var _super = _createSuper(AlertElement);

  function AlertElement() {
    var _this;

    _classCallCheck(this, AlertElement);

    _this = _super.call(this); // Bindings

    _this.close = _this.close.bind(_assertThisInitialized(_this));
    _this.destroyCloseButton = _this.destroyCloseButton.bind(_assertThisInitialized(_this));
    _this.createCloseButton = _this.createCloseButton.bind(_assertThisInitialized(_this));
    _this.onMutation = _this.onMutation.bind(_assertThisInitialized(_this));
    _this.observer = new MutationObserver(_this.onMutation);

    _this.observer.observe(_assertThisInitialized(_this), {
      attributes: false,
      childList: true,
      subtree: true
    }); // Handle the fade in animation


    _this.addEventListener('animationend', function (event) {
      if (event.animationName === 'joomla-alert-fade-in' && event.target === _assertThisInitialized(_this)) {
        _this.dispatchEvent(new CustomEvent('joomla.alert.shown'));

        _this.style.removeProperty('animationName');
      }
    }); // Handle the fade out animation


    _this.addEventListener('animationend', function (event) {
      if (event.animationName === 'joomla-alert-fade-out' && event.target === _assertThisInitialized(_this)) {
        _this.dispatchEvent(new CustomEvent('joomla.alert.closed'));

        _this.remove();
      }
    });

    return _this;
  }
  /* Attributes to monitor */


  _createClass(AlertElement, [{
    key: "type",
    get: function get() {
      return this.getAttribute('type');
    },
    set: function set(value) {
      this.setAttribute('type', value);
    }
  }, {
    key: "role",
    get: function get() {
      return this.getAttribute('role');
    },
    set: function set(value) {
      this.setAttribute('role', value);
    }
  }, {
    key: "closeText",
    get: function get() {
      return this.getAttribute('close-text');
    },
    set: function set(value) {
      this.setAttribute('close-text', value);
    }
  }, {
    key: "dismiss",
    get: function get() {
      return this.getAttribute('dismiss');
    },
    set: function set(value) {
      this.setAttribute('dismiss', value);
    }
  }, {
    key: "autodismiss",
    get: function get() {
      return this.getAttribute('auto-dismiss');
    },
    set: function set(value) {
      this.setAttribute('auto-dismiss', value);
    }
    /* Lifecycle, element appended to the DOM */

  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.dispatchEvent(new CustomEvent('joomla.alert.show'));
      this.style.animationName = 'joomla-alert-fade-in'; // Default to info

      if (!this.type || !['info', 'warning', 'danger', 'success'].includes(this.type)) {
        this.setAttribute('type', 'info');
      } // Default to alert


      if (!this.role || !['alert', 'alertdialog'].includes(this.role)) {
        this.setAttribute('role', 'alert');
      } // Hydrate the button


      if (this.firstElementChild && this.firstElementChild.tagName === 'BUTTON') {
        this.button = this.firstElementChild;

        if (this.button.classList.contains('joomla-alert--close')) {
          this.button.classList.add('joomla-alert--close');
        }

        if (this.button.innerHTML === '') {
          this.button.innerHTML = '<span aria-hidden="true">&times;</span>';
        }

        if (!this.button.hasAttribute('aria-label')) {
          this.button.setAttribute('aria-label', this.closeText);
        }
      } // Append button


      if (this.hasAttribute('dismiss') && !this.button) {
        this.createCloseButton();
      }

      if (this.hasAttribute('auto-dismiss')) {
        this.autoDismiss();
      }
    }
    /* Lifecycle, element removed from the DOM */

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.button) {
        this.button.removeEventListener('click', this.close);
      }

      this.observer.disconnect();
    }
    /* Respond to attribute changes */

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attr, oldValue, newValue) {
      switch (attr) {
        case 'type':
          if (!newValue || newValue && ['info', 'warning', 'danger', 'success'].indexOf(newValue) === -1) {
            this.type = 'info';
          }

          break;

        case 'role':
          if (!newValue || newValue && ['alert', 'alertdialog'].indexOf(newValue) === -1) {
            this.role = 'alert';
          }

          break;

        case 'dismiss':
          if ((!newValue || newValue === '') && (!oldValue || oldValue === '')) {
            if (this.button && !this.hasAttribute('dismiss')) {
              this.destroyCloseButton();
            } else if (!this.button && this.hasAttribute('dismiss')) {
              this.createCloseButton();
            }
          } else if (this.button && newValue === 'false') {
            this.destroyCloseButton();
          } else if (!this.button && newValue !== 'false') {
            this.createCloseButton();
          }

          break;

        case 'close-text':
          if (!newValue || newValue !== oldValue) {
            if (this.button) {
              this.button.setAttribute('aria-label', newValue);
            }
          }

          break;

        case 'auto-dismiss':
          this.autoDismiss();
          break;
      }
    }
    /* Observe added elements */

  }, {
    key: "onMutation",
    value: function onMutation(mutationsList) {
      // eslint-disable-next-line no-restricted-syntax
      var _iterator = _createForOfIteratorHelper(mutationsList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mutation = _step.value;

          if (mutation.type === 'childList') {
            if (mutation.addedNodes.length) {
              // Make sure that the button is always the first element
              if (this.button && this.firstElementChild !== this.button) {
                this.prepend(this.button);
              }
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /* Method to close the alert */

  }, {
    key: "close",
    value: function close() {
      this.dispatchEvent(new CustomEvent('joomla.alert.close'));
      this.style.animationName = 'joomla-alert-fade-out';
    }
    /* Method to create the close button */

  }, {
    key: "createCloseButton",
    value: function createCloseButton() {
      this.button = document.createElement('button');
      this.button.setAttribute('type', 'button');
      this.button.classList.add('joomla-alert--close');
      this.button.innerHTML = '<span aria-hidden="true">&times;</span>';
      this.button.setAttribute('aria-label', this.closeText);
      this.insertAdjacentElement('afterbegin', this.button);
      /* Add the required listener */

      this.button.addEventListener('click', this.close);
    }
    /* Method to remove the close button */

  }, {
    key: "destroyCloseButton",
    value: function destroyCloseButton() {
      if (this.button) {
        this.button.removeEventListener('click', this.close);
        this.button.parentNode.removeChild(this.button);
        this.button = null;
      }
    }
    /* Method to auto-dismiss */

  }, {
    key: "autoDismiss",
    value: function autoDismiss() {
      var timer = parseInt(this.getAttribute('auto-dismiss'), 10);
      setTimeout(this.close, timer >= 10 ? timer : 3000);
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['type', 'role', 'dismiss', 'auto-dismiss', 'close-text'];
    }
  }]);

  return AlertElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

if (!customElements.get('joomla-alert')) {
  customElements.define('joomla-alert', AlertElement);
}
