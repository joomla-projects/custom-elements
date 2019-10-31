(() => {
  class JoomlaAlertElement extends HTMLElement {
    /* Attributes to monitor */
    static get observedAttributes() { return ['type', 'role', 'dismiss', 'acknowledge', 'href', 'collapse']; }

    get type() { return this.getAttribute('type'); }

    set type(value) { return this.setAttribute('type', value); }

    get role() { return this.getAttribute('role'); }

    set role(value) { return this.setAttribute('role', value); }

    get dismiss() { return this.getAttribute('dismiss'); }

    get acknowledge() { return this.getAttribute('acknowledge'); }

    get href() { return this.getAttribute('href'); }

    /* Lifecycle, element appended to the DOM */
    connectedCallback() {
      this.classList.add('joomla-alert--show');

      // Default to info
      if (!this.type || ['info', 'warning', 'danger', 'success', 'default'].indexOf(this.type) === -1) {
        this.setAttribute('type', 'info');
      }
      // Default to alert
      if (!this.role || ['alert', 'alertdialog'].indexOf(this.role) === -1) {
        this.setAttribute('role', 'alert');
      }
      // Check if its collapsable
      if (this.hasAttribute('collapse') && this.getAttribute('collapse') !== '' && this.getAttribute('collapse') !== 'false'
          && !this.querySelector('.joomla-alert--collapse-header') && this.querySelector('.joomla-alert--collapse')) {
        this.appendCollapseContainer();
      }
      // Append button
      if ((this.hasAttribute('dismiss') || this.hasAttribute('acknowledge')) || ((this.hasAttribute('href') && this.getAttribute('href') !== '')
          && !this.querySelector('button.joomla-alert--close') && !this.querySelector('button.joomla-alert-button--close'))) {
        this.appendCloseButton();
      }


      this.dispatchCustomEvent('joomla.alert.show');
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
          if (!newValue || (newValue && ['info', 'warning', 'danger', 'success', 'default'].indexOf(newValue) === -1)) {
            this.type = 'info';
          }
          break;
        case 'role':
          if (!newValue || (newValue && ['alert', 'alertdialog'].indexOf(newValue) === -1)) {
            this.role = 'alert';
          }
          break;
        case 'collapse':
          if (!newValue || newValue === 'true') {
            this.appendCollapseContainer();
          } else {
            this.removeCollapseContainer();
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
      this.style.animation = 'fadeOutUp .3s';
      this.style.opacity = 0;
      setTimeout(() => {
        this.dispatchCustomEvent('joomla.alert.close');
        this.dispatchCustomEvent('joomla.alert.closed');
        this.parentNode.removeChild(this);
        this.classList.remove('joomla-alert--show');
      }, 500);
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
        closeButton.innerHTML = '<span class="icon-times" aria-hidden="true"></span>';
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
      let button = this.querySelector('button.joomla-alert-button--close');
      if (button === null) {
        button = this.querySelector('button.joomla-alert--close');
      }
      if (button) {
        button.removeEventListener('click', this);
        button.parentNode.removeChild(button);
      }
    }

    appendCollapseContainer() {
      if (this.querySelector('.joomla-alert--collapse') === null || this.querySelector('.joomla-alert--collapse-header') !== null) {
        return;
      }
      const collapseBox = this.querySelector('.joomla-alert--collapse');

      const collapseContainer = document.createElement('div');
      collapseContainer.classList.add('joomla-alert--collapse-container');
      collapseBox.parentNode.insertBefore(collapseContainer, collapseBox);
      collapseContainer.append(this.querySelector('.joomla-alert--collapse'));


      const collapseHeader = document.createElement('div');
      collapseHeader.classList.add('joomla-alert--collapse-header');
      collapseHeader.setAttribute('area-expanded', 'false');

      const collapseHeaderTitle = this.getAttribute('collapse-title') === null ? this.getAttribute('type') : this.getAttribute('collapse-title');
      collapseHeader.innerHTML = collapseHeaderTitle;

      const chevronIcon = document.createElement('button');
      chevronIcon.classList.add('joomla-alert--collapse-icon');
      chevronIcon.innerHTML = '&#94;';
      collapseHeader.append(chevronIcon);
      collapseContainer.prepend(collapseHeader);

      chevronIcon.addEventListener('click', () => {
        if (collapseBox.classList.contains('show')) {
          collapseBox.classList.remove('show');
          collapseHeader.setAttribute('area-expanded', 'false');
        } else {
          collapseBox.classList.add('show');
          collapseHeader.setAttribute('area-expanded', 'true');
        }
      });
    }

    removeCollapseContainer() {
      if (this.querySelector('.joomla-alert--collapse-container') === null) {
        return;
      }
      const collapseContainer = this.querySelector('.joomla-alert--collapse-container');
      const collapseBox = collapseContainer.querySelector('.joomla-alert--collapse');
      collapseContainer.removeChild(collapseContainer.querySelector('.joomla-alert--collapse-header'));
      collapseContainer.parentNode.insertBefore(collapseBox, collapseContainer);
      this.removeChild(collapseContainer);
      collapseBox.classList.remove('joomla-alert--collapse');
    }

    /* Method to get the translated text */
    // eslint-disable-next-line class-methods-use-this
    getText(str, fallback) {
      // TODO: Remove coupling to Joomla CMS Core JS here
      /* eslint-disable-next-line no-undef */
      return (window.Joomla && Joomla.JText && Joomla.JText._ && typeof Joomla.JText._ === 'function' && Joomla.JText._(str)) ? Joomla.JText._(str) : fallback;
    }
  }

  customElements.define('joomla-alert', JoomlaAlertElement);
})();
