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
}(function () {
  if (!document.getElementById('joomla-collapse-stylesheet')) {
    var a = document.createElement('style');a.id = 'joomla-collapse-stylesheet', a.innerHTML = '', document.head.appendChild(a);
  }
})();var CollapseElement = function (a) {
  function b() {
    return _classCallCheck(this, b), _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
  }return _inherits(b, a), _createClass(b, [{ key: 'connectedCallback', value: function connectedCallback() {
      if (this.id) for (var a = document.querySelectorAll('[href="#' + this.id + '"],[data-target="#' + this.id + '"]'), b = 0, c = a.length; b < c; b++) {
        this.state && 'closed' !== this.state ? (a[b].setAttribute('aria-expanded', 'true'), a[b].setAttribute('aria-controls', this.id), this.classList.add('show')) : (a[b].setAttribute('aria-expanded', 'false'), a[b].setAttribute('aria-controls', this.id), this.classList.remove('show')), a[b].addEventListener('click', function (a) {
          var b = '';a.target.hasAttribute('data-target') || (b = a.target.getAttribute('href').replace('#', '')), a.target.hasAttribute('href') || (b = a.target.getAttribute('data-target').replace('#', '')), a.preventDefault(), a.stopPropagation(), document.getElementById(b).toggle();
        });
      }
    } }, { key: 'disconnectedCallback', value: function disconnectedCallback() {} }, { key: 'adoptedCallback', value: function adoptedCallback() {} }, { key: 'attributeChangedCallback', value: function attributeChangedCallback(a, b, c) {
      switch (a) {case 'state':
          var d = document.querySelector('[href="#' + this.id + '"]');'closed' === c ? d.setAttribute('aria-expanded', 'false') : 'open' === c && d.setAttribute('aria-expanded', 'true');}
    } }, { key: 'toggle', value: function toggle() {
      var a = document.querySelector('[href="#' + this.id + '"]');a || (a = document.querySelector('[data-target="#' + this.id + '"]')), 'closed' === this.state ? (this.state = 'open', a.setAttribute('aria-expanded', 'true')) : (this.state = 'closed', a.setAttribute('aria-expanded', 'false')), this.classList.toggle('show');
    } }, { key: 'dispatchCustomEvent', value: function dispatchCustomEvent(a) {
      var b = new CustomEvent(a, { bubbles: !0, cancelable: !0 });b.relatedTarget = this, this.dispatchEvent(b), this.removeEventListener(a, this);
    } }, { key: 'state', get: function get() {
      return this.getAttribute('state') || 'closed';
    }, set: function set(a) {
      return this.setAttribute('state', a);
    } }], [{ key: 'observedAttributes', get: function get() {
      return ['state'];
    } }]), b;
}(HTMLElement);customElements.define('joomla-collapse', CollapseElement);

},{}]},{},[1]);
