class CollapseElement extends HTMLElement {
  static get observedAttributes() {
    return ['state'];
  }
  get state() { return this.getAttribute('state') || 'closed'; }
  set state(value) { return this.setAttribute('state', value); }

  constructor(element) {
    super();
    this.includeCss();
  }

  connectedCallback() {
    // id is required
    if (!this.id) return;

    const linked = document.querySelectorAll(`[href="#${this.id}"],[data-target="#${this.id}"]`);

    for (let i = 0, l = linked.length; i < l; i++) {
      if (!this.state || this.state === 'closed') {
        linked[i].setAttribute('aria-expanded', 'false');
        linked[i].setAttribute('aria-controls', this.id);
      } else {
        linked[i].setAttribute('aria-expanded', 'true');
        linked[i].setAttribute('aria-controls', this.id);
      }

      linked[i].addEventListener('click', (event) => {
        let colId = '';
        if (!event.target.hasAttribute('data-target')) colId = event.target.getAttribute('href').replace('#', '');
        if (!event.target.hasAttribute('href')) colId = event.target.getAttribute('data-target').replace('#', '');
        event.preventDefault();
        event.stopPropagation();
        document.getElementById(colId).toggle();
      });
    }
  }

  disconnectedCallback() {
    let linked = document.querySelector(`[href="#${this.id}"]`);
    if (!linked) linked = document.querySelector(`[data-target="#${this.id}"]`);
    if (linked) {
      linked.removeEventListener('click', this);
    }
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      case 'state':
        const linked = document.querySelector(`[href="#${this.id}"]`);
        if (newValue === 'closed') {
          linked.setAttribute('aria-expanded', 'false');
        } else if (newValue === 'open') {
          linked.setAttribute('aria-expanded', 'true');
        }
        break;
    }
  }

  toggle() {
    let linked = document.querySelector(`[href="#${this.id}"]`);
    if (!linked) linked = document.querySelector(`[data-target="#${this.id}"]`);
    if (this.state === 'closed') {
      this.state = 'open';
      linked.setAttribute('aria-expanded', 'true');
    } else {
      this.state = 'closed';
      linked.setAttribute('aria-expanded', 'false');
    }
  }

  includeCss() {
    console.log('ffff');
    if (!document.getElementById('joomla-collapse-stylesheet')) {
      console.log('ssss');
      const style = document.createElement('style');
      style.id = 'joomla-collapse-stylesheet';
      style.innerHTML = `joomla-collapse[state=closed]{display:none}joomla-collapse[state=open]{display:block}`;
      document.head.appendChild(style);
    }
  }
}

customElements.define('joomla-collapse', CollapseElement);
