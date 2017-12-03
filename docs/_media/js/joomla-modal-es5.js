(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var JoomlaModalElement = function (_HTMLElement) {
  _inherits(JoomlaModalElement, _HTMLElement);

  function JoomlaModalElement() {
    _classCallCheck(this, JoomlaModalElement);

    var _this = _possibleConstructorReturn(this, (JoomlaModalElement.__proto__ || Object.getPrototypeOf(JoomlaModalElement)).call(this));

    _this.modal = _this;
    _this.triggerBtn = '';
    _this.focusableElements = null;
    _this.focusableSelectors = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];
    _this.width = '';
    _this.height = '';
    _this.innerWidth = '';
    _this.innerHeight = '';
    _this.iframe = '';
    _this.container = _this.querySelector('.joomla-modal-dialog');
    _this.title = _this.getAttribute('title') || 'Modal';
    return _this;
  }

  _createClass(JoomlaModalElement, [{
    key: 'attributeChangedCallback',

    /*eslint-disable */
    value: function attributeChangedCallback(attr, oldValue, newValue) {
      switch (attr) {}
    }
    /* eslint-enable */

  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (!this.id) {
        throw new Error('`Joomla-modal` requires an id');
      }

      this.setAttribute('role', 'dialog');
      this.classList.add('fade');
      this.iframe = this.getAttribute('iframe') || '';
      this.width = this.getAttribute('width') || '100%';
      this.height = this.getAttribute('height') || '600px';

      if (!this.container) {
        var cont = document.createElement('div');
        cont.classList.add('joomla-modal-dialog');
        cont.setAttribute('role', 'document');
        cont.innerHTML = this.innerHTML;
        this.innerHTML = '';
        this.appendChild(cont);
        this.container = this.querySelector('.joomla-modal-dialog');
      }

      this.header = this.querySelector('header');
      this.main = this.querySelector('section');
      this.footer = this.querySelector('footer');

      this.setAttribute('tabindex', -1);

      // Unique Id
      var randomId = 'modal-title-' + new Date().getUTCMilliseconds();
      this.setAttribute('aria-labelledby', randomId);

      if (!this.header) {
        var htag = document.createElement('h5');
        htag.innerText = this.title;
        htag.id = randomId;
        var closeButton = document.createElement('button');
        closeButton.setAttribute('aria-label', 'Close');
        closeButton.setAttribute('data-dismiss', '');
        closeButton.innerHTML = '<span aria-hidden="true">×</span>';

        var header = document.createElement('header');

        header.appendChild(htag);
        header.appendChild(closeButton);

        this.container.insertAdjacentElement('afterbegin', header);
      }
      this.header = this.container.querySelector('header');
      this.body = this.container.querySelector('section');
      this.footer = this.container.querySelector('footer');

      this.triggerBtn = document.querySelector('button[data-href="#' + this.id + '"]');
      if (this.triggerBtn) {
        this.triggerBtn.addEventListener('click', this.open.bind(this));
      }
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      if (this.triggerBtn) {
        this.triggerBtn.removeEventListener('click', this.open);
      }
    }
  }, {
    key: 'open',
    value: function open() {
      var _this2 = this;

      var self = this;
      var dropShadow = document.createElement('div');
      dropShadow.classList.add('modal-backdrop', 'fade');
      dropShadow.classList.add('modal-backdrop', 'show');
      document.body.appendChild(dropShadow);

      this.removeAttribute('aria-hidden');
      // Iframe specific code, reload
      if (this.body) {
        this.iframeEl = this.main.querySelector('iframe');
        if (this.iframe) {
          if (this.iframeEl) {
            this.iframeEl.parentNode.remove(this.iframeEl);
          }
          var newIframe = document.createElement('iframe');
          newIframe.width = this.width;
          newIframe.height = this.height;
          newIframe.src = this.iframe;
          newIframe.setAttribute('frameborder', 0);
          this.body.appendChild(newIframe);
          this.iframeEl = this.main.querySelector('iframe');
        }
      }

      // Adjust the dimensions
      this.adjustDimensions();

      this.scrollTop = 0;
      this.modal.classList.add('show');

      this.focusableElements = [].slice.call(this.querySelectorAll(this.focusableSelectors.join()));
      if (this.focusableElements.length) {
        this.focusableElements[0].focus();
      } else {
        this.header.querySelector('button').focus();
      }

      this.addEventListener('keydown', this.keyPress.bind(this));

      // Close on click outside the modal
      document.addEventListener('click', function (event) {
        if (!self.findAncestorByClass(event.target, 'joomla-modal-dialog') && event.target !== _this2.triggerBtn) {
          self.close();
        }
      });

      // Is there a close button?
      var modalButtons = self.querySelectorAll('button[data-dismiss]');
      // Add listeners for close
      modalButtons.forEach(function (modalButton) {
        modalButton.addEventListener('click', self.close.bind(_this2));
      });
    }
  }, {
    key: 'close',
    value: function close() {
      this.removeEventListener('keydown', this.keyPress, true);

      var dropShadow = document.querySelector('.modal-backdrop');
      if (dropShadow) document.body.removeChild(dropShadow);
      this.setAttribute('aria-hidden', 'true');
      this.classList.remove('show');
      this.main.innerHTML = '';
      this.triggerBtn.focus();
    }
  }, {
    key: 'handleTabEvent',
    value: function handleTabEvent(e) {
      // Get the index of the current active element within the modal
      var focusedIndex = this.focusableElements.indexOf(document.activeElement);
      // Handle TAB event if need to skip
      // If first element is focused and shiftkey is in use
      if (e.shiftKey && (focusedIndex === 0 || focusedIndex === -1)) {
        // Focus last item within modal
        this.focusableElements[this.focusableElements.length - 1].focus();
        e.preventDefault();
      }
      // If last element is focused and shiftkey is not in use
      if (!e.shiftKey && focusedIndex === this.focusableElements.length - 1) {
        // Focus first item within modal
        this.focusableElements[0].focus();
        e.preventDefault();
      }
    }
  }, {
    key: 'keyPress',
    value: function keyPress(e) {
      // ESC key
      if (e.keyCode === 27) {
        this.close();
      }
      // TAB key
      if (e.keyCode === 9) {
        this.handleTabEvent(e);
      }
    }
  }, {
    key: 'adjustDimensions',
    value: function adjustDimensions() {
      // Legacy code
      // Height
      var modalHeight = this.offsetHeight;
      modalHeight += parseInt(window.getComputedStyle(this).getPropertyValue('margin-top'), 10);
      modalHeight += parseInt(window.getComputedStyle(this).getPropertyValue('margin-bottom'), 10);

      var bodyHeight = this.body.getBoundingClientRect.height;
      var bodyHeightOuter = this.body.offsetHeight;
      bodyHeightOuter += parseInt(window.getComputedStyle(this.body).getPropertyValue('margin-top'), 10);
      bodyHeightOuter += parseInt(window.getComputedStyle(this.body).getPropertyValue('margin-bottom'), 10);

      var headerHeight = this.header.offsetHeight;
      headerHeight += parseInt(window.getComputedStyle(this.header).getPropertyValue('margin-top'), 10);
      headerHeight += parseInt(window.getComputedStyle(this.header).getPropertyValue('margin-bottom'), 10);

      var footerHeight = this.footer.offsetHeight;
      footerHeight += parseInt(window.getComputedStyle(this.footer).getPropertyValue('margin-top'), 10);
      footerHeight += parseInt(window.getComputedStyle(this.footer).getPropertyValue('margin-bottom'), 10);

      var padding = this.offsetTop;
      var maxModalHeight = window.height - padding * 2;
      var modalBodyPadding = bodyHeightOuter - bodyHeight;
      var maxModalBodyHeight = maxModalHeight - (headerHeight + footerHeight + modalBodyPadding);

      if (this.iframeEl) {
        var iframeHeight = this.iframeEl.getBoundingClientRect().height;

        if (iframeHeight > maxModalBodyHeight) {
          this.container.style.maxHeight = maxModalBodyHeight;
          this.container.style.overflowY = 'auto';
          this.iframeEl.style.maxHeight = maxModalBodyHeight - modalBodyPadding;
        }
      } else if (modalHeight > maxModalHeight) {
        this.container.style.maxHeight = maxModalBodyHeight;
        this.container.style.overflowY = 'auto';
      }
    }

    /* eslint-disable */

  }, {
    key: 'findAncestorByClass',
    value: function findAncestorByClass(el, className) {
      while ((el = el.parentElement) && !el.classList.contains(className)) {}
      return el;
    }
    /* eslint-enable */

  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['width', 'height', 'innerWidth', 'innerHeight', 'iframe'];
    }
  }]);

  return JoomlaModalElement;
}(HTMLElement);

customElements.define('joomla-modal', JoomlaModalElement);

},{}]},{},[1]);
