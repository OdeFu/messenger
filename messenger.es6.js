Messenger = {
	/**
	 * Add a new listener for the given event.
	 *
	 * @param eventName The name of the event to listener to
	 * @param callback The callback that should be called for every event with the given eventName
	 */
	addListener: function (eventName, callback) {
		"use strict";
		check(eventName, String);
		check(callback, Function);

		const list = _getListenerList(eventName);
		list.push(callback);
	},

	/**
	 * Remove the given callback for the given event, if it has been registered.
	 *
	 * @param eventName The name of the event the callback is removed from
	 * @param callback The callback that will be removed
	 */
	removeListener: function (eventName, callback) {
		"use strict";
		check(eventName, String);
		check(callback, Function);

		const list = _getListenerList(eventName);
		_.remove(list, function (listener) {
			return listener === callback;
		});

		if (list.length === 0) {
			delete listeners[eventName];
		}
	},

	/**
	 * Broadcast an event with any number of parameters.
	 *
	 * @param eventName The name of the event to be broadcasted
	 * @param params Any parameters for the event
	 */
	broadcast: function (eventName, ...params) {
		"use strict";
		check(eventName, String);

		const list = _getListenerList(eventName);
		_.each(list, function (listener) {
			listener(...params);
		});
	}
};

// Make testing easier, this is not exported in package.js
listeners = {};

function _getListenerList(eventName) {
	"use strict";

	if (listeners.hasOwnProperty(eventName)) {
		return listeners[eventName];
	}

	listeners[eventName] = [];
	return listeners[eventName];
}
