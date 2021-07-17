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
	<joomla-tab-element id="panel1" name="Tab panel 1">
		<h3>Tab panel 1</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
			irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
	</joomla-tab-element>
	<joomla-tab-element id="panel2" name="Tab panel 2">
		<h3>Tab panel 2</h3>
		<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute
			irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</joomla-tab-element>
	<joomla-tab-element id="panel3" name="Tab panel 3">
		<h3>Tab panel 1</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
	</joomla-tab-element>
</joomla-tab>

<joomla-tab view="accordion">
    <joomla-tab-element id="panel4" name="Tab panel 1">
        <h3>Tab panel 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </joomla-tab-element>
    <joomla-tab-element id="panel5" name="Tab panel 2">
        <h3>Tab panel 2</h3>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </joomla-tab-element>
    <joomla-tab-element id="panel6" name="Tab panel 3">
        <h3>Tab panel 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </joomla-tab-element>
</joomla-tab>
```

### Tabs Demo

<div>
<joomla-tab>
	<joomla-tab-element active id="panel1" name="Tab panel 1">
		<h3>Tab panel 1</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
			irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
	</joomla-tab-element>
	<joomla-tab-element id="panel2" name="Tab panel 2">
		<h3>Tab panel 2</h3>
		<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute
			irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</joomla-tab-element>
	<joomla-tab-element id="panel3" name="Tab panel 3">
		<h3>Tab panel 1</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
	</joomla-tab-element>
</joomla-tab>

<hr>

<joomla-tab view="accordion">
    <joomla-tab-element id="panel4" name="Tab panel 1">
        <h3>Tab panel 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </joomla-tab-element>
    <joomla-tab-element active id="panel5" name="Tab panel 2">
        <h3>Tab panel 2</h3>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </joomla-tab-element>
    <joomla-tab-element id="panel6" name="Tab panel 3">
        <h3>Tab panel 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </joomla-tab-element>
</joomla-tab>
</div>

## Attributes
Control the design and functionality of the custom element through attributes.

|Attribute		|Description|
|---------------|-----------------------------------------------------------------------------------------------|
|recall			|Open the previously open tab on new page loads. True is the only value.|
|orientation	|Sets orientation. Either 'horizontal' or 'vertical'.|
|view       	|Sets the default active view. Either 'tabs' or 'accordion'.|
|breakpoint     |Sets the breakpoint for tabs->accordion an vice versa.|

## Accessibility

### Accessibility specification

Accessible tabs specification is defined in WAI-ARIA Authoring Practices 1.1.

https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
See: [WAI ARIA Practices - 3.22 Tabs](https://www.w3.org/TR/wai-aria-practices-1.1/).

## Events
The custom element exposes a few events for hooking into tabs functionality.

|Event			|Description								     			|
|-----------------------|-----------------------------------------------------------------------------------------------|
|joomla.tab.show		|This event fires immediately when the tab is shown in the dom.				|
|joomla.tab.shown		|This event fires after the tab is shown in the UI.				|
|joomla.tab.hide		|This event fires immediately when the active tab is hidden in the dom.|
|joomla.tab.hidden		|This event fires after the tab has been hidden in the UI.|


Example:
Add some functionality when the tab is being shown:
```js
el.addEventListener('joomla.tab.show', function() {
  alert('Impressed!')
})
```
