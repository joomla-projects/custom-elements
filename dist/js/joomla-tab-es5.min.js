function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function t(e) {
  return (t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  })(e);
}

function e(t) {
  return function (t) {
    if (Array.isArray(t)) return i(t);
  }(t) || function (t) {
    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
  }(t) || n(t) || function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}

function n(t, e) {
  if (t) {
    if ("string" == typeof t) return i(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0;
  }
}

function i(t, e) {
  (null == e || e > t.length) && (e = t.length);

  for (var n = 0, i = new Array(e); n < e; n++) {
    i[n] = t[n];
  }

  return i;
}

function a(t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
  }
}

function r(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function o(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), e && d(t, e);
}

function s(t) {
  var e = h();
  return function () {
    var n,
        i = f(t);

    if (e) {
      var a = f(this).constructor;
      n = Reflect.construct(i, arguments, a);
    } else n = i.apply(this, arguments);

    return u(this, n);
  };
}

function u(e, n) {
  return !n || "object" !== t(n) && "function" != typeof n ? c(e) : n;
}

function c(t) {
  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}

function b(t) {
  var e = "function" == typeof Map ? new Map() : void 0;
  return (b = function b(t) {
    if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
    var n;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");

    if (void 0 !== e) {
      if (e.has(t)) return e.get(t);
      e.set(t, i);
    }

    function i() {
      return l(t, arguments, f(this).constructor);
    }

    return i.prototype = Object.create(t.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), d(i, t);
  })(t);
}

function l(t, e, n) {
  return (l = h() ? Reflect.construct : function (t, e, n) {
    var i = [null];
    i.push.apply(i, e);
    var a = new (Function.bind.apply(t, i))();
    return n && d(a, n.prototype), a;
  }).apply(null, arguments);
}

function h() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;

  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch (t) {
    return !1;
  }
}

function d(t, e) {
  return (d = Object.setPrototypeOf || function (t, e) {
    return t.__proto__ = e, t;
  })(t, e);
}

function f(t) {
  return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  })(t);
}

var v = function (t) {
  o(n, b(HTMLElement));
  var e = s(n);

  function n() {
    return r(this, n), e.apply(this, arguments);
  }

  return n;
}();

customElements.define("joomla-tab-element", v);

