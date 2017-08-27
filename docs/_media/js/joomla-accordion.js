/** Include the relative styles */
const style = document.createElement('style');
style.innerHTML = `.collapse.show{display:block}.collapse{display:none}`;
document.head.appendChild(style);

class JoomlaAccordionElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const self = this;
    // Return early if no content is given
    if (!this.innerHTML) {
      return;
    }

    this.setAttribute('role', 'tablist');
    this.setAttribute('aria-multiselectable', 'true');

    const cards = this.querySelectorAll('section');

    // Checkboxes
    if (cards.length) {
      cards.forEach((card) => {
        const toggler = card.querySelector('[data-toggle="collapse"]');
        const togglerHref = toggler.getAttribute('href');

        if (!togglerHref) {
          return;
        }

        const collapsed = document.getElementById(togglerHref.replace('#', ''));

        if (collapsed.classList.contains('show')) {
          collapsed.setAttribute('role', 'tabpanel');
          toggler.setAttribute('aria-expanded', 'true');
        } else {
          collapsed.setAttribute('role', 'tabpanel');
          toggler.setAttribute('aria-expanded', 'true');
        }

        toggler.addEventListener('click', (event) => {
          // find the parent
          event.preventDefault();
          event.stopPropagation();
          self.resetAll();
          event.target.setAttribute('aria-expanded', 'true');
          document.getElementById(togglerHref.replace('#', '')).classList.add('show');
        });
      });
    }
  }

  static get observedAttributes() {
    return ['type', 'button'];
  }

  /*eslint-disable */
  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      case 'type':
        break;
      case 'button':
        break;
      default:
        break;
    }
  }
  /*eslint-enable */

  /* Reset active accordion */
  resetAll() {
    const cards = [].slice.call(this.querySelectorAll('section'));
    cards.forEach((card) => {
      const toggler = card.querySelector('[data-toggle="collapse"]');
      const togglerHref = toggler.getAttribute('href');

      if (!togglerHref) {
        return;
      }

      const collapsed = document.getElementById(togglerHref.replace('#', ''));
      toggler.setAttribute('aria-expanded', 'true');
      collapsed.classList.remove('show');
    });
  }
}
customElements.define('joomla-accordion', JoomlaAccordionElement);
