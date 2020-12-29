import { JoomlaDropdownElement } from './dropdown.js';

if (!customElements.get('joomla-dropdown')) {
  customElements.define('joomla-dropdown', JoomlaDropdownElement);
}
