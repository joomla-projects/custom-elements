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
  customElements.define('joomla-tip', function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'connectedCallback',

      /* Lifecycle, element appended to the DOM */
      value: function connectedCallback() {
        if (!this.position || this.position && ['top', 'bottom', 'left', 'right'].indexOf(this.position) === -1) {
          this.position = 'top';
        }

        // create the html
        this.btnElement = document.createElement('button');
        this.spanElement = document.createElement('span');

        this.btnElement.setAttribute('aria-label', this.label ? this.label : 'more info');
        this.btnElement.innerHTML = this.text ? this.text : '';
        this.spanElement.setAttribute('role', 'status');

        // On click
        this.btnElement.addEventListener('click', this.showTip.bind(this));

        this.append(this.btnElement);
        this.append(this.spanElement);
      }

      /* Lifecycle, element removed from the DOM */

    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        this.querySelector('button').removeEventListener('click', this.showTip, true);
      }
    }, {
      key: 'showTip',
      value: function showTip() {
        var _this2 = this;

        var self = this;

        // Close on outside click
        document.addEventListener('click', function (e) {
          if (_this2.btnElement !== e.target) {
            _this2.spanElement.innerHTML = '';
            self.removeEventListener('keydown', _this2);
          }
        });

        // Remove toggletip on ESC
        document.addEventListener('keydown', function (e) {
          if ((e.keyCode || e.which) === 9) {
            _this2.spanElement.innerHTML = '';
            self.removeEventListener('keydown', _this2);
          }
        });

        this.spanElement.innerHTML = '';
        this.spanElement.innerHTML = '<span class="toggletip-bubble ' + this.position + '">' + this.tip + '</span>';
      }

      /* Method to dispatch events */

    }, {
      key: 'dispatchCustomEvent',
      value: function dispatchCustomEvent(eventName) {
        var OriginalCustomEvent = new CustomEvent(eventName, { bubbles: true, cancelable: true });
        OriginalCustomEvent.relatedTarget = this;
        this.dispatchEvent(OriginalCustomEvent);
        this.removeEventListener(eventName, this);
      }
    }, {
      key: 'type',
      get: function get() {
        return this.getAttribute('type');
      },
      set: function set(value) {
        return this.setAttribute('type', value);
      }
    }, {
      key: 'label',
      get: function get() {
        return this.getAttribute('label');
      },
      set: function set(value) {
        return this.setAttribute('label', value);
      }
    }, {
      key: 'tip',
      get: function get() {
        return this.getAttribute('tip');
      },
      set: function set(value) {
        return this.setAttribute('tip', value);
      }
    }, {
      key: 'position',
      get: function get() {
        return this.getAttribute('position');
      },
      set: function set(value) {
        return this.setAttribute('position', value);
      }
    }, {
      key: 'text',
      get: function get() {
        return this.getAttribute('text');
      },
      set: function set(value) {
        return this.getAttribute('text', value);
      }
    }], [{
      key: 'observedAttributes',

      /* Attributes to monitor */
      get: function get() {
        return ['type', 'label', 'tip', 'text', 'position'];
      }
    }]);

    return _class;
  }(HTMLElement));
})();

},{}]},{},[1]);
