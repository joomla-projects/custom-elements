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
}if (!document.head.querySelector('#joomla-modal-style')) {
  var style = document.createElement('style');style.id = 'joomla-modal-style', style.innerHTML = 'joomla-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;box-sizing:inherit;display:none;max-width:500px;margin:10px auto;overflow:hidden;border-radius:5px;outline:0}joomla-modal.jviewport-width10{width:10vw;margin-left:-5vw}joomla-modal.jviewport-width20{width:20vw;margin-left:-10vw}joomla-modal.jviewport-width30{width:30vw;margin-left:-15vw}joomla-modal.jviewport-width40{width:40vw;margin-left:-20vw}joomla-modal.jviewport-width50{width:50vw;margin-left:-25vw}joomla-modal.jviewport-width60{width:60vw;margin-left:-30vw}joomla-modal.jviewport-width70{width:70vw;margin-left:-35vw}joomla-modal.jviewport-width80{width:80vw;margin-left:-40vw}joomla-modal.jviewport-width90{width:90vw;margin-left:-45vw}joomla-modal.jviewport-width100{width:100vw;margin-left:-50vw}joomla-modal.show{display:block}joomla-modal .joomla-modal-dialog{position:relative;display:flex;flex-direction:column;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}joomla-modal .joomla-modal-dialog.fade{opacity:0;transition:opacity .15s linear}joomla-modal .joomla-modal-dialog.fade.show{opacity:1}joomla-modal .joomla-modal-dialog header{display:flex;align-items:center;justify-content:space-between;padding:15px;border-bottom:1px solid #e9ecef}joomla-modal .joomla-modal-dialog header button{float:right;padding:0;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;cursor:pointer;background:0 0;border:0;opacity:.5;-webkit-appearance:none}joomla-modal .joomla-modal-dialog header h5{margin-bottom:0;line-height:1.5;font-size:1.25rem}joomla-modal .joomla-modal-dialog section{position:relative;flex:1 1 auto;padding:15px}joomla-modal .joomla-modal-dialog section.jviewport-height10{height:10vh}joomla-modal .joomla-modal-dialog section.jviewport-height20{height:20vh}joomla-modal .joomla-modal-dialog section.jviewport-height30{height:30vh}joomla-modal .joomla-modal-dialog section.jviewport-height40{height:40vh}joomla-modal .joomla-modal-dialog section.jviewport-height50{height:50vh}joomla-modal .joomla-modal-dialog section.jviewport-height60{height:60vh}joomla-modal .joomla-modal-dialog section.jviewport-height70{height:70vh}joomla-modal .joomla-modal-dialog section.jviewport-height80{height:80vh}joomla-modal .joomla-modal-dialog section.jviewport-height90{height:90vh}joomla-modal .joomla-modal-dialog section.jviewport-height100{height:100vh}joomla-modal .joomla-modal-dialog section[class*=jviewport-height],joomla-modal .joomla-modal-dialog section[class^=jviewport-height]{max-height:none}joomla-modal .joomla-modal-dialog footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding:15px;border-top:1px solid #e9ecef}joomla-modal .joomla-modal-dialog footer .btn{margin-left:10px}.modal-backdrop.show{opacity:.5}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}', document.head.appendChild(style);
}var JoomlaModalElement = function (a) {
  function b() {
    _classCallCheck(this, b);var a = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));return a.modal = a, a.triggerBtn = '', a.focusableElements = null, a.focusableSelectors = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'], a.width = '', a.height = '', a.innerWidth = '', a.innerHeight = '', a.iframe = '', a.container = a.querySelector('.joomla-modal-dialog'), a.title = a.getAttribute('title') || 'Modal', a;
  }return _inherits(b, a), _createClass(b, [{ key: 'attributeChangedCallback', value: function attributeChangedCallback(a) {
      switch (a) {}
    } }, { key: 'connectedCallback', value: function connectedCallback() {
      if (!this.id) throw new Error('`Joomla-modal` requires an id');if (this.setAttribute('role', 'dialog'), this.classList.add('fade'), this.iframe = this.getAttribute('iframe') || '', this.width = this.getAttribute('width') || '100%', this.height = this.getAttribute('height') || '600px', !this.container) {
        var b = document.createElement('div');b.classList.add('joomla-modal-dialog'), b.setAttribute('role', 'document'), b.innerHTML = this.innerHTML, this.innerHTML = '', this.appendChild(b), this.container = this.querySelector('.joomla-modal-dialog');
      }this.header = this.querySelector('header'), this.main = this.querySelector('section'), this.footer = this.querySelector('footer'), this.setAttribute('tabindex', -1);var a = 'modal-title-' + new Date().getUTCMilliseconds();if (this.setAttribute('aria-labelledby', a), !this.header) {
        var c = document.createElement('h5');c.innerText = this.title, c.id = a;var d = document.createElement('button');d.setAttribute('aria-label', 'Close'), d.setAttribute('data-dismiss', ''), d.innerHTML = '<span aria-hidden="true">\xD7</span>';var e = document.createElement('header');e.appendChild(c), e.appendChild(d), this.container.insertAdjacentElement('afterbegin', e);
      }this.header = this.container.querySelector('header'), this.body = this.container.querySelector('section'), this.footer = this.container.querySelector('footer'), this.triggerBtn = document.querySelector('button[data-href="#' + this.id + '"]'), this.triggerBtn && this.triggerBtn.addEventListener('click', this.open.bind(this));
    } }, { key: 'disconnectedCallback', value: function disconnectedCallback() {
      this.triggerBtn && this.triggerBtn.removeEventListener('click', this.open);
    } }, { key: 'open', value: function open() {
      var a = this,
          b = this,
          c = document.createElement('div');if (c.classList.add('modal-backdrop', 'fade'), c.classList.add('modal-backdrop', 'show'), document.body.appendChild(c), this.removeAttribute('aria-hidden'), this.body && (this.iframeEl = this.main.querySelector('iframe'), this.iframe)) {
        this.iframeEl && this.iframeEl.parentNode.remove(this.iframeEl);var e = document.createElement('iframe');e.width = this.width, e.height = this.height, e.src = this.iframe, e.setAttribute('frameborder', 0), this.body.appendChild(e), this.iframeEl = this.main.querySelector('iframe');
      }this.adjustDimensions(), this.scrollTop = 0, this.modal.classList.add('show'), this.focusableElements = [].slice.call(this.querySelectorAll(this.focusableSelectors.join())), this.focusableElements.length ? this.focusableElements[0].focus() : this.header.querySelector('button').focus(), this.addEventListener('keydown', this.keyPress.bind(this)), document.addEventListener('click', function (c) {
        b.findAncestorByClass(c.target, 'joomla-modal-dialog') || c.target === a.triggerBtn || b.close();
      });var d = b.querySelectorAll('button[data-dismiss]');d.forEach(function (c) {
        c.addEventListener('click', b.close.bind(a));
      });
    } }, { key: 'close', value: function close() {
      this.removeEventListener('keydown', this.keyPress, !0);var a = document.querySelector('.modal-backdrop');a && document.body.removeChild(a), this.setAttribute('aria-hidden', 'true'), this.classList.remove('show'), this.main.innerHTML = '', this.triggerBtn.focus();
    } }, { key: 'handleTabEvent', value: function handleTabEvent(a) {
      var b = this.focusableElements.indexOf(document.activeElement);a.shiftKey && (0 === b || -1 === b) && (this.focusableElements[this.focusableElements.length - 1].focus(), a.preventDefault()), a.shiftKey || b !== this.focusableElements.length - 1 || (this.focusableElements[0].focus(), a.preventDefault());
    } }, { key: 'keyPress', value: function keyPress(a) {
      27 === a.keyCode && this.close(), 9 === a.keyCode && this.handleTabEvent(a);
    } }, { key: 'adjustDimensions', value: function adjustDimensions() {
      var a = this.offsetHeight;a += parseInt(window.getComputedStyle(this).getPropertyValue('margin-top')), a += parseInt(window.getComputedStyle(this).getPropertyValue('margin-bottom'));var b = this.body.getBoundingClientRect.height,
          c = this.body.offsetHeight;c += parseInt(window.getComputedStyle(this.body).getPropertyValue('margin-top')), c += parseInt(window.getComputedStyle(this.body).getPropertyValue('margin-bottom'));var d = this.header.offsetHeight;d += parseInt(window.getComputedStyle(this.header).getPropertyValue('margin-top')), d += parseInt(window.getComputedStyle(this.header).getPropertyValue('margin-bottom'));var e = this.footer.offsetHeight;e += parseInt(window.getComputedStyle(this.footer).getPropertyValue('margin-top')), e += parseInt(window.getComputedStyle(this.footer).getPropertyValue('margin-bottom'));var f = this.offsetTop,
          g = window.height - 2 * f,
          h = c - b,
          i = g - (d + e + h);if (this.iframeEl) {
        var j = this.iframeEl.getBoundingClientRect().height;j > i && (this.container.style.maxHeight = i, this.container.style.overflowY = 'auto', this.iframeEl.style.maxHeight = i - h);
      } else a > g && (this.container.style.maxHeight = i, this.container.style.overflowY = 'auto');
    } }, { key: 'findAncestorByClass', value: function findAncestorByClass(a, b) {
      for (; (a = a.parentElement) && !a.classList.contains(b);) {}return a;
    } }], [{ key: 'observedAttributes', get: function get() {
      return ['width', 'height', 'innerWidth', 'innerHeight', 'iframe'];
    } }]), b;
}(HTMLElement);customElements.define('joomla-modal', JoomlaModalElement);

},{}]},{},[1]);
