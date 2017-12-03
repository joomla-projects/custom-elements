class JoomlaAlertElement extends HTMLElement {
  /* Attributes to monitor */
  static get observedAttributes() { return ['type', 'dismiss', 'auto-dismiss', 'position', 'textClose']; }
  get type() { return this.getAttribute('type'); }
  set type(value) { return this.setAttribute('type', value); }
  get dismiss() { return this.getAttribute('dismiss'); }
  set dismiss(value) { return this.setAttribute('dismiss', value); }
  get autoDismiss() { return parseInt(this.getAttribute('auto-dismiss'), 10); }
  set autoDismiss(value) { return this.setAttribute('auto-dismiss', parseInt(value, 10)); }
  get position() { return this.getAttribute('position'); }
  set position(value) { return this.setAttribute('position', value); }
  get textClose() { return this.getAttribute('textClose') || 'Close'; }
  set textClose(value) { return this.setAttribute('textClose', value); }

  constructor() {
    // We are extending HTMLElement
    super();

    // Bind some functions
    this.close = this.close.bind(this);
    this.appendCloseButton = this.appendCloseButton.bind(this);
    this.removeCloseButton = this.removeCloseButton.bind(this);
  }

  /* Lifecycle, element appended to the DOM */
  connectedCallback() {
    // Trigger show event
    this.dispatchCustomEvent('joomla.alert.show');
    this.setAttribute('role', 'alert');
    this.classList.add('joomla-alert--show');

    // If no type has been defined, the default as "info"
    if (!this.type || (this.type && ['info', 'warning', 'success', 'danger'].indexOf(this.type) === -1)) {
      this.setAttribute('type', 'info');
    }

    // Append button
    if (this.hasAttribute('dismiss')) {
      if (!this.querySelector('button.joomla-alert--close')) {
        this.appendCloseButton.bind(this)();
      }
    }

    // Trigger shown event
    this.dispatchCustomEvent('joomla.alert.show');

    if (this.closeButton) {
      this.closeButton.focus();
    }
  }

  /* Lifecycle, element removed from the DOM */
  disconnectedCallback() {
    if (this.firstChild.tagName && this.firstChild.tagName.toLowerCase() === 'button') {
      this.firstChild.removeEventListener('click', this.close);
    }
  }

  /* Respond to attribute changes */
  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      case 'type':
        if (!newValue || ['info', 'warning', 'success', 'danger'].indexOf(newValue) === -1) {
          this.type = 'info';
        }
        break;
      case 'dismiss':
        if (!newValue || newValue === 'true') {
          if (this.firstElementChild.tagName && this.firstElementChild.tagName.toLowerCase() !== 'button') {
            this.appendCloseButton.bind(this)();
          }
        } else if (this.firstElementChild.tagName && this.firstElementChild.tagName.toLowerCase() === 'button') {
          this.removeCloseButton.bind(this)();
        }
        break;
      case 'auto-dismiss':
        if (!newValue || newValue === '') {
          this.removeAttribute('auto-dismiss');
        }
        break;
      default:
        break;
    }
  }

  /* Method to close the alert */
  close() {
    this.dispatchCustomEvent('joomla.alert.close');
    this.addEventListener('transitionend', () => {
      this.dispatchCustomEvent('joomla.alert.closed');
      this.parentNode.removeChild(this);
    });
    this.classList.remove('joomla-alert--show');
  }

  /* Method to dispatch events */
  dispatchCustomEvent(eventName) {
    const OriginalCustomEvent = new CustomEvent(eventName, { bubbles: true, cancelable: true });
    OriginalCustomEvent.relatedTarget = this;
    this.dispatchEvent(OriginalCustomEvent);
    this.removeEventListener(eventName, this);
  }

  /* Method to create the close button */
  appendCloseButton() {
    if (this.querySelector('button.joomla-alert--close') || this.querySelector('button.joomla-alert-button--close')) {
      return;
    }

    const closeButton = document.createElement('button');

    closeButton.classList.add('joomla-alert--close');
    closeButton.setAttribute('aria-label', this.this.textClose);
    this.closeButton = closeButton;

    if (this.firstChild) {
      this.insertBefore(closeButton, this.firstChild);
    } else {
      this.appendChild(closeButton);
    }

    /* Add the required listener */
    if (closeButton) {
      closeButton.addEventListener('click', this.close.bind(this));
    }

    if (this.autoDismiss > 0) {
      const self = this;
      const timeout = this.autoDismiss;
      setTimeout(() => {
        self.dispatchCustomEvent('joomla.alert.buttonClicked');
        if (self.href) {
          window.location.href = self.href;
        }
        self.close();
      }, timeout);
    }
  }

  /* Method to remove the close button */
  removeCloseButton() {
    if (this.closeButton) {
      this.closeButton.removeEventListener('click', this.buttonCloseFn);
      this.closeButton.parentNode.removeChild(this.closeButton);
    }
  }
}

customElements.define('joomla-alert', JoomlaAlertElement);
