(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var JoomlaAlertElement = function (_HTMLElement) {
  _inherits(JoomlaAlertElement, _HTMLElement);

  _createClass(JoomlaAlertElement, [{
    key: 'type',
    get: function get() {
      return this.getAttribute('type');
    },
    set: function set(value) {
      return this.setAttribute('type', value);
    }
  }, {
    key: 'dismiss',
    get: function get() {
      return this.getAttribute('dismiss');
    },
    set: function set(value) {
      return this.setAttribute('dismiss', value);
    }
  }, {
    key: 'autoDismiss',
    get: function get() {
      return parseInt(this.getAttribute('auto-dismiss'), 10);
    },
    set: function set(value) {
      return this.setAttribute('auto-dismiss', parseInt(value, 10));
    }
  }, {
    key: 'position',
    get: function get() {
      return this.getAttribute('position');
    },
    set: function set(value) {
      return this.setAttribute('position', value);
    }
  }, {
    key: 'textClose',
    get: function get() {
      return this.getAttribute('textClose') || 'Close';
    },
    set: function set(value) {
      return this.setAttribute('textClose', value);
    }
  }], [{
    key: 'observedAttributes',

    /* Attributes to monitor */
    get: function get() {
      return ['type', 'dismiss', 'auto-dismiss', 'position', 'textClose'];
    }
  }]);

  function JoomlaAlertElement() {
    _classCallCheck(this, JoomlaAlertElement);

    // Bind some functions
    var _this = _possibleConstructorReturn(this, (JoomlaAlertElement.__proto__ || Object.getPrototypeOf(JoomlaAlertElement)).call(this));
    // We are extending HTMLElement


    _this.close = _this.close.bind(_this);
    _this.appendCloseButton = _this.appendCloseButton.bind(_this);
    _this.removeCloseButton = _this.removeCloseButton.bind(_this);
    return _this;
  }

  /* Lifecycle, element appended to the DOM */

  _createClass(JoomlaAlertElement, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      // Trigger show event
      this.dispatchCustomEvent('joomla.alert.show');
      this.setAttribute('role', 'alert');
      this.classList.add('joomla-alert--show');

      // If no type has been defined, the default as "info"
      if (!this.type || this.type && ['info', 'warning', 'success', 'danger'].indexOf(this.type) === -1) {
        this.setAttribute('type', 'info');
      }

      // Append button
      if (this.hasAttribute('dismiss')) {
        if (!this.querySelector('button.joomla-alert--close')) {
          this.appendCloseButton.bind(this)();
        }
      }

      // Trigger shown event
      this.dispatchCustomEvent('joomla.alert.show');

      if (this.closeButton) {
        this.closeButton.focus();
      }
    }

    /* Lifecycle, element removed from the DOM */

  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      if (this.firstChild.tagName && this.firstChild.tagName.toLowerCase() === 'button') {
        this.firstChild.removeEventListener('click', this.close);
      }
    }

    /* Respond to attribute changes */

  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(attr, oldValue, newValue) {
      switch (attr) {
        case 'type':
          if (!newValue || ['info', 'warning', 'success', 'danger'].indexOf(newValue) === -1) {
            this.type = 'info';
          }
          break;
        case 'dismiss':
          if (!newValue || newValue === 'true') {
            if (this.firstElementChild.tagName && this.firstElementChild.tagName.toLowerCase() !== 'button') {
              this.appendCloseButton.bind(this)();
            }
          } else if (this.firstElementChild.tagName && this.firstElementChild.tagName.toLowerCase() === 'button') {
            this.removeCloseButton.bind(this)();
          }
          break;
        case 'auto-dismiss':
          if (!newValue || newValue === '') {
            this.removeAttribute('auto-dismiss');
          }
          break;
        default:
          break;
      }
    }

    /* Method to close the alert */

  }, {
    key: 'close',
    value: function close() {
      var _this2 = this;

      this.dispatchCustomEvent('joomla.alert.close');
      this.addEventListener('transitionend', function () {
        _this2.dispatchCustomEvent('joomla.alert.closed');
        _this2.parentNode.removeChild(_this2);
      });
      this.classList.remove('joomla-alert--show');
    }

    /* Method to dispatch events */

  }, {
    key: 'dispatchCustomEvent',
    value: function dispatchCustomEvent(eventName) {
      var OriginalCustomEvent = new CustomEvent(eventName, { bubbles: true, cancelable: true });
      OriginalCustomEvent.relatedTarget = this;
      this.dispatchEvent(OriginalCustomEvent);
      this.removeEventListener(eventName, this);
    }

    /* Method to create the close button */

  }, {
    key: 'appendCloseButton',
    value: function appendCloseButton() {
      if (this.querySelector('button.joomla-alert--close') || this.querySelector('button.joomla-alert-button--close')) {
        return;
      }

      var closeButton = document.createElement('button');

      closeButton.classList.add('joomla-alert--close');
      closeButton.setAttribute('aria-label', this.this.textClose);
      this.closeButton = closeButton;

      if (this.firstChild) {
        this.insertBefore(closeButton, this.firstChild);
      } else {
        this.appendChild(closeButton);
      }

      /* Add the required listener */
      if (closeButton) {
        closeButton.addEventListener('click', this.close.bind(this));
      }

      if (this.autoDismiss > 0) {
        var self = this;
        var timeout = this.autoDismiss;
        setTimeout(function () {
          self.dispatchCustomEvent('joomla.alert.buttonClicked');
          if (self.href) {
            window.location.href = self.href;
          }
          self.close();
        }, timeout);
      }
    }

    /* Method to remove the close button */

  }, {
    key: 'removeCloseButton',
    value: function removeCloseButton() {
      if (this.closeButton) {
        this.closeButton.removeEventListener('click', this.buttonCloseFn);
        this.closeButton.parentNode.removeChild(this.closeButton);
      }
    }
  }]);

  return JoomlaAlertElement;
}(HTMLElement);

customElements.define('joomla-alert', JoomlaAlertElement);

},{}]},{},[1]);
