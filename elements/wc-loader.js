(function (window) {
'use strict';
/* Check if ES6 then apply the shim */
var check = function () {
	try {
		eval("var foo = (x)=>x+1");
	} catch (e) {
		return false;
	}
	return true;
};
var es6Shim = "{{POLYFILL_JS}}";
/* Trick so ES5 code won't throw with evergreen browsers */
if (check()) (new Function(es6Shim))();

/* Load webcomponents async */
var loadWC = function() {
	if (Joomla.getOptions && typeof Joomla.getOptions === "function") {
		var wc = Joomla.getOptions('webcomponents', {});
		for (var p in wc) {
			if (wc.hasOwnProperty(p)) {
				var el = document.createElement('script');
				el.src = wc[p];
				document.head.appendChild(el);
			}
		}
	}
};

window.Joomla = Joomla || {};
Joomla.WebComponents = Joomla.WebComponents || {};
var name = 'wc-loader.js', polyfills = [];

if (!('import' in document.createElement('link'))) {
	polyfills.push('hi');
}
if (!('attachShadow' in Element.prototype && 'getRootNode' in Element.prototype) || (window.ShadyDOM && window.ShadyDOM.force)) {
	polyfills.push('sd');
}
if (!window.customElements || window.customElements.forcePolyfill) {
	polyfills.push('ce');
}
if (!('content' in document.createElement('template')) || !window.Promise || !Array.from || !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment)) {
	polyfills = ['lite'];
}

if (polyfills.length) {
	var script = document.querySelector('script[src*="' + name +'"]'),
	    newScript = document.createElement('script'),
	    replacement = 'webcomponents-' + polyfills.join('-') + '.min.js';
	newScript.src = script.src.replace(name, replacement);

	if (document.readyState === 'loading' && ('import' in document.createElement('link'))) {
		document.write(newScript.outerHTML);
	} else {
		document.head.appendChild(newScript);
	}
	document.addEventListener('WebComponentsReady', function () {
		loadWC();
	});
} else {
	var fire = function() {
		requestAnimationFrame(function() {
			Joomla.WebComponents.ready = true;
			document.dispatchEvent(new CustomEvent('WebComponentsReady', {bubbles: true}));
			loadWC();
		});
	};

	if (document.readyState !== 'loading') {
		fire();
	} else {
		document.addEventListener('readystatechange', function wait() {
			fire();
			document.removeEventListener('readystatechange', wait);
		});
	}
}
})(window);
