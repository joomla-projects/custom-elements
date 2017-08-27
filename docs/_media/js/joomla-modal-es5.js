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
}var style = document.createElement('style');style.innerHTML = 'joomla-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;box-sizing:inherit;display:none;max-width:500px;margin:10px auto;overflow:hidden;border-radius:5px;outline:0}joomla-modal.show{display:block}joomla-modal .modal-dialog{position:relative;display:flex;flex-direction:column;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}joomla-modal .modal-dialog header{display:flex;align-items:center;justify-content:space-between;padding:15px;border-bottom:1px solid #e9ecef}joomla-modal .modal-dialog header .close{float:right;padding:0;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;cursor:pointer;background:0 0;border:0;opacity:.5;-webkit-appearance:none}joomla-modal .modal-dialog section{position:relative;flex:1 1 auto;padding:15px}joomla-modal .modal-dialog footer{display:flex;align-items:center;justify-content:flex-end;padding:15px;border-top:1px solid #e9ecef}.modal-backdrop.show{opacity:.5}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}', document.head.appendChild(style);var JoomlaModalElement = function (a) {
  function b() {
    _classCallCheck(this, b);var a = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));return window.Joomla = window.Joomla || {}, window.Joomla.UI = {}, window.Joomla.UI.modal = {}, a;
  }return _inherits(b, a), _createClass(b, [{ key: 'connectedCallback', value: function connectedCallback() {
      var a = this,
          b = document.querySelector('button[data-href="#' + this.id + '"]');b && b.addEventListener('click', function () {
        var b = this,
            c = document.createElement('div');c.classList.add('modal-backdrop', 'show'), document.body.appendChild(c), a.classList.add('show'), a.firstElementChild.focus(), window.addEventListener('click', function (c) {
          a.findAncestorClass(c.target, 'modal-content') || c.target === b || a.close();
        });var d = a.querySelectorAll('button[data-dismiss="modal"]');d.forEach(function (b) {
          b.addEventListener('click', function () {
            a.close();
          });
        });
      });
    } }, { key: 'disconnectedCallback', value: function disconnectedCallback() {} }, { key: 'attributeChangedCallback', value: function attributeChangedCallback(a) {
      switch (a) {}
    } }, { key: 'close', value: function close() {
      var a = document.querySelector('.modal-backdrop');a && document.body.removeChild(a), this.classList.remove('show');
    } }, { key: 'findAncestor', value: function findAncestor(a, b) {
      for (; (a = a.parentElement) && a.nodeName.toLowerCase() !== b;) {}return a;
    } }, { key: 'findAncestorClass', value: function findAncestorClass(a, b) {
      for (; (a = a.parentElement) && !a.classList.contains(b);) {}return a;
    } }], [{ key: 'observedAttributes', get: function get() {} }]), b;
}(HTMLElement);customElements.define('joomla-modal', JoomlaModalElement);

},{}]},{},[1]);
