/*
 * domex.js
 */

;(function() {
	Object.defineProperty(HTMLElement.prototype, 'html', {
		get: function() {
			return this.innerHTML;
		},
		set: function(html) {
			this.innerHTML = html;
		},
	});
	Object.defineProperty(HTMLElement.prototype, 'text', {
		get: function() {
			return this.textContent;
		},
		set: function(text) {
			this.textContent = text;
		},
	});

	Object.defineProperty(HTMLElement.prototype, 'on', {
		value: function(eventName, listener) {
			this.addEventListener(eventName, listener, false);
			return this;
		},
	});
	Object.defineProperty(HTMLElement.prototype, 'off', {
		value: function(eventName, listener) {
			this.removeEventListener(eventName, listener);
			return this;
		},
	});

	Object.defineProperty(HTMLElement.prototype, 'q', {
		value: function(query) {
			return this.querySelector(query);
		},
	});
	Object.defineProperty(HTMLDocument.prototype, 'q', {
		value: function(query) {
			return this.querySelector(query);
		},
	});
	Object.defineProperty(HTMLDocument.prototype, 'qa', {
		value: function(query) {
			return this.querySelectorAll(query);
		},
	});

	Object.defineProperty(NodeList.prototype, 'toArray', {
		value: function(query) {
			return Array.prototype.slice.call(this);
		},
	});
})();
