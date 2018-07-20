(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

(function () {
  /** Include the relative styles */
  if (!document.head.querySelector('#joomla-collapse-style')) {
    var style = document.createElement('style');
    style.id = 'joomla-collapse-style';
    style.innerHTML = 'joomla-collapse[state=closed]{display:none}joomla-collapse[state=open]{display:block}';
    document.head.appendChild(style);
  }

  customElements.define('joomla-collapse', function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var self = this;
        // id is required
        if (!this.id) return;

        var linked = [].slice.call(document.querySelectorAll('[href="#' + this.id + '"],[data-target="#' + this.id + '"]'));

        linked.forEach(function (element) {
          if (!self.state || self.state && self.state === 'closed') {
            self.state = 'closed';
            element.setAttribute('aria-expanded', 'false');
            element.setAttribute('aria-controls', self.id);
          } else {
            element.setAttribute('aria-expanded', 'true');
            element.setAttribute('aria-controls', self.id);
          }

          element.addEventListener('click', function (event) {
            var colId = '';
            if (!event.target.hasAttribute('data-target')) colId = event.target.getAttribute('href').replace('#', '');
            if (!event.target.hasAttribute('href')) colId = event.target.getAttribute('data-target').replace('#', '');
            event.preventDefault();
            event.stopPropagation();
            document.getElementById(colId).toggle();
          });
        });
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        var linked = document.querySelector('[href="#' + this.id + '"]');
        if (!linked) linked = document.querySelector('[data-target="#' + this.id + '"]');
        if (linked) {
          linked.removeEventListener('click', this);
        }
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        var linked = document.querySelector('[href="#' + this.id + '"]');
        switch (attr) {
          case 'state':
            if (newValue === 'closed') {
              linked.setAttribute('aria-expanded', 'false');
            } else if (newValue === 'open') {
              linked.setAttribute('aria-expanded', 'true');
            }
            break;
          default:
            break;
        }
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        var linked = document.querySelector('[href="#' + this.id + '"]');
        if (!linked) linked = document.querySelector('[data-target="#' + this.id + '"]');
        if (this.state === 'closed') {
          this.state = 'open';
          linked.setAttribute('aria-expanded', 'true');
        } else {
          this.state = 'closed';
          linked.setAttribute('aria-expanded', 'false');
        }
      }
    }, {
      key: 'state',
      get: function get() {
        return this.getAttribute('state');
      },
      set: function set(value) {
        return this.setAttribute('state', value);
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['state'];
      }
    }]);

    return _class;
  }(HTMLElement));
})();

},{}]},{},[1]);
