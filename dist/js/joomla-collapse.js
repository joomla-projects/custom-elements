(function () {
	if (!document.getElementById('joomla-collapse-stylesheet')) {
		const style = document.createElement('style');
		style.id = 'joomla-collapse-stylesheet';
		style.innerText = ``;
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

				let colId = '';
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
				if (newValue === "closed") {
					linked.setAttribute('aria-expanded', 'false');
				} else if (newValue === "open") {
					linked.setAttribute('aria-expanded', 'true');
				}
				break;
		}
	}

	toggle() {
		let linked = document.querySelector('[href="#' + this.id + '"]');
		if (!linked) linked = document.querySelector('[data-target="#' + this.id + '"]');
		if (this.state === "closed") {
			this.state = "open"
			linked.setAttribute('aria-expanded', 'true');
		} else {
			this.state = "closed"
			linked.setAttribute('aria-expanded', 'false');
		}
		this.classList.toggle('show');
	};

	/* Method to dispatch events */
	dispatchCustomEvent(eventName) {
		let OriginalCustomEvent = new CustomEvent(eventName, { "bubbles": true, "cancelable": true });
		OriginalCustomEvent.relatedTarget = this;
		this.dispatchEvent(OriginalCustomEvent);
		this.removeEventListener(eventName, this);
	}
}
customElements.define('joomla-collapse', CollapseElement);
