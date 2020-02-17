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
<joomla-pagination class="j-pagination" total-visible="7" next-icon="icon-chevron-right" prev-icon="icon-chevron-left"
    first-icon="icon-first" last-icon="icon-last" navbtns-state="icon" disable-btns="" input-selector="#limitstart"
    pagination="true" limit="20" result-msg="Showing results 1-20 of 68">
    <nav class="pagination-navigation" role="navigation" aria-label="Pagination" tabindex="-1"><span class="pagination-label d-none d-sm-block">Showing results 1-20 of 68</span> <ul class="pagination-list">
            <li class="pagination-item is-first-btn disabled"><span class="icon-first"></span></li>
            <li class="pagination-item is-prev-btn disabled"><span class="icon-chevron-left"></span></li>
            <li class="pagination-item active" value="1" aria-current="true" aria-label="Page 1">1</li>
            <li class="pagination-item " value="2" aria-label="Go to page 2">2</li>
            <li class="pagination-item " value="3" aria-label="Go to page 3">3</li>
            <li class="pagination-item " value="4" aria-label="Go to page 4">4</li>
            <li class="pagination-item is-next-btn "><span class="icon-chevron-right"></span></li>
            <li class="pagination-item is-last-btn "><span class="icon-last"></span></li>
        </ul>
    </nav>
</joomla-pagination>
```

### pagination Demo:

<joomla-pagination class="j-pagination" total-visible="7" next-icon="icon-chevron-right" prev-icon="icon-chevron-left" first-icon="icon-first" last-icon="icon-last" navbtns-state="icon" disable-btns="" input-selector="#limitstart" pagination="true" limit="20" result-msg="Showing results 1-20 of 68"><nav class="pagination-navigation" role="navigation" aria-label="Pagination" tabindex="-1"><span class="pagination-label d-none d-sm-block">Showing results 1-20 of 68</span><ul class="pagination-list"><li class="pagination-item is-first-btn disabled"><span class="icon-first"></span></li><li class="pagination-item is-prev-btn disabled"><span class="icon-chevron-left"></span></li><li class="pagination-item active" value="1" aria-current="true" aria-label="Page 1">1</li><li class="pagination-item " value="2" aria-label="Go to page 2">2</li><li class="pagination-item " value="3" aria-label="Go to page 3">3</li><li class="pagination-item " value="4" aria-label="Go to page 4">4</li><li class="pagination-item is-next-btn "><span class="icon-chevron-right"></span></li><li class="pagination-item is-last-btn "><span class="icon-last"></span></li></ul></nav></joomla-pagination>


## li Attributes

|Attribute|Value|
|:--------|:----|
|href|By this attribute anchor `a` tag will get href value `<a href="href">`|
|text|By this attribute anchor `a` tag will get innertext `<a href="href">text</a>`|
|value|By this attribute anchor `a` tag will get value `<a value="12"></a>`|
|class|Add custom classes or extra classes with this attribute `class="myclass custom-class"`|
|activeClass|Add active class with this attribute `activeClass="active"`|

