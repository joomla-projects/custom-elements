function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function t(e) {
  return (t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  })(e);
}

function e(t, e) {
  var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

  if (!o) {
    if (Array.isArray(t) || (o = function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return n(t, e);
      var o = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === o && t.constructor && (o = t.constructor.name);
      if ("Map" === o || "Set" === o) return Array.from(t);
      if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return n(t, e);
    }(t)) || e && t && "number" == typeof t.length) {
      o && (t = o);

      var i = 0,
          r = function r() {};

      return {
        s: r,
        n: function n() {
          return i >= t.length ? {
            done: !0
          } : {
            done: !1,
            value: t[i++]
          };
        },
        e: function e(t) {
          throw t;
        },
        f: r
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var s,
      u = !0,
      a = !1;
  return {
    s: function s() {
      o = o.call(t);
    },
    n: function n() {
      var t = o.next();
      return u = t.done, t;
    },
    e: function e(t) {
      a = !0, s = t;
    },
    f: function f() {
      try {
        u || null == o["return"] || o["return"]();
      } finally {
        if (a) throw s;
      }
    }
  };
}

function n(t, e) {
  (null == e || e > t.length) && (e = t.length);

  for (var n = 0, o = new Array(e); n < e; n++) {
    o[n] = t[n];
  }

  return o;
}

function o(t, e) {
  for (var n = 0; n < e.length; n++) {
    var o = e[n];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
  }
}

function i(e, n) {
  return !n || "object" !== t(n) && "function" != typeof n ? r(e) : n;
}

function r(t) {
  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}

function s(t) {
  var e = "function" == typeof Map ? new Map() : void 0;
  return (s = function s(t) {
    if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
    var n;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");

    if (void 0 !== e) {
      if (e.has(t)) return e.get(t);
      e.set(t, o);
    }

    function o() {
      return u(t, arguments, c(this).constructor);
    }

    return o.prototype = Object.create(t.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), l(o, t);
  })(t);
}

function u(t, e, n) {
  return (u = a() ? Reflect.construct : function (t, e, n) {
    var o = [null];
    o.push.apply(o, e);
    var i = new (Function.bind.apply(t, o))();
    return n && l(i, n.prototype), i;
  }).apply(null, arguments);
}

function a() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;

  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch (t) {
    return !1;
  }
}

function l(t, e) {
  return (l = Object.setPrototypeOf || function (t, e) {
    return t.__proto__ = e, t;
  })(t, e);
}

function c(t) {
  return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  })(t);
}

