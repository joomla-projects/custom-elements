# Modal WIP

In order to use the modal custom element you need to import the element in the document's head:
```html
<link href="joomla-modal.min.css" rel="stylesheet">
<script src="joomla-modal.min.js"></script>
```

The simplified version of the custom elements
```html
<button type="button" class="btn btn-primary" data-href="#exampleModal">Launch demo modal</button>

<joomla-modal id="exampleModal" class="bordered" title="Modal title" close-button-title="Close">
	<section>
		<h4 class="joomla-modal-heading">I'm a Modal</h4>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
		dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
		book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
		unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
		recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
	</section>
	<footer>
		<div class="modal-footer-left-text">hint text</div>
		<button class="btn btn-secondary" data-dismiss>Close</button>
		<button class="btn btn-primary">Save changes</button>
	</footer>
</joomla-modal>
```


## Attibutes
Control the design and functionality of the custom element through attributes.


|Attribute		|Description|
|---------------|-----------------------------------------------------------------------------------------------|
|title			|This attribute is responsible for showing modal heading/title.|
|class		|Use `scrollable` and `bordered` class to make a Scrollable and Bordered style modal|
|iframe		|Iframe source url|


### Modal demo:

<div class="mermaid">
<button type="button" class="btn btn-primary" data-href="#exampleModal1">Launch demo modal</button>

<joomla-modal id="exampleModal1" class="bordered" title="Modal title" close-button-title="Close">
	<section>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
		dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
		book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
		unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
		recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
	</section>
	<footer>
		<div class="modal-footer-left-text">hint text</div>
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
