class AlertElement extends HTMLElement {
	/* Attributes to monitor */
	static get observedAttributes() { return ['level', 'dismiss', 'acknowledge', 'href']; }
	get level() { return this.getAttribute('level'); }
	get dismiss() { return this.getAttribute('dismiss'); }
	get acknowledge() { return this.getAttribute('acknowledge'); }
	get href() { return this.getAttribute('href'); }

	/* Lifecycle, element created */
	constructor() {
		super();
	}

	/* Lifecycle, element appended to the DOM */
	connectedCallback() {
		this.setAttribute('role', 'alert');
		this.classList.add("show");

		// Default to info
		if (!this.level || ['info', 'warning', 'danger', 'success'].indexOf(this.level) === -1) {
			this.setAttribute('level', 'info');
		}
		// Append button
		if ((this.hasAttribute('dismiss') && this.getAttribute('dismiss') !== '')
			|| (this.hasAttribute('acknowledge') && this.getAttribute('acknowledge') !== '')
			|| (this.hasAttribute('href') && this.getAttribute('href') !== '')
			&& !this.querySelector('button.close') && !this.querySelector('button.button--close')) {
			this.appendCloseButton();
		}

		this.dispatchCustomEvent('joomla.alert.show');
	}

	/* Lifecycle, element removed from the DOM */
	disconnectedCallback() {
		this.removeEventListener('joomla.alert.show', this);
		this.removeEventListener('joomla.alert.close', this);
		this.removeEventListener('joomla.alert.closed', this);

		if (this.firstChild.tagName && this.firstChild.tagName.toLowerCase() === 'button'){
			this.firstChild.removeEventListener('click', this);
		}
	}

	/* Respond to attribute changes */
	attributeChangedCallback(attr, oldValue, newValue) {
		switch (attr) {
			case 'level':
				if (['info', 'warning', 'danger', 'success'].indexOf(newValue) === -1) {
					this.setAttribute('level', oldValue);
				}
				break;
			case 'dismiss':
			case 'acknowledge':
				if (newValue === 'true') {
					this.appendCloseButton();
				} else {
					this.removeCloseButton();
				}
				break;
			case 'href':
				if (newValue === '') {
					this.removeCloseButton();
				} else {
					if (!this.querySelector('button.button--close')) {
						this.appendCloseButton();
					}
				}
				break;
		}
	}

	/* Method to close the alert */
	close() {
		this.dispatchCustomEvent('joomla.alert.close');
		this.addEventListener("transitionend", function () {
			this.dispatchCustomEvent('joomla.alert.closed');
			this.parentNode.removeChild(this);
		}, false);
		this.classList.remove('show');
	}

	/* Method to dispatch events */
	dispatchCustomEvent(eventName) {
		let OriginalCustomEvent = new CustomEvent(eventName);
		OriginalCustomEvent.relatedTarget = this;
		this.dispatchEvent(OriginalCustomEvent);
		this.removeEventListener(eventName, this);
	}

	/* Method to create the close button */
	appendCloseButton() {
		if (this.querySelector('button.close') || this.querySelector('button.button--close')) {
			return;
		}

		let self = this, closeButton = document.createElement('button');

		if (this.hasAttribute('dismiss')) {
			closeButton.classList.add('close');
			closeButton.innerHTML = '<span aria-hidden="true">&times;</span>';
			closeButton.setAttribute('aria-label', this.getText('JCLOSE', 'Close'));
		} else {
			closeButton.classList.add('button--close');
			if (this.hasAttribute('acknowledge')) {
				closeButton.innerHTML = this.getText('JOK', 'ok');
			} else {
				closeButton.innerHTML = this.getText('JOPEN', 'Open');
			}
		}

		if (this.firstChild) {
			this.insertBefore(closeButton, this.firstChild);
		} else {
			this.appendChild(closeButton);
		}

		/* Add the required listener */
		if (this.firstChild && this.firstChild.tagName && this.firstChild.tagName.toLowerCase() === 'button') {
			if (!this.href) {
				this.firstChild.addEventListener('click', function () {
					self.dispatchCustomEvent('joomla.alert.buttonClicked');
					if (self.getAttribute('data-callback')) {
						window[self.getAttribute('data-callback')]();
						self.close();
					} else {
						self.close();
					}
				});
			} else {
				this.firstChild.addEventListener('click', function () {
					self.dispatchCustomEvent('joomla.alert.buttonClicked');
					window.location.href = self.href;
					self.close();
				});
			}
		}

		if (this.hasAttribute('auto-dismiss')) {
			setTimeout(function () {
				self.dispatchCustomEvent('joomla.alert.buttonClicked');
				if (self.hasAttribute('data-callback')) {
					window[self.getAttribute('data-callback')]();
				} else {
					self.close();
				}
			}, parseInt(self.getAttribute('auto-dismiss')) ? self.getAttribute('auto-dismiss') : 3000);
		}
	}

	/* Method to remove the close button */
	removeCloseButton() {
		let button = this.querySelector('button');
		if (button) {
			button.removeEventListener('click', this);
			button.parentNode.removeChild(button);
		}
	}

	/* Method to get the translated text */
	getText(str, fallback) {
		return (window.Joomla && Joomla.JText && Joomla.JText._ && typeof Joomla.JText._ === 'function' && Joomla.JText._(str)) ? Joomla.JText._(str) : fallback;
	}
}

customElements.define('joomla-alert', AlertElement);
