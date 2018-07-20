(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

(function () {
  var JoomlaAlert = function (_HTMLElement) {
    _inherits(JoomlaAlert, _HTMLElement);

    _createClass(JoomlaAlert, [{
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
        return this.setAttribute('type', value);
      }
    }, {
      key: 'title',
      get: function get() {
        return this.getAttribute('title');
      },
      set: function set(value) {
        return this.setAttribute('title', value);
      }
    }, {
      key: 'message',
      get: function get() {
        return this.getAttribute('message');
      },
      set: function set(value) {
        return this.setAttribute('message', value);
      }
    }, {
      key: 'buttonText',
      get: function get() {
        return this.getAttribute('button-text');
      },
      set: function set(value) {
        return this.setAttribute('button-text', value);
      }
    }], [{
      key: 'observedAttributes',

      /* Attributes to monitor */
      get: function get() {
        return ['type', 'dismiss', 'title', 'message', 'show', 'button-text'];
      }
    }]);

    function JoomlaAlert() {
      _classCallCheck(this, JoomlaAlert);

      var _this = _possibleConstructorReturn(this, (JoomlaAlert.__proto__ || Object.getPrototypeOf(JoomlaAlert)).call(this));

      _this.header = '';
      _this.messageContainer = '';
      _this.hasDismissButton = false;
      _this.closeButton = '';

      _this.dispatchCustomEvent = _this.dispatchCustomEvent.bind(_this);
      _this.appendCloseButton = _this.appendCloseButton.bind(_this);
      _this.removeCloseButton = _this.removeCloseButton.bind(_this);
      _this.render = _this.render.bind(_this);
      _this.close = _this.close.bind(_this);
      _this.callback = _this.callback.bind(_this);
      _this.init = _this.init.bind(_this);

      // Create an observer instance linked to the callback function
      _this.observer = new MutationObserver(_this.callback);
      return _this;
    }
    /* Lifecycle, element appended to the DOM */

    _createClass(JoomlaAlert, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        // Start observing the target node for configured mutations
        this.observer.observe(this, { attributes: true, childList: true, subtree: true });

        this.setAttribute('role', 'alert');

        // Default to info
        if (!this.type || ['info', 'warning', 'danger', 'success'].indexOf(this.type) === -1) {
          this.setAttribute('type', 'info');
        }

        if (this.querySelector('h4') && this.querySelector('div')) {
          this.init();
        }
      }

      /* Lifecycle, element removed from the DOM */

    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        if (this.closeButton) {
          this.closeButton.removeEventListener('click', this.close);
        }

        this.observer.disconnect();
      }

      /* Respond to attribute changes */

    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr) {
          case 'type':
            if (!newValue || newValue && ['info', 'warning', 'danger', 'success'].indexOf(newValue) === -1) {
              this.type = 'info';
            }
            break;
          case 'dismiss':
          case 'title':
          case 'message':
          case 'button-text':
            this.render();
            break;
          default:
            break;
        }
      }

      /* Method to dispatch events */

    }, {
      key: 'dispatchCustomEvent',
      value: function dispatchCustomEvent(eventName) {
        var OriginalCustomEvent = new CustomEvent(eventName);
        this.dispatchEvent(OriginalCustomEvent);
        this.removeEventListener(eventName, OriginalCustomEvent);
      }

      /* Method to close the alert */

    }, {
      key: 'close',
      value: function close() {
        this.dispatchCustomEvent('Joomla.Alert.onClose');
        this.removeAttribute('show');
        this.parentNode.removeChild(this);
      }

      /* Method to create the close button */

    }, {
      key: 'appendCloseButton',
      value: function appendCloseButton() {
        this.closeButton = this.querySelector('button');

        if (this.closeButton) {
          this.closeButton.setAttribute('aria-label', this.buttonText || 'Close');
          this.closeButton.addEventListener('click', this.close);
          this.closeButton.focus();
          return;
        }

        this.closeButton = document.createElement('button');
        var span = document.createElement('span');
        span.setAttribute('aria-hidden', 'true');
        span.innerHTML = '&times;';
        this.closeButton.setAttribute('aria-label', this.buttonText || 'Close');
        this.closeButton.appendChild(span);

        this.insertAdjacentElement('afterbegin', this.closeButton);
        this.closeButton.addEventListener('click', this.close);
        this.closeButton.focus();
      }

      /* Method to remove the close button */

    }, {
      key: 'removeCloseButton',
      value: function removeCloseButton() {
        if (this.closeButton) {
          this.closeButton.removeEventListener('click', this.close);
          this.removeChild(this.closeButton);
        }
      }

      // Callback function to execute when mutations are observed

    }, {
      key: 'callback',
      value: function callback(mutationsList) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = mutationsList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var mutation = _step.value;

            if (mutation.type === 'childList') {
              this.init();
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }, {
      key: 'init',
      value: function init() {
        if (this.header) {
          this.title = this.header.innerText;
        }

        if (this.messageContainer) {
          this.message = this.messageContainer.innerHTML;
        }

        this.render();

        this.dispatchCustomEvent('Joomla.Alert.onShow');
      }
    }, {
      key: 'render',
      value: function render() {
        if (this.title) {
          if (!this.header) {
            this.header = document.createElement('h4');
            this.header.innerText = this.title;
            this.appendChild(this.header);
          }
          this.header.innerText = this.title;
        }

        if (this.message) {
          if (!this.messageContainer) {
            this.messageContainer = document.createElement('div');
            this.messageContainer.innerHTML = this.message;
            this.appendChild(this.messageContainer);
          }
          this.messageContainer.innerHTML = this.message;
        }

        if (this.hasAttribute('dismiss') || this.dismiss && this.dismiss !== 'false') {
          this.appendCloseButton();
        } else {
          this.removeCloseButton();
        }
      }
    }]);

    return JoomlaAlert;
  }(HTMLElement);

  customElements.define('joomla-alert', JoomlaAlert);
})();

},{}]},{},[1]);
