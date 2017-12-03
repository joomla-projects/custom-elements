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

var JoomlaButtonElement = function (_HTMLElement) {
  _inherits(JoomlaButtonElement, _HTMLElement);

  function JoomlaButtonElement() {
    _classCallCheck(this, JoomlaButtonElement);

    return _possibleConstructorReturn(this, (JoomlaButtonElement.__proto__ || Object.getPrototypeOf(JoomlaButtonElement)).apply(this, arguments));
  }

  _createClass(JoomlaButtonElement, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var _this2 = this;

      var buttons = [].slice.call(this.querySelectorAll('[type="checkbox"]'));
      // Checkboxes
      if (buttons.length) {
        buttons.forEach(function (button) {
          if (button.parentNode.tagName.toLowerCase() !== 'label') {
            return;
          }
          if (button.getAttribute('checked') || button.parentNode.classList.contains('active')) {
            button.setAttribute('checked', '');
            button.parentNode.setAttribute('aria-pressed', 'true');
          } else {
            button.removeAttribute('checked');
            button.parentNode.setAttribute('aria-pressed', 'false');
          }

          button.setAttribute('tabindex', 0);
          button.addEventListener('click', function () {
            if (_this2.checked) {
              _this2.setAttribute('checked', '');
              _this2.parentNode.classList.add('active');
              _this2.parentNode.setAttribute('aria-pressed', 'true');
            } else {
              _this2.removeAttribute('checked');
              _this2.parentNode.classList.remove('active');
              _this2.parentNode.setAttribute('aria-pressed', 'false');
            }
          });
        });
      } else {
        // Radios
        var radios = [].slice.call(this.querySelectorAll('[type="radio"]'));

        if (radios.length) {
          radios.forEach(function (radio) {
            if (radio.parentNode.tagName.toLowerCase() !== 'label') {
              return;
            }
            if (radio.getAttribute('checked') || radio.parentNode.classList.contains('active')) {
              radio.setAttribute('checked', '');
              radio.parentNode.setAttribute('aria-pressed', 'true');
            } else {
              radio.removeAttribute('checked');
              radio.parentNode.setAttribute('aria-pressed', 'false');
            }

            radio.addEventListener('click', function () {
              if (_this2.checked) {
                _this2.parentNode.parentNode.clearAllRadios();
                _this2.setAttribute('checked', '');
                _this2.parentNode.classList.add('active');
                _this2.parentNode.setAttribute('aria-pressed', 'true');
              } else {
                _this2.parentNode.parentNode.clearAllRadios();
                _this2.removeAttribute('checked');
                _this2.parentNode.classList.remove('active');
                _this2.parentNode.setAttribute('aria-pressed', 'false');
              }
            });
          });
        }
      }
    }

    /* eslint-disable */

  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {}
  }, {
    key: 'adoptedCallback',
    value: function adoptedCallback(oldDocument, newDocument) {}
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(attr, oldValue, newValue) {
      switch (attr) {}
    }
    /* eslint-enable */

  }, {
    key: 'clearAllRadios',
    value: function clearAllRadios() {
      var radios = [].slice.call(this.querySelectorAll('[type="radio"]'));
      radios.forEach(function (radio) {
        radio.removeAttribute('checked');
        if (radio.parentNode.tagName.toLowerCase() === 'label') {
          radio.parentNode.classList.remove('active');
          radio.parentNode.setAttribute('aria-pressed', 'false');
        }
      });
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
  }], [{
    key: 'observedAttributes',
    get: function get() {
      // return ['name'];
    }
  }]);

  return JoomlaButtonElement;
}(HTMLElement);

customElements.define('joomla-group-buttons', JoomlaButtonElement);

},{}]},{},[1]);
