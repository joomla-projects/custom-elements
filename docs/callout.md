# Callout

In order to use the callout custom element you need to import the element in the document's head:
```html
<link href="joomla-callout.min.css" rel="stylesheet">
<script src="joomla-callout.min.js"></script>
```

The simplified version of the custom elements
```html
<joomla-callout for="#showCollout" dismiss="true">
    <div class="callout-title">Title</div>
    <div class="callout-content">
        Message body is optional.  If help documentation is available, consider adding a link to learn more
    </div>
    <a href="#" class="callout-link" target="blank">Learn more</a>
</joomla-callout>
```

# Callout With Footer:
```html
<joomla-callout for="#showCollout2" dismiss="true">
    <div class="callout-title">Title</div>
    <div class="callout-content">
        Message body is optional.  If help documentation is available, consider adding a link to learn more
    </div>
    <div class="callout-footer">
        <a href="#" class="callout-link" target="blank">Learn more</a>
    </div>
</joomla-callout>
```

<button id="showCollout">Callout</button>
<button id="showCollout2">Callout with footer</button>

<joomla-callout for="#showCollout" dismiss="true">
    <div class="callout-title">Title</div>
    <div class="callout-content">
        Message body is optional.  If help documentation is available, consider adding a link to learn more
    </div>
    <a href="#" class="callout-link" target="blank">Learn more</a>
</joomla-callout>

<joomla-callout for="#showCollout2" dismiss="true">
    <div class="callout-title">Title</div>
    <div class="callout-content">
        Message body is optional.  If help documentation is available, consider adding a link to learn more
    </div>
    <div class="callout-footer">
        <a href="#" class="callout-link" target="blank">Learn more</a>
    </div>
</joomla-callout>
