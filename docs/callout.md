# Callout

In order to use the callout custom element you need to import the element in the document's head:
```html
<link href="joomla-callout.min.css" rel="stylesheet">
<script src="joomla-callout.min.js"></script>
```

The simplified version of the custom elements
```html
<a href="#" id="showCollout1" class="btn btn-secondary">Callout Bottom </a>

<joomla-callout action="hover" for="#showCollout1" dismiss="true" position="bottom">
    <div class="callout-title">Title</div>
    <div class="callout-content">
        Message body is optional. If help documentation is available, consider adding a link to learn more
    </div>
    <div class="callout-footer">
        <a href="#" class="callout-link" target="blank">Learn more</a>
    </div>
</joomla-callout>
```
<button id="showCollout1" class="btn btn-secondary">Callout Bottom </button>
<button id="showCollout2" class="btn btn-secondary">Callout Top </button>
<button id="showCollout3" class="btn btn-secondary">Callout Left </button>
<button id="showCollout4" class="btn btn-secondary">Callout Right </button>

<!-- Collout buttom -->
<joomla-callout action="hover" for="#showCollout1" dismiss="true" position="bottom">
    <div class="callout-title">Title</div>
    <div class="callout-content">
        Message body is optional. If help documentation is available, consider adding a link to learn more
    </div>
    <div class="callout-footer">
        <a href="#" class="callout-link" target="blank">Learn more</a>
    </div>
</joomla-callout>
<!-- Collout top -->
<joomla-callout action="hover" for="#showCollout2" dismiss="true" position="top">
    <div class="callout-title">Title</div>
    <div class="callout-content">
        Message body is optional. If help documentation is available, consider adding a link to learn more
    </div>
    <div class="callout-footer">
        <a href="#" class="callout-link" target="blank">Learn more</a>
    </div>
</joomla-callout>
<!-- Collout left -->
<joomla-callout action="hover" for="#showCollout3" dismiss="true" position="left">
    <div class="callout-title">Title</div>
    <div class="callout-content">
        Message body is optional. If help documentation is available, consider adding a link to learn more
    </div>
    <div class="callout-footer">
        <a href="#" class="callout-link" target="blank">Learn more</a>
    </div>
</joomla-callout>
<!-- Collout right -->
<joomla-callout for="#showCollout4" dismiss="true" position="right">
    <div class="callout-title">Title</div>
    <div class="callout-content">
        Message body is optional. If help documentation is available, consider adding a link to learn more
    </div>
    <div class="callout-footer">
        <a href="#" class="callout-link" target="blank">Learn more</a>
    </div>
</joomla-callout>

## Collout Attributes

|Attribute|Value|Descriptoin|
|:-------|:--------|:----|
|action|hover/click|Default is `hover`, you can use `click` also|
|position|top/bottom/left/right| Default is `left`|
|for|targetId| Callout target ID|
|dismiss|boolean| If true it will a close action|

