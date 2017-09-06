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
}if (!document.head.querySelector('#joomla-switcher-style')) {
  var style = document.createElement('style');style.id = 'joomla-switcher-style', style.innerHTML = 'joomla-switcher{box-sizing:border-box;display:block;height:28px}joomla-switcher .switcher{position:relative;box-sizing:border-box;display:inline-block;width:62px;height:28px;vertical-align:middle;cursor:pointer;user-select:none;background-color:#f2f2f2;background-clip:content-box;border:1px solid rgba(0,0,0,.18);border-radius:.25rem;box-shadow:0 0 0 0 #dfdfdf inset;transition:border .4s ease 0s,box-shadow .4s ease 0s}joomla-switcher .switcher.active{transition:border .4s ease 0s,box-shadow .4s ease 0s,background-color 1.2s ease 0s}joomla-switcher input{position:absolute;top:0;left:0;z-index:2;width:62px;height:28px;padding:0;margin:0;cursor:pointer;opacity:0}joomla-switcher .switch{position:absolute;top:0;width:calc(62px / 2);height:calc(28px - (1px * 2));background:#fff;border-radius:.25rem;box-shadow:0 1px 3px rgba(0,0,0,.15);transition:left .2s ease 0s}joomla-switcher .switcher:focus .switch{animation:switcherPulsate 1.5s infinite}joomla-switcher input:checked~.switch{left:0}joomla-switcher input~:checked~.switch{left:calc((62px / 2) - (1px * 2))}joomla-switcher input:checked{z-index:0}joomla-switcher .switcher-labels{position:relative}joomla-switcher .switcher-labels span{position:absolute;top:0;left:10px;color:#868e96;visibility:hidden;opacity:0;transition:all .2s ease-in-out}joomla-switcher .switcher-labels span.active{visibility:visible;opacity:1;transition:all .2s ease-in-out}joomla-switcher[type=primary] .switcher.active{background-color:#006898;border-color:#006898;box-shadow:0 0 0 calc(28px / 2) #006898 inset}joomla-switcher[type=secondary] .switcher.active{background-color:#868e96;border-color:#868e96;box-shadow:0 0 0 calc(28px / 2) #868e96 inset}joomla-switcher[type=success] .switcher.active{background-color:#438243;border-color:#438243;box-shadow:0 0 0 calc(28px / 2) #438243 inset}joomla-switcher[type=info] .switcher.active{background-color:#17a2b8;border-color:#17a2b8;box-shadow:0 0 0 calc(28px / 2) #17a2b8 inset}joomla-switcher[type=warning] .switcher.active{background-color:#f0ad4e;border-color:#f0ad4e;box-shadow:0 0 0 calc(28px / 2) #f0ad4e inset}joomla-switcher[type=danger] .switcher.active{background-color:#d9534f;border-color:#d9534f;box-shadow:0 0 0 calc(28px / 2) #d9534f inset}joomla-switcher[type=light] .switcher.active{background-color:#f8f9fa;border-color:#f8f9fa;box-shadow:0 0 0 calc(28px / 2) #f8f9fa inset}joomla-switcher[type=dark] .switcher.active{background-color:#343a40;border-color:#343a40;box-shadow:0 0 0 calc(28px / 2) #343a40 inset}@keyframes switcherPulsate{0%{box-shadow:0 0 0 0 rgba(66,133,244,.55)}70%{box-shadow:0 0 0 10px rgba(66,133,244,0)}100%{box-shadow:0 0 0 0 rgba(66,133,244,0)}}', document.head.appendChild(style);
}var JoomlaSwitcherElement = function (a) {
  function b() {
    _classCallCheck(this, b);var a = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));return a.inputs = '', a.container = '', a;
  }return _inherits(b, a), _createClass(b, [{ key: 'type', get: function get() {
      return this.getAttribute('type');
    }, set: function set(a) {
      return this.setAttribute('type', a);
    } }, { key: 'offText', get: function get() {
      return this.getAttribute('offText') || 'Off';
    } }, { key: 'onText', get: function get() {
      return this.getAttribute('onText') || 'On';
    } }], [{ key: 'observedAttributes', get: function get() {
      return ['type', 'offText', 'onText'];
    } }]), _createClass(b, [{ key: 'connectedCallback', value: function connectedCallback() {
      var a = this;this.inputs = [].slice.call(this.querySelectorAll('input')), this.createMarkup.bind(this)(), this.container = this.querySelector('span.switcher');var b = this.inputs[1].parentNode.nextElementSibling;this.container.setAttribute('tabindex', 0), this.inputs[1].checked ? (this.inputs[1].parentNode.classList.add('active'), b.querySelector('.switcher-label-' + this.inputs[1].value).classList.add('active')) : b.querySelector('.switcher-label-' + this.inputs[0].value).classList.add('active'), this.inputs.forEach(function (b) {
        if (b.id) {
          var c = b.parentNode,
              d = c.nextElementSibling.querySelector('span.switcher-label-' + b.value);d.id = b.id + '-label', b.classList.contains('active') && b.setAttribute('aria-labelledby', d.id);
        }b.setAttribute('tabindex', '-1'), b.addEventListener('click', a.switch.bind(a));
      }), this.container.addEventListener('keydown', function (a) {
        if (13 === a.keyCode || 32 === a.keyCode) {
          a.preventDefault();var b = container.querySelector('input:not(.active)');b.click();
        }
      });
    } }, { key: 'disconnectedCallback', value: function disconnectedCallback() {
      this.removeEventListener('joomla.switcher.toggle', this.toggle, !0), this.removeEventListener('click', this.switch, !0);
    } }, { key: 'dispatchCustomEvent', value: function dispatchCustomEvent(a) {
      var b = new CustomEvent(a, { bubbles: !0, cancelable: !0 });b.relatedTarget = this, this.dispatchEvent(b), this.removeEventListener(a, this);
    } }, { key: 'createMarkup', value: function createMarkup() {
      var a = 0,
          b = document.createElement('span');b.classList.add('switcher'), this.type || this.setAttribute('type', 'success');var c = document.createElement('span');c.classList.add('switch'), this.inputs.forEach(function (c, d) {
        c.setAttribute('role', 'switch'), c.checked && c.setAttribute('aria-checked', !0), b.appendChild(c), 1 === d && c.checked && (a = 1);
      }), b.appendChild(c);var d = document.createElement('span');d.classList.add('switcher-labels');var e = document.createElement('span');e.classList.add('switcher-label-0'), e.innerText = this.offText;var f = document.createElement('span');for (f.classList.add('switcher-label-1'), f.innerText = this.onText, 0 == a ? e.classList.add('active') : f.classList.add('active'), d.appendChild(e), d.appendChild(f); this.firstChild;) {
        this.removeChild(this.firstChild);
      }this.appendChild(b), this.appendChild(d);
    } }, { key: 'switch', value: function _switch() {
      var a = this.firstChild,
          b = [].slice.call(a.nextElementSibling.querySelectorAll('span')),
          c = this.querySelector('input:not(.active)');b.forEach(function (a) {
        a.classList.remove('active');
      }), a.classList.contains('active') ? a.classList.remove('active') : a.classList.add('active'), c.classList.contains('active') ? (this.inputs.forEach(function (a) {
        a.classList.remove('active'), a.removeAttribute('checked'), a.setAttribute('aria-checked', !1);
      }), this.dispatchCustomEvent('joomla.switcher.off')) : (this.inputs.forEach(function (a) {
        a.classList.remove('active'), a.removeAttribute('checked'), a.setAttribute('aria-checked', !1);
      }), c.classList.add('active'), this.dispatchCustomEvent('joomla.switcher.on')), c.setAttribute('checked', ''), c.setAttribute('aria-checked', !0), a.nextElementSibling.querySelector('.switcher-label-' + c.value).classList.add('active');
    } }, { key: 'toggle', value: function toggle() {
      var a = this.querySelector('input:not(.active)');a.click();
    } }]), b;
}(HTMLElement);customElements.define('joomla-switcher', JoomlaSwitcherElement);

},{}]},{},[1]);
