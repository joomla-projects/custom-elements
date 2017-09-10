# Group Buttons WIP

In order to use the group buttons custom element you need to import the element in the document's head:
```html
<link href="joomla-group-buttons.min.css" rel="stylesheet">
<script src="joomla-group-buttons.min.js"></script>
```

The simplified version of the custom elements
```html
<joomla-group-buttons>
	<label class="btn btn-info active" aria-pressed="true">
		<input type="checkbox" checked="" autocomplete="off"> Checkbox 1 (pre-checked)
	</label>
	<label class="btn btn-info" aria-pressed="false">
		<input type="checkbox" autocomplete="off"> Checkbox 2
	</label>
	<label class="btn btn-info" aria-pressed="false">
		<input type="checkbox" autocomplete="off"> Checkbox 3
	</label>
	<label class="btn btn-info" aria-pressed="false">
		<input type="checkbox" autocomplete="off"> Checkbox 4
	</label>
	<label class="btn btn-info" aria-pressed="false">
		<input type="checkbox" autocomplete="off"> Checkbox 5
	</label>
</joomla-group-buttons>

<joomla-group-buttons>
	<label class="btn btn-danger active" aria-pressed="true">
		<input type="radio" name="options" id="option1" autocomplete="off" checked=""> Radio 1 (pre-checked)
	</label>
	<label class="btn btn-danger" aria-pressed="false">
		<input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
	</label>
	<label class="btn btn-danger" aria-pressed="false">
		<input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
	</label>
	<label class="btn btn-danger" aria-pressed="false">
		<input type="radio" name="options" id="option4" autocomplete="off"> Radio 4
	</label>
	<label class="btn btn-danger" aria-pressed="false">
		<input type="radio" name="options" id="option5" autocomplete="off"> Radio 5
	</label>
</joomla-group-buttons>
```

### Group Buttons demo:
<joomla-group-buttons><label class="btn btn-info active" aria-pressed="true"><input type="checkbox" checked="" autocomplete="off"> Checkbox 1 (pre-checked)</label><label class="btn btn-info" aria-pressed="false"><input type="checkbox" autocomplete="off"> Checkbox 2</label><label class="btn btn-info" aria-pressed="false"><input type="checkbox" autocomplete="off"> Checkbox 3</label><label class="btn btn-info" aria-pressed="false"><input type="checkbox" autocomplete="off"> Checkbox 4</label><label class="btn btn-info" aria-pressed="false"><input type="checkbox" autocomplete="off"> Checkbox 5</label></joomla-group-buttons>

<hr>

<joomla-group-buttons><label class="btn btn-danger active" aria-pressed="true"><input type="radio" name="options" id="option1" autocomplete="off" checked=""> Radio 1 (pre-checked)</label><label class="btn btn-danger" aria-pressed="false"><input type="radio" name="options" id="option2" autocomplete="off"> Radio 2</label><label class="btn btn-danger" aria-pressed="false"><input type="radio" name="options" id="option3" autocomplete="off"> Radio 3</label><label class="btn btn-danger" aria-pressed="false"><input type="radio" name="options" id="option4" autocomplete="off"> Radio 4</label><label class="btn btn-danger" aria-pressed="false"><input type="radio" name="options" id="option5" autocomplete="off"> Radio 5</label></joomla-group-buttons>
