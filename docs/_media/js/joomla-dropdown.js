class JoomlaDropdownElement extends HTMLElement {
  static get observedAttributes() {
    return ['for'];
  }

  get for() { return this.getAttribute('for'); }
  set for(value) { return this.setAttribute('for', value); }

  constructor() {
    super();

    if (!document.getElementById('joomla-dropdown-stylesheet')) {
      const style = document.createElement('style');
      style.id = 'joomla-dropdown-stylesheet';
      style.innerText = `joomla-dropdown{display:none}joomla-dropdown[expanded]{position:relative;display:block;top:100%;left:0;z-index:1000;min-width:10rem;width:20rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#292b2c;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}`;
      document.head.appendChild(style);
    }
  }

  connectedCallback() {
    this.setAttribute('aria-labelledby', this.for.substring(1));
    const button = document.querySelector(this.for);
    const innerLinks = this.querySelectorAll('a');
    const self = this;

    if (!button.id) return;
    // var children = [].slice.call( menu[getElementsByTagName]('*'));
    // this.classList.add('dropdown');

    button.setAttribute('aria-haspopup', 'true');
    button.setAttribute('aria-expanded', 'false');

    button.addEventListener('click', (ev) => {
      if (self.hasAttribute('expanded')) {
        self.removeAttribute('expanded');
        ev.target.setAttribute('aria-expanded', 'false');
      } else {
        self.setAttribute('expanded', '');
        ev.target.setAttribute('aria-expanded', 'true');
      }

      document.addEventListener('click', (evt) => {
        if (evt.target !== button) {
          if (!self.findAncestor(evt.target, 'joomla-dropdown')) {
            self.close();
          }
        }
      });

      innerLinks.forEach((innerLink) => {
        innerLink.addEventListener('click', () => {
          self.close();
        });
      });
    });
  }

  /*eslint-disable */
  disconnectedCallback() { }

  adoptedCallback(oldDocument, newDocument) { }


  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      // case 'name':
      // console.log(newValue);
      // break;
    }
  }
  /*eslint-enable */

  close() {
    const button = document.querySelector(`#${this.getAttribute('aria-labelledby')}`);
    this.removeAttribute('expanded');
    button.setAttribute('aria-expanded', 'false');
  }

  /*eslint-disable */
  findAncestor(el, tagName) {
    while ((el = el.parentElement) && el.nodeName.toLowerCase() !== tagName);
    return el;
  }
  /*eslint-enable */
}

customElements.define('joomla-dropdown', JoomlaDropdownElement);
