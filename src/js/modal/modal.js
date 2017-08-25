class ModalElement extends HTMLElement {
  constructor(element) {
    super();
    this.includeCss();

    window.Joomla = window.Joomla || {};
    window.Joomla.UI = {};
    window.Joomla.UI.modal = {};
  }

  connectedCallback() {
    const self = this;

    const triggerBtn = document.querySelector(`button[data-href="#${this.id}"]`);
    if (triggerBtn) {
      triggerBtn.addEventListener('click', function (ev) {
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
        const modalButton = self.querySelectorAll('button[data-dismiss="modal"]');

        for (let i = 0, l = modalButton.length; i < l; i++) {
          // Add listeners for close
          modalButton[i].addEventListener('click', (event) => {
            self.close();
          });
        }
      });
    }
  }

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

  close() {
    const dropShadow = document.querySelector('.modal-backdrop');
    if (dropShadow) document.body.removeChild(dropShadow);
    this.classList.remove('show');
    // this.style.display = 'none';
  }

  findAncestor(el, tagName) {
    while ((el = el.parentElement) && el.nodeName.toLowerCase() !== tagName);
    return el;
  }

  findAncestorClass(el, className) {
    while ((el = el.parentElement) && !el.classList.contains(className));
    return el;
  }

  includeCss() {
    if (!document.getElementById('joomla-modal-stylesheet')) {
      const style = document.createElement('style');
      style.id = 'joomla-modal-stylesheet';
      style.innerHTML = `{{stylesheet}}`;
      document.head.appendChild(style);
    }
  }
}
customElements.define('joomla-modal', ModalElement);
