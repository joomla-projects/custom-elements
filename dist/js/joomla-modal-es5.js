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
  if (!document.getElementById('joomla-modal-stylesheet')) {
    var a = document.createElement('style');a.id = 'joomla-modal-stylesheet', a.innerHTML = '', document.head.appendChild(a);
  }
})();var ModalElement = function (a) {
  function b() {
    return _classCallCheck(this, b), _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
  }return _inherits(b, a), _createClass(b, [{ key: 'connectedCallback', value: function connectedCallback() {
      var a = this,
          b = this.querySelector('.modal');triggerBtn = document.querySelector('button[data-target="#' + b.id + '"]'), triggerBtn && triggerBtn.addEventListener('click', function () {
        var c = document.createElement('div'),
            d = this.querySelector('.modal-content');c.classList.add('modal-backdrop', 'show'), document.body.appendChild(c), b.classList.toggle('show'), b.style.display = 'block', b.focus(), b.addEventListener('click', function (b) {
          var c = b.target,
              d = a.getParents(c, 'joomla-modal')[0],
              e = a.getParents(b.target, '.modal-content'),
              f = d.querySelector('.modal-content');0 === e.length && d.close();
        });
      });for (var c = b.querySelectorAll('button[data-dismiss="modal"]'), d = 0, e = c.length; d < e; d++) {
        c[d].addEventListener('click', function (b) {
          var c = a.getParents(b.target, 'joomla-modal');c[0].close();
        });
      }
    } }, { key: 'disconnectedCallback', value: function disconnectedCallback() {} }, { key: 'adoptedCallback', value: function adoptedCallback() {} }, { key: 'attributeChangedCallback', value: function attributeChangedCallback(a) {
      switch (a) {}
    } }, { key: 'close', value: function close() {
      var a = document.querySelector('.modal-backdrop'),
          b = this.querySelector('.modal');a && document.body.removeChild(a), b.classList.toggle('show'), b.style.display = 'none';
    } }, { key: 'getParents', value: function getParents(a, b) {
      Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (a) {
        for (var b = (this.document || this.ownerDocument).querySelectorAll(a), c = b.length; 0 <= --c && b.item(c) !== this;) {}return -1 < c;
      });for (var c = []; a && a !== document; a = a.parentNode) {
        b ? a.matches(b) && c.push(a) : c.push(a);
      }return parents;
    } }, { key: 'dispatchCustomEvent', value: function dispatchCustomEvent(a) {
      var b = new CustomEvent(a, { bubbles: !0, cancelable: !0 });b.relatedTarget = this, this.dispatchEvent(b), this.removeEventListener(a, this);
    } }], [{ key: 'observedAttributes', get: function get() {} }]), b;
}(HTMLElement);customElements.define('joomla-modal', ModalElement);

},{}]},{},[1]);
