import { JoomlaModalElement } from './modal.js';

if (!customElements.get('joomla-modal')) {
  customElements.define('joomla-modal', JoomlaModalElement);
}
