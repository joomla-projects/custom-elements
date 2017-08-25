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
}var ButtonElement = function (a) {
  function b() {
    _classCallCheck(this, b);var a = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));if (!document.getElementById('joomla-group-button-stylesheet')) {
      var c = document.createElement('style');c.id = 'joomla-group-button-stylesheet', c.innerHTML = 'joomla-group-buttons{position:relative;display:inline-flex;vertical-align:middle}joomla-group-buttons>.btn{position:relative;flex:0 1 auto;margin-bottom:0}joomla-group-buttons>.btn:hover{z-index:2}joomla-group-buttons>.btn.active,joomla-group-buttons>.btn:active,joomla-group-buttons>.btn:focus{z-index:2}joomla-group-buttons .btn+.btn,joomla-group-buttons .btn+.btn-group,joomla-group-buttons .btn-group+.btn,joomla-group-buttons .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}joomla-group-buttons>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}joomla-group-buttons>.btn:first-child{margin-left:0}joomla-group-buttons>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}joomla-group-buttons>.btn:last-child:not(:first-child),joomla-group-buttons>.dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}joomla-group-buttons>joomla-group-buttons{float:left}joomla-group-buttons>joomla-group-buttons:not(:first-child):not(:last-child)>.btn{border-radius:0}joomla-group-buttons>joomla-group-buttons:first-child:not(:last-child)>.btn:last-child,joomla-group-buttons>joomla-group-buttons:first-child:not(:last-child)>.dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}joomla-group-buttons>joomla-group-buttons:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-bottom-left-radius:0}joomla-group-buttons>.btn input[type=checkbox],joomla-group-buttons>.btn input[type=radio],joomla-group-buttons>.btn-group>.btn input[type=checkbox],joomla-group-buttons>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}', document.head.appendChild(c);
    }return a;
  }return _inherits(b, a), _createClass(b, [{ key: 'connectedCallback', value: function connectedCallback() {
      var a = [].slice.call(this.querySelectorAll('[type="checkbox"]'));if (a.length) a.forEach(function (a) {
        'label' !== a.parentNode.tagName.toLowerCase() || (a.getAttribute('checked') || a.parentNode.classList.contains('active') ? (a.setAttribute('checked', ''), a.parentNode.setAttribute('aria-pressed', 'true')) : (a.removeAttribute('checked'), a.parentNode.setAttribute('aria-pressed', 'false')), a.setAttribute('tabindex', 0), a.addEventListener('click', function () {
          this.checked ? (this.setAttribute('checked', ''), this.parentNode.classList.add('active'), this.parentNode.setAttribute('aria-pressed', 'true')) : (this.removeAttribute('checked'), this.parentNode.classList.remove('active'), this.parentNode.setAttribute('aria-pressed', 'false'));
        }));
      });else {
        var b = [].slice.call(this.querySelectorAll('[type="radio"]'));b.length && b.forEach(function (a) {
          'label' !== a.parentNode.tagName.toLowerCase() || (a.getAttribute('checked') || a.parentNode.classList.contains('active') ? (a.setAttribute('checked', ''), a.parentNode.setAttribute('aria-pressed', 'true')) : (a.removeAttribute('checked'), a.parentNode.setAttribute('aria-pressed', 'false')), a.addEventListener('click', function () {
            this.checked ? (this.parentNode.parentNode.clearAllRadios(), this.setAttribute('checked', ''), this.parentNode.classList.add('active'), this.parentNode.setAttribute('aria-pressed', 'true')) : (this.parentNode.parentNode.clearAllRadios(), this.removeAttribute('checked'), this.parentNode.classList.remove('active'), this.parentNode.setAttribute('aria-pressed', 'false'));
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
}(HTMLElement);customElements.define('joomla-group-buttons', ButtonElement);

},{}]},{},[1]);
