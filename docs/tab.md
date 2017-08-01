# Tabs

In order to use the alert custom element you need to import the element in the document's head:
```html
<link rel="stylesheet" href="joomla-tab.min.css">
<script src="joomla-tab.min.js"></script>
```

Using a very simple HTML markup this element generates a tabbed interface.

```html
<joomla-tab>No params passed</joomla-tab>

<joomla-tab level="info" dismiss="true">
    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
</joomla-tab>

<joomla-tab level="success" acknowledge="true">
    <strong>Well done!</strong> You successfully read this important alert message.
</joomla-tab>

<joomla-tab level="warning" dismiss="true" auto-dismiss="10000">
    <strong>Warning!</strong> This one will self distruct in 10secs.
</joomla-tab>

<joomla-tab level="danger" href="https://www.joomla.org/">
    <strong>Oh snap!</strong> Click open to go to Google.com
</joomla-tab>

<joomla-tab level="success" acknowledge="true" data-callback="someCallbackFunction">
    <strong>Advanced!</strong> Let's call a callback function!
</joomla-tab>
```

### Alerts demo:
<joomla-tab>No params passed</joomla-tab>
<joomla-tab level="info" dismiss="true">
    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
</joomla-tab>
<joomla-tab level="success" acknowledge="true">
    <strong>Well done!</strong> You successfully read this important alert message.
</joomla-tab>
<joomla-tab level="warning" dismiss="true" auto-dismiss="10000">
    <strong>Warning!</strong> This one will self distruct in 10secs.
</joomla-tab>
<joomla-tab level="danger" href="https://www.joomla.org/">
    <strong>Oh snap!</strong> Click open to go to Google.com
</joomla-tab>
<joomla-tab level="success" acknowledge="true" data-callback="someCallbackFunction">
    <strong>Advanced!</strong> Let's call a callback function!
</joomla-tab>

## Attibutes
Control the design and functionality of the custom element through attributes.


|Attribute			|Description								     			|
|-----------------------|-----------------------------------------------------------------------------------------------|
|level		|This attribute is responsible for the looks. Possible values: info, success, warning and danger				|
|dismiss	|Appends the x button. True is the only value.|
|acknowledge	|Appends a generic button with a title `Ok`. True is the only value.|
|auto-dismiss	|Controls the auto close functionality of the alert. Values (integers) represent milliseconds|
|href	|if is set a redirect button is created. Value must be an actual url|
|data-callback	|Creates an ok button and on click calls the given callback function |

All Strings are translateble, using the common API: `Joomla.JText._('JCLOSE')`


## Dismissing
No need for extra javascript, it’s possible to dismiss any alert inline. Here’s how:

Add a `dismiss` or an `acknowledge` attribute
That's it!!!
Now clicking the x button will close the alert!!!

## JavaScript behavior
### Triggers

Enable dismissal of an alert via JavaScript:
```js
element.close()
```

Change the alert type:
```js
element.setAttribute('level', 'warning')
```

Remove or add the close button:
```js
element.removeAttribute('dismiss'); // Will remove the attribute
element.setAttribute('acknowledge', 'true');
element.setAttribute('url', 'https://www.joomla.org/');
element.setAttribute('auto-dismiss', '5000');
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
element.addEventListener('joomla.alert.close', function() {alert('Impressed!')} )
```

Add some functonality when the alert is closed (right after the css transition ends):
```js
element.addEventListener('joomla.alert.closed', function() {alert('Very impressive!')} )
```


## Programmatically add a new alert:
Use the following script:


```js
var tempElement = document.createElement('joomla-tab');
tempElement.setAttribute('level', 'success');
tempElement.setAttribute('dismiss', 'true');
tempElement.innerHTML = 'Wow it works!';

document.body.appendChild(tempElement);
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
var tempElement1 = document.querySelector('joomla-tab');
tempElement1.setAttribute('level', 'success');

tempElement1.setAttribute('dismiss', '');
```


### Live example
<joomla-tab id="change-me" level="info" dismiss="true"><strong>Alert:</strong> text goes here</joomla-tab>

<div id="replaceble" markdown="0">
<button role="button" data-opt1="level" value="info">Make it info</button>
<button role="button" data-opt1="level" value="success">Make it success</button>
<button role="button" data-opt1="level" value="warning">Make it warning</button>
<button role="button" data-opt1="level" value="danger">Make it danger</button>
<button role="button" data-opt1="dismiss" value="true">Add close button</button>
<button role="button" data-opt1="dismiss" value="false">Remove close button</button>
</div>




### Programmatically close an alert:
Use the following script:


```js
var tempElement = document.querySelector('joomla-tab');
tempElement.close();
```


### Demo
<joomla-tab id="close-me-with-a-btn" level="danger" acknowledge="true">
<strong>Alert:</strong> Close me with javascript
</joomla-tab>
<p>
<button role="button" id="i-will-close-that-alert">Close the above alert</button>
</p>


<script markdown="0">
var addNew = function() {
    var tempElement = document.createElement('joomla-tab');
    tempElement.setAttribute('level', 'success');
    tempElement.setAttribute('dismiss', 'true');
    tempElement.innerHTML = 'Wow it works!';

    document.getElementById('insert-new-alert').appendChild(tempElement);
}

var changeAlert = function(dataAttr, value) {
    var tempElement = document.getElementById('change-me');
	tempElement.setAttribute(dataAttr, value);
}
var addNewButton = document.getElementById('insertNew'),
    changeButtons = document.querySelectorAll('#replaceble > button');

addNewButton.addEventListener('click', addNew);
document.getElementById('change-me').addEventListener('joomla.alert.close', function() { alert('Seeing is believing. Event "joomla.alert.close" fired!') });
document.getElementById('change-me').addEventListener('joomla.alert.closed', function() {
    document.getElementById('replaceble').innerHTML = '<h4>Oops the alert has been destroyed. This text was initiated using the event "joomla.alert.closed" (the popup used the event "joomla.alert.close"</h4>';
 });

for (var i = 0, l = changeButtons.length; i < l; i++) {
        changeButtons[i].addEventListener('click', function() { changeAlert(this.getAttribute('data-opt1'), this.getAttribute('value')) });
}

document.getElementById('i-will-close-that-alert').addEventListener('click', function(event) { var a = document.getElementById('close-me-with-a-btn');
if (a) a.close(); event.target.setAttribute('disabled', true); event.target.removeEventListener('click', arguments.callee); });

window.someCallbackFunction = function() {
	alert('Custom Functionality Called');
};
</script>
