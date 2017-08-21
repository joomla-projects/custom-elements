# Switcher

In order to use the switcher custom element you need to import the element in the document's head:
```html
<script src="joomla-switcher.min.js"></script>
```

The simplified version of the custom element
```html
<joomla-switcher offText="No" onText="Yes">
	<input name="switcher" id="sw1" value="0" type="radio" class="active" checked>
	<input name="switcher" id="sw2" value="1" type="radio">
</joomla-switcher>

```

### Switcher demo:
<joomla-switcher offText="Off" onText="On">
	<input name="switcher1" id="sw1" value="0" type="radio">
	<input name="switcher1" id="sw2" value="1" type="radio" class="active" checked>
</joomla-switcher>

<joomla-switcher type="primary" offText="No" onText="Yes">
	<input name="switcher2" id="sw3" value="0" type="radio" class="active" checked>
	<input name="switcher2" id="sw4" value="1" type="radio">
</joomla-switcher>

<joomla-switcher type="danger" offText="Stable" onText="Alpha">
	<input name="switcher3" id="sw5" value="0" type="radio" class="active" checked>
	<input name="switcher3" id="sw6" value="1" type="radio">
</joomla-switcher>


## Attibutes
Control the design and functionality of the custom element through attributes.

|Attribute				|Description								     												|
|-----------------------|-----------------------------------------------------------------------------------------------|
|type		|This attribute is responsible for the looks. Possible values: `primary` and `danger`						|
|offText	|The text that's displayed when the switcher is toggled off													|
|onText		|The text that's displayed when the switcher is toggled on													|

All Strings are translateble, using the common API: `Joomla.JText._('JON')`

## Methods
The custom element exposes a method to switch its state.


|Event						|Description																	|
|---------------------------|-------------------------------------------------------------------------------|
|switcherElement.toggle()	|This method will flip the state of the switcher								|



## Events
The custom element exposes a few events for hooking into switcher functionality.


|Event					|Description								     												|
|-----------------------|-----------------------------------------------------------------------------------------------|
|joomla.switcher.toggle	|This event fires when the switcher has been switched "on" or "off"								|
|joomla.switcher.on		|This event fires when the switcher has been switched "on"										|
|joomla.switcher.off	|This event fires when the switcher has been switched "off"										|


Example:
Add some functonality when the switcher has been toggled
```js
element.addEventListener('joomla.switcher.toggle', function() {alert('Toggled!')} )
```

Add some functonality when the switcher has been switched "on"
```js
element.addEventListener('joomla.switcher.on', function() {alert('Switched on!')} )
```

Add some functonality when the switcher has been switched "off"
```js
element.addEventListener('joomla.switcher.off', function() {alert('Switched off!')} )
```
