(() => {
  class JoomlaTooltipElement extends HTMLElement {
    static get observedAttributes() { return ['position', 'action']; }


    get position() { return this.getAttribute('position') || 'top'; }

    set position(value) { return this.setAttribute('position', value); }

    get action() { return this.getAttribute('action') || 'hover'; }

    set action(value) { return this.getAttribute('action', value); }

    /* Lifecycle, element appended to the DOM */
    connectedCallback() {
      if (!this.position || (this.position && ['top', 'bottom', 'left', 'right'].indexOf(this.position) === -1)) {
        this.position = 'top';
      }

      this.innerContents = [...this.querySelectorAll('joomla-tooltip > *')];
      this.innerContents.forEach((content) => {
        if (this.action === 'hover') {
          content.addEventListener('mouseenter', (e) => {
            this.generateTooltip(content);
          });

          content.addEventListener('mouseleave', (e) => {
            // clean up
            const tooltips = document.querySelectorAll('.joomla-tooltip');
            tooltips.forEach((tooltip) => {
              document.body.removeChild(tooltip);
            });
          });
        } else {
          content.addEventListener('click', (e) => {
            this.generateTooltip(content);
          });
        }
      });
    }


    generateTooltip(item) {
      const tooltipWrap = document.createElement('span');
      tooltipWrap.classList.add('joomla-tooltip', `${this.position}`);
      const title = item.hasAttribute('tooltip-text') ? item.getAttribute('tooltip-text') : item.innerText;
      tooltipWrap.appendChild(document.createTextNode(title));

      const { firstChild } = document.body;
      firstChild.parentNode.insertBefore(tooltipWrap, firstChild);

      // calculating the position

      const itemRect = item.getBoundingClientRect();
      const toolTipRect = tooltipWrap.getBoundingClientRect();
      const space = 5;

      switch (this.position) {
        case 'right':
          tooltipWrap.style.left = `${Math.round(itemRect.left + itemRect.width + space)}px`;
          tooltipWrap.style.top = `${Math.round(itemRect.top)}px`;
          break;
        case 'bottom':
          tooltipWrap.style.left = `${Math.round(itemRect.right - itemRect.width)}px`;
          tooltipWrap.style.top = `${Math.round(itemRect.bottom) + space}px`;
          break;
        case 'left':
          tooltipWrap.style.left = `${Math.round(itemRect.left - (toolTipRect.width + space))}px`;
          tooltipWrap.style.top = `${Math.round(itemRect.top)}px`;
          break;

        default:
          tooltipWrap.style.top = `${itemRect.top - (toolTipRect.height + space)}px`;
          tooltipWrap.style.left = `${itemRect.left}px`;
          break;
      }
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
  }
  customElements.define('joomla-tooltip', JoomlaTooltipElement);
})();
