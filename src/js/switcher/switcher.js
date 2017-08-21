(function () {
	if (!document.getElementById('joomla-switcher-stylesheet')) {
		const style = document.createElement('style');
		style.id = 'joomla-switcher-stylesheet';
		style.innerHTML = `{{stylesheet}}`;
		document.head.appendChild(style);
	}
})();

class SwitcherElement extends HTMLElement {
	/* Lifecycle, element created */
	constructor() {
		super();
	}

	/* Method to get the translated text */
	createMarkup(switcher) {
		let inputs  = [].slice.call(switcher.querySelectorAll('input')),
		    checked = 0;

		// Create the first 'span' wrapper
		let spanFirst = document.createElement('span');
		spanFirst.classList.add('switcher');
		spanFirst.classList.add(switcher.getAttribute('class'));

		let switchEl = document.createElement('span');
		switchEl.classList.add('switch');

		inputs.forEach(function(input, index) {
			spanFirst.appendChild(input);

			if (index === 1 && input.checked) {
				checked = 1;
			}
		});

		spanFirst.appendChild(switchEl);

		// Create the second 'span' wrapper
		let spanSecond = document.createElement('span');
		spanSecond.classList.add('switcher-labels');

		let labelFirst = document.createElement('span');
		labelFirst.classList.add('switcher-label-0');
		labelFirst.innerText = this.getText(switcher.getAttribute('offText'), 'Off');

		let labelSecond = document.createElement('span');
		labelSecond.classList.add('switcher-label-1');
		labelSecond.innerText = this.getText(switcher.getAttribute('onText'), 'On');

		if (checked === 0) {
			labelFirst.classList.add('active');
		}
		else {
			labelSecond.classList.add('active');
		}

		spanSecond.appendChild(labelFirst);
		spanSecond.appendChild(labelSecond);

		// Remove all child nodes from the switcher
		while (switcher.firstChild) {
			switcher.removeChild(switcher.firstChild);
		}

		// Append everything back to the main element
		switcher.appendChild(spanFirst);
		switcher.appendChild(spanSecond);

		return switcher;
	}

	/* Lifecycle, element appended to the DOM */
	connectedCallback() {
		const self = this;

		// Throw an error if the switch hasn't been setup properly
		if (!self) {
			throw new Error('Switcher not properly setup')
		}

		// Create the markup
		this.createMarkup(self);

		// Add the initial active class
		const inputs    = [].slice.call(self.querySelectorAll('input')),
			  container = self.querySelector('span.switcher'),
			  next      = inputs[1].parentNode.nextElementSibling;

		// Add tab focus
		container.setAttribute('tabindex', 0);

		if (inputs[1].checked) {
			inputs[1].parentNode.classList.add('active');
			next.querySelector('.switcher-label-' + inputs[1].value).classList.add('active');
		}
		else {
			next.querySelector('.switcher-label-' + inputs[0].value).classList.add('active');
		}

		inputs.forEach(function(switchEl) {
			// Add the required accessibility tags
			if (switchEl.id) {
				const parent      = switchEl.parentNode,
					  relatedSpan = parent.nextElementSibling.querySelector('span.switcher-label-' + switchEl.value);

				relatedSpan.id = switchEl.id + '-label';
				switchEl.setAttribute('aria-labelledby', relatedSpan.id);
			}

			// Remove the tab focus from the inputs
			switchEl.setAttribute('tabindex', '-1');

			// Add the active class on click
			switchEl.addEventListener('click', function (event) {
				self.toggle(event.target);
			});
		});

		container.addEventListener('keydown', function (event) {
			if (event.keyCode === 13 || event.keyCode === 32) {
				event.preventDefault();
				const element = container.querySelector('input:not(.active)')
				element.click();
			}
		});
	}

	/* Lifecycle, element removed from the DOM */
	disconnectedCallback() {
		this.removeEventListener('joomla.switcher.toggle', this);
		this.removeEventListener('joomla.switcher.on', this);
		this.removeEventListener('joomla.switcher.off', this);
		this.removeEventListener('click', this);
	}

	/* Method to dispatch events */
	dispatchCustomEvent(eventName) {
		let OriginalCustomEvent = new CustomEvent(eventName, {bubbles: true, cancelable: true});
		OriginalCustomEvent.relatedTarget = this;
		this.dispatchEvent(OriginalCustomEvent);
		this.removeEventListener(eventName, this);
	}

	toggle(element) {
		const parent    = element.parentNode,
			  wasActive = parent.querySelectorAll('input.active'),
			  inputs    = [].slice.call(parent.querySelectorAll('input')),
			  spans     = [].slice.call(parent.nextElementSibling.querySelectorAll('span'));

		spans.forEach(function (span) {
			span.classList.remove('active');
		});

		if (parent.classList.contains('active')) {
			parent.classList.remove('active');
		}
		else {
			parent.classList.add('active');
		}

		if (!element.classList.contains('active')) {
			inputs.forEach(function(input) {
				input.classList.remove('active');
				input.removeAttribute('checked');
			});
			element.classList.add('active');

			this.dispatchCustomEvent('joomla.switcher.on');
		}
		else {
			inputs.forEach(function (input) {
				input.classList.remove('active');
				input.removeAttribute('checked');
			});

			this.dispatchCustomEvent('joomla.switcher.off');
		}

		const newActive = inputs.filter(item => item !== wasActive);

		newActive[0].setAttribute('checked', '');
		parent.nextElementSibling.querySelector('.switcher-label-' + element.value).classList.add('active');
	}

	/* Method to get the translated text */
	getText(str, fallback) {
		return (window.Joomla && Joomla.JText && Joomla.JText._ && typeof Joomla.JText._ === 'function' && Joomla.JText._(str)) ? Joomla.JText._(str) : fallback;
	}
}
customElements.define('joomla-switcher', SwitcherElement);
