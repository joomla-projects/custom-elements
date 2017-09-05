/** Include the relative styles */
// if (!document.head.querySelector('#joomla-modal-style')) {
//   const style = document.createElement('style');
//   style.id = 'joomla-modal-style';
//   style.innerHTML = ``;
//   document.head.appendChild(style);
// }

const Joomla = window.Joomla || {};

class JoomlaFieldMedia extends HTMLElement {
  static get observedAttributes() {
    return ['type', 'base-path', 'root-folder', 'url', 'modal-container', 'modal-width', 'modal-height', 'input', 'button-select', 'button-clear', 'button-save-selected', 'preview', 'preview-width', 'preview-height'];
  }

  get type() { return this.getAttribute('type'); }
  set type(value) { this.setAttribute('type', value); }
  get basePath() { return this.getAttribute('base-path'); }
  set basePath(value) { this.setAttribute('base-path', value); }
  get rootFolder() { return this.getAttribute('root-folder'); }
  set rootFolder(value) { this.setAttribute('root-folder', value); }
  get url() { return this.getAttribute('url'); }
  set url(value) { this.setAttribute('url', value); }
  get modalContainer() { return this.getAttribute('modal-container'); }
  set modalContainer(value) { this.setAttribute('modal-container', value); }
  get input() { return this.getAttribute('input'); }
  set input(value) { this.setAttribute('input', value); }
  get buttonSelect() { return this.getAttribute('button-select'); }
  set buttonSelect(value) { this.setAttribute('button-select', value); }
  get buttonClear() { return this.getAttribute('button-clear'); }
  set buttonClear(value) { this.setAttribute('button-clear', value); }
  get buttonSaveSelected() { return this.getAttribute('button-save-selected'); }
  set buttonSaveSelected(value) { this.setAttribute('button-save-selected', value); }
  get modalWidth() { return this.getAttribute(parseInt('modal-width', 10)); }
  set modalWidth(value) { this.setAttribute('modal-width', value); }
  get modalHeight() { return this.getAttribute(parseInt('modal-height', 10)); }
  set modalHeight(value) { this.setAttribute('modal-height', value); }
  get previewWidth() { return this.getAttribute(parseInt('preview-width', 10)); }
  set previewWidth(value) { this.setAttribute('preview-width', value); }
  get previewHeight() { return this.getAttribute(parseInt('preview-height', 10)); }
  set previewHeight(value) { this.setAttribute('preview-height', value); }
  get preview() { return this.getAttribute('preview'); }
  set preview(value) { this.setAttribute('preview', value); }
  get previewContainer() { return this.getAttribute('preview-container'); }

  // attributeChangedCallback(attr, oldValue, newValue) {
  //   switch (attr) {
  //     case 'base-path':
  //     case 'root-folder':
  //     case 'url':
  //     case 'modal-container':
  //     case 'input':
  //     case 'button-select':
  //     case 'button-clear':
  //     case 'button-save-selected':
  //     case 'preview-container':
  //       // string
  //       break;
  //     case 'modal-width':
  //     case 'modal-height':
  //     case 'preview-width':
  //     case 'preview-height':
  //       // int
  //       // const value = parseInt(newValue, 10);
  //       // if (value !== parseInt(oldValue, 10)) {
  //       //  this.setAttribute(attr, value);
  //       // }
  //       break;
  //     case 'preview':
  //       // bool|string
  //       if (['true', 'false', 'tooltip', 'static'].indexOf(newValue) > -1
  //           && oldValue !== newValue) {
  //         this.preview = newValue;
  //       } else {
  //         // if (oldValue )
  //         //   this.preview = oldValue;
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  // }

  connectedCallback() {
    const button = this.querySelector(this.buttonSelect);
    const buttonClear = this.querySelector(this.buttonClear);
    this.show = this.show.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.clearValue = this.clearValue.bind(this);
    this.setValue = this.setValue.bind(this);
    this.updatePreview = this.updatePreview.bind(this);

    button.addEventListener('click', this.show);

    if (buttonClear) {
      buttonClear.addEventListener('click', this.clearValue);
    }

    this.updatePreview();
  }

  disconnectedCallback() {
    const button = this.querySelector(this.buttonClear);
    button.removeEventListener('click', self);
  }

  show() {
    const self = this;

    window.jQuery(this.querySelector('[role="dialog"]')).modal('show');

    window.jQuery(this.querySelector(this.buttonSaveSelected)).on('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (this.selectedPath) {
        self.setValue(this.selectedPath);
      }

      self.modalClose();
      return false;
    });

    window.document.addEventListener('onMediaFileSelected', (e) => {
      self.selectedPath = e.detail.path;
    });
  }

  modalClose() {
    window.jQuery(this.querySelector('[role="dialog"]')).modal('hide');
  }

  setValue(value) {
    const input = window.jQuery(this.querySelector(this.input));
    input.val(value).trigger('change');
    this.updatePreview();
  }

  clearValue() {
    this.setValue('');
  }

  updatePreview() {
    if (['true', 'tooltip', 'static'].indexOf(this.preview) === -1 || this.preview === 'false') {
      return;
    }

    // Reset tooltip and preview
    if (this.preview) {
      const containerPreview = window.jQuery(this.querySelector(this.previewContainer));
      const input = window.jQuery(this.querySelector(this.input));
      const value = input.val();

      containerPreview.popover('dispose');
      input.tooltip('dispose');

      if (!value) {
        containerPreview.popover({ content: Joomla.JText._('JLIB_FORM_MEDIA_PREVIEW_EMPTY'), html: true });
      } else {
        const div = document.createElement('div');
        const imgPreview = new Image();

        switch (this.type) {
          case 'image':
            imgPreview.src = this.basePath + value;
            break;
          default:
            // imgPreview.src = dummy image path;
            break;
        }

        div.style.width = this.previewWidth;
        imgPreview.style.width = '100%';

        div.appendChild(imgPreview);

        containerPreview.popover({
          html: true,
          content: div,
        });
        input.tooltip({ placement: 'top', title: value });
      }
    }
  }
}

customElements.define('joomla-field-media', JoomlaFieldMedia);
