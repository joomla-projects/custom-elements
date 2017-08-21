(function () {
<<<<<<< HEAD
	if (!document.getElementById('joomla-button-stylesheet')) {
		const style = document.createElement('style');
		style.id = 'joomla-button-stylesheet';
		style.innerHTML = ``;
=======
	const css = ``;
	if (!document.getElementById('joomla-button-stylesheet')) {
		const style = document.createElement('style');
		style.id = 'joomla-button-stylesheet';
		style.innerHTML = css;
>>>>>>> 649bc4c... commit the scaffolding for all elements
		document.head.appendChild(style);
	}
})();

class ButtonElement extends HTMLElement {
	constructor(element) {
		super();
	}

	connectedCallback() {
		if (!this.classList.contains('btn', 'btn-group')) {
			this.classList.add('btn', 'btn-group')
		}

		const buttons = this.querySelectorAll('[type="checkbox"]')
		// Checkboxes
		if (buttons.length) {
			for (let i = 0, l = buttons.length; i < l; i++) {
				if (buttons[i].parentNode.tagName.toLowerCase() !== 'label') {
					continue;
				}
				if (buttons[i].getAttribute('checked') || buttons[i].parentNode.classList.contains('active')) {
					buttons[i].checked = true;
					buttons[i].setAttribute('checked', '');
					buttons[i].parentNode.setAttribute('aria-pressed', 'true');
				} else {
					buttons[i].checked = false;
					buttons[i].removeAttribute('checked', '');
					buttons[i].parentNode.setAttribute('aria-pressed', 'false');
				}

				buttons[i].addEventListener('click', function (event) {

					if (event.target.parentNode.tagName.toLowerCase() === 'label') {

						if (event.target.checked) {
							event.target.checked = true;
							event.target.setAttribute('checked', '');
							event.target.parentNode.classList.add('active');
							event.target.parentNode.setAttribute('aria-pressed', 'true');
						} else {
							event.target.checked = false;
							event.target.removeAttribute('checked');
							event.target.parentNode.classList.remove('active');
							event.target.parentNode.setAttribute('aria-pressed', 'false');
						}
					}
				})
			}
		} else { // Radios
			const radios = this.querySelectorAll('[type="radio"]');

			if (radios) {
				for (let i = 0, l = radios.length; i < l; i++) {
					if (radios[i].parentNode.tagName.toLowerCase() !== 'label') {
						continue;
					}
					if (radios[i].getAttribute('checked') || radios[i].parentNode.classList.contains('active')) {

						radios[i].checked = true;
						radios[i].setAttribute('checked', '');
						radios[i].parentNode.setAttribute('aria-pressed', 'true');
					} else {
						radios[i].checked = false;
						radios[i].removeAttribute('checked', '');
						radios[i].parentNode.setAttribute('aria-pressed', 'false');
					}

					radios[i].addEventListener('click', function (event) {

						if (event.target.parentNode.tagName.toLowerCase() === 'label') {
							if (event.target.checked) {
								event.target.parentNode.parentNode.clearAllRadios();
								event.target.checked = true;
								event.target.setAttribute('checked', '');
								event.target.parentNode.classList.add('active');
								event.target.parentNode.setAttribute('aria-pressed', 'true');
							} else {
								event.target.parentNode.parentNode.clearAllRadios();
								event.target.checked = false;
								event.target.removeAttribute('checked');
								event.target.parentNode.classList.remove('active');
								event.target.parentNode.setAttribute('aria-pressed', 'false');
							}
						}
					})
				}
			}
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

	clearAllRadios() {
		const radios = this.querySelectorAll('[type="radio"]');
		for (let i = 0, l = radios.length; i < l; i++) {
			radios[i].checked = false;
			radios[i].removeAttribute('checked');
			if (radios[i].parentNode.tagName.toLowerCase() == 'label') {
				radios[i].parentNode.classList.remove('active');
				radios[i].parentNode.setAttribute('aria-pressed', 'false');
			}
		}
	}

	/* Method to dispatch events */
	dispatchCustomEvent(eventName) {
		let OriginalCustomEvent = new CustomEvent(eventName, { "bubbles": true, "cancelable": true });
		OriginalCustomEvent.relatedTarget = this;
		this.dispatchEvent(OriginalCustomEvent);
		this.removeEventListener(eventName, this);
	}
}
customElements.define('joomla-button', ButtonElement);
