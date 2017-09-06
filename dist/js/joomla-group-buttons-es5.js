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
}if (!document.head.querySelector('#joomla-group-buttons-style')) {
  var style = document.createElement('style');style.id = 'joomla-group-buttons-style', style.innerHTML = 'joomla-group-buttons{position:relative;display:inline-flex;vertical-align:middle}joomla-group-buttons>.btn{display:inline-block;flex:0 1 auto;padding:.5rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.25;text-align:center;white-space:nowrap;vertical-align:middle;user-select:none;border:1px solid transparent;border-radius:.25rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}joomla-group-buttons>.btn:hover{z-index:2;text-decoration:none}joomla-group-buttons>.btn.active,joomla-group-buttons>.btn:active,joomla-group-buttons>.btn:focus{z-index:2;box-shadow:0 0 0 3px rgba(0,123,255,.25)}joomla-group-buttons>.btn.btn:disabled{opacity:.65}joomla-group-buttons>.btn.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}joomla-group-buttons>.btn.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}joomla-group-buttons>.btn.btn-primary.focus,joomla-group-buttons>.btn.btn-primary:focus{box-shadow:0 0 0 3px rgba(0,123,255,.5)}joomla-group-buttons>.btn.btn-primary.disabled,joomla-group-buttons>.btn.btn-primary:disabled{background-color:#007bff;border-color:#007bff}joomla-group-buttons>.btn.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}joomla-group-buttons>.btn.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}joomla-group-buttons>.btn.btn-success.focus,joomla-group-buttons>.btn.btn-success:focus{box-shadow:0 0 0 3px rgba(40,167,69,.5)}joomla-group-buttons>.btn.btn-success.disabled,joomla-group-buttons>.btn.btn-success:disabled{background-color:#28a745;border-color:#28a745}joomla-group-buttons>.btn.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}joomla-group-buttons>.btn.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}joomla-group-buttons>.btn.btn-info.focus,joomla-group-buttons>.btn.btn-info:focus{box-shadow:0 0 0 3px rgba(23,162,184,.5)}joomla-group-buttons>.btn.btn-info.disabled,joomla-group-buttons>.btn.btn-info:disabled{background-color:#17a2b8;border-color:#17a2b8}joomla-group-buttons>.btn.btn-warning{color:#111;background-color:#ffc107;border-color:#ffc107}joomla-group-buttons>.btn.btn-warning:hover{color:#111;background-color:#e0a800;border-color:#d39e00}joomla-group-buttons>.btn.btn-warning.focus,joomla-group-buttons>.btn.btn-warning:focus{box-shadow:0 0 0 3px rgba(255,193,7,.5)}joomla-group-buttons>.btn.btn-warning.disabled,joomla-group-buttons>.btn.btn-warning:disabled{background-color:#ffc107;border-color:#ffc107}joomla-group-buttons>.btn.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}joomla-group-buttons>.btn.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}joomla-group-buttons>.btn.btn-danger.focus,joomla-group-buttons>.btn.btn-danger:focus{box-shadow:0 0 0 3px rgba(220,53,69,.5)}joomla-group-buttons>.btn.btn-danger.disabled,joomla-group-buttons>.btn.btn-danger:disabled{background-color:#dc3545;border-color:#dc3545}joomla-group-buttons .btn+.btn,joomla-group-buttons .btn+.btn-group,joomla-group-buttons .btn-group+.btn,joomla-group-buttons .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}joomla-group-buttons>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}joomla-group-buttons>.btn:first-child{margin-left:0}joomla-group-buttons>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}joomla-group-buttons>.btn:last-child:not(:first-child),joomla-group-buttons>.dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}joomla-group-buttons>joomla-group-buttons{float:left}joomla-group-buttons>joomla-group-buttons:not(:first-child):not(:last-child)>.btn{border-radius:0}joomla-group-buttons>joomla-group-buttons:first-child:not(:last-child)>.btn:last-child,joomla-group-buttons>joomla-group-buttons:first-child:not(:last-child)>.dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}joomla-group-buttons>joomla-group-buttons:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-bottom-left-radius:0}joomla-group-buttons>.btn input[type=checkbox],joomla-group-buttons>.btn input[type=radio],joomla-group-buttons>.btn-group>.btn input[type=checkbox],joomla-group-buttons>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}', document.head.appendChild(style);
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
