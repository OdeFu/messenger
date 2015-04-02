Package.describe({
	name: "oaalto:messenger",
	version: "0.0.1", // Brief, one-line summary of the package.
	summary: "An in-app message passing system.", // URL to the Git repository containing the source code for this
	                                              // package.
	git: "", // By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: "README.md"
});

Package.onUse(function (api) {
	api.versionsFrom("1.1");
	api.use(["grigio:babel@0.0.14", "erasaur:meteor-lodash@3.6.0"]);
	api.addFiles("messenger.es6.js");
	api.export("Messenger");
});

Package.onTest(function (api) {
	api.use(["tinytest", "grigio:babel@0.0.14", "erasaur:meteor-lodash@3.6.0"]);
	api.addFiles("messenger.es6.js");
	api.addFiles("messenger-tests.js");
});
