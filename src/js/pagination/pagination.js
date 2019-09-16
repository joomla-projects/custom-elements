(() => {
  customElements.define('joomla-pagination', class extends HTMLElement {
    constructor() {
      super();
      this.KEYCODE = { tab: 9, esc: 27 };
      this.defaultSettings = {
        min: 1,
        max: 10,
        totalVisible: 10,
      };
    }

    static get observedAttributes() {

    }

    /**
     * Get all sibling elements of pagination
     */
    getAllSiblings() {
      const result = [];
      let node = this.firstChild;
      while (node) {
        if (node !== this && node.nodeType === Node.ELEMENT_NODE) { result.push(node); }
        node = node.nextElementSibling || node.nextSibling;
      }
      return result;
    }

    connectedCallback() {
      const max = this.getAttribute('max');
      const min = this.getAttribute('min');
      const totalVisible = this.getAttribute('totalVisible');
      const paginationLength = this.getAllSiblings();
      this.defaultSettings = {
        ...this.defaultSettings, max, min, totalVisible, length: paginationLength.length,
      };
      console.log('opt: ', this.defaultSettings);
    }
  });
})();
