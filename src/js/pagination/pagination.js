(() => {
  class JoomlaPagination extends HTMLElement {
    constructor() {
      super();

      this.keyCode = { TAB: 9, ESC: 27 };

      this.defaultSettings = {
        totalVisible: 10,
        resultMsg: '',
        nextText: 'Next',
        nextIcon: '>',
        prevText: 'Prev',
        prevIcon: '<',
        firstText: 'First',
        firstIcon: '<<',
        lastText: 'Last',
        lastIcon: '>>',
        navBtnsState: 'icon', // allowed values are ['icon', 'text', 'text-icon'],
        disableBtns: [], // this allowes disable the navigation buttons
        // if anywant wants, allowed texts [next, prev, first, last]
        limit: 10, // how many steps it will go after clicking next
        inputSelector: '#list_limit', // the hidden input field name
        formSelector: '#adminForm', // the form id
        pagination: false,
      };

      this.windowHeight = window.innerHeight;

      this.nextPage = this.nextPage.bind(this);
      this.prevPage = this.prevPage.bind(this);
      this.goToFirstPage = this.goToFirstPage.bind(this);
      this.goToLastPage = this.goToLastPage.bind(this);
      this.resizeWindow = this.resizeWindow.bind(this);

      this.resizeTimer = null;
      this.dotItems = [];

      this.disableNext = false;
      this.disableLast = false;
      this.disableFirst = false;
      this.disablePrev = false;

      this.currentItemIndex = 0;

      if (window.innerWidth >= 180) {
        this.pageCount = Math.floor((window.innerWidth - 180) / 45);
      } else {
        this.pageCount = Math.floor((window.innerWidth) / 45);
      }

      this.options = {};

      this.rawItems = this.getAllSiblings();
      this.listItems = this.getAllSiblings();
      this.removeRawElements();

      this.preparePaginationContainer();
    }

    /**
     * Getter methods
     */
    get customClass() { return this.getAttribute('class'); }

    get totalVisible() { return this.getAttribute('total-visible'); }

    get resultMsg() { return this.getAttribute('result-msg'); }

    get nextText() { return this.getAttribute('next-text'); }

    get nextIcon() { return this.getAttribute('next-icon'); }

    get prevText() { return this.getAttribute('prev-text'); }

    get prevIcon() { return this.getAttribute('prev-icon'); }

    get firstText() { return this.getAttribute('first-text'); }

    get firstIcon() { return this.getAttribute('first-icon'); }

    get lastText() { return this.getAttribute('last-text'); }

    get lastIcon() { return this.getAttribute('last-icon'); }

    get navBtnsState() { return this.getAttribute('navbtns-state'); }

    get disableBtns() { return this.getAttribute('disable-btns'); }

    get limit() { return this.getAttribute('limit'); }

    get inputSelector() { return this.getAttribute('input-selector'); }

    get formSelector() { return this.getAttribute('form-selector'); }

    get pagination() { return this.getAttribute('pagination'); }

    preparePaginationContainer() {
      this.pageNav = JoomlaPagination.createDOMElement('nav', {
        class: 'pagination-navigation', role: 'navigation', 'aria-label': 'Pagination', tabindex: '-1',
      });
      this.pageLabel = JoomlaPagination.createDOMElement('span', { class: 'pagination-label d-none d-sm-block' });
      this.pageUl = JoomlaPagination.createDOMElement('ul', { class: 'pagination-list' });
      this.pageNav.appendChild(this.pageLabel);
      this.pageNav.appendChild(this.pageUl);
      this.appendChild(this.pageNav);
    }

    /**
     * Get all direct children elements of joomla-pagination
     */
    getAllSiblings() {
      const result = [];
      let index = 0;
      let node = this.firstChild;

      while (node) {
        if (node !== this && node.nodeType === Node.ELEMENT_NODE) {
          node.removeAttribute('style');
          result.push(node);
          if (node.classList.contains('active')) { this.currentItemIndex = index - 1; }
        }
        index += 1;
        node = node.nextElementSibling || node.nextSibling;
      }
      return result;
    }

    removeRawElements() {
      while (this.firstChild) this.removeChild(this.firstChild);
    }

<<<<<<< HEAD
    static clearChildren(element) {
      while (element.firstChild) { element.removeChild(element.firstChild); }
=======
    clearChildren(element) {
      while (element.firstChild) element.removeChild(element.firstChild);
>>>>>>> 3469fc7fe7e9e97f4d48b0a2b52ae626ff749545
    }

    removeActiveElement() {
      for (let i = 0, l = this.rawItems.length; i < l; i += 1) {
        if (this.rawItems[i].classList.contains('active')) {
          this.rawItems[i].classList.remove('active');
          this.rawItems[i].removeAttribute('aria-current');
          break;
        }
      }
    }

    setAsActiveElement(index) {
      this.rawItems[index].classList.add('active');
      this.rawItems[index].setAttribute('aria-current', true);
      this.rawItems[index].setAttribute('aria-label', `Page ${index + 1}`);
    }
<<<<<<< HEAD

    submitLimitForm() {
      this.inputField.value = this.rawItems[this.currentItemIndex].value;
      this.adminForm.submit();
    }

    submitPaginationForm() {
      // eslint-disable-next-line max-len
      this.inputField.value = parseInt(this.options.limit, 10) * parseInt(this.currentItemIndex, 10);
      this.adminForm.submit();
    }

    static createRange(start, end) {
=======

    setFormValue() {
      this.inputField.value = parseInt(this.options.limit, 10) * parseInt(this.currentItemIndex + 1, 10);
    }

    createRange(start, end) {
>>>>>>> 3469fc7fe7e9e97f4d48b0a2b52ae626ff749545
      const arr = [];
      if (start > end) return arr;

      for (let i = start; i <= end; i += 1) {
        arr.push(i);
      }
      return arr;
    }

<<<<<<< HEAD
    static generatePaginationList(current, total, visibleLength) {
=======
    generatePaginationList(current, total, visibleLength) {
>>>>>>> 3469fc7fe7e9e97f4d48b0a2b52ae626ff749545
      const flag = visibleLength % 2 === 0 ? 1 : 0;
      const head = Math.floor(visibleLength / 2);
      const tail = total - head + 1;

      if (total <= visibleLength) {
        return JoomlaPagination.createRange(1, total);
      }

      if (visibleLength <= 4) {
        return [1, current, total];
      }

      if (current > head && current < tail) {
        const start = current - head + 2;
        const end = current + head - 2 - flag;
        return [1, '...', ...JoomlaPagination.createRange(start, end), '...', total];
      }

      if (current === head) {
        const end = current + head - 1 - flag;
        return [...JoomlaPagination.createRange(1, end), '...', total];
      }

      if (current === tail) {
        const start = current - head + 1;
        return [1, '...', ...JoomlaPagination.createRange(start, total)];
      }

      return [
        ...JoomlaPagination.createRange(1, head),
        '...',
        ...JoomlaPagination.createRange(tail, total),
      ];
    }

    renderPagination(current, total) {
      // enable disable navigation buttons

      if (this.options.resultMsg) {
        this.pageLabel.innerHTML = this.options.resultMsg;
      }

      if (current === 0) {
        this.disablePrev = true;
        this.disableFirst = true;
        this.disableNext = false;
        this.disableLast = false;
      } else if (current === total - 1) {
        this.disablePrev = false;
        this.disableFirst = false;
        this.disableNext = true;
        this.disableLast = true;
      } else {
        this.disablePrev = false;
        this.disableFirst = false;
        this.disableNext = false;
        this.disableLast = false;
      }

      JoomlaPagination.clearChildren(this.pageUl);
      this.removeActiveElement();

      const visibleLength = (this.options.totalVisible > this.pageCount
        ? this.pageCount
        : this.options.totalVisible) || this.pageCount;
      const paginationArray = JoomlaPagination.generatePaginationList(
        this.currentItemIndex + 1,
        this.rawItems.length, visibleLength,
      );
      this.dotItems = [];
      if (paginationArray.length > 0) {
        paginationArray.forEach((itemIndex, index) => {
          if (itemIndex !== '...') {
            if (itemIndex - 1 !== this.currentItemIndex) {
              this.rawItems[itemIndex - 1].setAttribute('aria-label', `Go to page ${itemIndex}`);
            }
            this.pageUl.appendChild(this.rawItems[itemIndex - 1]);
          } else {
            const dotItem = JoomlaPagination.createDOMElement('li', { class: 'pagination-item dot-item' }, '...');
            const dotItemObject = {
              item: dotItem,
              left: paginationArray[index - 1],
              right: paginationArray[index + 1],
            };
            this.dotItems.push(dotItemObject);
            this.pageUl.appendChild(dotItem);
          }
        });
        this.setAsActiveElement(current);
        this.createNavigationButtons();
      }

      this.getDotItemsHiddenList();
    }

    getDotItemsHiddenList() {
      if (this.dotItems.length) {
        this.dotItems.forEach((item) => {
          item.item.addEventListener('click', (event) => this.handleDotItemClick(event, item.left, item.right), false);
        });
      }
    }

    handleDotItemClick(event, start, end) {
      event.preventDefault();

      const dotElements = document.querySelector(`.dot-item-${start}`);
      JoomlaPagination.clearDropdown();
      if (dotElements) {
        return;
      }

      const list = JoomlaPagination.createRange(start + 1, end - 1);

      const clientRect = event.target.getBoundingClientRect();
      const style = `left: ${clientRect.left}px; top: ${clientRect.top + clientRect.height}px`;

      if (list.length > 0) {
        const dotItemsUl = JoomlaPagination.createDOMElement('ul', { class: `dot-item-list dot-item-${start}`, style });
        list.forEach((item) => {
          dotItemsUl.appendChild(this.rawItems[item - 1]);
        });
        this.appendChild(dotItemsUl);
      }
    }

<<<<<<< HEAD
    resizeWindow() {
=======
    resizeWindow(event) {
      event.preventDefault();
>>>>>>> 3469fc7fe7e9e97f4d48b0a2b52ae626ff749545
      this.resizeTimer = setTimeout(() => {
        if (window.innerHeight !== this.windowHeight) return;
        let elWidth = window.innerWidth;
        if (window.innerWidth >= 180) {
          elWidth = window.innerWidth - 180;
        }
        this.pageCount = Math.floor(elWidth / 45);
        this.renderPagination(this.currentItemIndex, this.rawItems.length);
      }, 1000);
    }

    connectedCallback() {
      // const paginationLength = this.getAllSiblings();
      const extendedSettings = {};
      if (this.totalVisible !== null) extendedSettings.totalVisible = this.totalVisible;
      if (this.resultMsg !== null) extendedSettings.resultMsg = this.resultMsg;
      if (this.nextText !== null) extendedSettings.nextText = this.nextText;
      if (this.nextIcon !== null) extendedSettings.nextIcon = this.nextIcon;
      if (this.prevText !== null) extendedSettings.prevText = this.prevText;
      if (this.prevIcon !== null) extendedSettings.prevIcon = this.prevIcon;
      if (this.firstText !== null) extendedSettings.firstText = this.firstText;
      if (this.firstIcon !== null) extendedSettings.firstIcon = this.firstIcon;
      if (this.lastText !== null) extendedSettings.lastText = this.lastText;
      if (this.lastIcon !== null) extendedSettings.lastIcon = this.lastIcon;
      if (this.navBtnsState !== null) extendedSettings.navBtnsState = this.navBtnsState;
      if (this.disableBtns !== null) extendedSettings.disableBtns = this.disableBtns.split(',').map((btn) => btn.trim());
      if (this.inputSelector !== null) extendedSettings.inputSelector = this.inputSelector;
      if (this.formSelector !== null) extendedSettings.formSelector = this.formSelector;
      if (this.limit !== null) extendedSettings.limit = this.limit;
      if (this.pagination !== null) extendedSettings.pagination = (this.pagination === 'true' || this.pagination === '1');

      this.options = { ...this.defaultSettings, ...extendedSettings };

      this.inputField = document.querySelector(`${this.options.inputSelector}`);
      this.adminForm = document.querySelector(`${this.options.formSelector}`);

      this.renderPagination(this.currentItemIndex, this.rawItems.length);
      this.clickHandlers();

      window.addEventListener('resize', this.resizeWindow, false);
      document.querySelector('html,body').addEventListener('click', JoomlaPagination.closeDropdown, false);
    }

    // lifecycle hook
    disconnectedCallback() {
      this.nextBtn.removeEventListener('click', this.nextPage);
      this.prevBtn.removeEventListener('click', this.prevPage);
      this.firstBtn.removeEventListener('click', this.goToFirstPage);
      this.lastBtn.removeEventListener('click', this.goToLastPage);
      if (this.resizeTimer) clearTimeout(this.resizeTimer);
      if (this.dotItems) this.dotItems.forEach((elem) => { elem.removeEventListener('click', this); });
      document.querySelector('html,body').removeEventListener('click', JoomlaPagination.closeDropdown);
      window.removeEventListener('resize', this.resizeWindow, false);
    }

    /**
<<<<<<< HEAD
       * Create a HTMLElement
       * @param {string} tagName      - e.g. div, strong, span etc.
       * @param {object} attr         - element attribute object
       * @param {string} innerHTML    - text to elements innerHTML
       *
       * @return {HTMLElement}
       */
    static createDOMElement(tag, attributes = {}, text = '') {
=======
     * Create a HTMLElement
     * @param {string} tagName      - e.g. div, strong, span etc.
     * @param {object} attr         - element attribute object
     * @param {string} innerHTML    - text to elements innerHTML
     *
     * @return {HTMLElement}
     */
    createDOMElement(tag, attributes = {}, text = '') {
>>>>>>> 3469fc7fe7e9e97f4d48b0a2b52ae626ff749545
      const tagName = typeof (tag) === 'string' && tag.length > 0 ? tag : 'div';
      const attr = typeof (attributes) === 'object' && Object.keys(attributes).length ? attributes : false;
      const innerHTML = typeof (text) === 'string' && text.length > 0 ? text : false;

      // IF tag name given then create element, otherwise create element div
      const el = document.createElement(tagName);

      // If attributes given then set attributes for the element
      if (attr) {
        Object.keys(attr).forEach((key) => {
          el.setAttribute(key, attr[key]);
        });
      }

      // Add inner HTML
      if (innerHTML) {
        el.innerHTML = innerHTML;
      }

      return el;
    }

    createNavigationButtons() {
      // creating navigation buttons
      const navBtns = {
        next: {
          text: this.options.nextText,
          icon: this.options.nextIcon,
          position: 'right',
          isShown: this.options.disableBtns.indexOf('next') > -1,
        },
        last: {
          text: this.options.lastText,
          icon: this.options.lastIcon,
          position: 'right',
          isShown: this.options.disableBtns.indexOf('last') > -1,
        },
        prev: {
          text: this.options.prevText,
          icon: this.options.prevIcon,
          position: 'left',
          isShown: this.options.disableBtns.indexOf('prev') > -1,
        },
        first: {
          text: this.options.firstText,
          icon: this.options.firstIcon,
          position: 'left',
          isShown: this.options.disableBtns.indexOf('first') > -1,
        },
      };
      this.nextBtn = JoomlaPagination.createDOMElement('li', { class: `pagination-item is-next-btn ${this.disableNext ? 'disabled' : ''}` }, this.generateNavBtnsText(navBtns.next));
      this.prevBtn = JoomlaPagination.createDOMElement('li', { class: `pagination-item is-prev-btn ${this.disablePrev ? 'disabled' : ''}` }, this.generateNavBtnsText(navBtns.prev));
      this.firstBtn = JoomlaPagination.createDOMElement('li', { class: `pagination-item is-first-btn ${this.disableFirst ? 'disabled' : ''}` }, this.generateNavBtnsText(navBtns.first));
      this.lastBtn = JoomlaPagination.createDOMElement('li', { class: `pagination-item is-last-btn ${this.disableLast ? 'disabled' : ''}` }, this.generateNavBtnsText(navBtns.last));

      if (!navBtns.next.isShown) this.pageUl.appendChild(this.nextBtn);
      if (!navBtns.last.isShown) this.pageUl.appendChild(this.lastBtn);
      if (!navBtns.prev.isShown) this.pageUl.insertBefore(this.prevBtn, this.pageUl.firstChild);
      if (!navBtns.first.isShown) this.pageUl.insertBefore(this.firstBtn, this.pageUl.firstChild);

      if (!this.disableNext) this.nextBtn.addEventListener('click', this.nextPage, false);
      if (!this.disablePrev) this.prevBtn.addEventListener('click', this.prevPage, false);
      if (!this.disableFirst) this.firstBtn.addEventListener('click', this.goToFirstPage, false);
      if (!this.disableLast) this.lastBtn.addEventListener('click', this.goToLastPage, false);
    }

    generateNavBtnsText(navBtn) {
      let navBtnText = '';
      switch (this.options.navBtnsState) {
        case 'icon':
          navBtnText = `${navBtn.icon.length <= 2 ? navBtn.icon : `<span class="${navBtn.icon}"></span>`}`;
          break;
        case 'text':
          navBtnText = `${navBtn.text}`;
          break;
        case 'text-icon':
          navBtnText = `${navBtn.position === 'left' ? `${navBtn.icon.length <= 2 ? navBtn.icon : `<span class="${navBtn.icon}"></span>`} ${navBtn.text}` : `${navBtn.text} ${navBtn.icon.length <= 2 ? navBtn.icon : `<span class="${navBtn.icon}"></span>`}`}`;
          break;
        default:
          navBtnText = `${navBtn.icon.length <= 2 ? navBtn.icon : `<span class="${navBtn.icon}"></span>`}`;
      }
      return navBtnText;
    }

    static clearDropdown() {
      document.querySelectorAll('.dot-item-list').forEach((elem) => {
        elem.parentNode.removeChild(elem);
      });
    }

<<<<<<< HEAD
    static closeDropdown(event) {
=======
    closeDropdown(event) {
      event.preventDefault();
>>>>>>> 3469fc7fe7e9e97f4d48b0a2b52ae626ff749545
      if (event.target.classList.contains('dot-item') === false) {
        JoomlaPagination.clearDropdown();
      }
    }

    clickHandlers() {
      if (this.listItems) {
        this.rawItems.forEach((elem, index) => {
          elem.addEventListener('click', (event) => this.goToPage(event, index), false);
        });
      }
    }

    nextPage(event) {
      event.preventDefault();
      if (this.currentItemIndex < this.rawItems.length - 1) this.currentItemIndex += 1;
      this.renderPagination(this.currentItemIndex, this.rawItems.length);
<<<<<<< HEAD
      JoomlaPagination.clearDropdown();
      if (this.options.pagination) this.submitPaginationForm();
      else this.submitLimitForm();
=======
      this.clearDropdown();
>>>>>>> 3469fc7fe7e9e97f4d48b0a2b52ae626ff749545
    }

    prevPage(event) {
      event.preventDefault();
      if (this.currentItemIndex > 0) this.currentItemIndex -= 1;
      this.renderPagination(this.currentItemIndex, this.rawItems.length);
<<<<<<< HEAD
      JoomlaPagination.clearDropdown();
      if (this.options.pagination) this.submitPaginationForm();
      else this.submitLimitForm();
=======
      this.clearDropdown();
>>>>>>> 3469fc7fe7e9e97f4d48b0a2b52ae626ff749545
    }

    goToLastPage(event) {
      event.preventDefault();
      this.currentItemIndex = this.rawItems.length - 1;
      this.renderPagination(this.currentItemIndex, this.rawItems.length);
<<<<<<< HEAD
      JoomlaPagination.clearDropdown();
      if (this.options.pagination) this.submitPaginationForm();
      else this.submitLimitForm();
=======
      this.clearDropdown();
>>>>>>> 3469fc7fe7e9e97f4d48b0a2b52ae626ff749545
    }

    goToFirstPage(event) {
      event.preventDefault();
      this.currentItemIndex = 0;
      this.renderPagination(this.currentItemIndex, this.rawItems.length);
<<<<<<< HEAD
      JoomlaPagination.clearDropdown();
      if (this.options.pagination) this.submitPaginationForm();
      else this.submitLimitForm();
=======
      this.clearDropdown();
>>>>>>> 3469fc7fe7e9e97f4d48b0a2b52ae626ff749545
    }

    goToPage(event, pageIndex) {
      event.preventDefault();
      this.currentItemIndex = pageIndex;
      this.renderPagination(this.currentItemIndex, this.rawItems.length);
<<<<<<< HEAD
      JoomlaPagination.clearDropdown();
      if (this.options.pagination) this.submitPaginationForm();
      else this.submitLimitForm();
    }
  }
  customElements.define('joomla-pagination', JoomlaPagination);
=======
      this.clearDropdown();
    }
  });
>>>>>>> 3469fc7fe7e9e97f4d48b0a2b52ae626ff749545
})();
