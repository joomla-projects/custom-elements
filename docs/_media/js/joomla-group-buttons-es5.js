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
  if (!document.getElementById('joomla-button-stylesheet')) {
    var a = document.createElement('style');a.id = 'joomla-button-stylesheet', a.innerHTML = '', document.head.appendChild(a);
  }
})();var ButtonElement = function (a) {
  function b() {
    return _classCallCheck(this, b), _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
  }return _inherits(b, a), _createClass(b, [{ key: 'connectedCallback', value: function connectedCallback() {
      this.classList.contains('btn', 'btn-group') || this.classList.add('btn', 'btn-group');var a = this.querySelectorAll('[type="checkbox"]');if (a.length) for (var b = 0, c = a.length; b < c; b++) {
        'label' === a[b].parentNode.tagName.toLowerCase() && (a[b].getAttribute('checked') || a[b].parentNode.classList.contains('active') ? (a[b].checked = !0, a[b].setAttribute('checked', ''), a[b].parentNode.setAttribute('aria-pressed', 'true')) : (a[b].checked = !1, a[b].removeAttribute('checked', ''), a[b].parentNode.setAttribute('aria-pressed', 'false')), a[b].addEventListener('click', function (a) {
          'label' === a.target.parentNode.tagName.toLowerCase() && (a.target.checked ? (a.target.checked = !0, a.target.setAttribute('checked', ''), a.target.parentNode.classList.add('active'), a.target.parentNode.setAttribute('aria-pressed', 'true')) : (a.target.checked = !1, a.target.removeAttribute('checked'), a.target.parentNode.classList.remove('active'), a.target.parentNode.setAttribute('aria-pressed', 'false')));
        }));
      } else {
        var d = this.querySelectorAll('[type="radio"]');if (d) for (var e = 0, f = d.length; e < f; e++) {
          'label' === d[e].parentNode.tagName.toLowerCase() && (d[e].getAttribute('checked') || d[e].parentNode.classList.contains('active') ? (d[e].checked = !0, d[e].setAttribute('checked', ''), d[e].parentNode.setAttribute('aria-pressed', 'true')) : (d[e].checked = !1, d[e].removeAttribute('checked', ''), d[e].parentNode.setAttribute('aria-pressed', 'false')), d[e].addEventListener('click', function (a) {
            'label' === a.target.parentNode.tagName.toLowerCase() && (a.target.checked ? (a.target.parentNode.parentNode.clearAllRadios(), a.target.checked = !0, a.target.setAttribute('checked', ''), a.target.parentNode.classList.add('active'), a.target.parentNode.setAttribute('aria-pressed', 'true')) : (a.target.parentNode.parentNode.clearAllRadios(), a.target.checked = !1, a.target.removeAttribute('checked'), a.target.parentNode.classList.remove('active'), a.target.parentNode.setAttribute('aria-pressed', 'false')));
          }));
        }
      }
    } }, { key: 'disconnectedCallback', value: function disconnectedCallback() {} }, { key: 'adoptedCallback', value: function adoptedCallback() {} }, { key: 'attributeChangedCallback', value: function attributeChangedCallback(a) {
      switch (a) {}
    } }, { key: 'clearAllRadios', value: function clearAllRadios() {
      for (var a = this.querySelectorAll('[type="radio"]'), b = 0, c = a.length; b < c; b++) {
        a[b].checked = !1, a[b].removeAttribute('checked'), 'label' == a[b].parentNode.tagName.toLowerCase() && (a[b].parentNode.classList.remove('active'), a[b].parentNode.setAttribute('aria-pressed', 'false'));
      }
    } }, { key: 'dispatchCustomEvent', value: function dispatchCustomEvent(a) {
      var b = new CustomEvent(a, { bubbles: !0, cancelable: !0 });b.relatedTarget = this, this.dispatchEvent(b), this.removeEventListener(a, this);
    } }], [{ key: 'observedAttributes', get: function get() {} }]), b;
}(HTMLElement);customElements.define('joomla-button', ButtonElement);

},{}]},{},[1]);
