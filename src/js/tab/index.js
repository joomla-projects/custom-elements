import { JoomlaTabElement } from './tab.js';

if (!customElements.get('joomla-tab')) {
  customElements.define('joomla-tab', JoomlaTabElement);
}
