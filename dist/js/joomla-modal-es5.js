function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
// Keycodes
var KEYCODE = {
  TAB: 9,
  ESC: 27
};
customElements.define('joomla-modal', /*#__PURE__*/function (_HTMLElement) {
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class);
    _this.triggerBtn = '';
    _this.focusableElements = null;
    _this.focusableSelectors = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];
    _this.container = _this.querySelector('.joomla-modal-dialog');
    return _this;
  }
  _inherits(_class, _HTMLElement);
  return _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (!this.id) {
        throw new Error('`Joomla-modal` requires an id');
      }
      this.title = this.getAttribute('title') || 'Modal';
      this.setAttribute('role', 'dialog');
      this.classList.add('fade');
      this.iframe = this.getAttribute('iframe') || '';
      this.width = this.getAttribute('width') || '100%';
      this.height = this.getAttribute('height') || '600px';
      if (!this.container) {
        var cont = document.createElement('div');
        cont.classList.add('joomla-modal-dialog');
        cont.setAttribute('role', 'document');
        cont.innerHTML = this.innerHTML;
        this.innerHTML = '';
        this.appendChild(cont);
        this.container = this.querySelector('.joomla-modal-dialog');
      }
      this.header = this.querySelector('header');
      this.main = this.querySelector('section');
      this.footer = this.querySelector('footer');
      this.setAttribute('tabindex', -1);

      // Unique Id
      var randomId = "modal-title-".concat(new Date().getUTCMilliseconds());
      this.setAttribute('aria-labelledby', randomId);
      if (!this.header) {
        var htag = document.createElement('h5');
        htag.innerText = this.title;
        htag.id = randomId;
        var closeButton = document.createElement('button');
        closeButton.setAttribute('aria-label', 'Close');
        closeButton.setAttribute('data-dismiss', '');
        closeButton.innerHTML = '<span aria-hidden="true">×</span>';
        var header = document.createElement('header');
        header.appendChild(htag);
        header.appendChild(closeButton);
        this.container.insertAdjacentElement('afterbegin', header);
      }
      this.header = this.container.querySelector('header');
      this.body = this.container.querySelector('section');
      this.footer = this.container.querySelector('footer');
      this.triggerBtn = document.querySelector("[data-href=\"#".concat(this.id, "\"]"));
      if (this.triggerBtn) {
        this.triggerBtn.addEventListener('click', this.open.bind(this));
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.triggerBtn) {
        this.triggerBtn.removeEventListener('click', this.open);
      }
    }
  }, {
    key: "open",
    value: function open() {
      var _this2 = this;
      var dropShadow = document.createElement('div');
      dropShadow.classList.add('modal-backdrop', 'fade');
      dropShadow.classList.add('modal-backdrop', 'show');
      document.body.appendChild(dropShadow);
      this.removeAttribute('aria-hidden');
      // Iframe specific code, reload
      if (this.body) {
        this.iframeEl = this.main.querySelector('iframe');
        if (this.iframe) {
          if (this.iframeEl) {
            this.iframeEl.parentNode.remove(this.iframeEl);
          }
          var newIframe = document.createElement('iframe');
          newIframe.width = this.width;
          newIframe.height = this.height;
          newIframe.src = this.iframe;
          newIframe.setAttribute('frameborder', 0);
          this.body.appendChild(newIframe);
          this.iframeEl = this.main.querySelector('iframe');
        }
      }

      // Adjust the dimensions
      this.adjustDimensions();
      this.scrollTop = 0;
      this.classList.add('show');
      this.focusableElements = [].slice.call(this.querySelectorAll(this.focusableSelectors.join()));
      if (this.focusableElements.length) {
        this.focusableElements[0].focus();
      } else {
        this.header.querySelector('button').focus();
      }
      this.evKeypress = this.keyPress.bind(this);
      this.evClose = this.close.bind(this);
      this.evDocumentClose = this.documentClose.bind(this);

      // Keyboard handling
      this.addEventListener('keydown', this.evKeypress);

      // Close on click outside the modal
      document.addEventListener('click', this.evDocumentClose);

      // Is there a close button?
      var modalButtons = [].slice.call(this.querySelectorAll('[data-dismiss]'));
      // Add listeners for close
      modalButtons.forEach(function (modalButton) {
        modalButton.addEventListener('click', _this2.evClose);
      });
    }
  }, {
    key: "close",
    value: function close() {
      var _this3 = this;
      this.removeEventListener('keydown', this.evKeypress);
      document.removeEventListener('click', this.evDocumentClose);

      // Is there a close button?
      var modalButtons = [].slice.call(this.querySelectorAll('[data-dismiss]'));
      // Add listeners for close
      modalButtons.forEach(function (modalButton) {
        modalButton.removeEventListener('click', _this3.evClose);
      });
      var dropShadow = document.querySelector('.modal-backdrop');
      if (dropShadow) document.body.removeChild(dropShadow);
      this.setAttribute('aria-hidden', 'true');
      this.classList.remove('show');
      this.main.innerHTML = '';
      this.triggerBtn.focus();
    }
  }, {
    key: "documentClose",
    value: function documentClose(event) {
      if (!this.findAncestorByClass(event.target, 'joomla-modal-dialog') && event.target !== this.triggerBtn) {
        this.close();
      }
    }
  }, {
    key: "keyPress",
    value: function keyPress(e) {
      // ESC key
      if (e.keyCode === KEYCODE.ESC) {
        this.close();
      }
      // TAB key
      if (e.keyCode === KEYCODE.TAB) {
        // this.handleTabEvent(e);
        // Get the index of the current active element within the modal
        var focusedIndex = this.focusableElements.indexOf(document.activeElement);
        // Handle TAB event if need to skip
        // If first element is focused and shift key is in use
        if (e.shiftKey && (focusedIndex === 0 || focusedIndex === -1)) {
          // Focus last item within modal
          this.focusableElements[this.focusableElements.length - 1].focus();
          e.preventDefault();
        }
        // If last element is focused and shift key is not in use
        if (!e.shiftKey && focusedIndex === this.focusableElements.length - 1) {
          // Focus first item within modal
          this.focusableElements[0].focus();
          e.preventDefault();
        }
      }
    }
  }, {
    key: "adjustDimensions",
    value: function adjustDimensions() {
      // Legacy code
      // Height
      var modalHeight = this.offsetHeight;
      modalHeight += parseInt(window.getComputedStyle(this).getPropertyValue('margin-top'), 10);
      modalHeight += parseInt(window.getComputedStyle(this).getPropertyValue('margin-bottom'), 10);
      var bodyHeight = this.body.getBoundingClientRect.height;
      var bodyHeightOuter = this.body.offsetHeight;
      bodyHeightOuter += parseInt(window.getComputedStyle(this.body).getPropertyValue('margin-top'), 10);
      bodyHeightOuter += parseInt(window.getComputedStyle(this.body).getPropertyValue('margin-bottom'), 10);
      var headerHeight = this.header.offsetHeight;
      headerHeight += parseInt(window.getComputedStyle(this.header).getPropertyValue('margin-top'), 10);
      headerHeight += parseInt(window.getComputedStyle(this.header).getPropertyValue('margin-bottom'), 10);
      var footerHeight = this.footer.offsetHeight;
      footerHeight += parseInt(window.getComputedStyle(this.footer).getPropertyValue('margin-top'), 10);
      footerHeight += parseInt(window.getComputedStyle(this.footer).getPropertyValue('margin-bottom'), 10);
      var padding = this.offsetTop;
      var maxModalHeight = window.height - padding * 2;
      var modalBodyPadding = bodyHeightOuter - bodyHeight;
      var maxModalBodyHeight = maxModalHeight - (headerHeight + footerHeight + modalBodyPadding);
      if (this.iframeEl) {
        var iframeHeight = this.iframeEl.getBoundingClientRect().height;
        if (iframeHeight > maxModalBodyHeight) {
          this.container.style.maxHeight = maxModalBodyHeight;
          this.container.style.overflowY = 'auto';
          this.iframeEl.style.maxHeight = maxModalBodyHeight - modalBodyPadding;
        }
      } else if (modalHeight > maxModalHeight) {
        this.container.style.maxHeight = maxModalBodyHeight;
        this.container.style.overflowY = 'auto';
      }
    }

    /* eslint-disable */
  }, {
    key: "findAncestorByClass",
    value: function findAncestorByClass(el, className) {
      while ((el = el.parentElement) && !el.classList.contains(className));
      return el;
    }
    /* eslint-enable */
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['width', 'height', 'innerWidth', 'innerHeight', 'iframe'];
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement)));
