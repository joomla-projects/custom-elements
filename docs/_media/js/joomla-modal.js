class JoomlaModalElement extends HTMLElement {
  constructor() {
    super();

    window.Joomla = window.Joomla || {};
    window.Joomla.UI = {};
    window.Joomla.UI.modal = {};

    if (!document.getElementById('joomla-modal-stylesheet')) {
      const style = document.createElement('style');
      style.id = 'joomla-modal-stylesheet';
      style.innerHTML = `joomla-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;overflow:hidden;display:none;outline:0;max-width:500px;margin:10px auto;border-radius:5px;box-sizing:inherit}joomla-modal.show{display:block}joomla-modal .modal-dialog{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}joomla-modal .modal-dialog header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:15px;border-bottom:1px solid #e9ecef}joomla-modal .modal-dialog header .close{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none;float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}joomla-modal .modal-dialog section{position:relative;-ms-flex:1 1 auto;flex:1 1 auto;padding:15px}joomla-modal .modal-dialog footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding:15px;border-top:1px solid #e9ecef}.modal-backdrop.show{opacity:.5}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}`;
      document.head.appendChild(style);
    }
  }

  connectedCallback() {
    const self = this;

    const triggerBtn = document.querySelector(`button[data-href="#${this.id}"]`);
    if (triggerBtn) {
      triggerBtn.addEventListener('click', function () {
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

  /*eslint-disable */
  findAncestor(el, tagName) {
    while ((el = el.parentElement) && el.nodeName.toLowerCase() !== tagName);
    return el;
  }

  findAncestorClass(el, className) {
    while ((el = el.parentElement) && !el.classList.contains(className));
    return el;
  }
  /*eslint-disable */
}
customElements.define('joomla-modal', JoomlaModalElement);
