import { JoomlaAlertElement } from './alert.js';

if (!customElements.get('joomla-alert')) {
  customElements.define('joomla-alert', JoomlaAlertElement);
}
