class JoomlaPopoverElement extends HTMLElement {
  // /* Attributes to monitor */
  static get observedAttributes() { return ['label', 'tip', 'text', 'position']; }
  get label() { return this.getAttribute('label'); }
  set label(value) { return this.setAttribute('label', value); }
  get tip() { return this.getAttribute('tip'); }
  set tip(value) { return this.setAttribute('tip', value); }
  get position() { return this.getAttribute('position'); }
  set position(value) { return this.setAttribute('position', value); }
  get text() { return this.getAttribute('text'); }
  set text(value) { return this.getAttribute('text', value); }

  /* Lifecycle, element created */
  constructor() {
    super();

    if (!document.getElementById('joomla-popover-stylesheet')) {
      const style = document.createElement('style');
      style.id = 'joomla-popover-stylesheet';
      style.innerHTML = ``;
      document.head.appendChild(style);
    }
  }

  /* Lifecycle, element appended to the DOM */
  connectedCallback() {
    if (!this.position || (this.position && ['top', 'bottom', 'left', 'right'].indexOf(this.position) === -1)) {
      this.position = 'top';
    }

    // create the html
    const btnElement = document.createElement('button');
    const spanElement = document.createElement('span');
    const tip = this.tip;
    const position = this.position;
    const self = this;

    const showTip = () => {
      // Close on outside click
      document.addEventListener('click', function (e) {
        if (btnElement !== e.target) {
          spanElement.innerHTML = '';
          self.removeEventListener('keydown', this);
        }
      });

      // Remove toggletip on ESC
      document.addEventListener('keydown', function (e) {
        if ((e.keyCode || e.which) === 9) {
          spanElement.innerHTML = '';
          self.removeEventListener('keydown', this);
        }
      });

      spanElement.innerHTML = '';
      spanElement.innerHTML = `<span class="toggletip-bubble ${position}">${tip}</span>`;
    };

    btnElement.setAttribute('aria-label', this.label ? this.label : 'more info');
    btnElement.innerHTML = this.text ? this.text : '';
    spanElement.setAttribute('role', 'status');

    // On click
    btnElement.addEventListener('click', showTip);

    this.append(btnElement);
    this.append(spanElement);
  }

  /* Lifecycle, element removed from the DOM */
  disconnectedCallback() {
    this.querySelector('button').removeEventListener('click', this);
  }

  /* Method to dispatch events */
  dispatchCustomEvent(eventName) {
    const OriginalCustomEvent = new CustomEvent(eventName, { bubbles: true, cancelable: true });
    OriginalCustomEvent.relatedTarget = this;
    this.dispatchEvent(OriginalCustomEvent);
    this.removeEventListener(eventName, this);
  }
}

customElements.define('joomla-popover', JoomlaPopoverElement);
