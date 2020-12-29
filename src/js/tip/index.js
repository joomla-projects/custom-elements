import { JoomlaTipElement } from './tip.js';

if (!customElements.get('joomla-tip')) {
  customElements.define('joomla-tip', JoomlaTipElement);
}
