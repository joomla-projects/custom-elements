function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TabElement = /*#__PURE__*/function (_HTMLElement) {
  _inherits(TabElement, _HTMLElement);

  var _super = _createSuper(TabElement);

  function TabElement() {
    _classCallCheck(this, TabElement);

    return _super.apply(this, arguments);
  }

  return TabElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('joomla-tab-element', TabElement);

var TabsElement = /*#__PURE__*/function (_HTMLElement2) {
  _inherits(TabsElement, _HTMLElement2);

  var _super2 = _createSuper(TabsElement);

  /* Lifecycle, element created */
  function TabsElement() {
    var _this;

    _classCallCheck(this, TabsElement);

    _this = _super2.call(this);
    _this.tabs = [];
    _this.tabsElements = [];
    _this.previousActive = null;
    _this.onMutation = _this.onMutation.bind(_assertThisInitialized(_this));
    _this.keyBehaviour = _this.keyBehaviour.bind(_assertThisInitialized(_this));
    _this.activateTab = _this.activateTab.bind(_assertThisInitialized(_this));
    _this.deactivateTabs = _this.deactivateTabs.bind(_assertThisInitialized(_this));
    _this.checkView = _this.checkView.bind(_assertThisInitialized(_this));
    _this.observer = new MutationObserver(_this.onMutation);

    _this.observer.observe(_assertThisInitialized(_this), {
      attributes: false,
      childList: true,
      subtree: true
    });

    return _this;
  }
  /* Lifecycle, element appended to the DOM */


  _createClass(TabsElement, [{
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
      } // get tab elements


      this.tabsElements = [].slice.call(this.children).filter(function (el) {
        return el.tagName.toLowerCase() === 'joomla-tab-element';
      }); // Sanity checks

      if (!this.tabsElements.length) {
        return;
      }

      this.isNested = this.parentNode.closest('joomla-tab') instanceof HTMLElement;
      this.hydrate();

      if (this.hasAttribute('recall') && !this.isNested) {
        this.activateFromState();
      } // Activate tab from the URL hash


      if (window.location.hash) {
        var hash = window.location.hash.substr(1);
        var tabToactivate = this.tabs.filter(function (tab) {
          return tab.tab.id === hash;
        });

        if (tabToactivate.length) {
          this.activateTab(tabToactivate[0].tab, false);
        }
      } // If no active tab activate the first one


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

        accordionButton.addEventListener('click', _this4.activateTab); // Create tab button

        var tabButton = document.createElement('button');
        tabButton.setAttribute('aria-expanded', !!tab.hasAttribute('active'));
        tabButton.setAttribute('aria-controls', tab.id);
        tabButton.setAttribute('role', 'tab');
        tabButton.setAttribute('type', 'button');
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
              }); // Add the tab buttons
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
      } // catch left/right and up/down arrow key events


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
        tabObj.tabButton.removeAttribute('aria-expanded');
        tabObj.accordionButton.setAttribute('aria-expanded', false);

        if (tabObj.tab.hasAttribute('active')) {
          _this6.dispatchCustomEvent('joomla.tab.hide', _this6.view === 'tabs' ? tabObj.tabButton : tabObj.accordionButton, _this6.previousActive);

          tabObj.tab.removeAttribute('active');
          tabObj.tab.setAttribute('tabindex', '-1'); // Emit hidden event

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
        } // Remove current active


        this.deactivateTabs(); // Set new active

        currentTrigger.tabButton.setAttribute('aria-expanded', true);
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
    } // Create navigation elements for inserted tabs

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
      }); // Create Accordion button

      var accordionButton = document.createElement('button');
      accordionButton.setAttribute('aria-expanded', !!tab.hasAttribute('active'));
      accordionButton.setAttribute('aria-controls', tab.id);
      accordionButton.setAttribute('type', 'button');
      accordionButton.innerHTML = "<span class=\"accordion-title\">".concat(tab.getAttribute('name'), "<span class=\"accordion-icon\"></span></span>");
      tab.insertAdjacentElement('beforebegin', accordionButton);

      if (this.view === 'tabs') {
        accordionButton.setAttribute('hidden', '');
      }

      accordionButton.addEventListener('click', this.activateTab); // Create tab button

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
    } // Remove navigation elements for removed tabs

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

      this.hasNested = this.querySelector('joomla-tab') instanceof HTMLElement; // Use the sessionStorage state!

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
              }); // Activate all parent tabs

              var _loop = function _loop() {
                var parentTabContainer = activeTab.closest('joomla-tab');
                var parentTabEl = activeTab.parentNode.closest('joomla-tab-element');
                [].slice.call(parentTabContainer.querySelectorAll('joomla-tab-element')) // eslint-disable-next-line no-loop-func
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
    get:
    /* Attributes to monitor */
    function get() {
      return ['recall', 'orientation', 'view', 'breakpoint'];
    }
  }]);

  return TabsElement;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('joomla-tab', TabsElement);
