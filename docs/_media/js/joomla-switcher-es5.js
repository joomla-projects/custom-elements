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
}var SwitcherElement = function (a) {
  function b() {
    _classCallCheck(this, b);var a = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));return a.includeCss(), a;
  }return _inherits(b, a), _createClass(b, [{ key: 'type', get: function get() {
      return this.getAttribute('type');
    }, set: function set(a) {
      return this.setAttribute('type', a);
    } }, { key: 'offText', get: function get() {
      return this.getAttribute('offText');
    } }, { key: 'onText', get: function get() {
      return this.getAttribute('onText');
    } }], [{ key: 'observedAttributes', get: function get() {
      return ['type', 'offText', 'onText'];
    } }]), _createClass(b, [{ key: 'connectedCallback', value: function connectedCallback() {
      var a = this;this.createMarkup(a);var b = [].slice.call(a.querySelectorAll('input')),
          c = a.querySelector('span.switcher'),
          d = b[1].parentNode.nextElementSibling;c.setAttribute('tabindex', 0), b[1].checked ? (b[1].parentNode.classList.add('active'), d.querySelector('.switcher-label-' + b[1].value).classList.add('active')) : d.querySelector('.switcher-label-' + b[0].value).classList.add('active'), b.forEach(function (b) {
        if (b.id) {
          var c = b.parentNode,
              d = c.nextElementSibling.querySelector('span.switcher-label-' + b.value);d.id = b.id + '-label', b.setAttribute('aria-labelledby', d.id);
        }b.setAttribute('tabindex', '-1'), b.addEventListener('click', function () {
          a.switch();
        });
      }), c.addEventListener('keydown', function (a) {
        if (13 === a.keyCode || 32 === a.keyCode) {
          a.preventDefault();var b = c.querySelector('input:not(.active)');b.click();
        }
      });
    } }, { key: 'disconnectedCallback', value: function disconnectedCallback() {
      this.removeEventListener('joomla.switcher.toggle', this), this.removeEventListener('joomla.switcher.on', this), this.removeEventListener('joomla.switcher.off', this), this.removeEventListener('click', this);
    } }, { key: 'dispatchCustomEvent', value: function dispatchCustomEvent(a) {
      var b = new CustomEvent(a, { bubbles: !0, cancelable: !0 });b.relatedTarget = this, this.dispatchEvent(b), this.removeEventListener(a, this);
    } }, { key: 'createMarkup', value: function createMarkup(a) {
      var b = [].slice.call(a.querySelectorAll('input')),
          c = 0,
          d = document.createElement('span');d.classList.add('switcher'), this.type && -1 !== ['primary', 'danger'].indexOf(this.type) && d.classList.add('switcher-' + this.type);var e = document.createElement('span');e.classList.add('switch'), b.forEach(function (a, b) {
        d.appendChild(a), 1 === b && a.checked && (c = 1);
      }), d.appendChild(e);var f = document.createElement('span');f.classList.add('switcher-labels');var g = document.createElement('span');g.classList.add('switcher-label-0'), g.innerText = this.getText(this.offText, 'Off');var h = document.createElement('span');for (h.classList.add('switcher-label-1'), h.innerText = this.getText(this.onText, 'On'), 0 == c ? g.classList.add('active') : h.classList.add('active'), f.appendChild(g), f.appendChild(h); a.firstChild;) {
        a.removeChild(a.firstChild);
      }return a.appendChild(d), a.appendChild(f), a;
    } }, { key: 'switch', value: function _switch() {
      var a = this.firstChild,
          b = [].slice.call(a.querySelectorAll('input')),
          c = [].slice.call(a.nextElementSibling.querySelectorAll('span')),
          d = this.querySelector('input.active'),
          e = this.querySelector('input:not(.active)');c.forEach(function (a) {
        a.classList.remove('active');
      }), a.classList.contains('active') ? a.classList.remove('active') : a.classList.add('active'), e.classList.contains('active') ? (b.forEach(function (a) {
        a.classList.remove('active'), a.removeAttribute('checked');
      }), this.dispatchCustomEvent('joomla.switcher.off')) : (b.forEach(function (a) {
        a.classList.remove('active'), a.removeAttribute('checked');
      }), e.classList.add('active'), this.dispatchCustomEvent('joomla.switcher.on')), e.setAttribute('checked', ''), a.nextElementSibling.querySelector('.switcher-label-' + e.value).classList.add('active');
    } }, { key: 'toggle', value: function toggle() {
      var a = this.querySelector('input:not(.active)');a.click();
    } }, { key: 'getText', value: function getText(a, b) {
      return window.Joomla && Joomla.JText && Joomla.JText._ && 'function' == typeof Joomla.JText._ && Joomla.JText._(a) ? Joomla.JText._(a) : b;
    } }, { key: 'includeCss', value: function includeCss() {
      if (!document.getElementById('joomla-switcher-stylesheet')) {
        var a = document.createElement('style');a.id = 'joomla-switcher-stylesheet', a.innerHTML = 'joomla-switcher{display:block;height:28px;box-sizing:border-box}joomla-switcher .switcher{position:relative;box-sizing:border-box;display:inline-block;width:62px;height:28px;vertical-align:middle;cursor:pointer;user-select:none;background-color:#f2f2f2;background-clip:content-box;border:1px solid rgba(0,0,0,.18);border-radius:.25rem;box-shadow:0 0 0 0 #dfdfdf inset;transition:border .4s ease 0s,box-shadow .4s ease 0s}joomla-switcher .switcher.active{background-color:#5cb85c;border-color:#5cb85c;box-shadow:0 0 0 calc(28px / 2) #5cb85c inset;transition:border .4s ease 0s,box-shadow .4s ease 0s,background-color 1.2s ease 0s}joomla-switcher .switcher-danger.switcher.active{background-color:#d9534f;border-color:#d9534f;box-shadow:0 0 0 calc(28px / 2) #d9534f inset}joomla-switcher .switcher-primary.switcher.active{background-color:#0275d8;border-color:#0275d8;box-shadow:0 0 0 calc(28px / 2) #0275d8 inset}joomla-switcher input{position:absolute;top:0;left:0;z-index:2;width:62px;height:28px;padding:0;margin:0;cursor:pointer;opacity:0}joomla-switcher .switch{position:absolute;top:0;width:calc(62px / 2);height:calc(28px - (1px * 2));background:#fff;border-radius:.25rem;box-shadow:0 0 1px rgba(0,0,0,.1) inset,0 1px 3px rgba(0,0,0,.15);transition:left .2s ease 0s}joomla-switcher input:checked~.switch{left:0}joomla-switcher input~:checked~.switch{left:calc((62px / 2) - (1px * 2))}joomla-switcher input:checked{z-index:0}joomla-switcher .switcher-labels{position:relative}joomla-switcher .switcher-labels span{position:absolute;top:0;left:10px;color:#636c72;visibility:hidden;opacity:0;transition:all .2s ease-in-out}joomla-switcher .switcher-labels span.active{visibility:visible;opacity:1;transition:all .2s ease-in-out}', document.head.appendChild(a);
      }
    } }]), b;
}(HTMLElement);customElements.define('joomla-switcher', SwitcherElement);

},{}]},{},[1]);
