class ModalElement extends HTMLElement {
	constructor(element) {
		super();
		this.includeCss();

		window.Joomla = window.Joomla || {};
		window.Joomla.UI = {};
		window.Joomla.UI.modal = {};

	}

	connectedCallback() {
		const self = this;

		let triggerBtn = document.querySelector("button[data-href=\"#" + this.id + "\"]");
		if (triggerBtn) {
			triggerBtn.addEventListener('click', function (ev) {

				var ancestor = self.findAncestor(self, 'joomla-modal')
				if (ancestor) {
					window.Joomla.UI.modal.element = ancestor;
					console.log(Joomla.UI.modal)
				}

				let dropShadow = document.createElement('div'),
					modalContent = this.querySelector('.modal-content');
				dropShadow.classList.add('modal-backdrop', 'show');
				if (!ancestor) {
					document.body.appendChild(dropShadow);
				}

				self.classList.toggle('show');
				//this.style.display = 'block';
				self.focus()
				// if ('WebkitTransition' in document.documentElement.style || 'transition' in document.documentElement.style) {
				//     dropShadow.addEventListener("transitionend", function(event) {
				//         console.log(modal)
				//         modal.classList.toggle('show');
				//         modal.style.display = 'block'; }, false);
				// } else {
				//     modal.classList.toggle('show');
				//     modal.style.display = 'block';
				// }

				// let backdrp = document.querySelector('.modal-backdrop.show')
				// console.log(backdrp)
				// backdrp.addEventListener('click', function (event) {
				// console.log(event)
				// 		self.close();
				// })
			})
		}

		// Is there a close button?
		const modalButton = this.querySelectorAll('button[data-dismiss="modal"]');

		for (var i = 0, l = modalButton.length; i < l; i++) {
			// Add listeners for close
			modalButton[i].addEventListener('click', function (event) {


				var topModal = self.findAncestor(event.target, 'joomla-modal');
				var parentModal = self.findAncestor(topModal, 'joomla-modal');

				console.log(topModal)
				console.log(parentModal)

				if (parentModal) {
					topModal.classList.remove('show')
				} else {
					topModal.close();
				}
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
		if (dropShadow) document.body.removeChild(dropShadow);
		this.classList.toggle('show');
		//this.style.display = 'none';
	}

	findAncestor(el, tagName) {
		while ((el = el.parentElement) && el.nodeName.toLowerCase() !== tagName);
		return el;
	}

	includeCss() {
		if (!document.getElementById('joomla-modal-stylesheet')) {
			const style = document.createElement('style');
			style.id = 'joomla-modal-stylesheet';
			style.innerHTML = `joomla-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;overflow:hidden;display:none;outline:0}joomla-modal.show{display:block}`;
			document.head.appendChild(style);
		}
	}
}
customElements.define('joomla-modal', ModalElement);
