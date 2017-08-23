# Modal WIP

In order to use the modal custom element you need to import the element in the document's head:
```html
<script src="joomla-modal.min.js"></script>
```

The simplified version of the custom elements
```html
<button type="button" class="btn btn-primary" data-href="#exampleModal">
Launch demo modal
</button>

<joomla-modal class="fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
		<span aria-hidden="true">&times;</span>
		</button>
			</div>
			<div class="modal-body">
				Bla bla...
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Save changes</button>
			</div>
		</div>
	</div>
</joomla-modal>
```

### Modal demo:

<div class="mermaid"><button type="button" class="btn btn-primary" data-href="#exampleModal">Launch demo modal</button><joomla-modal class="fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">Modal title</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body">Bla bla...</div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button><button type="button" class="btn btn-primary">Save changes</button></div></div></div></joomla-modal></div>
