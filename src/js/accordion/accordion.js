(() => {
  class JoomlaAccordionElement extends HTMLElement {
    /* Attributes to monitor */
    static get observedAttributes() { return ['toggle']; }

    get toggle() { return this.getAttribute('toggle'); }

    /* Lifecycle, element created */
    constructor() {
      super();

      this.hasActive = false;
      this.currentActive = '';
      this.hasNested = false;
      this.isNested = false;
    }

    /* Lifecycle, element appended to the DOM */
    connectedCallback() {
      this.sections = [...this.querySelectorAll('.accordion-item')];
      this.generateNavigation(this.sections);
    }

    generateNavigation(sections) {
      sections.forEach((section, index) => {
        const accordionTitle = document.createElement('h3');
        accordionTitle.setAttribute('area-expanded', 'false');
        accordionTitle.setAttribute('target', section.id);
        if (section.classList.contains('show')) {
          accordionTitle.classList.add('active');
        }
        // accordion icon
        if (section.hasAttribute('icon')) {
          const iconClass = section.getAttribute('icon');
          const icon = `<span class="${iconClass}"></span>`;
          accordionTitle.insertAdjacentHTML('afterbegin', icon);
        }

        // accordion title
        const title = section.getAttribute('name') || `Accordion ${index}`;
        const navTitle = document.createTextNode(title);
        accordionTitle.appendChild(navTitle);
        accordionTitle.innerHTML += '<span class="joomla-accordion-icon" aria-hidden="true"></span>';
        this.insertBefore(accordionTitle, section);
        accordionTitle.addEventListener('click', this.activateAccordionFromButton.bind(this, accordionTitle));
      });
    }

    activateAccordionFromButton(accordionTitle) {
      const target = accordionTitle;
      const section = target.nextSibling;
      const toggle = this.getAttribute('toggle');
      if (!toggle || toggle === 'false') {
        target.classList.toggle('active');
        if (section.classList.contains('show')) {
          section.classList.remove('show');
          target.setAttribute('area-expanded', 'false');
        } else {
          section.classList.add('show');
          target.setAttribute('area-expanded', 'true');
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (target.classList.contains('active')) {
          target.classList.remove('active');
          section.classList.remove('show');
          target.setAttribute('area-expanded', 'false');
        } else {
          this.sections.forEach((s) => {
            if (s.previousSibling.classList.contains('active')) {
              s.previousSibling.classList.remove('active');
            }
            s.classList.remove('show');
          });
          target.classList.add('active');
          section.classList.add('show');
          target.setAttribute('area-expanded', 'true');
        }
      }
    }
  }
  customElements.define('joomla-accordion', JoomlaAccordionElement);
})();
