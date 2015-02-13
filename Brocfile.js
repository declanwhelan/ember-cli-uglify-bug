/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
	fingerprint: {
     	enabled:false
   	},
	outputPaths: { 
		app:{
			js:'../../uglify-test/ember-cli-uglify-bug.js'
		},
		vendor:{
			js: '../../uglify-test/vendor.js'
		}
	}
});
module.exports = app.toTree();
