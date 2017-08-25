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
    _classCallCheck(this, b);var a = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));if (!document.getElementById('joomla-accordion-stylesheet')) {
      var c = document.createElement('style');c.id = 'joomla-accordion-stylesheet', c.innerHTML = '', document.head.appendChild(c);
    }return a;
  }return _inherits(b, a), _createClass(b, [{ key: 'connectedCallback', value: function connectedCallback() {
      var a = this;if (this.innerHTML) {
        this.setAttribute('role', 'tablist'), this.setAttribute('aria-multiselectable', 'true');var b = this.querySelectorAll('section');b.length && b.forEach(function (b) {
          var c = b.querySelector('[data-toggle="collapse"]'),
              d = c.getAttribute('href');if (d) {
            var e = document.getElementById(d.replace('#', ''));e.classList.contains('show') ? (e.setAttribute('role', 'tabpanel'), c.setAttribute('aria-expanded', 'true')) : (e.setAttribute('role', 'tabpanel'), c.setAttribute('aria-expanded', 'true')), c.addEventListener('click', function (b) {
              b.preventDefault(), b.stopPropagation(), a.resetAll(), b.target.setAttribute('aria-expanded', 'true'), document.getElementById(d.replace('#', '')).classList.add('show');
            });
          }
        });
      }
    } }, { key: 'attributeChangedCallback', value: function attributeChangedCallback(a) {
      switch (a) {case 'type':
          break;case 'button':
          break;default:}
    } }, { key: 'resetAll', value: function resetAll() {
      var a = [].slice.call(this.querySelectorAll('section'));a.forEach(function (a) {
        var b = a.querySelector('[data-toggle="collapse"]'),
            c = b.getAttribute('href');if (c) {
          var d = document.getElementById(c.replace('#', ''));b.setAttribute('aria-expanded', 'true'), d.classList.remove('show');
        }
      });
    } }], [{ key: 'observedAttributes', get: function get() {
      return ['type', 'button'];
    } }]), b;
}(HTMLElement);customElements.define('joomla-accordion', AccordionElement);

},{}]},{},[1]);
