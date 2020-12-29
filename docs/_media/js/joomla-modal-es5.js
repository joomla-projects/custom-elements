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

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
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

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
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

(function () {
  // Keycodes
  var KEYCODE = {
    TAB: 9,
    ESC: 27
  };
  customElements.define('joomla-modal', /*#__PURE__*/function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    var _super = _createSuper(_class);

    function _class() {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this);
      _this.triggerBtn = '';
      _this.focusableElements = null;
      _this.focusableSelectors = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];
      _this.container = _this.querySelector('.joomla-modal-dialog');
      return _this;
    }

    _createClass(_class, [{
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
        this.setAttribute('tabindex', -1); // Unique Id

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
        this.removeAttribute('aria-hidden'); // Iframe specific code, reload

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
        } // Adjust the dimensions


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
        this.evDocumentClose = this.documentClose.bind(this); // Keyboard handling

        this.addEventListener('keydown', this.evKeypress); // Close on click outside the modal

        document.addEventListener('click', this.evDocumentClose); // Is there a close button?

        var modalButtons = [].slice.call(this.querySelectorAll('[data-dismiss]')); // Add listeners for close

        modalButtons.forEach(function (modalButton) {
          modalButton.addEventListener('click', _this2.evClose);
        });
      }
    }, {
      key: "close",
      value: function close() {
        var _this3 = this;

        this.removeEventListener('keydown', this.evKeypress);
        document.removeEventListener('click', this.evDocumentClose); // Is there a close button?

        var modalButtons = [].slice.call(this.querySelectorAll('[data-dismiss]')); // Add listeners for close

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
        } // TAB key


        if (e.keyCode === KEYCODE.TAB) {
          // this.handleTabEvent(e);
          // Get the index of the current active element within the modal
          var focusedIndex = this.focusableElements.indexOf(document.activeElement); // Handle TAB event if need to skip
          // If first element is focused and shift key is in use

          if (e.shiftKey && (focusedIndex === 0 || focusedIndex === -1)) {
            // Focus last item within modal
            this.focusableElements[this.focusableElements.length - 1].focus();
            e.preventDefault();
          } // If last element is focused and shift key is not in use


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
        while ((el = el.parentElement) && !el.classList.contains(className)) {
        }

        return el;
      }
      /* eslint-enable */

    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['width', 'height', 'innerWidth', 'innerHeight', 'iframe'];
      }
    }]);

    return _class;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
})();
//# sourceMappingURL=joomla-modal-es5.js.map
