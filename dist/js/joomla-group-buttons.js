/** Include the relative styles */
if (!document.head.querySelector('#joomla-group-buttons-style')) {
  const style = document.createElement('style');
  style.id = 'joomla-group-buttons-style';
  style.innerHTML = `joomla-group-buttons{position:relative;display:inline-flex;vertical-align:middle}joomla-group-buttons>.btn{display:inline-block;flex:0 1 auto;padding:.5rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.25;text-align:center;white-space:nowrap;vertical-align:middle;user-select:none;border:1px solid transparent;border-radius:.25rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}joomla-group-buttons>.btn:hover{z-index:2;text-decoration:none}joomla-group-buttons>.btn.active,joomla-group-buttons>.btn:active,joomla-group-buttons>.btn:focus{z-index:2;box-shadow:0 0 0 3px rgba(0,123,255,.25)}joomla-group-buttons>.btn.btn:disabled{opacity:.65}joomla-group-buttons>.btn.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}joomla-group-buttons>.btn.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}joomla-group-buttons>.btn.btn-primary.focus,joomla-group-buttons>.btn.btn-primary:focus{box-shadow:0 0 0 3px rgba(0,123,255,.5)}joomla-group-buttons>.btn.btn-primary.disabled,joomla-group-buttons>.btn.btn-primary:disabled{background-color:#007bff;border-color:#007bff}joomla-group-buttons>.btn.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}joomla-group-buttons>.btn.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}joomla-group-buttons>.btn.btn-success.focus,joomla-group-buttons>.btn.btn-success:focus{box-shadow:0 0 0 3px rgba(40,167,69,.5)}joomla-group-buttons>.btn.btn-success.disabled,joomla-group-buttons>.btn.btn-success:disabled{background-color:#28a745;border-color:#28a745}joomla-group-buttons>.btn.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}joomla-group-buttons>.btn.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}joomla-group-buttons>.btn.btn-info.focus,joomla-group-buttons>.btn.btn-info:focus{box-shadow:0 0 0 3px rgba(23,162,184,.5)}joomla-group-buttons>.btn.btn-info.disabled,joomla-group-buttons>.btn.btn-info:disabled{background-color:#17a2b8;border-color:#17a2b8}joomla-group-buttons>.btn.btn-warning{color:#111;background-color:#ffc107;border-color:#ffc107}joomla-group-buttons>.btn.btn-warning:hover{color:#111;background-color:#e0a800;border-color:#d39e00}joomla-group-buttons>.btn.btn-warning.focus,joomla-group-buttons>.btn.btn-warning:focus{box-shadow:0 0 0 3px rgba(255,193,7,.5)}joomla-group-buttons>.btn.btn-warning.disabled,joomla-group-buttons>.btn.btn-warning:disabled{background-color:#ffc107;border-color:#ffc107}joomla-group-buttons>.btn.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}joomla-group-buttons>.btn.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}joomla-group-buttons>.btn.btn-danger.focus,joomla-group-buttons>.btn.btn-danger:focus{box-shadow:0 0 0 3px rgba(220,53,69,.5)}joomla-group-buttons>.btn.btn-danger.disabled,joomla-group-buttons>.btn.btn-danger:disabled{background-color:#dc3545;border-color:#dc3545}joomla-group-buttons .btn+.btn,joomla-group-buttons .btn+.btn-group,joomla-group-buttons .btn-group+.btn,joomla-group-buttons .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}joomla-group-buttons>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}joomla-group-buttons>.btn:first-child{margin-left:0}joomla-group-buttons>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}joomla-group-buttons>.btn:last-child:not(:first-child),joomla-group-buttons>.dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}joomla-group-buttons>joomla-group-buttons{float:left}joomla-group-buttons>joomla-group-buttons:not(:first-child):not(:last-child)>.btn{border-radius:0}joomla-group-buttons>joomla-group-buttons:first-child:not(:last-child)>.btn:last-child,joomla-group-buttons>joomla-group-buttons:first-child:not(:last-child)>.dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}joomla-group-buttons>joomla-group-buttons:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-bottom-left-radius:0}joomla-group-buttons>.btn input[type=checkbox],joomla-group-buttons>.btn input[type=radio],joomla-group-buttons>.btn-group>.btn input[type=checkbox],joomla-group-buttons>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}`;
  document.head.appendChild(style);
}

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

          radio.addEventListener('click', () => {
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
