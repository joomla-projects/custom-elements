/** Include the relative styles */
if (!document.head.querySelector('#joomla-modal-style')) {
  const style = document.createElement('style');
  style.id = 'joomla-modal-style';
  style.innerHTML = '{{stylesheet}}';
  document.head.appendChild(style);
}

class JoomlaModalElement extends HTMLElement {
  constructor() {
    super();

    window.Joomla = window.Joomla || {};
    window.Joomla.UI = {};
    window.Joomla.UI.modal = {};
  }

  connectedCallback() {
    const self = this;

    const triggerBtn = document.querySelector(`button[data-href="#${this.id}"]`);
    if (triggerBtn) {
      triggerBtn.addEventListener('click', () => {
        const currentButton = this;
        const dropShadow = document.createElement('div');
        dropShadow.classList.add('modal-backdrop', 'show');
        document.body.appendChild(dropShadow);

        self.classList.add('show');
        self.firstElementChild.focus();

        // Close on click outside the modal
        window.addEventListener('click', (event) => {
          if (!self.findAncestorClass(event.target, 'modal-content') && event.target !== currentButton) {
            self.close();
          }
        });

        // Is there a close button?
        const modalButtons = self.querySelectorAll('button[data-dismiss="modal"]');

        modalButtons.forEach((modalButton) => {
          // Add listeners for close
          modalButton.addEventListener('click', () => {
            self.close();
          });
        });
      });
    }
  }

/*eslint-disable */
  disconnectedCallback() {

  }

  static get observedAttributes() {
    // return ['name'];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      // case 'name':
      // console.log(newValue);
      // break;
    }
  }
  /*eslint-enable */

  close() {
    const dropShadow = document.querySelector('.modal-backdrop');
    if (dropShadow) document.body.removeChild(dropShadow);
    this.classList.remove('show');
    // this.style.display = 'none';
  }

  findAncestor(el, tagName) {
    /* eslint-disable */
    while ((el = el.parentElement) && el.nodeName.toLowerCase() !== tagName);
    return el;
    /* eslint-enable */
  }

  findAncestorClass(el, className) {
    /* eslint-disable */
    while ((el = el.parentElement) && !el.classList.contains(className));
    return el;
    /* eslint-enable */
  }
}
customElements.define('joomla-modal', JoomlaModalElement);
