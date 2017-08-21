(function () {
	if (!document.getElementById('joomla-switcher-stylesheet')) {
		const style = document.createElement('style');
		style.id = 'joomla-switcher-stylesheet';
		style.innerHTML = `.joomla-switcher{display:inline-block;height:28px;box-sizing:border-box}.joomla-switcher .switcher{position:relative;box-sizing:border-box;display:inline-block;width:62px;height:28px;vertical-align:middle;cursor:pointer;user-select:none;background-color:#f2f2f2;background-clip:content-box;border:1px solid rgba(0,0,0,.18);border-radius:.25rem;box-shadow:0 0 0 0 #dfdfdf inset;transition:border .4s ease 0s,box-shadow .4s ease 0s}.joomla-switcher .switcher.active{background-color:#5cb85c;border-color:#5cb85c;box-shadow:0 0 0 calc(28px / 2) #5cb85c inset;transition:border .4s ease 0s,box-shadow .4s ease 0s,background-color 1.2s ease 0s}.joomla-switcher .switcher-danger.switcher.active{background-color:#d9534f;border-color:#d9534f;box-shadow:0 0 0 calc(28px / 2) #d9534f inset}.joomla-switcher .switcher-primary.switcher.active{background-color:#0275d8;border-color:#0275d8;box-shadow:0 0 0 calc(28px / 2) #0275d8 inset}.joomla-switcher input{position:absolute;top:0;left:0;z-index:2;width:62px;height:28px;padding:0;margin:0;cursor:pointer;opacity:0}.joomla-switcher .switch{position:absolute;top:0;width:calc(62px / 2);height:calc(28px - (1px * 2));background:#fff;border-radius:.25rem;box-shadow:0 0 1px rgba(0,0,0,.1) inset,0 1px 3px rgba(0,0,0,.15);transition:left .2s ease 0s}.joomla-switcher input:checked~.switch{left:0}.joomla-switcher input~:checked~.switch{left:calc((62px / 2) - (1px * 2))}.joomla-switcher input:checked{z-index:0}.joomla-switcher .switcher-labels{position:relative}.joomla-switcher .switcher-labels span{position:absolute;top:0;left:10px;color:#636c72;visibility:hidden;opacity:0;transition:all .2s ease-in-out}.joomla-switcher .switcher-labels span.active{visibility:visible;opacity:1;transition:all .2s ease-in-out}`;
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
		const switcher = this.querySelectorAll('input');

		// Throw an error if the switch hasn't been setup properly
		if (!switcher.length) {
			throw new Error('Switcher not properly setup')
		}

		let next = switcher[1].parentNode.nextElementSibling;

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
			let el = event.target;

			if (el.tagName.toLowerCase() === 'input') {
				let parent = el.parentNode,
				    spans  = parent.nextElementSibling.querySelectorAll('span');

				[].slice.call(spans).forEach(function(element) {
					element.classList.remove('active');
				});

				if (!el.classList.contains('active')) {
					parent.classList.add('active');
					this.dispatchCustomEvent('joomla.switcher.on');
				}
				else {
					parent.classList.remove('active');
					this.dispatchCustomEvent('joomla.switcher.off');
				}

				parent.nextElementSibling.querySelector('.switcher-label-' + el.value).classList.add('active');
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
}
customElements.define('joomla-switcher', SwitcherElement);
