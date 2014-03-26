var assert = require('assert');
var Scriby = require('..');
var _ = require('lodash');

suite('Scriby');

var testOptions = {
	sources: ['test/lib/'],
	output: 'test/docs/'
}

test('defaults', function() {
	var scriby = new Scriby();
	assert.deepEqual(
		scriby.options, {
			sources: ['lib/'],
			output: 'docs/',
			template: null
		}
	);
});

test('parse', function() {
	var scriby = new Scriby(testOptions);
	var json = scriby.parse();
});

test('generateDocs', function() {
	var scriby = new Scriby(testOptions);
	scriby.generateDocuments();
});

// test('generateDocs Scriby', function() {
// 	var scriby = new Scriby({sources: ['lib/'], output: 'docs/'});
// 	scriby.generateDocuments();
// });
