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
}if (!document.head.querySelector('#joomla-tip-style')) {
  var style = document.createElement('style');style.id = 'joomla-tip-style', style.innerHTML = 'joomla-tip{position:relative;display:inline-block}joomla-tip button{width:1.6rem;height:1.6rem;font-family:serif;font-size:1.4rem;font-weight:700;line-height:1.4rem;color:#fff;background:#1c3d5c;border:0;border-radius:50%}joomla-tip .toggletip-bubble{position:absolute;z-index:1040;display:inline-block;width:14rem;padding:.5rem .8rem;font-size:.9rem;line-height:1.2rem;color:#fff;background:#222;border-radius:.25rem;box-shadow:0 0 5px rgba(0,0,0,.4);transition:all ease-in;animation-duration:.3s}joomla-tip .toggletip-bubble::after{position:absolute;top:.6rem;right:100%;width:0;height:0;content:"";border-style:solid}joomla-tip .toggletip-bubble.top{bottom:100%;left:50%;margin-bottom:.6rem;transform:translate(-50%,0);animation-name:toggletip-fadeInTop}joomla-tip .toggletip-bubble.top::after{top:100%;bottom:auto;left:50%;border-color:#222 transparent transparent;border-width:6px 6px 0;transform:translateX(-50%)}joomla-tip .toggletip-bubble.left{top:50%;right:100%;margin-right:.6rem;transform:translate(0,-50%);animation-name:toggletip-fadeInLeft}joomla-tip .toggletip-bubble.left::after{top:50%;bottom:auto;left:100%;border-color:transparent transparent transparent #222;border-width:6px 0 6px 6px;transform:translateY(-50%)}joomla-tip .toggletip-bubble.right{top:50%;left:100%;margin-left:.6rem;transform:translate(0,-50%);animation-name:toggletip-fadeInRight}joomla-tip .toggletip-bubble.right::after{top:50%;right:100%;bottom:auto;border-color:transparent #222 transparent transparent;border-width:6px 6px 6px 0;transform:translateY(-50%)}joomla-tip .toggletip-bubble.bottom{top:100%;left:50%;margin-top:.6rem;transform:translate(-50%,0);animation-name:toggletip-fadeInBottom}joomla-tip .toggletip-bubble.bottom::after{top:-6px;left:50%;border-color:transparent transparent #222;border-width:0 6px 6px;transform:translateX(-50%)}@keyframes toggletip-fadeInRight{from{opacity:0;transform:translate(-10px,-50%)}to{opacity:1;transform:translate(0,-50%)}}@keyframes toggletip-fadeInLeft{from{opacity:0;transform:translate(10px,-50%)}to{opacity:1;transform:translate(0,-50%)}}@keyframes toggletip-fadeInTop{from{opacity:0;transform:translate(-50%,10px)}to{opacity:1;transform:translate(-50%,0)}}@keyframes toggletip-fadeInBottom{from{opacity:0;transform:translate(-50%,-10px)}to{opacity:1;transform:translate(-50%,0)}}', document.head.appendChild(style);
}var JoomlaTipElement = function (a) {
  function b() {
    return _classCallCheck(this, b), _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
  }return _inherits(b, a), _createClass(b, [{ key: 'connectedCallback', value: function connectedCallback() {
      (!this.position || this.position && -1 === ['top', 'bottom', 'left', 'right'].indexOf(this.position)) && (this.position = 'top'), this.btnElement = document.createElement('button'), this.spanElement = document.createElement('span'), this.btnElement.setAttribute('aria-label', this.label ? this.label : 'more info'), this.btnElement.innerHTML = this.text ? this.text : '', this.spanElement.setAttribute('role', 'status'), this.btnElement.addEventListener('click', this.showTip.bind(this)), this.append(this.btnElement), this.append(this.spanElement);
    } }, { key: 'disconnectedCallback', value: function disconnectedCallback() {
      this.querySelector('button').removeEventListener('click', this.showTip, !0);
    } }, { key: 'showTip', value: function showTip() {
      var a = this;document.addEventListener('click', function (b) {
        a.btnElement !== b.target && (a.spanElement.innerHTML = '', self.removeEventListener('keydown', a));
      }), document.addEventListener('keydown', function (b) {
        9 === (b.keyCode || b.which) && (a.spanElement.innerHTML = '', self.removeEventListener('keydown', a));
      }), this.spanElement.innerHTML = '', this.spanElement.innerHTML = '<span class="toggletip-bubble ' + this.position + '">' + this.tip + '</span>';
    } }, { key: 'dispatchCustomEvent', value: function dispatchCustomEvent(a) {
      var b = new CustomEvent(a, { bubbles: !0, cancelable: !0 });b.relatedTarget = this, this.dispatchEvent(b), this.removeEventListener(a, this);
    } }, { key: 'type', get: function get() {
      return this.getAttribute('type');
    }, set: function set(a) {
      return this.setAttribute('type', a);
    } }, { key: 'label', get: function get() {
      return this.getAttribute('label');
    }, set: function set(a) {
      return this.setAttribute('label', a);
    } }, { key: 'tip', get: function get() {
      return this.getAttribute('tip');
    }, set: function set(a) {
      return this.setAttribute('tip', a);
    } }, { key: 'position', get: function get() {
      return this.getAttribute('position');
    }, set: function set(a) {
      return this.setAttribute('position', a);
    } }, { key: 'text', get: function get() {
      return this.getAttribute('text');
    }, set: function set(a) {
      return this.getAttribute('text', a);
    } }], [{ key: 'observedAttributes', get: function get() {
      return ['type', 'label', 'tip', 'text', 'position'];
    } }]), b;
}(HTMLElement);customElements.define('joomla-tip', JoomlaTipElement);

},{}]},{},[1]);