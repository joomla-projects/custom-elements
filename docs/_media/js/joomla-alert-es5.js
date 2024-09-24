function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var AlertElement = /*#__PURE__*/function (_HTMLElement) {
  function AlertElement() {
    var _this;
    _classCallCheck(this, AlertElement);
    _this = _callSuper(this, AlertElement);

    // Bindings
    _this.close = _this.close.bind(_this);
    _this.destroyCloseButton = _this.destroyCloseButton.bind(_this);
    _this.createCloseButton = _this.createCloseButton.bind(_this);
    _this.onMutation = _this.onMutation.bind(_this);
    _this.observer = new MutationObserver(_this.onMutation);
    _this.observer.observe(_this, {
      attributes: false,
      childList: true,
      subtree: true
    });

    // Handle the fade in animation
    _this.addEventListener('animationend', function (event) {
      if (event.animationName === 'joomla-alert-fade-in' && event.target === _this) {
        _this.dispatchEvent(new CustomEvent('joomla.alert.shown'));
        _this.style.removeProperty('animationName');
      }
    });

    // Handle the fade out animation
    _this.addEventListener('animationend', function (event) {
      if (event.animationName === 'joomla-alert-fade-out' && event.target === _this) {
        _this.dispatchEvent(new CustomEvent('joomla.alert.closed'));
        _this.remove();
      }
    });
    return _this;
  }

  /* Attributes to monitor */
  _inherits(AlertElement, _HTMLElement);
  return _createClass(AlertElement, [{
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
      this.style.animationName = 'joomla-alert-fade-in';

      // Default to info
      if (!this.type || !['info', 'warning', 'danger', 'success'].includes(this.type)) {
        this.setAttribute('type', 'info');
      }
      // Default to alert
      if (!this.role || !['alert', 'alertdialog'].includes(this.role)) {
        this.setAttribute('role', 'alert');
      }

      // Hydrate the button
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
      }

      // Append button
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
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
if (!customElements.get('joomla-alert')) {
  customElements.define('joomla-alert', AlertElement);
}
