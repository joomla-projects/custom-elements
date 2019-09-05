(() => {
  class JoomlaCalloutElement extends HTMLElement {
    /* Attributes to monitor */
    static get observedAttributes() {
      return ['for', 'dismiss'];
    }

    get for() { return this.getAttribute('for'); }

    set for(value) { return this.setAttribute('for', value); }

    get dismiss() { return this.getAttribute('dismiss'); }

    connectedCallback() {
      this.setAttribute('aria-labelledby', this.for.substring(1));
      const button = document.querySelector(this.for);
      const innerLinks = this.querySelectorAll('a');

      if (!button.id) {
        return;
      }
      if (this.hasAttribute('dismiss')) {
        this.appendCloseButton();
      }

      button.setAttribute('aria-haspopup', true);
      button.setAttribute('aria-expanded', false);

      button.addEventListener('click', (event) => {
        if (this.hasAttribute('expanded')) {
          this.removeAttribute('expanded');
          event.target.setAttribute('aria-expanded', false);
        } else {
          this.setAttribute('expanded', '');
          event.target.setAttribute('aria-expanded', true);
        }

        document.addEventListener('click', (evt) => {
          if (evt.target !== button && evt.target !== this) {
            if (!this.findAncestor(evt.target, 'joomla-callout')) {
              this.close();
            }
          }
        });

        innerLinks.forEach((innerLink) => {
          innerLink.addEventListener('click', () => {
            this.close();
          });
        });
      });
    }

    /*eslint-disable */
    /* Method to dispatch events */
    dispatchCustomEvent(eventName) {
      const OriginalCustomEvent = new CustomEvent(eventName);
      OriginalCustomEvent.relatedTarget = this;
      this.dispatchEvent(OriginalCustomEvent);
      this.removeEventListener(eventName, this);
    }

    adoptedCallback(oldDocument, newDocument) { }

    /* eslint-enable */

    close() {
      const button = document.querySelector(`#${this.getAttribute('aria-labelledby')}`);
      this.removeAttribute('expanded');
      button.setAttribute('aria-expanded', false);
    }

    appendCloseButton() {
      const self = this;
      const closeButton = document.createElement('button');
      if (this.hasAttribute('dismiss')) {
        closeButton.classList.add('joomla-callout--close');
        closeButton.innerHTML = '<span aria-hidden="true">&times;</span>';
        closeButton.setAttribute('aria-label', this.getText('JCLOSE', 'Close'));
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
          self.close();
        });
      }
    }
    /* eslint-disable */
    findAncestor(el, tagName) {
      while ((el = el.parentElement) && el.nodeName.toLowerCase() !== tagName);
      return el;
    }
    
    /* Method to get the translated text */
    getText(str, fallback) {
      // TODO: Remove coupling to Joomla CMS Core JS here
      /* eslint-disable-next-line no-undef */
      return (window.Joomla && Joomla.JText && Joomla.JText._ && typeof Joomla.JText._ === 'function' && Joomla.JText._(str)) ? Joomla.JText._(str) : fallback;
    }
  }

  customElements.define('joomla-callout', JoomlaCalloutElement);
})();
