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
		// Add the initial active class
		const switcher = this.querySelectorAll('input'),
			  next     = switcher[1].parentNode.nextElementSibling;

		if (switcher[1].checked) {
			switcher[1].parentNode.classList.add('active');
			next.querySelector('.switcher-label-' + switcher[1].value).classList.add('active');
		}
		else
		{
			next.querySelector('.switcher-label-' + switcher[0].value).classList.add('active');
		}

		// Add the active class on click
		this.addEventListener('click', function(event) {
			let el     = event.target,
				parent = el.parentNode,
				spans  = parent.nextElementSibling.querySelectorAll('span');

			for (let i = 0; i < spans.length; i++) {
				spans[i].classList.remove('active');
			}

			if (!el.classList.contains('active')) {
				parent.classList.add('active');
				this.dispatchCustomEvent('joomla.switcher.on');
			}
			else {
				parent.classList.remove('active');
				this.dispatchCustomEvent('joomla.switcher.off');
			}

			parent.nextElementSibling.querySelector('.switcher-label-' + el.value).classList.add('active');
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
}
customElements.define('joomla-switcher', SwitcherElement);
