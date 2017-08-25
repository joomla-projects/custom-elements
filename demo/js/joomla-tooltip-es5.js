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
}var TooltipElement = function (a) {
  function b() {
    _classCallCheck(this, b);var a = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));return a.includeCss(), a;
  }return _inherits(b, a), _createClass(b, [{ key: 'label', get: function get() {
      return this.getAttribute('label');
    } }, { key: 'tip', get: function get() {
      return this.getAttribute('tip');
    } }, { key: 'position', get: function get() {
      return this.getAttribute('position');
    }, set: function set(a) {
      this.setAttribute('position', a);
    } }, { key: 'text', get: function get() {
      return this.getAttribute('text');
    } }], [{ key: 'observedAttributes', get: function get() {
      return ['label', 'tip', 'text', 'position'];
    } }]), _createClass(b, [{ key: 'connectedCallback', value: function connectedCallback() {
      (!this.position || this.position && -1 === ['top', 'bottom', 'left', 'right'].indexOf(this.position)) && (this.position = 'top');var a = document.createElement('button'),
          b = document.createElement('span'),
          c = this.tip,
          d = this.position,
          f = this;a.setAttribute('aria-label', this.label ? this.label : 'more info'), a.innerHTML = this.text ? this.text : '', b.setAttribute('role', 'status'), a.addEventListener('click', function showTip() {
        document.addEventListener('click', function (c) {
          a !== c.target && (b.innerHTML = '', f.removeEventListener('keydown', this));
        }), document.addEventListener('keydown', function (a) {
          9 === (a.keyCode || a.which) && (b.innerHTML = '', f.removeEventListener('keydown', this));
        }), b.innerHTML = '', b.innerHTML = '<span class="toggletip-bubble ' + d + '">' + c + '</span>';
      }), this.append(a), this.append(b);
    } }, { key: 'disconnectedCallback', value: function disconnectedCallback() {
      this.querySelector('button').removeEventListener('click', this);
    } }, { key: 'dispatchCustomEvent', value: function dispatchCustomEvent(a) {
      var b = new CustomEvent(a, { bubbles: !0, cancelable: !0 });b.relatedTarget = this, this.dispatchEvent(b), this.removeEventListener(a, this);
    } }, { key: 'includeCss', value: function includeCss() {
      if (!document.getElementById('joomla-tooltip-stylesheet')) {
        var a = document.createElement('style');a.id = 'joomla-tooltip-stylesheet', a.innerHTML = 'joomla-tooltip{position:relative;display:inline-block}joomla-tooltip button{width:1.6rem;height:1.6rem;border-radius:50%;border:0;background:#1c3d5c;font-family:serif;font-weight:700;font-size:1.4rem;line-height:1.4rem;color:#fff}joomla-tooltip .toggletip-bubble{display:inline-block;position:absolute;z-index:1040;width:14rem;padding:.5rem .8rem;background:#222;font-size:.9rem;line-height:1.2rem;color:#fff;border-radius:.25rem;box-shadow:0 0 5px rgba(0,0,0,.4);transition:all ease-in;animation-duration:.3s}joomla-tooltip .toggletip-bubble:after{position:absolute;top:.6rem;right:100%;content:\'\';width:0;height:0;border-style:solid}joomla-tooltip .toggletip-bubble.top{bottom:100%;left:50%;margin-bottom:.6rem;transform:translate(-50%,0);animation-name:toggletip-fadeInTop}joomla-tooltip .toggletip-bubble.top:after{top:100%;left:50%;bottom:auto;border-width:6px 6px 0 6px;border-color:#222 transparent transparent transparent;transform:translateX(-50%)}joomla-tooltip .toggletip-bubble.left{top:50%;right:100%;margin-right:.6rem;transform:translate(0,-50%);animation-name:toggletip-fadeInLeft}joomla-tooltip .toggletip-bubble.left:after{top:50%;left:100%;bottom:auto;border-width:6px 0 6px 6px;border-color:transparent transparent transparent #222;transform:translateY(-50%)}joomla-tooltip .toggletip-bubble.right{top:50%;left:100%;margin-left:.6rem;transform:translate(0,-50%);animation-name:toggletip-fadeInRight}joomla-tooltip .toggletip-bubble.right:after{top:50%;right:100%;bottom:auto;border-width:6px 6px 6px 0;border-color:transparent #222 transparent transparent;transform:translateY(-50%)}joomla-tooltip .toggletip-bubble.bottom{top:100%;left:50%;margin-top:.6rem;transform:translate(-50%,0);animation-name:toggletip-fadeInBottom}joomla-tooltip .toggletip-bubble.bottom:after{top:-6px;left:50%;border-width:0 6px 6px 6px;border-color:transparent transparent #222 transparent;transform:translateX(-50%)}@keyframes toggletip-fadeInRight{from{transform:translate(-10px,-50%);opacity:0}to{transform:translate(0,-50%);opacity:1}}@keyframes toggletip-fadeInLeft{from{transform:translate(10px,-50%);opacity:0}to{transform:translate(0,-50%);opacity:1}}@keyframes toggletip-fadeInTop{from{transform:translate(-50%,10px);opacity:0}to{transform:translate(-50%,0);opacity:1}}@keyframes toggletip-fadeInBottom{from{transform:translate(-50%,-10px);opacity:0}to{transform:translate(-50%,0);opacity:1}}', document.head.appendChild(a);
      }
    } }]), b;
}(HTMLElement);customElements.define('joomla-tooltip', TooltipElement);

},{}]},{},[1]);
