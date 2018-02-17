(() => {
  /** Include the relative styles */
  if (!document.head.querySelector('#joomla-panels-style')) {
    const style = document.createElement('style');
    style.id = 'joomla-panels-style';
    style.innerHTML = '{{stylesheet}}';
    document.head.appendChild(style);
  }

  customElements.define('joomla-panels', class extends HTMLElement {
    /* Attributes to monitor */
    static get observedAttributes() { return ['recall', 'orientation', 'view', 'responsive', 'collapse-width']; }
    get recall() { return this.getAttribute('recall'); }
    set recall(value) { return this.setAttribute('recall', value); }
    get view() { return this.getAttribute('view'); }
    set view(value) { this.setAttribute('view', value); }
    get orientation() { return this.getAttribute('orientation') || 'horizontal'; }
    set orientation(value) { this.setAttribute('orientation', value); }
    get responsive() { return this.getAttribute('responsive'); }
    set responsive(value) { this.setAttribute('responsive', value); }
    get collapseWidth() { return this.getAttribute('collapse-width'); }
    set collapseWidth(value) { this.setAttribute('collapse-width', value); }

    /* Lifecycle, element created */
    constructor() {
      super();

      // Setup configuration
      this.hasActive = false;
      this.currentActive = '';
      this.hasNested = false;
      this.isNested = false;
      this.tabs = [];
      this.tabsLinks = [];
      this.panels = [];
      this.tabLinkHash = [];
    }

    /* Lifecycle, element appended to the DOM */
    connectedCallback() {
      if (!this.orientation || (this.orientation && ['horizontal', 'vertical'].indexOf(this.orientation) === -1)) {
        this.setAttribute('orientation', 'horizontal');
      }

      this.view = this.getAttribute('view') || 'tabs';
      this.recall = this.recall || 'false';
      this.responsive = this.getAttribute('responsive') || 'false';
      this.collapseWidth = this.getAttribute('collapseWidth') || 0;

      // Get tab elements
      this.panels = [].slice.call(this.querySelectorAll('section'));

      // Sanity check
      if (!this.panels.length) {
        throw new Error('`Joomla-panels` require one ore more panels!');
      }

      // Is this nested
      if (this.findAncestorByTagNme(this, 'joomla-tab')) {
        this.isNested = true;
      }

      // Does it have child tab element
      if (this.querySelector('joomla-tab')) {
        this.hasNested = true;
      }

      // Use the sessionStorage state!
      if (this.recall) {
        const href = sessionStorage.getItem(this.getStorageKey());
        // Do not fail on 3.x tab state values hack
        if (href && !/@\[/.test(href)) {
          this.tabLinkHash.push(href);
        }
        this.setTabState();
      }

      // Create the navigation
      if (this.firstElementChild.tagName !== 'ul') {
        this.createNavigation();
      }

      // Add missing A11Y
      this.panels.forEach((tab) => {
        tab.setAttribute('role', 'tabpanel');
        this.tabs.push(`#tab-${tab.id}`);
        if (tab.hasAttribute('active')) {
          this.hasActive = true;
          this.currentActive = tab.id;
          this.querySelector(`#tab-${tab.id}`).setAttribute('aria-selected', 'true');
          this.querySelector(`#tab-${tab.id}`).setAttribute('active', '');
          this.querySelector(`#tab-${tab.id}`).setAttribute('tabindex', '0');
        }
      });

      // Fallback if no active tab
      if (!this.hasActive) {
        this.tabsLinks[0].setAttribute('active', '');
        this.hasActive = true;
        this.currentActive = this.panels[0].id;
        this.tabsLinks[0].setAttribute('aria-selected', 'true');
        this.tabsLinks[0].setAttribute('tabindex', '0');
        this.tabsLinks[0].setAttribute('active', '');
        this.panels[0].setAttribute('active', '');
      }

      // Check if there is a hash in the URI
      if (window.location.href.match(/#tab-/)) {
        // this.activateUriHash();
      }

      if (this.view === 'accordion') {
        this.toAccordion.bind(this)();
      }

      if (this.responsive === 'true') {
        // Convert tabs to accordian and vice versa
        this.changeView.bind(this);

        // Add behavior for window size change
        window.addEventListener('resize', this.changeView.bind(this));
      }
    }

    /* Lifecycle, element removed from the DOM */
    disconnectedCallback() {
      const self = this;
      const ulEl = this.querySelector('ul');
      const navigation = [].slice.call(ulEl.querySelectorAll('a'));

      navigation.forEach((link) => {
        link.removeEventListener('click', self.activateTabFromLink, true);
      });

      ulEl.removeEventListener('keydown', self.keyBehaviour, true);
    }

    /* Method to create the tabs navigation */
    createNavigation() {
      const self = this;
      let nav = '';

      if (this.firstElementChild.tagName.toLowerCase() !== 'ul') {
        nav = document.createElement('ul');
      }

      nav.setAttribute('role', 'tablist');
      this.panels.forEach((panel) => {
        if (!panel.id) {
          throw new Error('`joomla-panels` All panels require an ID');
        }

        if (panel.parentNode !== this) {
          return;
        }

        const active = panel.getAttribute('active') || false;
        const liElement = document.createElement('li');
        const aElement = document.createElement('a');

        liElement.setAttribute('role', 'presentation');
        aElement.setAttribute('role', 'tab');
        aElement.setAttribute('aria-controls', panel.id);
        aElement.setAttribute('aria-selected', active ? 'true' : 'false');
        aElement.setAttribute('tabindex', active ? '0' : '-1');
        aElement.setAttribute('href', `#${panel.id}`);
        aElement.setAttribute('id', `tab-${panel.id}`);
        aElement.innerHTML = panel.getAttribute('name');

        if (active) {
          aElement.setAttribute('active', '');
        }

        aElement.addEventListener('click', self.activateTabFromLink.bind(self));
        this.tabsLinks.push(aElement);

        liElement.append(aElement);
        nav.append(liElement);

        panel.setAttribute('aria-labelledby', `tab-${panel.id}`);

        if (!active) {
          panel.setAttribute('aria-hidden', 'true');
        }
      });

      this.insertAdjacentElement('afterbegin', nav);

      // Keyboard access
      this.querySelector('ul').addEventListener('keydown', this.keyBehaviour.bind(this));
    }

    hideCurrent() {
      // Unset the current active tab
      if (this.currentActive) {
        // Emit hide event
        const el = this.querySelector(`a[aria-controls="${this.currentActive}"]`);
        this.dispatchCustomEvent('joomla.tab.hide', el, this.querySelector(`#tab-${this.currentActive}`));
        el.removeAttribute('active');
        el.setAttribute('tabindex', '-1');
        this.querySelector(`#${this.currentActive}`).removeAttribute('active');
        this.querySelector(`#${this.currentActive}`).setAttribute('aria-hidden', 'true');
        el.removeAttribute('aria-selected');
        // Emit hidden event
        this.dispatchCustomEvent('joomla.tab.hidden', el, this.querySelector(`#tab-${this.currentActive}`));
      }
    }

    /** Activate Tab */
    activateTabFromLink(e) {
      e.preventDefault();
      const currentTabLink = this.currentActive;

      if (this.hasActive) {
        this.hideCurrent();
      }

      // Set the selected tab as active
      // Emit show event
      this.dispatchCustomEvent('joomla.tab.show', e.target, this.querySelector(`#tab-${currentTabLink}`));
      e.target.setAttribute('active', '');
      e.target.setAttribute('aria-selected', 'true');
      e.target.setAttribute('tabindex', '0');
      this.querySelector(e.target.hash).setAttribute('active', '');
      this.querySelector(e.target.hash).removeAttribute('aria-hidden');
      this.currentActive = e.target.hash.substring(1);
      // Emit shown event
      this.dispatchCustomEvent('joomla.tab.shown', e.target, this.querySelector(`#tab-${currentTabLink}`));
      this.saveState(`#tab-${e.target.hash.substring(1)}`);
    }

    showTab(tab) {
      const tabLink = document.querySelector(`#tab-${tab.id}`);
      tabLink.click();
    }

    show(ulLink) {
      ulLink.click();
    }

    keyBehaviour(e) {
      // collect tab targets, and their parents' prev/next (or first/last)
      const currentTab = this.querySelector(`#tab-${this.currentActive}`);

      const previousTabItem = currentTab.parentNode.previousElementSibling ||
        currentTab.parentNode.parentNode.lastElementChild;
      const nextTabItem = currentTab.parentNode.nextElementSibling ||
        currentTab.parentNode.parentNode.firstElementChild;

      // Don't catch key events when ⌘ or Alt modifier is present
      if (e.metaKey || e.altKey) {
        return;
      }

      if (this.tabs.indexOf(`#${document.activeElement.id}`) === -1) {
        return;
      }

      // catch left/right and up/down arrow key events
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
        default:
          break;
      }
    }

    /* eslint-disable */
    getStorageKey() {
      return window.location.href.toString().split(window.location.host)[1].replace(/&return=[a-zA-Z0-9%]+/, '').split('#')[0];
    }
    /* eslint-disable */

    saveState(value) {
      const storageKey = this.getStorageKey();
      sessionStorage.setItem(storageKey, value);
    }

    setTabState() {
      const self = this;
      const tabs = this.tabsLinks;

      if (this.hasNested) {
        // Add possible parent tab to the aray for activation
        if (this.tabLinkHash.length && this.tabLinkHash[0] !== '') {
          const hash = this.tabLinkHash[0].substring(5);
          const element = this.querySelector(`${hash}`);

          // Add the parent tab to the array for activation
          if (element) {
            const currentTabSet = this.findAncestorByTagNme(element, 'joomla-tab');
            const parentTabSet = this.findAncestorByTagNme(currentTabSet, 'joomla-tab');

            if (parentTabSet) {
              const parentTab = this.findAncestorByTagNme(currentTabSet, 'section');
              if (parentTab) {
                this.tabLinkHash.push(`#tab-${parentTab.id}`);
              }
            }
          }
        }

        // Remove the cascaded tabs and activate the right tab
        tabs.forEach((tab) => {
          if (this.tabLinkHash.length) {
            const theId = `#tab-${tab.id}`;

            if (this.tabLinkHash.indexOf(theId) === -1) {
              tab.removeAttribute('active');
            } else {
              tab.setAttribute('active', '');
            }
          }

          if (tab.parentNode === self) {
            this.tabsLinks.push(tab);
          }
        });
      } else {
        // Activate the correct tab
        tabs.forEach((tab) => {
          if (this.tabLinkHash.length) {
            const theId = `#tab-${tab.hash}`;
            if (this.tabLinkHash.indexOf(theId) > -1) {
              tab.removeAttribute('active');
            } else {
              tab.setAttribute('active', '');
            }
          }
        });

        this.tabsLinks = tabs;
      }
    }

    toTabs() {
      const self = this;
      // remove the cascaded tabs
      for (let i = 0, l = this.panels.length; i < l; ++i) {
        if (this.panels[i].parentNode.parentNode.parentNode === this) {
          this.tabsLinks.push(this.panels[i]);
        }
      }

      if (this.tabsLinks.length) {
        this.tabsLinks.forEach((panel) => {
          self.appendChild(panel);
        });
      }
    }

    toAccordion() {
      const self = this;
      // remove the cascaded tabs
      // for (let i = 0, l = this.panels.length; i < l; ++i) {
      //   if (this.panels[i].parentNode === this) {
      //     this.tabsLinks.push(this.panels[i]);
      //   }
      // }

      if (this.panels.length) {
        this.panels.forEach((panel) => {
          const link = self.querySelector('a[aria-controls="' + panel.id + '"]')
          // if (link.parentNode.parentNode === self.firstElementChild)
          link.parentNode.appendChild(panel);
        });
      }
    }

    /** Method to convert tabs to accordion and vice versa depending on screen size */
    changeView() {
      if (window.outerWidth > 920) {
        if (this.view === 'tabs') {
          return;
        }
        // convert to tabs
        this.toTabs.bind(this);
        this.view = 'tabs'
      } else {
        if (this.view === 'accordion') {
          return;
        }
        // convert to accordion
        this.toAccordion.bind(this);
        this.view = 'accordion'
      }
    }

    activateUriHash() {
      const hash = window.location.href.match(/#\S[^&]*/);
      const element = this.querySelector(hash[0]);

      if (element) {
        // Activate any parent tabs (nested tables)
        const currentTabSet = this.findAncestorByTagNme(element, 'joomla-tab');
        const parentTabSet = this.findAncestorByTagNme(currentTabSet, 'joomla-tab');

        if (parentTabSet) {
          const parentTab = this.findAncestorByTagNme(currentTabSet, 'section');
          parentTabSet.showTab(parentTab);
          // Now activate the given tab
          this.show(element);
        } else {
          // Now activate the given tab
          this.showTab(element);
        }
      }
    }
    /* eslint-disable */
    findAncestorByTagNme(el, tagName) {
      while ((el = el.parentElement) && el.nodeName.toLowerCase() !== tagName);
      return el;
    }
    /* eslint-enable */

    /* Method to dispatch events */
    dispatchCustomEvent(eventName, element, related) {
      const OriginalCustomEvent = new CustomEvent(eventName, { bubbles: true, cancelable: true });
      if (related) {
        OriginalCustomEvent.relatedTarget = related;
      }

      element.dispatchEvent(OriginalCustomEvent);
      element.removeEventListener(eventName, element);
    }
  });
})();
