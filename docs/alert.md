# Alert

## What is this

**Purpose**: Users need to be aware of important information related to their current activity (contextual alerts) or related to the system (system notifications).

**Description**: An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task.

Alerts are available for any length of text, as well as an optional dismiss button. Alerts can also contain additional HTML elements like headings and paragraphs.

## Usage

In order to use the alert custom element you need to import the element in the document's head:

```html
<link href="joomla-alert.min.css" rel="stylesheet">
<script src="joomla-alert.min.js"></script>
```

The simplified version of the custom elements
```html
<!-- no params -->
<joomla-alert>
	Click open to go to joomla.org Click open to go to joomla.org Click open to go to
	joomla.org
</joomla-alert>

<!-- Alert with icon & content -->
<joomla-alert dismiss="true">
	<div class="joomla-alert--icon">
		<img src="./smile.svg" alt="">
	</div>
	<div class="joomla-alert-content">
		Alert with icon & content
		<div class="joomla-alert-link-group">
			<a href="#">Link1</a>
			<a href="#">Link2</a>
		</div>
	</div>
</joomla-alert>

<!-- collapse & collapse title -->
<joomla-alert collapse-title="Collapsible allert with icon" collapse="true">
	<div class="joomla-alert--icon">
		<img src="./smile.svg" alt="">
	</div>
	<div class="joomla-alert--collapse">
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates odit consequatur illum?
			<div class="joomla-alert-button-group">
				<button>Sure!</button>
				<button>Noooo!</button>
			</div>
	</div>
</joomla-alert>

<!-- Alert type: success, danger, warning. Alert dismiss: true -->
<joomla-alert type="success" dismiss="true">
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates odit consequatur illum?
</joomla-alert>
<joomla-alert type="warning" dismiss="true">
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates odit consequatur illum?
</joomla-alert>
<joomla-alert type="danger" dismiss="true" auto-dismiss="2000">
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates odit consequatur illum?
</joomla-alert>
```

### Alerts demo:

<!-- no params -->
<joomla-alert>
	Click open to go to joomla.org Click open to go to joomla.org Click open to go to
	joomla.org
</joomla-alert>

<!-- Alert with icon & content -->
<joomla-alert dismiss="true">
	<div class="joomla-alert--icon">
		<img src="./smile.svg" alt="">
	</div>
	<div class="joomla-alert-content">
		Alert with icon & content
		<div class="joomla-alert-link-group">
			<a href="#">Link1</a>
			<a href="#">Link2</a>
		</div>
	</div>
</joomla-alert>

<!-- collapse & collapse title -->
<joomla-alert collapse-title="Collapsible allert with icon" collapse="true">
	<div class="joomla-alert--icon">
		<img src="./smile.svg" alt="">
	</div>
	<div class="joomla-alert--collapse">
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates odit consequatur illum?
			<div class="joomla-alert-button-group">
				<button>Sure!</button>
				<button>Noooo!</button>
			</div>
	</div>
</joomla-alert>

<!-- Alert type: success, danger, warning. Alert dismiss: true -->
<joomla-alert type="success" dismiss="true">
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates odit consequatur illum?
</joomla-alert>
<joomla-alert type="warning" dismiss="true">
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates odit consequatur illum?
</joomla-alert>
<joomla-alert type="danger" dismiss="true">
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates odit consequatur illum?
</joomla-alert>
## Attibutes

Control the design and functionality of the custom element through attributes.


|Attribute		|Description|
|---------------|-----------------------------------------------------------------------------------------------|
|type			|This attribute is responsible for the looks.|
|dismiss		|Appends the x button. True is the only value.|
|acknowledge	|Appends a generic button with a title `Ok`. True is the only value.|
|auto-dismiss	|Controls the auto close functionality of the alert. Values (integers) represent milliseconds|
|href			|if is set a redirect button is created. Value must be an actual url|
|position		|Adjust the alerts's position to different corners. Possible values: `top-left`, `top-center` and `top-right`|


## Dismissing
No need for extra javascript, it's possible to dismiss any alert inline. Here’s how:

Add a `dismiss` or an `acknowledge` attribute.
That's it!
Now clicking the x button will close the alert!

## JavaScript behavior
### Triggers

