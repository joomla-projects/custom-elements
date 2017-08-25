(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function a(a, b) {
    for (var c, d = 0; d < b.length; d++) {
      c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, 'value' in c && (c.writable = !0), Object.defineProperty(a, c.key, c);
    }
  }return function (b, c, d) {
    return c && a(b.prototype, c), d && a(b, d), b;
  };
}();function _classCallCheck(a, b) {
  if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function');
}function _possibleConstructorReturn(a, b) {
  if (!a) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b && ('object' == (typeof b === 'undefined' ? 'undefined' : _typeof(b)) || 'function' == typeof b) ? b : a;
}function _inherits(a, b) {
  if ('function' != typeof b && null !== b) throw new TypeError('Super expression must either be null or a function, not ' + (typeof b === 'undefined' ? 'undefined' : _typeof(b)));a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b);
}var AccordionElement = function (a) {
  function b() {
    _classCallCheck(this, b);var a = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));return a.includeCss(), a;
  }return _inherits(b, a), _createClass(b, [{ key: 'connectedCallback', value: function connectedCallback() {
      var a = this;if (this.innerHTML) {
        this.setAttribute('role', 'tablist'), this.setAttribute('aria-multiselectable', 'true');var b = this.querySelectorAll('section');if (b.length) for (var c, d = function d(c) {
          var d = b[c].querySelector('[data-toggle="collapse"]'),
              e = d.getAttribute('href');if (!e) return 'continue';var f = document.getElementById(e.replace('#', ''));f.classList.contains('show') ? (f.setAttribute('role', 'tabpanel'), d.setAttribute('aria-expanded', 'true')) : (f.setAttribute('role', 'tabpanel'), d.setAttribute('aria-expanded', 'true')), d.addEventListener('click', function (b) {
            b.preventDefault(), b.stopPropagation(), a.resetAll(), b.target.setAttribute('aria-expanded', 'true');var c = b.target.getAttribute('href');document.getElementById(c.replace('#', '')).classList.add('show');
          });
        }, e = 0, f = b.length; e < f; e++) {
          c = d(e, f), 'continue' === c;
        }
      }
    } }, { key: 'disconnectedCallback', value: function disconnectedCallback() {} }, { key: 'attributeChangedCallback', value: function attributeChangedCallback(a) {
      switch (a) {}
    } }, { key: 'toggle', value: function toggle() {} }, { key: 'resetAll', value: function resetAll() {
      for (var b = this.querySelectorAll('section'), c = 0, d = b.length; c < d; c++) {
        var e = b[c].querySelector('[data-toggle="collapse"]'),
            f = e.getAttribute('href');if (f) {
          var a = document.getElementById(f.replace('#', ''));e.setAttribute('aria-expanded', 'true'), a.classList.remove('show');
        }
      }
    } }, { key: 'includeCss', value: function includeCss() {
      if (!document.getElementById('joomla-accordion-stylesheet')) {
        var a = document.createElement('style');a.id = 'joomla-accordion-stylesheet', a.innerHTML = '', document.head.appendChild(a);
      }
    } }], [{ key: 'observedAttributes', get: function get() {
      return ['type', 'button'];
    } }]), b;
}(HTMLElement);customElements.define('joomla-accordion', AccordionElement);

},{}]},{},[1]);
