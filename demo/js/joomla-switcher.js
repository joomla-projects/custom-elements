(function () {
	if (!document.getElementById('joomla-switcher-stylesheet')) {
		const style = document.createElement('style');
		style.id = 'joomla-switcher-stylesheet';
		style.innerHTML = `.joomla-switcher{position:relative;box-sizing:content-box;display:inline-block;width:60px;height:26px;margin-top:2px;vertical-align:middle;cursor:pointer;user-select:none;background-color:#f2f2f2;background-clip:content-box;border:1px solid rgba(0,0,0,.18);border-radius:.25rem;box-shadow:0 0 0 0 #dfdfdf inset;transition:border .4s ease 0s,box-shadow .4s ease 0s}.joomla-switcher.active{background-color:#5cb85c;border-color:#5cb85c;box-shadow:0 0 0 16px #5cb85c inset;transition:border .4s ease 0s,box-shadow .4s ease 0s,background-color 1.2s ease 0s}.joomla-switcher.switcher-danger.active{background-color:#d9534f;border-color:#d9534f;box-shadow:0 0 0 16px #d9534f inset}.joomla-switcher.switcher-primary.active{background-color:#0275d8;border-color:#0275d8;box-shadow:0 0 0 16px #0275d8 inset}.joomla-switcher input{position:absolute;top:0;left:0;z-index:2;width:60px;height:26px;padding:0;margin:0;cursor:pointer;opacity:0}.joomla-switcher .switch{position:absolute;top:0;width:calc(60px / 2);height:26px;background:#fff;border-radius:.25rem;box-shadow:0 0 1px rgba(0,0,0,.1) inset,0 1px 3px rgba(0,0,0,.15);transition:left .2s ease 0s}.joomla-switcher input:checked~.switch{left:0}.joomla-switcher input~:checked~.switch{left:calc(60px / 2)}.joomla-switcher input:checked{z-index:0}.switcher-labels{position:relative;margin-left:10px}.switcher-labels span{position:absolute;top:0;left:0;color:#636c72;visibility:hidden;opacity:0;transition:all .2s ease-in-out}.switcher-labels span.active{visibility:visible;opacity:1;transition:all .2s ease-in-out}`;
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
