# Breadcrumb

## What is this

**Purpose**: Use it to create a responsive breadcrumb.

**Description**: It's a fully responsive breadcrumb. This breadcurmb is responsive fully  manage by javascript. So don't take any panic for your big breadcrumb.

## Usage

In order to use the Breadcrumb custom element you need to import the element in the document's head:

```html
<link href="joomla-breadcrumb.min.css" rel="stylesheet">
<script src="joomla-breadcrumb.min.js"></script>
```

```html
<joomla-breadcrumb aria-label="breadcrumb">
	<li href="index.php" text="home"></li>
	<li href="index.php/pages" text="pages"></li>
	<li href="index.php/pages/blog" text="blog"></li>
	<li href="index.php/pages/blog-details" text="blog details" class="active"></li>
</joomla-breadcrumb>
```

### Breadcrumb Demo:
<section class="res-demo-area">
<joomla-breadcrumb aria-label="breadcrumb">
	<li href="index.php" text="home"></li>
	<li href="index.php/pages" text="pages"></li>
	<li href="index.php/pages/blog" text="blog"></li>
	<li href="index.php/pages/blog-details" text="blog details" class="active"></li>
</joomla-breadcrumb>
</section>

### Responsive Breadcrumb Demo:

<section class="res-demo-area">
	<joomla-breadcrumb aria-label="breadcrumb">
		<li href="#" text="page 1" class="custom-class my-class"></li>
		<li href="#" text="page 2"></li>
		<li href="#" text="page 3"></li>
		<li href="#" text="page 4"></li>
		<li href="#" text="page 5"></li>
		<li href="#" text="page 6"></li>
		<li href="#" text="page 7"></li>
		<li href="#" text="page 8"></li>
		<li href="#" text="page 9"></li>
		<li href="#" text="page 10"></li>
		<li href="#" text="page 11"></li>
		<li href="#" text="page 12"></li>
		<li href="#" text="page 13"></li>
		<li href="#" text="page 14"></li>
		<li href="#" text="page 15"></li>
		<li href="#" text="page 16"></li>
		<li href="#" text="page 17"></li>
		<li href="#" text="page 18" activeClass="active"></li>
	</joomla-breadcrumb>
</section>

## li Attributes

|Attribute|Value|
|:--------|:----|
|href|By this attribute anchor `a` tag will get href value `<a href="href">`|
|text|By this attribute anchor `a` tag will get innertext `<a href="href">text</a>`|
|class|Add active or extra classes with this attribute `class="myclass custom-class"`|
|activeClass|Add active class with this attribute `activeClass="active"`|

