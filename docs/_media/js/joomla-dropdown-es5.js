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

var JoomlaDropdownElement = function (_HTMLElement) {
  _inherits(JoomlaDropdownElement, _HTMLElement);

  function JoomlaDropdownElement() {
    _classCallCheck(this, JoomlaDropdownElement);

    return _possibleConstructorReturn(this, (JoomlaDropdownElement.__proto__ || Object.getPrototypeOf(JoomlaDropdownElement)).apply(this, arguments));
  }

  _createClass(JoomlaDropdownElement, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.setAttribute('aria-labelledby', this.for.substring(1));
      var button = document.querySelector(this.for);
      var innerLinks = this.querySelectorAll('a');
      var self = this;

      if (!button.id) return;
      // var children = [].slice.call( menu[getElementsByTagName]('*'));
      // this.classList.add('dropdown');

      button.setAttribute('aria-haspopup', 'true');
      button.setAttribute('aria-expanded', 'false');

      button.addEventListener('click', function (ev) {
        if (self.hasAttribute('expanded')) {
          self.removeAttribute('expanded');
          ev.target.setAttribute('aria-expanded', 'false');
        } else {
          self.setAttribute('expanded', '');
          ev.target.setAttribute('aria-expanded', 'true');
        }

        document.addEventListener('click', function (evt) {
          if (evt.target !== button) {
            if (!self.findAncestor(evt.target, 'joomla-dropdown')) {
              self.close();
            }
          }
        });

        innerLinks.forEach(function (innerLink) {
          innerLink.addEventListener('click', function () {
            self.close();
          });
        });
      });
    }

    /*eslint-disable */

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
    key: 'close',
    value: function close() {
      var button = document.querySelector('#' + this.getAttribute('aria-labelledby'));
      this.removeAttribute('expanded');
      button.setAttribute('aria-expanded', 'false');
    }

    /* eslint-disable */

  }, {
    key: 'findAncestor',
    value: function findAncestor(el, tagName) {
      while ((el = el.parentElement) && el.nodeName.toLowerCase() !== tagName) {}
      return el;
    }
    /* eslint-enable */

  }, {
    key: 'for',
    get: function get() {
      return this.getAttribute('for');
    },
    set: function set(value) {
      return this.setAttribute('for', value);
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['for'];
    }
  }]);

  return JoomlaDropdownElement;
}(HTMLElement);

customElements.define('joomla-dropdown', JoomlaDropdownElement);

},{}]},{},[1]);
