export class JoomlaCollapseElement extends HTMLElement {
  static get observedAttributes() {
    return ['state'];
  }

  get state() { return this.getAttribute('state'); }

  set state(value) { return this.setAttribute('state', value); }

  connectedCallback() {
    const self = this;
    // id is required
    if (!this.id) return;

    const linked = [].slice.call(document.querySelectorAll(`[href="#${this.id}"],[data-target="#${this.id}"]`));

    linked.forEach((element) => {
      if (!self.state || (self.state && self.state === 'closed')) {
        self.state = 'closed';
        element.setAttribute('aria-expanded', 'false');
        element.setAttribute('aria-controls', self.id);
      } else {
        element.setAttribute('aria-expanded', 'true');
        element.setAttribute('aria-controls', self.id);
      }

      element.addEventListener('click', (event) => {
        let colId = '';
        if (!event.target.hasAttribute('data-target')) colId = event.target.getAttribute('href').replace('#', '');
        if (!event.target.hasAttribute('href')) colId = event.target.getAttribute('data-target').replace('#', '');
        event.preventDefault();
        event.stopPropagation();
        document.getElementById(colId).toggle();
      });
    });
  }

  disconnectedCallback() {
    let linked = document.querySelector(`[href="#${this.id}"]`);
    if (!linked) linked = document.querySelector(`[data-target="#${this.id}"]`);
    if (linked) {
      linked.removeEventListener('click', this);
    }
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    const linked = document.querySelector(`[href="#${this.id}"]`);
    switch (attr) {
      case 'state':
        if (newValue === 'closed') {
          linked.setAttribute('aria-expanded', 'false');
        } else if (newValue === 'open') {
          linked.setAttribute('aria-expanded', 'true');
        }
        break;
      default:
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
}
