function testFunc() {}

Tinytest.add("Test addListener", function (test) {
	"use strict";

	Messenger.addListener("testEvent", testFunc);

	test.isTrue(listeners.hasOwnProperty("testEvent"), "testEvent was not added to the listeners object.");
	test.equal(listeners["testEvent"][0], testFunc, "The test function was not added to the listener list.");
});

Tinytest.add("Test removeListener", function (test) {
	"use strict";

	Messenger.addListener("testEvent", testFunc);
	Messenger.removeListener("testEvent", testFunc);

	test.isFalse(listeners.hasOwnProperty("testEvent"), "testEvent is still present in the listeners object.");
});

Tinytest.add("Test broadcast", function (test) {
	"use strict";

	function callback(param) {
		test.equal(param, "testParam", "The received parameter was incorrect.");
	}

	Messenger.addListener("testEvent", callback);
	Messenger.broadcast("testEvent", "testParam");
});
