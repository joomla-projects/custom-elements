class DropdownElement extends HTMLElement {
  static get observedAttributes() {
    return ['for'];
  }

  get for() { return this.getAttribute('for'); }

  constructor(element) {
    super();
    this.includeCss();
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

    button.addEventListener('click', (event) => {
      console.log('clicked');
      if (self.hasAttribute('expanded')) {
        self.removeAttribute('expanded');
        event.target.setAttribute('aria-expanded', 'false');
      } else {
        self.setAttribute('expanded', '');
        event.target.setAttribute('aria-expanded', 'true');
      }

      document.addEventListener('click', (event) => {
        if (event.target !== button) {
          if (!self.findAncestor(event.target, 'joomla-dropdown')) {
            self.close();
          }
        }
      });

      for (let i = 0, l = innerLinks.length; i < l; i++) {
        innerLinks[i].addEventListener('click', (event) => {
          self.close();
        });
      }
    });
  }

  disconnectedCallback() { }

  adoptedCallback(oldDocument, newDocument) { }


  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      // case 'name':
      // console.log(newValue);
      // break;
    }
  }

  close() {
    const button = document.querySelector(`#${this.getAttribute('aria-labelledby')}`);
    this.removeAttribute('expanded');
    button.setAttribute('aria-expanded', 'false');
  }

  findAncestor(el, tagName) {
    while ((el = el.parentElement) && el.nodeName.toLowerCase() !== tagName);
    return el;
  }

  includeCss() {
    if (!document.getElementById('joomla-dropdown-stylesheet')) {
      const style = document.createElement('style');
      style.id = 'joomla-dropdown-stylesheet';
      style.innerHTML = 'joomla-dropdown{display:none}joomla-dropdown[expanded]{position:relative;display:block;top:100%;left:0;z-index:1000;min-width:10rem;width:20rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#292b2c;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}';
      document.head.appendChild(style);
    }
  }
}
customElements.define('joomla-dropdown', DropdownElement);
