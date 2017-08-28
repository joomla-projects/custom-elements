const Joomla = window.Joomla || {};

/** Include the relative styles */
if (!document.head.querySelector('#joomla-alert-style')) {
  const style = document.createElement('style');
  style.id = 'joomla-alert-style';
  style.innerHTML = '{{stylesheet}}';
  document.head.appendChild(style);
}

class JoomlaAlertElement extends HTMLElement {
  /* Attributes to monitor */
  static get observedAttributes() { return ['type', 'dismiss', 'acknowledge', 'href', 'auto-dismiss']; }
  get type() { return this.getAttribute('type'); }
  set type(value) { return this.setAttribute('type', value); }
  get dismiss() { return this.getAttribute('dismiss'); }
  set dismiss(value) { return this.setAttribute('dismiss', value); }
  get acknowledge() { return this.getAttribute('acknowledge'); }
  set acknowledge(value) { return this.setAttribute('acknowledge', value); }
  get href() { return this.getAttribute('href'); }
  set href(value) { return this.setAttribute('href', value); }
  get ['auto-dismiss']() { return parseInt(this.getAttribute('auto-dismiss'), 10); }
  set ['auto-dismiss'](value) { return this.setAttribute('auto-dismiss', parseInt(value, 10)); }

  /* Lifecycle, element appended to the DOM */
  connectedCallback() {
    this.setAttribute('role', 'alert');
    this.classList.add('joomla-alert--show');

    // If no type has been defined, the default as "info"
    if (!this.type) {
      this.setAttribute('type', 'info');
    }

    // Append button
    if (this.hasAttribute('dismiss') || this.hasAttribute('acknowledge') || (this.hasAttribute('href') && this.getAttribute('href') !== '')) {
      if (!this.querySelector('button.joomla-alert--close') && !this.querySelector('button.joomla-alert-button--close')) {
        this.appendCloseButton();
      }
    }

    this.dispatchCustomEvent('joomla.alert.show');

    const closeButton = this.querySelector('button.joomla-alert--close') || this.querySelector('button.joomla-alert-button--close');

    if (closeButton) {
      closeButton.focus();
    }
  }

  /* Lifecycle, element removed from the DOM */
  disconnectedCallback() {
    this.removeEventListener('joomla.alert.show', this);
    this.removeEventListener('joomla.alert.close', this);
    this.removeEventListener('joomla.alert.closed', this);

    if (this.firstChild.tagName && this.firstChild.tagName.toLowerCase() === 'button') {
      this.firstChild.removeEventListener('click', this);
    }
  }

  /* Respond to attribute changes */
  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      case 'type':
        if (!newValue) {
          this.type = 'info';
        }
        break;
      case 'dismiss':
      case 'acknowledge':
        if (!newValue || newValue === 'true') {
          this.appendCloseButton();
        } else {
          this.removeCloseButton();
        }
        break;
      case 'href':
        if (!newValue || newValue === '') {
          this.removeCloseButton();
        } else if (!this.querySelector('button.joomla-alert-button--close')) {
          this.appendCloseButton();
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

  /* Method to dispatch events. Internal */
  dispatchCustomEvent(eventName) {
    const OriginalCustomEvent = new CustomEvent(eventName, { bubbles: true, cancelable: true });
    OriginalCustomEvent.relatedTarget = this;
    this.dispatchEvent(OriginalCustomEvent);
    this.removeEventListener(eventName, this);
  }

  /* Method to create the close button. Internal */
  appendCloseButton() {
    if (this.querySelector('button.joomla-alert--close') || this.querySelector('button.joomla-alert-button--close')) {
      return;
    }

    const self = this;
    const closeButton = document.createElement('button');

    if (this.hasAttribute('dismiss')) {
      closeButton.classList.add('joomla-alert--close');
      closeButton.innerHTML = '<span aria-hidden="true">&times;</span>';
      closeButton.setAttribute('aria-label', this.getText('JCLOSE', 'Close'));
    } else {
      closeButton.classList.add('joomla-alert-button--close');
      if (this.hasAttribute('acknowledge')) {
        closeButton.innerHTML = this.getText('JOK', 'ok');
      } else {
        closeButton.innerHTML = this.getText('JOPEN', 'Open');
      }
    }

    if (this.firstChild) {
      this.insertBefore(closeButton, this.firstChild);
    } else {
      this.appendChild(closeButton);
    }

    /* Add the required listener */
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        self.dispatchCustomEvent('joomla.alert.buttonClicked');
        if (self.href) {
          window.location.href = self.href;
        }
        self.close();
      });
    }

    if (self['auto-dismiss'] > 0) {
      const timeout = self['auto-dismiss'];
      setTimeout(() => {
        self.dispatchCustomEvent('joomla.alert.buttonClicked');
        if (self.href) {
          window.location.href = self.href;
        }
        self.close();
      }, timeout);
    }
  }

  /* Method to remove the close button. Internal */
  removeCloseButton() {
    const button = this.querySelector('button');
    if (button) {
      button.removeEventListener('click', this);
      button.parentNode.removeChild(button);
    }
  }

  /* Method to get the translated text. Internal */
  getText(str, fallback) {
    return (window.Joomla && Joomla.JText && Joomla.JText._ && typeof Joomla.JText._ === 'function' && Joomla.JText._(str)) ? Joomla.JText._(str) : fallback;
  }
}

customElements.define('joomla-alert', JoomlaAlertElement);
