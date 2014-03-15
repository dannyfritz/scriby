var assert = require('assert');
var Scriby = require('..');
var _ = require('lodash');

suite('Scriby');

var testOptions = {
	sources: ['./test/src'],
	output: './test/docs'
}

test('defaults', function() {
	var scriby = new Scriby();
	assert.deepEqual(
		scriby.options, {
			sources: ['./src'],
			output: 'docs'
		}
	);
});

test('parse', function() {
	var scriby = new Scriby(testOptions);
	var json = scriby.parse();
	console.log(json);
});
