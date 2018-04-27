(() => {
  /** Include the relative styles */
  if (!document.head.querySelector('#joomla-modal-style')) {
    const style = document.createElement('style');
    style.id = 'joomla-modal-style';
    style.innerHTML = `joomla-modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;box-sizing:inherit;display:none;max-width:500px;margin:10px auto;overflow:hidden;border-radius:5px;outline:0}joomla-modal.jviewport-width10{width:10vw;margin-left:-5vw}joomla-modal.jviewport-width20{width:20vw;margin-left:-10vw}joomla-modal.jviewport-width30{width:30vw;margin-left:-15vw}joomla-modal.jviewport-width40{width:40vw;margin-left:-20vw}joomla-modal.jviewport-width50{width:50vw;margin-left:-25vw}joomla-modal.jviewport-width60{width:60vw;margin-left:-30vw}joomla-modal.jviewport-width70{width:70vw;margin-left:-35vw}joomla-modal.jviewport-width80{width:80vw;margin-left:-40vw}joomla-modal.jviewport-width90{width:90vw;margin-left:-45vw}joomla-modal.jviewport-width100{width:100vw;margin-left:-50vw}joomla-modal.show{display:block}joomla-modal .joomla-modal-dialog{position:relative;display:flex;flex-direction:column;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}joomla-modal .joomla-modal-dialog.fade{opacity:0;transition:opacity .15s linear}joomla-modal .joomla-modal-dialog.fade.show{opacity:1}joomla-modal .joomla-modal-dialog header{display:flex;align-items:center;justify-content:space-between;padding:15px;border-bottom:1px solid #e9ecef}joomla-modal .joomla-modal-dialog header button{float:right;padding:0;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;cursor:pointer;background:0 0;border:0;opacity:.5;-webkit-appearance:none}joomla-modal .joomla-modal-dialog header h5{margin-bottom:0;font-size:1.25rem;line-height:1.5}joomla-modal .joomla-modal-dialog section{position:relative;flex:1 1 auto;padding:15px}joomla-modal .joomla-modal-dialog section.jviewport-height10{height:10vh}joomla-modal .joomla-modal-dialog section.jviewport-height20{height:20vh}joomla-modal .joomla-modal-dialog section.jviewport-height30{height:30vh}joomla-modal .joomla-modal-dialog section.jviewport-height40{height:40vh}joomla-modal .joomla-modal-dialog section.jviewport-height50{height:50vh}joomla-modal .joomla-modal-dialog section.jviewport-height60{height:60vh}joomla-modal .joomla-modal-dialog section.jviewport-height70{height:70vh}joomla-modal .joomla-modal-dialog section.jviewport-height80{height:80vh}joomla-modal .joomla-modal-dialog section.jviewport-height90{height:90vh}joomla-modal .joomla-modal-dialog section.jviewport-height100{height:100vh}joomla-modal .joomla-modal-dialog section[class*=jviewport-height],joomla-modal .joomla-modal-dialog section[class^=jviewport-height]{max-height:none}joomla-modal .joomla-modal-dialog footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding:15px;border-top:1px solid #e9ecef}joomla-modal .joomla-modal-dialog footer .btn{margin-left:10px}.modal-backdrop.show{opacity:.5}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}`;
    document.head.appendChild(style);
  }

  // Keycodes
  const KEYCODE = {
    TAB: 9,
    ESC: 27,
  };

  customElements.define('joomla-modal', class extends HTMLElement {
    constructor() {
      super();

      this.triggerBtn = '';
      this.focusableElements = null;
      this.focusableSelectors = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];
      this.container = this.querySelector('.joomla-modal-dialog');
    }

    static get observedAttributes() {
      return ['width', 'height', 'innerWidth', 'innerHeight', 'iframe'];
    }

    connectedCallback() {
      if (!this.id) {
        throw new Error('`Joomla-modal` requires an id');
      }

      this.title = this.getAttribute('title') || 'Modal';
      this.setAttribute('role', 'dialog');
      this.classList.add('fade');
      this.iframe = this.getAttribute('iframe') || '';
      this.width = this.getAttribute('width') || '100%';
      this.height = this.getAttribute('height') || '600px';

      if (!this.container) {
        const cont = document.createElement('div');
        cont.classList.add('joomla-modal-dialog');
        cont.setAttribute('role', 'document');
        cont.innerHTML = this.innerHTML;
        this.innerHTML = '';
        this.appendChild(cont);
        this.container = this.querySelector('.joomla-modal-dialog');
      }

      this.header = this.querySelector('header');
      this.main = this.querySelector('section');
      this.footer = this.querySelector('footer');

      this.setAttribute('tabindex', -1);

      // Unique Id
      const randomId = `modal-title-${new Date().getUTCMilliseconds()}`;
      this.setAttribute('aria-labelledby', randomId);

      if (!this.header) {
        const htag = document.createElement('h5');
        htag.innerText = this.title;
        htag.id = randomId;
        const closeButton = document.createElement('button');
        closeButton.setAttribute('aria-label', 'Close');
        closeButton.setAttribute('data-dismiss', '');
        closeButton.innerHTML = '<span aria-hidden="true">×</span>';

        const header = document.createElement('header');

        header.appendChild(htag);
        header.appendChild(closeButton);

        this.container.insertAdjacentElement('afterbegin', header);
      }
      this.header = this.container.querySelector('header');
      this.body = this.container.querySelector('section');
      this.footer = this.container.querySelector('footer');

      this.triggerBtn = document.querySelector(`[data-href="#${this.id}"]`);
      if (this.triggerBtn) {
        this.triggerBtn.addEventListener('click', this.open.bind(this));
      }
    }


    disconnectedCallback() {
      if (this.triggerBtn) {
        this.triggerBtn.removeEventListener('click', this.open);
      }
    }

    open() {
      const dropShadow = document.createElement('div');
      dropShadow.classList.add('modal-backdrop', 'fade');
      dropShadow.classList.add('modal-backdrop', 'show');
      document.body.appendChild(dropShadow);

      this.removeAttribute('aria-hidden');
      // Iframe specific code, reload
      if (this.body) {
        this.iframeEl = this.main.querySelector('iframe');
        if (this.iframe) {
          if (this.iframeEl) {
            this.iframeEl.parentNode.remove(this.iframeEl);
          }
          const newIframe = document.createElement('iframe');
          newIframe.width = this.width;
          newIframe.height = this.height;
          newIframe.src = this.iframe;
          newIframe.setAttribute('frameborder', 0);
          this.body.appendChild(newIframe);
          this.iframeEl = this.main.querySelector('iframe');
        }
      }

      // Adjust the dimensions
      this.adjustDimensions();

      this.scrollTop = 0;
      this.classList.add('show');

      this.focusableElements = [].slice.call(this.querySelectorAll(this.focusableSelectors.join()));
      if (this.focusableElements.length) {
        this.focusableElements[0].focus();
      } else {
        this.header.querySelector('button').focus();
      }

      this.evKeypress = this.keyPress.bind(this);
      this.evClose = this.close.bind(this);
      this.evDocumentClose = this.documentClose.bind(this);

      // Keyboard handling
      this.addEventListener('keydown', this.evKeypress);

      // Close on click outside the modal
      document.addEventListener('click', this.evDocumentClose);

      // Is there a close button?
      const modalButtons = [].slice.call(this.querySelectorAll('[data-dismiss]'));
      // Add listeners for close
      modalButtons.forEach((modalButton) => {
        modalButton.addEventListener('click', this.evClose);
      });
    }

    close() {
      this.removeEventListener('keydown', this.evKeypress);
      document.removeEventListener('click', this.evDocumentClose);

      // Is there a close button?
      const modalButtons = [].slice.call(this.querySelectorAll('[data-dismiss]'));
      // Add listeners for close
      modalButtons.forEach((modalButton) => {
        modalButton.removeEventListener('click', this.evClose);
      });

      const dropShadow = document.querySelector('.modal-backdrop');
      if (dropShadow) document.body.removeChild(dropShadow);
      this.setAttribute('aria-hidden', 'true');
      this.classList.remove('show');
      this.main.innerHTML = '';
      this.triggerBtn.focus();
    }

    documentClose(event) {
      if (!this.findAncestorByClass(event.target, 'joomla-modal-dialog') && event.target !== this.triggerBtn) {
        this.close();
      }
    }

    keyPress(e) {
      // ESC key
      if (e.keyCode === KEYCODE.ESC) {
        this.close();
      }
      // TAB key
      if (e.keyCode === KEYCODE.TAB) {
        // this.handleTabEvent(e);
        // Get the index of the current active element within the modal
        const focusedIndex = this.focusableElements.indexOf(document.activeElement);
        // Handle TAB event if need to skip
        // If first element is focused and shift key is in use
        if (e.shiftKey && (focusedIndex === 0 || focusedIndex === -1)) {
          // Focus last item within modal
          this.focusableElements[this.focusableElements.length - 1].focus();
          e.preventDefault();
        }
        // If last element is focused and shift key is not in use
        if (!e.shiftKey && focusedIndex === this.focusableElements.length - 1) {
          // Focus first item within modal
          this.focusableElements[0].focus();
          e.preventDefault();
        }
      }
    }

    adjustDimensions() {
      // Legacy code
      // Height
      let modalHeight = this.offsetHeight;
      modalHeight += parseInt(window.getComputedStyle(this).getPropertyValue('margin-top'), 10);
      modalHeight += parseInt(window.getComputedStyle(this).getPropertyValue('margin-bottom'), 10);

      const bodyHeight = this.body.getBoundingClientRect.height;
      let bodyHeightOuter = this.body.offsetHeight;
      bodyHeightOuter += parseInt(window.getComputedStyle(this.body).getPropertyValue('margin-top'), 10);
      bodyHeightOuter += parseInt(window.getComputedStyle(this.body).getPropertyValue('margin-bottom'), 10);

      let headerHeight = this.header.offsetHeight;
      headerHeight += parseInt(window.getComputedStyle(this.header).getPropertyValue('margin-top'), 10);
      headerHeight += parseInt(window.getComputedStyle(this.header).getPropertyValue('margin-bottom'), 10);

      let footerHeight = this.footer.offsetHeight;
      footerHeight += parseInt(window.getComputedStyle(this.footer).getPropertyValue('margin-top'), 10);
      footerHeight += parseInt(window.getComputedStyle(this.footer).getPropertyValue('margin-bottom'), 10);

      const padding = this.offsetTop;
      const maxModalHeight = window.height - (padding * 2);
      const modalBodyPadding = (bodyHeightOuter - bodyHeight);
      const maxModalBodyHeight = maxModalHeight - (headerHeight + footerHeight + modalBodyPadding);

      if (this.iframeEl) {
        const iframeHeight = this.iframeEl.getBoundingClientRect().height;

        if (iframeHeight > maxModalBodyHeight) {
          this.container.style.maxHeight = maxModalBodyHeight;
          this.container.style.overflowY = 'auto';
          this.iframeEl.style.maxHeight = maxModalBodyHeight - modalBodyPadding;
        }
      } else if (modalHeight > maxModalHeight) {
        this.container.style.maxHeight = maxModalBodyHeight;
        this.container.style.overflowY = 'auto';
      }
    }

    /* eslint-disable */
    findAncestorByClass(el, className) {
      while ((el = el.parentElement) && !el.classList.contains(className));
      return el;
    }
    /* eslint-enable */
  });
})();
