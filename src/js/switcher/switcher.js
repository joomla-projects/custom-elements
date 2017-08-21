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

	/* Lifecycle, element appended to the DOM */
	connectedCallback() {
		const self = this;
		// Add the initial active class
		const switcher  = [].slice.call(this.querySelectorAll('input')),
			  container = this.querySelector('span.switcher'),
			  next      = switcher[1].parentNode.nextElementSibling;

		// Throw an error if the switch hasn't been setup properly
		if (!switcher.length) {
			throw new Error('Switcher not properly setup')
		}

		// Add tab focus
		container.setAttribute('tabindex', 0);

		if (switcher[1].checked) {
			switcher[1].parentNode.classList.add('active');
			next.querySelector('.switcher-label-' + switcher[1].value).classList.add('active');
		}
		else
		{
			next.querySelector('.switcher-label-' + switcher[0].value).classList.add('active');
		}

		switcher.forEach(function(switchEl) {
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
}
customElements.define('joomla-switcher', SwitcherElement);
