/** Include the relative styles */
if (!document.head.querySelector('#joomla-switcher-style')) {
  const style = document.createElement('style');
  style.id = 'joomla-switcher-style';
  style.innerHTML = '{{stylesheet}}';
  document.head.appendChild(style);
}

class JoomlaSwitcherElement extends HTMLElement {
  /* Attributes to monitor */
  static get observedAttributes() { return ['type', 'offText', 'onText']; }
  get type() { return this.getAttribute('type'); }
  set type(value) { return this.setAttribute('type', value); }
  get offText() { return this.getAttribute('offText') || 'Off'; }
  get onText() { return this.getAttribute('onText') || 'On'; }

  constructor() {
    super();

    this.inputs = '';
    this.container = '';
  }
  /* Lifecycle, element appended to the DOM */
  connectedCallback() {
    this.inputs = [].slice.call(this.querySelectorAll('input'));

    // Create the markup
    this.createMarkup.bind(this)();

    // Add the initial active class
    this.container = this.querySelector('span.switcher');
    const next = this.inputs[1].parentNode.nextElementSibling;

    // Add tab focus
    this.container.setAttribute('tabindex', 0);

    if (this.inputs[1].checked) {
      this.inputs[1].parentNode.classList.add('active');
      next.querySelector(`.switcher-label-${this.inputs[1].value}`).classList.add('active');
    } else {
      next.querySelector(`.switcher-label-${this.inputs[0].value}`).classList.add('active');
    }

    this.inputs.forEach((switchEl) => {
      // Add the required accessibility tags
      if (switchEl.id) {
        const parent = switchEl.parentNode;
        const relatedSpan = parent.nextElementSibling.querySelector(`span.switcher-label-${switchEl.value}`);

        relatedSpan.id = `${switchEl.id}-label`;
        if (switchEl.classList.contains('active')) { switchEl.setAttribute('aria-labelledby', relatedSpan.id); }
      }

      // Remove the tab focus from the inputs
      switchEl.setAttribute('tabindex', '-1');

      // Add the active class on click
      switchEl.addEventListener('click', this.switch.bind(this));
    });

    this.container.addEventListener('keydown', (event) => {
      if (event.keyCode === 13 || event.keyCode === 32) {
        event.preventDefault();
        const element = this.container.querySelector('input:not(.active)');
        element.click();
      }
    });
  }

  /* Lifecycle, element removed from the DOM */
  disconnectedCallback() {
    this.removeEventListener('joomla.switcher.toggle', this.toggle, true);
    this.removeEventListener('click', this.switch, true);
  }

  /* Method to dispatch events. Internal */
  dispatchCustomEvent(eventName) {
    const OriginalCustomEvent = new CustomEvent(eventName, { bubbles: true, cancelable: true });
    OriginalCustomEvent.relatedTarget = this;
    this.dispatchEvent(OriginalCustomEvent);
    this.removeEventListener(eventName, this);
  }

  /** Method to build the switch. Internal */
  createMarkup() {
    let checked = 0;

    // Create the first 'span' wrapper
    const spanFirst = document.createElement('span');
    spanFirst.classList.add('switcher');

    // If no type has been defined, the default as "success"
    if (!this.type) {
      this.setAttribute('type', 'success');
    }

    const switchEl = document.createElement('span');
    switchEl.classList.add('switch');

    this.inputs.forEach((input, index) => {
      input.setAttribute('role', 'switch');

      if (input.checked) {
        input.setAttribute('aria-checked', true);
      }

      spanFirst.appendChild(input);

      if (index === 1 && input.checked) {
        checked = 1;
      }
    });

    spanFirst.appendChild(switchEl);

    // Create the second 'span' wrapper
    const spanSecond = document.createElement('span');
    spanSecond.classList.add('switcher-labels');

    const labelFirst = document.createElement('span');
    labelFirst.classList.add('switcher-label-0');
    labelFirst.innerText = this.offText;

    const labelSecond = document.createElement('span');
    labelSecond.classList.add('switcher-label-1');
    labelSecond.innerText = this.onText;

    if (checked === 0) {
      labelFirst.classList.add('active');
    } else {
      labelSecond.classList.add('active');
    }

    spanSecond.appendChild(labelFirst);
    spanSecond.appendChild(labelSecond);

    // Remove all child nodes from the switcher
    while (this.firstChild) {
      this.removeChild(this.firstChild);
    }

    // Append everything back to the main element
    this.appendChild(spanFirst);
    this.appendChild(spanSecond);
  }

  /** Method to toggle the switch. Internal */
  switch() {
    const parent = this.firstChild;
    const spans = [].slice.call(parent.nextElementSibling.querySelectorAll('span'));
    const newActive = this.querySelector('input:not(.active)');

    spans.forEach((span) => {
      span.classList.remove('active');
    });

    if (parent.classList.contains('active')) {
      parent.classList.remove('active');
    } else {
      parent.classList.add('active');
    }

    if (!newActive.classList.contains('active')) {
      this.inputs.forEach((input) => {
        input.classList.remove('active');
        input.removeAttribute('checked');
        input.setAttribute('aria-checked', false);
      });
      newActive.classList.add('active');

      this.dispatchCustomEvent('joomla.switcher.on');
    } else {
      this.inputs.forEach((input) => {
        input.classList.remove('active');
        input.removeAttribute('checked');
        input.setAttribute('aria-checked', false);
      });

      this.dispatchCustomEvent('joomla.switcher.off');
    }

    newActive.setAttribute('checked', '');
    newActive.setAttribute('aria-checked', true);
    parent.nextElementSibling.querySelector(`.switcher-label-${newActive.value}`).classList.add('active');
  }

  /** Method to toggle the switch */
  toggle() {
    const newActive = this.querySelector('input:not(.active)');

    newActive.click();
  }
}

customElements.define('joomla-switcher', JoomlaSwitcherElement);
