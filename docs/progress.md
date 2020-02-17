# Progress (Circle)

In order to use the callout custom element you need to import the element in the document's head:
```html
<link href="joomla-progress.min.css" rel="stylesheet">
<script src="joomla-progress.min.js"></script>
```

The simplified version of the custom elements
```html
<joomla-progress radius="90" stroke="12" progress="50" fill="red" empty-fill="#dddddd">
	<h2><span data-counter="true"></span>%</h2>
	<span>Updated</span>
</joomla-progress>
```
<joomla-progress radius="90" stroke="12" progress="50" fill="red" empty-fill="#dddddd">
    <h2><span data-counter="true"></span>%</h2>
    <span>Updated</span>
</joomla-progress>

## Progress Attributes

|Attribute|Value|Descriptoin|
|:-------|:--------|:----|
|radius|round-value|Default is `50`, you can use `custom`|
|stroke|round-value| Default is `4`|
|fill|color-name/color-code| Set custom color for fill color|
|empty-fill|color-name/color-code| Set custom color for fill color|

