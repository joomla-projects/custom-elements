(() => {
  class JoomlaCardElement extends HTMLElement {
    /* Attributes to monitor */
    static get observedAttributes() { return ['dropdown']; }

    get dropdown() { return this.getAttribute('dropdown') || false; }

    /* Lifecycle, element appended to the DOM */
    connectedCallback() {
      if (this.dropdown === 'true') {
        this.generateDropdown();
        this.classList.add('joomla-dropdown-container');
      } else {
        this.classList.remove('joomla-dropdown-conotainer');
      }
    }

    generateDropdown() {
      const dropdownIcon = document.createElement('span');
      dropdownIcon.classList.add('dropdown-icon');
      dropdownIcon.setAttribute('id', 'dropdownID');
      dropdownIcon.innerHTML = '...';
      this.appendChild(dropdownIcon);
      this.querySelector('joomla-dropdown').setAttribute('for', '#dropdownID');
    }
  }
  customElements.define('joomla-card', JoomlaCardElement);
})();
