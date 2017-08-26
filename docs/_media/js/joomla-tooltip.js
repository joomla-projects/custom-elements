class JoomlaTooltipElement extends HTMLElement {
  // /* Attributes to monitor */
  static get observedAttributes() { return ['label', 'tip', 'text', 'position']; }
  get label() { return this.getAttribute('label'); }
  set label(value) { return this.setAttribute('label', value); }
  get tip() { return this.getAttribute('tip'); }
  set tip(value) { return this.setAttribute('tip', value); }
  get position() { return this.getAttribute('position'); }
  set position(value) { return this.setAttribute('position', value); }
  get text() { return this.getAttribute('text'); }
  set text(value) { return this.getAttribute('text', value); }

  /* Lifecycle, element created */
  constructor() {
    super();

    if (!document.getElementById('joomla-tooltip-stylesheet')) {
      const style = document.createElement('style');
      style.id = 'joomla-tooltip-stylesheet';
      style.innerHTML = `joomla-tooltip{position:relative;display:inline-block}joomla-tooltip button{width:1.6rem;height:1.6rem;border-radius:50%;border:0;background:#1c3d5c;font-family:serif;font-weight:700;font-size:1.4rem;line-height:1.4rem;color:#fff}joomla-tooltip .toggletip-bubble{display:inline-block;position:absolute;z-index:1040;width:14rem;padding:.5rem .8rem;background:#222;font-size:.9rem;line-height:1.2rem;color:#fff;border-radius:.25rem;box-shadow:0 0 5px rgba(0,0,0,.4);transition:all ease-in;animation-duration:.3s}joomla-tooltip .toggletip-bubble:after{position:absolute;top:.6rem;right:100%;content:'';width:0;height:0;border-style:solid}joomla-tooltip .toggletip-bubble.top{bottom:100%;left:50%;margin-bottom:.6rem;transform:translate(-50%,0);animation-name:toggletip-fadeInTop}joomla-tooltip .toggletip-bubble.top:after{top:100%;left:50%;bottom:auto;border-width:6px 6px 0 6px;border-color:#222 transparent transparent transparent;transform:translateX(-50%)}joomla-tooltip .toggletip-bubble.left{top:50%;right:100%;margin-right:.6rem;transform:translate(0,-50%);animation-name:toggletip-fadeInLeft}joomla-tooltip .toggletip-bubble.left:after{top:50%;left:100%;bottom:auto;border-width:6px 0 6px 6px;border-color:transparent transparent transparent #222;transform:translateY(-50%)}joomla-tooltip .toggletip-bubble.right{top:50%;left:100%;margin-left:.6rem;transform:translate(0,-50%);animation-name:toggletip-fadeInRight}joomla-tooltip .toggletip-bubble.right:after{top:50%;right:100%;bottom:auto;border-width:6px 6px 6px 0;border-color:transparent #222 transparent transparent;transform:translateY(-50%)}joomla-tooltip .toggletip-bubble.bottom{top:100%;left:50%;margin-top:.6rem;transform:translate(-50%,0);animation-name:toggletip-fadeInBottom}joomla-tooltip .toggletip-bubble.bottom:after{top:-6px;left:50%;border-width:0 6px 6px 6px;border-color:transparent transparent #222 transparent;transform:translateX(-50%)}@keyframes toggletip-fadeInRight{from{transform:translate(-10px,-50%);opacity:0}to{transform:translate(0,-50%);opacity:1}}@keyframes toggletip-fadeInLeft{from{transform:translate(10px,-50%);opacity:0}to{transform:translate(0,-50%);opacity:1}}@keyframes toggletip-fadeInTop{from{transform:translate(-50%,10px);opacity:0}to{transform:translate(-50%,0);opacity:1}}@keyframes toggletip-fadeInBottom{from{transform:translate(-50%,-10px);opacity:0}to{transform:translate(-50%,0);opacity:1}}`;
      document.head.appendChild(style);
    }
  }

  /* Lifecycle, element appended to the DOM */
  connectedCallback() {
    if (!this.position || (this.position && ['top', 'bottom', 'left', 'right'].indexOf(this.position) === -1)) {
      this.position = 'top';
    }

    // create the html
    const btnElement = document.createElement('button');
    const spanElement = document.createElement('span');
    const tip = this.tip;
    const position = this.position;
    const self = this;

    const showTip = () => {
      // Close on outside click
      document.addEventListener('click', function (e) {
        if (btnElement !== e.target) {
          spanElement.innerHTML = '';
          self.removeEventListener('keydown', this);
        }
      });

      // Remove toggletip on ESC
      document.addEventListener('keydown', function (e) {
        if ((e.keyCode || e.which) === 9) {
          spanElement.innerHTML = '';
          self.removeEventListener('keydown', this);
        }
      });

      spanElement.innerHTML = '';
      spanElement.innerHTML = `<span class="toggletip-bubble ${position}">${tip}</span>`;
    };

    btnElement.setAttribute('aria-label', this.label ? this.label : 'more info');
    btnElement.innerHTML = this.text ? this.text : '';
    spanElement.setAttribute('role', 'status');

    // On click
    btnElement.addEventListener('click', showTip);

    this.append(btnElement);
    this.append(spanElement);
  }

  /* Lifecycle, element removed from the DOM */
  disconnectedCallback() {
    this.querySelector('button').removeEventListener('click', this);
  }

  /* Method to dispatch events */
  dispatchCustomEvent(eventName) {
    const OriginalCustomEvent = new CustomEvent(eventName, { bubbles: true, cancelable: true });
    OriginalCustomEvent.relatedTarget = this;
    this.dispatchEvent(OriginalCustomEvent);
    this.removeEventListener(eventName, this);
  }
}

customElements.define('joomla-tooltip', JoomlaTooltipElement);