Enable dismissal of an alert via JavaScript:
```js
el.close()
```

Change the alert type:
```js
el.setAttribute('type', 'warning')
```

Remove or add the close button:
```js
el.removeAttribute('dismiss'); // Will remove the attribute
el.setAttribute('acknowledge', true);
el.setAttribute('url', 'https://www.joomla.org');
el.setAttribute('auto-dismiss', '5000');
```

## Events
The custom element exposes a few events for hooking into alert functionality.


|Event			|Description								     			|
|-----------------------|-----------------------------------------------------------------------------------------------|
|joomla.alert.show		|This event fires immediately when the element is appended in the DOM.				|
|joomla.alert.close		|This event fires immediately when the close instance method is called.				|
|joomla.alert.closed	|This event is fired when the alert has been closed (will wait for CSS transitions to complete).|
|joomla.alert.buttonClicked	|This event is fired when the alert button has been clicked.|


Example:
Add some functonality when the alert is closing (right before the css transition start):
```js
el.addEventListener('joomla.alert.close', function() {
  alert('Impressed!')
})
```

Add some functonality when the alert is closed (right after the css transition ends):
```js
el.addEventListener('joomla.alert.closed', function() {
  alert('Very impressive!')
})
```


## Programmatically add a new alert:
Use the following script:


```js
var el = document.createElement('joomla-alert');
el.setAttribute('type', 'success');
el.setAttribute('dismiss', true);
el.innerHTML = 'Wow it works!';

document.body.appendChild(el);
```


### Demo

<div id="insert-new-alert"></div>

Run the above command by clicking this button:
<p>
<button role="button" id="insertNew" class="btn btn-success">Create An Alert</button>
</p>

### Programmatically change an alert or add remove the close button:
Use the following script:


```js
var el = document.querySelector('joomla-alert');
el.setAttribute('type', 'success');
el.setAttribute('dismiss', '');
```


### Live example
<joomla-alert id="change-me" type="info" dismiss="true"><strong>Alert:</strong> text goes here</joomla-alert>

<div id="replaceble" markdown="0">
<button role="button" data-opt1="type" value="info">Make it info</button>
<button role="button" data-opt1="type" value="success">Make it success</button>
<button role="button" data-opt1="type" value="warning">Make it warning</button>
<button role="button" data-opt1="type" value="danger">Make it danger</button>
<button role="button" data-opt1="dismiss" value="true">Add close button</button>
<button role="button" data-opt1="dismiss" value="false">Remove close button</button>
</div>




### Programmatically close an alert:
Use the following script:


```js
var el = document.querySelector('joomla-alert');
el.close();
```


### Demo
<joomla-alert id="close-me-with-a-btn" type="danger" acknowledge="true">
<strong>Alert:</strong> Close me with javascript
</joomla-alert>
<p>
<button role="button" id="i-will-close-that-alert">Close the above alert</button>
</p>


## Utilities

### When to use

* As a notification that keeps people informed of the status of the system and which may or may not require the user to respond. This includes errors, warnings, and general updates.
* As a validation message that alerts someone that they just did something that needs to be corrected or as confirmation that a task was completed successfully.

### When to consider something else

* On long forms, always include in-line validation in addition to any error messages that appear at the top of the form.
* If an action will result in destroying a user's work (for example, deleting an application) use a more intrusive pattern, such as a confirmation modal dialogue, to allow the user to confirm that this is what they want.



## Accessibility

### Accessibility specification

Accessible alert specification is defined in WAI-ARIA Authoring Practices 1.1.

