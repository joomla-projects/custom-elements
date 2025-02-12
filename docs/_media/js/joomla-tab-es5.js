function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var TabElement = /*#__PURE__*/function (_HTMLElement) {
  function TabElement() {
    _classCallCheck(this, TabElement);
    return _callSuper(this, TabElement, arguments);
  }
  _inherits(TabElement, _HTMLElement);
  return _createClass(TabElement);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('joomla-tab-element', TabElement);
var TabsElement = /*#__PURE__*/function (_HTMLElement2) {
  /* Lifecycle, element created */
  function TabsElement() {
    var _this;
    _classCallCheck(this, TabsElement);
    _this = _callSuper(this, TabsElement);
    _this.tabs = [];
    _this.tabsElements = [];
    _this.previousActive = null;
    _this.onMutation = _this.onMutation.bind(_this);
    _this.keyBehaviour = _this.keyBehaviour.bind(_this);
    _this.activateTab = _this.activateTab.bind(_this);
    _this.deactivateTabs = _this.deactivateTabs.bind(_this);
    _this.checkView = _this.checkView.bind(_this);
    _this.observer = new MutationObserver(_this.onMutation);
    _this.observer.observe(_this, {
      attributes: false,
      childList: true,
      subtree: true
    });
    return _this;
  }

  /* Lifecycle, element appended to the DOM */
  _inherits(TabsElement, _HTMLElement2);
  return _createClass(TabsElement, [{
    key: "recall",
    get: function get() {
      return this.getAttribute('recall');
    },
    set: function set(value) {
      this.setAttribute('recall', value);
    }
  }, {
    key: "view",
    get: function get() {
      return this.getAttribute('view');
    },
    set: function set(value) {
      this.setAttribute('view', value);
    }
  }, {
    key: "orientation",
    get: function get() {
      return this.getAttribute('orientation');
    },
    set: function set(value) {
      this.setAttribute('orientation', value);
    }
  }, {
    key: "breakpoint",
    get: function get() {
      return parseInt(this.getAttribute('breakpoint'), 10);
    },
    set: function set(value) {
      this.setAttribute('breakpoint', value);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;
      if (!this.orientation || this.orientation && !['horizontal', 'vertical'].includes(this.orientation)) {
        this.orientation = 'horizontal';
      }
      if (!this.view || this.view && !['tabs', 'accordion'].includes(this.view)) {
        this.view = 'tabs';
      }

      // get tab elements
      this.tabsElements = [].slice.call(this.children).filter(function (el) {
        return el.tagName.toLowerCase() === 'joomla-tab-element';
      });

      // Sanity checks
      if (!this.tabsElements.length) {
        return;
      }
      this.isNested = this.parentNode.closest('joomla-tab') instanceof HTMLElement;
      this.hydrate();
      if (this.hasAttribute('recall') && !this.isNested) {
        this.activateFromState();
      }

      // Activate tab from the URL hash
      if (window.location.hash) {
        var hash = window.location.hash.substr(1);
        var tabToactivate = this.tabs.filter(function (tab) {
          return tab.tab.id === hash;
        });
        if (tabToactivate.length) {
          this.activateTab(tabToactivate[0].tab, false);
        }
      }

      // If no active tab activate the first one
      if (!this.tabs.filter(function (tab) {
        return tab.tab.hasAttribute('active');
      }).length) {
        this.activateTab(this.tabs[0].tab, false);
      }
      this.addEventListener('keyup', this.keyBehaviour);
      if (this.breakpoint) {
        // Convert tabs to accordian
        this.checkView();
        window.addEventListener('resize', function () {
          _this2.checkView();
        });
      }
    }

    /* Lifecycle, element removed from the DOM */
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this3 = this;
      this.tabs.map(function (tab) {
        tab.tabButton.removeEventListener('click', _this3.activateTab);
        tab.accordionButton.removeEventListener('click', _this3.activateTab);
        return tab;
      });
      this.removeEventListener('keyup', this.keyBehaviour);
    }

    /* Respond to attribute changes */
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attr, oldValue, newValue) {
      switch (attr) {
        case 'view':
          if (!newValue || newValue && !['tabs', 'accordion'].includes(newValue)) {
            this.view = 'tabs';
          }
          if (newValue === 'tabs' && newValue !== oldValue) {
            if (this.tabButtonContainer) this.tabButtonContainer.removeAttribute('hidden');
            this.tabs.map(function (tab) {
              return tab.accordionButton.setAttribute('hidden', '');
            });
          } else if (newValue === 'accordion' && newValue !== oldValue) {
            if (this.tabButtonContainer) this.tabButtonContainer.setAttribute('hidden', '');
            this.tabs.map(function (tab) {
              return tab.accordionButton.removeAttribute('hidden');
            });
          }
          break;
      }
    }
  }, {
    key: "hydrate",
    value: function hydrate() {
      var _this4 = this;
      // Ensure the tab links container exists
      this.tabButtonContainer = document.createElement('div');
      this.tabButtonContainer.setAttribute('role', 'tablist');
      this.insertAdjacentElement('afterbegin', this.tabButtonContainer);
      if (this.view === 'accordion') {
        this.tabButtonContainer.setAttribute('hidden', '');
      }
      this.tabsElements.map(function (tab) {
        // Create Accordion button
        var accordionButton = document.createElement('button');
        accordionButton.setAttribute('aria-expanded', !!tab.hasAttribute('active'));
        accordionButton.setAttribute('aria-controls', tab.id);
        accordionButton.setAttribute('type', 'button');
        accordionButton.innerHTML = "<span class=\"accordion-title\">".concat(tab.getAttribute('name'), "<span class=\"accordion-icon\"></span></span>");
        tab.insertAdjacentElement('beforebegin', accordionButton);
        if (_this4.view === 'tabs') {
          accordionButton.setAttribute('hidden', '');
        }
        accordionButton.addEventListener('click', _this4.activateTab);

        // Create tab button
        var tabButton = document.createElement('button');
        tabButton.setAttribute('aria-selected', !!tab.hasAttribute('active'));
        tabButton.setAttribute('aria-controls', tab.id);
        tabButton.setAttribute('role', 'tab');
        tabButton.setAttribute('type', 'button');
        tabButton.setAttribute('tabindex', 0);
        tabButton.innerHTML = "".concat(tab.getAttribute('name'));
        _this4.tabButtonContainer.appendChild(tabButton);
        tabButton.addEventListener('click', _this4.activateTab);
        if (_this4.view === 'tabs') {
          tab.setAttribute('role', 'tabpanel');
        } else {
          tab.setAttribute('role', 'region');
        }
        _this4.tabs.push({
          tab: tab,
          tabButton: tabButton,
          accordionButton: accordionButton
        });
        return tab;
      });
    }

    /* Update on mutation */
  }, {
    key: "onMutation",
    value: function onMutation(mutationsList) {
      var _this5 = this;
      // eslint-disable-next-line no-restricted-syntax
      var _iterator = _createForOfIteratorHelper(mutationsList),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mutation = _step.value;
          if (mutation.type === 'childList') {
            if (mutation.addedNodes.length) {
              [].slice.call(mutation.addedNodes).map(function (inserted) {
                return _this5.createNavs(inserted);
              });
              // Add the tab buttons
            }
            if (mutation.removedNodes.length) {
              // Remove the tab buttons
              [].slice.call(mutation.addedNodes).map(function (inserted) {
                return _this5.removeNavs(inserted);
              });
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "keyBehaviour",
    value: function keyBehaviour(e) {
      // Only the tabs/accordion buttons, no ⌘ or Alt modifier
      if (![].concat(_toConsumableArray(this.tabs.map(function (el) {
        return el.tabButton;
      })), _toConsumableArray(this.tabs.map(function (el) {
        return el.accordionButton;
      }))).includes(document.activeElement) || e.metaKey || e.altKey) {
        return;
      }
      var previousTabItem;
      var nextTabItem;
      if (this.view === 'tabs') {
        var currentTabIndex = this.tabs.findIndex(function (tab) {
          return tab.tab.hasAttribute('active');
        });
        previousTabItem = currentTabIndex - 1 >= 0 ? this.tabs[currentTabIndex - 1] : this.tabs[this.tabs.length - 1];
        nextTabItem = currentTabIndex + 1 <= this.tabs.length - 1 ? this.tabs[currentTabIndex + 1] : this.tabs[0];
      } else {
        var _currentTabIndex = this.tabs.map(function (el) {
          return el.accordionButton;
        }).findIndex(function (tab) {
          return tab === document.activeElement;
        });
        previousTabItem = _currentTabIndex - 1 >= 0 ? this.tabs[_currentTabIndex - 1] : this.tabs[this.tabs.length - 1];
        nextTabItem = _currentTabIndex + 1 <= this.tabs.length - 1 ? this.tabs[_currentTabIndex + 1] : this.tabs[0];
      }

      // catch left/right and up/down arrow key events
      switch (e.keyCode) {
        case 37:
        case 38:
          if (this.view === 'tabs') {
            previousTabItem.tabButton.click();
            previousTabItem.tabButton.focus();
          } else {
            previousTabItem.accordionButton.focus();
          }
          e.preventDefault();
          break;
        case 39:
        case 40:
          if (this.view === 'tabs') {
            nextTabItem.tabButton.click();
            nextTabItem.tabButton.focus();
          } else {
            nextTabItem.accordionButton.focus();
          }
          e.preventDefault();
          break;
      }
    }
  }, {
    key: "deactivateTabs",
    value: function deactivateTabs() {
      var _this6 = this;
      this.tabs.map(function (tabObj) {
        tabObj.accordionButton.removeAttribute('aria-disabled');
        tabObj.tabButton.setAttribute('aria-selected', false);
        tabObj.tabButton.setAttribute('tabindex', -1);
        tabObj.accordionButton.setAttribute('aria-expanded', false);
        if (tabObj.tab.hasAttribute('active')) {
          _this6.dispatchCustomEvent('joomla.tab.hide', _this6.view === 'tabs' ? tabObj.tabButton : tabObj.accordionButton, _this6.previousActive);
          tabObj.tab.removeAttribute('active');
          tabObj.tab.setAttribute('tabindex', '-1');
          // Emit hidden event
          _this6.dispatchCustomEvent('joomla.tab.hidden', _this6.view === 'tabs' ? tabObj.tabButton : tabObj.accordionButton, _this6.previousActive);
          _this6.previousActive = _this6.view === 'tabs' ? tabObj.tabButton : tabObj.accordionButton;
        }
        return tabObj;
      });
    }
  }, {
    key: "activateTab",
    value: function activateTab(input) {
      var _this7 = this;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var currentTrigger;
      if (input.currentTarget) {
        currentTrigger = this.tabs.find(function (tab) {
          return (_this7.view === 'tabs' ? tab.tabButton : tab.accordionButton) === input.currentTarget;
        });
      } else if (input instanceof HTMLElement) {
        currentTrigger = this.tabs.find(function (tab) {
          return tab.tab === input;
        });
      } else if (Number.isInteger(input)) {
        currentTrigger = this.tabs[input];
      }
      if (currentTrigger) {
        // Accordion can close the active panel
        if (this.view === 'accordion' && this.tabs.find(function (tab) {
          return tab.accordionButton.getAttribute('aria-expanded') === 'true';
        }) === currentTrigger) {
          if (currentTrigger.tab.hasAttribute('active')) {
            currentTrigger.tab.removeAttribute('active');
            return;
          }
          currentTrigger.tab.setAttribute('active', '');
          return;
        }

        // Remove current active
        this.deactivateTabs();
        // Set new active
        currentTrigger.tabButton.setAttribute('aria-selected', true);
        currentTrigger.accordionButton.setAttribute('aria-expanded', true);
        currentTrigger.accordionButton.setAttribute('aria-disabled', true);
        currentTrigger.tab.setAttribute('active', '');
        currentTrigger.tabButton.removeAttribute('tabindex');
        this.dispatchCustomEvent('joomla.tab.show', this.view === 'tabs' ? currentTrigger.tabButton : currentTrigger.accordionButton, this.previousActive);
        if (state) {
          if (this.view === 'tabs') {
            currentTrigger.tabButton.focus();
          } else {
            currentTrigger.accordionButton.focus();
          }
        }
        if (state) this.saveState(currentTrigger.tab.id);
        this.dispatchCustomEvent('joomla.tab.shown', this.view === 'tabs' ? currentTrigger.tabButton : currentTrigger.accordionButton, this.previousActive);
      }
    }

    // Create navigation elements for inserted tabs
  }, {
    key: "createNavs",
    value: function createNavs(tab) {
      if (tab instanceof Element && tab.tagName.toLowerCase() !== 'joomla-tab-element' || ![].some.call(this.children, function (el) {
        return el === tab;
      }).length || !tab.getAttribute('name') || !tab.getAttribute('id')) return;
      var tabs = [].slice.call(this.children).filter(function (el) {
        return el.tagName.toLowerCase() === 'joomla-tab-element';
      });
      var index = tabs.findIndex(function (tb) {
        return tb === tab;
      });

      // Create Accordion button
      var accordionButton = document.createElement('button');
      accordionButton.setAttribute('aria-expanded', !!tab.hasAttribute('active'));
      accordionButton.setAttribute('aria-controls', tab.id);
      accordionButton.setAttribute('type', 'button');
      accordionButton.innerHTML = "<span class=\"accordion-title\">".concat(tab.getAttribute('name'), "<span class=\"accordion-icon\"></span></span>");
      tab.insertAdjacentElement('beforebegin', accordionButton);
      if (this.view === 'tabs') {
        accordionButton.setAttribute('hidden', '');
      }
      accordionButton.addEventListener('click', this.activateTab);

      // Create tab button
      var tabButton = document.createElement('button');
      tabButton.setAttribute('aria-expanded', !!tab.hasAttribute('active'));
      tabButton.setAttribute('aria-controls', tab.id);
      tabButton.setAttribute('role', 'tab');
      tabButton.setAttribute('type', 'button');
      tabButton.innerHTML = "".concat(tab.getAttribute('name'));
      if (tabs.length - 1 === index) {
        // last
        this.tabButtonContainer.appendChild(tabButton);
        this.tabs.push({
          tab: tab,
          tabButton: tabButton,
          accordionButton: accordionButton
        });
      } else if (index === 0) {
        // first
        this.tabButtonContainer.insertAdjacentElement('afterbegin', tabButton);
        this.tabs.slice(0, 0, {
          tab: tab,
          tabButton: tabButton,
          accordionButton: accordionButton
        });
      } else {
        // Middle
        this.tabs[index - 1].tabButton.insertAdjacentElement('afterend', tabButton);
        this.tabs.slice(index - 1, 0, {
          tab: tab,
          tabButton: tabButton,
          accordionButton: accordionButton
        });
      }
      tabButton.addEventListener('click', this.activateTab);
    }

    // Remove navigation elements for removed tabs
  }, {
    key: "removeNavs",
    value: function removeNavs(tab) {
      if (tab instanceof Element && tab.tagName.toLowerCase() !== 'joomla-tab-element' || ![].some.call(this.children, function (el) {
        return el === tab;
      }).length || !tab.getAttribute('name') || !tab.getAttribute('id')) return;
      var accordionButton = tab.previousSilbingElement;
      if (accordionButton && accordionButton.tagName.toLowerCase() === 'button') {
        accordionButton.removeEventListener('click', this.keyBehaviour);
        accordionButton.parentNode.removeChild(accordionButton);
      }
      var tabButton = this.tabButtonContainer.querySelector("[aria-controls=".concat(accordionButton.id, "]"));
      if (tabButton) {
        tabButton.removeEventListener('click', this.keyBehaviour);
        tabButton.parentNode.removeChild(tabButton);
      }
      var index = this.tabs.findIndex(function (tb) {
        return tb.tabs === tab;
      });
      if (index - 1 === 0) {
        this.tabs.shift();
      } else if (index - 1 === this.tabs.length) {
        this.tabs.pop();
      } else {
        this.tabs.splice(index - 1, 1);
      }
    }

    /** Method to convert tabs to accordion and vice versa depending on screen size */
  }, {
    key: "checkView",
    value: function checkView() {
      if (!this.breakpoint) {
        return;
      }
      if (document.body.getBoundingClientRect().width > this.breakpoint) {
        if (this.view === 'tabs') {
          return;
        }
        this.tabButtonContainer.removeAttribute('hidden');
        this.tabs.map(function (tab) {
          tab.accordionButton.setAttribute('hidden', '');
          tab.accordionButton.setAttribute('role', 'tabpanel');
          if (tab.accordionButton.getAttribute('aria-expanded') === 'true') {
            tab.tab.setAttribute('active', '');
          }
          return tab;
        });
        this.setAttribute('view', 'tabs');
      } else {
        if (this.view === 'accordion') {
          return;
        }
        this.tabButtonContainer.setAttribute('hidden', '');
        this.tabs.map(function (tab) {
          tab.accordionButton.removeAttribute('hidden');
          tab.accordionButton.setAttribute('role', 'region');
          return tab;
        });
        this.setAttribute('view', 'accordion');
      }
    }
  }, {
    key: "getStorageKey",
    value: function getStorageKey() {
      return window.location.href.toString().split(window.location.host)[1].replace(/&return=[a-zA-Z0-9%]+/, '').split('#')[0];
    }
  }, {
    key: "saveState",
    value: function saveState(value) {
      var storageKey = this.getStorageKey();
      sessionStorage.setItem(storageKey, value);
    }
  }, {
    key: "activateFromState",
    value: function activateFromState() {
      var _this8 = this;
      this.hasNested = this.querySelector('joomla-tab') instanceof HTMLElement;
      // Use the sessionStorage state!
      var href = sessionStorage.getItem(this.getStorageKey());
      if (href) {
        var currentTabIndex = this.tabs.findIndex(function (tab) {
          return tab.tab.id === href;
        });
        if (currentTabIndex >= 0) {
          this.activateTab(currentTabIndex, false);
        } else if (this.hasNested) {
          var childTabs = this.querySelector('joomla-tab');
          if (childTabs) {
            var activeTabs = [].slice.call(this.querySelectorAll('joomla-tab-element')).reverse().filter(function (activeTabEl) {
              return activeTabEl.id === href;
            });
            if (activeTabs.length) {
              // Activate the deepest tab
              var activeTab = activeTabs[0].closest('joomla-tab');
              [].slice.call(activeTab.querySelectorAll('joomla-tab-element')).forEach(function (tabEl) {
                tabEl.removeAttribute('active');
                if (tabEl.id === href) {
                  tabEl.setAttribute('active', '');
                }
              });

              // Activate all parent tabs
              var _loop = function _loop() {
                var parentTabContainer = activeTab.closest('joomla-tab');
                var parentTabEl = activeTab.parentNode.closest('joomla-tab-element');
                [].slice.call(parentTabContainer.querySelectorAll('joomla-tab-element'))
                // eslint-disable-next-line no-loop-func
                .forEach(function (tabEl) {
                  tabEl.removeAttribute('active');
                  if (parentTabEl === tabEl) {
                    tabEl.setAttribute('active', '');
                    activeTab = parentTabEl;
                  }
                });
              };
              while (activeTab.parentNode.closest('joomla-tab') !== this) {
                _loop();
              }
              [].slice.call(this.children).filter(function (el) {
                return el.tagName.toLowerCase() === 'joomla-tab-element';
              }).forEach(function (tabEl) {
                tabEl.removeAttribute('active');
                var isActiveChild = tabEl.querySelector('joomla-tab-element[active]');
                if (isActiveChild) {
                  _this8.activateTab(tabEl, false);
                }
              });
            }
          }
        }
      }
    }

    /* Method to dispatch events */
  }, {
    key: "dispatchCustomEvent",
    value: function dispatchCustomEvent(eventName, element, related) {
      var OriginalCustomEvent = new CustomEvent(eventName, {
        bubbles: true,
        cancelable: true
      });
      OriginalCustomEvent.relatedTarget = related;
      element.dispatchEvent(OriginalCustomEvent);
    }
  }], [{
    key: "observedAttributes",
    get: /* Attributes to monitor */
    function get() {
      return ['recall', 'orientation', 'view', 'breakpoint'];
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('joomla-tab', TabsElement);
