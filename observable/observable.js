ig.module('plugins.observable').defines(function() {
	function toArray(arrayLike) {
		return Array.prototype.slice.call(arrayLike);
	}

	ig.Class.prototype._listeners = {};

	ig.Class.prototype.on = function(eventName, handler) {
		var listeners = (this._listeners[eventName] = this._listeners[eventName] || []);
		listeners.push(handler);
	};

	ig.Class.prototype.un = function(eventName, handler) {
		var listeners = this._listeners[eventName];

		if (listeners) {
			listeners.erase(handler);
		}
	};

	ig.Class.prototype.fireEvent = function(eventName, varargs) {
		var args = toArray(arguments);
		args.erase(eventName);

		var listeners = this._listeners[eventName];

		if(listeners) {
			for (var i = 0, len = listeners.length; i < len; ++i) {
				listeners[i].apply(this, args);
			}
		}
	};
});


