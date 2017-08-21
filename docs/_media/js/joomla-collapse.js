(function () {
	if (!document.getElementById('joomla-collapse-stylesheet')) {
		const style = document.createElement('style');
		style.id = 'joomla-collapse-stylesheet';
		style.innerHTML = ``;
		document.head.appendChild(style);
	}
})();

class CollapseElement extends HTMLElement {
	constructor(element) {
		super();
	}

	connectedCallback() {
		// id is required
		if (!this.id) return;

		let linked = document.querySelectorAll('[href="#' + this.id + '"],[data-target="#' + this.id + '"]');

		for (let i = 0, l = linked.length; i < l; i++) {
			if (!this.state || this.state === "closed") {
				linked[i].setAttribute('aria-expanded', 'false');
				linked[i].setAttribute('aria-controls', this.id);
				this.classList.remove('show')
			} else {
				linked[i].setAttribute('aria-expanded', 'true');
				linked[i].setAttribute('aria-controls', this.id);
				this.classList.add('show');
			}

			linked[i].addEventListener('click', function (event) {

				if (!event.target.hasAttribute('data-target')) colId = event.target.getAttribute('href').replace('#', '');
				if (!event.target.hasAttribute('href')) colId = event.target.getAttribute('data-target').replace('#', '');
				event.preventDefault();
				event.stopPropagation();
				document.getElementById(colId).toggle();
			})
		}
	}

	disconnectedCallback() {

	}

	adoptedCallback(oldDocument, newDocument) {

	}

	static get observedAttributes() {
		return ['state'];
	}
	get state() { return this.getAttribute('state') || 'closed'; }
	set state(value) { return this.setAttribute('state', value); }

	attributeChangedCallback(attr, oldValue, newValue) {
		switch (attr) {
			case 'state':
				let linked = document.querySelector('[href="#' + this.id + '"]');
				if (newVal === "closed") {
					linked.setAttribute('aria-expanded', 'false');
				} else if (newVal === "open") {
					linked.setAttribute('aria-expanded', 'true');
				}
				break;
		}
	}

	toggle() {
		let linked = document.querySelector('[href="#' + this.id + '"]');
		if (!linked) linked = document.querySelector('[data-target="#' + this.id + '"]');
		if (this.state === "closed") {
			linked.setAttribute('aria-expanded', 'true');
		} else {
			linked.setAttribute('aria-expanded', 'false');
		}
		this.classList.toggle('show');
	};

}
customElements.define('joomla-collapse', CollapseElement);
