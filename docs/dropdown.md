# Dropdown WIP

In order to use the dropdown custom element you need to import the element in the document's head:
```html
<link href="joomla-dropdown.min.css" rel="stylesheet">
<script src="joomla-dropdown.min.js"></script>
```

The simplified version of the custom elements
```html

<div class="joomla-dropdown-container">
    <button class="btn btn-secondary" data-target="dropdownId">Dropdown with text</button>
    <joomla-dropdown for="dropdownId">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </joomla-dropdown>
</div>
```
<div class="joomla-dropdown-container">
    <button class="btn btn-secondary" data-target="dropdownId">Dropdown with text</button>
    <joomla-dropdown for="dropdownId">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </joomla-dropdown>
</div>

### Dropdown and sub-menu demo:

```html
<div class="joomla-dropdown-container">
	<a href="#" class="btn btn-secondary" data-target="dropdownList1">Dropdown with list</a>
	<joomla-dropdown for="dropdownList1">
		<ul>
			<li class="has-submenu" data-action="click">
				<a class="dropdown-item" >Item 1(click)</a>
				<ul class='submenu'>
					<li><a class="dropdown-item" href="#" title="Sub Menu">Sub Menu 1</a></li>
					<li><a class="dropdown-item" href="#" title="Sub Menu">Sub Menu 2</a></li>
					<li><a class="dropdown-item" href="#" title="Sub Menu">Sub Menu 3</a></li>
					<li><a class="dropdown-item" href="#" title="Sub Menu">Sub Menu 4</a></li>
				</ul>
			</li>
			<li class="has-submenu">
				<a class="dropdown-item" >Item 2(hover)</a>
				<ul class='submenu'>
					<li><a class="dropdown-item" href="#" title="Sub Menu">Sub Menu 1</a></li>
					<li><a class="dropdown-item" href="#" title="Sub Menu">Sub Menu 2</a></li>
					<li><a class="dropdown-item" href="#" title="Sub Menu">Sub Menu 3</a></li>
					<li><a class="dropdown-item" href="#" title="Sub Menu">Sub Menu 4</a></li>
				</ul>
			</li>
			<li><a class="dropdown-item" href="#">Item 3</a></li>
		</ul>
	</joomla-dropdown>
</div>
```

<div class="joomla-dropdown-container">
	<button class="btn btn-secondary" data-target="dropdownList1">Dropdown with list</button>
	<joomla-dropdown for="dropdownList1">
		<ul>
			<li class="has-submenu" data-action="click">
				<a class="dropdown-item" >Item 1(click)</a>
				<ul class='submenu'>
					<li><a class="dropdown-item" href="#" title="Sub Menu">Sub Menu 1</a></li>
					<li><a class="dropdown-item" href="#" title="Sub Menu">Sub Menu 2</a></li>
					<li><a class="dropdown-item" href="#" title="Sub Menu">Sub Menu 3</a></li>
					<li><a class="dropdown-item" href="#" title="Sub Menu">Sub Menu 4</a></li>
				</ul>
			</li>
			<li class="has-submenu">
				<a class="dropdown-item" >Item 2(hover)</a>
				<ul class='submenu'>
					<li><a class="dropdown-item" href="#" title="Sub Menu">Sub Menu 1</a></li>
					<li><a class="dropdown-item" href="#" title="Sub Menu">Sub Menu 2</a></li>
					<li><a class="dropdown-item" href="#" title="Sub Menu">Sub Menu 3</a></li>
					<li><a class="dropdown-item" href="#" title="Sub Menu">Sub Menu 4</a></li>
				</ul>
			</li>
			<li><a class="dropdown-item" href="#">Item 3</a></li>
		</ul>
	</joomla-dropdown>
</div>

## Dropdown Attributes

|Attribute|Value|Descriptoin|
|:-------|:--------|:----|
|position|left/right|Default is `right`, you can use `left` also, TODO: CONTENT REVIEW|
|data-action|click/hover| Default is `hover` Note: data-action must be no `list item`|

