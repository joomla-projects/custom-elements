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

var JoomlaTipElement = function (_HTMLElement) {
  _inherits(JoomlaTipElement, _HTMLElement);

  function JoomlaTipElement() {
    _classCallCheck(this, JoomlaTipElement);

    return _possibleConstructorReturn(this, (JoomlaTipElement.__proto__ || Object.getPrototypeOf(JoomlaTipElement)).apply(this, arguments));
  }

  _createClass(JoomlaTipElement, [{
    key: 'connectedCallback',

    /* Lifecycle, element appended to the DOM */
    value: function connectedCallback() {
      if (!this.position || this.position && ['top', 'bottom', 'left', 'right'].indexOf(this.position) === -1) {
        this.position = 'top';
      }

      // create the html
      this.btnElement = document.createElement('button');
      this.spanElement = document.createElement('span');

      this.btnElement.setAttribute('aria-label', this.label ? this.label : 'more info');
      this.btnElement.innerHTML = this.text ? this.text : '';
      this.spanElement.setAttribute('role', 'status');

      // On click
      this.btnElement.addEventListener('click', this.showTip.bind(this));

      this.append(this.btnElement);
      this.append(this.spanElement);
    }

    /* Lifecycle, element removed from the DOM */

  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      this.querySelector('button').removeEventListener('click', this.showTip, true);
    }
  }, {
    key: 'showTip',
    value: function showTip() {
      var _this2 = this;

      var self = this;

      // Close on outside click
      document.addEventListener('click', function (e) {
        if (_this2.btnElement !== e.target) {
          _this2.spanElement.innerHTML = '';
          self.removeEventListener('keydown', _this2);
        }
      });

      // Remove toggletip on ESC
      document.addEventListener('keydown', function (e) {
        if ((e.keyCode || e.which) === 9) {
          _this2.spanElement.innerHTML = '';
          self.removeEventListener('keydown', _this2);
        }
      });

      this.spanElement.innerHTML = '';
      this.spanElement.innerHTML = '<span class="toggletip-bubble ' + this.position + '">' + this.tip + '</span>';
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
  }, {
    key: 'type',
    get: function get() {
      return this.getAttribute('type');
    },
    set: function set(value) {
      return this.setAttribute('type', value);
    }
  }, {
    key: 'label',
    get: function get() {
      return this.getAttribute('label');
    },
    set: function set(value) {
      return this.setAttribute('label', value);
    }
  }, {
    key: 'tip',
    get: function get() {
      return this.getAttribute('tip');
    },
    set: function set(value) {
      return this.setAttribute('tip', value);
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
    key: 'text',
    get: function get() {
      return this.getAttribute('text');
    },
    set: function set(value) {
      return this.getAttribute('text', value);
    }
  }], [{
    key: 'observedAttributes',

    /* Attributes to monitor */
    get: function get() {
      return ['type', 'label', 'tip', 'text', 'position'];
    }
  }]);

  return JoomlaTipElement;
}(HTMLElement);

customElements.define('joomla-tip', JoomlaTipElement);

},{}]},{},[1]);
