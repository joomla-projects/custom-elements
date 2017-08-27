/** Include the relative styles */
const style = document.createElement('style');
style.innerHTML = '{{stylesheet}}';
document.head.appendChild(style);

class JoomlaButtonElement extends HTMLElement {
  connectedCallback() {
    const buttons = [].slice.call(this.querySelectorAll('[type="checkbox"]'));
    // Checkboxes
    if (buttons.length) {
      buttons.forEach((button) => {
        if (button.parentNode.tagName.toLowerCase() !== 'label') {
          return;
        }
        if (button.getAttribute('checked') || button.parentNode.classList.contains('active')) {
          button.setAttribute('checked', '');
          button.parentNode.setAttribute('aria-pressed', 'true');
        } else {
          button.removeAttribute('checked');
          button.parentNode.setAttribute('aria-pressed', 'false');
        }

        button.setAttribute('tabindex', 0);
        button.addEventListener('click', () => {
          if (this.checked) {
            this.setAttribute('checked', '');
            this.parentNode.classList.add('active');
            this.parentNode.setAttribute('aria-pressed', 'true');
          } else {
            this.removeAttribute('checked');
            this.parentNode.classList.remove('active');
            this.parentNode.setAttribute('aria-pressed', 'false');
          }
        });
      });
    } else { // Radios
      const radios = [].slice.call(this.querySelectorAll('[type="radio"]'));

      if (radios.length) {
        radios.forEach((radio) => {
          if (radio.parentNode.tagName.toLowerCase() !== 'label') {
            return;
          }
          if (radio.getAttribute('checked') || radio.parentNode.classList.contains('active')) {
            radio.setAttribute('checked', '');
            radio.parentNode.setAttribute('aria-pressed', 'true');
          } else {
            radio.removeAttribute('checked');
            radio.parentNode.setAttribute('aria-pressed', 'false');
          }

          radio.addEventListener('click', function () {
            if (this.checked) {
              this.parentNode.parentNode.clearAllRadios();
              this.setAttribute('checked', '');
              this.parentNode.classList.add('active');
              this.parentNode.setAttribute('aria-pressed', 'true');
            } else {
              this.parentNode.parentNode.clearAllRadios();
              this.removeAttribute('checked');
              this.parentNode.classList.remove('active');
              this.parentNode.setAttribute('aria-pressed', 'false');
            }
          });
        });
      }
    }
  }

  /*eslint-disable */
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
  /*eslint-enable */

  clearAllRadios() {
    const radios = [].slice.call(this.querySelectorAll('[type="radio"]'));
    radios.forEach((radio) => {
      radio.removeAttribute('checked');
      if (radio.parentNode.tagName.toLowerCase() === 'label') {
        radio.parentNode.classList.remove('active');
        radio.parentNode.setAttribute('aria-pressed', 'false');
      }
    });
  }

  /* Method to dispatch events */
  dispatchCustomEvent(eventName) {
    const OriginalCustomEvent = new CustomEvent(eventName, { bubbles: true, cancelable: true });
    OriginalCustomEvent.relatedTarget = this;
    this.dispatchEvent(OriginalCustomEvent);
    this.removeEventListener(eventName, this);
  }
}
customElements.define('joomla-group-buttons', JoomlaButtonElement);
