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
}var JoomlaButtonElement = function (a) {
  function b() {
    return _classCallCheck(this, b), _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
  }return _inherits(b, a), _createClass(b, [{ key: 'connectedCallback', value: function connectedCallback() {
      var a = this,
          b = [].slice.call(this.querySelectorAll('[type="checkbox"]'));if (b.length) b.forEach(function (b) {
        'label' !== b.parentNode.tagName.toLowerCase() || (b.getAttribute('checked') || b.parentNode.classList.contains('active') ? (b.setAttribute('checked', ''), b.parentNode.setAttribute('aria-pressed', 'true')) : (b.removeAttribute('checked'), b.parentNode.setAttribute('aria-pressed', 'false')), b.setAttribute('tabindex', 0), b.addEventListener('click', function () {
          a.checked ? (a.setAttribute('checked', ''), a.parentNode.classList.add('active'), a.parentNode.setAttribute('aria-pressed', 'true')) : (a.removeAttribute('checked'), a.parentNode.classList.remove('active'), a.parentNode.setAttribute('aria-pressed', 'false'));
        }));
      });else {
        var c = [].slice.call(this.querySelectorAll('[type="radio"]'));c.length && c.forEach(function (b) {
          'label' !== b.parentNode.tagName.toLowerCase() || (b.getAttribute('checked') || b.parentNode.classList.contains('active') ? (b.setAttribute('checked', ''), b.parentNode.setAttribute('aria-pressed', 'true')) : (b.removeAttribute('checked'), b.parentNode.setAttribute('aria-pressed', 'false')), b.addEventListener('click', function () {
            a.checked ? (a.parentNode.parentNode.clearAllRadios(), a.setAttribute('checked', ''), a.parentNode.classList.add('active'), a.parentNode.setAttribute('aria-pressed', 'true')) : (a.parentNode.parentNode.clearAllRadios(), a.removeAttribute('checked'), a.parentNode.classList.remove('active'), a.parentNode.setAttribute('aria-pressed', 'false'));
          }));
        });
      }
    } }, { key: 'disconnectedCallback', value: function disconnectedCallback() {} }, { key: 'adoptedCallback', value: function adoptedCallback() {} }, { key: 'attributeChangedCallback', value: function attributeChangedCallback(a) {
      switch (a) {}
    } }, { key: 'clearAllRadios', value: function clearAllRadios() {
      var a = [].slice.call(this.querySelectorAll('[type="radio"]'));a.forEach(function (a) {
        a.removeAttribute('checked'), 'label' === a.parentNode.tagName.toLowerCase() && (a.parentNode.classList.remove('active'), a.parentNode.setAttribute('aria-pressed', 'false'));
      });
    } }, { key: 'dispatchCustomEvent', value: function dispatchCustomEvent(a) {
      var b = new CustomEvent(a, { bubbles: !0, cancelable: !0 });b.relatedTarget = this, this.dispatchEvent(b), this.removeEventListener(a, this);
    } }], [{ key: 'observedAttributes', get: function get() {} }]), b;
}(HTMLElement);customElements.define('joomla-group-buttons', JoomlaButtonElement);

},{}]},{},[1]);
