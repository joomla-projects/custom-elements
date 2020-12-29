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
  customElements.define('joomla-panels', /*#__PURE__*/function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    var _super = _createSuper(_class);

    _createClass(_class, [{
      key: "recall",
      get: function get() {
        return this.getAttribute('recall');
      },
      set: function set(value) {
        return this.setAttribute('recall', value);
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
        return this.getAttribute('orientation') || 'horizontal';
      },
      set: function set(value) {
        this.setAttribute('orientation', value);
      }
    }, {
      key: "responsive",
      get: function get() {
        return this.getAttribute('responsive');
      },
      set: function set(value) {
        this.setAttribute('responsive', value);
      }
    }, {
      key: "collapseWidth",
      get: function get() {
        return this.getAttribute('collapse-width');
      },
      set: function set(value) {
        this.setAttribute('collapse-width', value);
      }
      /* Lifecycle, element created */

    }], [{
      key: "observedAttributes",

      /* Attributes to monitor */
      get: function get() {
        return ['recall', 'orientation', 'view', 'responsive', 'collapse-width'];
      }
    }]);

    function _class() {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this); // Setup configuration

      _this.hasActive = false;
      _this.currentActive = '';
      _this.hasNested = false;
      _this.isNested = false;
      _this.tabs = [];
      _this.tabsLinks = [];
      _this.panels = [];
      _this.tabLinkHash = [];
      return _this;
    }
    /* Lifecycle, element appended to the DOM */


    _createClass(_class, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this2 = this;

        if (!this.orientation || this.orientation && ['horizontal', 'vertical'].indexOf(this.orientation) === -1) {
          this.setAttribute('orientation', 'horizontal');
        }

        this.view = this.getAttribute('view') || 'tabs';
        this.recall = this.recall || 'false';
        this.responsive = this.getAttribute('responsive') || 'false';
        this.collapseWidth = this.getAttribute('collapseWidth') || 0; // Get tab elements

        this.panels = [].slice.call(this.querySelectorAll('section')); // Sanity check

        if (!this.panels.length) {
          throw new Error('`Joomla-panels` require one ore more panels!');
        } // Is this nested


        if (this.findAncestorByTagNme(this, 'joomla-tab')) {
          this.isNested = true;
        } // Does it have child tab element


        if (this.querySelector('joomla-tab')) {
          this.hasNested = true;
        } // Use the sessionStorage state!


        if (this.recall) {
          var href = sessionStorage.getItem(this.getStorageKey()); // Do not fail on 3.x tab state values hack

          if (href && !/@\[/.test(href)) {
            this.tabLinkHash.push(href);
          }

          this.setTabState();
        } // Create the navigation


        if (this.firstElementChild.tagName !== 'ul') {
          this.createNavigation();
        } // Add missing A11Y


        this.panels.forEach(function (tab) {
          tab.setAttribute('role', 'tabpanel');

          _this2.tabs.push("#tab-".concat(tab.id));

          if (tab.hasAttribute('active')) {
            _this2.hasActive = true;
            _this2.currentActive = tab.id;

            _this2.querySelector("#tab-".concat(tab.id)).setAttribute('aria-selected', 'true');

            _this2.querySelector("#tab-".concat(tab.id)).setAttribute('active', '');

            _this2.querySelector("#tab-".concat(tab.id)).setAttribute('tabindex', '0');
          }
        }); // Fallback if no active tab

        if (!this.hasActive) {
          this.tabsLinks[0].setAttribute('active', '');
          this.hasActive = true;
          this.currentActive = this.panels[0].id;
          this.tabsLinks[0].setAttribute('aria-selected', 'true');
          this.tabsLinks[0].setAttribute('tabindex', '0');
          this.tabsLinks[0].setAttribute('active', '');
          this.panels[0].setAttribute('active', '');
        } // Check if there is a hash in the URI


        if (window.location.href.match(/#tab-/)) ;

        if (this.view === 'accordion') {
          this.toAccordion.bind(this)();
        }

        if (this.responsive === 'true') {
          // Convert tabs to accordian and vice versa
          this.changeView.bind(this); // Add behavior for window size change

          window.addEventListener('resize', this.changeView.bind(this));
        }
      }
      /* Lifecycle, element removed from the DOM */

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        var self = this;
        var ulEl = this.querySelector('ul');
        var navigation = [].slice.call(ulEl.querySelectorAll('a'));
        navigation.forEach(function (link) {
          link.removeEventListener('click', self.activateTabFromLink, true);
        });
        ulEl.removeEventListener('keydown', self.keyBehaviour, true);
      }
      /* Method to create the tabs navigation */

    }, {
      key: "createNavigation",
      value: function createNavigation() {
        var _this3 = this;

        var self = this;
        var nav = '';

        if (this.firstElementChild.tagName.toLowerCase() !== 'ul') {
          nav = document.createElement('ul');
        }

        nav.setAttribute('role', 'tablist');
        this.panels.forEach(function (panel) {
          if (!panel.id) {
            throw new Error('`joomla-panels` All panels require an ID');
          }

          if (panel.parentNode !== _this3) {
            return;
          }

          var active = panel.getAttribute('active') || false;
          var liElement = document.createElement('li');
          var aElement = document.createElement('a');
          liElement.setAttribute('role', 'presentation');
          aElement.setAttribute('role', 'tab');
          aElement.setAttribute('aria-controls', panel.id);
          aElement.setAttribute('aria-selected', active ? 'true' : 'false');
          aElement.setAttribute('tabindex', active ? '0' : '-1');
          aElement.setAttribute('href', "#".concat(panel.id));
          aElement.setAttribute('id', "tab-".concat(panel.id));
          aElement.innerHTML = panel.getAttribute('name');

          if (active) {
            aElement.setAttribute('active', '');
          }

          aElement.addEventListener('click', self.activateTabFromLink.bind(self));

          _this3.tabsLinks.push(aElement);

          liElement.append(aElement);
          nav.append(liElement);
          panel.setAttribute('aria-labelledby', "tab-".concat(panel.id));

          if (!active) {
            panel.setAttribute('aria-hidden', 'true');
          }
        });
        this.insertAdjacentElement('afterbegin', nav); // Keyboard access

        this.querySelector('ul').addEventListener('keydown', this.keyBehaviour.bind(this));
      }
    }, {
      key: "hideCurrent",
      value: function hideCurrent() {
        // Unset the current active tab
        if (this.currentActive) {
          // Emit hide event
          var el = this.querySelector("a[aria-controls=\"".concat(this.currentActive, "\"]"));
          this.dispatchCustomEvent('joomla.tab.hide', el, this.querySelector("#tab-".concat(this.currentActive)));
          el.removeAttribute('active');
          el.setAttribute('tabindex', '-1');
          this.querySelector("#".concat(this.currentActive)).removeAttribute('active');
          this.querySelector("#".concat(this.currentActive)).setAttribute('aria-hidden', 'true');
          el.removeAttribute('aria-selected'); // Emit hidden event

          this.dispatchCustomEvent('joomla.tab.hidden', el, this.querySelector("#tab-".concat(this.currentActive)));
        }
      }
      /** Activate Tab */

    }, {
      key: "activateTabFromLink",
      value: function activateTabFromLink(e) {
        e.preventDefault();
        var currentTabLink = this.currentActive;

        if (this.hasActive) {
          this.hideCurrent();
        } // Set the selected tab as active
        // Emit show event


        this.dispatchCustomEvent('joomla.tab.show', e.target, this.querySelector("#tab-".concat(currentTabLink)));
        e.target.setAttribute('active', '');
        e.target.setAttribute('aria-selected', 'true');
        e.target.setAttribute('tabindex', '0');
        this.querySelector(e.target.hash).setAttribute('active', '');
        this.querySelector(e.target.hash).removeAttribute('aria-hidden');
        this.currentActive = e.target.hash.substring(1); // Emit shown event

        this.dispatchCustomEvent('joomla.tab.shown', e.target, this.querySelector("#tab-".concat(currentTabLink)));
        this.saveState("#tab-".concat(e.target.hash.substring(1)));
      }
    }, {
      key: "showTab",
      value: function showTab(tab) {
        var tabLink = document.querySelector("#tab-".concat(tab.id));
        tabLink.click();
      }
    }, {
      key: "show",
      value: function show(ulLink) {
        ulLink.click();
      }
    }, {
      key: "keyBehaviour",
      value: function keyBehaviour(e) {
        // collect tab targets, and their parents' prev/next (or first/last)
        var currentTab = this.querySelector("#tab-".concat(this.currentActive));
        var previousTabItem = currentTab.parentNode.previousElementSibling || currentTab.parentNode.parentNode.lastElementChild;
        var nextTabItem = currentTab.parentNode.nextElementSibling || currentTab.parentNode.parentNode.firstElementChild; // Don't catch key events when ⌘ or Alt modifier is present

        if (e.metaKey || e.altKey) {
          return;
        }

        if (this.tabs.indexOf("#".concat(document.activeElement.id)) === -1) {
          return;
        } // catch left/right and up/down arrow key events


        switch (e.keyCode) {
          case 37:
          case 38:
            e.preventDefault();
            e.stopPropagation();
            previousTabItem.querySelector('a').click();
            previousTabItem.querySelector('a').focus();
            break;

          case 39:
          case 40:
            e.preventDefault();
            e.stopPropagation();
            nextTabItem.querySelector('a').click();
            nextTabItem.querySelector('a').focus();
            break;
        }
      }
      /* eslint-disable */

    }, {
      key: "getStorageKey",
      value: function getStorageKey() {
        return window.location.href.toString().split(window.location.host)[1].replace(/&return=[a-zA-Z0-9%]+/, '').split('#')[0];
      }
      /* eslint-disable */

    }, {
      key: "saveState",
      value: function saveState(value) {
        var storageKey = this.getStorageKey();
        sessionStorage.setItem(storageKey, value);
      }
    }, {
      key: "setTabState",
      value: function setTabState() {
        var _this4 = this;

        var self = this;
        var tabs = this.tabsLinks;

        if (this.hasNested) {
          // Add possible parent tab to the aray for activation
          if (this.tabLinkHash.length && this.tabLinkHash[0] !== '') {
            var hash = this.tabLinkHash[0].substring(5);
            var element = this.querySelector("".concat(hash)); // Add the parent tab to the array for activation

            if (element) {
              var currentTabSet = this.findAncestorByTagNme(element, 'joomla-tab');
              var parentTabSet = this.findAncestorByTagNme(currentTabSet, 'joomla-tab');

              if (parentTabSet) {
                var parentTab = this.findAncestorByTagNme(currentTabSet, 'section');

                if (parentTab) {
                  this.tabLinkHash.push("#tab-".concat(parentTab.id));
                }
              }
            }
          } // Remove the cascaded tabs and activate the right tab


          tabs.forEach(function (tab) {
            if (_this4.tabLinkHash.length) {
              var theId = "#tab-".concat(tab.id);

              if (_this4.tabLinkHash.indexOf(theId) === -1) {
                tab.removeAttribute('active');
              } else {
                tab.setAttribute('active', '');
              }
            }

            if (tab.parentNode === self) {
              _this4.tabsLinks.push(tab);
            }
          });
        } else {
          // Activate the correct tab
          tabs.forEach(function (tab) {
            if (_this4.tabLinkHash.length) {
              var theId = "#tab-".concat(tab.hash);

              if (_this4.tabLinkHash.indexOf(theId) > -1) {
                tab.removeAttribute('active');
              } else {
                tab.setAttribute('active', '');
              }
            }
          });
          this.tabsLinks = tabs;
        }
      }
    }, {
      key: "toTabs",
      value: function toTabs() {
        var self = this; // remove the cascaded tabs

        for (var i = 0, l = this.panels.length; i < l; ++i) {
          if (this.panels[i].parentNode.parentNode.parentNode === this) {
            this.tabsLinks.push(this.panels[i]);
          }
        }

        if (this.tabsLinks.length) {
          this.tabsLinks.forEach(function (panel) {
            self.appendChild(panel);
          });
        }
      }
    }, {
      key: "toAccordion",
      value: function toAccordion() {
        var self = this; // remove the cascaded tabs
        // for (let i = 0, l = this.panels.length; i < l; ++i) {
        //   if (this.panels[i].parentNode === this) {
        //     this.tabsLinks.push(this.panels[i]);
        //   }
        // }

        if (this.panels.length) {
          this.panels.forEach(function (panel) {
            var link = self.querySelector('a[aria-controls="' + panel.id + '"]'); // if (link.parentNode.parentNode === self.firstElementChild)

            link.parentNode.appendChild(panel);
          });
        }
      }
      /** Method to convert tabs to accordion and vice versa depending on screen size */

    }, {
      key: "changeView",
      value: function changeView() {
        if (window.outerWidth > 920) {
          if (this.view === 'tabs') {
            return;
          } // convert to tabs


          this.toTabs.bind(this);
          this.view = 'tabs';
        } else {
          if (this.view === 'accordion') {
            return;
          } // convert to accordion


          this.toAccordion.bind(this);
          this.view = 'accordion';
        }
      }
    }, {
      key: "activateUriHash",
      value: function activateUriHash() {
        var hash = window.location.href.match(/#\S[^&]*/);
        var element = this.querySelector(hash[0]);

        if (element) {
          // Activate any parent tabs (nested tables)
          var currentTabSet = this.findAncestorByTagNme(element, 'joomla-tab');
          var parentTabSet = this.findAncestorByTagNme(currentTabSet, 'joomla-tab');

          if (parentTabSet) {
            var parentTab = this.findAncestorByTagNme(currentTabSet, 'section');
            parentTabSet.showTab(parentTab); // Now activate the given tab

            this.show(element);
          } else {
            // Now activate the given tab
            this.showTab(element);
          }
        }
      }
      /* eslint-disable */

    }, {
      key: "findAncestorByTagNme",
      value: function findAncestorByTagNme(el, tagName) {
        while ((el = el.parentElement) && el.nodeName.toLowerCase() !== tagName) {
        }

        return el;
      }
      /* eslint-enable */

      /* Method to dispatch events */

    }, {
      key: "dispatchCustomEvent",
      value: function dispatchCustomEvent(eventName, element, related) {
        var OriginalCustomEvent = new CustomEvent(eventName, {
          bubbles: true,
          cancelable: true
        });

        if (related) {
          OriginalCustomEvent.relatedTarget = related;
        }

        element.dispatchEvent(OriginalCustomEvent);
        element.removeEventListener(eventName, element);
      }
    }]);

    return _class;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
})();
//# sourceMappingURL=joomla-panels-es5.js.map
