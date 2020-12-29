import { JoomlaPanelsElement } from './panels.js';

if (!customElements.get('joomla-panels')) {
  customElements.define('joomla-panels', JoomlaPanelsElement);
}
