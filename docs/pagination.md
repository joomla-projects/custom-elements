# Pagination

## What is this

**Purpose**: Use it to create a responsive pagination.

**Description**: It's a fully responsive pagination. This pagination is responsive fully  manage by javascript. So don't take any panic for your big pagination.

## Usage

In order to use the pagination custom element you need to import the element in the document's head:

```html
<link href="joomla-pagination.min.css" rel="stylesheet">
<script src="joomla-pagination.min.js"></script>
```

```html
<joomla-pagination>
	<a class="has-arrow first-page" href=""><<</a>
	<a class="has-arrow next-page" href=""><</a>
	<li class="pagination-link" href="#" value="1" text="1"></li>
	<li class="pagination-link" href="#" value="2" text="2"></li>
	<li class="pagination-link" href="#" value="3" text="3"></li>
	<li class="pagination-link" activeClass="active" href="#" value="4" text="4"></li>
	<li class="pagination-link" href="#" value="5" text="5"></li>
	<li class="pagination-link" href="#" value="5" text="6"></li>
	<li class="pagination-link" href="#" value="5" text="7"></li>
	<li class="pagination-link" href="#" value="5" text="8"></li>
	<li class="pagination-link" href="#" value="5" text="9"></li>
	<li class="pagination-link" href="#" value="5" text="10"></li>
	<a class="has-arrow prev-page" href="">></a>
	<a class="has-arrow last-page" href="">>></a>
</joomla-pagination>
```

### pagination Demo:

<joomla-pagination>
	<a class="has-arrow first-page" href="" title="First page"><<</a>
	<a class="has-arrow next-page" href="" title="Next page"><</a>
	<li class="pagination-link" href="#" value="1" text="1"></li>
	<li class="pagination-link" href="#" value="2" text="2"></li>
	<li class="pagination-link" href="#" value="3" text="3"></li>
	<li class="pagination-link" activeClass="active" href="#" value="4" text="4"></li>
	<li class="pagination-link" href="#" value="5" text="5"></li>
	<li class="pagination-link" href="#" value="5" text="6"></li>
	<li class="pagination-link" href="#" value="5" text="7"></li>
	<li class="pagination-link" href="#" value="5" text="8"></li>
	<li class="pagination-link" href="#" value="5" text="9"></li>
	<li class="pagination-link" href="#" value="5" text="10"></li>
	<a class="has-arrow prev-page" href="" title="Prev page">></a>
	<a class="has-arrow last-page" href="" title="Last page">>></a>
</joomla-pagination>

### Responsive Breadcrumb Demo:

<section class="res-demo-area">
	<joomla-pagination>
	<a class="has-arrow first-page" href="" title="First page"><<</a>
	<a class="has-arrow next-page" href="" title="Next page"><</a>
	<li class="pagination-link" href="#" value="1" text="1"></li>
	<li class="pagination-link" href="#" value="2" text="2"></li>
	<li class="pagination-link" href="#" value="3" text="3"></li>
	<li class="pagination-link" activeClass="active" href="#" value="4" text="4"></li>
	<li class="pagination-link" href="#" value="5" text="5"></li>
	<li class="pagination-link" href="#" value="5" text="6"></li>
	<li class="pagination-link" href="#" value="5" text="7"></li>
	<li class="pagination-link" href="#" value="5" text="8"></li>
	<li class="pagination-link" href="#" value="5" text="9"></li>
	<li class="pagination-link" href="#" value="5" text="10"></li>
	<li class="pagination-link" href="#" value="5" text="11"></li>
	<li class="pagination-link" href="#" value="5" text="12"></li>
	<li class="pagination-link" href="#" value="5" text="13"></li>
	<li class="pagination-link" href="#" value="5" text="14"></li>
	<li class="pagination-link" href="#" value="5" text="15"></li>
	<li class="pagination-link" href="#" value="5" text="16"></li>
	<li class="pagination-link" href="#" value="5" text="17"></li>
	<li class="pagination-link" href="#" value="5" text="18"></li>
	<li class="pagination-link" href="#" value="5" text="19"></li>
	<li class="pagination-link" href="#" value="5" text="20"></li>
	<li class="pagination-link" href="#" value="5" text="21"></li>
	<li class="pagination-link" href="#" value="5" text="22"></li>
	<li class="pagination-link" href="#" value="5" text="23"></li>
	<li class="pagination-link" href="#" value="5" text="24"></li>
	<li class="pagination-link" href="#" value="5" text="25"></li>
	<li class="pagination-link" href="#" value="5" text="26"></li>
	<li class="pagination-link" href="#" value="5" text="27"></li>
	<li class="pagination-link" href="#" value="5" text="28"></li>
	<li class="pagination-link" href="#" value="5" text="29"></li>
	<li class="pagination-link" href="#" value="5" text="30"></li>
	<li class="pagination-link" href="#" value="5" text="31"></li>
	<a class="has-arrow prev-page" href="" title="Prev page">></a>
	<a class="has-arrow last-page" href="" title="Last page">>></a>
</joomla-pagination>
</section>


## li Attributes

|Attribute|Value|
|:--------|:----|
|href|By this attribute anchor `a` tag will get href value `<a href="href">`|
|text|By this attribute anchor `a` tag will get innertext `<a href="href">text</a>`|
|value|By this attribute anchor `a` tag will get value `<a value="12"></a>`|
|class|Add custom classes or extra classes with this attribute `class="myclass custom-class"`|
|activeClass|Add active class with this attribute `activeClass="active"`|

