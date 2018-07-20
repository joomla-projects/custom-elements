(() => {
  class JoomlaAlert extends HTMLElement {
    /* Attributes to monitor */
    static get observedAttributes() { return ['type', 'dismiss', 'title', 'message', 'show', 'button-text']; }
    get type() { return this.getAttribute('type'); }
    set type(value) { return this.setAttribute('type', value); }
    get dismiss() { return this.getAttribute('dismiss'); }
    set dismiss(value) { return this.setAttribute('type', value); }
    get title() { return this.getAttribute('title'); }
    set title(value) { return this.setAttribute('title', value); }
    get message() { return this.getAttribute('message'); }
    set message(value) { return this.setAttribute('message', value); }
    get buttonText() { return this.getAttribute('button-text'); }
    set buttonText(value) { return this.setAttribute('button-text', value); }

    constructor() {
      super();
      this.header = '';
      this.messageContainer = '';
      this.hasDismissButton = false;
      this.closeButton = '';

      this.dispatchCustomEvent = this.dispatchCustomEvent.bind(this);
      this.appendCloseButton = this.appendCloseButton.bind(this);
      this.removeCloseButton = this.removeCloseButton.bind(this);
      this.render = this.render.bind(this);
      this.close = this.close.bind(this);
      this.callback = this.callback.bind(this);
      this.init = this.init.bind(this);

      // Create an observer instance linked to the callback function
      this.observer = new MutationObserver(this.callback);
    }
    /* Lifecycle, element appended to the DOM */
    connectedCallback() {
      // Start observing the target node for configured mutations
      this.observer.observe(this, { attributes: true, childList: true, subtree: true });

      this.setAttribute('role', 'alert');

      // Default to info
      if (!this.type || ['info', 'warning', 'danger', 'success'].indexOf(this.type) === -1) {
        this.setAttribute('type', 'info');
      }

      if (this.querySelector('h4') && this.querySelector('div')) {
        this.init();
      }
    }

    /* Lifecycle, element removed from the DOM */
    disconnectedCallback() {
      if (this.closeButton) {
        this.closeButton.removeEventListener('click', this.close);
      }

      this.observer.disconnect();
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
        case 'title':
        case 'message':
        case 'button-text':
          this.render();
          break;
        default:
          break;
      }
    }

    /* Method to dispatch events */
    dispatchCustomEvent(eventName) {
      const OriginalCustomEvent = new CustomEvent(eventName);
      this.dispatchEvent(OriginalCustomEvent);
      this.removeEventListener(eventName, OriginalCustomEvent);
    }

    /* Method to close the alert */
    close() {
      this.dispatchCustomEvent('Joomla.Alert.onClose');
      this.removeAttribute('show');
      this.parentNode.removeChild(this);
    }

    /* Method to create the close button */
    appendCloseButton() {
      this.closeButton = this.querySelector('button');

      if (this.closeButton) {
        this.closeButton.setAttribute('aria-label', this.buttonText || 'Close');
        this.closeButton.addEventListener('click', this.close);
        this.closeButton.focus();
        return;
      }

      this.closeButton = document.createElement('button');
      const span = document.createElement('span');
      span.setAttribute('aria-hidden', 'true');
      span.innerHTML = '&times;';
      this.closeButton.setAttribute('aria-label', this.buttonText || 'Close');
      this.closeButton.appendChild(span);

      this.insertAdjacentElement('afterbegin', this.closeButton);
      this.closeButton.addEventListener('click', this.close);
      this.closeButton.focus();
    }

    /* Method to remove the close button */
    removeCloseButton() {
      if (this.closeButton) {
        this.closeButton.removeEventListener('click', this.close);
        this.removeChild(this.closeButton);
      }
    }

    // Callback function to execute when mutations are observed
    callback(mutationsList) {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          this.init();
        }
      }
    }

    init() {
      if (this.header) {
        this.title = this.header.innerText;
      }

      if (this.messageContainer) {
        this.message = this.messageContainer.innerHTML;
      }

      this.render();

      this.dispatchCustomEvent('Joomla.Alert.onShow');
    }

    render() {
      if (this.title) {
        if (!this.header) {
          this.header = document.createElement('h4');
          this.header.innerText = this.title;
          this.appendChild(this.header);
        }
        this.header.innerText = this.title;
      }

      if (this.message) {
        if (!this.messageContainer) {
          this.messageContainer = document.createElement('div');
          this.messageContainer.innerHTML = this.message;
          this.appendChild(this.messageContainer);
        }
        this.messageContainer.innerHTML = this.message;
      }

      if (this.hasAttribute('dismiss') || (this.dismiss && this.dismiss !== 'false')) {
        this.appendCloseButton();
      } else {
        this.removeCloseButton();
      }
    }
  }
  customElements.define('joomla-alert', JoomlaAlert);
})();
