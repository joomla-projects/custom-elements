# Tabs (WIP)

## What is this
**Purpose**: Tabs allow users to quickly move between a small number of views (often related).

The tabs component displays as tabs and shrinks to a dropdown accordion on smaller screen sizes.

## Usage
In order to use the tab custom element you need to import the element in the document's head:
```html
<link href="joomla-tab.min.css" rel="stylesheet">
<script src="joomla-tab.min.js"></script>
```

The simplified version of the tabs:
```html
<joomla-tab>
	<section id="panel1" name="Tab panel 1">
		<h3>Tab panel 1</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
			irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
	</section>
	<section id="panel2" name="Tab panel 2">
		<h3>Tab panel 2</h3>
		<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute
			irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</section>
	<section id="panel3" name="Tab panel 3">
		<h3>Tab panel 1</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
	</section>
</joomla-tab>
```

### Tabs Demo

<div class="mermaid">
<joomla-tab view="accordion" recall="false">
	<section id="panel1" name="Tab panel 1">
		<h3>Tab panel 1</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
	</section>
	<section id="panel2" name="Tab panel 2">
		<h3>Tab panel 2</h3><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</section>
	<section id="panel3" name="Tab panel 3">
		<h3>Tab panel 1</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
	</section>
</joomla-tab>

<hr>
<joomla-tab recall="false">
	<section id="panel1" name="Tab panel 1">
		<h3>Tab panel 1</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
	</section>
	<section id="panel2" name="Tab panel 2">
		<h3>Tab panel 2</h3><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</section>
	<section id="panel3" name="Tab panel 3">
		<h3>Tab panel 1</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
	</section>
</joomla-tab>
</div>

## Attributes
Control the design and functionality of the custom element through attributes.

|Attribute		|Description|
|---------------|-----------------------------------------------------------------------------------------------|
|recall			|Open the previously open tab on new page loads. True is the only value.|
|orientation	|Sets orientation. Either 'horizontal' or 'vertical'.|
|view       	|Sets the default active view. Either 'tabs' or 'accordion'.|

## Accessibility

### Accessibility specification

Accessible tabs specification is defined in WAI-ARIA Authoring Practices 1.1.

https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
See: [WAI ARIA Practices - 3.22 Tabs](https://www.w3.org/TR/wai-aria-practices-1.1/).
