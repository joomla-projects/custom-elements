(function () {
	if (!document.getElementById('joomla-modal-stylesheet')) {
		const style = document.createElement('style');
		style.id = 'joomla-modal-stylesheet';
		style.innerHTML = `{{stylesheet}}`;
		document.head.appendChild(style);
	}
})();

class ModalElement extends HTMLElement {
	constructor(element) {
		super();
	}

	connectedCallback() {
		const self = this;
		const modal = this.querySelector('.modal');
		triggerBtn = document.querySelector("button[data-target=\"#" + modal.id + "\"]");
		if (triggerBtn) {
			triggerBtn.addEventListener('click', function (ev) {
				const dropShadow = document.createElement('div'),
					modalContent = this.querySelector('.modal-content');
				dropShadow.classList.add('modal-backdrop', 'show');
				document.body.appendChild(dropShadow);
				modal.classList.toggle('show');
				modal.style.display = 'block';
				modal.focus()
				// if ('WebkitTransition' in document.documentElement.style || 'transition' in document.documentElement.style) {
				//     dropShadow.addEventListener("transitionend", function(event) {
				//         console.log(modal)
				//         modal.classList.toggle('show');
				//         modal.style.display = 'block'; }, false);
				// } else {
				//     modal.classList.toggle('show');
				//     modal.style.display = 'block';
				// }

				modal.addEventListener('click', function (event) {
					const openModal = event.target,
						modalEl = self.getParents(openModal, 'joomla-modal')[0],
						isInScope = self.getParents(event.target, '.modal-content'),
						modalContent = modalEl.querySelector('.modal-content');

					if (isInScope.length === 0) {
						modalEl.close();
					}
				})
			})
		}

		// Is there a close button?
		const modalButton = modal.querySelectorAll('button[data-dismiss="modal"]');

		for (var i = 0, l = modalButton.length; i < l; i++) {
			// Add listeners for close
			modalButton[i].addEventListener('click', function (event) {
				const elm = self.getParents(event.target, 'joomla-modal');
				elm[0].close();
			});
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
		const dropShadow = document.querySelector('.modal-backdrop');
		const modal = this.querySelector('.modal');
		if (dropShadow) document.body.removeChild(dropShadow);
		modal.classList.toggle('show');
		modal.style.display = 'none';
	}

	    /**
     * Get all of an element's parent elements up the DOM tree
     * @param  {Node}   elem     The element
     * @param  {String} selector A class, ID, data attribute or tag to filter against [optional]
     * @return {Array}           The parent elements
     */
    getParents(elem, selector) {

	// Element.matches() polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches =
			Element.prototype.matchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector ||
			Element.prototype.oMatchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			function (s) {
				var matches = (this.document || this.ownerDocument).querySelectorAll(s),
					i = matches.length;
				while (--i >= 0 && matches.item(i) !== this) { }
				return i > -1;
			};
	}

	// Setup parents array
	let parents = [];

	// Get matching parent elements
	for (; elem && elem !== document; elem = elem.parentNode) {
		if (selector) {
			if (elem.matches(selector)) {
				parents.push(elem);
			}
		} else {
			parents.push(elem);
		}
	}
	return parents;
};
}
customElements.define('joomla-modal', ModalElement);