var m = function (t) {
  o(d, b(HTMLElement));
  var i,
      u,
      l,
      h = s(d);

  function d() {
    var t;
    return r(this, d), (t = h.call(this)).tabs = [], t.tabsElements = [], t.previousActive = null, t.onMutation = t.onMutation.bind(c(t)), t.keyBehaviour = t.keyBehaviour.bind(c(t)), t.activateTab = t.activateTab.bind(c(t)), t.deactivateTabs = t.deactivateTabs.bind(c(t)), t.checkView = t.checkView.bind(c(t)), t.observer = new MutationObserver(t.onMutation), t.observer.observe(c(t), {
      attributes: !1,
      childList: !0,
      subtree: !0
    }), t;
  }

  return i = d, l = [{
    key: "observedAttributes",
    get: function get() {
      return ["recall", "orientation", "view", "breakpoint"];
    }
  }], (u = [{
    key: "recall",
    get: function get() {
      return this.getAttribute("recall");
    },
    set: function set(t) {
      this.setAttribute("recall", t);
    }
  }, {
    key: "view",
    get: function get() {
      return this.getAttribute("view");
    },
    set: function set(t) {
      this.setAttribute("view", t);
    }
  }, {
    key: "orientation",
    get: function get() {
      return this.getAttribute("orientation");
    },
    set: function set(t) {
      this.setAttribute("orientation", t);
    }
  }, {
    key: "breakpoint",
    get: function get() {
      return parseInt(this.getAttribute("breakpoint"), 10);
    },
    set: function set(t) {
      this.setAttribute("breakpoint", t);
    }
  }, {
    key: "connectedCallback",
    value: function value() {
      var t = this;

      if ((!this.orientation || this.orientation && !["horizontal", "vertical"].includes(this.orientation)) && (this.orientation = "horizontal"), (!this.view || this.view && !["tabs", "accordion"].includes(this.view)) && (this.view = "tabs"), this.tabsElements = [].slice.call(this.children).filter(function (t) {
        return "joomla-tab-element" === t.tagName.toLowerCase();
      }), this.tabsElements.length) {
        if (this.isNested = this.parentNode.closest("joomla-tab") instanceof HTMLElement, this.hydrate(), this.hasAttribute("recall") && !this.isNested && this.activateFromState(), window.location.hash) {
          var e = window.location.hash.substr(1),
              n = this.tabs.filter(function (t) {
            return t.tab.id === e;
          });
          n.length && this.activateTab(n[0].tab, !1);
        }

        this.tabs.filter(function (t) {
          return t.tab.hasAttribute("active");
        }).length || this.activateTab(this.tabs[0].tab, !1), this.addEventListener("keyup", this.keyBehaviour), this.breakpoint && (this.checkView(), window.addEventListener("resize", function () {
          t.checkView();
        }));
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function value() {
      var t = this;
      this.tabs.map(function (e) {
        return e.tabButton.removeEventListener("click", t.activateTab), e.accordionButton.removeEventListener("click", t.activateTab), e;
      }), this.removeEventListener("keyup", this.keyBehaviour);
    }
  }, {
    key: "attributeChangedCallback",
    value: function value(t, e, n) {
      switch (t) {
        case "view":
          (!n || n && !["tabs", "accordion"].includes(n)) && (this.view = "tabs"), "tabs" === n && n !== e ? (this.tabButtonContainer && this.tabButtonContainer.removeAttribute("hidden"), this.tabs.map(function (t) {
            return t.accordionButton.setAttribute("hidden", "");
          })) : "accordion" === n && n !== e && (this.tabButtonContainer && this.tabButtonContainer.setAttribute("hidden", ""), this.tabs.map(function (t) {
            return t.accordionButton.removeAttribute("hidden");
          }));
      }
    }
  }, {
    key: "hydrate",
    value: function value() {
      var t = this;
      this.tabButtonContainer = document.createElement("div"), this.tabButtonContainer.setAttribute("role", "tablist"), this.insertAdjacentElement("afterbegin", this.tabButtonContainer), "accordion" === this.view && this.tabButtonContainer.setAttribute("hidden", ""), this.tabsElements.map(function (e) {
        var n = document.createElement("button");
        n.setAttribute("aria-expanded", !!e.hasAttribute("active")), n.setAttribute("aria-controls", e.id), n.setAttribute("type", "button"), n.innerHTML = '<span class="accordion-title">'.concat(e.getAttribute("name"), '<span class="accordion-icon"></span></span>'), e.insertAdjacentElement("beforebegin", n), "tabs" === t.view && n.setAttribute("hidden", ""), n.addEventListener("click", t.activateTab);
        var i = document.createElement("button");
        return i.setAttribute("aria-expanded", !!e.hasAttribute("active")), i.setAttribute("aria-controls", e.id), i.setAttribute("role", "tab"), i.setAttribute("type", "button"), i.innerHTML = "".concat(e.getAttribute("name")), t.tabButtonContainer.appendChild(i), i.addEventListener("click", t.activateTab), "tabs" === t.view ? e.setAttribute("role", "tabpanel") : e.setAttribute("role", "region"), t.tabs.push({
          tab: e,
          tabButton: i,
          accordionButton: n
        }), e;
      });
    }
  }, {
    key: "onMutation",
    value: function value(t) {
      var e,
          i = this,
          a = function (t, e) {
        var i = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];

        if (!i) {
          if (Array.isArray(t) || (i = n(t)) || e && t && "number" == typeof t.length) {
            i && (t = i);

            var a = 0,
                r = function r() {};

            return {
              s: r,
              n: function n() {
                return a >= t.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: t[a++]
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

        var o,
            s = !0,
            u = !1;
        return {
          s: function s() {
            i = i.call(t);
          },
          n: function n() {
            var t = i.next();
            return s = t.done, t;
          },
          e: function e(t) {
            u = !0, o = t;
          },
          f: function f() {
            try {
              s || null == i["return"] || i["return"]();
            } finally {
              if (u) throw o;
            }
          }
        };
      }(t);

      try {
        for (a.s(); !(e = a.n()).done;) {
          var r = e.value;
          "childList" === r.type && (r.addedNodes.length && [].slice.call(r.addedNodes).map(function (t) {
            return i.createNavs(t);
          }), r.removedNodes.length && [].slice.call(r.addedNodes).map(function (t) {
            return i.removeNavs(t);
          }));
        }
      } catch (t) {
        a.e(t);
      } finally {
        a.f();
      }
    }
  }, {
    key: "keyBehaviour",
    value: function value(t) {
      if ([].concat(e(this.tabs.map(function (t) {
        return t.tabButton;
      })), e(this.tabs.map(function (t) {
        return t.accordionButton;
      }))).includes(document.activeElement) && !t.metaKey && !t.altKey) {
        var n, i;

        if ("tabs" === this.view) {
          var a = this.tabs.findIndex(function (t) {
            return t.tab.hasAttribute("active");
          });
          n = a - 1 >= 0 ? this.tabs[a - 1] : this.tabs[this.tabs.length - 1], i = a + 1 <= this.tabs.length - 1 ? this.tabs[a + 1] : this.tabs[0];
        } else {
          var r = this.tabs.map(function (t) {
            return t.accordionButton;
          }).findIndex(function (t) {
            return t === document.activeElement;
          });
          n = r - 1 >= 0 ? this.tabs[r - 1] : this.tabs[this.tabs.length - 1], i = r + 1 <= this.tabs.length - 1 ? this.tabs[r + 1] : this.tabs[0];
        }

        switch (t.keyCode) {
          case 37:
          case 38:
            "tabs" === this.view ? (n.tabButton.click(), n.tabButton.focus()) : n.accordionButton.focus(), t.preventDefault();
            break;

          case 39:
          case 40:
            "tabs" === this.view ? (i.tabButton.click(), i.tabButton.focus()) : i.accordionButton.focus(), t.preventDefault();
        }
      }
    }
  }, {
    key: "deactivateTabs",
    value: function value() {
      var t = this;
      this.tabs.map(function (e) {
        return e.accordionButton.removeAttribute("aria-disabled"), e.tabButton.removeAttribute("aria-expanded"), e.accordionButton.setAttribute("aria-expanded", !1), e.tab.hasAttribute("active") && (t.dispatchCustomEvent("joomla.tab.hide", "tabs" === t.view ? e.tabButton : e.accordionButton, t.previousActive), e.tab.removeAttribute("active"), e.tab.setAttribute("tabindex", "-1"), t.dispatchCustomEvent("joomla.tab.hidden", "tabs" === t.view ? e.tabButton : e.accordionButton, t.previousActive), t.previousActive = "tabs" === t.view ? e.tabButton : e.accordionButton), e;
      });
    }
  }, {
    key: "activateTab",
    value: function value(t) {
      var e,
          n = this,
          i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];

      if (t.currentTarget ? e = this.tabs.find(function (e) {
        return ("tabs" === n.view ? e.tabButton : e.accordionButton) === t.currentTarget;
      }) : t instanceof HTMLElement ? e = this.tabs.find(function (e) {
        return e.tab === t;
      }) : Number.isInteger(t) && (e = this.tabs[t]), e) {
        if ("accordion" === this.view && this.tabs.find(function (t) {
          return "true" === t.accordionButton.getAttribute("aria-expanded");
        }) === e) return e.tab.hasAttribute("active") ? void e.tab.removeAttribute("active") : void e.tab.setAttribute("active", "");
        this.deactivateTabs(), e.tabButton.setAttribute("aria-expanded", !0), e.accordionButton.setAttribute("aria-expanded", !0), e.accordionButton.setAttribute("aria-disabled", !0), e.tab.setAttribute("active", ""), e.tabButton.removeAttribute("tabindex"), this.dispatchCustomEvent("joomla.tab.show", "tabs" === this.view ? e.tabButton : e.accordionButton, this.previousActive), i && ("tabs" === this.view ? e.tabButton.focus() : e.accordionButton.focus()), i && this.saveState(e.tab.id), this.dispatchCustomEvent("joomla.tab.shown", "tabs" === this.view ? e.tabButton : e.accordionButton, this.previousActive);
      }
    }
  }, {
    key: "createNavs",
    value: function value(t) {
      if (!(t instanceof Element && "joomla-tab-element" !== t.tagName.toLowerCase()) && [].some.call(this.children, function (e) {
        return e === t;
      }).length && t.getAttribute("name") && t.getAttribute("id")) {
        var e = [].slice.call(this.children).filter(function (t) {
          return "joomla-tab-element" === t.tagName.toLowerCase();
        }),
            n = e.findIndex(function (e) {
          return e === t;
        }),
            i = document.createElement("button");
        i.setAttribute("aria-expanded", !!t.hasAttribute("active")), i.setAttribute("aria-controls", t.id), i.setAttribute("type", "button"), i.innerHTML = '<span class="accordion-title">'.concat(t.getAttribute("name"), '<span class="accordion-icon"></span></span>'), t.insertAdjacentElement("beforebegin", i), "tabs" === this.view && i.setAttribute("hidden", ""), i.addEventListener("click", this.activateTab);
        var a = document.createElement("button");
        a.setAttribute("aria-expanded", !!t.hasAttribute("active")), a.setAttribute("aria-controls", t.id), a.setAttribute("role", "tab"), a.setAttribute("type", "button"), a.innerHTML = "".concat(t.getAttribute("name")), e.length - 1 === n ? (this.tabButtonContainer.appendChild(a), this.tabs.push({
          tab: t,
          tabButton: a,
          accordionButton: i
        })) : 0 === n ? (this.tabButtonContainer.insertAdjacentElement("afterbegin", a), this.tabs.slice(0, 0, {
          tab: t,
          tabButton: a,
          accordionButton: i
        })) : (this.tabs[n - 1].tabButton.insertAdjacentElement("afterend", a), this.tabs.slice(n - 1, 0, {
          tab: t,
          tabButton: a,
          accordionButton: i
        })), a.addEventListener("click", this.activateTab);
      }
    }
  }, {
    key: "removeNavs",
    value: function value(t) {
      if (!(t instanceof Element && "joomla-tab-element" !== t.tagName.toLowerCase()) && [].some.call(this.children, function (e) {
        return e === t;
      }).length && t.getAttribute("name") && t.getAttribute("id")) {
        var e = t.previousSilbingElement;
        e && "button" === e.tagName.toLowerCase() && (e.removeEventListener("click", this.keyBehaviour), e.parentNode.removeChild(e));
        var n = this.tabButtonContainer.querySelector("[aria-controls=".concat(e.id, "]"));
        n && (n.removeEventListener("click", this.keyBehaviour), n.parentNode.removeChild(n));
        var i = this.tabs.findIndex(function (e) {
          return e.tabs === t;
        });
        i - 1 == 0 ? this.tabs.shift() : i - 1 === this.tabs.length ? this.tabs.pop() : this.tabs.splice(i - 1, 1);
      }
    }
  }, {
    key: "checkView",
    value: function value() {
      if (this.breakpoint) if (document.body.getBoundingClientRect().width > this.breakpoint) {
        if ("tabs" === this.view) return;
        this.tabButtonContainer.removeAttribute("hidden"), this.tabs.map(function (t) {
          return t.accordionButton.setAttribute("hidden", ""), t.accordionButton.setAttribute("role", "tabpanel"), "true" === t.accordionButton.getAttribute("aria-expanded") && t.tab.setAttribute("active", ""), t;
        }), this.setAttribute("view", "tabs");
      } else {
        if ("accordion" === this.view) return;
        this.tabButtonContainer.setAttribute("hidden", ""), this.tabs.map(function (t) {
          return t.accordionButton.removeAttribute("hidden"), t.accordionButton.setAttribute("role", "region"), t;
        }), this.setAttribute("view", "accordion");
      }
    }
  }, {
    key: "getStorageKey",
    value: function value() {
      return window.location.href.toString().split(window.location.host)[1].replace(/&return=[a-zA-Z0-9%]+/, "").split("#")[0];
    }
  }, {
    key: "saveState",
    value: function value(t) {
      var e = this.getStorageKey();
      sessionStorage.setItem(e, t);
    }
  }, {
    key: "activateFromState",
    value: function value() {
      var t = this;
      this.hasNested = this.querySelector("joomla-tab") instanceof HTMLElement;
      var e = sessionStorage.getItem(this.getStorageKey());

      if (e) {
        var n = this.tabs.findIndex(function (t) {
          return t.tab.id === e;
        });
        if (n >= 0) this.activateTab(n, !1);else if (this.hasNested && this.querySelector("joomla-tab")) {
          var i = [].slice.call(this.querySelectorAll("joomla-tab-element")).reverse().filter(function (t) {
            return t.id === e;
          });

          if (i.length) {
            var a = i[0].closest("joomla-tab");
            [].slice.call(a.querySelectorAll("joomla-tab-element")).forEach(function (t) {
              t.removeAttribute("active"), t.id === e && t.setAttribute("active", "");
            });

            for (var r = function r() {
              var t = a.closest("joomla-tab"),
                  e = a.parentNode.closest("joomla-tab-element");
              [].slice.call(t.querySelectorAll("joomla-tab-element")).forEach(function (t) {
                t.removeAttribute("active"), e === t && (t.setAttribute("active", ""), a = e);
              });
            }; a.parentNode.closest("joomla-tab") !== this;) {
              r();
            }

            [].slice.call(this.children).filter(function (t) {
              return "joomla-tab-element" === t.tagName.toLowerCase();
            }).forEach(function (e) {
              e.removeAttribute("active"), e.querySelector("joomla-tab-element[active]") && t.activateTab(e, !1);
            });
          }
        }
      }
    }
  }, {
    key: "dispatchCustomEvent",
    value: function value(t, e, n) {
      var i = new CustomEvent(t, {
        bubbles: !0,
        cancelable: !0
      });
      i.relatedTarget = n, e.dispatchEvent(i);
    }
  }]) && a(i.prototype, u), l && a(i, l), d;
}();

customElements.define("joomla-tab", m);
