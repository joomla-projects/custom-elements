function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

(function () {
  customElements.define('joomla-collapse', /*#__PURE__*/function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    var _super = _createSuper(_class);

    function _class() {
      _classCallCheck(this, _class);

      return _super.apply(this, arguments);
    }

    _createClass(_class, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var self = this; // id is required

        if (!this.id) return;
        var linked = [].slice.call(document.querySelectorAll("[href=\"#".concat(this.id, "\"],[data-target=\"#").concat(this.id, "\"]")));
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
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var linked = document.querySelector("[href=\"#".concat(this.id, "\"]"));
        if (!linked) linked = document.querySelector("[data-target=\"#".concat(this.id, "\"]"));

        if (linked) {
          linked.removeEventListener('click', this);
        }
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attr, oldValue, newValue) {
        var linked = document.querySelector("[href=\"#".concat(this.id, "\"]"));

        switch (attr) {
          case 'state':
            if (newValue === 'closed') {
              linked.setAttribute('aria-expanded', 'false');
            } else if (newValue === 'open') {
              linked.setAttribute('aria-expanded', 'true');
            }

            break;
        }
      }
    }, {
      key: "toggle",
      value: function toggle() {
        var linked = document.querySelector("[href=\"#".concat(this.id, "\"]"));
        if (!linked) linked = document.querySelector("[data-target=\"#".concat(this.id, "\"]"));

        if (this.state === 'closed') {
          this.state = 'open';
          linked.setAttribute('aria-expanded', 'true');
        } else {
          this.state = 'closed';
          linked.setAttribute('aria-expanded', 'false');
        }
      }
    }, {
      key: "state",
      get: function get() {
        return this.getAttribute('state');
      },
      set: function set(value) {
        return this.setAttribute('state', value);
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['state'];
      }
    }]);

    return _class;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
})();
