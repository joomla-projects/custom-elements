export class JoomlaTipElement extends HTMLElement {
  /* Attributes to monitor */
  static get observedAttributes() { return ['type', 'label', 'tip', 'text', 'position']; }

  get type() { return this.getAttribute('type'); }

  set type(value) { return this.setAttribute('type', value); }

  get label() { return this.getAttribute('label'); }

  set label(value) { return this.setAttribute('label', value); }

  get tip() { return this.getAttribute('tip'); }

  set tip(value) { return this.setAttribute('tip', value); }

  get position() { return this.getAttribute('position'); }

  set position(value) { return this.setAttribute('position', value); }

  get text() { return this.getAttribute('text'); }

  set text(value) { return this.getAttribute('text', value); }

  /* Lifecycle, element appended to the DOM */
  connectedCallback() {
    if (!this.position || (this.position && ['top', 'bottom', 'left', 'right'].indexOf(this.position) === -1)) {
      this.position = 'top';
    }

    // create the html
    this.btnElement = document.createElement('button');
    this.spanElement = document.createElement('span');

    this.btnElement.setAttribute('aria-label', this.label ? this.label : 'more info');
    this.btnElement.innerHTML = this.text ? this.text : '';
    this.spanElement.setAttribute('role', 'status');

    // On click
    this.btnElement.addEventListener('click', this.showTip.bind(this));

    this.append(this.btnElement);
    this.append(this.spanElement);
  }

  /* Lifecycle, element removed from the DOM */
  disconnectedCallback() {
    this.querySelector('button').removeEventListener('click', this.showTip, true);
  }

  showTip() {
    const self = this;

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (this.btnElement !== e.target) {
        this.spanElement.innerHTML = '';
        self.removeEventListener('keydown', this);
      }
    });

    // Remove toggletip on ESC
    document.addEventListener('keydown', (e) => {
      if ((e.keyCode || e.which) === 9) {
        this.spanElement.innerHTML = '';
        self.removeEventListener('keydown', this);
      }
    });

    this.spanElement.innerHTML = '';
    this.spanElement.innerHTML = `<span class="toggletip-bubble ${this.position}">${this.tip}</span>`;
  }

  /* Method to dispatch events */
  dispatchCustomEvent(eventName) {
    const OriginalCustomEvent = new CustomEvent(eventName, { bubbles: true, cancelable: true });
    OriginalCustomEvent.relatedTarget = this;
    this.dispatchEvent(OriginalCustomEvent);
    this.removeEventListener(eventName, this);
  }
}
