# Dropdown WIP

In order to use the dropdown custom element you need to import the element in the document's head:
```html
<link href="joomla-dropdown.min.css" rel="stylesheet">
<script src="joomla-dropdown.min.js"></script>
```

The simplified version of the custom elements
```html
<div class="joomla-dropdown-container">
	<button class="btn btn-secondary" id="dropdownList">Dropdown with list</button>

	<joomla-dropdown for="#dropdownList">
		<a class="dropdown-item" href="#">Item 1</a>
		<a class="dropdown-item" href="#">Item 2</a>
		<a class="dropdown-item" href="#">Item 3</a>
	</joomla-dropdown>
</div>

<div class="joomla-dropdown-container">
	<button class="btn btn-secondary" id="dropdownText">Dropdown with text</button>

	<joomla-dropdown for="#dropdownText">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
	</joomla-dropdown>
</div>
```

### Dropdown demo:

<div class="mermaid">
	<div class="joomla-dropdown-container">
		<button class="btn btn-secondary" id="dropdownList">Dropdown with list</button>
		<joomla-dropdown for="#dropdownList">
			<a class="dropdown-item" href="#">Item 1</a>
			<a class="dropdown-item" href="#">Item 2</a>
			<a class="dropdown-item" href="#">Item 3</a>
		</joomla-dropdown>
	</div>
	<div class="joomla-dropdown-container">
		<button class="btn btn-secondary" id="dropdownText">Dropdown with text</button>
		<joomla-dropdown for="#dropdownText">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
		</joomla-dropdown>
	</div>
</div>
