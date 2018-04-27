(() => {
  /** Include the relative styles */
  if (!document.head.querySelector('#joomla-tip-style')) {
    const style = document.createElement('style');
    style.id = 'joomla-tip-style';
    style.innerHTML = `joomla-tip{position:relative;display:inline-block}joomla-tip button{width:1.6rem;height:1.6rem;font-family:serif;font-size:1.4rem;font-weight:700;line-height:1.4rem;color:#fff;background:#1c3d5c;border:0;border-radius:50%}joomla-tip .toggletip-bubble{position:absolute;z-index:1040;display:inline-block;width:14rem;padding:.5rem .8rem;font-size:.9rem;line-height:1.2rem;color:#fff;background:#222;border-radius:.25rem;box-shadow:0 0 5px rgba(0,0,0,.4);transition:all ease-in;animation-duration:.3s}joomla-tip .toggletip-bubble::after{position:absolute;top:.6rem;right:100%;width:0;height:0;content:"";border-style:solid}joomla-tip .toggletip-bubble.top{bottom:100%;left:50%;margin-bottom:.6rem;transform:translate(-50%,0);animation-name:toggletip-fadeInTop}joomla-tip .toggletip-bubble.top::after{top:100%;bottom:auto;left:50%;border-color:#222 transparent transparent;border-width:6px 6px 0;transform:translateX(-50%)}joomla-tip .toggletip-bubble.left{top:50%;right:100%;margin-right:.6rem;transform:translate(0,-50%);animation-name:toggletip-fadeInLeft}joomla-tip .toggletip-bubble.left::after{top:50%;bottom:auto;left:100%;border-color:transparent transparent transparent #222;border-width:6px 0 6px 6px;transform:translateY(-50%)}joomla-tip .toggletip-bubble.right{top:50%;left:100%;margin-left:.6rem;transform:translate(0,-50%);animation-name:toggletip-fadeInRight}joomla-tip .toggletip-bubble.right::after{top:50%;right:100%;bottom:auto;border-color:transparent #222 transparent transparent;border-width:6px 6px 6px 0;transform:translateY(-50%)}joomla-tip .toggletip-bubble.bottom{top:100%;left:50%;margin-top:.6rem;transform:translate(-50%,0);animation-name:toggletip-fadeInBottom}joomla-tip .toggletip-bubble.bottom::after{top:-6px;left:50%;border-color:transparent transparent #222;border-width:0 6px 6px;transform:translateX(-50%)}@keyframes toggletip-fadeInRight{from{opacity:0;transform:translate(-10px,-50%)}to{opacity:1;transform:translate(0,-50%)}}@keyframes toggletip-fadeInLeft{from{opacity:0;transform:translate(10px,-50%)}to{opacity:1;transform:translate(0,-50%)}}@keyframes toggletip-fadeInTop{from{opacity:0;transform:translate(-50%,10px)}to{opacity:1;transform:translate(-50%,0)}}@keyframes toggletip-fadeInBottom{from{opacity:0;transform:translate(-50%,-10px)}to{opacity:1;transform:translate(-50%,0)}}`;
    document.head.appendChild(style);
  }

  customElements.define('joomla-tip', class extends HTMLElement {
    /* Attributes to monitor */
    static get observedAttributes() { return ['type', 'label', 'tip', 'text', 'position']; }
    get type() { return this.getAttribute('type'); }
    set type(value) { return this.setAttribute('type', value); }
    get label() { return this.getAttribute('label'); }
    set label(value) { return this.setAttribute('label', value); }
    get tip() { return this.getAttribute('tip'); }
    set tip(value) { return this.setAttribute('tip', value); }
    get position() { return this.getAttribute('position'); }
    set position(value) { return this.setAttribute('position', value); }
    get text() { return this.getAttribute('text'); }
    set text(value) { return this.getAttribute('text', value); }

    /* Lifecycle, element appended to the DOM */
    connectedCallback() {
      if (!this.position || (this.position && ['top', 'bottom', 'left', 'right'].indexOf(this.position) === -1)) {
        this.position = 'top';
      }

      // create the html
      this.btnElement = document.createElement('button');
      this.spanElement = document.createElement('span');

      this.btnElement.setAttribute('aria-label', this.label ? this.label : 'more info');
      this.btnElement.innerHTML = this.text ? this.text : '';
      this.spanElement.setAttribute('role', 'status');

      // On click
      this.btnElement.addEventListener('click', this.showTip.bind(this));

      this.append(this.btnElement);
      this.append(this.spanElement);
    }

    /* Lifecycle, element removed from the DOM */
    disconnectedCallback() {
      this.querySelector('button').removeEventListener('click', this.showTip, true);
    }

    showTip() {
      const self = this;

      // Close on outside click
      document.addEventListener('click', (e) => {
        if (this.btnElement !== e.target) {
          this.spanElement.innerHTML = '';
          self.removeEventListener('keydown', this);
        }
      });

      // Remove toggletip on ESC
      document.addEventListener('keydown', (e) => {
        if ((e.keyCode || e.which) === 9) {
          this.spanElement.innerHTML = '';
          self.removeEventListener('keydown', this);
        }
      });

      this.spanElement.innerHTML = '';
      this.spanElement.innerHTML = `<span class="toggletip-bubble ${this.position}">${this.tip}</span>`;
    }

    /* Method to dispatch events */
    dispatchCustomEvent(eventName) {
      const OriginalCustomEvent = new CustomEvent(eventName, { bubbles: true, cancelable: true });
      OriginalCustomEvent.relatedTarget = this;
      this.dispatchEvent(OriginalCustomEvent);
      this.removeEventListener(eventName, this);
    }
  });
})();