var f = function (t) {
  !function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && l(t, e);
  }(y, s(HTMLElement));
  var n,
      u,
      f,
      h,
      b,
      d = (n = y, u = a(), function () {
    var t,
        e = c(n);

    if (u) {
      var o = c(this).constructor;
      t = Reflect.construct(e, arguments, o);
    } else t = e.apply(this, arguments);

    return i(this, t);
  });

  function y() {
    var t;
    return function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }(this, y), (t = d.call(this)).close = t.close.bind(r(t)), t.destroyCloseButton = t.destroyCloseButton.bind(r(t)), t.createCloseButton = t.createCloseButton.bind(r(t)), t.onMutation = t.onMutation.bind(r(t)), t.observer = new MutationObserver(t.onMutation), t.observer.observe(r(t), {
      attributes: !1,
      childList: !0,
      subtree: !0
    }), t.addEventListener("animationend", function (e) {
      "joomla-alert-fade-in" === e.animationName && e.target === r(t) && (t.dispatchEvent(new CustomEvent("joomla.alert.shown")), t.style.removeProperty("animationName"));
    }), t.addEventListener("animationend", function (e) {
      "joomla-alert-fade-out" === e.animationName && e.target === r(t) && (t.dispatchEvent(new CustomEvent("joomla.alert.closed")), t.remove());
    }), t;
  }

  return f = y, b = [{
    key: "observedAttributes",
    get: function get() {
      return ["type", "role", "dismiss", "auto-dismiss", "close-text"];
    }
  }], (h = [{
    key: "type",
    get: function get() {
      return this.getAttribute("type");
    },
    set: function set(t) {
      this.setAttribute("type", t);
    }
  }, {
    key: "role",
    get: function get() {
      return this.getAttribute("role");
    },
    set: function set(t) {
      this.setAttribute("role", t);
    }
  }, {
    key: "closeText",
    get: function get() {
      return this.getAttribute("close-text");
    },
    set: function set(t) {
      this.setAttribute("close-text", t);
    }
  }, {
    key: "dismiss",
    get: function get() {
      return this.getAttribute("dismiss");
    },
    set: function set(t) {
      this.setAttribute("dismiss", t);
    }
  }, {
    key: "autodismiss",
    get: function get() {
      return this.getAttribute("auto-dismiss");
    },
    set: function set(t) {
      this.setAttribute("auto-dismiss", t);
    }
  }, {
    key: "connectedCallback",
    value: function value() {
      this.dispatchEvent(new CustomEvent("joomla.alert.show")), this.style.animationName = "joomla-alert-fade-in", this.type && ["info", "warning", "danger", "success"].includes(this.type) || this.setAttribute("type", "info"), this.role && ["alert", "alertdialog"].includes(this.role) || this.setAttribute("role", "alert"), this.firstElementChild && "BUTTON" === this.firstElementChild.tagName && (this.button = this.firstElementChild, this.button.classList.contains("joomla-alert--close") && this.button.classList.add("joomla-alert--close"), "" === this.button.innerHTML && (this.button.innerHTML = '<span aria-hidden="true">&times;</span>'), this.button.hasAttribute("aria-label") || this.button.setAttribute("aria-label", this.closeText)), this.hasAttribute("dismiss") && !this.button && this.createCloseButton(), this.hasAttribute("auto-dismiss") && this.autoDismiss();
    }
  }, {
    key: "disconnectedCallback",
    value: function value() {
      this.button && this.button.removeEventListener("click", this.close), this.observer.disconnect();
    }
  }, {
    key: "attributeChangedCallback",
    value: function value(t, e, n) {
      switch (t) {
        case "type":
          (!n || n && -1 === ["info", "warning", "danger", "success"].indexOf(n)) && (this.type = "info");
          break;

        case "role":
          (!n || n && -1 === ["alert", "alertdialog"].indexOf(n)) && (this.role = "alert");
          break;

        case "dismiss":
          n && "" !== n || e && "" !== e ? this.button && "false" === n ? this.destroyCloseButton() : this.button || "false" === n || this.createCloseButton() : this.button && !this.hasAttribute("dismiss") ? this.destroyCloseButton() : !this.button && this.hasAttribute("dismiss") && this.createCloseButton();
          break;

        case "close-text":
          n && n === e || this.button && this.button.setAttribute("aria-label", n);
          break;

        case "auto-dismiss":
          this.autoDismiss();
      }
    }
  }, {
    key: "onMutation",
    value: function value(t) {
      var n,
          o = e(t);

      try {
        for (o.s(); !(n = o.n()).done;) {
          var i = n.value;
          "childList" === i.type && i.addedNodes.length && this.button && this.firstElementChild !== this.button && this.prepend(this.button);
        }
      } catch (t) {
        o.e(t);
      } finally {
        o.f();
      }
    }
  }, {
    key: "close",
    value: function value() {
      this.dispatchEvent(new CustomEvent("joomla.alert.close")), this.style.animationName = "joomla-alert-fade-out";
    }
  }, {
    key: "createCloseButton",
    value: function value() {
      this.button = document.createElement("button"), this.button.setAttribute("type", "button"), this.button.classList.add("joomla-alert--close"), this.button.innerHTML = '<span aria-hidden="true">&times;</span>', this.button.setAttribute("aria-label", this.closeText), this.insertAdjacentElement("afterbegin", this.button), this.button.addEventListener("click", this.close);
    }
  }, {
    key: "destroyCloseButton",
    value: function value() {
      this.button && (this.button.removeEventListener("click", this.close), this.button.parentNode.removeChild(this.button), this.button = null);
    }
  }, {
    key: "autoDismiss",
    value: function value() {
      var t = parseInt(this.getAttribute("auto-dismiss"), 10);
      setTimeout(this.close, t >= 10 ? t : 3e3);
    }
  }]) && o(f.prototype, h), b && o(f, b), y;
}();

customElements.get("joomla-alert") || customElements.define("joomla-alert", f);
