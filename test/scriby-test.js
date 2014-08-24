var tape = require('tape');

var Scriby = require('..');

var testOptions = {
	sources: ['test/lib/'],
	output: 'test/docs/'
};

tape.test('Scriby', function (t) {

	t.test('defaults', function(st) {
		var scriby = new Scriby();
		st.deepEqual(
			scriby.options, {
				sources: ['lib/'],
				output: 'docs/',
				template: null
			}
		);
		st.end();
	});

	t.test('parse', function (st) {
		var scriby = new Scriby(testOptions);
		scriby.parse();
		st.end();
	});

	t.test('generateDocs', function (st) {
		var scriby = new Scriby(testOptions);
		scriby.generateDocumentation();
		st.end();
	});

	t.test('generateDocs Scriby', function (st) {
		var scriby = new Scriby({sources: ['lib/'], output: 'docs/'});
		scriby.generateDocumentation();
		st.end();
	});

	t.end();
});
