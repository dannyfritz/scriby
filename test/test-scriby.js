var assert = require('assert');
var Scriby = require('..');
var _ = require('lodash');

suite('Scriby');

test('empty', function() {
	var scriby = new Scriby({
		sources: './test/src'
	});
	var json = scriby.parse();
	console.log(json);
});

