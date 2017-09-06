/** Include the relative styles */
if (!document.head.querySelector('#joomla-switcher-style')) {
  const style = document.createElement('style');
  style.id = 'joomla-switcher-style';
  style.innerHTML = `joomla-switcher{box-sizing:border-box;display:block;height:28px}joomla-switcher .switcher{position:relative;box-sizing:border-box;display:inline-block;width:62px;height:28px;vertical-align:middle;cursor:pointer;user-select:none;background-color:#f2f2f2;background-clip:content-box;border:1px solid rgba(0,0,0,.18);border-radius:.25rem;box-shadow:0 0 0 0 #dfdfdf inset;transition:border .4s ease 0s,box-shadow .4s ease 0s}joomla-switcher .switcher.active{transition:border .4s ease 0s,box-shadow .4s ease 0s,background-color 1.2s ease 0s}joomla-switcher input{position:absolute;top:0;left:0;z-index:2;width:62px;height:28px;padding:0;margin:0;cursor:pointer;opacity:0}joomla-switcher .switch{position:absolute;top:0;width:calc(62px / 2);height:calc(28px - (1px * 2));background:#fff;border-radius:.25rem;box-shadow:0 1px 3px rgba(0,0,0,.15);transition:left .2s ease 0s}joomla-switcher .switcher:focus .switch{animation:switcherPulsate 1.5s infinite}joomla-switcher input:checked~.switch{left:0}joomla-switcher input~:checked~.switch{left:calc((62px / 2) - (1px * 2))}joomla-switcher input:checked{z-index:0}joomla-switcher .switcher-labels{position:relative}joomla-switcher .switcher-labels span{position:absolute;top:0;left:10px;color:#868e96;visibility:hidden;opacity:0;transition:all .2s ease-in-out}joomla-switcher .switcher-labels span.active{visibility:visible;opacity:1;transition:all .2s ease-in-out}joomla-switcher[type=primary] .switcher.active{background-color:#006898;border-color:#006898;box-shadow:0 0 0 calc(28px / 2) #006898 inset}joomla-switcher[type=secondary] .switcher.active{background-color:#868e96;border-color:#868e96;box-shadow:0 0 0 calc(28px / 2) #868e96 inset}joomla-switcher[type=success] .switcher.active{background-color:#438243;border-color:#438243;box-shadow:0 0 0 calc(28px / 2) #438243 inset}joomla-switcher[type=info] .switcher.active{background-color:#17a2b8;border-color:#17a2b8;box-shadow:0 0 0 calc(28px / 2) #17a2b8 inset}joomla-switcher[type=warning] .switcher.active{background-color:#f0ad4e;border-color:#f0ad4e;box-shadow:0 0 0 calc(28px / 2) #f0ad4e inset}joomla-switcher[type=danger] .switcher.active{background-color:#d9534f;border-color:#d9534f;box-shadow:0 0 0 calc(28px / 2) #d9534f inset}joomla-switcher[type=light] .switcher.active{background-color:#f8f9fa;border-color:#f8f9fa;box-shadow:0 0 0 calc(28px / 2) #f8f9fa inset}joomla-switcher[type=dark] .switcher.active{background-color:#343a40;border-color:#343a40;box-shadow:0 0 0 calc(28px / 2) #343a40 inset}@keyframes switcherPulsate{0%{box-shadow:0 0 0 0 rgba(66,133,244,.55)}70%{box-shadow:0 0 0 10px rgba(66,133,244,0)}100%{box-shadow:0 0 0 0 rgba(66,133,244,0)}}`;
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
