# Accordion

## What is this

**Purpose**: Use it to create accordion

**Description**: It's a fully responsive accordion. This accordion made with custom element and vanilla js.

## Usage

In order to use the accordion custom element you need to import the element in the document's head:

```html
<link href="joomla-accordion.min.css" rel="stylesheet">
<script src="joomla-accordion.min.js"></script>
```

```html
<joomla-accordion toggle="true" animation="true">
    <section class="accordion-item" id="accordion-panel1" name="Accordion panel 1">
        <h3>Tab panel 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </section>
    <section class="accordion-item show"  id="accordion-panel2" name="Accordion panel 2">
        <h3>Tab panel 2</h3>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>
    <section class="accordion-item" id="accordion-panel3" name="Accordion panel 3">
        <h3>Tab panel 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </section>
</joomla-accordion>
```

### Accordion Demo:

<joomla-accordion toggle="true">
    <section class="accordion-item" id="accordion-panel1" name="Accordion panel 1">
        <h3>Tab panel 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </section>
    <section class="accordion-item show"  id="accordion-panel2" name="Accordion panel 2">
        <h3>Tab panel 2</h3>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>
    <section class="accordion-item" id="accordion-panel3" name="Accordion panel 3">
        <h3>Tab panel 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </section>
</joomla-accordion>


## Attributes

|Attribute|Value|
|:--------|:----|
|toggle|This attribute is responsible for collapsing open element|





