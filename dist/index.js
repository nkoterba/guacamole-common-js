var fs = require('fs');

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.Guacamole = factory();
	}
}(this, function () {

	// Use the eval function to load and evaluate the guacamole-common.js file, which will now
	// create the local variable Guacamole in this scope, which we can "export" below
	eval(fs.readFileSync('./dist/guacamole-common.js','utf8'));

	// Just return a value to define the module export.
	// This example returns an object, but the module
	// can return a function as the exported value.
	return Guacamole;
}));
