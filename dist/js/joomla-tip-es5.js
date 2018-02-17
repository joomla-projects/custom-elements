(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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
  if (!document.head.querySelector('#joomla-tip-style')) {
    var style = document.createElement('style');
    style.id = 'joomla-tip-style';
    style.innerHTML = 'joomla-tip{position:relative;display:inline-block}joomla-tip button{width:1.6rem;height:1.6rem;font-family:serif;font-size:1.4rem;font-weight:700;line-height:1.4rem;color:#fff;background:#1c3d5c;border:0;border-radius:50%}joomla-tip .toggletip-bubble{position:absolute;z-index:1040;display:inline-block;width:14rem;padding:.5rem .8rem;font-size:.9rem;line-height:1.2rem;color:#fff;background:#222;border-radius:.25rem;box-shadow:0 0 5px rgba(0,0,0,.4);transition:all ease-in;animation-duration:.3s}joomla-tip .toggletip-bubble::after{position:absolute;top:.6rem;right:100%;width:0;height:0;content:"";border-style:solid}joomla-tip .toggletip-bubble.top{bottom:100%;left:50%;margin-bottom:.6rem;transform:translate(-50%,0);animation-name:toggletip-fadeInTop}joomla-tip .toggletip-bubble.top::after{top:100%;bottom:auto;left:50%;border-color:#222 transparent transparent;border-width:6px 6px 0;transform:translateX(-50%)}joomla-tip .toggletip-bubble.left{top:50%;right:100%;margin-right:.6rem;transform:translate(0,-50%);animation-name:toggletip-fadeInLeft}joomla-tip .toggletip-bubble.left::after{top:50%;bottom:auto;left:100%;border-color:transparent transparent transparent #222;border-width:6px 0 6px 6px;transform:translateY(-50%)}joomla-tip .toggletip-bubble.right{top:50%;left:100%;margin-left:.6rem;transform:translate(0,-50%);animation-name:toggletip-fadeInRight}joomla-tip .toggletip-bubble.right::after{top:50%;right:100%;bottom:auto;border-color:transparent #222 transparent transparent;border-width:6px 6px 6px 0;transform:translateY(-50%)}joomla-tip .toggletip-bubble.bottom{top:100%;left:50%;margin-top:.6rem;transform:translate(-50%,0);animation-name:toggletip-fadeInBottom}joomla-tip .toggletip-bubble.bottom::after{top:-6px;left:50%;border-color:transparent transparent #222;border-width:0 6px 6px;transform:translateX(-50%)}@keyframes toggletip-fadeInRight{from{opacity:0;transform:translate(-10px,-50%)}to{opacity:1;transform:translate(0,-50%)}}@keyframes toggletip-fadeInLeft{from{opacity:0;transform:translate(10px,-50%)}to{opacity:1;transform:translate(0,-50%)}}@keyframes toggletip-fadeInTop{from{opacity:0;transform:translate(-50%,10px)}to{opacity:1;transform:translate(-50%,0)}}@keyframes toggletip-fadeInBottom{from{opacity:0;transform:translate(-50%,-10px)}to{opacity:1;transform:translate(-50%,0)}}';
    document.head.appendChild(style);
  }

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
});

},{}]},{},[1]);
