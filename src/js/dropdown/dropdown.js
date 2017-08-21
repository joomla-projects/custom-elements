(function () {
<<<<<<< HEAD
	if (!document.getElementById('joomla-dropdown-stylesheet')) {
		const style = document.createElement('style');
		style.id = 'joomla-dropdown-stylesheet';
		style.innerHTML = `{{stylesheet}}`;
=======
	const css = `{{stylesheet}}`;
	if (!document.getElementById('joomla-dropdown-stylesheet')) {
		const style = document.createElement('style');
		style.id = 'joomla-dropdown-stylesheet';
		style.innerHTML = css;
>>>>>>> 649bc4c... commit the scaffolding for all elements
		document.head.appendChild(style);
	}
})();

class DropdownElement extends HTMLElement {
	constructor(element) {
		super();
	}

	connectedCallback() {
		const button = document.querySelector('#' + this.getAttribute('aria-labelledby'));
		const innerLinks = this.querySelectorAll('.dropdown-menu > a');
		const self = this;

		if (!button.id) return;
		//var children = [].slice.call( menu[getElementsByTagName]('*'));
		this.classList.add('dropdown');
		this.style.display = 'block';
		button.setAttribute('aria-haspopup', 'true');
		button.setAttribute('aria-expanded', 'false');

		button.addEventListener('click', function (event) {
			var container = upTo(event.target, 'joomla-dropdown');

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
		const button = document.querySelector('#' + this.getAttribute('aria-labelledby'));
		this.classList.remove('show');
		button.setAttribute("aria-expanded", "false");
	};

	/* Method to dispatch events */
	dispatchCustomEvent(eventName) {
		let OriginalCustomEvent = new CustomEvent(eventName, { "bubbles": true, "cancelable": true });
		OriginalCustomEvent.relatedTarget = this;
		this.dispatchEvent(OriginalCustomEvent);
		this.removeEventListener(eventName, this);
	}
}
customElements.define('joomla-dropdown', DropdownElement);
