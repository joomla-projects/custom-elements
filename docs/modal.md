# Modal WIP

In order to use the modal custom element you need to import the element in the document's head:
```html
<link href="joomla-modal.min.css" rel="stylesheet">
<script src="joomla-modal.min.js"></script>
```

The simplified version of the custom elements
```html
<button type="button" class="btn btn-primary" data-href="#exampleModal">Launch demo modal</button>

<joomla-modal id="exampleModal" title="Modal title" close-button-title="Close" width="100%" height="400px" iframe="https://www.joomla.org">

	<section>
		<h4>I'm a Modal</h4>
	</section>
	<footer>
		<button class="btn btn-secondary" data-dismiss>Close</button>
		<button class="btn btn-primary">Save changes</button>
	</footer>
</joomla-modal>
```

### Modal demo:
<div class="mermaid">
<button type="button" class="btn btn-primary" data-href="#exampleModal1">Launch demo modal</button>
<joomla-modal id="exampleModal1" title="Modal title" close-button-title="Close" width="100%" height="400px">
<section>
	<h4>I'm a Modal</h4>
</section>
<footer>
	<button class="btn btn-secondary" data-dismiss>Close</button>
	<button class="btn btn-primary">Save changes</button>
</footer>
</joomla-modal>
<hr>
<button type="button" class="btn btn-primary" data-href="#exampleModal2">Modal with iframe</button>
<joomla-modal id="exampleModal2" title="Modal title" close-button-title="Close" width="100%" height="400px" iframe="https://www.joomla.org">
<section>
	<h4>I'm a Modal</h4>
</section>
<footer>
	<button class="btn btn-secondary" data-dismiss>Close</button>
	<button class="btn btn-primary">Save changes</button>
</footer>
</joomla-modal>
</div>