See: [WAI ARIA Practices - 2.3 Alert](https://www.w3.org/TR/wai-aria-practices-1.1/).

### Keyboard Interaction

An alert (WAI-ARIA live region) does not require any keyboard interaction.

If the alert contains an element to dismiss and hide the notice, it should be a button. In this case:

* **Enter** - closes the message.

### Screenreader Interaction

Dynamically rendered alerts are automatically announced by most screen readers, and in some operating systems, they may trigger an alert sound.

**Note**: At this time screen readers do not inform users of alerts that are present on the page before page load completed.

## ARIA markup

`role="alert"`

* Identifies the element (typically div) as the container where alert content will be added or updated.

`aria-live="assertive"`

* **This does not have to be declared in the code** because it is implicit in the alert role.
* Tells assistive technologies to interrupt other processes to provide users with immediate notification of relevant alert container changes.

`aria-atomic="true"`

* **This does not have to be declared in the code** because it is implicit in the alert role.
* Tells assistive technologies to use the entire content of the alert element as the alert message even if only a portion of it has changed.

## Best practices

* Use the ARIA `role="alert"` to inform assistive technologies of a time-sensitive and important message that is not interactive. If the message is interactive, use the _alertdialog_ role instead.
* Do not visually hide alert messages on the page and then make them visible when they are needed. Users of older assistive technologies may still be able to perceive the alert messages even if they are not currently applicable.
* Ensure that information about type of alert denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the `.sr-only` class.

## WCAG 2.0 Reference

* **[1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG20/quickref/#content-structure-separation-understanding)** (Level A): Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.
* **[1.4.1 Use of Color](https://www.w3.org/WAI/WCAG20/quickref/#visual-audio-contrast-without-color)** (Level A): Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element.
* **[2.2.3 No Timing](https://www.w3.org/WAI/WCAG20/quickref/#time-limits-no-exceptions)** (Level AAA). Timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.
* **[2.2.4 Interruptions](https://www.w3.org/WAI/WCAG20/quickref/#time-limits-postponed)** (Level AAA). Interruptions can be postponed or suppressed by the user, except interruptions involving an emergency
* **[3.3.1 Error Identification](https://www.w3.org/WAI/WCAG20/quickref/#minimize-error-identified)** (Level A): If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text.
* **[3.3.2 Labels or Instructions](https://www.w3.org/WAI/WCAG20/quickref/#minimize-error-cues)** (Level A): Labels or instructions are provided when content requires user input.
* **[3.3.3 Error Suggestion](https://www.w3.org/WAI/WCAG20/quickref/#minimize-error-suggestions)** (Level AA): If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.
* **[4.1.2 Name, Role, Value](https://www.w3.org/WAI/WCAG20/quickref/#ensure-compat-rsv)** (Level A): For all user interface components, the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set; and notification of changes to these items is available to user agents, including assistive technologies.


<script markdown="0">
var addNew = function() {
    var tempElement = document.createElement('joomla-alert');
    tempElement.setAttribute('type', 'success');
    tempElement.setAttribute('dismiss', true);
    tempElement.innerHTML = 'Wow it works!';
    document.getElementById('insert-new-alert').appendChild(tempElement);
};

var addNewFloated = function() {
    var tempElement = document.createElement('joomla-alert');
    tempElement.setAttribute('type', 'warning');
    tempElement.setAttribute('dismiss', true);
	tempElement.setAttribute('position', 'top-center');
    tempElement.innerHTML = "I'm a floated alert! You can position me to the top left or right too!";
    document.body.appendChild(tempElement);
};

var changeAlert = function(dataAttr, value) {
    var tempElement = document.getElementById('change-me');
	tempElement.setAttribute(dataAttr, value);
};
var addNewButton = document.getElementById('insertNew'),
    changeButtons = document.querySelectorAll('#replaceble > button');

var addNewButtonFloated = document.getElementById('insertNewFloated');

addNewButton.addEventListener('click', addNew);
addNewButtonFloated.addEventListener('click', addNewFloated);
document.getElementById('change-me').addEventListener('joomla.alert.close', function() { alert('Seeing is believing. Event "joomla.alert.close" fired!') });
document.getElementById('change-me').addEventListener('joomla.alert.closed', function() {
    document.getElementById('replaceble').innerHTML = '<h4>Oops the alert has been destroyed. This text was initiated using the event "joomla.alert.closed" (the popup used the event "joomla.alert.close"</h4>';
 });

for (var i = 0, l = changeButtons.length; i < l; i++) {
        changeButtons[i].addEventListener('click', function() { changeAlert(this.getAttribute('data-opt1'), this.getAttribute('value')) });
}

document.getElementById('i-will-close-that-alert').addEventListener('click', function(event) { var a = document.getElementById('close-me-with-a-btn');
if (a) a.close(); event.target.setAttribute('disabled', true); event.target.removeEventListener('click', arguments.callee); });

</script>
