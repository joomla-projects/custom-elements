(() => {
  /** Include the relative styles */
  if (!document.head.querySelector('#joomla-alert-style')) {
    const style = document.createElement('style');
    style.id = 'joomla-alert-style';
    style.innerHTML = `joomla-alert{display:block;min-width:250px;padding:.5rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;opacity:0;border-radius:.25rem;transition:opacity .15s linear}joomla-alert.joomla-alert--show{display:block;opacity:1}joomla-alert .joomla-alert--close,joomla-alert .joomla-alert-button--close{position:relative;top:-.5rem;right:-1.25rem;padding:.2rem 1rem;color:inherit}joomla-alert .joomla-alert--close{font-size:1.5rem;font-weight:700;line-height:1;text-shadow:0 1px 0 #fff}joomla-alert .joomla-alert--close,joomla-alert .joomla-alert-button--close{float:right;color:#000;background:0 0;border:0;opacity:.5}joomla-alert .joomla-alert--close:focus,joomla-alert .joomla-alert--close:hover,joomla-alert .joomla-alert-button--close:focus,joomla-alert .joomla-alert-button--close:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.75}joomla-alert button.joomla-alert-button--close{padding-top:.75rem;font-size:100%;line-height:1.15;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}joomla-alert[type=success]{color:#234423;background-color:#d9e6d9;border-color:#cadcca}joomla-alert[type=success] hr{border-top-color:#bbd2bb}joomla-alert[type=success] .alert-link{color:#122212}joomla-alert[type=info]{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}joomla-alert[type=info] hr{border-top-color:#abdde5}joomla-alert[type=info] .alert-link{color:#062c33}joomla-alert[type=warning]{color:#7d5a29;background-color:#fcefdc;border-color:#fbe8cd}joomla-alert[type=warning] hr{border-top-color:#f9ddb5}joomla-alert[type=warning] .alert-link{color:#573e1c}joomla-alert[type=danger]{color:#712b29;background-color:#f7dddc;border-color:#f4cfce}joomla-alert[type=danger] hr{border-top-color:#efbbb9}joomla-alert[type=danger] .alert-link{color:#4c1d1b}`;
    document.head.appendChild(style);
  }

  customElements.define('joomla-alert', class extends HTMLElement {
    /* Attributes to monitor */
    static get observedAttributes() { return ['type', 'dismiss', 'acknowledge', 'href']; }
    get type() { return this.getAttribute('type'); }
    set type(value) { return this.setAttribute('type', value); }
    get dismiss() { return this.getAttribute('dismiss'); }
    get acknowledge() { return this.getAttribute('acknowledge'); }
    get href() { return this.getAttribute('href'); }

    /* Lifecycle, element appended to the DOM */
    connectedCallback() {
      this.setAttribute('role', 'alert');
      this.classList.add('joomla-alert--show');

      // Default to info
      if (!this.type || ['info', 'warning', 'danger', 'success'].indexOf(this.type) === -1) {
        this.setAttribute('type', 'info');
      }
      // Append button
      if (this.hasAttribute('dismiss') || this.hasAttribute('acknowledge') || (this.hasAttribute('href'))) {
        if ((this.getAttribute('href') !== '')
          && !this.querySelector('button.joomla-alert--close') && !this.querySelector('button.joomla-alert-button--close')) {
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
          if (!newValue || (newValue && ['info', 'warning', 'danger', 'success'].indexOf(newValue) === -1)) {
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
      }, false);
      this.classList.remove('joomla-alert--show');
    }

    /* Method to dispatch events */
    dispatchCustomEvent(eventName) {
      const OriginalCustomEvent = new CustomEvent(eventName);
      OriginalCustomEvent.relatedTarget = this;
      this.dispatchEvent(OriginalCustomEvent);
      this.removeEventListener(eventName, this);
    }

    /* Method to create the close button */
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
        if (!this.href) {
          closeButton.addEventListener('click', () => {
            self.dispatchCustomEvent('joomla.alert.buttonClicked');
            if (self.getAttribute('data-callback')) {
              window[self.getAttribute('data-callback')]();
              self.close();
            } else {
              self.close();
            }
          });
        } else {
          closeButton.addEventListener('click', () => {
            self.dispatchCustomEvent('joomla.alert.buttonClicked');
            window.location.href = self.href;
            self.close();
          });
        }
      }

      if (this.hasAttribute('auto-dismiss')) {
        setTimeout(() => {
          self.dispatchCustomEvent('joomla.alert.buttonClicked');
          if (self.hasAttribute('data-callback')) {
            window[self.getAttribute('data-callback')]();
          } else {
            self.close();
          }
        }, parseInt(self.getAttribute('auto-dismiss'), 10) ? self.getAttribute('auto-dismiss') : 3000);
      }
    }

    /* Method to remove the close button */
    removeCloseButton() {
      const button = this.querySelector('button');
      if (button) {
        button.removeEventListener('click', this);
        button.parentNode.removeChild(button);
      }
    }

    /* Method to get the translated text */
    getText(str, fallback) {
      return (window.Joomla && window.Joomla.JText && window.Joomla.JText._ && typeof window.Joomla.JText._ === 'function' && window.Joomla.JText._(str)) ? window.Joomla.JText._(str) : fallback;
    }
  });
})();
