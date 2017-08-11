(function () {
	const css = `{{stylesheet}}`;
	if (!document.getElementById('joomla-dropdown-stylesheet')) {
		const style = document.createElement('style');
		style.id = 'joomla-dropdown-stylesheet';
		style.innerHTML = css;
		document.head.appendChild(style);
	}
})();

class DropdownElement extends HTMLElement {
	constructor(element) {
		super();
	}

	connectedCallback() {
		const button = this.querySelector('button.dropdown-toggle');
		const link = this.querySelector('a.dropdown-toggle');
		const innerLinks = this.querySelectorAll('.dropdown-menu > a');
		let triggerEl = null;
		const self = this;

		if (!button && !link) return;

		if (button) {
			triggerEl = button;
		} else {
			triggerEl = link;
		}

		if (!triggerEl.id) return;
		//var children = [].slice.call( menu[getElementsByTagName]('*'));
		this.classList.add('dropdown');
		this.style.display = 'block';
		triggerEl.setAttribute('aria-haspopup', 'true');
		triggerEl.setAttribute('aria-expanded', 'false');

		triggerEl.addEventListener('click', function (event) {
			var container = upTo(event.target, 'dgt41-dropdown');

			if (container && container.classList.contains('show')) {
				container.classList.remove('show');
				event.target.setAttribute('aria-expanded', 'false')
			} else {
				container.classList.add('show');
				event.target.setAttribute('aria-expanded', 'true')
			}
		});

		for (var i = 0, l = innerLinks.length; i < l; i++) {
			innerLinks[i].addEventListener('click', function (event) {
				self.close();
			})
		}
	}

	disconnectedCallback() {

	}

	adoptedCallback(oldDocument, newDocument) {

	}

	static get observedAttributes() {
		// return ['name'];
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		switch (attr) {
			// case 'name':
				// console.log(newValue);
				// break;
		}
	}

	close() {
		const button = this.querySelector('.dropdown-toggle');
		this.classList.remove('show');
		button.setAttribute("aria-expanded", "false");
	};
}
customElements.define('joomla-dropdown', DropdownElement);
