class JoomlaAlertElement extends HTMLElement {
  constructor() {
    super();

    this.close = this.close.bind(this);
    this.markAlertClosed = this.markAlertClosed.bind(this);
  }

  /* Attributes to monitor */
  static get observedAttributes() { return ['type', 'role', 'dismiss', 'close-text']; }

  get type() { return this.getAttribute('type'); }

  set type(value) { return this.setAttribute('type', value); }

  get role() { return this.getAttribute('role'); }

  set role(value) { return this.setAttribute('role', value); }

  get closeText() { return this.getAttribute('close-text'); }

  set closeText(value) { return this.setAttribute('close-text', value); }

  get dismiss() { return this.getAttribute('dismiss'); }

  get autodismiss() { return this.getAttribute('auto-dismiss'); }

  /* Lifecycle, element appended to the DOM */
  connectedCallback() {
    this.classList.add('joomla-alert--show');

    // Default to info
    if (!this.type || !['info', 'warning', 'danger', 'success'].includes(this.type)) {
      this.setAttribute('type', 'info');
    }
    // Default to alert
    if (!this.role || !['alert', 'alertdialog'].includes(this.role)) {
      this.setAttribute('role', 'alert');
    }
    // Append button
    if (this.hasAttribute('dismiss')
      && !this.querySelector('button.joomla-alert--close')) {
      this.appendCloseButton();
    }

    if (this.hasAttribute('auto-dismiss')) {
      this.autoDismiss();
    }

    this.dispatchCustomEvent('joomla.alert.show');
  }

  /* Lifecycle, element removed from the DOM */
  disconnectedCallback() {
    if (this.firstElementChild && this.firstElementChild.tagName.toLowerCase() === 'button') {
      this.firstElementChild.removeEventListener('click', this.close);
    }
  }

  /* Respond to attribute changes */
  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      case 'type':
        if (!newValue || (newValue && ['info', 'warning', 'danger', 'success'].indexOf(newValue) === -1)) {
          this.type = 'info';
        }
        break;
      case 'role':
        if (!newValue || (newValue && ['alert', 'alertdialog'].indexOf(newValue) === -1)) {
          this.role = 'alert';
        }
        break;
      case 'dismiss':
      case 'close-text':
        if (!newValue || newValue === 'true') {
          this.appendCloseButton();
        } else {
          this.removeCloseButton();
        }
        break;
      case 'auto-dismiss':
        this.autoDismiss();
        break;
      default:
        break;
    }
  }

  markAlertClosed() {
    this.dispatchCustomEvent('joomla.alert.closed');
    this.parentNode.removeChild(this);
  }

  /* Method to close the alert */
  close() {
    this.dispatchCustomEvent('joomla.alert.close');
    if (window.matchMedia('(prefers-reduced-motion)').matches) {
      this.markAlertClosed();
    } else {
      this.addEventListener('transitionend', (event) => {
        if (event.target === this) {
          this.markAlertClosed();
        }
      }, false);
    }
    this.classList.remove('joomla-alert--show');
  }

  /* Method to dispatch events */
  dispatchCustomEvent(eventName) {
    const OriginalCustomEvent = new CustomEvent(eventName);
    this.dispatchEvent(OriginalCustomEvent);
    this.removeEventListener(eventName, this);
  }

  /* Method to create the close button */
  appendCloseButton() {
    let button = this.querySelector('button.joomla-alert--close');

    if (button) {
      button.setAttribute('aria-label', this.closeText);
    } else {
      button = document.createElement('button');

      if (this.hasAttribute('dismiss')) {
        button.classList.add('joomla-alert--close');
        button.innerHTML = '<span aria-hidden="true">&times;</span>';
        button.setAttribute('aria-label', this.closeText);
      }

      this.insertAdjacentElement('afterbegin', button);

      /* Add the required listener */
      button.addEventListener('click', this.close);
    }
  }

  /* Method to auto-dismiss */
  autoDismiss() {
    const self = this;
    const timer = parseInt(self.getAttribute('auto-dismiss'), 10);
    setTimeout(() => {
      self.dispatchCustomEvent('joomla.alert.buttonClicked');
      if (self.hasAttribute('data-callback')) {
        window[self.getAttribute('data-callback')]();
      } else {
        self.close(self);
      }
    }, timer >= 10 ? timer : 3000);
  }

  /* Method to remove the close button */
  removeCloseButton() {
    const button = this.querySelector('button');
    if (button) {
      button.removeEventListener('click', this);
      button.parentNode.removeChild(button);
    }
  }
}

if (!customElements.get('joomla-alert')) {
  customElements.define('joomla-alert', JoomlaAlertElement);
}
