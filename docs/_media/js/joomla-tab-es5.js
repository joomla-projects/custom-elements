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
}var TabElement = function (a) {
  function b() {
    _classCallCheck(this, b);var a = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));return a.includeCss(), a.hasActive = !1, a.currentActive = '', a;
  }return _inherits(b, a), _createClass(b, [{ key: 'recall', get: function get() {
      return this.getAttribute('recall');
    } }, { key: 'view', get: function get() {
      return this.getAttribute('view');
    }, set: function set(a) {
      this.setAttribute('view', a);
    } }, { key: 'orientation', get: function get() {
      return this.getAttribute('orientation');
    }, set: function set(a) {
      this.setAttribute('oriendation', a);
    } }], [{ key: 'observedAttributes', get: function get() {
      return ['recall', 'orientation', 'view'];
    } }]), _createClass(b, [{ key: 'connectedCallback', value: function connectedCallback() {
      var a = this;(!this.orientation || this.orientation && -1 === ['horizontal', 'vertical'].indexOf(this.orientation)) && (this.orientation = 'horizontal');var b = [].slice.call(this.querySelectorAll('section'));if (b) {
        if (this.createNavigation(b), b.forEach(function (b) {
          b.setAttribute('role', 'tabpanel'), b.hasAttribute('active') && (a.hasActive = !0, a.currentActive = b.id, a.querySelector('#tab-' + b.id).setAttribute('aria-selected', 'true'), a.querySelector('#tab-' + b.id).setAttribute('active', ''), a.querySelector('#tab-' + b.id).setAttribute('tabindex', '0'));
        }), this.hasActive || (b[0].setAttribute('active', ''), this.hasActive = !0, this.currentActive = b[0].id, this.querySelector('#tab-' + b[0].id).setAttribute('aria-selected', 'true'), this.querySelector('#tab-' + b[0].id).setAttribute('tabindex', '0'), this.querySelector('#tab-' + b[0].id).setAttribute('active', '')), this.keyListeners(b), window.location.href.match(/#\S[^\&]*/)) {
          var c = window.location.href.match(/#\S[^\&]*/),
              d = this.querySelector(c[0]);if (d) {
            var e = this.findAncestor(d, 'joomla-tab'),
                f = this.findAncestor(e, 'joomla-tab');if (f) {
              var g = this.findAncestor(e, 'section');f.showTab(g), this.show(d);
            } else this.showTab(d);
          }
        }if (this.hasAttribute('recall') && this.restoreState(), !this.querySelector('joomla-tab')) {
          this.checkView(this);var h = this;window.addEventListener('resize', function () {
            h.checkView(h);
          });
        }
      }
    } }, { key: 'disconnectedCallback', value: function disconnectedCallback() {
      var a = this.querySelector('ul'),
          b = [].slice.call(a.querySelectorAll('a'));b.forEach(function (a) {
        a.removeEventListener('click', this);
      }), a.removeEventListener('keydown', this);
    } }, { key: 'createNavigation', value: function createNavigation(a) {
      var b = this,
          c = document.createElement('ul');c.setAttribute('role', 'tablist');var d = function d(a) {
        a.preventDefault(), b.hasActive && b.hideCurrent();var c = b.currentActive;b.dispatchCustomEvent('joomla.tab.show', a.target, b.querySelector('#tab-' + c)), a.target.setAttribute('active', ''), a.target.setAttribute('aria-selected', 'true'), a.target.setAttribute('tabindex', '0'), b.querySelector(a.target.hash).setAttribute('active', ''), b.querySelector(a.target.hash).removeAttribute('aria-hidden'), b.currentActive = a.target.hash.substring(1), b.saveState(a.target.hash), b.dispatchCustomEvent('joomla.tab.shown', a.target, b.querySelector('#tab-' + c));
      };a.forEach(function (a) {
        if (a.id) {
          var b = a.hasAttribute('active'),
              e = document.createElement('li'),
              f = document.createElement('a');e.setAttribute('role', 'presentation'), f.setAttribute('role', 'tab'), f.setAttribute('aria-controls', a.id), f.setAttribute('aria-selected', b ? 'true' : 'false'), f.setAttribute('tabindex', b ? '0' : '-1'), f.setAttribute('href', '#' + a.id), f.setAttribute('id', 'tab-' + a.id), f.innerHTML = a.getAttribute('name'), b && f.setAttribute('active', ''), f.addEventListener('click', d), e.append(f), c.append(e), a.setAttribute('aria-labelledby', 'tab-' + a.id), b || a.setAttribute('aria-hidden', 'true');
        }
      }), this.insertAdjacentElement('afterbegin', c);
    } }, { key: 'hideCurrent', value: function hideCurrent() {
      if (this.currentActive) {
        var a = this.querySelector('a[aria-controls="' + this.currentActive + '"]');this.dispatchCustomEvent('joomla.tab.hide', a, this.querySelector('#tab-' + this.currentActive)), a.removeAttribute('active'), a.setAttribute('tabindex', '-1'), this.querySelector('#' + this.currentActive).removeAttribute('active'), this.querySelector('#' + this.currentActive).setAttribute('aria-hidden', 'true'), a.removeAttribute('aria-selected'), this.dispatchCustomEvent('joomla.tab.hidden', a, this.querySelector('#tab-' + this.currentActive));
      }
    } }, { key: 'showTab', value: function showTab(a) {
      var b = document.querySelector('#tab-' + a.id);b.click(), this.saveState('#' + a.id);
    } }, { key: 'show', value: function show(a) {
      a.click(), this.saveState(a.hash);
    } }, { key: 'keyListeners', value: function keyListeners() {
      var a = this;this.querySelector('ul').addEventListener('keydown', function keyBehaviour(b) {
        console.log(a.currentActive);var c = a.querySelector('#tab-' + a.currentActive),
            d = [].slice.call(a.querySelector('ul').querySelectorAll('a')),
            e = c.parentNode.previousElementSibling || d[d.length - 1],
            f = c.parentNode.nextElementSibling || d[0];if (!(b.metaKey || b.altKey)) switch (b.keyCode) {case 37:case 38:
            'li' === e.tagName.toLowerCase() ? (e.querySelector('a').click(), e.querySelector('a').focus(), a.saveState(e.hash)) : (e.click(), e.focus(), a.saveState(e.hash)), b.preventDefault();break;case 39:case 40:
            'a' === f.tagName.toLowerCase() ? (f.click(), f.focus(), a.saveState(f.hash)) : (f.querySelector('a').click(), f.querySelector('a').focus(), a.saveState(f.hash)), b.preventDefault();break;default:}
      });
    } }, { key: 'getStorageKey', value: function getStorageKey() {
      return window.location.href.toString().split(window.location.host)[1].replace(/&return=[a-zA-Z0-9%]+/, '').split('#')[0];
    } }, { key: 'restoreState', value: function restoreState() {
      var a = sessionStorage.getItem(this.getStorageKey());if (a) {
        var b = this.querySelector(a);if (b) {
          var c = this.findAncestor(b, 'joomla-tab'),
              d = this.findAncestor(c, 'joomla-tab');if (d) {
            var e = this.findAncestor(c, 'section');d.showTab(e), this.show(b);
          } else this.showTab(b);
        }
      }
    } }, { key: 'saveState', value: function saveState(a) {
      var b = this.getStorageKey();sessionStorage.setItem(b, a);
    } }, { key: 'checkView', value: function checkView(a) {
      var b = a.querySelector('ul');if (920 < document.body.getBoundingClientRect().width) {
        a.view = 'tabs';var c = [].slice.call(b.querySelectorAll('section'));c.forEach(function (b) {
          a.appendChild(b);
        });
      } else {
        a.view = 'accordion';var d = [].slice.call(a.querySelectorAll('section'));d.forEach(function (a) {
          var c = a.id && b.querySelector('a[aria-controls="' + a.id + '"]');c && c.parentNode.appendChild(a);
        });
      }
    } }, { key: 'findAncestor', value: function findAncestor(a, b) {
      for (; (a = a.parentElement) && a.nodeName.toLowerCase() !== b;) {}return a;
    } }, { key: 'dispatchCustomEvent', value: function dispatchCustomEvent(a, b, c) {
      var d = new CustomEvent(a, { bubbles: !0, cancelable: !0 });d.relatedTarget = c, b.dispatchEvent(d), b.removeEventListener(a, b);
    } }, { key: 'includeCss', value: function includeCss() {
      if (!document.getElementById('joomla-tab-stylesheet')) {
        var a = document.createElement('style');a.id = 'joomla-tab-stylesheet', a.innerText = '{{stylesheet}}', document.head.appendChild(a);
      }
    } }]), b;
}(HTMLElement);customElements.define('joomla-tab', TabElement);

},{}]},{},[1]);
