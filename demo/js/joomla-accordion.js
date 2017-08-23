class AccordionElement extends HTMLElement {
	constructor() {
		super();
		this.includeCss();
	}

	connectedCallback() {
		// Return early if no content is given
		if (!this.innerHTML) {
			return;
		}

		this.setAttribute('role', 'tablist');
		this.setAttribute('aria-multiselectable', 'true');

		var cards = this.querySelectorAll('section');

		// Checkboxes
		if (cards.length) {
			for (let i = 0, l = cards.length; i < l; i++) {
				const toggler = cards[i].querySelector('[data-toggle="collapse"]');
				const togglerHref = toggler.getAttribute('href');
				const self = this;
				if (!togglerHref) continue;
				const collapsed = document.getElementById(togglerHref.replace('#', ''));

				if (collapsed.classList.contains('show')) {
					collapsed.setAttribute('role', 'tabpanel');
					toggler.setAttribute('aria-expanded', 'true');
				} else {
					collapsed.setAttribute('role', 'tabpanel');
					toggler.setAttribute('aria-expanded', 'true');
				}

				toggler.addEventListener('click', function (event) {
					// find the parent
					event.preventDefault();
					event.stopPropagation();
					self.resetAll();
					event.target.setAttribute('aria-expanded', 'true');
					const togglerHref = event.target.getAttribute('href')
					document.getElementById(togglerHref.replace('#', '')).classList.add('show');
				})
			}
		}
	}

	disconnectedCallback() {

	}

	adoptedCallback(oldDocument, newDocument) {

	}

	static get observedAttributes() {
		return ['type', 'button'];
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		switch (attr) {
			// case 'name':
			// console.log(newValue);
			// break;
		}
	}

	/* Method to toggle accordion */
	toggle() {

	}

	/* Reset active accordion */
	resetAll() {
		const cards = this.querySelectorAll('section')
		for (let i = 0, l = cards.length; i < l; i++) {
			const toggler = cards[i].querySelector('[data-toggle="collapse"]');
			const togglerHref = toggler.getAttribute('href');

			if (!togglerHref) {
				continue;
			}

			const collapsed = document.getElementById(togglerHref.replace('#', ''));
			toggler.setAttribute('aria-expanded', 'true');
			collapsed.classList.remove('show');
		}
	}

	includeCss() {
		if (!document.getElementById('joomla-accordion-stylesheet')) {
			const style = document.createElement('style');
			style.id = 'joomla-accordion-stylesheet';
			style.innerHTML = ``;
			document.head.appendChild(style);
		}
	}
}
customElements.define('joomla-accordion', AccordionElement);
