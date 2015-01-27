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

	Object.defineProperty(HTMLElement.prototype, 'append', {
		value: function(child) {
			this.appendChild(child);
			return this;
		},
	});

	Object.defineProperty(HTMLElement.prototype, 'appendTo', {
		value: function(parent) {
			parent.appendChild(this);
			return this;
		},
	});

	Object.defineProperty(HTMLElement.prototype, 'create', {
		value: function(tagName, append) {
			append = (append !== undefined) ? append : true;

			var elm = document.createElement(tagName);
			if (append) {
				this.append(elm);
			}

			return elm;
		},
	});

	Object.defineProperty(HTMLElement.prototype, 'styling', {
		value: function(key, value) {
			this.style[key] = value;
			return this;
		},
	});
	Object.defineProperty(HTMLElement.prototype, 'attributing', {
		value: function(key, value) {
			this.setAttribute(key, value);
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
