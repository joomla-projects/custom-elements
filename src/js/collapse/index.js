import { JoomlaCollapseElement } from './collapse.js';

if (!customElements.get('joomla-collapse')) {
  customElements.define('joomla-collapse', JoomlaCollapseElement);
}
