# Accordion WIP

In order to use the accordion custom element you need to import the element in the document's head:
```html
<script src="joomla-accordion.min.js"></script>
```

The simplified version of the custom elements
```html
		<joomla-accordion role="tablist" aria-multiselectable="true">
			<section class="card">
				<div class="card-header" role="tab" id="headingOne">
					<h5 class="mb-0">
						<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </a>
					</h5>
				</div>

				<div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
					<div class="card-block">
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
						non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
						aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
						beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
						craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
						VHS.
					</div>
				</div>
			</section>

			<section class="card">
				<div class="card-header" role="tab" id="headingTwo">
					<h5 class="mb-0">
						<a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </a>
					</h5>
				</div>
				<div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
					<div class="card-block">
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
						non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
						aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
						beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
						craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
						VHS.
					</div>
				</div>
			</section>

			<section class="card">
				<div class="card-header" role="tab" id="headingThree">
					<h5 class="mb-0">
						<a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </a>
					</h5>
				</div>
				<div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
					<div class="card-block">
						Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
						non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
						aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
						beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
						craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
						VHS.
					</div>
				</div>
			</section>

		</joomla-accordion>
```

### Accordion demo:

<div class="mermaid">
<joomla-accordion role="tablist" aria-multiselectable="true">
<section class="card">
<div class="card-header" role="tab" id="headingOne">
<h5 class="mb-0">
<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
Collapsible Group Item #1
</a>
</h5>
</div>

<div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
<div class="card-block">
Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
VHS.
</div>
</div>
</section>

<section class="card">
<div class="card-header" role="tab" id="headingTwo">
<h5 class="mb-0">
<a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
Collapsible Group Item #2
</a>
</h5>
</div>
<div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
<div class="card-block">
Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
VHS.
</div>
</div>
</section>

<section class="card">
<div class="card-header" role="tab" id="headingThree">
<h5 class="mb-0">
<a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
Collapsible Group Item #3
</a>
</h5>
</div>
<div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
<div class="card-block">
Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable
VHS.
</div>
</div>
</section>

</joomla-accordion>
</div>
