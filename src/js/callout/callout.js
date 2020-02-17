(() => {
  class JoomlaCalloutElement extends HTMLElement {
    constructor() {
      super();
      this.space = 15; // Minimum Space
      this.action = 'click'; // Action
      this.disableEvent = this.disableEvent.bind(this);
      this.setPositionOnScroll = this.setPositionOnScroll.bind(this);
    }

    /* Attributes to monitor */
    static get observedAttributes() {
      return ['for', 'dismiss', 'position'];
    }

    get for() { return this.getAttribute('for'); }

    set for(value) { return this.setAttribute('for', value); }

    get dismiss() { return this.getAttribute('dismiss'); }

    get position() { return this.getAttribute('position'); }

    set position(value) { return this.setAttribute('position', value); }

    connectedCallback() {
      if (!this.position || (this.position && ['top', 'bottom', 'left', 'right'].indexOf(this.position) === -1)) {
        this.position = 'right';
      }

      const action = this.getAttribute('action');
      this.action = action && action === 'hover' ? 'mouseenter' : this.action;
      this.setAttribute('aria-labelledby', this.for.substring(1));
      this.button = document.querySelector(this.for);

      if (!this.button.id) {
        return;
      }
      if (this.hasAttribute('dismiss')) {
        this.appendCloseButton();
      }

      this.button.setAttribute('aria-haspopup', true);
      this.button.setAttribute('aria-expanded', false);

      this.button.addEventListener(this.action, (event) => {
        event.preventDefault();
        this.open(event);
      });
    }

    /**
     * Open callout method
     * @param {Object} event
     */
    open(event) {
      const innerLinks = this.querySelectorAll('a');
      if (this.hasAttribute('expanded')) {
        this.removeAttribute('expanded');
        event.target.setAttribute('aria-expanded', false);
      } else {
        this.setAttribute('expanded', '');
        event.target.setAttribute('aria-expanded', true);
        const buttonRect = this.button.getBoundingClientRect();
        const calloutRect = this.getBoundingClientRect();
        const copyPosition = this.checkPosition(this.position, buttonRect, calloutRect);
        this.calloutPosition(copyPosition, buttonRect, calloutRect, this.space);
      }
      const trigger = this.action === 'mouseenter' ? 'mouseover' : this.action;
      document.addEventListener(trigger, this.disableEvent, true);
      // Check position when browser scroll
      window.addEventListener('scroll', this.setPositionOnScroll, true);

      innerLinks.forEach((innerLink) => {
        innerLink.addEventListener('click', () => {
          this.close();
        });
      });
    }

    /**
     * Close callout on outside trigger
     * @param {object} event
     */
    disableEvent(event) {
      if (
        !this.button.contains(event.target)
          && event.target !== this.button
          && event.target !== this) {
        if (!this.findAncestor(event.target, 'joomla-callout')) {
          this.close();
        }
      }
    }

    /**
     * Check callout position on scroll and set the inline style
     * @param {Object} event
     */
    setPositionOnScroll(event) {
      event.preventDefault();
      if (this.hasAttribute('expanded')) {
        const buttonRect = this.button.getBoundingClientRect();
        const calloutRect = this.getBoundingClientRect();
        const copyPosition = this.checkPosition(this.position, buttonRect, calloutRect);
        this.calloutPosition(copyPosition, buttonRect, calloutRect, this.space);
      }
    }

    // eslint-disable-next-line class-methods-use-this
    /**
     * Check the callout position
     * If position right and have no space then set position to oposite
     * Same as for top|bottom|left
     * @param {String} currentPosition
     * @param {Object} buttonRect
     * @param {Object} calloutRect
     */
    checkPosition(currentPosition, buttonRect, calloutRect) {
      if (currentPosition === 'bottom' && (buttonRect.top + calloutRect.height) > window.innerHeight) {
        this.setAttribute('position', 'top');
        return 'top';
      } if (currentPosition === 'top' && buttonRect.top < (buttonRect.height + calloutRect.height)) {
        this.setAttribute('position', 'bottom');
        return 'bottom';
      } if (currentPosition === 'right' && (buttonRect.right + calloutRect.width) > window.innerWidth) {
        this.setAttribute('position', 'left');
        return 'left';
      } if (currentPosition === 'left' && (buttonRect.width + calloutRect.width) > buttonRect.right) {
        this.setAttribute('position', 'right');
        return 'right';
      }
      return currentPosition;
    }

    /**
     * Calculate position and set inline style in element
     * @param {Object} copyPosition
     * @param {Object} buttonRect
     * @param {Object} calloutRect
     * @param {Int} space
     */
    calloutPosition(copyPosition, buttonRect, calloutRect, space) {
      const diffWidth = Math.round(Math.abs(calloutRect.width - buttonRect.width) / 2);
      const diffHeight = Math.round(Math.abs(calloutRect.height - buttonRect.height) / 2);
      switch (copyPosition) {
        case 'top':
          this.style.top = `${Math.round(buttonRect.top - (calloutRect.height + space))}px`;
          if (buttonRect.width < calloutRect.width) {
            this.style.left = `${Math.round(buttonRect.left - diffWidth)}px`;
          } else {
            this.style.left = `${Math.round(buttonRect.left + diffWidth)}px`;
          }
          break;
        case 'bottom':
          this.style.top = `${Math.round(buttonRect.bottom) + space}px`;
          if (buttonRect.width < calloutRect.width) {
            this.style.left = `${Math.round(buttonRect.left - diffWidth)}px`;
          } else {
            this.style.left = `${Math.round(buttonRect.left + diffWidth)}px`;
          }
          break;
        case 'left':
          this.style.left = `${Math.round((buttonRect.left) - (calloutRect.width + space))}px`;
          if (buttonRect.height < calloutRect.height) {
            this.style.top = `${Math.round(buttonRect.top - diffHeight)}px`;
          } else {
            this.style.top = `${Math.round(buttonRect.top + diffHeight)}px`;
          }
          break;
        default:
          this.style.left = `${Math.round((buttonRect.left) + (buttonRect.width + space))}px`;
          if (buttonRect.height < calloutRect.height) {
            this.style.top = `${Math.round(buttonRect.top - diffHeight)}px`;
          } else {
            this.style.top = `${Math.round(buttonRect.top + diffHeight)}px`;
          }
          break;
      }
    }

    /* Method to dispatch events */
    dispatchCustomEvent(eventName) {
      const OriginalCustomEvent = new CustomEvent(eventName);
      OriginalCustomEvent.relatedTarget = this;
      this.dispatchEvent(OriginalCustomEvent);
      this.removeEventListener(eventName, this);
    }

    /**
     * Close method for close the callout
     */
    close() {
      const button = document.querySelector(`#${this.getAttribute('aria-labelledby')}`);
      this.removeAttribute('expanded');
      button.setAttribute('aria-expanded', false);
      const trigger = this.action === 'mouseenter' ? 'mouseover' : this.action;
      document.removeEventListener(trigger, this.disableEvent, true);
      window.removeEventListener('scroll', this.setPositionOnScroll, true);
    }

    /**
     * Append close button if dismiss set to true
     */
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
        closeButton.addEventListener('click', (e) => {
          e.preventDefault();
          self.dispatchCustomEvent('joomla.alert.buttonClicked');
          self.close();
        });
      }
    }
    /* eslint-disable */
    /**
     * Find the ancestor element from target element
     * @param {Object} el 
     * @param {String} tagName 
     */
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
