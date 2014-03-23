#!/usr/bin/env node

var pkg = require('../package');
var Scriby = require('..');
var argv = require('optimist');

/**
Parses the arguments, creates the options and passes them to `Scriby`.

Usage:
	```sh
	$ scriby <files and directories>
	```

For help:
	```sh
	$ scriby --help
	```

To run scriby with all defaults:
	```sh
	$ scriby
	```

To run scriby on a specific source directory:
	```sh
	$ scriby ./my-awesome-source
	```

To run scriby with a specific output directory:
	```sh
	$ scriby --output ./my-awesome-docs
	```

@class CLI
@module Scriby
*/

argv = argv
	.usage('Usage: $0 <space separated files and directories>')
	.alias('o', 'output')
	.describe('o', 'output directory')
	.argv;

var scriby = new Scriby({
	sources: argv._,
	output: argv.o
});

scriby.parse();
scriby.generateDocumentation();
